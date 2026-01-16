var OctopusConsumptionCard=function(t){"use strict";
/**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const e=globalThis,r=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),i=new WeakMap;let s=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(r&&void 0===t){const r=void 0!==e&&1===e.length;r&&(t=i.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&i.set(e,t))}return t}toString(){return this.cssText}};const a=(t,...e)=>{const r=1===t.length?t[0]:e.reduce((e,r,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[o+1],t[0]);return new s(r,t,o)},n=r?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return(t=>new s("string"==typeof t?t:t+"",void 0,o))(e)})(t):t,{is:c,defineProperty:l,getOwnPropertyDescriptor:d,getOwnPropertyNames:p,getOwnPropertySymbols:h,getPrototypeOf:_}=Object,u=globalThis,f=u.trustedTypes,g=f?f.emptyScript:"",m=u.reactiveElementPolyfillSupport,v=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},$=(t,e)=>!c(t,e),x={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:$};
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let b=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=x){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(t,r,e);void 0!==o&&l(this.prototype,t,o)}}static getPropertyDescriptor(t,e,r){const{get:o,set:i}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:o,set(e){const s=o?.call(this);i?.call(this,e),this.requestUpdate(t,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??x}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=_(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,e=[...p(t),...h(t)];for(const r of e)this.createProperty(r,t[r])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,r]of e)this.elementProperties.set(t,r)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const r=this._$Eu(t,e);void 0!==r&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const t of r)e.unshift(n(t))}else void 0!==t&&e.push(n(t));return e}static _$Eu(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,o)=>{if(r)t.adoptedStyleSheets=o.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const r of o){const o=document.createElement("style"),i=e.litNonce;void 0!==i&&o.setAttribute("nonce",i),o.textContent=r.cssText,t.appendChild(o)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ET(t,e){const r=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,r);if(void 0!==o&&!0===r.reflect){const i=(void 0!==r.converter?.toAttribute?r.converter:y).toAttribute(e,r.type);this._$Em=t,null==i?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(t,e){const r=this.constructor,o=r._$Eh.get(t);if(void 0!==o&&this._$Em!==o){const t=r.getPropertyOptions(o),i="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=o;const s=i.fromAttribute(e,t.type);this[o]=s??this._$Ej?.get(o)??s,this._$Em=null}}requestUpdate(t,e,r,o=!1,i){if(void 0!==t){const s=this.constructor;if(!1===o&&(i=this[t]),r??=s.getPropertyOptions(t),!((r.hasChanged??$)(i,e)||r.useDefault&&r.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,r))))return;this.C(t,e,r)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:r,reflect:o,wrapped:i},s){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??e??this[t]),!0!==i||void 0!==s)||(this._$AL.has(t)||(this.hasUpdated||r||(e=void 0),this._$AL.set(t,e)),!0===o&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,r]of t){const{wrapped:t}=r,o=this[e];!0!==t||this._$AL.has(e)||void 0===o||this.C(e,void 0,r,o)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[v("elementProperties")]=new Map,b[v("finalized")]=new Map,m?.({ReactiveElement:b}),(u.reactiveElementVersions??=[]).push("2.1.2");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const w=globalThis,E=t=>t,S=w.trustedTypes,k=S?S.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",P=`lit$${Math.random().toFixed(9).slice(2)}$`,A="?"+P,T=`<${A}>`,D=document,O=()=>D.createComment(""),M=t=>null===t||"object"!=typeof t&&"function"!=typeof t,R=Array.isArray,z="[ \t\n\f\r]",L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,U=/>/g,I=RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),F=/'/g,H=/"/g,V=/^(?:script|style|textarea|title)$/i,W=(t=>(e,...r)=>({_$litType$:t,strings:e,values:r}))(1),j=Symbol.for("lit-noChange"),Y=Symbol.for("lit-nothing"),B=new WeakMap,q=D.createTreeWalker(D,129);function J(t,e){if(!R(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==k?k.createHTML(e):e}const X=(t,e)=>{const r=t.length-1,o=[];let i,s=2===e?"<svg>":3===e?"<math>":"",a=L;for(let e=0;e<r;e++){const r=t[e];let n,c,l=-1,d=0;for(;d<r.length&&(a.lastIndex=d,c=a.exec(r),null!==c);)d=a.lastIndex,a===L?"!--"===c[1]?a=N:void 0!==c[1]?a=U:void 0!==c[2]?(V.test(c[2])&&(i=RegExp("</"+c[2],"g")),a=I):void 0!==c[3]&&(a=I):a===I?">"===c[0]?(a=i??L,l=-1):void 0===c[1]?l=-2:(l=a.lastIndex-c[2].length,n=c[1],a=void 0===c[3]?I:'"'===c[3]?H:F):a===H||a===F?a=I:a===N||a===U?a=L:(a=I,i=void 0);const p=a===I&&t[e+1].startsWith("/>")?" ":"";s+=a===L?r+T:l>=0?(o.push(n),r.slice(0,l)+C+r.slice(l)+P+p):r+P+(-2===l?e:p)}return[J(t,s+(t[r]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),o]};class G{constructor({strings:t,_$litType$:e},r){let o;this.parts=[];let i=0,s=0;const a=t.length-1,n=this.parts,[c,l]=X(t,e);if(this.el=G.createElement(c,r),q.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=q.nextNode())&&n.length<a;){if(1===o.nodeType){if(o.hasAttributes())for(const t of o.getAttributeNames())if(t.endsWith(C)){const e=l[s++],r=o.getAttribute(t).split(P),a=/([.?@])?(.*)/.exec(e);n.push({type:1,index:i,name:a[2],strings:r,ctor:"."===a[1]?et:"?"===a[1]?rt:"@"===a[1]?ot:tt}),o.removeAttribute(t)}else t.startsWith(P)&&(n.push({type:6,index:i}),o.removeAttribute(t));if(V.test(o.tagName)){const t=o.textContent.split(P),e=t.length-1;if(e>0){o.textContent=S?S.emptyScript:"";for(let r=0;r<e;r++)o.append(t[r],O()),q.nextNode(),n.push({type:2,index:++i});o.append(t[e],O())}}}else if(8===o.nodeType)if(o.data===A)n.push({type:2,index:i});else{let t=-1;for(;-1!==(t=o.data.indexOf(P,t+1));)n.push({type:7,index:i}),t+=P.length-1}i++}}static createElement(t,e){const r=D.createElement("template");return r.innerHTML=t,r}}function Z(t,e,r=t,o){if(e===j)return e;let i=void 0!==o?r._$Co?.[o]:r._$Cl;const s=M(e)?void 0:e._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),void 0===s?i=void 0:(i=new s(t),i._$AT(t,r,o)),void 0!==o?(r._$Co??=[])[o]=i:r._$Cl=i),void 0!==i&&(e=Z(t,i._$AS(t,e.values),i,o)),e}class K{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,o=(t?.creationScope??D).importNode(e,!0);q.currentNode=o;let i=q.nextNode(),s=0,a=0,n=r[0];for(;void 0!==n;){if(s===n.index){let e;2===n.type?e=new Q(i,i.nextSibling,this,t):1===n.type?e=new n.ctor(i,n.name,n.strings,this,t):6===n.type&&(e=new it(i,this,t)),this._$AV.push(e),n=r[++a]}s!==n?.index&&(i=q.nextNode(),s++)}return q.currentNode=D,o}p(t){let e=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,o){this.type=2,this._$AH=Y,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),M(t)?t===Y||null==t||""===t?(this._$AH!==Y&&this._$AR(),this._$AH=Y):t!==this._$AH&&t!==j&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>R(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Y&&M(this._$AH)?this._$AA.nextSibling.data=t:this.T(D.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:r}=t,o="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=G.createElement(J(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===o)this._$AH.p(e);else{const t=new K(o,this),r=t.u(this.options);t.p(e),this.T(r),this._$AH=t}}_$AC(t){let e=B.get(t.strings);return void 0===e&&B.set(t.strings,e=new G(t)),e}k(t){R(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,o=0;for(const i of t)o===e.length?e.push(r=new Q(this.O(O()),this.O(O()),this,this.options)):r=e[o],r._$AI(i),o++;o<e.length&&(this._$AR(r&&r._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=E(t).nextSibling;E(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,o,i){this.type=1,this._$AH=Y,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=i,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=Y}_$AI(t,e=this,r,o){const i=this.strings;let s=!1;if(void 0===i)t=Z(this,t,e,0),s=!M(t)||t!==this._$AH&&t!==j,s&&(this._$AH=t);else{const o=t;let a,n;for(t=i[0],a=0;a<i.length-1;a++)n=Z(this,o[r+a],e,a),n===j&&(n=this._$AH[a]),s||=!M(n)||n!==this._$AH[a],n===Y?t=Y:t!==Y&&(t+=(n??"")+i[a+1]),this._$AH[a]=n}s&&!o&&this.j(t)}j(t){t===Y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Y?void 0:t}}class rt extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Y)}}class ot extends tt{constructor(t,e,r,o,i){super(t,e,r,o,i),this.type=5}_$AI(t,e=this){if((t=Z(this,t,e,0)??Y)===j)return;const r=this._$AH,o=t===Y&&r!==Y||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==Y&&(r===Y||o);o&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}}const st=w.litHtmlPolyfillSupport;st?.(G,Q),(w.litHtmlVersions??=[]).push("3.3.2");const at=globalThis;
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */class nt extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,r)=>{const o=r?.renderBefore??e;let i=o._$litPart$;if(void 0===i){const t=r?.renderBefore??null;o._$litPart$=i=new Q(e.insertBefore(O(),t),t,void 0,r??{})}return i._$AI(t),i})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return j}}nt._$litElement$=!0,nt.finalized=!0,at.litElementHydrateSupport?.({LitElement:nt});const ct=at.litElementPolyfillSupport;ct?.({LitElement:nt}),(at.litElementVersions??=[]).push("4.2.2");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const lt={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:$},dt=(t=lt,e,r)=>{const{kind:o,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),"setter"===o&&((t=Object.create(t)).wrapped=!0),s.set(r.name,t),"accessor"===o){const{name:o}=r;return{set(r){const i=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,i,t,!0,r)},init(e){return void 0!==e&&this.C(o,void 0,t,e),e}}}if("setter"===o){const{name:o}=r;return function(r){const i=this[o];e.call(this,r),this.requestUpdate(o,i,t,!0,r)}}throw Error("Unsupported decorator location: "+o)};function pt(t){return(e,r)=>"object"==typeof r?dt(t,e,r):((t,e,r)=>{const o=e.hasOwnProperty(r);return e.constructor.createProperty(r,t),o?Object.getOwnPropertyDescriptor(e,r):void 0})(t,e,r)}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function ht(t){return pt({...t,state:!0,attribute:!1})}const _t={en:{"editor.basic_settings":"Basic Settings","editor.source_entry_id_label":"Primary Tariff","editor.source_entry_id_helper":"Select the Octopus Energy tariff to display consumption data for","editor.entity_label":"Entity","editor.entity_helper":"Select the Octopus Energy España consumption sensor (deprecated)","editor.display_options":"Display Options","editor.show_comparison_label":"Show Comparison","editor.show_comparison_helper":"Compare current period with previous period","editor.default_period_label":"Default Period","editor.default_period_helper":"Initial time period to display","editor.chart_type_label":"Chart Type","editor.chart_type_helper":"Type of chart to display","editor.show_navigation_label":"Show Navigation","editor.show_navigation_helper":"Show period navigation buttons","editor.tariff_comparison":"Tariff Comparison","editor.show_tariff_comparison_label":"Show Tariff Comparison","editor.show_tariff_comparison_helper":"Compare consumption costs across different tariffs","editor.tariff_entry_ids_label":"Comparison Tariffs","editor.tariff_entry_ids_helper":"Optional: Select additional tariffs to compare costs","editor.cost_display":"Cost Display","editor.show_cost_on_chart_label":"Show Cost on Chart","editor.show_cost_on_chart_helper":"Display cost information on the chart","editor.selected_tariff_for_cost_label":"Selected Tariff for Cost","editor.selected_tariff_for_cost_helper":"Tariff entry ID to use for cost calculation","editor.consumption_sensor_label":"Consumption Sensor Override","editor.consumption_sensor_helper":"Optional: Manually specify a consumption sensor instead of using integration data","editor.migration_warning":"Configuration migration required. Please edit the card and select your tariff.","editor.select_tariff":"Select a tariff to get started","editor.chart_type_line":"Line","editor.chart_type_bar":"Bar","editor.chart_type_stacked_area":"Stacked Area","editor.advanced_visualization":"Advanced Visualization","editor.show_period_distribution_label":"Show Period Distribution","editor.show_period_distribution_helper":"Show P1/P2/P3 consumption breakdown on chart","editor.show_moving_average_label":"Show Moving Average","editor.show_moving_average_helper":"Display trend line with moving average","editor.moving_average_days_label":"Moving Average Days","editor.moving_average_days_helper":"Number of days for moving average calculation (default: 7)","editor.period_day":"Day","editor.period_week":"Week","editor.period_month":"Month","editor.entity_required":"Entity is required","editor.entity_invalid":"Entity must be an Octopus Energy España sensor (sensor.octopus_energy_es_*)"},es:{"editor.basic_settings":"Configuración Básica","editor.source_entry_id_label":"Tarifa Principal","editor.source_entry_id_helper":"Selecciona la tarifa de Octopus Energy para mostrar datos de consumo","editor.entity_label":"Entidad","editor.entity_helper":"Seleccione el sensor de consumo de Octopus Energy España (obsoleto)","editor.display_options":"Opciones de Visualización","editor.show_comparison_label":"Mostrar Comparación","editor.show_comparison_helper":"Comparar período actual con período anterior","editor.default_period_label":"Período Predeterminado","editor.default_period_helper":"Período de tiempo inicial a mostrar","editor.chart_type_label":"Tipo de Gráfico","editor.chart_type_helper":"Tipo de gráfico a mostrar","editor.show_navigation_label":"Mostrar Navegación","editor.show_navigation_helper":"Mostrar botones de navegación de período","editor.tariff_comparison":"Comparación de Tarifas","editor.show_tariff_comparison_label":"Mostrar Comparación de Tarifas","editor.show_tariff_comparison_helper":"Comparar costes de consumo entre diferentes tarifas","editor.tariff_entry_ids_label":"Tarifas de Comparación","editor.tariff_entry_ids_helper":"Opcional: Selecciona tarifas adicionales para comparar costes","editor.cost_display":"Visualización de Costes","editor.show_cost_on_chart_label":"Mostrar Coste en Gráfico","editor.show_cost_on_chart_helper":"Mostrar información de costes en el gráfico","editor.selected_tariff_for_cost_label":"Tarifa Seleccionada para Coste","editor.selected_tariff_for_cost_helper":"ID de entrada de tarifa a usar para cálculo de costes","editor.consumption_sensor_label":"Sensor de Consumo Manual","editor.consumption_sensor_helper":"Opcional: Especifica manualmente un sensor de consumo en lugar de usar datos de integración","editor.migration_warning":"Se requiere migración de configuración. Por favor, edita la tarjeta y selecciona tu tarifa.","editor.select_tariff":"Selecciona una tarifa para comenzar","editor.chart_type_line":"Línea","editor.chart_type_bar":"Barras","editor.chart_type_stacked_area":"Área Apilada","editor.advanced_visualization":"Visualización Avanzada","editor.show_period_distribution_label":"Mostrar Distribución por Períodos","editor.show_period_distribution_helper":"Mostrar desglose de consumo P1/P2/P3 en el gráfico","editor.show_moving_average_label":"Mostrar Media Móvil","editor.show_moving_average_helper":"Mostrar línea de tendencia con media móvil","editor.moving_average_days_label":"Días de Media Móvil","editor.moving_average_days_helper":"Número de días para el cálculo de la media móvil (predeterminado: 7)","editor.period_day":"Día","editor.period_week":"Semana","editor.period_month":"Mes","editor.entity_required":"La entidad es requerida","editor.entity_invalid":"La entidad debe ser un sensor de Octopus Energy España (sensor.octopus_energy_es_*)"},be:{"editor.basic_settings":"Асноўныя налады","editor.source_entry_id_label":"Асноўны тарыф","editor.source_entry_id_helper":"Выберыце тарыф Octopus Energy для адлюстравання даных спажывання","editor.entity_label":"Сутнасць","editor.entity_helper":"Выберыце сэнсар спажывання Octopus Energy España (састарэлы)","editor.display_options":"Параметры адлюстравання","editor.show_comparison_label":"Паказаць параўнанне","editor.show_comparison_helper":"Параўнаць бягучы перыяд з папярэднім перыядам","editor.default_period_label":"Перыяд па змаўчанні","editor.default_period_helper":"Пачатковы часовы перыяд для адлюстравання","editor.chart_type_label":"Тып дыяграмы","editor.chart_type_helper":"Тып дыяграмы для адлюстравання","editor.show_navigation_label":"Паказаць навігацыю","editor.show_navigation_helper":"Паказаць кнопкі навігацыі па перыядах","editor.tariff_comparison":"Параўнанне тарыфаў","editor.show_tariff_comparison_label":"Паказаць параўнанне тарыфаў","editor.show_tariff_comparison_helper":"Параўнаць выдаткі на спажыванне паміж рознымі тарыфамі","editor.tariff_entry_ids_label":"Тарыфы для параўнання","editor.tariff_entry_ids_helper":"Неабавязкова: Выберыце дадатковыя тарыфы для параўнання кошту","editor.cost_display":"Адлюстраванне кошту","editor.show_cost_on_chart_label":"Паказаць кошт на дыяграме","editor.show_cost_on_chart_helper":"Адлюстраваць інфармацыю аб кошце на дыяграме","editor.selected_tariff_for_cost_label":"Выбраны тарыф для кошту","editor.selected_tariff_for_cost_helper":"ID запісу тарыфу для разліку кошту","editor.consumption_sensor_label":"Ручны сенсар спажывання","editor.consumption_sensor_helper":"Неабавязкова: Укажыце сенсар спажывання ўручную замест выкарыстання даных інтэграцыі","editor.migration_warning":"Патрабуецца міграцыя канфігурацыі. Калі ласка, адрэдагуйце картку і выберыце свой тарыф.","editor.select_tariff":"Выберыце тарыф для пачатку","editor.chart_type_line":"Лінія","editor.chart_type_bar":"Слупкі","editor.chart_type_stacked_area":"Стопачная дыяграма","editor.advanced_visualization":"Пашыраная візуалізацыя","editor.show_period_distribution_label":"Паказаць размеркаванне па перыядах","editor.show_period_distribution_helper":"Паказаць разбіўку спажывання P1/P2/P3 на дыяграме","editor.show_moving_average_label":"Паказаць рухомае сярэдняе","editor.show_moving_average_helper":"Паказаць лінію трэнду з рухомым сярэднім","editor.moving_average_days_label":"Дні рухомага сярэдняга","editor.moving_average_days_helper":"Колькасць дзён для разліку рухомага сярэдняга (па змаўчанні: 7)","editor.period_day":"Дзень","editor.period_week":"Тыдзень","editor.period_month":"Месяц","editor.entity_required":"Сутнасць абавязковая","editor.entity_invalid":"Сутнасць павінна быць сэнсарам Octopus Energy España (sensor.octopus_energy_es_*)"}};function ut(t,e="en"){const r=e.toLowerCase(),o=_t[r]?.[t]||_t.en?.[t];return o||t.replace("editor.","").replace(/_/g," ")}var ft=function(t,e,r,o){var i,s=arguments.length,a=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,o);else for(var n=t.length-1;n>=0;n--)(i=t[n])&&(a=(s<3?i(a):s>3?i(e,r,a):i(e,r))||a);return s>3&&a&&Object.defineProperty(e,r,a),a};void 0!==nt&&nt.disableWarning&&nt.disableWarning("change-in-update");class gt extends nt{constructor(){super(...arguments),this._config={type:"custom:octopus-consumption-card",source_entry_id:"",show_comparison:!0,default_period:"week",chart_type:"line",show_tariff_comparison:!1,tariff_entry_ids:[],show_cost_on_chart:!1,show_navigation:!0,show_period_distribution:!1,show_moving_average:!1,moving_average_days:7},this._language="en",this._computeLabel=t=>function(t,e="en"){return ut(`editor.${t.name}_label`,e)}(t,this._language),this._computeHelper=t=>function(t,e="en"){return ut(`editor.${t.name}_helper`,e)}(t,this._language)}setConfig(t){JSON.stringify(this._config)!==JSON.stringify(t)&&(this._config={...t})}willUpdate(t){if(t.has("config")&&this.config){JSON.stringify(this._config)!==JSON.stringify(this.config)&&(this._config={...this.config})}if(t.has("hass")&&this.hass){const t=this.hass.language||"en";this._language!==t&&(this._language=t)}}firstUpdated(){if(this.config){JSON.stringify(this._config)!==JSON.stringify(this.config)&&(this._config={...this.config})}this.hass&&(this._language=this.hass.language||"en")}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.detail.value;!1===e.show_tariff_comparison&&(e.show_cost_on_chart=!1,e.selected_tariff_for_cost=void 0,e.tariff_entry_ids=void 0),!1===e.show_cost_on_chart&&(e.selected_tariff_for_cost=void 0),this._config=e,this._fireConfigChanged()}_fireConfigChanged(){const t=new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0});this.dispatchEvent(t)}_buildSchema(){const t=[{name:"source_entry_id",required:!0,selector:{config_entry:{integration:"octopus_energy_es"}}},{name:"show_comparison",selector:{boolean:{}}},{name:"default_period",selector:{select:{mode:"dropdown",options:[{value:"day",label:ut("editor.period_day",this._language)},{value:"week",label:ut("editor.period_week",this._language)},{value:"month",label:ut("editor.period_month",this._language)}]}}},{name:"chart_type",selector:{select:{mode:"dropdown",options:[{value:"line",label:ut("editor.chart_type_line",this._language)},{value:"bar",label:ut("editor.chart_type_bar",this._language)},{value:"stacked-area",label:ut("editor.chart_type_stacked_area",this._language)}]}}},{name:"show_navigation",selector:{boolean:{}}},{name:"show_period_distribution",selector:{boolean:{}}},{name:"show_moving_average",selector:{boolean:{}}}];return this._config.show_moving_average&&t.push({name:"moving_average_days",selector:{number:{min:2,max:30,mode:"box"}}}),t.push({name:"show_tariff_comparison",selector:{boolean:{}}}),this._config.show_tariff_comparison&&(t.push({name:"tariff_entry_ids",selector:{config_entry:{integration:"octopus_energy_es",multiple:!0}}}),t.push({name:"show_cost_on_chart",selector:{boolean:{}}}),this._config.show_cost_on_chart&&t.push({name:"selected_tariff_for_cost",selector:{config_entry:{integration:"octopus_energy_es"}}})),t.push({name:"consumption_sensor",selector:{entity:{domain:"sensor"}}}),t}render(){if(!this.hass)return W`<div class="card-config">Loading...</div>`;const t=this._buildSchema();return W`
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
    `}}gt.enabledWarnings=[],gt.styles=a`
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
  `,ft([pt({attribute:!1})],gt.prototype,"hass",void 0),ft([pt({attribute:!1})],gt.prototype,"config",void 0),ft([ht()],gt.prototype,"_config",void 0),"undefined"!=typeof window&&"undefined"!=typeof customElements&&(customElements.get("octopus-consumption-card-editor")||customElements.define("octopus-consumption-card-editor",gt));class mt{static info(t,...e){const r=[t,this.STYLES.info];e.forEach((t,e)=>{r.push(t,e%2==0?this.STYLES.infoValue:this.STYLES.info)}),console.log(...r)}static error(t,e){e?console.error(`%c${t}%c${e}`,this.STYLES.error,this.STYLES.errorValue):console.error(`%c${t}`,this.STYLES.error)}static warn(t,e){e?console.warn(`%c${t}%c${e}`,this.STYLES.warning,this.STYLES.warningValue):console.warn(`%c${t}`,this.STYLES.warning)}static success(t){console.log(`%c${t}`,this.STYLES.success)}static data(t,e){console.log(`%c  ${t}: %c${JSON.stringify(e,null,2)}`,this.STYLES.info,this.STYLES.infoValue)}static serviceCall(t,e,r=!1){this.info("  Calling service: ",`${t}.${e}${r?" (with return_response)":""}`)}static serviceData(t){this.data("Service data",t)}static serviceResponse(t){this.data("Raw Service Response",t)}static serviceError(t){console.error("%c  Service Error Details: %c"+JSON.stringify(t,Object.getOwnPropertyNames(t),2),this.STYLES.info,this.STYLES.errorValue)}static groupServiceCall(t,e){console.groupCollapsed(`%c🔧 Service Call: %c${t}.${e}`,this.STYLES.info,this.STYLES.infoValue)}static groupEnd(){console.groupEnd()}static groupDataLoad(t,e,r){console.groupCollapsed(`%c📊 Loading Data: %cEntry: ${t} | Period: ${e} | ${r}`,this.STYLES.info,this.STYLES.infoValue)}static groupError(t){console.groupCollapsed(`%c❌ ${t}`,this.STYLES.error)}}mt.STYLES={info:"color: #666; font-size: 11px;",infoValue:"color: #999; font-size: 11px; font-family: monospace;",error:"color: #f00; font-size: 11px; font-weight: bold;",errorValue:"color: #f00; font-size: 11px;",warning:"color: #ff9800; font-size: 11px;",warningValue:"color: #ff9800; font-size: 11px;",success:"color: #4caf50; font-size: 11px;"};var vt=function(t,e,r,o){var i,s=arguments.length,a=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,o);else for(var n=t.length-1;n>=0;n--)(i=t[n])&&(a=(s<3?i(a):s>3?i(e,r,a):i(e,r))||a);return s>3&&a&&Object.defineProperty(e,r,a),a};void 0!==nt&&nt.disableWarning&&nt.disableWarning("change-in-update");class yt extends nt{constructor(){super(...arguments),this._consumptionData=[],this._comparisonResult=null,this._tariffCosts=null,this._loading=!1,this._error=null,this._comparisonError=null,this._currentPeriod="week",this._currentDate=new Date}setConfig(t){if(!t)throw new Error("Invalid configuration");this.config=t}getCardSize(){let t=1;return this.config&&!1!==this.config.show_navigation&&(t+=1),this.config&&this.config.show_tariff_comparison&&(t+=1),t}connectedCallback(){super.connectedCallback(),this._validateConfig(),this._currentPeriod=this.config.default_period||"week",this._loadData()}updated(t){super.updated(t),t.has("config")&&(this._validateConfig(),void 0!==t.get("config")&&this._loadData())}_validateConfig(){return this.config?this.config.source_entry_id?(!this.config.show_tariff_comparison||this.config.tariff_entry_ids&&0!==this.config.tariff_entry_ids.length||mt.warn("show_tariff_comparison is enabled but no tariff_entry_ids provided. Comparison will be disabled."),void(this.config.show_cost_on_chart&&!this.config.selected_tariff_for_cost&&mt.warn("show_cost_on_chart is enabled but selected_tariff_for_cost is not set. Cost display will be disabled."))):(this._error="source_entry_id is required. Please select your tariff from the card editor.",void(this._loading=!1)):(this._error="Card configuration is required",void(this._loading=!1))}_createTimeoutPromise(t){return new Promise((e,r)=>{setTimeout(()=>r(new Error("Request timeout. The service call took too long to respond.")),t)})}async _callServiceWithTimeout(t,e,r,o=!0){mt.groupServiceCall(t,e);try{let i;if(mt.serviceCall(t,e,o),r&&mt.serviceData(r),o&&this.hass.callWS)try{i=await this._callServiceViaWebSocket(t,e,r)}catch(o){const s=o instanceof Error?o.message:String(o);mt.warn("⚠ WebSocket call failed, falling back to callService: ",s),i=await this._callServiceViaStandard(t,e,r)}else i=await this._callServiceViaStandard(t,e,r);return mt.serviceResponse(i),mt.groupEnd(),i}catch(r){throw mt.serviceError(r),mt.groupEnd(),this._handleServiceError(r,t,e)}}_handleServiceError(t,e,r){if(t instanceof Error)return t.message.includes("timeout")?new Error(`Service call timeout: ${e}.${r} took longer than ${yt.SERVICE_TIMEOUT}ms`):t.message.includes("Service not found")||t.message.includes("not available")?new Error(`Service ${e}.${r} is not available. Please ensure the Octopus Energy España integration is installed and configured.`):"service_validation_error"===t.code?this._handleValidationError(t):new Error(`Service call failed: ${e}.${r} - ${t.message}`);if(t&&"object"==typeof t){const o=t;if("service_validation_error"===o.code)return this._handleValidationError(o);const i=o.message||o.translation_key||"Unknown service error";return new Error(`Service call failed: ${e}.${r} - ${i}`)}return t instanceof Error?t:new Error(String(t))}_handleValidationError(t){const e=(Error,t);let r=e.message||e.translation_key||"Service validation error";return r.includes("return_response")&&(r="The service integration may not support response data yet. Please ensure you're using the latest version of the Octopus Energy España integration and that it has been reloaded after updating."),new Error(`Service validation error: ${r}`)}_validateConsumptionResponse(t){if(!t||"object"!=typeof t)throw mt.groupError("Invalid service response"),mt.error("✗ Invalid service response: ","expected object with success field"),mt.groupEnd(),new Error("Invalid response from service: expected object with success field");if(!("success"in t))throw mt.groupError("Invalid service response format"),mt.error("✗ Invalid service response format: ","response does not contain success field"),mt.data("Received response",t),mt.groupEnd(),new Error("Service returned unexpected response format. The service may not be returning data correctly. Please check the integration configuration and ensure the service supports returning response data.")}_extractErrorMessage(t){return t instanceof Error?t.message:t&&"object"==typeof t?t.message||t.translation_key||JSON.stringify(t):String(t)}_createUserFriendlyError(t){if(t instanceof Error)return t;if(t&&"object"==typeof t){const e=t;let r=e.message||e.translation_key||JSON.stringify(t);return"service_validation_error"===e.code&&(r=r.includes("return_response")?"The service integration may not support response data yet. Please ensure you're using the latest version of the Octopus Energy España integration and that it has been reloaded after updating.":r||"Service validation error. Please check your configuration."),new Error(r)}return new Error(String(t))}_extractWebSocketResponse(t){return t&&"object"==typeof t?"service_response"in t?t.service_response:"response"in t?t.response:t:t}async _callServiceViaWebSocket(t,e,r){if(!this.hass.callWS)throw new Error("callWS is not available");const o=this.hass.callWS({type:"call_service",domain:t,service:e,service_data:r,return_response:!0}),i=this._createTimeoutPromise(yt.SERVICE_TIMEOUT),s=await Promise.race([o,i]);return this._extractWebSocketResponse(s)}async _callServiceViaStandard(t,e,r){const o=this.hass.callService(t,e,r),i=this._createTimeoutPromise(yt.SERVICE_TIMEOUT);return await Promise.race([o,i])}async _loadData(){if(!this.hass||!this.config)return;const t=this.config.source_entry_id;if(!t)return this._error="source_entry_id is required. Please select your tariff from the card editor.",void(this._loading=!1);this._loading=!0,this._error=null,this._comparisonError=null;try{const{startDate:e,endDate:r}=this._getDateRange();this._validateDateRange(e,r);const o=`${e.toISOString().split("T")[0]} → ${r.toISOString().split("T")[0]}`;mt.groupDataLoad(t,this._currentPeriod,o);const i=await this._fetchConsumptionData(t,e,r);this._consumptionData=i.consumption_data||[],i.tariff_costs?this._tariffCosts=i.tariff_costs:this._tariffCosts=null,this.config.show_tariff_comparison&&this.config.tariff_entry_ids?.length&&await this._fetchTariffComparison(t,e,r),mt.groupEnd()}catch(t){mt.groupError("Error loading data"),this._error=t instanceof Error?t.message:String(t),mt.error("Error loading data: ",this._extractErrorMessage(t)),mt.data("Error details",t),mt.groupEnd()}finally{this._loading=!1}}_validateDateRange(t,e){if(t>new Date)throw new Error(`Invalid date range: start date (${t.toISOString().split("T")[0]}) is in the future. Please navigate to a past period.`);if(t>e)throw new Error("Invalid date range: start date is after end date.")}async _fetchConsumptionData(t,e,r){const o="day"===this._currentPeriod||"week"===this._currentPeriod?"hourly":"daily";let i;try{i=await this._callServiceWithTimeout(yt.SERVICE_DOMAIN,yt.SERVICE_FETCH_CONSUMPTION,{entry_id:t,start_date:e.toISOString().split("T")[0],end_date:r.toISOString().split("T")[0],granularity:o}),mt.data("Raw Service Response (before processing)",i);const s=i;return this._validateConsumptionResponse(s),s.success||this._handleConsumptionError(s,t),s}catch(t){throw mt.groupError("Service call failed"),mt.error("✗ Service call failed: ",this._extractErrorMessage(t)),mt.data("Full Error Object",t),mt.groupEnd(),this._createUserFriendlyError(t)}}_handleConsumptionError(t,e){const r=t.error||"Failed to fetch consumption data";let o=r;throw t.warning&&(o+=`. ${t.warning}`,mt.warn("⚠ Service Warning: ",t.warning)),mt.groupError("Service returned error"),mt.error("✗ Service returned error: ",r),mt.data("Requested Entry ID",e),t.context&&(mt.data("Service Context",t.context),t.context.id&&t.context.id!==e&&mt.warn("⚠ Note: Service context shows different entry ID (",t.context.id+"). This may be informational.")),mt.groupEnd(),mt.data("Full Response",{success:t.success,error:t.error,warning:t.warning,context:t.context}),new Error(o)}async _fetchTariffComparison(t,e,r){try{const o="day"===this._currentPeriod?"daily":"week"===this._currentPeriod?"weekly":"monthly",i=await this._callServiceWithTimeout(yt.SERVICE_DOMAIN,yt.SERVICE_COMPARE_TARIFFS,{tariff_entry_ids:this.config.tariff_entry_ids,source_entry_id:t,period:o,start_date:e.toISOString().split("T")[0],end_date:r.toISOString().split("T")[0]});if(i.success&&i.result)this._comparisonResult=i.result;else{const t=i.error||"Failed to compare tariffs";this._comparisonError=t,mt.warn("⚠ Tariff comparison failed: ",t)}}catch(t){const e=t instanceof Error?t.message:String(t);this._comparisonError=`Tariff comparison error: ${e}`,mt.warn("⚠ Tariff comparison error: ",e)}}_getDateRange(){const t=new Date(this._currentDate);t.setHours(23,59,59,999);const e=new Date(t);return"day"===this._currentPeriod?e.setHours(0,0,0,0):"week"===this._currentPeriod?(e.setDate(e.getDate()-6),e.setHours(0,0,0,0)):"month"===this._currentPeriod&&(e.setDate(e.getDate()-29),e.setHours(0,0,0,0)),{startDate:e,endDate:t}}_navigatePeriod(t){const e="prev"===t?-1:1;"day"===this._currentPeriod?this._currentDate.setDate(this._currentDate.getDate()+e):"week"===this._currentPeriod?this._currentDate.setDate(this._currentDate.getDate()+7*e):"month"===this._currentPeriod&&this._currentDate.setMonth(this._currentDate.getMonth()+e),this._currentDate=new Date(this._currentDate),this._loadData()}_setPeriod(t){this._currentPeriod=t,this._loadData()}_extractPeriodData(){if(this._tariffCosts&&this.config.source_entry_id){const t=this._tariffCosts[this.config.source_entry_id];if(t&&t.hourly_breakdown){const e=new Map;for(const r of t.hourly_breakdown){const t=r.hour||"",o=r.consumption||0,i=r.period;e.has(t)||e.set(t,{p1:0,p2:0,p3:0});const s=e.get(t);"P1"===i?s.p1+=o:"P2"===i?s.p2+=o:"P3"===i&&(s.p3+=o)}const r=Array.from(e.entries()).map(([t,e])=>({timestamp:t,...e}));if(r.length>0)return r}if(t&&t.daily_breakdown&&"month"===this._currentPeriod&&t.period_breakdown){const e=t.period_breakdown.p1_percentage/100,r=t.period_breakdown.p2_percentage/100,o=t.period_breakdown.p3_percentage/100;return t.daily_breakdown.map(t=>({timestamp:t.date,p1:t.consumption*e,p2:t.consumption*r,p3:t.consumption*o}))}}if(this._consumptionData.length>0){const t=this._consumptionData[0];if(void 0!==t.p1_consumption||t.period)return this._consumptionData.map(t=>({timestamp:t.start_time||t.date||"",p1:t.p1_consumption||("P1"===t.period?t.consumption:0),p2:t.p2_consumption||("P2"===t.period?t.consumption:0),p3:t.p3_consumption||("P3"===t.period?t.consumption:0)}))}return null}_calculateMovingAverage(t,e){if(e<2||0===t.length)return t.map(()=>null);const r=[];for(let o=0;o<t.length;o++)if(o<e-1)r.push(null);else{let i=0;for(let r=0;r<e;r++)i+=t[o-r];r.push(i/e)}return r}render(){return this._loading?W`
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
    `}_renderChart(){if(0===this._consumptionData.length)return W`<div class="loading">No consumption data available</div>`;const t=this.config.chart_type||"line",e=this._consumptionData.map(t=>t.consumption||t.value||0),r=Math.max(...e,1),o=Math.min(...e,0),i=r-o||1;let s=[],a=0,n=0,c=1;const l=this.config.show_cost_on_chart&&this.config.selected_tariff_for_cost&&null!==this._tariffCosts;if(l&&this._tariffCosts&&this.config.selected_tariff_for_cost){const t=this._tariffCosts[this.config.selected_tariff_for_cost];if(t){const r="month"===this._currentPeriod?t.daily_breakdown:t.hourly_breakdown;r&&r.length>0?(s=r.map(t=>t.cost),s.length!==e.length?(mt.warn(`Cost data length (${s.length}) does not match consumption data length (${e.length}). Cost display disabled.`),s=[]):(a=Math.max(...s,.01),n=Math.min(...s,0),c=a-n||1)):mt.warn(`No breakdown data available for tariff ${this.config.selected_tariff_for_cost}. Cost display disabled.`)}else mt.warn(`Tariff cost data not found for entry ID: ${this.config.selected_tariff_for_cost}. Cost display disabled.`)}const d=l&&s.length>0&&s.length===e.length,p=800,h=300,_=20,u=d?60:20,f=40,g=60,m=h-_-f,v=(p-g-u)/(e.length-1||1),y=e.map((t,e)=>({x:g+e*v,y:_+m-(t-o)/i*m,value:t})),$=y.length>0?`M ${y[0].x} ${y[0].y} ${y.slice(1).map(t=>`L ${t.x} ${t.y}`).join(" ")}`:"",x=y.length>0?`${$} L ${y[y.length-1].x} ${h-f} L ${y[0].x} ${h-f} Z`:"",b=[];for(let t=0;t<=5;t++){const e=o+i*t/5,r=_+m-t/5*m;b.push({value:e,y:r})}let w=[],E="",S=[];if(d&&s.length>0&&s.length===e.length){w=s.map((t,e)=>({x:g+e*v,y:_+m-(t-n)/c*m,value:t})),w.length>0&&(E=`M ${w[0].x} ${w[0].y} ${w.slice(1).map(t=>`L ${t.x} ${t.y}`).join(" ")}`);for(let t=0;t<=5;t++){const e=n+c*t/5,r=_+m-t/5*m;S.push({value:e,y:r})}}const k=[];if(y.length>0){const t=this._consumptionData[0],e=this._consumptionData[this._consumptionData.length-1],r=Math.floor(this._consumptionData.length/2),o=this._consumptionData[r],i=t=>{try{return new Date(t).toLocaleDateString("en-US",{month:"short",day:"numeric"})}catch{return t.split("T")[0]}};(t.start_time||t.date)&&k.push({label:i(t.start_time||t.date||""),x:y[0].x}),(o&&o.start_time||o.date)&&k.push({label:i(o.start_time||o.date||""),x:y[r]?.x||y[0].x}),(e.start_time||e.date)&&k.push({label:i(e.start_time||e.date||""),x:y[y.length-1].x})}if("bar"===t)return W`
        <svg class="chart-svg" viewBox="0 0 ${p} ${h}" preserveAspectRatio="xMidYMid meet">
          <!-- Grid lines -->
          ${b.map(t=>W`
            <line class="chart-grid-line" 
              x1="${g}" y1="${t.y}" 
              x2="${p-u}" y2="${t.y}"/>
          `)}
          
          <!-- Bars -->
          ${y.map((t,e)=>{const r=Math.max(.6*v,2),o=t.x-r/2,i=h-f-t.y;return W`
              <rect class="chart-bar"
                x="${o}" 
                y="${t.y}" 
                width="${r}" 
                height="${i}"/>
            `})}
          
          <!-- Y-axis -->
          <line class="chart-axis" 
            x1="${g}" y1="${_}" 
            x2="${g}" y2="${h-f}"/>
          
          <!-- X-axis -->
          <line class="chart-axis" 
            x1="${g}" y1="${h-f}" 
            x2="${p-u}" y2="${h-f}"/>
          
          <!-- Y-axis labels (consumption - left) -->
          ${b.map(t=>W`
            <text class="chart-text" x="${g-10}" y="${t.y+4}" text-anchor="end">
              ${t.value.toFixed(1)} kWh
            </text>
          `)}
          
          <!-- Cost Y-axis labels (right) -->
          ${d?S.map(t=>W`
            <text class="chart-text" x="${p-u+10}" y="${t.y+4}" text-anchor="start" fill="var(--accent-color, #ff9800)">
              €${t.value.toFixed(2)}
            </text>
          `):""}
          
          <!-- Cost Y-axis (right) -->
          ${d?W`
            <line class="chart-axis" 
              x1="${p-u}" y1="${_}" 
              x2="${p-u}" y2="${h-f}"
              stroke="var(--accent-color, #ff9800)" opacity="0.5"/>
          `:""}
          
          <!-- Cost line overlay (for bar chart) -->
          ${d&&E?W`
            <path class="chart-line-cost" d="${E}"/>
            ${w.map(t=>W`
              <circle 
                cx="${t.x}" 
                cy="${t.y}" 
                r="3" 
                fill="var(--accent-color, #ff9800)"
                stroke="var(--card-background-color, #fff)"
                stroke-width="2"/>
            `)}
          `:""}
          
          <!-- X-axis labels -->
          ${k.map(t=>W`
            <text class="chart-text" x="${t.x}" y="${h-f+20}" text-anchor="middle">
              ${t.label}
            </text>
          `)}
          
          <!-- Legend -->
          ${d?W`
            <g>
              <rect x="${p-u-100}" y="${_+5}" width="15" height="10" 
                fill="var(--primary-color, #03a9f4)" opacity="0.7"/>
              <text x="${p-u-80}" y="${_+14}" class="chart-text" font-size="11px">Consumption</text>
              <line x1="${p-u-100}" y1="${_+25}" x2="${p-u-85}" y2="${_+25}" 
                stroke="var(--accent-color, #ff9800)" stroke-width="2" stroke-dasharray="5,5"/>
              <text x="${p-u-75}" y="${_+29}" class="chart-text" font-size="11px" fill="var(--accent-color, #ff9800)">Cost</text>
            </g>
          `:""}
        </svg>
      `;if("stacked-area"===t){const t=this._extractPeriodData();if(!t||0===t.length)return W`
          <div class="error-message">
            <div class="error-title">Stacked Area Chart Unavailable</div>
            <div class="error-details">
              Period breakdown data (P1/P2/P3) is not available. 
              Please ensure tariff comparison is enabled or period data is available from the service.
            </div>
          </div>
        `;const e=t.map(t=>t.p1||0),r=t.map(t=>t.p2||0),o=t.map(t=>t.p3||0),i=o,s=o.map((t,e)=>t+(r[e]||0)),a=s.map((t,r)=>t+(e[r]||0)),n=Math.max(...a,1),c=0,l=n-c||1,d=(t,e)=>{if(0===t.length)return"";const r=t.map((t,e)=>({x:g+e*v,y:_+m-(t-c)/l*m})),o=e.map((t,e)=>({x:g+e*v,y:_+m-(t-c)/l*m})).reverse(),i=r.map((t,e)=>0===e?`M ${t.x} ${t.y}`:`L ${t.x} ${t.y}`).join(" "),s=o.map(t=>`L ${t.x} ${t.y}`).join(" ");return`${i} ${s} Z`},y=[];for(let t=0;t<=5;t++){const e=c+l*t/5,r=_+m-t/5*m;y.push({value:e,y:r})}const $=d(i,new Array(t.length).fill(0)),x=d(s,i),b=d(a,s);return W`
        <svg class="chart-svg" viewBox="0 0 ${p} ${h}" preserveAspectRatio="xMidYMid meet">
          <!-- Grid lines -->
          ${y.map(t=>W`
            <line class="chart-grid-line" 
              x1="${g}" y1="${t.y}" 
              x2="${p-u}" y2="${t.y}"/>
          `)}
          
          <!-- Stacked areas (bottom to top: P3, P2, P1) -->
          <path class="chart-area-p3" d="${$}"/>
          <path class="chart-area-p2" d="${x}"/>
          <path class="chart-area-p1" d="${b}"/>
          
          <!-- Y-axis -->
          <line class="chart-axis" 
            x1="${g}" y1="${_}" 
            x2="${g}" y2="${h-f}"/>
          
          <!-- X-axis -->
          <line class="chart-axis" 
            x1="${g}" y1="${h-f}" 
            x2="${p-u}" y2="${h-f}"/>
          
          <!-- Y-axis labels -->
          ${y.map(t=>W`
            <text class="chart-text" x="${g-10}" y="${t.y+4}" text-anchor="end">
              ${t.value.toFixed(1)} kWh
            </text>
          `)}
          
          <!-- X-axis labels -->
          ${k.map(t=>W`
            <text class="chart-text" x="${t.x}" y="${h-f+20}" text-anchor="middle">
              ${t.label}
            </text>
          `)}
          
          <!-- Legend -->
          <g>
            <rect x="${g+10}" y="${_+5}" width="12" height="12" 
              fill="var(--error-color, #f44336)" opacity="0.6"/>
            <text x="${g+28}" y="${_+15}" class="chart-text" font-size="11px">P1 (Peak)</text>
            
            <rect x="${g+100}" y="${_+5}" width="12" height="12" 
              fill="var(--warning-color, #ff9800)" opacity="0.6"/>
            <text x="${g+118}" y="${_+15}" class="chart-text" font-size="11px">P2 (Flat)</text>
            
            <rect x="${g+190}" y="${_+5}" width="12" height="12" 
              fill="var(--success-color, #4caf50)" opacity="0.6"/>
            <text x="${g+208}" y="${_+15}" class="chart-text" font-size="11px">P3 (Valley)</text>
          </g>
        </svg>
      `}let C="";if(this.config.show_moving_average){const t=this.config.moving_average_days||7,r=this._calculateMovingAverage(e,t).map((t,e)=>{if(null===t)return null;return{x:g+e*v,y:_+m-(t-o)/i*m,value:t}}).filter(t=>null!==t);r.length>0&&(C=`M ${r[0].x} ${r[0].y} ${r.slice(1).map(t=>`L ${t.x} ${t.y}`).join(" ")}`)}return W`
      <svg class="chart-svg" viewBox="0 0 ${p} ${h}" preserveAspectRatio="xMidYMid meet">
        <!-- Grid lines -->
        ${b.map(t=>W`
          <line class="chart-grid-line" 
            x1="${g}" y1="${t.y}" 
            x2="${p-u}" y2="${t.y}"/>
        `)}
        
        <!-- Area under line -->
        <path class="chart-area" d="${x}"/>
        
        <!-- Line -->
        <path class="chart-line" d="${$}"/>
        
        <!-- Moving average line -->
        ${this.config.show_moving_average&&C?W`
          <path class="chart-line-moving-avg" d="${C}"/>
        `:""}
        
        <!-- Data points -->
        ${y.map(t=>W`
          <circle 
            cx="${t.x}" 
            cy="${t.y}" 
            r="3" 
            fill="var(--primary-color, #03a9f4)"
            stroke="var(--card-background-color, #fff)"
            stroke-width="2"/>
        `)}
        
        <!-- Y-axis -->
        <line class="chart-axis" 
          x1="${g}" y1="${_}" 
          x2="${g}" y2="${h-f}"/>
        
        <!-- X-axis -->
        <line class="chart-axis" 
          x1="${g}" y1="${h-f}" 
          x2="${p-u}" y2="${h-f}"/>
        
        <!-- Y-axis labels (consumption - left) -->
        ${b.map(t=>W`
          <text class="chart-text" x="${g-10}" y="${t.y+4}" text-anchor="end">
            ${t.value.toFixed(1)} kWh
          </text>
        `)}
        
        <!-- Cost Y-axis labels (right) -->
        ${d?S.map(t=>W`
          <text class="chart-text" x="${p-u+10}" y="${t.y+4}" text-anchor="start" fill="var(--accent-color, #ff9800)">
            €${t.value.toFixed(2)}
          </text>
        `):""}
        
        <!-- Cost Y-axis (right) -->
        ${d?W`
          <line class="chart-axis" 
            x1="${p-u}" y1="${_}" 
            x2="${p-u}" y2="${h-f}"
            stroke="var(--accent-color, #ff9800)" opacity="0.5"/>
        `:""}
        
        <!-- X-axis labels -->
        ${k.map(t=>W`
          <text class="chart-text" x="${t.x}" y="${h-f+20}" text-anchor="middle">
            ${t.label}
          </text>
        `)}
        
        <!-- Legend -->
        ${d||this.config.show_moving_average?W`
          <g>
            ${d?W`
              <rect x="${p-u-120}" y="${_+5}" width="15" height="10" 
                fill="var(--primary-color, #03a9f4)" opacity="0.7"/>
              <text x="${p-u-100}" y="${_+14}" class="chart-text" font-size="11px">Consumption</text>
              <line x1="${p-u-120}" y1="${_+25}" x2="${p-u-105}" y2="${_+25}" 
                stroke="var(--accent-color, #ff9800)" stroke-width="2" stroke-dasharray="5,5"/>
              <text x="${p-u-95}" y="${_+29}" class="chart-text" font-size="11px" fill="var(--accent-color, #ff9800)">Cost</text>
            `:""}
            ${this.config.show_moving_average?W`
              <line x1="${g+10}" y1="${_+10}" x2="${g+25}" y2="${_+10}" 
                stroke="var(--info-color, #2196f3)" stroke-width="2" stroke-dasharray="3,3" opacity="0.8"/>
              <text x="${g+30}" y="${_+14}" class="chart-text" font-size="11px" fill="var(--info-color, #2196f3)">
                ${this.config.moving_average_days||7}-day avg
              </text>
            `:""}
          </g>
        `:""}
      </svg>
    `}_renderComparison(){if(!this._comparisonResult||!this._comparisonResult.tariffs||0===this._comparisonResult.tariffs.length)return W`<p>No comparison data available</p>`;const t=[...this._comparisonResult.tariffs].sort((t,e)=>t.total_cost-e.total_cost),e=this._comparisonResult.best_tariff?.entry_id,r=this._comparisonResult.tariffs[0],o=r?.period_breakdown;return W`
      <!-- Consumption Summary -->
      ${o?W`
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

            ${this._renderPeriodBreakdown(t.period_breakdown,t)}
          </div>
        `)}
      </div>

      ${this._comparisonResult.savings?W`
        <div class="savings-info">
          <strong>Potential Savings:</strong> €${this._comparisonResult.savings.amount.toFixed(2)} 
          (${this._comparisonResult.savings.percentage.toFixed(1)}%) by choosing the best tariff
        </div>
      `:""}
    `}_renderPeriodBreakdown(t,e){const r=Math.max(t.p1_consumption,t.p2_consumption,t.p3_consumption);let o=0,i=0,s=0;if(e.hourly_breakdown&&e.hourly_breakdown.length>0)for(const t of e.hourly_breakdown)"P1"===t.period&&t.consumption>0?o+=t.cost:"P2"===t.period&&t.consumption>0?i+=t.cost:"P3"===t.period&&t.consumption>0&&(s+=t.cost);const a=t.p1_consumption>0?o/t.p1_consumption:0,n=t.p2_consumption>0?i/t.p2_consumption:0,c=t.p3_consumption>0?s/t.p3_consumption:0;return W`
      <div class="period-breakdown">
        <div class="period-breakdown-title">Consumption by Period</div>
        <div class="period-bars">
          <div class="period-bar">
            <div
              class="period-bar-fill p1"
              style="height: ${r>0?t.p1_consumption/r*100:0}%"
            ></div>
            <div class="period-bar-label">
              <strong>P1 Peak</strong><br>
              ${t.p1_consumption.toFixed(2)} kWh<br>
              ${t.p1_percentage.toFixed(1)}%<br>
              ${o>0?W`<span class="cost-per-kwh">€${a.toFixed(3)}/kWh</span>`:""}
            </div>
          </div>
          <div class="period-bar">
            <div
              class="period-bar-fill p2"
              style="height: ${r>0?t.p2_consumption/r*100:0}%"
            ></div>
            <div class="period-bar-label">
              <strong>P2 Flat</strong><br>
              ${t.p2_consumption.toFixed(2)} kWh<br>
              ${t.p2_percentage.toFixed(1)}%<br>
              ${i>0?W`<span class="cost-per-kwh">€${n.toFixed(3)}/kWh</span>`:""}
            </div>
          </div>
          <div class="period-bar">
            <div
              class="period-bar-fill p3"
              style="height: ${r>0?t.p3_consumption/r*100:0}%"
            ></div>
            <div class="period-bar-label">
              <strong>P3 Valley</strong><br>
              ${t.p3_consumption.toFixed(2)} kWh<br>
              ${t.p3_percentage.toFixed(1)}%<br>
              ${s>0?W`<span class="cost-per-kwh">€${c.toFixed(3)}/kWh</span>`:""}
            </div>
          </div>
        </div>
      </div>
    `}static getStubConfig(){return{type:"custom:octopus-consumption-card",source_entry_id:"",show_comparison:!0,default_period:"week",chart_type:"line",show_tariff_comparison:!1,tariff_entry_ids:[],show_cost_on_chart:!1,show_navigation:!0,show_period_distribution:!1,show_moving_average:!1,moving_average_days:7}}static getConfigElement(){return document.createElement("octopus-consumption-card-editor")}}function $t(){return yt}function xt(){return gt}function bt(){return yt.getStubConfig()}if(yt.enabledWarnings=[],yt.SERVICE_TIMEOUT=1e4,yt.SERVICE_DOMAIN="octopus_energy_es",yt.SERVICE_FETCH_CONSUMPTION="fetch_consumption",yt.SERVICE_COMPARE_TARIFFS="compare_tariffs",yt.styles=a`
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
      margin-bottom: 24px;
      min-height: 300px;
      position: relative;
      width: 100%;
    }

    .chart-svg {
      width: 100%;
      height: 300px;
      display: block;
    }

    .chart-line {
      fill: none;
      stroke: var(--primary-color, #03a9f4);
      stroke-width: 2;
    }

    .chart-line-cost {
      fill: none;
      stroke: var(--accent-color, #ff9800);
      stroke-width: 2;
      stroke-dasharray: 5, 5;
    }

    .chart-line-moving-avg {
      fill: none;
      stroke: var(--info-color, #2196f3);
      stroke-width: 2;
      stroke-dasharray: 3, 3;
      opacity: 0.8;
    }

    .chart-area {
      fill: var(--primary-color, #03a9f4);
      opacity: 0.2;
    }

    .chart-area-p1 {
      fill: var(--error-color, #f44336);
      opacity: 0.6;
    }

    .chart-area-p2 {
      fill: var(--warning-color, #ff9800);
      opacity: 0.6;
    }

    .chart-area-p3 {
      fill: var(--success-color, #4caf50);
      opacity: 0.6;
    }

    .chart-line-p1 {
      stroke: var(--error-color, #f44336);
      stroke-width: 1;
      fill: none;
    }

    .chart-line-p2 {
      stroke: var(--warning-color, #ff9800);
      stroke-width: 1;
      fill: none;
    }

    .chart-line-p3 {
      stroke: var(--success-color, #4caf50);
      stroke-width: 1;
      fill: none;
    }

    .chart-bar {
      fill: var(--primary-color, #03a9f4);
      opacity: 0.7;
    }

    .chart-axis {
      stroke: var(--divider-color, #e0e0e0);
      stroke-width: 1;
    }

    .chart-text {
      fill: var(--secondary-text-color, #888);
      font-size: 12px;
    }

    .chart-grid-line {
      stroke: var(--divider-color, #e0e0e0);
      stroke-width: 1;
      stroke-dasharray: 2, 2;
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
  `,vt([pt({attribute:!1})],yt.prototype,"hass",void 0),vt([pt({attribute:!1})],yt.prototype,"config",void 0),vt([ht()],yt.prototype,"_consumptionData",void 0),vt([ht()],yt.prototype,"_comparisonResult",void 0),vt([ht()],yt.prototype,"_tariffCosts",void 0),vt([ht()],yt.prototype,"_loading",void 0),vt([ht()],yt.prototype,"_error",void 0),vt([ht()],yt.prototype,"_comparisonError",void 0),vt([ht()],yt.prototype,"_currentPeriod",void 0),vt([ht()],yt.prototype,"_currentDate",void 0),"undefined"!=typeof window&&(window.getCardElement=$t,window.getCardConfigElement=xt,window.getStubConfig=bt),"undefined"!=typeof window&&"undefined"!=typeof customElements){try{customElements.get("octopus-consumption-card")||customElements.define("octopus-consumption-card",yt)}catch(t){mt.error("Failed to register octopus-consumption-card: ",t instanceof Error?t.message:String(t))}if(void 0===window.customCards&&(window.customCards=[]),Array.isArray(window.customCards)){window.customCards.some(t=>"custom:octopus-consumption-card"===t.type)||window.customCards.push({type:"custom:octopus-consumption-card",name:"Octopus Energy España Consumption Card",preview:!1,description:"Display consumption data and tariff comparisons for Octopus Energy España"})}window.customCards["octopus-consumption-card"]=yt,window.OctopusConsumptionCard=yt;const t="0.4.60",e=!!customElements.get("octopus-consumption-card");console.groupCollapsed("%c⚡ Octopus Energy España","background: linear-gradient(90deg, #e10090 0%, #c000a0 100%);color: #fff;padding: 4px 8px;border-radius: 4px;font-weight: bold;"),mt.info("Consumption Card",`v${t}`),mt.info(e?"✓ Custom element: ":"✗ Custom element: ","octopus-consumption-card"),mt.success("✓ Added to card picker"),mt.success("✓ Visual editor enabled"),mt.info("ℹ Supported languages: ","en, es, be"),e||mt.error("✗ Registration failed! Element not found in customElements registry"),console.groupEnd()}return t.OctopusConsumptionCard=yt,t.getCardConfigElement=xt,t.getCardElement=$t,t.getStubConfig=bt,t}({});
