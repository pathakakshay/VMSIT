jQuery(document).ready(function(){
  jQuery(".viewless").hide();
    jQuery(".productfeatures").hide(1000);
  jQuery(".viewmore").click(function(){
    jQuery(".productfeatures").show(1000);
    jQuery(".viewless").show(1000);
    jQuery(".viewmore").hide();
  }
  );
  jQuery(".viewless").click(function(){
    jQuery(".productfeatures").hide(1000);
    jQuery(".viewless").hide(1000);
    jQuery(".viewmore").show();
  });
  jQuery('.slick-product-carousel').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplayspeed: 1000,
    variableWidth: false,
    speed: 1000,
  });
  jQuery('.slick-categories-carousel').slick({
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 8,
    dots: false,
    arrows: true,
    autoplay: true,
    autoplayspeed: 1000,
    variableWidth: false,
    speed: 1000,
  });
  jQuery('.slick-banner-carousel').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    autoplay: true,
    autoplayspeed: 1000,
    variableWidth: false,
    speed: 1000,
  });
})