/* ====== CARTE À MODIFIER ======
   imgs = identifiants de photos Unsplash (ou URLs complètes) ; price = prix en FCFA (0 = non affiché) ; spice = 0 à 3
   Boissons : photos détourées (PNG transparent) dans images/boissons/ nommées <slug>-bouteille.png et <slug>-verre.png
   (ou bottle:'URL', glass:'URL'). Sans photo, un dessin est affiché. color/fill/gfill = couleur et niveau du dessin. */
const IMG=(id,w=900)=>id.startsWith('http')?id:`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70`;
const P={salade:"1472926373053-51b220987527",grill:"1594999945795-e570338fdd12",poulet:"1773620494293-e9e075dd48fd",poisson:"1665332195309-9d75071138f0",egusi:"1763048443535-1243379234e2",riz:"1604329756574-bda1f2cada6f",fruits:"1723477554006-c69746a0d58e"};
const dishes = [
  {cat:"Entrées", name:"Salade de saison", desc:"Légumes frais et croquants, vinaigrette maison.", long:"Un mélange croquant de légumes frais, assaisonné d'une vinaigrette maison. Légère et rafraîchissante, elle ouvre le repas en douceur.", imgs:[P.salade,P.riz], tags:["Végétarien"], time:"10 min", spice:0, portion:"1 personne", sides:"Pain", comp:[["🥬","Laitue"],["🍅","Tomate"],["🥒","Concombre"],["🧅","Oignon"],["🍋","Citron"]], tip:"À partager en entrée avant un plat grillé.", price:0},
  {cat:"Entrées", name:"Brochettes de bœuf", desc:"Marinées aux épices, grillées au charbon.", long:"Morceaux de bœuf marinés aux épices puis grillés au charbon jusqu'à une belle caramélisation. Servies bien chaudes, avec une sauce pimentée à part.", imgs:[P.grill,P.poisson], tags:["Grillé"], time:"20 min", spice:2, portion:"1 à 2 personnes", sides:"Oignons grillés, piment", comp:[["🥩","Bœuf"],["🧄","Ail"],["🌶️","Piment"],["🧅","Oignon"]], tip:"Parfaites en apéritif, à partager à table.", price:0},
  {cat:"Plats", name:"Poulet DG", desc:"Poulet doré, plantains et légumes sautés. Notre plat signature.", long:"Le grand classique : poulet doré, plantains mûrs et légumes sautés en une seule poêlée gourmande. Notre plat signature, généreux et parfait à partager.", imgs:[P.poulet,P.grill,P.riz], tags:["Signature"], time:"30 min", spice:1, portion:"1 personne généreuse", sides:"Plantains, riz ou frites", comp:[["🍗","Poulet"],["🍌","Plantain"],["🥕","Carotte"],["🫑","Poivron"],["🧅","Oignon"]], tip:"Demandez-le avec un supplément de plantains.", price:0},
  {cat:"Plats", name:"Poisson braisé", desc:"Poisson grillé, sauce pimentée, riz ou bâton de manioc.", long:"Poisson entier braisé, relevé d'une sauce pimentée à la tomate et à l'oignon. Servi avec du riz ou du bâton de manioc selon votre envie.", imgs:[P.poisson,P.grill,P.salade], tags:["Épicé","Grillé"], time:"35 min", spice:3, portion:"1 personne", sides:"Riz, bâton de manioc ou miondo", comp:[["🐟","Poisson"],["🌶️","Piment"],["🍅","Tomate"],["🧅","Oignon"],["🍋","Citron"]], tip:"Dites-nous le niveau de piment que vous souhaitez.", price:0},
  {cat:"Plats", name:"Egusi aux viandes", desc:"Sauce d'egusi mijotée avec viandes assorties.", long:"Une sauce d'egusi (graines de courge) mijotée lentement avec des viandes assorties et des feuilles. Un plat réconfortant, riche en saveurs.", imgs:[P.egusi,P.poulet], tags:["Mijoté"], time:"30 min", spice:1, portion:"1 personne", sides:"Bâton de manioc, plantain", comp:[["🥘","Egusi"],["🥩","Viandes assorties"],["🥬","Feuilles"],["🌶️","Piment"]], tip:"À savourer chaud, avec du bâton de manioc.", price:0},
  {cat:"Plats", name:"Riz sauté tomate et œuf", desc:"Riz parfumé, tomate fraîche et œuf.", long:"Un riz sauté parfumé, relevé de tomate fraîche et coiffé d'un œuf. Simple, rapide et réconfortant.", imgs:[P.riz,P.poulet], tags:["Léger"], time:"15 min", spice:0, portion:"1 personne", sides:"Salade", comp:[["🍚","Riz"],["🍅","Tomate"],["🥚","Œuf"],["🧅","Oignon"]], tip:"Un bon choix pour un déjeuner rapide.", price:0},
  {cat:"Desserts", name:"Fruits frais", desc:"Fruits de saison et citron vert.", long:"Une assiette de fruits de saison coupés à la minute et relevés d'un trait de citron vert. Un dessert frais pour finir en légèreté.", imgs:[P.fruits,P.salade], tags:["Frais"], time:"5 min", spice:0, portion:"1 personne", sides:"", comp:[["🍓","Fruits rouges"],["🍍","Ananas"],["🍋","Citron vert"]], tip:"Idéal après un plat épicé.", price:0},
  {cat:"Boissons", slug:"gingembre", name:"Jus de gingembre", label:"GINGEMBRE", vol:"33 cl", comp:"gingembre frais, citron, sucre, eau", color:"#d9a33a", kind:"both", ice:true, price:0},
  {cat:"Boissons", slug:"ananas", name:"Jus d'ananas", label:"ANANAS", vol:"33 cl", comp:"ananas pressé, un peu de sucre", color:"#e8c547", kind:"both", ice:true, straw:true, price:0},
  {cat:"Boissons", slug:"bissap", name:"Bissap", label:"BISSAP", vol:"33 cl", comp:"fleurs d'hibiscus, menthe, sucre", color:"#9a2f55", kind:"both", ice:true, price:0},
  {cat:"Boissons", slug:"citronnade", name:"Citronnade", label:"CITRON", vol:"40 cl", comp:"citron vert, menthe, eau, sucre", color:"#b9d36b", kind:"glass", ice:true, straw:true, gfill:30, price:0},
  {cat:"Boissons", slug:"biere", name:"Bière fraîche", label:"BIÈRE", vol:"33 cl · 65 cl", comp:"bière bien fraîche, servie en bouteille ou au verre", color:"#d29a2a", kind:"both", foam:true, price:0},
  {cat:"Boissons", slug:"eau", name:"Eau minérale", label:"EAU", vol:"50 cl", comp:"eau plate ou gazeuse", color:"#b9dcec", kind:"bottle", fill:62, price:0}
];
const WHATSAPP = "237678184930";

