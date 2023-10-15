document.addEventListener("DOMContentLoaded", function () {
    const head = document.head;

    // Fetch the navigation bar from nav.html
    fetch("nav.html")
        .then(response => response.text())
        .then(navHTML => {
            document.getElementById("navbar-container").innerHTML = navHTML;

            // Include the language.js script after the navigation bar is loaded
            const script = document.createElement("script");
            script.src = "./js/language.js";
            head.appendChild(script);
            
        })
        .catch(error => {
            console.error("Error fetching navigation bar:", error);
        });

       

});

