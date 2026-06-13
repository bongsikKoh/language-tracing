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
  { word: "우유", emoji: "🥛", label: "우유" }
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
  const byLength = word.length >= 4 ? 0.3 : word.length === 3 ? 0.38 : 0.48;
  return Math.max(74, Math.min(height * 0.66, width * byLength));
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
  drawCtx.lineWidth = Math.max(26, drawCanvas.clientHeight * 0.12);
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

  if (!complete && percent >= 72) {
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
