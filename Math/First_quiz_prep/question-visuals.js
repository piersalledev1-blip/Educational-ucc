/* Small dependency-free SVG visual tools used by selected MAT 101 questions. */
(() => {
  const NS = "http://www.w3.org/2000/svg";
  const $ = id => document.getElementById(id);
  const el = (tag, attrs = {}, parent) => {
    const node = document.createElementNS(NS, tag);
    Object.entries(attrs).forEach(([k,v]) => node.setAttribute(k, String(v)));
    if (parent) parent.appendChild(node);
    return node;
  };
  const svgBase = () => {
    const svg = el("svg", {viewBox:"0 0 560 250", role:"img", "aria-label":"Interactive mathematical diagram"});
    return svg;
  };
  const htmlNode = (tag, cls, text, parent) => {
    const n=document.createElement(tag);
    if(cls)n.className=cls;
    if(text!==undefined)n.textContent=text;
    if(parent)parent.appendChild(n);
    return n;
  };
  const fmt = n => Number(n.toFixed(3)).toString().replace("-", "−");

  function numberLine(host,cfg){
    const svg=svgBase(), left=42,right=518,y=92,min=cfg.min??-10,max=cfg.max??10;
    const X=v=>left+(v-min)/(max-min)*(right-left);
    el("line",{x1:left,y1:y,x2:right,y2:y,stroke:"currentColor","stroke-width":2},svg);
    el("path",{d:`M ${right-8} ${y-6} L ${right} ${y} L ${right-8} ${y+6}`,fill:"none",stroke:"currentColor","stroke-width":2},svg);
    const step=(max-min)>18?2:1;
    for(let v=Math.ceil(min/step)*step;v<=max;v+=step){
      el("line",{x1:X(v),y1:y-7,x2:X(v),y2:y+7,stroke:"currentColor"},svg);
      const t=el("text",{x:X(v),y:y+27,"text-anchor":"middle",fill:"currentColor","font-size":12},svg);t.textContent=fmt(v);
    }
    (cfg.marks||[]).forEach(v=>{
      if(v<min||v>max)return;
      el("line",{x1:X(v),y1:y-25,x2:X(v),y2:y+8,stroke:"#64748b","stroke-dasharray":"4 4"},svg);
      const t=el("text",{x:X(v),y:y-32,"text-anchor":"middle",fill:"currentColor","font-size":12},svg);t.textContent=fmt(v);
    });
    if(Number.isFinite(cfg.center)){
      el("circle",{cx:X(cfg.center),cy:y,r:7,fill:"#3157d5"},svg);
      const t=el("text",{x:X(cfg.center),y:y-18,"text-anchor":"middle",fill:"currentColor","font-size":12},svg);t.textContent="centre";
    }
    const marker=el("circle",{cx:X(cfg.initial??0),cy:y,r:8,fill:"#d97706",stroke:"white","stroke-width":2},svg);
    host.appendChild(svg);
    const label=htmlNode("div","visual-readout","",host);
    const slider=htmlNode("input","visual-slider",undefined,host);
    slider.type="range";slider.min=min;slider.max=max;slider.step="0.1";slider.value=cfg.initial??0;
    const update=()=>{
      const v=Number(slider.value);marker.setAttribute("cx",X(v));
      const d=Number.isFinite(cfg.center)?Math.abs(v-cfg.center):null;
      label.textContent=d===null?`Selected value: ${fmt(v)}`:`Selected value: ${fmt(v)} · distance from centre: ${fmt(d)}${Number.isFinite(cfg.radius)?` · distance limit: ${fmt(cfg.radius)}`:""}`;
    };
    slider.addEventListener("input",update);update();
  }

  function graph(host,cfg,kind){
    const svg=svgBase(),L=54,R=530,T=18,B=202;
    const xmin=cfg.xMin??-5,xmax=cfg.xMax??5;
    const fn=x=>{
      if(kind==="linear")return (cfg.m??1)*x+(cfg.c??0);
      if(kind==="quadratic")return (cfg.a??1)*x*x+(cfg.b??0)*x+(cfg.c??0);
      if(kind==="roots")return (cfg.roots||[]).reduce((v,r)=>v*(x-r),1);
      return (cfg.coefficients||[1,0]).reduce((v,k)=>v*x+k,0);
    };
    const samples=220, vals=[];
    for(let i=0;i<=samples;i++){const x=xmin+(xmax-xmin)*i/samples;const y=fn(x);if(Number.isFinite(y))vals.push([x,y]);}
    let ymin=Math.min(0,...vals.map(p=>p[1])),ymax=Math.max(0,...vals.map(p=>p[1]));
    if(ymax-ymin<1){ymax+=1;ymin-=1;}
    const pad=(ymax-ymin)*.12;ymin-=pad;ymax+=pad;
    const X=x=>L+(x-xmin)/(xmax-xmin)*(R-L),Y=y=>B-(y-ymin)/(ymax-ymin)*(B-T);
    [0,.25,.5,.75,1].forEach(f=>{
      const yy=T+f*(B-T);el("line",{x1:L,y1:yy,x2:R,y2:yy,stroke:"currentColor","stroke-opacity":.12},svg);
      const xx=L+f*(R-L);el("line",{x1:xx,y1:T,x2:xx,y2:B,stroke:"currentColor","stroke-opacity":.12},svg);
    });
    if(ymin<=0&&ymax>=0)el("line",{x1:L,y1:Y(0),x2:R,y2:Y(0),stroke:"currentColor","stroke-width":1.5},svg);
    if(xmin<=0&&xmax>=0)el("line",{x1:X(0),y1:T,x2:X(0),y2:B,stroke:"currentColor","stroke-width":1.5},svg);
    let d="";
    vals.forEach(([x,y],i)=>{d+=(i?" L ":"M ")+X(x).toFixed(2)+" "+Y(y).toFixed(2)});
    el("path",{d,fill:"none",stroke:"#3157d5","stroke-width":3,"stroke-linecap":"round"},svg);
    const px=el("line",{x1:X(cfg.initial??0),y1:T,x2:X(cfg.initial??0),y2:B,stroke:"#d97706","stroke-dasharray":"4 4"},svg);
    const dot=el("circle",{cx:X(cfg.initial??0),cy:Y(fn(cfg.initial??0)),r:6,fill:"#d97706",stroke:"white","stroke-width":2},svg);
    const axis=htmlNode("div","visual-axis-labels","",host);
    axis.textContent=`x from ${fmt(xmin)} to ${fmt(xmax)} · y from ${fmt(ymin)} to ${fmt(ymax)}`;
    host.appendChild(svg);
    const slider=htmlNode("input","visual-slider",undefined,host);slider.type="range";slider.min=xmin;slider.max=xmax;slider.step=(xmax-xmin)/200;slider.value=cfg.initial??0;
    const readout=htmlNode("div","visual-readout","",host);
    const update=()=>{const x=Number(slider.value),y=fn(x);px.setAttribute("x1",X(x));px.setAttribute("x2",X(x));dot.setAttribute("cx",X(x));dot.setAttribute("cy",Y(y));readout.textContent=`At x = ${fmt(x)}, y = ${fmt(y)}`;};
    slider.addEventListener("input",update);update();
  }

  function signChart(host,cfg){
    const roots=[...(cfg.roots||[])].sort((a,b)=>a-b);
    const edges=[-Infinity,...roots,Infinity],wrap=htmlNode("div","sign-chart",undefined,host);
    const signs=["","+", "−"];
    for(let i=0;i<edges.length-1;i++){
      const lo=edges[i],hi=edges[i+1];
      const label=(lo===-Infinity?"−∞":fmt(lo))+" to "+(hi===Infinity?"∞":fmt(hi));
      const b=htmlNode("button","sign-cell",undefined,wrap);
      b.type="button";b.setAttribute("aria-pressed","false");
      const span=htmlNode("span","sign-interval",label,b);
      const val=htmlNode("strong","sign-value","Tap to mark",b);
      let state=0;
      b.addEventListener("click",()=>{state=(state+1)%3;val.textContent=state===0?"Tap to mark":state===1?"Positive (+)":"Negative (−)";b.dataset.sign=signs[state];b.setAttribute("aria-pressed",String(state!==0));});
    }
    htmlNode("p","visual-readout","Tap an interval repeatedly to cycle: unmarked → positive → negative.",host);
  }

  window.renderQuestionVisual = function(cfg){
    const host=$("question-visual");if(!host)return;
    host.replaceChildren();host.classList.add("hidden");
    if(!cfg||!cfg.type)return;
    host.classList.remove("hidden");
    htmlNode("div","visual-caption",cfg.caption||"Explore the diagram.",host);
    if(cfg.type==="numberLine")numberLine(host,cfg);
    else if(cfg.type==="linearGraph")graph(host,cfg,"linear");
    else if(cfg.type==="quadraticGraph")graph(host,cfg,"quadratic");
    else if(cfg.type==="polyGraph")graph(host,cfg,"polynomial");
    else if(cfg.type==="rootGraph")graph(host,cfg,"roots");
    else if(cfg.type==="signChart")signChart(host,cfg);
  };
})();