/* ====== HORAIRES (heure de Douala) ======
   Un créneau [ouverture, fermeture] par jour, de dimanche à samedi. Mettre null si fermé.
   Seule l'ouverture à 10h est connue : adaptez la fermeture et les jours. */
const HOURS = [[10,22],[10,22],[10,22],[10,22],[10,22],[10,22],[10,22]];
const JOURS = ['dimanche','lundi','mardi','mercredi','jeudi','vendredi','samedi'];

/* Titre lettre par lettre */
const title = document.getElementById('title');
[..."La Plazza"].forEach((c,i)=>{
  const s=document.createElement('span');
  s.textContent=c===' '?'\u00A0':c;
  s.style.animationDelay=(0.3+i*0.09)+'s';
  s.setAttribute('aria-hidden','true');
  title.appendChild(s);
});

/* Nav */
const nav=document.getElementById('nav'), links=document.getElementById('links'), burger=document.getElementById('burger');
addEventListener('scroll',()=>nav.classList.toggle('solid',scrollY>40),{passive:true});
burger.onclick=()=>{const o=links.classList.toggle('open');burger.classList.toggle('x',o);nav.classList.toggle('menu-open',o);burger.setAttribute('aria-expanded',o)};
links.querySelectorAll('a').forEach(a=>a.onclick=()=>{links.classList.remove('open');burger.classList.remove('x');nav.classList.remove('menu-open')});

