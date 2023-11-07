document.addEventListener("DOMContentLoaded", function () {
    const head = document.head;

    fetch("../pages/nav.html")
        .then(response => response.text())
        .then(navHTML => {
            document.getElementById("navbar-container").innerHTML = navHTML;
            // const script = document.createElement("script");
            // script.src = "../js/language.js";
            // head.appendChild(script);

        })
        .catch(error => {
            console.error("Error fetching navigation bar:", error);
        });
        fetch("../js/language.js")
        .then(response => response.text())
        .then(scriptContent => {
            const script = document.createElement("script");
            script.text = scriptContent; // Set the content of the fetched script
            document.head.appendChild(script); // Append the script to the document's head
        })
        .catch(error => {
            console.error("Error fetching and executing script:", error);
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

