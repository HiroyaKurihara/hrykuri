'use strict';

function addButtonClick() {
    // 指定セレクタの要素を取得
    let origin = document.querySelector("#id_origin_0");
    // 複製
    let elem = origin.cloneNode(true);
    // （id取得の場合）id属性を削除
    elem.removeAttribute("id"); //id取得でない場合この行を削除
    let i = 0;
    while (document.getElementById("id_origin_" + String(i)) != null) { i++; }
    elem.id = "id_origin_" + String(i);

    elem.children[3].dataset.index = String(i);//特定子要素のid変更したい
    // 指定要素の末尾に複製したノードを追加
    document.querySelector("#parent").appendChild(elem);
}

let button = document.getElementById('add');
button.onclick = addButtonClick;

function clearButtonClick(e) {
    console.log(e.currentTarget.getAttribute('dataset'));
    // let origin = document.querySelector("#id_origin_" + e.dataset.index);
    // origin.remove();
}