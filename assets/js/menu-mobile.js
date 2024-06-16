document.addEventListener('DOMContentLoaded', (event) => {

    //Seleccionas mis dos elementos principales
    let mobile_btn = document.querySelector(".navbar__mobile-btn");
    let mobile_menu = document.querySelector(".menu-mobile");

    //Funcion mostrar y ocultar el menu mobile
    const showHiddenMenu = () => {
        let show = document.querySelector(".menu-mobile--show");

        if (show) {
            mobile_menu.classList.remove("menu-mobile--show");
        }else{
            mobile_menu.classList.add("menu-mobile--show");
        }

    }

    
    //Evento de click en el boton del menu mobile
    mobile_btn.addEventListener("click", showHiddenMenu)

    //Evento de resize en la ventana para quitar el menu mobile si la pantalla es mayor a 1000px
    window.addEventListener("resize", () => {
        let window__width = parseInt(document.body.clientWidth);
        
        if (window__width >= 1000) {
            mobile_menu.classList.remove("menu-mobile--show");
        }
    });

    //Poder cerrar el menu mobile con el boton de cerrar
    let btn_close = document.querySelector(".menu-mobile__close");

    btn_close.addEventListener("click", showHiddenMenu);

});