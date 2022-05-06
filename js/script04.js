'use strict';

/**
 * オブジェクト指向
 * 
 * データに操作を持たせてデータ自身に処理を行ってもらうのが特徴
*/


// 手続き型プログラミング
class Vector1 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

function addVector1(v1, v2) {
  return new Vector1(v1.x + v2.x, v1.y + v2.y);
}

const v1 = new Vector1(1,2);
const v2 = new Vector1(3, 4);
const sum1 = addVector1(v1, v2);
console.log(`[${sum1.x}, ${sum1.y}]`);

/**
 * 二次元ベクトルを表すクラスVector1と、Vector2同士を加算する関数addVector1がある。
 * これはあくまでオブジェクトを単なるデータとして扱い、その処理は外部の関数に任せるというスタイル。
 * 
 * 手続き型プログラミングでは自分で全て操作するのが大まかな特徴
*/



// オブジェクト指向プログラミング
class Vector2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(other) {
    return new Vector2(this.x + other.x, this.y + other.y);
  }
}

const v3 = new Vector2(10, 20);
const v4 = new Vector2(30, 40);
const sum2 = v3.add(v4);

console.log(`[${sum2.x}, ${sum2.y}]`);

/**
 * Vector2自身にaddというメソッドを持たせている
 * この場合はオブジェクトを単なる「データの塊」ではなく、「自身に関する操作を持ったデータ」という扱いをしている
 * 
 * オブジェクト指向プログラミングでは、データに操作を持たせてデータ自身に処理を行ってもらうのが特徴
*/




/**
 * カプセル化
 * 
 * ・オブジェクトのデータ（プロパティ）は外から操作しない
 * ・データ（プロパティ）の操作はオブジェクト自身のメソッドを通して行う
 * 上記を徹底すること
 * 
 * カプセル化を施すことで、
 * ・外からの変更がなくなるため、結果を予想しやすくなる
 * ・全ての変更がオブジェクト内部で行われるため、オブジェクト内部の処理のみを追いかけていれば、
 * 　データにどのような変更が加えられるかを完全に把握することができる
*/