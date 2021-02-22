
let canvas=''
let ctx=''
let colors=[]
let mode=''
const INITIAL_COLOR = "#2c2c2c";
const CANVAS_SIZE = 600;
const CANVAS_PIXEL = CANVAS_SIZE*2;

export const initCanvas = () =>{
  canvas = document.getElementById("jsCanvas");
  
  ctx = canvas.getContext("2d");
  colors = document.getElementsByClassName("jsColor");
  //const controls = document.getElementById("jsControls");
  mode = document.getElementById("jsMode");

  canvas.width = CANVAS_PIXEL;
  canvas.height = CANVAS_PIXEL;
  
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, CANVAS_PIXEL, CANVAS_PIXEL);
  ctx.strokeStyle = INITIAL_COLOR;
  ctx.fillStyle = INITIAL_COLOR;
  ctx.lineWidth = 2.5;

  Array.from(colors).forEach((color) =>
  color.addEventListener("click", handleColorClick)
  );

  if (mode) {
    mode.addEventListener("click", handlePaintClick);
  }
  
}
let painting = false;


function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

const beginPath = (x, y) => {
  ctx.beginPath();
  ctx.moveTo(x, y);
};

const strokePath = (x, y, color = null) => {
  let currentColor = ctx.strokeStyle;
  if (color !== null) {
    ctx.strokeStyle = color;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.strokeStyle = currentColor;
};

function onMouseMove(event) {
  const x = event.offsetX*2;
  const y = event.offsetY*2;
  if (!painting) {
    beginPath(x, y);
    //getSocket().emit(window.events.beginPath, { x, y });
  } else {
    strokePath(x, y);
    /*getSocket().emit(window.events.strokePath, {
      x,
      y,
      color: ctx.strokeStyle,
    });*/
  }
}

function handleColorClick(event) {
  const color = event.target.id;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

function handlePaintClick() {
  fill();
}

const fill = (color = null) => {
  let currentColor = ctx.fillStyle;
  if (color !== null) {
    ctx.fillStyle = color;
  }
  ctx.fillRect(0, 0, CANVAS_PIXEL, CANVAS_PIXEL);
  ctx.fillStyle = currentColor;
};


function handleCM(event) {
  event.preventDefault();
}


export const handleBeganPath = ({ x, y }) => {
  beginPath(x, y);
};
export const handleStrokedPath = ({ x, y, color }) => {
  strokePath(x, y, color);
};
export const handleFilled = ({ color }) => {
  fill(color);
};
export const disableCanvas = () => {
  canvas.removeEventListener("mousemove", onMouseMove);
  canvas.removeEventListener("mousedown", startPainting);
  canvas.removeEventListener("mouseup", stopPainting);
  canvas.removeEventListener("mouseleave", stopPainting);
};

export const enableCanvas = () => {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
};
/*
export const hideControls = () => {
  controls.style.display = "none";
};
export const showControls = () => {
  controls.style.display = "flex";
};
export const resetCanvas = () => {
  fill("#fff");
}
if (canvas) {
  canvas.addEventListener("contextmenu", handleCM);
  hideControls();
}
*/
