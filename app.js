const words = [
  { word: "사과", emoji: "🍎", label: "사과" },
  { word: "나무", emoji: "🌳", label: "나무" },
  { word: "자동차", emoji: "🚗", label: "자동차" },
  { word: "집", emoji: "🏠", label: "집" },
  { word: "바나나", emoji: "🍌", label: "바나나" },
  { word: "모자", emoji: "🧢", label: "모자" },
  { word: "공", emoji: "⚽", label: "공" },
  { word: "책", emoji: "📚", label: "책" },
  { word: "꽃", emoji: "🌼", label: "꽃" },
  { word: "우유", emoji: "🥛", label: "우유" },
  { word: "강아지", emoji: "🐶", label: "강아지" },
  { word: "고양이", emoji: "🐱", label: "고양이" },
  { word: "토끼", emoji: "🐰", label: "토끼" },
  { word: "곰", emoji: "🐻", label: "곰" },
  { word: "호랑이", emoji: "🐯", label: "호랑이" },
  { word: "사자", emoji: "🦁", label: "사자" },
  { word: "돼지", emoji: "🐷", label: "돼지" },
  { word: "소", emoji: "🐮", label: "소" },
  { word: "말", emoji: "🐴", label: "말" },
  { word: "오리", emoji: "🦆", label: "오리" },
  { word: "닭", emoji: "🐔", label: "닭" },
  { word: "개구리", emoji: "🐸", label: "개구리" },
  { word: "물고기", emoji: "🐟", label: "물고기" },
  { word: "나비", emoji: "🦋", label: "나비" },
  { word: "벌", emoji: "🐝", label: "벌" },
  { word: "딸기", emoji: "🍓", label: "딸기" },
  { word: "포도", emoji: "🍇", label: "포도" },
  { word: "수박", emoji: "🍉", label: "수박" },
  { word: "복숭아", emoji: "🍑", label: "복숭아" },
  { word: "레몬", emoji: "🍋", label: "레몬" },
  { word: "당근", emoji: "🥕", label: "당근" },
  { word: "옥수수", emoji: "🌽", label: "옥수수" },
  { word: "감자", emoji: "🥔", label: "감자" },
  { word: "빵", emoji: "🍞", label: "빵" },
  { word: "치즈", emoji: "🧀", label: "치즈" },
  { word: "달걀", emoji: "🥚", label: "달걀" },
  { word: "밥", emoji: "🍚", label: "밥" },
  { word: "국수", emoji: "🍜", label: "국수" },
  { word: "피자", emoji: "🍕", label: "피자" },
  { word: "아이스크림", emoji: "🍦", label: "아이스크림" },
  { word: "케이크", emoji: "🍰", label: "케이크" },
  { word: "사탕", emoji: "🍬", label: "사탕" },
  { word: "쿠키", emoji: "🍪", label: "쿠키" },
  { word: "주스", emoji: "🧃", label: "주스" },
  { word: "물", emoji: "💧", label: "물" },
  { word: "버스", emoji: "🚌", label: "버스" },
  { word: "기차", emoji: "🚆", label: "기차" },
  { word: "비행기", emoji: "✈️", label: "비행기" },
  { word: "자전거", emoji: "🚲", label: "자전거" },
  { word: "배", emoji: "⛵", label: "배" },
  { word: "소방차", emoji: "🚒", label: "소방차" },
  { word: "경찰차", emoji: "🚓", label: "경찰차" },
  { word: "구급차", emoji: "🚑", label: "구급차" },
  { word: "우산", emoji: "☂️", label: "우산" },
  { word: "신발", emoji: "👟", label: "신발" },
  { word: "양말", emoji: "🧦", label: "양말" },
  { word: "가방", emoji: "🎒", label: "가방" },
  { word: "안경", emoji: "👓", label: "안경" },
  { word: "시계", emoji: "⌚", label: "시계" },
  { word: "연필", emoji: "✏️", label: "연필" },
  { word: "크레용", emoji: "🖍️", label: "크레용" },
  { word: "가위", emoji: "✂️", label: "가위" },
  { word: "종이", emoji: "📄", label: "종이" },
  { word: "상자", emoji: "📦", label: "상자" },
  { word: "선물", emoji: "🎁", label: "선물" },
  { word: "풍선", emoji: "🎈", label: "풍선" },
  { word: "별", emoji: "⭐", label: "별" },
  { word: "달", emoji: "🌙", label: "달" },
  { word: "해", emoji: "☀️", label: "해" },
  { word: "구름", emoji: "☁️", label: "구름" },
  { word: "비", emoji: "🌧️", label: "비" },
  { word: "눈", emoji: "❄️", label: "눈" },
  { word: "무지개", emoji: "🌈", label: "무지개" },
  { word: "바다", emoji: "🌊", label: "바다" },
  { word: "산", emoji: "⛰️", label: "산" },
  { word: "강", emoji: "🏞️", label: "강" },
  { word: "학교", emoji: "🏫", label: "학교" },
  { word: "병원", emoji: "🏥", label: "병원" },
  { word: "가게", emoji: "🏪", label: "가게" },
  { word: "놀이터", emoji: "🛝", label: "놀이터" },
  { word: "공원", emoji: "🏞️", label: "공원" },
  { word: "도서관", emoji: "📚", label: "도서관" },
  { word: "부엌", emoji: "🍳", label: "부엌" },
  { word: "침대", emoji: "🛏️", label: "침대" },
  { word: "의자", emoji: "🪑", label: "의자" },
  { word: "문", emoji: "🚪", label: "문" },
  { word: "창문", emoji: "🪟", label: "창문" },
  { word: "전화기", emoji: "☎️", label: "전화기" },
  { word: "컴퓨터", emoji: "💻", label: "컴퓨터" },
  { word: "텔레비전", emoji: "📺", label: "텔레비전" },
  { word: "로봇", emoji: "🤖", label: "로봇" },
  { word: "블록", emoji: "🧱", label: "블록" },
  { word: "퍼즐", emoji: "🧩", label: "퍼즐" },
  { word: "공룡", emoji: "🦖", label: "공룡" },
  { word: "우주선", emoji: "🚀", label: "우주선" },
  { word: "마이크", emoji: "🎤", label: "마이크" },
  { word: "피아노", emoji: "🎹", label: "피아노" },
  { word: "축구공", emoji: "⚽", label: "축구공" },
  { word: "야구공", emoji: "⚾", label: "야구공" },
  { word: "농구공", emoji: "🏀", label: "농구공" }
];

