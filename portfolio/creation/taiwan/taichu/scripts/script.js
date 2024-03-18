'use strict'

setTimeout( ()=> {
  document.getElementById( "main2" ).remove();
  let div = document.querySelector('div');
  div.classList.remove('hidden')
  div = document.querySelector('div')
  }, 600 );
  const images = ['../images/flag.svg','../images/logoType.svg','../images/logo_Facebook.png','../images/logo_Instagram.png','../images/logo_Twitter.png','../images/midashiBack.png','./images/taichuLogo.svg','./images/attractionKoubi.png','./images/attractionKoubiSub.png','./images/attractionSaikou.png','./images/attractionSaikouSub.png','./images/museumShintenchi.png','./images/modalShintenchi1.png','./images/modalShintenchi2.png','./images/museumAsia.png','./images/modalAsia1.png','./images/modalAsia2.png','./images/museumKin.png','./images/modalKin1.png','./images/modalKin2.png','./images/museumBungaku.png','./images/modalBungaku1.png','./images/modalBungaku2.png','./images/sweetsMiyahara.png','./images/sweetsMiyaharaSub1.png','./images/sweetsMiyaharaSub2.png','./images/sweetsMiyaharaTea.png','./images/heroFulltaichu.svg','./images/heroFulltaichu_pc.svg','./images/attractionKoubiSub_pc.png'];
  images.forEach(function(item, index) {
      preloadImage(item);
  });
  function preloadImage(path) {
      let imgTag = document.createElement('img');
      imgTag.src = path;
  }

$(function(){
			$("#drawerToggle").click(function(){
				$(this).toggleClass("spOpen");
				$(this).toggleClass("open");
				$("#globalNav").toggleClass("spOpen");
			});
});

// モーダルウィンドウ

// 変数に要素を入れる
const trigger = $('.modal__trigger'),
    wrapper = $('.modal__wrapper'),
    layer = $('.modal__layer'),
    container = $('.modal__container'),
    close = $('.modal__close');

// 『モーダルを開くボタン』をクリックしたら、『モーダル本体』を表示
$(trigger).click(function() {
  const index = $(this).index();
  $(wrapper).eq(index).fadeIn(400);

  // スクロール位置を戻す
  $(container).scrollTop(0);

  // サイトのスクロールを禁止にする
  $('html, body').css('overflow', 'hidden');
});

// 『背景』と『モーダルを閉じるボタン』をクリックしたら、『モーダル本体』を非表示
$(layer).add(close).click(function() {
  $(wrapper).fadeOut(400);

  // サイトのスクロール禁止を解除する
  $('html, body').removeAttr('style');
});
// モーダルウインドウここまで