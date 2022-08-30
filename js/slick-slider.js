$(document).ready(function () {
  // this is the jquery slick slider plugin
  $('.slider').slick({
    centerMode: true,
    centerPadding: '120px',
    slidesToShow: 1,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 660,
        settings: {
          centerMode: true,
          centerPadding: '100px',
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 510,
        settings: {
          centerMode: true,
          centerPadding: '50px',
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 350,
        settings: {
          centerMode: true,
          centerPadding: '45px',
          slidesToShow: 1,
        },
      },
    ],
  });
  // adding functionalities to scroll to top button
  const scrollToTop = document.querySelector('.scroll-to-top');
  // if button is clicked, fire the function below
  scrollToTop.onclick = () => {
    window.scrollTo({ top: 0 });
  };
  // if scroll height is greater than 500
  window.onscroll = () => {
    scrollToTop.classList.toggle(
      'show',
      document.body.scrollTop >= 500 ||
        document.documentElement.scrollTop >= 500
    );
  };
});