const startScreen = document.querySelector("#startScreen");
const playScreen = document.querySelector("#playScreen");
const startButton = document.querySelector("#startButton");
const homeButton = document.querySelector("#homeButton");
const nextButton = document.querySelector("#nextButton");
const clearButton = document.querySelector("#clearButton");
const speakButton = document.querySelector("#speakButton");
const picture = document.querySelector("#picture");
const guideCanvas = document.querySelector("#guideCanvas");
const drawCanvas = document.querySelector("#drawCanvas");
const progressFill = document.querySelector("#progressFill");
const progressText = document.querySelector("#progressText");
const completeBadge = document.querySelector("#completeBadge");
const completionActions = document.querySelector("#completionActions");
const previousWordButton = document.querySelector("#previousWordButton");
const nextWordButton = document.querySelector("#nextWordButton");

const guideCtx = guideCanvas.getContext("2d", { willReadFrequently: true });
const drawCtx = drawCanvas.getContext("2d", { willReadFrequently: true });

let activeWord = words[0];
let pointerDown = false;
let lastPoint = null;
let complete = false;
let guideMask = null;
let guidePixelCount = 0;
let currentIndex = -1;
let wordHistory = [];
let historyPosition = -1;

function setScreen(screen) {
  startScreen.classList.toggle("hidden", screen !== "start");
  playScreen.classList.toggle("hidden", screen !== "play");
  if (screen === "play") {
    requestAnimationFrame(() => {
      resizeCanvases();
      pickWord();
    });
  }
}

function pickWord() {
  let nextIndex = Math.floor(Math.random() * words.length);
  if (words.length > 1) {
    while (nextIndex === currentIndex) {
      nextIndex = Math.floor(Math.random() * words.length);
    }
  }
  wordHistory = wordHistory.slice(0, historyPosition + 1);
  wordHistory.push(nextIndex);
  historyPosition = wordHistory.length - 1;
  showWord(nextIndex);
}

function showWord(nextIndex) {
  currentIndex = nextIndex;
  activeWord = words[currentIndex];
  picture.textContent = activeWord.emoji;
  picture.setAttribute("aria-label", `${activeWord.label} 그림`);
  resetDrawing();
  updateNavigationState();
}

function showPreviousWord() {
  if (historyPosition <= 0) {
    return;
  }
  historyPosition -= 1;
  showWord(wordHistory[historyPosition]);
}

function updateNavigationState() {
  previousWordButton.disabled = historyPosition <= 0;
}

function resizeCanvases() {
  const rect = guideCanvas.parentElement.getBoundingClientRect();
  const ratio = Math.max(1, window.devicePixelRatio || 1);

  [guideCanvas, drawCanvas].forEach((canvas) => {
    canvas.width = Math.round(rect.width * ratio);
    canvas.height = Math.round(rect.height * ratio);
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
  });

  guideCtx.setTransform(ratio, 0, 0, ratio, 0, 0);
  drawCtx.setTransform(ratio, 0, 0, ratio, 0, 0);
  drawGuide();
  clearInk();
}

function fontSizeForWord(word, width, height) {
  const maxWidth = width * 0.78;
  const maxHeight = height * 0.54;
  let size = Math.min(height * 0.62, width * 0.42);

  while (size > 48) {
    guideCtx.font = `900 ${size}px "Malgun Gothic", "Apple SD Gothic Neo", sans-serif`;
    const metrics = guideCtx.measureText(word);
    const measuredHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
    if (metrics.width <= maxWidth && measuredHeight <= maxHeight) {
      return size;
    }
    size -= 4;
  }

  return size;
}

