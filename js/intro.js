// === Elements
const mapImg = document.querySelector(".ggmap img");
const locationIcon = document.querySelector(".location i");
const mapContainer = document.querySelector(".ggmap");

// === State
let posX = -50; // luôn giữ map ở giữa theo chiều ngang
let posY = -31;

const defaultPositions = [
  { posY: 1,   locationX: 10, locationY: 6 },   // TOP
  { posY: -31, locationX: 34, locationY: 30 },  // MIDDLE
  { posY: -61, locationX: 70, locationY: 70 },  // BOTTOM
];

let currentPosition = 0;
let locationX = defaultPositions[0].locationX;
let locationY = defaultPositions[0].locationY;

// === Helpers
function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }
function getMaxMoveY() {
  const mh = mapImg.offsetHeight;
  const ch = mapContainer.offsetHeight;
  if (mh === 0) return 0;
  return ((mh - ch) / mh) * 100; // % có thể dịch tối đa theo trục Y (âm)
}

// === Renderers
function updatePosition(animated = true) {
  const maxMove = getMaxMoveY(); 
  posY = clamp(posY, -maxMove, 0);

  mapImg.style.transition = animated ? "transform 1.3s ease-in-out" : "none";
  mapImg.style.transform = `translate(${posX}%, ${posY}%)`;
}

function updateLocation(animated = true) {
  locationIcon.style.transition = animated
    ? "left 0.7s ease-in-out, top 0.7s ease-in-out"
    : "none";
  locationIcon.style.left = `${locationX}%`;
  locationIcon.style.top = `${locationY}%`;
}

// === Animate to one of the 3 presets (map + marker cùng chạy)
function animateTo(index) {
  currentPosition = index;
  const p = defaultPositions[index];

  locationX = p.locationX;
  locationY = p.locationY;

  posY = p.posY;

  updatePosition(true);
  updateLocation(true);
}

// === Chevron controls
document.querySelector(".chevron-up").addEventListener("click", () => {
  animateTo((currentPosition + 1) % defaultPositions.length);
});
document.querySelector(".chevron-down").addEventListener("click", () => {
  animateTo((currentPosition - 1 + defaultPositions.length) % defaultPositions.length);
});

// === Mouse move: chia map thành 3 vùng -> tự chạy về preset tương ứng
mapContainer.addEventListener("mousemove", (e) => {
  const rect = mapContainer.getBoundingClientRect();
  const y = e.clientY - rect.top;

  const oneThird = rect.height / 3;
  const twoThird = (2 * rect.height) / 3;

  let idx;
  if (y < oneThird) idx = 0;        // TOP
  else if (y > twoThird) idx = 2;   // BOTTOM
  else idx = 1;                     // MIDDLE

  if (idx !== currentPosition) animateTo(idx);
});

// === Recompute clamp on resize & initial render
window.addEventListener("resize", () => updatePosition(false));
animateTo(1); // Render lần đầu tiên ở vị trí MIDDLE
