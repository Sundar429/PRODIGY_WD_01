
//Hamburger Menu
const menuBtn=document.getElementById("menu-btn");
const navlinks=document.getElementById("nav-links");
const menuBtnIcon=document.querySelector("i");
menuBtn.addEventListener('click',(e)=>{
    navlinks.classList.toggle("open")

    const isOpen=navlinks.classList.contains("open")
    menuBtnIcon.setAttribute("class",isOpen?"ri-close-line" : "ri-menu-line ")
})

navlinks.addEventListener('click',(e)=>{
    navlinks.classList.remove("open")
    menuBtnIcon.setAttribute("class", "ri-menu-line ")
})


//header content scroll
const scrollOption={
    distance:"50px",
    origin:"bottom",
    duration:1000
}

ScrollReveal().reveal(".header_image img",{
    ...scrollOption,
    origin:"right"
})
ScrollReveal().reveal(".header_content h1",{
    ...scrollOption,
     delay:500,
})
ScrollReveal().reveal(".header_content .section_description",{
    ...scrollOption,

    delay:1000,
})
ScrollReveal().reveal(".header_content .header_btn",{
    ...scrollOption,

    delay:1500,
})

//Section scroll
ScrollReveal().reveal(".explore_image img",{
    ...scrollOption,
    origin:"left"
})
ScrollReveal().reveal(".explore_content .section_header",{
    ...scrollOption,
     delay:500,
})
ScrollReveal().reveal(".explore_content .section_description",{
    ...scrollOption,

    delay:1000,
})
ScrollReveal().reveal(".explore_content .explore_btn",{
    ...scrollOption,

    delay:1500,
})

//Banner card
ScrollReveal().reveal(".banner_card",{
   ...scrollOption,
   interval:500
})


ScrollReveal().reveal(".chef_image img",{
    ...scrollOption,
    origin:"right"
})
ScrollReveal().reveal(".chef_content .section_header",{
    ...scrollOption,
     delay:500,
})
ScrollReveal().reveal(".chef_content .section_description",{
    ...scrollOption,

    delay:1000,
})
ScrollReveal().reveal(".chef_list li",{
    ...scrollOption,

    delay:1500,
    interval:500,
})

const swiper=new Swiper(".swiper",{
    loop:true,

    pagination:{
        el:".swiper-pagination"
    },
})