function drawGuide() {
  const width = guideCanvas.clientWidth;
  const height = guideCanvas.clientHeight;
  guideCtx.clearRect(0, 0, width, height);
  guideCtx.fillStyle = "#e7dfd5";
  guideCtx.textAlign = "center";
  guideCtx.textBaseline = "middle";
  guideCtx.font = `900 ${fontSizeForWord(activeWord.word, width, height)}px "Malgun Gothic", "Apple SD Gothic Neo", sans-serif`;
  guideCtx.fillText(activeWord.word, width / 2, height / 2 - 4);

  const data = guideCtx.getImageData(0, 0, guideCanvas.width, guideCanvas.height).data;
  guideMask = new Uint8Array(guideCanvas.width * guideCanvas.height);
  guidePixelCount = 0;

  for (let i = 3, p = 0; i < data.length; i += 4, p += 1) {
    if (data[i] > 35) {
      guideMask[p] = 1;
      guidePixelCount += 1;
    }
  }
}

function clearInk() {
  drawCtx.clearRect(0, 0, drawCanvas.clientWidth, drawCanvas.clientHeight);
  drawCtx.lineCap = "round";
  drawCtx.lineJoin = "round";
  drawCtx.strokeStyle = "#147d64";
  drawCtx.lineWidth = Math.max(15, drawCanvas.clientHeight * 0.055);
  complete = false;
  completeBadge.classList.add("hidden");
  completionActions.classList.add("hidden");
  updateProgress(0);
}

function resetDrawing() {
  resizeCanvases();
}

function getPoint(event) {
  const rect = drawCanvas.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  };
}

function drawTo(point) {
  if (!lastPoint) {
    lastPoint = point;
  }
  drawCtx.beginPath();
  drawCtx.moveTo(lastPoint.x, lastPoint.y);
  drawCtx.lineTo(point.x, point.y);
  drawCtx.stroke();
  lastPoint = point;
  checkProgress();
}

function checkProgress() {
  if (!guideMask || !guidePixelCount) {
    return;
  }

  const data = drawCtx.getImageData(0, 0, drawCanvas.width, drawCanvas.height).data;
  let covered = 0;

  for (let p = 0, i = 3; p < guideMask.length; p += 1, i += 4) {
    if (guideMask[p] && data[i] > 10) {
      covered += 1;
    }
  }

  const percent = Math.min(100, Math.round((covered / guidePixelCount) * 100));
  updateProgress(percent);

  if (!complete && percent >= 75) {
    complete = true;
    completeBadge.classList.remove("hidden");
    completionActions.classList.remove("hidden");
    updateNavigationState();
    playSuccessSound();
    setTimeout(() => speakWord(true), 320);
  }
}

function updateProgress(percent) {
  progressFill.style.width = `${percent}%`;
  progressText.textContent = `${percent}%`;
}

function playSuccessSound() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) {
    return;
  }

  const audio = new AudioContext();
  const now = audio.currentTime;
  [523.25, 659.25, 783.99].forEach((freq, index) => {
    const oscillator = audio.createOscillator();
    const gain = audio.createGain();
    oscillator.type = "sine";
    oscillator.frequency.value = freq;
    gain.gain.setValueAtTime(0.001, now + index * 0.12);
    gain.gain.exponentialRampToValueAtTime(0.16, now + index * 0.12 + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, now + index * 0.12 + 0.14);
    oscillator.connect(gain);
    gain.connect(audio.destination);
    oscillator.start(now + index * 0.12);
    oscillator.stop(now + index * 0.12 + 0.16);
  });
}

function speakWord(slow = false) {
  if (!("speechSynthesis" in window)) {
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(activeWord.word);
  utterance.lang = "ko-KR";
  utterance.rate = slow ? 0.55 : 0.75;
  utterance.pitch = 1.04;
  window.speechSynthesis.speak(utterance);
}

drawCanvas.addEventListener("pointerdown", (event) => {
  pointerDown = true;
  drawCanvas.setPointerCapture(event.pointerId);
  lastPoint = getPoint(event);
  drawTo(lastPoint);
});

drawCanvas.addEventListener("pointermove", (event) => {
  if (!pointerDown) {
    return;
  }
  drawTo(getPoint(event));
});

["pointerup", "pointercancel", "pointerleave"].forEach((type) => {
  drawCanvas.addEventListener(type, () => {
    pointerDown = false;
    lastPoint = null;
  });
});

startButton.addEventListener("click", () => setScreen("play"));
homeButton.addEventListener("click", () => setScreen("start"));
nextButton.addEventListener("click", pickWord);
clearButton.addEventListener("click", resetDrawing);
speakButton.addEventListener("click", () => speakWord(false));
previousWordButton.addEventListener("click", showPreviousWord);
nextWordButton.addEventListener("click", pickWord);

window.addEventListener("resize", () => {
  if (!playScreen.classList.contains("hidden")) {
    resizeCanvases();
  }
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });
}
