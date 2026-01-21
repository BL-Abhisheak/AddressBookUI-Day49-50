document.addEventListener("DOMContentLoaded", () => {
    const name = document.getElementById("fullname");
    const address = document.getElementById("address");
    const city = document.getElementById("city");
    const state = document.getElementById("state");
    const zip = document.getElementById("zip");
    const phone = document.getElementById("phone");
    const addpersonbtn = document.getElementById("add-person");
    const resetformbtn = document.getElementById("reset-form");
    const formselector = document.getElementById("add-person-form");
    const delbtn = document.getElementById("del-btn");

    if (addpersonbtn) {
        addpersonbtn.addEventListener("click", function (event) {
            event.preventDefault();

            const person = {
                name: name.value,
                address: address.value,
                city: city.value,
                state: state.value,
                zip: zip.value,
                phone: phone.value
            };

            let people = JSON.parse(localStorage.getItem("people")) || [];
            people.push(person);
            localStorage.setItem("people", JSON.stringify(people));

            window.location.href = "index.html";
        });
    }

    const container = document.getElementById("people");

   
if (container) {
    let people = JSON.parse(localStorage.getItem("people")) || [];

    people.forEach((p, index) => {
        const div = document.createElement("div");
        div.className = "person-row";
        div.innerHTML = `
            <div>${p.name}</div>
            <div>${p.address}</div>
            <div>${p.city}</div>
            <div>${p.state}</div>
            <div>${p.zip}</div>
            <div>${p.phone}</div>
            <div class="actions">
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            </div>
        `;

        div.querySelector(".delete").addEventListener("click", () => {
            people.splice(index, 1);
            localStorage.setItem("people", JSON.stringify(people));
            div.remove();
        });

        container.appendChild(div);
    });
}


   if (resetformbtn) {
        resetformbtn.addEventListener("click", function (event) {
            event.preventDefault();

            formselector.reset();
            
        });
    }

});
