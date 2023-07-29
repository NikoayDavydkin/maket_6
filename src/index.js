import "@babel/polyfill";
import "./index.html";
import "./index.scss";

import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const swiper = new Swiper(".swiper", {
  modules: [Navigation, Pagination],
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

import { header } from "./components/header/header";
import { sideMenu } from "./components/main/side-menu/side-menu";
import { content } from "./components/main/content/content";
import { tablePrice } from "./components/main/content/table_price/table_price";
import { article } from "./components/main/content/article/article";
import { brands } from "./components/main/content/brands/brands";
import { enumerationRepairs } from "./components/main/content/enumeration_repairs/enumeration_repairs";
import { orderCall } from "./components/main/order-call/order-call";
import { feedback } from "./components/main/feedback/feedback";

header();
sideMenu();
content();
tablePrice();
article();
brands();
enumerationRepairs();
orderCall();
feedback();
