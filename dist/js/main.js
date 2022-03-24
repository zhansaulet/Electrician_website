(()=>{"use strict";(()=>{document.getElementsByClassName("callback-btn fancyboxModal hidden-xs")[0];const e=document.querySelector(".modal-callback"),t=document.querySelector(".modal-overlay");document.querySelector(".modal-close"),document.addEventListener("click",(o=>{(o.target.matches(".callback-btn")||o.target.matches(".button-services"))&&(o.preventDefault(),e.style.display="block",t.style.display="block"),(o.target.matches(".modal-overlay")||o.target.closest(".modal-close"))&&(e.style.display="none",t.style.display="none")}))})(),document.querySelectorAll(".top-menu>ul>li").forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault();let t=e.target.getAttribute("href").substring(1);const o=document.getElementById(t).getBoundingClientRect().top-50;window.scrollBy({top:o,behavior:"smooth"})}))})),(()=>{const e=document.querySelector(".mob-menu-btn"),t=document.querySelector(".mobile-menu"),o=document.querySelector(".overlay"),n=document.querySelector(".mobile-menu-close"),l=t.querySelectorAll("ul>li>a"),r=()=>{t.classList.toggle("open")};e.style.cursor="pointer",n.style.cursor="pointer",e.addEventListener("click",r),n.addEventListener("click",r),o.addEventListener("click",r),l.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),r();let t=e.target.getAttribute("href").substring(1);const o=document.getElementById(t).getBoundingClientRect().top-50;window.scrollBy({top:o,behavior:"smooth"})}))}))})(),(()=>{const e=document.querySelector(".logo.left>a"),t=document.querySelector(".header-email"),o=document.querySelector(".header-tel");e.href="index.html",t.innerHTML=`<a>${t.innerHTML}</a>`,t.childNodes[0].href="mailto:info@sitename.com",t.cursor="pointer",o.innerHTML=`<a>${o.innerHTML}</a>`,o.childNodes[0].href="tel:8(987)654-32-10",o.cursor="pointer"})(),(()=>{const e=document.querySelector(".form-group>input[name='fio']"),t=document.querySelector(".form-group>input[name='tel']");e.addEventListener("input",(e=>{e.preventDefault(),e.target.value=e.target.value.replace(/[^а-яА-Я]/g,"")})),e.addEventListener("blur",(e=>{e.preventDefault(),e.target.value=e.target.value.replace(/^[а-я]/g,(function(e){return e.toUpperCase()})),e.target.value=e.target.value.replace(/(?!^)[А-Я]/g,(function(e){return e.toLowerCase()}))})),t.addEventListener("input",(e=>{e.preventDefault(),e.target.value=e.target.value.replace(/[^0-9\+]/g,"")})),t.addEventListener("blur",(e=>{e.preventDefault(),e.target.value=e.target.value.replace(/\++/g,"+"),e.target.value=e.target.value.replace(/[+]$/g,"")}))})(),(()=>{document.querySelector(".top-slider");const e=document.querySelectorAll(".table"),t=document.querySelectorAll(".item.relative");let o=0;setInterval((()=>{var n,l;n=t,e[l=o].classList.remove("active"),n[l].style.opacity="0",n[l].style.transition="opacity 1s",n[l].style.left="-100%",o++,o>=e.length&&(o=0),((e,t,o,n)=>{e[o].classList.add("active"),t[o].style.opacity="1",t[o].style.transition="opacity 1s",t[o].style.top=100*-o+"%",t[o].style.left="0%"})(e,t,o)}),3e3)})(),(()=>{const e=document.querySelector(".accordeon"),t=document.querySelectorAll(".accordeon>.element"),o=(document.querySelectorAll(".accordeon>.element>.title"),document.querySelectorAll(".accordeon>.element>.element-content")),n=getComputedStyle(o[0]).height;t.forEach(((e,t)=>{o[t].style.height="0px",o[t].style.padding="0px 20px 0px 20px",o[t].style.padding="0px",o[t].style.overflow="hidden"})),e.addEventListener("click",(e=>{if(e.target.closest(".accordeon>.element")){const l=e.target.closest(".accordeon>.element");t.forEach(((e,t)=>{e!==l||e.classList.contains("active")?e===l&&e.classList.contains("active")?(e.classList.remove("active"),o[t].style.height="0px",o[t].style.padding="0px 20px 0px 20px",o[t].style.overflow="hidden",o[t].style.transition="1s ease height",o[t].style.transition="1s ease padding"):(e.classList.remove("active"),o[t].style.height="0px",o[t].style.padding="0px 20px 0px 20px",o[t].style.transition="1s ease height",o[t].style.transition="1s ease padding",o[t].style.overflow="hidden"):(e.classList.add("active"),o[t].style.height=n,o[t].style.padding="20px 20px 20px 20px",o[t].style.overflow="visible",o[t].style.transition="1s ease height",o[t].style.transition="1s ease padding")}))}}))})(),(()=>{const e=document.querySelector(".num-section"),t=document.querySelectorAll(".num"),o=document.querySelectorAll(".num>span"),n=[200,14,20,150],l=()=>{let t=e.getBoundingClientRect(),o=document.documentElement.clientHeight,n=t.top>0&&t.top<o,l=t.bottom<o&&t.bottom>0;return n&&l};window.addEventListener("scroll",(()=>{console.log(l()),o.forEach(((e,o)=>{if(l()){const l=n[o];t[o].classList.add("animated");const r=setInterval((()=>{const t=+e.innerText,o=l/200;t<l?e.innerText=Math.ceil(t+o):clearInterval(r)}),1)}else t[o].classList.remove("animated"),e.innerText="0"}))}))})(),(()=>{const e=document.querySelector(".up"),t=document.querySelector(".services-section"),o=document.querySelector(".top-slider");e.style.display="none",window.addEventListener("scroll",(n=>{let l=t.getBoundingClientRect(),r=o.getBoundingClientRect(),c=document.documentElement.clientHeight,a=(l.top>0&&l.top,r.bottom-100>0&&r.bottom<c);e.style.display=a?"none":"block"})),e.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})}))})(),(({formId:e,someElem:t=[]})=>{const o=document.getElementById(e),n=document.createElement("div");try{if(!o)throw new Error("Верните форму на место, пожалуйста!");o.addEventListener("submit",(e=>{e.preventDefault(),(()=>{const e=o.querySelectorAll("input"),l=new FormData(o),r={};var c;l.forEach(((e,t)=>{r[t]=e})),t.forEach((e=>{const t=document.getElementById(e.id);"block"===e.type&&"0"!==t.textContent?r[e.id]=t.textContent:"input"===e.type&&0!==t.value&&(r[e.id]=t.value)})),(e=>{let t=!0;return e.forEach((e=>{"fio"===e.name&&(/[^а-яА-Я]/g.test(e.value)||""===e.value||e.value.length<2)&&(alert("Введите ваше имя на кириллице, имя должно состоять минимум из двух букв"),t=!1),"tel"!==e.name||/^[\+]?\(?([0-9]{4})\)?([-]?)([0-9]{3})\2([0-9]{4})+$/g.test(e.value)&&""!==e.value||(alert("Введите корректный номер телефона: 11 цифр начиная с кода"),t=!1)})),t})(e)?(n.textContent="Загрузка...",n.style.color="#000",n.style.font="inherit",o.append(n),(c=r,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(c),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))).then((t=>{n.textContent="Спасибо! Наш менеджер с вами свяжется!",e.forEach((e=>{"submit"!==e.type&&(e.value="")})),setTimeout((()=>{o.removeChild(n)}),2e3)})).catch((e=>{n.textContent="Ошибка..."}))):alert("Данные не валидны!!!")})()}))}catch(e){console.log(e.message)}})({formId:"form1",someElem:[{}]})})();