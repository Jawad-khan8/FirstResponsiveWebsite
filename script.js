// Get A Quote buttons

const quoteButtons = document.querySelectorAll(".quote-btn");
const quoteModalElement = document.getElementById("quoteModal");
const quoteForm = document.getElementById("quoteForm");

const quoteModal = quoteModalElement
    ? bootstrap.Modal.getOrCreateInstance(quoteModalElement)
    : null;

quoteButtons.forEach((quoteButton) => {
    quoteButton.addEventListener("click", () => {
        quoteModal?.show();
    });
});

// Quote form submission

quoteForm?.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("quoteName").value.trim();
    const email = document.getElementById("quoteEmail").value.trim();
    const phone = document.getElementById("quotePhone").value.trim();
    const message = document.getElementById("quoteMessage").value.trim();
    const result = document.getElementById("quoteResult");

    if (!name || !email || !phone || !message) {
        result.textContent = "Please fill all fields.";
        result.classList.remove("text-success");
        result.classList.add("text-danger");
        return;
    }

    result.textContent = "Your Quote Request Has Been Submitted Successfully!";
    result.classList.remove("text-danger");
    result.classList.add("text-success");
    quoteForm.reset();
});

