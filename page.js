// document.getElementById("location").addEventListener("click", function(event) {
//     event.preventDefault();

//     let mapContainer = document.getElementById("map-container");

//     mapContainer.innerHTML = '<button id="close-map">X</button>';

//     const iframe = document.createElement("iframe");
//     iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.1923147308694!2d-80.23800782307212!3d26.092640194848574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b973318b2501%3A0x6b9ffcff9efc01b9!2sSoutheast%20Armory%20%2F%20Boresight%20Solutions!5e0!3m2!1sen!2sus!4v1739459663251!5m2!1sen!2sus";
//     iframe.width = "600";
//     iframe.height = "450";
//     iframe.style.border = "0";
//     iframe.allowFullscreen = true;
//     iframe.loading = "lazy";
//     iframe.referrerPolicy = "no-referrer-when-downgrade";

//     mapContainer.appendChild(iframe);
    
//     mapContainer.style.display = "block";

//     document.getElementById("close-map").addEventListener("click", function() {
//         mapContainer.style.display = "none";
//     });
// });