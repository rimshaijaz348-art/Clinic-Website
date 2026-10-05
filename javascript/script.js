console.log("SCRIPT JS IS WORKING");

/* =====================================
   FAQ BUTTONS
===================================== */

const faqButtons =
    document.querySelectorAll(
        ".faq-question"
    );


faqButtons.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            const icon =
                this.querySelector("span");


            /*
            Agar plus hai to minus,
            aur minus hai to plus.
            */

            if (
                icon.textContent === "+"
            ) {

                icon.textContent = "−";

            } else {

                icon.textContent = "+";

            }

        }
    );

});


/* =====================================
   SUBSCRIBE FORM
===================================== */

const subscribeButton =
    document.querySelector(
        ".footer-column button"
    );


const emailInput =
    document.querySelector(
        ".footer-column input"
    );


if (
    subscribeButton &&
    emailInput
) {

    subscribeButton.addEventListener(
        "click",
        function () {

            const email =
                emailInput.value.trim();


            /*
            Empty email check
            */

            if (email === "") {

                alert(
                    "Please enter your email address."
                );

                return;

            }


            /*
            Basic email validation
            */

            if (
                !email.includes("@") ||
                !email.includes(".")
            ) {

                alert(
                    "Please enter a valid email address."
                );

                return;

            }


            /*
            Success message
            */

            alert(
                "Thank you! You have subscribed successfully."
            );


            emailInput.value = "";

        }
    );

}


/* =====================================
   SMOOTH SCROLL
===================================== */

const pageLinks =
    document.querySelectorAll(
        'a[href^="#"]'
    );


pageLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        function (event) {

            const targetId =
                this.getAttribute("href");


            /*
            Sirf valid IDs par
            smooth scroll chalega.
            */

            if (
                targetId === "#"
            ) {

                return;

            }


            const target =
                document.querySelector(
                    targetId
                );


            if (target) {

                event.preventDefault();


                target.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            }

        }
    );

});


/* =====================================
   BOOK TOKEN BUTTON
===================================== */

const bookButtons =
    document.querySelectorAll(
        ".main-button, .nav-book-button"
    );


bookButtons.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            /*
            booking.php ka link
            HTML mein already laga hua hai.
            Is liye yahan extra code
            ki zaroorat nahi.
            */

            console.log(
                "Opening booking page..."
            );

        }
    );

});


/* =====================================
   PAGE LOADED
===================================== */

window.addEventListener(
    "load",
    function () {

        console.log(
            "Clinic website loaded successfully."
        );

    }
);

/* =====================================
   QUEUE PAGE WORKING
===================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        // sara queue code

    }
);
/* =====================================
   MOBILE MENU
===================================== */

document.addEventListener("DOMContentLoaded", function () {

    const mobileMenu = document.getElementById("mobileMenu");
    const navigation = document.querySelector(".navigation");

    console.log("Mobile Menu:", mobileMenu);
    console.log("Navigation:", navigation);

    if (mobileMenu && navigation) {

        mobileMenu.addEventListener("click", function () {

            navigation.classList.toggle("show");

        });

    }

});