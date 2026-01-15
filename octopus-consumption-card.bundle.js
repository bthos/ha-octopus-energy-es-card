var OctopusConsumptionCard=function(t){"use strict";
/**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const e=globalThis,o=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),r=new WeakMap;let s=class{constructor(t,e,o){if(this._$cssResult$=!0,o!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(o&&void 0===t){const o=void 0!==e&&1===e.length;o&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&r.set(e,t))}return t}toString(){return this.cssText}};const n=(t,...e)=>{const o=1===t.length?t[0]:e.reduce((e,o,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[i+1],t[0]);return new s(o,t,i)},a=o?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return(t=>new s("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:c,defineProperty:d,getOwnPropertyDescriptor:l,getOwnPropertyNames:p,getOwnPropertySymbols:h,getPrototypeOf:_}=Object,f=globalThis,u=f.trustedTypes,g=u?u.emptyScript:"",m=f.reactiveElementPolyfillSupport,y=(t,e)=>t,b={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(t){o=null}}return o}},v=(t,e)=>!c(t,e),w={attribute:!0,type:String,converter:b,reflect:!1,useDefault:!1,hasChanged:v};
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;let $=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=w){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(t,o,e);void 0!==i&&d(this.prototype,t,i)}}static getPropertyDescriptor(t,e,o){const{get:i,set:r}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const s=i?.call(this);r?.call(this,e),this.requestUpdate(t,s,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const t=_(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const t=this.properties,e=[...p(t),...h(t)];for(const o of e)this.createProperty(o,t[o])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,o]of e)this.elementProperties.set(t,o)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const o=this._$Eu(t,e);void 0!==o&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const o of e.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{if(o)t.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const o of i){const i=document.createElement("style"),r=e.litNonce;void 0!==r&&i.setAttribute("nonce",r),i.textContent=o.cssText,t.appendChild(i)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$ET(t,e){const o=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,o);if(void 0!==i&&!0===o.reflect){const r=(void 0!==o.converter?.toAttribute?o.converter:b).toAttribute(e,o.type);this._$Em=t,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){const o=this.constructor,i=o._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=o.getPropertyOptions(i),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:b;this._$Em=i;const s=r.fromAttribute(e,t.type);this[i]=s??this._$Ej?.get(i)??s,this._$Em=null}}requestUpdate(t,e,o,i=!1,r){if(void 0!==t){const s=this.constructor;if(!1===i&&(r=this[t]),o??=s.getPropertyOptions(t),!((o.hasChanged??v)(r,e)||o.useDefault&&o.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,o))))return;this.C(t,e,o)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:o,reflect:i,wrapped:r},s){o&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??e??this[t]),!0!==r||void 0!==s)||(this._$AL.has(t)||(this.hasUpdated||o||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,o]of t){const{wrapped:t}=o,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,o,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[y("elementProperties")]=new Map,$[y("finalized")]=new Map,m?.({ReactiveElement:$}),(f.reactiveElementVersions??=[]).push("2.1.2");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const x=globalThis,E=t=>t,S=x.trustedTypes,C=S?S.createPolicy("lit-html",{createHTML:t=>t}):void 0,A="$lit$",P=`lit$${Math.random().toFixed(9).slice(2)}$`,k="?"+P,O=`<${k}>`,T=document,D=()=>T.createComment(""),z=t=>null===t||"object"!=typeof t&&"function"!=typeof t,R=Array.isArray,M="[ \t\n\f\r]",U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,H=/>/g,I=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),j=/'/g,L=/"/g,W=/^(?:script|style|textarea|title)$/i,F=(t=>(e,...o)=>({_$litType$:t,strings:e,values:o}))(1),q=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),V=new WeakMap,J=T.createTreeWalker(T,129);function G(t,e){if(!R(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(e):e}const K=(t,e)=>{const o=t.length-1,i=[];let r,s=2===e?"<svg>":3===e?"<math>":"",n=U;for(let e=0;e<o;e++){const o=t[e];let a,c,d=-1,l=0;for(;l<o.length&&(n.lastIndex=l,c=n.exec(o),null!==c);)l=n.lastIndex,n===U?"!--"===c[1]?n=N:void 0!==c[1]?n=H:void 0!==c[2]?(W.test(c[2])&&(r=RegExp("</"+c[2],"g")),n=I):void 0!==c[3]&&(n=I):n===I?">"===c[0]?(n=r??U,d=-1):void 0===c[1]?d=-2:(d=n.lastIndex-c[2].length,a=c[1],n=void 0===c[3]?I:'"'===c[3]?L:j):n===L||n===j?n=I:n===N||n===H?n=U:(n=I,r=void 0);const p=n===I&&t[e+1].startsWith("/>")?" ":"";s+=n===U?o+O:d>=0?(i.push(a),o.slice(0,d)+A+o.slice(d)+P+p):o+P+(-2===d?e:p)}return[G(t,s+(t[o]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class Z{constructor({strings:t,_$litType$:e},o){let i;this.parts=[];let r=0,s=0;const n=t.length-1,a=this.parts,[c,d]=K(t,e);if(this.el=Z.createElement(c,o),J.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=J.nextNode())&&a.length<n;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(A)){const e=d[s++],o=i.getAttribute(t).split(P),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:n[2],strings:o,ctor:"."===n[1]?et:"?"===n[1]?ot:"@"===n[1]?it:tt}),i.removeAttribute(t)}else t.startsWith(P)&&(a.push({type:6,index:r}),i.removeAttribute(t));if(W.test(i.tagName)){const t=i.textContent.split(P),e=t.length-1;if(e>0){i.textContent=S?S.emptyScript:"";for(let o=0;o<e;o++)i.append(t[o],D()),J.nextNode(),a.push({type:2,index:++r});i.append(t[e],D())}}}else if(8===i.nodeType)if(i.data===k)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(P,t+1));)a.push({type:7,index:r}),t+=P.length-1}r++}}static createElement(t,e){const o=T.createElement("template");return o.innerHTML=t,o}}function Y(t,e,o=t,i){if(e===q)return e;let r=void 0!==i?o._$Co?.[i]:o._$Cl;const s=z(e)?void 0:e._$litDirective$;return r?.constructor!==s&&(r?._$AO?.(!1),void 0===s?r=void 0:(r=new s(t),r._$AT(t,o,i)),void 0!==i?(o._$Co??=[])[i]=r:o._$Cl=r),void 0!==r&&(e=Y(t,r._$AS(t,e.values),r,i)),e}class Q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:o}=this._$AD,i=(t?.creationScope??T).importNode(e,!0);J.currentNode=i;let r=J.nextNode(),s=0,n=0,a=o[0];for(;void 0!==a;){if(s===a.index){let e;2===a.type?e=new X(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new rt(r,this,t)),this._$AV.push(e),a=o[++n]}s!==a?.index&&(r=J.nextNode(),s++)}return J.currentNode=T,i}p(t){let e=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,o,i){this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Y(this,t,e),z(t)?t===B||null==t||""===t?(this._$AH!==B&&this._$AR(),this._$AH=B):t!==this._$AH&&t!==q&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>R(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==B&&z(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:o}=t,i="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=Z.createElement(G(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new Q(i,this),o=t.u(this.options);t.p(e),this.T(o),this._$AH=t}}_$AC(t){let e=V.get(t.strings);return void 0===e&&V.set(t.strings,e=new Z(t)),e}k(t){R(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,i=0;for(const r of t)i===e.length?e.push(o=new X(this.O(D()),this.O(D()),this,this.options)):o=e[i],o._$AI(r),i++;i<e.length&&(this._$AR(o&&o._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=E(t).nextSibling;E(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,o,i,r){this.type=1,this._$AH=B,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=B}_$AI(t,e=this,o,i){const r=this.strings;let s=!1;if(void 0===r)t=Y(this,t,e,0),s=!z(t)||t!==this._$AH&&t!==q,s&&(this._$AH=t);else{const i=t;let n,a;for(t=r[0],n=0;n<r.length-1;n++)a=Y(this,i[o+n],e,n),a===q&&(a=this._$AH[n]),s||=!z(a)||a!==this._$AH[n],a===B?t=B:t!==B&&(t+=(a??"")+r[n+1]),this._$AH[n]=a}s&&!i&&this.j(t)}j(t){t===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===B?void 0:t}}class ot extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==B)}}class it extends tt{constructor(t,e,o,i,r){super(t,e,o,i,r),this.type=5}_$AI(t,e=this){if((t=Y(this,t,e,0)??B)===q)return;const o=this._$AH,i=t===B&&o!==B||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,r=t!==B&&(o===B||i);i&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class rt{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){Y(this,t)}}const st=x.litHtmlPolyfillSupport;st?.(Z,X),(x.litHtmlVersions??=[]).push("3.3.2");const nt=globalThis;
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */class at extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,o)=>{const i=o?.renderBefore??e;let r=i._$litPart$;if(void 0===r){const t=o?.renderBefore??null;i._$litPart$=r=new X(e.insertBefore(D(),t),t,void 0,o??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}}at._$litElement$=!0,at.finalized=!0,nt.litElementHydrateSupport?.({LitElement:at});const ct=nt.litElementPolyfillSupport;ct?.({LitElement:at}),(nt.litElementVersions??=[]).push("4.2.2");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const dt={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:v},lt=(t=dt,e,o)=>{const{kind:i,metadata:r}=o;let s=globalThis.litPropertyMetadata.get(r);if(void 0===s&&globalThis.litPropertyMetadata.set(r,s=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),s.set(o.name,t),"accessor"===i){const{name:i}=o;return{set(o){const r=e.get.call(this);e.set.call(this,o),this.requestUpdate(i,r,t,!0,o)},init(e){return void 0!==e&&this.C(i,void 0,t,e),e}}}if("setter"===i){const{name:i}=o;return function(o){const r=this[i];e.call(this,o),this.requestUpdate(i,r,t,!0,o)}}throw Error("Unsupported decorator location: "+i)};function pt(t){return(e,o)=>"object"==typeof o?lt(t,e,o):((t,e,o)=>{const i=e.hasOwnProperty(o);return e.constructor.createProperty(o,t),i?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function ht(t){return pt({...t,state:!0,attribute:!1})}const _t={en:{"editor.basic_settings":"Basic Settings","editor.source_entry_id_label":"Primary Tariff","editor.source_entry_id_helper":"Select the Octopus Energy tariff to display consumption data for","editor.entity_label":"Entity","editor.entity_helper":"Select the Octopus Energy España consumption sensor (deprecated)","editor.title_label":"Title","editor.title_helper":"Custom title for the card","editor.display_options":"Display Options","editor.show_comparison_label":"Show Comparison","editor.show_comparison_helper":"Compare current period with previous period","editor.default_period_label":"Default Period","editor.default_period_helper":"Initial time period to display","editor.chart_type_label":"Chart Type","editor.chart_type_helper":"Type of chart to display","editor.show_navigation_label":"Show Navigation","editor.show_navigation_helper":"Show period navigation buttons","editor.tariff_comparison":"Tariff Comparison","editor.show_tariff_comparison_label":"Show Tariff Comparison","editor.show_tariff_comparison_helper":"Compare consumption costs across different tariffs","editor.tariff_entry_ids_label":"Comparison Tariffs","editor.tariff_entry_ids_helper":"Optional: Select additional tariffs to compare costs","editor.cost_display":"Cost Display","editor.show_cost_on_chart_label":"Show Cost on Chart","editor.show_cost_on_chart_helper":"Display cost information on the chart","editor.selected_tariff_for_cost_label":"Selected Tariff for Cost","editor.selected_tariff_for_cost_helper":"Tariff entry ID to use for cost calculation","editor.consumption_sensor_label":"Consumption Sensor Override","editor.consumption_sensor_helper":"Optional: Manually specify a consumption sensor instead of using integration data","editor.migration_warning":"Configuration migration required. Please edit the card and select your tariff.","editor.select_tariff":"Select a tariff to get started","editor.chart_type_line":"Line","editor.chart_type_bar":"Bar","editor.period_day":"Day","editor.period_week":"Week","editor.period_month":"Month","editor.entity_required":"Entity is required","editor.entity_invalid":"Entity must be an Octopus Energy España sensor (sensor.octopus_energy_es_*)"},es:{"editor.basic_settings":"Configuración Básica","editor.source_entry_id_label":"Tarifa Principal","editor.source_entry_id_helper":"Selecciona la tarifa de Octopus Energy para mostrar datos de consumo","editor.entity_label":"Entidad","editor.entity_helper":"Seleccione el sensor de consumo de Octopus Energy España (obsoleto)","editor.title_label":"Título","editor.title_helper":"Título personalizado para la tarjeta","editor.display_options":"Opciones de Visualización","editor.show_comparison_label":"Mostrar Comparación","editor.show_comparison_helper":"Comparar período actual con período anterior","editor.default_period_label":"Período Predeterminado","editor.default_period_helper":"Período de tiempo inicial a mostrar","editor.chart_type_label":"Tipo de Gráfico","editor.chart_type_helper":"Tipo de gráfico a mostrar","editor.show_navigation_label":"Mostrar Navegación","editor.show_navigation_helper":"Mostrar botones de navegación de período","editor.tariff_comparison":"Comparación de Tarifas","editor.show_tariff_comparison_label":"Mostrar Comparación de Tarifas","editor.show_tariff_comparison_helper":"Comparar costes de consumo entre diferentes tarifas","editor.tariff_entry_ids_label":"Tarifas de Comparación","editor.tariff_entry_ids_helper":"Opcional: Selecciona tarifas adicionales para comparar costes","editor.cost_display":"Visualización de Costes","editor.show_cost_on_chart_label":"Mostrar Coste en Gráfico","editor.show_cost_on_chart_helper":"Mostrar información de costes en el gráfico","editor.selected_tariff_for_cost_label":"Tarifa Seleccionada para Coste","editor.selected_tariff_for_cost_helper":"ID de entrada de tarifa a usar para cálculo de costes","editor.consumption_sensor_label":"Sensor de Consumo Manual","editor.consumption_sensor_helper":"Opcional: Especifica manualmente un sensor de consumo en lugar de usar datos de integración","editor.migration_warning":"Se requiere migración de configuración. Por favor, edita la tarjeta y selecciona tu tarifa.","editor.select_tariff":"Selecciona una tarifa para comenzar","editor.chart_type_line":"Línea","editor.chart_type_bar":"Barras","editor.period_day":"Día","editor.period_week":"Semana","editor.period_month":"Mes","editor.entity_required":"La entidad es requerida","editor.entity_invalid":"La entidad debe ser un sensor de Octopus Energy España (sensor.octopus_energy_es_*)"},be:{"editor.basic_settings":"Асноўныя налады","editor.source_entry_id_label":"Асноўны тарыф","editor.source_entry_id_helper":"Выберыце тарыф Octopus Energy для адлюстравання даных спажывання","editor.entity_label":"Сутнасць","editor.entity_helper":"Выберыце сэнсар спажывання Octopus Energy España (састарэлы)","editor.title_label":"Назва","editor.title_helper":"Карыстальніцкая назва для карткі","editor.display_options":"Параметры адлюстравання","editor.show_comparison_label":"Паказаць параўнанне","editor.show_comparison_helper":"Параўнаць бягучы перыяд з папярэднім перыядам","editor.default_period_label":"Перыяд па змаўчанні","editor.default_period_helper":"Пачатковы часовы перыяд для адлюстравання","editor.chart_type_label":"Тып дыяграмы","editor.chart_type_helper":"Тып дыяграмы для адлюстравання","editor.show_navigation_label":"Паказаць навігацыю","editor.show_navigation_helper":"Паказаць кнопкі навігацыі па перыядах","editor.tariff_comparison":"Параўнанне тарыфаў","editor.show_tariff_comparison_label":"Паказаць параўнанне тарыфаў","editor.show_tariff_comparison_helper":"Параўнаць выдаткі на спажыванне паміж рознымі тарыфамі","editor.tariff_entry_ids_label":"Тарыфы для параўнання","editor.tariff_entry_ids_helper":"Неабавязкова: Выберыце дадатковыя тарыфы для параўнання кошту","editor.cost_display":"Адлюстраванне кошту","editor.show_cost_on_chart_label":"Паказаць кошт на дыяграме","editor.show_cost_on_chart_helper":"Адлюстраваць інфармацыю аб кошце на дыяграме","editor.selected_tariff_for_cost_label":"Выбраны тарыф для кошту","editor.selected_tariff_for_cost_helper":"ID запісу тарыфу для разліку кошту","editor.consumption_sensor_label":"Ручны сенсар спажывання","editor.consumption_sensor_helper":"Неабавязкова: Укажыце сенсар спажывання ўручную замест выкарыстання даных інтэграцыі","editor.migration_warning":"Патрабуецца міграцыя канфігурацыі. Калі ласка, адрэдагуйце картку і выберыце свой тарыф.","editor.select_tariff":"Выберыце тарыф для пачатку","editor.chart_type_line":"Лінія","editor.chart_type_bar":"Слупкі","editor.period_day":"Дзень","editor.period_week":"Тыдзень","editor.period_month":"Месяц","editor.entity_required":"Сутнасць абавязковая","editor.entity_invalid":"Сутнасць павінна быць сэнсарам Octopus Energy España (sensor.octopus_energy_es_*)"}};function ft(t,e="en"){const o=e.toLowerCase(),i=_t[o]?.[t]||_t.en?.[t];return i||t.replace("editor.","").replace(/_/g," ")}var ut=function(t,e,o,i){var r,s=arguments.length,n=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,o,n):r(e,o))||n);return s>3&&n&&Object.defineProperty(e,o,n),n};void 0!==at&&at.disableWarning&&at.disableWarning("change-in-update");class gt extends at{constructor(){super(...arguments),this._config={type:"custom:octopus-consumption-card",source_entry_id:"",title:"Consumption",show_comparison:!0,default_period:"week",chart_type:"line",show_tariff_comparison:!1,tariff_entry_ids:[],show_cost_on_chart:!1,show_navigation:!0},this._language="en",this._computeLabel=t=>function(t,e="en"){return ft(`editor.${t.name}_label`,e)}(t,this._language),this._computeHelper=t=>function(t,e="en"){return ft(`editor.${t.name}_helper`,e)}(t,this._language)}setConfig(t){JSON.stringify(this._config)!==JSON.stringify(t)&&(this._config={...t})}willUpdate(t){if(t.has("config")&&this.config){JSON.stringify(this._config)!==JSON.stringify(this.config)&&(this._config={...this.config})}if(t.has("hass")&&this.hass){const t=this.hass.language||"en";this._language!==t&&(this._language=t)}}firstUpdated(){if(this.config){JSON.stringify(this._config)!==JSON.stringify(this.config)&&(this._config={...this.config})}this.hass&&(this._language=this.hass.language||"en")}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.detail.value;!1===e.show_tariff_comparison&&(e.show_cost_on_chart=!1,e.selected_tariff_for_cost=void 0,e.tariff_entry_ids=void 0),!1===e.show_cost_on_chart&&(e.selected_tariff_for_cost=void 0),this._config=e,this._fireConfigChanged()}_fireConfigChanged(){const t=new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0});this.dispatchEvent(t)}_buildSchema(){const t=[{name:"source_entry_id",required:!0,selector:{config_entry:{integration:"octopus_energy_es"}}},{name:"title",selector:{text:{type:"text"}}},{name:"show_comparison",selector:{boolean:{}}},{name:"default_period",selector:{select:{mode:"dropdown",options:[{value:"day",label:ft("editor.period_day",this._language)},{value:"week",label:ft("editor.period_week",this._language)},{value:"month",label:ft("editor.period_month",this._language)}]}}},{name:"chart_type",selector:{select:{mode:"dropdown",options:[{value:"line",label:ft("editor.chart_type_line",this._language)},{value:"bar",label:ft("editor.chart_type_bar",this._language)}]}}},{name:"show_navigation",selector:{boolean:{}}},{name:"show_tariff_comparison",selector:{boolean:{}}}];return this._config.show_tariff_comparison&&(t.push({name:"tariff_entry_ids",selector:{config_entry:{integration:"octopus_energy_es",multiple:!0}}}),t.push({name:"show_cost_on_chart",selector:{boolean:{}}}),this._config.show_cost_on_chart&&t.push({name:"selected_tariff_for_cost",selector:{config_entry:{integration:"octopus_energy_es"}}})),t.push({name:"consumption_sensor",selector:{entity:{domain:"sensor"}}}),t}render(){if(!this.hass)return F`<div class="card-config">Loading...</div>`;const t=this._buildSchema();return F`
      <div class="card-config">
        <!-- Main Configuration Form -->
        <ha-form
          .hass=${this.hass}
          .data=${this._config}
          .schema=${t}
          .computeLabel=${this._computeLabel}
          .computeHelper=${this._computeHelper}
          @value-changed=${this._valueChanged}
        ></ha-form>
      </div>
    `}}gt.enabledWarnings=[],gt.styles=n`
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
  `,ut([pt({attribute:!1})],gt.prototype,"hass",void 0),ut([pt({attribute:!1})],gt.prototype,"config",void 0),ut([ht()],gt.prototype,"_config",void 0),"undefined"!=typeof window&&"undefined"!=typeof customElements&&(customElements.get("octopus-consumption-card-editor")||customElements.define("octopus-consumption-card-editor",gt));var mt=function(t,e,o,i){var r,s=arguments.length,n=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,o,n):r(e,o))||n);return s>3&&n&&Object.defineProperty(e,o,n),n};void 0!==at&&at.disableWarning&&at.disableWarning("change-in-update");class yt extends at{constructor(){super(...arguments),this._consumptionData=[],this._comparisonResult=null,this._loading=!1,this._error=null,this._comparisonError=null,this._currentPeriod="week",this._currentDate=new Date,this.SERVICE_TIMEOUT=1e4}setConfig(t){if(!t)throw new Error("Invalid configuration");this.config=t}connectedCallback(){super.connectedCallback(),this._validateConfig(),this._currentPeriod=this.config.default_period||"week",this._loadData()}updated(t){super.updated(t),t.has("config")&&(this._validateConfig(),void 0!==t.get("config")&&this._loadData())}_validateConfig(){return this.config?this.config.source_entry_id?(!this.config.show_tariff_comparison||this.config.tariff_entry_ids&&0!==this.config.tariff_entry_ids.length||console.warn("show_tariff_comparison is enabled but no tariff_entry_ids provided. Comparison will be disabled."),void(this.config.show_cost_on_chart&&!this.config.selected_tariff_for_cost&&console.warn("show_cost_on_chart is enabled but selected_tariff_for_cost is not set. Cost display will be disabled."))):(this._error="source_entry_id is required. Please select your tariff from the card editor.",void(this._loading=!1)):(this._error="Card configuration is required",void(this._loading=!1))}_createTimeoutPromise(t){return new Promise((e,o)=>{setTimeout(()=>o(new Error("Request timeout. The service call took too long to respond.")),t)})}async _callServiceWithTimeout(t,e,o){try{const i=this.hass.callService(t,e,o),r=this._createTimeoutPromise(this.SERVICE_TIMEOUT);return await Promise.race([i,r])}catch(o){if(o instanceof Error){if(o.message.includes("timeout"))throw new Error(`Service call timeout: ${t}.${e} took longer than ${this.SERVICE_TIMEOUT}ms`);if(o.message.includes("Service not found")||o.message.includes("not available"))throw new Error(`Service ${t}.${e} is not available. Please ensure the Octopus Energy España integration is installed and configured.`);throw new Error(`Service call failed: ${t}.${e} - ${o.message}`)}throw o}}async _loadData(){if(!this.hass||!this.config)return;const t=this.config.source_entry_id;if(!t)return this._error="source_entry_id is required. Please select your tariff from the card editor.",void(this._loading=!1);this._loading=!0,this._error=null,this._comparisonError=null;try{const{startDate:e,endDate:o}=this._getDateRange();if(e>new Date)throw new Error(`Invalid date range: start date (${e.toISOString().split("T")[0]}) is in the future. Please navigate to a past period.`);if(e>o)throw new Error("Invalid date range: start date is after end date.");let i;console.log("%cℹ Fetching consumption data","color: #666; font-size: 11px;"),console.log("%c  Entry ID: %c"+t+"%c | Period: %c"+this._currentPeriod+"%c | Dates: %c"+e.toISOString().split("T")[0]+" → "+o.toISOString().split("T")[0],"color: #666; font-size: 11px;","color: #999; font-size: 11px;","color: #666; font-size: 11px;","color: #999; font-size: 11px;","color: #666; font-size: 11px;","color: #999; font-size: 11px;");try{i=await this._callServiceWithTimeout("octopus_energy_es","fetch_consumption",{entry_id:t,start_date:e.toISOString().split("T")[0],end_date:o.toISOString().split("T")[0],granularity:"day"===this._currentPeriod||"week"===this._currentPeriod?"hourly":"daily"})}catch(t){const e=t instanceof Error?t.message:String(t);throw console.error("%c✗ Service call failed: %c"+e,"color: #f00; font-size: 11px; font-weight: bold;","color: #f00; font-size: 11px;"),t}if(!i||"object"!=typeof i)throw console.error("%c✗ Invalid service response: %cexpected object with success field","color: #f00; font-size: 11px; font-weight: bold;","color: #f00; font-size: 11px;"),new Error("Invalid response from service: expected object with success field");if(!i.success){const e=i.error||"Failed to fetch consumption data";let o=e;if(i.context){const e=[];i.context.id&&i.context.id!==t&&e.push(`Service returned different entry ID: ${i.context.id}`),i.context.user_id&&e.push(`User ID: ${i.context.user_id}`);const r=Object.entries(i.context).filter(([t])=>!["id","user_id","parent_id"].includes(t)).map(([t,e])=>`${t}: ${e}`);r.length>0&&e.push(...r),e.length>0&&(o+=` (${e.join(", ")})`)}throw i.warning&&(o+=`. Warning: ${i.warning}`),console.error("%c✗ Service returned error: %c"+e,"color: #f00; font-size: 11px; font-weight: bold;","color: #f00; font-size: 11px;"),i.context&&console.error("%c  Context: %c"+JSON.stringify(i.context,null,2),"color: #666; font-size: 11px;","color: #999; font-size: 11px; font-family: monospace;"),i.warning&&console.warn("%c⚠ Warning: %c"+i.warning,"color: #ff9800; font-size: 11px;","color: #ff9800; font-size: 11px;"),console.error("%c  Details: %c"+JSON.stringify({error:i.error,warning:i.warning,context:i.context},null,2),"color: #666; font-size: 11px;","color: #999; font-size: 11px; font-family: monospace;"),new Error(o)}if(this._consumptionData=i.consumption_data||[],this._comparisonError=null,this.config.show_tariff_comparison&&this.config.tariff_entry_ids&&this.config.tariff_entry_ids.length>0)try{const i="day"===this._currentPeriod?"daily":"week"===this._currentPeriod?"weekly":"monthly",r=await this._callServiceWithTimeout("octopus_energy_es","compare_tariffs",{tariff_entry_ids:this.config.tariff_entry_ids,source_entry_id:t,period:i,start_date:e.toISOString().split("T")[0],end_date:o.toISOString().split("T")[0]});if(r.success&&r.result)this._comparisonResult=r.result;else{const t=r.error||"Failed to compare tariffs";this._comparisonError=t,console.warn("%c⚠ Tariff comparison failed: %c"+t,"color: #ff9800; font-size: 11px;","color: #ff9800; font-size: 11px;")}}catch(t){const e=t instanceof Error?t.message:String(t);this._comparisonError=`Tariff comparison error: ${e}`,console.warn("%c⚠ Tariff comparison error: %c"+e,"color: #ff9800; font-size: 11px;","color: #ff9800; font-size: 11px;")}}catch(t){this._error=t instanceof Error?t.message:String(t),console.error("Error loading data:",t)}finally{this._loading=!1}}_getDateRange(){const t=new Date(this._currentDate);t.setHours(23,59,59,999);const e=new Date(t);return"day"===this._currentPeriod?e.setHours(0,0,0,0):"week"===this._currentPeriod?(e.setDate(e.getDate()-6),e.setHours(0,0,0,0)):"month"===this._currentPeriod&&(e.setDate(e.getDate()-29),e.setHours(0,0,0,0)),{startDate:e,endDate:t}}_navigatePeriod(t){const e="prev"===t?-1:1;"day"===this._currentPeriod?this._currentDate.setDate(this._currentDate.getDate()+e):"week"===this._currentPeriod?this._currentDate.setDate(this._currentDate.getDate()+7*e):"month"===this._currentPeriod&&this._currentDate.setMonth(this._currentDate.getMonth()+e),this._currentDate=new Date(this._currentDate),this._loadData()}_setPeriod(t){this._currentPeriod=t,this._loadData()}render(){return this._loading?F`
        <div class="loading">
          <ha-circular-progress indeterminate></ha-circular-progress>
          <p>Loading consumption data...</p>
        </div>
      `:this._error?F`
        <div class="error-message">
          <ha-icon icon="mdi:alert-circle" class="error-icon"></ha-icon>
          <div class="error-title">Unable to Load Data</div>
          <div class="error-details">${this._error}</div>
          <button class="retry-button" @click=${this._loadData}>
            Retry
          </button>
        </div>
      `:F`
      <div class="card-header">
        <h2 class="card-title">${this.config.title||"Consumption"}</h2>
      </div>

      ${!1!==this.config.show_navigation?F`
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

      ${this.config.show_tariff_comparison?F`
        <div class="comparison-section">
          <h3 class="comparison-title">Tariff Comparison</h3>
          ${this._comparisonError?F`
            <div class="comparison-error">
              <ha-icon icon="mdi:alert"></ha-icon>
              ${this._comparisonError}
            </div>
          `:this._comparisonResult?this._renderComparison():F`
            <div class="loading">Loading tariff comparison...</div>
          `}
        </div>
      `:""}
    `}_renderChart(){return 0===this._consumptionData.length?F`<p>No consumption data available</p>`:F`
      <div>
        <p>Chart will be rendered here (${this._consumptionData.length} data points)</p>
        <p>Total consumption: ${this._consumptionData.reduce((t,e)=>t+(e.consumption||e.value||0),0).toFixed(2)} kWh</p>
      </div>
    `}_renderComparison(){if(!this._comparisonResult||!this._comparisonResult.tariffs||0===this._comparisonResult.tariffs.length)return F`<p>No comparison data available</p>`;const t=[...this._comparisonResult.tariffs].sort((t,e)=>t.total_cost-e.total_cost),e=this._comparisonResult.best_tariff?.entry_id;return F`
      <div class="tariff-list">
        ${t.map(t=>F`
          <div class="tariff-item">
            <div class="tariff-header">
              <span class="tariff-name">
                ${t.name}
                ${e===t.entry_id?F`<span class="best-tariff-badge">Best</span>`:""}
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

      ${this._comparisonResult.savings?F`
        <div class="savings-info">
          <strong>Potential Savings:</strong> €${this._comparisonResult.savings.amount.toFixed(2)} 
          (${this._comparisonResult.savings.percentage.toFixed(1)}%) by choosing the best tariff
        </div>
      `:""}
    `}_renderPeriodBreakdown(t){const e=Math.max(t.p1_consumption,t.p2_consumption,t.p3_consumption);return F`
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
    `}static getStubConfig(){return{type:"custom:octopus-consumption-card",source_entry_id:"",title:"Consumption",show_comparison:!0,default_period:"week",chart_type:"line",show_tariff_comparison:!1,tariff_entry_ids:[],show_cost_on_chart:!1,show_navigation:!0}}static getConfigElement(){return document.createElement("octopus-consumption-card-editor")}}function bt(){return yt}function vt(){return gt}function wt(){return yt.getStubConfig()}if(yt.enabledWarnings=[],yt.styles=n`
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
  `,mt([pt({attribute:!1})],yt.prototype,"hass",void 0),mt([pt({attribute:!1})],yt.prototype,"config",void 0),mt([ht()],yt.prototype,"_consumptionData",void 0),mt([ht()],yt.prototype,"_comparisonResult",void 0),mt([ht()],yt.prototype,"_loading",void 0),mt([ht()],yt.prototype,"_error",void 0),mt([ht()],yt.prototype,"_comparisonError",void 0),mt([ht()],yt.prototype,"_currentPeriod",void 0),mt([ht()],yt.prototype,"_currentDate",void 0),"undefined"!=typeof window&&(window.getCardElement=bt,window.getCardConfigElement=vt,window.getStubConfig=wt),"undefined"!=typeof window&&"undefined"!=typeof customElements){try{customElements.get("octopus-consumption-card")||customElements.define("octopus-consumption-card",yt)}catch(t){console.error("Failed to register octopus-consumption-card:",t)}if(void 0===window.customCards&&(window.customCards=[]),Array.isArray(window.customCards)){window.customCards.some(t=>"custom:octopus-consumption-card"===t.type)||window.customCards.push({type:"custom:octopus-consumption-card",name:"Octopus Energy España Consumption Card",preview:!1,description:"Display consumption data and tariff comparisons for Octopus Energy España"})}window.customCards["octopus-consumption-card"]=yt,window.OctopusConsumptionCard=yt;const t="0.4.46",e=!!customElements.get("octopus-consumption-card");console.groupCollapsed("%c⚡ OCTOPUS ENERGY ESPAÑA","background: linear-gradient(90deg, #e10090 0%, #c000a0 100%);color: #fff;padding: 4px 8px;border-radius: 4px;font-weight: bold;"),console.log("%cConsumption Card %cv"+t,"color: #e10090; font-weight: bold;","color: #999;"),console.log("%c"+(e?"✓":"✗")+" Custom element: %coctopus-consumption-card",e?"color: #0a0; font-size: 11px;":"color: #f00; font-size: 11px;","color: #666; font-size: 11px;"),console.log("%c✓ Added to card picker","color: #0a0; font-size: 11px;"),console.log("%c✓ Visual editor enabled","color: #0a0; font-size: 11px;"),console.log("%cℹ Supported languages: %cen, es, be","color: #666; font-size: 11px;","color: #999; font-size: 11px;"),e||console.error("%c✗ Registration failed! Element not found in customElements registry","color: #f00; font-weight: bold;"),console.groupEnd()}return t.OctopusConsumptionCard=yt,t.getCardConfigElement=vt,t.getCardElement=bt,t.getStubConfig=wt,t}({});
