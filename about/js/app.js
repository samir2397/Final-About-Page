$('.design').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
  
$(function(){
  $(".remove-bar").on("click",function(){
    $(this).addClass("d-none")
    $(".rmv-ico").removeClass("d-none")
    $(".menu").removeClass("menuActive")
  })
  $(".rmv-ico").on("click",function(){
    $(this).addClass("d-none")
    $(".menu").addClass("menuActive")

    $(".remove-bar").removeClass("d-none")
  })
})