(function(){const e=()=>{const n=document.querySelectorAll(".single_hero_background"),s=window.pageYOffset||document.documentElement.scrollTop||0,o=400,e=8,i=48,a=Math.min(s/o,1),t=e+(i-e)*a;n.forEach(e=>{e.style.backdropFilter=`blur(${t}px)`,e.style.webkitBackdropFilter=`blur(${t}px)`})};window.addEventListener("scroll",e),window.addEventListener("load",e),e()})(),function(){const e=document.createElement("canvas");e.id="matrix-rain",e.style.cssText=`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
    opacity: 0.15;
  `,document.body.appendChild(e);const n=e.getContext("2d");let o,i,a,t;const l="01アイウエオカキクケコサシスセソタチツテト",r=l.split(""),s=14;function c(){o=e.width=window.innerWidth,i=e.height=window.innerHeight,a=Math.floor(o/s),t=Array(a).fill(1)}function d(){n.fillStyle="rgba(0, 0, 0, 0.05)",n.fillRect(0,0,o,i),n.fillStyle="#00ff41",n.font=`${s}px monospace`;for(let e=0;e<t.length;e++){const o=r[Math.floor(Math.random()*r.length)],a=e*s,c=t[e]*s;n.fillText(o,a,c),t[e]*s>i&&Math.random()>.975&&(t[e]=0),t[e]++}}c(),window.addEventListener("resize",c),setInterval(d,50)}()