/* Statut ouvert / fermé */
(function(){
  const p=Object.fromEntries(new Intl.DateTimeFormat('en-GB',{weekday:'short',hour:'numeric',minute:'numeric',hour12:false,timeZone:'Africa/Douala'}).formatToParts(new Date()).map(x=>[x.type,x.value]));
  const day=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].indexOf(p.weekday), now=(+p.hour%24)+(+p.minute)/60;
  const t=HOURS[day]; let open=false,text;
  if(t&&now>=t[0]&&now<t[1]){open=true;text='Ouvert · ferme à '+t[1]+'h00'}
  else if(t&&now<t[0]){text='Fermé · Ouvre à '+t[0]+':00'}
  else{
    for(let k=1;k<=7;k++){const n=HOURS[(day+k)%7];if(n){text='Fermé · Rouvre '+(k===1?'demain':JOURS[(day+k)%7])+' à '+n[0]+':00';break}}
  }
  document.getElementById('dot').classList.toggle('open',open);
  document.getElementById('state').textContent=text||'Fermé';
  const h=document.getElementById('hoursText');
  if(h){const today=HOURS[day];h.textContent=today?"Aujourd'hui : "+today[0]+'h00 – '+today[1]+'h00':'Fermé aujourd\'hui'}
})();

/* Apparition au scroll */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));

/* Onglets espaces (clavier : flèches) */
const tabs=[...document.querySelectorAll('#tabs button')], panels=[...document.querySelectorAll('.panel')], pill=document.getElementById('pill');
function movePill(){const b=tabs.find(t=>t.getAttribute('aria-selected')==='true');pill.style.width=b.offsetWidth+'px';pill.style.transform=`translateX(${b.offsetLeft-5}px)`}
function pick(b,focus){
  tabs.forEach(t=>{const on=t===b;t.setAttribute('aria-selected',on);t.tabIndex=on?0:-1});
  panels.forEach(p=>p.classList.toggle('on',p.dataset.p===b.dataset.t));
  movePill();if(focus)b.focus();
}
tabs.forEach((b,i)=>{
  b.tabIndex=i?-1:0;b.onclick=()=>pick(b);
  b.onkeydown=e=>{
    if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();pick(tabs[(i+(e.key==='ArrowRight'?1:tabs.length-1))%tabs.length],true)}
  };
});
addEventListener('load',movePill);addEventListener('resize',movePill);
document.fonts&&document.fonts.ready.then(movePill);

