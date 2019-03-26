// 表題： 世界遺産：ヌビア遺跡の紹介ページのためのプログラム
// 氏名： 西村　郷
// 日付： 2016/07/17
// 概要： ゲームにおける戦闘の具体的な処理を記述。

// キャラクタコンストラクタ
function Character(hp, atk){
    // 体力と攻撃力を設定できるようにする
    this.hp = hp;
    this.atk = atk;
}
// 自機初期化
var chara = new Character(10, 5);
// 敵初期化
var enemy = new Character(35, 4);

// 技コンストラクタ
function Waza(dmg, hr){
  // 技のダメージと命中率を設定できるようにする
  this.dmg = dmg;
  this.hr = hr;
}

// 技の要素が更新されるよう、関数をループの中に入れる
function wazaTeigi(){
  // もし命中率上昇するなら
  if (uphr){
    // 命中率上昇
    hrupper = 1.2;
  }
  //　別のif文で記述することで上と並存できる
  if (uphr2){
    hrupper2 = 1.2;
  }
    // 技の各パラメーターを設定
    nag = new Waza(chara.atk, 0.6*hrupper);
    ker = new Waza(chara.atk+3, 0.5*hrupper);
    hat = new Waza(chara.atk-1, 0.7*hrupper);
    zut = new Waza(chara.atk+7, 0.3*hrupper);
    kam = new Waza(enemy.atk, 0.7*hrupper2);
    tab = new Waza(31, 0.1*hrupper2);
}

