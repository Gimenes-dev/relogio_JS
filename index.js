const relogio = document.querySelector(".relogio");

document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "100vh";
document.body.style.margin = "0";
document.body.style.backgroundColor = "#282c34";

function mostrarHoraAtual() {
  const date = new Date();

  const horas = date.getHours().toString().padStart(2, "0");
  const minutos = date.getMinutes().toString().padStart(2, "0");
  const segundos = date.getSeconds().toString().padStart(2, "0");

  relogio.innerHTML = horas + ":" + minutos + ":" + segundos;
}

relogio.style.fontSize = "4em";
relogio.style.fontWeight = "bold";
relogio.style.backgroundColor = "#000000";
relogio.style.color = "#00ff00";
relogio.style.padding = "20px";
relogio.style.borderRadius = "10px";
relogio.style.textAlign = "center";
relogio.style.textShadow = "2px 2px 4px rgba(0, 255, 0, 0.7)";
relogio.style.boxShadow = "0px 0px 20px rgba(0, 255, 0, 0.5)";
relogio.style.border = "2px solid #00ff00";
relogio.style.textShadow =
  "0 0 10px rgba(0, 255, 0, 0.7), 0 0 20px rgba(0, 255, 0, 0.5)";
relogio.style.cursor = "move";
relogio.style.position = "absolute";
relogio.style.userSelect = "none";

mostrarHoraAtual();

setInterval(mostrarHoraAtual, 1000);

const dragme = document.getElementById("dragme");

let offsetX,
  offsetY,
  isDragging = false;

dragme.addEventListener("mousedown", (e) => {
  isDragging = true;
  offsetX = e.clientX - dragme.getBoundingClientRect().left;
  offsetY = e.clientY - dragme.getBoundingClientRect().top;
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    // Calcula a nova posição
    const x = e.clientX - offsetX;
    const y = e.clientY - offsetY;

    // Move a div
    dragme.style.left = `${x}px`;
    dragme.style.top = `${y}px`;
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});

particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});
var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function () {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);
