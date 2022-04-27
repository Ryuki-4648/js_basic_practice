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


console.log('----- ループと配列 -----');


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




console.log('----- 配列の例題 -----');


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
  console.log(`${arrayType01[i]}と${arrayType02[i]}の和は${arraySum[i]}です。`);
}
console.log(arraySum);


console.log('----- オブジェクト -----');


/**
 * オブジェクト
 * 文字列と値を結びつけるデータ構造
*/

// newで新しいオブジェクトを生成する方法
const obj01 = new Object();

obj01['乃木坂'] = '秋元 真夏';
obj01['櫻坂'] = '菅井 友香';
obj01['日向坂'] = '佐々木 久美';

console.log(obj01);
// キーとバリュー（値）:プロパティ
// 配列の場合の添え字はオブジェクトの場合は文字列になっている



// リテラルでオブジェクトを生成する方法
const obj02 = {
  乃木坂: '秋元 真夏',
  櫻坂: '菅井 友香',
  日向坂: '佐々木 久美'
};
console.log(obj02);




console.log('----- プロパティとメソッド -----');


/**
 * プロパティとメソッド
*/

const point = {}; // new Object()と同じ意味
point.x = 2; // point['x'] = 2; 
point.y = 10; // point['y'] = 10;

console.log(point);
console.log(point.x);
console.log(point.y);



const idle = {
  乃木坂: 'Nogizaka',
  櫻坂: 'Sakurazaka',

  // 関数は値なので、プロパティとして関数を格納することもできる
  // 値が関数のプロパティのことを「メソッド」という
  sakamichi: function(){
    console.log(idle.乃木坂);
    console.log(idle.櫻坂);
    console.log('坂道グループ');
    console.log(this.乃木坂); // メソッド内部からプロパティまたは他のメソッドを呼び出すときにはthisを使う
    console.log(this.櫻坂);
  }
};

// メソッドを呼び出す
idle.sakamichi();



const pointer = {
  x: 10,
  y: 20,
  printer: function(){
    console.log(this.x);
    console.log(this.y);
  }
};
pointer.printer();




// consoleオブジェクトのlogメソッドを呼び出している
// console.log();





/**
 * 例題
*/

const rectangle = {
  width: 12,
  height: 20,
  calcArea: function(){
    console.log(this.width * this.height);
    // メソッド内でプロパティにアクセスするときはthisを忘れないように！！
    // 方法2 return this.width * this.height;
  }
};

rectangle.calcArea();
// 方法2 console.log(rectangle.calcArea());






console.log('----- プリミティブ型とオブジェクト型 -----');


/**
 * プリミティブ型とオブジェクト型
 * 
 * オブジェクト型以外の型をプリミティブ型という。
 * オブジェクトのように、プロパティやメソッドを持たない。
 * newキーワードも不要。
*/


// プリミティブ型をオブジェクト型に変換するラッパーオブジェクトが存在する

// ラッパーオブジェクト
// 数値をNumberオブジェクトでラップ
const num = new Number(3.1415);
// 精度3桁の文字列に変換する
console.log(num.toPrecision(3));


// ↑のように毎回ラップするのは面倒。


// オートボクシング＝プリミティブ型に対してメソッド呼び出しを行うと、自動的に対応するオブジェクトでラップしてくれる
const numStr = (3.1415).toPrecision(3);
console.log(numStr);




/**
 * オブジェクト型と等価性
 * 
 * 等価演算子は中身を比較するのではなく、「全く同一のオブジェクトかどうか」を判定する
*/

const obj1 = {
  x: 10
};
const obj2 = {
  x: 10
};

console.log(obj1 === obj2); // false 異なるオブジェクトのため
console.log(obj1 == obj2); // false
console.log(obj1 === obj1); // true
console.log(obj1 == obj1); // true




/**
 * オブジェクト型と変数
 * 
 * 
*/

const obj3 = {
  value: 100
};
const objCopy = obj3;

objCopy.value = 5;

console.log(obj3); // value:5
console.log(objCopy); // value:5

/**
 * コピー元のobj3のプロパティまで変更されている！！
 * 
 * オブジェクトそのものではなく、「参照値（データのアドレス）」がコピーされる
*/

let func = (obj4) => {
  obj4.value= 100;
}

const object = {value: 0};

func(object);

console.log(object.value); // 100
// 関数の引数にオブジェクトを渡すと、オブジェクトではなく参照値が渡される