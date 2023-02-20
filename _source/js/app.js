document.querySelector('.js-menu-btn').onclick = function () {
    this.classList.toggle('active');
    document.querySelector('body').classList.toggle('overflow');
    document.querySelector('.js-menu').classList.toggle('active');
};

document.querySelector('.js-dscr-link').onclick = function (event) {
    event.preventDefault();
    document.querySelector('.js-dscr-link').classList.add('hidden');
    document.querySelector('.shop__description-bg').classList.add('hidden');
    document.querySelector('.shop__dscr').classList.add('full');
}

document.querySelector('.js-show-row').onclick = function (event) {
    event.preventDefault();
    let shopRow = document.querySelectorAll('.shop__row');
    for (elems of shopRow) {
        elems.classList.remove('hidden');
    }
    document.querySelector('.js-show-row').classList.add('hidden');
}

