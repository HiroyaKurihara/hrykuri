'use strict'

setTimeout(() => {
    document.getElementById("main2").remove();
    let div = document.querySelector('div');
    div.classList.remove('hidden')
    div = document.querySelector('div')
}, 600);
const images = ['./images/drawerIcon.svg', './images/footerLogo.png', './images/logo_Facebook.png', './images/logo_Instagram.png', './images/logo_Twitter.png', './images/logoType.svg', './images/midashiBack.png', './images/modalClose.png', './images/taiwan.svg', './images/taiwan_hero.png', './images/taiwan_heroLogo.png', './images/taiwanFlag.png', './images/TOP_1A.jpg', './images/TOP_1A_back.jpg', './images/TOP_1B.jpg', './images/TOP_1B_back.jpg', './images/TOP_2A.jpg', './images/TOP_2B.jpg', './images/TOP_2C.jpg', './images/TOP_2D.jpg', './images/TOP_2E.png', './images/TOP_3.png', './images/TOP_4A.jpg', './images/TOP_4B.jpg', './images/topBottun.png', './images/z_flag.jpg', './images/z_kazari.png', './images/flag.svg', './images/logo.svg', './images/taiwan_heroPc.png', './images/taiwan_heroLogoPc.png', './images/TOP_2E.jpg', './images/TOP_3A.png', './images/TOP_3.png', './images/TOP_3C.png'];
images.forEach(function (item, index) {
    preloadImage(item);
});
function preloadImage(path) {
    let imgTag = document.createElement('img');
    imgTag.src = path;
}

$(function () {
    $("#drawerToggle").click(function () {
        $(this).toggleClass("spOpen");
        $(this).toggleClass("open");
        $("#globalNav").toggleClass("spOpen");
    });
});

// スクロールイベント
// const hscroll = document.getElementById('hscroll');
// 左端からのスクロール位置を返します。
// hscroll.scrollLeft;

const slide = document.getElementById('slide');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const indicator = document.getElementById('indicator');
const lists = document.querySelectorAll('.list');
const totalSlides = lists.length;
let count = 0;
let autoPlayInterval;
function updateListBackground() {
    for (let i = 0; i < lists.length; i++) {
        lists[i].style.backgroundColor = i === count % totalSlides ? '#000' : '#777575';
    }
}
function nextClick() {
    slide.classList.remove(`slide${count % totalSlides + 1}`);
    count++;
    slide.classList.add(`slide${count % totalSlides + 1}`);
    updateListBackground();
}
function prevClick() {
    slide.classList.remove(`slide${count % totalSlides + 1}`);
    count--;
    if (count < 0) count = totalSlides - 1;
    slide.classList.add(`slide${count % totalSlides + 1}`);
    updateListBackground();
}
function startAutoPlay() {
    autoPlayInterval = setInterval(nextClick, 3000);
}
function resetAutoPlayInterval() {
    clearInterval(autoPlayInterval);
    startAutoPlay();
}
next.addEventListener('click', () => {
    nextClick();
    resetAutoPlayInterval();
});
prev.addEventListener('click', () => {
    prevClick();
    resetAutoPlayInterval();
});
indicator.addEventListener('click', (event) => {
    if (event.target.classList.contains('list')) {
        const index = Array.from(lists).indexOf(event.target);
        slide.classList.remove(`slide${count % totalSlides + 1}`);
        count = index;
        slide.classList.add(`slide${count % totalSlides + 1}`);
        updateListBackground();
        resetAutoPlayInterval();
    }
});
if (window.matchMedia('(min-width:768px)').matches) { startAutoPlay(); }

// スクロールに合わせてインジケーターが動く（スマホ）
let ulDummy = document.getElementById('ulDummy');
$('#ulDummy').scroll(function () {
    if (window.matchMedia('(max-width: 767px)').matches) {
        if (ulDummy.scrollLeft < 116) { count = 0; }
        if (141 < ulDummy.scrollLeft && ulDummy.scrollLeft < 436) { count = 1; }
        if (462 < ulDummy.scrollLeft && ulDummy.scrollLeft < 755) { count = 2; }
        if (780 < ulDummy.scrollLeft && ulDummy.scrollLeft < 1076) { count = 3; }
        if (1100 < ulDummy.scrollLeft) { count = 4; }
        updateListBackground();
    }
});
// スクロールイベントここまで