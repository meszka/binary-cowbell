let drum
let counter = 0
let drums = []

function makeDrum() {
  return loadSound('808-Cowbell1.wav')
}

function preload() {
  drums = new Array(20)
  for (let i = 0; i < 20; i++) {
    drums[i] = makeDrum()
  }
}

function setup() { 
  frameRate(5)
  createCanvas(400, 400)
  textSize(32)
  for (let i = 0; i < 20; i++) {
    drums[i].rate(2 * (2/3)**i)
  }
}

function getDrumNr(counter) {
  const reverseBinary = counter.toString(2).split("").reverse()
  return reverseBinary.indexOf("1")
}

function draw() {
  counter++
  console.log(counter.toString(2))
  const drumNr = getDrumNr(counter)
  console.log("play drum " + drumNr)
  if (drumNr >= 0) {
    drums[drumNr].play()
  }
  clear()
  text(counter.toString(2), 0, 30)
}
