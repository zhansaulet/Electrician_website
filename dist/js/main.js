(()=>{"use strict";(()=>{document.getElementsByClassName("callback-btn fancyboxModal hidden-xs")[0];const e=document.querySelector(".modal-callback"),t=document.querySelector(".modal-overlay");document.querySelector(".modal-close"),document.addEventListener("click",(l=>{(l.target.matches(".callback-btn")||l.target.matches(".button-services"))&&(l.preventDefault(),e.style.display="block",t.style.display="block"),(l.target.matches(".modal-overlay")||l.target.closest(".modal-close"))&&(e.style.display="none",t.style.display="none")}))})(),document.querySelectorAll(".top-menu>ul>li").forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault();let t=e.target.getAttribute("href").substring(1);const l=document.getElementById(t).getBoundingClientRect().top-50;window.scrollBy({top:l,behavior:"smooth"})}))})),(()=>{const e=document.querySelector(".mob-menu-btn"),t=document.querySelector(".mobile-menu"),l=document.querySelector(".overlay"),o=document.querySelector(".mobile-menu-close"),n=t.querySelectorAll("ul>li>a"),r=()=>{t.classList.toggle("open")};e.style.cursor="pointer",o.style.cursor="pointer",e.addEventListener("click",r),o.addEventListener("click",r),l.addEventListener("click",r),n.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),r();let t=e.target.getAttribute("href").substring(1);const l=document.getElementById(t).getBoundingClientRect().top-50;window.scrollBy({top:l,behavior:"smooth"})}))}))})(),(()=>{const e=document.querySelector(".logo.left>a"),t=document.querySelector(".header-email"),l=document.querySelector(".header-tel");e.href="index.html",t.innerHTML=`<a>${t.innerHTML}</a>`,t.childNodes[0].href="mailto:info@sitename.com",t.cursor="pointer",l.innerHTML=`<a>${l.innerHTML}</a>`,l.childNodes[0].href="tel:8(987)654-32-10",l.cursor="pointer"})(),(()=>{const e=document.querySelector(".form-group>input[name='fio']"),t=document.querySelector(".form-group>input[name='tel']");e.addEventListener("input",(e=>{e.preventDefault(),e.target.value=e.target.value.replace(/[^а-яА-Я]/g,"")})),e.addEventListener("blur",(e=>{e.preventDefault(),e.target.value=e.target.value.replace(/^[а-я]/g,(function(e){return e.toUpperCase()})),e.target.value=e.target.value.replace(/(?!^)[А-Я]/g,(function(e){return e.toLowerCase()}))})),t.addEventListener("input",(e=>{e.preventDefault(),e.target.value=e.target.value.replace(/[^0-9\+]/g,"")})),t.addEventListener("blur",(e=>{e.preventDefault(),e.target.value=e.target.value.replace(/\++/g,"+"),e.target.value=e.target.value.replace(/[+]$/g,"")}))})(),(()=>{document.querySelector(".top-slider");const e=document.querySelectorAll(".table"),t=document.querySelectorAll(".item.relative"),l=document.querySelectorAll(".slick-dots>li");let o=0;setInterval((()=>{var n,r,c;n=l,r=t,e[c=o].classList.remove("active"),n[c].classList.remove("slick-active"),r[c].style.opacity="0",r[c].style.transition="opacity 1s",r[c].style.left="-100%",o++,o>=e.length&&(o=0),((e,t,l,o,n,r)=>{e[o].classList.add("active"),t[o].classList.add("slick-active"),l[o].style.opacity="1",l[o].style.transition="opacity 1s",l[o].style.top=100*-o+"%",l[o].style.left="0%"})(e,l,t,o)}),3e3)})(),(()=>{const e=document.querySelector(".accordeon"),t=document.querySelectorAll(".accordeon>.element"),l=(document.querySelectorAll(".accordeon>.element>.title"),document.querySelectorAll(".accordeon>.element>.element-content")),o=getComputedStyle(l[0]).height;t.forEach(((e,t)=>{l[t].style.height="0px",l[t].style.padding="0px 20px 0px 20px",l[t].style.padding="0px",l[t].style.overflow="hidden"})),e.addEventListener("click",(e=>{if(e.target.closest(".accordeon>.element")){const n=e.target.closest(".accordeon>.element");t.forEach(((e,t)=>{e!==n||e.classList.contains("active")?e===n&&e.classList.contains("active")?(e.classList.remove("active"),l[t].style.height="0px",l[t].style.padding="0px 20px 0px 20px",l[t].style.overflow="hidden",l[t].style.transition="1s ease height",l[t].style.transition="1s ease padding"):(e.classList.remove("active"),l[t].style.height="0px",l[t].style.padding="0px 20px 0px 20px",l[t].style.transition="1s ease height",l[t].style.transition="1s ease padding",l[t].style.overflow="hidden"):(e.classList.add("active"),l[t].style.height=o,l[t].style.padding="20px 20px 20px 20px",l[t].style.overflow="visible",l[t].style.transition="1s ease height",l[t].style.transition="1s ease padding")}))}}))})(),(()=>{const e=document.querySelector(".num-section"),t=document.querySelectorAll(".num"),l=document.querySelectorAll(".num>span"),o=[200,14,20,150],n=()=>{l.forEach(((l,r)=>{if((()=>{let t=e.getBoundingClientRect(),l=document.documentElement.clientHeight,o=t.top>0&&t.top<l,n=t.bottom<l&&t.bottom>0;return o||n})()){const e=o[r];t[r].classList.add("animated");const c=setInterval((()=>{const t=+l.innerText,o=e/200;t<e?l.innerText=Math.ceil(t+o):(clearInterval(c),window.removeEventListener("scroll",n))}),1)}else t[r].classList.remove("animated"),l.innerText="0"}))};window.addEventListener("scroll",n)})(),(()=>{const e=document.querySelector(".up"),t=document.querySelector(".services-section"),l=document.querySelector(".top-slider");e.style.display="none",window.addEventListener("scroll",(o=>{let n=t.getBoundingClientRect(),r=l.getBoundingClientRect(),c=document.documentElement.clientHeight,a=(n.top>0&&n.top,r.bottom-100>0&&r.bottom<c);e.style.display=a?"none":"block"})),e.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})}))})(),(({formId:e,someElem:t=[]})=>{const l=document.getElementById(e),o=document.querySelector(".modal-callback"),n=document.querySelector(".modal-overlay"),r=document.createElement("div");try{if(!l)throw new Error("Верните форму на место, пожалуйста!");l.addEventListener("submit",(e=>{e.preventDefault(),(()=>{const e=l.querySelectorAll("input"),c=new FormData(l),a={};var s;c.forEach(((e,t)=>{a[t]=e})),t.forEach((e=>{const t=document.getElementById(e.id);"block"===e.type&&"0"!==t.textContent?a[e.id]=t.textContent:"input"===e.type&&0!==t.value&&(a[e.id]=t.value)})),(e=>{let t=!0;return e.forEach((e=>{"fio"===e.name&&(/[^а-яА-Я]/g.test(e.value)||""===e.value||e.value.length<2)&&(alert("Введите ваше имя на кириллице, имя должно состоять минимум из двух букв"),t=!1),"tel"!==e.name||/^[\+]?\(?([0-9]{4})\)?([-]?)([0-9]{3})\2([0-9]{4})+$/g.test(e.value)&&""!==e.value||(alert("Введите корректный номер телефона: 11 цифр начиная с кода"),t=!1)})),t})(e)?(r.textContent="Загрузка...",r.style.color="#000",r.style.font="inherit",l.append(r),(s=a,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))).then((t=>{r.textContent="Спасибо! Наш менеджер с вами свяжется!",e.forEach((e=>{"submit"!==e.type&&(e.value="")})),setTimeout((()=>{l.removeChild(r)}),2e3),setTimeout((()=>{o.style.display="none",n.style.display="none"}),1e3)})).catch((e=>{r.textContent="Ошибка..."}))):alert("Данные не валидны!!!")})()}))}catch(e){console.log(e.message)}})({formId:"form1",someElem:[{}]}),(()=>{document.querySelector(".services-elements");const e=document.querySelectorAll(".element.relative"),t=document.querySelectorAll(".col-sm-6.col-md-4"),l=(document.querySelectorAll(".absolute.fancyboxModal"),document.querySelector(".modal-callback")),o=document.querySelector(".modal-overlay"),n=document.querySelector(".arrow-left"),r=document.querySelector(".arrow-right"),c=window.innerWidth;let a,s=0;c>=992?a=3:c<=991&&c>=768?a=2:c<767&&(a=1),n.addEventListener("click",(e=>{s>0&&(s--,t[s].style.display="block")})),r.addEventListener("click",(e=>{s<6-a&&(t.forEach(((e,l)=>{t[s].style.display="none"})),s++)})),e.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),e.target.classList.contains("img-wrapper")&&(l.style.display="block",o.style.display="block")}))}))})()})();