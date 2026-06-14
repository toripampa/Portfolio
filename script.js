const colors = [
  "#ff5e14",
  "#d4ff17",
  "#4d88ff",
  "#ffd24d",
  "#ff66cc",
  "#66ffff"
];

document.querySelectorAll(".card").forEach((card, index) => {
  card.style.setProperty("--hover-color", colors[index]);
});

const textcolors = [
  "#f1f1f0",
  "#191a17",
  "#4d88ff",
  "#ffd24d",
  "#ff66cc",
  "#66ffff"
];

document.querySelectorAll(".card-info").forEach((cardInfo, index) => {
  cardInfo.style.setProperty("--text-color", textcolors[index]);
});

const items = document.querySelectorAll('.card');

items.forEach(card => {
    card.addEventListener('click', () => {

        const estabaAbierto = card.classList.contains('expanded');

        items.forEach(i => {
            i.classList.remove('expanded');
        });

        if (!estabaAbierto) {
            card.classList.add('expanded');
        }

    });
});