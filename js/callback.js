/* 
関数を2回実行する関数 
関数を受け取る関数　＝　高階関数
*/
function doTwice(func) {
  func();
  func();
}

// helloと出力する関数
function hello() {
  console.log('hello');
}

// 関数doTwiceにhello（値）を渡す
doTwice(hello);



function doTwice2(func){
  func();
  func();
}
doTwice2(function hello2() {
  console.log('hello2');
});



/* 
doTwiceWithValue
「受け取った関数」に、1度目は「Hello!」を渡して実行、2度目は「I am here!!!」を渡して実行する関数

ここでは「引数messageをひとつ取る関数」が渡されている
messageの中に「Hello!」が入って実行され、次に「I am here!!!」が入って実行される
*/
function doTwiceWithValue(func){
  func('hello doTwiceWithValue'); // 関数に「値」を渡している
  func('hello doTwiceWithValue!!!');
}
// 引数（message）をひとつ取る関数
// 受け取ったmessageを表示するだけの関数
doTwiceWithValue(function(message){
  console.log(message);
});


/*
コールバック関数
広い定義でいうと、単なる「高階関数に渡すための関数」
自分で直接実行するのではなく、相手に実行してもらう関数のこと

helloやfunction(message)とかはコールバック関数になる
*/



/**
 * setTimeout
 * 「受け取ったコールバック関数」を指定ミリ秒後に実行している
 * setTimeout(func, ms)の形になっている
 */
setTimeout(function(){
  console.log('settimeout 2秒後にコンソールに出力される')
}, 2000);