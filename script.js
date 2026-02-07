const sendBtn = document.getElementById("sendBtn");

sendBtn.addEventListener("click", validateClient);

function validateClient() {
  const clientName = document.getElementById("clientName").value;
  const clientEmail = document.getElementById("clientEmail").value;
  const clientMessage = document.getElementById("clientMessage").value;

  inputs = [clientName, clientEmail, clientMessage];
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i] === "") {
      alert("Please fill in all fields before sending your message.");
      event.preventDefault();
      return;
    }
  }

  alert(
    "Thank you " +
      clientName +
      "! Your message has been sent." +
      "\nEmail sent from: " +
      clientEmail +
      "\nMessage: " +
      clientMessage,
  );
}
