(()=>{"use strict";let e=document.querySelector("#root"),t=document.querySelector("#line"),r=document.querySelector("#cursor");const o=(r,o)=>{if(!r)return void e.insertBefore(document.createElement("br"),t);let n=document.createElement("span");n.innerHTML=r,n.style.color=o||"#dcdfe4",e.insertBefore(n,t)};o("Hello, ","#e06c75"),o("world!","#98c379"),o(),o("MathleteDev");const n=()=>{requestAnimationFrame(n),r.style.height=23-23*Math.pow(Math.sin(Date.now()/300),4)+"px"};requestAnimationFrame(n)})();