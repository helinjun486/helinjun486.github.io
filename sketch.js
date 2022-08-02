
let picList = []
let weightList = [75, 82, 89, 91, 95, 96, 101]
let year = null

function preload() {
  picList.push(loadImage('assets/2016.jpg'))
  picList.push(loadImage('assets/2017.jpg'))
  picList.push(loadImage('assets/2018.jpg'))
  picList.push(loadImage('assets/2019.jpg'))
  picList.push(loadImage('assets/2020.jpg'))
  picList.push(loadImage('assets/2021.jpg'))
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1)
  textAlign(CENTER, CENTER)
  textSize(20)
  rectMode(CENTER)
  angleMode(DEGREES)
  imageMode(CENTER)

  initButtons()
}

function draw() {
  background(255)

  drawWeigher()

  if (year != null) {
    let h = height * 0.3
    image(picList[year], width / 2, height * 0.8, h * 0.75, h)
  }
}

function initButtons() {
  const margin = 110
  const start = 40
  let y = 320
  const r = 95
  button2016 = createButton('2016');
  button2016.position(start, y);
  button2016.size(r, r)
  button2016.mousePressed(function () { year = 0 });

  button2017 = createButton('2017');
  button2017.position(start + margin, y);
  button2017.size(r, r)
  button2017.mousePressed(function () { year = 1 });

  button2018 = createButton('2018');
  button2018.position(start + 2 * margin, y);
  button2018.size(r, r)
  button2018.mousePressed(function () { year = 2 });

  y += r + 10
  button2019 = createButton('2019');
  button2019.position(start, y);
  button2019.size(r, r)
  button2019.mousePressed(function () { year = 3 });

  button2020 = createButton('2020');
  button2020.position(start + margin, y);
  button2020.size(r, r)
  button2020.mousePressed(function () { year = 4 });

  button2021 = createButton('2021');
  button2021.position(start + 2 * margin, y);
  button2021.size(r, r)
  button2021.mousePressed(function () { year = 5 });
  //
}

function getMyWeight() {
  if (year == null) {
    return {
      deg: 0,
      kg: null
    }
  }

  return {
    deg: weightList[year] / 150 * 360,
    kg: weightList[year]
  }
}

function drawWeigher() {
  const { deg, kg } = getMyWeight()
  let x = width / 2, w = 220
  let y = w - 20
  let r = w / 2 * 0.76

  noFill()
  strokeWeight(4)
  rect(x, y, w, w, 30, 30, 0, 0)
  circle(x, y, 2 * r)
  fill(0)
  circle(x, y, 20)

  // pointer
  push()
  translate(x, y)
  rotate(deg)
  line(0, 0, 0, 0 - r + 10)
  pop()

  let x1 = x - w / 4, y1 = y - w / 2
  let x2 = x + w / 4, y2 = y1
  // circle(x1, y1, 10)
  line(x1, y1, x1, y1 - 50)
  line(x2, y2, x2, y2 - 50)


  fill(255)
  arc(x, y - w - 20, w, w, 35, 180 - 35, CHORD);

  if (kg) {
    fill('red')
    text(kg + 'kg', x, y - 40)
  }
}

function mouseClicked() {

}