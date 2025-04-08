// -----  基本功能開關   ---------------------------------------------------

window.addEventListener('load', () => {
  navSticky(); // 捲動時固定主選單
  xSlider('.language button', '.language ul'); //語系
  // fontSize(); // 全站字體
  // fatFooter(); // fatFooter是否要展開
  scrollTables('.tableWrapper'); // table捲動功能

  // webSearch();
  // webSearchBtnFunction();
  // tab功能
  tabFunction({
    target: '.tabSet',
    openFirst: false, // 預設先展開所有內容，鍵盤的自動開合功能無效
    openSwitch: true, // 是否可開合/切換
    autoClose: true, // 自動關閉其他開啟內容
    modeSwitch: true, // 預設模式自動切換，尺寸以上tab功能，尺寸以下手風琴功能
    width: 767, // 尺寸以上tab功能，尺寸以下手風琴功能
    index: 0, // 預設開啟第幾個
  });

  tableAddDataAttributes({
    elemClass: '.tableList', // 目標table
    dataName: 'title', // tableList樣式 加上 data-title
  });

  // 手風琴功能
  //   accordionFunction({
  //     target: '.accordion',
  //     openFirst: false, // 預設先展開所有內容，鍵盤的自動開合功能無效
  //     autoClose: true, // 點擊時自動關閉已展開的項目，若需要此功能需要關閉openFirst
  //     openSwitch: true, // 是否可開合
  //     index: 0, // 預設開啟第幾個
  //     info: {
  //       open: '展開', // 收合時顯示
  //       close: '收合', // 展開時顯示
  //     },
  //   });
});
// -----  基本功能開關   ---------------------------------------------------

