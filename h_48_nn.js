var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

//이미지
var h_tonnbo = Paper.image('img/h_tonnbo.jpg', 0, 0, 60, 60).toDefs();
var h_onnna = Paper.image('img/h_onnna.jpg', 0, 0, 60, 70).toDefs();
var h_rinngo = Paper.image('img/h_rinngo.jpg', 0, 0, 60, 68).toDefs();
var h_honn = Paper.image('img/h_honn.jpg', 0, 0, 60, 60).toDefs();
var hidari = Paper.image('img/hidari.png', 0, 0, 25, 23).toDefs();
var migi = Paper.image('img/migi.png', 0, 0, 33, 25).toDefs();

// SVG 외곽선
Paper.rect(0, 0, 360, 640, 6).attr({
  'stroke': 'gray',
  'fill': 'none'
});

// 페이지 이동
var topBox = Paper.g();

topBox.path('M1 45 L359 45 L359 0 Q358 1 358 1 L1 1').attr({
  'fill': '#ECECEC'
});

hidari.use().transform('t16, 11').click(handlerPre).appendTo(topBox).attr({
  'cursor': 'pointer'
});

function handlerPre() {
  location.replace('h_02_01.html');
}

migi.use().transform('t315, 10').click(handlerPre).appendTo(topBox).attr({
  'cursor': 'pointer'
});

// 상단
var topArea = Paper.g();

// 행
topArea.text(22, 87, 'あ').click(handler01).attr({
  'font-size': 20,
  'fill': 'gray',
  'cursor': 'pointer'
});

function handler01() {
  location.replace('h_03_aa.html');
}

topArea.text(22, 137, 'か').click(handler02).attr({
  'font-size': 20,
  'fill': 'gray',
  'cursor': 'pointer'
});

function handler02() {
  location.replace('h_08_ka.html');
}

topArea.text(22, 187, 'さ').click(handler03).attr({
  'font-size': 20,
  'fill': 'gray',
  'cursor': 'pointer'
});

function handler03() {
  location.replace('h_13_sa.html');
}

topArea.text(22, 237, 'た').click(handler04).attr({
  'font-size': 20,
  'fill': 'gray',
  'cursor': 'pointer'
});

function handler04() {
  location.replace('h_18_ta.html');
}

topArea.text(22, 287, 'な').click(handler05).attr({
  'font-size': 20,
  'fill': 'gray',
  'cursor': 'pointer'
});

function handler05() {
  location.replace('h_23_na.html');
}

topArea.text(22, 337, 'は').click(handler06).attr({
  'font-size': 20,
  'fill': 'gray',
  'cursor': 'pointer'
});

function handler06() {
  location.replace('h_28_ha.html');
}

topArea.text(22, 387, 'ま').click(handler07).attr({
  'font-size': 20,
  'fill': 'gray',
  'cursor': 'pointer'
});

function handler07() {
  location.replace('h_33_ma.html');
}

topArea.text(22, 437, 'や').click(handler08).attr({
  'font-size': 20,
  'fill': 'gray',
  'cursor': 'pointer'
});

function handler08() {
  location.replace('h_38_ya.html');
}

topArea.text(22, 487, 'ら').click(handler09).attr({
  'font-size': 20,
  'fill': 'gray',
  'cursor': 'pointer'
});

function handler09() {
  location.replace('h_41_ra.html');
}

topArea.text(22, 537, 'わ').click(handler10).attr({
  'font-size': 20,
  'fill': 'gray',
  'cursor': 'pointer'
});

function handler10() {
  location.replace('h_46_wa.html');
}

// 행의 해당 문자
topArea.circle(30, 580, 20).attr({
  'fill': '#ececec',
  'stroke-width': 2
});
topArea.text(22, 587, 'ん').click(hanlderLine).attr({
  'font-size': 20,
  'font-weight': 'bold',
  'cursor': 'pointer'
});

function hanlderLine() {
  location.reload();
}

// 라인
topArea.line(62, 60, 62, 600).attr({
  'stroke': 'gray',
  'stroke-dasharray': '10 5'
});

// 하단
var bottomArea = Paper.g();

