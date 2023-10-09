"use strict";
// // 1行目に記載している 'use strict' は削除しないでください

//  ----------------------------------------------------------
// 　今日の運勢
//  ----------------------------------------------------------


function uranai() {
  // console.log("🎃");
  let health = ["🧡🧡🧡🧡🧡", "🧡🧡🧡🧡", "🧡🧡🧡", "🧡🧡", "🧡", "💔"];
  let i = Math.floor( Math.random() * health.length) ;
  document.getElementsByClassName("health")[0].innerText = health[i];

  let money = ["💴💴💴💴💴", "💴💴💴💴", "💴💴💴", "💴💴", "💴", "💸"];
  let j = Math.floor( Math.random() * money.length) ;
  document.getElementsByClassName("money")[0].innerText = money[j];

  let work = ["😀😀😀😀😀", "🙂🙂🙂🙂", "😶😶😶", "😵😵", "😱", "🤮", "💀"];
  let k = Math.floor( Math.random() * work.length) ;
  document.getElementsByClassName("work")[0].innerText = work[k];

  document.getElementsByClassName("comment")[0].innerText = "Have a wonderful day!!";

  document.getElementById("gif").innerHTML =  '<img src="https://usagif.com/wp-content/uploads/gify/barbie-animated-usagif-22.gif">';  
}

const target = document.getElementsByClassName("button")[0];
target.addEventListener("click", uranai);
