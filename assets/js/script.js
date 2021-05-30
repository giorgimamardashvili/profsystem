window.addEventListener("DOMContentLoaded", () => {
  function headerScroll() {
    const header = document.getElementById("header");
    const children = header.children;
    if (window.innerWidth > 1024) {
      if (window.pageYOffset >= 20) {
        header.classList.add("header-scroll");
        children[1].classList.add("hide");
        children[0].children[3].classList.add("hide");
        children[0].children[4].classList.add("hide");
        children[0].children[2].children[1].classList.add("hide");
        children[0].children[2].children[2].classList.remove("hide");
        children[0].children[2].style.width = "56px";
        children[0].style.width = "22%";
      } else {
        header.classList.remove("header-scroll");
        children[1].classList.remove("hide");
        children[0].children[3].classList.remove("hide");
        children[0].children[4].classList.remove("hide");
        children[0].children[2].children[1].classList.remove("hide");
        children[0].children[2].children[2].classList.add("hide");
        children[0].children[2].style.width = "100%";
        children[0].style.width = "100%";
      }
    }
  }

  window.addEventListener("scroll", headerScroll);

  function burgerClick() {
    const burger = document.getElementById("burger");

    burger.addEventListener("click", () => {
      document.querySelector(".header__category").classList.toggle("active");
      burger.classList.toggle("open");
      document.querySelectorAll(".cat-down").forEach((item) => {
        item.classList.toggle("moveright-one");
      });
    });
  }

  burgerClick();

  function scrollUp() {
    const up = document.getElementById("scrollUp");

    up.addEventListener("click", () => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });
  }

  scrollUp();

  function footerCategory() {
    const container = document.querySelectorAll(".menu-foot__item ul");
    const category = document.querySelectorAll(".menu-foot__cat");

    category.forEach((item) => {
      if (window.innerWidth <= 700) {
        item.addEventListener("click", () => {
          item.nextElementSibling.classList.toggle("active");
          if (item.nextElementSibling.classList.contains("active")) {
            item.children[0].classList.add("hide");
            item.children[1].classList.add("show");
          } else {
            item.children[0].classList.remove("hide");
            item.children[1].classList.remove("show");
          }
        });
      }
    });
  }

  footerCategory();

  function menu() {
    const category = document.querySelectorAll(".menu__cat");
    category.forEach((item) => {
      item.addEventListener("click", () => {
        let sibling = item.nextElementSibling;
        console.log(sibling.children.length);
        sibling.classList.toggle("active");
        let total = sibling.children.length * 30;
        if (sibling.classList.contains("active")) {
          sibling.style.height = total + "px";
        }
        if (!sibling.classList.contains("active")) {
          sibling.style.height = 0;
        }
      });
    });
  }

  menu();

  function searchClick() {
    const searchbtn = document.getElementById("searchBtn");
    const form = document.querySelector(".search-mob");

    if (window.innerWidth <= 1024) {
      searchbtn.type = "button";
      searchbtn.addEventListener("click", () => {
        form.classList.toggle("active");
        searchbtn.children[0].classList.toggle("hide");
        searchbtn.children[1].classList.toggle("active");
      });
    }
  }
  searchClick();

  function langChange() {
    const selected = document.querySelector(".selected"),
      links = document.querySelectorAll(".header__lang a"),
      lang = document.querySelector(".header__lang");

    selected.addEventListener("click", () => {
      links.forEach((item) => {
        if (!item.contains(selected)) item.classList.toggle("hide");
      });
    });
  }

  langChange();

  function categoryOpen(event) {
    const productTitle = document.querySelector(".product-title"),
      categoryWrapper = document.querySelector(".category-holder"),
      back = document.querySelector(".back");

    if (window.innerWidth <= 1024) {
      productTitle.addEventListener("click", (event) => {
        event.preventDefault();
        const parent = productTitle.parentNode;
        back.classList.add("active");
        categoryWrapper.classList.add("active");
        parent.classList.add("active");
        const ul = productTitle.closest("ul");
        ul.querySelectorAll(".cat-down:not(.active)").forEach((item) => {
          item.classList.add("moveright-two");
        });
        const array = Array.from(productTitle.nextElementSibling.children);
        console.log(array);
        array.forEach((item) => {
          item.classList.add("moveright-one");
        });
        parent.classList.add("moveup");
        productTitle.classList.add("margin-bottom");
      });
    }
  }

  categoryOpen();

  function openSubcategory(event) {
    const categoriesTitle = document.querySelectorAll(".categories-title");
    const active = document.querySelector(".categories.active");

    if (window.innerWidth <= 1024) {
      categoriesTitle.forEach((item) => {
        item.addEventListener("click", (event) => {
          event.preventDefault();
          const parent = item.parentNode;
          const grandparent = parent.parentNode;
          parent.classList.add("active");
          parent.querySelectorAll("li").forEach((item) => {
            item.classList.add("active");
          });
          console.log(grandparent.querySelectorAll("ul:not(.active)"));

          grandparent.querySelectorAll("ul:not(.active)").forEach((item) => {
            item.classList.add("moveright-two");
            setTimeout(function () {
              item.classList.add("hide");
            }, 600);
          });
          parent.querySelectorAll("li").forEach((item) => {
            item.classList.add("moveright-one");
          });
        });
      });
    }
  }

  openSubcategory();

  function closeCategory() {
    const back = document.querySelector(".back"),
      categoryHolder = document.querySelector(".category-holder");
    catDown = document.querySelectorAll(".cat-down");

    if (window.innerWidth <= 1024) {
      back.addEventListener("click", (e) => {
        console.log(categoryHolder.querySelectorAll("li"));
        if (
          categoryHolder.classList.contains("active") &&
          !categoryHolder.querySelector("li.active")
        ) {
          categoryHolder.classList.remove("active");
          categoryHolder.querySelectorAll(".categories").forEach((item) => {
            item.classList.remove("moveright-one");
          });
          categoryHolder.previousElementSibling.classList.remove(
            "margin-bottom"
          );
          catDown.forEach((item) => {
            item.classList.remove("moveright-two", "active", "moveup");
          });
          back.classList.remove("active");
        } else if (
          categoryHolder.classList.contains("active") &&
          categoryHolder.querySelectorAll("li.active")
        ) {
          categoryHolder.querySelectorAll("li.active").forEach((item) => {
            item.classList.remove("active");
          });

          categoryHolder.querySelectorAll(".categories").forEach((item) => {
            item.querySelectorAll(".subcategories").forEach((i) => {
              i.classList.remove("active", "moveright-one");
            });
          });
          categoryHolder.querySelectorAll(".categories").forEach((item) => {
            item.classList.remove("hide", "active");
            setTimeout(function () {
              item.classList.remove("moveright-two");
            }, 50);
          });
        }
      });
    }
  }

  closeCategory();

  function removeHref() {
    const href = document.querySelector(".product-title");
    if (window.innerWidth <= 1024) {
      href.removeAttribute("href");
    }
  }

  removeHref();

  function priceColor() {
    const price = document.querySelectorAll(".price");
    price.forEach(item => {
      console.log(item.children[1].innerHTML)
      if(item.children[1].innerHTML == ""){
        item.children[0].style.color = "#171717";
      }
    })
  }

  priceColor();
});

