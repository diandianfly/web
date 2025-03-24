
$(document).ready(function() {
   $('.menu-icon').on('click', function(e){
      e.preventDefault();
      $('.menubox').slideToggle('');
  });
  

  $( ".btnToggle" ).click( function(){
    $(".department-list").slideToggle();
    $( this ).toggleClass( "open" );//改變btn收合或展開
  })

  
  $(".tab-btn").click(function(){
    $(".tab-btn").removeClass("active"); // 移除所有 tab 的 active 樣式
    $(this).addClass("active"); // 為當前點擊的 tab 添加 active 樣式
    let index = $(this).index(); // 取得當前按鈕的索引值
    $(".school-container").hide(); // 隱藏所有內容
    $(".school-container").eq(index).attr( "style", "display:flex;" ); // 顯示對應索引的內容
  });

  $('.banner-slider').slick({
   dots: true,
   infinite: false,
   speed: 300,
   slidesToShow: 1,
   slidesToScroll: 1,
   autoplay:false,
   autoplaySpeed:5000,
   arrows:true,
   prevArrow:'<button type="button" class="slick-prev"><img src="image/back.svg" alt="prev"></button>',
   nextArrow:'<button type="button" class="slick-next"><img src="image/next.svg" alt="next"></button>',
   responsive: [
     {
       breakpoint: 1024,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
         infinite: true,
         dots: true
       }
     },
     {
       breakpoint: 600,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1
       }
     },
     {
       breakpoint: 480,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1
       }
     }
   ]
 });

 $('.news-slider').slick({
   centerMode: true,
  //  centerPadding: '40px',
   slidesToShow: 3,
   prevArrow:'<button type="button" class="slick-prev"><img src="image/back.svg" alt="prev"></button>',
   nextArrow:'<button type="button" class="slick-next"><img src="image/next.svg" alt="next"></button>',
   responsive: [
     {
       breakpoint: 768,
       settings: {
         arrows: false,
         centerMode: true,
         centerPadding: '40px',
         slidesToShow: 1
       }
     },
     {
       breakpoint: 480,
       settings: {
         arrows: false,
         centerMode: true,
         centerPadding: '40px',
         slidesToShow: 1
       }
     }
   ]
 });
 $('.alumni-slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay:false,
  autoplaySpeed:5000,
  arrows:true,
  adaptiveHeight: true,
  prevArrow:'<button type="button" class="slick-prev"><img src="image/back.svg" alt="prev"></button>',
   nextArrow:'<button type="button" class="slick-next"><img src="image/next.svg" alt="next"></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
             
});

       