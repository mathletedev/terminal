(()=>{"use strict";const e="#61afef",t="#c678dd",o=/Mobi/.test(navigator.userAgent);let l=document.querySelector("#root"),c=document.querySelector("#line"),n=document.querySelector("input"),r=document.querySelector("#cursor"),d=0;const a=(e,t)=>{if(!e){const e=document.createElement("br");return e.className="text",l.insertBefore(e,c),c.scrollIntoView()}let o=document.createElement("span");o.innerHTML=e,o.style.color=t||"#dcdfe4",o.className="text",l.insertBefore(o,c)},u=(e,t)=>{a(e,t),a()},s=()=>{for(const e of document.querySelectorAll(".text"))e.remove()},i=[["User","MathleteDev"],["OS","Arch Linux"],["Language","TypeScript"],["Grade","Freshman"],["Subject","Math"],["Hobby","Violin"]],x=(l,c)=>{if(o)return u(l);a(`${l}${" ".repeat(34-l.length)}`),(o=>{if("string"==typeof o)return a(o,t);a(i[o][0],e),a(" => ","#56b6c2"),a(i[o][1],"#98c379")})(c),a()};a(),o&&(u("        neo@mathletedev",t),u("        ---------------",t)),x("               WWNNWW    WNXXW","neo@delta"),x("          WXOdlccc::cldxdl:,:K","---------"),x("        W0o;,,,,,,,'',:::;,'lN",0),x("      WKo'.';;::clloddoc:c:,xW",1),x(" WXkdoc,.,clodxxxxxxdl:col,.lX",2),x(" WO:.''.':llooddxddl::looc'.'xW",3),x("  WXxc'.;oolllllc:;:loooo;,;.lN",4),x("     Xl.,lxkkkkkdc,:ododl,::.oN",5),u("      O;.';cdkkkkdc:cooo:,:,,O"),u("      Wk;';;;:oxkkxl:ldl,.',kW"),u("       W0l,,;,,:oxkxc:c;.'l0W"),u("         W0dc;,..,;;,...:OW"),u("            WX0Okxdc,..'xW"),u("                   W0o,:K"),u("                     WXXW"),a(),a("Type "),a("help",e),u(" to begin!"),window.onkeydown=e=>{if(n.focus(),d=Date.now(),"l"===e.key&&e.ctrlKey)return s(),e.preventDefault();"Enter"===e.key&&("clear"===n.value?s():u(n.value),n.value="")},n.onblur=()=>n.focus();const W=()=>{requestAnimationFrame(W),r.style.height=d+500>Date.now()?"18px":18-18*Math.pow(Math.sin(Date.now()/300),4)+"px";const e=22-window.innerWidth+10.55*(n.selectionStart+1);r.style.left=e>0?"0px":`${e}px`};requestAnimationFrame(W)})();