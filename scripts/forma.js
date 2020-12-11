$(document).ready(function(){

    var forma = document.getElementById("forma");
    var formaLink = document.getElementById("formaLink");
    var close = document.getElementById("close");

    $("#formaLink").click(function() {
        $("#forma").fadeIn();
    })

    $("#close").click(function() {
        $("#forma").fadeOut().promise().done(function() {
            $("#ime").val("");
            $("#prezime").val("");
            $("#mail").val("");
                
            $("#imeError").text("");
            $("#prezimeError").text("");
            $("#mailError").text("");
        });
    })

    $(document).click(function(event) {
        if (event.target == forma) {
            $("#forma").fadeOut().promise().done(function() {
                $("#ime").val("");
                $("#prezime").val("");
                $("#mail").val("");
                
                $("#imeError").text("");
                $("#prezimeError").text("");
                $("#mailError").text("");
            });
        }
    })

    $("#prijava").on("click", provera);
    
    $('input[id ="ime"]').on("blur", proveraImena);
    $('input[id ="prezime"]').on("blur", proveraPrezimena);
    $('input[id ="mail"]').on("blur", proveraMaila);
});


function provera() {
    let validno = true;
    validno &= proveraImena();
    validno &= proveraPrezimena();
    validno &= proveraMaila();

    if (validno) {
        $("#forma").fadeOut().promise().done(function() {
        alert("Uspešno ste se prijavili!")
        });
    }
};

function proveraImena() {
    let validno = true

    reImePrezime = /^[A-Z][a-z]{2,14}(\s[A-Z][a-z]{2,14})*$/;
    reMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    
    let ime = $("#ime").val();
    let imeError = $("#imeError");

    if (ime == "")
    {
        validno = false;
        imeError.text("Polje je prazno");
    }
    else
    {
        if (!reImePrezime.test(ime))
        {
            validno = false;
            imeError.text("Ime nije u dobrom formatu");
        }
        else
        {
            imeError.text("");
        }
    }

    return validno;
};

function proveraPrezimena() {
    let validno = true

    reImePrezime = /^[A-Z][a-z]{2,14}(\s[A-Z][a-z]{2,14})*$/;
    reMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    
    let prezime = $("#prezime").val();
    let prezimeError = $("#prezimeError");
    
    if (prezime == "")
    {
        validno = false;
        prezimeError.text("Polje je prazno");
    }
    else
    {
        if (!reImePrezime.test(prezime))
        {
            validno = false;
            prezimeError.text("Prezime nije u dobrom formatu");
        }
        else
        {
            prezimeError.text("");
        }
    }

    return validno;
};

function proveraMaila() {
    let validno = true

    reImePrezime = /^[A-Z][a-z]{2,14}(\s[A-Z][a-z]{2,14})*$/;
    reMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

    let mail = $("#mail").val();
    let mailError = $("#mailError");

    if (mail == "")
    {
        validno = false;
        mailError.text("Polje je prazno");
    }
    else
    {
        if (!reMail.test(mail))
        {
            validno = false;
            mailError.text("Mail nije u dobrom formatu");
        }
        else
        {
            mailError.text("");
        }
    }

    return validno;
}