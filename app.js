/* StueForm 1.2 – statisk/offline, ingen analytics eller server. */
'use strict';

const EXERCISES = [
  {
    id:'deadlift',name:'Kettlebell deadlift',category:'kettlebell',mode:'reps',default:12,step:2,
    muscles:'Baller · baglår · core',difficulty:'Begyndervenlig',
    short:'Lær hoftebevægelsen, før du prøver swings.',
    instructions:['Stil kettlebellen mellem fødderne med god afstand til møbler.','Skub hofterne bagud med let bøjede knæ, og hold ryggen neutral.','Tag fat i håndtaget, spænd let i maven og pres gulvet væk.','Stå oprejst ved at strække hoften; sænk vægten kontrolleret.'],
    caution:'14 kg kan være for tungt. Start med en hoftebøjning uden vægt, hvis teknikken ikke føles sikker.',
    tip:'Tænk: hofterne bagud – ikke ryggen forover.',alternative:'swing'
  },
  {
    id:'swing',name:'Kettlebell swings',category:'kettlebell',mode:'reps',default:12,step:2,
    muscles:'Baller · baglår · core · kondition',difficulty:'Øvet teknik',
    short:'Eksplosivt hoftestræk og høj puls.',
    instructions:['Start kun med swings, hvis du mestrer kettlebell deadlift og har plads omkring dig.','Stil dig med fødderne lidt bredere end hoftebredde. Skub hoften bagud med ryggen neutral.','Lad vægten svinge bagud mellem benene, og stræk hofterne eksplosivt.','Armene styrer vægten; de trækker den ikke op. Lad vægten falde naturligt.'],
    caution:'Undgå at svinge med 14 kg, hvis du er usikker på teknikken, har smerter eller mangler plads. Vælg deadlift i stedet.',
    tip:'Kraften kommer fra hoften, ikke skuldre eller lænd.',alternative:'deadlift'
  },
  {
    id:'squat',name:'Goblet squat',category:'kettlebell',mode:'reps',default:10,step:2,
    muscles:'Lår · baller · core',difficulty:'Alle niveauer',
    short:'Styrker de store muskelgrupper i benene.',
    instructions:['Hold kettlebellen tæt ved brystet med begge hænder.','Stå stabilt, bøj hofter og knæ, og sænk dig kontrolleret.','Hold brystet åbent og fødderne i gulvet.','Pres tilbage til stående uden at låse knæene hårdt.'],
    caution:'Er 14 kg for meget, så udfør samme bevægelse uden vægt.',
    tip:'Gå kun så dybt, som du kan med kontrol.',alternative:'deadlift'
  },
  {
    id:'row',name:'Kettlebell row',category:'kettlebell',mode:'reps',default:10,step:2,perSide:true,
    muscles:'Ryg · arme · core',difficulty:'Alle niveauer',
    short:'Rygtræning, der balancerer dine presøvelser.',
    instructions:['Støt den frie hånd på en solid, stabil overflade, eller stå i en kontrolleret bred stilling.','Bøj let frem fra hoften og hold ryggen neutral.','Træk kettlebellen op mod hoften, uden at overkroppen drejer.','Sænk langsomt. Tag samme antal med den anden arm.'],
    caution:'Brug aldrig en ustabil stol eller et løst møbel som støtte.',
    tip:'Hold albuen tæt ved kroppen.',alternative:'deadlift'
  },
  {
    id:'pushup',name:'Armbøjninger',category:'kropsvaegt',mode:'reps',default:8,step:2,
    muscles:'Bryst · skuldre · triceps · core',difficulty:'Kan tilpasses',
    short:'Kropsvægt til presstyrke og stabilitet.',
    instructions:['Placer hænderne lidt bredere end skuldrene på gulvet.','Spænd maven, og hold kroppen i en lige linje.','Sænk brystet kontrolleret mod gulvet.','Pres op igen. Brug en stabil forhøjning for en lettere version.'],
    caution:'Har du håndledsgener, så brug en komfortabel variant, eller spring øvelsen over.',
    tip:'Hellere 5 flotte end 15 med svaj i ryggen.',alternative:'planktap'
  },
  {
    id:'climber',name:'Mountain climbers',category:'kondition',mode:'seconds',default:30,step:5,
    muscles:'Kondition · core · skuldre',difficulty:'Kan tilpasses',
    short:'Pulstræning uden ekstra udstyr.',
    instructions:['Start i høj planke med hænderne under skuldrene.','Hold hoften rolig og spænd maven.','Før skiftevis knæene frem mod brystet i et kontrolleret tempo.','Øg kun hastigheden, hvis du kan bevare teknikken.'],
    caution:'Ved håndleds- eller knægener kan du vælge en rolig stående march på stedet i samme tidsrum.',
    tip:'Kontrollerede bevægelser er bedre end at springe rundt.',alternative:'deadbug'
  },
  {
    id:'deadbug',name:'Dead bug',category:'core',mode:'reps',default:8,step:2,perSide:true,
    muscles:'Dyb core · mavestabilitet',difficulty:'Begyndervenlig',
    short:'Træn mavens stabilitet uden tunge mavebøjninger.',
    instructions:['Læg dig på ryggen med armene op og hofter/knæ i 90 grader.','Hold lænden rolig og i en behagelig position.','Stræk langsomt modsatte arm og ben væk fra kroppen.','Vend tilbage og skift side uden at miste kontrollen.'],
    caution:'Forkort bevægelsen, hvis du får svaj eller ubehag i lænden.',
    tip:'Langsomt tempo er hele pointen.',alternative:'planktap'
  },
  {
    id:'planktap',name:'Planke med skuldertap',category:'core',mode:'reps',default:10,step:2,perSide:true,
    muscles:'Core · skuldre · stabilitet',difficulty:'Mellem',
    short:'Stabilitet og kontrol med egen kropsvægt.',
    instructions:['Stil dig i høj planke med fødderne lidt bredere.','Spænd maven og balderne, så hoften er rolig.','Løft én hånd, og berør den modsatte skulder.','Sæt hånden ned og skift side uden at rotere hoften.'],
    caution:'Ved håndledsgener kan dead bug være et bedre valg.',
    tip:'Hold hoften så stille som muligt.',alternative:'deadbug'
  }
];
const E = Object.fromEntries(EXERCISES.map(e=>[e.id,e]));
const ICONS = {
  dumbbell:'<path d="m6.5 6.5 11 11M21 21l-2-2m-13-13L4 4m11.5 4.5 2-2 2 2-2 2m-9 9-2 2-2-2 2-2m9.5-9.5-2-2 2-2 2 2-2 2m-9 9-2 2 2 2 2-2"/>',
  home:'<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/>',
  bolt:'<path d="m13 2-9 12h7l-1 8 10-12h-7z"/>',
  book:'<path d="M3 19V5a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v16H5a2 2 0 0 1-2-2Zm9 2V5a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2z"/>',
  chart:'<path d="M4 20V10m6 10V4m6 16v-7m4 7V7"/>',
  settings:'<path d="M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z"/><path d="m19.4 15 .1.1 1.4 1.1-1.5 2.6-1.8-.6-.1.1-1.7 1-.3 1.9h-3l-.3-1.9a8 8 0 0 1-1.8-1l-1.8.6-1.5-2.6 1.4-1.2a8 8 0 0 1 0-2.1l-1.4-1.2 1.5-2.6 1.8.6a8 8 0 0 1 1.8-1L12.5 7h3l.3 1.9 1.8 1 1.8-.6 1.5 2.6-1.4 1.2a8 8 0 0 1-.1 2Z" transform="translate(-2 -2)"/>',
  arrow:'<path d="M5 12h14m-6-6 6 6-6 6"/>',
  check:'<path d="m4 12 5 5L20 6"/>',
  info:'<circle cx="12" cy="12" r="9"/><path d="M12 10v6m0-9h.01"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  play:'<path d="m8 5 11 7-11 7z"/>',
  pause:'<path d="M9 5v14m6-14v14"/>',
  close:'<path d="M5 5 19 19M19 5 5 19"/>',
  lock:'<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
  download:'<path d="M12 3v12m-4-4 4 4 4-4M4 18v3h16v-3"/>',
  upload:'<path d="M12 17V4m-4 4 4-4 4 4M4 17v4h16v-4"/>',
  trend:'<path d="m3 17 6-6 4 4 8-9m-6 0h6v6"/>',
  repeat:'<path d="M19 7H7a4 4 0 0 0-4 4v2m0-6 4-4 4 4M5 17h12a4 4 0 0 0 4-4v-2m0 6-4 4-4-4"/>',
  trash:'<path d="M4 7h16M10 3h4m-8 4 1 14h10l1-14M10 11v6m4-6v6"/>',
  eye:'<path d="M2 12S6 5 12 5s10 7 10 7-4 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
  swap:'<path d="M3 8h18m-5-5 5 5-5 5M21 16H3m5-5-5 5 5 5"/>',
  calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18"/>',
  save:'<path d="M4 3h14l3 3v15H3V3zm2 0v7h11V3M7 21v-8h10v8"/>',
  chevron:'<path d="m9 6 6 6-6 6"/>'
};
function icon(name){return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name]||ICONS.info}</svg>`;}
const APP_VERSION='1.2';
const KEY='stueform-app-v1';
const MODE_NAMES={'10':'Hurtig','20':'Standard','30':'Udvidet'};
const CATEGORIES={alle:'Alle',kettlebell:'Kettlebell',kropsvaegt:'Kropsvægt',kondition:'Kondition',core:'Mave/core'};
const defaultPresets={
  '10':{rounds:1,exerciseRest:20,roundRest:45,warmup:2,ids:['deadlift','squat','pushup','climber','deadbug'],targets:{}},
  '20':{rounds:2,exerciseRest:30,roundRest:60,warmup:3,ids:['deadlift','squat','row','pushup','climber','deadbug'],targets:{}},
  '30':{rounds:3,exerciseRest:35,roundRest:70,warmup:3,ids:['deadlift','squat','row','pushup','climber','deadbug'],targets:{}}
};
const defaultSettings={weight:14,level:'begynder',sound:true,vibrate:true,keepAwake:true};
function clamp(v,min,max,fallback){const n=Number(v);return Number.isFinite(n)?Math.max(min,Math.min(max,Math.round(n))):fallback;}
function clone(obj){return JSON.parse(JSON.stringify(obj));}
function esc(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]);}
function cleanPreset(p,mode){const d=clone(defaultPresets[mode]),o=p&&typeof p==='object'?p:{}; const ids=Array.isArray(o.ids)?[...new Set(o.ids.filter(id=>E[id]))].slice(0,8):d.ids;const targets={};const raw=o.targets&&typeof o.targets==='object'?o.targets:{};for(const id of ids)targets[id]=clamp(raw[id],E[id].mode==='seconds'?10:1,E[id].mode==='seconds'?180:50,E[id].default);return{rounds:clamp(o.rounds,1,6,d.rounds),exerciseRest:clamp(o.exerciseRest,0,180,d.exerciseRest),roundRest:clamp(o.roundRest,0,300,d.roundRest),warmup:clamp(o.warmup,0,10,d.warmup),ids,targets};}
function load(){let p={};try{p=JSON.parse(localStorage.getItem(KEY))||{};}catch{}const ss=p.settings||{};return{settings:{weight:clamp(ss.weight,1,80,14),level:['begynder','øvet'].includes(ss.level)?ss.level:'begynder',sound:ss.sound!==false,vibrate:ss.vibrate!==false,keepAwake:ss.keepAwake!==false},presets:Object.fromEntries(Object.keys(defaultPresets).map(k=>[k,cleanPreset(p.presets?.[k],k)])),history:Array.isArray(p.history)?p.history.filter(h=>h&&h.date&&Array.isArray(h.done)).slice(-500):[],measurements:Array.isArray(p.measurements)?p.measurements.filter(m=>/^\d{4}-\d{2}-\d{2}$/.test(m.date)&&Number(m.waist)>=30&&Number(m.waist)<=250).slice(-300):[],workout:p.workout&&Array.isArray(p.workout.steps)&&['warmup','exercise','rest','ready','finish'].includes(p.workout.phase)?p.workout:null};}
let state=load();
let ui={view:state.workout?'workout':'home',mode:'20',draft:clone(state.presets['20']),filter:'alle',search:'',expandedHistory:null,effort:'normal',workoutNotes:'',increaseNext:false};
let toastTimer=null, wakeLock=null, lastElapsedSave=Date.now();
function save(){try{localStorage.setItem(KEY,JSON.stringify(state));return true;}catch{toast('Kunne ikke gemme: browserens lokale lager kan være fyldt. Eksportér dine data.');return false;}}
function toast(message){const t=document.getElementById('toast');if(!t)return;t.textContent=message;t.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove('show'),2900);}
function dateLocal(d=new Date()){return new Date(d).toLocaleDateString('sv-SE');}
function fmtDate(d){return new Date(`${d}T12:00:00`).toLocaleDateString('da-DK',{day:'numeric',month:'short',year:'numeric'});}
function fmtDateTime(d){return new Date(d).toLocaleString('da-DK',{day:'numeric',month:'short',hour:'2-digit',minute:'2-digit'});}
function formatSeconds(s){s=Math.max(0,Math.ceil(s));return `${String(Math.floor(s/60)).padStart(2,'0')}:${String(s%60).padStart(2,'0')}`;}
function periodStats(days=30){const earliest=Date.now()-days*864e5;const items=state.history.filter(h=>new Date(h.date).getTime()>=earliest);const minutes=items.reduce((sum,h)=>sum+(Number(h.minutes)||0),0);return{count:items.length,minutes,days:new Set(items.map(h=>h.date.slice(0,10))).size};}
function estimate(d){let seconds=d.warmup*60;const perRound=d.ids.reduce((sum,id)=>{const e=E[id],t=d.targets[id]||e.default;return sum+(e.mode==='seconds'?t:Math.max(20,t*(e.perSide?2:1)*2.6));},0);seconds+=perRound*d.rounds;const total=d.ids.length*d.rounds;seconds+=Math.max(0,total-d.rounds)*d.exerciseRest + Math.max(0,d.rounds-1)*d.roundRest;return Math.max(1,Math.round(seconds/60));}
function img(e){return `./assets/${e.id}.webp?v=${APP_VERSION}`;}
function imgGuide(e){return `./assets/${e.id}-guide.webp?v=${APP_VERSION}`;}
function targetText(e,n){return e.mode==='seconds'?`${n} sekunder`:`${n} gentagelser${e.perSide?' pr. side':''}`;}
function button(label,action,cls='',attrs=''){return `<button type="button" class="button ${cls}" data-action="${action}" ${attrs}>${label}</button>`;}
function stepper(kind,value,min,max,step,id=''){return `<div class="value-stepper"><button type="button" class="stepper-button" data-action="adjust" data-kind="${kind}" data-id="${id}" data-delta="-${step}" aria-label="Sænk værdi">−</button><strong>${value}</strong><button type="button" class="stepper-button" data-action="adjust" data-kind="${kind}" data-id="${id}" data-delta="${step}" aria-label="Hæv værdi">+</button></div>`;}
function show(view){ui.view=view;render();window.scrollTo({top:0,behavior:'instant'});}
function header(){const active=!!state.workout;return `<a class="brand" href="#hjem" data-nav="home" aria-label="StueForm, gå til forsiden"><span class="brand-mark">${icon('dumbbell')}</span><span class="brand-text"><strong>StueForm</strong><small>Din træning. Dit tempo.</small></span></a><span class="header-right"><span class="version-tag" aria-label="StueForm version ${APP_VERSION}">v${APP_VERSION}</span>${active?'<span class="header-badge">● Træning i gang</span>':'<span class="header-badge">100 % lokal</span>'}<button class="icon-button" data-nav="settings" aria-label="Åbn indstillinger">${icon('settings')}</button></span>`;}
function nav(){const items=[['home','home','Hjem'],['build','bolt','Træning'],['library','book','Øvelser'],['history','chart','Historik'],['settings','settings','Indstillinger']];return items.map(([v,ic,label])=>`<button type="button" class="nav-item ${(ui.view===v||(ui.view==='workout'&&v==='build'))?'active':''}" data-nav="${v}" aria-label="${label}" ${((ui.view===v||(ui.view==='workout'&&v==='build'))?'aria-current="page"':'')}>${icon(ic)}<span>${label}</span></button>`).join('');}
function callout(msg,orange=false){return `<div class="callout ${orange?'orange':''}">${icon(orange?'info':'check')}<div>${msg}</div></div>`;}
function heroStats(){const p=periodStats();return `<div class="stats-grid"><div class="stat"><span class="num">${p.count}</span><small>træningspas / 30 dage</small></div><div class="stat"><span class="num">${p.minutes}</span><small>minutter inkl. pauser</small></div><div class="stat"><span class="num">${p.days}</span><small>aktive dage</small></div></div>`;}
function modeTabs(selected=ui.mode){return `<div class="preset-grid">${Object.keys(MODE_NAMES).map((k,i)=>`<button class="preset ${selected===k?'selected':''}" data-action="select-mode" data-mode="${k}" aria-pressed="${selected===k}"><span class="preset-icon">${['⚡','●','↗'][i]}</span><strong>${k} min</strong><span>${MODE_NAMES[k]}</span><small>${state.presets[k].rounds} ${state.presets[k].rounds===1?'runde':'runder'}</small></button>`).join('')}</div>`;}
function home(){const p=periodStats();return `<section class="hero"><div class="hero-text"><span class="eyebrow">FLEKSIBEL HJEMMETRÆNING</span><h1>Stærkere krop.<br><em>Dit eget tempo.</em></h1><p>Styrke, puls og core. Ingen faste dage. Kun din kropsvægt og kettlebell på ${state.settings.weight} kg.</p>${button(`${icon('play')} ${state.workout?'Fortsæt træning':'Start valgt pas'}`,state.workout?'resume':'quick-start')}</div><img src="./assets/squat-home.webp?v=1.2" alt="Illustration af goblet squat med kettlebell"/></section>
  ${state.workout?`<div class="space-top">${callout('Du har et igangværende pas. Det er gemt på denne enhed.')}</div>`:''}
  <div class="section-heading"><h2>Hvor meget tid har du?</h2><p>Vælg fra gang til gang</p></div>${modeTabs()}
  <div class="space-top">${button(`Tilpas dagens træning ${icon('arrow')}`,'go-build','full')}</div>
  <div class="section-heading"><h2>Dit overblik</h2><button class="link-button" data-nav="history">Se historik ${icon('chevron')}</button></div>${heroStats()}
  <div class="section-heading"><h2>Træning uden pres</h2></div>${callout('Du behøver ikke en fast ugeplan. Vælg et kort eller langt pas, justér gentagelserne og byg gradvist op. Målet er mere bevægelse og styrke over tid.')}
  <p class="footnote">Mavefedt kan ikke punktforbrændes. Styrke og kondition støtter et samlet fedttab, men kost og hverdagsbevægelse betyder også meget. Appen beregner derfor ikke opdigtede kalorieforbrug.</p>`;}
function build(){if(state.workout)return `<div class="eyebrow">TRÆNING I GANG</div><h1 class="page-title">Du har et pas åbent</h1><p class="page-lead">Dit pas er gemt, så du kan fortsætte, også hvis du forlader appen et øjeblik.</p>${button(`${icon('play')} Fortsæt træningen`,'resume','full')}<div class="space-top">${callout('Gem eller kassér det igangværende pas, før du starter et nyt.')}</div>`;
const d=ui.draft;return `<div class="build-top"><div><div class="eyebrow">DAGENS PAS</div><h1 class="page-title">Gør træningen til din</h1></div><span class="estimate">ca. ${estimate(d)} min</span></div><p class="page-lead">Indstil alt nu. Dine ændringer gælder kun dette pas, medmindre du gemmer dem som din nye standard.</p>${modeTabs()}
<div class="section-heading"><h2>Runder og pauser</h2></div><div class="builder-settings"><div class="card"><div class="field-label">Antal runder</div><div class="space-top">${stepper('rounds',d.rounds,1,6,1)}</div></div><div class="card"><div class="field-label">Opvarmning (min.)</div><div class="space-top">${stepper('warmup',d.warmup,0,10,1)}</div></div><div class="card"><div class="field-label">Pause mellem øvelser (sek.)</div><div class="space-top">${stepper('exerciseRest',d.exerciseRest,0,180,5)}</div></div><div class="card"><div class="field-label">Pause mellem runder (sek.)</div><div class="space-top">${stepper('roundRest',d.roundRest,0,300,10)}</div></div></div>
<div class="section-heading"><h2>Øvelser (${d.ids.length})</h2><button class="link-button" data-action="reset-preset">Nulstil pas</button></div><div class="chip-row"><button class="chip ${d.ids.every(id=>E[id].category!=='kettlebell')?'selected':''}" data-action="bodyweight-only">Kun kropsvægt i dag</button><button class="chip" data-action="use-default">Standardøvelser</button></div>
${d.ids.map((id,i)=>{const e=E[id],t=d.targets[id]||e.default;return `<article class="builder-exercise"><img loading="lazy" src="${img(e)}" alt="${esc(e.name)}"/><div class="builder-body"><strong>${i+1}. ${esc(e.name)}</strong><small>${esc(e.muscles)}</small><div class="target-row">${stepper('target',t,e.mode==='seconds'?10:1,e.mode==='seconds'?180:50,e.step,id)}<span class="text-small muted">${e.mode==='seconds'?'sek.':e.perSide?'pr. side':'reps'}</span></div><div class="builder-actions"><button data-action="detail" data-id="${id}">Teknik</button><button data-action="move-exercise" data-id="${id}" data-dir="-1" ${i===0?'disabled':''} aria-label="Flyt ${esc(e.name)} op">↑</button><button data-action="move-exercise" data-id="${id}" data-dir="1" ${i===d.ids.length-1?'disabled':''} aria-label="Flyt ${esc(e.name)} ned">↓</button><button data-action="remove-exercise" data-id="${id}" class="remove">Fjern</button></div></div></article>`;}).join('')}
<div class="section-heading"><h2>Tilføj en øvelse</h2></div><div class="chip-row">${EXERCISES.filter(e=>!d.ids.includes(e.id)).map(e=>`<button class="chip" data-action="add-exercise" data-id="${e.id}">+ ${esc(e.name)}</button>`).join('')||'<span class="text-small muted">Alle øvelser er valgt.</span>'}</div>
${d.ids.includes('swing')?`<div class="space-top">${callout('Kettlebell swings kræver sikker hofteteknik. Brug deadlift som alternativ, hvis du ikke er fortrolig med 14 kg swings.',true)}</div>`:''}
<div class="section-heading"><h2>Din standard</h2></div><div class="button-row">${button(`${icon('save')} Gem som standard`,'save-preset','secondary')}${button(`${icon('eye')} Se øvelser`,'go-library','ghost')}</div>
<div class="workout-sticky">${button(`${icon('play')} Start træning · ${d.rounds} ${d.rounds===1?'runde':'runder'}`,'start-workout','full',d.ids.length?'':'disabled')}</div>
<p class="footnote">Tip: Du kan ændre antal gentagelser og skifte øvelse under selve træningen. Pausetiderne er vejledende; hold længere pause, hvis du har brug for det.</p>`;}
function exerciseCard(e){return `<button class="exercise-tile" data-action="detail" data-id="${e.id}"><img loading="lazy" src="${img(e)}" alt="Illustration af ${esc(e.name)}"/><div><strong>${esc(e.name)}</strong><small>${esc(e.muscles)}</small></div></button>`;}
function library(){let list=EXERCISES.filter(e=>(ui.filter==='alle'||e.category===ui.filter)&&(!ui.search||`${e.name} ${e.muscles}`.toLowerCase().includes(ui.search.toLowerCase())));return `<div class="eyebrow">ØVELSESBIBLIOTEK</div><h1 class="page-title">Se teknikken</h1><p class="page-lead">Tydelige illustrationer, trin-for-trin-instruktioner og lettere alternativer. Tryk på en øvelse for at læse mere.</p><label class="field"><span class="sr-only">Søg øvelse</span><input id="exercise-search" type="search" placeholder="Søg efter øvelse eller muskel…" value="${esc(ui.search)}" autocomplete="off"></label><div class="chip-row">${Object.keys(CATEGORIES).map(k=>`<button class="chip ${ui.filter===k?'selected':''}" data-action="filter" data-filter="${k}" aria-pressed="${ui.filter===k}">${CATEGORIES[k]}</button>`).join('')}</div><div class="exercise-grid">${list.map(exerciseCard).join('')}</div>${!list.length?'<div class="empty">Ingen øvelser matcher din søgning.</div>':''}<p class="footnote">Illustrationerne er vejledende. Følg den skriftlige teknikbeskrivelse, og vælg en lettere variant ved smerter eller usikkerhed.</p>`;}
function sessionStep(s){return s.steps[s.idx]||null;}
function sessionTarget(s,step){return s.targets?.[step.id]||E[step.id].default;}
function countDone(s){return s.done.filter(d=>!d.skipped).length;}
function sessionStatus(s){const count=s.done.length;return `<div class="session-top"><span>Runde ${Math.min(s.steps[s.idx]?.round||s.draft.rounds,s.draft.rounds)} af ${s.draft.rounds}</span><span>${count} af ${s.steps.length} øvelser</span></div><div class="session-progress"><div style="width:${(count/s.steps.length*100).toFixed(1)}%"></div></div>`;}
function nextPreview(s){const step=sessionStep(s),e=step&&E[step.id];return e?`<div class="next-preview"><img src="${img(e)}" alt="${esc(e.name)}"/><div><small>NÆSTE ØVELSE · RUNDE ${step.round}</small><strong>${esc(e.name)}</strong><span class="text-small muted">${targetText(e,sessionTarget(s,step))}</span></div></div>`:'';}
function session(){const s=state.workout;if(!s)return build();const step=sessionStep(s);const e=step?E[step.id]:null;
if(s.phase==='warmup'||s.phase==='rest'){const isWarmup=s.phase==='warmup';const remain=remainingSec(s);const duration=(isWarmup?s.draft.warmup*60:s.restOriginal||1);return `<div class="eyebrow">${isWarmup?'FØR DU STARTER':'RESTITUTION'}</div><h1 class="page-title">${isWarmup?'Varm kroppen op':'Tag din pause'}</h1>${sessionStatus(s)}<div class="card session-center"><div class="eyebrow">${isWarmup?'OPVARMNING':'PAUSE'}</div><div id="countdown" class="timer-large">${formatSeconds(remain)}</div><div class="timer-rail"><div id="timer-progress" style="width:${Math.max(0,Math.min(100,remain/duration*100))}%"></div></div><p class="session-note">${isWarmup?'Marchér på stedet, lav rolige squats uden vægt og nogle hoftebøjninger.':'Træk vejret roligt. Fortsæt først, når du er klar.'}</p><div class="button-row">${button(`${icon(s.paused?'play':'pause')} ${s.paused?'Fortsæt timer':'Sæt timer på pause'}`,'toggle-pause','secondary')}${button('+ 15 sek','add-time','secondary')}</div></div>${nextPreview(s)}<div class="button-stack">${button(`${icon('arrow')} ${isWarmup?'Jeg er varmet op':'Jeg er klar'}`,'skip-timer','full')}${button('Afslut pas','end-confirm','ghost')}</div>`;}
if(s.phase==='ready'){return `<div class="eyebrow">KLAR TIL AT FORTSÆTTE</div><h1 class="page-title">Du bestemmer tempoet</h1>${sessionStatus(s)}<div class="card session-center">${icon('check')}<h2>Godt arbejde</h2><p class="page-lead text-center">Pausen er slut. Start først næste øvelse, når du har plads og kontrol.</p></div>${nextPreview(s)}<div class="button-stack">${button(`${icon('play')} Start næste øvelse`,'start-next','full')}${button('Tag 30 sekunder mere','more-rest','secondary')}${button('Afslut pas','end-confirm','ghost')}</div>`;}
if(s.phase==='finish')return finishSession();
const target=clamp(s.currentValue,1,200,sessionTarget(s,step));const total=s.steps.length;return `<div class="eyebrow">TRÆNING I GANG</div><h1 class="session-headline">${esc(e.name)}</h1>${sessionStatus(s)}<img class="exercise-img-hero" src="${img(e)}" alt="Illustration af start- og slutstilling for ${esc(e.name)}"/>
<div class="section-heading"><h2>Dit mål</h2><button class="link-button" data-action="detail" data-id="${e.id}">Se teknik ${icon('chevron')}</button></div>
<div class="card text-center"><div class="eyebrow">${e.mode==='seconds'?'SEKUNDER':'GENTAGELSER'}${e.perSide?' · PR. SIDE':''}</div><div class="counter"><button class="round-button" data-action="session-adjust" data-delta="-${e.step}" aria-label="Færre gentagelser eller sekunder">−</button><span class="counter-value" id="session-counter">${target}</span><button class="round-button" data-action="session-adjust" data-delta="${e.step}" aria-label="Flere gentagelser eller sekunder">+</button></div>${e.mode==='seconds'?`<div class="timer-small" id="exercise-countdown">${formatSeconds(exerciseTimeLeft(s))}</div><div class="space-top">${button(`${icon(s.exerciseTimer?.running?'pause':'play')} ${s.exerciseTimer?.running?'Pause':'Start'} øvelsestimer`,'exercise-timer','secondary small')}</div>`:`<div class="text-small muted">${e.perSide?'Gør antallet på hver side.':'Tilpas antallet, hvis det føles for let eller tungt.'}</div>`}</div>
<div class="space-top">${callout(esc(e.tip))}</div>
<div class="section-heading"><h2>Undervejs</h2></div><div class="button-row">${button(`${icon('swap')} Skift øvelse`,'open-swap','secondary small')}${button('Spring over','skip-exercise','ghost small')}</div>
<div class="workout-sticky">${button(`${icon('check')} ${s.idx===total-1?'Færdiggør træning':'Færdig · næste'}`,'complete-exercise','full')}</div><button class="session-back" data-action="end-confirm">Afslut eller kassér passet</button>`;}
function finishSession(){const s=state.workout;if(!s)return '';const m=Math.max(1,Math.round(((s.elapsedMs||0)+(Date.now()-(s.elapsedUpdatedAt||Date.now())))/60000));const completed=countDone(s);return `<div class="eyebrow">${s.partial?'PASSET AFSLUTTET':'FLOT GENNEMFØRT'}</div><h1 class="page-title">${s.partial?'Delvist træningspas':'Træningen er færdig'}</h1><p class="page-lead">Det vigtigste er, at du har bevæget dig. Vælg, hvordan passet føltes, før det gemmes.</p><div class="stats-grid"><div class="stat"><span class="num">${completed}</span><small>øvelser gennemført</small></div><div class="stat"><span class="num">${s.draft.rounds}</span><small>planlagte runder</small></div><div class="stat"><span class="num">${m}</span><small>minutter inkl. pauser</small></div></div>
<div class="section-heading"><h2>Hvor hårdt var det?</h2></div><div class="rating-grid">${[['easy','Let'],['normal','Passende'],['hard','Hårdt']].map(([id,label])=>`<button class="rating ${ui.effort===id?'selected':''}" data-action="set-effort" data-effort="${id}" aria-pressed="${ui.effort===id}">${label}</button>`).join('')}</div>
<div class="section-heading"><h2>Noter til dig selv</h2></div><div class="field"><label for="workout-notes">Hvordan gik det? (valgfrit)</label><textarea id="workout-notes" maxlength="500" placeholder="Fx: 14 kg var tungt til goblet squats …">${esc(ui.workoutNotes)}</textarea></div>
${ui.effort==='easy'?`<div class="space-top"><label class="setting-row" for="increase-next"><div><strong>Lidt sværere næste gang?</strong><small>Øg med 2 gentagelser næste gang. Swings og tidsøvelser ændres ikke automatisk.</small></div><span class="switch"><input type="checkbox" id="increase-next" ${ui.increaseNext?'checked':''}><span></span></span></label></div>`:''}
<div class="space-top button-stack">${button(`${icon('save')} Gem træningspasset`,'save-workout','full')}${button('Fortryd sidste øvelse','review-session','secondary')}</div>`;}
function sixWeeks(){const weeks=Array.from({length:6},(_,i)=>{const start=new Date();start.setHours(0,0,0,0);start.setDate(start.getDate()-((start.getDay()+6)%7)-7*(5-i));const end=new Date(start);end.setDate(end.getDate()+7);const count=state.history.filter(h=>{const d=new Date(h.date);return d>=start&&d<end;}).length;return{count,label:`Uge ${getWeek(start)}`};});const max=Math.max(1,...weeks.map(w=>w.count));return `<div class="bar-chart" role="img" aria-label="Antal træningspas de seneste seks uger: ${weeks.map(w=>`${w.label} ${w.count}`).join(', ')}">${weeks.map(w=>`<div class="bar-column"><span class="bar-count">${w.count||''}</span><div class="bar" style="height:${Math.max(2,w.count/max*100)}px"></div><small>${w.label}</small></div>`).join('')}</div>`;}
function getWeek(date){const tmp=new Date(date.valueOf());tmp.setHours(0,0,0,0);tmp.setDate(tmp.getDate()+3-(tmp.getDay()+6)%7);const first=new Date(tmp.getFullYear(),0,4);return 1+Math.round(((tmp-first)/86400000-3+(first.getDay()+6)%7)/7);}
function measureChart(){const m=[...state.measurements].sort((a,b)=>a.date.localeCompare(b.date));if(m.length<2)return `<p class="text-small muted">Registrér mindst to taljemål for at se en udvikling.</p>`;const pts=m.slice(-12),vals=pts.map(x=>Number(x.waist));let min=Math.min(...vals)-1,max=Math.max(...vals)+1;if(max-min<2){min-=1;max+=1;}const width=540,height=200,pad=30;const coords=vals.map((v,i)=>[pad+i*(width-pad*2)/(pts.length-1),height-pad-(v-min)/(max-min)*(height-pad*2)]);const poly=coords.map(p=>p.join(',')).join(' ');return `<svg class="waist-graph" role="img" aria-label="Udvikling i taljemål: ${pts.map(x=>`${fmtDate(x.date)} ${x.waist} centimeter`).join('; ')}" viewBox="0 0 540 200"><path d="M${pad} ${height-pad}H${width-pad}" stroke="#3a5360" stroke-width="1"/><path d="M${pad} ${pad}H${width-pad}" stroke="#253a45" stroke-width="1" stroke-dasharray="4 7"/><polyline points="${poly}" fill="none" stroke="#73efb2" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/>${coords.map(p=>`<circle cx="${p[0]}" cy="${p[1]}" r="4" fill="#73efb2" stroke="#0b1a22" stroke-width="2"/>`).join('')}<text x="${pad}" y="18" fill="#aabac3" font-size="11">${max.toFixed(1)} cm</text><text x="${pad}" y="196" fill="#aabac3" font-size="11">${esc(fmtDate(pts[0].date))}</text><text x="${width-pad}" y="196" fill="#aabac3" font-size="11" text-anchor="end">${esc(fmtDate(pts.at(-1).date))}</text></svg>`;}
function history(){const p=periodStats();const sorted=[...state.history].sort((a,b)=>new Date(b.date)-new Date(a.date));const measure=[...state.measurements].sort((a,b)=>b.date.localeCompare(a.date));const delta=measure.length>=2?(measure[0].waist-measure.at(-1).waist).toFixed(1):null;return `<div class="eyebrow">DIN HISTORIK</div><h1 class="page-title">Små skridt tæller</h1><p class="page-lead">Her ser du, hvad du har gennemført. Ingen krav om træningsdage eller perfekte uger.</p>${heroStats()}
<div class="section-heading"><h2>Seneste seks uger</h2></div><div class="card">${sixWeeks()}<p class="text-small muted no-margin">Træningspas pr. kalenderuge. Ingen straf for pauser.</p></div>
<div class="section-heading"><h2>Taljemål (frivilligt)</h2></div><div class="card"><div class="card-heading"><h3>Udvikling over tid</h3>${delta!==null?`<span class="live-pill">${Number(delta)>0?'+':''}${delta} cm</span>`:''}</div>${measureChart()}<div class="measurement"><div class="field"><label for="waist-date">Dato</label><input id="waist-date" type="date" value="${dateLocal()}" max="${dateLocal()}"></div><div class="field"><label for="waist-value">Talje (cm)</label><input id="waist-value" type="number" inputmode="decimal" min="30" max="250" step="0.1" placeholder="Fx 91,5"></div></div><div class="space-top">${button('+ Gem taljemål','add-measurement','secondary full')}</div>${measure.length?`<div class="divider"></div>${measure.slice(0,4).map(x=>`<div class="history-item"><div><strong>${x.waist} cm</strong><small>${fmtDate(x.date)}</small></div><button class="icon-button" data-action="delete-measurement" data-date="${x.date}" aria-label="Slet taljemål fra ${fmtDate(x.date)}">${icon('trash')}</button></div>`).join('')}`:''}<p class="footnote">Mål samme sted og under lignende forhold. Taljemål er en indikator, ikke en præcis måling af fedtprocent.</p></div>
<div class="section-heading"><h2>Gennemførte træningspas</h2></div>${sorted.length?`<div class="card">${sorted.map(h=>{const expanded=ui.expandedHistory===h.id;const completed=h.done.filter(d=>!d.skipped).length;return `<div class="history-item"><div><strong>${fmtDateTime(h.date)} · ${esc(MODE_NAMES[h.mode]||'Personligt')} pas</strong><small>${completed} øvelser · ${h.rounds||'?'} ${h.rounds===1?'runde':'runder'}${h.partial?' · delvist':''} · ${esc(h.effort==='easy'?'Let':h.effort==='hard'?'Hårdt':'Passende')}</small>${expanded?`<div class="history-detail">${h.done.map(d=>`${esc(E[d.id]?.name||d.id)}: ${d.skipped?'sprunget over':`${d.actual} ${E[d.id]?.mode==='seconds'?'sek.':'reps'}${E[d.id]?.perSide?' pr. side':''}`}`).join('<br>')}${h.notes?`<p>${esc(h.notes)}</p>`:''}<button class="link-button" data-action="delete-workout" data-id="${esc(h.id)}">Slet dette pas</button></div>`:''}</div><div class="history-meta"><button class="link-button" data-action="expand-history" data-id="${esc(h.id)}">${h.minutes} min ${icon('chevron')}</button><small>${expanded?'Luk':'Se detaljer'}</small></div></div>`;}).join('')}</div>`:`<div class="empty">${icon('chart')}Dine træningspas vises her, når du har gennemført og gemt det første.</div>`}
<div class="space-top">${button(`${icon('download')} Hent backup`,'export','secondary full')}</div>`;}
function settings(){return `<div class="eyebrow">DINE INDSTILLINGER</div><h1 class="page-title">Sådan vil du træne</h1><p class="page-lead">Indstillingerne gemmes kun på denne enhed og kan ændres når som helst.</p><div class="card"><div class="setting-row"><div><strong>Kettlebell (kg)</strong><small>Vægten bruges som reference; sættes ikke automatisk på alle øvelser.</small></div><input type="number" id="setting-weight" value="${state.settings.weight}" min="1" max="80" step="1" aria-label="Kettlebell vægt i kg"></div><div class="setting-row"><div><strong>Erfaringsniveau</strong><small>Begynder bruger deadlift. Som øvet kan du vælge at skifte til swings i dine standardpas.</small></div><select id="setting-level" aria-label="Erfaringsniveau"><option value="begynder" ${state.settings.level==='begynder'?'selected':''}>Begynder</option><option value="øvet" ${state.settings.level==='øvet'?'selected':''}>Øvet</option></select></div><div class="setting-row"><div><strong>Lyd ved timerslut</strong><small>Kort lydsignal, når en pause slutter.</small></div>${toggle('setting-sound',state.settings.sound)}</div><div class="setting-row"><div><strong>Vibration</strong><small>Virker kun, hvis din telefon/browser understøtter det.</small></div>${toggle('setting-vibrate',state.settings.vibrate)}</div><div class="setting-row"><div><strong>Hold skærmen vågen</strong><small>Kun under et pas, hvis browseren tillader det.</small></div>${toggle('setting-keepAwake',state.settings.keepAwake)}</div></div>
<div class="section-heading"><h2>Gem og flyt dine data</h2></div><div class="card"><p class="text-small muted no-margin">Historik, taljemål og dine standardpas ligger lokalt i browseren. De synkroniseres ikke automatisk til andre enheder.</p><div class="space-top backup-grid">${button(`${icon('download')} Eksportér JSON`,'export','secondary')}${button(`${icon('upload')} Importér JSON`,'import','secondary')}</div><input id="import-file" type="file" class="file-upload" accept=".json,application/json"><div class="divider"></div>${button(`${icon('trash')} Slet alle lokale data`,'reset-data','ghost full')}</div>
<div class="section-heading"><h2>Installér på din iPhone</h2></div><div class="card"><p class="text-small no-margin">Åbn appens adresse i <strong>Safari</strong>, tryk <strong>Del</strong>, vælg <strong>Føj til hjemmeskærm</strong>, og tryk <strong>Tilføj</strong>. Derefter fungerer den som en selvstændig app.</p></div>
<div class="section-heading"><h2>Privatliv og sundhed</h2></div>${callout('Ingen konto, reklamer, sporing eller server. Alt gemmes i telefonens browser. En offentligt publiceret GitHub Pages-adresse er dog ikke adgangsbeskyttet; dine lokalt gemte oplysninger bliver ikke publiceret.',false)}<p class="footnote">Stop ved skarpe smerter, svimmelhed eller usædvanligt ubehag. Programmet er generel træningsvejledning og ikke en medicinsk vurdering. Version 1.0.</p>`;}
function toggle(id,checked){return `<label class="switch"><input type="checkbox" id="${id}" ${checked?'checked':''} aria-label="${id.replace('setting-','')}"><span></span></label>`;}
function render(){const root=document.getElementById('app');document.getElementById('site-header').innerHTML=header();document.getElementById('bottom-nav').innerHTML=nav();const views={home,build,library,history,settings,workout:session};root.innerHTML=(views[ui.view]||home)();updateTickDom();}
function findDetails(id){const e=E[id];if(!e)return;const dialog=document.getElementById('exercise-dialog');dialog.innerHTML=`<div class="dialog-inner"><div class="dialog-header"><div><div class="eyebrow">ØVELSESGUIDE</div><h2>${esc(e.name)}</h2><span class="muscles">${esc(e.muscles)}</span></div><button class="icon-button" data-action="close-dialog" aria-label="Luk">${icon('close')}</button></div><a class="illustration-link" href="${imgGuide(e)}" target="_blank" rel="noopener" aria-label="Åbn komplet illustration af ${esc(e.name)} i fuld størrelse"><img class="exercise-img-wide" src="${imgGuide(e)}" alt="Trin-for-trin-illustration af ${esc(e.name)} med start, slut og tekniktips"><span class="expand-hint">${icon('eye')} Åbn illustrationen i fuld størrelse</span></a><p class="text-small muted">${esc(e.short)}</p><h3>Sådan gør du</h3><ol>${e.instructions.map(s=>`<li>${esc(s)}</li>`).join('')}</ol><p class="text-small"><strong>Tekniktip:</strong> ${esc(e.tip)}</p><div class="dialog-note"><strong>Vær opmærksom:</strong> ${esc(e.caution)}</div><div class="space-top button-row">${button('Luk','close-dialog','secondary')}</div></div>`;dialog.showModal();}
function swapDialog(){const s=state.workout,step=sessionStep(s);if(!step)return;const dialog=document.getElementById('exercise-dialog');dialog.innerHTML=`<div class="dialog-inner"><div class="dialog-header"><div><div class="eyebrow">VÆLG EN ANDEN ØVELSE</div><h2>Skift denne øvelse</h2></div><button class="icon-button" data-action="close-dialog" aria-label="Luk">${icon('close')}</button></div><p class="text-small muted">Ændringen gælder kun den aktuelle runde, ikke dine gemte standardpas.</p>${EXERCISES.filter(e=>e.id!==step.id).map(e=>`<div class="builder-exercise"><img src="${img(e)}" alt="${esc(e.name)}"><div class="builder-body"><strong>${esc(e.name)}</strong><small>${esc(e.muscles)}</small><div class="space-top">${button('Vælg denne','swap-to','small secondary',`data-id="${e.id}"`)}</div></div></div>`).join('')}</div>`;dialog.showModal();}
function closeDialog(){const d=document.getElementById('exercise-dialog');if(d.open)d.close();}
function setMode(mode){if(!state.presets[mode])return;ui.mode=mode;ui.draft=clone(state.presets[mode]);render();}
function changeBuilder(kind,delta,id){const d=ui.draft;let old,min,max;if(kind==='target'&&E[id]){old=d.targets[id]||E[id].default;min=E[id].mode==='seconds'?10:1;max=E[id].mode==='seconds'?180:50;d.targets[id]=clamp(old+delta,min,max,old);}else if(['rounds','warmup','exerciseRest','roundRest'].includes(kind)){const ranges={rounds:[1,6],warmup:[0,10],exerciseRest:[0,180],roundRest:[0,300]};[min,max]=ranges[kind];d[kind]=clamp(d[kind]+delta,min,max,d[kind]);}render();}
function startWorkout(){if(state.workout){show('workout');return;}const d=cleanPreset(ui.draft,ui.mode);if(!d.ids.length){toast('Tilføj mindst én øvelse.');return;}const steps=Array.from({length:d.rounds},(_,i)=>d.ids.map(id=>({id,round:i+1}))).flat();const targets={...d.targets};const phase=d.warmup?'warmup':'exercise';const s={id:(globalThis.crypto?.randomUUID?.()||String(Date.now())),mode:ui.mode,draft:d,steps,targets,idx:0,done:[],startedAt:Date.now(),elapsedMs:0,elapsedUpdatedAt:Date.now(),phase,paused:false,endsAt:d.warmup?Date.now()+d.warmup*60000:null,remainingMs:d.warmup*60000,restOriginal:d.warmup*60,currentValue:targets[steps[0].id]||E[steps[0].id].default,exerciseTimer:null,weight:state.settings.weight};state.workout=s;save();show('workout');acquireWakeLock();}
function remainingSec(s){if(s.paused)return Math.ceil((s.remainingMs||0)/1000);return Math.max(0,Math.ceil(((s.endsAt||0)-Date.now())/1000));}
function exerciseTimeLeft(s){const x=s.exerciseTimer;if(!x)return s.currentValue||0;return Math.max(0,Math.ceil((x.running?x.endsAt-Date.now():x.remainingMs)/1000));}
function beginCurrentExercise(){const s=state.workout;if(!s)return;s.phase='exercise';s.paused=false;s.endsAt=null;s.exerciseTimer=null;const step=sessionStep(s);s.currentValue=sessionTarget(s,step);save();render();}
function queueNext(){const s=state.workout;if(!s)return;if(s.idx>=s.steps.length){s.phase='finish';ui.effort='normal';ui.workoutNotes='';ui.increaseNext=false;releaseWakeLock();save();render();return;}const step=s.steps[s.idx],previous=s.steps[s.idx-1];const rest=previous&&previous.round!==step.round?s.draft.roundRest:s.draft.exerciseRest;s.restOriginal=rest;s.remainingMs=rest*1000;s.paused=false;s.endsAt=Date.now()+rest*1000;s.phase=rest>0?'rest':'ready';s.exerciseTimer=null;save();render();}
function recordExercise(skipped){const s=state.workout;if(!s||s.phase!=='exercise')return;const step=sessionStep(s),e=E[step.id];const goal=sessionTarget(s,step);const amount=skipped?0:clamp(s.currentValue,e.mode==='seconds'?1:1,e.mode==='seconds'?180:50,goal);s.done.push({id:step.id,round:step.round,goal,actual:amount,skipped:!!skipped});s.idx++;queueNext();}
function endConfirm(){const s=state.workout;if(!s)return;const d=document.getElementById('exercise-dialog');d.innerHTML=`<div class="dialog-inner"><div class="dialog-header"><div><div class="eyebrow">AFSLUT TRÆNING</div><h2>Hvad vil du gøre?</h2></div><button class="icon-button" data-action="close-dialog" aria-label="Luk">${icon('close')}</button></div><p class="page-lead">Du har gennemført ${countDone(s)} øvelser. Du kan gemme det, du har nået, eller kassere passet helt.</p><div class="button-stack">${button(`${icon('save')} Gem som delvist pas`,'save-partial','full')}${button('Kassér uden at gemme','discard-workout','warning full')}${button('Fortsæt træningen','close-dialog','secondary full')}</div></div>`;d.showModal();}
function finishPartial(){const s=state.workout;if(!s)return;closeDialog();s.phase='finish';s.partial=true;ui.effort='normal';ui.workoutNotes='';ui.increaseNext=false;releaseWakeLock();save();render();}
function discardWorkout(){if(!window.confirm('Kassér hele det igangværende træningspas uden at gemme historik?'))return;closeDialog();state.workout=null;releaseWakeLock();save();show('home');}
function saveWorkout(){const s=state.workout;if(!s)return;const note=String(document.getElementById('workout-notes')?.value??ui.workoutNotes).trim().slice(0,500);if(!s.done.length&&!window.confirm('Du har ikke gennemført nogen øvelser. Vil du alligevel gemme passet?'))return;const record={id:s.id,date:new Date().toISOString(),mode:s.mode,rounds:s.draft.rounds,minutes:Math.max(1,Math.round(((s.elapsedMs||0)+(Date.now()-(s.elapsedUpdatedAt||Date.now())))/60000)),done:s.done,effort:ui.effort,notes:note,partial:!!s.partial,weight:s.weight};state.history.push(record);state.history=state.history.slice(-500);if(ui.effort==='easy'&&ui.increaseNext&&!s.partial){const p=state.presets[s.mode];for(const id of p.ids){const e=E[id];if(e.mode==='reps'&&id!=='swing')p.targets[id]=Math.min(50,(p.targets[id]||e.default)+2);}}state.workout=null;releaseWakeLock();save();show('history');toast('Træningen er gemt på denne enhed.');}
function beep(){if(state.settings.vibrate&&navigator.vibrate)try{navigator.vibrate([100,80,100]);}catch{}if(state.settings.sound)try{const AC=window.AudioContext||window.webkitAudioContext;if(!AC)return;const c=new AC();const o=c.createOscillator();const g=c.createGain();o.type='sine';o.frequency.value=730;g.gain.setValueAtTime(0.0001,c.currentTime);g.gain.exponentialRampToValueAtTime(.11,c.currentTime+.03);g.gain.exponentialRampToValueAtTime(.0001,c.currentTime+.24);o.connect(g);g.connect(c.destination);o.start();o.stop(c.currentTime+.25);o.onended=()=>c.close();}catch{}}
async function acquireWakeLock(){if(!state.settings.keepAwake||!navigator.wakeLock||!state.workout||document.visibilityState!=='visible')return;try{wakeLock=await navigator.wakeLock.request('screen');}catch{}}
function releaseWakeLock(){if(wakeLock){wakeLock.release().catch(()=>{});wakeLock=null;}}
function tick(){const s=state.workout;if(!s)return;const now=Date.now();if(s.phase!=='finish'){s.elapsedMs=(s.elapsedMs||0)+Math.max(0,Math.min(3000,now-(s.elapsedUpdatedAt||now)));}s.elapsedUpdatedAt=now;if(now-lastElapsedSave>15000){lastElapsedSave=now;save();}if(['warmup','rest'].includes(s.phase)&&!s.paused&&remainingSec(s)<=0){s.phase='ready';s.endsAt=null;s.remainingMs=0;save();beep();render();return;}if(s.phase==='exercise'&&s.exerciseTimer?.running&&exerciseTimeLeft(s)<=0){s.exerciseTimer.running=false;s.exerciseTimer.remainingMs=0;save();beep();render();return;}updateTickDom();}
function updateTickDom(){const s=state.workout;if(!s)return;const count=document.getElementById('countdown');if(count){const remain=remainingSec(s);count.textContent=formatSeconds(remain);const bar=document.getElementById('timer-progress');if(bar)bar.style.width=`${Math.max(0,Math.min(100,remain/Math.max(1,s.restOriginal||60)*100))}%`;}const x=document.getElementById('exercise-countdown');if(x)x.textContent=formatSeconds(exerciseTimeLeft(s));}
function navigate(v){if(v==='build'&&state.workout){show('workout');return;}if(v==='library')ui.search='';if(v==='workout'&&!state.workout)v='build';show(v);}
function handleAction(btn){const action=btn.dataset.action,id=btn.dataset.id;switch(action){
case 'go-build':navigate('build');break;
case 'quick-start':ui.draft=clone(state.presets[ui.mode]);startWorkout();break;
case 'go-library':navigate('library');break;
case 'resume':navigate('workout');acquireWakeLock();break;
case 'select-mode':setMode(btn.dataset.mode);break;
case 'adjust':changeBuilder(btn.dataset.kind,Number(btn.dataset.delta),id);break;
case 'add-exercise':if(E[id]&&!ui.draft.ids.includes(id)){ui.draft.ids.push(id);ui.draft.targets[id]=E[id].default;render();}break;
case 'remove-exercise':ui.draft.ids=ui.draft.ids.filter(v=>v!==id);delete ui.draft.targets[id];render();break;
case 'bodyweight-only':ui.draft.ids=['pushup','climber','deadbug','planktap'];for(const id of ui.draft.ids)if(!ui.draft.targets[id])ui.draft.targets[id]=E[id].default;render();break;
case 'use-default':ui.draft.ids=clone(state.presets[ui.mode].ids);ui.draft.targets=clone(state.presets[ui.mode].targets);render();break;
case 'move-exercise':{const i=ui.draft.ids.indexOf(id),j=i+Number(btn.dataset.dir);if(i>=0&&j>=0&&j<ui.draft.ids.length){[ui.draft.ids[i],ui.draft.ids[j]]=[ui.draft.ids[j],ui.draft.ids[i]];render();}break;}
case 'reset-preset':if(window.confirm('Nulstil dette pas til de oprindelige øvelser og pauser? Dine andre pas og din historik ændres ikke.')){ui.draft=clone(defaultPresets[ui.mode]);render();}break;
case 'save-preset':state.presets[ui.mode]=cleanPreset(ui.draft,ui.mode);save();toast(`${MODE_NAMES[ui.mode]} pas er gemt som standard.`);render();break;
case 'start-workout':startWorkout();break;
case 'detail':findDetails(id);break;
case 'close-dialog':closeDialog();break;
case 'filter':ui.filter=btn.dataset.filter;render();break;
case 'toggle-pause':{const s=state.workout;if(!s)return;if(s.paused){s.endsAt=Date.now()+s.remainingMs;s.paused=false;}else{s.remainingMs=Math.max(0,s.endsAt-Date.now());s.paused=true;}save();render();break;}
case 'add-time':{const s=state.workout;if(!s)return;if(s.paused)s.remainingMs+=15000;else s.endsAt+=15000;s.restOriginal+=15;save();render();break;}
case 'skip-timer':if(state.workout){state.workout.phase=state.workout.phase==='warmup'?'exercise':'ready';state.workout.paused=false;state.workout.exerciseTimer=null;save();render();}break;
case 'start-next':beginCurrentExercise();break;
case 'more-rest':{const s=state.workout;if(!s)return;s.phase='rest';s.restOriginal=30;s.endsAt=Date.now()+30000;s.remainingMs=30000;s.paused=false;save();render();break;}
case 'session-adjust':{const s=state.workout,step=s&&sessionStep(s);if(!s||!step)return;const e=E[step.id],max=e.mode==='seconds'?180:50,min=e.mode==='seconds'?10:1;s.currentValue=clamp(s.currentValue+Number(btn.dataset.delta),min,max,s.currentValue);s.targets[step.id]=s.currentValue;if(e.mode==='seconds')s.exerciseTimer=null;save();render();break;}
case 'exercise-timer':{const s=state.workout;if(!s||s.phase!=='exercise')return;const t=s.exerciseTimer||{running:false,remainingMs:s.currentValue*1000};if(t.running){t.remainingMs=Math.max(0,t.endsAt-Date.now());t.running=false;}else{if(t.remainingMs<=0)t.remainingMs=s.currentValue*1000;t.endsAt=Date.now()+t.remainingMs;t.running=true;}s.exerciseTimer=t;save();render();break;}
case 'skip-exercise':recordExercise(true);break;
case 'complete-exercise':recordExercise(false);break;
case 'open-swap':swapDialog();break;
case 'swap-to':{const s=state.workout;if(!s||!E[id])return;s.steps[s.idx].id=id;if(!s.targets[id])s.targets[id]=E[id].default;s.currentValue=s.targets[id];s.exerciseTimer=null;save();closeDialog();render();break;}
case 'end-confirm':endConfirm();break;
case 'save-partial':finishPartial();break;
case 'review-session':{const s=state.workout;if(s&&s.phase==='finish'){
  if(s.done.length&&s.idx>0){const previous=s.done.pop();s.idx--;s.steps[s.idx].id=previous.id;s.currentValue=previous.actual||sessionTarget(s,s.steps[s.idx]);s.phase='exercise';}
  else if(s.idx<s.steps.length){s.phase='ready';}
  s.partial=false;ui.increaseNext=false;save();render();}break;}
case 'set-effort':ui.effort=btn.dataset.effort;ui.increaseNext=false;render();break;
case 'save-workout':saveWorkout();break;
case 'expand-history':ui.expandedHistory=ui.expandedHistory===id?null:id;render();break;
case 'delete-workout':if(window.confirm('Slet dette træningspas permanent fra denne enhed?')){state.history=state.history.filter(h=>h.id!==id);ui.expandedHistory=null;save();render();}break;
case 'add-measurement':addMeasurement();break;
case 'delete-measurement':if(window.confirm('Slet dette taljemål?')){state.measurements=state.measurements.filter(m=>m.date!==btn.dataset.date);save();render();}break;
case 'export':exportData();break;
case 'import':document.getElementById('import-file')?.click();break;
case 'reset-data':if(window.confirm('Slet ALLE lokale data, standardpas, taljemål og historik? Dette kan ikke fortrydes uden en backup.')){if(window.confirm('Bekræft én gang til: vil du slette alt?')){localStorage.removeItem(KEY);state=load();ui.mode='20';ui.draft=clone(state.presets['20']);show('home');toast('Lokale data slettet.');}}break;
case 'discard-workout':discardWorkout();break;
}}
function addMeasurement(){const d=document.getElementById('waist-date')?.value,raw=document.getElementById('waist-value')?.value.replace(',','.');const n=Number(raw);if(!/^\d{4}-\d{2}-\d{2}$/.test(d)||d>dateLocal()||!raw||!Number.isFinite(n)||n<30||n>250){toast('Indtast en gyldig dato og et taljemål mellem 30 og 250 cm.');return;}const waist=Math.round(n*10)/10;const existed=state.measurements.some(m=>m.date===d);if(existed&&!window.confirm('Du har allerede et taljemål på denne dato. Erstat det?'))return;state.measurements=state.measurements.filter(m=>m.date!==d);state.measurements.push({date:d,waist});state.measurements.sort((a,b)=>a.date.localeCompare(b.date));state.measurements=state.measurements.slice(-300);save();render();toast('Taljemålet er gemt.');}
function exportData(){const payload={app:'StueForm',version:1,exportedAt:new Date().toISOString(),data:{settings:state.settings,presets:state.presets,history:state.history,measurements:state.measurements}};const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=`stueform-backup-${dateLocal()}.json`;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);toast('Backup er klar til at gemme.');}
async function importData(file){if(!file)return;if(file.size>5_000_000){toast('Backupfilen er for stor.');return;}try{const parsed=JSON.parse(await file.text());if(parsed.app!=='StueForm'||!parsed.data||parsed.version!==1)throw new Error('Ikke en gyldig StueForm-backup.');if(!window.confirm('Import erstatter dine nuværende lokale indstillinger, taljemål og historik. Fortsæt?'))return;const data=parsed.data;const safe={settings:data.settings,presets:data.presets,history:data.history,measurements:data.measurements,workout:null};localStorage.setItem(KEY,JSON.stringify(safe));state=load();ui.mode='20';ui.draft=clone(state.presets['20']);show('home');toast('Backup er indlæst.');}catch(err){toast(err.message||'Kunne ikke læse backup.');}}
// Delegated actions remain attached when the screen changes.
document.addEventListener('click',e=>{const navBtn=e.target.closest('[data-nav]');if(navBtn){e.preventDefault();navigate(navBtn.dataset.nav);return;}const act=e.target.closest('[data-action]');if(act){e.preventDefault();handleAction(act);}});
document.addEventListener('input',e=>{if(e.target.id==='exercise-search'){const input=e.target;ui.search=input.value;const pos=input.selectionStart;render();const replacement=document.getElementById('exercise-search');replacement?.focus();try{replacement?.setSelectionRange(pos,pos);}catch{}}if(e.target.id==='workout-notes')ui.workoutNotes=e.target.value;});
document.addEventListener('change',e=>{const id=e.target.id;if(id==='setting-weight'){state.settings.weight=clamp(e.target.value,1,80,14);save();render();}if(id==='setting-level'){
  const next=e.target.value==='øvet'?'øvet':'begynder';
  if(next==='øvet'&&window.confirm('Vil du bytte kettlebell deadlift ud med swings i dine standardpas? Vælg kun OK, hvis du er sikker i teknikken med 14 kg.')){
    for(const p of Object.values(state.presets)){if(p.ids.includes('deadlift')&&!p.ids.includes('swing')){p.ids=p.ids.map(x=>x==='deadlift'?'swing':x);delete p.targets.deadlift;p.targets.swing=E.swing.default;}}
    if(ui.draft.ids.includes('deadlift')&&!ui.draft.ids.includes('swing')){ui.draft.ids=ui.draft.ids.map(x=>x==='deadlift'?'swing':x);delete ui.draft.targets.deadlift;ui.draft.targets.swing=E.swing.default;}
  }
  if(next==='begynder'){
    for(const p of Object.values(state.presets)){if(p.ids.includes('swing')&&!p.ids.includes('deadlift')){p.ids=p.ids.map(x=>x==='swing'?'deadlift':x);delete p.targets.swing;p.targets.deadlift=E.deadlift.default;}}
    if(ui.draft.ids.includes('swing')&&!ui.draft.ids.includes('deadlift')){ui.draft.ids=ui.draft.ids.map(x=>x==='swing'?'deadlift':x);delete ui.draft.targets.swing;ui.draft.targets.deadlift=E.deadlift.default;}
  }
  state.settings.level=next;save();render();}if(id==='setting-sound'||id==='setting-vibrate'||id==='setting-keepAwake'){const key=id.replace('setting-','');state.settings[key]=e.target.checked;save();if(key==='keepAwake'){if(state.settings.keepAwake)acquireWakeLock();else releaseWakeLock();}}if(id==='increase-next')ui.increaseNext=e.target.checked;if(id==='import-file')importData(e.target.files?.[0]);});
document.getElementById('exercise-dialog').addEventListener('click',e=>{if(e.target===e.currentTarget)closeDialog();});
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible'){tick();acquireWakeLock();}else releaseWakeLock();});
window.addEventListener('beforeunload',releaseWakeLock);
render();tick();setInterval(tick,1000);
if(state.workout)acquireWakeLock();
if('serviceWorker' in navigator)window.addEventListener('load',()=>{
  const hadController=!!navigator.serviceWorker.controller;
  navigator.serviceWorker.register('./sw.js',{updateViaCache:'none'}).then(reg=>{
    // The update request is separate from localStorage: no exercise records are changed.
    reg.update().catch(()=>{});
    if(hadController) navigator.serviceWorker.addEventListener('controllerchange',()=>{
      if(state.workout){toast('Appen er opdateret. Genindlæs, når du har afsluttet træningen.');return;}
      const key='stueform-auto-refresh-1.2';
      if(!sessionStorage.getItem(key)){sessionStorage.setItem(key,'yes');location.reload();}
    });
  }).catch(()=>{});
});

// If an asset was not uploaded to GitHub, show a readable error in place.
document.addEventListener('error',event=>{
  const image=event.target;
  if(!(image instanceof HTMLImageElement) || !image.src.includes('/assets/')) return;
  image.classList.add('missing-illustration');
  image.alt='Billedfilen mangler på GitHub. Upload hele assets-mappen og opdatér siden.';
  image.title=image.alt;
},true);
