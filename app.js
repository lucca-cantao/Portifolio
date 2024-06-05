function SendMail() {
  var params = {
    from_name: document.getElementById("fullName").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value,
  };
  emailjs
    .send("service_0kb1cd4", "template_uln7sfv", params)
    .then(function (res) {
      alert("Sucesso" + res.status);
    });
}
