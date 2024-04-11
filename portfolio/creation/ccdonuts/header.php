<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>PHP Sample Programs</title>
<link rel="stylesheet" href="common/reset.css">
<link rel="stylesheet" href="styles/style.css">
</head>
<body>
<?php
echo '<div class="hback">
<nav class="gMenu" alt="nav領域">
    <input class="menu-btn" type="checkbox" id="menu-btn">
    <label class="menu-icon" for="menu-btn">
        <span class="navicon"></span>
    </label>
    <ul class="menu">
        <img src="images/logoDrawerMenu.png" alt="Drawer Menu Logo" class="drawer-menu-logo">
        <label class="backslash-slash-container" for="menu-btn">
            <img src="images/backSlashDrawerMenu.png" alt="backSlash" class="backslash">
            <img src="images/slashDrawerMenu.png" alt="slash" class="slash">
        </label>
        <li><a href="#concept">TOP</a></li>
        <li><a href="#service">商品一覧</a></li>
        <li><a href="#flow">よくある質問</a></li>
        <li><a href="#q&a">問い合わせ</a></li>
        <li><a href="#contact">当サイトのポリシー</a></li>
    </ul>
</nav>
<div class="logoLoginCart">
    <!-- スマートフォン用のロゴ -->
    <div class="logoHeader">
        <img src="images/logoHeader.png" alt="Logo Header for Smartphone" class="logo-smartphone">
        <img src="images/PClogoHeader.png" alt="Logo Header for PC" class="logo-pc">
    </div>
    <!-- スマートフォン用のログインヘッダー -->
    <span class="loginHeader">
        <img src="images/loginHeader.png" alt="Login Header for Smartphone" class="logo-smartphone">
        <img src="images/PCloginHeader.png" alt="Login Header for PC" class="logo-pc">
        <p class="textLoginCart">ログイン</p>
    </span>
    <!-- スマートフォン用のカートヘッダー -->
    <span class="loginCart">
        <img src="images/cartHeader.png" alt="Cart Header for Smartphone" class="cart-smartphone">
        <img src="images/PCcartHeader.png" alt="Cart Header for PC" class="cart-pc">
        <p class="textLoginCart">カート</p>
    </span>
</div>
<div class="searchWindowGroup">
    <span class="searchIconFrame"><img src="images/bugGlassesHeader.png" class="searchIcon"></span><input
        type="text" class="searchWindow">
</div>
</div>
<div class="headerFrameSub"></div>';
?>