/* Menu : carrousel */
const money=n=>n.toLocaleString('fr-FR')+' FCFA';
const $=id=>document.getElementById(id);
const list=$('menuList'), fEl=$('filters'), cart=new Map();
const foods=dishes.map((d,i)=>[d,i]).filter(([d])=>d.cat!=='Boissons');
const spice=n=>n?'🌶️'.repeat(n):'Doux';
foods.forEach(([d,i])=>{
  const a=document.createElement('article');
  a.className='dish';a.dataset.cat=d.cat;a.dataset.i=i;
  a.innerHTML=`<div class="ph" data-open="${i}">${d.imgs.map((m,n)=>`<img alt="${n?'':d.name}" ${n?'loading="lazy"':''} decoding="async" draggable="false" src="${IMG(m,800)}">`).join('')}<div class="pd">${d.imgs.map((_,n)=>`<i class="${n?'':'on'}"></i>`).join('')}</div></div>
  <div class="tags">${d.tags.map(t=>`<span class="${t==='Signature'?'star':''}">${t}</span>`).join('')}</div>
  <div class="body"><h3>${d.name}</h3><p>${d.desc}</p><div class="row">${d.price?`<span class="price">${money(d.price)}</span>`:''}<button class="more2" data-open="${i}">Détails</button><button class="add" data-i="${i}">Ajouter</button></div></div>`;
  const imgs=[...a.querySelectorAll('.ph img')], dots=[...a.querySelectorAll('.pd i')];
  imgs.forEach(im=>{const ok=()=>im.classList.add('ok');im.addEventListener('load',ok);im.addEventListener('error',()=>im.remove());if(im.complete&&im.naturalWidth)ok()});
  imgs[0].classList.add('on');
  let cur=0,t;const go=n=>{imgs[cur].classList.remove('on');dots[cur].classList.remove('on');cur=n%imgs.length;imgs[cur].classList.add('on');dots[cur].classList.add('on')};
  a.addEventListener('pointerenter',()=>{if(imgs.length>1){go(cur+1);t=setInterval(()=>go(cur+1),2200)}});
  a.addEventListener('pointerleave',()=>{clearInterval(t);go(0)});
  list.appendChild(a);
});
['Tout',...new Set(foods.map(([d])=>d.cat))].forEach((c,i)=>{
  const b=document.createElement('button');b.textContent=c;b.setAttribute('aria-pressed',!i);if(!i)b.className='on';
  b.onclick=()=>{
    fEl.querySelectorAll('button').forEach(x=>{x.classList.toggle('on',x===b);x.setAttribute('aria-pressed',x===b)});
    list.querySelectorAll('.dish').forEach(it=>it.classList.toggle('hide',!(c==='Tout'||it.dataset.cat===c)));
    list.scrollTo({left:0,behavior:'auto'});upd();
  };
  fEl.appendChild(b);
});
/* contrôles du carrousel */
const prog=$('prog');
function upd(){prog.style.width=Math.min(100,((list.scrollLeft+list.clientWidth)/list.scrollWidth)*100)+'%'}
list.addEventListener('scroll',()=>requestAnimationFrame(upd),{passive:true});addEventListener('resize',upd);
const step=()=>(list.querySelector('.dish:not(.hide)')?.offsetWidth||320)+20;
$('prev').onclick=()=>list.scrollBy({left:-step(),behavior:'smooth'});
$('next').onclick=()=>list.scrollBy({left:step(),behavior:'smooth'});
let down=false,moved=false,sx=0,sl=0;
list.addEventListener('pointerdown',e=>{if(e.pointerType!=='mouse')return;down=true;moved=false;sx=e.clientX;sl=list.scrollLeft});
addEventListener('pointermove',e=>{if(!down)return;const dx=e.clientX-sx;if(Math.abs(dx)>6){moved=true;list.classList.add('drag')}if(moved)list.scrollLeft=sl-dx});
addEventListener('pointerup',()=>{if(down){down=false;list.classList.remove('drag')}});
list.addEventListener('click',e=>{if(moved){e.stopPropagation();e.preventDefault();moved=false}},true);
upd();

