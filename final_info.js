// 表題： 世界遺産：ヌビア遺跡の紹介ページのためのプログラム
// 氏名： 西村　郷
// 日付： 2016/07/17
// 概要： 基本情報の画像を変更、文、ボタンを変更する機能と、追加解説の表示、削除機能を記述。

//画像を文字情報で配列に格納
var images = new Array("fpi1.png","fpi2.png","fpi3.png","fpi4.png","fpi5.png","fpi6.png");
// 現在のページ番号を保持する変数（サンプル）
var p = 1;

//写真変更関数
function changeImage(x){
  // ページ数を加算
  p = p + x;
  // 新しいページを表示
  document.getElementById('story').setAttribute("src", "images/" + images[p-1]);
  //存在しないページに行こうとする不届きものに警告する
  while (p==0){
    //警告の表示
    alert("どこからか声が聞こえてくる…「汝、ここより先へ立ち入るべからず…」");
    //ページが変えられるようにループを阻止
    return false;
  }
}

//画像に応じたキャプションの変更関数
function changeConts(){
  //以下、ページ番号ごとに別々のキャプションを用意、書き換える
  if (p==0){
    document.getElementById('bun').innerHTML = "もうページがないよ！前に進んでね。"
  }
  else if (p==1){
    document.getElementById('bun').innerHTML="エジプト"
  }
  else if (p==2){
    document.getElementById('bun').innerHTML="ヌビア遺跡郡の位置"
  }
  else if (p==3){
    document.getElementById('bun').innerHTML="アブ・シンベル神殿"
  }
  else if (p==4){
    document.getElementById('bun').innerHTML="フィラエ神殿"
  }
  else {
    document.getElementById('bun').innerHTML="カラブシャ神殿"
  }
}

//選択肢の変更関数
function changeChoice(){
  //０、５ページ目は存在しないページへ行けないように行ってしまうボタンを非表示
  if (p==0){
    document.getElementById('ch1').setAttribute("style", "display:none");
  }
  else if (p==5){
    document.getElementById('ch2').setAttribute("style", "display:none");
  }
  //他のページは全てのボタンを表示
  else {
      document.getElementById('ch1').setAttribute("style", "display:");
      document.getElementById('ch2').setAttribute("style", "display:");
  }
}

//ヌビア水没遺跡救済キャンペーンの解説（以下「解説」）用の画像変更関数
function changeImage6(){
  //新しい画像tagを表示
  document.getElementById('story2').setAttribute("style", "display:");
  //画像のソースを書き込み
  document.getElementById('story2').setAttribute("src", "images/" + images[5]);
}

//解説の説明を表示する関数
function changeConts6(){
  //新しい＜p＞tagを表示
  document.getElementById('bun2').setAttribute("style", "display:");
  //説明の書き込み
  document.getElementById('bun2').innerHTML="もともと、ナイル川では毎年夏になると大規模な氾濫が起きてました。でも、流域に人がたくさん住み始めると川の氾濫を抑える必要が出てきます。もともと、エジプトにはイギリスによる保護下にあった1901年に作られたアスワン・ロウ・ダムというダムがありました。ダムは人の暮らしの為のものなので、氾濫を抑えただけでなく、感慨用水の確保や電力供給など住民に多くの恩恵与えました。でも、このダムだけでは不十分としてエジプト政府が1952年あたりから新しいダムの建設計画をスタートさせ、ソ連の援助で1960年にヌビア地方にアスワン・ハイ・ダムの建設ががスタートしました。そこで浮上したのが、アブ・シンベル神殿という古代からの遺跡がダムの底に沈んでしまうという問題でした。この時は重要な文化財の保護よりも、国と国民の生活への利益が優先されてしまいました。これについては国際的に非難の声が上がり、これを受けてユネスコでは、ヌビア水没遺跡救済キャンペーンとして、各国の支援を求めました。その結果、約60の国々が援助して技術支援や考古学調査支援が行われ、1964～1968年にかけて、遺跡がブロックに裁断されて、従来より標高が約60m高く、ナイル川から210m離れた高台に運ばれ、コンクリートのドーム型基盤の上に再度正確に組み立てられました。巨額の費用はかかったものの、その甲斐もあって、アブ・シンベル神殿は水没を免れました。（世界遺産検定のお勉強ブログより引用）"
}

//解説で増えた部分を削除するボタンを表示する関数
function eraser(){
  //ボタンを表示
  document.getElementById('ch3').setAttribute("style", "display:");
}

//解説で増えた部分を削除する関数
function erase(){
  //解説部分の全ての要素を非表示に
  document.getElementById('story2').setAttribute("style", "display:none");
  document.getElementById('bun2').setAttribute("style", "display:none");
  document.getElementById('ch3').setAttribute("style", "display:none");
}
