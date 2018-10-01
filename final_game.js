// 表題： 世界遺産：ヌビア遺跡の紹介ページのためのプログラム
// 氏名： 西村　郷 (学籍番号： 71646541)
// 日付： 2016/07/17
// 概要： ゲームにおけるフラグ管理等のための変数を定義し、画面の読み込みと同時に行う処理、
// レンダリング処理、 画面の固定、再び動かすのための機能、キー入力の処理等を記述。

// - global -------------------------------------------------------------------
// キャンバス要素用変数
var screenCanvas;
// フレームレートを設定する変数（ただし単位はs/f）
var fps = 1000 / 30;
// コンテキスト
var ctx;
// 画面固定用フラグ
var stop = false;
// ページ数
var sinkou = 0;
var sinkou2 = 3;

// 主人公の最大HPを設定
var charahp = 10;
// 敵の最大HPを設定
var enemyhp = 35;
// 行動選択用フラグ
var tatakau;
var bag;
var hanasu;
var nigeru;
// 乱数
var random;
var random2;
// アイテム数を設定
var counter1 = 1;
var counter2 = 1;
var counter3 = 1;
var counter4 = 1;
// 技を定義
var nag;
var ker;
var hat;
var zut;
var kam;
var tab;
// 技の選択を管理するフラグ
var nag2;
var ker2;
var hat2;
var zut2;
// 命中率上昇を管理するフラグ
var uphr;
var uphr2;
// 命中率の倍率を設定
var hrupper = 1;
var hrupper2 = 1;
// 敵のターンのページを設定
var eneturn = 30;


// - event --------------------------------------------------------------------
// キー入力の初期値を定義
var keyup_input = 1;
var keyleft_input = 1;
// キー最終入力の初期値を定義
var ul = 1;
var ur;
var dl;
var dr;