/* Boissons : carrousel (bouteille + verre devant) */
const DRINK_DIR='images/boissons/';
const BOTTLE='M32 6h16v22c0 10 14 18 14 40v132a10 10 0 0 1-10 10H28a10 10 0 0 1-10-10V68c0-22 14-30 14-40z';
const GLASS='M12 8h66l-7 98a8 8 0 0 1-8 8H27a8 8 0 0 1-8-8z';
const WAVE=c=>`<path class="wave" fill="${c}" d="M0 4q10-6 20 0t20 0 20 0 20 0 20 0 20 0 20 0 20 0V260H0z"/>`;
const foamOf=d=>d.foam?'<rect x="-2" y="-14" width="170" height="16" fill="#fbf6e3"/>':'';
const bottleSVG=(d,i)=>`<svg viewBox="0 0 80 222" aria-hidden="true"><defs><clipPath id="cb${i}"><path d="${BOTTLE}"/></clipPath></defs><path d="${BOTTLE}" fill="rgba(255,255,255,.55)"/><g clip-path="url(#cb${i})"><g class="liq" transform="translate(0 ${d.fill||78})">${foamOf(d)}${WAVE(d.color)}</g></g><path d="${BOTTLE}" fill="none" stroke="#17301f" stroke-opacity=".3" stroke-width="2"/><rect x="30" y="1" width="20" height="9" rx="2.5" fill="#c99a2e"/><rect x="18" y="118" width="44" height="58" rx="6" fill="#f4efdf" stroke="#c99a2e"/><text x="40" y="150" text-anchor="middle" font-size="7.5" font-weight="700" fill="#17301f" font-family="Manrope,sans-serif">${d.label}</text><path d="M25 76v34" stroke="#fff" stroke-opacity=".6" stroke-width="3" stroke-linecap="round"/></svg>`;
const glassSVG=(d,i)=>{
  const ice=d.ice?'<rect x="30" y="56" width="16" height="16" rx="3" fill="#fff" fill-opacity=".45" transform="rotate(12 38 64)"/><rect x="50" y="46" width="15" height="15" rx="3" fill="#fff" fill-opacity=".4" transform="rotate(-10 57 53)"/>':'';
  const straw=d.straw?'<path d="M60 -10L52 66" stroke="#c99a2e" stroke-width="4" stroke-linecap="round"/>':'';
  return `<svg viewBox="-4 -14 98 134" aria-hidden="true"><defs><clipPath id="cg${i}"><path d="${GLASS}"/></clipPath></defs><path d="${GLASS}" fill="rgba(255,255,255,.55)"/><g clip-path="url(#cg${i})"><g class="liq" transform="translate(0 ${d.gfill||36})">${foamOf(d)}${WAVE(d.color)}</g>${ice}</g>${straw}<path d="${GLASS}" fill="none" stroke="#17301f" stroke-opacity=".3" stroke-width="2"/></svg>`;
};
/* Charge la vraie photo si elle existe, sinon le dessin reste affiché */
function photo(slot,src,blend){
  if(!src)return;
  const im=new Image();im.alt='';im.decoding='async';im.draggable=false;
  im.onload=()=>{
    if(blend??!/\.(png|svg|avif)(\?|$)/i.test(src))im.classList.add('mul'); /* JPG sur fond blanc : fond fondu */
    slot.appendChild(im);slot.classList.add('has');
  };
  im.src=src;
}
const dRail=$('drinkRail');
dishes.forEach((d,i)=>{
  if(d.cat!=='Boissons')return;
  const a=document.createElement('article');a.className='drink';
  a.innerHTML=`<div class="pic"><div class="discwrap"><span class="disc"></span></div><div class="slot bottle">${bottleSVG(d,i)}</div><div class="slot glass">${glassSVG(d,i)}</div></div>
  <div class="dbody"><h3>${d.name}<span class="vol">${d.vol}</span></h3><p class="cont"><b>Contenu :</b> ${d.comp}</p><div class="row">${d.price?`<span class="price">${money(d.price)}</span>`:''}<button class="add" data-i="${i}">Ajouter</button></div></div>`;
  photo(a.querySelector('.bottle'),d.bottle||`${DRINK_DIR}${d.slug}-bouteille.png`,d.blend);
  photo(a.querySelector('.glass'),d.glass||`${DRINK_DIR}${d.slug}-verre.png`,d.blend);
  dRail.appendChild(a);
});
(function(r,prev,next,pr){
  const upd=()=>{pr.style.width=Math.min(100,((r.scrollLeft+r.clientWidth)/r.scrollWidth)*100)+'%'};
  r.addEventListener('scroll',()=>requestAnimationFrame(upd),{passive:true});addEventListener('resize',upd);
  const step=()=>(r.firstElementChild?.offsetWidth||280)+20;
  prev.onclick=()=>r.scrollBy({left:-step(),behavior:'smooth'});
  next.onclick=()=>r.scrollBy({left:step(),behavior:'smooth'});
  let down=false,moved=false,sx=0,sl=0;
  r.addEventListener('pointerdown',e=>{if(e.pointerType!=='mouse')return;down=true;moved=false;sx=e.clientX;sl=r.scrollLeft});
  addEventListener('pointermove',e=>{if(!down)return;const dx=e.clientX-sx;if(Math.abs(dx)>6){moved=true;r.classList.add('drag')}if(moved)r.scrollLeft=sl-dx});
  addEventListener('pointerup',()=>{if(down){down=false;r.classList.remove('drag')}});
  r.addEventListener('click',e=>{if(moved){e.stopPropagation();e.preventDefault();moved=false}},true);
  upd();
})(dRail,$('dprev'),$('dnext'),$('dprog'));

