'use strict'

setTimeout( ()=> {
  document.getElementById( "main2" ).remove();
  let div = document.querySelector('div');
  div.classList.remove('hidden')
  div = document.querySelector('div')
  }, 600 );
  const images = ['../images/drawerIcon.svg','../images/footerLogo.png','../images/logo_Facebook.png','../images/logo_Instagram.png','../images/logo_Twitter.png','../images/logoType.svg','../images/midashiBack.png','../images/modalClose.png','../images/taiwan.svg','../images/taiwanFlag.png','../images/topBottun.png','../images/z_flag.jpg','../images/z_kazari.png'];
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