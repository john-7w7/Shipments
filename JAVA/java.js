$(document).ready(function(){
    /*Menu de navegacion*/
    var activo = true;

    $('.btn-menu').on('click', function(){
        /**Intercalar iconos */
        $('.btn-menu i').toggleClass('fa-times');
        //**Animacion menu */
        if(activo){
            $('.list-container').animate({
                left: '0px'
            }, 500);
            activo = false;

        }else{
            activo = true;

            $('.list-container').animate({
                left: '-100%'
            }, 500);

            activo = true;
        }
    });


    //Intercalar clase activo
    var  enlaces = document.querySelectorAll('.list li a')
    enlaces.forEach((element) => {
        element.addEventListener('click', (event) => {
            enlaces.forEach((link) => {
                link.classList.remove('activo');
            });
            event.target.classList.add('activo');
        });
    });
    //scrot efect
    var prevScrollPos = window.pageYOffset;
    window.onscroll = () => {

        var currentScrollPos = window.pageYOffset;
        if(prevScrollPos > currentScrollPos){

            $('.menu').css("top", "0");
            $('.menu').css("transition", "0.5s");
        }else{
            $('.menu').css("top", "-60");
            $('.menu').css("transition", ".5s");
        }
        prevScrollPos = currentScrollPos;
        //condiciones
        var posicion = window.pageYOffset;
        if(posicion <= 600){
            //Ocultar estilos menu scrop
            $('.menu').css("borderBottom", "none");
            //ocultar ir arriba
            $('.go-top').css("rigth", "-100%");
        }else{
            //mosnts menu
            $('.menu').css("borderBottom", "3px solid #ff2e63");
            //mosnts ir arriba
            $('.go-top').css("rigth", "0");
            $('.go-top').css("rigth", "500ms");
        }
    }
    //funcion ir arriba
    $('.go-top').on("click", function(){
        $('body, html').animate({
            scrollTop: "0"
        }, 500);
    });
    //funcion ver abajo
    $('#abajo').on('click', function(){
        $('body, html').animate({
            scrollTop: '600px'
        }, 500);
    });
});