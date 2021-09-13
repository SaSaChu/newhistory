$(function() {

	var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });

  // 圖片縮放
  if ($.fn.imgLiquid) {
    $(".newsImg, .linkImg").imgLiquid ();
  }

  $('.dropdown').click(function() {
    event.preventDefault();
    $('.dropdown').toggleClass('active');
    $('.dropdown-open').slideToggle();
  });


});
