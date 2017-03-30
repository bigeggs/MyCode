var mongodb = require('./db');
var markdown = require('markdown').markdown;
var ObjectID = require('mongodb').ObjectID;

function Post(name, title, tags, post) {
	this.name = name;
	this.title = title;
	this.tags = tags;
	this.post = post;
}
module.exports = Post;

//�洢һƪ���¼��������Ϣ
Post.prototype.save = function (callback) {
	var date = new Date();
	//�洢����ʱ���ʽ�������Ժ���չ
	var time = {
		date : date,
		year : date.getFullYear(),
		month : date.getFullYear() + "-" + (date.getMonth() + 1),
		day : date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate(),
		minute : date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " +
		date.getHours() + ":" + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes())
	}
	//Ҫ�������ݿ���ĵ�
	var post = {
		name : this.name,
		time : time,
		title : this.title,
		tags : this.tags,
		post : this.post,
		comments : [],
		pv : 0
	};

	//�����ݿ�
	mongodb.open(function (err, db) {
		if (err) {
			return callback(err);
		}
		//��ȡ posts ����
		db.collection('posts', function (err, collection) {
			if (err) {
				mongodb.close();
				return callback(err);
			}
			//���ĵ����� posts ����
			collection.insert(post, {
				safe : true
			}, function (err) {
				mongodb.close();
				if (err) {
					return callback(err); //ʧ�ܣ����� err
				}
				callback(null); //���� err Ϊ null
			});
		});
	});
};

//��ȡ���¼��������Ϣ
Post.getAll = function (name, callback) {
	//�����ݿ�
	mongodb.open(function (err, db) {
		if (err) {
			return callback(err);
		}
		//��ȡ posts ����
		db.collection('posts', function (err, collection) {
			if (err) {
				mongodb.close();
				return callback(err);
			}
			var query = {};
			if (name) {
				query.name = name;
			}
			//���� query �����ѯ����
			collection.find(query).sort({
				time : -1
			}).toArray(function (err, docs) {
				mongodb.close();
				if (err) {
					return callback(err); //ʧ�ܣ����� err
				}
				docs.forEach(function (doc) {
					doc.post = markdown.toHTML(doc.post);
				});
				callback(null, docs); //�ɹ�����������ʽ���ز�ѯ�Ľ��
			});
		});
	});
};
//��ȡһƪ����
Post.getOne = function (_id, callback) {
	//�����ݿ�
	mongodb.open(function (err, db) {
		if (err) {
			return callback(err);
		}
		//��ȡ posts ����
		db.collection('posts', function (err, collection) {
			if (err) {
				mongodb.close();
				return callback(err);
			}
			//�����û������������ڼ����������в�ѯ
			collection.findOne({
				"_id" : new ObjectID(_id)
			}, function (err, doc) {
				if (err) {
					mongodb.close();
					return callback(err);
				}
				if (doc) {
					collection.update({
						"_id" : new ObjectID(_id)
					}, {
						$inc : {
							"pv" : 1
						}
					}, function (err) {
						mongodb.close();
						if (err) {
							return callback(err);
						}
					});
					//���� markdown Ϊ html
					doc.post = markdown.toHTML(doc.post);
					if (doc.comments) {
						doc.comments.forEach(function (comment) {
							comment.content = markdown.toHTML(comment.content);

						});
					}
				}

				callback(null, doc); //���ز�ѯ��һƪ����
			});
		});
	});
};

//һ�λ�ȡʮƪ����
Post.getTen = function (name, currentpage, pagesize, callback) {
	//�����ݿ�
	mongodb.open(function (err, db) {
		if (err) {
			return callback(err);
		}
		//��ȡ posts ����
		db.collection('posts', function (err, collection) {
			if (err) {
				mongodb.close();
				return callback(err);
			}
			var query = {};
			if (name) {
				query.name = name;
			}

			//ʹ�� count �����ض���ѯ���ĵ��� total
			collection.count(query, function (err, total) {
				//���� query �����ѯ��������ǰ (page-1)*10 �����������֮��� 10 �����
				collection.find(query, {
					skip : (currentpage - 1) * pagesize,
					limit : pagesize
				}).sort({
					time : -1
				}).toArray(function (err, docs) {
					mongodb.close();
					if (err) {
						return callback(err);
					}
					//���� markdown Ϊ html
					docs.forEach(function (doc) {
						doc.post = markdown.toHTML(doc.post);
					});
					callback(null, docs, total, pagesize);
				});
			});
		});
	});
};

