// 表題： 世界遺産：ヌビア遺跡の紹介ページのためのプログラム
// 氏名： 西村　郷 (学籍番号： 71646541)
// 日付： 2016/07/17
// 概要： 動く絵本の画像、文、ボタンの変更を行うプログラム。

// プログラムには意味的なまとまりごとにコメントと解説をコメントとして記すこと
// 下記のサンプルをそのまま使わずに必ず自分で記すこと


// 現在のページ番号を保持する変数（サンプル）
var p = 1;
// 紙芝居の画像を変える関数（サンプル）
function changeImage(x){
  //ページ数を加算
  p = p + x;

  //ページが存在する場合
  if (p>0　&& p<=15){
    // 新しいページを表示
    document.getElementById('story').setAttribute("src", "images/fp" + p + ".png");
  }
  //０ページ目を表示した場合
  else if (p==0){
    //戻るボタンを非表示にして、ページをこれ以上減らさないようにする
    document.getElementById('ch1').setAttribute("style", "display:none");
  }
  //１５ページ目を表示した場合
  else {
    //進むボタンを非表示にして、ページをこれ以上増やさないようにする
    document.getElementById('ch2').setAttribute("style", "display:none");
  }
}

//場面ごとに適切な文を表示する
function changeConts() {
  if (p==0){
    document.getElementById('bun').innerHTML = "もうページがないよ！前に進んでね。"
  }
  else if (p==1){
    document.getElementById('bun').innerHTML="ー1800年ごろ、エジプト南部、アスワン地方"
  }
  else if (p==2){
    document.getElementById('bun').innerHTML="あなたは探検家で古代エジプトの遺跡を探しに来ています。"
  }
  else if (p==3){
    document.getElementById('bun').innerHTML="そこで偶然アブ・シンベル神殿を発見しましたが、砂で埋もれてしまっています。"
  }
  else if (p==4){
    document.getElementById('bun').innerHTML="どうやって掘り起こしますか？"
  }
  else if (p==5){
    document.getElementById('bun').innerHTML="迷信深い村人たちは祟りを恐れて逃げ出した！"
  }
  else if (p==6){
    document.getElementById('bun').innerHTML="入り口の大まかな位置はわかった。どうやって掘る？"
  }
  else if (p==7){
    document.getElementById('bun').innerHTML="砂が入り込んでくる…"
  }
  else if (p==8){
    document.getElementById('bun').innerHTML="やった！ついに神殿の入り口を見つけたぞ！"
  }
  else if (p==9){
    document.getElementById('bun').innerHTML="何回スコップを振る？"
  }
  else if (p==10){
    document.getElementById('bun').innerHTML="蒸気機関を動かすための水が足りない…どうする？"
  }
  else if (p==11){
    document.getElementById('bun').innerHTML="水を取りすぎて現地の村人たちに追い返されてしまった…食べ物の恨みより恐ろしい水の恨み！"
  }
  else if (p==12){
    document.getElementById('bun').innerHTML="掘削はまだまだなのに、お金が底をついてしまった！あなたは仕方なくエジプトの地を後にした…"
  }
  else if (p==13){
    document.getElementById('bun').innerHTML="突然、大きな岩が降ってきた！"
  }
  else if (p==14){
    document.getElementById('bun').innerHTML="のんきに突っ立っていたあなたはなすすべもなく岩の下敷きになった…ミイラ取りがミイラになるとはこのことか！"
  }
  else if (p==15){
    document.getElementById('bun').innerHTML="おめでとう！あなたは神殿の発掘に成功した！僕たちの調査はこれからだ！"
  }
}


