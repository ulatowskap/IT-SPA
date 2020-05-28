// nav.js

import $ from "jquery";
import { routes } from "../router";
import { navItem } from "./nav-item";

export const nav = () => {
  const fragment = $(new DocumentFragment());

  const navBar = $(`
        <nav class="navbar navbar-expand-lg navbar-dark bg-info fixed-top">
        <a class="navbar-brand" href="#">IT SPA</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span></button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0 menu-ul">
    </ul>
    
  </div>


        </nav>

    `);

  // uzupelnij <ul> elementami <li>
  const navBarItems = routes.map((route) => navItem(route));

  navBar.find(".menu-ul").append(navBarItems);

  fragment.append(navBar);

  return fragment;
};
