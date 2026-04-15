document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const consent = document.getElementById("consent").checked;

  if (!firstName || !lastName || !email || !message) {
    alert("Fill all fields!");
    return;
  }
  if (!consent) {
    alert("Accept consent!");
    return;
  }
  const data = { firstName, lastName, email, message };
  localStorage.setItem("formData", JSON.stringify(data));
  window.location.href = "send.html";
});