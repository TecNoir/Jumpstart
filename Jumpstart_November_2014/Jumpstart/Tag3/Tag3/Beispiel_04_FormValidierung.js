function validateForm() {
    var f = document.forms[0];
    var error = false;
    var regString = '.@.';
    var regEx = new RegExp(regString);

    // Funktionsaufruf -> Formular Felder zurücksetzen
    clearMessages();

    // Check Benutzername
    with (document) {
        // Kontrolle E-Mail
        if(!regEx.test(getElementById('mail').value)){

            getElementById('mailinfo').innerText = "Bitte korrekte E-Mail eintragen";
            getElementById('mail').style.backgroundColor = 'red';
            getElementById('mail').value = '';
            getElementById('mail').focus(); // Eingabefokus bei Fehler setzen
            error = true;
        }

        //Kontrolle Passwort
        if(getElementById("pw").value == ""){ // Auf Leer-String prüfen
            getElementById("pwinfo").innerText = "Das Passwort darf nicht leer sein";
            getElementById("pw").style.backgroundColor = "red";
            getElementById("pw").value = "";
            getElementById("pw").focus();
            error = true;
        }
        // Kontrolle Benutzername
        if (getElementById("user").value.length < 8) { // String auf länge prüfen
            getElementById("userinfo").innerText = "Der Benutzername ist zu kurz";
            getElementById("user").style.backgroundColor = "red";
            getElementById("user").value = "";
            getElementById("user").focus();
            error = true;
        }
    }

    // Formular valide, absenden
    if (!error) {
        //f.action = 'Form.aspx';
        //f.submit();
        alert('Formular gesendet');
    } else {
        error = false;
    }
};

// Formular zurücksetzen
function resetForm() {
    var f = document.forms[0];
    if (confirm("Soll das Formular geleert werden?")) {
        f.reset();
    }
    return false;
};

// Formularfelder zurücksetzen
function clearMessages() {
    with (document) {
        getElementById('mailinfo').innerHTML = '';
        getElementById('userinfo').innerHTML = '';
        getElementById('pwinfo').innerHTML = '';
        getElementById('mail').style.backgroundColor = "white";
        getElementById('user').style.backgroundColor = "white";
        getElementById('pw').style.backgroundColor = "white";
    }
};

// Initiale Funktion
function init() {
    document.getElementById('sendForm').onclick = validateForm;
    document.getElementById('clearForm').onclick = resetForm;
};

// Ausführen der Init Funktion, sobald der DOM fertig geladen wurde
window.onload = init;