/* Fiche détaillée (modal) */
const modal=$('modal'), mMain=$('mMain'), mThumbs=$('mThumbs');
let ms=0;
function slide(n){
  const els=[...mMain.children];ms=(n+els.length)%els.length;
  els.forEach((e,k)=>e.classList.toggle('on',k===ms));
  [...mThumbs.children].forEach((t,k)=>t.classList.toggle('on',k===ms));
}
function openModal(i){
  const d=dishes[i];
  $('mCat').textContent=d.cat;$('mTitle').textContent=d.name;$('mLong').textContent=d.long||d.desc;
  $('mFacts').innerHTML=[['Préparation',d.time],['Piment',spice(d.spice)],['Portion',d.portion],['Accompagnements',d.sides]].filter(f=>f[1]).map(f=>`<div><dt>${f[0]}</dt><dd>${f[1]}</dd></div>`).join('');
  $('mComp').innerHTML=d.comp.map(([e,n])=>`<li><span>${e}</span>${n}</li>`).join('');
  $('mTip').textContent=d.tip||'';$('mTipBox').hidden=!d.tip;
  mMain.innerHTML=d.imgs.map(m=>`<img alt="${d.name}" src="${IMG(m,1100)}">`).join('')+`<div class="compo"><span class="hand">Dans l'assiette</span><div>${d.comp.map(([e,n],k)=>`<span style="--k:${k}"><b>${e}</b>${n}</span>`).join('')}</div></div>`;
  mThumbs.innerHTML=d.imgs.map(m=>`<button aria-label="Photo"><img alt="" src="${IMG(m,160)}"></button>`).join('')+'<button aria-label="Composition">🍽️</button>';
  [...mThumbs.children].forEach((b,k)=>b.onclick=()=>slide(k));
  slide(0);
  $('mAdd').dataset.i=i;
  $('mWa').href=`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Bonjour La Plazza 👋 Je suis intéressé(e) par : "+d.name+". Est-il disponible aujourd'hui ?")}`;
  renderCart();
  document.body.style.overflow='hidden';
  modal.showModal();
}
function closeModal(){modal.classList.add('out');setTimeout(()=>{modal.close();modal.classList.remove('out')},240)}
modal.addEventListener('close',()=>{document.body.style.overflow=''});
modal.addEventListener('cancel',e=>{e.preventDefault();closeModal()});
modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});
modal.querySelector('.mclose').onclick=closeModal;
$('gp').onclick=()=>slide(ms-1);$('gn').onclick=()=>slide(ms+1);
modal.addEventListener('keydown',e=>{if(e.key==='ArrowLeft')slide(ms-1);if(e.key==='ArrowRight')slide(ms+1)});
document.addEventListener('click',e=>{const o=e.target.closest('[data-open]');if(o)openModal(+o.dataset.open)});

