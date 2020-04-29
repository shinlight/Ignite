/*
      
        Google for pictures
​
        You are creating a search engine for pictures.
        The user should be able to access your webpage and seach for some pictures.
        
        The pictures should be presented in bootstrap cards, with this layout:
        - 4 pictures per row on large screens
        - 3 pictures per row on tablets
        - 1 picture per row on smaller devices
​
        [EXTRA]
        - When the user clicks on a picture, remove it from the page
        - When a new search is done, the previous list should be removed
​
        [HINT]
        - use fetch to retrieve the pictures
        - create at runtime the elements on your container
        - use bootstrap column system to create a responsive app
        - check the response from the API! It's not giving you back and array,
          but an object containing an array named "images"!
​
        API Docs: http://www.splashbase.co/api
        Example: http://www.splashbase.co/api/v1/images/search?query=laptop
​
        You should change the value after "query="
​
      */

async function search() {
    // take the value from the search input
    let searchValue = document.querySelector("#search").value
    // fetch the images from the apis
    document.querySelector(".spinner-grow").style.display = "block"
    let response = await fetch("http://www.splashbase.co/api/v1/images/search?query=" + searchValue)
    document.querySelector(".spinner-grow").style.display = "none"
    if (response.ok) {
        let imagesJson = await response.json()
        let searchResult = document.querySelector("#search-result")
        searchResult.innerHTML = ""

        if (imagesJson.images.length === 0) {
            document.querySelector(".alert").style.display = "block"
        }
        else {
            document.querySelector(".alert").style.display = "none"
            imagesJson.images.forEach(image => {
                let newDiv = document.createElement("div")
                newDiv.className = "card col-md-4 col-lg-3"
                newDiv.innerHTML = `<img src="${image.url}" class="card-img-top" alt="...">`
                newDiv.addEventListener("click", (e) => {
                    e.currentTarget.remove()
                })
                searchResult.appendChild(newDiv)
            });

            // searchResult.innerHTML = imagesJson.images.map(img => `
            //     <div class="card col-md-4 col-lg-3">
            //         <img src="${img.url}" class="card-img-top" alt="...">
            //     </div>
            // `).join("")

            
            //for (let i = 0; i < imagesJson.images.length; i++) {
                // render images on the page!
            
            //}
        }


    }
}
