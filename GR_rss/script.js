let images = document.querySelectorAll(".img-items");
let cpuImages = document.querySelectorAll(".img-cpu-choosed");


for (let i = 0; i <= images.length - 1; i++) {
  images[i].addEventListener("click", () => {
    hiddenselector(i);
    randTake = Math.floor((Math.random() * 10) / 4);
    cpuImages[randTake].classList.remove("hidden");
    mantegh(i, randTake);

  });
}

function hiddenselector(i) {
  for (let j = 0; j <= images.length - 1; j++) {
    if (j !== i) {
      images[j].classList.add("hidden");
    }
  }
}

const refresh = () => {
  for (let j = 0; j <= images.length - 1; j++) {
    images[j].classList.remove("hidden");
    cpuImages[j].classList.add("hidden");
  }
};

document.querySelector("button").addEventListener("click", refresh);

document.addEventListener("keydown", (k) => {
  if (k.key == "r") {
    refresh();
  } else {
    alert("press R to refresh");
  }
});

function mantegh(user, cpu) {
  const userPoint = document.querySelector("#user-point");
  const cpuPoint = document.querySelector("#cpu-point");

  if (user !== cpu) {
    if (user == 0) {
      if (cpu == 1) {
        userPoint.innerHTML = Number(userPoint.innerHTML) + 1;
      } else {
        cpuPoint.innerHTML = Number(cpuPoint.innerHTML) + 1;
      }
    }

    if (user == 1) {
      if (cpu == 0) {
        cpuPoint.innerHTML = Number(cpuPoint.innerHTML) + 1;
      } else {
        userPoint.innerHTML = Number(userPoint.innerHTML) + 1;
      }
    }
  }

  if (user == 2) {
    if (cpu == 0) {
      userPoint.innerHTML = Number(userPoint.innerHTML) + 1;
    } else {
      cpuPoint.innerHTML = Number(cpuPoint.innerHTML) + 1;
    }
  }
}

























