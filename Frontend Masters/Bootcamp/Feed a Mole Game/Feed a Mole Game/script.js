let score = 0;
let displayScore = document.querySelector(".score");
const runAgainAtInterval = 100;

function getSadorLeavingInterval() {
  return Date.now() + 1000;
}

function getLeavingInterval() {
  return Date.now() + 500;
}

function getHungryInterval() {
  return Date.now() + 2000;
}

function getFedInterval() {
  return Date.now() + 3000;
}

moleList = [
  {
    state: "sad",
    next: getSadorLeavingInterval(),
    king: false,
    node: document.getElementById("mole-1"),
  },
  {
    state: "sad",
    next: getSadorLeavingInterval(),
    king: false,
    node: document.getElementById("mole-2"),
  },
  {
    state: "sad",
    next: getSadorLeavingInterval(),
    king: false,
    node: document.getElementById("mole-3"),
  },
  {
    state: "sad",
    next: getSadorLeavingInterval(),
    king: false,
    node: document.getElementById("mole-4"),
  },
  {
    state: "sad",
    next: getSadorLeavingInterval(),
    king: false,
    node: document.getElementById("mole-5"),
  },
  {
    state: "sad",
    next: getSadorLeavingInterval(),
    king: false,
    node: document.getElementById("mole-6"),
  },
  {
    state: "sad",
    next: getSadorLeavingInterval(),
    king: false,
    node: document.getElementById("mole-7"),
  },
  {
    state: "sad",
    next: getSadorLeavingInterval(),
    king: false,
    node: document.getElementById("mole-8"),
  },
  {
    state: "sad",
    next: getSadorLeavingInterval(),
    king: false,
    node: document.getElementById("mole-9"),
  },
  {
    state: "sad",
    next: getSadorLeavingInterval(),
    king: false,
    node: document.getElementById("mole-10"),
  },
];

function getNextStatus(mole) {
  switch (mole.state) {
    case "sad":
      mole.next = getSadorLeavingInterval();
      mole.state = "leaving";
      mole.node.src = "./static/mole-game/mole-leaving.png";
      mole.node.classList.add("leaving");
      break;
    case "leaving":
      mole.next = getLeavingInterval();
      mole.state = "hungry";
      mole.node.classList.add("gone");
      break;
    case "hungry":
      mole.next = getHungryInterval();
      mole.state = "sad";
      mole.node.src = "./static/mole-game/mole-hungry.png";
      mole.node.classList.remove("gone");
      mole.node.classList.remove("leaving");
      break;
  }
}

function feedMole(mole) {
  mole.node.src = "./static/mole-game/mole-fed.png";
  mole.next = getFedInterval();
  mole.state = "sad";
}

let runAgainAt = Date.now() + runAgainAtInterval;

(function mainLoop() {
  const now = Date.now();

  if (runAgainAt <= now) {
    moleList.forEach((mole) => {
      if (mole.next <= now) {
        getNextStatus(mole);
      }
    });
    runAgainAt = now + runAgainAtInterval;
  }

  requestAnimationFrame(mainLoop);
})();

// adding eventlisteners to each img
moleList.forEach((mole) => {
  mole.node.addEventListener("click", function () {
    score++;
    displayScore.innerHTML = `Score: ${score}`;
    feedMole(mole);
    checkScore();
  });
});
// check score function
function checkScore() {
  let winScreen = document.createElement("img");
  winScreen.src = "/static/mole-game/win.png";
  if (score == "10") {
    console.log("WIN!");
    document.querySelector("body").replaceChildren(winScreen);
  }
}
