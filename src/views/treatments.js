// treatments.js

import $ from "jquery";

export const treatments = () => {
  const fragment = $(new DocumentFragment());

  let details = $.getJSON(
    "https://my-json-server.typicode.com/ulatowskap/demo/treatments",
    function (data) {
      $.each(data, function (index, value) {
        console.log(value);
        var name = value.name;
        var area = value.area;
        var time = value.time;
        var price = value.price;
        var photo = value.photo;
        $(".output").append(`
        <div class="row">
      <div class="col-lg-6 mb-4">
        <div class="card h-100">
        <h4 class="card-title">
        <p class="name">${name}</p>
      </h4>
         <img class="card-img-top" src="${photo}" alt="">
          <div class="card-body">
            <p class="card-text area">Obszar: ${area}</p>
            <p class="card-text time">Czas trwania: ${time} minut</p>
            <p class="card-text price"> Cena: ${price} zł</p>
          </div>
          <button class="add-treat" href="#">Dodaj do koszyka</button>
          
        </div>
      </div>
      <script>
    $(function() {
    $('#dialog').dialog({
        autoOpen:false
    });

    $(".add-treat").click(function(e) {
        e.preventDefault();
        $('#dialog').dialog('open');
    });
});
       </script>
     
      `);
      });

      let carts = document.querySelectorAll(".add-treat");

      let name = name;
      let area = area;
      let time = time;
      let price = price;
      let photo = photo;

      let products = [
        {
          name: details.responseJSON[0].name,
          area: details.responseJSON[0].area,
          time: details.responseJSON[0].time,
          price: details.responseJSON[0].price,
          photo: details.responseJSON[0].photo,
          incarts: 0,
        },
        {
          name: details.responseJSON[1].name,
          area: details.responseJSON[1].area,
          time: details.responseJSON[1].time,
          price: details.responseJSON[1].price,
          photo: details.responseJSON[1].photo,
          incarts: 0,
        },
        {
          name: details.responseJSON[2].name,
          area: details.responseJSON[2].area,
          time: details.responseJSON[2].time,
          price: details.responseJSON[2].price,
          photo: details.responseJSON[2].photo,
          incarts: 0,
        },
        {
          name: details.responseJSON[3].name,
          area: details.responseJSON[3].area,
          time: details.responseJSON[3].time,
          price: details.responseJSON[3].price,
          photo: details.responseJSON[3].photo,
          incarts: 0,
        },
        {
          name: details.responseJSON[4].name,
          area: details.responseJSON[4].area,
          time: details.responseJSON[4].time,
          price: details.responseJSON[4].price,
          photo: details.responseJSON[4].photo,
          incarts: 0,
        },
        {
          name: details.responseJSON[5].name,
          area: details.responseJSON[5].area,
          time: details.responseJSON[5].time,
          price: details.responseJSON[5].price,
          photo: details.responseJSON[5].photo,
          incarts: 0,
        },
        {
          name: details.responseJSON[6].name,
          area: details.responseJSON[6].area,
          time: details.responseJSON[6].time,
          price: details.responseJSON[6].price,
          photo: details.responseJSON[6].photo,
          incarts: 0,
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
        let treatNumbers = localStorage.getItem("cartNumbers");
        treatNumbers = parseInt(treatNumbers);
        if (treatNumbers) {
          localStorage.setItem("cartNumbers", treatNumbers + 1);
        } else {
          localStorage.setItem("cartNumbers", 1);
        }
        setItems(product);
      }

      function setItems(product) {
        let treatItems = localStorage.getItem("treatsInCart");
        treatItems = JSON.parse(treatItems);
        if (treatItems != null) {
          if (treatItems[product.name] == undefined) {
            treatItems = {
              ...treatItems,
              [product.name]: product,
            };
          }
          treatItems[product.name].incarts += 1;
        } else {
          product.incarts = 1;
          treatItems = {
            [product.name]: product,
          };
        }
        localStorage.setItem("treatsInCart", JSON.stringify(treatItems));
        console.log(treatItems);
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

  const treatmentPage = $(
    `<div class="output container"> <h1 class="my-4">Zabiegi </h1>  <p class="treat-desc">Szukasz najlepszego odpoczynku i relaksu dla siebie?<br> Wypróbuj nasze zabiegi dla ciała oraz dla ducha - doskonałe dla programistów,<br> analityków, scrum masterów <br> i wszystkich innych potrzebujących odpoczynku!</p></div>
    <div id="dialog" title="Gratulacje!">
  <p>Sprawdź swój koszyk!</p>
</div>
    `
  );

  fragment.append(treatmentPage);

  return fragment;
};
