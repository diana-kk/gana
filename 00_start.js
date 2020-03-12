var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

//이미지
var bi = Paper.image('../img/bi.jpg', 0, 0, 260, 38).toDefs();
var start = Paper.image('../img/start.png', 0, 0, 170, 210).toDefs();

// SVG 외곽선
Paper.rect(0, 0, 360, 640, 6).attr({
  'stroke': 'gray',
  'fill': 'none'
});

// 상단
var topArea = Paper.g();

bi.use().transform('t50, 40').appendTo(topArea);

topArea.text(180, 135, '오십음도').attr({
  'font-size': 38,
  'text-anchor': 'middle'
});

start.use().transform('t95, 180').appendTo(topArea);

var r1 = topArea.rect(50, 480, 260, 50, 5).attr({
  'fill': '#ffe2c5'
});
var t1 = topArea.text(180, 512, '들 어 가 기').attr({
  'font-size': 17,
  'text-anchor': 'middle',
  'font-weight': 'bold'
});

var rt1 = topArea.g(r1, t1).click(handler01).attr({
  'cursor': 'pointer'
});

function handler01() {
  location.replace('01_menu.html');
}
