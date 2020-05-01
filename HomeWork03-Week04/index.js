let url = "https://striveschool.herokuapp.com/api/reservation/"

//CREATE A NEW RESERVATION
async function createReservation() {
    //get all the information from the form!
    let reservation = {
        name: document.querySelector("#name").value,
        phone: document.querySelector("#phone").value,
        smoking: document.querySelector("#smoking").value,
        guests: document.querySelector("#guests").value,
        dateTime: document.querySelector("#dateTime").value,
        message: document.querySelector("#message").value,
    }

    let response;

    let id = document.querySelector("#current-event").value;
    if (id){ //if we have an id, we update
        //PUT to update the info
        response = await fetch(url +"/" +id, { // https://striveschool.herokuapp.com/api/reservation/{id}
            method: "PUT",
            body: JSON.stringify(reservation),
            headers: {
                "Content-Type": "application/json"
            }
        } )   
    }
    else{ //else we create!
        //POST the information to the endpoint
        response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(reservation),
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
   
    if (response.ok){
        let responseJson = await response.json()
        await loadReservations()
        //document.querySelector("#current-events").innerHTML += `<li class="list-group-item">${myEvent.time}: ${myEvent.name} - ${myEvent.price}€</li>`

        console.log("Created!", responseJson)
        document.querySelector("#name").value = ""
        document.querySelector("#phone").value = ""
        document.querySelector("#smoking").value = 0
        document.querySelector("#guests").value = ""
        document.querySelector("#message").value = ""
        document.querySelector("#dateTime").value = dateTime
        document.querySelector("#create-button").value = "Create event"
        document.querySelector("#current-event").value = ""
    }
    else{
        console.log("Error")
    }
}

//READ RESERVATIONS
async function loadReservations() {
    let response = await fetch(url)
    if(response.ok){
        let reservations = await response.json()
        let currentReservations = document.querySelector("#current-reservations");
        currentReservations.innerHTML = ""
        reservations.forEach(reservation => {
            let li = document.createElement("li")
            li.className = "list-group-item"
            li.innerText = `Name: ${reservation.name} - Phone: ${reservation.phone}  - Date and Time: ${reservation.dateTime}`
            let div = document.createElement("div")
            let editButton = document.createElement("button")
            editButton.className ="btn btn-success"
            editButton.innerText="Edit"
            editButton.addEventListener("click", () =>  editReservation(reservation))
            div.appendChild(editButton)
            let deleteButton = document.createElement("button")
            deleteButton.className ="btn btn-danger"
            deleteButton.innerText = "Delete"
            deleteButton.addEventListener("click", () => deleteReservation(reservation))
            div.appendChild(deleteButton)
            li.appendChild(div)
            currentReservations.appendChild(li)
        });
    }
}

//DELETE RESERVATION
async function deleteReservation(reservation){
    console.log("delete")
    let response = await fetch(url + "/" + reservation._id, {
        method: "DELETE"
    })
    if (response.ok) {
        await loadReservations();
    }
}

//EDIT RESERVATION
async function editReservation(reservation){
    document.querySelector("#name").value = reservation.name
    document.querySelector("#phone").value = reservation.phone
    document.querySelector("#smoking").value = reservation.smoking
    document.querySelector("#guests").value = reservation.guests
    document.querySelector("#message").value = reservation.date
    document.querySelector("#dateTime").value = reservation.data
    document.querySelector("#current-reservation").value = reservation._id
    document.querySelector("#create-button").value = "Update reservation"
}