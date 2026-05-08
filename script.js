const text = "Śladami Trawnik...";
const speed = 75;
let i = 0;

function typeWriter() {
  if (i < text.length) {
    const titleElement = document.getElementById("title");

    // Tworzymy span dla litery
    const span = document.createElement("span");
    span.className = "letter";

    // Obsługa spacji - jeśli znak to spacja, używamy twardej spacji,
    // żeby HTML nie "zjadł" odstępu między spanami
    span.innerHTML = text.charAt(i) === " " ? "&nbsp;" : text.charAt(i);

    titleElement.appendChild(span);

    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;
