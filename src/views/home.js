// home.js

import $ from "jquery";
export const home = () => {
  const fragment = $(new DocumentFragment());
  const main = $(`<

  <div class="view intro-2">
    <div class="full-bg-img">
      <div class="mask rgba-black-light flex-center">
        <div class="container text-center white-text">
          <div class="white-text text-center wow fadeInUp">
            <h2 class="header-h2">IT SPA</h2>
            <h5 class="header-h5">Dla wymagających wrażeń, spokoju, odpoczynku i technologii</h5>
            
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <h1 class="home-header">Nasz Hotel</h1>
  <hr>

  <div class="home-desc-section">
Hotel „IT SPA” to nowy  obiekt wybudowany w 2012 r. Jego położenie wśród atrakcyjnego krajobrazu zapewnia wypoczynek w miłej, spokojnej atmosferze, z dala od ruchu miejskiego. Jednocześnie usytuowanie hotelu w centrum rozrywkowym IT-fun – zapewnia szybki i wygodny dojazd najciekawszych miejsc regionu i atrakcji, takich jak komputerowe karuzele, festiwal konsoli, czy monitorowanie uśmiechu.

Hotel oferuje 13 pokoi z łazienkami urządzonych w nowoczesnym stylu, z telewizorem LCD, tunerem telewizji satelitarnej i z bezpłatnym dostępem do Internetu; w cenie pokoju jest także bufet śniadaniowy oraz monitorowany parking.

Hotel posiada zaplecze konferencyjno-bankietowe: małe, kameralne wnętrza, jak również duże, multimedialne sale (konferencje IT mile widziane!).

Goście hotelowi mogą także skorzystać z bogatego zestawu usług oferowanych przez Centrum ze SPA.

Zapraszamy  wszystkich gości na krótkie, służbowe pobyty,  jak również na wypoczynkowy, urlopowy relaks. Bo IT to nie tylko siedzenie przed komputerem!</div>
  <h1 class="home-header">Zdjęcia</h1>
  <hr>

<!--Carousel Wrapper-->
<div id="multi-item-example" class="carousel slide carousel-multi-item carousel-multi-item-2" data-ride="carousel">
  <!--Slides-->
  <div class="carousel-inner" role="listbox">

    <!--First slide-->
    <div class="carousel-item active">

      <div class="col-md-3 mb-3">
        <div class="card">
          <img class="img-fluid" src="https://cdn.pixabay.com/photo/2018/06/14/21/15/the-interior-of-the-3475656_960_720.jpg"
            alt="Card image cap">
        </div>
      </div>

      <div class="col-md-3 mb-3">
        <div class="card">
          <img class="img-fluid" src="https://cdn.pixabay.com/photo/2018/04/05/13/08/water-3292794_960_720.jpg"
            alt="Card image cap">
        </div>
      </div>

      <div class="col-md-3 mb-3">
        <div class="card">
          <img class="img-fluid" src="https://cdn.pixabay.com/photo/2016/11/18/22/21/architecture-1837150_960_720.jpg"
            alt="Card image cap">
        </div>
      </div>

      <div class="col-md-3 mb-3">
        <div class="card">
          <img class="img-fluid" src="https://cdn.pixabay.com/photo/2016/10/18/09/02/hotel-1749602_960_720.jpg"
            alt="Card image cap">
        </div>
      </div>

    </div>
    <!--/.First slide-->

    <!--Second slide-->
    <div class="carousel-item">

      <div class="col-md-3 mb-3">
        <div class="card">
          <img class="img-fluid" src="https://cdn.pixabay.com/photo/2019/08/19/13/58/hotel-4416515_960_720.jpg"
            alt="Card image cap">
        </div>
      </div>

      <div class="col-md-3 mb-3">
        <div class="card">
          <img class="img-fluid" src="https://cdn.pixabay.com/photo/2014/07/10/17/17/hotel-389256_960_720.jpg"
            alt="Card image cap">
        </div>
      </div>

      <div class="col-md-3 mb-3">
        <div class="card">
          <img class="img-fluid" src="https://cdn.pixabay.com/photo/2017/06/13/22/41/hotel-2400364_960_720.jpg"
            alt="Card image cap">
        </div>
      </div>

      <div class="col-md-3 mb-3">
        <div class="card">
          <img class="img-fluid" src="https://cdn.pixabay.com/photo/2017/08/10/07/32/hotel-room-2619509_960_720.jpg"
            alt="Card image cap">
        </div>
      </div>

    </div>
    <!--/.Second slide-->

    <!--Third slide-->
    <div class="carousel-item">

      <div class="col-md-3 mb-3">
        <div class="card">
          <img class="img-fluid" src="https://cdn.pixabay.com/photo/2015/04/20/17/38/swimming-pool-731886_960_720.jpg"
            alt="Card image cap">
        </div>
      </div>

      <div class="col-md-3 mb-3">
        <div class="card">
          <img class="img-fluid" src="https://cdn.pixabay.com/photo/2016/11/19/06/22/wine-1838132_960_720.jpg"
            alt="Card image cap">
        </div>
      </div>

      <div class="col-md-3 mb-3">
        <div class="card">
          <img class="img-fluid" src="https://cdn.pixabay.com/photo/2016/04/15/11/43/hotel-1330834_960_720.jpg"
            alt="Card image cap">
        </div>
      </div>

      <div class="col-md-3 mb-3">
        <div class="card">
          <img class="img-fluid" src="https://cdn.pixabay.com/photo/2015/05/28/01/20/hotel-787383_960_720.jpg"
            alt="Card image cap">
        </div>
      </div>

    </div>
    <!--/.Third slide-->

  </div>
  <!--/.Slides-->

</div>
<!--/.Carousel Wrapper-->

  <h1 class="home-header">Zabiegi</h1>
  <hr>

  <div class="home-desc-section-treat">
Zapewniamy doskonałe zabiegi, które są prowadzone przez profesjonalistów w swoim zawodzie. Dzięki temu odpoczynek może także przynieść zdrowotne korzyści. Polecamy przede wszystkim masaż rozgrzanym monitorem
oraz biczowanie kablem od myszy. Są to zabiegi, które wprowadzają w niepowtarzalny świat relaksu oraz spokoju. Każdy zabieg ma określony czas trwania oraz obszar, na którym jest skupiony.
W ofercie znajduje się także peeling odłamkami płyty CD (bardzo wysoko oceniany w świecie IT) oraz kąpiel w gorącej kawie (nie tylko od wewnątrz, ale także od zewnątrz warto zadbać o swoją energię). Te i inne zabiegi wraz ze szczegółami możesz znaleźć w zakładce "Zabiegi". Podaruj sobie trochę odpoczynku i relaksu po całym roku sprintów, daily i retro.</div>
 
 
  <h1>Polecają nas:</h1>
  <hr>

<div class="card-deck">
  <div class="card">
    <img class="card-img-top" src="https://cdn.pixabay.com/photo/2019/09/16/09/30/alone-4480441_960_720.jpg" alt="Card image cap">
    <div class="card-body">
      <p class="card-text">Wspaniały hotel, odpoczęłam i nauczyłam się, jak korzystać dobrze z urlopu</p>
      <p class="card-text"><small class="text-muted">Anna</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="https://cdn.pixabay.com/photo/2018/03/21/16/50/woman-3247382_960_720.jpg" alt="Card image cap">
    <div class="card-body">
      <p class="card-text">Zabiegi to rewelacja! Nigdy nie czułam się tak zrelaksowana</p>
      <p class="card-text"><small class="text-muted">Marysia</small></p>
    </div>
  </div>
   <div class="card">
    <img class="card-img-top" src="https://cdn.pixabay.com/photo/2017/06/13/20/30/woman-2400044_960_720.jpg" alt="Card image cap">
    <div class="card-body">
      <p class="card-text">Każdy dzień w IT-SPA to było jak spełnienie marzeń. Obsługa świetna i klimat - niepowtarzalny</p>
      <p class="card-text"><small class="text-muted">Zosia</small></p>
    </div>
  </div>

   <div class="card">
    <img class="card-img-top" src="https://cdn.pixabay.com/photo/2019/09/27/09/43/man-4507976_960_720.jpg" alt="Card image cap">
    <div class="card-body">
      <p class="card-text">Nie będę już nigdzie indziej jechał na wakacje! Tylko IT-SPA! - Bartek</p>
      <p class="card-text"><small class="text-muted">Bartek</small></p>
    </div>
  </div>
</div>

<!--contact-form-->

<h1 class="home-header-contact">Kontakt</h1>

<section class="contact-section my-5">
  <div class="card">
    <div class="row">
      <div class="col-lg-8">
        <div class="card-body form">
          <div class="row">
            <div class="col-md-6">
              <div class="md-form mb-0">
                <input type="text" id="form-contact-name" class="form-control">
                <label for="form-contact-name" class="">Twoje imię</label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="md-form mb-0">
                <input type="text" id="form-contact-email" class="form-control">
                <label for="form-contact-email" class="">E-mail</label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="md-form mb-0">
                <input type="text" id="form-contact-phone" class="form-control">
                <label for="form-contact-phone" class="">Telefon</label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="md-form mb-0">
                <input type="text" id="form-contact-company" class="form-control">
                <label for="form-contact-company" class="">Firma</label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="md-form mb-0">
                <textarea id="form-contact-message" class="form-control md-textarea" rows="3"></textarea>
                <label for="form-contact-message">Twoja wiadomość</label>
                <a href="#" class="btn-floating btn-lg blue">
                  <i class="far fa-paper-plane"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4">

        <div class="card-body contact text-center h-100 white-text">

          <h3 class="my-4 pb-2">Informacje kontaktowe</h3>
          <ul class="text-lg-left list-unstyled ml-4">
            <li>
              <p><i class="fas fa-map-marker-alt pr-2"></i>It-SPA ul. Myszki 10</p>
            </li>
            <li>
              <p><i class="fas fa-phone pr-2"></i>+ 01 234 567 89</p>
            </li>
            <li>
              <p><i class="fas fa-envelope pr-2"></i>recepcja@itspa.com</p>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </div>
</section>



  
  <script>
  $(function() {
var selectedClass = "";
$(".filter").click(function(){
selectedClass = $(this).attr("data-rel");
$("#gallery").fadeTo(100, 0.1);
$("#gallery div").not("."+selectedClass).fadeOut().removeClass('animation');
setTimeout(function() {
$("."+selectedClass).fadeIn().addClass('animation');
$("#gallery").fadeTo(300, 1);
}, 300);
});
});
  
  </script>
  `);

  fragment.append(main);

  return fragment;
};
