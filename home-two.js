document.addEventListener("DOMContentLoaded", () => {
    const quoteModalElement = document.getElementById("quoteModal");
    const quoteForm = document.getElementById("quoteForm");
    const quoteResult = document.getElementById("quoteResult");
    const quoteMessage = document.getElementById("quoteMessage");
    const projectModalElement = document.getElementById("projectModal");
    const projectTitle = document.getElementById("projectModalTitle");
    const projectImage = document.getElementById("projectModalImage");
    const projectDescription = document.getElementById("projectModalDescription");

    const quoteModal = quoteModalElement
        ? bootstrap.Modal.getOrCreateInstance(quoteModalElement)
        : null;

    document.querySelectorAll("[data-open-quote]").forEach((trigger) => {
        trigger.addEventListener("click", (event) => {
            event.preventDefault();

            if (quoteMessage && trigger.dataset.service) {
                quoteMessage.value = `I would like a quote for ${trigger.dataset.service}.`;
            }

            quoteModal?.show();
        });
    });

    quoteForm?.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!quoteForm.checkValidity()) {
            quoteForm.classList.add("was-validated");
            quoteResult.textContent = "Please complete the required fields.";
            quoteResult.className = "fw-semibold text-danger mt-3 mb-0";
            return;
        }

        quoteResult.textContent = "Thanks! Your quote request has been received. We will contact you shortly.";
        quoteResult.className = "fw-semibold text-success mt-3 mb-0";
        quoteForm.reset();
        quoteForm.classList.remove("was-validated");
    });

    const projectModal = projectModalElement
        ? bootstrap.Modal.getOrCreateInstance(projectModalElement)
        : null;

    document.querySelectorAll("[data-project-name]").forEach((trigger) => {
        trigger.addEventListener("click", () => {
            projectTitle.textContent = trigger.dataset.projectName;
            projectImage.src = trigger.dataset.projectImage;
            projectImage.alt = trigger.dataset.projectName;
            projectDescription.textContent = trigger.dataset.projectDescription;
            projectModal?.show();
        });
    });

    const contactForm = document.getElementById("contactForm");
    const contactResult = document.getElementById("contactResult");

    contactForm?.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!contactForm.checkValidity()) {
            contactForm.classList.add("was-validated");
            contactResult.textContent = "Please add your name, email, and message.";
            contactResult.className = "small text-danger mt-3 mb-0";
            return;
        }

        contactResult.textContent = "Message sent successfully. Our team will get back to you soon.";
        contactResult.className = "small text-success mt-3 mb-0";
        contactForm.reset();
        contactForm.classList.remove("was-validated");
    });

    const newsletterForm = document.getElementById("newsletterForm");
    const newsletterResult = document.getElementById("newsletterResult");

    newsletterForm?.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!newsletterForm.checkValidity()) {
            newsletterForm.classList.add("was-validated");
            newsletterResult.textContent = "Please enter a valid email address.";
            newsletterResult.className = "small text-warning mt-2 mb-0";
            return;
        }

        newsletterResult.textContent = "You are subscribed. Thank you!";
        newsletterResult.className = "small text-success mt-2 mb-0";
        newsletterForm.reset();
        newsletterForm.classList.remove("was-validated");
    });

    const backToTop = document.getElementById("backToTop");

    const toggleBackToTop = () => {
        backToTop?.classList.toggle("is-visible", window.scrollY > 450);
    };

    window.addEventListener("scroll", toggleBackToTop, { passive: true });
    toggleBackToTop();

    backToTop?.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