// - main ---------------------------------------------------------------------
window.onload = function(){
    // スクリーンの初期化
    screenCanvas = document.getElementById('screen');
    screenCanvas.width = 600;
    screenCanvas.height = 337;

    // 2dコンテキスト
    ctx = screenCanvas.getContext('2d');

    // イベントの登録
    window.addEventListener('keydown', keyDown, true);

    // その他のエレメント関連
    info = document.getElementById('info');

    // 戦闘の処理　---------------------------------------------------------------
    // 即時関数なるもの
    (function(){
      battle1();
      wazaTeigi();
      battle2();
      // この関数を繰り返し
      setTimeout(arguments.callee, fps);
    })();

    /*
    // 定義と実行を一まとまりでできるので便利。同じことを下のようにすればできる。
    // 関数の定義
    function battle(){
      battle1();
      wazaTeigi();
      battle2();
      setTimeout(arguments.callee, fps);
    }
    // 関数の実行
    battle();
    */


      // レンダリング処理を呼び出す ------------------------------------------------
      (function(){
        // htmlのあるキャンバス要素を指定
        canvasScreen = document.getElementById('screen');
        // 描写方法を決定
        ctx = canvasScreen.getContext('2d');
        // screenクリア
        ctx.clearRect(0, 0, screenCanvas.width, screenCanvas.height);

        // 背景画像埋め込み
        // Imageオブジェクトを生成
        var img = new Image();
        // 画像を指定
        img.src = "images/fpg1.png";
        // 画像を描画
        ctx.drawImage(img, 0, 0);

        // スフィンクスの体力ゲージ表示
        ctx.beginPath();
        // 体力ゲージの長さによって色を変更
        if (enemy.hp/enemyhp < 0.1){
          ctx.fillStyle = 'rgb(192, 80, 77)'; // 赤
        }
        else if (enemy.hp/enemyhp < 0.3){
          ctx.fillStyle = 'rgb(176, 136, 86)'; // 黄
        }
        else {
          ctx.fillStyle = 'rgb(161, 193, 95)'; // 緑
        }
        // 中身の埋まった長方形を生成
        ctx.fillRect(150, 52, enemy.hp/enemyhp*110, 12);

        // オイディプスの体力ゲージ表示
        if (chara.hp/charahp < 0.1){
          ctx.fillStyle = 'rgb(192, 80, 77)'; // 赤
        }
        else if (chara.hp/charahp < 0.3){
          ctx.fillStyle = 'rgb(176, 136, 86)'; // 黄
        }
        else {
          ctx.fillStyle = 'rgb(161, 193, 95)'; // 緑
        }
        ctx.fillRect(438, 182, chara.hp/charahp*83, 12);

        // オイディプスの体力を表示
        // フォント設定
        ctx.font = "14px 'MS　Pゴシック'";
        // 線の色を設定
        ctx.strokeStyle = "black";
        // 文字を描写
        ctx.strokeText(chara.hp+"/　"+charahp, 460, 207);

        /*// スフィンクスの体力を表示
        ctx.font = "14px 'MS　Pゴシック'";
        ctx.strokeStyle = "black";
        ctx.strokeText(enemy.hp+"/ "+enemyhp, 177, 77);*/

        //textbox描写
        // 基本textboxの背景描写１
        ctx.fillStyle = "rgb(50, 50, 50)"
        ctx.fillRect(0, 230, 600, 107);
        // 基本textboxの背景描写２
        ctx.fillStyle = "rgb(192, 80, 77)"
        ctx.fillRect(4, 234, 592, 100);
        // 基本textboxの中身描写
        ctx.fillStyle = "rgb(121, 153, 125)"
        ctx.fillRect(25, 240, 550, 86);
        // text描写
        ctx.font = "14px 'MS　Pゴシック'";
        ctx.strokeStyle = "white";
        ctx.strokeText(document.getElementById("info").innerHTML, 30, 260);
        // ここから場合分け
        if (sinkou == 1 || sinkou == 2){
          // 選択肢box描写
            // 背景
            ctx.fillStyle = "rgb(100, 100, 100)"
            ctx.fillRect(300, 234, 296, 100);
            // text
            ctx.fillStyle = "rgb(255, 255, 255)"
            ctx.fillRect(306, 238, 284, 92);
          // 選択肢描写
          ctx.font = "16px 'MS　Pゴシック'";
          ctx.strokeStyle = "black";
          ctx.strokeText("たたかう", 340, 270);

          ctx.font = "16px 'MS　Pゴシック'";
          ctx.strokeStyle = "black";
          ctx.strokeText("バッグ", 480, 270);

          ctx.font = "16px 'MS　Pゴシック'";
          ctx.strokeStyle = "black";
          ctx.strokeText("はなす", 340, 310);

          ctx.font = "16px 'MS　Pゴシック'";
          ctx.strokeStyle = "black";
          ctx.strokeText("にげる", 480, 310);

          // カーソル表示
          ctx.font = "14px 'MS　Pゴシック'";
          ctx.strokeStyle = "black";
          if ((keyup_input == 1) && (keyleft_input == 1)){
          ctx.strokeText("▶︎", 320, 270);
          }
          if ((keyup_input == 1) && (keyleft_input == 0)){
          ctx.strokeText("▶︎", 460, 270);
          }
          if ((keyup_input == 0) && (keyleft_input == 1)){
          ctx.strokeText("▶︎", 320, 310);
          }
          if ((keyup_input == 0) && (keyleft_input == 0)){
          ctx.strokeText("▶︎", 460, 310);
          }
        }
        if (sinkou == 4){
          // 説明box描写
            // 背景
            ctx.fillStyle = "rgb(100, 100, 100)"
            ctx.fillRect(300, 234, 296, 100);
            // text
            ctx.fillStyle = "rgb(255, 255, 255)"
            ctx.fillRect(306, 238, 284, 92);
          // 説明描写
          if ((keyup_input == 1) && (keyleft_input == 1)){
            //  説明欄クリア
            ctx.clearRect(306, 238, 284, 92);
            ctx.font = "16px 'MS　Pゴシック'";
            ctx.strokeStyle = "black";
            ctx.strokeText("攻撃力:"+(nag.dmg), 340, 270);
            ctx.strokeText("命中率:"+(nag.hr*100)+"%", 340,300);
          }
          if ((keyup_input == 1) && (keyleft_input == 0)){
            ctx.clearRect(306, 238, 284, 92);
            ctx.font = "16px 'MS　Pゴシック'";
            ctx.strokeStyle = "black";
            ctx.strokeText("攻撃力:"+(ker.dmg), 340, 270);
            ctx.strokeText("命中率:"+(ker.hr*100)+"%", 340,300);
          }
          if ((keyup_input == 0) && (keyleft_input == 1)){
            ctx.clearRect(306, 238, 284, 92);
            ctx.font = "16px 'MS　Pゴシック'";
            ctx.strokeStyle = "black";
            ctx.strokeText("攻撃力:"+(hat.dmg), 340, 270);
            ctx.strokeText("命中率:"+(hat.hr*100)+"%", 340,300);
          }
          if ((keyup_input == 0) && (keyleft_input == 0)){
            ctx.clearRect(306, 238, 284, 92);
            ctx.font = "16px 'MS　Pゴシック'";
            ctx.strokeStyle = "black";
            ctx.strokeText("攻撃力:"+(zut.dmg), 340, 270);
            ctx.strokeText("命中率:"+(zut.hr*100)+"%", 340,300);
          }

          // 選択肢box描写
            // 背景
            ctx.fillStyle = "rgb(100, 100, 100)"
            ctx.fillRect(4, 234, 298, 100);
            // text
            ctx.fillStyle = "rgb(255, 255, 255)"
            ctx.fillRect(10, 238, 284, 92);
          // 選択肢描写
          ctx.font = "16px 'MS　Pゴシック'";
          ctx.strokeStyle = "black";
          ctx.strokeText("なぐる", 44, 270);

          ctx.font = "16px 'MS　Pゴシック'";
          ctx.strokeStyle = "black";
          ctx.strokeText("ける", 184, 270);

          ctx.font = "16px 'MS　Pゴシック'";
          ctx.strokeStyle = "black";
          ctx.strokeText("はたく", 44, 310);

          ctx.font = "16px 'MS　Pゴシック'";
          ctx.strokeStyle = "black";
          ctx.strokeText("ずつく", 184, 310);

          // カーソル表示
          ctx.font = "14px 'MS　Pゴシック'";
          ctx.strokeStyle = "black";
          if ((keyup_input == 1) && (keyleft_input == 1)){
          ctx.strokeText("▶︎", 24, 270);
          }
          if ((keyup_input == 1) && (keyleft_input == 0)){
          ctx.strokeText("▶︎", 164, 270);
          }
          if ((keyup_input == 0) && (keyleft_input == 1)){
          ctx.strokeText("▶︎", 24, 310);
          }
          if ((keyup_input == 0) && (keyleft_input == 0)){
          ctx.strokeText("▶︎", 164, 310);
          }
        }

        if (sinkou == 10){
          // 説明box描写
            // 背景
            ctx.fillStyle = "rgb(100, 100, 100)"
            ctx.fillRect(300, 234, 296, 100);
            // text
            ctx.fillStyle = "rgb(255, 255, 255)"
            ctx.fillRect(306, 238, 284, 92);
          // 説明描写
          if ((keyup_input == 1) && (keyleft_input == 1)){
            //  説明欄クリア
            ctx.clearRect(306, 238, 284, 92);
            ctx.font = "16px 'MS　Pゴシック'";
            ctx.strokeStyle = "black";
            ctx.strokeText("体力を６回復する", 340, 270);
            ctx.strokeText("残り個数:"+counter1, 340,300);
          }
          if ((keyup_input == 1) && (keyleft_input == 0)){
            ctx.clearRect(306, 238, 284, 92);
            ctx.font = "16px 'MS　Pゴシック'";
            ctx.strokeStyle = "black";
            ctx.strokeText("命中率２０％上昇", 340, 270);
            ctx.strokeText("残り個数:"+counter2, 340,300);
          }
          if ((keyup_input == 0) && (keyleft_input == 1)){
            ctx.clearRect(306, 238, 284, 92);
            ctx.font = "16px 'MS　Pゴシック'";
            ctx.strokeStyle = "black";
            ctx.strokeText("攻撃力２上昇", 340, 270);
            ctx.strokeText("残り個数:"+counter3, 340,300);
          }
          if ((keyup_input == 0) && (keyleft_input == 0)){
            ctx.clearRect(306, 238, 284, 92);
            ctx.font = "16px 'MS　Pゴシック'";
            ctx.strokeStyle = "black";
            ctx.strokeText("体力と最大体力を３上昇", 340, 270);
            ctx.strokeText("残り個数:"+counter4, 340,300);
          }

          // 選択肢box描写
            // 背景
            ctx.fillStyle = "rgb(100, 100, 100)"
            ctx.fillRect(4, 234, 298, 100);
            // text
            ctx.fillStyle = "rgb(255, 255, 255)"
            ctx.fillRect(10, 238, 284, 92);
          // 選択肢描写
          ctx.font = "16px 'MS　Pゴシック'";
          ctx.strokeStyle = "black";
          ctx.strokeText("アロエベラ", 44, 270);

          ctx.font = "16px 'MS　Pゴシック'";
          ctx.strokeStyle = "black";
          ctx.strokeText("不思議なお茶", 184, 270);

          ctx.font = "16px 'MS　Pゴシック'";
          ctx.strokeStyle = "black";
          ctx.strokeText("謎のパピルス", 44, 310);

          ctx.font = "16px 'MS　Pゴシック'";
          ctx.strokeStyle = "black";
          ctx.strokeText("甘草", 184, 310);

          // カーソル表示
          ctx.font = "14px 'MS　Pゴシック'";
          ctx.strokeStyle = "black";
          if ((keyup_input == 1) && (keyleft_input == 1)){
          ctx.strokeText("▶︎", 24, 270);
          }
          if ((keyup_input == 1) && (keyleft_input == 0)){
          ctx.strokeText("▶︎", 164, 270);
          }
          if ((keyup_input == 0) && (keyleft_input == 1)){
          ctx.strokeText("▶︎", 24, 310);
          }
          if ((keyup_input == 0) && (keyleft_input == 0)){
          ctx.strokeText("▶︎", 164, 310);
          }
        }


        if (sinkou == 20){
          // 説明box描写
            // 背景
            ctx.fillStyle = "rgb(100, 100, 100)"
            ctx.fillRect(300, 234, 296, 100);
            // text
            ctx.fillStyle = "rgb(255, 255, 255)"
            ctx.fillRect(306, 238, 284, 92);
          // 説明描写
          if ((keyup_input == 1) && (keyleft_input == 1)){
            //  説明欄クリア
            ctx.clearRect(306, 238, 284, 92);
            ctx.font = "16px 'MS　Pゴシック'";
            ctx.strokeStyle = "black";
            ctx.strokeText("相手を煽る", 340, 270);
          }
          if ((keyup_input == 1) && (keyleft_input == 0)){
            ctx.clearRect(306, 238, 284, 92);
            ctx.font = "16px 'MS　Pゴシック'";
            ctx.strokeStyle = "black";
            ctx.strokeText("非抵抗の意思を示す", 340, 270);
          }
          if ((keyup_input == 0) && (keyleft_input == 1)){
            ctx.clearRect(306, 238, 284, 92);
            ctx.font = "16px 'MS　Pゴシック'";
            ctx.strokeStyle = "black";
            ctx.strokeText("友好的な態度を示す", 340, 270);
          }
          if ((keyup_input == 0) && (keyleft_input == 0)){
            ctx.clearRect(306, 238, 284, 92);
            ctx.font = "16px 'MS　Pゴシック'";
            ctx.strokeStyle = "black";
            ctx.strokeText("なぞなぞの問題を問う", 340, 270);
          }

          // 選択肢box描写
            // 背景
            ctx.fillStyle = "rgb(100, 100, 100)"
            ctx.fillRect(4, 234, 298, 100);
            // text
            ctx.fillStyle = "rgb(255, 255, 255)"
            ctx.fillRect(10, 238, 284, 92);
          // 選択肢描写
          ctx.font = "16px 'MS　Pゴシック'";
          ctx.strokeStyle = "black";
          ctx.strokeText("煽る", 44, 270);

          ctx.font = "16px 'MS　Pゴシック'";
          ctx.strokeStyle = "black";
          ctx.strokeText("降参する", 184, 270);

          ctx.font = "16px 'MS　Pゴシック'";
          ctx.strokeStyle = "black";
          ctx.strokeText("仲良くする", 44, 310);

          ctx.font = "16px 'MS　Pゴシック'";
          ctx.strokeStyle = "black";
          ctx.strokeText("なぞなぞ", 184, 310);

          // カーソル表示
          ctx.font = "14px 'MS　Pゴシック'";
          ctx.strokeStyle = "black";
          if ((keyup_input == 1) && (keyleft_input == 1)){
          ctx.strokeText("▶︎", 24, 270);
          }
          if ((keyup_input == 1) && (keyleft_input == 0)){
          ctx.strokeText("▶︎", 164, 270);
          }
          if ((keyup_input == 0) && (keyleft_input == 1)){
          ctx.strokeText("▶︎", 24, 310);
          }
          if ((keyup_input == 0) && (keyleft_input == 0)){
          ctx.strokeText("▶︎", 164, 310);
          }
        }
        setTimeout(arguments.callee, fps);
      })();
    };

    // 画面の固定と解除　---------------------------------------------------------------
    function stopper(){
      if (stop){
        stop = false;
      }
      else {
        stop = true;
      }
    }

    function kotei(){
      if(stop){
        setTimeout(window.scrollTo(0, 280), fps);
        setTimeout(arguments.callee, fps);
      }
    }

