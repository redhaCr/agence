(function () {

    window.onscroll = function () {
        var header_navbar = document.querySelector(".navbar");
        var sticky = header_navbar.offsetTop;
        var logo = document.querySelector(".navbar-brand img");

        if (window.pageYOffset > sticky) {
            header_navbar.classList.add("sticky");
            logo.src = 'logo2.png'
        } else {
            header_navbar.classList.remove("sticky");
            logo.src = 'logo.png'
        }
    }
})();