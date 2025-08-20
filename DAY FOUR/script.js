const form = document.getElementById("subscribeForm");
    const emailInput = document.getElementById("emailInput");
    const formMessage = document.getElementById("formMessage");
    const formContainer = document.getElementById("formContainer");
    const successState = document.getElementById("successState");

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const emailValue = emailInput.value.trim();
      const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

      if (!emailPattern.test(emailValue)) {
        formMessage.textContent = "❌ Please enter a valid email address.";
        formMessage.className = "message error";
        formMessage.style.display = "block";
        emailInput.style.borderColor = "#dc2626";
        return;
      }

      // Success
      form.style.display = "none";
      successState.style.display = "block";
    });