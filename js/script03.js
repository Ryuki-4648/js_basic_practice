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