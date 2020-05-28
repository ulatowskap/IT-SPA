// rooms.js

import $ from "jquery";

export const rooms = () => {
  const fragment = $(new DocumentFragment());

  let details = $.getJSON(
    "https://my-json-server.typicode.com/ulatowskap/demo/rooms",
    function (data) {
      $.each(data, function (index, value) {
        var name = value.name;
        var beds = value.beds;
        var guests = value.guests;
        var price = value.price;
        var photo = value.photo;

        $(".output").append(`
        <div class="row">
      <div class="col-lg-6 mb-4">
        <div class="card h-100 border-0 shadow">
         <h4 class="card-title mb-0">
              <p id="room-name" class="name">${name}</p>
            </h4>
          <img class="card-img-top" src="${photo}" alt="">
          <div class="card-body text-center">
            <p id="person" class="card-text guests text-black-50">Ilość osób: ${guests}</p>
            <p id="bed" class="card-text beds text-black-50"> Ilość łóżek: ${beds}</p>
            <p id="price"class="card-text price text-black-50">Cena: ${price} zł</p>
            </div>
            <button class="add-cart" href="#">Dodaj do koszyka</button>
        </div>
      </div>
  <script>
    $(function() {
    $('#dialog').dialog({
        autoOpen:false
    });
    $(".add-cart").click(function(e) {
        e.preventDefault();
        $('#dialog').dialog('open');
    });
});
       </script>
      `);
      });

      let carts = document.querySelectorAll(".add-cart");
      let name = name;
      let beds = beds;
      let guests = guests;
      let price = price;
      let photo = photo;

      let products = [
        {
          name: details.responseJSON[0].name,
          price: details.responseJSON[0].price,
          guests: details.responseJSON[0].guests,
          beds: details.responseJSON[0].beds,
          photo: details.responseJSON[0].photo,
          inCart: 0,
        },
        {
          name: details.responseJSON[1].name,
          price: details.responseJSON[1].price,
          guests: details.responseJSON[1].guests,
          beds: details.responseJSON[1].beds,
          photo: details.responseJSON[1].photo,
          inCart: 0,
        },
        {
          name: details.responseJSON[2].name,
          price: details.responseJSON[2].price,
          guests: details.responseJSON[2].guests,
          beds: details.responseJSON[2].beds,
          photo: details.responseJSON[2].photo,
          inCart: 0,
        },
        {
          name: details.responseJSON[3].name,
          price: details.responseJSON[3].price,
          guests: details.responseJSON[3].guests,
          beds: details.responseJSON[3].beds,
          photo: details.responseJSON[3].photo,
          inCart: 0,
        },
      ];

      for (let i = 0; i < carts.length; i++) {
        carts[i].addEventListener("click", () => {
          cartNumbers(products[i]);
          totalCost(products[i]);
          updateNavCartNumber();
        });
      }

      function cartNumbers(product) {
        let productNumbers = localStorage.getItem("cartNumbers");
        productNumbers = parseInt(productNumbers);
        if (productNumbers) {
          localStorage.setItem("cartNumbers", productNumbers + 1);
        } else {
          localStorage.setItem("cartNumbers", 1);
        }
        setItems(product);
      }

      function setItems(product) {
        let cartItems = localStorage.getItem("roomsInCart");
        cartItems = JSON.parse(cartItems);

        if (cartItems != null) {
          if (cartItems[product.name] == undefined) {
            cartItems = {
              ...cartItems,
              [product.name]: product,
            };
          }
          cartItems[product.name].inCart += 1;
        } else {
          product.inCart = 1;
          cartItems = {
            [product.name]: product,
          };
        }
        localStorage.setItem("roomsInCart", JSON.stringify(cartItems));
      }

      function totalCost(product) {
        let cartCost = localStorage.getItem("totalCost");
        if (cartCost != null) {
          cartCost = parseInt(cartCost);
          localStorage.setItem("totalCost", cartCost + product.price);
        } else {
          localStorage.setItem("totalCost", product.price);
        }
      }
    }
  );

  const roomsPage = $(
    `<div class="output container">  <h1 class="my-4">Pokoje do wynajęcia </h1>  <p class="treat-desc">Doskonałe warunki, wygodne łóżko to coś, co sprawia, że wyjazd jest udany?<br>  Sprawdź nasze najlepsze pokoje - szybkie wifi, wygoda, najlepsze wyposażenie...<br> Czy potrzeba czegoś więcej? <br> Zarezerwuj teraz w dogodnym terminie!</p></div>
    <div id="dialog" title="Gratulacje!">
  <p>Sprawdź swój koszyk!</p>
</div>`
  );

  fragment.append(roomsPage);
  return fragment;
};
