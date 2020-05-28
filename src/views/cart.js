// cart.js

import $ from "jquery";

export const cart = () => {
  const fragment = $(new DocumentFragment());
  const cartPage = $(`
  
  <div class="product-container">
  <div class="product-header">
  <h5 class="product-title">Nazwa</h5>
  <h5 class="price">Cena</h5>
  <h5 class="details">Szczegóły</h5>
  <h5 class="total">Ilość</h5>
  </div>
  <div class= "summary">
    <span class="main-title">POKOJE</span>
   <div class="products"></div>
    <span class="main-title">Zabiegi</span>
   <div class="treatments"></div>
  </div>
  
    <span id="total-cost"></span>
    <a class="cart-btn btn btn-primary" type="button" data-toggle="modal" data-target="#modal-reserve">Przejdź do rezerwacji</a>
    <a id="remove-all" btn btn-primary" type="button">Usuń wszystko z koszyka</a>
    <span class="infop"></span>
    
 <div class="modal" id="modal-reserve" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Rezerwacja</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
      </div>

        <div class="modal-body">
        <!-- modal inside -->
        <form >
    <div id="contact-form">
      <div class="form-group modal-reserve">
      <h2 class="heading">Rezerwacja</h2>
        <div class="details-reserve">
         <input type="text" id="name-reserve" class="floatLabel" name="name" placeholder="Imię" required>
         <input type="text" id="surname-reserve" class="floatLabel" name="surname" placeholder="Nazwisko" required>
         <input type="email" id="email-reserve" class="floatLabel" name="email" placeholder="e-mail" required>
         <input type="number" id="phone-reserve" class="floatLabel" name="phone" placeholder="numer telefonu" required>
         <input type="text" maxlength="9" id="city-reserve" class="floatLabel" name="city" placeholder="Miasto" required>
      </div> 
    </div>

    <!--  Details -->
    <div class="form-group">
      <h2 class="heading">Szczegóły</h2>
      <div class="grid">
      <div class="col-1-4 col-1-4-sm">
        <div class="controls">
        <span>Przyjazd</span>
          <input type="text" id="book_from" class="floatLabel" name="arrive" required>
        </div>      
      </div>
      <div class="col-1-4 col-1-4-sm">
        <div class="controls">
        <span>Odjazd</span>
          <input type="text" id="book_to" class="floatLabel" name="depart" required />
        </div>      
      </div>
        </div>
        <div class="grid">
          <div class="controls">
            <textarea name="comments" class="floatLabel" id="comments" placeholder="Wpisz dodatkowe informacje"></textarea>
            </div>
               <a id="reserve-btn" href="/bookings" type="submit" class="col-1-4">Rezerwuj</a>
          </form> 
           
         
        </div>  
    </div>
        </div>
      </div>
    </div>
  </div>


<script>

$("#reserve-btn").on("click", function(e){
let nameReserve = document.getElementById("name-reserve").value;
let surnameReserve = document.getElementById("surname-reserve").value;
let emailReserve = document.getElementById("email-reserve").value;
let phoneReserve = document.getElementById("phone-reserve").value;
let dataFrom = document.getElementById("book_from").value;
let dataTo = document.getElementById("book_to").value;
let cityReserve = document.getElementById("city-reserve").value;
let addInfo = document.getElementById("comments").value;
localStorage.setItem("name", nameReserve);
localStorage.setItem("surname", surnameReserve);
localStorage.setItem("email", emailReserve);
localStorage.setItem("phone", phoneReserve);
localStorage.setItem("city", cityReserve);
localStorage.setItem("datafrom", dataFrom);
localStorage.setItem("datato", dataTo);
localStorage.setItem("addInfo", addInfo);

let productContainer = document.querySelector(".product-container");
productContainer.textContent = "Koszyk jest pusty - sprawdź swoje zamówienie w zakładce 'Rezerwacje'";

});


var start_date=$('#book_from').val();
var end_date=$('#book_to').val();
$("#book_from").datepicker({
minDate: "0",
maxDate: "+1y",
onSelect: function(dateStr) {
start_date=$(this).val();
$('#book_to').datepicker('option', 'minDate', new Date(start_date));
},
todayBtn : "linked",
keyboardNavigation : false,
forceParse : false,
calendarWeeks : true,
autoclose : true
});

$("#book_to").datepicker({
minDate: "0",
maxDate: "+1y",
todayBtn : "linked",
keyboardNavigation : false,
forceParse : false,
calendarWeeks : true,
autoclose : true
});


function showTotalCost () {
  let allCost = document.getElementById("total-cost");
  let getFullPrice = localStorage.getItem("totalCost");
    if (getFullPrice) {
     let count = parseInt(getFullPrice);
     allCost.textContent = count == 0 ? "" : "Kwota zamówienia: " + getFullPrice + " zł";
      }
    }
   
showTotalCost();


function displayCart() {
    let cartItems = localStorage.getItem("roomsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");

    if (cartItems && productContainer) {
      productContainer.innerHTML = "";

      Object.values(cartItems).map((item) => {
        let productContainerText = "";
        productContainerText += "<div class='product-item'>";
        productContainerText += "<a class='delete-item' data-roomname ='" + item.name + "' data-pricename = '" + item.price + "'>"  + "x" + "</a>";
        productContainerText += "<img class='item-img' src=" + " ' " + item.photo + "'" + "/>";
        productContainerText += "<span class='item-name'>" + item.name + "</span>";
        productContainerText += "<span class='item-price'>" + item.price + " zł" + "</span>";
        productContainerText += "<span class='beds-item'>" + "ilość łóżek: " + item.beds + "</span>";
        productContainerText += "<span class='guests-item'>" + "ilość gości: " + item.guests + "</span>";
        productContainerText += "<span class='incart-item'>"  + item.inCart + "</span>";
        productContainerText += "</div>";

        productContainer.innerHTML += productContainerText;

      });
    }

    $(".delete-item").on("click", function(e){
      let everything = localStorage.getItem("roomsInCart");
      everything = JSON.parse(everything);
    let roomName = e.target.getAttribute('data-roomname');
    delete everything[roomName];
    let everythingText = JSON.stringify(everything);
    localStorage.setItem("roomsInCart", everythingText);
    localStorage.setItem("cartNumbers", Object.keys(everything).length);
    updateNavCartNumber();

    let roomElement = e.target.parentNode;
    roomElement.parentNode.removeChild(roomElement);

    function deleteTotalCost() {
      let totalCartCost = localStorage.getItem("totalCost");
        totalCartCost = parseInt(totalCartCost);
        let priceName = e.target.getAttribute('data-pricename');
        let full = totalCartCost - priceName;
       localStorage.setItem("totalCost", full);

       let allCost = document.getElementById("total-cost");
  let getFullPrice = localStorage.getItem("totalCost");
    if (getFullPrice) {
     let count = parseInt(getFullPrice);
     allCost.textContent = count == 0 ? "" : "Kwota zamówienia: " + getFullPrice + " zł";
      }
    }

    deleteTotalCost();
    disableBtn()
    })

  }


function displayTreats() {
    let treatsItems = localStorage.getItem("treatsInCart");
    treatsItems = JSON.parse(treatsItems);
    let treatsContainer = document.querySelector(".treatments");

    if (treatsItems && treatsContainer) {
      treatsContainer.innerHTML = "";

      Object.values(treatsItems).map((treat) => {
        let treatsContainerText = "";
        treatsContainerText += "<div class='treatment-item'>";
        treatsContainerText += "<a class='delete-treat' data-treatname ='" + treat.name + "' data-treatpricename = '" + treat.price + "' >"  + "x" + "</a>";
        treatsContainerText += "<img class='item-img' src=" + " ' " + treat.photo + "'" + "/>";
        treatsContainerText += "<span class='item-name'>" + treat.name + "</span>";
        treatsContainerText += "<span class='item-price'>" + treat.price + " zł" + "</span>";
        treatsContainerText += "<span class='treat-item'>" + "obszar: " + treat.area + "</span>";
        treatsContainerText += "<span class='time-item'>" + "czas: " + treat.time + "min." + "</span>";
        treatsContainerText += "<span class='incart-item'>"  + treat.incarts + "</span>";
        treatsContainerText += "</div>";

        treatsContainer.innerHTML += treatsContainerText;

      });
    }

    $(".delete-treat").on("click", function(e){
      let allTreats = localStorage.getItem("treatsInCart");
      allTreats = JSON.parse(allTreats);
    let treatName = e.target.getAttribute('data-treatname');
    delete allTreats[treatName];
    let allTreatsText = JSON.stringify(allTreats);
    localStorage.setItem("treatsInCart", allTreatsText);
    localStorage.setItem("cartNumbers", Object.keys(allTreats).length);
    updateNavCartNumber();

    let roomElement = e.target.parentNode;
    roomElement.parentNode.removeChild(roomElement);

    function deleteTreatCost(){
let treatCost = localStorage.getItem("totalCost");
treatCost = parseInt(treatCost);
let treatName = e.target.getAttribute('data-treatpricename');
let fullCost = treatCost - treatName;
localStorage.setItem("totalCost", fullCost);
let allCost = document.getElementById("total-cost");
getFullPrice = localStorage.getItem("totalCost");
if(getFullPrice){
  let count = parseInt(getFullPrice);
     allCost.textContent = count == 0 ? "" : "Kwota zamówienia: " + getFullPrice + " zł";
}

    }

    deleteTreatCost();
    disableBtn()

    })

  }
  

function disableBtn(){
let resBtn = document.querySelector(".cart-btn");
let getFullPrice = localStorage.getItem("totalCost");
getFullPrice = JSON.parse(getFullPrice);
let infoP = document.querySelector(".infop");
if(getFullPrice == null || getFullPrice == 0){
   resBtn.disabled = true;
} else{
resBtn.disabled = false;
 infoP.textContent = "";
}
}

$("#remove-all").on("click", function () {
    localStorage.clear();
    let treatsContainer = document.querySelector(".treatments");
    let productContainer = document.querySelector(".products");
    treatsContainer.innerHTML = "";
    productContainer.innerHTML = "";
    localStorage.setItem("cartNumbers", 0);

    function deleteTotalCost () {
      let allCost = document.getElementById("total-cost");
      let getFullPrice = localStorage.setItem("totalCost", 0);
        if (getFullPrice == null|| getFullPrice == 0) {
         let count = parseInt(getFullPrice);
         allCost.textContent = count == 0 ? "" : "";
          }
        }
       
    deleteTotalCost();
    updateNavCartNumber();
    disableBtn()
  });

  disableBtn();
  displayCart();
  displayTreats();
  </script>`);

  fragment.append(cartPage);
  return fragment;
};
