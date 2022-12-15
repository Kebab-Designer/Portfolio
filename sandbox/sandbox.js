const canvas = document.querySelector('.myCanvas');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');



ctx.fillStyle = 'rgb(0,0,0)';
ctx.fillRect(0,0,width,height);
//Setup

// //example
// ctx.translate(width / 2, height / 2);

// function degToRad(degrees) {
//     return degrees * Math.PI / 180;
//   }
  
//   function rand(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
  
//   let length = 250;
//   let moveOffset = 20;
  
//   for (let i = 0; i < length; i++) {

//     ctx.fillStyle = `rgba(${100 - length},0,${255 - length},0.9)`;
//     ctx.beginPath();
//     ctx.moveTo(moveOffset, moveOffset);
//     ctx.lineTo(moveOffset + length, moveOffset);
//     const triHeight = length / 2 * Math.tan(degToRad(60));
//     ctx.lineTo(moveOffset + length / 2, moveOffset + triHeight);
//     ctx.lineTo(moveOffset, moveOffset);
//     ctx.fill();
    
//     length--;
//     moveOffset += 0.7;
//     ctx.rotate(degToRad(5));
//   }
// //example

  //animation

function loop() {

    //let = int decleration beginnning of loop
    let dotSize = 1; 
    let gridSize = 40;

    ctx.fillStyle = 'rgba(0, 0, 0)'; // resets bg color to black
    ctx.fillRect(0, 0,  width, height); // redraws bg

    //console log for x and y location of mouse
    window.addEventListener('mousemove', function (e) {

        var mouseX = e.x;
        var mouseY = e.y;
    });


    //for loops -> grid

    for (let w = 0; w <=canvas.width; w += gridSize) {
        for (let h = 0; h <= canvas.height; h += gridSize){

            ctx.fillStyle = "rgba(255, 0, 255)";
            ctx.fillRect(w, h, dotSize, dotSize);

        }
    }


    //create square every frame on cursor
    ctx.fillStyle = "rgba(100, 200, 255)";
    ctx.fillRect(e.x, e.y, 80, 80);


    requestAnimationFrame(loop);
}

loop();