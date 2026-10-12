/* StueForm 1.2: always fetch fresh HTML, CSS and JS when online. */
const CACHE='stueform-offline-v1.2';
const CORE=["./", "./index.html", "./styles.css?v=1.2", "./app.js?v=1.2", "./manifest.webmanifest", "./assets/icon-192.png", "./assets/icon-512.png"];
const IMAGES=["./assets/swing.webp?v=1.2", "./assets/squat.webp?v=1.2", "./assets/row.webp?v=1.2", "./assets/pushup.webp?v=1.2", "./assets/climber.webp?v=1.2", "./assets/deadbug.webp?v=1.2", "./assets/deadlift.webp?v=1.2", "./assets/planktap.webp?v=1.2", "./assets/swing-guide.webp?v=1.2", "./assets/squat-guide.webp?v=1.2", "./assets/row-guide.webp?v=1.2", "./assets/pushup-guide.webp?v=1.2", "./assets/climber-guide.webp?v=1.2", "./assets/deadbug-guide.webp?v=1.2", "./assets/deadlift-guide.webp?v=1.2", "./assets/planktap-guide.webp?v=1.2", "./assets/squat-home.webp?v=1.2"];

self.addEventListener('install',event=>{
  event.waitUntil((async()=>{
    const cache=await caches.open(CACHE);
    await cache.addAll(CORE);
    await Promise.allSettled(IMAGES.map(async path=>{
      const req=new Request(new URL(path,self.registration.scope));
      const res=await fetch(req,{cache:'reload'});
      if(res.ok) await cache.put(req,res);
    }));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate',event=>{
  event.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(keys.filter(k=>k.startsWith('stueform-offline-')&&k!==CACHE).map(k=>caches.delete(k)));
    await self.clients.claim();
  })());
});

async function networkFirst(req){
  const cache=await caches.open(CACHE);
  try{
    const res=await fetch(req,{cache:'no-cache'});
    if(res.ok) await cache.put(req,res.clone());
    return res;
  }catch(err){
    const cached=await cache.match(req,{ignoreSearch:req.mode==='navigate'});
    return cached||Response.error();
  }
}

async function cacheFirst(req){
  const cache=await caches.open(CACHE);
  const cached=await cache.match(req);
  if(cached) return cached;
  try{
    const res=await fetch(req);
    if(res.ok) await cache.put(req,res.clone());
    return res;
  }catch(err){return Response.error();}
}

self.addEventListener('fetch',event=>{
  const req=event.request;
  if(req.method!=='GET'||new URL(req.url).origin!==self.location.origin)return;
  const critical=req.mode==='navigate'||['document','style','script','worker'].includes(req.destination);
  event.respondWith(critical?networkFirst(req):cacheFirst(req));
});
