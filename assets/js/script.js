function dislayOnInput() {
  // Déclaration des variables
  var lastname = document.getElementById('lastname').value;
  var regex = /^[a-zA-Z\-éèêëàâäîï]+$/;
  // Vérifie si les inputs sont des caractères valides
  if (regex.test(lastname) == true) {
    // Affiche un message lorsqu'un input est détecté
    alert(lastname);
  } else {
    // Affiche un message si les caractères ne sont pas valides
    alert('Veuillez entrer un caractère valide');
  }
}