// 自行加入的JS請寫在這裡
(function () {
  //cp輪播
  const cpSwiper = new Swiper('.cpSlider .swiper', {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: false,
    // 切換點
    pagination: {
      el: '.cpSlider .swiperDots',
      // bulletElement: 'button',
      // clickable: true,
      renderBullet: function (index, className) {
        return `<div class="${className} noFonts" data-swiper-index="${index}" tabindex="-1"></div>`;
      },
    },
    // 切換箭頭
    navigation: {
      nextEl: '.cpSlider .nextSlider', //自行設定樣式
      prevEl: '.cpSlider .prevSlider', //自行設定樣式
      disabledClass: 'swiperArrow-disabled', //不可點選樣式
    },
    // keyboard: {
    //   enabled: true,
    //   onlyInViewport: false,
    // },
    breakpoints: {
      100: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 4,
      },
    },
  });
  const cpSwiperPages = document.querySelectorAll('.cpSlider .swiper-pagination-bullet');
  cpSwiperPages?.forEach((item) => item.addEventListener('click', () => cpSwiper.slideTo(item.dataset.swiperIndex)));

  //大圖輪播
  let mpSliderItem = document.querySelectorAll('.mpSlider .swiper-slide');
  let mpSliderPagination = [];
  mpSliderItem.forEach((item, index) => {
    mpSliderPagination.push(item.dataset.title);
  });

  const mpSlider = new Swiper('.mpSlider .swiper', {
    slidesPerView: 1,
    loop: false,
    centeredSlides: true,
    spaceBetween: 0,
    autoplay: {
      delay: 5000,
    },
    // 切換點
    pagination: {
      el: '.mpSlider .swiperDots',
      // bulletElement: 'button',
      // clickable: true,
      // renderBullet: function (index, className) {
      //   return `<button class="${className} noFonts" aria-label="${mpSliderPagination[index]}">${mpSliderPagination[index]}</button>`;
      // },
      renderBullet: function (index, className) {
        return `<div class="${className} noFonts" data-swiper-index="${index}" tabindex="-1"></div>`;
      },
    },
    // 切換箭頭
    navigation: {
      nextEl: '.mpSlider .nextSlider', //自行設定樣式
      prevEl: '.mpSlider .prevSlider', //自行設定樣式
      disabledClass: 'swiperArrow-disabled', //不可點選樣式
    },
    // keyboard: {
    //   enabled: true,
    //   onlyInViewport: false,
    // },
    breakpoints: {
      100: {
        slidesPerView: 1,
      },
      575: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 1,
      },
      1600: {
        slidesPerView: 1,
      },
    },
  });
  const mpSliderPages = document.querySelectorAll('.mpSlider .swiper-pagination-bullet');
  mpSliderPages?.forEach((item) => item.addEventListener('click', () => mpSlider.slideTo(item.dataset.swiperIndex)));

  const mpSwiperLength = document.querySelectorAll('.mpSlider .swiper-slide').length;

  if (mpSwiperLength > 1) {
    const controlBox = document.querySelector('.mpSlider .controlBox');
    const mpControlPlay = document.querySelector('.mpSlider .controlBox .play');
    const mpControlPause = document.querySelector('.mpSlider .controlBox .stop');
    controlBox.classList.add('active');
    mpControlPlay.setAttribute('aria-pressed', 'true');

    mpControlPlay?.addEventListener('click', () => {
      mpSlider.autoplay.start();
      mpControlPlay.classList.add('active');
      mpControlPause.classList.remove('active');

      mpControlPlay.setAttribute('aria-pressed', 'true');
      mpControlPause.setAttribute('aria-pressed', 'false');
    });
    mpControlPause?.addEventListener('click', () => {
      mpSlider.autoplay.stop();
      mpControlPause.classList.add('active');
      mpControlPlay.classList.remove('active');

      mpControlPlay.setAttribute('aria-pressed', 'false');
      mpControlPause.setAttribute('aria-pressed', 'true');
    });
  }

  //產業大圖輪播
  let industrySliderItem = document.querySelectorAll('.industrySlider .swiper-slide');
  let industrySliderPagination = [];
  industrySliderItem.forEach((item, index) => {
    industrySliderPagination.push(item.dataset.title);
  });
  const industrySlider = new Swiper('.industrySlider .swiper', {
    slidesPerView: 1,
    loop: false,
    centeredSlides: true,
    spaceBetween: 0,
    autoplay: {
      delay: 5000,
    },
    // 切換點
    pagination: {
      el: '.industrySlider .swiperDots',
      // bulletElement: 'button',
      // clickable: true,
      renderBullet: function (index, className) {
        return `<button class="${className} " aria-label="${industrySliderPagination[index]}">0${[index + 1]}</button>`;
      },
      // renderBullet: function (index, className) {
      //   return `<div class="${className} noFonts" data-swiper-index="${index}" tabindex="-1"></div>`;
      // },
    },
    // 切換箭頭
    navigation: {
      nextEl: '.industrySlider .nextSlider', //自行設定樣式
      prevEl: '.industrySlider .prevSlider', //自行設定樣式
      disabledClass: 'swiperArrow-disabled', //不可點選樣式
    },
    // keyboard: {
    //   enabled: true,
    //   onlyInViewport: false,
    // },
    breakpoints: {
      100: {
        slidesPerView: 1,
      },
      575: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 1,
      },
      1440: {
        slidesPerView: 1,
      },
    },
  });
  const industrySliderPages = document.querySelectorAll('.industrySlider .swiper-pagination-bullet');
  industrySliderPages?.forEach((item) => item.addEventListener('click', () => industrySlider.slideTo(item.dataset.swiperIndex)));

  const industrySliderLength = document.querySelectorAll('.industrySlider .swiper-slide').length;

  if (industrySliderLength > 1) {
    const controlBox = document.querySelector('.industrySlider .controlBox');
    const mpControlPlay = document.querySelector('.industrySlider .controlBox .play');
    const mpControlPause = document.querySelector('.industrySlider .controlBox .stop');
    controlBox.classList.add('active');
    mpControlPlay.setAttribute('aria-pressed', 'true');

    mpControlPlay?.addEventListener('click', () => {
      industrySlider.autoplay.start();
      mpControlPlay.classList.add('active');
      mpControlPause.classList.remove('active');

      mpControlPlay.setAttribute('aria-pressed', 'true');
      mpControlPause.setAttribute('aria-pressed', 'false');
    });
    mpControlPause?.addEventListener('click', () => {
      industrySlider.autoplay.stop();
      mpControlPause.classList.add('active');
      mpControlPlay.classList.remove('active');

      mpControlPlay.setAttribute('aria-pressed', 'false');
      mpControlPause.setAttribute('aria-pressed', 'true');
    });
  }

  //消息輪播
  const newsSlider = new Swiper('.newsSlider .swiper', {
    slidesPerView: 3,
    spaceBetween: 0,
    loop: false,
    // 切換點
    pagination: {
      el: '.newsSlider .swiperDots',
      // bulletElement: 'button',
      // clickable: true,
      renderBullet: function (index, className) {
        return `<div class="${className} noFonts" data-swiper-index="${index}" tabindex="-1"></div>`;
      },
    },
    // 切換箭頭
    navigation: {
      nextEl: '.newsSlider .nextSlider', //自行設定樣式
      prevEl: '.newsSlider .prevSlider', //自行設定樣式
      disabledClass: '.newsSlider swiperArrow-disabled', //不可點選樣式
    },
    // keyboard: {
    //   enabled: true,
    //   onlyInViewport: false,
    // },
    breakpoints: {
      100: {
        slidesPerView: 1,
      },
      575: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 3,
      },
    },
  });
  const newsSliderPages = document.querySelectorAll('.newsSlider .swiper-pagination-bullet');
  newsSliderPages?.forEach((item) => item.addEventListener('click', () => newsSlider.slideTo(item.dataset.swiperIndex)));

  //活動輪播
  const eventSlider = new Swiper('.eventSlider .swiper', {
    slidesPerView: 3,
    spaceBetween: 0,
    loop: false,
    // 切換點
    pagination: {
      el: '.eventSlider .swiperDots',
      // bulletElement: 'button',
      // clickable: true,
      renderBullet: function (index, className) {
        return `<div class="${className} noFonts" data-swiper-index="${index}" tabindex="-1"></div>`;
      },
    },
    // 切換箭頭
    navigation: {
      nextEl: '.eventSlider .nextSlider', //自行設定樣式
      prevEl: '.eventSlider .prevSlider', //自行設定樣式
      disabledClass: '.eventSlider swiperArrow-disabled', //不可點選樣式
    },
    breakpoints: {
      100: {
        slidesPerView: 1,
      },
      575: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 3,
      },
    },
  });

  const eventSliderPages = document.querySelectorAll('.eventSlider .swiper-pagination-bullet');
  eventSliderPages?.forEach((item) => item.addEventListener('click', () => eventSlider.slideTo(item.dataset.swiperIndex)));

  //廣告輪播
  const winnerSlide = document.querySelectorAll('.winnerSlider .swiper-slide');
  let winnerSlideLen;
  if (winnerSlide) {
    winnerSlideLen = winnerSlide.length;
  }
  const winnerSwiper = new Swiper('.winnerSlider .swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    // loop: winnerSlideLen <= 1 ? false : true,
    loop: false,
    // centeredSlides: true,
    // 切換點
    pagination: {
      el: '.winnerSlider .swiperDots',
      // bulletElement: 'button',
      // clickable: true,
      renderBullet: function (index, className) {
        return `<div class="${className} noFonts" data-swiper-index="${index}" tabindex="-1"></div>`;
      },
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
      dragSize: 120,
    },
    // 切換箭頭
    navigation: {
      nextEl: '.winnerSlider .nextSlider', //自行設定樣式
      prevEl: '.winnerSlider .prevSlider', //自行設定樣式
      disabledClass: '.winnerSlider swiperArrow-disabled', //不可點選樣式
    },
    // keyboard: {
    //   enabled: true,
    //   onlyInViewport: false,
    // },
    breakpoints: {
      767: {
        slidesPerView: 3,
        spaceBetween: 60,
      },
      1280: {
        slidesPerView: 3,
      },
    },
  });

  const winnerSwiperPages = document.querySelectorAll('.winnerSlider .swiper-pagination-bullet');
  winnerSwiperPages?.forEach((item) => item.addEventListener('click', () => winnerSwiper.slideTo(item.dataset.swiperIndex)));

  //
  //推薦閱讀
  const recommendSwiper = new Swiper('.recommendSlider .swiper', {
    slidesPerView: 1,
    loop: false,
    spaceBetween: 40,
    // 切換點
    pagination: {
      el: '.recommendSlider .swiperDots',
      // bulletElement: 'button',
      // clickable: true,
      renderBullet: function (index, className) {
        return `<div class="${className} noFonts" data-swiper-index="${index}" tabindex="-1"></div>`;
      },
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
      dragSize: 120,
    },
    // 切換箭頭
    navigation: {
      nextEl: '.recommendSlider .nextSlider', //自行設定樣式
      prevEl: '.recommendSlider .prevSlider', //自行設定樣式
      disabledClass: '.recommendSlider swiperArrow-disabled', //不可點選樣式
    },
    // keyboard: {
    //   enabled: true,
    //   onlyInViewport: false,
    // },
    breakpoints: {
      480: {
        slidesPerView: 2,
      },

      767: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
    },
  });

  const recommendSwiperPages = document.querySelectorAll('.recommendSlider .swiper-pagination-bullet');
  recommendSwiperPages?.forEach((item) => item.addEventListener('click', () => recommendSwiper.slideTo(item.dataset.swiperIndex)));

  //活動花絮
  const activitiesSwiper = new Swiper('.activitiesSwiper .swiper', {
    slidesPerView: 1,
    loop: false,
    centeredSlides: true,
    // 切換點
    pagination: {
      el: '.activitiesSwiper .swiperDots',
      // bulletElement: 'button',
      // clickable: true,
      renderBullet: function (index, className) {
        return `<div class="${className} noFonts" data-swiper-index="${index}" tabindex="-1"></div>`;
      },
    },
    // 切換箭頭
    navigation: {
      nextEl: '.activitiesSection .nextSlider', //自行設定樣式
      prevEl: '.activitiesSection .prevSlider', //自行設定樣式
      disabledClass: '.activitiesSection swiperArrow-disabled', //不可點選樣式
    },
    // keyboard: {
    //   enabled: true,
    //   onlyInViewport: false,
    // },
    breakpoints: {
      100: {
        slidesPerView: 1,
      },
      575: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 1,
      },
      1000: {
        slidesPerView: 1,
      },
    },
  });

  const activitiesSwiperPages = document.querySelectorAll('.activitiesSwiper .swiper-pagination-bullet');
  activitiesSwiperPages?.forEach((item) => item.addEventListener('click', () => activitiesSwiper.slideTo(item.dataset.swiperIndex)));

  //廣告輪播
  const adSwiper = new Swiper('.adSlider .swiper', {
    slidesPerView: 5,
    spaceBetween: 20,
    loop: false,
    // 切換點
    pagination: {
      el: '.adSlider .swiperDots',
      // bulletElement: 'button',
      // clickable: true,
      renderBullet: function (index, className) {
        return `<div class="${className} noFonts" data-swiper-index="${index}" tabindex="-1"></div>`;
      },
    },
    // 切換箭頭
    navigation: {
      nextEl: '.adSlider .nextSlider', //自行設定樣式
      prevEl: '.adSlider .prevSlider', //自行設定樣式
      disabledClass: '.adSlider swiperArrow-disabled', //不可點選樣式
    },
    // keyboard: {
    //   enabled: true,
    //   onlyInViewport: false,
    // },
    breakpoints: {
      100: {
        slidesPerView: 1,
      },
      575: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 4,
      },
    },
  });

  const adSwiperPages = document.querySelectorAll('.adSlider .swiper-pagination-bullet');
  adSwiperPages?.forEach((item) => item.addEventListener('click', () => adSwiper.slideTo(item.dataset.swiperIndex)));

  //跑馬燈
  const marqueeSwiper = new Swiper('.marquee .swiper', {
    direction: 'vertical',
    // 切換點
    // 切換箭頭
    navigation: {
      nextEl: '.marquee .nextSlider', //自行設定樣式
      prevEl: '.marquee .prevSlider', //自行設定樣式
      disabledClass: '.marquee marquee-arrow-disabled', //不可點選樣式
    },
  });

  //cp_photo
  const navSlider = new Swiper('.navSlider .swiper', {
    lazy: true, // lazy load
    preloadImages: false, // 多筆設定lazy時須設定
    centeredSlides: false, // 多筆設定lazy時須設定
    slidesPerView: 4,
    loop: false,
    slideThumbActiveClass: 'swiper-slide-thumb-active',
    watchSlidesProgress: true,
    navigation: {
      nextEl: '.navSlider .nextSlider', //下一張class，無障礙設定關係需要增加.nextSlider
      prevEl: '.navSlider .prevSlider', //前一張class，無障礙設定關係需要增加.prevSlider
      disabledClass: 'swiperArrow-disabled', //不可點選樣式
    },
    // keyboard: {
    //   enabled: true,
    //   onlyInViewport: false,
    // },
    breakpoints: {
      100: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 4,
      },
    },
  });

  const sliderFor = new Swiper('.sliderFor .swiper', {
    slidesPerView: 1, //顯示張數
    effect: 'fade', //淡入
    loop: false,
    fadeEffect: {
      crossFade: true, //上一張淡出，false上一張不淡出，下一張疊在上方
    },
    navigation: {
      nextEl: '.sliderFor .nextSlider', //下一張class，無障礙設定關係需要增加.nextSlider
      prevEl: '.sliderFor .prevSlider', //前一張class，無障礙設定關係需要增加.prevSlider
      disabledClass: 'swiperArrow-disabled', //不可點選樣式
    },
    pagination: {
      el: '.sliderFor .pagination',
      type: 'fraction', //顯示分頁
    },
    // keyboard: {
    //   enabled: true,
    //   onlyInViewport: false,
    // },
    lazy: true,
    thumbs: {
      swiper: navSlider, //設定指向到哪個swiper，使用另一個設定的參數
    },
  });
  // alert

  const alertBtn = document.querySelector('.topAlert .close');
  const alertContent = document.querySelector('.topAlert');
  function hideAlert() {
    alertBtn.addEventListener('click', () => {
      alertContent.classList.add('none');
    });
  }
  alertBtn ? hideAlert() : null;

  const allSwiperArrow = document.querySelectorAll('.swiperArrow');
  allSwiperArrow?.forEach((item) => {
    item.setAttribute('aria-hidden', 'true');
    item.setAttribute('tabindex', '-1');
  });
})();