// - key event --------------------------------------------------------------------
function keyDown(event){
    // キーコードを取得
    var ck = event.keyCode;

      // 上キーが押された
      if (ck == 38){
        // キー最終入力をリセット
        ul = 0;
        ur = 0;
        dl = 0;
        dr = 0;
        // キー入力
        keyup_input = 1;
        // キーの判定をリセット
        ck = null;
      }
      // 下キーが押された
      if (ck == 40){
        ul = 0;
        ur = 0;
        dl = 0;
        dr = 0;
        keyup_input = 0;
        ck = null;
      }
      // 左キーが押された
      if (ck == 37){
        ul = 0;
        ur = 0;
        dl = 0;
        dr = 0;
        keyleft_input = 1;
        ck = null;
      }
      // 右キーが押された
      if (ck == 39){
        ul = 0;
        ur = 0;
        dl = 0;
        dr = 0;
        keyleft_input = 0;
        ck = null;
      }
      // dキーが押された
      if (ck == 68){
        // キー上入力があって
        if (keyup_input == 1){
          // キー左入力があったら
          if (keyleft_input == 1){
            // キー最終入力は「左上」
            ul = 1;
          }
          else if (keyleft_input == 0 ){
            ur = 1;
          }
        }
        else if (keyup_input == 0){
          if (keyleft_input == 1){
            dl = 1;
          }
          else if (keyleft_input == 0){
            dr = 1;
          }
        }
        // ページを進める
        sinkou++;
        sinkou2++;
        ck = null;
      }
      // aキーが押された
      if (ck == 65){
        // キー最終入力を初期値に戻す
        ul = 1;
        ur = 0;
        dl = 0;
        dr = 0;
        // キー入力を初期値に戻す
        keyup_input = 1;
        keyleft_input = 1;
        // 行動選択フラグをリセット
        tatakau = 0;
        bag = 0;
        hanasu = 0;
        sinkou = 1;
      }
  }
