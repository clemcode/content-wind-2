import{u as m}from"./asyncData.9142c80e.js";import{H as c,S as p,d as i,a7 as u,r as l,O as e,l as d}from"./entry.0b5fcabb.js";import f from"./Ellipsis.f3640a88.js";import _ from"./ComponentPlaygroundData.9869ed60.js";import"./TabsHeader.8f7c6171.js";import"./ComponentPlaygroundProps.85c835f5.js";import"./ProseH4.9802f949.js";import"./ProseCodeInline.1625ba1c.js";import"./Badge.ffeefebd.js";import"./ContentSlot.4592a211.js";import"./ProseP.bffca3f2.js";import"./index.4e6d7c1c.js";import"./ComponentPlaygroundSlots.vue.d4741ca5.js";import"./ComponentPlaygroundTokens.vue.7be145c8.js";async function y(o){const t=c(o);{const{data:n}=await m(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const g=i({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>u(o.component)),n=l({...o.props}),r=await y(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(_,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}});const E=d(g,[["__scopeId","data-v-ffdff82a"]]);export{E as default};