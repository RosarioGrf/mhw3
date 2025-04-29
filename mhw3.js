/*ROSARIO MARCO GRIFASI 1000045535*/
/*JS Pagina principale DJI STORE*/

/*-----------------------------------------------------------------------------------------------------*/
function OnHover() {
    const sfondo = document.querySelector("#top-bar-sotto");
    console.log("hover");
    sfondo.classList.add("hovered");
    sfondo.classList.remove("unhovered");
}

function OnUnhover() {
    const sfondo = document.querySelector("#top-bar-sotto");
    console.log("onunhover");
    sfondo.classList.add("unhovered");
    sfondo.classList.remove("hovered");
}

const flex_item= document.querySelectorAll(".dropdown");
for (let item of flex_item) {
    item.addEventListener("mouseover", OnHover);
    item.addEventListener("mouseout", OnUnhover); 
}


function visualizeSearchBar(){
    const menu = document.querySelector("#top-bar-sotto");
    const searchBar = document.querySelector("#search-bar");

    menu.classList.add("hidden");
    searchBar.classList.remove("hidden");
}

function visualizeMenu(){
    const menu = document.querySelector("#top-bar-sotto");
    const searchBar = document.querySelector("#search-bar");

    menu.classList.remove("hidden");
    searchBar.classList.add("hidden");
}

const searchIcon = document.querySelector("#search-icon");
const closeIcon = document.querySelector("#close-icon");
searchIcon.addEventListener("click", visualizeSearchBar);
closeIcon.addEventListener("click", visualizeMenu);






/*-----------------------------------------------------------------------------------------------------*/
function visualizeCart(event) {
    let tooltip = document.querySelector("#cart-tooltip");
    if (!tooltip) {
        tooltip = document.createElement("div");
        tooltip.id = "cart-tooltip";
        tooltip.textContent = "Il tuo carrello è vuoto";

        event.currentTarget.appendChild(tooltip);
    }

    const cartImage = event.currentTarget.querySelector("img");
    if (cartImage) {
        cartImage.src = "Immagini/icons/shopping-cart.png";
    }
}

function hideCartTooltip(event) {
    const tooltip = document.querySelector("#cart-tooltip");
    if (tooltip) {
        tooltip.remove();
    }

    const cartImage = event.currentTarget.querySelector("img");
    if (cartImage) {
        cartImage.src = "Immagini/icons/online-shopping.png";
    }
}

const cart = document.querySelector("#cart");
cart.addEventListener("mouseover", visualizeCart);
cart.addEventListener("mouseleave", hideCartTooltip);







/*-----------------------------------------------------------------------------------------------------*/
function visualizeUser(event) {
    let tooltip = document.querySelector("#user-tooltip");
    if (!tooltip) {
        tooltip = document.createElement("div");
        tooltip.id = "user-tooltip";
        tooltip.textContent = "Accedi | Registrati";

        event.currentTarget.appendChild(tooltip);
    }

    const userImage = event.currentTarget.querySelector("img");
    if (userImage) {
        userImage.src = "Immagini/icons/user-shape.png";
    }
}

function hideUserTooltip(event) {
    const tooltip = document.querySelector("#user-tooltip");
    if (tooltip) {
        tooltip.remove();
    }

    const userImage = event.currentTarget.querySelector("img");
    if (userImage) {
        userImage.src = "Immagini/icons/user.png";
    }
}

const user = document.querySelector("#user");
user.addEventListener("mouseover", visualizeUser);
user.addEventListener("mouseleave", hideUserTooltip);











/*-----------------------------------------------------------------------------------------------------*/
function scrollSlider_left(){
    const slider = document.querySelector("#slider");
    slider.scrollLeft -= 300;
}

function scrollSlider_right(){
    const slider = document.querySelector("#slider");
    slider.scrollLeft += 300;
}

const leftArrow = document.querySelector("#arrow-left");
const rightArrow = document.querySelector("#arrow-right");
leftArrow.addEventListener("click", scrollSlider_left);
rightArrow.addEventListener("click", scrollSlider_right);








/*-----------------------------------------------------------------------------------------------------*/
function scrollSlider_cards_left(){
    const card_container = document.querySelector("#cards_container");
    card_container.scrollTo({
        left: card_container.scrollLeft - 400,
        behavior: "smooth"
    });
}

function scrollSlider_cards_right(){
    const card_container = document.querySelector("#cards_container");
    card_container.scrollTo({
        left: card_container.scrollLeft + 400,
        behavior: "smooth"
    });
}

const leftArrow_cards = document.querySelector("#arrow-left-card");
const rightArrow_cards = document.querySelector("#arrow-right-card");
leftArrow_cards.addEventListener("click", scrollSlider_cards_left);
rightArrow_cards.addEventListener("click", scrollSlider_cards_right);









/*-----------------------------------------------------------------------------------------------------*/
function closeModal() {
    const modalOverlay = document.querySelector(".modal-overlay");
    if (modalOverlay) {
        modalOverlay.remove();
        document.body.classList.remove("modal-open");
    }
}

function stopPropagation(event) {
    event.stopPropagation();
}

