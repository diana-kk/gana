  var SVG = Snap('#my-svg');

  // 최상위 그룹
  var Paper = SVG.g();

  //이미지
  var girl = Paper.image('img/girl.png', 0, 0, 145, 200).toDefs();
  var neko = Paper.image('img/neko.png', 0, 0, 110, 140).toDefs();
  var parchment = Paper.image('img/parchment.png', 0, 0, 220, 520).toDefs();

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

  girl.use().transform('t20, 70').appendTo(topArea);
  neko.use().transform('t95, 415, r-15').appendTo(topArea);
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
    'stroke': 'skyblue',
    'stroke-width': 3,
    'opacity': 0.8
  });

  topArea.text(188, 250, '가타카나').attr({
    'font-family': 'Times New Roman',
    'font-size': 30,
    'font-weight': 'bold',
    'cursor': 'pointer'
  });

  // 하단
  var bottomArea = Paper.g();

  var t1R = bottomArea.rect(170, 440, 140, 60, 35).attr({
    'fill': 'none',
    'stroke': '#ffd7b5',
    'stroke-width': 3
  });

  var t1T = bottomArea.text(200, 482, '시 작 !').attr({
    'font-size': 32
  });

  var t1 = Paper.g(t1R, t1T).click(handler02).attr({
    'cursor': 'pointer'
  });

  function handler02() {
    location.replace('g_03_aa.html');
  }

  // var t2R = bottomArea.rect(170, 455, 140, 60, 35).attr({
  //   'fill': 'none',
  //   'stroke': '#ffd7b5',
  //   'stroke-width': 3
  // });
  //
  // // var t2T = bottomArea.text(215, 490, '테스트').attr({
  // //   'font-size': 18
  // // });
  // //
  // // var t2 = Paper.g(t2R, t2T).attr({
  // //   'cursor': 'pointer'
  // // });