/* Sélection / panier */
const fab=$('fab'), drawer=$('drawer'), scrim=$('scrim'), lines=$('lines');
function renderCart(){
  const items=[...cart.entries()];
  const count=items.reduce((s,[,q])=>s+q,0);
  fab.textContent='Ma sélection · '+count;
  fab.classList.toggle('on',count>0);
  document.querySelectorAll('.add').forEach(b=>{
    const q=cart.get(+b.dataset.i)||0;
    b.classList.toggle('in',q>0);b.textContent=q?'Ajouté · '+q:'Ajouter';
  });
  lines.innerHTML=items.length?'':'<p class="empty">Votre sélection est vide. Ajoutez des plats depuis le menu.</p>';
  items.forEach(([i,q])=>{
    const d=dishes[i], row=document.createElement('div');row.className='line';
    row.innerHTML=`<div>${d.name}${d.price?`<small>${money(d.price*q)}</small>`:''}</div><div class="qty"><button data-i="${i}" data-d="-1" aria-label="Retirer un">−</button>${q}<button data-i="${i}" data-d="1" aria-label="Ajouter un">+</button></div>`;
    lines.appendChild(row);
  });
  const priced=items.length&&items.every(([i])=>dishes[i].price);
  $('total').hidden=!priced;
  if(priced)$('totalVal').textContent=money(items.reduce((s,[i,q])=>s+dishes[i].price*q,0));
  const total=items.reduce((s,[i,q])=>s+dishes[i].price*q,0), name=$('cname').value.trim(), note=$('cnote').value.trim();
  const msg="Bonjour La Plazza 👋\n"+(name?`Je m'appelle ${name}.\n`:'')+`Je souhaite commander (${$('mode').value}) :\n`+items.map(([i,q])=>`• ${q} × ${dishes[i].name}`).join('\n')+(priced?`\n\nTotal : ${money(total)}`:'\n\n(Prix à confirmer)')+(note?`\nRemarque : ${note}`:'')+"\n\nMerci de me confirmer la disponibilité.";
  $('send').href=`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
  $('send').style.display=items.length?'':'none';
  $('opts').hidden=!items.length;
}
function addDish(i){
  cart.set(i,(cart.get(i)||0)+1);renderCart();
  fab.classList.remove('bump');fab.offsetHeight;fab.classList.add('bump');
}
document.addEventListener('click',e=>{const b=e.target.closest('.add');if(b)addDish(+b.dataset.i)});
lines.addEventListener('click',e=>{
  const b=e.target.closest('button[data-i]');if(!b)return;
  const i=+b.dataset.i,q=(cart.get(i)||0)+(+b.dataset.d);
  q>0?cart.set(i,q):cart.delete(i);renderCart();
});
let lastFocus;
const openCart=o=>{
  drawer.classList.toggle('open',o);scrim.classList.toggle('on',o);drawer.setAttribute('aria-hidden',!o);drawer.inert=!o;
  if(o){lastFocus=document.activeElement;$('closeCart').focus()}else if(lastFocus)lastFocus.focus();
};
['mode','cname','cnote'].forEach(id=>$(id).addEventListener('input',renderCart));
fab.onclick=()=>openCart(true);scrim.onclick=$('closeCart').onclick=()=>openCart(false);
addEventListener('keydown',e=>{if(e.key==='Escape')openCart(false)});
renderCart();

/* Surprenez-moi */
let tt;
function toast(msg,label,fn){
  $('toastMsg').textContent=msg;const b=$('toastBtn');b.textContent=label||'';b.style.display=fn?'':'none';b.onclick=()=>{fn&&fn();$('toast').classList.remove('on')};
  $('toast').classList.add('on');clearTimeout(tt);tt=setTimeout(()=>$('toast').classList.remove('on'),7000);
}
$('surprise').onclick=function(){
  const btn=this;btn.disabled=true;
  fEl.firstChild.click();
  list.scrollIntoView({behavior:'smooth',block:'center'});
  const cards=[...list.children], steps=12+Math.floor(Math.random()*6), win=Math.floor(Math.random()*cards.length);
  let n=0,last=-1;
  (function tick(){
    cards.forEach(c=>c.classList.remove('glow'));
    let k=n===steps?win:Math.floor(Math.random()*cards.length);
    if(k===last)k=(k+1)%cards.length;last=k;
    const c=cards[k];c.classList.add('glow');
    list.scrollTo({left:c.offsetLeft-(list.clientWidth-c.offsetWidth)/2,behavior:'smooth'});
    if(n===steps){
      const i=+c.dataset.i;
      toast("Aujourd'hui : "+dishes[i].name+' !','Voir le plat',()=>openModal(i));
      btn.disabled=false;setTimeout(()=>c.classList.remove('glow'),6000);return;
    }
    n++;setTimeout(tick,170+n*30);
  })();
};

/* Avis */
const qs=[...document.querySelectorAll('.quote')], dots=document.getElementById('dots');let cur=0,timer;
qs.forEach((_,i)=>{const b=document.createElement('button');b.setAttribute('aria-label','Avis '+(i+1));b.onclick=()=>{show(i);restart()};dots.appendChild(b)});
function show(i){cur=i;qs.forEach((q,k)=>q.classList.toggle('on',k===i));[...dots.children].forEach((d,k)=>d.classList.toggle('on',k===i))}
function restart(){clearInterval(timer);timer=setInterval(()=>show((cur+1)%qs.length),6500)}
show(0);
if(!matchMedia('(prefers-reduced-motion:reduce)').matches){restart();$('slider').onmouseenter=()=>clearInterval(timer);$('slider').onmouseleave=restart}

/* Réservation → WhatsApp */
const rf=$('resForm');
$('rd').min=new Date().toISOString().slice(0,10);
rf.onsubmit=e=>{
  e.preventDefault();
  const f=new FormData(rf);
  const d=new Date(f.get('date')+'T12:00').toLocaleDateString('fr-FR',{weekday:'long',day:'numeric',month:'long'});
  const note=(f.get('note')||'').trim();
  const msg=`Bonjour La Plazza 👋\nJe souhaite réserver une table :\n• Nom : ${f.get('nom')}\n• Date : ${d}\n• Heure : ${f.get('heure')}\n• Personnes : ${f.get('pers')}\n• Espace : ${f.get('espace')}`+(note?`\n• Remarque : ${note}`:'')+"\n\nMerci de me confirmer.";
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`,'_blank','noopener');
};