// 戦闘の処理　---------------------------------------------------------------
// 自機の行動
function battle1(){
  // ページ数が１の時
  if (sinkou == 1){
    // インフォを表示
    document.getElementById("info").innerHTML = "オイディプスは　どうする？";
    // 各フラグを初期化
    ul = 1;
    ur = 0;
    dl = 0;
    dr = 0;
    keyup_input = 1;
    keyleft_input = 1;
    tatakau = 0;
    bag = 0;
    hanasu = 0;
    // ページ数を増やす（ひとまず何の処理もしない状態にする）
    sinkou++;
  }
  // 自分（戦う、バッグ、話す、逃げる）
  // 戦うが選択されたら
  else if (ul == 1 && sinkou == 3){
    document.getElementById("info").innerHTML = "たたかう";
    // 戦うフラグが立つ
    tatakau = 1;
    // 乱数決定
    random = Math.random();
    sinkou++;
  }
  //　たたかう（殴る、ける、はたく、頭突き）
  else if (tatakau == 1){
    // 殴る
    if (ul == 1 && sinkou == 5){
      document.getElementById("info").innerHTML = "オイディプスの　なぐる　攻撃！";
      // 技選択フラグの「殴る」を立てる
      nag2 = 1;
      sinkou++;
    }
    // 乱数が命中率の値以下（命中）かつページ数が７かつ殴るフラグが立っている
    else if (random < nag.hr && sinkou == 7 && nag2 == 1){
      // 敵の体力を技のダメージ分減らす
      enemy.hp -= nag.dmg;
      document.getElementById("info").innerHTML = "スフィンクスに　"+nag.dmg+"　ダメージ！";
      // もし敵の体力が残っていなかったら
      if (enemy.hp <= 0){
        // ゲームクリア
        gameclear();
      }
      // 技選択フラグを下ろす
      nag2 = 0;
      // 移行の一歩手前までページ数を進める
      sinkou++;
    }
    else if (random >= nag.hr && sinkou == 7 && nag2 == 1){
      document.getElementById("info").innerHTML = "しかし　オイディプスの　こうげきは　はずれてしまった！";
      nag2 = 0;
      sinkou++;
    }

    // ける
    else if (ur == 1 && sinkou == 5){
      document.getElementById("info").innerHTML = "オイディプスの　ける　攻撃！";
      ker2 = 1;
      sinkou++;
    }
      else if (random < ker.hr && sinkou == 7 && ker2 == 1){
        enemy.hp -= ker.dmg;
        document.getElementById("info").innerHTML = "スフィンクスに　"+ker.dmg+"　ダメージ！";
        if (enemy.hp <= 0){
          gameclear();
        }
        ker2 = 0;
        sinkou++;
      }
      else if (random >= ker.hr && sinkou == 7 && ker2 == 1){
        document.getElementById("info").innerHTML = "しかし　オイディプスの　こうげきは　はずれてしまった！";
        ker2 = 0;
        sinkou++;
      }

    // はたく
    else if (dl == 1 && sinkou == 5){
      document.getElementById("info").innerHTML = "オイディプスの　はたく　攻撃！";
      hat2 = 1;
      sinkou++;
    }
      else if (random < hat.hr && sinkou == 7 && hat2 == 1){
        enemy.hp -= hat.dmg;
        document.getElementById("info").innerHTML = "スフィンクスに　"+hat.dmg+"　ダメージ！";
        if (enemy.hp <= 0){
          gameclear();
        }
        hat2 = 0;
        sinkou++;
      }
      else if (random >= hat.hr && sinkou == 7 && hat2 == 1){
        document.getElementById("info").innerHTML = "しかし　オイディプスの　こうげきは　はずれてしまった！";
        hat2 = 0;
        sinkou++;
      }

    // ずつく
    else if (dr == 1 && sinkou == 5){
      document.getElementById("info").innerHTML = "オイディプスの　ずつく　攻撃！";
      zut2 = 1;
      sinkou++;
    }
      else if (random < zut.hr && sinkou == 7 && zut2 == 1){
        enemy.hp -= zut.dmg;
        document.getElementById("info").innerHTML = "スフィンクスに　"+zut.dmg+"　ダメージ！";
        if (enemy.hp <= 0){
          gameclear();
        }
        zut2 = 0;
        sinkou++;
      }
      else if (random >= zut.hr && sinkou == 7 && zut2 == 1){
        document.getElementById("info").innerHTML = "しかし　オイディプスの　こうげきは　はずれてしまった！";
        zut2 = 0;
        sinkou++;
      }
    // 移行
    else if (sinkou == 9){
      // 現在の行動選択フラグを下ろす
      tatakau = 0;
      // ページは敵のターンにする
      sinkou = eneturn;
      // キー初期化
      keyup_input = 1;
      keyleft_input = 1;
      ul = 1;
    }
}
//tatakau

  // 自分（戦う、バッグ、話す、逃げる）
  else if (ur == 1 && sinkou == 3){
    document.getElementById("info").innerHTML = "バッグ";
    bag = 1;
    sinkou = 10;
    random = Math.random();
    keyup_input = 1;
    keyleft_input = 1;
    ul = 1;
  }
  // バッグ（アロエベラ、不思議なお茶、謎のパピルス、甘草）
  else if (bag == 1){
    // アロエベラ
    if (ul == 1 && sinkou == 11){
      // もしその道具が残っていて、ページ数を進めたなら
      if (counter1 > 0  && sinkou == 11){
        // 回復量が６以上になるなら
        if (chara.hp + 6 <= charahp){
          document.getElementById("info").innerHTML = "オイディプスの　HPが　6　回復した！";
          // 体力を６回復
          chara.hp += 6;
          sinkou++;
        }
        // そうでなくて体力が減っていなかったら
        else if (chara.hp == charahp){
          document.getElementById("info").innerHTML = "体力は　満タンだ！";
          // 行動選択画面の手前にページを戻す
          sinkou = 0;
        }
        // そうでなくて回復量が６未満になるなら
        else if (chara.hp + 6 > charahp){
          document.getElementById("info").innerHTML = "オイディプスの　HPが　" + (charahp-chara.hp) + "　回復した！";
          // 体力を満タンに
          chara.hp = charahp;
          sinkou++;
        }
      }
      // そもそも道具が残っていなかったら
      else if (counter1 <= 0  && sinkou == 11){
        document.getElementById("info").innerHTML = "アイテムが　もう残っていない！";
        sinkou = 0;
      }
    }
    // 移行
    else if (sinkou == 13){
      bag = 0;
      sinkou = eneturn;
      // 道具の数を減らす
      counter1--;
      keyup_input = 1;
      keyleft_input = 1;
      ul = 1;
    }

    // 不思議なお茶
    else if (ur == 1 && sinkou == 11){
      if (counter2 > 0 && sinkou == 11){
        // 命中率上昇
        uphr = true;
        document.getElementById("info").innerHTML = "オイディプスの　命中率が　上がった！";
        sinkou += 3;
      }
      else if (counter2 <= 0 && sinkou == 11){
        document.getElementById("info").innerHTML = "アイテムが　もう残っていない！";
        sinkou = 0;
      }
    }
    // 移行
    else if (sinkou == 15){
      bag = 0;
      sinkou = eneturn;
      counter2--;
      keyup_input = 1;
      keyleft_input = 1;
      ul = 1;
    }

    // まじないのパピルス
    else if (dl == 1 && sinkou == 11){
      if (counter3 > 0 && sinkou == 11){
        // 攻撃力上昇
        chara.atk += 2;
        document.getElementById("info").innerHTML = "オイディプスの　攻撃力が　上がった！";
        sinkou += 5;
      }
      else if (counter3 <= 0 && sinkou == 11){
        document.getElementById("info").innerHTML = "アイテムが　もう残っていない！";
        sinkou = 0;
      }
    }
    // 移行
    else if (sinkou == 17){
      bag = 0;
      sinkou = eneturn;
      counter3--;
      keyup_input = 1;
      keyleft_input = 1;
      ul = 1;
    }

    // 甘草
    else if (dr == 1 && sinkou == 11){
      if (counter4 > 0 && sinkou == 11){
        // 体力上昇
        chara.hp += 3;
        // 最大体力上昇
        charahp += 3;
        document.getElementById("info").innerHTML = "オイディプスの　体力が　上がった！";
        sinkou += 7;
      }
      else if (counter4 <= 0 && sinkou == 1){
        document.getElementById("info").innerHTML = "アイテムが　もう残っていない！";
        sinkou = 0;
      }
    }
    else if (sinkou == 19){
      bag = 0;
      sinkou = eneturn;
      counter4--;
      keyup_input = 1;
      keyleft_input = 1;
      ul = 1;
    }
}//bag

  // 自分（戦う、バッグ、話す、逃げる）
  else if (dl == 1 && sinkou == 3){
    document.getElementById("info").innerHTML = "話す";
    hanasu = 1;
    random = Math.random();
    sinkou = 20;
    keyup_input = 1;
    keyleft_input = 1;
    ul = 1;
  }
  // 話す（煽る、降参する、仲良くする、なぞなぞ）
  else if (hanasu == 1){
    // 煽る
    if (ul == 1 && sinkou == 21){
      // 敵の攻撃力上昇
      enemy.atk += 5
      // 命中率上昇
      uphr2 = true;
      document.getElementById("info").innerHTML = "スフィンクスの　攻撃力　と　命中力　が上がった！";
      sinkou++;
    }
      else if (sinkou == 23){
        hanasu = 0;
        sinkou = eneturn;
        keyup_input = 1;
        keyleft_input = 1;
        ul = 1;
      }

    // 降参する,仲良くする
    else if ((ur == 1 || dl == 1) && sinkou == 21){
      document.getElementById("info").innerHTML = "スフィンクスは　容赦してくれない！";
      sinkou += 3;
    }
      else if (sinkou == 25){
        // ゲームオーバー
        gameover();
      }

    // なぞなぞ
    else if (dr == 1 && sinkou == 21){
      // プレイヤーの回答を回収する
      var answer = prompt("一つの声をもちながら、朝には四つ足、昼には二本足、夜には三つ足で歩くものは何か。その生き物は全ての生き物の中で最も姿を変える").toLowerCase();
      // 回答がcase:以下の時、ゲームクリア。該当するものがない場合、ゲームオーバー。
      switch (answer) {
        case "人間":
          gameclear();
          break;
        case "人":
          gameclear();
          break;
        case "ヒト":
          gameclear();
          break;
        case "人類":
          gameclear();
          break;
        case "ホモ・サピエンス":
          gameclear();
          break;
        case "ホモサピエンス":
          gameclear();
          break;
        case "human":
          gameclear();
          break;
        case "human being":
          gameclear();
          break;
        case "humanbeing":
          gameclear();
          break;
        case "people":
          gameclear();
          break;
        case "person":
          gameclear();
          break;
        case "homo sapiens":
          gameclear();
          break;
        case "homosapiens":
          gameclear();
          break;
        default:
          gameover();
          break;
      }
    }
  }//hanasu

  // 自分（戦う、バッグ、話す、逃げる）
  else if (dr == 1 && sinkou == 3){
    document.getElementById("info").innerHTML = "逃げる（press d）";
    nigeru = 1;
    sinkou = 26;
  }
    // 逃げる（ゲームオーバー）
    else if (nigeru == 1 && sinkou == 27){
      document.getElementById("info").innerHTML = "逃げられない！（press d）";
      sinkou++
    }
    else if (nigeru == 1 && sinkou == 29){
      gameover();
    }
}//battle1();


