function PieInit(data) {
	var div = document.getElementById("main");
	var max = div.clientHeight > div.clientWidth / 2 ? div.clientWidth / 2 : div.clientHeight;
	var chat = echarts.init(document.getElementById("main"));
	var data = [{ value: 300, name: '直接访问' }, { value: 400, name: '邮件营销' }, { value: 280, name: '联盟广告' }, { value: 360, name: '视频广告' }, { value: 380, name: '搜索引擎' }, { value: 190, name: '百度引擎' }, { value: 0, name: '' }, { value: 0, name: '' }, { value: 0, name: '' }, { value: 0, name: '' }, { value: 0, name: '' }, { value: 0, name: '' }];
	var colorsA = ['#C0C0C0', '#FFF0F5', '#C0C0C0', '#FFF0F5', '#C0C0C0'];
	var option = {
		baseOption: {
			timeline: {
				show: false,
				axisType: 'category',
				orient: 'vertical',
				autoPlay: true,
				inverse: true,
				playInterval: 2000,
				left: null,
				right: 0,
				top: 20,
				bottom: 20,
				width: 55,
				height: null,
				label: {
					normal: {
						textStyle: {
							color: '#999'
						}
					},
					emphasis: {
						textStyle: {
							color: '#fff'
						}
					}
				},
				symbol: 'none',
				lineStyle: {
					color: '#555'
				},
				checkpointStyle: {
					color: '#bbb',
					borderColor: '#777',
					borderWidth: 2
				},
				controlStyle: {
					showNextBtn: false,
					showPrevBtn: false,
					normal: {
						color: '#666',
						borderColor: '#666'
					},
					emphasis: {
						color: '#aaa',
						borderColor: '#aaa'
					}
				},
				data: [1, 2]
			}
		},
		options: [{
			series: [{
				type: 'pie',
				radius: [max * 0.64, max * 0.64],
				center: ['50%', '95%'],
				data: data,
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
						opacity: 0.1
					}
				}
			}, {

				type: 'pie',
				radius: [max * 0.48, max * 0.48],
				startAngle: 180,
				center: ['50%', '95%'],
				data: data,
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
						opacity: 0.1
					}
				}
			}, {

				type: 'pie',
				radius: [max * 0.32, max * 0.32],
				startAngle: 180,
				center: ['50%', '95%'],
				data: data,
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
						opacity: 0.1
					}
				}
			}, {

				type: 'pie',
				radius: [max * 0.16, max * 0.16],
				startAngle: 180,
				center: ['50%', '95%'],
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
						opacity: 0.1
					}
				}
			}, {
				name: '访问来源',
				type: 'pie',
				radius: max * 0.75,
				startAngle: 180,
				center: ['50%', '95%'],
				z: 3,
				data: data,
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
			}]
		}, {
			series: [{
				type: 'pie',
				radius: [max * 0.64, max * 0.64],
				center: ['50%', '95%'],
				data: [],
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
						opacity: 0.1
					}
				}
			}, {

				type: 'pie',
				radius: [max * 0.48, max * 0.48],
				startAngle: 180,
				center: ['50%', '95%'],
				data: [],
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
						opacity: 0.1
					}
				}
			}, {

				type: 'pie',
				radius: [max * 0.32, max * 0.32],
				startAngle: 180,
				center: ['50%', '95%'],
				data: [],
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
						opacity: 0.1
					}
				}
			}, {

				type: 'pie',
				radius: [max * 0.16, max * 0.16],
				startAngle: 180,
				center: ['50%', '95%'],
				data: [],
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
						opacity: 0.1
					}
				}
			}, {
				name: '访问来源',
				type: 'pie',
				radius: max * 0.75,
				startAngle: 180,
				center: ['50%', '95%'],
				z: 3,
				data: [],
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
			}]
		}]
	};

	function DrawBackGroudImg(id) {
		var dataname = data.map(function(node) { return node.name });
		var elm = document.getElementById(id);
		elm.setAttribute('width', div.clientWidth);
		elm.setAttribute('height', div.clientHeight);
		var circleData = { x: div.clientWidth / 2, y: div.clientHeight * 0.95, r: max * 0.95 };
		if(elm.getContext) {
			var canvas = elm.getContext('2d');
			var len = dataname.length / 2;
			var dataAngle = Math.PI / len;
			var newradius = max * 0.8;
			canvas.translate(circleData.x, circleData.y);
			canvas.beginPath();
			canvas.strokeStyle = '#606C82';
			canvas.lineWidth = 1;
			canvas.arc(0, 0, newradius, Math.PI, Math.PI * 2, false);
			canvas.stroke();
			//画底边点
			var pr = -newradius,
				mr = newradius / 40;
			while(pr <= newradius) {
				canvas.beginPath();
				canvas.fillStyle = '#606C82';
				canvas.lineWidth = 3;
				canvas.moveTo(pr - mr, newradius * 0.05);
				canvas.lineTo(pr + mr, newradius * 0.05);
				canvas.stroke();
				pr += newradius / 5;
			}
			for(var j = 0; j < len + 1; j++) {
				var beginAngle = j * dataAngle + Math.PI;
				var word = dataname[j];
				var lens = word.length;

				canvas.rotate(j === 0 ? Math.PI : dataAngle);
				//画直线
				canvas.fillStyle = '#606C82';
				canvas.lineWidth = 0.2;
				canvas.moveTo(0, 0);
				canvas.lineTo(newradius, 0);
				canvas.stroke();
				//画线头
				canvas.beginPath();
				canvas.lineWidth = 3;
				var remove = 4;
				canvas.strokeStyle = '#D9DFE6';
				canvas.lineCap = "round";
				canvas.moveTo(newradius, 0);
				canvas.lineTo(newradius + remove, 0);
				canvas.stroke();

				//画扇形横线

				//写字
				var pieWidth = circleData.r * 0.85 * Math.sin(dataAngle);
				for(var m = 1; m < 4; m++) {
					canvas.save();
					canvas.rotate(dataAngle / 4 * m);
					canvas.beginPath();
					if(m === 2) {
						canvas.save();
						canvas.fillStyle = '#606C82';
						canvas.font = '8px 微软雅黑';
						canvas.textAlign = 'center';
						canvas.textBaseline = 'middle';
						canvas.translate(newradius + 5, 0);
						canvas.rotate(Math.PI / 2);
						canvas.fillText("0" + (j + 1), 0, 0);
						canvas.restore();
					} else {
						canvas.lineWidth = 1;
						canvas.strokeStyle = '#606C82';
						canvas.lineCap = "round";
						canvas.moveTo(newradius + 5, -pieWidth * 0.1);
						canvas.lineTo(newradius + 5, pieWidth * 0.1);
						canvas.stroke();
					}

					canvas.restore();
				}

				//写字
				for(var i = 0; i < lens; i++) {
					canvas.save();
					var letter = word[i];
					var letterAngle = dataAngle / (lens + 1);
					var startAngle = (i + 1) * letterAngle;
					canvas.fillStyle = '#51B6D7';
					canvas.font = '12px 微软雅黑';
					canvas.textAlign = 'center';
					canvas.textBaseline = 'middle';
					canvas.rotate(startAngle);
					canvas.translate(circleData.r * 0.97, 0);
					canvas.rotate(Math.PI / 2);
					canvas.fillText(letter, 0, 0);
					canvas.restore();
				}

			}

		}
	}
	DrawBackGroudImg("cav1");
	DrawBackGroudImg("cav2");
	chat.setOption(option);
	echarts.init(document.getElementById("main2")).setOption(option);
}