document.getElementById('yr').textContent=new Date().getFullYear();

/* Pourquoi La Plazza : sauce du chef + éléments flottants */
(function(){
  const sec=document.getElementById('why'),zig=document.getElementById('zig'),svg=document.getElementById('sauce');
  if(!sec||!zig||!svg)return;
  const paths=[...svg.querySelectorAll('.sp')],drop=document.getElementById('sdrop'),fls=[...sec.querySelectorAll('.fl')];
  if(!paths[0].getTotalLength)return;
  const calm=matchMedia('(prefers-reduced-motion:reduce)').matches;
  let len=1;
  function build(){
    const r=zig.getBoundingClientRect(),W=r.width,H=r.height,small=innerWidth<821;
    if(!W||!H)return;
    svg.setAttribute('viewBox',`0 0 ${W} ${H}`);
    const pts=[...zig.querySelectorAll('.ill')].map((el,i)=>{
      const b=el.getBoundingClientRect();let x=b.left-r.left+b.width/2;
      if(small)x=W/2+(i%2?1:-1)*W*0.2;
      return [x,b.top-r.top+b.height/2];
    });
    let d=`M${W/2} 0`,p=[W/2,0];
    pts.concat([[W/2,H]]).forEach(q=>{const m=(p[1]+q[1])/2;d+=`C${p[0]} ${m} ${q[0]} ${m} ${q[0]} ${q[1]}`;p=q});
    paths.forEach(el=>el.setAttribute('d',d));
    len=paths[0].getTotalLength();
    paths.forEach(el=>el.style.strokeDasharray=len);
    draw();
  }
  function draw(){
    const r=zig.getBoundingClientRect(),vh=innerHeight;
    const k=calm?1:Math.min(1,Math.max(0,(vh*0.8-r.top)/(r.height+vh*0.1)));
    paths.forEach(el=>el.style.strokeDashoffset=len*(1-k));
    const pt=paths[0].getPointAtLength(len*k);
    drop.setAttribute('cx',pt.x);drop.setAttribute('cy',pt.y);drop.style.opacity=k>0.005?1:0;
    const s=sec.getBoundingClientRect();
    if(!calm&&s.bottom>-200&&s.top<vh+200)fls.forEach(el=>{el.style.translate=`0 ${(-s.top*(+el.dataset.s)).toFixed(1)}px`});
  }
  let tk=false;
  addEventListener('scroll',()=>{if(!tk){tk=true;requestAnimationFrame(()=>{draw();tk=false})}},{passive:true});
  addEventListener('resize',build);addEventListener('load',build);
  document.fonts&&document.fonts.ready.then(build);
  build();
})();
