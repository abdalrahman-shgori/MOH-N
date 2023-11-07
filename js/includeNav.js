document.addEventListener("DOMContentLoaded", function () {
    const head = document.head;

    async function fetchNavAndLanguage() {
        try {
          const response = await fetch("../pages/nav.html");
          const navHTML = await response.text();
      
          const script = document.createElement("script");
          script.src = "../js/language.js";
      
          const head = document.getElementsByTagName('head')[0];
          head.appendChild(script);
      
          document.getElementById("navbar-container").innerHTML = navHTML;
        } catch (error) {
          console.error("Error fetching navigation bar:", error);
        }
      }
      
      fetchNavAndLanguage();
      
        


        fetch("../pages/footer.html")
        .then(response => response.text())
        .then(navHTML => {
            document.getElementById("footer").innerHTML = navHTML;
        })
        .catch(error => {
            console.error("Error fetching navigation bar:", error);
        });


});

