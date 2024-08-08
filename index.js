// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Create and append style element
    var style = document.createElement('style');
    style.innerHTML = `
        .modal {
            display: none; 
            position: fixed; 
            z-index: 1; 
            padding-top: 60px; 
            left: 0;
            top: 0;
            width: 100%;
            height: 100%; 
            overflow: auto; 
            background-color: rgb(0,0,0); 
            background-color: rgba(0,0,0,0.4); 
        }

        .modal-content {
            background-color: #fefefe;
            margin: 5% auto;
            padding: 20px;
            border: 1px solid #888;
            width: 80%; 
        }

        .close {
            color: #aaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
        }

        .close:hover,
        .close:focus {
            color: black;
            text-decoration: none;
            cursor: pointer;
        }
    `;
    document.head.appendChild(style);

    // Create modal structure if it doesn't exist
    if (!document.getElementById("myModal")) {
        var modal = document.createElement('div');
        modal.id = "myModal";
        modal.className = "modal";
        
        var modalContent = document.createElement('div');
        modalContent.className = "modal-content";
        
        var closeSpan = document.createElement('span');
        closeSpan.className = "close";
        closeSpan.innerHTML = "&times;";
        
        var modalText = document.createElement('p');
        modalText.innerText = "Helle World";
        
        modalContent.appendChild(closeSpan);
        modalContent.appendChild(modalText);
        modal.appendChild(modalContent);
        document.body.appendChild(modal);
    }

    var modal = document.getElementById("myModal");
    var btn = document.getElementById("alertButton");
    var span = document.getElementsByClassName("close")[0];

    btn.addEventListener("click", function() {
        modal.style.display = "block";
    });

    span.addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});
