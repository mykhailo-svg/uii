const startBl=document.querySelector(".start"),headerBlock=document.querySelector(".header"),headerHeight=headerBlock.offsetHeight;let headerHighlighted=!1;const startHeight=document.querySelector(".start").offsetHeight,scrolled=window.scrollY,animItems=document.querySelectorAll("._anim-items");if(animItems.length>0){function e(){console.log(scrolled),window.scrollY>startHeight+headerHeight?(headerBlock.classList.add("header__scroll"),headerHighlighted=!0):window.scrollY<startHeight+headerHeight&&(headerBlock.classList.remove("header__scroll"),headerHighlighted=!1);for(let e=0;e<animItems.length;e++){let r=animItems[e],l=r.offsetHeight,o=t(r).top,s=window.innerHeight-l/2;l>window.innerHeight&&(s=window.innerHeight-window.innerHeight/2),pageYOffset>o-s&&pageYOffset<o+l?r.classList.add("an_active"):r.classList.contains("_anim-no-hide")||r.classList.remove("an_active")}}function t(e){let t=e.getBoundingClientRect(),r=window.pageXOffset||document.documentElement.scrollLeft;return scrollTop=window.pageYOffset||document.documentElement.scrollTop,{top:t.top+scrollTop,left:t.left+r}}window.addEventListener("scroll",e),console.log("h"),setTimeout(()=>{e()},400)}function headerLight(){}window.addEventListener("scroll",headerLight);const burgerButton=document.querySelector(".burger__button"),burgerBody=document.querySelector(".burger__body"),burgDecor=document.querySelector(".burger__decor"),burgerButtonDecors=document.querySelectorAll(".burger__button__decor"),mainBody=document.querySelector("body");burgerButton.addEventListener("click",function(){mainBody.classList.toggle("body_noScroll"),burgDecor.classList.toggle("burger__dec__active"),!0==headerHighlighted&&headerBlock.classList.toggle("header__scroll"),burgerBody.classList.length<2||burgerBody.classList.toggle("burger__hide"),burgerBody.classList.toggle("burger__show");for(let e=0;e<burgerButtonDecors.length;e++)burgerButtonDecors[e].classList.toggle("burger__dec__active")});