// 단의 해당 문자
bottomArea.circle(211, 80, 20).attr({
  'fill': '#FCF5D4',
  'stroke': '#A1D8C8',
  'stroke-width': 3
});
bottomArea.text(203, 87, 'ん').attr({
  'font-size': 20,
  'font-weight': 'bold'
});

// 학습 문자
bottomArea.circle(211, 215, 80).click(playAud01).attr({
  'stroke': '#A1D8C8',
  'stroke-width': 8,
  'fill': '#FCF5D4',
  'cursor': 'pointer'
});

bottomArea.text(171, 250, 'ん').click(playAud01).attr({
  'font-size': 100,
  'cursor': 'pointer'
});

function playAud01() {
  var audio1 = new Audio('aud/aud_48_nn.wav');
  audio1.play();
}

// 단어
for (var i = 0; i < 4; i++) {
  bottomArea.rect(80 + (i % 2) * 140, 330 + Math.floor(i / 2) * 140, 125, 125, 5).attr({
    'stroke': '#A1D8C8',
    'stroke-width': 3,
    'fill': 'white'
  });
}

h_tonnbo.use().transform('t117 342').click(playAud02).appendTo(bottomArea).attr({
  'cursor': 'pointer'
});

var t01 = bottomArea.text(88, 442, ['と', 'ん', 'ぼ', '잠자리']).click(playAud02).attr({
  'font-size': 23,
  'fill': 'gray',
  'cursor': 'pointer'
});
t01.selectAll('tspan')[1].attr({
  x: 107,
  'fill': 'black'
});
t01.selectAll('tspan')[2].attr({
  x: 127
});
t01.selectAll('tspan')[3].attr({
  x: 156,
  y: 441,
  'font-size': 16,
  'fill': 'black'
});

function playAud02() {
  var audio2 = new Audio('aud/aud_48_tonnbo.wav');
  audio2.play();
}

h_onnna.use().transform('t250 342').click(playAud03).appendTo(bottomArea).attr({
  'cursor': 'pointer'
});

var t02 = bottomArea.text(233, 442, ['お', 'ん', 'な', '여자']).click(playAud03).attr({
  'font-size': 23,
  'fill': 'gray',
  'cursor': 'pointer'
});
t02.selectAll('tspan')[1].attr({
  x: 253,
  'fill': 'black'
});
t02.selectAll('tspan')[2].attr({
  x: 272
});
t02.selectAll('tspan')[3].attr({
  x: 300,
  y: 441,
  'font-size': 16,
  'fill': 'black'
});

function playAud03() {
  var audio3 = new Audio('aud/aud_48_onna.wav');
  audio3.play();
}

h_rinngo.use().transform('t110 480').click(playAud04).appendTo(bottomArea).attr({
  'cursor': 'pointer'
});

var t03 = bottomArea.text(93, 582, ['り', 'ん', 'ご', '사과']).click(playAud04).attr({
  'font-size': 23,
  'fill': 'gray',
  'cursor': 'pointer'
});
t03.selectAll('tspan')[1].attr({
  x: 112,
  'fill': 'black'
});
t03.selectAll('tspan')[2].attr({
  x: 132
});
t03.selectAll('tspan')[3].attr({
  x: 161,
  y: 580,
  'font-size': 16,
  'fill': 'black'
});

function playAud04() {
  var audio4 = new Audio('aud/aud_48_rinngo.wav');
  audio4.play();
}

h_honn.use().transform('t250 483').click(playAud05).appendTo(bottomArea).attr({
  'cursor': 'pointer'
});

var t04 = bottomArea.text(248, 582, ['ほ', 'ん', '책']).click(playAud05).attr({
  'font-size': 23,
  'fill': 'gray',
  'cursor': 'pointer'
});
t04.selectAll('tspan')[1].attr({
  x: 269,
  'fill': 'black'
});
t04.selectAll('tspan')[2].attr({
  x: 300,
  y: 581,
  'font-size': 16,
  'fill': 'black'
});

function playAud05() {
  var audio5 = new Audio('aud/aud_48_honn.wav');
  audio5.play();
}
