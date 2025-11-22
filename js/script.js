console.log ("Script loaded successfully.");

let formFilling = [];

welcomeMessage();

function welcomeMessage() {
    let user = prompt("Please enter your name:");
    if (user === "" || user === null) {
        user = "Guest";
    }

    document.getElementById("welcome").innerText = user;
}


function validateform(event){

    event.preventDefault();


    const name = document.getElementById("name").value;
    const birthDate = document.getElementById("birth").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const message = document.getElementById("message").value;

    if (name === "") {
            alert("Nama tidak boleh kosong!");
            return;
    }

    if (birthDate === "") {
            alert("Tanggal lahir harus diisi!");
            return;
    }

    if (!gender) { 
        alert("Harap pilih jenis kelamin!");
        return;
    }

    addToFormFilling(name, birthDate, gender, message);
    alert("Sukses! Data berhasil divalidasi.\nHalo " + name + 
        ", pesanmu sudah terkirim.");
        
    document.getElementById("name").value = "";
    document.getElementById("birth").value = "";
    document.getElementById("message").value = "";

    const allRadios = document.getElementsByName("gender");
    for (let i = 0; i < allRadios.length; i++) {
        allRadios[i].checked = false;
    }
}

function addToFormFilling(name, birth, gender, message) {
    formFilling.push({
        name: name,
        birth: birth,
        gender: gender,
        message: message
    });

    console.log(formFilling);
}