let workingTimesText;

let locationss = [
  {
    long: 41.75201889837684,
    lat: 44.769799626568094,
    title: "თბილისი, ცოტნე დადიანის 135ა",
    workingTimes: {
      workdays: "ორშ.-პარ. / 09:00 - 18:00 ",
      weekend: "შაბ.: 10:00 - 17:00",
    },
  },
  {
    long: 41.7284505756233,
    lat: 44.755723393290815,
    title: "თბილისი, ცოტნე დადიანის 135ა",
    workingTimes: {
      workdays: "ორშ.-პარ. / 09:00 - 18:00 ",
      weekend: "შაბ.: 10:00 - 17:00",
    },
  },
  {
    long: 41.798817294520866,
    lat: 44.81197443313415,
    title: "თბილისი, ცოტნე დადიანის 135ა",
    workingTimes: {
      workdays: "ორშ.-პარ. / 09:00 - 18:00 ",
      weekend: "შაბ.: 10:00 - 17:00",
    },
  },
];

let map, popup, Popup, marker;
let markerUrl = window.location.origin + "/profsystem/assets/img/icons/red-marker.png";


function initMap() {
  map = new google.maps.Map(document.getElementById("map2"), {
    zoom: 11,
  });
  let bounds = new google.maps.LatLngBounds();
  let mark;

  locationss.forEach((loc) => {
    mark = new google.maps.Marker({
      title: loc.title,
      position: {
        lat: loc.lat,
        lng: loc.long,
      },
      map: map,
      icon: markerUrl,
    });
    attachSecretMessage(
      mark,
      `
      <div class="markerContent">
        <div class="markerContent__top">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26"><g transform="translate(-284.269 -672.269)"><rect width="26" height="26" transform="translate(284.269 672.269)" fill="rgba(255,255,255,0)"/><path d="M19.024,4.6a9.224,9.224,0,0,0-12.848,0,8.762,8.762,0,0,0,0,12.577l5.643,5.534a1.087,1.087,0,0,0,1.52,0l5.685-5.586a8.725,8.725,0,0,0,0-12.525ZM17.493,15.626,12.6,20.437,7.707,15.626a6.67,6.67,0,0,1,0-9.574,7.022,7.022,0,0,1,9.78,0A6.67,6.67,0,0,1,17.493,15.626ZM9.388,7.671a4.461,4.461,0,0,0,0,6.393,4.687,4.687,0,0,0,5.008.992,4.519,4.519,0,0,0,2.873-4.136,4.4,4.4,0,0,0-1.349-3.2,4.674,4.674,0,0,0-6.531-.052Zm5.022,4.905a2.535,2.535,0,0,1-3.153.324,2.414,2.414,0,0,1-.932-2.966,2.506,2.506,0,0,1,2.793-1.467,2.456,2.456,0,0,1,2.009,2.4,2.419,2.419,0,0,1-.771,1.708Z" transform="translate(284.675 672.761)"/></g></svg>
            <p>${loc.title}</p>
        </div>
        <div class="markerContent__bottom">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26"><g transform="translate(-914.153 -688.153)"><rect width="26" height="26" transform="translate(914.153 688.153)" fill="rgba(255,255,255,0)"/><path d="M16.594,13.848,14.256,12.5V7.571a1.114,1.114,0,1,0-2.228,0v5.571a1.114,1.114,0,0,0,.557.965l2.895,1.671a1.114,1.114,0,1,0,1.114-1.93ZM13.142,2A11.142,11.142,0,1,0,24.284,13.142,11.142,11.142,0,0,0,13.142,2Zm0,20.055a8.913,8.913,0,1,1,8.913-8.913A8.913,8.913,0,0,1,13.142,22.055Z" transform="translate(914.011 688.011)"/></g></svg>
            <div>
              <p>${loc.workingTimes.workdays}</p>
              <p>${loc.workingTimes.weekend}</p>
            </div>
        </div>
      </div>
      `,
      bounds
    );
  });

  function attachSecretMessage(marker, secretMessage, bds) {
    const infowindow = new google.maps.InfoWindow({
      content: secretMessage,
    });
    marker.addListener("click", () => {
      infowindow.open(marker.get("map"), marker);
    });
    bds.extend(marker.getPosition());
    marker.get("map").fitBounds(bds);
  }
}
