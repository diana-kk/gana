var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

//이미지
var girl = Paper.image('../img/girl.png', 0, 0, 145, 200).toDefs();
var parchment = Paper.image('../img/parchment.png', 0, 0, 220, 280).toDefs();

// SVG 외곽선
Paper.rect(0, 0, 360, 640, 6).attr({
  'stroke': 'gray',
  'fill': 'none'
});

// 상단
var topArea = Paper.g();

topArea.ellipse(79, 267, 30, 15).attr({
  'fill': '#dcdcdc'
});

girl.use().transform('t-100, 0').appendTo(topArea).animate({
  transform: 't20, 70'
}, 2000, mina.bounce);
parchment.use().transform('t130, 60').appendTo(topArea);

topArea.rect(170, 108, 140, 60, 10).attr({
  'fill': '#dcdcdc',
  'opacity': 0.8
});

topArea.text(188, 150, '히라가나').click(handler01).attr({
  'font-size': 30,
  'cursor': 'pointer'
});

function handler01() {
  location.replace('h_02_01.html');
}

topArea.rect(170, 208, 140, 60, 10).attr({
  'fill': '#dcdcdc',
  'opacity': 0.8
});

topArea.text(188, 250, '가타카나').click(handler02).attr({
  'font-size': 30,
  'cursor': 'pointer'
});

function handler02() {
  location.replace('g_02_01.html');
}
