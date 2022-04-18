'use strict';

/**
 * 配列
*/



// 値を3つ保持する配列
// 長さ3の新しい配列（Array）を作成している
const array01 = new Array(3);

// 配列の[n]番目に値を格納する
// n：添え字、インデックス。整数でないといけない
array01[0] = 1;
array01[1] = 2;
array01[2] = 3;
console.log(array01);


// 配列のn番目にアクセスする
console.log(array01[1]);




// 配列に格納する値には数値、文字列、真偽値、関数、配列なんでも入れることができる
const array02 = new Array(3);
array02[0] = '文字列が入ります';
array02[1] = true;
array02[2] = array01;

console.log(array02);



// ↑のやり方だとコードが長くなってしまう



// 配列の一般的な簡易記法
const array03 = [1, 2, 3, 5]; // コードの中に直接値を記述する方法（リテラル）
console.log(array03);


// constと配列
array03[2] = 10;
console.log(array03);
// 別の配列に付け替えることはできないが、同じひとつの配列の中身を変えることはできる
// constキーワードは、配列の中身の固定については保証しない





/**
 * ループと配列
 * 配列は性質上、ループと非常に相性がいい
 * forループのカウンタと、配列の添え字を連動させたコードはよく使われる
*/

// for文
const length = 20;
const roopArray = new Array(length);

for(let i = 0; i < length; i++) {
  roopArray[i] = i; // 配列のi番目に数値iを格納する
}
console.log(roopArray);


// for-of文
// カウンタ変数が不要な場合に使ったりする
const ofArray = [1, 2, 3, 4, 5];

// ofArrayから順番に要素を取り出し、変数elementに代入している
for(const element of ofArray){
  console.log(element);
}




/**
 * 例題
 * 配列[1, 3, 5, 7, 9, 11, 13, 15, 17, 19]と
 * 配列[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]を作成し、
 * それぞれのi番目同士の和を配列sumのi番目に格納せよ。
 * また、配列sumをコンソール上に表示せよ。
*/

const arrayLength = 10;
const arrayType01 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const arrayType02 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const arraySum = new Array(arrayLength); // ★配列sumも作成しておく

for(let i = 0; i < arrayType01.length; i++) {
  // 間違いconst arraySum[i] = arrayType01[i] + arrayType02[i];　ここで変数arraySumを使ったら、forの外で使えない
  arraySum[i] = arrayType01[i] + arrayType02[i];
  console.log(`${arrayType01[i]}と${arrayType02[i]}の和は${arraySum}です。`);
}
console.log(arraySum);