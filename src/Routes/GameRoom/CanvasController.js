import commends from "../../Socket/Commends";
import { getSocket } from "../../Socket/Socket";

let canvas=''
let ctx=''
let colors=[]
let mode=''
let controls = ''
let lastx = 0;
let lasty = 0;
const INITIAL_COLOR = "#2c2c2c";
const CANVAS_SIZE = 600;
const CANVAS_PIXEL = CANVAS_SIZE*2;

export const initCanvas = () =>{
  canvas = document.getElementById("jsCanvas");
  
  ctx = canvas.getContext("2d");
  colors = document.getElementsByClassName("jsColor");
  controls = document.getElementById("jsControls");
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
  resetCanvas();
  disableCanvas();
  hideControls();
}
let painting = false;


function stopPainting(event) {
  const x = event.offsetX*2;
  const y = event.offsetY*2;
  dot(x, y)
  painting = false;
}

function startPainting() {
  painting = true;
}

function dot(x,y) {
  ctx.beginPath();
  ctx.arc(x,y,1,0,Math.PI*2,true);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
}

function line(fromx,fromy, tox,toy) {
  ctx.beginPath();
  ctx.moveTo(fromx, fromy);
  ctx.lineTo(tox, toy);
  ctx.stroke();
  ctx.closePath();
}

const touchmove = (event) => {                   
  event.preventDefault();                 

  const newx = event.offsetX*2;
  const newy = event.offsetY*2;

  line(lastx,lasty, newx,newy);
  
  lastx = newx;
  lasty = newy;
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
    getSocket().emit(commends.beginPath, { x, y });
  } else {
    strokePath(x, y);
    getSocket().emit(commends.strokePath, {
      x,
      y,
      color: ctx.strokeStyle,
    });
  }
}

function handleColorClick(event) {
  const color = event.target.id;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

function handlePaintClick() {
  fill();
  getSocket().emit(commends.fill, ctx.fillStyle)
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
  canvas.removeEventListener("touchstart", startPainting);
  canvas.removeEventListener("touchmove", touchmove);
};

export const enableCanvas = () => {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("touchstart", startPainting);
  canvas.addEventListener("touchmove", touchmove);
};

export const hideControls = () => {
  controls.style.visibility = "hidden";
};
export const showControls = () => {
  controls.style.visibility = "visible";
};
export const resetCanvas = () => {
  fill("#fff");
}
if (canvas) {
  canvas.addEventListener("contextmenu", handleCM);
}