let img;
var heads;
let gameState = "title";
let canvas;
let fr = 60;

function preload() {

  endinganimation1 = loadAnimation(
    "assets/boss1.jpg",
    "assets/boss2.jpg",
    "assets/boss3.jpg",
    "assets/boss4.jpg",
    "assets/boss5.jpg",
    "assets/boss6.jpg",






  );
  endinganimation3 = loadAnimation(
    "assets/buser1.jpg",
    "assets/buser2.jpg",
    "assets/buser3.jpg",
  );
  endinganimation4 = loadAnimation(
    "assets/glitch1.jpg",
    "assets/glitch2.jpg",
    "assets/glitch3.jpg",
    "assets/glitch4.jpg",
  );
  endinganimation5 = loadAnimation(
    "assets/head01.jpg",
    "assets/head01.jpg",
    "assets/head01.jpg",
    "assets/head01.jpg",
    "assets/head01.jpg",
    "assets/head01.jpg",
    "assets/head01.jpg",
    "assets/head02.jpg",
    "assets/head02.jpg",
    "assets/head02.jpg",
    "assets/head03.jpg",
    "assets/head03.jpg",
    "assets/head04.jpg",
    "assets/head04.jpg",
    "assets/head05.jpg",
    "assets/head05.jpg",
    "assets/head06.jpg",
    "assets/head06.jpg",
    "assets/head07.jpg",
    "assets/head07.jpg",
    "assets/head07.jpg",
    "assets/head07.jpg",
    "assets/head07.jpg",
    "assets/head07.jpg",
    "assets/head07.jpg",
    "assets/head07.jpg",
    "assets/head07.jpg",
    "assets/head07.jpg",
    "assets/head07.jpg",

  );

  img = loadImage('assets/screen1.jpg');
  img1 = loadImage('assets/gameover.jpg');
  //  img2 = loadImage('assets/screen3.jpg');
  img3 = loadImage('assets/scenario1.jpg');
  img4 = loadImage('assets/scenario2.jpg');
  img5 = loadImage('assets/scenario3.jpg');
  img6 = loadImage('assets/scenario4.jpg');
  img7 = loadImage('assets/scenario5.jpg');
  img8 = loadImage('assets/scenario6.jpg');
  img9 = loadImage('assets/scenario7.jpg');
  img10 = loadImage('assets/scenario2a.jpg');
  img11 = loadImage('assets/scenario3a.jpg');
  img12 = loadImage('assets/scenario4a.jpg');
  img13 = loadImage('assets/scenario3b.jpg');
  img14 = loadImage('assets/scenario4b.jpg');
  img15 = loadImage('assets/scenario5b.jpg');
  img16 = loadImage('assets/scenario7b.jpg');
  img17 = loadImage('assets/scenario8b.jpg');
  img18 = loadImage('assets/scenario5c.jpg');
  img19 = loadImage('assets/scenario6c.jpg');
  img20 = loadImage('assets/scenario7c.jpg');
  img21 = loadImage('assets/scenario7d.jpg');
  img22 = loadImage('assets/scenario8d.jpg');
  img23 = loadImage('assets/Ending2.jpg');
}

function setup() {
  createCanvas(1280, 1024);
  frameRate(fr);
}

function draw() {

  switch (gameState) {
    case "title":
      titleScreen();
      break;
    case "instructions":
      instructionScreen();
      break;

    case "scenario1":
      scenario1();
      break;
    case "scenario2":
      scenario2();
      break;
    case "scenario3":
      scenario3();
      break;
    case "scenario4":
      scenario4();
      break;
    case "scenario5":
      scenario5();
      break;
    case "scenario6":
      scenario6();
      break;
    case "scenario7":
      scenario7();
      break;
    case "scenario8":
      scenario8();
      break;
    case "scenario9":
      scenario9();
      break;
    case "scenario10":
      scenario10();
      break;
    case "scenario2a":
      scenario2a();
      break;
    case "scenario3a":
      scenario3a();
      break;
    case "scenario4a":
      scenario4a();
      break;
    case "scenario10a":
      scenario10a();
      break;
    case "scenario3b":
      scenario3b();
      break;
    case "scenario4b":
      scenario4b();
      break;
    case "scenario5b":
      scenario5b();
      break;
    case "scenario6b":
      scenario6b();
      break;
    case "scenario7b":
      scenario7b();
      break;
    case "scenario8b":
      scenario8b();
      break;
    case "scenario5c":
      scenario5c();
      break;
    case "scenario6c":
      scenario6c();
      break;
    case "scenario7c":
      scenario7c();
      break;
    case "scenario7d":
      scenario7d();
      break;
    case "scenario8d":
      scenario8d();
      break;

    case "ending1":
      ending1();
      break;
    case "ending2":
      ending2();
      break;
    case "ending3":
      ending3();
      break;
    case "ending4":
      ending4();
      break;
    case "ending5":
      ending5();
      break;
    case "gameover":
      gameover();
      break;
  }
}

