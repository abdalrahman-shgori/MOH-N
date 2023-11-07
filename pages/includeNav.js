document.addEventListener("DOMContentLoaded", function () {
    const head = document.head;

    fetch("nav.html")
        .then(response => response.text())
        .then(navHTML => {
            document.getElementById("navbar-container").innerHTML = navHTML;
            const script = document.createElement("script");
            script.src = "language.js";
            head.appendChild(script);

        })
        .catch(error => {
            console.error("Error fetching navigation bar:", error);
        });
        


        fetch("footer.html")
        .then(response => response.text())
        .then(navHTML => {
            document.getElementById("footer").innerHTML = navHTML;

            const script = document.createElement("script");
            script.src = "language.js";
            head.appendChild(script);
        })
        .catch(error => {
            console.error("Error fetching navigation bar:", error);
        });


});

