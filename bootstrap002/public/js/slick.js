$(document).ready(function () {
            $('.slider-for').slick({
              slidesToShow: 3,
              slidesToScroll: 1,
              prevArrow: '<div class="slick-prev slick-arrow" style="margin-top:-50px;" ><img src="img/prev-arrow.png" style=" width:30px; height:90px"></div>',
              nextArrow: '<div class="slick-next slick-arrow" style="margin-top:-50px;right:-20px;"><img src="img/next-arrow.png" style="width:30px; height:90px"></div>'
//            centerMode:true,
//            focusOnSelect: true
            });
          });