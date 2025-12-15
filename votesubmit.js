"use strict";

document.addEventListener("DOMContentLoaded", function () {

    const maxChecks = 5;
    const form = document.getElementById("vote");
    const checkboxes = form.querySelectorAll("input[type='checkbox']");

    // selection limit
    checkboxes.forEach(cb => {
        cb.addEventListener("change", function () {
            const checkedCount = [...checkboxes].filter(i => i.checked).length;

            if (checkedCount > maxChecks) {
                this.checked = false;
                alert("You may only select up to 5 characters.");
            }
        });
    });

    // handle submit
    form.addEventListener("submit", function (event) {

        // reject blank form
        const checkedCount = [...checkboxes].filter(i => i.checked).length;

        if (checkedCount === 0) {
            event.preventDefault();
            alert("Please select at least one character before submitting.");
            return;
        }

        // confirmation popup
        alert("Your vote has been cast!");

    });
});