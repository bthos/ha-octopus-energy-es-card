var OctopusConsumptionCard=function(e){"use strict";
/**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const t=globalThis,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),r=new WeakMap;let a=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=r.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(t,e))}return e}toString(){return this.cssText}};const s=(e,...t)=>{const i=1===e.length?e[0]:t.reduce((t,i,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1],e[0]);return new a(i,e,o)},n=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new a("string"==typeof e?e:e+"",void 0,o))(t)})(e):e,{is:c,defineProperty:l,getOwnPropertyDescriptor:d,getOwnPropertyNames:h,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,_=globalThis,f=_.trustedTypes,g=f?f.emptyScript:"",m=_.reactiveElementPolyfillSupport,v=(e,t)=>e,y={toAttribute(e,t){switch(t){case Boolean:e=e?g:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},w=(e,t)=>!c(e,t),b={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:w};
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */Symbol.metadata??=Symbol("metadata"),_.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=b){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(e,i,t);void 0!==o&&l(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){const{get:o,set:r}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:o,set(t){const a=o?.call(this);r?.call(this,t),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??b}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const e=u(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const e=this.properties,t=[...h(e),...p(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(n(e))}else void 0!==e&&t.push(n(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,o)=>{if(i)e.adoptedStyleSheets=o.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const i of o){const o=document.createElement("style"),r=t.litNonce;void 0!==r&&o.setAttribute("nonce",r),o.textContent=i.cssText,e.appendChild(o)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(void 0!==o&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(t,i.type);this._$Em=e,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(e,t){const i=this.constructor,o=i._$Eh.get(e);if(void 0!==o&&this._$Em!==o){const e=i.getPropertyOptions(o),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:y;this._$Em=o;const a=r.fromAttribute(t,e.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(e,t,i,o=!1,r){if(void 0!==e){const a=this.constructor;if(!1===o&&(r=this[e]),i??=a.getPropertyOptions(e),!((i.hasChanged??w)(r,t)||i.useDefault&&i.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:o,wrapped:r},a){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==r||void 0!==a)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===o&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,o=this[t];!0!==e||this._$AL.has(t)||void 0===o||this.C(t,void 0,i,o)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[v("elementProperties")]=new Map,x[v("finalized")]=new Map,m?.({ReactiveElement:x}),(_.reactiveElementVersions??=[]).push("2.1.2");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const $=globalThis,k=e=>e,C=$.trustedTypes,S=C?C.createPolicy("lit-html",{createHTML:e=>e}):void 0,E="$lit$",P=`lit$${Math.random().toFixed(9).slice(2)}$`,A="?"+P,T=`<${A}>`,D=document,M=()=>D.createComment(""),O=e=>null===e||"object"!=typeof e&&"function"!=typeof e,R=Array.isArray,F="[ \t\n\f\r]",L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,I=/-->/g,W=/>/g,V=RegExp(`>|${F}(?:([^\\s"'>=/]+)(${F}*=${F}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),z=/'/g,N=/"/g,U=/^(?:script|style|textarea|title)$/i,H=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),Y=Symbol.for("lit-noChange"),j=Symbol.for("lit-nothing"),B=new WeakMap,q=D.createTreeWalker(D,129);function J(e,t){if(!R(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(t):t}const G=(e,t)=>{const i=e.length-1,o=[];let r,a=2===t?"<svg>":3===t?"<math>":"",s=L;for(let t=0;t<i;t++){const i=e[t];let n,c,l=-1,d=0;for(;d<i.length&&(s.lastIndex=d,c=s.exec(i),null!==c);)d=s.lastIndex,s===L?"!--"===c[1]?s=I:void 0!==c[1]?s=W:void 0!==c[2]?(U.test(c[2])&&(r=RegExp("</"+c[2],"g")),s=V):void 0!==c[3]&&(s=V):s===V?">"===c[0]?(s=r??L,l=-1):void 0===c[1]?l=-2:(l=s.lastIndex-c[2].length,n=c[1],s=void 0===c[3]?V:'"'===c[3]?N:z):s===N||s===z?s=V:s===I||s===W?s=L:(s=V,r=void 0);const h=s===V&&e[t+1].startsWith("/>")?" ":"";a+=s===L?i+T:l>=0?(o.push(n),i.slice(0,l)+E+i.slice(l)+P+h):i+P+(-2===l?t:h)}return[J(e,a+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),o]};class X{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let r=0,a=0;const s=e.length-1,n=this.parts,[c,l]=G(e,t);if(this.el=X.createElement(c,i),q.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=q.nextNode())&&n.length<s;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(E)){const t=l[a++],i=o.getAttribute(e).split(P),s=/([.?@])?(.*)/.exec(t);n.push({type:1,index:r,name:s[2],strings:i,ctor:"."===s[1]?te:"?"===s[1]?ie:"@"===s[1]?oe:ee}),o.removeAttribute(e)}else e.startsWith(P)&&(n.push({type:6,index:r}),o.removeAttribute(e));if(U.test(o.tagName)){const e=o.textContent.split(P),t=e.length-1;if(t>0){o.textContent=C?C.emptyScript:"";for(let i=0;i<t;i++)o.append(e[i],M()),q.nextNode(),n.push({type:2,index:++r});o.append(e[t],M())}}}else if(8===o.nodeType)if(o.data===A)n.push({type:2,index:r});else{let e=-1;for(;-1!==(e=o.data.indexOf(P,e+1));)n.push({type:7,index:r}),e+=P.length-1}r++}}static createElement(e,t){const i=D.createElement("template");return i.innerHTML=e,i}}function K(e,t,i=e,o){if(t===Y)return t;let r=void 0!==o?i._$Co?.[o]:i._$Cl;const a=O(t)?void 0:t._$litDirective$;return r?.constructor!==a&&(r?._$AO?.(!1),void 0===a?r=void 0:(r=new a(e),r._$AT(e,i,o)),void 0!==o?(i._$Co??=[])[o]=r:i._$Cl=r),void 0!==r&&(t=K(e,r._$AS(e,t.values),r,o)),t}class Z{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,o=(e?.creationScope??D).importNode(t,!0);q.currentNode=o;let r=q.nextNode(),a=0,s=0,n=i[0];for(;void 0!==n;){if(a===n.index){let t;2===n.type?t=new Q(r,r.nextSibling,this,e):1===n.type?t=new n.ctor(r,n.name,n.strings,this,e):6===n.type&&(t=new re(r,this,e)),this._$AV.push(t),n=i[++s]}a!==n?.index&&(r=q.nextNode(),a++)}return q.currentNode=D,o}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,o){this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=K(this,e,t),O(e)?e===j||null==e||""===e?(this._$AH!==j&&this._$AR(),this._$AH=j):e!==this._$AH&&e!==Y&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>R(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==j&&O(this._$AH)?this._$AA.nextSibling.data=e:this.T(D.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,o="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=X.createElement(J(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(t);else{const e=new Z(o,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=B.get(e.strings);return void 0===t&&B.set(e.strings,t=new X(e)),t}k(e){R(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const r of e)o===t.length?t.push(i=new Q(this.O(M()),this.O(M()),this,this.options)):i=t[o],i._$AI(r),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=k(e).nextSibling;k(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ee{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,o,r){this.type=1,this._$AH=j,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=j}_$AI(e,t=this,i,o){const r=this.strings;let a=!1;if(void 0===r)e=K(this,e,t,0),a=!O(e)||e!==this._$AH&&e!==Y,a&&(this._$AH=e);else{const o=e;let s,n;for(e=r[0],s=0;s<r.length-1;s++)n=K(this,o[i+s],t,s),n===Y&&(n=this._$AH[s]),a||=!O(n)||n!==this._$AH[s],n===j?e=j:e!==j&&(e+=(n??"")+r[s+1]),this._$AH[s]=n}a&&!o&&this.j(e)}j(e){e===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class te extends ee{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===j?void 0:e}}class ie extends ee{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==j)}}class oe extends ee{constructor(e,t,i,o,r){super(e,t,i,o,r),this.type=5}_$AI(e,t=this){if((e=K(this,e,t,0)??j)===Y)return;const i=this._$AH,o=e===j&&i!==j||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==j&&(i===j||o);o&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class re{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){K(this,e)}}const ae=$.litHtmlPolyfillSupport;ae?.(X,Q),($.litHtmlVersions??=[]).push("3.3.2");const se=globalThis;
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */class ne extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const o=i?.renderBefore??t;let r=o._$litPart$;if(void 0===r){const e=i?.renderBefore??null;o._$litPart$=r=new Q(t.insertBefore(M(),e),e,void 0,i??{})}return r._$AI(e),r})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Y}}ne._$litElement$=!0,ne.finalized=!0,se.litElementHydrateSupport?.({LitElement:ne});const ce=se.litElementPolyfillSupport;ce?.({LitElement:ne}),(se.litElementVersions??=[]).push("4.2.2");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const le={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:w},de=(e=le,t,i)=>{const{kind:o,metadata:r}=i;let a=globalThis.litPropertyMetadata.get(r);if(void 0===a&&globalThis.litPropertyMetadata.set(r,a=new Map),"setter"===o&&((e=Object.create(e)).wrapped=!0),a.set(i.name,e),"accessor"===o){const{name:o}=i;return{set(i){const r=t.get.call(this);t.set.call(this,i),this.requestUpdate(o,r,e,!0,i)},init(t){return void 0!==t&&this.C(o,void 0,e,t),t}}}if("setter"===o){const{name:o}=i;return function(i){const r=this[o];t.call(this,i),this.requestUpdate(o,r,e,!0,i)}}throw Error("Unsupported decorator location: "+o)};function he(e){return(t,i)=>"object"==typeof i?de(e,t,i):((e,t,i)=>{const o=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),o?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function pe(e){return he({...e,state:!0,attribute:!1})}const ue={en:{"editor.basic_settings":"Basic Settings","editor.source_entry_id_label":"Primary Tariff","editor.source_entry_id_helper":"Select the Octopus Energy tariff to display consumption data for","editor.display_options":"Display Options","editor.default_period_label":"Default Period","editor.default_period_helper":"Initial time period to display","editor.chart_type_label":"Chart Type","editor.chart_type_helper":"Type of chart to display","editor.show_navigation_label":"Show Navigation","editor.show_navigation_helper":"Show period navigation buttons","editor.tariff_comparison":"Tariff Comparison","editor.tariff_entry_ids_label":"Comparison Tariffs","editor.tariff_entry_ids_helper":"Optional: Select additional tariffs to compare costs","editor.cost_display":"Cost Display","editor.show_cost_on_chart_label":"Show Cost on Chart","editor.show_cost_on_chart_helper":"Display cost information on the chart","editor.selected_tariff_for_cost_label":"Selected Tariff for Cost","editor.selected_tariff_for_cost_helper":"Tariff entry ID to use for cost calculation","editor.consumption_sensor_label":"Consumption Sensor Override","editor.consumption_sensor_helper":"Optional: Manually specify a consumption sensor instead of using integration data","editor.migration_warning":"Configuration migration required. Please edit the card and select your tariff.","editor.select_tariff":"Select a tariff to get started","editor.view_label":"View","editor.view_helper":"Select which view to display","editor.view_consumption":"Consumption Overview","editor.view_heat_calendar":"Heat Calendar","editor.view_week_analysis":"Week Analysis","editor.view_tariff_comparison":"Tariff Comparison","editor.chart_type_line":"Line","editor.chart_type_bar":"Bar","editor.chart_type_stacked_area":"Stacked Area","editor.advanced_visualization":"Advanced Visualization","editor.show_period_distribution_label":"Show Period Distribution","editor.show_period_distribution_helper":"Show P1/P2/P3 consumption breakdown on chart","editor.show_moving_average_label":"Show Moving Average","editor.show_moving_average_helper":"Display trend line with moving average","editor.moving_average_days_label":"Moving Average Days","editor.moving_average_days_helper":"Number of days for moving average calculation (default: 7)","editor.period_day":"Day","editor.period_week":"Week","editor.period_month":"Month","editor.heat_calendar_period_label":"Heat Calendar Period","editor.heat_calendar_period_helper":"Time period for heat calendar display","editor.heat_calendar_period_month":"Month","editor.heat_calendar_period_year":"Year","editor.show_week_comparison_label":"Show Week Comparison","editor.show_week_comparison_helper":"Compare consumption across consecutive weeks","editor.week_comparison_count_label":"Week Comparison Count","editor.week_comparison_count_helper":"Number of weeks to compare (default: 2)","editor.show_cost_trend_label":"Show Cost Trend","editor.show_cost_trend_helper":"Display cost trend with moving average","editor.cost_moving_average_days_label":"Cost Moving Average Days","editor.cost_moving_average_days_helper":"Number of days for cost moving average (default: 30)","editor.show_tariff_chart_label":"Show Tariff Chart","editor.show_tariff_chart_helper":"Display visual chart in tariff comparison section"},es:{"editor.basic_settings":"Configuración Básica","editor.source_entry_id_label":"Tarifa Principal","editor.source_entry_id_helper":"Selecciona la tarifa de Octopus Energy para mostrar datos de consumo","editor.display_options":"Opciones de Visualización","editor.default_period_label":"Período Predeterminado","editor.default_period_helper":"Período de tiempo inicial a mostrar","editor.chart_type_label":"Tipo de Gráfico","editor.chart_type_helper":"Tipo de gráfico a mostrar","editor.show_navigation_label":"Mostrar Navegación","editor.show_navigation_helper":"Mostrar botones de navegación de período","editor.tariff_comparison":"Comparación de Tarifas","editor.tariff_entry_ids_label":"Tarifas de Comparación","editor.tariff_entry_ids_helper":"Opcional: Selecciona tarifas adicionales para comparar costes","editor.cost_display":"Visualización de Costes","editor.show_cost_on_chart_label":"Mostrar Coste en Gráfico","editor.show_cost_on_chart_helper":"Mostrar información de costes en el gráfico","editor.selected_tariff_for_cost_label":"Tarifa Seleccionada para Coste","editor.selected_tariff_for_cost_helper":"ID de entrada de tarifa a usar para cálculo de costes","editor.consumption_sensor_label":"Sensor de Consumo Manual","editor.consumption_sensor_helper":"Opcional: Especifica manualmente un sensor de consumo en lugar de usar datos de integración","editor.migration_warning":"Se requiere migración de configuración. Por favor, edita la tarjeta y selecciona tu tarifa.","editor.select_tariff":"Selecciona una tarifa para comenzar","editor.view_label":"Vista","editor.view_helper":"Selecciona qué vista mostrar","editor.view_consumption":"Resumen de Consumo","editor.view_heat_calendar":"Calendario de Calor","editor.view_week_analysis":"Análisis Semanal","editor.view_tariff_comparison":"Comparación de Tarifas","editor.chart_type_line":"Línea","editor.chart_type_bar":"Barras","editor.chart_type_stacked_area":"Área Apilada","editor.advanced_visualization":"Visualización Avanzada","editor.show_period_distribution_label":"Mostrar Distribución por Períodos","editor.show_period_distribution_helper":"Mostrar desglose de consumo P1/P2/P3 en el gráfico","editor.show_moving_average_label":"Mostrar Media Móvil","editor.show_moving_average_helper":"Mostrar línea de tendencia con media móvil","editor.moving_average_days_label":"Días de Media Móvil","editor.moving_average_days_helper":"Número de días para el cálculo de la media móvil (predeterminado: 7)","editor.period_day":"Día","editor.period_week":"Semana","editor.period_month":"Mes","editor.heat_calendar_period_label":"Período del Calendario de Calor","editor.heat_calendar_period_helper":"Período de tiempo para el calendario de calor","editor.heat_calendar_period_month":"Mes","editor.heat_calendar_period_year":"Año","editor.show_week_comparison_label":"Mostrar Comparación Semanal","editor.show_week_comparison_helper":"Comparar consumo entre semanas consecutivas","editor.week_comparison_count_label":"Número de Semanas a Comparar","editor.week_comparison_count_helper":"Número de semanas para comparar (predeterminado: 2)","editor.show_cost_trend_label":"Mostrar Tendencia de Costes","editor.show_cost_trend_helper":"Mostrar tendencia de costes con media móvil","editor.cost_moving_average_days_label":"Días de Media Móvil de Costes","editor.cost_moving_average_days_helper":"Número de días para la media móvil de costes (predeterminado: 30)","editor.show_tariff_chart_label":"Mostrar Gráfico de Tarifas","editor.show_tariff_chart_helper":"Mostrar gráfico visual en la sección de comparación de tarifas"},be:{"editor.basic_settings":"Асноўныя налады","editor.source_entry_id_label":"Асноўны тарыф","editor.source_entry_id_helper":"Выберыце тарыф Octopus Energy для адлюстравання даных спажывання","editor.display_options":"Параметры адлюстравання","editor.default_period_label":"Перыяд па змаўчанні","editor.default_period_helper":"Пачатковы часовы перыяд для адлюстравання","editor.chart_type_label":"Тып дыяграмы","editor.chart_type_helper":"Тып дыяграмы для адлюстравання","editor.show_navigation_label":"Паказаць навігацыю","editor.show_navigation_helper":"Паказаць кнопкі навігацыі па перыядах","editor.tariff_comparison":"Параўнанне тарыфаў","editor.tariff_entry_ids_label":"Тарыфы для параўнання","editor.tariff_entry_ids_helper":"Неабавязкова: Выберыце дадатковыя тарыфы для параўнання кошту","editor.cost_display":"Адлюстраванне кошту","editor.show_cost_on_chart_label":"Паказаць кошт на дыяграме","editor.show_cost_on_chart_helper":"Адлюстраваць інфармацыю аб кошце на дыяграме","editor.selected_tariff_for_cost_label":"Выбраны тарыф для кошту","editor.selected_tariff_for_cost_helper":"ID запісу тарыфу для разліку кошту","editor.consumption_sensor_label":"Ручны сенсар спажывання","editor.consumption_sensor_helper":"Неабавязкова: Укажыце сенсар спажывання ўручную замест выкарыстання даных інтэграцыі","editor.migration_warning":"Патрабуецца міграцыя канфігурацыі. Калі ласка, адрэдагуйце картку і выберыце свой тарыф.","editor.select_tariff":"Выберыце тарыф для пачатку","editor.view_label":"Выгляд","editor.view_helper":"Выберыце, які выгляд адлюстраваць","editor.view_consumption":"Агляд спажывання","editor.view_heat_calendar":"Каляндар цяпла","editor.view_week_analysis":"Тыднёвы аналіз","editor.view_tariff_comparison":"Параўнанне тарыфаў","editor.chart_type_line":"Лінія","editor.chart_type_bar":"Слупкі","editor.chart_type_stacked_area":"Стопачная дыяграма","editor.advanced_visualization":"Пашыраная візуалізацыя","editor.show_period_distribution_label":"Паказаць размеркаванне па перыядах","editor.show_period_distribution_helper":"Паказаць разбіўку спажывання P1/P2/P3 на дыяграме","editor.show_moving_average_label":"Паказаць рухомае сярэдняе","editor.show_moving_average_helper":"Паказаць лінію трэнду з рухомым сярэднім","editor.moving_average_days_label":"Дні рухомага сярэдняга","editor.moving_average_days_helper":"Колькасць дзён для разліку рухомага сярэдняга (па змаўчанні: 7)","editor.period_day":"Дзень","editor.period_week":"Тыдзень","editor.period_month":"Месяц","editor.heat_calendar_period_label":"Перыяд каляндара цяпла","editor.heat_calendar_period_helper":"Часавы перыяд для адлюстравання каляндара цяпла","editor.heat_calendar_period_month":"Месяц","editor.heat_calendar_period_year":"Год","editor.show_week_comparison_label":"Паказаць параўнанне тыдняў","editor.show_week_comparison_helper":"Параўнаць спажыванне паміж паслядоўнымі тыднямі","editor.week_comparison_count_label":"Колькасць тыдняў для параўнання","editor.week_comparison_count_helper":"Колькасць тыдняў для параўнання (па змаўчанні: 2)","editor.show_cost_trend_label":"Паказаць трэнд кошту","editor.show_cost_trend_helper":"Адлюстраваць трэнд кошту з рухомым сярэднім","editor.cost_moving_average_days_label":"Дні рухомага сярэдняга кошту","editor.cost_moving_average_days_helper":"Колькасць дзён для рухомага сярэдняга кошту (па змаўчанні: 30)","editor.show_tariff_chart_label":"Паказаць дыяграму тарыфаў","editor.show_tariff_chart_helper":"Адлюстраваць візуальную дыяграму ў раздзеле параўнання тарыфаў"}};function _e(e,t="en"){const i=t.toLowerCase(),o=ue[i]?.[e]||ue.en?.[e];return o||e.replace("editor.","").replace(/_/g," ")}const fe=s`
  :host {
    display: block;
    padding: 16px;
  }

  .period-selector {
    display: flex;
    gap: 8px;
    margin-bottom: 16px;
  }

  .period-button {
    padding: 8px 16px;
    border: 1px solid var(--divider-color);
    background: var(--card-background-color);
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
  }

  .period-button.active {
    background: var(--primary-color);
    color: var(--text-primary-color);
    border-color: var(--primary-color);
  }

  .navigation-controls {
    display: flex;
    gap: 8px;
    margin-bottom: 16px;
  }

  .nav-button {
    padding: 8px 16px;
    border: 1px solid var(--divider-color);
    background: var(--card-background-color);
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
  }

  .chart-container {
    margin: 0;
    min-height: 300px;
    position: relative;
    width: 100%;
  }

  .chart-canvas {
    width: 100%;
    height: 300px;
    display: block;
  }

  .loading {
    text-align: center;
    padding: 40px;
    color: var(--secondary-text-color);
  }

  .error {
    padding: 16px;
    background: var(--error-color);
    color: var(--text-primary-color);
    border-radius: 4px;
    margin-bottom: 16px;
  }

  .error-message {
    padding: 24px;
    text-align: center;
    background: var(--card-background-color);
    border-radius: 8px;
    border: none;
  }

  .error-icon {
    color: var(--error-color);
    margin-bottom: 12px;
  }

  .error-title {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 8px;
    color: var(--error-color);
  }

  .error-details {
    font-size: 14px;
    color: var(--secondary-text-color);
    margin-bottom: 16px;
  }

  .retry-button {
    padding: 10px 20px;
    background: var(--primary-color);
    color: var(--text-primary-color);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    margin-top: 8px;
  }

  .retry-button:hover {
    opacity: 0.9;
  }

  .comparison-error {
    padding: 12px;
    background: var(--warning-color);
    color: var(--text-primary-color);
    border-radius: 4px;
    margin-top: 16px;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .comparison-error ha-icon {
    flex-shrink: 0;
  }

  .comparison-section {
    margin-top: 24px;
  }

  .comparison-title {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 16px;
  }

  .tariff-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .tariff-item {
    padding: 16px;
    border: 1px solid var(--divider-color);
    border-radius: 4px;
    background: var(--card-background-color);
  }

  .tariff-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }

  .tariff-name {
    font-size: 18px;
    font-weight: 500;
  }

  .tariff-cost {
    font-size: 24px;
    font-weight: 600;
    color: var(--primary-color);
  }

  .tariff-breakdown {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 12px;
    margin-top: 12px;
    font-size: 14px;
  }

  .breakdown-item {
    display: flex;
    flex-direction: column;
  }

  .breakdown-label {
    color: var(--secondary-text-color);
    font-size: 12px;
  }

  .breakdown-value {
    font-weight: 500;
    margin-top: 4px;
  }

  .period-breakdown {
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid var(--divider-color);
  }

  .period-breakdown-title {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 12px;
  }

  .period-bars {
    display: flex;
    gap: 8px;
    height: 40px;
    margin-bottom: 8px;
  }

  .period-bar {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    flex: 1;
    min-width: 60px;
  }

  .period-bar-fill {
    width: 100%;
    border-radius: 4px 4px 0 0;
    transition: height 0.3s ease;
  }

  .period-bar-fill.p1 {
    background: var(--error-color);
  }

  .period-bar-fill.p2 {
    background: var(--warning-color);
  }

  .period-bar-fill.p3 {
    background: var(--success-color);
  }

  .period-bar-label {
    margin-top: 4px;
    font-size: 12px;
    color: var(--secondary-text-color);
    text-align: center;
  }

  .cost-per-kwh {
    color: var(--primary-color);
    font-weight: 500;
    font-size: 11px;
  }

  .best-tariff-badge {
    display: inline-block;
    padding: 4px 8px;
    background: var(--success-color);
    color: var(--text-primary-color);
    border-radius: 4px;
    font-size: 12px;
    font-weight: 500;
    margin-left: 8px;
  }

  .savings-info {
    margin-top: 16px;
    padding: 12px;
    background: var(--info-color);
    border-radius: 4px;
    font-size: 14px;
  }

  .consumption-summary {
    margin-bottom: 24px;
    padding: 16px;
    background: var(--card-background-color);
    border: 1px solid var(--divider-color);
    border-radius: 8px;
  }

  .summary-title {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 16px;
    color: var(--primary-text-color);
  }

  .summary-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 16px;
  }

  .summary-item {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 12px;
    background: var(--secondary-background-color);
    border-radius: 6px;
  }

  .summary-item.summary-total {
    background: var(--primary-color);
    color: var(--text-primary-color);
  }

  .summary-period {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
  }

  .period-icon {
    font-size: 18px;
  }

  .period-name {
    font-weight: 500;
  }

  .summary-value {
    font-size: 20px;
    font-weight: 600;
    color: var(--primary-text-color);
  }

  .summary-percentage {
    font-size: 14px;
    color: var(--secondary-text-color);
  }

  .summary-total .summary-value,
  .summary-total .summary-percentage {
    color: var(--text-primary-color);
  }

  .heat-calendar-container {
    margin-top: 24px;
  }

  .heat-calendar-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 4px;
    margin-top: 16px;
  }

  .heat-calendar-day {
    aspect-ratio: 1;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    cursor: pointer;
    position: relative;
    border: 1px solid var(--divider-color);
    transition: transform 0.2s ease;
  }

  .heat-calendar-day:hover {
    transform: scale(1.1);
    z-index: 10;
  }

  .heat-calendar-day.intensity-low {
    background: var(--info-color, #2196f3);
    opacity: 0.4;
  }

  .heat-calendar-day.intensity-medium {
    background: var(--success-color, #4caf50);
    opacity: 0.6;
  }

  .heat-calendar-day.intensity-high {
    background: var(--error-color, #f44336);
    opacity: 0.8;
  }

  .heat-calendar-day.empty {
    background: var(--card-background-color);
    opacity: 0.3;
    cursor: default;
  }

  .heat-calendar-legend {
    display: flex;
    gap: 16px;
    margin-top: 16px;
    font-size: 12px;
    align-items: center;
  }

  .heat-calendar-legend-item {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .heat-calendar-legend-color {
    width: 20px;
    height: 20px;
    border-radius: 4px;
    border: 1px solid var(--divider-color);
  }

  .heat-calendar-year-view {
    max-height: 600px;
    overflow-y: auto;
  }

  .heat-calendar-year-view .heat-calendar-grid {
    max-height: 550px;
    overflow-y: auto;
  }

  .heat-calendar-grid-year .heat-calendar-day {
    width: 12px;
    height: 12px;
    min-width: 12px;
    min-height: 12px;
    font-size: 9px;
    padding: 0;
  }

  .heat-calendar-grid-year .heat-calendar-day.empty {
    width: 12px;
    height: 12px;
    min-width: 12px;
    min-height: 12px;
  }

  .heat-calendar-month-label {
    grid-column: 1 / -1;
    font-size: 10px;
    font-weight: 600;
    color: var(--secondary-text-color);
    padding: 4px 0;
    text-align: left;
    border-bottom: 1px solid var(--divider-color);
    margin-bottom: 2px;
  }

  .heat-calendar-summary {
    display: flex;
    gap: 16px;
    margin-top: 8px;
    margin-bottom: 8px;
    font-size: 14px;
    color: var(--secondary-text-color);
    flex-wrap: wrap;
  }

  .heat-calendar-summary span {
    padding: 4px 8px;
    background: var(--secondary-background-color);
    border-radius: 4px;
  }

  .week-comparison-section {
    margin-top: 24px;
  }

  .week-comparison-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 16px;
    margin-top: 16px;
  }

  .week-card {
    padding: 16px;
    border: 1px solid var(--divider-color);
    border-radius: 8px;
    background: var(--card-background-color);
  }

  .week-card-header {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 12px;
    color: var(--primary-text-color);
  }

  .week-card-metrics {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .week-metric {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .week-metric-label {
    font-size: 14px;
    color: var(--secondary-text-color);
  }

  .week-metric-value {
    font-size: 18px;
    font-weight: 600;
    color: var(--primary-text-color);
  }

  .week-change {
    display: inline-block;
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 500;
    margin-left: 8px;
  }

  .week-change.positive {
    background: var(--error-color);
    color: var(--text-primary-color);
  }

  .week-change.negative {
    background: var(--success-color);
    color: var(--text-primary-color);
  }

  .tariff-chart-container {
    margin-top: 16px;
  }

  .tariff-chart-bars {
    display: flex;
    gap: 8px;
    height: 200px;
    align-items: flex-end;
    margin-top: 16px;
  }

  .tariff-chart-bar-group {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .tariff-chart-bar-label {
    text-align: center;
    font-size: 12px;
    color: var(--secondary-text-color);
    margin-bottom: 4px;
  }

  .tariff-chart-bar {
    border-radius: 4px 4px 0 0;
    min-height: 4px;
    position: relative;
    transition: opacity 0.2s ease;
  }

  .tariff-chart-bar:hover {
    opacity: 0.8;
  }

  .tariff-chart-bar.consumption {
    background: var(--primary-color, #03a9f4);
  }

  .tariff-chart-bar.cost {
    background: var(--accent-color, #ff9800);
  }

  .tariff-chart-bar.p1 {
    background: var(--error-color, #f44336);
  }

  .tariff-chart-bar.p2 {
    background: var(--warning-color, #ff9800);
  }

  .tariff-chart-bar.p3 {
    background: var(--success-color, #4caf50);
  }

  .tooltip {
    position: absolute;
    background: var(--card-background-color);
    border: 1px solid var(--divider-color);
    border-radius: 4px;
    padding: 8px;
    font-size: 12px;
    pointer-events: none;
    z-index: 1000;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    display: none;
  }

  .tooltip.visible {
    display: block;
  }
`,ge=s`
  .card-config {
    padding: 16px;
  }

  .section {
    margin-bottom: 24px;
  }

  .section-title {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 12px;
    color: var(--primary-text-color);
  }

  .form-group {
    margin-bottom: 16px;
  }

  .form-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    color: var(--primary-text-color);
  }

  .form-group ha-textfield,
  .form-group ha-select,
  .form-group ha-entity-picker {
    width: 100%;
  }

  .form-group ha-switch {
    margin-right: 8px;
  }

  .switch-row {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }

  .switch-row label {
    flex: 1;
    margin-bottom: 0;
  }

  .tariff-entry-list {
    margin-top: 8px;
  }

  .tariff-entry-item {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    padding: 8px;
    background: var(--card-background-color);
    border-radius: 4px;
  }

  .tariff-entry-item ha-textfield {
    flex: 1;
    margin-right: 8px;
  }

  .add-tariff-entry {
    display: flex;
    gap: 8px;
    margin-top: 8px;
  }

  .add-tariff-entry ha-textfield {
    flex: 1;
  }

  .tariff-dropdown-list {
    margin-top: 8px;
  }

  .tariff-dropdown-item {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
  }

  .tariff-dropdown-item ha-selector {
    flex: 1;
  }

  .tariff-dropdown-item ha-icon-button {
    --mdc-icon-button-size: 40px;
    --mdc-icon-size: 20px;
  }

  .error {
    color: var(--error-color);
    font-size: 12px;
    margin-top: 4px;
  }
`;var me=function(e,t,i,o){var r,a=arguments.length,s=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(s=(a<3?r(s):a>3?r(t,i,s):r(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};void 0!==ne&&ne.disableWarning&&ne.disableWarning("change-in-update");class ve extends ne{constructor(){super(...arguments),this._config={type:"custom:octopus-consumption-card",source_entry_id:"",view:"consumption",default_period:"week",chart_type:"line",tariff_entry_ids:[],show_cost_on_chart:!1,show_navigation:!0,show_period_distribution:!1,show_moving_average:!1,moving_average_days:7},this._language="en",this._computeLabel=e=>function(e,t="en"){return _e(`editor.${e.name}_label`,t)}(e,this._language),this._computeHelper=e=>function(e,t="en"){return _e(`editor.${e.name}_helper`,t)}(e,this._language)}setConfig(e){const t={...e,view:e.view||"consumption"};JSON.stringify(this._config)!==JSON.stringify(t)&&(this._config=t)}willUpdate(e){if(e.has("config")&&this.config){const e={...this.config,view:this.config.view||"consumption"};JSON.stringify(this._config)!==JSON.stringify(e)&&(this._config=e)}if(e.has("hass")&&this.hass){const e=this.hass.language||"en";this._language!==e&&(this._language=e)}}firstUpdated(){if(this.config){const e={...this.config,view:this.config.view||"consumption"};JSON.stringify(this._config)!==JSON.stringify(e)&&(this._config=e)}this.hass&&(this._language=this.hass.language||"en")}_valueChanged(e){if(!this._config||!this.hass)return;const t=e.detail.value;t.view||(t.view="consumption");const i=this._config.view!==t.view;!1===t.show_cost_on_chart&&(t.selected_tariff_for_cost=void 0),!1===t.show_cost_on_chart&&(t.selected_tariff_for_cost=void 0),this._config=t,i&&this.requestUpdate(),this._fireConfigChanged()}_fireConfigChanged(){const e=new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0});this.dispatchEvent(e)}_buildSchema(){const e=this._config.view||"consumption",t=[{name:"view",selector:{select:{mode:"dropdown",options:[{value:"consumption",label:_e("editor.view_consumption",this._language)},{value:"heat-calendar",label:_e("editor.view_heat_calendar",this._language)},{value:"week-analysis",label:_e("editor.view_week_analysis",this._language)},{value:"tariff-comparison",label:_e("editor.view_tariff_comparison",this._language)}]}}},{name:"source_entry_id",required:!0,selector:{config_entry:{integration:"octopus_energy_es"}}}];return"consumption"===e?(t.push({name:"default_period",selector:{select:{mode:"dropdown",options:[{value:"day",label:_e("editor.period_day",this._language)},{value:"week",label:_e("editor.period_week",this._language)},{value:"month",label:_e("editor.period_month",this._language)}]}}},{name:"chart_type",selector:{select:{mode:"dropdown",options:[{value:"line",label:_e("editor.chart_type_line",this._language)},{value:"bar",label:_e("editor.chart_type_bar",this._language)},{value:"stacked-area",label:_e("editor.chart_type_stacked_area",this._language)}]}}},{name:"show_navigation",selector:{boolean:{}}},{name:"show_period_distribution",selector:{boolean:{}}},{name:"show_moving_average",selector:{boolean:{}}}),this._config.show_moving_average&&t.push({name:"moving_average_days",selector:{number:{min:2,max:30,mode:"box"}}}),t.push({name:"show_cost_on_chart",selector:{boolean:{}}}),this._config.show_cost_on_chart&&t.push({name:"selected_tariff_for_cost",selector:{config_entry:{integration:"octopus_energy_es"}}}),t.push({name:"show_cost_trend",selector:{boolean:{}}}),this._config.show_cost_trend&&t.push({name:"cost_moving_average_days",selector:{number:{min:2,max:90,mode:"box"}}})):"heat-calendar"===e?t.push({name:"heat_calendar_period",selector:{select:{mode:"dropdown",options:[{value:"month",label:_e("editor.heat_calendar_period_month",this._language)},{value:"year",label:_e("editor.heat_calendar_period_year",this._language)}]}}},{name:"show_navigation",selector:{boolean:{}}}):"week-analysis"===e?(t.push({name:"show_week_comparison",selector:{boolean:{}}},{name:"show_navigation",selector:{boolean:{}}}),this._config.show_week_comparison&&t.push({name:"week_comparison_count",selector:{number:{min:2,max:8,mode:"box"}}})):"tariff-comparison"===e&&t.push({name:"show_tariff_chart",selector:{boolean:{}}}),t.push({name:"consumption_sensor",selector:{entity:{domain:"sensor"}}}),t}_handleTariffSelection(e,t){const i=t.detail.value;this._config.tariff_entry_ids||(this._config.tariff_entry_ids=[]);const o=[...this._config.tariff_entry_ids];for(;o.length<=e;)o.push("");if(i){const t=o.findIndex((t,o)=>o!==e&&t===i);-1!==t&&(o[t]=""),o[e]=i,this._config.tariff_entry_ids=o.filter((e,t,i)=>e&&i.indexOf(e)===t)}else o.splice(e,1),this._config.tariff_entry_ids=o.filter(e=>e);this.requestUpdate(),this._fireConfigChanged()}_removeTariff(e){if(!this._config.tariff_entry_ids||e>=this._config.tariff_entry_ids.length)return;const t=[...this._config.tariff_entry_ids];t.splice(e,1),this._config.tariff_entry_ids=t.filter(e=>e),this.requestUpdate(),this._fireConfigChanged()}_renderTariffDropdowns(){const e=this._config.tariff_entry_ids||[],t=e.length>0?e.length+1:1;return H`
      <div class="form-group">
        <label>${_e("editor.tariff_entry_ids_label",this._language)}</label>
        <div class="tariff-dropdown-list">
          ${Array.from({length:t},(t,i)=>{const o=e[i]||"";return H`
              <div class="tariff-dropdown-item">
                <ha-selector
                  .hass=${this.hass}
                  .selector=${{config_entry:{integration:"octopus_energy_es"}}}
                  .value=${o}
                  .label=${0===i?_e("editor.tariff_entry_ids_helper",this._language):""}
                  @value-changed=${e=>this._handleTariffSelection(i,e)}
                ></ha-selector>
                ${o?H`
                  <ha-icon-button
                    .label=${"Remove"}
                    @click=${()=>this._removeTariff(i)}
                  >
                    <ha-icon icon="mdi:delete"></ha-icon>
                  </ha-icon-button>
                `:""}
              </div>
            `})}
        </div>
      </div>
    `}render(){if(!this.hass)return H`<div class="card-config">Loading...</div>`;const e=this._buildSchema(),t=this._config.view||"consumption";return H`
      <div class="card-config">
        <!-- Main Configuration Form -->
        <ha-form
          .hass=${this.hass}
          .data=${this._config}
          .schema=${e}
          .computeLabel=${this._computeLabel}
          .computeHelper=${this._computeHelper}
          @value-changed=${this._valueChanged}
        ></ha-form>
        
        ${"tariff-comparison"===t?this._renderTariffDropdowns():""}
      </div>
    `}}ve.enabledWarnings=[],ve.styles=ge,me([he({attribute:!1})],ve.prototype,"hass",void 0),me([he({attribute:!1})],ve.prototype,"config",void 0),me([pe()],ve.prototype,"_config",void 0),"undefined"!=typeof window&&"undefined"!=typeof customElements&&(customElements.get("octopus-consumption-card-editor")||customElements.define("octopus-consumption-card-editor",ve));class ye{static info(e,...t){const i=[e,this.STYLES.info];t.forEach((e,t)=>{i.push(e,t%2==0?this.STYLES.infoValue:this.STYLES.info)}),console.log(...i)}static error(e,t){t?console.error(`%c${e}%c${t}`,this.STYLES.error,this.STYLES.errorValue):console.error(`%c${e}`,this.STYLES.error)}static warn(e,t){t?console.warn(`%c${e}%c${t}`,this.STYLES.warning,this.STYLES.warningValue):console.warn(`%c${e}`,this.STYLES.warning)}static success(e){console.log(`%c${e}`,this.STYLES.success)}static data(e,t){console.log(`%c  ${e}: %c${JSON.stringify(t,null,2)}`,this.STYLES.info,this.STYLES.infoValue)}static serviceCall(e,t,i=!1){this.info("  Calling service: ",`${e}.${t}${i?" (with return_response)":""}`)}static serviceData(e){this.data("Service data",e)}static serviceResponse(e){this.data("Raw Service Response",e)}static serviceError(e){console.error("%c  Service Error Details: %c"+JSON.stringify(e,Object.getOwnPropertyNames(e),2),this.STYLES.info,this.STYLES.errorValue)}static groupServiceCall(e,t){console.groupCollapsed(`%c🔧 Service Call: %c${e}.${t}`,this.STYLES.info,this.STYLES.infoValue)}static groupEnd(){console.groupEnd()}static groupDataLoad(e,t,i){console.groupCollapsed(`%c📊 Loading Data: %cEntry: ${e} | Period: ${t} | ${i}`,this.STYLES.info,this.STYLES.infoValue)}static groupError(e){console.groupCollapsed(`%c❌ ${e}`,this.STYLES.error)}}ye.STYLES={info:"color: #666; font-size: 11px;",infoValue:"color: #999; font-size: 11px; font-family: monospace;",error:"color: #f00; font-size: 11px; font-weight: bold;",errorValue:"color: #f00; font-size: 11px;",warning:"color: #ff9800; font-size: 11px;",warningValue:"color: #ff9800; font-size: 11px;",success:"color: #4caf50; font-size: 11px;"};const we={linear:e=>e,easeIn:e=>e*e,easeOut:e=>e*(2-e),easeInOut:e=>e<.5?2*e*e:(4-2*e)*e-1};class be{constructor(){this.animationFrameId=null,this.startTime=0,this.isAnimating=!1}animate(e,t,i,o,r,a=0){return new Promise(s=>{a>0?setTimeout(()=>{this._startAnimation(e,t,i,o,r,s)},a):this._startAnimation(e,t,i,o,r,s)})}_startAnimation(e,t,i,o,r,a){this.isAnimating=!0,this.startTime=performance.now();const s=we[o]||we.linear,n=t-e,c=t=>{const o=t-this.startTime,l=Math.min(o/i,1),d=s(l);r(e+n*d),l<1?this.animationFrameId=requestAnimationFrame(c):(this.isAnimating=!1,this.animationFrameId=null,a())};this.animationFrameId=requestAnimationFrame(c)}cancel(){null!==this.animationFrameId&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null,this.isAnimating=!1)}get animating(){return this.isAnimating}async animateSequence(e){for(const t of e)await this.animate(t.from,t.to,t.duration,t.easing,t.callback,t.delay)}async animateParallel(e){await Promise.all(e.map(e=>this.animate(e.from,e.to,e.duration,e.easing,e.callback,e.delay)))}}function xe(e,t,i,o,r){const{width:a,height:s,padding:n}=t,c=a-n.left-n.right,l=s-n.top-n.bottom,d=o-i||1,h=e.length>1?c/(e.length-1):0;return e.map((e,t)=>({x:n.left+t*h,y:n.top+l-(e-i)/d*l,value:e,label:r?.[t],timestamp:r?.[t]}))}function $e(e,t,i,o){const{height:r,padding:a}=o,s=r-a.top-a.bottom,n=t-e||1,c=[];for(let t=0;t<=i;t++){const o=e+n*t/i,r=a.top+s-t/i*s;c.push({value:o,y:r})}return c}function ke(e,t){if(0===e.length)return[];const i=[];if(e[0]?.timestamp&&i.push({label:t(e[0].timestamp),x:e[0].x}),e.length>2){const o=Math.floor(e.length/2);e[o]?.timestamp&&i.push({label:t(e[o].timestamp),x:e[o].x})}if(e.length>1&&e[e.length-1]?.timestamp){const o=e[e.length-1].timestamp;o&&i.push({label:t(o),x:e[e.length-1].x})}return i}function Ce(e,t){const{width:i,padding:o}=t,r=o.left,a=i-o.right;return e.map(e=>({x1:r,y1:e.y,x2:a,y2:e.y}))}function Se(e){try{return new Date(e).toLocaleDateString("en-US",{month:"short",day:"numeric"})}catch{return e.split("T")[0]}}function Ee(e,t=1){return e.toFixed(t)}class Pe{constructor(e,t){this.ctx=e,this.config=t}clear(){const{width:e,height:t}=this.config;this.ctx.clearRect(0,0,e,t)}drawGridLines(e,t){this.ctx.save(),this.ctx.strokeStyle=t,this.ctx.lineWidth=1,this.ctx.setLineDash([2,2]),e.forEach(e=>{this.ctx.beginPath(),this.ctx.moveTo(e.x1,e.y1),this.ctx.lineTo(e.x2,e.y2),this.ctx.stroke()}),this.ctx.restore()}drawAxes(e,t,i){const{width:o,height:r,padding:a}=this.config,s=a.left;a.right;const n=r-a.bottom;if(this.ctx.save(),this.ctx.strokeStyle=i.axis,this.ctx.lineWidth=1,this.ctx.setLineDash([]),e.length>0){const t=e[0],i=e[e.length-1];this.ctx.beginPath(),this.ctx.moveTo(s,t.y),this.ctx.lineTo(s,i.y),this.ctx.stroke()}if(t.length>0){const e=t[0],i=t[t.length-1];this.ctx.beginPath(),this.ctx.moveTo(e.x,n),this.ctx.lineTo(i.x,n),this.ctx.stroke()}this.ctx.restore()}drawYAxisLabels(e,t,i=e=>Ee(e,1),o=""){const{padding:r}=this.config,a=r.left-10;this.ctx.save(),this.ctx.fillStyle=t,this.ctx.font=`12px ${this.config.fontFamily||"Roboto, sans-serif"}`,this.ctx.textAlign="end",this.ctx.textBaseline="middle",e.forEach(e=>{const t=i(e.value)+o;this.ctx.fillText(t,a,e.y)}),this.ctx.restore()}drawYAxisLabelsRight(e,t,i=e=>Ee(e,2),o=""){const{width:r,padding:a}=this.config,s=r-a.right+10;this.ctx.save(),this.ctx.fillStyle=t,this.ctx.font=`12px ${this.config.fontFamily||"Roboto, sans-serif"}`,this.ctx.textAlign="start",this.ctx.textBaseline="middle",e.forEach(e=>{const t=o+i(e.value);this.ctx.fillText(t,s,e.y)}),this.ctx.restore()}drawXAxisLabels(e,t){const{height:i,padding:o}=this.config,r=i-o.bottom+20;this.ctx.save(),this.ctx.fillStyle=t,this.ctx.font=`12px ${this.config.fontFamily||"Roboto, sans-serif"}`,this.ctx.textAlign="center",this.ctx.textBaseline="top",e.forEach(e=>{this.ctx.fillText(e.label,e.x,r)}),this.ctx.restore()}drawRightYAxis(e,t){if(0===e.length)return;const{width:i,padding:o}=this.config,r=i-o.right,a=e[0],s=e[e.length-1];this.ctx.save(),this.ctx.strokeStyle=t,this.ctx.lineWidth=1,this.ctx.globalAlpha=.5,this.ctx.setLineDash([]),this.ctx.beginPath(),this.ctx.moveTo(r,a.y),this.ctx.lineTo(r,s.y),this.ctx.stroke(),this.ctx.restore()}drawLegend(e,t,i){this.ctx.save(),this.ctx.font=`11px ${this.config.fontFamily||"Roboto, sans-serif"}`,this.ctx.textAlign="left",this.ctx.textBaseline="middle";let o=i;e.forEach((e,i)=>{const r=t,a=o,s=r+15+5,n=a;this.ctx.save(),this.ctx.fillStyle=e.color,this.ctx.strokeStyle=e.color,"rect"===e.type?this.ctx.fillRect(r,a-5,15,10):"circle"===e.type?(this.ctx.beginPath(),this.ctx.arc(r+7.5,a,3,0,2*Math.PI),this.ctx.fill()):"line"===e.type&&(this.ctx.lineWidth=2,e.dashArray?this.ctx.setLineDash(e.dashArray):this.ctx.setLineDash([]),this.ctx.beginPath(),this.ctx.moveTo(r,a),this.ctx.lineTo(r+15,a),this.ctx.stroke()),this.ctx.restore(),this.ctx.fillStyle=this.config.colors.text,this.ctx.fillText(e.label,s,n),o+=20}),this.ctx.restore()}}async function Ae(e,t,i,o,r,a){const{showArea:s=!0,showMovingAverage:n=!1,movingAverageDays:c=7,showCostAxis:l=!1,costData:d,animation:h}=a||{},p=h||{enabled:!1},u=p.duration||800;p.easing,i.clear();const _=r.points.map(e=>e.timestamp||""),f=r.points.map(e=>e.value),g=xe(f,t,r.minValue,r.maxValue,_),m=$e(r.minValue,r.maxValue,5,t),v=ke(g,Se),y=Ce(m,t);if(i.drawGridLines(y,t.colors.grid),i.drawAxes(m,v,t.colors),i.drawYAxisLabels(m,t.colors.text,e=>Ee(e,1)," kWh"),i.drawXAxisLabels(v,t.colors.text),s&&g.length>0&&await async function(e,t,i,o,r,a){if(0===o.length)return;const{height:s,padding:n}=t,c=s-n.bottom;if(e.save(),e.fillStyle=r,e.globalAlpha=.2,a.enabled){const t=a.duration||800,r=a.easing||"easeOut",s=a.delay||0;await i.animate(0,1,t,r,t=>{const i=Math.floor(t*(o.length-1));e.beginPath(),e.moveTo(o[0].x,c),e.lineTo(o[0].x,o[0].y);for(let t=1;t<=i;t++)e.lineTo(o[t].x,o[t].y);e.lineTo(o[i].x,c),e.closePath(),e.fill()},s)}else{e.beginPath(),e.moveTo(o[0].x,c),e.lineTo(o[0].x,o[0].y);for(let t=1;t<o.length;t++)e.lineTo(o[t].x,o[t].y);e.lineTo(o[o.length-1].x,c),e.closePath(),e.fill()}e.restore()}(e,t,o,g,t.colors.primary,p),await Te(e,t,o,g,t.colors.primary,2,p),n&&g.length>0){const i=function(e,t){if(t<=0||0===e.length)return e.map(()=>null);const i=[];for(let o=0;o<e.length;o++){if(o<t-1){i.push(null);continue}let r=0;for(let i=o-t+1;i<=o;i++)r+=e[i];i.push(r/t)}return i}(f,c),a=i.map((e,i)=>{if(null===e)return null;return xe([e],t,r.minValue,r.maxValue,[_[i]])[0]}).filter(e=>null!==e);a.length>0&&await Te(e,t,o,a,t.colors.info,2,{...p,delay:(p.delay||0)+.3*u},[3,3])}if(await De(e,o,g,t.colors.primary,t.colors.background,p),l&&d){const r=$e(d.minValue,d.maxValue,5,t);i.drawYAxisLabelsRight(r,t.colors.accent,e=>Ee(e,2),"€"),i.drawRightYAxis(r,t.colors.accent);const a=d.points.map(e=>e.value),s=xe(a,t,d.minValue,d.maxValue,_);await Te(e,t,o,s,t.colors.accent,2,p,[5,5]),await De(e,o,s,t.colors.accent,t.colors.background,p)}const w=[];l&&d&&w.push({label:"Consumption",color:t.colors.primary,type:"rect"},{label:"Cost",color:t.colors.accent,type:"line",dashArray:[5,5]}),n&&w.push({label:`${c}-day avg`,color:t.colors.info,type:"line",dashArray:[3,3]}),w.length>0&&i.drawLegend(w,t.width-t.padding.right-120,t.padding.top+5)}async function Te(e,t,i,o,r,a,s,n){if(0!==o.length){if(e.save(),e.strokeStyle=r,e.lineWidth=a,n?e.setLineDash(n):e.setLineDash([]),s.enabled&&o.length>1){const t=s.duration||800,r=s.easing||"easeOut",a=s.delay||0;await i.animate(0,1,t,r,t=>{const i=Math.floor(t*(o.length-1));e.beginPath(),e.moveTo(o[0].x,o[0].y);for(let t=1;t<=i;t++)e.lineTo(o[t].x,o[t].y);e.stroke()},a)}else{e.beginPath(),e.moveTo(o[0].x,o[0].y);for(let t=1;t<o.length;t++)e.lineTo(o[t].x,o[t].y);e.stroke()}e.restore()}}async function De(e,t,i,o,r,a){if(0!==i.length){if(e.save(),a.enabled){const s=a.duration||800,n=a.easing||"easeOut",c=a.delay||0,l=s/i.length;for(let a=0;a<i.length;a++)await t.animate(0,1,.2*s,n,t=>{const s=i[a],n=3*t,c=t;e.globalAlpha=c,e.fillStyle=o,e.strokeStyle=r,e.lineWidth=2,e.beginPath(),e.arc(s.x,s.y,n,0,2*Math.PI),e.fill(),e.stroke()},c+a*l)}else e.fillStyle=o,e.strokeStyle=r,e.lineWidth=2,i.forEach(t=>{e.beginPath(),e.arc(t.x,t.y,3,0,2*Math.PI),e.fill(),e.stroke()});e.restore()}}async function Me(e,t,i,o,r,a){const{showCostOverlay:s=!1,costData:n,barWidth:c,animation:l}=a||{},d=l||{enabled:!1},h=d.duration||800;d.easing,i.clear();const p=r.points.map(e=>e.timestamp||""),u=r.points.map(e=>e.value),_=xe(u,t,r.minValue,r.maxValue,p),f=$e(r.minValue,r.maxValue,5,t),g=ke(_,Se),m=Ce(f,t);i.drawGridLines(m,t.colors.grid),i.drawAxes(f,g,t.colors),i.drawYAxisLabels(f,t.colors.text,e=>Ee(e,1)," kWh"),i.drawXAxisLabels(g,t.colors.text);const{width:v,padding:y}=t,w=v-y.left-y.right,b=c||Math.max(w/_.length*.6,2);if(await async function(e,t,i,o,r,a,s){if(0===o.length)return;const{height:n,padding:c}=t,l=n-c.bottom;if(e.save(),e.fillStyle=a,e.globalAlpha=.7,s.enabled){const t=s.duration||800,a=s.easing||"easeOut",n=s.delay||0,c=t/o.length;for(let s=0;s<o.length;s++){const d=o[s],h=d.x-r/2,p=d.y,u=l-p;await i.animate(0,1,.3*t,a,t=>{const i=u*t,o=l-i;e.fillRect(h,o,r,i)},n+s*c)}}else o.forEach(t=>{const i=t.x-r/2,o=t.y,a=l-o;e.fillRect(i,o,r,a)});e.restore()}(e,t,o,_,b,t.colors.primary,d),s&&n){const r=$e(n.minValue,n.maxValue,5,t);i.drawYAxisLabelsRight(r,t.colors.accent,e=>Ee(e,2),"€"),i.drawRightYAxis(r,t.colors.accent);const a=n.points.map(e=>e.value),s=xe(a,t,n.minValue,n.maxValue,p);await async function(e,t,i,o,r,a,s,n){if(0===o.length)return;e.save(),e.strokeStyle=r,e.lineWidth=a,n?e.setLineDash(n):e.setLineDash([]);if(s.enabled&&o.length>1){const t=s.duration||800,r=s.easing||"easeOut",a=s.delay||0;await i.animate(0,1,t,r,t=>{const i=Math.floor(t*(o.length-1));e.beginPath(),e.moveTo(o[0].x,o[0].y);for(let t=1;t<=i;t++)e.lineTo(o[t].x,o[t].y);e.stroke()},a)}else{e.beginPath(),e.moveTo(o[0].x,o[0].y);for(let t=1;t<o.length;t++)e.lineTo(o[t].x,o[t].y);e.stroke()}e.restore()}(e,0,o,s,t.colors.accent,2,{...d,delay:(d.delay||0)+.3*h},[5,5]),await async function(e,t,i,o,r,a){if(0===i.length)return;if(e.save(),a.enabled){const s=a.duration||800,n=a.easing||"easeOut",c=a.delay||0,l=s/i.length;for(let a=0;a<i.length;a++)await t.animate(0,1,.2*s,n,t=>{const s=i[a],n=3*t,c=t;e.globalAlpha=c,e.fillStyle=o,e.strokeStyle=r,e.lineWidth=2,e.beginPath(),e.arc(s.x,s.y,n,0,2*Math.PI),e.fill(),e.stroke()},c+a*l)}else e.fillStyle=o,e.strokeStyle=r,e.lineWidth=2,i.forEach(t=>{e.beginPath(),e.arc(t.x,t.y,3,0,2*Math.PI),e.fill(),e.stroke()});e.restore()}(e,o,s,t.colors.accent,t.colors.background,{...d,delay:(d.delay||0)+.3*h})}s&&n&&i.drawLegend([{label:"Consumption",color:t.colors.primary,type:"rect"},{label:"Cost",color:t.colors.accent,type:"line",dashArray:[5,5]}],t.width-t.padding.right-100,t.padding.top+5)}async function Oe(e,t,i,o,r,a,s,n,c,l,d){if(0===o.length)return;const h=xe(o,t,s,n,a),p=xe(r,t,s,n,a);if(e.save(),e.fillStyle=c,e.globalAlpha=l,d.enabled){const t=d.duration||800,o=d.easing||"easeOut",r=d.delay||0;await i.animate(0,1,t,o,t=>{e.beginPath();const i=h.map((e,i)=>{const o=p[i]?.y||e.y,r=e.y-o;return{...e,y:o+r*t}});e.moveTo(i[0].x,p[0]?.y||i[0].y),e.lineTo(i[0].x,i[0].y);for(let t=1;t<i.length;t++)e.lineTo(i[t].x,i[t].y);for(let t=p.length-1;t>=0;t--)e.lineTo(p[t].x,p[t].y);e.closePath(),e.fill()},r)}else{e.beginPath(),e.moveTo(h[0].x,p[0]?.y||h[0].y),e.lineTo(h[0].x,h[0].y);for(let t=1;t<h.length;t++)e.lineTo(h[t].x,h[t].y);for(let t=p.length-1;t>=0;t--)e.lineTo(p[t].x,p[t].y);e.closePath(),e.fill()}e.restore()}class Re{constructor(e,t){this.hoverCallback=null,this.interactive=!1,this.canvas=e;const i=e.getContext("2d");if(!i)throw new Error("Failed to get 2D context from canvas");this.ctx=i,this.config=t,this.animator=new be,this.renderer=new Pe(this.ctx,this.config),this.canvas.width=t.width,this.canvas.height=t.height}clear(){this.renderer.clear()}resize(e,t){this.config.width=e,this.config.height=t,this.canvas.width=e,this.canvas.height=t}getComputedColor(e,t){if("undefined"==typeof window)return t;try{const i=this.canvas.getRootNode(),o=i instanceof ShadowRoot?i.host:document.documentElement,r=getComputedStyle(o);return r.getPropertyValue(e).trim()||t}catch{return t}}async renderLineChart(e,t){await Ae(this.ctx,this.config,this.renderer,this.animator,e,t)}async renderBarChart(e,t){await Me(this.ctx,this.config,this.renderer,this.animator,e,t)}async renderStackedAreaChart(e,t){await async function(e,t,i,o,r,a){const{animation:s}=a||{},n=s||{enabled:!1},c=n.duration||800;n.easing,i.clear();const{layers:l,timestamps:d=[],minValue:h,maxValue:p}=r;if(0===l.length)return;const u=[];let _=new Array(l[0].data.length).fill(0);for(const e of l){const t=e.data.map((e,t)=>_[t]+e);u.push(t),_=t}const f=$e(h,p,5,t),g=ke(xe(u[0]||[],t,h,p,d),Se),m=Ce(f,t);i.drawGridLines(m,t.colors.grid),i.drawAxes(f,g,t.colors),i.drawYAxisLabels(f,t.colors.text,e=>Ee(e,1)," kWh"),i.drawXAxisLabels(g,t.colors.text);let v=new Array(l[0].data.length).fill(0);for(let i=0;i<l.length;i++){const r=l[i],a=u[i],s=n.enabled?(n.delay||0)+i*(.2*c):0;await Oe(e,t,o,a,v,d,h,p,r.color,r.opacity||.6,{...n,delay:s}),v=a}const y=l.map((e,t)=>({label:e.label||`Layer ${t+1}`,color:e.color,type:"rect"}));y.length>0&&i.drawLegend(y,t.padding.left+10,t.padding.top+5)}(this.ctx,this.config,this.renderer,this.animator,e,t)}enableInteractivity(){this.interactive=!0,this._setupMouseHandlers()}disableInteractivity(){this.interactive=!1,this.canvas.removeEventListener("mousemove",this._handleMouseMove),this.canvas.removeEventListener("mouseleave",this._handleMouseLeave)}onPointHover(e){this.hoverCallback=e}_setupMouseHandlers(){this.canvas.addEventListener("mousemove",this._handleMouseMove.bind(this)),this.canvas.addEventListener("mouseleave",this._handleMouseLeave.bind(this))}_handleMouseMove(e){if(!this.interactive||!this.hoverCallback)return;const t=this.canvas.getBoundingClientRect();e.clientX,t.left,e.clientY,t.top,this.hoverCallback(null)}_handleMouseLeave(){this.hoverCallback&&this.hoverCallback(null)}}var Fe=function(e,t,i,o){var r,a=arguments.length,s=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(s=(a<3?r(s):a>3?r(t,i,s):r(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};void 0!==ne&&ne.disableWarning&&ne.disableWarning("change-in-update");class Le extends ne{constructor(){super(...arguments),this._consumptionData=[],this._comparisonResult=null,this._tariffCosts=null,this._loading=!1,this._error=null,this._comparisonError=null,this._currentPeriod="week",this._currentDate=new Date,this._weekComparisonData=null,this._chartInstance=null}_getComputedColor(e,t){if("undefined"!=typeof window&&this.shadowRoot)try{const i=this.shadowRoot.host||document.documentElement,o=getComputedStyle(i);return o.getPropertyValue(e).trim()||t}catch{return t}return t}setConfig(e){if(!e)throw new Error("Invalid configuration");const t={...e,view:e.view||"consumption"};this.config=t,t.default_period&&(this._currentPeriod=t.default_period)}getCardSize(){let e=1;this.config&&!1!==this.config.show_navigation&&(e+=1);const t=this.config?.view||"consumption";return this.config&&"tariff-comparison"===t&&(e+=1),e}connectedCallback(){super.connectedCallback(),this._validateConfig(),this._currentPeriod=this.config.default_period||"week",this._error||this._loadData()}updated(e){super.updated(e),e.has("config")&&(this._validateConfig(),this.config.default_period&&this._currentPeriod!==this.config.default_period&&(this._currentPeriod=this.config.default_period),void 0!==e.get("config")&&this._loadData()),(e.has("_consumptionData")||e.has("config")||e.has("_tariffCosts"))&&this._renderCanvasChart()}_validateConfig(){if(!this.config)return this._error="Card configuration is required",void(this._loading=!1);if(!this.config.source_entry_id)return this._error="Configuration incomplete. Please edit this card and select your Octopus Energy tariff.",void(this._loading=!1);"tariff-comparison"!==(this.config.view||"consumption")||this.config.tariff_entry_ids&&0!==this.config.tariff_entry_ids.length||ye.warn("Tariff comparison view is active but no tariff_entry_ids provided. Comparison will be disabled."),this.config.show_cost_on_chart&&!this.config.selected_tariff_for_cost&&ye.warn("show_cost_on_chart is enabled but selected_tariff_for_cost is not set. Cost display will be disabled.")}_createTimeoutPromise(e){return new Promise((t,i)=>{setTimeout(()=>i(new Error("Request timeout. The service call took too long to respond.")),e)})}async _callServiceWithTimeout(e,t,i,o=!0){ye.groupServiceCall(e,t);try{let r;if(ye.serviceCall(e,t,o),i&&ye.serviceData(i),o&&this.hass.callWS)try{r=await this._callServiceViaWebSocket(e,t,i)}catch(o){const a=o instanceof Error?o.message:String(o);ye.warn("⚠ WebSocket call failed, falling back to callService: ",a),r=await this._callServiceViaStandard(e,t,i)}else r=await this._callServiceViaStandard(e,t,i);return ye.serviceResponse(r),ye.groupEnd(),r}catch(i){throw ye.serviceError(i),ye.groupEnd(),this._handleServiceError(i,e,t)}}_handleServiceError(e,t,i){if(e instanceof Error)return e.message.includes("timeout")?new Error(`Service call timeout: ${t}.${i} took longer than ${Le.SERVICE_TIMEOUT}ms`):e.message.includes("Service not found")||e.message.includes("not available")?new Error(`Service ${t}.${i} is not available. Please ensure the Octopus Energy España integration is installed and configured.`):"service_validation_error"===e.code?this._handleValidationError(e):new Error(`Service call failed: ${t}.${i} - ${e.message}`);if(e&&"object"==typeof e){const o=e;if("service_validation_error"===o.code)return this._handleValidationError(o);const r=o.message||o.translation_key||"Unknown service error";return new Error(`Service call failed: ${t}.${i} - ${r}`)}return e instanceof Error?e:new Error(String(e))}_handleValidationError(e){const t=(Error,e);let i=t.message||t.translation_key||"Service validation error";return i.includes("return_response")&&(i="The service integration may not support response data yet. Please ensure you're using the latest version of the Octopus Energy España integration and that it has been reloaded after updating."),new Error(`Service validation error: ${i}`)}_validateConsumptionResponse(e){if(!e||"object"!=typeof e)throw ye.groupError("Invalid service response"),ye.error("✗ Invalid service response: ","expected object with success field"),ye.groupEnd(),new Error("Invalid response from service: expected object with success field");if(!("success"in e))throw ye.groupError("Invalid service response format"),ye.error("✗ Invalid service response format: ","response does not contain success field"),ye.data("Received response",e),ye.groupEnd(),new Error("Service returned unexpected response format. The service may not be returning data correctly. Please check the integration configuration and ensure the service supports returning response data.")}_extractErrorMessage(e){return e instanceof Error?e.message:e&&"object"==typeof e?e.message||e.translation_key||JSON.stringify(e):String(e)}_createUserFriendlyError(e){if(e instanceof Error)return e;if(e&&"object"==typeof e){const t=e;let i=t.message||t.translation_key||JSON.stringify(e);return"service_validation_error"===t.code&&(i=i.includes("return_response")?"The service integration may not support response data yet. Please ensure you're using the latest version of the Octopus Energy España integration and that it has been reloaded after updating.":i||"Service validation error. Please check your configuration."),new Error(i)}return new Error(String(e))}_extractWebSocketResponse(e){return e&&"object"==typeof e?"service_response"in e?e.service_response:"response"in e?e.response:e:e}async _callServiceViaWebSocket(e,t,i){if(!this.hass.callWS)throw new Error("callWS is not available");const o=this.hass.callWS({type:"call_service",domain:e,service:t,service_data:i,return_response:!0}),r=this._createTimeoutPromise(Le.SERVICE_TIMEOUT),a=await Promise.race([o,r]);return this._extractWebSocketResponse(a)}async _callServiceViaStandard(e,t,i){const o=this.hass.callService(e,t,i),r=this._createTimeoutPromise(Le.SERVICE_TIMEOUT);return await Promise.race([o,r])}async _loadData(){if(!this.hass||!this.config)return;const e=this.config.source_entry_id;if(!e)return this._error="source_entry_id is required. Please select your tariff from the card editor.",void(this._loading=!1);this._loading=!0,this._error=null,this._comparisonError=null;try{const{startDate:t,endDate:i}=this._getDateRange();this._validateDateRange(t,i);const o=`${t.toISOString().split("T")[0]} → ${i.toISOString().split("T")[0]}`;ye.groupDataLoad(e,this._currentPeriod,o);const r=await this._fetchConsumptionData(e,t,i);this._consumptionData=r.consumption_data||[],r.tariff_costs?this._tariffCosts=r.tariff_costs:this._tariffCosts=null;const a=this.config.view||"consumption";"tariff-comparison"===a&&this.config.tariff_entry_ids?.length?await this._fetchTariffComparison(e,t,i):this._comparisonResult=null,"week-analysis"===a&&this.config.show_week_comparison?this._weekComparisonData=this._calculateWeekComparison():this._weekComparisonData=null,ye.groupEnd()}catch(e){ye.groupError("Error loading data"),this._error=e instanceof Error?e.message:String(e),ye.error("Error loading data: ",this._extractErrorMessage(e)),ye.data("Error details",e),ye.groupEnd()}finally{this._loading=!1}}_validateDateRange(e,t){if(e>new Date)throw new Error(`Invalid date range: start date (${e.toISOString().split("T")[0]}) is in the future. Please navigate to a past period.`);if(e>t)throw new Error("Invalid date range: start date is after end date.")}async _fetchConsumptionData(e,t,i){const o="heat-calendar"===(this.config.view||"consumption")&&"year"===this.config.heat_calendar_period?"daily":"day"===this._currentPeriod||"week"===this._currentPeriod?"hourly":"daily";let r;try{r=await this._callServiceWithTimeout(Le.SERVICE_DOMAIN,Le.SERVICE_FETCH_CONSUMPTION,{entry_id:e,start_date:t.toISOString().split("T")[0],end_date:i.toISOString().split("T")[0],granularity:o}),ye.data("Raw Service Response (before processing)",r);const a=r;return this._validateConsumptionResponse(a),a.success||this._handleConsumptionError(a,e),a}catch(e){throw ye.groupError("Service call failed"),ye.error("✗ Service call failed: ",this._extractErrorMessage(e)),ye.data("Full Error Object",e),ye.groupEnd(),this._createUserFriendlyError(e)}}_handleConsumptionError(e,t){const i=e.error||"Failed to fetch consumption data";let o=i;throw e.warning&&(o+=`. ${e.warning}`,ye.warn("⚠ Service Warning: ",e.warning)),ye.groupError("Service returned error"),ye.error("✗ Service returned error: ",i),ye.data("Requested Entry ID",t),e.context&&(ye.data("Service Context",e.context),e.context.id&&e.context.id!==t&&ye.warn("⚠ Note: Service context shows different entry ID (",e.context.id+"). This may be informational.")),ye.groupEnd(),ye.data("Full Response",{success:e.success,error:e.error,warning:e.warning,context:e.context}),new Error(o)}async _fetchTariffComparison(e,t,i){try{const o="day"===this._currentPeriod?"daily":"week"===this._currentPeriod?"weekly":"monthly",r=await this._callServiceWithTimeout(Le.SERVICE_DOMAIN,Le.SERVICE_COMPARE_TARIFFS,{tariff_entry_ids:this.config.tariff_entry_ids,source_entry_id:e,period:o,start_date:t.toISOString().split("T")[0],end_date:i.toISOString().split("T")[0]});if(r.success&&r.result)this._comparisonResult=r.result;else{const e=r.error||"Failed to compare tariffs";this._comparisonError=e,ye.groupError("Tariff comparison failed"),ye.warn("⚠ Tariff comparison failed: ",e),ye.groupEnd()}}catch(e){const t=e instanceof Error?e.message:String(e);this._comparisonError=`Tariff comparison error: ${t}`,ye.groupError("Tariff comparison error"),ye.warn("⚠ Tariff comparison error: ",t),ye.groupEnd()}}_getDateRange(){if("heat-calendar"===(this.config.view||"consumption")&&"year"===this.config.heat_calendar_period){const e=this._currentDate.getFullYear(),t=new Date,i=e===t.getFullYear(),o=new Date(e,0,1);o.setHours(0,0,0,0);const r=i?new Date(t):new Date(e,11,31);return r.setHours(23,59,59,999),{startDate:o,endDate:r}}const e=new Date(this._currentDate);e.setHours(23,59,59,999);const t=new Date(e);return"day"===this._currentPeriod?t.setHours(0,0,0,0):"week"===this._currentPeriod?(t.setDate(t.getDate()-6),t.setHours(0,0,0,0)):"month"===this._currentPeriod&&(t.setDate(t.getDate()-29),t.setHours(0,0,0,0)),{startDate:t,endDate:e}}_navigatePeriod(e){const t="prev"===e?-1:1;if("heat-calendar"===(this.config.view||"consumption")&&"year"===this.config.heat_calendar_period)return this._currentDate.setFullYear(this._currentDate.getFullYear()+t),this._currentDate=new Date(this._currentDate),void this._loadData();"day"===this._currentPeriod?this._currentDate.setDate(this._currentDate.getDate()+t):"week"===this._currentPeriod?this._currentDate.setDate(this._currentDate.getDate()+7*t):"month"===this._currentPeriod&&this._currentDate.setMonth(this._currentDate.getMonth()+t),this._currentDate=new Date(this._currentDate),this._loadData()}_setPeriod(e){this._currentPeriod=e,this._loadData()}_extractPeriodData(){if(this._tariffCosts&&this.config.source_entry_id){const e=this._tariffCosts[this.config.source_entry_id];if(e&&e.hourly_breakdown){const t=new Map;for(const i of e.hourly_breakdown){const e=i.hour||"",o=i.consumption||0,r=i.period;t.has(e)||t.set(e,{p1:0,p2:0,p3:0});const a=t.get(e);"P1"===r?a.p1+=o:"P2"===r?a.p2+=o:"P3"===r&&(a.p3+=o)}const i=Array.from(t.entries()).map(([e,t])=>({timestamp:e,...t}));if(i.length>0)return i}if(e&&e.daily_breakdown&&"month"===this._currentPeriod&&e.period_breakdown){const t=e.period_breakdown.p1_percentage/100,i=e.period_breakdown.p2_percentage/100,o=e.period_breakdown.p3_percentage/100;return e.daily_breakdown.map(e=>({timestamp:e.date,p1:e.consumption*t,p2:e.consumption*i,p3:e.consumption*o}))}}if(this._consumptionData.length>0){const e=this._consumptionData[0];if(void 0!==e.p1_consumption||e.period)return this._consumptionData.map(e=>({timestamp:e.start_time||e.date||"",p1:e.p1_consumption||("P1"===e.period?e.consumption:0),p2:e.p2_consumption||("P2"===e.period?e.consumption:0),p3:e.p3_consumption||("P3"===e.period?e.consumption:0)}))}return null}_calculateMovingAverage(e,t){if(t<2||0===e.length)return e.map(()=>null);const i=[];for(let o=0;o<e.length;o++)if(o<t-1)i.push(null);else{let r=0;for(let i=0;i<t;i++)r+=e[o-i];i.push(r/t)}return i}_calculateCostMovingAverage(e,t=30){return this._calculateMovingAverage(e,t)}_renderHeatCalendar(){const e=this._getHeatCalendarData(),t="year"===(this.config.heat_calendar_period||"month");if(0===e.length)return H`
        <div class="error-message">
          <div class="error-title">Heat Calendar Unavailable</div>
          <div class="error-details">
            Daily breakdown data is not available. Please ensure tariff comparison is enabled or daily data is available from the service.
          </div>
        </div>
      `;const i=new Map,o=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],r=new Map;for(const o of e){const e=t?o.weekOfYear??0:o.weekOfMonth??0;i.has(e)||i.set(e,new Map),i.get(e).set(o.dayOfWeek,o),t&&void 0!==o.month&&(r.has(e)&&r.get(e)===o.month||r.set(e,o.month))}let a,s;if(t){const e=Array.from(i.keys());e.length>0?(s=Math.min(...e),a=Math.max(...e),a-s<51&&(a=s+52)):(s=0,a=52)}else a=Math.max(...Array.from(i.keys()),0),s=Math.min(...Array.from(i.keys()),0);const n=[];for(let e=s;e<=a;e++){const t=[];for(let o=0;o<7;o++){const r=i.get(e)?.get(o)||null;t.push(r)}n.push(t)}let c=null;if(t&&e.length>0){const t=e.reduce((e,t)=>e+t.consumption,0);c={totalConsumption:t,totalCost:e.reduce((e,t)=>e+t.cost,0),avgDailyConsumption:t/e.length,year:e[0]?.year||this._currentDate.getFullYear()}}return H`
      <div class="heat-calendar-container ${t?"heat-calendar-year-view":""}">
        <div class="comparison-title">
          Consumption Heat Calendar
          ${t&&c?H` - ${c.year}`:""}
        </div>
        ${t&&c?H`
          <div class="heat-calendar-summary">
            <span>Total: ${c.totalConsumption.toFixed(1)} kWh</span>
            <span>Avg/Day: ${c.avgDailyConsumption.toFixed(2)} kWh</span>
            <span>Cost: €${c.totalCost.toFixed(2)}</span>
          </div>
        `:""}
        <div class="heat-calendar-grid ${t?"heat-calendar-grid-year":""}">
          ${["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(e=>H`
            <div class="heat-calendar-day empty" style="font-weight: 600;">${e}</div>
          `)}
          ${n.map((e,i)=>{const a=s+i,n=r.get(a),c=t&&void 0!==n&&(0===i||r.get(s+i-1)!==n);return H`
              ${c?H`
                <div class="heat-calendar-month-label" style="grid-column: 1 / -1;">
                  ${o[n]}
                </div>
              `:""}
              ${e.map(e=>{if(!e)return H`<div class="heat-calendar-day empty"></div>`;const i=new Date(e.date),r=i.getDate(),a=o[i.getMonth()],s=t?`${a} ${r}, ${e.year}: ${e.consumption.toFixed(2)} kWh, €${e.cost.toFixed(2)}`:`${e.date}: ${e.consumption.toFixed(2)} kWh, €${e.cost.toFixed(2)}`;return H`
                  <div 
                    class="heat-calendar-day intensity-${e.intensity}"
                    title="${s}"
                  >
                    ${t?"":r}
                  </div>
                `})}
            `})}
        </div>
        <div class="heat-calendar-legend">
          <div class="heat-calendar-legend-item">
            <div class="heat-calendar-legend-color intensity-low"></div>
            <span>Low</span>
          </div>
          <div class="heat-calendar-legend-item">
            <div class="heat-calendar-legend-color intensity-medium"></div>
            <span>Medium</span>
          </div>
          <div class="heat-calendar-legend-item">
            <div class="heat-calendar-legend-color intensity-high"></div>
            <span>High</span>
          </div>
        </div>
      </div>
    `}_renderWeekComparison(){if(!this._weekComparisonData||0===this._weekComparisonData.weeks.length)return H`<div class="loading">No week comparison data available</div>`;const{weeks:e,comparisons:t}=this._weekComparisonData;return H`
      <div class="week-comparison-section">
        <div class="comparison-title">Week-over-Week Comparison</div>
        <div class="week-comparison-grid">
          ${e.map((i,o)=>{const r=t.find(e=>e.weekIndex===o);return H`
              <div class="week-card">
                <div class="week-card-header">
                  Week ${e.length-o}
                  ${r?H`
                    <span class="week-change ${r.consumptionChangePercent>=0?"positive":"negative"}">
                      ${r.consumptionChangePercent>=0?"↑":"↓"} ${Math.abs(r.consumptionChangePercent).toFixed(1)}%
                    </span>
                  `:""}
                </div>
                <div class="week-card-metrics">
                  <div class="week-metric">
                    <span class="week-metric-label">Consumption:</span>
                    <span class="week-metric-value">${i.consumption.toFixed(1)} kWh</span>
                  </div>
                  <div class="week-metric">
                    <span class="week-metric-label">Cost:</span>
                    <span class="week-metric-value">€${i.cost.toFixed(2)}</span>
                  </div>
                  <div class="week-metric">
                    <span class="week-metric-label">Period:</span>
                    <span class="week-metric-value">${i.weekStart} - ${i.weekEnd}</span>
                  </div>
                </div>
              </div>
            `})}
        </div>
      </div>
    `}_renderTariffComparisonChart(){if(!this._comparisonResult||!this._comparisonResult.tariffs||0===this._comparisonResult.tariffs.length)return H``;const e=this._comparisonResult.tariffs;let t=0;for(const i of e){const e=i.period_breakdown;t=Math.max(t,e.p1_consumption,e.p2_consumption,e.p3_consumption),e.p1_consumption>0&&i.hourly_breakdown?.filter(e=>"P1"===e.period).reduce((e,t)=>e+t.cost,0),e.p2_consumption>0&&i.hourly_breakdown?.filter(e=>"P2"===e.period).reduce((e,t)=>e+t.cost,0),e.p3_consumption>0&&i.hourly_breakdown?.filter(e=>"P3"===e.period).reduce((e,t)=>e+t.cost,0)}return H`
      <div class="tariff-chart-container">
        <div class="period-breakdown-title">Consumption & Cost by Period</div>
        ${e.map(e=>{const i=e.period_breakdown,o=i.p1_consumption>0&&e.hourly_breakdown?.filter(e=>"P1"===e.period).reduce((e,t)=>e+t.cost,0)||0,r=i.p2_consumption>0&&e.hourly_breakdown?.filter(e=>"P2"===e.period).reduce((e,t)=>e+t.cost,0)||0,a=i.p3_consumption>0&&e.hourly_breakdown?.filter(e=>"P3"===e.period).reduce((e,t)=>e+t.cost,0)||0,s=i.p1_consumption>0?o/i.p1_consumption:0,n=i.p2_consumption>0?r/i.p2_consumption:0,c=i.p3_consumption>0?a/i.p3_consumption:0;return H`
            <div style="margin-top: 16px;">
              <div class="tariff-name" style="margin-bottom: 8px;">${e.name}</div>
              <div class="tariff-chart-bars">
                <div class="tariff-chart-bar-group">
                  <div class="tariff-chart-bar-label">P1</div>
                  <div 
                    class="tariff-chart-bar p1" 
                    style="height: ${t>0?i.p1_consumption/t*100:0}%"
                    title="P1: ${i.p1_consumption.toFixed(2)} kWh, €${o.toFixed(2)} (€${s.toFixed(3)}/kWh)"
                  ></div>
                </div>
                <div class="tariff-chart-bar-group">
                  <div class="tariff-chart-bar-label">P2</div>
                  <div 
                    class="tariff-chart-bar p2" 
                    style="height: ${t>0?i.p2_consumption/t*100:0}%"
                    title="P2: ${i.p2_consumption.toFixed(2)} kWh, €${r.toFixed(2)} (€${n.toFixed(3)}/kWh)"
                  ></div>
                </div>
                <div class="tariff-chart-bar-group">
                  <div class="tariff-chart-bar-label">P3</div>
                  <div 
                    class="tariff-chart-bar p3" 
                    style="height: ${t>0?i.p3_consumption/t*100:0}%"
                    title="P3: ${i.p3_consumption.toFixed(2)} kWh, €${a.toFixed(2)} (€${c.toFixed(3)}/kWh)"
                  ></div>
                </div>
              </div>
            </div>
          `})}
      </div>
    `}_getISOWeekOfYear(e){const t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate())),i=t.getUTCDay()||7;t.setUTCDate(t.getUTCDate()+4-i);const o=new Date(Date.UTC(t.getUTCFullYear(),0,1));return Math.ceil(((t.getTime()-o.getTime())/864e5+1)/7)-1}_getHeatCalendarData(){if(!this._tariffCosts||!this.config.source_entry_id)return[];const e=this._tariffCosts[this.config.source_entry_id];if(!e||!e.daily_breakdown||0===e.daily_breakdown.length)return[];const t=this.config.heat_calendar_period||"month";let i=e.daily_breakdown;if("year"===t){const e=this._currentDate.getFullYear();i=i.filter(t=>new Date(t.date).getFullYear()===e)}else{const e=this._currentDate.getFullYear(),t=this._currentDate.getMonth();i=i.filter(i=>{const o=new Date(i.date);return o.getFullYear()===e&&o.getMonth()===t})}if(0===i.length)return[];const o=i.map(e=>e.consumption).filter(e=>e>0);if(0===o.length)return[];const r=[...o].sort((e,t)=>e-t),a=r[Math.floor(.33*r.length)],s=r[Math.floor(.67*r.length)],n=[];for(const e of i){const i=new Date(e.date),o=i.getDay(),r=i.getFullYear(),c=i.getMonth();let l,d;if("year"===t)d=this._getISOWeekOfYear(i);else{const e=new Date(i.getFullYear(),i.getMonth(),1).getDay(),t=i.getDate();l=Math.floor((t+e-1)/7)}let h="medium";e.consumption<=a?h="low":e.consumption>=s&&(h="high"),n.push({date:e.date,consumption:e.consumption,cost:e.cost,dayOfWeek:o,weekOfMonth:l,weekOfYear:d,month:c,year:r,intensity:h})}return n}_calculateWeekComparison(){if(!this._tariffCosts||!this.config.source_entry_id)return null;const e=this._tariffCosts[this.config.source_entry_id];if(!e||!e.daily_breakdown||0===e.daily_breakdown.length)return null;const t=this.config.week_comparison_count||2,i=e.daily_breakdown,o=new Map;for(const t of i){const i=new Date(t.date),r=i.getDay(),a=i.getDate()-r+(0===r?-6:1),s=new Date(i.setDate(a));s.setHours(0,0,0,0);const n=s.toISOString().split("T")[0];if(!o.has(n)){const e=new Date(s);e.setDate(s.getDate()+6),o.set(n,{weekStart:n,weekEnd:e.toISOString().split("T")[0],consumption:0,cost:0,periodBreakdown:{p1_consumption:0,p2_consumption:0,p3_consumption:0}})}const c=o.get(n);if(c.consumption+=t.consumption,c.cost+=t.cost,e.period_breakdown){const i=e.period_breakdown.p1_percentage/100,o=e.period_breakdown.p2_percentage/100,r=e.period_breakdown.p3_percentage/100;c.periodBreakdown.p1_consumption+=t.consumption*i,c.periodBreakdown.p2_consumption+=t.consumption*o,c.periodBreakdown.p3_consumption+=t.consumption*r}}const r=Array.from(o.values()).sort((e,t)=>new Date(t.weekStart).getTime()-new Date(e.weekStart).getTime()),a=r.slice(0,t),s=[];for(let e=0;e<a.length-1;e++){const t=a[e],i=a[e+1],o=t.consumption-i.consumption,r=i.consumption>0?o/i.consumption*100:0,n=t.cost-i.cost,c=i.cost>0?n/i.cost*100:0;s.push({weekIndex:e,consumptionChange:o,consumptionChangePercent:r,costChange:n,costChangePercent:c})}return{weeks:a,comparisons:s}}render(){if(this._loading)return H`
        <div class="loading">
          <ha-circular-progress indeterminate></ha-circular-progress>
          <p>Loading consumption data...</p>
        </div>
      `;if(this._error){const e=this._error.includes("Configuration incomplete")||this._error.includes("configuration is required");return H`
        <div class="error-message">
          <ha-icon icon="${e?"mdi:cog-outline":"mdi:alert-circle"}" class="error-icon"></ha-icon>
          <div class="error-title">${e?"Configuration Required":"Unable to Load Data"}</div>
          <div class="error-details">${this._error}</div>
          ${e?H`
            <div class="error-details" style="margin-top: 12px; font-size: 13px;">
              Click the <strong>⋮</strong> menu in the top-right corner of this card and select <strong>Edit</strong> to configure it.
            </div>
          `:H`
            <button class="retry-button" @click=${this._loadData}>
              Retry
            </button>
          `}
        </div>
      `}const e=this.config.view||"consumption";return H`
      ${"consumption"===e?this._renderConsumptionView():""}
      ${"heat-calendar"===e?this._renderHeatCalendarView():""}
      ${"week-analysis"===e?this._renderWeekAnalysisView():""}
      ${"tariff-comparison"===e?this._renderTariffComparisonView():""}
    `}_renderConsumptionView(){return H`
      ${!1!==this.config.show_navigation?H`
        <div class="period-selector">
          <button
            class="period-button ${"day"===this._currentPeriod?"active":""}"
            @click=${()=>this._setPeriod("day")}
          >
            Day
          </button>
          <button
            class="period-button ${"week"===this._currentPeriod?"active":""}"
            @click=${()=>this._setPeriod("week")}
          >
            Week
          </button>
          <button
            class="period-button ${"month"===this._currentPeriod?"active":""}"
            @click=${()=>this._setPeriod("month")}
          >
            Month
          </button>
        </div>

        <div class="navigation-controls">
          <button class="nav-button" @click=${()=>this._navigatePeriod("prev")}>
            ← Previous
          </button>
          <button class="nav-button" @click=${()=>this._navigatePeriod("next")}>
            Next →
          </button>
        </div>
      `:""}

      <div class="chart-container">
        ${this._renderChart()}
      </div>
    `}_renderHeatCalendarView(){return H`
      ${!1!==this.config.show_navigation?H`
        <div class="navigation-controls">
          <button class="nav-button" @click=${()=>this._navigatePeriod("prev")}>
            ${"year"===this.config.heat_calendar_period?"← Previous Year":"← Previous Month"}
          </button>
          <button class="nav-button" @click=${()=>this._navigatePeriod("next")}>
            ${"year"===this.config.heat_calendar_period?"Next Year →":"Next Month →"}
          </button>
        </div>
      `:""}

      <div class="chart-container">
        ${this._renderHeatCalendar()}
      </div>
    `}_renderWeekAnalysisView(){return this.config.show_week_comparison?H`
      ${!1!==this.config.show_navigation?H`
        <div class="period-selector">
          <button
            class="period-button ${"day"===this._currentPeriod?"active":""}"
            @click=${()=>this._setPeriod("day")}
          >
            Day
          </button>
          <button
            class="period-button ${"week"===this._currentPeriod?"active":""}"
            @click=${()=>this._setPeriod("week")}
          >
            Week
          </button>
          <button
            class="period-button ${"month"===this._currentPeriod?"active":""}"
            @click=${()=>this._setPeriod("month")}
          >
            Month
          </button>
        </div>

        <div class="navigation-controls">
          <button class="nav-button" @click=${()=>this._navigatePeriod("prev")}>
            ← Previous
          </button>
          <button class="nav-button" @click=${()=>this._navigatePeriod("next")}>
            Next →
          </button>
        </div>
      `:""}

      ${this._renderWeekComparison()}
    `:H`
        <div class="error-message">
          <div class="error-title">Week Comparison Not Enabled</div>
          <div class="error-details">
            Please enable "Show Week Comparison" in the card configuration to use the Week Analysis view.
          </div>
        </div>
      `}_renderTariffComparisonView(){return H`
      <div class="comparison-section">
        <h3 class="comparison-title">Tariff Comparison</h3>
        ${this._comparisonError?H`
          <div class="comparison-error">
            <ha-icon icon="mdi:alert"></ha-icon>
            ${this._comparisonError}
          </div>
        `:this._comparisonResult?H`
          ${this._renderComparison()}
          ${!1!==this.config.show_tariff_chart?this._renderTariffComparisonChart():""}
        `:H`
          <div class="loading">Loading tariff comparison...</div>
        `}
      </div>
    `}_renderChart(){return 0===this._consumptionData.length?H`<div class="loading">No consumption data available</div>`:H`
      <canvas 
        id="chart-canvas"
        class="chart-canvas"
        width="800" 
        height="300">
      </canvas>
    `}async _renderCanvasChart(){const e=this.shadowRoot?.querySelector("#chart-canvas");if(!e||0===this._consumptionData.length)return;const t=this.config.chart_type||"line",i=800,o=300;let r;const a=!(!this.config.show_cost_on_chart||!this.config.selected_tariff_for_cost||null===this._tariffCosts);if(a&&this._tariffCosts&&this.config.selected_tariff_for_cost){const e=this._tariffCosts[this.config.selected_tariff_for_cost];if(e){const t="month"===this._currentPeriod?e.daily_breakdown:e.hourly_breakdown;if(t&&t.length>0){const e=t.map(e=>e.cost),a=this._consumptionData.map(e=>e.consumption||e.value||0);if(e.length===a.length){const t=Math.max(...e,.01),a=Math.min(...e,0),s=this._consumptionData.map(e=>e.start_time||e.date||"");r={points:xe(e,{width:i,height:o,padding:{top:20,right:60,bottom:40,left:60}},a,t,s),minValue:a,maxValue:t,range:t-a||1}}}}}const s={top:20,right:r?60:20,bottom:40,left:60},n=this._consumptionData.map(e=>e.consumption||e.value||0),c=this._consumptionData.map(e=>e.start_time||e.date||""),l=function(e){const t=Math.min(...e,0),i=Math.max(...e,1);return{points:[],minValue:t,maxValue:i,range:i-t||1}}(n),d={width:i,height:o,padding:s};l.points=xe(n,d,l.minValue,l.maxValue,c);const h={text:this._getComputedColor("--secondary-text-color","#888"),accent:this._getComputedColor("--accent-color","#ff9800"),primary:this._getComputedColor("--primary-color","#03a9f4"),error:this._getComputedColor("--error-color","#f44336"),warning:this._getComputedColor("--warning-color","#ff9800"),success:this._getComputedColor("--success-color","#4caf50"),info:this._getComputedColor("--info-color","#2196f3"),background:this._getComputedColor("--card-background-color","#fff"),grid:this._getComputedColor("--divider-color","#e0e0e0"),axis:this._getComputedColor("--divider-color","#e0e0e0")};this._chartInstance?this._chartInstance.resize(i,o):this._chartInstance=new Re(e,{width:i,height:o,padding:s,colors:h});const p={enabled:!0,duration:800,easing:"easeOut"};try{switch(t){case"line":await this._chartInstance.renderLineChart(l,{showArea:!0,showMovingAverage:!!this.config.show_moving_average,movingAverageDays:this.config.moving_average_days||7,showCostAxis:!(!a||!r),costData:r,animation:p});break;case"bar":await this._chartInstance.renderBarChart(l,{showCostOverlay:!(!a||!r),costData:r,animation:p});break;case"stacked-area":const t=this._prepareStackedData();if(t)await this._chartInstance.renderStackedAreaChart(t,{animation:p});else{const t=document.createElement("div");t.className="error-message",t.innerHTML='\n              <div class="error-title">Stacked Area Chart Unavailable</div>\n              <div class="error-details">\n                Period breakdown data (P1/P2/P3) is not available. \n                Please ensure tariff comparison is enabled or period data is available from the service.\n              </div>\n            ',e.parentElement?.replaceChild(t,e)}}}catch(e){ye.error("Error rendering chart: ",e instanceof Error?e.message:String(e))}}_prepareStackedData(){const e=this._extractPeriodData();if(!e||0===e.length)return null;const t=e.map(e=>e.p1||0),i=e.map(e=>e.p2||0),o=e.map(e=>e.p3||0),r=o.map((e,t)=>e+(i[t]||0)),a=r.map((e,i)=>e+(t[i]||0)),s=Math.max(...a,1),n=s-0||1,c=this._getComputedColor("--error-color","#f44336"),l=this._getComputedColor("--warning-color","#ff9800");return{layers:[{data:o,color:this._getComputedColor("--success-color","#4caf50"),opacity:.6,label:"P3 (Valley)"},{data:i,color:l,opacity:.6,label:"P2 (Flat)"},{data:t,color:c,opacity:.6,label:"P1 (Peak)"}],timestamps:e.map(e=>e.timestamp),minValue:0,maxValue:s,range:n}}_renderComparison(){if(!this._comparisonResult||!this._comparisonResult.tariffs||0===this._comparisonResult.tariffs.length)return H`<p>No comparison data available</p>`;const e=[...this._comparisonResult.tariffs].sort((e,t)=>e.total_cost-t.total_cost),t=this._comparisonResult.best_tariff?.entry_id,i=this._comparisonResult.tariffs[0],o=i?.period_breakdown;return H`
      <!-- Consumption Summary -->
      ${o?H`
        <div class="consumption-summary">
          <div class="summary-title">Period Summary</div>
          <div class="summary-grid">
            <div class="summary-item">
              <div class="summary-period p1">
                <span class="period-icon">🔴</span>
                <span class="period-name">Peak (P1)</span>
              </div>
              <div class="summary-value">${o.p1_consumption.toFixed(1)} kWh</div>
              <div class="summary-percentage">${o.p1_percentage.toFixed(1)}%</div>
            </div>
            <div class="summary-item">
              <div class="summary-period p2">
                <span class="period-icon">🟠</span>
                <span class="period-name">Flat (P2)</span>
              </div>
              <div class="summary-value">${o.p2_consumption.toFixed(1)} kWh</div>
              <div class="summary-percentage">${o.p2_percentage.toFixed(1)}%</div>
            </div>
            <div class="summary-item">
              <div class="summary-period p3">
                <span class="period-icon">🟢</span>
                <span class="period-name">Valley (P3)</span>
              </div>
              <div class="summary-value">${o.p3_consumption.toFixed(1)} kWh</div>
              <div class="summary-percentage">${o.p3_percentage.toFixed(1)}%</div>
            </div>
            <div class="summary-item summary-total">
              <div class="summary-period">
                <span class="period-name"><strong>Total</strong></span>
              </div>
              <div class="summary-value"><strong>${o.total_consumption.toFixed(1)} kWh</strong></div>
            </div>
          </div>
        </div>
      `:""}
      
      <div class="tariff-list">
        ${e.map(e=>H`
          <div class="tariff-item">
            <div class="tariff-header">
              <span class="tariff-name">
                ${e.name}
                ${t===e.entry_id?H`<span class="best-tariff-badge">Best</span>`:""}
              </span>
              <span class="tariff-cost">€${e.total_cost.toFixed(2)}</span>
            </div>
            
            <div class="tariff-breakdown">
              <div class="breakdown-item">
                <span class="breakdown-label">Energy Cost</span>
                <span class="breakdown-value">€${e.energy_cost.toFixed(2)}</span>
              </div>
              <div class="breakdown-item">
                <span class="breakdown-label">Power Cost</span>
                <span class="breakdown-value">€${e.power_cost.toFixed(2)}</span>
              </div>
              <div class="breakdown-item">
                <span class="breakdown-label">Management Fee</span>
                <span class="breakdown-value">€${e.management_fee.toFixed(2)}</span>
              </div>
              <div class="breakdown-item">
                <span class="breakdown-label">Taxes</span>
                <span class="breakdown-value">€${e.taxes.toFixed(2)}</span>
              </div>
            </div>

            ${this._renderPeriodBreakdown(e.period_breakdown,e)}
          </div>
        `)}
      </div>

      ${this._comparisonResult.savings?H`
        <div class="savings-info">
          <strong>Potential Savings:</strong> €${this._comparisonResult.savings.amount.toFixed(2)} 
          (${this._comparisonResult.savings.percentage.toFixed(1)}%) by choosing the best tariff
        </div>
      `:""}
    `}_renderPeriodBreakdown(e,t){const i=Math.max(e.p1_consumption,e.p2_consumption,e.p3_consumption);let o=0,r=0,a=0;if(t.hourly_breakdown&&t.hourly_breakdown.length>0)for(const e of t.hourly_breakdown)"P1"===e.period&&e.consumption>0?o+=e.cost:"P2"===e.period&&e.consumption>0?r+=e.cost:"P3"===e.period&&e.consumption>0&&(a+=e.cost);const s=e.p1_consumption>0?o/e.p1_consumption:0,n=e.p2_consumption>0?r/e.p2_consumption:0,c=e.p3_consumption>0?a/e.p3_consumption:0;return H`
      <div class="period-breakdown">
        <div class="period-breakdown-title">Consumption by Period</div>
        <div class="period-bars">
          <div class="period-bar">
            <div
              class="period-bar-fill p1"
              style="height: ${i>0?e.p1_consumption/i*100:0}%"
            ></div>
            <div class="period-bar-label">
              <strong>P1 Peak</strong><br>
              ${e.p1_consumption.toFixed(2)} kWh<br>
              ${e.p1_percentage.toFixed(1)}%<br>
              ${o>0?H`<span class="cost-per-kwh">€${s.toFixed(3)}/kWh</span>`:""}
            </div>
          </div>
          <div class="period-bar">
            <div
              class="period-bar-fill p2"
              style="height: ${i>0?e.p2_consumption/i*100:0}%"
            ></div>
            <div class="period-bar-label">
              <strong>P2 Flat</strong><br>
              ${e.p2_consumption.toFixed(2)} kWh<br>
              ${e.p2_percentage.toFixed(1)}%<br>
              ${r>0?H`<span class="cost-per-kwh">€${n.toFixed(3)}/kWh</span>`:""}
            </div>
          </div>
          <div class="period-bar">
            <div
              class="period-bar-fill p3"
              style="height: ${i>0?e.p3_consumption/i*100:0}%"
            ></div>
            <div class="period-bar-label">
              <strong>P3 Valley</strong><br>
              ${e.p3_consumption.toFixed(2)} kWh<br>
              ${e.p3_percentage.toFixed(1)}%<br>
              ${a>0?H`<span class="cost-per-kwh">€${c.toFixed(3)}/kWh</span>`:""}
            </div>
          </div>
        </div>
      </div>
    `}static getStubConfig(){return{type:"custom:octopus-consumption-card",source_entry_id:"",view:"consumption",default_period:"week",chart_type:"line",tariff_entry_ids:[],show_cost_on_chart:!1,show_navigation:!0,show_period_distribution:!1,show_moving_average:!1,moving_average_days:7,heat_calendar_period:"month",show_week_comparison:!1,week_comparison_count:2,show_cost_trend:!1,cost_moving_average_days:30,show_tariff_chart:!0}}static getConfigElement(){return document.createElement("octopus-consumption-card-editor")}}function Ie(){return Le}function We(){return ve}function Ve(){return Le.getStubConfig()}if(Le.enabledWarnings=[],Le.SERVICE_TIMEOUT=1e4,Le.SERVICE_DOMAIN="octopus_energy_es",Le.SERVICE_FETCH_CONSUMPTION="fetch_consumption",Le.SERVICE_COMPARE_TARIFFS="compare_tariffs",Le.styles=fe,Fe([he({attribute:!1})],Le.prototype,"hass",void 0),Fe([he({attribute:!1})],Le.prototype,"config",void 0),Fe([pe()],Le.prototype,"_consumptionData",void 0),Fe([pe()],Le.prototype,"_comparisonResult",void 0),Fe([pe()],Le.prototype,"_tariffCosts",void 0),Fe([pe()],Le.prototype,"_loading",void 0),Fe([pe()],Le.prototype,"_error",void 0),Fe([pe()],Le.prototype,"_comparisonError",void 0),Fe([pe()],Le.prototype,"_currentPeriod",void 0),Fe([pe()],Le.prototype,"_currentDate",void 0),Fe([pe()],Le.prototype,"_weekComparisonData",void 0),"undefined"!=typeof window&&(window.getCardElement=Ie,window.getCardConfigElement=We,window.getStubConfig=Ve),"undefined"!=typeof window&&"undefined"!=typeof customElements){try{customElements.get("octopus-consumption-card")||customElements.define("octopus-consumption-card",Le)}catch(e){ye.error("Failed to register octopus-consumption-card: ",e instanceof Error?e.message:String(e))}if(void 0===window.customCards&&(window.customCards=[]),Array.isArray(window.customCards)){window.customCards.some(e=>"custom:octopus-consumption-card"===e.type)||window.customCards.push({type:"custom:octopus-consumption-card",name:"Octopus Energy España Consumption Card",preview:!1,description:"Display consumption data and tariff comparisons for Octopus Energy España"})}window.customCards["octopus-consumption-card"]=Le,window.OctopusConsumptionCard=Le;const e="0.5.11",t=!!customElements.get("octopus-consumption-card");console.groupCollapsed("%c⚡ Octopus Energy España","background: linear-gradient(90deg, #e10090 0%, #c000a0 100%);color: #fff;padding: 4px 8px;border-radius: 4px;font-weight: bold;"),ye.info("Consumption Card",`v${e}`),ye.info(t?"✓ Custom element: ":"✗ Custom element: ","octopus-consumption-card"),ye.success("✓ Added to card picker"),ye.success("✓ Visual editor enabled"),ye.info("ℹ Supported languages: ","en, es, be"),t||ye.error("✗ Registration failed! Element not found in customElements registry"),console.groupEnd()}return e.OctopusConsumptionCard=Le,e.getCardConfigElement=We,e.getCardElement=Ie,e.getStubConfig=Ve,e}({});
