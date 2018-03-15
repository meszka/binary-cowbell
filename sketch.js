let drum
let counter = 0

function preload() {
  drum = loadSound('808-Cowbell1.wav')
}

function setup() { 
  frameRate(5)
  createCanvas(400, 400)
  textSize(32)
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
    drum.rate(4/(drumNr + 1))
    drum.play()
  }
  clear()
  text(counter.toString(2), 0, 30)
}
