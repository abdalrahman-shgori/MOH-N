document.addEventListener("DOMContentLoaded", function () {
    const head = document.head;

    fetch("../js/language.js")
        .then(response => response.text())
        .then(navHTML => {
            const script = document.createElement("script");
            script.src = "../js/language.js";
            head.appendChild(script);

        })
        .catch(error => {
        });

    fetch("../pages/footer.html")
        .then(response => response.text())
        .then(navHTML => {
            document.getElementById("footer").innerHTML = navHTML;
            const script = document.createElement("script");
            script.src = "../js/language.js";
            head.appendChild(script);

        })
        .catch(error => {
            // console.error("Error fetching navigation bar:", error);
        });


});

