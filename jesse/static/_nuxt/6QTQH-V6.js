import{o as l,c as m,b as a,h as z,T as ke,r as w,F,n as ae,v as L,w as _,d as r,t as N,W as le,D as n,Z as pe,$ as fe,a0 as je,a1 as Re,ah as q,G as Q,M as B,f as Ue,Y as Me,j as k,J as O,e as xe,a5 as Ae,Q as Oe,ab as $e,ai as Be,y as ie,ac as Ne,aj as ze,ak as ge,a as De,al as Fe,am as qe,an as He,ao as We,ap as Ye,i as Qe,B as Ze,k as ee,l as Je,m as Ge,X as ve,E as x,L as D,K as ye,P as te,N as Ke,a7 as Xe,O as et,R as tt,U as st}from"./C81wOY-u.js";import{r as ot}from"./DLc3c1lQ.js";import{r as rt}from"./Cc67OkOV.js";import{b as we,_ as nt,a as lt}from"./D-PNBJM7.js";import{_ as at}from"./CFVKG5MP.js";import{r as be,_ as it,a as ut,d as dt,c as ct}from"./DJDCZXyQ.js";import{_ as mt}from"./D2FRArg3.js";import{s as he,T as pt,l as ft,d as gt,_ as vt}from"./DIMn435f.js";import{u as yt}from"./Ddg1ql_Y.js";function _e(C,s){return l(),m("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"})])}function bt(C,s){return l(),m("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122"})])}const ht={base:"animate-pulse",background:"bg-gray-100 dark:bg-gray-800",rounded:"rounded-md"},_t={class:"mb-4"},kt={class:""},xt={class:"relative rounded-lg shadow flex divide-x divide-gray-200 dark:divide-gray-700","aria-label":"Tabs"},$t=["onClick"],wt=["onClick"],Ct={class:"absolute right-[1em] focus:outline-none"},Tt=a("span",{"aria-hidden":"true",class:"absolute inset-x-0 bottom-0 h-0.5 bg-transparent dark:bg-gray-600"},null,-1),Lt=z({__name:"LiveTabs",props:{tabs:{}},emits:["close","cancel"],setup(C,{emit:s}){const v=ke(),f=w(v.params.id),y=s;function t(){if(Object.keys(q().tabs).length>=Q().planLimits.live_trading_tabs){B("error",`You have reached the limit of "${Q().planLimits.live_trading_tabs}" tabs for your "${Q().plan}" plan. Please upgrade your plan to add more tabs.`);return}q().addTab()}function $(u){if(!u.form.routes.length)return"New Tab";if(u.results.exception.error&&u.results.monitoring)return"Error";const d=u.form.routes[0];let i="";const g=u.form.exchange;return g&&(i+=`${g} • `),d.strategy&&(i+=`${d.strategy} • `),d.symbol&&(i+=`${d.symbol} • `),d.timeframe&&(i+=`${d.timeframe}`),i=i.endsWith(" • ")?i.slice(0,-3):i,u.results.monitoring&&!u.results.finished?`🟢 ${i}`:u.results.exception.error&&u.results.monitoring?`🔴 ${i}`:u.results.showResults?`${i} | Results`:i}return(u,d)=>{const i=Ue,g=Me;return l(),m("div",_t,[a("div",kt,[a("nav",xt,[(l(!0),m(F,null,ae(u.tabs,b=>(l(),L(g,{key:b.id,class:"relative group min-w-0 flex-1 overflow-hidden text-center flex items-center",text:$(b),"open-delay":700,onMouseup:Re(P=>y("close",b.id),["middle"])},{default:_(()=>[r(i,{to:`/live/${b.id}`,class:le([b.id===n(f)?"text-gray-900 dark:text-gray-100 font-bold ":"text-gray-500 dark:text-gray-300 hover:text-gray-700 font-medium ","whitespace-nowrap py-3 px-4 inline-block select-none cursor-pointer focus:outline-none w-full text-xs bg-gray-50 dark:bg-backdrop-dark"])},{default:_(()=>[a("span",null,N($(b)),1),a("span",{"aria-hidden":"true",class:le([b.id===n(f)&&Object.keys(u.tabs).length>1?"bg-indigo-400":"bg-transparent dark:bg-gray-600","absolute inset-x-0 bottom-0 h-0.5"])},null,2)]),_:2},1032,["to","class"]),(b.results.booting||b.results.monitoring)&&!b.results.finished?pe((l(),m("button",{key:0,class:"absolute right-[0.5em] focus:outline-none",onClick:P=>y("cancel",b.id)},[r(n(ot),{class:"h-5 w-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-200 bg-gray-100 dark:bg-gray-700 rounded-full","aria-hidden":"true"})],8,$t)),[[fe,Object.keys(u.tabs).length>1]]):pe((l(),m("button",{key:1,class:"absolute right-[0.5em] focus:outline-none",onClick:P=>y("close",b.id)},[r(n(je),{class:"h-5 w-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-200 bg-gray-100 dark:bg-gray-700 rounded-full","aria-hidden":"true"})],8,wt)),[[fe,Object.keys(u.tabs).length>1]])]),_:2},1032,["text","onMouseup"]))),128)),r(g,{text:"New Tab",popper:{arrow:!0}},{default:_(()=>[a("div",{class:"select-none cursor-pointer text-gray-400 dark:text-gray-100 hover:text-gray-600 focus:outline-none group relative w-14 overflow-hidden bg-gray-50 dark:bg-backdrop-dark py-3 px-4 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center justify-center",onClick:t},[a("button",Ct,[r(n(rt),{class:"h-6 w-6 rounded-full","aria-hidden":"true"})]),Tt])]),_:1})])])])}}}),Vt=z({__name:"LiveOrders",props:{orders:{}},setup(C){const s=C,v=k(()=>{if(!s.orders.length)return[];const f=[];for(let y=s.orders.length-1;y>=0;y--){const t=s.orders[y];f.push([{value:t.id.slice(-12),style:"text-xs",tooltip:t.id,tag:"code"},{value:O.timestampToTimeOnly(t.created_at),style:"text-xs",tooltip:O.timestampToTime(t.created_at)},{value:t.symbol,style:"text-xs"},{value:t.type,style:"text-xs"},{value:t.side,style:O.colorBasedOnSide(t.side)},{value:t.price,style:"text-xs"},{value:t.qty,style:O.colorBasedOnSide(t.side)},{value:t.status,style:"text-xs"}])}return f});return(f,y)=>{const t=we,$=at;return n(v).length?(l(),L(t,{key:0,data:n(v),"header-items":["ID","Created","Symbol","Type","Side","Price","QTY","Status"],header:""},null,8,["data"])):(l(),L($,{key:1}))}}}),St=a("p",null," If you think something is wrong with your running live session, you can submit a report. By submitting this form, the logs of this session will be sent to Jesse's developers so we can see what's going on. ",-1),Et=a("br",null,null,-1),Pt=a("p",null,[xe("Your exchange API keys and strategies are safe and "),a("b",null,"are never sent to us.")],-1),It=a("br",null,null,-1),jt=a("br",null,null,-1),Rt=a("br",null,null,-1),Ut={class:"flex justify-end item-center"},Mt={class:"flex justify-end"},At=z({__name:"ReportLiveSession",props:{session:{}},emits:["close"],setup(C,{emit:s}){const v=s,f=w(!1),y=C,t=w({description:"",email:""}),$=()=>{v("close")},u=async()=>{if(f.value=!0,!t.value.description){B("error","Please enter a description."),f.value=!1;return}const{data:d,error:i}=await Ae("/report-exception",{description:t.value.description,email:t.value.email,traceback:"manual report",mode:"live",attach_logs:!0,session_id:y.session},!0);if(f.value=!1,i.value&&i.value.statusCode!==200){B("error",`[${i.value.statusCode}]: ${i.value.statusText}`);return}const g=d.value;g.status==="success"?(t.value.description="",t.value.email="",B("success",g.message),$()):g.status==="error"&&B("error",g.message)};return(d,i)=>{const g=Oe,b=$e,P=Be,T=ie,R=Ne;return l(),m(F,null,[St,Et,Pt,It,r(R,{state:n(t),class:"space-y-4",onSubmit:u},{default:_(()=>[r(b,{label:"Email (optional)",help:"Enter your email address for us to know who sent the email and possibly reply back to you."},{default:_(()=>[r(g,{modelValue:n(t).email,"onUpdate:modelValue":i[0]||(i[0]=S=>n(t).email=S),placeholder:"Email address...",type:"email"},null,8,["modelValue"])]),_:1}),jt,r(b,{label:"Description:",name:"Description"},{default:_(()=>[r(P,{modelValue:n(t).description,"onUpdate:modelValue":i[1]||(i[1]=S=>n(t).description=S),rows:10,placeholder:"Describe what you think is wrong in this session..."},null,8,["modelValue"])]),_:1}),Rt,a("div",Ut,[a("div",Mt,[r(T,{color:"gray",variant:"link",class:"mr-8",label:"Cancel",onClick:i[2]||(i[2]=S=>$())}),r(T,{type:"submit",class:"w-48 flex justify-center",label:"Submit",loading:n(f),disabled:n(f)},null,8,["loading","disabled"])])])]),_:1},8,["state"])],64)}}}),Ot=ze(ge.ui.strategy,ge.ui.skeleton,ht),Bt=z({inheritAttrs:!1,props:{class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(C){const{ui:s,attrs:v}=Fe("skeleton",qe(C,"ui"),Ot),f=k(()=>He(We(s.value.base,s.value.background,s.value.rounded),C.class));return{ui:s,attrs:v,skeletonClass:f}}});function Nt(C,s,v,f,y,t){return l(),m("div",Ye({class:C.skeletonClass},C.attrs),null,16)}const zt=De(Bt,[["render",Nt]]),Dt={class:"mb-16"},Ft={key:0,class:"rounded overflow-hidden border-2 border-gray-100 dark:border-gray-600 p-4"},qt={key:1},Ht=z({__name:"CandlesChart",props:{form:{},results:{}},setup(C){const s=Qe(),v=k(()=>Ze().params.id),f=w(!0),y=w(2),t=C,$=w();let u=null,d=null;const i={orderEntries:{},positionEntry:null},g=k(()=>s.value),b=t.form.exchange,P=k(()=>`${b}-${t.results.selectedRoute.symbol}-${t.results.selectedRoute.timeframe}`),T=k(()=>t.results.currentCandles),R=k(()=>{const p=t.results.positions.find(h=>h[0].value===t.results.selectedRoute.symbol);return p===void 0?[]:p}),S=k(()=>R.value[2].value),H=k(()=>Number(R.value[1].value)>0?"long":Number(R.value[1].value)<0?"short":"close");ee(T,(p,h)=>{d!==null&&se(p[P.value])}),ee(g,p=>{X(p)}),ee(S,(p,h)=>{d!==null&&p!==h&&G()}),ee(()=>t.results.orders,()=>{d!==null&&K()},{deep:!0}),Je(async()=>{setTimeout(async()=>{await Z()},200)});async function Z(){f.value=!0,await q().fetchCandles(v.value),f.value=!1,he.width=$.value.clientWidth,u=pt($.value,he),u.applyOptions({watermark:{visible:!0,fontSize:16,horzAlign:"left",vertAlign:"bottom",color:"#888",text:`${t.results.selectedRoute.symbol} • ${t.results.selectedRoute.timeframe}`}}),d=u.addCandlestickSeries(),d.setData(t.results.candles),u.timeScale().fitContent(),d.applyOptions({priceFormat:{type:"price",precision:y.value,minMove:.01}}),G(),K(),X(g.value)}Ge(()=>{J()});function J(){u!==null&&(u.remove(),u=null),d&&(d=null)}function G(){const p=H.value==="long"?"#00AB5C":"#FF497D";if(i.positionEntry&&d.removePriceLine(i.positionEntry),Number(S.value)>0){const h={price:Number(S.value),color:p,lineWidth:1,lineStyle:0,axisLabelVisible:!0,title:"Entry Price"};i.positionEntry=d.createPriceLine(h)}}function K(){const p=R.value[0].value;for(const h in i.orderEntries)d.removePriceLine(i.orderEntries[h]),delete i.orderEntries[h];t.results.orders.forEach(h=>{const E=h.side==="buy"?"#00AB5C":"#FF497D",M=ve.startCase(ve.lowerCase(`${h.side} ${h.type}`));if((h.status==="ACTIVE"||h.status==="QUEUED")&&h.symbol===p){const A={price:Number(h.price),color:E,lineWidth:1,lineStyle:0,axisLabelVisible:!0,title:M};i.orderEntries[h.id]=d.createPriceLine(A)}})}function se(p){if(p===void 0)throw new TypeError("candle is undefined!");if(t.results.candles.length===0||t.results.candles[t.results.candles.length-1].time>p.time)return;const E=String(p.open).indexOf("."),M=E===-1?0:String(p.open).length-E-1;y.value!==M&&(y.value=M,d.applyOptions({priceFormat:{type:"price",precision:y.value,minMove:Math.pow(10,-M).toFixed(M)}})),d.update(p)}function X(p){u!==null&&u.applyOptions(p==="light"?ft.chart:gt.chart)}function oe(p){t.results.selectedRoute=p,J(),Z()}return(p,h)=>{const E=zt,M=ie;return l(),m("div",Dt,[n(f)?(l(),m("div",Ft,[r(E,{class:"h-4 w-full mb-4"}),r(E,{class:"h-4 w-2/3 mb-4"}),r(E,{class:"h-4 w-1/2 mb-4"}),r(E,{class:"h-4 w-full mb-4"}),r(E,{class:"h-4 w-full mb-4"}),r(E,{class:"h-4 w-2/3 mb-4"}),r(E,{class:"h-4 w-full mb-4"}),r(E,{class:"h-4 w-full"})])):x("",!0),a("div",{ref_key:"chartContainer",ref:$,class:le({"rounded overflow-hidden border-2 border-gray-100 dark:border-gray-600":!n(f)})},null,2),t.form.routes.length>1?(l(),m("div",qt,[(l(!0),m(F,null,ae(t.form.routes,A=>(l(),L(M,{key:A.symbol,variant:"soft",color:"gray",disabled:p.results.selectedRoute.symbol===A.symbol&&p.results.selectedRoute.timeframe===A.timeframe,class:"mt-2 mr-2",onClick:ue=>oe(A)},{default:_(()=>[xe(N(A.symbol)+" • "+N(A.timeframe),1)]),_:2},1032,["disabled","onClick"]))),128))])):x("",!0)])}}}),Wt={key:0,class:"flex flex-col items-center justify-center select-none mt-[10%]"},Yt=["textContent"],Qt={class:"mt-8"},Zt={key:1,class:"mx-auto container mt-8"},Jt={key:0,"data-cy":"live-page-content"},Gt={class:"flex justify-between items-center"},Kt=a("span",null," No exchange API keys found. Please add at least one: ",-1),Xt={class:"grid grid-cols-1 gap-6"},es={class:"flex justify-between items-center"},ts=a("span",null," No notification API keys found. Please add at least one: ",-1),ss={key:1},os={key:0,class:"mb-8"},rs=a("span",null,"More",-1),ns={key:0},ls={key:0,class:"mt-8 lg:mt-0"},as={key:1,"data-cy":"live-action-button"},is={key:1,class:"my-8 border-2 dark:border-gray-600 rounded-full"},us={key:2,class:"bg-white dark:bg-gray-700 grid grid-cols-1 gap-6 border dark:border-gray-600 rounded py-4 px-6 select-none"},ds={class:"text-sm font-medium text-gray-500 dark:text-gray-400 truncate"},cs={class:"text-sm font-semibold text-gray-900 dark:text-gray-100"},ms={class:"flex justify-between items-center"},ps={class:"flex justify-start items-center"},fs=a("span",null,"Info Logs:",-1),gs={class:"focus:outline-none flex justify-start items-center"},vs={class:"text-sm font-semibold text-gray-900 dark:text-gray-100"},ys={class:"flex justify-between items-center"},bs={class:"flex justify-start items-center"},hs=a("span",null,"Error Logs:",-1),_s={class:"focus:outline-none flex justify-start items-center"},ks={class:"text-sm font-semibold text-gray-900 dark:text-gray-100"},xs={key:3},$s=z({__name:"LiveTab",props:{form:{},results:{},session:{}},setup(C){const s=C,v=w([]),f=w(!1),y=w(!1),t=w(!1),$=w(!1),u=w(!1),d=w(!1),i=w(!1),g=w(!1),b=w(!1),P=w(!1),T=Q(),R=q(),S=w([]);async function H(){if(!s.form.paper_mode){const e=T.exchangeApiKeys.find(o=>o.id===s.form.exchange_api_key_id);e&&(s.form.exchange=e.exchange)}S.value=await Q().getExchangeSupportedSymbols(s.form.exchange);for(let e=0;e<s.form.routes.length;e++)S.value.includes(s.form.routes[e].symbol)||(s.form.routes[e].symbol=S.value[0]);if(s.form.data_routes.length>0)for(let e=0;e<s.form.data_routes.length;e++)S.value.includes(s.form.data_routes[e].symbol)||(s.form.data_routes[e].symbol=S.value[0])}s.form.exchange&&H();const Z=k(()=>{const e=[{label:"Exchange",value:s.results.generalInfo.exchange},{label:"Current Time",value:O.timestampToTime(s.results.generalInfo.current_time)},{label:"Debug Mode",value:s.results.generalInfo.debug_mode},{label:"Paper Trade",value:s.results.generalInfo.paper_mode},{label:"PNL",value:`${s.results.generalInfo.pnl} (${s.results.generalInfo.pnl_perc}%)`},{label:"Started",value:O.timestampToTime(s.results.generalInfo.started_at)},{label:"Started/Current Balance",value:`${s.results.generalInfo.started_balance} / ${s.results.generalInfo.current_balance}`},{label:"Trades",value:`${s.results.generalInfo.count_trades}`}];return s.results.generalInfo.leverage_type!=="spot"&&(e.push({label:"Available Margin",value:`${s.results.generalInfo.available_margin}`}),e.push({label:"Leverage",value:`${s.results.generalInfo.leverage}x (${s.results.generalInfo.leverage_type})`})),e}),J=k(()=>T.notificationApiKeys.map(e=>({label:`${e.name} - ${e.driver}`,value:e.id}))),G=k(()=>Math.round(s.results.progressbar.estimated_remaining_seconds)===0?"Please wait...":`${Math.round(s.results.progressbar.estimated_remaining_seconds)} seconds remaining...`),K=k(()=>{if(!s.results.orders)return[];const e=[],o=5,I=s.results.orders.length,j=I-o>=0?I-o:0;for(let W=I-1;W>=j;W--){const V=s.results.orders[W],U=V.status==="PARTIALLY FILLED"?`${V.filled_qty}/${V.qty}`:V.qty;e.push([{value:O.timestampToTimeOnly(V.created_at),style:"text-xs",tooltip:O.timestampToTime(V.created_at)},{value:V.symbol,style:"text-xs"},{value:V.type,style:"text-xs"},{value:V.side,style:O.colorBasedOnSide(V.side)},{value:V.price,style:"text-xs"},{value:U,style:O.colorBasedOnSide(V.side)},{value:V.status,style:"text-xs"}])}return e}),se=k(()=>{let e=[];const o=T.jesseSupportedTimeframes;return T.settings.live.generate_candles_from_1m||!s.form.exchange?e=o.map(I=>T.planLimits.timeframes.includes(I)?{label:I,value:I,disabled:!1}:{label:`${I} (Upgrade required)`,value:I,disabled:!0}):e=T.exchangeInfo[s.form.exchange].supported_timeframes.map(j=>T.planLimits.timeframes.includes(j)?{label:j,value:j,disabled:!1}:{label:`${j} (Upgrade required)`,value:j,disabled:!0}),e}),X=k(()=>T.liveTradingExchangeNames.map(e=>T.planLimits.exchanges.includes(e)?{label:e,value:e,disabled:!1}:{label:`${e} (Upgrade required)`,value:e,disabled:!0})),oe=k(()=>T.exchangeApiKeys.map(e=>T.planLimits.exchanges.includes(e.exchange)?{label:`${e.exchange} - ${e.name}`,value:e.id,disabled:!1}:{label:`${e.exchange} - ${e.name} (Upgrade required)`,value:e.id,disabled:!0})),p=R.cancel,h=R.newLive;function E(e){if(v.value.length){for(let o=0;o<v.value.length;o++)B("error",v.value[o]);return}if(s.form.paper_mode&&!s.form.exchange||!s.form.paper_mode&&s.form.exchange_api_key_id===""){B("error","Please select an exchange");return}R.start(e)}function M(e){P.value=!1,R.stop(e)}function A(){y.value=!0,navigator.clipboard.writeText(s.results.infoLogs),B("success","Logs copied successfully"),$.value=!0,setTimeout(()=>{$.value=!1},3e3)}function ue(){t.value=!0,navigator.clipboard.writeText(s.results.errorLogs),B("success","Logs copied successfully"),u.value=!0,setTimeout(()=>{u.value=!1},3e3)}const de=k(()=>["basic","pro","enterprise","lifetime"].includes(T.plan));return(e,o)=>{const I=Vt,j=Ke,W=At,V=nt,U=ie,Ce=Xe,Te=it,ce=ut,Y=et,re=mt,Le=lt,me=tt,Ve=$e,Se=Ht,ne=we,Ee=dt,Pe=vt,Ie=ct;return l(),m(F,null,[r(j,{modelValue:n(d),"onUpdate:modelValue":o[0]||(o[0]=c=>D(d)?d.value=c:null),size:"ultra",title:"Orders"},{default:_(()=>[r(I,{orders:e.results.orders},null,8,["orders"])]),_:1},8,["modelValue"]),r(j,{modelValue:n(i),"onUpdate:modelValue":o[2]||(o[2]=c=>D(i)?i.value=c:null),size:"small",title:"Report An Issue"},{default:_(()=>[r(W,{session:e.session,onClose:o[1]||(o[1]=c=>i.value=!1)},null,8,["session"])]),_:1},8,["modelValue"]),r(j,{modelValue:n(g),"onUpdate:modelValue":o[3]||(o[3]=c=>D(g)?g.value=c:null),title:"Info Logs"},{default:_(()=>[r(V,{logs:e.results.infoLogs},null,8,["logs"])]),buttons:_(()=>[a("button",{class:"ml-2 p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none",onClick:A},[n($)?(l(),L(n(ye),{key:0,class:"h-6 w-6","aria-hidden":"true"})):x("",!0),!n($)&&e.results.infoLogs.length!=0?(l(),L(n(be),{key:1,class:"h-6 w-6","aria-hidden":"true"})):x("",!0)])]),_:1},8,["modelValue"]),r(j,{modelValue:n(b),"onUpdate:modelValue":o[4]||(o[4]=c=>D(b)?b.value=c:null),title:"Error Logs"},{default:_(()=>[r(V,{logs:e.results.errorLogs},null,8,["logs"])]),buttons:_(()=>[a("button",{class:"ml-2 p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none",onClick:ue},[n(u)?(l(),L(n(ye),{key:0,class:"h-6 w-6","aria-hidden":"true"})):x("",!0),!n(u)&&e.results.errorLogs.length!=0?(l(),L(n(be),{key:1,class:"h-6 w-6","aria-hidden":"true"})):x("",!0)])]),_:1},8,["modelValue"]),r(Ce,{modelValue:n(P),"onUpdate:modelValue":o[6]||(o[6]=c=>D(P)?P.value=c:null),title:"Termination Confirm",description:"Are you sure you want to terminate this session?",type:"info"},{default:_(()=>[r(U,{variant:"solid",color:"red",class:"flex justify-center",label:"Terminate",onClick:o[5]||(o[5]=c=>M((e._.provides[te]||e.$route).params.id))})]),_:1},8,["modelValue"]),e.results.booting?(l(),m("div",Wt,[a("div",null,[r(Te,{progress:e.results.progressbar.current},null,8,["progress"])]),e.results.exception.error?x("",!0):(l(),m("h3",{key:0,class:"mt-8 animate-pulse",textContent:N(n(G))},null,8,Yt)),a("div",Qt,[e.form.debug_mode?(l(),L(U,{key:0,icon:"i-heroicons-clipboard-document-list",variant:"solid",label:"View Logs",size:"xl",class:"flex justify-center w-64",onClick:o[7]||(o[7]=c=>g.value=!0)})):x("",!0),r(U,{color:"gray",class:"w-64 flex justify-center mt-4",size:"xl",ui:{color:{gray:{solid:"text-rose-500 dark:text-rose-400"}}},icon:"i-heroicons-no-symbol",variant:"solid",label:"Cancel",trailing:!1,onClick:o[8]||(o[8]=c=>n(p)((e._.provides[te]||e.$route).params.id))})]),e.results.exception.error?(l(),m("div",Zt,[r(ce,{modelValue:n(f),"onUpdate:modelValue":o[9]||(o[9]=c=>D(f)?f.value=c:null),title:e.results.exception.error,content:e.results.exception.traceback,mode:"live","debug-mode":e.form.debug_mode},null,8,["modelValue","title","content","debug-mode"])])):x("",!0)])):(l(),L(Ie,{key:1},{left:_(()=>[!e.results.booting&&!e.results.monitoring&&!e.results.showResults?(l(),m("div",Jt,[r(Y,{class:"mb-4",title:"Exchange"}),e.form.paper_mode?(l(),L(re,{key:0,modelValue:e.form.exchange,"onUpdate:modelValue":o[10]||(o[10]=c=>e.form.exchange=c),placeholder:"Select an exchange...",searchable:"",options:n(X),"value-attribute":"value",size:"lg",class:"mt-2 mb-16",onChange:H},null,8,["modelValue","options"])):(l(),L(re,{key:1,modelValue:e.form.exchange_api_key_id,"onUpdate:modelValue":o[11]||(o[11]=c=>e.form.exchange_api_key_id=c),placeholder:"Select an exchange...",searchable:"",options:n(oe),"value-attribute":"value",size:"lg",class:"mt-2 mb-16",onChange:H},{empty:_(()=>[a("div",Gt,[Kt,r(U,{to:"/exchange-api-keys",icon:"i-heroicons-plus",type:"link",variant:"solid",size:"sm",label:"Add Exchange API Key"})])]),_:1},8,["modelValue","options"])),r(Le,{"total-routes-error":n(v),form:e.form,results:e.results,mode:"live",symbols:n(S),timeframes:n(se)},null,8,["total-routes-error","form","results","symbols","timeframes"]),r(Y,{class:"mt-16 mb-4",title:"Options"}),a("div",Xt,[r(me,{modelValue:e.form.debug_mode,"onUpdate:modelValue":o[12]||(o[12]=c=>e.form.debug_mode=c),title:"Debug Mode",description:"Logs more details, helpful for debugging."},null,8,["modelValue"]),r(me,{modelValue:e.form.paper_mode,"onUpdate:modelValue":o[13]||(o[13]=c=>e.form.paper_mode=c),title:"Paper Trade",disabled:!n(de),"disabled-guide":n(de)?"":"Premium plan required",description:"Trade in real-time using actual exchange data with PAPER money."},null,8,["modelValue","disabled","disabled-guide"]),r(Ve,{label:"Notifications:",help:"Select a notification driver to receive notifications"},{default:_(()=>[r(re,{modelValue:e.form.notification_api_key_id,"onUpdate:modelValue":o[14]||(o[14]=c=>e.form.notification_api_key_id=c),placeholder:"Select a notification driver",size:"lg",options:n(J),"value-attribute":"value"},{empty:_(()=>[a("div",es,[ts,r(U,{to:"/notification-api-keys",icon:"i-heroicons-plus",type:"link",variant:"solid",size:"sm",label:"Add Notification API Key"})])]),_:1},8,["modelValue","options"])]),_:1})])])):x("",!0),e.results.monitoring?(l(),m("div",ss,[e.results.exception.error?(l(),m("div",os,[r(ce,{title:e.results.exception.error,content:e.results.exception.traceback,mode:"live","debug-mode":e.form.debug_mode},null,8,["title","content","debug-mode"])])):x("",!0),e.results.monitoring&&!e.results.finished&&!e.results.exception.error?(l(),L(Se,{key:1,results:e.results,form:e.form,exchange:e.form.exchange},null,8,["results","form","exchange"])):x("",!0),r(Y,{class:"mb-4",title:"Routes"}),r(ne,{data:e.results.routes,"header-items":["Symbol","Timeframe","Strategy"],header:""},null,8,["data"]),r(Y,{class:"mt-12 mb-4",title:"Positions"}),r(ne,{data:e.results.positions,"header-items":["Symbol","QTY","Entry","Price","Liq Price","PNL"],header:""},null,8,["data"]),r(Ee,{class:"mt-12 mb-4",title:"Orders"},{default:_(()=>[a("button",{type:"button",class:"inline-flex items-center shadow-sm px-4 py-1.5 border border-gray-300 dark:border-gray-900 text-sm leading-5 font-medium rounded-full text-gray-700 dark:text-gray-100 bg-white dark:bg-backdrop-dark hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none",onClick:o[15]||(o[15]=c=>d.value=!0)},[r(n(bt),{class:"-ml-1.5 mr-1 h-5 w-5 text-gray-400","aria-hidden":"true"}),rs])]),_:1}),r(ne,{data:n(K),"header-items":["Created","Symbol","Type","Side","Price","QTY","Status"],header:""},null,8,["data"])])):x("",!0)]),right:_(()=>[e.results.booting?x("",!0):(l(),m("div",ns,[e.results.monitoring?(l(),m("div",ls,[e.results.finished?(l(),L(U,{key:0,class:"w-full flex justify-center",variant:"solid",icon:"i-heroicons-plus",size:"xl",label:"New session",onClick:o[16]||(o[16]=c=>n(h)((e._.provides[te]||e.$route).params.id))})):(l(),L(U,{key:1,class:"w-full flex justify-center",variant:"solid",color:"gray",icon:"i-heroicons-no-symbol",size:"xl",label:e.results.terminating?"Terminating...":"Terminate",ui:{color:{gray:{solid:"text-rose-500 dark:text-rose-400"}}},onClick:o[17]||(o[17]=c=>P.value=!0)},null,8,["label"])),e.results.monitoring||e.results.finished?(l(),L(U,{key:2,class:"w-full flex justify-center mt-4",variant:"solid",color:"gray",icon:"i-heroicons-flag",size:"xl",label:"Report",onClick:o[18]||(o[18]=c=>i.value=!0)})):x("",!0)])):(l(),m("div",as,[r(U,{class:"w-full flex justify-center",icon:"i-heroicons-bolt",size:"xl",variant:"solid",label:"Start",trailing:!1,onClick:o[19]||(o[19]=c=>E((e._.provides[te]||e.$route).params.id))})]))])),e.results.monitoring?(l(),m("hr",is)):x("",!0),e.results.monitoring?(l(),m("dl",us,[(l(!0),m(F,null,ae(n(Z),c=>(l(),m("div",{key:c.label,class:"flex justify-between items-center"},[a("div",ds,N(c.label)+":",1),a("div",cs,N(c.value),1)]))),128)),a("div",ms,[a("div",ps,[a("button",{class:"text-sm font-medium text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 truncate flex items-center hover:underline cursor-pointer focus:outline-none",onClick:o[20]||(o[20]=c=>g.value=!0)},[fs,a("span",gs,[r(n(_e),{class:"w-6 h-6 ml-2"})])])]),a("div",vs,N(e.results.generalInfo.count_info_logs),1)]),a("div",ys,[a("div",bs,[a("button",{class:"text-sm font-medium text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 truncate flex items-center hover:underline cursor-pointer focus:outline-none",onClick:o[21]||(o[21]=c=>b.value=!0)},[hs,a("span",_s,[r(n(_e),{class:"w-6 h-6 ml-2 cursor-pointer"})])])]),a("div",ks,N(e.results.generalInfo.count_error_logs),1)])])):x("",!0),e.results.monitoring&&e.results.watchlist.length?(l(),m("div",xs,[r(Y,{class:"mt-8 mb-4",title:"Watch List"}),r(Pe,{data:e.results.watchlist},null,8,["data"])])):x("",!0)]),_:1}))],64)}}}),ws={class:"w-full"},Rs=z({__name:"[id]",setup(C){yt({title:"Live/Paper trading - Jesse"});const s=q(),v=k(()=>s.tabs),f=ke(),y=k(()=>f.params.id),t=k(()=>{if(!v.value[y.value]){const u=Object.keys(v.value);if(u.length>0){const d=v.value[u[0]];return st().push(`/live/${d.id}`),d}}return v.value[y.value]});(!Object.keys(t.value).includes("selectedRoute")||Object.keys(t.value.results.selectedRoute).length==0||$(t.value.results.selectedRoute,t.value.form.routes[0]))&&(t.value.results.selectedRoute=t.value.form.routes[0]),t.value.form.exchange==""&&(t.value.form.exchange=t.value.results.generalInfo.exchange),Object.keys(v.value).length===0&&q().addTab();function $(u,d){return u.length!==d.length?!1:u.every((i,g)=>i===d[g])}return(u,d)=>{const i=Lt,g=$s;return l(),m(F,null,[a("div",ws,[r(i,{tabs:v.value,onClose:n(s).closeTab,onCancel:n(s).cancel},null,8,["tabs","onClose","onCancel"])]),t.value?(l(),L(g,{key:0,form:t.value.form,results:t.value.results,session:y.value},null,8,["form","results","session"])):x("",!0)],64)}}});export{Rs as default};
