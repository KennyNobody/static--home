document.addEventListener('DOMContentLoaded', () => {
    let el = document.querySelector('.color-picker');

    setDefaultClass();

    if (el) {
        let items = el.querySelectorAll('.color-picker__item');

        for (let i = 0; i < items.length; i++) {
            items[i].addEventListener('click', () => {
                setClass(items, items[i]);
            })
        }
    }
});

let setDefaultClass = (items) => {

    document.body.classList.remove('body--light');
    document.body.classList.remove('body--dark');
    document.body.classList.remove('body--blue');
    document.body.classList.remove('body--purple');
    document.body.classList.remove('body--red');

    let color = localStorage.getItem('color-theme');

    document.body.classList.add('body--' + color);
}

let setClass = (items, el) => {

    for (let i = 0; i < items.length; i++) {
        items[i].classList.remove('color-picker__item--active');
    }

    document.body.classList.remove('body--light');
    document.body.classList.remove('body--dark');
    document.body.classList.remove('body--blue');
    document.body.classList.remove('body--purple');
    document.body.classList.remove('body--red');

    document.body.classList.add('body--' + el.getAttribute('data-color'));

    localStorage.setItem('color-theme', el.getAttribute('data-color'));

    el.classList.add('color-picker__item--active');
}