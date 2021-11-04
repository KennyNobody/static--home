document.addEventListener('DOMContentLoaded', () => {
    let el = document.querySelectorAll('.color-picker');

    for (let i = 0; i < el.length; i++) {
        initPicker(el[i]);
    }
});

let initPicker = (el) => {
    setDefaulut(el);

    let items = el.querySelectorAll('.color-picker__item');

    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener('click', () => {
            setTheme(items, items[i]);
        })
    }
}

let setTheme = (items, el) => {
    
    document.querySelector('#style').remove();

    for (let i = 0; i < items.length; i++) {
        items[i].classList.remove('color-picker__item--active');
    }

    let theme = el.getAttribute('data-color');

    if (theme == 'red') {
        document.head.insertAdjacentHTML("beforeend", `<style id="style">:root{--main-bg-color:#EB5757;--title-color:#F3F2F3;--main-text-color:#101010;--discription-color:#101010;--border-color:#101010;--border-section-color:#101010}</style>`)
    } else if (theme == 'dark') {
        document.head.insertAdjacentHTML("beforeend", `<style id="style">:root{--main-bg-color:#1A1A1A;--main-text-color:#F3F2F3;--title-color:#F3F2F3;--discription-color:#F3F2F3;--border-color:#F3F2F3;--border-section-color:#F3F2F3}</style>`);
    } else if (theme == 'blue') {
        document.head.insertAdjacentHTML("beforeend", `<style id="style">:root{--main-bg-color:#2F80ED;--title-color:#F3F2F3;--main-text-color:#101010;--discription-color:#101010;--border-color:#101010;--border-section-color:#101010}</style>`);
    } else if (theme == 'purple') {
        document.head.insertAdjacentHTML("beforeend", `<style id="style">:root{--main-bg-color:#BB6BD9;--title-color:#F3F2F3;--main-text-color:#101010;--discription-color:#101010;--border-color:#101010;--border-section-color:#101010}</style>`);
    } else {
        document.head.insertAdjacentHTML("beforeend", `<style id="style">:root{--main-bg-color:#F3F2F3;--main-text-color:#101010;--title-color:#101010;--discription-color:#575757;--border-color:#bfbdbe;--border-section-color:#c4c4c4}</style>`);
    }

    localStorage.setItem('color-theme', theme);

    el.classList.add('color-picker__item--active');
}

let setDefaulut = (el) => {
    let theme = localStorage.getItem('color-theme');

    if (theme) {
        let activeItem = el.querySelector('[data-color="' + theme + '"]');
        activeItem.classList.add('color-picker__item--active');
    }
}