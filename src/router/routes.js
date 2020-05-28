// odwolujac sie do katalogu z "beczka" (index.js -- barrel)
// mozna pisac krotsze importy
import { home, rooms, treatments, bookings, cart } from "../views";

export const routes = [
  {
    name: "Hotel",
    path: "/",
    component: home,
    data: {},
  },
  {
    name: "Pokoje",
    path: "/rooms",
    component: rooms,
    data: {},
  },
  {
    name: "Zabiegi",
    path: "/treatments",
    component: treatments,
    data: {},
  },
  {
    name: "Rezerwacja",
    path: "/bookings",
    component: bookings,
    data: {},
  },

  {
    name: "<img src='https://img.icons8.com/office/30/000000/shopping-cart.png'/> <span id='total-number' style='font-size: 16px; padding-left: 5px'></span>",
    path: "/cart",
    component: cart,
    data: {},
  },
];
