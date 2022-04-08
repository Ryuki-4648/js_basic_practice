'use strict';

/**
 * 関数とは
 * function 関数名(受け取る値につける名前)
 * 定義した関数は「関数名(渡す値)」の書式で呼び出す ＝ 関数呼び出し
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
