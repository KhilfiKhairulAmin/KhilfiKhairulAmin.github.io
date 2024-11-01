
const music = document.getElementById("music")

// navigator.mediaDevices.getUserMedia({
//   audio: true,
// })
// .then((stream) => {
//   music.play()
// })

const card = document.getElementById("hbc")

card.addEventListener("click", (e) => {
  music.play()
  card.style.transform = "rotate(-5deg)"
  const card_out = document.getElementById("card")
  card_out.style.transform = "rotateY(-130deg)"
})
