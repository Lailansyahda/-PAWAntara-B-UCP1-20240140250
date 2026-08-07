// public/js/main.js
document.addEventListener("DOMContentLoaded", function () {
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const navMenu = document.getElementById("navMenu");

  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener("click", function () {
      const isOpen = navMenu.classList.toggle("show");
      hamburgerBtn.classList.toggle("open", isOpen);
      hamburgerBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    navMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navMenu.classList.remove("show");
        hamburgerBtn.classList.remove("open");
        hamburgerBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  const chatForm = document.getElementById("chatForm");
  const chatBox = document.getElementById("chatBox");

  if (chatForm && chatBox) {
    chatForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const input = document.getElementById("pertanyaan");
      const question = input.value.trim();
      if (question === "") return;

      const userBubble = document.createElement("p");
      userBubble.className = "chat-bubble chat-bubble-user";
      userBubble.textContent = question;
      chatBox.appendChild(userBubble);

      const infoBubble = document.createElement("p");
      infoBubble.className = "chat-bubble chat-bubble-bot";
      infoBubble.textContent = "Fitur balasan otomatis akan aktif di Sprint 2 (POST /api/chat).";
      chatBox.appendChild(infoBubble);

      chatBox.scrollTop = chatBox.scrollHeight;
      input.value = "";
    });
  }
});