function sendmail() {
  let details = {
    name: document.getElementById("name-mail").value,
    mail: document.getElementById("email-mail").value,
    number: document.getElementById("number-mail").value,
    message: document.getElementById("message-email").value,
  };

  emailjs.send("service_5gw239l", "template_x4qvt1e", details)
    .then(res => {
      document.getElementById("name-mail").value = "";
      document.getElementById("email-mail").value = "";
      document.getElementById("number-mail").value = "";
      document.getElementById("message-email").value = "";

      console.log(res);
      alert("Mail sent successfully!");
    })
    .catch(err => {
      console.error(err);
      alert("Failed to send mail. Error: " + err.text);
    });
}
