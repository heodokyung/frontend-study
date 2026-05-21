
// 이미지 저장 버튼
const saveBtn = document.querySelectorAll(".btn-save");
// 글씨 입력 Input
const textInput = document.querySelector(".font-field-wrap .text-field");
// 글씨 폰트 사이즈 값
const fontOptionInput = document.querySelector(".font-field-wrap .text-option");
// 폰트 사이즈 값
let FONT_SIZE_VALUE = fontOptionInput.value;

// 파일 호출 Input
const fileInput = document.getElementById("file");

// 지우개 버튼
const eraserBtn = document.getElementById("eraser-btn");
// 초기화 버튼
const destroyBtn = document.getElementById("destroy-btn");
// 채우기 버튼
const modeBtn = document.getElementById("mode-btn");

// 컬러값 선택: 배열 요소로 만들어 주기 위해 from 실행(바로 호출할경우 html 엘리먼트를 반환)
const colorOptions = Array.from(
  document.querySelectorAll(".color-options .option")
);

// 컬러값 Input (선택 컬러값)
const color = document.querySelector(".select-color");

// 그리기 라인두께 조정
const lineWidth = document.getElementById("line-width");

const lineValueTxt = document.querySelector(".line-option .line-value");
// co
// lineValueTxt.innerText(LINE_WIDTH_VALUE)

// 그리기를 지속중(마우스로 그리기가 멈춤)안지 판별
let isPainting = false;
// 채우기 모드 or 그리기 모드 판별
let isFilling = false;
// 이미지 저장 시 png, jpg 구분
let isImageMode = false;


// 캔버스
const canvas = document.querySelector("canvas");
// 캔버스 기본 설정 완료
const ctx = canvas.getContext("2d");

const CANVAS_INIT_POSITION = 0;
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

// 초기 라인값 세팅
ctx.lineWidth = lineWidth.value;
lineValueTxt.innerText = lineWidth.value;
ctx.lineCap = "round";

// 그리기 이동
function onMove(event) {
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  ctx.moveTo(event.offsetX, event.offsetY);
}

function startPainting() {
  isPainting = true;
}

function cancelPainting() {
  isPainting = false;
  // ctx.fill();
  ctx.beginPath();
}

function onLineWidthChange(event) {
  let changeValue = event.target.value;
  ctx.lineWidth = changeValue;
  lineValueTxt.innerText = changeValue;
}

function onColorChange(event) {
  ctx.strokeStyle = event.target.value;
  ctx.fillStyle = event.target.value;
}

function onColorClick(event) {
  const colorValue = event.target.dataset.color;
  ctx.strokeStyle = colorValue;
  ctx.fillStyle = colorValue;
  color.value = colorValue;
}

function onModeClick() {
  if (isFilling) {
    isFilling = false;
    modeBtn.innerText = "그리기";
  } else {
    isFilling = true;
    modeBtn.innerText = "채우기";
  }
}

function onCanvasClick() {
  if (isFilling) {
    ctx.fillRect(CANVAS_INIT_POSITION, CANVAS_INIT_POSITION, CANVAS_WIDTH, CANVAS_HEIGHT);
  }
}

function onDestroyClick() {
  ctx.fillStyle = "white";
  ctx.fillRect(CANVAS_INIT_POSITION, CANVAS_INIT_POSITION, CANVAS_WIDTH, CANVAS_HEIGHT);
}

function onEraserClick() {
  ctx.strokeStyle = "white";
  isFilling = false;
  modeBtn.innerText = "Fill";
}

// 이미지 파일 불러오기
function onFileChange(event) {
  const file = event.target.files[0];
  const url = URL.createObjectURL(file);
  const image = new Image(); // ===  document.createElement('image') 와 같음
  image.src = url;
  image.onload = function () {
    ctx.drawImage(image, CANVAS_INIT_POSITION, CANVAS_INIT_POSITION, CANVAS_WIDTH, CANVAS_HEIGHT);
    fileInput.value = null;
  };
}



// 폰트 사이즈 변경
function onFontChange(event) {
  FONT_SIZE_VALUE  = event.target.value;

  if (Number(FONT_SIZE_VALUE) > 100) {
    alert('폰트사이즈의 최대값은 100px 입니다.')
    FONT_SIZE_VALUE = 100;
  }
  fontOptionInput.value = String(FONT_SIZE_VALUE);
}

// 텍스트 입력 후 클릭시 글씨가 그림판에 그려짐
function onTextInsertClick(event) {
  const text = textInput.value;
  if (text !== "") {
    ctx.save(); // 이전 설정을 저장, 이후 변경 사항은 반영되지 않음

    ctx.lineWidth = 1;
    ctx.font = ""+FONT_SIZE_VALUE+"px sans-serif";
    ctx.fillText(text, event.offsetX, event.offsetY);

    ctx.restore(); // 다시 이전 저장값을 불러와 캔버스에 그림을 그릴 수 있음
  }
}

// 이미지 저장
function onSaveClick(event) {
  const url = canvas.toDataURL();
  const a = document.createElement("a");
  const option = event.target.dataset.option;
  a.href = url;
  a.download = "myDrawing."+option+"";
  a.click();
}



// 더블클릭 -> 텍스트 입력
canvas.addEventListener("click", onTextInsertClick);
// 마우스 이동(그리는 중)
canvas.addEventListener("mousemove", onMove);
// 마우스 멈춤(그리기 시작)
canvas.addEventListener("mousedown", startPainting);
// 마우스 멈춤(그리기 종료)
canvas.addEventListener("mouseup", cancelPainting);
// 마우스 영역 이탈(그리기 종료)
canvas.addEventListener("mouseleave", cancelPainting);

canvas.addEventListener("click", onCanvasClick);
lineWidth.addEventListener("change", onLineWidthChange);
fontOptionInput.addEventListener("change", onFontChange);
color.addEventListener("change", onColorChange);
colorOptions.forEach((color) => color.addEventListener("click", onColorClick));
modeBtn.addEventListener("click", onModeClick);
destroyBtn.addEventListener("click", onDestroyClick);
eraserBtn.addEventListener("click", onEraserClick);
fileInput.addEventListener("change", onFileChange);
saveBtn.forEach((btn) => btn.addEventListener("click", onSaveClick));
