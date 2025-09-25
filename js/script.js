if(document.querySelector('.header-transparent')){
    const header = document.querySelector('.header-transparent');
    function checkHeader() {
        if (window.scrollY >= 50) {
            header.classList.remove('header-scrolled');
        } else {
            header.classList.add('header-scrolled');
        }
    }
    window.addEventListener('scroll', checkHeader);
    window.addEventListener('resize', checkHeader);
    checkHeader();
}
const headerBurger = document.querySelector('.header__burger');
const headerContentCloseBtn = document.querySelector('.header__content-close');
const headerContent = document.querySelector('.header__content');
const headerContentMenuItems = document.querySelectorAll('.header__menu li');
headerBurger.addEventListener('click', () => {
    headerContent.classList.add('active');
    gsap.set(headerContentMenuItems, {y: 50, opacity: 0});
    gsap.to(headerContentMenuItems, {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.5,
        delay: 0.5
    });
});
headerContentCloseBtn.addEventListener('click', () => {
    gsap.to(headerContentMenuItems, {
        y: 50,
        opacity: 0,
        stagger: { each: 0.1, from: "end" },
        duration: 0.4,
        onComplete: () => {
            headerContent.classList.remove('active');
        }
    });
});

const selects = document.querySelectorAll('.exchangePhone__form-select');
selects.forEach(select => {
  const selectedName = select.querySelector('.exchangePhone__form-select--name');
  const selectedText = selectedName.querySelector('.selected-text');
  const options = select.querySelectorAll('.exchangePhone__form-select--content span');
  const hiddenInput = select.querySelector('input[type="hidden"]');
  selectedName.addEventListener('click', (e) => {
    selects.forEach(s => {
      if (s !== select) s.classList.remove('open');
    });
    select.classList.toggle('open');
    e.stopPropagation();
  });

  options.forEach(option => {
    option.addEventListener('click', () => {
      const value = option.dataset.value;
      const iconSrc = option.querySelector('img').getAttribute('src');
      const text = option.textContent.trim();

      selectedName.querySelector('img').setAttribute('src', iconSrc);
      selectedText.textContent = text;
      hiddenInput.value = value;
      select.classList.remove('open');
    });
  });
});
document.addEventListener('click', () => {
  selects.forEach(select => select.classList.remove('open'));
});
document.querySelector('.exchangePhone__form-rate--btn').addEventListener('click', () => {
  const selects = document.querySelectorAll('.exchangePhone__form-select');
  if (selects.length < 2) return;
  const select1 = selects[0];
  const select2 = selects[1];
  const name1 = select1.querySelector('.exchangePhone__form-select--name img');
  const text1 = select1.querySelector('.exchangePhone__form-select--name .selected-text');
  const hidden1 = select1.querySelector('input[type="hidden"]');
  const name2 = select2.querySelector('.exchangePhone__form-select--name img');
  const text2 = select2.querySelector('.exchangePhone__form-select--name .selected-text');
  const hidden2 = select2.querySelector('input[type="hidden"]');
  const tempIcon = name1.src;
  name1.src = name2.src;
  name2.src = tempIcon;
  const tempText = text1.textContent;
  text1.textContent = text2.textContent;
  text2.textContent = tempText;
  const tempHidden = hidden1.value;
  hidden1.value = hidden2.value;
  hidden2.value = tempHidden;
  const input1 = document.querySelector('input[name="give-value"]');
  const input2 = document.querySelector('input[name="get-value"]');
  if (input1 && input2) {
    const tempValue = input1.value;
    input1.value = input2.value;
    input2.value = tempValue;
  }
});


function updateButtonUp() {
    if(!document.querySelector('.buttonUp')) return
    const buttonUp = document.querySelector('.buttonUp');
    if (!buttonUp) return;

    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.scrollHeight;
    const limit = documentHeight - 450;
    if (scrollY > 200) {
        buttonUp.classList.add('active');
    } else {
        buttonUp.classList.remove('active');
    }
    if (scrollY + windowHeight > limit) {
        buttonUp.style.bottom = `${scrollY + windowHeight - limit + 48}px`;
    } else {
        buttonUp.style.bottom = '48px';
    }
}
window.addEventListener('scroll', updateButtonUp);
window.addEventListener('resize', updateButtonUp);
updateButtonUp();

if(document.querySelector('.contacts__form')){
    const contactsForm = document.querySelector('.contacts__form');
    const contactsFormInputs = contactsForm.querySelectorAll('input, textarea');
    contactsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let hasError = false;
        contactsFormInputs.forEach(input => {
            const block = input.closest('.contacts__form-block');
            if (input.value.trim() === '') {
                block.classList.add('input-error');
                hasError = true;
            }
        });
        if (!hasError) {
            console.log('Form submitted');
            contactsForm.reset();
        }
    });
    contactsFormInputs.forEach(input => {
        input.addEventListener('input', () => {
            const block = input.closest('.contacts__form-block');
            if (input.value.trim() !== '') {
                block.classList.remove('input-error');
            }
        });
    });   
}

if(document.querySelector('.reviews__form')){
    const reviewsForm = document.querySelector('.reviews__form');
    const reviewsFormInputs = reviewsForm.querySelectorAll('input, textarea');
    reviewsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let hasError = false;
        reviewsFormInputs.forEach(input => {
            const block = input.closest('.reviews__form-item');
            if (input.value.trim() === '') {
                block.classList.add('input-error');
                hasError = true;
            }
        });
        if (!hasError) {
            console.log('Form submitted');
            reviewsForm.reset();
        }
    });
    reviewsFormInputs.forEach(input => {
        input.addEventListener('input', () => {
            const block = input.closest('.reviews__form-item');
            if (input.value.trim() !== '') {
                block.classList.remove('input-error');
            }
        });
    });   
}