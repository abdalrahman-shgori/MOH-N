document.addEventListener("DOMContentLoaded", function () {
    const head = document.head;

    fetch("../pages/nav.html")
    .then(response => response.text())
    .then(navHTML => {
        document.getElementById("navbar-container").innerHTML = navHTML;

        // Create a script element for language.js
        const script = document.createElement("script");
        script.src = "../js/language.js";
        
        // Append the script to the head element
        const head = document.querySelector('head');
        head.appendChild(script);

    })
    .catch(error => {
        console.error("Error fetching navigation bar:", error);
    });
        

        fetch("../pages/footer.html")
        .then(response => response.text())
        .then(navHTML => {
            document.getElementById("footer").innerHTML = navHTML;

            const script = document.createElement("script");
            script.src = "../js/language.js";
            head.appendChild(script);
            console.log("abd")

        })
        .catch(error => {
            console.error("Error fetching navigation bar:", error);
        });


});

