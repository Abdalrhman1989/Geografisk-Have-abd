import{T as ue}from"./TopNav-DWv9ZBtU.js";import{v as pe,a5 as ve,h as V,a6 as Z,a7 as ge,q as z,a8 as me,r as y,R as he,a9 as j,aa as fe,ab as _e,D as ye,k as b,ac as we,_ as N,g as J,a0 as ee,ad as te,ae,e as D,f as $,o as h,c as f,i as e,t as E,U as S,$ as R,af as ne,F as T,l as F,a as C,Q as oe,m as se,J as q,a1 as K,ag as Q,a2 as X,ah as ie,ai as G,X as I,aj as le,p as M,n as H,b as be,s as Ue,ak as Ee,al as Se}from"./index-ZhndnWAu.js";function Y(l){return _e((t,g)=>({get(){return t(),l},set(o){l=o,requestAnimationFrame(()=>{requestAnimationFrame(()=>{g()})})}}))}class $e extends ge{constructor(t={}){return super(t),this.vueRenderers=z(new Map),this.contentComponent=null,this.reactiveState=Y(this.view.state),this.reactiveExtensionStorage=Y(this.extensionStorage),this.on("transaction",()=>{this.reactiveState.value=this.view.state,this.reactiveExtensionStorage.value=this.extensionStorage}),me(this)}get state(){return this.reactiveState?this.reactiveState.value:this.view.state}get storage(){return this.reactiveExtensionStorage?this.reactiveExtensionStorage.value:super.storage}registerPlugin(t,g){super.registerPlugin(t,g),this.reactiveState.value=this.view.state}unregisterPlugin(t){super.unregisterPlugin(t),this.reactiveState.value=this.view.state}}const re=pe({name:"EditorContent",props:{editor:{default:null,type:Object}},setup(l){const t=y(),g=we();return he(()=>{const o=l.editor;o&&o.options.element&&t.value&&ye(()=>{if(!t.value||!o.options.element.firstChild)return;const c=b(t.value);t.value.append(...o.options.element.childNodes),o.contentComponent=g.ctx._,o.setOptions({element:c}),o.createNodeViews()})}),Z(()=>{const o=l.editor;if(!o||(o.isDestroyed||o.view.setProps({nodeViews:{}}),o.contentComponent=null,!o.options.element.firstChild))return;const c=document.createElement("div");c.append(...o.options.element.childNodes),o.setOptions({element:c})}),{rootEl:t}},render(){const l=[];return this.editor&&this.editor.vueRenderers.forEach(t=>{const g=j(fe,{to:t.teleportElement,key:t.id},j(t.component,{ref:t.id,...t.props}));l.push(g)}),j("div",{ref:t=>{this.rootEl=t}},...l)}}),de=(l={})=>{const t=ve();return V(()=>{t.value=new $e(l)}),Z(()=>{var g;(g=t.value)===null||g===void 0||g.destroy()}),t},ce=l=>(M("data-v-ea8c84e8"),l=l(),H(),l),xe={key:0,class:"admin-section"},Re=ce(()=>e("option",{value:""},"Select Origin",-1)),Ce=["value"],Ae={class:"submit-btn"},ke={key:0},Le=ce(()=>e("h3",null,"Existing Plants",-1)),Pe={class:"items-list"},De={class:"button-group"},Ie=["onClick"],Te=["onClick"],Fe={__name:"PlantManagement",setup(l){const t=J(),g=ee(),o=y([]),c=y([]),a=y(!1),s=z({id:null,name:"",origin:"",description:"",image:null,imageURL:""}),x=de({extensions:[te,ae.configure({types:["heading","paragraph"]})],content:"<p>Start typing description...</p>",onUpdate:({editor:r})=>{s.description=r.getHTML()}});V(async()=>{await A(),await k()});async function A(){const r=await D($(t,"areas"));c.value=r.docs.map(u=>u.data())}async function k(){const r=await D($(t,"plants"));o.value=r.docs.map(u=>({id:u.id,...u.data()}))}const L=async r=>{const u=r.target.files[0];if(u){const v=K(g,`plants/${u.name}`);await Q(v,u),s.imageURL=await X(v)}},P=async()=>{if(!s.description||!s.imageURL){console.error("Description or image URL is missing.");return}try{const r=await ie($(t,"plants"),{name:s.name,origin:s.origin,description:s.description,imageURL:s.imageURL});o.value.push({id:r.id,...s}),w()}catch(r){console.error("Failed to submit plant:",r)}},m=async()=>{if(!s.id)return;await G(I(t,"plants",s.id),s);const r=o.value.findIndex(u=>u.id===s.id);o.value[r]={...s},w()},p=async r=>{await le(I(t,"plants",r)),o.value=o.value.filter(u=>u.id!==r)},_=r=>{Object.assign(s,r),a.value=!0},w=()=>{Object.assign(s,{id:null,name:"",origin:"",description:"",image:null,imageURL:""}),a.value=!1};return(r,u)=>b(x)?(h(),f("section",xe,[e("h2",null,E(a.value?"Edit Plant":"Add New Plant"),1),e("form",{onSubmit:u[3]||(u[3]=oe(v=>a.value?m():P(),["prevent"]))},[S(e("input",{type:"text","onUpdate:modelValue":u[0]||(u[0]=v=>s.name=v),placeholder:"Plant Name",required:""},null,512),[[R,s.name]]),S(e("select",{"onUpdate:modelValue":u[1]||(u[1]=v=>s.origin=v),required:""},[Re,(h(!0),f(T,null,F(c.value,v=>(h(),f("option",{key:v.id,value:v.name},E(v.name),9,Ce))),128))],512),[[ne,s.origin]]),C(b(re),{editor:b(x)},null,8,["editor"]),S(e("textarea",{"onUpdate:modelValue":u[2]||(u[2]=v=>s.description=v),placeholder:"Plant description..."},null,512),[[R,s.description]]),e("input",{type:"file",onChange:L,required:""},null,32),e("button",Ae,E(a.value?"Update Plant":"Add Plant"),1)],32),a.value?q("",!0):(h(),f("div",ke,[Le,e("ul",Pe,[(h(!0),f(T,null,F(o.value,v=>(h(),f("li",{key:v.id},[se(E(v.name)+" ",1),e("div",De,[e("button",{onClick:O=>_(v)},"Edit",8,Ie),e("button",{onClick:O=>p(v.id)},"Delete",8,Te)])]))),128))])]))])):q("",!0)}},qe=N(Fe,[["__scopeId","data-v-ea8c84e8"]]),U=l=>(M("data-v-6d7092fa"),l=l(),H(),l),Ve={key:0,class:"admin-section"},Ne={class:"editor-toolbar"},Me={class:"style-dropdown"},He=U(()=>e("option",{value:""},"Style",-1)),Oe=U(()=>e("option",{value:"bold"},"Bold",-1)),Be=U(()=>e("option",{value:"italic"},"Italic",-1)),je=U(()=>e("option",{value:"underline"},"Underline",-1)),ze=[He,Oe,Be,je],Je={class:"align-dropdown"},Ke=U(()=>e("option",{value:""},"Align",-1)),Qe=U(()=>e("option",{value:"left"},"Left",-1)),Xe=U(()=>e("option",{value:"center"},"Center",-1)),Ge=U(()=>e("option",{value:"right"},"Right",-1)),We=[Ke,Qe,Xe,Ge],Ye=be('<option value="" data-v-6d7092fa>Heading</option><option value="" data-v-6d7092fa>Paragraph</option><option value="h1" data-v-6d7092fa>Heading 1</option><option value="h2" data-v-6d7092fa>Heading 2</option><option value="h3" data-v-6d7092fa>Heading 3</option><option value="h4" data-v-6d7092fa>Heading 4</option><option value="h5" data-v-6d7092fa>Heading 5</option>',7),Ze=[Ye],et={class:"submit-btn"},tt={key:0},at=U(()=>e("h3",null,"Existing Events",-1)),nt={class:"items-list"},ot={class:"button-group"},st=["onClick"],it=["onClick"],lt={__name:"EventManagement",setup(l){const t=J(),g=y([]),o=y([]),c=y(!1),a=z({id:null,title:"",date:"",description:"",image:null,imageURL:"",program:""}),s=de({extensions:[te,ae.configure({types:["heading","paragraph"]})],content:"<p>Start typing...</p>",onUpdate:({editor:i})=>{a.description=i.getHTML()}});V(async()=>{await x()});async function x(){await A(),await k()}async function A(){const i=await D($(t,"areas"));g.value=i.docs.map(n=>({id:n.id,name:n.data().name}))}async function k(){const i=await D($(t,"events"));o.value=i.docs.map(n=>({id:n.id,...n.data()}))}async function L(i,n){if(!i){console.error("No file selected");return}const d=K(storage,`${n}/${i.name}`),B=await Q(d,i);return await X(B.ref)}const P=async i=>{const n=i.target.files[0];n&&(a.imageURL=await L(n,"events"))},m=async()=>{if(!a.description){console.error("Description is missing.");return}const i=await ie($(t,"events"),{title:a.title,date:a.date,description:a.description,imageURL:a.imageURL,program:a.program});o.value.push({id:i.id,...a}),r()},p=async()=>{if(!a.id)return;await G(I(t,"events",a.id),{title:a.title,date:a.date,description:a.description,imageURL:a.imageURL,program:a.program});const i=o.value.findIndex(n=>n.id===a.id);i!==-1&&(o.value[i]={...a}),r()},_=async i=>{await le(I(t,"events",i)),o.value=o.value.filter(n=>n.id!==i)},w=i=>{Object.assign(a,i),c.value=!0},r=()=>{Object.assign(a,{id:null,title:"",date:"",description:"",image:null,imageURL:"",program:""}),c.value=!1},u=(i,n)=>{if(i)switch(n){case"bold":i.chain().focus().toggleBold().run();break;case"italic":i.chain().focus().toggleItalic().run();break;case"underline":i.chain().focus().toggleUnderline().run();break}},v=(i,n)=>{i&&i.chain().focus().setTextAlign(n).run()},O=(i,n)=>{console.log("Received level:",n);const d=parseInt(n,10);console.log("Parsed heading level:",d),i&&d>0&&d<=5?i.chain().focus().setHeading({level:d}).run():i.chain().focus().setParagraph().run()};return(i,n)=>b(s)?(h(),f("section",Ve,[e("h2",null,E(c.value?"Edit Event":"Add New Event"),1),e("form",{onSubmit:n[7]||(n[7]=oe(d=>c.value?p():m(),["prevent"]))},[S(e("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=d=>a.title=d),placeholder:"Event Title",required:""},null,512),[[R,a.title]]),S(e("input",{type:"date","onUpdate:modelValue":n[1]||(n[1]=d=>a.date=d),required:""},null,512),[[R,a.date]]),S(e("input",{type:"text","onUpdate:modelValue":n[2]||(n[2]=d=>a.program=d),placeholder:"Program",required:""},null,512),[[R,a.program]]),e("div",Ne,[e("div",Me,[e("select",{onChange:n[3]||(n[3]=d=>u(b(s),d.target.value))},ze,32)]),e("div",Je,[e("select",{onChange:n[4]||(n[4]=d=>v(b(s),d.target.value))},We,32)]),e("select",{onChange:n[5]||(n[5]=d=>O(b(s),d.target.value))},Ze,32)]),C(b(re),{editor:b(s)},null,8,["editor"]),S(e("textarea",{"onUpdate:modelValue":n[6]||(n[6]=d=>a.description=d),placeholder:"event description..."},null,512),[[R,a.description]]),e("input",{type:"file",onChange:P,required:""},null,32),e("button",et,E(c.value?"Update Event":"Add Event"),1)],32),c.value?q("",!0):(h(),f("div",tt,[at,e("ul",nt,[(h(!0),f(T,null,F(o.value,d=>(h(),f("li",{key:d.id},[se(E(d.title)+" ",1),e("div",ot,[e("button",{onClick:B=>w(d)},"Edit",8,st),e("button",{onClick:B=>_(d.id)},"Delete",8,it)])]))),128))])]))])):q("",!0)}},rt=N(lt,[["__scopeId","data-v-6d7092fa"]]),W=l=>(M("data-v-5aaaf4d7"),l=l(),H(),l),dt={class:"admin-section"},ct=W(()=>e("h2",null,"Audio Management",-1)),ut={class:"audio-uploader"},pt=W(()=>e("label",{for:"audio-file",class:"upload-btn"},"Choose Audio",-1)),vt=W(()=>e("option",{disabled:"",value:""},"Select Area",-1)),gt=["value"],mt=["disabled"],ht={__name:"AudioUploader",setup(l){const t=J(),g=ee(),o=y([]),c=y(""),a=y(""),s=y(null);async function x(){const m=await D($(t,"areas"));o.value=m.docs.map(p=>({id:p.id,name:p.data().name}))}function A(m){if(m.target.files.length>0){const p=m.target.files[0];console.log("File selected:",p.name,p.size,p.type),s.value=p}else s.value=null}const k=Ue(()=>c.value&&s.value);async function L(){if(!s.value||!c.value){alert("Please select a file and area before uploading!");return}const m=s.value.files[0];let p={contentType:"audio/mpeg"};if(!p.contentType&&m.name){const w=m.name.split(".").pop().toLowerCase();w==="mp3"?p.contentType="audio/mp3":w==="wav"&&(p.contentType="audio/wav")}const _=K(g,`audio/${m.name}`);try{const w=await Q(_,m,p),r=await X(w.ref);a.value=r,console.log("Audio uploaded:",r),await P(r),alert("Audio uploaded successfully!")}catch(w){console.error("Upload failed:",w),alert("Upload failed!")}}async function P(m){const p=I(t,"areas",c.value);try{await G(p,{audioURL:m}),console.log("Audio URL saved to Firestore successfully")}catch(_){console.error("Failed to save audio URL to Firestore:",_),alert("Failed to save audio URL!")}}return V(async()=>{await x()}),(m,p)=>(h(),f("section",dt,[ct,e("div",ut,[e("input",{type:"file",ref_key:"fileInput",ref:s,onChange:A,accept:"audio/*",id:"audio-file",style:{display:"none"}},null,544),pt,S(e("select",{"onUpdate:modelValue":p[0]||(p[0]=_=>c.value=_)},[vt,(h(!0),f(T,null,F(o.value,_=>(h(),f("option",{key:_.id,value:_.id},E(_.name),9,gt))),128))],512),[[ne,c.value]]),e("button",{onClick:L,disabled:!k.value,class:"submit-btn"},"Upload Audio",8,mt)])]))}},ft=N(ht,[["__scopeId","data-v-5aaaf4d7"]]),_t=l=>(M("data-v-6c81fe11"),l=l(),H(),l),yt={class:"admin-container"},wt=_t(()=>e("h2",{class:"admin-header"},"Admin Dashboard",-1)),bt={__name:"AdminDashboard",setup(l){const t=Ee(),g=Se();return y(g.currentUser.email),(o,c)=>(h(),f("div",yt,[C(ue),wt,C(qe),C(rt),C(ft),e("button",{class:"signout-button",onClick:c[0]||(c[0]=a=>b(t).logout())},"Sign out")]))}},$t=N(bt,[["__scopeId","data-v-6c81fe11"]]);export{$t as default};
