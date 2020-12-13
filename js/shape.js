let keyData = {
  q: {
    sound: new Howl({
      src: ["./assets/sounds/bubbles.mp3"],
    }),
  },
  w: {
    sound: new Howl({
      src: ["./assets/sounds/clay.mp3"],
    }),
  },
  e: {
    sound: new Howl({
      src: ["./assets/sounds/confetti.mp3"],
    }),
  },
  r: {
    sound: new Howl({
      src: ["./assets/sounds/corona.mp3"],
    }),
  },
  t: {
    sound: new Howl({
      src: ["./assets/sounds/dotted-spiral.mp3"],
    }),
  },
  y: {
    sound: new Howl({
      src: ["./assets/sounds/flash-1.mp3"],
    }),
  },
  u: {
    sound: new Howl({
      src: ["./assets/sounds/flash-2.mp3"],
    }),
  },
  i: {
    sound: new Howl({
      src: ["./assets/sounds/flash-3.mp3"],
    }),
  },
  o: {
    sound: new Howl({
      src: ["./assets/sounds/glimmer.mp3"],
    }),
  },
  p: {
    sound: new Howl({
      src: ["./assets/sounds/moon.mp3"],
    }),
  },
  a: {
    sound: new Howl({
      src: ["./assets/sounds/pinwheel.mp3"],
    }),
  },
  s: {
    sound: new Howl({
      src: ["./assets/sounds/piston-1.mp3"],
    }),
  },
  d: {
    sound: new Howl({
      src: ["./assets/sounds/piston-2.mp3"],
    }),
  },
  f: {
    sound: new Howl({
      src: ["./assets/sounds/prism-1.mp3"],
    }),
  },
  g: {
    sound: new Howl({
      src: ["./assets/sounds/prism-2.mp3"],
    }),
  },
  h: {
    sound: new Howl({
      src: ["./assets/sounds/prism-3.mp3"],
    }),
  },
  j: {
    sound: new Howl({
      src: ["./assets/sounds/splits.mp3"],
    }),
  },
  k: {
    sound: new Howl({
      src: ["./assets/sounds/squiggle.mp3"],
    }),
  },
  l: {
    sound: new Howl({
      src: ["./assets/sounds/strike.mp3"],
    }),
  },
  z: {
    sound: new Howl({
      src: ["./assets/sounds/suspension.mp3"],
    }),
  },
  x: {
    sound: new Howl({
      src: ["./assets/sounds/timer.mp3"],
    }),
  },
  c: {
    sound: new Howl({
      src: ["./assets/sounds/ufo.mp3"],
    }),
  },
  v: {
    sound: new Howl({
      src: ["./assets/sounds/veil.mp3"],
    }),
  },
  b: {
    sound: new Howl({
      src: ["./assets/sounds/wipe.mp3"],
    }),
  },
  n: {
    sound: new Howl({
      src: ["./assets/sounds/zig-zag.mp3"],
    }),
  },
  m: {
    sound: new Howl({
      src: ["./assets/sounds/moon.mp3"],
    }),
  },
};

document.addEventListener("keydown", onKeyDown);

let x, y, width, height, circleContainer;

window.onload = () => {
  circleContainer = document.getElementById("circleContainer");
  x = circleContainer.getBoundingClientRect().x;
  y = circleContainer.getBoundingClientRect().y;
  width = circleContainer.getBoundingClientRect().width;
  height = circleContainer.getBoundingClientRect().height;
};

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function onKeyDown(event) {
  if (keyData[event.key]) {
    let randomYPosition = y + parseInt(Math.random() * height);
    let randomXPosition = x + parseInt(Math.random() * width);
    let randomRadius = 100 + parseInt(Math.random() * 200);

    let circle = document.createElement("div");
    circle.style.position = "fixed";
    circle.style.borderRadius = "50%";
    circle.style.opacity = "1";
    circle.style.width = randomRadius + "px";
    circle.style.height = randomRadius + "px";
    circle.style.top = randomYPosition + "px";
    circle.style.left = randomXPosition + "px";
    circle.style.transition = "opacity 0.3s linear";
    circle.style.backgroundColor = getRandomColor();

    circleContainer.append(circle);

    keyData[event.key].sound.play();

    setTimeout(() => {
      circle.style.opacity = "0";
      setTimeout(() => {
        circleContainer.removeChild(circle);
      }, 200);
    }, 1800);
  }
}