//分岐のあるページで選択肢用にボタンを入れ替える
function changeChoice(){
  if (p==4){
    //一つ目のボタンは常に表示されている
    document.getElementById('ch1').setAttribute("value", "近くの村民の助けを借りるため、村の長老と掛け合う");
    document.getElementById('ch1').setAttribute("onclick", "changeImage(+1);changeConts();changeChoice();");

    //先のページで消したボタンを再表示（他同様）
    document.getElementById('ch2').setAttribute("style", "display:");
    //ボタンに表示する文字を変更（他同様）
    document.getElementById('ch2').setAttribute("value", "とりあえず入り口の目星をつける");
    //ボタンの仕事を変更（他同様）
    document.getElementById('ch2').setAttribute("onclick", "changeImage(+2);changeConts();changeChoice();");

    document.getElementById('ch3').setAttribute("style", "display:");
    document.getElementById('ch3').setAttribute("value", "蒸気機関の掘削機械を作る");
    document.getElementById('ch3').setAttribute("onclick", "changeImage(+6);changeConts();changeChoice();");
  }
  else if (p==5){
    document.getElementById('ch1').setAttribute("value", "戻る");
    document.getElementById('ch1').setAttribute("onclick", "changeImage(-1);changeConts();changeChoice();");

    //使わないボタンを非表示（他同様）
    document.getElementById('ch2').setAttribute("style", "display:none");

    document.getElementById('ch3').setAttribute("style", "display:none");
  }
  else if (p==6){
    document.getElementById('ch1').setAttribute("value", "村人たちを一人一人説得した後、人海戦術だ！");
    document.getElementById('ch1').setAttribute("onclick", "changeImage(+3);changeConts();changeChoice();");

    document.getElementById('ch4').setAttribute("style", "display:none");

    document.getElementById('ch2').setAttribute("style", "display:");
    document.getElementById('ch2').setAttribute("value", "柵で囲み、砂を水で固める");
    document.getElementById('ch2').setAttribute("onclick", "changeImage(+2);changeConts();changeChoice();");

    document.getElementById('ch3').setAttribute("style", "display:none");
  }
  else if (p==7){
    document.getElementById('ch1').setAttribute("value", "戻る");
    document.getElementById('ch1').setAttribute("onclick", "changeImage(+2);changeConts();changeChoice();");

    document.getElementById('ch4').setAttribute("style", "display:none");

    document.getElementById('ch2').setAttribute("style", "display:none");
  }
  else if (p==8){
    document.getElementById('ch1').setAttribute("value", "戻る");
    document.getElementById('ch1').setAttribute("onclick", "changeImage(-2);changeConts();changeChoice();");

    document.getElementById('ch2').setAttribute("value", "進む");
    document.getElementById('ch2').setAttribute("onclick", "changeImage(+5);changeConts();changeChoice();");
  }
  else if (p==9){
    document.getElementById('ch1').setAttribute("value", "戻る");
    document.getElementById('ch1').setAttribute("onclick", "changeImage(-3);changeConts();changeChoice();");

    document.getElementById('ch4').setAttribute("style", "display:");

    document.getElementById('ch2').setAttribute("style", "display:");
    document.getElementById('ch2').setAttribute("value", "回振る！");
    document.getElementById('ch2').setAttribute("onclick", "changeImage(-2);changeConts();changeChoice();");
  }
  else if (p==10){
    document.getElementById('ch1').setAttribute("value", "地元の井戸から水を汲み出す");
    document.getElementById('ch1').setAttribute("onclick", "changeImage(+1);changeConts();changeChoice();");

    document.getElementById('ch2').setAttribute("value", "ナイル川からバケツリレー");
    document.getElementById('ch2').setAttribute("onclick", "changeImage(+2);changeConts();changeChoice();");

    document.getElementById('ch3').setAttribute("style", "display:none");
  }
  else if (p==11){
    document.getElementById('ch1').setAttribute("value", "人生をやり直す");
    document.getElementById('ch1').setAttribute("onclick", "changeImage(-10);changeConts();changeChoice();");

    document.getElementById('ch2').setAttribute("style", "display:none");
  }
  else if (p==12){
    document.getElementById('ch1').setAttribute("value", "再び冒険に出る");
    document.getElementById('ch1').setAttribute("onclick", "changeImage(-11);changeConts();changeChoice();");

    document.getElementById('ch2').setAttribute("style", "display:none");
  }
  else if (p==13){
    document.getElementById('ch1').setAttribute("value", "その場に止まる");
    document.getElementById('ch1').setAttribute("onclick", "changeImage(+1);changeConts();changeChoice();");

    document.getElementById('ch2').setAttribute("value", "全力で避ける");
    document.getElementById('ch2').setAttribute("onclick", "changeImage(+2);changeConts();changeChoice();");
  }
  else if (p==14){
    document.getElementById('ch1').setAttribute("value", "人生をやり直す");
    document.getElementById('ch1').setAttribute("onclick", "changeImage(-13);changeConts();changeChoice();");

    document.getElementById('ch2').setAttribute("style", "display:none");
  }
  else if (p==15){
    document.getElementById('ch1').setAttribute("value", "人生をやり直す");
    document.getElementById('ch1').setAttribute("onclick", "changeImage(-14);changeConts();changeChoice();");

    document.getElementById('ch2').setAttribute("style", "display:none");
  }
  else if (p==1){
    document.getElementById('ch1').setAttribute("style", "display:");
    document.getElementById('ch1').setAttribute("value", "戻る");
    document.getElementById('ch1').setAttribute("onclick", "changeImage(-1);changeConts();changeChoice();");

    document.getElementById('ch2').setAttribute("style", "display:");
    document.getElementById('ch2').setAttribute("value", "進む");
    document.getElementById('ch2').setAttribute("onclick", "changeImage(+1);changeConts();changeChoice();");
  }
}
