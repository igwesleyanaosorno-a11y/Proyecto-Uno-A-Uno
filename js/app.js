/*=========================================
    LANDING PAGE IGLESIA WESLEYANA
==========================================*/

/*==========================
    ANIMACIÓN SCROLL
==========================*/

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.20
});


document.querySelectorAll(

".welcome, .speaker-card, .service-section, .gallery-item, .uno"

).forEach(item=>{

    item.classList.add("fade-up");

    observer.observe(item);

});


/*==========================
    PARALLAX HERO
==========================*/

const hero=document.querySelector(".hero");

window.addEventListener("scroll",()=>{

    const y=window.scrollY;

    hero.style.transform=`translateY(${y*.18}px)`;

});


/*==========================
    HEADER
==========================*/

const header=document.querySelector(".header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>100){

        header.style.background="rgba(8,8,8,.85)";

        header.style.backdropFilter="blur(15px)";

        header.style.position="fixed";

        header.style.top="0";

        header.style.left="0";

        header.style.width="100%";

        header.style.zIndex="999";

        header.style.transition=".35s";

    }else{

        header.style.background="transparent";

        header.style.position="relative";

        header.style.backdropFilter="none";

    }

});


/*==========================
    EFECTO TARJETAS
==========================*/

document.querySelectorAll(".speaker-card").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        card.style.transform=

        `perspective(1000px)
         rotateY(${(x-rect.width/2)/18}deg)
         rotateX(${-(y-rect.height/2)/18}deg)
         translateY(-8px)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="rotateX(0) rotateY(0)";

    });

});


/*==========================
    GALERÍA
==========================*/

document.querySelectorAll(".gallery-item img")

.forEach(img=>{

    img.addEventListener("mouseenter",()=>{

        img.style.transform="scale(1.08)";

    });

    img.addEventListener("mouseleave",()=>{

        img.style.transform="scale(1)";

    });

});


/*==========================
    BOTONES
==========================*/

document.querySelectorAll(".btn")

.forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="translateY(-4px)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="translateY(0px)";

    });

});


/*==========================
    SCROLL SUAVE
==========================*/

document.querySelectorAll("a[href^='#']").forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const destino=document.querySelector(this.getAttribute("href"));

        if(destino){

            destino.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/*==========================
    AÑO FOOTER
==========================*/

const footer=document.querySelector("footer small");

if(footer){

    footer.innerHTML=

    `© ${new Date().getFullYear()} Iglesia Wesleyana. Todos los derechos reservados.`;

}


/*==========================
    PRELOADER
==========================*/

window.addEventListener("load",()=>{

    document.body.style.opacity="1";

});


/*==========================
    EFECTO LOGO
==========================*/

const logo=document.querySelector(".logo");

setInterval(()=>{

    logo.animate([

        {transform:"scale(1)"},

        {transform:"scale(1.03)"},

        {transform:"scale(1)"}

    ],{

        duration:2500

    });

},3000);