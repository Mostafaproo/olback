// Change Active Color For Product Deatails
const colors = document.querySelectorAll(".color");

function changeColor() {
  colors.forEach((c) => c.classList.remove("active"));
  this.classList.add("active");
}

colors.forEach((c) => c.addEventListener("click", changeColor));

// This for direction rtl
var links = document.getElementsByTagName("link");
let dir = document.querySelector("html");

function isRtl() {
  if (dir) {
    let target = dir.getAttribute("dir");
    // console.log(target);

    if (target == "rtl") {
      return true;
    } else {
      return false;
    }
  }
}

// Humberger mune icon



$(".btn-addres button").click(function (e) {
  e.preventDefault();
});

// buttn to scroll top fucntion
$(window).scroll(function () {
  if ($(this).scrollTop() > 80) {
    $("#topBtn").fadeIn();
  } else {
    $("#topBtn").fadeOut();
  }
});
// Animtion for scroll on the top
$("#topBtn").click(function () {
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    800
  );
});

$("#main-slider").owlCarousel({
  loop: true,
  rtl: isRtl(),
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: false,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 1,
      nav: true,
    },
    1000: {
      items: 1,
      nav: true,
      loop: true,
    },
  },
});

$("#about-slider").owlCarousel({
  loop: true,
  rtl: isRtl(),
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: false,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    600: {
      items: 1,
      nav: false,
    },
    1000: {
      items: 1,
      nav: false,
      loop: true,
    },
  },
});

$("#recently-slider,#brands,#favorite-slider,#favorite2-slider").owlCarousel({
  loop: false,
  rtl: isRtl(),
  autoplay: true,
  autoplayTimeout:3000,
  autoplayHoverPause: false,
  margin: 10,
  responsiveClass: true,
  dots: false,
  responsive: {
    0: {
      items: 2.5,
      nav: true,
    },
    600: {
      items: 3,
      nav: true,
    },
    1000: {
      items: 6,
      nav: true,
      loop: true,
    },
  },
});
$(" #mini-slider ").owlCarousel({
  loop: false,
  rtl: isRtl(),
  autoplay: true,
  autoplayTimeout: 8000,
  autoplayHoverPause: true,
  margin: 10,
  responsiveClass: true,
  nav: false,
  responsive: {
    0: {
      items: 4.5,
      nav: false,
      margin: 80,
    },
    600: {
      items: 5.5,
      nav: false,
    },
    1000: {
      items: 8,
      nav: false,
    },
    1255: {
      items: 9,
      nav: true,
      loop: true,
    },
  },
});

var swiper = new Swiper(".mySwiper", {
  allowTouchMove: true,
  loop: true,
  grabCursor: true,
  speed: 200,
  mousewheel: {
    enable: true,
  },
  preventClicks: true,
  direction: getDirection(),
  slidesPerView: 5,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
  },
  on: {
    resize: function () {
      swiper.changeDirection(getDirection());
    },
  },
});



function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 760 ? "horizontal" : "vertical";

  return direction;
}



$(document).ready(function () {
  // toggle side bar
  $(".show-menu,.overlay,.fa-times").click(function () {
    $(".header").toggleClass("isVisible");
    if ($(".header").hasClass("isVisible")) {
      $(".overlay").css("display", "block");
    } else {
      $(".overlay").css("display", "none");
    }
  });



  const currentLocation = location.href;
  const menuItem = document.querySelectorAll("#fixed-item");
  const menuLength = menuItem.length;
  for (let i = 0; i < menuLength; i++) {
    if (menuItem[i].href === currentLocation) {
      menuItem[i].className = "activted notification";
    }
  }

  if ($(window).innerWidth() > 991) {
    return "";
  } else {
    //  toggle sub menu
    $(".sub-btn").click(function (e) {
      e.preventDefault();
      $(this).next(".sub-menu").slideToggle(500);

      $(this).find(".toggle-sub-menu").toggleClass("rotate");
    });
  }
});

// Animation
// AOS.init({
//   disable: function () {
//     var maxWidth = 1125;
//     return window.innerWidth < maxWidth;
//   },
//   duration: 1000,
// });

// View Product
$(".small-image img").click(function () {
  var imageSrc = $(this).attr("src");
  $(".big-image img").attr("src", imageSrc);
});

$("#zoom").imagezoomsl({
  zoomrange: [2, 2],
  zoomstart: 2,
  innerzoom: true,
  magnifierborder: "none",
});

