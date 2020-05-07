async function loadReservations() {
    let reservations = await fetch("https://striveschool.herokuapp.com/api/reservation/")
    let resObj = await reservations.json()

    let list = document.querySelector("#reservations")
    list.innerHTML += resObj.map(x => `<li>${x.name} -> ${x.numberOfPersons} </li>`).join("")
}

async function sendReservation() {
    let myReservation = {
        name: document.querySelector("#name").value,
        phone: document.querySelector("#phone").value,
        smoking: document.querySelector("#smoking").checked,
        numberOfPersons: document.querySelector("#numberOfPersons").value,
        dateTime: document.querySelector("#dateTime").value,
        specialRequests: document.querySelector("#specialRequests").value
    }

    let reservations = await fetch("https://striveschool.herokuapp.com/api/reservation/", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(myReservation)
    })

    await loadReservations()
}