function keyReleased() {

  // Click A to start game
  //title
  if (gameState === "title") {
    if (key === "a" || key === "A") {
      gameState = "instructions";
    }
  } else if (gameState === "instructions") {
    if (key === "a" || key === "A") {
      gameState = "scenario1";
    }
  }
  // Select A or B to continue to stage 2
  //stage 1
  else if (gameState === "scenario1") {
    if (key === 'a' || key === 'A') {
      gameState = 'scenario2';
    } else if (key === 'b' || key === 'B') {
      gameState = 'scenario2a';
    }
  }
  // Select A or B to continue to stage 3
  //stage 2
  else if (gameState === "scenario2") {
    if (key === 'a' || key === 'A') {
      gameState = 'scenario3';
    } else if (key === 'b' || key === 'B') {
      gameState = 'scenario3a';
    }
  }

  // Select A or B to continue to stage 4
  //stage3
  else if (gameState === "scenario3") {
    if (key === 'a' || key === 'A') {
      gameState = 'scenario4';
    } else if (key === 'b' || key === 'B') {
      gameState = 'ending5';
    }
  }
  // Select A or B to continue to stage 5
  //stage4
  else if (gameState === "scenario4") {
    if (key === 'a' || key === 'A') {
      gameState = 'scenario5';
    } else if (key === 'b' || key === 'B') {
      gameState = 'scenario5a';
    }
  }
  // Select A or B to continue to stage 6
  //stage5
  else if (gameState === "scenario5") {
    if (key === 'a' || key === 'A') {
      gameState = 'scenario6';
    } else if (key === 'b' || key === 'B') {
      gameState = 'scenario6a';
    }
  }
  // Select A or B to continue to stage 7
  //stage6
  else if (gameState === "scenario6") {
    if (key === 'a' || key === 'A') {
      gameState = 'scenario7';
    } else if (key === 'b' || key === 'B') {
      gameState = 'scenario7b';
    }
  }
  // Select A or B to continue to stage 7
  //stage6
  else if (gameState === "scenario7") {
    if (key === 'a' || key === 'A') {
      gameState = 'scenario8';
    } else if (key === 'b' || key === 'B') {
      gameState = 'ending5';
    }
  }
  // Select A or B to continue to stage 7
  //stage6
  else if (gameState === "scenario8") {
    if (key === 'a' || key === 'A') {
      gameState = 'scenario9';
    } else if (key === 'b' || key === 'B') {
      gameState = 'scenario8b';
    }
  }
  // Select A or B to continue to stage 7
  //stage6
  else if (gameState === "scenario9") {
    if (key === 'a' || key === 'A') {
      gameState = 'scenario10';
    } else if (key === 'b' || key === 'B') {
      gameState = 'scenario10a';
    }
  }
  // Select A or B to continue to stage 7
  //stage6
  else if (gameState === "scenario10") {
    if (key === 'a' || key === 'A') {
      gameState = 'ending1';
    } else if (key === 'b' || key === 'B') {
      gameState = 'ending5';
    }
  }
  // Select A or B to continue to stage 7
  //stage6
  else if (gameState === "scenario2a") {
    if (key === 'a' || key === 'A') {
      gameState = 'scenario3a';
    } else if (key === 'b' || key === 'B') {
      gameState = 'scenario3b';
    }
  }
  // Select A or B to continue to stage 7
  //stage6
  else if (gameState === "scenario3a") {
    if (key === 'a' || key === 'A') {
      gameState = 'scenario4a';
    } else if (key === 'b' || key === 'B') {
      gameState = 'scenario4b';
    }
  }
  // Select A or B to continue to stage 7
  //stage6
  else if (gameState === "scenario4a") {
    if (key === 'a' || key === 'A') {
      gameState = 'scenario5';
    } else if (key === 'b' || key === 'B') {
      gameState = 'scenario5b';
    }
  }

  // Select A or B to continue to stage 7
  //stage6
  else if (gameState === "scenario10a") {
    if (key === 'a' || key === 'A') {
      gameState = 'ending2';
    } else if (key === 'b' || key === 'B') {
      gameState = 'ending3';
    }
  }
  // Select A or B to continue to stage 7
  //stage6
  else if (gameState === "scenario3b") {
    if (key === 'a' || key === 'A') {
      gameState = 'scenario4b';
    } else if (key === 'b' || key === 'B') {
      gameState = 'ending5';
    }
  }
  // Select A or B to continue to stage 7
  //stage6
  else if (gameState === "scenario4b") {
    if (key === 'a' || key === 'A') {
      gameState = 'scenario5b';
    } else if (key === 'b' || key === 'B') {
      gameState = 'scenario5c';
    }
  }
  // Select A or B to continue to stage 7
  //stage6
  else if (gameState === "scenario5b") {
    if (key === 'a' || key === 'A') {
      gameState = 'scenario6b';
    } else if (key === 'b' || key === 'B') {
      gameState = 'scenario6c';
    }
  }
  // Select A or B to continue to stage 7
  //stage6
  else if (gameState === "scenario6b") {
    if (key === 'a' || key === 'A') {
      gameState = 'scenario7b';
    } else if (key === 'b' || key === 'B') {
      gameState = 'scenario7c';
    }
  }
  // Select A or B to continue to stage 7
  //stage6
  else if (gameState === "scenario7b") {
    if (key === 'a' || key === 'A') {
      gameState = 'scenario8b';
    } else if (key === 'b' || key === 'B') {
      gameState = 'ending5';
    }
  }
  // Select A or B to continue to stage 7
  //stage6
  else if (gameState === "scenario8b") {
    if (key === 'a' || key === 'A') {
      gameState = 'ending2';
    } else if (key === 'b' || key === 'B') {
      gameState = 'ending3';
    }
  } else if (gameState === "scenario5c") {
    if (key === 'a' || key === 'A') {
      gameState = 'scenario6c';
    } else if (key === 'b' || key === 'B') {
      gameState = 'scenario6c';
    }
  }
  // Select A or B to continue to stage 7
  //stage6
  else if (gameState === "scenario6c") {
    if (key === 'a' || key === 'A') {
      gameState = 'scenario7c';
    } else if (key === 'b' || key === 'B') {
      gameState = 'scenario7d';
    }
  }
  // Select A or B to continue to stage 7
  //stage6
  else if (gameState === "scenario7c") {
    if (key === 'a' || key === 'A') {
      gameState = 'ending3';
    } else if (key === 'b' || key === 'B') {
      gameState = 'ending5';
    }
  } else if (gameState === "scenario7d") {
    if (key === 'a' || key === 'A') {
      gameState = 'scenario8d';
    } else if (key === 'b' || key === 'B') {
      gameState = 'scenario7c';
    }
  } else if (gameState === "scenario8d") {
    if (key === 'a' || key === 'A') {
      gameState = 'ending4';
    } else if (key === 'b' || key === 'B') {
      gameState = 'scenario7c';
    }
  } else if (gameState === "ending1") {
    if (key === 'a' || key === 'A') {
      gameState = 'title';
    } else if (key === '1') {
      gameState = 'title';
    }
  } else if (gameState === "ending2") {
    if (key === 'a' || key === 'A') {
      gameState = 'title';
    } else if (key === '1') {
      gameState = 'title';
    }
  } else if (gameState === "ending3") {
    if (key === 'a' || key === 'A') {
      gameState = 'title';
    } else if (key === '1') {
      gameState = 'title';
    }
  } else if (gameState === "ending4") {
    if (key === 'a' || key === 'A') {
      gameState = 'title';
    } else if (key === '1') {
      gameState = 'title';
    }
  } else if (gameState === "ending5") {
    if (key === 'a' || key === 'A') {
      gameState = 'title';
    } else if (key === '1') {
      gameState = 'title';
    }
  }
}

