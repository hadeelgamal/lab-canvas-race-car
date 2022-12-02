const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const roadImg = new Image();
roadImg.src = "images/road.png";

const carImg = new Image();
carImg.src = "images/car.png";

let x = 220;
let y = 600;

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    // startGame();
    update()
  };

  function startGame() {
    ctx.clearRect(0, 0, 1500, 1700);
    ctx.drawImage(roadImg, 0, 0, 500, 700);
    ctx.drawImage(carImg, 220, 600, 50, 70);
  }

  function moveRight() {
    x += 20;
  }

  function moveLeft() {
    x -= 20;
  }

  function update(){
    ctx.clearRect(0, 0, 1500, 1700);
    ctx.drawImage(roadImg, 0, 0, 500, 700);
    ctx.drawImage(carImg, x, y, 50, 70);
  }

  document.addEventListener("keydown", (event) => {
    console.log("event keyCode", event.keyCode);
    switch (event.keyCode) {
      case 37:
        moveLeft(carImg);
        break;
      case 39:
        moveRight(carImg);

        break;
      case 32:
        reset(carImg);
    }
    update()
  });
  // function move()
  //   {
  //     document.addEventListener('keydown', (e) => {
  //       switch (e.keycode) {
  //         case 37:
  //         player.speedX --; //keydow
  //         break
  //         case 39:
  //         player.speedX++;
  //       }
  //     });
  //     document.addEventListener('keyup', (element) => {
  //         player.speedX = 0;
  //     });
  //   }
};
