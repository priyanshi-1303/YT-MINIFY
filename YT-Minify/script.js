// -----------------------------
// SIDEBAR TOGGLE
// -----------------------------
const menuBtn = document.getElementById("menu-toggle");
const sidebar = document.querySelector(".sidebar");

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("hide-sidebar");
});

// -----------------------------
// SEARCH FILTER (LEVEL 2)
// -----------------------------
const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");
const videos = document.querySelectorAll(".video-card");

searchBtn.addEventListener("click", () => {
  const searchText = searchInput.value.toLowerCase();

  videos.forEach(video => {
    const title = video.querySelector(".video-title").innerText.toLowerCase();

    if (title.includes(searchText)) {
      video.style.display = "block";
    } else {
      video.style.display = "none";
    }
  });
});

// -----------------------------
// VIDEO CLICK ALERT (LEVEL 1)
// -----------------------------
videos.forEach(video => {
  video.addEventListener("click", () => {
    alert("Video clicked! Video playback feature can be added later.");
  });
});
// -----------------------------
// DARK / LIGHT MODE TOGGLE
// -----------------------------
const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    themeBtn.textContent = "☀️";
  } else {
    themeBtn.textContent = "🌙";
  }
});