//����ԭʼ��������ݣ�markdown ��ʽ��
Post.edit = function (name, day, title, callback) {
	//�����ݿ�
	mongodb.open(function (err, db) {
		if (err) {
			return callback(err);
		}
		//��ȡ posts ����
		db.collection('posts', function (err, collection) {
			if (err) {
				mongodb.close();
				return callback(err);
			}
			//�����û������������ڼ����������в�ѯ
			collection.findOne({
				"name" : name,
				"time.day" : day,
				"title" : title
			}, function (err, doc) {
				mongodb.close();
				if (err) {
					return callback(err);
				}
				callback(null, doc); //���ز�ѯ��һƪ���£�markdown ��ʽ��
			});
		});
	});
};
//����һƪ���¼��������Ϣ
Post.update = function (name, day, title, post, callback) {
	//�����ݿ�
	mongodb.open(function (err, db) {
		if (err) {
			return callback(err);
		}
		//��ȡ posts ����
		db.collection('posts', function (err, collection) {
			if (err) {
				mongodb.close();
				return callback(err);
			}
			//������������
			collection.update({
				"name" : name,
				"time.day" : day,
				"title" : title
			}, {
				$set : {
					post : post
				}
			}, function (err) {
				mongodb.close();
				if (err) {
					return callback(err);
				}
				callback(null);
			});
		});
	});
};
//ɾ��һƪ����
Post.remove = function (name, day, title, callback) {
	//�����ݿ�
	mongodb.open(function (err, db) {
		if (err) {
			return callback(err);
		}
		//��ȡ posts ����
		db.collection('posts', function (err, collection) {
			if (err) {
				mongodb.close();
				return callback(err);
			}
			//�����û��������ںͱ�����Ҳ�ɾ��һƪ����
			collection.remove({
				"name" : name,
				"time.day" : day,
				"title" : title
			}, {
				w : 1
			}, function (err) {
				mongodb.close();
				if (err) {
					return callback(err);
				}
				callback(null);
			});
		});
	});
};
//�����������´浵��Ϣ
Post.getArchive = function (callback) {
	//�����ݿ�
	mongodb.open(function (err, db) {
		if (err) {
			return callback(err);
		}
		//��ȡ posts ����
		db.collection('posts', function (err, collection) {
			if (err) {
				mongodb.close();
				return callback(err);
			}
			//����ֻ���� name��time��title ���Ե��ĵ���ɵĴ浵����
			collection.find({}, {
				"name" : 1,
				"time" : 1,
				"title" : 1
			}).sort({
				time : -1
			}).toArray(function (err, docs) {
				mongodb.close();
				if (err) {
					return callback(err);
				}
				callback(null, docs);
			});
		});
	});
};
//�������б�ǩ
Post.getTags = function (callback) {
	mongodb.open(function (err, db) {
		if (err) {
			return callback(err);
		}
		db.collection('posts', function (err, collection) {
			if (err) {
				mongodb.close();
				return callback(err);
			}
			//distinct �����ҳ������������в�ֵͬ
			collection.distinct("tags", function (err, docs) {
				mongodb.close();
				if (err) {
					return callback(err);
				}
				callback(null, docs);
			});
		});
	});
};
//���غ����ض���ǩ����������
Post.getTag = function (tag, callback) {
	mongodb.open(function (err, db) {
		if (err) {
			return callback(err);
		}
		db.collection('posts', function (err, collection) {
			if (err) {
				mongodb.close();
				return callback(err);
			}
			//��ѯ���� tags �����ڰ��� tag ���ĵ�
			//������ֻ���� name��time��title ��ɵ�����
			collection.find({
				"tags" : tag
			}, {
				"name" : 1,
				"time" : 1,
				"title" : 1
			}).sort({
				time : -1
			}).toArray(function (err, docs) {
				mongodb.close();
				if (err) {
					return callback(err);
				}
				callback(null, docs);
			});
		});
	});
};
//����ͨ������ؼ��ֲ�ѯ������������Ϣ
Post.search = function (keyword, callback) {
	mongodb.open(function (err, db) {
		if (err) {
			return callback(err);
		}
		db.collection('posts', function (err, collection) {
			if (err) {
				mongodb.close();
				return callback(err);
			}
			var pattern = new RegExp("^.*" + keyword + ".*$", "i");
			collection.find({
				"title" : pattern
			}, {
				"name" : 1,
				"time" : 1,
				"title" : 1
			}).sort({
				time : -1
			}).toArray(function (err, docs) {
				mongodb.close();
				if (err) {
					return callback(err);
				}
				callback(null, docs);
			});
		});
	});
};
