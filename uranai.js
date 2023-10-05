"use strict";
// // 1行目に記載している 'use strict' は削除しないでください

console.log("繋がったよ！")


//  ----------------------------------------------------------
// 　今日の運勢
//  ----------------------------------------------------------

function uranai() {
  // console.log("🎃");
  let unsei = ["🧡🧡🧡🧡🧡", "💛💛💛💛", "💚💚💚", "💙💙", "💜", "💔"];
  let i = Math.floor( Math.random() * unsei.length) ;
  document.getElementsByClassName("bluebox")[0].innerText = unsei[i];
}

const target = document.getElementsByClassName("button")[0];
target.addEventListener("click", uranai);
