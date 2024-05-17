import{T as ue}from"./TopNav-DTdEBAFh.js";import{v as pe,a6 as ve,h as V,a7 as Z,a8 as ge,q as z,a9 as me,r as y,R as he,aa as j,ab as fe,ac as _e,D as ye,k as w,ad as we,_ as N,X as J,a1 as be,ae as ee,af as te,g as D,e as x,o as h,c as f,i as e,t as S,U as $,a0 as C,ag as ne,F as T,l as F,a as k,Q as ae,m as oe,J as q,a2 as K,ah as Q,a3 as X,ai as ie,aj as Y,Y as I,ak as se,p as M,n as H,b as Ue,al as le,s as Ee,am as Se,an as $e}from"./index-Dc6UreIG.js";function W(s){return _e((n,p)=>({get(){return n(),s},set(a){s=a,requestAnimationFrame(()=>{requestAnimationFrame(()=>{p()})})}}))}class xe extends ge{constructor(n={}){return super(n),this.vueRenderers=z(new Map),this.contentComponent=null,this.reactiveState=W(this.view.state),this.reactiveExtensionStorage=W(this.extensionStorage),this.on("transaction",()=>{this.reactiveState.value=this.view.state,this.reactiveExtensionStorage.value=this.extensionStorage}),me(this)}get state(){return this.reactiveState?this.reactiveState.value:this.view.state}get storage(){return this.reactiveExtensionStorage?this.reactiveExtensionStorage.value:super.storage}registerPlugin(n,p){super.registerPlugin(n,p),this.reactiveState.value=this.view.state}unregisterPlugin(n){super.unregisterPlugin(n),this.reactiveState.value=this.view.state}}const re=pe({name:"EditorContent",props:{editor:{default:null,type:Object}},setup(s){const n=y(),p=we();return he(()=>{const a=s.editor;a&&a.options.element&&n.value&&ye(()=>{if(!n.value||!a.options.element.firstChild)return;const g=w(n.value);n.value.append(...a.options.element.childNodes),a.contentComponent=p.ctx._,a.setOptions({element:g}),a.createNodeViews()})}),Z(()=>{const a=s.editor;if(!a||(a.isDestroyed||a.view.setProps({nodeViews:{}}),a.contentComponent=null,!a.options.element.firstChild))return;const g=document.createElement("div");g.append(...a.options.element.childNodes),a.setOptions({element:g})}),{rootEl:n}},render(){const s=[];return this.editor&&this.editor.vueRenderers.forEach(n=>{const p=j(fe,{to:n.teleportElement,key:n.id},j(n.component,{ref:n.id,...n.props}));s.push(p)}),j("div",{ref:n=>{this.rootEl=n}},...s)}}),de=(s={})=>{const n=ve();return V(()=>{n.value=new xe(s)}),Z(()=>{var p;(p=n.value)===null||p===void 0||p.destroy()}),n},ce=s=>(M("data-v-ea8c84e8"),s=s(),H(),s),Re={key:0,class:"admin-section"},Ce=ce(()=>e("option",{value:""},"Select Origin",-1)),ke=["value"],Ae={class:"submit-btn"},Le={key:0},Pe=ce(()=>e("h3",null,"Existing Plants",-1)),De={class:"items-list"},Ie={class:"button-group"},Te=["onClick"],Fe=["onClick"],qe={__name:"PlantManagement",setup(s){const n=J(),p=be(),a=y([]),g=y([]),t=y(!1),l=z({id:null,name:"",origin:"",description:"",image:null,imageURL:""}),R=de({extensions:[ee,te.configure({types:["heading","paragraph"]})],content:"<p>Start typing description...</p>",onUpdate:({editor:c})=>{l.description=c.getHTML()}});V(async()=>{await A(),await L()});async function A(){const c=await D(x(n,"areas"));g.value=c.docs.map(d=>d.data())}async function L(){const c=await D(x(n,"plants"));a.value=c.docs.map(d=>({id:d.id,...d.data()}))}const P=async c=>{const d=c.target.files[0];if(d){const v=K(p,`plants/${d.name}`);await Q(v,d),l.imageURL=await X(v)}},m=async()=>{if(!l.description||!l.imageURL){console.error("Description or image URL is missing.");return}try{const c=await ie(x(n,"plants"),{name:l.name,origin:l.origin,description:l.description,imageURL:l.imageURL});a.value.push({id:c.id,...l}),E()}catch(c){console.error("Failed to submit plant:",c)}},u=async()=>{if(!l.id)return;await Y(I(n,"plants",l.id),l);const c=a.value.findIndex(d=>d.id===l.id);a.value[c]={...l},E()},_=async c=>{await se(I(n,"plants",c)),a.value=a.value.filter(d=>d.id!==c)},b=c=>{Object.assign(l,c),t.value=!0},E=()=>{Object.assign(l,{id:null,name:"",origin:"",description:"",image:null,imageURL:""}),t.value=!1};return(c,d)=>w(R)?(h(),f("section",Re,[e("h2",null,S(t.value?"Edit Plant":"Add New Plant"),1),e("form",{onSubmit:d[3]||(d[3]=ae(v=>t.value?u():m(),["prevent"]))},[$(e("input",{type:"text","onUpdate:modelValue":d[0]||(d[0]=v=>l.name=v),placeholder:"Plant Name",required:""},null,512),[[C,l.name]]),$(e("select",{"onUpdate:modelValue":d[1]||(d[1]=v=>l.origin=v),required:""},[Ce,(h(!0),f(T,null,F(g.value,v=>(h(),f("option",{key:v.id,value:v.name},S(v.name),9,ke))),128))],512),[[ne,l.origin]]),k(w(re),{editor:w(R)},null,8,["editor"]),$(e("textarea",{"onUpdate:modelValue":d[2]||(d[2]=v=>l.description=v),placeholder:"Plant description..."},null,512),[[C,l.description]]),e("input",{type:"file",onChange:P,required:""},null,32),e("button",Ae,S(t.value?"Update Plant":"Add Plant"),1)],32),t.value?q("",!0):(h(),f("div",Le,[Pe,e("ul",De,[(h(!0),f(T,null,F(a.value,v=>(h(),f("li",{key:v.id},[oe(S(v.name)+" ",1),e("div",Ie,[e("button",{onClick:O=>b(v)},"Edit",8,Te),e("button",{onClick:O=>_(v.id)},"Delete",8,Fe)])]))),128))])]))])):q("",!0)}},Ve=N(qe,[["__scopeId","data-v-ea8c84e8"]]),U=s=>(M("data-v-1f840334"),s=s(),H(),s),Ne={key:0,class:"admin-section"},Me={class:"editor-toolbar"},He={class:"style-dropdown"},Oe=U(()=>e("option",{value:""},"Style",-1)),Be=U(()=>e("option",{value:"bold"},"Bold",-1)),je=U(()=>e("option",{value:"italic"},"Italic",-1)),ze=U(()=>e("option",{value:"underline"},"Underline",-1)),Je=[Oe,Be,je,ze],Ke={class:"align-dropdown"},Qe=U(()=>e("option",{value:""},"Align",-1)),Xe=U(()=>e("option",{value:"left"},"Left",-1)),Ye=U(()=>e("option",{value:"center"},"Center",-1)),Ge=U(()=>e("option",{value:"right"},"Right",-1)),We=[Qe,Xe,Ye,Ge],Ze=Ue('<option value="" data-v-1f840334>Heading</option><option value="" data-v-1f840334>Paragraph</option><option value="h1" data-v-1f840334>Heading 1</option><option value="h2" data-v-1f840334>Heading 2</option><option value="h3" data-v-1f840334>Heading 3</option><option value="h4" data-v-1f840334>Heading 4</option><option value="h5" data-v-1f840334>Heading 5</option>',7),et=[Ze],tt={class:"submit-btn"},nt={key:0},at=U(()=>e("h3",null,"Existing Events",-1)),ot={class:"items-list"},it={class:"button-group"},st=["onClick"],lt=["onClick"],rt={__name:"EventManagement",setup(s){const n=J(),p=y([]),a=y([]),g=y(!1),t=z({id:null,title:"",date:"",description:"",image:null,imageURL:"",program:""}),l=de({extensions:[ee,te.configure({types:["heading","paragraph"]})],content:"<p>Start typing...</p>",onUpdate:({editor:i})=>{t.description=i.getHTML()}});V(async()=>{await R()});async function R(){await A(),await L()}async function A(){const i=await D(x(n,"areas"));p.value=i.docs.map(o=>({id:o.id,name:o.data().name}))}async function L(){const i=await D(x(n,"events"));a.value=i.docs.map(o=>({id:o.id,...o.data()}))}async function P(i,o){if(!i){console.error("No file selected");return}const r=K(le,`${o}/${i.name}`),B=await Q(r,i);return await X(B.ref)}const m=async i=>{const o=i.target.files[0];o&&(t.imageURL=await P(o,"events"))},u=async()=>{if(!t.description){console.error("Description is missing.");return}const i=await ie(x(n,"events"),{title:t.title,date:t.date,description:t.description,imageURL:t.imageURL,program:t.program});a.value.push({id:i.id,...t}),c()},_=async()=>{if(!t.id)return;await Y(I(n,"events",t.id),{title:t.title,date:t.date,description:t.description,imageURL:t.imageURL,program:t.program});const i=a.value.findIndex(o=>o.id===t.id);i!==-1&&(a.value[i]={...t}),c()},b=async i=>{await se(I(n,"events",i)),a.value=a.value.filter(o=>o.id!==i)},E=i=>{Object.assign(t,i),g.value=!0},c=()=>{Object.assign(t,{id:null,title:"",date:"",description:"",image:null,imageURL:"",program:""}),g.value=!1},d=(i,o)=>{if(i)switch(o){case"bold":i.chain().focus().toggleBold().run();break;case"italic":i.chain().focus().toggleItalic().run();break;case"underline":i.chain().focus().toggleUnderline().run();break}},v=(i,o)=>{i&&i.chain().focus().setTextAlign(o).run()},O=(i,o)=>{console.log("Received level:",o);const r=parseInt(o,10);console.log("Parsed heading level:",r),i&&r>0&&r<=5?i.chain().focus().setHeading({level:r}).run():i.chain().focus().setParagraph().run()};return(i,o)=>w(l)?(h(),f("section",Ne,[e("h2",null,S(g.value?"Edit Event":"Add New Event"),1),e("form",{onSubmit:o[7]||(o[7]=ae(r=>g.value?_():u(),["prevent"]))},[$(e("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=r=>t.title=r),placeholder:"Event Title",required:""},null,512),[[C,t.title]]),$(e("input",{type:"date","onUpdate:modelValue":o[1]||(o[1]=r=>t.date=r),required:""},null,512),[[C,t.date]]),$(e("input",{type:"text","onUpdate:modelValue":o[2]||(o[2]=r=>t.program=r),placeholder:"Program",required:""},null,512),[[C,t.program]]),e("div",Me,[e("div",He,[e("select",{onChange:o[3]||(o[3]=r=>d(w(l),r.target.value))},Je,32)]),e("div",Ke,[e("select",{onChange:o[4]||(o[4]=r=>v(w(l),r.target.value))},We,32)]),e("select",{onChange:o[5]||(o[5]=r=>O(w(l),r.target.value))},et,32)]),k(w(re),{editor:w(l)},null,8,["editor"]),$(e("textarea",{"onUpdate:modelValue":o[6]||(o[6]=r=>t.description=r),placeholder:"event description..."},null,512),[[C,t.description]]),e("input",{type:"file",onChange:m,required:""},null,32),e("button",tt,S(g.value?"Update Event":"Add Event"),1)],32),g.value?q("",!0):(h(),f("div",nt,[at,e("ul",ot,[(h(!0),f(T,null,F(a.value,r=>(h(),f("li",{key:r.id},[oe(S(r.title)+" ",1),e("div",it,[e("button",{onClick:B=>E(r)},"Edit",8,st),e("button",{onClick:B=>b(r.id)},"Delete",8,lt)])]))),128))])]))])):q("",!0)}},dt=N(rt,[["__scopeId","data-v-1f840334"]]),G=s=>(M("data-v-f33273cc"),s=s(),H(),s),ct={class:"admin-section"},ut=G(()=>e("h2",null,"Audio Management",-1)),pt={class:"audio-uploader"},vt=G(()=>e("label",{for:"audio-file",class:"upload-btn"},"Choose Audio",-1)),gt=G(()=>e("option",{disabled:"",value:""},"Select Area",-1)),mt=["value"],ht=["disabled"],ft={__name:"AudioUploader",setup(s){const n=J(),p=y([]),a=y(""),g=y(""),t=y(null);async function l(){const m=await D(x(n,"areas"));p.value=m.docs.map(u=>({id:u.id,name:u.data().name}))}function R(m){if(m.target.files.length>0){const u=m.target.files[0];console.log("File selected:",u.name,u.size,u.type),t.value=u}else t.value=null}const A=Ee(()=>a.value&&t.value);async function L(){if(!t.value||!a.value){alert("Please select a file and area before uploading!");return}const m=t.value.files[0];let u={contentType:"audio/mpeg"};if(!u.contentType&&m.name){const b=m.name.split(".").pop().toLowerCase();b==="mp3"?u.contentType="audio/mp3":b==="wav"&&(u.contentType="audio/wav")}const _=K(le,`audio/${m.name}`);try{const b=await Q(_,m,u),E=await X(b.ref);g.value=E,console.log("Audio uploaded:",E),await P(E),alert("Audio uploaded successfully!")}catch(b){console.error("Upload failed:",b),alert("Upload failed!")}}async function P(m){const u=I(n,"areas",a.value);try{await Y(u,{audioURL:m}),console.log("Audio URL saved to Firestore successfully")}catch(_){console.error("Failed to save audio URL to Firestore:",_),alert("Failed to save audio URL!")}}return V(async()=>{await l()}),(m,u)=>(h(),f("section",ct,[ut,e("div",pt,[e("input",{type:"file",ref_key:"fileInput",ref:t,onChange:R,accept:"audio/*",id:"audio-file",style:{display:"none"}},null,544),vt,$(e("select",{"onUpdate:modelValue":u[0]||(u[0]=_=>a.value=_)},[gt,(h(!0),f(T,null,F(p.value,_=>(h(),f("option",{key:_.id,value:_.id},S(_.name),9,mt))),128))],512),[[ne,a.value]]),e("button",{onClick:L,disabled:!A.value,class:"submit-btn"},"Upload Audio",8,ht)])]))}},_t=N(ft,[["__scopeId","data-v-f33273cc"]]),yt=s=>(M("data-v-08fe487d"),s=s(),H(),s),wt={class:"admin-container"},bt=yt(()=>e("h2",{class:"admin-header"},"Admin Dashboard",-1)),Ut={__name:"AdminDashboard",setup(s){const n=Se(),p=y(n.currentUser.email);return(a,g)=>(h(),f("div",wt,[k(ue),bt,k(Ve),k(dt),k(_t),e("button",{class:"signout-button",onClick:g[0]||(g[0]=t=>w($e)(p.value))},"Sign out")]))}},xt=N(Ut,[["__scopeId","data-v-08fe487d"]]);export{xt as default};
