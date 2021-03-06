// Imports styles
import "../css/styles.css";

// Imports scripts
import "./bootstrap/bootstrap.bundle.min";

// Import Postman
import { Postman } from "./class/Postman";
import { ChatUI } from "./class/Chat-UI";

import { logout } from "./helpers/logout";

// Import service worker.
import { SW } from "./class/SW";

const sw = new SW();
sw.sendSubcriptionServer();

// Get DOM
const form = document.getElementById("form-message");
const userInput = document.getElementById("user_id");
const postman = new Postman(userInput.value);

form?.addEventListener("click", e => {
     e.preventDefault();

     const formdata = new FormData(form);
     const message = formdata.get("message");
     const to = formdata.get("to");
     const from = userInput.value;

     if (!!from && !!to && !!message) {
          postman.send(from, to, message);
          form.reset();
     }
});

window.addEventListener("load", () => {
     new ChatUI().scrollAutomatic();
});

document.getElementById("btn-logout").addEventListener("click", e => {
     logout();
});
