// Owl Carousel Menu Item Script
$(document).ready(function () {
  let owl = $(".owl-carousel");
  owl.owlCarousel({
    loop: true,
    items: 4,
    dots: false,
    margin: 30,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        loop: true,
      },
      576: {
        items: 2,
        loop: true,
      },
      768: {
        items: 3,
        loop: true,
      },
      1000: {
        items: 4,
        loop: true,
      },
    },
  });
  // Go to the next item
  $(".owl-next").click(function () {
    owl.trigger("next.owl.carousel");
  });
  // Go to the previous item
  $(".owl-prev").click(function () {
    owl.trigger("prev.owl.carousel");
  });
});



