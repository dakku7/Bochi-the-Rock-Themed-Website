const characterInfo = document.getElementById("character-info");

const bios = {
    kita: {
        name: "Ikuyo Kita",
        role: "Guitarist, Vocalist",
        voice: "Ikumi Hasegawa",
        image: "images/Ikuyo_Kita_Character_Design_2.webp",
        text: "Ikuyo is the vibrant and outgoing guitarist of Kessoku Band. Her bright personality uplifts the group and audiences alike."
    },
    ryo: {
        name: "Ryo Yamada",
        role: "Bassist",
        voice: "Saku Mizuno",
        image: "images/Ryo_Yamada_Character_Design_2.webp",
        text: "Ryo is the cool and mysterious bassist. Her aloof demeanor hides a deep passion for music and artistic expression."
    },
    nijika: {
        name: "Nijika Ijichi",
        role: "Drummer, Leader",
        voice: "Sayumi Suzushiro",
        image: "images/Nijika_Ijichi_Character_Design_2.webp",
        text: "Nijika is the energetic and passionate drummer of Kessoku Band. She keeps the band together with rhythm and heart."
    },
    goto: {
        name: "Hitori Goto",
        role: "Guitarist",
        voice: "Yoshino Aoyama",
        image: "images/Hitori_Gotoh_Character_Design_2.webp",
        text: "Hitori is the shy and introverted guitarist who grows through the power of music and friendship."
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const defaultMember = "goto";
    const bio = bios[defaultMember];
    document.querySelectorAll('.character-img').forEach(img => {
        if (img.dataset.member === defaultMember) {
            img.classList.remove('dimmed');
        } else {
            img.classList.add('dimmed');
        }
    });

    characterInfo.innerHTML = `
        <div style="display: flex; align-items: center; text-align: left; gap: 30px;">
            <img src="${bio.image}" alt="${bio.name}" style="height: 450px;">
            <div style="color: white; font-family: 'Lexend Giga'; max-width: 610px;">
                <h1 style="color: #fffacb;">${bio.name}</h1>
                <p><strong>Role:</strong> ${bio.role}<br>
                <strong>Seiyu:</strong> ${bio.voice}</p>
                <p>${bio.text}</p>
            </div>
        </div>
    `;
});

document.querySelectorAll('.character-img').forEach(img => {
    img.addEventListener('mouseenter', () => {
        const member = img.dataset.member;
        const bio = bios[member];

        document.querySelectorAll('.character-img').forEach(otherImg => {
            otherImg.classList.add('dimmed');
        });
        img.classList.remove('dimmed');

        characterInfo.innerHTML = `
            <div style="display: flex; align-items: center; text-align: left; gap: 30px;">
                <img src="${bio.image}" alt="${bio.name}" style="height: 450px;">
                <div style="color: white; font-family: 'Lexend Giga'; max-width: 610px;">
                    <h1 style="color: #fffacb;">${bio.name}</h1>
                    <p><strong>Role:</strong> ${bio.role}<br>
                    <strong>Seiyu:</strong> ${bio.voice}</p>
                    <p>${bio.text}</p>
                </div>
            </div>
        `;
    });
});




document.addEventListener("DOMContentLoaded", () => {
    const audioPlayer = document.getElementById("audio-player");
    const trackButtons = document.querySelectorAll(".track-btn");
    const currentSongDisplay = document.getElementById("current-song");
    const pauseBtn = document.getElementById("pause-btn");
    const pauseImg = document.getElementById("pause-img");

  const volumeSlider = document.getElementById("volume-slider");

    volumeSlider.addEventListener("input", () => {
        audioPlayer.volume = volumeSlider.value;
    });
    trackButtons.forEach(button => {
        button.addEventListener("click", () => {
            const src = button.getAttribute("data-src");
            const title = button.textContent.replace("▶", "").trim();

            audioPlayer.src = src;
            audioPlayer.play();
            currentSongDisplay.textContent = title;
        });
    });

    // Кнопка Play/Pause
    pauseBtn.addEventListener("click", () => {
        if (audioPlayer.paused) {
            audioPlayer.play();
        } else {
            audioPlayer.pause();
        }
    });
    audioPlayer.addEventListener("play", () => {
        pauseImg.src = "images/pausebutton.png";
    });

    audioPlayer.addEventListener("pause", () => {
        pauseImg.src = "images/playbutton.png";
    });
const firstTrack = trackButtons[0];
if (firstTrack) {
    const src = firstTrack.getAttribute("data-src");
    const title = firstTrack.textContent.replace("▶", "").trim();
    audioPlayer.src = src;
    currentSongDisplay.textContent = title;
}
});

 document.querySelectorAll('video').forEach(video => {
     video.volume = 0.1;
      video.addEventListener('click', () => {
        if (video.paused) {
          document.querySelectorAll('video').forEach(v => {
            v.muted = true;
            if (v !== video) v.pause();
          });

          video.muted = false;
          video.play();
        
        } else {
          video.pause();
        }
      });
    });


document.getElementById("contact-form").addEventListener("submit", async function (e) {
  e.preventDefault();
  const form = e.target;
  const status = document.getElementById("form-status");
  try {
    const data = new FormData(form);
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      status.innerText = "✅ Message sent successfully!";
      status.style.color = "lightgreen";
      form.reset();
    } else {
      const errorData = await response.json();
      status.innerText = `❌ Error: ${errorData.message || 'Something went wrong.'}`;
      status.style.color = "red";
    }
  } catch (error) {
    status.innerText = "❌ Failed to send. Please try again.";
    status.style.color = "red";
  }
});

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