function titleScreen() {
  image(img, 0, 0);
  stroke(255);
  fill(255, 128, 128);
  textSize(75);
  textAlign(CENTER);
  text("Bus Boy Simulator", width * 0.5, height * 0.1);
  textSize(35);
  text('Press A To Start Game', width * 0.5, height * 0.95);
}




function instructionScreen() {
  background(49, 29, 224);
  noStroke();
  fill(255, 128, 128);
  textSize(30);
  textAlign(CENTER);
  text("Instructions", width * 0.5, height * 0.1);

  text("You are a bus boy at *Insert your favorite Restaurant* and the boss does not like you.", width * 0.5, height * 0.3);
  text("You will be given scenarios and how you decide to play will ", width * 0.5, height * 0.35)
  text(" determine where you will end up in this SIMPLE life of a busboy.", width * 0.5, height * 0.4)
  text("There are 5 endings so get out there and try to get em all(or don't).", width * 0.5, height * 0.45)
  textSize(48);
  text("Good Luck and Have Fun", width * 0.5, height * 0.6)
  textSize(30);
  text("Press A to go to work", width * 0.5, height * 0.8)

}



function scenario1() {
  background(232, 19, 211);
  image(img3, 0, 0);
  fill(112, 17, 153);
  textSize(50);
  textAlign(CENTER);
  text("You have just started your shift", width * 0.6, height * 0.1);
  text("What do you do", width * 0.6, height * 0.2);
  textSize(25);
  textAlign(CENTER);
  noStroke();
  text("play on your phone", 220, 990);
  text("start working", 920, 990);
  fill(24, 217, 50);
  rect(200, 850, 70, 70);
  rect(900, 850, 70, 70);
  fill(175, 21, 209);
  text("A = scenario2 ", 235, 895);
  text("B = scenario2a", 935, 895);
}

