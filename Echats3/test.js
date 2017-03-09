function init(){
DrawBackGroudImg();
var chat = echarts.init(document.getElementById("main"));
		var colorsA = ['#C0C0C0', '#FFF0F5', '#C0C0C0', '#FFF0F5', '#C0C0C0'];
		var option = {
			title: {
				left: 'center',
				top: 20,
				textStyle: {
					color: '#ccc'
				}
			},

			tooltip: {
				show: false,
				trigger: 'item',
				formatter: "{a} <br/>{b} : {c} ({d}%)"
			},
			series: [

				{
					type: 'pie',
					radius:110,
					startAngle: 180,
					center: ['50%', '100%'],
					data: [{
						value: 400,
						name: '直接访问'
					}, {
						value: 400,
						name: '邮件营销'
					}, {
						value: 400,
						name: '联盟广告'
					}, {
						value: 400,
						name: '视频广告'
					}, {
						value: 400,
						name: '搜索引擎'
					}, {
						value: 400,
						name: '百度引擎'
					}, {
						value: 0,
						name: ''
					}, {
						value: 0,
						name: ''
					}, {
						value: 0,
						name: ''
					}, {
						value: 0,
						name: ''
					}, {
						value: 0,
						name: ''
					}, {
						value: 0,
						name: ''
					}],
					hoverAnimation: false,
					roseType: 'area',
					label: {
						normal: {
							show: false
						}
					},
					labelLine: {
						normal: {
							show: false
						}
					},
					itemStyle: {
						normal: {
							color: function(params) {
								return colorsA[params.dataIndex];
							},
							borderColor: '#F5F5F5',
							borderWidth: 2,
							opacity: 0.08
						}
					}
				}, {

					type: 'pie',
					radius: [88, 88],
					center: ['50%', '100%'],
					data: [{
						value: 0,
						name: ''
					}],
					startAngle: 180,
					hoverAnimation: false,
					label: {
						normal: {
							show: false
						}
					},
					labelLine: {
						normal: {
							show: false
						}
					},
					itemStyle: {
						normal: {
							borderColor: 'white',
							borderWidth: 1,
							borderType: 'dashed',
							opacity: 0.2
						}
					}
				}, {

					type: 'pie',
					radius: [66, 66],
					startAngle: 100,
					center: ['50%', '100%'],
					data: [{
						value: 0,
						name: ''
					}],
					hoverAnimation: false,
					label: {
						normal: {
							show: false
						}
					},
					labelLine: {
						normal: {
							show: false
						}
					},
					itemStyle: {
						normal: {
							borderColor: 'white',
							borderWidth: 1,
							borderType: 'dashed',
							opacity: 0.2
						}
					}
				}, {

					type: 'pie',
					radius: [44, 44],
					startAngle: 100,
					center: ['50%', '100%'],
					data: [{
						value: 0,
						name: ''
					}],
					hoverAnimation: false,
					roseType: 'area',
					label: {
						normal: {
							show: false
						}
					},
					labelLine: {
						normal: {
							show: false
						}
					},
					itemStyle: {
						normal: {
							color: function(params) {
								return colorsA[params.dataIndex];
							},
							borderColor: 'white',
							borderWidth: 1,
							borderType: 'dashed',
							opacity: 0.2
						}
					}
				}, {

					type: 'pie',
					radius: [22, 22],
					startAngle: 100,
					center: ['50%', '100%'],
					data: [{
						value: 0,
						name: ''
					}],
					hoverAnimation: false,
					roseType: 'area',
					label: {
						normal: {
							show: false
						}
					},
					labelLine: {
						normal: {
							show: false
						}
					},
					itemStyle: {
						normal: {
							color: function(params) {
								return colorsA[params.dataIndex];
							},
							borderColor: 'white',
							borderWidth: 1,
							borderType: 'dashed',
							opacity: 0.2
						}
					}
				}, {
					name: '访问来源',
					type: 'pie',
					radius: 100,
					startAngle: 180,
					center: ['50%', '100%'],
					z:3,
					data: [{
						value: 205,
						name: ''
					}, {
						value: 320,
						name: ''
					}, {
						value: 234,
						name: ''
					}, {
						value: 300,
						name: ''
					}, {
						value: 330,
						name: ''
					}, {
						value: 100,
						name: ''
					}, {
						value: 0,
						name: ''
					}, {
						value: 0,
						name: ''
					}, {
						value: 0,
						name: ''
					}, {
						value: 0,
						name: ''
					}, {
						value: 0,
						name: ''
					}, {
						value: 0,
						name: ''
					}],
					roseType: 'area',
					label: {
						normal: {
							show: false
						}
					},
					labelLine: {
						normal: {
							show: false
						}
					},
					itemStyle: {
						normal: {
							color: function(params) {
								return colorsA[params.dataIndex];
							},
							borderColor: 'white',
							borderWidth: 0,
							opacity: 0.3
						}
					},
					animationType: 'scale',
					animationEasing: 'elasticOut',
					animationDelay: function(idx) {
						return Math.random() * 200;
					}
				},
			]
		};
		chat.setOption(option);
		function DrawBackGroudImg() {
			var data = ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎", "百度引擎"];
			var elm = document.getElementById("cav1");
			var circleData = { x: elm.clientWidth/2, y: elm.clientHeight, r: 130 };
			if(elm.getContext) {
				var canvas = elm.getContext('2d');
				var len = data.length;
				var dataAngle = Math.PI / len;
				canvas.translate(circleData.x,circleData.y);
				for(var j = 0; j < len; j++) {
					var beginAngle = j * dataAngle+Math.PI;
					var word = data[j];
					var lens = word.length;
					for(var i = 0; i < lens; i++) {
						canvas.save();
						var letter = word[i];
						var letterAngle = dataAngle / (lens+1);
						var startAngle = beginAngle + (i+1) * letterAngle;
						canvas.fillStyle = 'black';
						canvas.font = '10px 微软雅黑';
						canvas.textAlign = 'right';
						canvas.textBaseline = 'middle';
						canvas.translate(circleData.r * Math.cos(startAngle), circleData.r * Math.sin(startAngle));
						canvas.rotate(startAngle + Math.PI / 2);
						canvas.fillText(letter, 0, 0);
						canvas.restore();
					}
				}

			}
		}};