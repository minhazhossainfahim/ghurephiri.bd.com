document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("typeWriter");
  if (!el) return;                 

  const text = "Travel All Around Bangladesh";
  const speed = 70;
  let i = 0;
  el.textContent = "";             

  function typeWriter() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();                   
});




/*
const videoSources = [
  "image/home cover2.mp4",
  "image/home cover.mp4",
  "image/home cover3.mp4" 
]; 

let currentVideo = 0;
const videoElement = document.getElementById("bgVideo");

setInterval(() => {
  currentVideo = (currentVideo + 1) % videoSources.length;
  videoElement.querySelector("source").src = videoSources[currentVideo];
  videoElement.load();
  videoElement.play();
}, 5000);
*/





onAuthStateChanged(auth, user => {
  if (user) {
    document.getElementById("header-user").innerHTML = `
            <div class="user-info">
                <img src="https://i.pravatar.cc/50" alt="User">
                <span>${user.displayName || user.email}</span>
            </div>
        `;
    closePopup();
  }
});