function scenario2() {
  background(255, 247, 189);
  image(img4, 0, 0);
  fill(112, 17, 153);
  textSize(50);
  textAlign(CENTER);
  text("You drop and break a wine glass", width * 0.5, height * 0.1);
  text("What do you do", width * 0.5, height * 0.2);
  textSize(25);
  textAlign(CENTER);
  noStroke();
  text("Clean it up", 220, 990);
  text("Ignore it ", 920, 990);
  fill(24, 217, 50);
  rect(200, 850, 70, 70);
  rect(900, 850, 70, 70);
  fill(175, 21, 209);
  text("A ", 235, 895);
  text("B ", 935, 895);
}

function scenario3() {
  background(232, 19, 211);
  image(img5, 0, 0);
  fill(112, 17, 153);
  textSize(50);
  textAlign(CENTER);
  text("A customer drops their wallet", width * 0.4, height * 0.1);
  text("What do you do", width * 0.4, height * 0.2);
  textSize(25);
  textAlign(CENTER);
  noStroke();
  text("Pocket it ez money", 220, 990);
  text("Return it", 920, 990);
  fill(24, 217, 50);
  rect(200, 850, 70, 70);
  rect(900, 850, 70, 70);
  fill(175, 21, 209);
  text("A ", 235, 895);
  text("B ", 935, 895);
}

function scenario4() {
  background(255, 247, 189);
  image(img6, 0, 0);
  fill(112, 17, 153);
  textSize(50);
  textAlign(CENTER);
  text("Its breaktime", width * 0.5, height * 0.1);
  text("What do you do", width * 0.5, height * 0.2);
  textSize(25);
  textAlign(CENTER);
  noStroke();
  text("Eat ", 220, 990);
  text("Keep working", 920, 990);
  fill(24, 217, 50);
  rect(200, 850, 70, 70);
  rect(900, 850, 70, 70);
  fill(175, 21, 209);
  text("A ", 235, 895);
  text("B ", 935, 895);
}

function scenario5() {
  background(255, 247, 189);
  image(img7, 0, 0);
  fill(0);
  textSize(50);
  textAlign(CENTER);
  text("The manager wants you", width * 0.4, height * 0.2);
  text(" to restock stuff", width * 0.4, height * 0.3);
  text("What do you do", width * 0.4, height * 0.4);
  textSize(25);
  textAlign(CENTER);
  noStroke();
  fill(112, 17, 153);
  text("Restock normally", 220, 990);
  text("Relax in restock room then restock normally", 920, 990);
  fill(24, 217, 50);
  rect(200, 850, 70, 70);
  rect(900, 850, 70, 70);
  fill(175, 21, 209);
  text("A ", 235, 895);
  text("B ", 935, 895);
}

