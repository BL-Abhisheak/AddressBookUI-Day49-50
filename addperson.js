document.addEventListener("DOMContentLoaded", () => {

    const resetformbtn = document.getElementById("reset-form");
    const formselector = document.getElementById("add-person-form");

   if (resetformbtn) {
        resetformbtn.addEventListener("click", function (event) {
            event.preventDefault();

            formselector.reset();
            
        });
    }

});
