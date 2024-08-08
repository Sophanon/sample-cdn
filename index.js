// script.js
document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("alertButton");
    
    if (button) {
        button.addEventListener("click", function() {
            alert("Button with ID 'alertButton' was clicked!");
        });
    }
});
