// mapeia todos os elementos da lista key,volume e ativação de teclas, no html, como pianoKeys
const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheck = document.querySelector(".keys-check input");

let mapedKeys = [];
let audio = new Audio("src/audio/a.wav");

const playtune = (key) => {
  audio.src = `src/audio/${key}.wav`;
  audio.play();
  const clickedKey = document.querySelector(`[data-key="${key}"]`);
  clickedKey.classList.add("active");
  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 100);
};
// Percorre a lista das keys no html e escuta elas colocando em uma lista
pianoKeys.forEach((key) => {
  key.addEventListener("click", () => playtune(key.dataset.key));
  mapedKeys.push(key.dataset.key);
});
// Valida as teclas e toca o audio
document.addEventListener("keydown", (e) => {
  if (mapedKeys.includes(e.key)) {
    playtune(e.key);
  }
});

const handleVolume = (e) => {
  audio.volume = e.target.value;
};

const showHideKyes = () => {
  pianoKeys.forEach((key) => key.classList.toggle("hide"));
};

volumeSlider.addEventListener("input", handleVolume);
keysCheck.addEventListener("click", showHideKyes);
