var OctopusConsumptionCard=function(t){"use strict";
/**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),s=new WeakMap;let r=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=s.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&s.set(e,t))}return t}toString(){return this.cssText}};const n=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]);return new r(i,t,o)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,o))(e)})(t):t,{is:c,defineProperty:d,getOwnPropertyDescriptor:l,getOwnPropertyNames:h,getOwnPropertySymbols:p,getPrototypeOf:f}=Object,u=globalThis,_=u.trustedTypes,g=_?_.emptyScript:"",m=u.reactiveElementPolyfillSupport,v=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},$=(t,e)=>!c(t,e),b={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:$};
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let w=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(t,i,e);void 0!==o&&d(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){const{get:o,set:s}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:o,set(e){const r=o?.call(this);s?.call(this,e),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=f(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,e=[...h(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,o)=>{if(i)t.adoptedStyleSheets=o.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of o){const o=document.createElement("style"),s=e.litNonce;void 0!==s&&o.setAttribute("nonce",s),o.textContent=i.cssText,t.appendChild(o)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(void 0!==o&&!0===i.reflect){const s=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(e,i.type);this._$Em=t,null==s?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(t,e){const i=this.constructor,o=i._$Eh.get(t);if(void 0!==o&&this._$Em!==o){const t=i.getPropertyOptions(o),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=o;const r=s.fromAttribute(e,t.type);this[o]=r??this._$Ej?.get(o)??r,this._$Em=null}}requestUpdate(t,e,i,o=!1,s){if(void 0!==t){const r=this.constructor;if(!1===o&&(s=this[t]),i??=r.getPropertyOptions(t),!((i.hasChanged??$)(s,e)||i.useDefault&&i.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:o,wrapped:s},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),!0!==s||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===o&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,o=this[e];!0!==t||this._$AL.has(e)||void 0===o||this.C(e,void 0,i,o)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[v("elementProperties")]=new Map,w[v("finalized")]=new Map,m?.({ReactiveElement:w}),(u.reactiveElementVersions??=[]).push("2.1.2");
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
const x=globalThis,C=t=>t,E=x.trustedTypes,A=E?E.createPolicy("lit-html",{createHTML:t=>t}):void 0,k="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+S,O=`<${P}>`,T=document,D=()=>T.createComment(""),R=t=>null===t||"object"!=typeof t&&"function"!=typeof t,U=Array.isArray,M="[ \t\n\f\r]",I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,N=/>/g,z=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),j=/'/g,V=/"/g,L=/^(?:script|style|textarea|title)$/i,W=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),F=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),q=new WeakMap,J=T.createTreeWalker(T,129);function K(t,e){if(!U(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(e):e}const Z=(t,e)=>{const i=t.length-1,o=[];let s,r=2===e?"<svg>":3===e?"<math>":"",n=I;for(let e=0;e<i;e++){const i=t[e];let a,c,d=-1,l=0;for(;l<i.length&&(n.lastIndex=l,c=n.exec(i),null!==c);)l=n.lastIndex,n===I?"!--"===c[1]?n=H:void 0!==c[1]?n=N:void 0!==c[2]?(L.test(c[2])&&(s=RegExp("</"+c[2],"g")),n=z):void 0!==c[3]&&(n=z):n===z?">"===c[0]?(n=s??I,d=-1):void 0===c[1]?d=-2:(d=n.lastIndex-c[2].length,a=c[1],n=void 0===c[3]?z:'"'===c[3]?V:j):n===V||n===j?n=z:n===H||n===N?n=I:(n=z,s=void 0);const h=n===z&&t[e+1].startsWith("/>")?" ":"";r+=n===I?i+O:d>=0?(o.push(a),i.slice(0,d)+k+i.slice(d)+S+h):i+S+(-2===d?e:h)}return[K(t,r+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),o]};class G{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let s=0,r=0;const n=t.length-1,a=this.parts,[c,d]=Z(t,e);if(this.el=G.createElement(c,i),J.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=J.nextNode())&&a.length<n;){if(1===o.nodeType){if(o.hasAttributes())for(const t of o.getAttributeNames())if(t.endsWith(k)){const e=d[r++],i=o.getAttribute(t).split(S),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:s,name:n[2],strings:i,ctor:"."===n[1]?et:"?"===n[1]?it:"@"===n[1]?ot:tt}),o.removeAttribute(t)}else t.startsWith(S)&&(a.push({type:6,index:s}),o.removeAttribute(t));if(L.test(o.tagName)){const t=o.textContent.split(S),e=t.length-1;if(e>0){o.textContent=E?E.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],D()),J.nextNode(),a.push({type:2,index:++s});o.append(t[e],D())}}}else if(8===o.nodeType)if(o.data===P)a.push({type:2,index:s});else{let t=-1;for(;-1!==(t=o.data.indexOf(S,t+1));)a.push({type:7,index:s}),t+=S.length-1}s++}}static createElement(t,e){const i=T.createElement("template");return i.innerHTML=t,i}}function Q(t,e,i=t,o){if(e===F)return e;let s=void 0!==o?i._$Co?.[o]:i._$Cl;const r=R(e)?void 0:e._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),void 0===r?s=void 0:(s=new r(t),s._$AT(t,i,o)),void 0!==o?(i._$Co??=[])[o]=s:i._$Cl=s),void 0!==s&&(e=Q(t,s._$AS(t,e.values),s,o)),e}class X{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,o=(t?.creationScope??T).importNode(e,!0);J.currentNode=o;let s=J.nextNode(),r=0,n=0,a=i[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new Y(s,s.nextSibling,this,t):1===a.type?e=new a.ctor(s,a.name,a.strings,this,t):6===a.type&&(e=new st(s,this,t)),this._$AV.push(e),a=i[++n]}r!==a?.index&&(s=J.nextNode(),r++)}return J.currentNode=T,o}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Y{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,o){this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Q(this,t,e),R(t)?t===B||null==t||""===t?(this._$AH!==B&&this._$AR(),this._$AH=B):t!==this._$AH&&t!==F&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>U(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==B&&R(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,o="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=G.createElement(K(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(e);else{const t=new X(o,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new G(t)),e}k(t){U(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const s of t)o===e.length?e.push(i=new Y(this.O(D()),this.O(D()),this,this.options)):i=e[o],i._$AI(s),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=C(t).nextSibling;C(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,o,s){this.type=1,this._$AH=B,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=B}_$AI(t,e=this,i,o){const s=this.strings;let r=!1;if(void 0===s)t=Q(this,t,e,0),r=!R(t)||t!==this._$AH&&t!==F,r&&(this._$AH=t);else{const o=t;let n,a;for(t=s[0],n=0;n<s.length-1;n++)a=Q(this,o[i+n],e,n),a===F&&(a=this._$AH[n]),r||=!R(a)||a!==this._$AH[n],a===B?t=B:t!==B&&(t+=(a??"")+s[n+1]),this._$AH[n]=a}r&&!o&&this.j(t)}j(t){t===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===B?void 0:t}}class it extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==B)}}class ot extends tt{constructor(t,e,i,o,s){super(t,e,i,o,s),this.type=5}_$AI(t,e=this){if((t=Q(this,t,e,0)??B)===F)return;const i=this._$AH,o=t===B&&i!==B||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==B&&(i===B||o);o&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}}const rt=x.litHtmlPolyfillSupport;rt?.(G,Y),(x.litHtmlVersions??=[]).push("3.3.2");const nt=globalThis;
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */class at extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const o=i?.renderBefore??e;let s=o._$litPart$;if(void 0===s){const t=i?.renderBefore??null;o._$litPart$=s=new Y(e.insertBefore(D(),t),t,void 0,i??{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}}at._$litElement$=!0,at.finalized=!0,nt.litElementHydrateSupport?.({LitElement:at});const ct=nt.litElementPolyfillSupport;ct?.({LitElement:at}),(nt.litElementVersions??=[]).push("4.2.2");
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
const dt=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},lt={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:$},ht=(t=lt,e,i)=>{const{kind:o,metadata:s}=i;let r=globalThis.litPropertyMetadata.get(s);if(void 0===r&&globalThis.litPropertyMetadata.set(s,r=new Map),"setter"===o&&((t=Object.create(t)).wrapped=!0),r.set(i.name,t),"accessor"===o){const{name:o}=i;return{set(i){const s=e.get.call(this);e.set.call(this,i),this.requestUpdate(o,s,t,!0,i)},init(e){return void 0!==e&&this.C(o,void 0,t,e),e}}}if("setter"===o){const{name:o}=i;return function(i){const s=this[o];e.call(this,i),this.requestUpdate(o,s,t,!0,i)}}throw Error("Unsupported decorator location: "+o)};
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */function pt(t){return(e,i)=>"object"==typeof i?ht(t,e,i):((t,e,i)=>{const o=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),o?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */function ft(t){return pt({...t,state:!0,attribute:!1})}var ut=function(t,e,i,o){var s,r=arguments.length,n=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let _t=class extends at{constructor(){super(...arguments),this._config={type:"custom:octopus-consumption-card",entity:"",title:"Consumption",show_comparison:!0,default_period:"week",chart_type:"line",show_tariff_comparison:!1,tariff_entry_ids:[],show_cost_on_chart:!1,show_navigation:!0},this._tariffEntryIds=[],this._newTariffEntryId=""}setConfig(t){this._config={...t},this._tariffEntryIds=t.tariff_entry_ids?[...t.tariff_entry_ids]:[]}firstUpdated(){this.config&&this.setConfig(this.config)}updated(t){t.has("config")&&this.config&&this.setConfig(this.config)}_valueChanged(t){const e=t.target,i=e.value,o=e.configValue;if(this._config[o]===i)return;const s={...this._config,[o]:i};this._config=s,this._fireConfigChanged()}_switchChanged(t){const e=t.target,i=e.checked,o=e.configValue;if(this._config[o]===i)return;const s={...this._config,[o]:i};"show_tariff_comparison"!==o||i||(s.show_cost_on_chart=!1,s.selected_tariff_for_cost=void 0),"show_cost_on_chart"!==o||i||(s.selected_tariff_for_cost=void 0),this._config=s,this._fireConfigChanged()}_fireConfigChanged(){const t=new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0});this.dispatchEvent(t)}_addTariffEntry(){if(!this._newTariffEntryId.trim())return;const t=[...this._tariffEntryIds,this._newTariffEntryId.trim()];this._tariffEntryIds=t,this._config={...this._config,tariff_entry_ids:t},this._newTariffEntryId="",this._fireConfigChanged()}_removeTariffEntry(t){const e=this._tariffEntryIds.filter((e,i)=>i!==t);this._tariffEntryIds=e,this._config={...this._config,tariff_entry_ids:e},this._fireConfigChanged()}_validateEntity(t){return t?t.startsWith("sensor.octopus_energy_es_")?null:"Entity must be an Octopus Energy España sensor (sensor.octopus_energy_es_*)":"Entity is required"}render(){if(!this.hass)return W`<div class="card-config">Loading...</div>`;const t=this._validateEntity(this._config.entity||"");return W`
      <div class="card-config">
        <!-- Basic Settings -->
        <div class="section">
          <div class="section-title">Basic Settings</div>
          
          <div class="form-group">
            <label>Entity *</label>
            <ha-entity-picker
              .hass=${this.hass}
              .value=${this._config.entity||""}
              .configValue=${"entity"}
              .includeDomains=${["sensor"]}
              .entityFilter=${t=>t.entity_id.startsWith("sensor.octopus_energy_es_")}
              @value-changed=${this._valueChanged}
              allow-custom-entity
            ></ha-entity-picker>
            ${t?W`<div class="error">${t}</div>`:""}
          </div>

          <div class="form-group">
            <label>Title</label>
            <ha-textfield
              .value=${this._config.title||""}
              .configValue=${"title"}
              @input=${this._valueChanged}
              placeholder="Consumption"
            ></ha-textfield>
          </div>
        </div>

        <!-- Display Options -->
        <div class="section">
          <div class="section-title">Display Options</div>
          
          <div class="switch-row">
            <label>Show Comparison</label>
            <ha-switch
              .checked=${!1!==this._config.show_comparison}
              .configValue=${"show_comparison"}
              @change=${this._switchChanged}
            ></ha-switch>
          </div>

          <div class="form-group">
            <label>Default Period</label>
            <ha-select
              .value=${this._config.default_period||"week"}
              .configValue=${"default_period"}
              @selected=${this._valueChanged}
            >
              <mwc-list-item value="day">Day</mwc-list-item>
              <mwc-list-item value="week">Week</mwc-list-item>
              <mwc-list-item value="month">Month</mwc-list-item>
            </ha-select>
          </div>

          <div class="form-group">
            <label>Chart Type</label>
            <ha-select
              .value=${this._config.chart_type||"line"}
              .configValue=${"chart_type"}
              @selected=${this._valueChanged}
            >
              <mwc-list-item value="line">Line</mwc-list-item>
              <mwc-list-item value="bar">Bar</mwc-list-item>
            </ha-select>
          </div>

          <div class="switch-row">
            <label>Show Navigation</label>
            <ha-switch
              .checked=${!1!==this._config.show_navigation}
              .configValue=${"show_navigation"}
              @change=${this._switchChanged}
            ></ha-switch>
          </div>
        </div>

        <!-- Tariff Comparison -->
        <div class="section">
          <div class="section-title">Tariff Comparison</div>
          
          <div class="switch-row">
            <label>Show Tariff Comparison</label>
            <ha-switch
              .checked=${!0===this._config.show_tariff_comparison}
              .configValue=${"show_tariff_comparison"}
              @change=${this._switchChanged}
            ></ha-switch>
          </div>

          ${this._config.show_tariff_comparison?W`
            <div class="form-group">
              <label>Tariff Entry IDs</label>
              <div class="tariff-entry-list">
                ${this._tariffEntryIds.map((t,e)=>W`
                  <div class="tariff-entry-item">
                    <ha-textfield
                      .value=${t}
                      .configValue=${`tariff_entry_ids.${e}`}
                      @input=${t=>{const i=t.target,o=[...this._tariffEntryIds];o[e]=i.value,this._tariffEntryIds=o,this._config={...this._config,tariff_entry_ids:o},this._fireConfigChanged()}}
                    ></ha-textfield>
                    <ha-icon-button
                      .label=${"Remove"}
                      @click=${()=>this._removeTariffEntry(e)}
                    >
                      <ha-icon icon="mdi:delete"></ha-icon>
                    </ha-icon-button>
                  </div>
                `)}
              </div>
              <div class="add-tariff-entry">
                <ha-textfield
                  .value=${this._newTariffEntryId}
                  .label=${"New Tariff Entry ID"}
                  @input=${t=>{this._newTariffEntryId=t.target.value}}
                  @keydown=${t=>{"Enter"===t.key&&this._addTariffEntry()}}
                ></ha-textfield>
                <ha-icon-button
                  .label=${"Add"}
                  @click=${this._addTariffEntry}
                >
                  <ha-icon icon="mdi:plus"></ha-icon>
                </ha-icon-button>
              </div>
            </div>
          `:""}
        </div>

        <!-- Cost Display -->
        ${this._config.show_tariff_comparison?W`
          <div class="section">
            <div class="section-title">Cost Display</div>
            
            <div class="switch-row">
              <label>Show Cost on Chart</label>
              <ha-switch
                .checked=${!0===this._config.show_cost_on_chart}
                .configValue=${"show_cost_on_chart"}
                @change=${this._switchChanged}
              ></ha-switch>
            </div>

            ${this._config.show_cost_on_chart?W`
              <div class="form-group">
                <label>Selected Tariff for Cost</label>
                <ha-textfield
                  .value=${this._config.selected_tariff_for_cost||""}
                  .configValue=${"selected_tariff_for_cost"}
                  @input=${this._valueChanged}
                  placeholder="tariff_entry_id"
                ></ha-textfield>
              </div>
            `:""}
          </div>
        `:""}
      </div>
    `}};_t.styles=n`
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

    .error {
      color: var(--error-color);
      font-size: 12px;
      margin-top: 4px;
    }
  `,ut([pt({attribute:!1})],_t.prototype,"hass",void 0),ut([pt({attribute:!1})],_t.prototype,"config",void 0),ut([ft()],_t.prototype,"_config",void 0),ut([ft()],_t.prototype,"_tariffEntryIds",void 0),ut([ft()],_t.prototype,"_newTariffEntryId",void 0),_t=ut([dt("octopus-consumption-card-editor")],_t),"undefined"!=typeof window&&"undefined"!=typeof customElements&&(customElements.get("octopus-consumption-card-editor")||customElements.define("octopus-consumption-card-editor",_t));var gt=function(t,e,i,o){var s,r=arguments.length,n=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};return t.OctopusConsumptionCard=class extends at{constructor(){super(...arguments),this._consumptionData=[],this._comparisonResult=null,this._loading=!1,this._error=null,this._comparisonError=null,this._currentPeriod="week",this._currentDate=new Date,this.SERVICE_TIMEOUT=1e4}connectedCallback(){super.connectedCallback(),this._validateConfig(),this._currentPeriod=this.config.default_period||"week",this._loadData()}updated(t){super.updated(t),t.has("config")&&(this._validateConfig(),this._loadData())}_validateConfig(){return this.config?this.config.entity?this.config.entity.startsWith("sensor.octopus_energy_es_")?(!this.config.show_tariff_comparison||this.config.tariff_entry_ids&&0!==this.config.tariff_entry_ids.length||console.warn("show_tariff_comparison is enabled but no tariff_entry_ids provided. Comparison will be disabled."),void(this.config.show_cost_on_chart&&!this.config.selected_tariff_for_cost&&console.warn("show_cost_on_chart is enabled but selected_tariff_for_cost is not set. Cost display will be disabled."))):(this._error=`Invalid entity format. Entity must be an Octopus Energy España sensor (e.g., sensor.octopus_energy_es_*). Got: ${this.config.entity}`,void(this._loading=!1)):(this._error="Entity is required. Please specify a consumption sensor entity.",void(this._loading=!1)):(this._error="Card configuration is required",void(this._loading=!1))}_createTimeoutPromise(t){return new Promise((e,i)=>{setTimeout(()=>i(new Error("Request timeout. The service call took too long to respond.")),t)})}async _callServiceWithTimeout(t,e,i){const o=this.hass.callService(t,e,i),s=this._createTimeoutPromise(this.SERVICE_TIMEOUT);return Promise.race([o,s])}async _loadData(){if(this.config.entity&&this.hass){this._loading=!0,this._error=null,this._comparisonError=null;try{const t=this.hass.states[this.config.entity];if(!t)throw new Error(`Entity ${this.config.entity} not found`);let e;if(t.attributes&&t.attributes.entry_id)e=t.attributes.entry_id;else{const t=this.config.entity.split("_"),i=t.indexOf("octopus"),o=t.indexOf("energy");if(i>=0&&o===i+1){const i=o+2,s=t.length-2;i<s&&(e=t.slice(i,s).join("_"))}}if(!e)throw new Error(`Could not extract entry_id from entity ${this.config.entity}. Please check entity ID format.`);const{startDate:i,endDate:o}=this._getDateRange(),s=await this._callServiceWithTimeout("octopus_energy_es","fetch_consumption",{entry_id:e,start_date:i.toISOString().split("T")[0],end_date:o.toISOString().split("T")[0],granularity:"day"===this._currentPeriod||"week"===this._currentPeriod?"hourly":"daily"});if(!s.success)throw new Error(s.error||"Failed to fetch consumption data");if(this._consumptionData=s.consumption_data||[],this._comparisonError=null,this.config.show_tariff_comparison&&this.config.tariff_entry_ids&&this.config.tariff_entry_ids.length>0)try{const t="day"===this._currentPeriod?"daily":"week"===this._currentPeriod?"weekly":"monthly",s=await this._callServiceWithTimeout("octopus_energy_es","compare_tariffs",{tariff_entry_ids:this.config.tariff_entry_ids,source_entry_id:e,period:t,start_date:i.toISOString().split("T")[0],end_date:o.toISOString().split("T")[0]});if(s.success&&s.result)this._comparisonResult=s.result;else{const t=s.error||"Failed to compare tariffs";this._comparisonError=t,console.warn("Tariff comparison failed:",t)}}catch(t){const e=t instanceof Error?t.message:String(t);this._comparisonError=`Tariff comparison error: ${e}`,console.warn("Tariff comparison error:",t)}}catch(t){this._error=t instanceof Error?t.message:String(t),console.error("Error loading data:",t)}finally{this._loading=!1}}}_getDateRange(){const t=new Date(this._currentDate);t.setHours(23,59,59,999);const e=new Date(t);return"day"===this._currentPeriod?e.setHours(0,0,0,0):"week"===this._currentPeriod?(e.setDate(e.getDate()-6),e.setHours(0,0,0,0)):"month"===this._currentPeriod&&(e.setDate(e.getDate()-29),e.setHours(0,0,0,0)),{startDate:e,endDate:t}}_navigatePeriod(t){const e="prev"===t?-1:1;"day"===this._currentPeriod?this._currentDate.setDate(this._currentDate.getDate()+e):"week"===this._currentPeriod?this._currentDate.setDate(this._currentDate.getDate()+7*e):"month"===this._currentPeriod&&this._currentDate.setMonth(this._currentDate.getMonth()+e),this._currentDate=new Date(this._currentDate),this._loadData()}_setPeriod(t){this._currentPeriod=t,this._loadData()}render(){return this._loading?W`
        <div class="loading">
          <ha-circular-progress indeterminate></ha-circular-progress>
          <p>Loading consumption data...</p>
        </div>
      `:this._error?W`
        <div class="error-message">
          <ha-icon icon="mdi:alert-circle" class="error-icon"></ha-icon>
          <div class="error-title">Unable to Load Data</div>
          <div class="error-details">${this._error}</div>
          <button class="retry-button" @click=${this._loadData}>
            Retry
          </button>
        </div>
      `:W`
      <div class="card-header">
        <h2 class="card-title">${this.config.title||"Consumption"}</h2>
      </div>

      ${!1!==this.config.show_navigation?W`
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

      ${this.config.show_tariff_comparison?W`
        <div class="comparison-section">
          <h3 class="comparison-title">Tariff Comparison</h3>
          ${this._comparisonError?W`
            <div class="comparison-error">
              <ha-icon icon="mdi:alert"></ha-icon>
              ${this._comparisonError}
            </div>
          `:this._comparisonResult?this._renderComparison():W`
            <div class="loading">Loading tariff comparison...</div>
          `}
        </div>
      `:""}
    `}_renderChart(){return 0===this._consumptionData.length?W`<p>No consumption data available</p>`:W`
      <div>
        <p>Chart will be rendered here (${this._consumptionData.length} data points)</p>
        <p>Total consumption: ${this._consumptionData.reduce((t,e)=>t+(e.consumption||e.value||0),0).toFixed(2)} kWh</p>
      </div>
    `}_renderComparison(){if(!this._comparisonResult||!this._comparisonResult.tariffs||0===this._comparisonResult.tariffs.length)return W`<p>No comparison data available</p>`;const t=[...this._comparisonResult.tariffs].sort((t,e)=>t.total_cost-e.total_cost),e=this._comparisonResult.best_tariff?.entry_id;return W`
      <div class="tariff-list">
        ${t.map(t=>W`
          <div class="tariff-item">
            <div class="tariff-header">
              <span class="tariff-name">
                ${t.name}
                ${e===t.entry_id?W`<span class="best-tariff-badge">Best</span>`:""}
              </span>
              <span class="tariff-cost">€${t.total_cost.toFixed(2)}</span>
            </div>
            
            <div class="tariff-breakdown">
              <div class="breakdown-item">
                <span class="breakdown-label">Energy Cost</span>
                <span class="breakdown-value">€${t.energy_cost.toFixed(2)}</span>
              </div>
              <div class="breakdown-item">
                <span class="breakdown-label">Power Cost</span>
                <span class="breakdown-value">€${t.power_cost.toFixed(2)}</span>
              </div>
              <div class="breakdown-item">
                <span class="breakdown-label">Management Fee</span>
                <span class="breakdown-value">€${t.management_fee.toFixed(2)}</span>
              </div>
              <div class="breakdown-item">
                <span class="breakdown-label">Taxes</span>
                <span class="breakdown-value">€${t.taxes.toFixed(2)}</span>
              </div>
            </div>

            ${this._renderPeriodBreakdown(t.period_breakdown)}
          </div>
        `)}
      </div>

      ${this._comparisonResult.savings?W`
        <div class="savings-info">
          <strong>Potential Savings:</strong> €${this._comparisonResult.savings.amount.toFixed(2)} 
          (${this._comparisonResult.savings.percentage.toFixed(1)}%) by choosing the best tariff
        </div>
      `:""}
    `}_renderPeriodBreakdown(t){const e=Math.max(t.p1_consumption,t.p2_consumption,t.p3_consumption);return W`
      <div class="period-breakdown">
        <div class="period-breakdown-title">Consumption by Period</div>
        <div class="period-bars">
          <div class="period-bar">
            <div
              class="period-bar-fill p1"
              style="height: ${e>0?t.p1_consumption/e*100:0}%"
            ></div>
            <div class="period-bar-label">
              P1: ${t.p1_consumption.toFixed(2)} kWh<br>
              ${t.p1_percentage.toFixed(1)}%
            </div>
          </div>
          <div class="period-bar">
            <div
              class="period-bar-fill p2"
              style="height: ${e>0?t.p2_consumption/e*100:0}%"
            ></div>
            <div class="period-bar-label">
              P2: ${t.p2_consumption.toFixed(2)} kWh<br>
              ${t.p2_percentage.toFixed(1)}%
            </div>
          </div>
          <div class="period-bar">
            <div
              class="period-bar-fill p3"
              style="height: ${e>0?t.p3_consumption/e*100:0}%"
            ></div>
            <div class="period-bar-label">
              P3: ${t.p3_consumption.toFixed(2)} kWh<br>
              ${t.p3_percentage.toFixed(1)}%
            </div>
          </div>
        </div>
      </div>
    `}static getStubConfig(){return{type:"custom:octopus-consumption-card",entity:"",title:"Consumption",show_comparison:!0,default_period:"week",chart_type:"line",show_tariff_comparison:!1,tariff_entry_ids:[],show_cost_on_chart:!1,show_navigation:!0}}static getConfigElement(){return document.createElement("octopus-consumption-card-editor")}},t.OctopusConsumptionCard.styles=n`
    :host {
      display: block;
      padding: 16px;
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
    }

    .card-title {
      font-size: 24px;
      font-weight: 500;
      margin: 0;
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
      margin-bottom: 24px;
      min-height: 300px;
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
      border: 2px solid var(--error-color);
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
  `,gt([pt({attribute:!1})],t.OctopusConsumptionCard.prototype,"hass",void 0),gt([pt({attribute:!1})],t.OctopusConsumptionCard.prototype,"config",void 0),gt([ft()],t.OctopusConsumptionCard.prototype,"_consumptionData",void 0),gt([ft()],t.OctopusConsumptionCard.prototype,"_comparisonResult",void 0),gt([ft()],t.OctopusConsumptionCard.prototype,"_loading",void 0),gt([ft()],t.OctopusConsumptionCard.prototype,"_error",void 0),gt([ft()],t.OctopusConsumptionCard.prototype,"_comparisonError",void 0),gt([ft()],t.OctopusConsumptionCard.prototype,"_currentPeriod",void 0),gt([ft()],t.OctopusConsumptionCard.prototype,"_currentDate",void 0),t.OctopusConsumptionCard=gt([dt("octopus-consumption-card")],t.OctopusConsumptionCard),"undefined"!=typeof window&&"undefined"!=typeof customElements&&(customElements.get("octopus-consumption-card")||customElements.define("octopus-consumption-card",t.OctopusConsumptionCard),void 0===window.customCards&&(window.customCards={}),window.customCards["octopus-consumption-card"]=t.OctopusConsumptionCard,window.OctopusConsumptionCard=t.OctopusConsumptionCard),t}({});
