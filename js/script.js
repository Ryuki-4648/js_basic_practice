'use strict';


// 型を知りたいとき
let hoge01 = 46;
let hoge02 = "46";
console.log(typeof hoge01);
console.log(typeof hoge02);


console.log('▼ 変数');

/**
 * 変数
 */

// 一般的に値は変数に代入して用いる
let height = 1.7; // 変数を宣言する
let weight = 60;
let bmi = weight/(height * height);
console.log(`bmi: ${bmi}`);

// 変数の宣言前に変数を使おうとするとエラーになる
// console.log(hogehoge);
// Uncaught ReferenceError: hogehoge is not defined


console.log('▼ インクリメントとデクリメント');

/**
 * インクリメントとデクリメント
*/
let myAge = 28;
console.log(myAge);

myAge++;
console.log(myAge);

myAge--;
console.log(myAge);

let myOld = 28;
myOld += 5; // myOld = myOld + 5 と同じ意味
console.log(myOld);

myOld -= 3; // myOld = myOld - 3 と同じ意味
console.log(myOld);


// 変数宣言だけして、代入を行わない場合
let fuga;
console.log(`fuga: ${fuga}`); // undefinedになる

console.log('▼ 真偽値');

/**
 * 真偽値
*/

const thisIsTrue = true;
const thisIsFalse = false;
console.log(thisIsTrue);
console.log(thisIsFalse);

const oneSide = thisIsTrue || thisIsFalse; // 片方でもtrueなら結果がtrueに 両方がfalseなら結果はfalseに
const bothSide = thisIsTrue && thisIsFalse; // 両方がtrueなら結果がtrueに、片方でもfalseならfalseに
console.log(`oneSide: ${oneSide}`);
console.log(`bothSide: ${bothSide}`);

console.log('▼ 比較演算子');

/**
 * 比較演算子
*/

// ===と!==は全ての型の値に対して使用可能
const comparison1 = 1 === 1; // true
const comparison2 = 2 !== 3; // true
const comparison3 = 10 < 100; // true
console.log(comparison1);
console.log(comparison2);
console.log(comparison3);

const x = 5;
const comparison4 = 1 < x && x < 3; // false
console.log(comparison4);



/**
 * 例題
*/

const pi = 3.14;
const radius = 5;
const area = radius * radius * pi ;
console.log(`半径が${radius}の円の面積は${area}になります。`);



/**
 * 条件分岐とループ
*/

const value = 12;
if(value % 2 === 0) { // 2で割ったときのあまりが「0」のとき＝偶数
  console.log(`${value}は偶数です。`);
} else { // それ以外＝奇数
  console.log(`${value}は奇数です。`);
}



/**
 * Switch文
*/
const mode01 = 1;
if (mode01 === 0) {
  console.log('モード0です');
} else if (mode01 === 1) {
  console.log('モード1です');
} else if (mode01 === 2) {
  console.log('モード2です');
} else {
  console.log('無効なモードです');
}

const mode02 = 1;
switch(mode02) {
  case 0:
    console.log('モード0です');
    break;
    // switch文を終わる。break命令によって明示的にswitch文を終了させないといけない
    // break命令を書き忘れると、その下のcase 1まで実行されてしまう（フォールする―）
  case 1:
    console.log('モード1です');
    break;
  case 2:
    console.log('モード2です');
    break;
  default: // その他の場合(どのcaseにも一致しなかった場合)
    console.log('無効なモードです');
}



/**
 * while(ループ)　すぐ無限ループになって止まったりする
*/

let count = 0;
while(count < 10) {
  console.log(`while文:今は${count + 1}回目のループです。`);
  count++;

  // countが5になったら抜け出す
  if(count === 5) {
    break;
  }
}

let counter = 0;
while(counter < 10) {
  console.log(`while文:今は${counter + 1}回目のループです。`);
  counter++
  continue; // while文の先頭まで戻る
  console.log('ここは実行されない');
}



/**
 * for(ループ)
 * 3つの部品からなる for(変数の初期化; ループ条件; 変数の変化)
 * 部品のうち好きなものを省略することができる。「;」は省略不可！
*/

for(let count = 0; count < 10; count++) {
  console.log(`for文:今は${count+1}回目のカウントです`);
}


/**
 * 例題
 * 例題：0から10までの間の数を順番にコンソールに表示。
 * ただし「0は偶数です」「1は奇数です」などというように、偶数奇数のどちらであるかについても表示。
*/

for(let num = 0; num <= 10; num++) {
  if(num % 2 === 0) {
    console.log(`${num}は偶数です。`);
  } else {
    console.log(`${num}は奇数です。`);
  }
}




/**
 * 変数のスコープ（有効範囲）
*/

const scopeCheck = 10;

if(scopeCheck > 5){
  const message = `${scopeCheck}は5よりも大きい。`;
}

// console.log(message); Uncaught ReferenceError: message is not defined
// 変数「message」にアクセスできない

// しかしブロックの外で宣言された変数は、ブロックの中からアクセスすることが可能


for(let i =0; i < 10; i++){
  const sq = i * i; // 各繰り返しごとにループ内で宣言した変数が無効になる
  console.log(`sq(${i} * ${i}の結果): ${sq}`);
}