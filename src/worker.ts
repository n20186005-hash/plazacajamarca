import { WEATHER_URL, validateWeather } from './lib/weather.ts';
type Env = { ASSETS: { fetch(request: Request): Promise<Response> } };
const routes=new Set(['/','/en/','/privacy/','/terms/','/cookies/','/en/privacy/','/en/terms/','/en/cookies/']);
const errorAliases=new Set(['/404','/404/','/404.html','/404/index.html','/en/404','/en/404/','/en/404.html','/en/404/index.html']);
async function weatherResponse(request: Request): Promise<Response> {
 const key=new Request(new URL('/api/weather',request.url));const cache=(globalThis as any).caches?.default;
 if(cache){try{const hit=await cache.match(key);if(hit){validateWeather(await hit.clone().json());return hit;}}catch{}}
 try{
  const upstream=await fetch(WEATHER_URL,{headers:{Accept:'application/json'},signal:AbortSignal.timeout(6000)});
  if(!upstream.ok)throw Error('Upstream unavailable');const data=await upstream.json();validateWeather(data);
  const response=Response.json(data,{headers:{'Cache-Control':'public,max-age=300,s-maxage=900'}});
  if(cache){try{await cache.put(key,response.clone());}catch{}}
  return response;
 }catch{return Response.json({error:'Weather service unavailable'},{status:502,headers:{'Cache-Control':'no-store'}});}
}
export default {
 async fetch(request:Request,env:Env):Promise<Response>{
  const url=new URL(request.url);
  // All requests enter this Worker, including static assets, before the binding.
  if(url.protocol==='http:'&&url.hostname==='plazacajamarca.com'){url.protocol='https:';return Response.redirect(url.href,301);}
  if(!['GET','HEAD'].includes(request.method))return new Response('Method Not Allowed',{status:405,headers:{Allow:'GET, HEAD'}});
  let response:Response;
  if(url.pathname==='/api/weather')response=await weatherResponse(request);
  else{
   let path=url.pathname.replace(/\/index\.html$/,'/');if(!path.endsWith('/')&&routes.has(path+'/'))path+='/';
   if(path!==url.pathname&&routes.has(path)){url.pathname=path;return Response.redirect(url.href,301);}
   response=await env.ASSETS.fetch(request);
   if(response.status===404||errorAliases.has(url.pathname)){
    const target=new URL(url);target.pathname=url.pathname.startsWith('/en/')?'/en/404/':'/404';
    const page=await env.ASSETS.fetch(new Request(target,{method:'GET',headers:request.headers}));const headers=new Headers(page.headers);headers.delete('Location');
    response=new Response(page.body,{status:404,headers});
   }
  }
  const headers=new Headers(response.headers);headers.set('X-Content-Type-Options','nosniff');headers.set('Referrer-Policy','strict-origin-when-cross-origin');if(response.status===404)headers.set('X-Robots-Tag','noindex');if(headers.get('Content-Type')?.includes('text/html'))headers.set('Cache-Control','no-cache');
  return new Response(request.method==='HEAD'?null:response.body,{status:response.status,headers});
 }
};
