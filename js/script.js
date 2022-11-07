/* burger */

let burger = document.querySelector(".header__burger-btn");
let burgerMenu = document.querySelector(".header__top-nav");

burger.addEventListener('click', function () {
  burger.classList.toggle('active');
  burgerMenu.classList.toggle('active__burger-menu');
});

document.querySelectorAll('.header__top-item').forEach(function (burgerItem) {
  burgerItem.addEventListener("click", function () {
    burger.classList.remove('active');
    burgerMenu.classList.remove('active__burger-menu');
  })
});

/* play-btn */

document.querySelectorAll(".play-btn").forEach(function (playBtn) {
  playBtn.addEventListener("click", function () {
    playBtn.classList.toggle("active-btn");
  })
});

/* search */

let loupe = document.querySelector('.header__loupe');
let input = document.querySelector(".header__input");

loupe.addEventListener('click', function () {
  if (input.classList.contains('header__input--active')) {
    input.setAttribute("tabindex", "1");
  }
  else {
    input.setAttribute("tabindex", "0");
  }
  input.classList.toggle('header__input--active');
});

/* modal */

var modal = document.querySelector(".modal");
var closeButton = document.querySelector(".modal__close");

document.querySelectorAll('.login-btn').forEach(function (openButton) {
  openButton.addEventListener('click', function () {
    modal.classList.toggle('modal__login-open');
    document.body.classList.toggle("stop-scroll");
  })
});

closeButton.addEventListener('click', function () {
  modal.classList.remove("modal__login-open");
  document.body.classList.remove("stop-scroll");
});

/* mobile-playlist */

let tabPlay = document.querySelector('.header__mobile-playlist');
let tabPlayBtn = document.querySelector('.header__ether-btn');

tabPlayBtn.addEventListener('click', function () {
  tabPlay.classList.toggle('header__mobile-playlist--active');
  tabPlayBtn.classList.toggle('header__etherbtn--active');
})

/* likes-counter */

const counter = document.querySelectorAll('.counter');
let clicked = false;

document.querySelectorAll('.count-btn').forEach(function (countBtn) {
  countBtn.addEventListener('click', () => {
    if (!clicked) {
      clicked = true;
      countBtn.querySelector(".counter").textContent++;
    }
    else {
      clicked = false;
      countBtn.querySelector(".counter").textContent--;
    }
  })
})

/* more-tracks */

let moreTracks = document.querySelector('.podcasts__more-tracks');
let tracksBtn = document.querySelector('.podcasts__more');
let moreBtn = false;

tracksBtn.addEventListener('click', function () {
  if (!moreBtn) {
    moreBtn = true;
    document.querySelectorAll('.podcasts__mobile').forEach(function (moreMob) {
      moreMob.classList.add('podcasts__mobile--active')
    })
    moreTracks.classList.add('podcasts__more-tracks--active');
    tracksBtn.textContent = "Cвернуть";
  }
  else {
    moreBtn = false;
    moreTracks.classList.remove('podcasts__more-tracks--active');
    document.querySelectorAll('.podcasts__mobile').forEach(function (moreMob) {
      moreMob.classList.remove('podcasts__mobile--active')
    })
    tracksBtn.textContent = "Ещё подкасты";
  }
})

/* select */

const element = document.querySelector('select');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: "",
  sorter: () => { },
});

/* accordion */

new Accordion('.accordion-container');

/* guests-tab */

let guestsBtn = document.querySelectorAll('.guests__person');
let guestsInfo = document.querySelectorAll('.guests__info');

guestsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    guestsBtn.forEach(function (btn) { btn.classList.remove('guests__person-active') });
    e.currentTarget.classList.add('guests__person-active');

    guestsInfo.forEach(function (element) { element.classList.remove('guests__chosen') });
    document.querySelector(`[data-target="${path}"]`).classList.add('guests__chosen');
  });
});

/* playlists-swiper */

const mySwiper = new Swiper('.playlists__swiper', {
  breakpoints: {
    0: {
      loop: true,
      slidesPerGroup: 1,
      slidesPerView: 2.5,
      spaceBetween: 15,
      observer: true,
      observeParents: true,
    },
    577: {
      enabled: false,
    },
  }
});

/* swiper-about */

const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerGroup: 1,
  slidesPerView: 2.5,
  spaceBetween: 20,
  observer: true,
  observeParents: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    321: {
      slidesPerView: 2.5,
    },
    577: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1025: {
      slidesPerView: 3,
    },
    1231: {
      spaceBetween: 30,
      slidesPerView: 4,
    },
  }
});

/* form */

new window.JustValidate('.about-us__form', {
  rules: {
    text: {
      required: true,
      minLength: 5,
      maxLength: 300,
    },
    name: {
      required: true,
      minLength: 2,
      maxLength: 15,
    },
    email: {
      required: true,
      email: true,
    },
    checkbox: {
      required: true,
    },
    login: {
      required: true,
      minLength: 6,
      maxLength: 15,
    },
    password: {
      required: true,
      minLength: 6,
      maxLength: 15,
    }
  },

  colorWrong: "#D52B1E",
  messages: {
    text: {
      required: "Вы не поделились впечатлениями",
      function: "Некорректный номер",
      minLength: 'Недостасточно символов',
      maxLength: 'превышен лимит символов',
    },
    name: {
      required: 'Вы не ввели имя',
      minLength: 'Имя должно содержать минимум 2 символа',
      maxLength: 'превышен лимит символов',
    },
    email: {
      required: 'Вы не ввели e-mail',
      email: 'Некорректный e-mail',
    },
    checkbox: {
      required: 'Вы не подтвердиле согласие',
    },
    login: {
      required: 'Вы не ввели Логин',
      minLength: 'Логин должен содержать мнинимум 6 символов',
      maxLength: 'Логин может содержать максимум 15 символов',
    },
    password: {
      required: 'Вы не ввели пароль',
      minLength: 'Пароль должен содержать минимуму 6 символов',
      maxLength: 'Пароль может содержать максимум 15 символов',
    },
  }
});

new window.JustValidate('.modal__form', {
  rules: {
    login: {
      required: true,
      minLength: 6,
      maxLength: 15,
    },
    password: {
      required: true,
      minLength: 6,
      maxLength: 15,
    }
  },

  colorWrong: "#D52B1E",
  messages: {
    login: {
      required: 'Вы не ввели Логин',
      minLength: 'Логин должен содержать мнинимум 6 символов',
      maxLength: 'Логин может содержать максимум 15 символов',
    },
    password: {
      required: 'Вы не ввели пароль',
      minLength: 'Пароль должен содержать минимуму 6 символов',
      maxLength: 'Пароль может содержать максимум 15 символов',
    },
  }
});