function scenario6() {
  background(255, 247, 189);
  image(img8, 0, 0);
  fill(112, 17, 153);
  textSize(50);
  textAlign(CENTER);
  text("Boss leaves you in charge temporarily", width * 0.5, height * 0.2);
  text("What do you do", width * 0.5, height * 0.3);
  textSize(25);
  textAlign(CENTER);
  noStroke();
  text("Sleep in manager's office", 220, 990);
  text("Work normally", 920, 990);
  fill(24, 217, 50);
  rect(200, 850, 70, 70);
  rect(900, 850, 70, 70);
  fill(175, 21, 209);
  text("A ", 235, 895);
  text("B ", 935, 895);
}

function scenario7() {
  background(255, 247, 189);
  image(img9, 0, 0);
  fill(112, 17, 153);
  textSize(50);
  textAlign(CENTER);
  text("Customer complains about bad food ", width * 0.5, height * 0.1);
  text("What do you do", width * 0.5, height * 0.2);
  textSize(25);
  textAlign(CENTER);
  noStroke();
  text("Tell manager", 220, 990);
  text("Tell them to deal with it", 920, 990);
  fill(24, 217, 50);
  rect(200, 850, 70, 70);
  rect(900, 850, 70, 70);
  fill(175, 21, 209);
  text("A ", 235, 895);
  text("B ", 935, 895);
}

function scenario8() {
  background(255, 247, 189);
  image(img9, 0, 0);
  fill(112, 17, 153);
  textSize(50);
  textAlign(CENTER);
  text("The manager is drunk and can't walk or talk properly ", width * 0.5, height * 0.1);
  text("What do you do", width * 0.5, height * 0.2);
  textSize(25);
  textAlign(CENTER);
  noStroke();
  text("Man up and do his job", 220, 990);
  text("Slap him silly until he is sober", 920, 990);
  fill(24, 217, 50);
  rect(200, 850, 70, 70);
  rect(900, 850, 70, 70);
  fill(175, 21, 209);
  text("A ", 235, 895);
  text("B ", 935, 895);
}

function scenario9() {
  background(255, 247, 189);
  image(img9, 0, 0);
  fill(112, 17, 153);
  textSize(50);
  textAlign(CENTER);
  text("The big boss shows up  ", width * 0.5, height * 0.1);
  text("What do you do", width * 0.5, height * 0.2);
  textSize(25);
  textAlign(CENTER);
  noStroke();
  text("Bring him to the boss", 220, 990);
  text("Offer him champagne", 920, 990);
  fill(24, 217, 50);
  rect(200, 850, 70, 70);
  rect(900, 850, 70, 70);
  fill(175, 21, 209);
  text("A ", 235, 895);
  text("B ", 935, 895);
}

function scenario10() {
  background(255, 247, 189);
  image(img9, 0, 0);
  fill(112, 17, 153);
  textSize(50);
  textAlign(CENTER);
  text("The big boss hands you a katana ", width * 0.5, height * 0.1);
  text("What do you do", width * 0.5, height * 0.2);
  textSize(25);
  textAlign(CENTER);
  noStroke();
  text("Kill the boss", 220, 990);
  text("Return the katana", 920, 990);
  fill(24, 217, 50);
  rect(200, 850, 70, 70);
  rect(900, 850, 70, 70);
  fill(175, 21, 209);
  text("A ", 235, 895);
  text("B ", 935, 895);
}

function ending1() {
  background(232, 19, 211);
  animation(endinganimation1, 640, 510);
  fill(255, 128, 128);
  textSize(50);
  textAlign(CENTER);
  text("You have passed the test ", width * 0.5, height * 0.1);
  text("You are now THEE Boss", width * 0.5, height * 0.2);
  textSize(25);
  textAlign(CENTER);
  noStroke();
  //  text("Go home crying", 220, 890);
  //  text("Cry at work", 920, 890);
  //  rect(200, 750, 70, 70);
  //  rect(900, 750, 70, 70);
  text("Press A to go to title screen", width * 0.5, height * 0.95);
}

function scenario2a() {
  background(232, 19, 211);
  image(img10, 0, 0);
  fill(227, 227, 227);
  textSize(50);
  textAlign(CENTER);
  text(" The boss tells you its time to start work", width * 0.5, height * 0.1);
  text("What do you do", width * 0.5, height * 0.2);
  textSize(25);
  textAlign(CENTER);
  noStroke();
  text("Start working", 220, 990);
  text("Go to the bathroom and play a little longer", 920, 990);
  fill(227, 227, 227);
  rect(200, 850, 70, 70);
  rect(900, 850, 70, 70);
  fill(175, 21, 209);
  text("A ", 235, 895);
  text("B ", 935, 895);
}