var w = window.innerWidth;
if (w > 991) {
  $("#outerzoom").imagezoomsl({
    zoomrange: [2, 2],
    classmagnifier: "outer-magnifier",
    classcursorshade: "cursorshade",
    classstatusdiv: "statusdiv",
    classtextdn: "textdn",
    classtracker: "outer-tracker",
  });
}

// Accordion on category page

$(".content").css("display", "block");
$(".item-header:first,.icon:first").toggleClass("active");
// ('.item-header .icone:first').addClass('active')

$(".item-header").click(function () {
  $(this).next().slideToggle(500);

  $(this).find(".icon").toggleClass("active");
  $(this).toggleClass("active");
});

// View Option
$(".icone-view i ").on("click", function () {
  $(this).addClass("active").siblings().removeClass("active");

  $(".product-view,.favourite-view")
    .removeClass("list grid")
    .addClass($(this).data("class"));

  if ($(this).data("class") === "list") {
    // $('.content-of-categories').css('overflow', 'auto')
  } else if ($(this).data("class") === "grid") {
    if (window.width() > 991) {
      $(".content-of-categories").css("overflow", "none");
    }
  }
});

// Pagination links
$(".page-item ").on("click", function (e) {
  e.preventDefault();
  $(this).addClass("active").siblings().removeClass("active");
});

// Same height for all div
// var maxHeight = 0;
// $(".same-height").each(function () {
//   if ($(this).height() > maxHeight) {
//     maxHeight = $(this).height();
//   }
// });

// $(".same-height").height(maxHeight);

//  Custom input to form sing up and regsiteration

$(".custom-input input").on("focusout", function () {
  if ($(this).val() != "") {
    $(this).parent().addClass("has-data");
  } else {
    $(this).parent().removeClass("has-data");
  }
});

// start image upload
$("#imgInp").change(function () {
  readimg(this);
});

function readimg(file) {
  if (file.files && file.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $("#idimg").attr("src", e.target.result);
    };

    reader.readAsDataURL(file.files[0]);
  }
} /* end image upload */

// Start Taostr js to alert
toastr.options = {
  closeButton: true,
  debug: false,
  newestOnTop: false,
  progressBar: true,
  positionClass: "toast-top-right",
  preventDuplicates: false,
  onclick: null,
  showDuration: "300",
  hideDuration: "100",
  timeOut: "2000",
  extendedTimeOut: "60000",
  showEasing: "swing",
  hideEasing: "linear",
  showMethod: "fadeIn",
  hideMethod: "fadeOut",
};

$("#add-cart").click(function () {
  toastr.success("add to cart");
});

$("#add-favourite").click(function () {
  toastr.success("add to favourit");
});

$("#remove").click(function () {
  toastr.error("Product Removed");
});

$("#removeAll").click(function () {
  toastr.error("All Product Removed");
});
// End Toastr Js To alert

// Links share ================================
$(".btn-share").click(function () {
  $(".share-social-container").slideToggle(500);
});

$('.filter-icon').click(function(){
  $('.filter-menu').toggleClass('show-filter')
})





// const FacebookBtn = document.querySelector(".facebook-btn");
// const GoogleBtn = document.querySelector(".google-btn");
// const TwitterBtn = document.querySelector(".twitter-btn");
// const LinkedinkBtn = document.querySelector(".linkedin-btn");
// const WhatsappkBtn = document.querySelector(".whatsapp-btn");

// function init() {
//   let postUrl = encodeURI(document.location.href);

//   FacebookBtn.setAttribute("href", `
//   http://www.facebook.com/sharer.php?u=${postUrl}
//   `);

//   GoogleBtn.setAttribute("href", `
//   https://plus.google.com/share?url=Google-plus-URL
//   `);

//   TwitterBtn.setAttribute("href", `
//   http://twitter.com/share?text=[TITLE]&url=${postUrl}
//   `);

//   LinkedinkBtn.setAttribute("href", `
//   http://www.linkedin.com/shareArticle?mini=true&url=${postUrl}
//   `);

//   WhatsappkBtn.setAttribute("href", `
//   https://api.whatsapp.com/send?text=[post-title]=${postUrl}
//   `);

// }

// init();

// Preloader===========>
//after window is loaded completely
window.onload = function () {
  //hide the preloader
  document.querySelector(".preloaders").style.display = "none";
};

if ("caches" in window) {
  caches.keys().then(function (keyList) {
    return Promise.all(
      keyList.map(function (key) {
        return caches.delete(key);
      })
    );
  });
}

navigator.serviceWorker.getRegistrations().then(function (registrations) {
  for (let registration of registrations) {
    registration.unregister();
  }
});
