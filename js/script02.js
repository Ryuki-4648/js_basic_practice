'use strict';

/**
 * 関数とは
 * function 関数名(受け取る値につける名前)
 * 定義した関数は「関数名(渡す値)」の書式で呼び出す ＝ 関数呼び出し
 * 
 * ざっくり：具体的なコードをまとめ、名前をつけて、抽象化する
*/

function f(x) { // 関数fの定義。関数fは引数xを受け取る
  return x + 1; // 戻り値。xに1を足したものを返却する
}

const y = f(0); // 関数呼び出し。関数fに任意の数値を渡す
console.log(`変数yは${y}である。`);

// 定義の段階では実際には実行されない。関数が実行されるのは、実際に関数を呼び出したとき！！




/**
 * 値を受け取る関数
*/
const greetingFunc = (name) => {
  return `私の名前は${name}です。`;
}

console.log(greetingFunc('田中花子'));

const myName = '山田太郎';
const greeting = greetingFunc(myName);
console.log(greeting);



const isEven = (n) => {
  return n % 2 === 0; // 真偽値を返す
}
const num = 12;

if(isEven(num)) {
  console.log(`${num}は偶数です。`);
} else {
  console.log(`${num}は奇数です。`);
}




/**
 * 複数の値を受け取る関数
 * 複数の引数を定義するときは、コンマで区切る
 * 返り値は複数にすることはできず、必ずひとつ
*/

const add = (a, b) => {
  return a + b;
}
const sum = add(4, 6);
console.log(`変数sumの値は${sum}です。`);




/**
 * 引数がゼロ個の関数(入力が存在しない関数)
*/

const ten = () => {
  return 10;
}
const value = ten(); // 関数を呼び出すときはうしろに()をつける
console.log(value); // 常に10が返される




/**
 * 何も値を返さない関数
 * 何も値を返さない関数は、何もreturnしない
*/

// 値を返さずコンソールに表示するだけの関数
const plusOne = (x) => {
  console.log(`${x} + 1は${x + 1}だ。`);
}
plusOne(46); // 関数の呼び出し。関数の実行。

// ★★ returnがない関数も一応は最終的に値として評価されるが、「undefined」として評価される
// → 実行結果を変数に代入する意味がない
const plusOne2 = (x) => {
  console.log(`${x} + 1は${x + 1}だ。`);
}
const value2 = plusOne2(50);
console.log(value2); // undefined


// 値を返さない場合でも、returnを書くことは可能
const hello = (n) => {
  console.log('hello');
  return;
}
hello();



const total = (end) => {
  let res = 0;
  for(let i = 1; i <= end; i++) {
    res += i; // 1 + 2 + 3 + 4 + ... 10 
  }
  return res;
}

console.log('1から任意の自然数を順番に足したときの合計は' + total(10));




/**
 * 途中でreturnする
*/

// 素数かどうかを判定する関数
// *素数＝正の約数が1とその数自身である約数で、1でない自然数のこと
const isPrime = (n) => {
  if(n % 2 ===0) {
    return false; // 偶数の場合はfalseで終了させる
  }

  // 奇数の場合
  for(let i = 3; i < n; i += 2) { // 1は素数でないので、3からスタート。2ずつ足していく。
    if(n % i === 0) {
      return false; // 割り切れる数がある場合はfalseで終了
    }
  }

  return true;
}

console.log(isPrime(3331));
console.log(isPrime(4444));


console.log('----- 関数のスコープ -----');

/**
 * 関数のスコープ
 * 引数も変数も、関数を抜けた時点で有効範囲が終わる
*/

const func = () => {
  const number = 10;
  console.log(number);
}

func();
// console.log(number); ReferenceError: number is not defined


// 関数同士で引数や変数の名前が被っても問題ない
const funcA = (x) => {
  const result = x + 1;
  return result;
}

const funcB = (x) => {
  const result = x - 1;
  return result;
}
console.log(funcA(5));
console.log(funcB(5));




/**
 * 定義の巻き上げ
 * 関数の定義は、スコープの先頭まで自動的に巻き上げられる
 * 
 * 巻き上げ＝定義だけが先頭に移動されること
*/

// 定義前に関数を呼び出す
const z = m(0);
console.log(z);

// あとから関数を定義する
function m(x) {
  return x + 1;
}
/**
 * この書き方だとエラーになったエラーになった
 * const m = (x) => {
 *  return x + 1;
 * }
 * 
 * Cannot access 'm' before initialization
 * 
 * 通常関数：巻き上げ可能
 * アロー関数：巻き上げ不可（let,constを使う場合）
 */




/**
 * 値渡し
*/

const plusTwo = (x) => {
  x += 2; // 受け取ったxに2を加算して代入している
  return x;
}

const settingNum = 10;
const numPlusTwo = plusTwo(settingNum); // 変数そのものではなく、「10」を渡しているだけ
console.log(settingNum); // 10 変数settingNum自体は10のまま
console.log(numPlusTwo); // 12 （10に2を加算されたもの）




/**
 * 例題
*/

const toHeisei = (settingYear) => {
  const heiseiStart = 1989;

  const isHeisei = settingYear - heiseiStart + 1;
  console.log(`西暦${settingYear}年は平成${isHeisei}年です。`);
}

toHeisei(2000);
toHeisei(2017);