function scenario3a() {
  background(232, 19, 211);
  image(img11, 0, 0);
  fill(0);
  textSize(50);
  textAlign(CENTER);
  text("The customer wants a refill on coffee", width * 0.5, height * 0.1);
  text("What do you do", width * 0.5, height * 0.2);
  textSize(25);
  textAlign(CENTER);
  noStroke();
  text(" Get him the coffee", 220, 990);
  text("Ignore him", 920, 990);
  fill(227, 227, 227);
  rect(200, 850, 70, 70);
  rect(900, 850, 70, 70);
  fill(175, 21, 209);
  text("A ", 235, 895);
  text("B ", 935, 895);
}

function scenario4a() {
  background(232, 19, 211);
  image(img12, 0, 0);
  fill(0);
  textSize(50);
  textAlign(CENTER);
  text("Boss leaves you in charge of new coworker", width * 0.5, height * 0.1);
  text("What do you do", width * 0.5, height * 0.2);
  textSize(25);
  textAlign(CENTER);
  noStroke();
  text(" Teach him properly", 220, 990);
  text("Tell another coworker to do it ", 920, 990);
  fill(25);
  rect(200, 850, 70, 70);
  rect(900, 850, 70, 70);
  fill(175, 21, 209);
  text("A ", 235, 895);
  text("B ", 935, 895);
}

function scenario10a() {
  background(232, 19, 211);
  image(img3, 0, 0);
  fill(227, 227, 227);
  textSize(50);
  textAlign(CENTER);
  text("The boss wants some food recommendations ", width * 0.5, height * 0.1);
  text("What do you do", width * 0.5, height * 0.2);
  textSize(25);
  textAlign(CENTER);
  noStroke();
  text("Uh I like the kids menu", 220, 990);
  text("May I suggest the (Insert Fancy Food)", 920, 990);
  fill(227, 227, 227);
  rect(200, 850, 70, 70);
  rect(900, 850, 70, 70);
  fill(175, 21, 209);
  text("A ", 235, 895);
  text("B ", 935, 895);
}

function ending2() {
  background(232, 19, 211);
  img(img23, 640, 510);
  fill(255, 128, 128);
  textSize(50);
  textAlign(CENTER);
  text("What a humble guy ", width * 0.5, height * 0.1);
  text("YOU GET A RAISE", width * 0.5, height * 0.2);
  textSize(25);
  textAlign(CENTER);
  noStroke();
  //  text("Go home crying", 220, 890);
  //  text("Cry at work", 920, 890);
  //  rect(200, 750, 70, 70);
  //  rect(900, 750, 70, 70);
  text("Press A to go to title page", width * 0.5, height * 0.95);
}

function scenario3b() {
  background(255, 247, 189);
  image(img13, 0, 0);
  fill(227, 227, 227);
  textSize(50);
  textAlign(CENTER);
  text("The boss doesnt want to fire you so he tells you to work at their other restaurant", width * 0.5, height * 0.1);
  text("What do you do", width * 0.5, height * 0.2);
  textSize(25);
  textAlign(CENTER);
  noStroke();
  text("Go", 220, 990);
  text("keep playing", 920, 990);
  fill(227, 227, 227);
  rect(200, 850, 70, 70);
  rect(900, 850, 70, 70);
  fill(175, 21, 209);
  text("A ", 235, 895);
  text("B", 935, 895);
}

function scenario4b() {
  background(255, 247, 189);
  image(img14, 0, 0);
  fill(0);
  textSize(50);
  textAlign(CENTER);
  text("Boss says to bring food to tables instead of cleaning tables", width * 0.5, height * 0.1);
  text("What do you do", width * 0.5, height * 0.2);
  textSize(25);
  textAlign(CENTER);
  noStroke();
  text("You are now a runner", 220, 990);
  text("Nope I only clean ", 920, 990);
  fill(0);
  rect(200, 850, 70, 70);
  rect(900, 850, 70, 70);
  fill(175, 21, 209);
  text("A ", 235, 895);
  text("B ", 935, 895);
}

function scenario5b() {
  background(255, 247, 189);
  image(img15, 0, 0);
  fill(25);
  textSize(50);
  textAlign(CENTER);
  text("Food looks good", width * 0.5, height * 0.1);
  text("What do you do", width * 0.5, height * 0.2);
  textSize(25);
  textAlign(CENTER);
  noStroke();
  text("Wait until break", 220, 990);
  text("Eat it ", 920, 990);
  fill(50);
  rect(200, 850, 70, 70);
  rect(900, 850, 70, 70);
  fill(175, 21, 209);
  text("A ", 235, 895);
  text("B ", 935, 895);
}

