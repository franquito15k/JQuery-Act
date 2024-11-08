let x = $(document)
x.ready(inicializarEventos);


function inicializarEventos() {
    let x = $("#boton"); x.click(presionBoton);

    let pa = $("#parrafo1"); pa.click(obt_parrafo);

    let tb1 = $("#fila1"); tb1.click(cam_color1);

    let tb2 = $("#fila2"); tb2.click(cam_color2);

    let lis = $("li"); lis.click(ocultar);

    let act5 = $("#tabla1"); act5.click(cam_col_act5);

    let act6 = $("h3"); act6.click(cam_tam);

    let act7 = $("#boton7"); act7.click(cam_text);

    let act8 = $("#boton1"); act8.click(cam_hipervinculo);

    let act91 = $("#boton91"); act91.click(asig_class);
    let act92 = $("#boton92"); act92.click(rem_class);

    let act101 = $("#boton101"); act101.click(mos_html);
    let act102 = $("#boton102"); act102.click(cont_html);

    let act11 = $("strong"); act11.click(ocultar);

    let mouse = $("#act12"); mouse.mouseover(mouse_entra); mouse.mouseout(mouse_sale);

    let hover = $("#act13"); hover.hover(hovermouse_entra, hovermouse_sale);

    let move = $("#act14"); move.mousemove(mouseover);

    let change = $("#change");
    change.mousedown(cambiarColor);
    change.mouseup(cambiarColor);
    back = $("#back");
    back.mousedown(restaurarColor);
    back.mouseup(restaurarColor);

    let div = $("#miDiv");    
    div.dblclick(redimensionarDiv);

    $("input[type='text']").focus(cambiarColorRojo);
    $("input[type='text']").blur(cambiarColorAzul);

    $("#inputTexto").blur(pierdeFoco);


    $("#div1").click(function() {
        $(this).hide(1000, function() {
            $("#div2").show(1000);
        });
    });
    $("#div11").click(function() {
        $(this).fadeTo(1000, 0, function() {
            $("#div22").fadeIn(1000);
        });
    });


    $("#div111").click(function() {
        $(this).fadeTo(1000, 0.20, function() {
            $(this).hide(500, function() {
                $("#div222").fadeIn(1000);
            });
        });
    });

    $("#listaEnlaces a").each(function() {
        let enlace = $(this).attr('href');
        if (enlace.indexOf('.ar') !== -1) {
            $(this).addClass('resaltado');
        }
    });

}
function presionBoton() { alert("Primer parrafo"); }
function obt_parrafo() { console.log("Primer parrafo opretado"); }

function cam_color1() { let x = $("#fila1"); x.css("background-color", "#ffff00"); }

function cam_color2() { let x = $("#fila2"); x.css("background-color", "#ffff00"); }

function ocultar() { let x = $(this); x.hide(); }

function cam_col_act5() { let x = $("#tabla1 #fila1"); x.css("background-color", "#ffff00"); }
function cam_tam() { let x = $(this); x.css("font-size", "50px"); }

function cam_text() { let x = $("#tabla1 #fila1 td"); x.text("-"); }

function cam_hipervinculo() { let x = $("#hiper"); x.attr("href", "/aa"); x.text("Cambios"); }

function asig_class() { let x = $("#tabla1 thead"); x.addClass("tabhead"); x = $("#tabla1 tbody"); x.addClass("tabbody"); x = $("#textiño"); x.addClass("negro"); console.log("func"); }
function rem_class() { let x = $("#tabla1 thead"); x.removeClass("tabhead"); x = $("#tabla1 tbody"); x.removeClass("tabbody"); x = $("#textiño"); x.removeClass("blanco"); console.log("llorar"); }

function mos_html() { let x = $("h1").html(); alert("HTML del encabezado: " + x); }
function cont_html() { let x = $("#bodyparrafo").html(); alert("HTML del cuerpo: " + x); }

function ocultar() { let x = $(this); x.hide(); }

function mouse_entra() { $(this).css("background-color", "#ff0") }
function mouse_sale() { $(this).css("background-color", "#ff0") }

function hovermouse_entra() { $(this).css("background-color", "#ff0") }
function hovermouse_sale() { $(this).css("background-color", "#fff") }

function mouseover(event) {
    let x = $("#cordx"); x.text("coordenada x=" + event.clientX);
    let y = $("#cordy"); y.text("Coordenada Y:" + event.clientY);
}

function cambiarColor() {$(this).css("background-color", "green"); }

function restaurarColor() {$(this).css("background-color", ""); }

function redimensionarDiv() {
    let isOriginalSize = $(this).data('isOriginalSize') !== undefined ? $(this).data('isOriginalSize') : true;
    if (isOriginalSize) {
        $(this).animate({width: '250px',height: '250px'});
    }else{$(this).animate({width: '800px',height: '70px'});
    }$(this).data('isOriginalSize', !isOriginalSize);
}

function cambiarColorRojo() {$(this).css("color", "red");}

function cambiarColorAzul() {$(this).css("color", "blue");}

function pierdeFoco() {
    let x = $(this);
    let cadena = x.val();
    if (cadena.length == 0) {
        alert("No ingresó datos");
    }
}

    