function showmodal(event) {
    console.log("showmodal");
    const itemInfo = event.currentTarget;

    const modalOverlay = document.createElement("div");
    modalOverlay.classList.add("modal-overlay");

    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");

    const closeButton = document.createElement("button");
    closeButton.classList.add("close-btn");
    closeButton.textContent = "x";

    const modalTitle = document.createElement("h2");
    modalTitle.classList.add("modalTitle");

    const modalText = document.createElement("p");
    modalText.classList.add("modalText");

    const modalExtra = document.createElement("a");
    modalExtra.classList.add("modalExtra");

    modalContent.appendChild(closeButton);
    modalContent.appendChild(modalTitle);
    modalContent.appendChild(modalText);
    modalContent.appendChild(modalExtra);
    modalOverlay.appendChild(modalContent);
    document.body.appendChild(modalOverlay);

    modalTitle.textContent = itemInfo.dataset.title;
    modalText.textContent = itemInfo.dataset.text;
    modalExtra.textContent = itemInfo.dataset.extra;

    modalOverlay.style.display = "flex";

    document.body.classList.add("modal-open");

    closeButton.addEventListener("click", closeModal);
    modalOverlay.addEventListener("click", closeModal);
    modalContent.addEventListener("click", stopPropagation);
}

const modals = document.querySelectorAll(".item_info_center");
for (let modal of modals) {
    modal.addEventListener("click", showmodal);
}















/*-----------------------------------------------------------------------------------------------------*/
function FromVideoToImg(event) {
    const container = event.currentTarget.closest(".video-banner");
    const img = container.querySelector("img");
    const video = container.querySelector("video");

    video.style.display = "none";
    img.style.display = "block";
}

const videos=document.querySelectorAll(".video-banner video");
for (let video of videos) {
    video.addEventListener("ended", FromVideoToImg);
}

function FromImgToVideo(event) {
    const container = event.currentTarget.closest(".video-banner");
    const img = container.querySelector("img");
    const video = container.querySelector("video");

    img.style.display = "none";
    video.style.display = "block";
    video.play();
}

const buttons = document.querySelectorAll(".video-banner .restart-button");
for (let button of buttons) {
    button.addEventListener("click", FromImgToVideo);
}










  
/*-----------------------------------------------------------------------------------------------------*/  
function scrollSlider_left2(slider){
    slider.scrollLeft -= 300;
}

function scrollSlider_right2(slider){
    slider.scrollLeft += 300;
}

const sliderContainers = document.querySelectorAll('.slider-container-2');
for (const container of sliderContainers) {
    const slider = container.querySelector('.slider-2');
    const leftArrow = container.querySelector('.arrow-2.left-2');
    const rightArrow = container.querySelector('.arrow-2.right-2');

    if (!slider || !leftArrow || !rightArrow) continue;

    leftArrow.addEventListener('click', () => scrollSlider_left2(slider));
    rightArrow.addEventListener('click', () => scrollSlider_right2(slider));
}













/*-----------------------------------------------------------------------------------------------------*/
cityName = 'Catania';

function onWeatherJson(json){
    const container = document.querySelector('#weather-box');
    container.innerHTML = '';
  
    if (json && json.current) {
        console.log('Dati meteo ricevuti:', json);
        const title = document.createElement('h2');
        title.textContent = 'Meteo per la tua zona';
  
        const location = document.createElement('p');
        location.textContent = `Luogo: ${json.location.name}, ${json.location.region}, ${json.location.country}`; //località

        const temp = document.createElement('p');
        temp.textContent = 'Temperatura: ' + json.current.temp_c + '°C'; // Temperatura in °C
  
        const condition = document.createElement('p');
        condition.textContent = 'Condizione: ' + json.current.condition.text; // Condizioni meteo
  
        const icon = document.createElement('img');
        icon.src = 'https:' + json.current.condition.icon; // Icona meteo
        icon.alt = json.current.condition.text;

        const humidity = document.createElement('p');
        humidity.textContent = 'Umidità: ' + json.current.humidity + '%'; // Umidità

        const windvelocity = document.createElement('p');
        windvelocity.textContent = 'Velocità del Vento: ' + json.current.wind_kph + ' km/h'; // Velocità vento

        const advisory = document.createElement('p');
        const wind = json.current.wind_kph; // Velocità del vento in km/h
        const visibility = json.current.vis_km; // Visibilità in km
        const precipitation = json.current.precip_mm; // Precipitazioni in mm
        if (precipitation > 30 || wind > 25 || visibility < 3) {
            advisory.textContent = '⚠️ Condizioni non ideali per il volo del drone.';
            advisory.style.color = 'red';
        } else if (wind > 15) {
            advisory.textContent = '🔶 Attenzione: vento moderato, vola con cautela.';
            advisory.style.color = 'orange';
        } else {
            advisory.textContent = '✅ Buone condizioni per far volare il drone.';
            advisory.style.color = 'green';
        }

        const updated = document.createElement('h4');
        updated.textContent = 'Ultimo aggiornamento: ' + json.current.last_updated;


        container.appendChild(title);
        container.appendChild(location);
        container.appendChild(temp);
        container.appendChild(condition);
        container.appendChild(humidity);
        container.appendChild(windvelocity);
        container.appendChild(advisory);
        container.appendChild(icon);
        container.appendChild(updated);
    } else {
        container.innerHTML = '<p>Dati meteo non disponibili.</p>';
    }
}

