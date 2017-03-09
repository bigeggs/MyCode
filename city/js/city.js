function InitDom(parent, canvas, echarts) {
	echarts.style.width = parent.clientWidth + 'px';
	echarts.style.height = parent.clientHeight - 44 + 'px';
	canvas.setAttribute('width', echarts.clientWidth);
	canvas.setAttribute('height', echarts.clientHeight);
	return { x: echarts.clientWidth / 2, y: echarts.clientHeight / 2 };
};

function CircleInit() {
	var data = [{ value: 400, name: '陵水市' }, { value: 360, name: '琼海市' }, { value: 200, name: '海口市' }, { value: 380, name: '文昌市' }, { value: 120, name: '临高县' }, { value: 350, name: '万宁市' }, { value: 390, name: '三亚市' }, { value: 60, name: '五指山市' }];
	var pdiv = $(".loop_right")[0];
	var canvasdiv = document.getElementById('cav1');
	var echartsdiv= document.getElementById('loop_circle');
	var circleArr = InitDom(pdiv, canvasdiv, echartsdiv);
	var max = circleArr.x > circleArr.y? circleArr.y : circleArr.x;
	var colorsA = ['#417D9E', '#8DAED0', '#417D9E', '#8DAED0', '#417D9E', '#8DAED0', '#417D9E', '#8DAED0'];
	var option = {
		baseOption: {
			timeline: {
				show: false,
				orient: 'vertical',
				autoPlay: true,
				inverse: false,
				playInterval: 2000,
				data: [1, 2]
			}
		},
		options: [{
				series: [{
					name: '访问来源',
					type: 'pie',
					radius: max * 0.75,
					center: ['50%', '50%'],
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
					animationEasing: 'bounceOut',
					animationDelay: function(idx) {
						return Math.random() * 500;
					}
				}]
			},
			{
				series: [{
					data: []
				}]
			}
		]
	};

	function DrawBackGroudImg() {
		var dataname = data.map(function(node) { return node.name });
		if(canvasdiv.getContext) {
			var canvas = canvasdiv.getContext('2d');
			var newradius = max * 0.8;
			canvas.translate(circleArr.x, circleArr.y);
			var nextradius = newradius / 5;
			while(nextradius <= newradius) {
				canvas.beginPath();
				canvas.lineWidth = nextradius == newradius ? 7 : 1;
				canvas.strokeStyle = '#285374';
				canvas.arc(0, 0, nextradius, 0, Math.PI * 2, false);
				canvas.stroke();
				nextradius += newradius / 5;
			}
			var len = dataname.length;
			var dataAngle = Math.PI * 2 / len;
			for(var i = 0; i < len; i++) {
				var words = dataname[i];
				var pieAngle = dataAngle * i; //扇形起始角度
				var eachAngle = dataAngle / 2; // 每次旋转角度

				//画刻度
				for(var a = 0; a < 120; a++) {
					canvas.lineWidth = 0.3;
					canvas.strokeStyle = '#5CA4C4';
					canvas.moveTo(newradius - 2, 0);
					canvas.lineTo(newradius, 0);
					canvas.rotate(Math.PI * 2 / 120);
				}

				//画直线
				canvas.fillStyle = '#22496A';
				canvas.lineWidth = 0.2;
				canvas.moveTo(0, 0);
				canvas.lineTo(newradius, 0);
				canvas.stroke();

				//画线头
				canvas.beginPath();
				canvas.lineWidth = pieAngle % (Math.PI / 2) == 0 ? 3.5 : 1.5;
				var remove = pieAngle % (Math.PI / 2) == 0 ? 3 : 5;
				canvas.strokeStyle = '#5CA4C4';
				canvas.lineCap = "round";
				canvas.moveTo(newradius, 0);
				canvas.lineTo(newradius + remove, 0);
				canvas.stroke();

				//画线头的球
				canvas.fillStyle = '#4785A6';
				canvas.arc(newradius + 12, 0, 5, 0, Math.PI * 2, false);
				canvas.fill();

				canvas.rotate(eachAngle); //绕1/2扇形

				//画扇形横线
				canvas.beginPath();
				canvas.lineWidth = 3;
				canvas.strokeStyle = '#5CA4C4';
				canvas.lineCap = "round";
				canvas.moveTo(newradius + 8, -8);
				canvas.lineTo(newradius + 8, 8);
				canvas.stroke();

				//写字
				canvas.save();
				canvas.fillStyle = '#417D9E';
				canvas.font = 'bold 14px 微软雅黑';
				canvas.textAlign = Math.cos(eachAngle + pieAngle) > 0 ? 'left' : 'right';
				canvas.textBaseline = 'middle';
				canvas.translate(max, 0);
				canvas.rotate(-eachAngle - pieAngle);
				canvas.fillText(words, 0, 0);
				canvas.restore();
				canvas.rotate(eachAngle);
			}

		}

	};
	var chat = echarts.init(echartsdiv);
	chat.setOption(option);
	DrawBackGroudImg();
}

function HouseType() {
	var pdiv = $(".like_right")[0];
	var canvasdiv = document.getElementById('cav2');
	var echartsdiv = document.getElementById('housetype_circle');
	var circleArr = InitDom(pdiv, canvasdiv, echartsdiv);
	var data = [
		{ value: 335, name: '一居' },
		{ value: 310, name: '二居' },
		{ value: 234, name: '三居' },
		{ value: 135, name: '四居' },
		{ value: 548, name: '五居' },
		{ value: 148, name: '六居' }
	];
	var colorsB = ['#2A5788', '#5883AE', '#8CADD0', '#2A5788', '#5883AE', '#8CADD0'];
	var options = {
		baseOption: {
			timeline: {
				show: false,
				orient: 'vertical',
				autoPlay: true,
				inverse: false,
				playInterval: 1500,
				data: [1, 2]
			}
		},
		options: [{
			series: [{
				type: 'pie',
				radius: ['45%', '56%'],
				center: ['50%', '40%'],
				data: data,
				label: {
					normal: {
						textStyle: {
							color: '#2A8DB4',
							fontSize: 15
						}

					}
				},
				labelLine: {
					normal: {
						length: 15,
						length2: 30,
						lineStyle: {
							color: '#5883AE'
						}
					}
				},
				itemStyle: {
					normal: {
						color: function(params) {
							return colorsB[params.dataIndex];
						},
						opacity: 0.9
					}
				},
			}]
		}, {
			series: [{
				data: [],
			}]
		}]
	};

	function DrawBack() {
		if(canvasdiv.getContext) {
			var cavs = canvasdiv.getContext('2d');
			cavs.translate(circleArr.x, circleArr.y * 0.8);
			var img = new Image();
			var imgw = circleArr.y / 2.1;
			img.src = 'images/person.png';
			img.onload = function() {
				cavs.drawImage(img, -imgw / 2, -1.4 * imgw / 2, imgw, 1.4 * imgw);
			};
			cavs.drawImage(img, -imgw / 2, -1.4 * imgw / 2, imgw, 1.4 * imgw);
		}
	}
	DrawBack();
	var chat2 = echarts.init(echartsdiv);
	chat2.setOption(options);

}