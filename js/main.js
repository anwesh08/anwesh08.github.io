/*----- PreLoader -----*/

/*window.addEventListener("load", function(){
    document.querySelector(".preloader").classList.add("opacity-0");
    setTimeout(() =>{
        document.querySelector(".preloader").style.display = "none";
    },1500)
})*/

/*----- Project Items -----*/
/*const projectItems = document.querySelectorAll(".project-item"),
      totalprojectItem = projectItems.length;

const lightbox = document.querySelector(".lightbox"),
      lightboxImg = lightbox.querySelector(".lightbox-img"),
      lightboxClose = lightbox.querySelector(".lightbox-close"),
      lightboxText = lightbox.querySelector(".caption-text"),
      lightboxCounter = lightbox.querySelector(".caption-counter");
let itemIndex = 0;
 
for(let i = 0; i < totalprojectItem; i++){
    projectItems[i].addEventListener("click", function(){
        itemIndex = i;
        changeItem();
        togglelightbox();
    })
}
function nextItem(){
    if(itemIndex == totalprojectItem-1){
        itemIndex = 0;
    }
    else{
        itemIndex++;
    }
    changeItem();
}
function prevItem(){
    if(itemIndex == 0){
        itemIndex = totalprojectItem-1;
    }
    else{
        itemIndex--;
    }
    changeItem();
}
function togglelightbox(){
    lightbox.classList.toggle("open");
}
function changeItem() {
    imgSrc = projectItems[itemIndex].querySelector(".project-img img").getAttribute("src");
    lightboxImg.src = imgSrc;
    lightboxText.innerHTML = projectItems[itemIndex].querySelector("h4").innerHTML;
    lightboxCounter.innerHTML = (itemIndex+1) + " of " + totalprojectItem;
}*/

/*----- About Section Tabs -----*/

(() =>{
    const aboutSection = document.querySelector(".about-content"),
    tabsContainer = document.querySelector(".about-tabs");

    tabsContainer.addEventListener("click", (event) =>{
        /* If event.target contains 'tab-item' class and not contains 'active' class */
        if(event.target.classList.contains("tab-item") && !event.target.classList.contains("active")){
            const target = event.target.getAttribute("data-target");
            // Deactivate Existing Active 'tab-item'
            tabsContainer.querySelector(".active").classList.remove("outer-shadow","active");
            // Activate New 'tab-item'
            event.target.classList.add("active","outer-shadow");
            // Deactivate Existing Active 'tab-content'
            aboutSection.querySelector(".tab-content.active").classList.remove("active");
            // Activate New 'tab-content'
            aboutSection.querySelector(target).classList.add("active");
        }
    })
})();

/*----- Aside Navbar -----*/

const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;

for(let i = 0; i < totalNavList; i++){
    const a = navList[i].querySelector("a");
    a.addEventListener("click",function(){
        for(let i = 0; i < totalSection; i++){
            allSection[i].classList.remove("back-section");
        }
        for(let j = 0; j < totalNavList; j++){
            if(navList[j].querySelector("a").classList.contains("active")){
                allSection[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);
        if(window.innerWidth < 1200){
            asideSectionTogglerBtn();
        }
    })
}

function showSection(element){
    for(let i = 0; i < totalSection; i++){
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#"+target).classList.add("active")
}

function updateNav(element){
    for(let i = 0; i < totalNavList; i++){
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
            navList[i].querySelector("a").classList.add("active");
        }
    }
}

const navTogglerBtn = document.querySelector(".nav-toggler"),
      aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click",() =>{
    asideSectionTogglerBtn();
})

function asideSectionTogglerBtn(){
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for(let i = 0; i < totalSection; i++){
        allSection[i].classList.toggle("open");
    }
}

/*----- Style Switcher -----*/

const links = document.querySelectorAll(".alternate-style"),
      totalLinks = links.length;

function setActiveStyle(color){
    for(let i = 0; i < totalLinks; i++){
        if(color == links[i].getAttribute("title")){
            links[i].removeAttribute("disabled");
        }
        else{
            links[i].setAttribute("disabled","true");
        }
    }
}

const bodySkin = document.querySelectorAll(".body-skin"),
      totalBodyskin = bodySkin.length;
  for(let i = 0; i < totalBodyskin; i++){
      bodySkin[i].addEventListener("change",function(){
          if(this.value === "dark"){
              document.body.className = "dark";
          }
          else{
              document.body.className = "";
          }
      })
  }


document.querySelector(".toggle-style-switcher").addEventListener("click",function(){
    document.querySelector(".style-switcher").classList.toggle("open");
})