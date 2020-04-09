/* Nut cong tac thay doi che do sang toi */

const chuDe = document.querySelector('#chu-de__an');
const chuDeHien = localStorage.getItem('theme');
if (chuDeHien) {
    document.documentElement.setAttribute('data-theme', chuDeHien);

    if (chuDeHien === 'dark') {
        chuDe.checked = true;
    }
}

function doiChuDe(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}
chuDe.addEventListener('change', doiChuDe, false);

var x = 0;
var y = 0;
var z = 0;

/* Dinh lai vi tri cua nut cong tac thay doi chu de */

$(window).resize(function () {
    var w = $(window).width();
    if (w >= 768) {
        $("#chu-de").css({
            "top": "15px"
        });
    } else {
        $("#chu-de").css({
            "top": "-30px"
        });
    }

})

/* An hien menu o man hinh XS & SM */
$("#nut-menu").click(function () {
    if (z == 0) {
        gsap.to("#nut-menu div", {
            duration: 0.4,
            delay: 0.2,
            backgroundColor: "var(--mau-noi)"
        });
        gsap.to("#nut-menu div:nth-child(1)", {
            duration: 0.2,
            top: "9px",
            opacity: 0
        });
        gsap.to("#nut-menu div:nth-child(3)", {
            duration: 0.2,
            bottom: "9px"
        });
        gsap.to("#nut-menu div:nth-child(3)", {
            duration: 0.2,
            delay: 0.2,
            rotate: "45deg"
        });
        gsap.to("#nut-menu div:nth-child(2)", {
            duration: 0.2,
            delay: 0.2,
            rotate: "-45deg"
        });
        gsap.to("#menu-nho", {
            duration: 0.8,
            ease: "expo.out",
            right: 0
        });
        gsap.to("#chu-de", {
            duration: 0.4,
            ease: "expo.out",
            top: 15
        });
        z = 1;
    } else {
        gsap.to("#nut-menu div", {
            duration: 0.2,
            delay: 0.2,
            backgroundColor: "var(--mau-nut-menu)"
        });
        gsap.to("#nut-menu div:nth-child(3)", {
            duration: 0.2,
            rotate: 0
        });
        gsap.to("#nut-menu div:nth-child(2)", {
            duration: 0.2,
            rotate: 0
        });
        gsap.to("#nut-menu div:nth-child(1)", {
            duration: 0.2,
            delay: 0.2,
            top: "0px",
            opacity: 1
        });
        gsap.to("#nut-menu div:nth-child(3)", {
            duration: 0.2,
            delay: 0.2,
            bottom: "0px"
        });
        gsap.to("#menu-nho", {
            duration: 0.6,
            ease: "power4.in",
            right: "-105vw"
        });
        gsap.to("#chu-de", {
            duration: 0.4,
            ease: "expo.out",
            top: -30
        });
        z = 0;
    }
})

/* Menu dien thoai */
$(".menu-phu").hide();

/* hien san menu vat tu phu */

$(".menu-nho__nut:eq(0)").click(function () {
    if (x == 0) {
        $(this).css({
            "color": "var(--mau-chu-menu)",
            "margin-left": "0px"
        });
        $(this).siblings().css({
            "color": "var(--mau-chu-chim)"
        });
        $(this).children().css({
            right: "0px"
        });
        $(".menu-phu:eq(0)").toggle(400);
        if (y == 1) {
            $(".menu-nho__nut:eq(1)").css({
                "margin-left": "94px"
            });
            $(this).siblings().children().css({
                right: "-50vw"
            });
            $(".menu-phu:eq(1)").toggle(400);
            y = 0;
        }
        x = 1;
    } else {
        $(this).siblings().css({
            "color": "var(--mau-chu-menu)"
        });
        $(".menu-nho__muc:nth-child(1)").css({
            "color": "var(--mau-chu-menu-noi)"
        });
        $(this).css({
            "margin-left": "78.5px"
        });
        $(this).children().css({
            right: "-50vw"
        });
        $(".menu-phu:eq(0)").toggle(400);
        x = 0;
    }
})
/* hien san menu vat tu phu 
x = 1;
$(".menu-nho__nut:eq(1)").css({
    "color": "var(--mau-chu-menu)",
    "margin-left": "0px"
})
$(".menu-nho__nut:eq(1)").siblings().css({
    "color": "var(--mau-chu-chim)"
});
$(".menu-nho__nut:eq(1)").children().css({
    right: "0px"
});
$(".menu-phu:eq(1)").toggle(400);*/
$(".menu-nho__nut:eq(1)").click(function () {
    if (y == 0) {
        $(this).css({
            "color": "var(--mau-chu-menu)",
            "margin-left": "0px"
        })
        $(this).siblings().css({
            "color": "var(--mau-chu-chim)"
        });
        $(this).children().css({
            right: "0px"
        });
        $(".menu-phu:eq(1)").toggle(400);
        if (x == 1) {
            $(".menu-nho__nut:eq(0)").css({
                "margin-left": "78.5px"
            });
            $(this).siblings().children().css({
                right: "-50vw"
            });
            $(".menu-phu:eq(0)").toggle(400);
            x = 0;
        }
        y = 1;
    } else {
        $(this).siblings().css({
            "color": "var(--mau-chu-menu)"
        });
        $(".menu-nho__muc:nth-child(1)").css({
            "color": "var(--mau-chu-menu-noi)"
        });
        $(this).css({
            "margin-left": "94px"
        });
        $(this).children().css({
            right: "-50vw"
        });
        $(".menu-phu:eq(1)").toggle(400);
        y = 0;
    }
})

$(".menu-phu a").click(function(){
    gsap.to("#nut-menu div", {
        duration: 0.2,
        delay: 0.2,
        backgroundColor: "var(--mau-nut-menu)"
    });
    gsap.to("#nut-menu div:nth-child(3)", {
        duration: 0.2,
        rotate: 0
    });
    gsap.to("#nut-menu div:nth-child(2)", {
        duration: 0.2,
        rotate: 0
    });
    gsap.to("#nut-menu div:nth-child(1)", {
        duration: 0.2,
        delay: 0.2,
        top: "0px",
        opacity: 1
    });
    gsap.to("#nut-menu div:nth-child(3)", {
        duration: 0.2,
        delay: 0.2,
        bottom: "0px"
    });
    gsap.to("#menu-nho", {
        duration: 0.6,
        ease: "power4.in",
        right: "-105vw"
    });
    gsap.to("#chu-de", {
        duration: 0.4,
        ease: "expo.out",
        top: -30
    });
    z = 0;
})

/* Menu xo */
$(".menu-lon__nut").mouseover(function () {
    $(this).children().stop(true, false, true).fadeIn(100).css({
        "top": "60px"
    });
    $(".menu-lon__muc::before").show();
})
$(".menu-lon__nut").mouseout(function () {
    $(this).children().fadeOut(100).css({
        "top": "75px"
    });
})

/* Pop up */

$(".popup").hide();
$(".san-pham__anh").click(function () {
    $("#anh-lon").fadeIn(400);
})
$(".popup__x").click(function () {
    $(".popup").fadeOut(400);
})
$(".popup__ngoai").click(function () {
    $(".popup").fadeOut(400);
})

/* Banner cac 50% */

var h = $(window).height();

//function banner() {
    var hh = (h - 60) / 2;
    $(".carousel-item").css({
        "height": hh
    });
//}

$(window).resize(function () {
    var h = $(window).height();
    var hh = (h - 60) / 2;
    $(".carousel-item").css({
        "height": hh
    });
})

/* Hover drop shadow height */

HoverW = $(".san-pham img").width();
HoverH = HoverW;

