var OctopusConsumptionCard=function(t){"use strict";
/**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),r=new WeakMap;let a=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(e,t))}return t}toString(){return this.cssText}};const n=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]);return new a(i,t,o)},s=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new a("string"==typeof t?t:t+"",void 0,o))(e)})(t):t,{is:c,defineProperty:l,getOwnPropertyDescriptor:d,getOwnPropertyNames:h,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,_=globalThis,f=_.trustedTypes,g=f?f.emptyScript:"",m=_.reactiveElementPolyfillSupport,v=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},w=(t,e)=>!c(t,e),b={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:w};
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */Symbol.metadata??=Symbol("metadata"),_.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(t,i,e);void 0!==o&&l(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){const{get:o,set:r}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:o,set(e){const a=o?.call(this);r?.call(this,e),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,e=[...h(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(s(t))}else void 0!==t&&e.push(s(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,o)=>{if(i)t.adoptedStyleSheets=o.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of o){const o=document.createElement("style"),r=e.litNonce;void 0!==r&&o.setAttribute("nonce",r),o.textContent=i.cssText,t.appendChild(o)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(void 0!==o&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,o=i._$Eh.get(t);if(void 0!==o&&this._$Em!==o){const t=i.getPropertyOptions(o),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=o;const a=r.fromAttribute(e,t.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(t,e,i,o=!1,r){if(void 0!==t){const a=this.constructor;if(!1===o&&(r=this[t]),i??=a.getPropertyOptions(t),!((i.hasChanged??w)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(a._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:o,wrapped:r},a){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??e??this[t]),!0!==r||void 0!==a)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===o&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,o=this[e];!0!==t||this._$AL.has(e)||void 0===o||this.C(e,void 0,i,o)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[v("elementProperties")]=new Map,x[v("finalized")]=new Map,m?.({ReactiveElement:x}),(_.reactiveElementVersions??=[]).push("2.1.2");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const $=globalThis,k=t=>t,C=$.trustedTypes,S=C?C.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",P=`lit$${Math.random().toFixed(9).slice(2)}$`,D="?"+P,A=`<${D}>`,T=document,M=()=>T.createComment(""),O=t=>null===t||"object"!=typeof t&&"function"!=typeof t,F=Array.isArray,R="[ \t\n\f\r]",W=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,L=/-->/g,I=/>/g,V=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),N=/'/g,U=/"/g,H=/^(?:script|style|textarea|title)$/i,z=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),Y=Symbol.for("lit-noChange"),j=Symbol.for("lit-nothing"),B=new WeakMap,q=T.createTreeWalker(T,129);function J(t,e){if(!F(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const G=(t,e)=>{const i=t.length-1,o=[];let r,a=2===e?"<svg>":3===e?"<math>":"",n=W;for(let e=0;e<i;e++){const i=t[e];let s,c,l=-1,d=0;for(;d<i.length&&(n.lastIndex=d,c=n.exec(i),null!==c);)d=n.lastIndex,n===W?"!--"===c[1]?n=L:void 0!==c[1]?n=I:void 0!==c[2]?(H.test(c[2])&&(r=RegExp("</"+c[2],"g")),n=V):void 0!==c[3]&&(n=V):n===V?">"===c[0]?(n=r??W,l=-1):void 0===c[1]?l=-2:(l=n.lastIndex-c[2].length,s=c[1],n=void 0===c[3]?V:'"'===c[3]?U:N):n===U||n===N?n=V:n===L||n===I?n=W:(n=V,r=void 0);const h=n===V&&t[e+1].startsWith("/>")?" ":"";a+=n===W?i+A:l>=0?(o.push(s),i.slice(0,l)+E+i.slice(l)+P+h):i+P+(-2===l?e:h)}return[J(t,a+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),o]};class X{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let r=0,a=0;const n=t.length-1,s=this.parts,[c,l]=G(t,e);if(this.el=X.createElement(c,i),q.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=q.nextNode())&&s.length<n;){if(1===o.nodeType){if(o.hasAttributes())for(const t of o.getAttributeNames())if(t.endsWith(E)){const e=l[a++],i=o.getAttribute(t).split(P),n=/([.?@])?(.*)/.exec(e);s.push({type:1,index:r,name:n[2],strings:i,ctor:"."===n[1]?et:"?"===n[1]?it:"@"===n[1]?ot:tt}),o.removeAttribute(t)}else t.startsWith(P)&&(s.push({type:6,index:r}),o.removeAttribute(t));if(H.test(o.tagName)){const t=o.textContent.split(P),e=t.length-1;if(e>0){o.textContent=C?C.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],M()),q.nextNode(),s.push({type:2,index:++r});o.append(t[e],M())}}}else if(8===o.nodeType)if(o.data===D)s.push({type:2,index:r});else{let t=-1;for(;-1!==(t=o.data.indexOf(P,t+1));)s.push({type:7,index:r}),t+=P.length-1}r++}}static createElement(t,e){const i=T.createElement("template");return i.innerHTML=t,i}}function K(t,e,i=t,o){if(e===Y)return e;let r=void 0!==o?i._$Co?.[o]:i._$Cl;const a=O(e)?void 0:e._$litDirective$;return r?.constructor!==a&&(r?._$AO?.(!1),void 0===a?r=void 0:(r=new a(t),r._$AT(t,i,o)),void 0!==o?(i._$Co??=[])[o]=r:i._$Cl=r),void 0!==r&&(e=K(t,r._$AS(t,e.values),r,o)),e}class Z{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,o=(t?.creationScope??T).importNode(e,!0);q.currentNode=o;let r=q.nextNode(),a=0,n=0,s=i[0];for(;void 0!==s;){if(a===s.index){let e;2===s.type?e=new Q(r,r.nextSibling,this,t):1===s.type?e=new s.ctor(r,s.name,s.strings,this,t):6===s.type&&(e=new rt(r,this,t)),this._$AV.push(e),s=i[++n]}a!==s?.index&&(r=q.nextNode(),a++)}return q.currentNode=T,o}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,o){this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=K(this,t,e),O(t)?t===j||null==t||""===t?(this._$AH!==j&&this._$AR(),this._$AH=j):t!==this._$AH&&t!==Y&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>F(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==j&&O(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,o="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=X.createElement(J(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(e);else{const t=new Z(o,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=B.get(t.strings);return void 0===e&&B.set(t.strings,e=new X(t)),e}k(t){F(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const r of t)o===e.length?e.push(i=new Q(this.O(M()),this.O(M()),this,this.options)):i=e[o],i._$AI(r),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=k(t).nextSibling;k(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,o,r){this.type=1,this._$AH=j,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=j}_$AI(t,e=this,i,o){const r=this.strings;let a=!1;if(void 0===r)t=K(this,t,e,0),a=!O(t)||t!==this._$AH&&t!==Y,a&&(this._$AH=t);else{const o=t;let n,s;for(t=r[0],n=0;n<r.length-1;n++)s=K(this,o[i+n],e,n),s===Y&&(s=this._$AH[n]),a||=!O(s)||s!==this._$AH[n],s===j?t=j:t!==j&&(t+=(s??"")+r[n+1]),this._$AH[n]=s}a&&!o&&this.j(t)}j(t){t===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===j?void 0:t}}class it extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==j)}}class ot extends tt{constructor(t,e,i,o,r){super(t,e,i,o,r),this.type=5}_$AI(t,e=this){if((t=K(this,t,e,0)??j)===Y)return;const i=this._$AH,o=t===j&&i!==j||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==j&&(i===j||o);o&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class rt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const at=$.litHtmlPolyfillSupport;at?.(X,Q),($.litHtmlVersions??=[]).push("3.3.2");const nt=globalThis;
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */class st extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const o=i?.renderBefore??e;let r=o._$litPart$;if(void 0===r){const t=i?.renderBefore??null;o._$litPart$=r=new Q(e.insertBefore(M(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Y}}st._$litElement$=!0,st.finalized=!0,nt.litElementHydrateSupport?.({LitElement:st});const ct=nt.litElementPolyfillSupport;ct?.({LitElement:st}),(nt.litElementVersions??=[]).push("4.2.2");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const lt={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:w},dt=(t=lt,e,i)=>{const{kind:o,metadata:r}=i;let a=globalThis.litPropertyMetadata.get(r);if(void 0===a&&globalThis.litPropertyMetadata.set(r,a=new Map),"setter"===o&&((t=Object.create(t)).wrapped=!0),a.set(i.name,t),"accessor"===o){const{name:o}=i;return{set(i){const r=e.get.call(this);e.set.call(this,i),this.requestUpdate(o,r,t,!0,i)},init(e){return void 0!==e&&this.C(o,void 0,t,e),e}}}if("setter"===o){const{name:o}=i;return function(i){const r=this[o];e.call(this,i),this.requestUpdate(o,r,t,!0,i)}}throw Error("Unsupported decorator location: "+o)};function ht(t){return(e,i)=>"object"==typeof i?dt(t,e,i):((t,e,i)=>{const o=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),o?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function pt(t){return ht({...t,state:!0,attribute:!1})}const ut={en:{"editor.basic_settings":"Basic Settings","editor.source_entry_id_label":"Primary Tariff","editor.source_entry_id_helper":"Select the Octopus Energy tariff to display consumption data for","editor.display_options":"Display Options","editor.default_period_label":"Default Period","editor.default_period_helper":"Initial time period to display","editor.chart_type_label":"Chart Type","editor.chart_type_helper":"Type of chart to display","editor.show_navigation_label":"Show Navigation","editor.show_navigation_helper":"Show period navigation buttons","editor.tariff_comparison":"Tariff Comparison","editor.tariff_entry_ids_label":"Comparison Tariffs","editor.tariff_entry_ids_helper":"Optional: Select additional tariffs to compare costs","editor.cost_display":"Cost Display","editor.show_cost_on_chart_label":"Show Cost on Chart","editor.show_cost_on_chart_helper":"Display cost information on the chart","editor.selected_tariff_for_cost_label":"Selected Tariff for Cost","editor.selected_tariff_for_cost_helper":"Tariff entry ID to use for cost calculation","editor.consumption_sensor_label":"Consumption Sensor Override","editor.consumption_sensor_helper":"Optional: Manually specify a consumption sensor instead of using integration data","editor.migration_warning":"Configuration migration required. Please edit the card and select your tariff.","editor.select_tariff":"Select a tariff to get started","editor.view_label":"View","editor.view_helper":"Select which view to display","editor.view_consumption":"Consumption Overview","editor.view_heat_calendar":"Heat Calendar","editor.view_week_analysis":"Week Analysis","editor.view_tariff_comparison":"Tariff Comparison","editor.chart_type_line":"Line","editor.chart_type_bar":"Bar","editor.chart_type_stacked_area":"Stacked Area","editor.advanced_visualization":"Advanced Visualization","editor.show_period_distribution_label":"Show Period Distribution","editor.show_period_distribution_helper":"Show P1/P2/P3 consumption breakdown on chart","editor.show_moving_average_label":"Show Moving Average","editor.show_moving_average_helper":"Display trend line with moving average","editor.moving_average_days_label":"Moving Average Days","editor.moving_average_days_helper":"Number of days for moving average calculation (default: 7)","editor.period_day":"Day","editor.period_week":"Week","editor.period_month":"Month","editor.heat_calendar_period_label":"Heat Calendar Period","editor.heat_calendar_period_helper":"Time period for heat calendar display","editor.heat_calendar_period_month":"Month","editor.heat_calendar_period_year":"Year","editor.show_week_comparison_label":"Show Week Comparison","editor.show_week_comparison_helper":"Compare consumption across consecutive weeks","editor.week_comparison_count_label":"Week Comparison Count","editor.week_comparison_count_helper":"Number of weeks to compare (default: 2)","editor.show_cost_trend_label":"Show Cost Trend","editor.show_cost_trend_helper":"Display cost trend with moving average","editor.cost_moving_average_days_label":"Cost Moving Average Days","editor.cost_moving_average_days_helper":"Number of days for cost moving average (default: 30)","editor.show_tariff_chart_label":"Show Tariff Chart","editor.show_tariff_chart_helper":"Display visual chart in tariff comparison section"},es:{"editor.basic_settings":"Configuración Básica","editor.source_entry_id_label":"Tarifa Principal","editor.source_entry_id_helper":"Selecciona la tarifa de Octopus Energy para mostrar datos de consumo","editor.display_options":"Opciones de Visualización","editor.default_period_label":"Período Predeterminado","editor.default_period_helper":"Período de tiempo inicial a mostrar","editor.chart_type_label":"Tipo de Gráfico","editor.chart_type_helper":"Tipo de gráfico a mostrar","editor.show_navigation_label":"Mostrar Navegación","editor.show_navigation_helper":"Mostrar botones de navegación de período","editor.tariff_comparison":"Comparación de Tarifas","editor.tariff_entry_ids_label":"Tarifas de Comparación","editor.tariff_entry_ids_helper":"Opcional: Selecciona tarifas adicionales para comparar costes","editor.cost_display":"Visualización de Costes","editor.show_cost_on_chart_label":"Mostrar Coste en Gráfico","editor.show_cost_on_chart_helper":"Mostrar información de costes en el gráfico","editor.selected_tariff_for_cost_label":"Tarifa Seleccionada para Coste","editor.selected_tariff_for_cost_helper":"ID de entrada de tarifa a usar para cálculo de costes","editor.consumption_sensor_label":"Sensor de Consumo Manual","editor.consumption_sensor_helper":"Opcional: Especifica manualmente un sensor de consumo en lugar de usar datos de integración","editor.migration_warning":"Se requiere migración de configuración. Por favor, edita la tarjeta y selecciona tu tarifa.","editor.select_tariff":"Selecciona una tarifa para comenzar","editor.view_label":"Vista","editor.view_helper":"Selecciona qué vista mostrar","editor.view_consumption":"Resumen de Consumo","editor.view_heat_calendar":"Calendario de Calor","editor.view_week_analysis":"Análisis Semanal","editor.view_tariff_comparison":"Comparación de Tarifas","editor.chart_type_line":"Línea","editor.chart_type_bar":"Barras","editor.chart_type_stacked_area":"Área Apilada","editor.advanced_visualization":"Visualización Avanzada","editor.show_period_distribution_label":"Mostrar Distribución por Períodos","editor.show_period_distribution_helper":"Mostrar desglose de consumo P1/P2/P3 en el gráfico","editor.show_moving_average_label":"Mostrar Media Móvil","editor.show_moving_average_helper":"Mostrar línea de tendencia con media móvil","editor.moving_average_days_label":"Días de Media Móvil","editor.moving_average_days_helper":"Número de días para el cálculo de la media móvil (predeterminado: 7)","editor.period_day":"Día","editor.period_week":"Semana","editor.period_month":"Mes","editor.heat_calendar_period_label":"Período del Calendario de Calor","editor.heat_calendar_period_helper":"Período de tiempo para el calendario de calor","editor.heat_calendar_period_month":"Mes","editor.heat_calendar_period_year":"Año","editor.show_week_comparison_label":"Mostrar Comparación Semanal","editor.show_week_comparison_helper":"Comparar consumo entre semanas consecutivas","editor.week_comparison_count_label":"Número de Semanas a Comparar","editor.week_comparison_count_helper":"Número de semanas para comparar (predeterminado: 2)","editor.show_cost_trend_label":"Mostrar Tendencia de Costes","editor.show_cost_trend_helper":"Mostrar tendencia de costes con media móvil","editor.cost_moving_average_days_label":"Días de Media Móvil de Costes","editor.cost_moving_average_days_helper":"Número de días para la media móvil de costes (predeterminado: 30)","editor.show_tariff_chart_label":"Mostrar Gráfico de Tarifas","editor.show_tariff_chart_helper":"Mostrar gráfico visual en la sección de comparación de tarifas"},be:{"editor.basic_settings":"Асноўныя налады","editor.source_entry_id_label":"Асноўны тарыф","editor.source_entry_id_helper":"Выберыце тарыф Octopus Energy для адлюстравання даных спажывання","editor.display_options":"Параметры адлюстравання","editor.default_period_label":"Перыяд па змаўчанні","editor.default_period_helper":"Пачатковы часовы перыяд для адлюстравання","editor.chart_type_label":"Тып дыяграмы","editor.chart_type_helper":"Тып дыяграмы для адлюстравання","editor.show_navigation_label":"Паказаць навігацыю","editor.show_navigation_helper":"Паказаць кнопкі навігацыі па перыядах","editor.tariff_comparison":"Параўнанне тарыфаў","editor.tariff_entry_ids_label":"Тарыфы для параўнання","editor.tariff_entry_ids_helper":"Неабавязкова: Выберыце дадатковыя тарыфы для параўнання кошту","editor.cost_display":"Адлюстраванне кошту","editor.show_cost_on_chart_label":"Паказаць кошт на дыяграме","editor.show_cost_on_chart_helper":"Адлюстраваць інфармацыю аб кошце на дыяграме","editor.selected_tariff_for_cost_label":"Выбраны тарыф для кошту","editor.selected_tariff_for_cost_helper":"ID запісу тарыфу для разліку кошту","editor.consumption_sensor_label":"Ручны сенсар спажывання","editor.consumption_sensor_helper":"Неабавязкова: Укажыце сенсар спажывання ўручную замест выкарыстання даных інтэграцыі","editor.migration_warning":"Патрабуецца міграцыя канфігурацыі. Калі ласка, адрэдагуйце картку і выберыце свой тарыф.","editor.select_tariff":"Выберыце тарыф для пачатку","editor.view_label":"Выгляд","editor.view_helper":"Выберыце, які выгляд адлюстраваць","editor.view_consumption":"Агляд спажывання","editor.view_heat_calendar":"Каляндар цяпла","editor.view_week_analysis":"Тыднёвы аналіз","editor.view_tariff_comparison":"Параўнанне тарыфаў","editor.chart_type_line":"Лінія","editor.chart_type_bar":"Слупкі","editor.chart_type_stacked_area":"Стопачная дыяграма","editor.advanced_visualization":"Пашыраная візуалізацыя","editor.show_period_distribution_label":"Паказаць размеркаванне па перыядах","editor.show_period_distribution_helper":"Паказаць разбіўку спажывання P1/P2/P3 на дыяграме","editor.show_moving_average_label":"Паказаць рухомае сярэдняе","editor.show_moving_average_helper":"Паказаць лінію трэнду з рухомым сярэднім","editor.moving_average_days_label":"Дні рухомага сярэдняга","editor.moving_average_days_helper":"Колькасць дзён для разліку рухомага сярэдняга (па змаўчанні: 7)","editor.period_day":"Дзень","editor.period_week":"Тыдзень","editor.period_month":"Месяц","editor.heat_calendar_period_label":"Перыяд каляндара цяпла","editor.heat_calendar_period_helper":"Часавы перыяд для адлюстравання каляндара цяпла","editor.heat_calendar_period_month":"Месяц","editor.heat_calendar_period_year":"Год","editor.show_week_comparison_label":"Паказаць параўнанне тыдняў","editor.show_week_comparison_helper":"Параўнаць спажыванне паміж паслядоўнымі тыднямі","editor.week_comparison_count_label":"Колькасць тыдняў для параўнання","editor.week_comparison_count_helper":"Колькасць тыдняў для параўнання (па змаўчанні: 2)","editor.show_cost_trend_label":"Паказаць трэнд кошту","editor.show_cost_trend_helper":"Адлюстраваць трэнд кошту з рухомым сярэднім","editor.cost_moving_average_days_label":"Дні рухомага сярэдняга кошту","editor.cost_moving_average_days_helper":"Колькасць дзён для рухомага сярэдняга кошту (па змаўчанні: 30)","editor.show_tariff_chart_label":"Паказаць дыяграму тарыфаў","editor.show_tariff_chart_helper":"Адлюстраваць візуальную дыяграму ў раздзеле параўнання тарыфаў"}};function _t(t,e="en"){const i=e.toLowerCase(),o=ut[i]?.[t]||ut.en?.[t];return o||t.replace("editor.","").replace(/_/g," ")}const ft=n`
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
`,gt=n`
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
`;var mt=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};void 0!==st&&st.disableWarning&&st.disableWarning("change-in-update");class vt extends st{constructor(){super(...arguments),this._config={type:"custom:octopus-consumption-card",source_entry_id:"",view:"consumption",default_period:"week",chart_type:"line",tariff_entry_ids:[],show_cost_on_chart:!1,show_navigation:!0,show_period_distribution:!1,show_moving_average:!1,moving_average_days:7},this._language="en",this._computeLabel=t=>function(t,e="en"){return _t(`editor.${t.name}_label`,e)}(t,this._language),this._computeHelper=t=>function(t,e="en"){return _t(`editor.${t.name}_helper`,e)}(t,this._language)}_applyDefaults(t){return{type:t.type||"custom:octopus-consumption-card",source_entry_id:t.source_entry_id||"",view:t.view||"consumption",default_period:t.default_period||"week",chart_type:t.chart_type||"line",tariff_entry_ids:t.tariff_entry_ids||[],show_cost_on_chart:void 0!==t.show_cost_on_chart&&t.show_cost_on_chart,show_navigation:void 0===t.show_navigation||t.show_navigation,show_period_distribution:void 0!==t.show_period_distribution&&t.show_period_distribution,show_moving_average:void 0!==t.show_moving_average&&t.show_moving_average,moving_average_days:t.moving_average_days||7,heat_calendar_period:t.heat_calendar_period||"month",show_week_comparison:void 0!==t.show_week_comparison&&t.show_week_comparison,week_comparison_count:t.week_comparison_count||2,show_cost_trend:void 0!==t.show_cost_trend&&t.show_cost_trend,cost_moving_average_days:t.cost_moving_average_days||30,show_tariff_chart:void 0===t.show_tariff_chart||t.show_tariff_chart,selected_tariff_for_cost:t.selected_tariff_for_cost,consumption_sensor:t.consumption_sensor}}setConfig(t){const e=this._applyDefaults(t);JSON.stringify(this._config)!==JSON.stringify(e)&&(this._config=e)}willUpdate(t){if(t.has("config")&&this.config){const t=this._applyDefaults(this.config);JSON.stringify(this._config)!==JSON.stringify(t)&&(this._config=t)}if(t.has("hass")&&this.hass){const t=this.hass.language||"en";this._language!==t&&(this._language=t)}}firstUpdated(){if(this.config){const t=this._applyDefaults(this.config);JSON.stringify(this._config)!==JSON.stringify(t)&&(this._config=t)}this.hass&&(this._language=this.hass.language||"en")}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.detail.value;e.view||(e.view="consumption");const i=this._config.view!==e.view;!1===e.show_cost_on_chart&&(e.selected_tariff_for_cost=void 0),!1===e.show_cost_on_chart&&(e.selected_tariff_for_cost=void 0),this._config=e,i&&this.requestUpdate(),this._fireConfigChanged()}_fireConfigChanged(){const t=new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0});this.dispatchEvent(t)}_buildSchema(){const t=this._config.view||"consumption",e=[{name:"view",selector:{select:{mode:"dropdown",options:[{value:"consumption",label:_t("editor.view_consumption",this._language)},{value:"heat-calendar",label:_t("editor.view_heat_calendar",this._language)},{value:"week-analysis",label:_t("editor.view_week_analysis",this._language)},{value:"tariff-comparison",label:_t("editor.view_tariff_comparison",this._language)}]}}},{name:"source_entry_id",required:!0,selector:{config_entry:{integration:"octopus_energy_es"}}}];return"consumption"===t?(e.push({name:"default_period",selector:{select:{mode:"dropdown",options:[{value:"day",label:_t("editor.period_day",this._language)},{value:"week",label:_t("editor.period_week",this._language)},{value:"month",label:_t("editor.period_month",this._language)}]}}},{name:"chart_type",selector:{select:{mode:"dropdown",options:[{value:"line",label:_t("editor.chart_type_line",this._language)},{value:"bar",label:_t("editor.chart_type_bar",this._language)},{value:"stacked-area",label:_t("editor.chart_type_stacked_area",this._language)}]}}},{name:"show_navigation",selector:{boolean:{}}},{name:"show_period_distribution",selector:{boolean:{}}},{name:"show_moving_average",selector:{boolean:{}}}),this._config.show_moving_average&&e.push({name:"moving_average_days",selector:{number:{min:2,max:30,mode:"box"}}}),e.push({name:"show_cost_on_chart",selector:{boolean:{}}}),this._config.show_cost_on_chart&&e.push({name:"selected_tariff_for_cost",selector:{config_entry:{integration:"octopus_energy_es"}}}),e.push({name:"show_cost_trend",selector:{boolean:{}}}),this._config.show_cost_trend&&e.push({name:"cost_moving_average_days",selector:{number:{min:2,max:90,mode:"box"}}})):"heat-calendar"===t?e.push({name:"heat_calendar_period",selector:{select:{mode:"dropdown",options:[{value:"month",label:_t("editor.heat_calendar_period_month",this._language)},{value:"year",label:_t("editor.heat_calendar_period_year",this._language)}]}}},{name:"show_navigation",selector:{boolean:{}}}):"week-analysis"===t?(e.push({name:"show_week_comparison",selector:{boolean:{}}},{name:"show_navigation",selector:{boolean:{}}}),this._config.show_week_comparison&&e.push({name:"week_comparison_count",selector:{number:{min:2,max:8,mode:"box"}}})):"tariff-comparison"===t&&e.push({name:"show_tariff_chart",selector:{boolean:{}}}),e.push({name:"consumption_sensor",selector:{entity:{domain:"sensor"}}}),e}_handleTariffSelection(t,e){const i=e.detail.value;this._config.tariff_entry_ids||(this._config.tariff_entry_ids=[]);const o=[...this._config.tariff_entry_ids];for(;o.length<=t;)o.push("");if(i){const e=o.findIndex((e,o)=>o!==t&&e===i);-1!==e&&(o[e]=""),o[t]=i,this._config.tariff_entry_ids=o.filter((t,e,i)=>t&&i.indexOf(t)===e)}else o.splice(t,1),this._config.tariff_entry_ids=o.filter(t=>t);this.requestUpdate(),this._fireConfigChanged()}_removeTariff(t){if(!this._config.tariff_entry_ids||t>=this._config.tariff_entry_ids.length)return;const e=[...this._config.tariff_entry_ids];e.splice(t,1),this._config.tariff_entry_ids=e.filter(t=>t),this.requestUpdate(),this._fireConfigChanged()}_renderTariffDropdowns(){const t=this._config.tariff_entry_ids||[],e=t.length>0?t.length+1:1;return z`
      <div class="form-group">
        <label>${_t("editor.tariff_entry_ids_label",this._language)}</label>
        <div class="tariff-dropdown-list">
          ${Array.from({length:e},(e,i)=>{const o=t[i]||"";return z`
              <div class="tariff-dropdown-item">
                <ha-selector
                  .hass=${this.hass}
                  .selector=${{config_entry:{integration:"octopus_energy_es"}}}
                  .value=${o}
                  .label=${0===i?_t("editor.tariff_entry_ids_helper",this._language):""}
                  @value-changed=${t=>this._handleTariffSelection(i,t)}
                ></ha-selector>
                ${o?z`
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
    `}render(){if(!this.hass)return z`<div class="card-config">Loading...</div>`;const t=this._buildSchema(),e=this._config.view||"consumption";return z`
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
        
        ${"tariff-comparison"===e?this._renderTariffDropdowns():""}
      </div>
    `}}vt.enabledWarnings=[],vt.styles=gt,mt([ht({attribute:!1})],vt.prototype,"hass",void 0),mt([ht({attribute:!1})],vt.prototype,"config",void 0),mt([pt()],vt.prototype,"_config",void 0),"undefined"!=typeof window&&"undefined"!=typeof customElements&&(customElements.get("octopus-consumption-card-editor")||customElements.define("octopus-consumption-card-editor",vt));class yt{static info(t,...e){const i=[t,this.STYLES.info];e.forEach((t,e)=>{i.push(t,e%2==0?this.STYLES.infoValue:this.STYLES.info)}),console.log(...i)}static error(t,e){e?console.error(`%c${t}%c${e}`,this.STYLES.error,this.STYLES.errorValue):console.error(`%c${t}`,this.STYLES.error)}static warn(t,e){e?console.warn(`%c${t}%c${e}`,this.STYLES.warning,this.STYLES.warningValue):console.warn(`%c${t}`,this.STYLES.warning)}static success(t){console.log(`%c${t}`,this.STYLES.success)}static data(t,e){console.log(`%c  ${t}: %c${JSON.stringify(e,null,2)}`,this.STYLES.info,this.STYLES.infoValue)}static serviceCall(t,e,i=!1){this.info("  Calling service: ",`${t}.${e}${i?" (with return_response)":""}`)}static serviceData(t){this.data("Service data",t)}static serviceResponse(t){this.data("Raw Service Response",t)}static serviceError(t){console.error("%c  Service Error Details: %c"+JSON.stringify(t,Object.getOwnPropertyNames(t),2),this.STYLES.info,this.STYLES.errorValue)}static groupServiceCall(t,e){console.groupCollapsed(`%c🔧 Service Call: %c${t}.${e}`,this.STYLES.info,this.STYLES.infoValue)}static groupEnd(){console.groupEnd()}static groupDataLoad(t,e,i){console.groupCollapsed(`%c📊 Loading Data: %cEntry: ${t} | Period: ${e} | ${i}`,this.STYLES.info,this.STYLES.infoValue)}static groupError(t){console.groupCollapsed(`%c❌ ${t}`,this.STYLES.error)}}yt.STYLES={info:"color: #666; font-size: 11px;",infoValue:"color: #999; font-size: 11px; font-family: monospace;",error:"color: #f00; font-size: 11px; font-weight: bold;",errorValue:"color: #f00; font-size: 11px;",warning:"color: #ff9800; font-size: 11px;",warningValue:"color: #ff9800; font-size: 11px;",success:"color: #4caf50; font-size: 11px;"};const wt={linear:t=>t,easeIn:t=>t*t,easeOut:t=>t*(2-t),easeInOut:t=>t<.5?2*t*t:(4-2*t)*t-1};class bt{constructor(){this.animationFrameId=null,this.startTime=0,this.isAnimating=!1}animate(t,e,i,o,r,a=0){return new Promise(n=>{a>0?setTimeout(()=>{this._startAnimation(t,e,i,o,r,n)},a):this._startAnimation(t,e,i,o,r,n)})}_startAnimation(t,e,i,o,r,a){this.isAnimating=!0,this.startTime=performance.now();const n=wt[o]||wt.linear,s=e-t,c=e=>{const o=e-this.startTime,l=Math.min(o/i,1),d=n(l);r(t+s*d),l<1?this.animationFrameId=requestAnimationFrame(c):(this.isAnimating=!1,this.animationFrameId=null,a())};this.animationFrameId=requestAnimationFrame(c)}cancel(){null!==this.animationFrameId&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null,this.isAnimating=!1)}get animating(){return this.isAnimating}async animateSequence(t){for(const e of t)await this.animate(e.from,e.to,e.duration,e.easing,e.callback,e.delay)}async animateParallel(t){await Promise.all(t.map(t=>this.animate(t.from,t.to,t.duration,t.easing,t.callback,t.delay)))}}function xt(t,e,i,o,r){const{width:a,height:n,padding:s}=e,c=a-s.left-s.right,l=n-s.top-s.bottom,d=o-i||1,h=t.length>1?c/(t.length-1):0;return t.map((t,e)=>({x:s.left+e*h,y:s.top+l-(t-i)/d*l,value:t,label:r?.[e],timestamp:r?.[e]}))}function $t(t,e,i,o){const{height:r,padding:a}=o,n=r-a.top-a.bottom,s=e-t||1,c=[];for(let e=0;e<=i;e++){const o=t+s*e/i,r=a.top+n-e/i*n;c.push({value:o,y:r})}return c}function kt(t,e){if(0===t.length)return[];const i=[],o=Math.max(1,Math.floor(t.length/12));for(let r=0;r<t.length;r+=o){const o=t[r];o?.timestamp&&i.push({label:e(o.timestamp),x:o.x})}if(t.length>0){const o=t[t.length-1],r=i[i.length-1];!o?.timestamp||r&&r.x===o.x||i.push({label:e(o.timestamp),x:o.x})}return i}function Ct(t,e){const{width:i,padding:o}=e,r=o.left,a=i-o.right;return t.map(t=>({x1:r,y1:t.y,x2:a,y2:t.y}))}function St(t,e){try{const i=new Date(t);if("day"===e)return i.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",hour12:!1});if("week"===e){return`Week ${function(t){const e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate())),i=e.getUTCDay()||7;e.setUTCDate(e.getUTCDate()+4-i);const o=new Date(Date.UTC(e.getUTCFullYear(),0,1));return Math.ceil(((e.getTime()-o.getTime())/864e5+1)/7)}(At(i))}`}if("month"===e)return i.toLocaleDateString("en-US",{day:"numeric"});if("year"===e){return["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"][i.getMonth()]}return["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"][i.getMonth()]}catch{return t.split("T")[0]}}function Et(t,e=1){return t.toFixed(e)}function Pt(t,e){if(0===t.length||0===e.length)return{values:[],timestamps:[]};const i=new Map;for(let o=0;o<t.length;o++){const r=At(new Date(e[o])),a=r.toISOString().split("T")[0];i.has(a)||i.set(a,{sum:0,count:0,weekStart:r});const n=i.get(a);n.sum+=t[o],n.count+=1}const o=Array.from(i.entries()).sort((t,e)=>t[1].weekStart.getTime()-e[1].weekStart.getTime());return{values:o.map(t=>t[1].sum),timestamps:o.map(t=>t[1].weekStart.toISOString())}}function Dt(t,e){if(0===t.length||0===e.length)return{values:[],timestamps:[]};const i=new Map;for(let o=0;o<t.length;o++){const r=new Date(e[o]),a=new Date(r.getFullYear(),r.getMonth(),1),n=`${r.getFullYear()}-${String(r.getMonth()+1).padStart(2,"0")}`;i.has(n)||i.set(n,{sum:0,count:0,monthStart:a});const s=i.get(n);s.sum+=t[o],s.count+=1}const o=Array.from(i.entries()).sort((t,e)=>t[1].monthStart.getTime()-e[1].monthStart.getTime());return{values:o.map(t=>t[1].sum),timestamps:o.map(t=>t[1].monthStart.toISOString())}}function At(t){const e=new Date(t),i=e.getDay(),o=e.getDate()-i+(0===i?-6:1),r=new Date(e.setDate(o));return r.setHours(0,0,0,0),r}class Tt{constructor(t,e){this.ctx=t,this.config=e}clear(){const{width:t,height:e}=this.config;this.ctx.clearRect(0,0,t,e)}drawGridLines(t,e){this.ctx.save(),this.ctx.strokeStyle=e,this.ctx.lineWidth=1,this.ctx.globalAlpha=.2,this.ctx.setLineDash([]),t.forEach(t=>{this.ctx.beginPath(),this.ctx.moveTo(t.x1,t.y1),this.ctx.lineTo(t.x2,t.y2),this.ctx.stroke()}),this.ctx.restore()}drawAxes(t,e,i){const{width:o,height:r,padding:a}=this.config,n=a.left;a.right;const s=r-a.bottom;if(this.ctx.save(),this.ctx.strokeStyle=i.axis,this.ctx.lineWidth=1,this.ctx.setLineDash([]),t.length>0){const e=t[0],i=t[t.length-1];this.ctx.beginPath(),this.ctx.moveTo(n,e.y),this.ctx.lineTo(n,i.y),this.ctx.stroke()}if(e.length>0){const t=e[0],i=e[e.length-1];this.ctx.beginPath(),this.ctx.moveTo(t.x,s),this.ctx.lineTo(i.x,s),this.ctx.stroke()}this.ctx.restore()}drawYAxisLabels(t,e,i=t=>Et(t,1),o=""){const{padding:r}=this.config,a=r.left-10;this.ctx.save(),this.ctx.fillStyle=e,this.ctx.font=`13px ${this.config.fontFamily||"Roboto, sans-serif"}`,this.ctx.textAlign="end",this.ctx.textBaseline="middle",this.ctx.globalAlpha=.9,t.forEach(t=>{const e=i(t.value)+o;this.ctx.fillText(e,a,t.y)}),this.ctx.restore()}drawYAxisLabelsRight(t,e,i=t=>Et(t,2),o=""){const{width:r,padding:a}=this.config,n=r-a.right+10;this.ctx.save(),this.ctx.fillStyle=e,this.ctx.font=`12px ${this.config.fontFamily||"Roboto, sans-serif"}`,this.ctx.textAlign="start",this.ctx.textBaseline="middle",t.forEach(t=>{const e=o+i(t.value);this.ctx.fillText(e,n,t.y)}),this.ctx.restore()}drawXAxisLabels(t,e){const{height:i,padding:o}=this.config,r=i-o.bottom+20;this.ctx.save(),this.ctx.fillStyle=e,this.ctx.font=`13px ${this.config.fontFamily||"Roboto, sans-serif"}`,this.ctx.textAlign="center",this.ctx.textBaseline="top",this.ctx.globalAlpha=.9,t.forEach(t=>{this.ctx.fillText(t.label,t.x,r)}),this.ctx.restore()}drawRightYAxis(t,e){if(0===t.length)return;const{width:i,padding:o}=this.config,r=i-o.right,a=t[0],n=t[t.length-1];this.ctx.save(),this.ctx.strokeStyle=e,this.ctx.lineWidth=1,this.ctx.globalAlpha=.5,this.ctx.setLineDash([]),this.ctx.beginPath(),this.ctx.moveTo(r,a.y),this.ctx.lineTo(r,n.y),this.ctx.stroke(),this.ctx.restore()}drawLegend(t,e,i){this.ctx.save(),this.ctx.font=`11px ${this.config.fontFamily||"Roboto, sans-serif"}`,this.ctx.textAlign="left",this.ctx.textBaseline="middle";let o=i;t.forEach((t,i)=>{const r=e,a=o,n=r+15+5,s=a;this.ctx.save(),this.ctx.fillStyle=t.color,this.ctx.strokeStyle=t.color,"rect"===t.type?this.ctx.fillRect(r,a-5,15,10):"circle"===t.type?(this.ctx.beginPath(),this.ctx.arc(r+7.5,a,3,0,2*Math.PI),this.ctx.fill()):"line"===t.type&&(this.ctx.lineWidth=2,t.dashArray?this.ctx.setLineDash(t.dashArray):this.ctx.setLineDash([]),this.ctx.beginPath(),this.ctx.moveTo(r,a),this.ctx.lineTo(r+15,a),this.ctx.stroke()),this.ctx.restore(),this.ctx.fillStyle=this.config.colors.text,this.ctx.fillText(t.label,n,s),o+=20}),this.ctx.restore()}}async function Mt(t,e,i,o,r,a){const{showArea:n=!0,showMovingAverage:s=!1,movingAverageDays:c=7,showCostAxis:l=!1,costData:d,animation:h}=a||{},p=h||{enabled:!1},u=p.duration||800;p.easing,i.clear();const _=r.points.map(t=>t.timestamp||""),f=r.points.map(t=>t.value),g=xt(f,e,r.minValue,r.maxValue,_),m=$t(r.minValue,r.maxValue,5,e),v=a?.period||"month",y=kt(g,t=>St(t,v)),w=Ct(m,e);if(i.drawGridLines(w,e.colors.grid),i.drawAxes(m,y,e.colors),i.drawYAxisLabels(m,e.colors.text,t=>Et(t,1)," kWh"),i.drawXAxisLabels(y,e.colors.text),n&&g.length>0&&await async function(t,e,i,o,r,a){if(0===o.length)return;const{height:n,padding:s}=e,c=n-s.bottom;if(t.save(),t.fillStyle=r,t.globalAlpha=.2,a.enabled){const e=a.duration||800,r=a.easing||"easeOut",n=a.delay||0;await i.animate(0,1,e,r,e=>{const i=Math.floor(e*(o.length-1));t.beginPath(),t.moveTo(o[0].x,c),t.lineTo(o[0].x,o[0].y);for(let e=1;e<=i;e++)t.lineTo(o[e].x,o[e].y);t.lineTo(o[i].x,c),t.closePath(),t.fill()},n)}else{t.beginPath(),t.moveTo(o[0].x,c),t.lineTo(o[0].x,o[0].y);for(let e=1;e<o.length;e++)t.lineTo(o[e].x,o[e].y);t.lineTo(o[o.length-1].x,c),t.closePath(),t.fill()}t.restore()}(t,e,o,g,e.colors.primary,p),await Ot(t,e,o,g,e.colors.primary,2,p),s&&g.length>0){const i=function(t,e){if(e<=0||0===t.length)return t.map(()=>null);const i=[];for(let o=0;o<t.length;o++){if(o<e-1){i.push(null);continue}let r=0;for(let i=o-e+1;i<=o;i++)r+=t[i];i.push(r/e)}return i}(f,c),a=i.map((t,i)=>{if(null===t)return null;return xt([t],e,r.minValue,r.maxValue,[_[i]])[0]}).filter(t=>null!==t);a.length>0&&await Ot(t,e,o,a,e.colors.info,2,{...p,delay:(p.delay||0)+.3*u},[3,3])}if(await Ft(t,o,g,e.colors.primary,e.colors.background,p),l&&d){const r=$t(d.minValue,d.maxValue,5,e);i.drawYAxisLabelsRight(r,e.colors.accent,t=>Et(t,2),"€"),i.drawRightYAxis(r,e.colors.accent);const a=d.points.map(t=>t.value),n=xt(a,e,d.minValue,d.maxValue,_);await Ot(t,e,o,n,e.colors.accent,2,p,[5,5]),await Ft(t,o,n,e.colors.accent,e.colors.background,p)}const b=[];l&&d&&b.push({label:"Consumption",color:e.colors.primary,type:"rect"},{label:"Cost",color:e.colors.accent,type:"line",dashArray:[5,5]}),s&&b.push({label:`${c}-day avg`,color:e.colors.info,type:"line",dashArray:[3,3]}),b.length>0&&i.drawLegend(b,e.width-e.padding.right-120,e.padding.top+5)}async function Ot(t,e,i,o,r,a,n,s){if(0!==o.length){if(t.save(),t.strokeStyle=r,t.lineWidth=a,s?t.setLineDash(s):t.setLineDash([]),n.enabled&&o.length>1){const e=n.duration||800,r=n.easing||"easeOut",a=n.delay||0;await i.animate(0,1,e,r,e=>{const i=Math.floor(e*(o.length-1));t.beginPath(),t.moveTo(o[0].x,o[0].y);for(let e=1;e<=i;e++)t.lineTo(o[e].x,o[e].y);t.stroke()},a)}else{t.beginPath(),t.moveTo(o[0].x,o[0].y);for(let e=1;e<o.length;e++)t.lineTo(o[e].x,o[e].y);t.stroke()}t.restore()}}async function Ft(t,e,i,o,r,a){if(0!==i.length){if(t.save(),a.enabled){const n=a.duration||800,s=a.easing||"easeOut",c=a.delay||0,l=n/i.length;for(let a=0;a<i.length;a++)await e.animate(0,1,.2*n,s,e=>{const n=i[a],s=3*e,c=e;t.globalAlpha=c,t.fillStyle=o,t.strokeStyle=r,t.lineWidth=2,t.beginPath(),t.arc(n.x,n.y,s,0,2*Math.PI),t.fill(),t.stroke()},c+a*l)}else t.fillStyle=o,t.strokeStyle=r,t.lineWidth=2,i.forEach(e=>{t.beginPath(),t.arc(e.x,e.y,3,0,2*Math.PI),t.fill(),t.stroke()});t.restore()}}async function Rt(t,e,i,o,r,a){const{showCostOverlay:n=!1,costData:s,barWidth:c,animation:l}=a||{},d=l||{enabled:!1},h=d.duration||800;d.easing,i.clear();const p=r.points.map(t=>t.timestamp||""),u=r.points.map(t=>t.value),_=xt(u,e,r.minValue,r.maxValue,p),f=$t(r.minValue,r.maxValue,5,e),g=a?.period||"month",m=kt(_,t=>St(t,g)),v=Ct(f,e);i.drawGridLines(v,e.colors.grid),i.drawAxes(f,m,e.colors),i.drawYAxisLabels(f,e.colors.text,t=>Et(t,1)," kWh"),i.drawXAxisLabels(m,e.colors.text);const{width:y,padding:w}=e,b=y-w.left-w.right,x=c||Math.max(b/_.length*.6,2);if(await async function(t,e,i,o,r,a,n){if(0===o.length)return;const{height:s,padding:c}=e,l=s-c.bottom,d=Math.min(.15*r,4);if(t.save(),t.fillStyle=a,t.globalAlpha=1,n.enabled){const e=n.duration||800,a=n.easing||"easeOut",s=n.delay||0,c=e/o.length;for(let n=0;n<o.length;n++){const h=o[n],p=h.x-r/2,u=h.y,_=l-u;await i.animate(0,1,.3*e,a,e=>{const i=_*e;Wt(t,p,l-i,r,i,d)},s+n*c)}}else o.forEach(e=>{const i=e.x-r/2,o=e.y;Wt(t,i,o,r,l-o,d)});t.restore()}(t,e,o,_,x,e.colors.primary,d),n&&s){const r=$t(s.minValue,s.maxValue,5,e);i.drawYAxisLabelsRight(r,e.colors.accent,t=>Et(t,2),"€"),i.drawRightYAxis(r,e.colors.accent);const a=s.points.map(t=>t.value),n=xt(a,e,s.minValue,s.maxValue,p);await async function(t,e,i,o,r,a,n,s){if(0===o.length)return;t.save(),t.strokeStyle=r,t.lineWidth=a,s?t.setLineDash(s):t.setLineDash([]);if(n.enabled&&o.length>1){const e=n.duration||800,r=n.easing||"easeOut",a=n.delay||0;await i.animate(0,1,e,r,e=>{const i=Math.floor(e*(o.length-1));t.beginPath(),t.moveTo(o[0].x,o[0].y);for(let e=1;e<=i;e++)t.lineTo(o[e].x,o[e].y);t.stroke()},a)}else{t.beginPath(),t.moveTo(o[0].x,o[0].y);for(let e=1;e<o.length;e++)t.lineTo(o[e].x,o[e].y);t.stroke()}t.restore()}(t,0,o,n,e.colors.accent,2,{...d,delay:(d.delay||0)+.3*h},[5,5]),await async function(t,e,i,o,r,a){if(0===i.length)return;if(t.save(),a.enabled){const n=a.duration||800,s=a.easing||"easeOut",c=a.delay||0,l=n/i.length;for(let a=0;a<i.length;a++)await e.animate(0,1,.2*n,s,e=>{const n=i[a],s=3*e,c=e;t.globalAlpha=c,t.fillStyle=o,t.strokeStyle=r,t.lineWidth=2,t.beginPath(),t.arc(n.x,n.y,s,0,2*Math.PI),t.fill(),t.stroke()},c+a*l)}else t.fillStyle=o,t.strokeStyle=r,t.lineWidth=2,i.forEach(e=>{t.beginPath(),t.arc(e.x,e.y,3,0,2*Math.PI),t.fill(),t.stroke()});t.restore()}(t,o,n,e.colors.accent,e.colors.background,{...d,delay:(d.delay||0)+.3*h})}n&&s&&i.drawLegend([{label:"Consumption",color:e.colors.primary,type:"rect"},{label:"Cost",color:e.colors.accent,type:"line",dashArray:[5,5]}],e.width-e.padding.right-100,e.padding.top+5)}function Wt(t,e,i,o,r,a){t.beginPath(),t.moveTo(e+a,i),t.lineTo(e+o-a,i),t.quadraticCurveTo(e+o,i,e+o,i+a),t.lineTo(e+o,i+r-a),t.quadraticCurveTo(e+o,i+r,e+o-a,i+r),t.lineTo(e+a,i+r),t.quadraticCurveTo(e,i+r,e,i+r-a),t.lineTo(e,i+a),t.quadraticCurveTo(e,i,e+a,i),t.closePath(),t.fill()}async function Lt(t,e,i,o,r,a,n,s,c,l,d){if(0===o.length)return;const h=xt(o,e,n,s,a),p=xt(r,e,n,s,a);if(t.save(),t.fillStyle=c,t.globalAlpha=l,d.enabled){const e=d.duration||800,o=d.easing||"easeOut",r=d.delay||0;await i.animate(0,1,e,o,e=>{t.beginPath();const i=h.map((t,i)=>{const o=p[i]?.y||t.y,r=t.y-o;return{...t,y:o+r*e}});t.moveTo(i[0].x,p[0]?.y||i[0].y),t.lineTo(i[0].x,i[0].y);for(let e=1;e<i.length;e++)t.lineTo(i[e].x,i[e].y);for(let e=p.length-1;e>=0;e--)t.lineTo(p[e].x,p[e].y);t.closePath(),t.fill()},r)}else{t.beginPath(),t.moveTo(h[0].x,p[0]?.y||h[0].y),t.lineTo(h[0].x,h[0].y);for(let e=1;e<h.length;e++)t.lineTo(h[e].x,h[e].y);for(let e=p.length-1;e>=0;e--)t.lineTo(p[e].x,p[e].y);t.closePath(),t.fill()}t.restore()}class It{constructor(t,e){this.hoverCallback=null,this.interactive=!1,this.currentDataPoints=[],this.currentBarWidth=0,this.hoveredPoint=null,this.tooltipElement=null,this.renderFunction=null,this.canvas=t;const i=t.getContext("2d");if(!i)throw new Error("Failed to get 2D context from canvas");this.ctx=i,this.config=e,this.animator=new bt,this.renderer=new Tt(this.ctx,this.config),this.canvas.width=e.width,this.canvas.height=e.height,this._createTooltip()}clear(){this.renderer.clear()}resize(t,e){this.config.width=t,this.config.height=e,this.canvas.width=t,this.canvas.height=e}getComputedColor(t,e){if("undefined"==typeof window)return e;try{const i=this.canvas.getRootNode(),o=i instanceof ShadowRoot?i.host:document.documentElement,r=getComputedStyle(o);return r.getPropertyValue(t).trim()||e}catch{return e}}async renderLineChart(t,e){this.currentDataPoints=t.points,this.renderFunction=async()=>{await Mt(this.ctx,this.config,this.renderer,this.animator,t,e),this.hoveredPoint&&this._drawHoverEffect(this.hoveredPoint)},await this.renderFunction(),!1!==e?.interactive&&this.enableInteractivity()}async renderBarChart(t,e){this.currentDataPoints=t.points;const{width:i,padding:o}=this.config,r=i-o.left-o.right;this.currentBarWidth=e?.barWidth||Math.max(r/t.points.length*.6,2),this.renderFunction=async()=>{await Rt(this.ctx,this.config,this.renderer,this.animator,t,e),this.hoveredPoint&&this._drawHoverEffect(this.hoveredPoint)},await this.renderFunction(),!1!==e?.interactive&&this.enableInteractivity()}async renderStackedAreaChart(t,e){if(t.layers&&t.layers.length>0){const e=t.layers[0],i=t.timestamps||[],{width:o,height:r,padding:a}=this.config,n=o-a.left-a.right,s=r-a.top-a.bottom,c=t.range||1;this.currentDataPoints=e.data.map((o,r)=>{const l=e.data.length>1?n/(e.data.length-1):0;return{x:a.left+r*l,y:a.top+s-(o-t.minValue)/c*s,value:o,timestamp:i[r]}})}this.renderFunction=async()=>{await async function(t,e,i,o,r,a){const{animation:n}=a||{},s=n||{enabled:!1},c=s.duration||800;s.easing,i.clear();const{layers:l,timestamps:d=[],minValue:h,maxValue:p}=r;if(0===l.length)return;const u=[];let _=new Array(l[0].data.length).fill(0);for(const t of l){const e=t.data.map((t,e)=>_[e]+t);u.push(e),_=e}const f=$t(h,p,5,e),g=xt(u[0]||[],e,h,p,d),m=a?.period||"month",v=kt(g,t=>St(t,m)),y=Ct(f,e);i.drawGridLines(y,e.colors.grid),i.drawAxes(f,v,e.colors),i.drawYAxisLabels(f,e.colors.text,t=>Et(t,1)," kWh"),i.drawXAxisLabels(v,e.colors.text);let w=new Array(l[0].data.length).fill(0);for(let i=0;i<l.length;i++){const r=l[i],a=u[i],n=s.enabled?(s.delay||0)+i*(.2*c):0;await Lt(t,e,o,a,w,d,h,p,r.color,r.opacity||.6,{...s,delay:n}),w=a}const b=l.map((t,e)=>({label:t.label||`Layer ${e+1}`,color:t.color,type:"rect"}));b.length>0&&i.drawLegend(b,e.padding.left+10,e.padding.top+5)}(this.ctx,this.config,this.renderer,this.animator,t,e),this.hoveredPoint&&this._drawHoverEffect(this.hoveredPoint)},await this.renderFunction(),!1!==e?.interactive&&this.enableInteractivity()}enableInteractivity(){this.interactive=!0,this._setupMouseHandlers()}disableInteractivity(){this.interactive=!1,this.canvas.removeEventListener("mousemove",this._handleMouseMove),this.canvas.removeEventListener("mouseleave",this._handleMouseLeave)}onPointHover(t){this.hoverCallback=t}_setupMouseHandlers(){this.canvas.addEventListener("mousemove",this._handleMouseMove.bind(this)),this.canvas.addEventListener("mouseleave",this._handleMouseLeave.bind(this))}_handleMouseMove(t){if(!this.interactive)return;const e=this.canvas.getBoundingClientRect(),i=t.clientX-e.left,o=t.clientY-e.top,r=i*(this.canvas.width/e.width),a=o*(this.canvas.height/e.height),n=this._findNearestPoint(r,a);n!==this.hoveredPoint&&(this.hoveredPoint=n,this.renderFunction&&this.renderFunction(),n?this._showTooltip(t.clientX,t.clientY,n):this._hideTooltip(),this.hoverCallback&&this.hoverCallback(n))}_handleMouseLeave(){this.hoveredPoint=null,this._hideTooltip(),this.renderFunction&&this.renderFunction(),this.hoverCallback&&this.hoverCallback(null)}_findNearestPoint(t,e){if(0===this.currentDataPoints.length)return null;const{padding:i}=this.config;let o=null,r=1/0;for(const a of this.currentDataPoints){if(this.currentBarWidth>0){const o=a.x-this.currentBarWidth/2,r=a.x+this.currentBarWidth/2,n=a.y,s=this.config.height-i.bottom;if(t>=o&&t<=r&&e>=n&&e<=s)return a}const n=t-a.x,s=e-a.y,c=Math.sqrt(n*n+s*s);c<20&&c<r&&(r=c,o=a)}return o}_drawHoverEffect(t){if(t){if(this.ctx.save(),this.currentBarWidth>0){const{height:e,padding:i}=this.config,o=e-i.bottom,r=t.x-this.currentBarWidth/2,a=t.y,n=o-a;this.ctx.fillStyle="rgba(255, 255, 255, 0.2)",this.ctx.fillRect(r,a,this.currentBarWidth,n)}else this.ctx.fillStyle=this.config.colors.primary,this.ctx.beginPath(),this.ctx.arc(t.x,t.y,6,0,2*Math.PI),this.ctx.fill(),this.ctx.strokeStyle="#fff",this.ctx.lineWidth=2,this.ctx.stroke();this.ctx.restore()}}_createTooltip(){if("undefined"==typeof document)return;this.tooltipElement=document.createElement("div"),this.tooltipElement.style.cssText="\n      position: fixed;\n      background: rgba(0, 0, 0, 0.9);\n      color: #fff;\n      padding: 8px 12px;\n      border-radius: 4px;\n      font-size: 12px;\n      pointer-events: none;\n      z-index: 10000;\n      display: none;\n      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);\n      font-family: Roboto, sans-serif;\n    ";const t=this.canvas.getRootNode();t instanceof ShadowRoot?t.appendChild(this.tooltipElement):document.body.appendChild(this.tooltipElement)}_showTooltip(t,e,i){if(!this.tooltipElement)return;const o=i.timestamp?new Date(i.timestamp):null,r=o?o.toLocaleDateString("es-ES",{day:"numeric",month:"short",year:o.getFullYear()!==(new Date).getFullYear()?"numeric":void 0}):"N/A",a=i.value.toFixed(2);this.tooltipElement.innerHTML=`\n      <div style="font-weight: 500; margin-bottom: 4px;">${r}</div>\n      <div>${a} kWh</div>\n    `,this.tooltipElement.style.display="block";this.tooltipElement.style.left=`${t+10}px`,this.tooltipElement.style.top=`${e+10}px`;const n=this.tooltipElement.getBoundingClientRect();n.right>window.innerWidth&&(this.tooltipElement.style.left=t-n.width-10+"px"),n.bottom>window.innerHeight&&(this.tooltipElement.style.top=e-n.height-10+"px")}_hideTooltip(){this.tooltipElement&&(this.tooltipElement.style.display="none")}}var Vt=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};void 0!==st&&st.disableWarning&&st.disableWarning("change-in-update");class Nt extends st{constructor(){super(...arguments),this._consumptionData=[],this._comparisonResult=null,this._tariffCosts=null,this._loading=!1,this._error=null,this._comparisonError=null,this._currentPeriod="week",this._currentDate=new Date,this._weekComparisonData=null,this._chartInstance=null}_getComputedColor(t,e){if("undefined"!=typeof window&&this.shadowRoot)try{const i=this.shadowRoot.host||document.documentElement,o=getComputedStyle(i);return o.getPropertyValue(t).trim()||e}catch{return e}return e}setConfig(t){if(!t)throw new Error("Invalid configuration");const e={...t,view:t.view||"consumption"};this.config=e,e.default_period&&(this._currentPeriod=e.default_period)}getCardSize(){let t=1;this.config&&!1!==this.config.show_navigation&&(t+=1);const e=this.config?.view||"consumption";return this.config&&"tariff-comparison"===e&&(t+=1),t}connectedCallback(){super.connectedCallback(),this._validateConfig(),this._currentPeriod=this.config.default_period||"week",this._error||this._loadData()}updated(t){if(super.updated(t),t.has("config")&&(this._validateConfig(),this.config.default_period&&this._currentPeriod!==this.config.default_period&&(this._currentPeriod=this.config.default_period),void 0!==t.get("config")&&this._loadData()),(t.has("_currentPeriod")||t.has("_currentDate"))&&!this._loading&&this.hass&&this.config?.source_entry_id&&!this._error){const e=t.get("_currentPeriod"),i=t.get("_currentDate"),o=t.has("_currentPeriod")&&void 0!==e&&e!==this._currentPeriod,r=t.has("_currentDate")&&void 0!==i&&i.getTime()!==this._currentDate.getTime();(o||r)&&this._loadData()}t.has("hass")&&this.hass&&!this._loading&&!this._error&&0===this._consumptionData.length&&this.config?.source_entry_id&&this._loadData(),(t.has("_consumptionData")||t.has("config")||t.has("_tariffCosts"))&&this._renderCanvasChart()}_validateConfig(){if(!this.config)return this._error="Card configuration is required",void(this._loading=!1);if(!this.config.source_entry_id)return this._error="Configuration incomplete. Please edit this card and select your Octopus Energy tariff.",void(this._loading=!1);"tariff-comparison"!==(this.config.view||"consumption")||this.config.tariff_entry_ids&&0!==this.config.tariff_entry_ids.length||yt.warn("Tariff comparison view is active but no tariff_entry_ids provided. Comparison will be disabled."),this.config.show_cost_on_chart&&!this.config.selected_tariff_for_cost&&yt.warn("show_cost_on_chart is enabled but selected_tariff_for_cost is not set. Cost display will be disabled.")}_createTimeoutPromise(t){return new Promise((e,i)=>{setTimeout(()=>i(new Error("Request timeout. The service call took too long to respond.")),t)})}async _callServiceWithTimeout(t,e,i,o=!0){yt.groupServiceCall(t,e);try{let r;if(yt.serviceCall(t,e,o),i&&yt.serviceData(i),o&&this.hass.callWS)try{r=await this._callServiceViaWebSocket(t,e,i)}catch(o){const a=o instanceof Error?o.message:String(o);yt.warn("⚠ WebSocket call failed, falling back to callService: ",a),r=await this._callServiceViaStandard(t,e,i)}else r=await this._callServiceViaStandard(t,e,i);return yt.serviceResponse(r),yt.groupEnd(),r}catch(i){throw yt.serviceError(i),yt.groupEnd(),this._handleServiceError(i,t,e)}}_handleServiceError(t,e,i){if(t instanceof Error)return t.message.includes("timeout")?new Error(`Service call timeout: ${e}.${i} took longer than ${Nt.SERVICE_TIMEOUT}ms`):t.message.includes("Service not found")||t.message.includes("not available")?new Error(`Service ${e}.${i} is not available. Please ensure the Octopus Energy España integration is installed and configured.`):"service_validation_error"===t.code?this._handleValidationError(t):new Error(`Service call failed: ${e}.${i} - ${t.message}`);if(t&&"object"==typeof t){const o=t;if("service_validation_error"===o.code)return this._handleValidationError(o);const r=o.message||o.translation_key||"Unknown service error";return new Error(`Service call failed: ${e}.${i} - ${r}`)}return t instanceof Error?t:new Error(String(t))}_handleValidationError(t){const e=(Error,t);let i=e.message||e.translation_key||"Service validation error";return i.includes("return_response")&&(i="The service integration may not support response data yet. Please ensure you're using the latest version of the Octopus Energy España integration and that it has been reloaded after updating."),new Error(`Service validation error: ${i}`)}_validateConsumptionResponse(t){if(!t||"object"!=typeof t)throw yt.groupError("Invalid service response"),yt.error("✗ Invalid service response: ","expected object with success field"),yt.groupEnd(),new Error("Invalid response from service: expected object with success field");if(!("success"in t))throw yt.groupError("Invalid service response format"),yt.error("✗ Invalid service response format: ","response does not contain success field"),yt.data("Received response",t),yt.groupEnd(),new Error("Service returned unexpected response format. The service may not be returning data correctly. Please check the integration configuration and ensure the service supports returning response data.")}_extractErrorMessage(t){return t instanceof Error?t.message:t&&"object"==typeof t?t.message||t.translation_key||JSON.stringify(t):String(t)}_createUserFriendlyError(t){if(t instanceof Error)return t;if(t&&"object"==typeof t){const e=t;let i=e.message||e.translation_key||JSON.stringify(t);return"service_validation_error"===e.code&&(i=i.includes("return_response")?"The service integration may not support response data yet. Please ensure you're using the latest version of the Octopus Energy España integration and that it has been reloaded after updating.":i||"Service validation error. Please check your configuration."),new Error(i)}return new Error(String(t))}_extractWebSocketResponse(t){return t&&"object"==typeof t?"service_response"in t?t.service_response:"response"in t?t.response:t:t}async _callServiceViaWebSocket(t,e,i){if(!this.hass.callWS)throw new Error("callWS is not available");const o=this.hass.callWS({type:"call_service",domain:t,service:e,service_data:i,return_response:!0}),r=this._createTimeoutPromise(Nt.SERVICE_TIMEOUT),a=await Promise.race([o,r]);return this._extractWebSocketResponse(a)}async _callServiceViaStandard(t,e,i){const o=this.hass.callService(t,e,i),r=this._createTimeoutPromise(Nt.SERVICE_TIMEOUT);return await Promise.race([o,r])}async _loadData(){if(!this.hass||!this.config)return;const t=this.config.source_entry_id;if(!t)return this._error="source_entry_id is required. Please select your tariff from the card editor.",void(this._loading=!1);this._loading=!0,this._error=null,this._comparisonError=null;try{const{startDate:e,endDate:i}=this._getDateRange();this._validateDateRange(e,i);const o=`${e.toISOString().split("T")[0]} → ${i.toISOString().split("T")[0]}`;yt.groupDataLoad(t,this._currentPeriod,o);const r=await this._fetchConsumptionData(t,e,i);this._consumptionData=r.consumption_data||[],r.tariff_costs?this._tariffCosts=r.tariff_costs:this._tariffCosts=null;const a=this.config.view||"consumption";"tariff-comparison"===a&&this.config.tariff_entry_ids?.length?await this._fetchTariffComparison(t,e,i):this._comparisonResult=null,"week-analysis"===a&&this.config.show_week_comparison?this._weekComparisonData=this._calculateWeekComparison():this._weekComparisonData=null,yt.groupEnd()}catch(t){yt.groupError("Error loading data"),this._error=t instanceof Error?t.message:String(t),yt.error("Error loading data: ",this._extractErrorMessage(t)),yt.data("Error details",t),yt.groupEnd()}finally{this._loading=!1}}_validateDateRange(t,e){if(t>new Date)throw new Error(`Invalid date range: start date (${t.toISOString().split("T")[0]}) is in the future. Please navigate to a past period.`);if(t>e)throw new Error("Invalid date range: start date is after end date.")}async _fetchConsumptionData(t,e,i){const o="heat-calendar"===(this.config.view||"consumption")&&"year"===this.config.heat_calendar_period?"daily":"day"===this._currentPeriod?"hourly":"daily";let r;try{r=await this._callServiceWithTimeout(Nt.SERVICE_DOMAIN,Nt.SERVICE_FETCH_CONSUMPTION,{entry_id:t,start_date:e.toISOString().split("T")[0],end_date:i.toISOString().split("T")[0],granularity:o}),yt.data("Raw Service Response (before processing)",r);const a=r;return this._validateConsumptionResponse(a),a.success||this._handleConsumptionError(a,t),a}catch(t){throw yt.groupError("Service call failed"),yt.error("✗ Service call failed: ",this._extractErrorMessage(t)),yt.data("Full Error Object",t),yt.groupEnd(),this._createUserFriendlyError(t)}}_handleConsumptionError(t,e){const i=t.error||"Failed to fetch consumption data";let o=i;throw t.warning&&(o+=`. ${t.warning}`,yt.warn("⚠ Service Warning: ",t.warning)),yt.groupError("Service returned error"),yt.error("✗ Service returned error: ",i),yt.data("Requested Entry ID",e),t.context&&(yt.data("Service Context",t.context),t.context.id&&t.context.id!==e&&yt.warn("⚠ Note: Service context shows different entry ID (",t.context.id+"). This may be informational.")),yt.groupEnd(),yt.data("Full Response",{success:t.success,error:t.error,warning:t.warning,context:t.context}),new Error(o)}async _fetchTariffComparison(t,e,i){try{const o="day"===this._currentPeriod?"daily":"week"===this._currentPeriod?"weekly":"monthly",r=await this._callServiceWithTimeout(Nt.SERVICE_DOMAIN,Nt.SERVICE_COMPARE_TARIFFS,{tariff_entry_ids:this.config.tariff_entry_ids,source_entry_id:t,period:o,start_date:e.toISOString().split("T")[0],end_date:i.toISOString().split("T")[0]});if(r.success&&r.result)this._comparisonResult=r.result;else{const t=r.error||"Failed to compare tariffs";this._comparisonError=t,yt.groupError("Tariff comparison failed"),yt.warn("⚠ Tariff comparison failed: ",t),yt.groupEnd()}}catch(t){const e=t instanceof Error?t.message:String(t);this._comparisonError=`Tariff comparison error: ${e}`,yt.groupError("Tariff comparison error"),yt.warn("⚠ Tariff comparison error: ",e),yt.groupEnd()}}_getDateRange(){if("heat-calendar"===(this.config.view||"consumption")&&"year"===this.config.heat_calendar_period){const t=this._currentDate.getFullYear(),e=new Date,i=t===e.getFullYear(),o=new Date(t,0,1);o.setHours(0,0,0,0);const r=i?new Date(e):new Date(t,11,31);return r.setHours(23,59,59,999),{startDate:o,endDate:r}}const t=new Date(this._currentDate);t.setHours(23,59,59,999);const e=new Date(t);return"day"===this._currentPeriod?e.setHours(0,0,0,0):"week"===this._currentPeriod?(e.setDate(e.getDate()-6),e.setHours(0,0,0,0)):"month"===this._currentPeriod&&(e.setDate(e.getDate()-29),e.setHours(0,0,0,0)),{startDate:e,endDate:t}}_wouldNavigateToFuture(){const t=new Date;t.setHours(23,59,59,999);if("heat-calendar"===(this.config.view||"consumption")&&"year"===this.config.heat_calendar_period){return this._currentDate.getFullYear()+1>t.getFullYear()}const e=new Date(this._currentDate);"day"===this._currentPeriod?e.setDate(e.getDate()+1):"week"===this._currentPeriod?e.setDate(e.getDate()+7):"month"===this._currentPeriod&&e.setMonth(e.getMonth()+1);const{endDate:i}=this._getDateRangeForDate(e);return i>t}_getDateRangeForDate(t){if("heat-calendar"===(this.config.view||"consumption")&&"year"===this.config.heat_calendar_period){const e=t.getFullYear(),i=new Date,o=e===i.getFullYear(),r=new Date(e,0,1);r.setHours(0,0,0,0);const a=o?new Date(i):new Date(e,11,31);return a.setHours(23,59,59,999),{startDate:r,endDate:a}}const e=new Date(t);e.setHours(23,59,59,999);const i=new Date(e);return"day"===this._currentPeriod?i.setHours(0,0,0,0):"week"===this._currentPeriod?(i.setDate(i.getDate()-6),i.setHours(0,0,0,0)):"month"===this._currentPeriod&&(i.setDate(i.getDate()-29),i.setHours(0,0,0,0)),{startDate:i,endDate:e}}_navigatePeriod(t){if("next"===t&&this._wouldNavigateToFuture())return;const e="prev"===t?-1:1;if("heat-calendar"===(this.config.view||"consumption")&&"year"===this.config.heat_calendar_period)return this._currentDate.setFullYear(this._currentDate.getFullYear()+e),this._currentDate=new Date(this._currentDate),void this._loadData();"day"===this._currentPeriod?this._currentDate.setDate(this._currentDate.getDate()+e):"week"===this._currentPeriod?this._currentDate.setDate(this._currentDate.getDate()+7*e):"month"===this._currentPeriod&&this._currentDate.setMonth(this._currentDate.getMonth()+e),this._currentDate=new Date(this._currentDate),this._loadData()}_setPeriod(t){this._currentPeriod=t,this._loadData()}_extractPeriodData(){if(this._tariffCosts&&this.config.source_entry_id){const t=this._tariffCosts[this.config.source_entry_id];if(t&&t.hourly_breakdown){const e=new Map;for(const i of t.hourly_breakdown){const t=i.hour||"",o=i.consumption||0,r=i.period;e.has(t)||e.set(t,{p1:0,p2:0,p3:0});const a=e.get(t);"P1"===r?a.p1+=o:"P2"===r?a.p2+=o:"P3"===r&&(a.p3+=o)}const i=Array.from(e.entries()).map(([t,e])=>({timestamp:t,...e}));if(i.length>0)return i}if(t&&t.daily_breakdown&&"month"===this._currentPeriod&&t.period_breakdown){const e=t.period_breakdown.p1_percentage/100,i=t.period_breakdown.p2_percentage/100,o=t.period_breakdown.p3_percentage/100;return t.daily_breakdown.map(t=>({timestamp:t.date,p1:t.consumption*e,p2:t.consumption*i,p3:t.consumption*o}))}}if(this._consumptionData.length>0){const t=this._consumptionData[0];if(void 0!==t.p1_consumption||t.period)return this._consumptionData.map(t=>({timestamp:t.start_time||t.date||"",p1:t.p1_consumption||("P1"===t.period?t.consumption:0),p2:t.p2_consumption||("P2"===t.period?t.consumption:0),p3:t.p3_consumption||("P3"===t.period?t.consumption:0)}))}return null}_calculateMovingAverage(t,e){if(e<2||0===t.length)return t.map(()=>null);const i=[];for(let o=0;o<t.length;o++)if(o<e-1)i.push(null);else{let r=0;for(let i=0;i<e;i++)r+=t[o-i];i.push(r/e)}return i}_calculateCostMovingAverage(t,e=30){return this._calculateMovingAverage(t,e)}_renderHeatCalendar(){const t=this._getHeatCalendarData(),e="year"===(this.config.heat_calendar_period||"month");if(0===t.length)return z`
        <div class="error-message">
          <div class="error-title">Heat Calendar Unavailable</div>
          <div class="error-details">
            Daily breakdown data is not available. Please ensure tariff comparison is enabled or daily data is available from the service.
          </div>
        </div>
      `;const i=new Map,o=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],r=new Map;for(const o of t){const t=e?o.weekOfYear??0:o.weekOfMonth??0;i.has(t)||i.set(t,new Map),i.get(t).set(o.dayOfWeek,o),e&&void 0!==o.month&&(r.has(t)&&r.get(t)===o.month||r.set(t,o.month))}let a,n;if(e){const t=Array.from(i.keys());t.length>0?(n=Math.min(...t),a=Math.max(...t),a-n<51&&(a=n+52)):(n=0,a=52)}else a=Math.max(...Array.from(i.keys()),0),n=Math.min(...Array.from(i.keys()),0);const s=[];for(let t=n;t<=a;t++){const e=[];for(let o=0;o<7;o++){const r=i.get(t)?.get(o)||null;e.push(r)}s.push(e)}let c=null;if(e&&t.length>0){const e=t.reduce((t,e)=>t+e.consumption,0);c={totalConsumption:e,totalCost:t.reduce((t,e)=>t+e.cost,0),avgDailyConsumption:e/t.length,year:t[0]?.year||this._currentDate.getFullYear()}}return z`
      <div class="heat-calendar-container ${e?"heat-calendar-year-view":""}">
        <div class="comparison-title">
          Consumption Heat Calendar
          ${e&&c?z` - ${c.year}`:""}
        </div>
        ${e&&c?z`
          <div class="heat-calendar-summary">
            <span>Total: ${c.totalConsumption.toFixed(1)} kWh</span>
            <span>Avg/Day: ${c.avgDailyConsumption.toFixed(2)} kWh</span>
            <span>Cost: €${c.totalCost.toFixed(2)}</span>
          </div>
        `:""}
        <div class="heat-calendar-grid ${e?"heat-calendar-grid-year":""}">
          ${["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(t=>z`
            <div class="heat-calendar-day empty" style="font-weight: 600;">${t}</div>
          `)}
          ${s.map((t,i)=>{const a=n+i,s=r.get(a),c=e&&void 0!==s&&(0===i||r.get(n+i-1)!==s);return z`
              ${c?z`
                <div class="heat-calendar-month-label" style="grid-column: 1 / -1;">
                  ${o[s]}
                </div>
              `:""}
              ${t.map(t=>{if(!t)return z`<div class="heat-calendar-day empty"></div>`;const i=new Date(t.date),r=i.getDate(),a=o[i.getMonth()],n=e?`${a} ${r}, ${t.year}: ${t.consumption.toFixed(2)} kWh, €${t.cost.toFixed(2)}`:`${t.date}: ${t.consumption.toFixed(2)} kWh, €${t.cost.toFixed(2)}`;return z`
                  <div 
                    class="heat-calendar-day intensity-${t.intensity}"
                    title="${n}"
                  >
                    ${e?"":r}
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
    `}_renderWeekComparison(){if(!this._weekComparisonData||0===this._weekComparisonData.weeks.length)return z`<div class="loading">No week comparison data available</div>`;const{weeks:t,comparisons:e}=this._weekComparisonData;return z`
      <div class="week-comparison-section">
        <div class="comparison-title">Week-over-Week Comparison</div>
        <div class="week-comparison-grid">
          ${t.map((i,o)=>{const r=e.find(t=>t.weekIndex===o);return z`
              <div class="week-card">
                <div class="week-card-header">
                  Week ${t.length-o}
                  ${r?z`
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
    `}_renderTariffComparisonChart(){if(!this._comparisonResult||!this._comparisonResult.tariffs||0===this._comparisonResult.tariffs.length)return z``;const t=this._comparisonResult.tariffs;let e=0;for(const i of t){const t=i.period_breakdown;e=Math.max(e,t.p1_consumption,t.p2_consumption,t.p3_consumption),t.p1_consumption>0&&i.hourly_breakdown?.filter(t=>"P1"===t.period).reduce((t,e)=>t+e.cost,0),t.p2_consumption>0&&i.hourly_breakdown?.filter(t=>"P2"===t.period).reduce((t,e)=>t+e.cost,0),t.p3_consumption>0&&i.hourly_breakdown?.filter(t=>"P3"===t.period).reduce((t,e)=>t+e.cost,0)}return z`
      <div class="tariff-chart-container">
        <div class="period-breakdown-title">Consumption & Cost by Period</div>
        ${t.map(t=>{const i=t.period_breakdown,o=i.p1_consumption>0&&t.hourly_breakdown?.filter(t=>"P1"===t.period).reduce((t,e)=>t+e.cost,0)||0,r=i.p2_consumption>0&&t.hourly_breakdown?.filter(t=>"P2"===t.period).reduce((t,e)=>t+e.cost,0)||0,a=i.p3_consumption>0&&t.hourly_breakdown?.filter(t=>"P3"===t.period).reduce((t,e)=>t+e.cost,0)||0,n=i.p1_consumption>0?o/i.p1_consumption:0,s=i.p2_consumption>0?r/i.p2_consumption:0,c=i.p3_consumption>0?a/i.p3_consumption:0;return z`
            <div style="margin-top: 16px;">
              <div class="tariff-name" style="margin-bottom: 8px;">${t.name}</div>
              <div class="tariff-chart-bars">
                <div class="tariff-chart-bar-group">
                  <div class="tariff-chart-bar-label">P1</div>
                  <div 
                    class="tariff-chart-bar p1" 
                    style="height: ${e>0?i.p1_consumption/e*100:0}%"
                    title="P1: ${i.p1_consumption.toFixed(2)} kWh, €${o.toFixed(2)} (€${n.toFixed(3)}/kWh)"
                  ></div>
                </div>
                <div class="tariff-chart-bar-group">
                  <div class="tariff-chart-bar-label">P2</div>
                  <div 
                    class="tariff-chart-bar p2" 
                    style="height: ${e>0?i.p2_consumption/e*100:0}%"
                    title="P2: ${i.p2_consumption.toFixed(2)} kWh, €${r.toFixed(2)} (€${s.toFixed(3)}/kWh)"
                  ></div>
                </div>
                <div class="tariff-chart-bar-group">
                  <div class="tariff-chart-bar-label">P3</div>
                  <div 
                    class="tariff-chart-bar p3" 
                    style="height: ${e>0?i.p3_consumption/e*100:0}%"
                    title="P3: ${i.p3_consumption.toFixed(2)} kWh, €${a.toFixed(2)} (€${c.toFixed(3)}/kWh)"
                  ></div>
                </div>
              </div>
            </div>
          `})}
      </div>
    `}_getISOWeekOfYear(t){const e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate())),i=e.getUTCDay()||7;e.setUTCDate(e.getUTCDate()+4-i);const o=new Date(Date.UTC(e.getUTCFullYear(),0,1));return Math.ceil(((e.getTime()-o.getTime())/864e5+1)/7)-1}_getHeatCalendarData(){if(!this._tariffCosts||!this.config.source_entry_id)return[];const t=this._tariffCosts[this.config.source_entry_id];if(!t||!t.daily_breakdown||0===t.daily_breakdown.length)return[];const e=this.config.heat_calendar_period||"month";let i=t.daily_breakdown;if("year"===e){const t=this._currentDate.getFullYear();i=i.filter(e=>new Date(e.date).getFullYear()===t)}else{const t=this._currentDate.getFullYear(),e=this._currentDate.getMonth();i=i.filter(i=>{const o=new Date(i.date);return o.getFullYear()===t&&o.getMonth()===e})}if(0===i.length)return[];const o=i.map(t=>t.consumption).filter(t=>t>0);if(0===o.length)return[];const r=[...o].sort((t,e)=>t-e),a=r[Math.floor(.33*r.length)],n=r[Math.floor(.67*r.length)],s=[];for(const t of i){const i=new Date(t.date),o=i.getDay(),r=i.getFullYear(),c=i.getMonth();let l,d;if("year"===e)d=this._getISOWeekOfYear(i);else{const t=new Date(i.getFullYear(),i.getMonth(),1).getDay(),e=i.getDate();l=Math.floor((e+t-1)/7)}let h="medium";t.consumption<=a?h="low":t.consumption>=n&&(h="high"),s.push({date:t.date,consumption:t.consumption,cost:t.cost,dayOfWeek:o,weekOfMonth:l,weekOfYear:d,month:c,year:r,intensity:h})}return s}_calculateWeekComparison(){if(!this._tariffCosts||!this.config.source_entry_id)return null;const t=this._tariffCosts[this.config.source_entry_id];if(!t||!t.daily_breakdown||0===t.daily_breakdown.length)return null;const e=this.config.week_comparison_count||2,i=t.daily_breakdown,o=new Map;for(const e of i){const i=new Date(e.date),r=i.getDay(),a=i.getDate()-r+(0===r?-6:1),n=new Date(i.setDate(a));n.setHours(0,0,0,0);const s=n.toISOString().split("T")[0];if(!o.has(s)){const t=new Date(n);t.setDate(n.getDate()+6),o.set(s,{weekStart:s,weekEnd:t.toISOString().split("T")[0],consumption:0,cost:0,periodBreakdown:{p1_consumption:0,p2_consumption:0,p3_consumption:0}})}const c=o.get(s);if(c.consumption+=e.consumption,c.cost+=e.cost,t.period_breakdown){const i=t.period_breakdown.p1_percentage/100,o=t.period_breakdown.p2_percentage/100,r=t.period_breakdown.p3_percentage/100;c.periodBreakdown.p1_consumption+=e.consumption*i,c.periodBreakdown.p2_consumption+=e.consumption*o,c.periodBreakdown.p3_consumption+=e.consumption*r}}const r=Array.from(o.values()).sort((t,e)=>new Date(e.weekStart).getTime()-new Date(t.weekStart).getTime()),a=r.slice(0,e),n=[];for(let t=0;t<a.length-1;t++){const e=a[t],i=a[t+1],o=e.consumption-i.consumption,r=i.consumption>0?o/i.consumption*100:0,s=e.cost-i.cost,c=i.cost>0?s/i.cost*100:0;n.push({weekIndex:t,consumptionChange:o,consumptionChangePercent:r,costChange:s,costChangePercent:c})}return{weeks:a,comparisons:n}}render(){if(this._loading)return z`
        <div class="loading">
          <ha-circular-progress indeterminate></ha-circular-progress>
          <p>Loading consumption data...</p>
        </div>
      `;if(this._error){const t=this._error.includes("Configuration incomplete")||this._error.includes("configuration is required");return z`
        <div class="error-message">
          <ha-icon icon="${t?"mdi:cog-outline":"mdi:alert-circle"}" class="error-icon"></ha-icon>
          <div class="error-title">${t?"Configuration Required":"Unable to Load Data"}</div>
          <div class="error-details">${this._error}</div>
          ${t?z`
            <div class="error-details" style="margin-top: 12px; font-size: 13px;">
              Click the <strong>⋮</strong> menu in the top-right corner of this card and select <strong>Edit</strong> to configure it.
            </div>
          `:z`
            <button class="retry-button" @click=${this._loadData}>
              Retry
            </button>
          `}
        </div>
      `}const t=this.config.view||"consumption";return z`
      ${"consumption"===t?this._renderConsumptionView():""}
      ${"heat-calendar"===t?this._renderHeatCalendarView():""}
      ${"week-analysis"===t?this._renderWeekAnalysisView():""}
      ${"tariff-comparison"===t?this._renderTariffComparisonView():""}
    `}_renderConsumptionView(){return z`
      ${!1!==this.config.show_navigation?z`
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
          <button 
            class="nav-button" 
            @click=${()=>this._navigatePeriod("next")}
            ?disabled=${this._wouldNavigateToFuture()}
            style=${this._wouldNavigateToFuture()?"opacity: 0.5; cursor: not-allowed;":""}
          >
            Next →
          </button>
        </div>
      `:""}

      <div class="chart-container">
        ${this._renderChart()}
      </div>
    `}_renderHeatCalendarView(){return z`
      ${!1!==this.config.show_navigation?z`
        <div class="navigation-controls">
          <button class="nav-button" @click=${()=>this._navigatePeriod("prev")}>
            ${"year"===this.config.heat_calendar_period?"← Previous Year":"← Previous Month"}
          </button>
          <button 
            class="nav-button" 
            @click=${()=>this._navigatePeriod("next")}
            ?disabled=${this._wouldNavigateToFuture()}
            style=${this._wouldNavigateToFuture()?"opacity: 0.5; cursor: not-allowed;":""}
          >
            ${"year"===this.config.heat_calendar_period?"Next Year →":"Next Month →"}
          </button>
        </div>
      `:""}

      <div class="chart-container">
        ${this._renderHeatCalendar()}
      </div>
    `}_renderWeekAnalysisView(){return this.config.show_week_comparison?z`
      ${!1!==this.config.show_navigation?z`
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
          <button 
            class="nav-button" 
            @click=${()=>this._navigatePeriod("next")}
            ?disabled=${this._wouldNavigateToFuture()}
            style=${this._wouldNavigateToFuture()?"opacity: 0.5; cursor: not-allowed;":""}
          >
            Next →
          </button>
        </div>
      `:""}

      ${this._renderWeekComparison()}
    `:z`
        <div class="error-message">
          <div class="error-title">Week Comparison Not Enabled</div>
          <div class="error-details">
            Please enable "Show Week Comparison" in the card configuration to use the Week Analysis view.
          </div>
        </div>
      `}_renderTariffComparisonView(){return z`
      <div class="comparison-section">
        <h3 class="comparison-title">Tariff Comparison</h3>
        ${this._comparisonError?z`
          <div class="comparison-error">
            <ha-icon icon="mdi:alert"></ha-icon>
            ${this._comparisonError}
          </div>
        `:this._comparisonResult?z`
          ${this._renderComparison()}
          ${!1!==this.config.show_tariff_chart?this._renderTariffComparisonChart():""}
        `:z`
          <div class="loading">Loading tariff comparison...</div>
        `}
      </div>
    `}_formatDate(t){return t.toLocaleDateString("en-US",{month:"short",day:"numeric",year:t.getFullYear()!==(new Date).getFullYear()?"numeric":void 0})}_formatDateRange(){const{startDate:t,endDate:e}=this._getDateRange(),i=this._formatDate(t),o=this._formatDate(e);return i===o?i:`${i} - ${o}`}_renderChart(){if(this._loading)return z`<div class="loading">Loading consumption data...</div>`;if(!this._loading&&!this._error&&0===this._consumptionData.length){const t=this._formatDateRange();return z`
        <div class="loading">
          <div>No consumption data available</div>
          <div style="margin-top: 8px; font-size: 12px; color: var(--secondary-text-color);">
            Period: ${t}
          </div>
        </div>
      `}return z`
      <canvas 
        id="chart-canvas"
        class="chart-canvas"
        width="800" 
        height="300">
      </canvas>
    `}async _renderCanvasChart(){const t=this.shadowRoot?.querySelector("#chart-canvas");if(!t||this._loading||this._error||0===this._consumptionData.length)return;const e=this.config.chart_type||"line",i=800,o=300;let r=this._consumptionData.map(t=>t.consumption||t.value||0),a=this._consumptionData.map(t=>t.start_time||t.date||"");const n="heat-calendar"===(this.config.view||"consumption")&&"year"===this.config.heat_calendar_period;if("week"===this._currentPeriod&&r.length>0){const t=Pt(r,a);r=t.values,a=t.timestamps}else if(n&&r.length>0){const t=Dt(r,a);r=t.values,a=t.timestamps}let s;const c=!(!this.config.show_cost_on_chart||!this.config.selected_tariff_for_cost||null===this._tariffCosts);if(c&&this._tariffCosts&&this.config.selected_tariff_for_cost){const t=this._tariffCosts[this.config.selected_tariff_for_cost];if(t){const e="day"===this._currentPeriod?t.hourly_breakdown:t.daily_breakdown;if(e&&e.length>0){let t=e.map(t=>t.cost),a=e.map(t=>t.timestamp||t.date||"");if("week"===this._currentPeriod&&t.length>0){const e=Pt(t,a);t=e.values,a=e.timestamps}else if(n&&t.length>0){const e=Dt(t,a);t=e.values,a=e.timestamps}if(t.length===r.length){const e=Math.max(...t,.01),r=Math.min(...t,0);s={points:xt(t,{width:i,height:o,padding:{top:20,right:60,bottom:40,left:60}},r,e,a),minValue:r,maxValue:e,range:e-r||1}}}}}const l={top:20,right:s?60:20,bottom:40,left:60},d=function(t){const e=Math.min(...t,0),i=Math.max(...t,1);return{points:[],minValue:e,maxValue:i,range:i-e||1}}(r),h={width:i,height:o,padding:l};d.points=xt(r,h,d.minValue,d.maxValue,a);const p=this._getComputedColor("--primary-color","#ff69b4"),u={text:this._getComputedColor("--secondary-text-color","#b0b0b0"),accent:this._getComputedColor("--accent-color","#ff9800"),primary:p,error:this._getComputedColor("--error-color","#f44336"),warning:this._getComputedColor("--warning-color","#ff9800"),success:this._getComputedColor("--success-color","#4caf50"),info:this._getComputedColor("--info-color","#2196f3"),background:this._getComputedColor("--card-background-color","#fff"),grid:this._getComputedColor("--divider-color","rgba(255, 255, 255, 0.1)"),axis:this._getComputedColor("--divider-color","rgba(255, 255, 255, 0.2)")};this._chartInstance?this._chartInstance.resize(i,o):this._chartInstance=new It(t,{width:i,height:o,padding:l,colors:u});const _={enabled:!1},f=n?"year":this._currentPeriod;try{switch(e){case"line":await this._chartInstance.renderLineChart(d,{showArea:!0,showMovingAverage:!!this.config.show_moving_average,movingAverageDays:this.config.moving_average_days||7,showCostAxis:!(!c||!s),costData:s,animation:_,period:f,interactive:!0});break;case"bar":await this._chartInstance.renderBarChart(d,{showCostOverlay:!(!c||!s),costData:s,animation:_,period:f,interactive:!0});break;case"stacked-area":const e=this._prepareStackedData();if(e)await this._chartInstance.renderStackedAreaChart(e,{animation:_,period:f,interactive:!0});else{const e=document.createElement("div");e.className="error-message",e.innerHTML='\n              <div class="error-title">Stacked Area Chart Unavailable</div>\n              <div class="error-details">\n                Period breakdown data (P1/P2/P3) is not available. \n                Please ensure tariff comparison is enabled or period data is available from the service.\n              </div>\n            ',t.parentElement?.replaceChild(e,t)}}}catch(t){yt.error("Error rendering chart: ",t instanceof Error?t.message:String(t))}}_prepareStackedData(){const t=this._extractPeriodData();if(!t||0===t.length)return null;const e=t.map(t=>t.p1||0),i=t.map(t=>t.p2||0),o=t.map(t=>t.p3||0),r=o.map((t,e)=>t+(i[e]||0)),a=r.map((t,i)=>t+(e[i]||0)),n=Math.max(...a,1),s=n-0||1,c=this._getComputedColor("--error-color","#f44336"),l=this._getComputedColor("--warning-color","#ff9800");return{layers:[{data:o,color:this._getComputedColor("--success-color","#4caf50"),opacity:.6,label:"P3 (Valley)"},{data:i,color:l,opacity:.6,label:"P2 (Flat)"},{data:e,color:c,opacity:.6,label:"P1 (Peak)"}],timestamps:t.map(t=>t.timestamp),minValue:0,maxValue:n,range:s}}_renderComparison(){if(!this._comparisonResult||!this._comparisonResult.tariffs||0===this._comparisonResult.tariffs.length)return z`<p>No comparison data available</p>`;const t=[...this._comparisonResult.tariffs].sort((t,e)=>t.total_cost-e.total_cost),e=this._comparisonResult.best_tariff?.entry_id,i=this._comparisonResult.tariffs[0],o=i?.period_breakdown;return z`
      <!-- Consumption Summary -->
      ${o?z`
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
        ${t.map(t=>z`
          <div class="tariff-item">
            <div class="tariff-header">
              <span class="tariff-name">
                ${t.name}
                ${e===t.entry_id?z`<span class="best-tariff-badge">Best</span>`:""}
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

      ${this._comparisonResult.savings?z`
        <div class="savings-info">
          <strong>Potential Savings:</strong> €${this._comparisonResult.savings.amount.toFixed(2)} 
          (${this._comparisonResult.savings.percentage.toFixed(1)}%) by choosing the best tariff
        </div>
      `:""}
    `}_renderPeriodBreakdown(t,e){const i=Math.max(t.p1_consumption,t.p2_consumption,t.p3_consumption);let o=0,r=0,a=0;if(e.hourly_breakdown&&e.hourly_breakdown.length>0)for(const t of e.hourly_breakdown)"P1"===t.period&&t.consumption>0?o+=t.cost:"P2"===t.period&&t.consumption>0?r+=t.cost:"P3"===t.period&&t.consumption>0&&(a+=t.cost);const n=t.p1_consumption>0?o/t.p1_consumption:0,s=t.p2_consumption>0?r/t.p2_consumption:0,c=t.p3_consumption>0?a/t.p3_consumption:0;return z`
      <div class="period-breakdown">
        <div class="period-breakdown-title">Consumption by Period</div>
        <div class="period-bars">
          <div class="period-bar">
            <div
              class="period-bar-fill p1"
              style="height: ${i>0?t.p1_consumption/i*100:0}%"
            ></div>
            <div class="period-bar-label">
              <strong>P1 Peak</strong><br>
              ${t.p1_consumption.toFixed(2)} kWh<br>
              ${t.p1_percentage.toFixed(1)}%<br>
              ${o>0?z`<span class="cost-per-kwh">€${n.toFixed(3)}/kWh</span>`:""}
            </div>
          </div>
          <div class="period-bar">
            <div
              class="period-bar-fill p2"
              style="height: ${i>0?t.p2_consumption/i*100:0}%"
            ></div>
            <div class="period-bar-label">
              <strong>P2 Flat</strong><br>
              ${t.p2_consumption.toFixed(2)} kWh<br>
              ${t.p2_percentage.toFixed(1)}%<br>
              ${r>0?z`<span class="cost-per-kwh">€${s.toFixed(3)}/kWh</span>`:""}
            </div>
          </div>
          <div class="period-bar">
            <div
              class="period-bar-fill p3"
              style="height: ${i>0?t.p3_consumption/i*100:0}%"
            ></div>
            <div class="period-bar-label">
              <strong>P3 Valley</strong><br>
              ${t.p3_consumption.toFixed(2)} kWh<br>
              ${t.p3_percentage.toFixed(1)}%<br>
              ${a>0?z`<span class="cost-per-kwh">€${c.toFixed(3)}/kWh</span>`:""}
            </div>
          </div>
        </div>
      </div>
    `}static getStubConfig(){return{type:"custom:octopus-consumption-card",source_entry_id:"",view:"consumption",default_period:"week",chart_type:"line",tariff_entry_ids:[],show_cost_on_chart:!1,show_navigation:!0,show_period_distribution:!1,show_moving_average:!1,moving_average_days:7,heat_calendar_period:"month",show_week_comparison:!1,week_comparison_count:2,show_cost_trend:!1,cost_moving_average_days:30,show_tariff_chart:!0}}static getConfigElement(){return document.createElement("octopus-consumption-card-editor")}}function Ut(){return Nt}function Ht(){return vt}function zt(){return Nt.getStubConfig()}if(Nt.enabledWarnings=[],Nt.SERVICE_TIMEOUT=1e4,Nt.SERVICE_DOMAIN="octopus_energy_es",Nt.SERVICE_FETCH_CONSUMPTION="fetch_consumption",Nt.SERVICE_COMPARE_TARIFFS="compare_tariffs",Nt.styles=ft,Vt([ht({attribute:!1})],Nt.prototype,"hass",void 0),Vt([ht({attribute:!1})],Nt.prototype,"config",void 0),Vt([pt()],Nt.prototype,"_consumptionData",void 0),Vt([pt()],Nt.prototype,"_comparisonResult",void 0),Vt([pt()],Nt.prototype,"_tariffCosts",void 0),Vt([pt()],Nt.prototype,"_loading",void 0),Vt([pt()],Nt.prototype,"_error",void 0),Vt([pt()],Nt.prototype,"_comparisonError",void 0),Vt([pt()],Nt.prototype,"_currentPeriod",void 0),Vt([pt()],Nt.prototype,"_currentDate",void 0),Vt([pt()],Nt.prototype,"_weekComparisonData",void 0),"undefined"!=typeof window&&(window.getCardElement=Ut,window.getCardConfigElement=Ht,window.getStubConfig=zt),"undefined"!=typeof window&&"undefined"!=typeof customElements){try{customElements.get("octopus-consumption-card")||customElements.define("octopus-consumption-card",Nt)}catch(t){yt.error("Failed to register octopus-consumption-card: ",t instanceof Error?t.message:String(t))}if(void 0===window.customCards&&(window.customCards=[]),Array.isArray(window.customCards)){window.customCards.some(t=>"custom:octopus-consumption-card"===t.type)||window.customCards.push({type:"custom:octopus-consumption-card",name:"Octopus Energy España Consumption Card",preview:!1,description:"Display consumption data and tariff comparisons for Octopus Energy España"})}window.customCards["octopus-consumption-card"]=Nt,window.OctopusConsumptionCard=Nt;const t="0.5.13",e=!!customElements.get("octopus-consumption-card");console.groupCollapsed("%c⚡ Octopus Energy España","background: linear-gradient(90deg, #e10090 0%, #c000a0 100%);color: #fff;padding: 4px 8px;border-radius: 4px;font-weight: bold;"),yt.info("Consumption Card",`v${t}`),yt.info(e?"✓ Custom element: ":"✗ Custom element: ","octopus-consumption-card"),yt.success("✓ Added to card picker"),yt.success("✓ Visual editor enabled"),yt.info("ℹ Supported languages: ","en, es, be"),e||yt.error("✗ Registration failed! Element not found in customElements registry"),console.groupEnd()}return t.OctopusConsumptionCard=Nt,t.getCardConfigElement=Ht,t.getCardElement=Ut,t.getStubConfig=zt,t}({});
