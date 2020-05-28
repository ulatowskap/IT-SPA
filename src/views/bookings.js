// bookings.js

import $ from "jquery";

export const bookings = () => {
  const fragment = $(new DocumentFragment());

  const bookingPage = $(
    `
<h1 class="h1reserv">Rezerwacja</h1>
<h4>Marzenia o wypoczynku wkrótce się spełnią!</h4> 

<div class="reservation-data"></div>

  <div id="full-reservation">  </div>
  <div id="full-reservation-room">  </div>
<div id="full-money"></div>
   
    <script>


function displayReservation() {
    let name = localStorage.getItem("name");
    let surname =localStorage.getItem("surname");
    let email =localStorage.getItem("email");
    let phone =localStorage.getItem("phone");
    let city =localStorage.getItem("city");
    let dataFrom =localStorage.getItem("datafrom");
    let dataTo =localStorage.getItem("datato");
    let addInfo =localStorage.getItem("addInfo");
    let productContainer = document.querySelector(".reservation-data");

    if (name && productContainer) {
      productContainer.innerHTML = "";
      productContainer.innerHTML += "<h5 class='title-reservation'>" + "Twoje dane" + "</h5>";
        productContainer.innerHTML += "<p class='item-name-data'>" + "<span class='span-item'>" + "Imię: " + "</span>" + name + "</p>";
          productContainer.innerHTML += "<p class='item-name-data'>" + "<span class='span-item'>" + "Nazwisko: " + "</span>" + surname + "</p>";
            productContainer.innerHTML += "<p class='item-name-data'>" + "<span class='span-item'>" + "E-mail: " + "</span>" + email + "</p>";
              productContainer.innerHTML += "<p class='item-name-data'>" + "<span class='span-item'>" + "Telefon: " + "</span>" + phone + "</p>";
                productContainer.innerHTML += "<p class='item-name-data'>" + "<span class='span-item'>" + "Miasto: " + "</span>" + city + "</p>";
                  productContainer.innerHTML += "<p class='item-name-data'>" + "<span class='span-item'>" + "Data przyjazdu: " + "</span>" + dataFrom + "</p>";
                    productContainer.innerHTML += "<p class='item-name-data'>" + "<span class='span-item'>" + "Data wyjazdu: " + "</span>" + dataTo + "</p>";
                      productContainer.innerHTML += "<p class='item-name-data'>" + "<span class='span-item'>" + "Dodatkowe informacje: " + "</span>" + addInfo + "</p>";

    }
  }

  displayReservation();

function showReservation(){
  let productC = document.querySelector(".reservation-data");
  let fullReservation = document.getElementById("full-reservation");
  console.log(productC);

  if(productC.textContent == ""){
   console.log("works")
  } else {
   function showTotalCost () {
      let allCost = document.getElementById("full-money");
      let getFullPrice = localStorage.getItem("totalCost");
      if (getFullPrice) {
        let count = parseInt(getFullPrice);
        allCost.textContent = count == 0 ? "" : "Zapłać po przyjeździe:  " + getFullPrice + " zł";
      }
    };

    showTotalCost();
    
 function displayCart() {
    let cartItems = localStorage.getItem("roomsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.getElementById("full-reservation-room");
    if (cartItems && productContainer) {
      productContainer.innerHTML = "";
      Object.values(cartItems).map((item) => {
        productContainer.innerHTML += "<div class='product-item'>";
        productContainer.innerHTML += "<img class='item-img' src=" + " ' " + item.photo + "'" + "/>";
        productContainer.innerHTML += "<span class='item-name'>" + item.name + "</span>";
        productContainer.innerHTML += "<span class='item-price'>" + item.price + " zł" + "</span>";
        productContainer.innerHTML += "<span class='beds-item'>" + "ilość łóżek: " + item.beds + "</span>";
        productContainer.innerHTML += "<span class='guests-item'>" + "ilość gości: " + item.guests + "</span>";
        productContainer.innerHTML += "<span class='incart-item'>" + "ilość: " + item.inCart + "</span>";
        productContainer.innerHTML += "</div>";
      });
    }
  }

  displayCart();
  function displayTreats() {
    let treatsItems = localStorage.getItem("treatsInCart");
    treatsItems = JSON.parse(treatsItems);
    let treatsContainer = document.getElementById("full-reservation");
    if (treatsItems && treatsContainer) {
      treatsContainer.innerHTML = "";
      Object.values(treatsItems).map((treat) => {
        treatsContainer.innerHTML += "<div class='treatment-item'>";
        treatsContainer.innerHTML += "<img class='item-img' src=" + " ' " + treat.photo + "'" + "/>";
        treatsContainer.innerHTML += "<span class='item-name'>" + treat.name + "</span>";
        treatsContainer.innerHTML += "<span class='item-price'>" + treat.price + " zł" + "</span>";
        treatsContainer.innerHTML += "<span class='treat-item'>" + "obszar: " + treat.area + "</span>";
        treatsContainer.innerHTML += "<span class='time-item'>" + "czas: " + treat.time + "min." + "</span>";
        treatsContainer.innerHTML += "<span class='incart-item'>" + "ilość: " + treat.incarts + "</span>";
        treatsContainer.innerHTML += "</div>";
      });
    }
  }
displayTreats();
  }
}

showReservation();

    </script>`
  );

  fragment.append(bookingPage);

  return fragment;
};