/**
 * 関数の利点
 * 
 * 複雑な処理を関数に隔離してしまうことで、本来のコードの流れが清潔に保たれる
 * 処理に名前をつけられるので、何の処理が行われているかわかりやす
 * 
 * スコープを作るため、関数内で定義され多変数が外に漏れださない　バグが減る
 * 
 * 繰り返しを避ける　DRY原則（Don’t Repeat Yourself; 同じことを繰り返すな）
 * 命令をまとめる
 * ※重複コードはできる限り取り除くというのが、プログラミングにおける一般常識
 * 
 * 何度でも呼び出すことができる
*/









/**
 * 関数の応用的な使い方
*/

console.log('----- デフォルト引数 -----');

/**
 * デフォルト引数
*/

// 一部の引数を省略できる。＝をつけてデフォルト値を設定できる
let printSum = (a, b, withText = false) => {
  const sum = a + b;

  if(withText) {
    console.log(`${a}と${b}の和は${sum}です。`);
  } else {
    console.log(sum);
  }
}

printSum(4, 6);
printSum(5, 7, true);





console.log('----- 再帰関数 -----');

/**
 * 再帰関数
*/

// 自分自身を呼び出す

let fact = (n) => {
  if(n === 1) { 
    return 1;
  }
  return n * fact(n - 1); // 自分自身を呼び出す
}

console.log(fact(1));
console.log(fact(4)); // 4 * 3 * 2 * 1 = 24
console.log(fact(8));





/**
 * 値としての関数
*/

// 1）関数を変数に代入するパターン
function func01() {
  console.log('func01 Hello');
}

const myFunc01 = func01;
// 「関数func01」を変数myFunc01に代入する
// 関数を値として扱っているので、後ろにカッコ()がつかない

myFunc01(); // 代入した関数を「実行」する



// 2）名前のない関数（無名関数）を代入するパターン
const func02 = function(){
  console.log('func02 Hello');
}

func02(); // 変数func02に代入された無名関数を実行する
// 巻き上げは行われない





console.log('----- アロー関数 -----');

// 3）アロー関数
const add02 = (a, b) => a + b;
console.log(add02(10, 50));
// {}やreturnを省略できる
// 巻き上げは行われない

const calc = () => {
  const x = 10;
  const y = 20;
  return x + y;
}
// 関数が複数行にわたる場合は{}やreutrnを使う（値を返さない関数なら不要）
console.log(calc());





console.log('----- 高階関数 -----');

/**
 * 高階関数
 * 関数をとる関数、関数を返す関数
*/

const twice = (fn) => {
  fn();
  fn();
}

const myFunc =() => console.log('myFunc関数');

twice(myFunc);






console.log('----- クロージャ -----');

/**
 * クロージャ
 * JavaScriptにおいて関数はすべて「クロージャ」である
 * 実行場所に関係なくアクセスできる、という性質がある
 * 関数がアクセスできる変数というのは、定義場所だけで決まる
 * 
 * 自分を囲むスコープ（変数を参照できる範囲のこと）にある変数を参照できる関数
 * 
*/

function func03() {
  const inner = '関数の内側';
  return function(){ 
    console.log(inner)  // 内側の関数が外側の関数の変数innerを参照している
  };
}

const innerFunc = func03();
// 関数func03の外側から変数innerを表示しようとしているが、エラーになっていない
// 無名関数の定義場所からは変数innerにアクセスできるため、実行場所に関係なくアクセスできる

innerFunc();




/**
 * 例題
 * 2つの数を受け取り、その差を返す関数subを定義せよ。
 * また、いくつかの数値で実際に関数を使用し、結果を確かめよ。
*/

/* 間違えた分
let num01 = 10;
let num02 = 46;
const sub = (num01, num02) => {
  return num01 - num02;
}
console.log(sub());*/


const sub = (num01, num02) => {
  return num01 - num02;
}
console.log(sub(10, 46));
console.log(sub(100, 30));
console.log(sub(2, 65));






/**
 * 例題
 * 整数値nを受け取り、0からnまでの整数をコンソールに出力する関数printNumberを定義せよ。
 * また、実際に関数を使用して結果が正しいことを確かめよ。
*/

let printNumber = (n) => {
  for(let i = 0; i <= n; i++){
    console.log(`0からnまでの整数: ${i}`);
  }
}
printNumber(8);





/**
 * 課題
 * 日数dを受け取り秒数に換算した値を返す関数dayToSecを定義せよ。
 * また、いくつかの値で計算結果が正しいことを確かめよ。
*/

let dayToSec = (d) => {
  let sec = d * 86400;
  console.log(`${d}日を秒に換算すると${sec}秒になります。`);
}

dayToSec(1);
dayToSec(7);
dayToSec(30);






/**
 * 課題
 * 整数limit未満の素数を列挙する関数listPrimes(limit)を定義せよ。
 * また、実際に関数を利用して出力が正しいことを確かめよ。
*/

/*
let listPrimes = (limit) => {

  for(let i = 3; i < limit; i += 2) {
    if( limit % i === 0 ) {
      return false;
    }
  }
  console.log(limit);
}

listPrimes(6);
*/

// 素数を判定する関数　素数ならばtrue,そうでなければfalseを返す
let isPrimeFunc = (n) => {
  if(n < 2) {
    return false; // 2未満（1）は素数ではない
  }
  if(n === 2) {
    return true; // 2は素数
  }
  if(n % 2 === 0) {
    return false; // 2で割り切れる（偶数）は素数ではない
  }

  for(let i = 2; i < n; i++) {
    if( n % i === 0 ) {
      return false;
    }
  }

  return true;
}

let listPrimes = (limit) => {
  for (let i = 2; i < limit; i++) {
    if( isPrimeFunc(i) === true ) {
      console.log(`整数${limit}未満の素数は：${i}`);
    }
  }
}

listPrimes(50);