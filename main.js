(()=>{"use strict";class t{constructor(){this.liker=document.querySelector("#liker"),this.button=document.querySelector(".lik-btn")}events(){this.button.addEventListener("click",(()=>{this.addImg()}))}addImg(){const e=document.createElement("div");this.liker.insertBefore(e,this.button),e.classList.add("img");const s=Math.ceil(4*Math.random());e.classList.add(`heart-${s}`),t.removeImg(e)}static removeImg(t){t.addEventListener("animationend",(()=>{t.remove()}))}}console.log("app started");const e=new class{constructor(){this.button=document.querySelector(".col-btn"),this.div=document.querySelector(".col-div")}events(){this.button.addEventListener("click",(()=>{const t=this.div.scrollHeight;this.div.style.height===`${t}px`?this.div.style=null:this.div.style.height=`${t}px`}))}},s=new class{constructor(){this.button=document.querySelector(".call-btn"),this.form=document.querySelector(".call-form"),this.formClose=document.querySelector(".call-form-close"),this.formButton=document.querySelector(".call-form-btn")}events(){this.redButtonClick(),this.closeClick(this.formClose),this.closeClick(this.formButton)}redButtonClick(){this.button.addEventListener("click",(()=>{this.form.classList.contains("none")&&(this.form.classList.remove("none"),this.button.classList.add("none"))}))}closeClick(t){t.addEventListener("click",(()=>{this.form.classList.contains("none")||(this.form.classList.add("none"),this.button.classList.remove("none"))}))}},o=new t;e.events(),s.events(),o.events()})();