document.addEventListener("DOMContentLoaded", function () {

    fetch("/clinic-website/includes/navbar.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Navbar file not found");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("navbar").innerHTML = data;
        })
        .catch(error => {
            console.error("Navbar Error:", error);
        });


    fetch("/clinic-website/includes/footer.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Footer file not found");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        })
        .catch(error => {
            console.error("Footer Error:", error);
        });

});