(function(){const e=()=>{const n=document.querySelectorAll(".single_hero_background"),s=window.pageYOffset||document.documentElement.scrollTop||0,o=400,e=8,i=48,a=Math.min(s/o,1),t=e+(i-e)*a;n.forEach(e=>{e.style.backdropFilter=`blur(${t}px)`,e.style.webkitBackdropFilter=`blur(${t}px)`})};window.addEventListener("scroll",e),window.addEventListener("load",e),e()})(),function(){const e=document.createElement("canvas");e.id="matrix-rain",e.style.cssText=`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
    opacity: 0.1;
  `,document.body.appendChild(e);const n=e.getContext("2d");let s,o,a,t;const r=["solver","constraint","variable","model","solve()","@constraint","def","class","for","if","return","schedule","route","assign","minimize","maximize","sum()","min()","max()","count()","all_different","x + y","i * j","== 0","!= 1","<= n",">= k","Vehicle","Employee","Task","Shift","Meeting","capacity","duration","start","end","total","optimal","feasible","infeasible","search","backtrack","propagate","domain","value"],i=13;function c(){s=e.width=window.innerWidth,o=e.height=window.innerHeight,a=Math.floor(s/120),t=Array(a).fill(1)}function l(){n.fillStyle="rgba(0, 0, 0, 0.05)",n.fillRect(0,0,s,o),n.fillStyle="#00ff41",n.font=`${i}px monospace`;for(let e=0;e<t.length;e++){if(Math.random()>.88){const s=r[Math.floor(Math.random()*r.length)],o=e*120,a=t[e]*i;n.fillText(s,o,a)}t[e]*i>o&&Math.random()>.97&&(t[e]=0),t[e]++}}c(),window.addEventListener("resize",c),setInterval(l,60)}()