function scenario6b() {
  background(255, 247, 189);
  image(img6, 0, 0);
  fill(112, 17, 153);
  textSize(50);
  textAlign(CENTER);
  text("Breaktime", width * 0.5, height * 0.1);
  text("What do you do", width * 0.5, height * 0.2);
  textSize(25);
  textAlign(CENTER);
  noStroke();
  text("eat", 220, 990);
  text("work ", 920, 990);
  fill(24, 217, 50);
  rect(200, 850, 70, 70);
  rect(900, 850, 70, 70);
  fill(175, 21, 209);
  text("A ", 235, 895);
  text("B ", 935, 895);
}

function scenario7b() {
  background(255, 247, 189);
  image(img16, 0, 0);
  fill(112, 17, 153);
  textSize(50);
  textAlign(CENTER);
  text("Customer drops all his food after paying", width * 0.5, height * 0.1);
  text("What do you do", width * 0.5, height * 0.2);
  textSize(25);
  textAlign(CENTER);
  noStroke();
  text("Laugh", 220, 990);
  text("Tell chef to make more ", 920, 990);
  fill(24, 217, 50);
  rect(200, 850, 70, 70);
  rect(900, 850, 70, 70);
  fill(175, 21, 209);
  text("A ", 235, 895);
  text("B ", 935, 895);
}

function scenario8b() {
  background(255, 247, 189);
  image(img17, 0, 0);
  fill(112, 17, 153);
  textSize(50);
  textAlign(CENTER);
  text("Restaurant is closing ", width * 0.5, height * 0.1);
  text("What do you do", width * 0.5, height * 0.2);
  textSize(25);
  textAlign(CENTER);
  noStroke();
  text("Close restaurant", 220, 990);
  text("Leave its not your restaurant", 920, 990);
  fill(24, 217, 50);
  rect(200, 850, 70, 70);
  rect(900, 850, 70, 70);
  fill(175, 21, 209);
  text("A ", 235, 895);
  text("B ", 935, 895);
}

function ending3() {
  background(232, 19, 211);
  animation(endinganimation3,0,0);
  fill(255, 128, 128);
  textSize(50);
  textAlign(CENTER);
  text("Stuck like this ", width * 0.5, height * 0.1);
  text("You will forever be nothing but a buser", width * 0.5, height * 0.2);
  textSize(25);
  textAlign(CENTER);
  noStroke();
  //  text("Go home crying", 220, 890);
  //  text("Cry at work", 920, 890);
  //  rect(200, 750, 70, 70);
  //  rect(900, 750, 70, 70);
  text("Press A to go to title page", width * 0.5, height * 0.95);

}

function scenario5c() {
  background(255, 247, 189);
  image(img18, 0, 0);
  fill(112, 17, 153);
  textSize(50);
  textAlign(CENTER);
  text("A table is dirty", width * 0.5, height * 0.1);
  text("What do you do", width * 0.5, height * 0.2);
  textSize(25);
  textAlign(CENTER);
  noStroke();
  text("Clean it", 220, 990);
  text("Clean it later? ", 920, 990);
  fill(24, 217, 50);
  rect(200, 850, 70, 70);
  rect(900, 850, 70, 70);
  fill(175, 21, 209);
  text("A ", 235, 895);
  text("B  ", 935, 895);
}

function scenario6c() {
  background(255, 247, 189);
  image(img19, 0, 0);
  fill(112, 17, 153);
  textSize(50);
  textAlign(CENTER);
  text("You are sent to organize the storage room", width * 0.5, height * 0.1);
  text("What do you do", width * 0.5, height * 0.2);
  textSize(25);
  textAlign(CENTER);
  noStroke();
  text("Explore", 220, 990);
  text("Clean and leave ", 920, 990);
  fill(24, 217, 50);
  rect(200, 850, 70, 70);
  rect(900, 850, 70, 70);
  fill(175, 21, 209);
  text("A ", 235, 895);
  text("B ", 935, 895);
}

