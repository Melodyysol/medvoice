document.querySelector('.js-menu')?.addEventListener('click', () => {
    const menu = document.querySelector('.js-menu + div');
    if (menu) {
        menu.classList.toggle('hidden');
    }
});
export {};
//# sourceMappingURL=index.js.map