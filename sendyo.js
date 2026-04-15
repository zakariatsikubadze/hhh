const receiverSelect = document.getElementById("receiver");
const infoDiv = document.getElementById("info");
const receivers = {
  1: {
    name: "Support",
    lastName: "Team",
    email: "support@gmail.com"
  },
  2: {
    name: "Sales",
    lastName: "Team",
    email: "sales@gmail.com"
  }
};

receiverSelect.addEventListener("change", function() {
  const selected = receivers[this.value];

  if (selected) {
    infoDiv.innerHTML = `
      <p>Name: ${selected.name}</p>
      <p>Last Name: ${selected.lastName}</p>
      <p>Email: ${selected.email}</p>
    `;
  } else {
    infoDiv.innerHTML = "";
  }
});

function sendMessage() {
  const data = JSON.parse(localStorage.getItem("formData"));
  const selected = receivers[receiverSelect.value];

  if (!data || !selected) {
    alert("Please select a receiver!");
    return;
  }

  alert("Message sent successfully! \nThey will respond soon.");
  localStorage.removeItem("formData");
  window.location.href = "registr.html";
}