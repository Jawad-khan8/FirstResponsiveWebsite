// Get A Quote Button

const quoteBtn = document.getElementById("quoteBtn");

const quoteModalElement =
    document.getElementById("quoteModal");

const quoteForm =
    document.getElementById("quoteForm");


const quoteModal =
    new bootstrap.Modal(quoteModalElement);


// Button click

quoteBtn.addEventListener("click", function () {

    quoteModal.show();

});


// Form submit

quoteForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =   
 
        document.getElementById("quoteName").value.trim();

    const email =   
        document.getElementById("quoteEmail").value.trim();

    const phone =
        document.getElementById("quotePhone").value.trim();

    const message =
        document.getElementById("quoteMessage").value.trim();


    const result =
        document.getElementById("quoteResult");


    if (
        name === ""  ||
        email === "" ||
        phone === "" || 
        message === ""
    ) {

        result.textContent =
            "Please fill all fields.";

        result.classList.add("text-danger");

        return;
    }


    result.textContent =
        "Your Quote Request Has Been Submitted Successfully!";
    

    result.classList.remove("text-danger");

    result.classList.add("text-success");


    quoteForm.reset();

});