function scenario7c() {
  background(255, 247, 189);
  image(img20, 0, 0);
  fill(112, 17, 153);
  textSize(50);
  textAlign(CENTER);
  text("Someone throws up in the cafe", width * 0.5, height * 0.1);
  text("What do you do", width * 0.5, height * 0.2);
  textSize(25);
  textAlign(CENTER);
  noStroke();
  text("Go home", 220, 990);
  text(" Sigh", 920, 990);
  fill(24, 217, 50);
  rect(200, 850, 70, 70);
  rect(900, 850, 70, 70);
  fill(175, 21, 209);
  text("A ", 235, 895);
  text("B ", 935, 895);
}

function ending4() {
  background(232, 19, 211);
  animation(endinganimation4, 640, 510);
  fill(255, 128, 128);
  textSize(50);
  textAlign(CENTER);
  text("WHAT ARE YOU DOING HERE ", width * 0.5, height * 0.1);
  text("Oh no, you found out this is a simulation", width * 0.5, height * 0.2);
  textSize(25);
  textAlign(CENTER);
  noStroke();
  //  text("Go home crying", 220, 890);
  //  text("Cry at work", 920, 890);
  //  rect(200, 750, 70, 70);
  //  rect(900, 750, 70, 70);
  text("Press A to go to title page", width * 0.5, height * 0.95);
}

function scenario7d() {
  background(255, 247, 189);
  image(img21, 0, 0);
  fill(112, 17, 153);
  textSize(50);
  textAlign(CENTER);
  text("What are you doing", width * 0.5, height * 0.1);
  text("No employees allowed", width * 0.5, height * 0.2);
  textSize(25);
  textAlign(CENTER);
  noStroke();
  text("keep going", 220, 990);
  text(" Oops wrong door", 920, 990);
  fill(24, 217, 50);
  rect(200, 850, 70, 70);
  rect(900, 850, 70, 70);
  fill(175, 21, 209);
  text("A ", 235, 895);
  text("B ", 935, 895);
}

function scenario8d() {
  background(255, 247, 189);
  image(img22, 0, 0);
  fill(112, 17, 153);
  textSize(50);
  textAlign(CENTER);
  text("Another door", width * 0.5, height * 0.1);
  text("What do you do", width * 0.5, height * 0.2);
  textSize(25);
  textAlign(CENTER);
  noStroke();
  text("Might as well keep goin", 220, 990);
  text(" Bad idea so ill leave", 920, 990);
  fill(24, 217, 50);
  rect(200, 850, 70, 70);
  rect(900, 850, 70, 70);
  fill(175, 21, 209);
  text("A ", 235, 895);
  text("B ", 935, 895);
}

function ending5() {
  background(232, 19, 211);
  animation(endinganimation5, 640, 510);
  fill(255, 128, 128);
  textSize(50);
  textAlign(CENTER);
  text("How did this happen... ", width * 0.5, height * 0.1);
  text("FIRED", width * 0.5, height * 0.2);
  textSize(25);
  textAlign(CENTER);
  noStroke();
  //  text("Go home crying", 220, 890);
  //  text("Cry at work", 920, 890);
  //  rect(200, 750, 70, 70);
  //  rect(900, 750, 70, 70);

  text("Press A to go to title page", width * 0.5, height * 0.95);
}


//function artistStatement() {
//  background(255, 247, 189);
//  fill(0);
//  textSize(25);
//  textAlign(CENTER);
//  textStyle(BOLD);
//  text("Artist Statement ", width * 0.5, height * 0.1);
//  textStyle(NORMAL);
//  text("This project is based on my experience working at a restaurant as a busser.  ", width * 0.5, height * 0.2);
//  text("It was made to emulate an buser at a restaurant and what you should and should not do.", width * 0.5, height * 0.3);
//  text("The goal of the game is to make sure you are making the right choices and not get fired.", width * 0.5, height * 0.4);
//  text("The reason I chose to make a game about my experience at a restaurant is because it was ", width * 0.5, height * 0.5);
//  text("where this or that happens so I thought that I should make a game of that reality instead of actually ", width * 0.5, height * 0.6);
//  text("something I genuinely enjoyed and sometimes when I worked there, I would imagine these scenarios ", width * 0.5, height * 0.7);
//  text("doing some of these things that could get my boss angry.", width * 0.5, height * 0.8);
//  textSize(25);
//  textAlign(CENTER);
//  noStroke();
//  text("Press A or 1 to play again", 220, 990);
//  text("WootWoot", 920, 990);
//  fill(24, 217, 50);
//  rect(200, 850, 70, 70);
//  rect(900, 850, 70, 70);
//}
