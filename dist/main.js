(()=>{"use strict";function n(n){const t=n;t.style.visibility="visible",t.style.padding="12px",t.style.backgroundColor="white"}function t(n){n.style.visibility="hidden"}(e=>{document.querySelector("#content").innerHTML="\n    <div class ='dropdown'>\n    <button id ='dropdownButton'>Button</button>\n    <div id ='dropdownContent'>\n      <a href='#' style = 'display: block'>Link 1</a>\n      <a href='#' style = 'display: block'>Link 2</a>\n      <a href='#' style = 'display: block'>Link 3</a>\n    </div>\n  </div>\n  ";const o=document.getElementById("dropdownContent"),d=document.getElementById("dropdownButton");t(o),d.addEventListener("mouseover",(()=>{n(o)})),o.addEventListener("mouseover",(()=>{n(o)})),o.addEventListener("mouseout",(()=>{t(o)}))})()})();