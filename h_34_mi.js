var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

//이미지
var h_mise = Paper.image('img/h_mise.jpg', 0, 0, 110, 90).toDefs();
var hidari = Paper.image('img/hidari.png', 0, 0, 25, 23).toDefs();
var migi = Paper.image('img/migi.png', 0, 0, 33, 25).toDefs();

// SVG 외곽선
Paper.rect(0, 0, 360, 640, 6).attr({
  'stroke': 'gray',
  'fill': 'none'
});

// 상단
var topArea = Paper.g();

// 행
topArea.text(22, 57, 'あ').click(handler01).attr({
  'font-size': 20,
  'fill': 'gray',
  'cursor': 'pointer'
});

function handler01() {
  location.replace('h_03_aa.html');
}

topArea.text(22, 107, 'か').click(handler02).attr({
  'font-size': 20,
  'fill': 'gray',
  'cursor': 'pointer'
});

function handler02() {
  location.replace('h_08_ka.html');
}

topArea.text(22, 157, 'さ').click(handler03).attr({
  'font-size': 20,
  'fill': 'gray',
  'cursor': 'pointer'
});

function handler03() {
  location.replace('h_13_sa.html');
}

topArea.text(22, 207, 'た').click(handler04).attr({
  'font-size': 20,
  'fill': 'gray',
  'cursor': 'pointer'
});

function handler04() {
  location.replace('h_18_ta.html');
}

topArea.text(22, 257, 'な').click(handler05).attr({
  'font-size': 20,
  'fill': 'gray',
  'cursor': 'pointer'
});

function handler05() {
  location.replace('h_23_na.html');
}

topArea.text(22, 307, 'は').click(handler06).attr({
  'font-size': 20,
  'fill': 'gray',
  'cursor': 'pointer'
});

function handler06() {
  location.replace('h_28_ha.html');
}

topArea.text(22, 407, 'や').click(handler07).attr({
  'font-size': 20,
  'fill': 'gray',
  'cursor': 'pointer'
});

function handler07() {
  location.replace('h_38_ya.html');
}

topArea.text(22, 457, 'ら').click(handler08).attr({
  'font-size': 20,
  'fill': 'gray',
  'cursor': 'pointer'
});

function handler08() {
  location.replace('h_41_ra.html');
}

topArea.text(22, 507, 'わ').click(handler09).attr({
  'font-size': 20,
  'fill': 'gray',
  'cursor': 'pointer'
});

function handler09() {
  location.replace('h_46_wa.html');
}

topArea.text(22, 557, 'ん').click(handler10).attr({
  'font-size': 20,
  'fill': 'gray',
  'cursor': 'pointer'
});

function handler10() {
  location.replace('h_48_nn.html');
}

// 행의 해당 문자
topArea.circle(30, 350, 20).attr({
  'fill': '#ececec',
  'stroke-width': 2
});
topArea.text(22, 357, 'ま').click(hanlderLine).attr({
  'font-size': 20,
  'font-weight': 'bold',
  'cursor': 'pointer'
});

function hanlderLine() {
  location.replace('h_33_ma.html');
}

// 라인
topArea.line(62, 30, 62, 570).attr({
  'stroke': 'gray',
  'stroke-dasharray': '10 5'
});

// 하단
var bottomArea = Paper.g();

// 단
var t11 = ['ま', 'み', 'む', 'め', 'も'];
for (var i = 0; i < t11.length; i++) {
  bottomArea.circle(105 + (i * 53), 50, 20).attr({
    'fill': '#FCF5D4'
  });
  bottomArea.text(97 + (i * 53), 57, t11[i]).attr({
    'font-size': 20,
    'fill': 'gray'
  });
}

// 단의 해당 문자
bottomArea.circle(158, 50, 20).attr({
  'fill': '#FCF5D4',
  'stroke': '#A1D8C8',
  'stroke-width': 3
});
bottomArea.text(150, 57, 'み').attr({
  'font-size': 20,
  'font-weight': 'bold'
});

// 학습 문자
bottomArea.circle(211, 205, 80).click(playAud01).attr({
  'stroke': '#A1D8C8',
  'stroke-width': 8,
  'fill': '#FCF5D4',
  'cursor': 'pointer'
});

bottomArea.text(171, 240, 'み').click(playAud01).attr({
  'font-size': 100,
  'cursor': 'pointer'
});

function playAud01() {
  var audio1 = new Audio('aud/aud_34_mi.wav');
  audio1.play();
}

// 단어
bottomArea.rect(100, 370, 222, 170, 5).attr({
  'stroke': '#A1D8C8',
  'stroke-width': 3,
  'fill': 'white'
});

h_mise.use().transform('t130 390').click(playAud02).appendTo(bottomArea).attr({
  'cursor': 'pointer'
});

var t12 = bottomArea.text(200, 520, ['み', 'せ', '가게']).click(playAud02).attr({
  'font-size': 25,
  'cursor': 'pointer'
});
t12.selectAll('tspan')[1].attr({
  x: 223,
  'fill': 'gray'
});
t12.selectAll('tspan')[2].attr({
  x: 260,
  'font-size': 22
});

function playAud02() {
  var audio2 = new Audio('aud/aud_34_mise.wav');
  audio2.play();
}

Paper.line(0, 592, 360, 592).attr({
  'stroke': '#9ab9ff',
  'stroke-width': 3
});

Paper.line(0, 592, 360, 592).attr({
  'stroke': '#9ab9ff',
  'stroke-width': 3
});

// 페이지 이동
hidari.use().transform('t15, 602').click(handlerPre).appendTo(Paper).attr({
  'cursor': 'pointer'
});

function handlerPre() {
  location.replace('h_02_01.html');
}

migi.use().transform('t315, 603').click(handlerAft).appendTo(Paper).attr({
  'cursor': 'pointer'
});

function handlerAft() {
  location.replace('h_35_mu.html');
}
