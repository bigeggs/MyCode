var body = document.body;
var h1 = document.createElement("h1");
h1.innerHTML = 'moduleBPart';
body.appendChild(h1);
var js = document.scripts;
var p = document.createElement("p");
p.innerHTML = '<p>（此文件路径' + js[js.length - 1].src + ') < /p>';
body.appendChild(p);