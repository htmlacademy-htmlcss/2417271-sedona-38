let modalOpeners = document.querySelectorAll('.js-btn-modal');
let modalCloser = document.querySelector('.modal-close-btn');
let modal = document.querySelector('.modal-container');

for (let modalOpener of modalOpeners) {
  if (modalOpener) {
    modalOpener.addEventListener('click', (e) => {
      e.preventDefault();
      if (modal) {
        modal.classList.add('modal-active');
      }
    })
  }
};

if (modalCloser) {
  modalCloser.addEventListener('click', (e) => {
    if (modal) {
      modal.classList.remove('modal-active');
    }
  })
};

let adultCount = document.querySelector('.js-form-adult-lot');
let adultMinus = document.querySelector('.js-form-adult-minus');
let adultPlus = document.querySelector('.js-form-adult-plus');

if (adultMinus) {
  adultMinus.addEventListener('click', (e) => {
    if (adultCount) {
      if (adultCount.value > 0) {
        adultCount.value--;
      } else {
        adultCount.value = 0;
      }
    }
  })
};

if (adultPlus) {
  adultPlus.addEventListener('click', (e) => {
    if (adultCount) {
      if (adultCount.value < 999) {
        adultCount.value++;
      } else {
        adultCount.value = 999;
      }
    }
  })
};

let childCount = document.querySelector('.js-form-child-lot');
let childMinus = document.querySelector('.js-form-child-minus');
let childPlus = document.querySelector('.js-form-child-plus');

if (childMinus) {
  childMinus.addEventListener('click', (e) => {
    if (childCount) {
      if (childCount.value > 0) {
        childCount.value--;
      } else {
        childCount.value = 0;
      }
    }
  })
};

if (childPlus) {
  childPlus.addEventListener('click', (e) => {
    if (childCount) {
      if (childCount.value < 999) {
        childCount.value++;
      } else {
        childCount.value = 999;
      }
    }
  })
};
