const swiperWrapper = document.querySelector('.swiper-wrapper');

const url = '/src/testimonials.json';
const xhr = new XMLHttpRequest();
xhr.open('GET', url);
const testimonials = (xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const testimonialList = JSON.parse(xhr.responseText);
    testimonial(testimonialList);

    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 2000,
      },
      breakpoints: {
        600: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        900: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  } else
    console.log({
      state: xhr.readyState,
      status: xhr.status,
      text: xhr.statusText,
    });
});
xhr.send();

function testimonial(items) {
  let testimonialItems = items.map(function (item) {
    return `<div class="swiper-slide testimonial-wrapper">
    <img src=${item.img} alt=${item.name} />
              <div class="testimonial-content">
                <h3>${item.name}</h3>
                <p>${item.desc}</p>
              </div>
            </div>`;
  });
  testimonialItems = testimonialItems.join('');
  swiperWrapper.innerHTML = testimonialItems;
}

export { testimonials };