function onWeatherResponse(response) {
    return response.json();
}

function fetchWeatherData(lat, lng) {
    const apiKey = '7c15ad8a5a0e46a8b62110903251204'; //WEATHER API KEY. vedi https://www.weatherapi.com/my/
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lng}&aqi=no`;
  
    fetch(url).then(onWeatherResponse).then(onWeatherJson);
  }
  

  function onGeoJson(json) {
    console.log('Coordinate ricevute');
  
    const resources = json.resourceSets[0].resources;
  
    if (resources.length > 0) {
      const coords = resources[0].point.coordinates;
      const lat = coords[0];
      const lng = coords[1];
      console.log('Coordinate:', lat, lng);
      fetchWeatherData(lat, lng);
    } else {
      console.error('Coordinate non trovate');
    }
  }
  

  function onGeoResponse(response) {
    console.log('Risposta coordinate ricevuta');
    return response.json();
  }
  

  function fetchCoordinates(event) {
    event.preventDefault();
    console.log('Richiesta coordinate per:');
    const bingMapsKey = 'ApwhowTOlOwc6jfo5zPH8klAHAy67rO45yu5zJsA-uaIYH8dMnk7xQHQxPfeFUpF'; //BING MAPS API KEY
    const url = 'http://dev.virtualearth.net/REST/v1/Locations?query=' + encodeURIComponent(cityName) + '&key=' + bingMapsKey;
    fetch(url).then(onGeoResponse).then(onGeoJson);
  }


  function onUserPosition(position) {
    const userLat = position.coords.latitude;
    const userLng = position.coords.longitude;
  
    const userLocation = new Microsoft.Maps.Location(userLat, userLng);
    const userPushpin = new Microsoft.Maps.Pushpin(userLocation, {
      color: 'red',
      title: 'La tua posizione',
      text: '👤'
    });
  
    
    map.entities.push(userPushpin);
    console.log('Posizione utente:', userLat, userLng);
  }
  

  function onUserPositionError(error) {
    console.error('Errore nel rilevare la posizione:', error.message);
  }


  function initMap(lat, lng) {
    if (!lat) lat = 37.518904;
    if (!lng) lng = 15.0894861;
  
    map = new Microsoft.Maps.Map('#myMap', {
      credentials: 'ApwhowTOlOwc6jfo5zPH8klAHAy67rO45yu5zJsA-uaIYH8dMnk7xQHQxPfeFUpF',
      center: new Microsoft.Maps.Location(lat, lng),
      zoom: 14
    });
  

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(onUserPosition, onUserPositionError);
    } else {
      console.error('Geolocalizzazione non supportata dal browser.');
    }
  }

  window.addEventListener('load',fetchCoordinates);
  /*
    const form = document.querySelector('form');
    form.addEventListener('submit', fetchCoordinates);
  */










    


/*-----------------------------------------------------------------------------------------------------*/
    function onJson2(json) {
        console.log("JSON ricevuto");
        console.log(json);
        const library = document.querySelector("#album-view");
        library.innerHTML = "";
        const results = json.albums.items;
        let num_results = results.length;
        if (num_results > 9) num_results = 9;
        for (let i = 0; i < num_results; i++) {
            const album_data = results[i];
            const title = album_data.name;
            const selected_image = album_data.images[0].url;
            const album = document.createElement("div");
            album.classList.add("album");
            const img = document.createElement("img");
            img.src = selected_image;
            const caption = document.createElement("span");
            caption.textContent = title;
            album.appendChild(img);
            album.appendChild(caption);
            library.appendChild(album);
        }
    }
          
    function onResponse2(response) {
        console.log("Risposta ricevuta");
        return response.json();
    }
          
    function search(event) {
        event.preventDefault();
        const album_input = document.querySelector("#album");
        const album_value = encodeURIComponent(album_input.value);
        console.log("Eseguo ricerca: " + album_value);
        fetch("https://api.spotify.com/v1/search?type=album&q=" + album_value, {
            headers: {
            Authorization: "Bearer " + token,
            },
        })
        .then(onResponse2)
        .then(onJson2);
    }
          
    function onTokenJson(json) {
        console.log(json);
        token = json.access_token;
    }
          
    function onTokenResponse(response) {
        return response.json();
    }
          
    const client_id = "7f6bacba3bd5461983e304f4710f88f6";
        const client_secret = "a8eabd53422f496188eeee5f52f71af9";
        let token;
        fetch("https://accounts.spotify.com/api/token", {
        method: "post",
        body: "grant_type=client_credentials",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: "Basic " + btoa(client_id + ":" + client_secret),
        },
          })
        .then(onTokenResponse)
        .then(onTokenJson);
    let form = document.querySelector("form");
    form. addEventListener("submit", search);
    console.log(form);