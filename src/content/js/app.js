document.getElementById("inscription").addEventListener("submit", function () {
  alert("Formulaire envoyé !");
});

function contacts_new() {
  const c = new Contact(
    null,
    document.querySelector("#name").value,
    document.querySelector("#number").value,
    document.querySelector("#message").value,
  );

  if (c.save()) {
    alert("Created New Contact!");
  }
}