// 敵の行動
function battle2(){
  if (sinkou == eneturn && sinkou2 > 3){
    sinkou2 = 0;
    // 技を選択
    if (random < 0.7 && sinkou2 == 0){
      document.getElementById("info").innerHTML = "スフィンクスの　かみつく　攻撃！";
      random2 = Math.random();
      sinkou2++;
    }
    else if (random >= 0.7 && sinkou2 == 0){
      document.getElementById("info").innerHTML = "スフィンクスの　たべる　攻撃！";
      random2 = Math.random();
      sinkou2++;
    }
  }
      // 技の影響の処理
      else if (random < 0.7 && random2 < kam.hr && sinkou2 == 2 && sinkou == eneturn+1){
        chara.hp -= kam.dmg;
        document.getElementById("info").innerHTML = "オイディプスに　"+kam.dmg+"　ダメージ！";
        if (chara.hp <= 0){
          gameover();
        }
        sinkou = 0;
        sinkou2++;
      }
      else if (random < 0.7 && random2 >= kam.hr && sinkou2 == 2 && sinkou == eneturn+1){
        document.getElementById("info").innerHTML = "しかし　スフィンクスの　こうげきは　はずれてしまった！";
        sinkou = 0;
        sinkou2++;
      }
      else if (random >= 0.7 && random2 < tab.hr && sinkou2 == 2 && sinkou == eneturn+1){
        gameover();
      }
      else if (random >= 0.7 && random2 >= tab.hr && sinkou2 == 2 && sinkou == eneturn+1){
        document.getElementById("info").innerHTML = "しかし　スフィンクスの　こうげきは　はずれてしまった！";
        sinkou = 0;
        sinkou2++;
      }
}//battle2()


// ゲームオーバーの処理
function gameover(){
  // プレイヤーに選択肢を提示
  var choice = confirm("あなたは　食べられてしまいました...\nGAME OVER...\nRESTART?")
  // もし"ok"なら
  if (choice == true){
    // ページをリロード
    location.reload(true);
  }
}

// ゲームクリアの処理
function gameclear(){
  var choice = confirm("おめでとう！　スフィンクスは崖に身を投げた！\nGAME CLEAR!\nRESTART?")
  if (choice == true){
    location.reload(true);
  }
}
