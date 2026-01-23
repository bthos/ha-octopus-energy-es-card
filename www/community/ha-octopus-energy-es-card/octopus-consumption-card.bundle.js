var OctopusConsumptionCard=function(t){"use strict";
/**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const e=globalThis,r=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),i=new WeakMap;let a=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(r&&void 0===t){const r=void 0!==e&&1===e.length;r&&(t=i.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&i.set(e,t))}return t}toString(){return this.cssText}};const o=(t,...e)=>{const r=1===t.length?t[0]:e.reduce((e,r,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[n+1],t[0]);return new a(r,t,n)},s=r?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return(t=>new a("string"==typeof t?t:t+"",void 0,n))(e)})(t):t,{is:c,defineProperty:l,getOwnPropertyDescriptor:d,getOwnPropertyNames:h,getOwnPropertySymbols:u,getPrototypeOf:p}=Object,f=globalThis,_=f.trustedTypes,g=_?_.emptyScript:"",m=f.reactiveElementPolyfillSupport,v=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},w=(t,e)=>!c(t,e),b={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:w};
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),n=this.getPropertyDescriptor(t,r,e);void 0!==n&&l(this.prototype,t,n)}}static getPropertyDescriptor(t,e,r){const{get:n,set:i}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:n,set(e){const a=n?.call(this);i?.call(this,e),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,e=[...h(t),...u(t)];for(const r of e)this.createProperty(r,t[r])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,r]of e)this.elementProperties.set(t,r)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const r=this._$Eu(t,e);void 0!==r&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const t of r)e.unshift(s(t))}else void 0!==t&&e.push(s(t));return e}static _$Eu(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,n)=>{if(r)t.adoptedStyleSheets=n.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const r of n){const n=document.createElement("style"),i=e.litNonce;void 0!==i&&n.setAttribute("nonce",i),n.textContent=r.cssText,t.appendChild(n)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ET(t,e){const r=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,r);if(void 0!==n&&!0===r.reflect){const i=(void 0!==r.converter?.toAttribute?r.converter:y).toAttribute(e,r.type);this._$Em=t,null==i?this.removeAttribute(n):this.setAttribute(n,i),this._$Em=null}}_$AK(t,e){const r=this.constructor,n=r._$Eh.get(t);if(void 0!==n&&this._$Em!==n){const t=r.getPropertyOptions(n),i="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=n;const a=i.fromAttribute(e,t.type);this[n]=a??this._$Ej?.get(n)??a,this._$Em=null}}requestUpdate(t,e,r,n=!1,i){if(void 0!==t){const a=this.constructor;if(!1===n&&(i=this[t]),r??=a.getPropertyOptions(t),!((r.hasChanged??w)(i,e)||r.useDefault&&r.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(a._$Eu(t,r))))return;this.C(t,e,r)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:r,reflect:n,wrapped:i},a){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??e??this[t]),!0!==i||void 0!==a)||(this._$AL.has(t)||(this.hasUpdated||r||(e=void 0),this._$AL.set(t,e)),!0===n&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,r]of t){const{wrapped:t}=r,n=this[e];!0!==t||this._$AL.has(e)||void 0===n||this.C(e,void 0,r,n)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[v("elementProperties")]=new Map,x[v("finalized")]=new Map,m?.({ReactiveElement:x}),(f.reactiveElementVersions??=[]).push("2.1.2");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const k=globalThis,$=t=>t,D=k.trustedTypes,S=D?D.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,A="?"+E,M=`<${A}>`,P=document,T=()=>P.createComment(""),N=t=>null===t||"object"!=typeof t&&"function"!=typeof t,H=Array.isArray,O="[ \t\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,F=/>/g,L=RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),I=/'/g,j=/"/g,V=/^(?:script|style|textarea|title)$/i,Y=(t=>(e,...r)=>({_$litType$:t,strings:e,values:r}))(1),U=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),q=new WeakMap,B=P.createTreeWalker(P,129);function X(t,e){if(!H(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const G=(t,e)=>{const r=t.length-1,n=[];let i,a=2===e?"<svg>":3===e?"<math>":"",o=R;for(let e=0;e<r;e++){const r=t[e];let s,c,l=-1,d=0;for(;d<r.length&&(o.lastIndex=d,c=o.exec(r),null!==c);)d=o.lastIndex,o===R?"!--"===c[1]?o=z:void 0!==c[1]?o=F:void 0!==c[2]?(V.test(c[2])&&(i=RegExp("</"+c[2],"g")),o=L):void 0!==c[3]&&(o=L):o===L?">"===c[0]?(o=i??R,l=-1):void 0===c[1]?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=void 0===c[3]?L:'"'===c[3]?j:I):o===j||o===I?o=L:o===z||o===F?o=R:(o=L,i=void 0);const h=o===L&&t[e+1].startsWith("/>")?" ":"";a+=o===R?r+M:l>=0?(n.push(s),r.slice(0,l)+C+r.slice(l)+E+h):r+E+(-2===l?e:h)}return[X(t,a+(t[r]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),n]};class J{constructor({strings:t,_$litType$:e},r){let n;this.parts=[];let i=0,a=0;const o=t.length-1,s=this.parts,[c,l]=G(t,e);if(this.el=J.createElement(c,r),B.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(n=B.nextNode())&&s.length<o;){if(1===n.nodeType){if(n.hasAttributes())for(const t of n.getAttributeNames())if(t.endsWith(C)){const e=l[a++],r=n.getAttribute(t).split(E),o=/([.?@])?(.*)/.exec(e);s.push({type:1,index:i,name:o[2],strings:r,ctor:"."===o[1]?et:"?"===o[1]?rt:"@"===o[1]?nt:tt}),n.removeAttribute(t)}else t.startsWith(E)&&(s.push({type:6,index:i}),n.removeAttribute(t));if(V.test(n.tagName)){const t=n.textContent.split(E),e=t.length-1;if(e>0){n.textContent=D?D.emptyScript:"";for(let r=0;r<e;r++)n.append(t[r],T()),B.nextNode(),s.push({type:2,index:++i});n.append(t[e],T())}}}else if(8===n.nodeType)if(n.data===A)s.push({type:2,index:i});else{let t=-1;for(;-1!==(t=n.data.indexOf(E,t+1));)s.push({type:7,index:i}),t+=E.length-1}i++}}static createElement(t,e){const r=P.createElement("template");return r.innerHTML=t,r}}function Z(t,e,r=t,n){if(e===U)return e;let i=void 0!==n?r._$Co?.[n]:r._$Cl;const a=N(e)?void 0:e._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),void 0===a?i=void 0:(i=new a(t),i._$AT(t,r,n)),void 0!==n?(r._$Co??=[])[n]=i:r._$Cl=i),void 0!==i&&(e=Z(t,i._$AS(t,e.values),i,n)),e}class K{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,n=(t?.creationScope??P).importNode(e,!0);B.currentNode=n;let i=B.nextNode(),a=0,o=0,s=r[0];for(;void 0!==s;){if(a===s.index){let e;2===s.type?e=new Q(i,i.nextSibling,this,t):1===s.type?e=new s.ctor(i,s.name,s.strings,this,t):6===s.type&&(e=new it(i,this,t)),this._$AV.push(e),s=r[++o]}a!==s?.index&&(i=B.nextNode(),a++)}return B.currentNode=P,n}p(t){let e=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,n){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),N(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==U&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>H(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==W&&N(this._$AH)?this._$AA.nextSibling.data=t:this.T(P.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:r}=t,n="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=J.createElement(X(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===n)this._$AH.p(e);else{const t=new K(n,this),r=t.u(this.options);t.p(e),this.T(r),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new J(t)),e}k(t){H(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,n=0;for(const i of t)n===e.length?e.push(r=new Q(this.O(T()),this.O(T()),this,this.options)):r=e[n],r._$AI(i),n++;n<e.length&&(this._$AR(r&&r._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=$(t).nextSibling;$(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,n,i){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=i,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=W}_$AI(t,e=this,r,n){const i=this.strings;let a=!1;if(void 0===i)t=Z(this,t,e,0),a=!N(t)||t!==this._$AH&&t!==U,a&&(this._$AH=t);else{const n=t;let o,s;for(t=i[0],o=0;o<i.length-1;o++)s=Z(this,n[r+o],e,o),s===U&&(s=this._$AH[o]),a||=!N(s)||s!==this._$AH[o],s===W?t=W:t!==W&&(t+=(s??"")+i[o+1]),this._$AH[o]=s}a&&!n&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}}class rt extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class nt extends tt{constructor(t,e,r,n,i){super(t,e,r,n,i),this.type=5}_$AI(t,e=this){if((t=Z(this,t,e,0)??W)===U)return;const r=this._$AH,n=t===W&&r!==W||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==W&&(r===W||n);n&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}}const at=k.litHtmlPolyfillSupport;at?.(J,Q),(k.litHtmlVersions??=[]).push("3.3.2");const ot=globalThis;
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */class st extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,r)=>{const n=r?.renderBefore??e;let i=n._$litPart$;if(void 0===i){const t=r?.renderBefore??null;n._$litPart$=i=new Q(e.insertBefore(T(),t),t,void 0,r??{})}return i._$AI(t),i})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return U}}st._$litElement$=!0,st.finalized=!0,ot.litElementHydrateSupport?.({LitElement:st});const ct=ot.litElementPolyfillSupport;ct?.({LitElement:st}),(ot.litElementVersions??=[]).push("4.2.2");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const lt={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:w},dt=(t=lt,e,r)=>{const{kind:n,metadata:i}=r;let a=globalThis.litPropertyMetadata.get(i);if(void 0===a&&globalThis.litPropertyMetadata.set(i,a=new Map),"setter"===n&&((t=Object.create(t)).wrapped=!0),a.set(r.name,t),"accessor"===n){const{name:n}=r;return{set(r){const i=e.get.call(this);e.set.call(this,r),this.requestUpdate(n,i,t,!0,r)},init(e){return void 0!==e&&this.C(n,void 0,t,e),e}}}if("setter"===n){const{name:n}=r;return function(r){const i=this[n];e.call(this,r),this.requestUpdate(n,i,t,!0,r)}}throw Error("Unsupported decorator location: "+n)};function ht(t){return(e,r)=>"object"==typeof r?dt(t,e,r):((t,e,r)=>{const n=e.hasOwnProperty(r);return e.constructor.createProperty(r,t),n?Object.getOwnPropertyDescriptor(e,r):void 0})(t,e,r)}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function ut(t){return ht({...t,state:!0,attribute:!1})}const pt={en:{"editor.basic_settings":"Basic Settings","editor.source_entry_id_label":"Primary Tariff","editor.source_entry_id_helper":"Select the Octopus Energy tariff to display consumption data for","editor.display_options":"Display Options","editor.default_period_label":"Default Period","editor.default_period_helper":"Initial time period to display","editor.chart_type_label":"Chart Type","editor.chart_type_helper":"Type of chart to display","editor.show_navigation_label":"Show Navigation","editor.show_navigation_helper":"Show period navigation buttons","editor.tariff_comparison":"Tariff Comparison","editor.tariff_entry_ids_label":"Comparison Tariffs","editor.tariff_entry_ids_helper":"Optional: Select additional tariffs to compare costs","editor.cost_display":"Cost Display","editor.show_cost_on_chart_label":"Show Cost on Chart","editor.show_cost_on_chart_helper":"Display cost information on the chart","editor.selected_tariff_for_cost_label":"Selected Tariff for Cost","editor.selected_tariff_for_cost_helper":"Tariff entry ID to use for cost calculation","editor.consumption_sensor_label":"Consumption Sensor Override","editor.consumption_sensor_helper":"Optional: Manually specify a consumption sensor instead of using integration data","editor.migration_warning":"Configuration migration required. Please edit the card and select your tariff.","editor.select_tariff":"Select a tariff to get started","editor.view_label":"View","editor.view_helper":"Select which view to display","editor.view_consumption":"Consumption","editor.view_heat_calendar":"Heat Calendar","editor.view_week_analysis":"Week Analysis","editor.view_tariff_comparison":"Tariff Comparison","editor.chart_type_line":"Line","editor.chart_type_bar":"Bar","editor.chart_type_stacked_area":"Stacked Area","editor.advanced_visualization":"Advanced Visualization","editor.show_period_distribution_label":"Show Period Distribution","editor.show_period_distribution_helper":"Show P1/P2/P3 consumption breakdown on chart","editor.show_moving_average_label":"Show Moving Average","editor.show_moving_average_helper":"Display trend line with moving average","editor.moving_average_days_label":"Moving Average Period","editor.moving_average_days_helper":"Number of periods for moving average calculation. Hours for day view, days for week/month views (default: 7)","editor.period_day":"Day","editor.period_week":"Week","editor.period_month":"Month","editor.heat_calendar_period_label":"Heat Calendar Period","editor.heat_calendar_period_helper":"Time period for heat calendar display","editor.heat_calendar_period_month":"Month","editor.heat_calendar_period_year":"Year","editor.show_week_comparison_label":"Show Week Comparison","editor.show_week_comparison_helper":"Compare consumption across consecutive weeks","editor.week_comparison_count_label":"Week Comparison Count","editor.week_comparison_count_helper":"Number of weeks to compare (default: 2)","editor.show_cost_trend_label":"Show Cost Trend","editor.show_cost_trend_helper":"Display cost trend with moving average","editor.cost_moving_average_days_label":"Cost Moving Average Period","editor.cost_moving_average_days_helper":"Number of periods for cost moving average. Hours for day view, days for week/month views (default: 30)","editor.show_tariff_chart_label":"Show Tariff Chart","editor.show_tariff_chart_helper":"Display visual chart in tariff comparison section","chart.accessibility.title":"Energy consumption chart for selected period","chart.accessibility.title_with_data":"Energy consumption chart. {period}. Total: {total} kWh","chart.print.header":"Energy Consumption Chart","card.loading":"Loading consumption data...","card.error.configuration_required":"Configuration Required","card.error.unable_to_load":"Unable to Load Data","card.error.config_help":"Click the ⋮ menu in the top-right corner of this card and select Edit to configure it.","card.button.retry":"Retry","card.button.previous":"← Previous","card.button.next":"Next →","card.title.electricity":"Electricity","card.heat_calendar.unavailable":"Heat Calendar Unavailable","card.heat_calendar.unavailable_details":"Heat calendar view requires consumption data. Please ensure data is available for the selected period.","card.heat_calendar.intensity_info":"Intensity levels are calculated based on consumption percentiles: Low (bottom 33%), Medium (middle 33%), High (top 33%)","card.heat_calendar.intensity_label":"Intensity Levels","card.heat_calendar.intensity_low_tooltip":"Low intensity: Bottom 33% of consumption values","card.heat_calendar.intensity_medium_tooltip":"Medium intensity: Middle 33% of consumption values","card.heat_calendar.intensity_high_tooltip":"High intensity: Top 33% of consumption values","card.week_comparison.no_data":"No week comparison data available","card.week_comparison.incomplete":"Incomplete","card.week_comparison.days_available":"Days Available","card.week_comparison.days":"days","card.week_comparison.forecast":"Forecast","card.week_comparison.consumption":"Consumption","card.week_comparison.cost":"Cost","card.week_comparison.forecast_comparison_tooltip":"Comparison based on forecast values","card.tariff_comparison.loading":"Loading tariff comparison...","card.tariff_comparison.info":"Comparison based on last 365 days of consumption data","card.no_data":"No consumption data available","card.stacked_area.unavailable":"Stacked Area Chart Unavailable","card.stacked_area.unavailable_details":"Stacked area chart requires period breakdown data (P1/P2/P3). This data may not be available for the selected tariff or period.","card.month.jan":"Jan","card.month.feb":"Feb","card.month.mar":"Mar","card.month.apr":"Apr","card.month.may":"May","card.month.jun":"Jun","card.month.jul":"Jul","card.month.aug":"Aug","card.month.sep":"Sep","card.month.oct":"Oct","card.month.nov":"Nov","card.month.dec":"Dec","card.month.long.jan":"January","card.month.long.feb":"February","card.month.long.mar":"March","card.month.long.apr":"April","card.month.long.may":"May","card.month.long.jun":"June","card.month.long.jul":"July","card.month.long.aug":"August","card.month.long.sep":"September","card.month.long.oct":"October","card.month.long.nov":"November","card.month.long.dec":"December","card.date.of":"of","card.day.sun":"Sun","card.day.mon":"Mon","card.day.tue":"Tue","card.day.wed":"Wed","card.day.thu":"Thu","card.day.fri":"Fri","card.day.sat":"Sat"},es:{"editor.basic_settings":"Configuración Básica","editor.source_entry_id_label":"Tarifa Principal","editor.source_entry_id_helper":"Selecciona la tarifa de Octopus Energy para mostrar datos de consumo","editor.display_options":"Opciones de Visualización","editor.default_period_label":"Período Predeterminado","editor.default_period_helper":"Período de tiempo inicial a mostrar","editor.chart_type_label":"Tipo de Gráfico","editor.chart_type_helper":"Tipo de gráfico a mostrar","editor.show_navigation_label":"Mostrar Navegación","editor.show_navigation_helper":"Mostrar botones de navegación de período","editor.tariff_comparison":"Comparación de Tarifas","editor.tariff_entry_ids_label":"Tarifas de Comparación","editor.tariff_entry_ids_helper":"Opcional: Selecciona tarifas adicionales para comparar costes","editor.cost_display":"Visualización de Costes","editor.show_cost_on_chart_label":"Mostrar Coste en Gráfico","editor.show_cost_on_chart_helper":"Mostrar información de costes en el gráfico","editor.selected_tariff_for_cost_label":"Tarifa Seleccionada para Coste","editor.selected_tariff_for_cost_helper":"ID de entrada de tarifa a usar para cálculo de costes","editor.consumption_sensor_label":"Sensor de Consumo Manual","editor.consumption_sensor_helper":"Opcional: Especifica manualmente un sensor de consumo en lugar de usar datos de integración","editor.migration_warning":"Se requiere migración de configuración. Por favor, edita la tarjeta y selecciona tu tarifa.","editor.select_tariff":"Selecciona una tarifa para comenzar","editor.view_label":"Vista","editor.view_helper":"Selecciona qué vista mostrar","editor.view_consumption":"Resumen de Consumo","editor.view_heat_calendar":"Calendario de Calor","editor.view_week_analysis":"Análisis Semanal","editor.view_tariff_comparison":"Comparación de Tarifas","editor.chart_type_line":"Línea","editor.chart_type_bar":"Barras","editor.chart_type_stacked_area":"Área Apilada","editor.advanced_visualization":"Visualización Avanzada","editor.show_period_distribution_label":"Mostrar Distribución por Períodos","editor.show_period_distribution_helper":"Mostrar desglose de consumo P1/P2/P3 en el gráfico","editor.show_moving_average_label":"Mostrar Media Móvil","editor.show_moving_average_helper":"Mostrar línea de tendencia con media móvil","editor.moving_average_days_label":"Período de Media Móvil","editor.moving_average_days_helper":"Número de períodos para el cálculo de la media móvil. Horas para vista diaria, días para vistas semanales/mensuales (predeterminado: 7)","editor.period_day":"Día","editor.period_week":"Semana","editor.period_month":"Mes","editor.heat_calendar_period_label":"Período del Calendario de Calor","editor.heat_calendar_period_helper":"Período de tiempo para el calendario de calor","editor.heat_calendar_period_month":"Mes","editor.heat_calendar_period_year":"Año","editor.show_week_comparison_label":"Mostrar Comparación Semanal","editor.show_week_comparison_helper":"Comparar consumo entre semanas consecutivas","editor.week_comparison_count_label":"Número de Semanas a Comparar","editor.week_comparison_count_helper":"Número de semanas para comparar (predeterminado: 2)","editor.show_cost_trend_label":"Mostrar Tendencia de Costes","editor.show_cost_trend_helper":"Mostrar tendencia de costes con media móvil","editor.cost_moving_average_days_label":"Período de Media Móvil de Costes","editor.cost_moving_average_days_helper":"Número de períodos para la media móvil de costes. Horas para vista diaria, días para vistas semanales/mensuales (predeterminado: 30)","editor.show_tariff_chart_label":"Mostrar Gráfico de Tarifas","editor.show_tariff_chart_helper":"Mostrar gráfico visual en la sección de comparación de tarifas","chart.accessibility.title":"Gráfico de consumo energético para el período seleccionado","chart.accessibility.title_with_data":"Gráfico de consumo energético. {period}. Total: {total} kWh","chart.print.header":"Gráfico de Consumo Energético","card.loading":"Cargando datos de consumo...","card.error.configuration_required":"Configuración Requerida","card.error.unable_to_load":"No se Puede Cargar Datos","card.error.config_help":"Haz clic en el menú ⋮ en la esquina superior derecha de esta tarjeta y selecciona Editar para configurarla.","card.button.retry":"Reintentar","card.button.previous":"← Anterior","card.button.next":"Siguiente →","card.title.electricity":"Electricidad","card.heat_calendar.unavailable":"Calendario de Calor No Disponible","card.heat_calendar.unavailable_details":"La vista del calendario de calor requiere datos de consumo. Por favor, asegúrate de que los datos estén disponibles para el período seleccionado.","card.heat_calendar.intensity_info":"Los niveles de intensidad se calculan según percentiles de consumo: Bajo (33% inferior), Medio (33% medio), Alto (33% superior)","card.heat_calendar.intensity_label":"Niveles de Intensidad","card.heat_calendar.intensity_low_tooltip":"Intensidad baja: 33% inferior de valores de consumo","card.heat_calendar.intensity_medium_tooltip":"Intensidad media: 33% medio de valores de consumo","card.heat_calendar.intensity_high_tooltip":"Intensidad alta: 33% superior de valores de consumo","card.week_comparison.no_data":"No hay datos de comparación semanal disponibles","card.week_comparison.incomplete":"Incompleta","card.week_comparison.days_available":"Días Disponibles","card.week_comparison.days":"días","card.week_comparison.forecast":"Pronóstico","card.week_comparison.consumption":"Consumo","card.week_comparison.cost":"Coste","card.week_comparison.forecast_comparison_tooltip":"Comparación basada en valores pronosticados","card.tariff_comparison.loading":"Cargando comparación de tarifas...","card.tariff_comparison.info":"Comparación basada en los últimos 365 días de datos de consumo","card.no_data":"No hay datos de consumo disponibles","card.stacked_area.unavailable":"Gráfico de Área Apilada No Disponible","card.stacked_area.unavailable_details":"El gráfico de área apilada requiere datos de desglose por períodos (P1/P2/P3). Estos datos pueden no estar disponibles para la tarifa o período seleccionado.","card.month.jan":"ene","card.month.feb":"feb","card.month.mar":"mar","card.month.apr":"abr","card.month.may":"may","card.month.jun":"jun","card.month.jul":"jul","card.month.aug":"ago","card.month.sep":"sep","card.month.oct":"oct","card.month.nov":"nov","card.month.dec":"dic","card.month.long.jan":"enero","card.month.long.feb":"febrero","card.month.long.mar":"marzo","card.month.long.apr":"abril","card.month.long.may":"mayo","card.month.long.jun":"junio","card.month.long.jul":"julio","card.month.long.aug":"agosto","card.month.long.sep":"septiembre","card.month.long.oct":"octubre","card.month.long.nov":"noviembre","card.month.long.dec":"diciembre","card.date.of":"de","card.day.sun":"Dom","card.day.mon":"Lun","card.day.tue":"Mar","card.day.wed":"Mié","card.day.thu":"Jue","card.day.fri":"Vie","card.day.sat":"Sáb"},be:{"editor.basic_settings":"Асноўныя налады","editor.source_entry_id_label":"Асноўны тарыф","editor.source_entry_id_helper":"Выберыце тарыф Octopus Energy для адлюстравання даных спажывання","editor.display_options":"Параметры адлюстравання","editor.default_period_label":"Перыяд па змаўчанні","editor.default_period_helper":"Пачатковы часовы перыяд для адлюстравання","editor.chart_type_label":"Тып дыяграмы","editor.chart_type_helper":"Тып дыяграмы для адлюстравання","editor.show_navigation_label":"Паказаць навігацыю","editor.show_navigation_helper":"Паказаць кнопкі навігацыі па перыядах","editor.tariff_comparison":"Параўнанне тарыфаў","editor.tariff_entry_ids_label":"Тарыфы для параўнання","editor.tariff_entry_ids_helper":"Неабавязкова: Выберыце дадатковыя тарыфы для параўнання кошту","editor.cost_display":"Адлюстраванне кошту","editor.show_cost_on_chart_label":"Паказаць кошт на дыяграме","editor.show_cost_on_chart_helper":"Адлюстраваць інфармацыю аб кошце на дыяграме","editor.selected_tariff_for_cost_label":"Выбраны тарыф для кошту","editor.selected_tariff_for_cost_helper":"ID запісу тарыфу для разліку кошту","editor.consumption_sensor_label":"Ручны сенсар спажывання","editor.consumption_sensor_helper":"Неабавязкова: Укажыце сенсар спажывання ўручную замест выкарыстання даных інтэграцыі","editor.migration_warning":"Патрабуецца міграцыя канфігурацыі. Калі ласка, адрэдагуйце картку і выберыце свой тарыф.","editor.select_tariff":"Выберыце тарыф для пачатку","editor.view_label":"Выгляд","editor.view_helper":"Выберыце, які выгляд адлюстраваць","editor.view_consumption":"Агляд спажывання","editor.view_heat_calendar":"Каляндар цяпла","editor.view_week_analysis":"Тыднёвы аналіз","editor.view_tariff_comparison":"Параўнанне тарыфаў","editor.chart_type_line":"Лінія","editor.chart_type_bar":"Слупкі","editor.chart_type_stacked_area":"Стопачная дыяграма","editor.advanced_visualization":"Пашыраная візуалізацыя","editor.show_period_distribution_label":"Паказаць размеркаванне па перыядах","editor.show_period_distribution_helper":"Паказаць разбіўку спажывання P1/P2/P3 на дыяграме","editor.show_moving_average_label":"Паказаць рухомае сярэдняе","editor.show_moving_average_helper":"Паказаць лінію трэнду з рухомым сярэднім","editor.moving_average_days_label":"Перыяд рухомага сярэдняга","editor.moving_average_days_helper":"Колькасць перыядаў для разліку рухомага сярэдняга. Гадзіны для дзённага выгляду, дні для тыднёвых/месячных выглядаў (па змаўчанні: 7)","editor.period_day":"Дзень","editor.period_week":"Тыдзень","editor.period_month":"Месяц","editor.heat_calendar_period_label":"Перыяд каляндара цяпла","editor.heat_calendar_period_helper":"Часавы перыяд для адлюстравання каляндара цяпла","editor.heat_calendar_period_month":"Месяц","editor.heat_calendar_period_year":"Год","editor.show_week_comparison_label":"Паказаць параўнанне тыдняў","editor.show_week_comparison_helper":"Параўнаць спажыванне паміж паслядоўнымі тыднямі","editor.week_comparison_count_label":"Колькасць тыдняў для параўнання","editor.week_comparison_count_helper":"Колькасць тыдняў для параўнання (па змаўчанні: 2)","editor.show_cost_trend_label":"Паказаць трэнд кошту","editor.show_cost_trend_helper":"Адлюстраваць трэнд кошту з рухомым сярэднім","editor.cost_moving_average_days_label":"Перыяд рухомага сярэдняга кошту","editor.cost_moving_average_days_helper":"Колькасць перыядаў для рухомага сярэдняга кошту. Гадзіны для дзённага выгляду, дні для тыднёвых/месячных выглядаў (па змаўчанні: 30)","editor.show_tariff_chart_label":"Паказаць дыяграму тарыфаў","editor.show_tariff_chart_helper":"Адлюстраваць візуальную дыяграму ў раздзеле параўнання тарыфаў","chart.accessibility.title":"Дыяграма спажывання энергіі для выбранага перыяду","chart.accessibility.title_with_data":"Дыяграма спажывання энергіі. {period}. Усяго: {total} кВт·г","chart.print.header":"Дыяграма Спажывання Энергіі","card.loading":"Загрузка даных спажывання...","card.error.configuration_required":"Патрабуецца канфігурацыя","card.error.unable_to_load":"Немагчыма загрузіць даныя","card.error.config_help":"Націсніце меню ⋮ у верхнім правым куце гэтай карткі і выберыце Рэдагаваць для налады.","card.button.retry":"Паспрабаваць зноў","card.button.previous":"← Папярэдні","card.button.next":"Наступны →","card.title.electricity":"Электрычнасць","card.heat_calendar.unavailable":"Каляндар цяпла недаступны","card.heat_calendar.unavailable_details":"Выгляд каляндара цяпла патрабуе даных спажывання. Калі ласка, пераканайцеся, што даныя даступныя для выбранага перыяду.","card.heat_calendar.intensity_info":"Узроўні інтэнсіўнасці вылічваюцца на аснове перцэнтыляў спажывання: Нізкі (ніжнія 33%), Сярэдні (сярэднія 33%), Высокі (верхнія 33%)","card.heat_calendar.intensity_label":"Узроўні інтэнсіўнасці","card.heat_calendar.intensity_low_tooltip":"Нізкая інтэнсіўнасць: ніжнія 33% значэнняў спажывання","card.heat_calendar.intensity_medium_tooltip":"Сярэдняя інтэнсіўнасць: сярэднія 33% значэнняў спажывання","card.heat_calendar.intensity_high_tooltip":"Высокая інтэнсіўнасць: верхнія 33% значэнняў спажывання","card.week_comparison.no_data":"Даных параўнання тыдняў няма","card.week_comparison.incomplete":"Незавершаны","card.week_comparison.days_available":"Дзён даступна","card.week_comparison.days":"дзён","card.week_comparison.forecast":"Прагноз","card.week_comparison.consumption":"Спажыванне","card.week_comparison.cost":"Кошт","card.week_comparison.forecast_comparison_tooltip":"Параўнанне заснавана на прагнозных значэннях","card.tariff_comparison.loading":"Загрузка параўнання тарыфаў...","card.tariff_comparison.info":"Параўнанне заснавана на апошніх 365 днях даных спажывання","card.no_data":"Даных спажывання няма","card.stacked_area.unavailable":"Стопачная дыяграма недаступная","card.stacked_area.unavailable_details":"Стопачная дыяграма патрабуе даных разбіўкі па перыядах (P1/P2/P3). Гэтыя даныя могуць быць недаступныя для выбранага тарыфу або перыяду.","card.month.jan":"студз","card.month.feb":"лют","card.month.mar":"сакав","card.month.apr":"крас","card.month.may":"май","card.month.jun":"чэрв","card.month.jul":"ліп","card.month.aug":"жнів","card.month.sep":"вер","card.month.oct":"кастр","card.month.nov":"ліст","card.month.dec":"снеж","card.month.long.jan":"студзеня","card.month.long.feb":"лютага","card.month.long.mar":"сакавіка","card.month.long.apr":"красавіка","card.month.long.may":"мая","card.month.long.jun":"чэрвеня","card.month.long.jul":"ліпеня","card.month.long.aug":"жніўня","card.month.long.sep":"верасня","card.month.long.oct":"кастрычніка","card.month.long.nov":"лістапада","card.month.long.dec":"снежня","card.date.of":"","card.day.sun":"Нд","card.day.mon":"Пн","card.day.tue":"Аўт","card.day.wed":"Ср","card.day.thu":"Чцв","card.day.fri":"Пт","card.day.sat":"Сб"}};function ft(t,e="en"){const r=e.toLowerCase(),n=pt[r]?.[t]||pt.en?.[t];return n||t.replace("editor.","").replace("chart.","").replace(/_/g," ")}const _t=o`
  :host {
    display: block;
    box-shadow: var(--ha-card-box-shadow, none);
    box-sizing: border-box;
    border-radius: var(--ha-card-border-radius, var(--ha-border-radius-lg));
    border-width: var(--ha-card-border-width, 1px);
    border-style: solid;
    border-color: var(--ha-card-border-color, var(--divider-color, #e0e0e0));
    transition: all .3s ease-out;
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
    margin: 8px 0;
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
    min-height: 200px;
    position: relative;
    width: 100%;
    /* Victory.js-inspired touch optimization */
    touch-action: auto; /* Allow browser pan/zoom */
    -webkit-tap-highlight-color: transparent; /* No iOS tap flash */
    -webkit-touch-callout: none; /* No iOS callout on long press */
    user-select: none; /* Prevent text selection */
  }

  .chart-svg-container {
    width: 100%;
    height: 100%;
    position: relative;
    /* Pointer events structure (Victory pattern) */
    pointer-events: none; /* Container non-interactive */
  }

  .chart-svg {
    width: 100%;
    height: 100%;
    display: block;
    pointer-events: all; /* SVG interactive */
  }

  /* Mobile-specific optimizations */
  @media (hover: none) and (pointer: coarse) {
    .chart-container {
      touch-action: pan-y pinch-zoom; /* Allow vertical scroll + pinch zoom */
    }

    /* Increase touch target sizes on mobile */
    .chart-bar,
    .chart-point,
    path.bar,
    circle.point {
      min-width: 44px;
      min-height: 44px;
    }
  }

  /* Disable pointer events during animations */
  .chart-animating {
    pointer-events: none;
  }

  .chart-bar {
    fill: #8B5CF6;
    transition: fill 0.2s ease;
    cursor: pointer;
  }

  .chart-bar:hover {
    fill: #ff69b4;
  }

  /* Path-based bars (for rounded top corners) */
  path.bar {
    fill: #8B5CF6;
    transition: fill 0.2s ease;
    cursor: pointer;
  }

  path.bar:hover {
    fill: #ff69b4;
  }

  .chart-grid-line {
    stroke: rgba(255, 255, 255, 0.2);
    stroke-width: 1;
  }

  .chart-tooltip {
    pointer-events: none;
  }

  .tooltip-content {
    pointer-events: none;
  }

  .tooltip-bg {
    fill: rgba(40, 26, 61, 0.95);
    stroke: none;
  }

  .tooltip-value {
    fill: #ff69b4;
    font-size: 16px;
    font-weight: 600;
    font-family: Roboto, sans-serif;
  }

  .tooltip-date {
    fill: #fff;
    font-size: 13px;
    font-weight: 500;
    font-family: Roboto, sans-serif;
  }


  .loading {
    text-align: center;
    padding: 40px;
    color: var(--secondary-text-color);
  }

  .card-content-wrapper {
    position: relative;
    margin: 8px;
  }

  .loading-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--card-background-color, rgba(255, 255, 255, 0.95));
    opacity: 0.9;
    backdrop-filter: blur(2px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    border-radius: var(--ha-card-border-radius, 4px);
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

  .integration-badges {
    display: flex;
    gap: 12px;
    justify-content: center;
    margin-top: 16px;
    flex-wrap: wrap;
  }

  .integration-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 8px 16px;
    border-radius: 6px;
    text-decoration: none;
    font-size: 13px;
    font-weight: 500;
    transition: all 0.2s ease;
    border: 1px solid transparent;
  }

  .integration-badge ha-icon {
    font-size: 16px;
    width: 16px;
    height: 16px;
  }

  .integration-badge.hacs-badge {
    background: var(--hacs-badge-background, rgba(41, 128, 185, 0.1));
    color: var(--hacs-badge-color, #2980b9);
    border-color: var(--hacs-badge-border, rgba(41, 128, 185, 0.3));
  }

  .integration-badge.hacs-badge:hover {
    background: var(--hacs-badge-background-hover, rgba(41, 128, 185, 0.2));
    border-color: var(--hacs-badge-border-hover, #2980b9);
    transform: translateY(-1px);
  }

  .integration-badge.github-badge {
    background: var(--github-badge-background, rgba(33, 33, 33, 0.1));
    color: var(--github-badge-color, #212121);
    border-color: var(--github-badge-border, rgba(33, 33, 33, 0.3));
  }

  .integration-badge.github-badge:hover {
    background: var(--github-badge-background-hover, rgba(33, 33, 33, 0.2));
    border-color: var(--github-badge-border-hover, #212121);
    transform: translateY(-1px);
  }

  /* Dark mode support */
  @media (prefers-color-scheme: dark) {
    .integration-badge.hacs-badge {
      background: var(--hacs-badge-background, rgba(41, 128, 185, 0.2));
      color: var(--hacs-badge-color, #5dade2);
      border-color: var(--hacs-badge-border, rgba(41, 128, 185, 0.4));
    }

    .integration-badge.github-badge {
      background: var(--github-badge-background, rgba(255, 255, 255, 0.1));
      color: var(--github-badge-color, #ffffff);
      border-color: var(--github-badge-border, rgba(255, 255, 255, 0.3));
    }
  }

  .comparison-error {
    padding: 12px;
    background: var(--warning-color);
    color: var(--text-primary-color);
    border-radius: 4px;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .comparison-error ha-icon {
    flex-shrink: 0;
  }

  .comparison-title {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 16px;
  }

  .tariff-comparison-info {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px;
    margin-bottom: 16px;
    background: var(--info-color, rgba(33, 150, 243, 0.1));
    border-left: 3px solid var(--info-color, #2196f3);
    border-radius: 4px;
    font-size: 14px;
    color: var(--primary-text-color);
  }

  .tariff-comparison-info ha-icon {
    color: var(--info-color, #2196f3);
    flex-shrink: 0;
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

  .consumption-summary-header {
    padding: 16px;
    border-radius: 8px;
    background: var(--ha-card-background, var(--card-background-color, #fff));
  }

  .summary-header-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
  }

  .summary-title-section {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .summary-icon {
    color: var(--primary-color);
    font-size: 24px;
  }

  .summary-view-toggle {
    display: flex;
    gap: 8px;
  }

  .view-icon {
    color: var(--secondary-text-color);
    cursor: pointer;
    opacity: 0.5;
    transition: opacity 0.2s;
  }

  .view-icon.active {
    color: var(--primary-color);
    opacity: 1;
  }

  .summary-date-range {
    font-size: 14px;
    color: var(--secondary-text-color);
    margin-bottom: 8px;
  }

  .summary-total-consumption {
    font-size: 32px;
    font-weight: 700;
    color: var(--primary-text-color);
    line-height: 1.2;
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
    margin: 0;
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

  .consumption-list {
    width: 100%;
    overflow-x: auto;
  }

  .consumption-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 14px;
    margin-bottom: 8px;
  }

  .consumption-table thead {
    background: var(--secondary-background-color);
  }

  .consumption-table th {
    padding: 12px 8px;
    text-align: left;
    font-weight: 500;
    color: var(--primary-text-color);
    white-space: nowrap;
  }

  .consumption-table td {
    padding: 10px 8px;
    border-top: 1px solid var(--divider-color);
    color: var(--primary-text-color);
  }

  .consumption-table tbody tr:hover {
    background: var(--secondary-background-color);
  }

  .consumption-table .consumption-value {
    font-weight: 600;
    color: var(--primary-color);
  }

  .heat-calendar-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 4px;
  }

  .heat-calendar-day {
    aspect-ratio: 1;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
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

  .heat-calendar-legend-label {
    font-size: 12px;
    color: var(--primary-text-color);
    margin-right: 4px;
  }

  .heat-calendar-legend-item {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: help;
  }

  .heat-calendar-legend-color {
    width: 20px;
    height: 20px;
    border-radius: 4px;
    border: 1px solid var(--divider-color);
  }

  .heat-calendar-legend-color.intensity-low {
    background: var(--info-color, #2196f3);
    opacity: 0.4;
  }

  .heat-calendar-legend-color.intensity-medium {
    background: var(--success-color, #4caf50);
    opacity: 0.6;
  }

  .heat-calendar-legend-color.intensity-high {
    background: var(--error-color, #f44336);
    opacity: 0.8;
  }

  .heat-calendar-year-view {
    /* Remove max-height to allow card to expand naturally */
    overflow-y: visible;
  }

  .heat-calendar-year-view .heat-calendar-grid {
    /* Remove max-height to avoid double scroll */
    overflow-y: visible;
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

  .heat-calendar-info {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px;
    margin-top: 16px;
    background: var(--info-color, rgba(33, 150, 243, 0.1));
    border-left: 3px solid var(--info-color, #2196f3);
    border-radius: 4px;
    font-size: 14px;
    color: var(--primary-text-color);
  }

  .heat-calendar-info ha-icon {
    color: var(--info-color, #2196f3);
    flex-shrink: 0;
  }

  .week-comparison-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 8px;
  }

  .week-card {
    padding: 16px;
    border: 1px solid var(--divider-color);
    border-radius: 8px;
    background: var(--card-background-color);
  }

  .week-card-incomplete {
    background: rgba(var(--primary-color-rgb, 3, 169, 244), 0.05);
    border: 1px dashed var(--divider-color);
    opacity: 0.9;
  }

  .week-card-header {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 12px;
    color: var(--primary-text-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
  }

  .week-card-header-title {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  }

  .week-incomplete-badge {
    display: inline-block;
    padding: 2px 8px;
    background: var(--warning-color);
    color: var(--text-primary-color);
    border-radius: 4px;
    font-size: 11px;
    font-weight: 500;
    text-transform: uppercase;
  }

  .week-card-metrics {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .week-metric {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .week-metric-label {
    font-size: 14px;
    color: var(--secondary-text-color);
  }

  .week-metric-value-container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 4px;
  }

  .week-metric-value {
    font-size: 18px;
    font-weight: 600;
    color: var(--primary-text-color);
  }

  .week-period-date {
    font-size: 13px;
    font-weight: 400;
    font-family: var(--code-font-family, 'Courier New', monospace);
    color: var(--secondary-text-color);
    letter-spacing: 0.5px;
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

  .week-change-disabled {
    display: inline-block;
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 11px;
    font-weight: 500;
    color: var(--secondary-text-color);
    background: var(--secondary-background-color);
    opacity: 0.6;
    cursor: help;
  }

  .week-change.week-change-forecast {
    opacity: 0.85;
  }

  .week-change-forecast-indicator {
    font-size: 10px;
    margin-left: 2px;
    vertical-align: super;
  }

  .week-metric-days {
    padding-bottom: 8px;
    border-bottom: 1px dashed var(--divider-color);
    margin-bottom: 4px;
  }

  .week-metric-days .week-incomplete-badge {
    margin-top: 4px;
  }

  .week-forecast {
    font-size: 12px;
    color: var(--secondary-text-color);
    font-weight: 400;
    text-align: right;
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

  /* Print optimization */
  @media print {
    .chart-container {
      break-inside: avoid; /* Don't split chart across pages */
      page-break-inside: avoid;
    }

    /* Hide interactive elements */
    .chart-navigation,
    .chart-controls,
    .period-selector {
      display: none !important;
    }

    /* Expand to full width */
    .chart-container {
      width: 100% !important;
      max-width: none !important;
    }

    /* Ensure colors are visible in print */
    .chart-bar,
    .chart-line,
    path.bar,
    path.line {
      print-color-adjust: exact;
      -webkit-print-color-adjust: exact;
    }

    /* Add page header for context */
    .chart-container::before {
      content: "Energy Consumption Chart";
      display: block;
      font-size: 14pt;
      font-weight: bold;
      margin-bottom: 10pt;
    }
  }
`,gt=o`
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
`;var mt=function(t,e,r,n){var i,a=arguments.length,o=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(o=(a<3?i(o):a>3?i(e,r,o):i(e,r))||o);return a>3&&o&&Object.defineProperty(e,r,o),o};void 0!==st&&st.disableWarning&&st.disableWarning("change-in-update");class vt extends st{constructor(){super(...arguments),this._config={type:"custom:octopus-consumption-card",source_entry_id:"",view:"consumption",default_period:"week",chart_type:"line",tariff_entry_ids:[],show_cost_on_chart:!1,show_navigation:!0,show_period_distribution:!1,show_moving_average:!1,moving_average_days:7},this._language="en",this._computeLabel=t=>function(t,e="en"){return ft(`editor.${t.name}_label`,e)}(t,this._language),this._computeHelper=t=>function(t,e="en"){return ft(`editor.${t.name}_helper`,e)}(t,this._language)}_applyDefaults(t){return{type:t.type||"custom:octopus-consumption-card",source_entry_id:t.source_entry_id||"",view:t.view||"consumption",default_period:t.default_period||"week",chart_type:t.chart_type||"line",tariff_entry_ids:t.tariff_entry_ids||[],show_cost_on_chart:void 0!==t.show_cost_on_chart&&t.show_cost_on_chart,show_navigation:void 0===t.show_navigation||t.show_navigation,show_period_distribution:void 0!==t.show_period_distribution&&t.show_period_distribution,show_moving_average:void 0!==t.show_moving_average&&t.show_moving_average,moving_average_days:t.moving_average_days||7,heat_calendar_period:("heat-calendar"!==t.view||!t.heat_calendar_period||"month"!==t.heat_calendar_period&&"year"!==t.heat_calendar_period)&&"heat-calendar"===t.view?"month":t.heat_calendar_period,week_comparison_count:t.week_comparison_count||2,show_cost_trend:void 0!==t.show_cost_trend&&t.show_cost_trend,cost_moving_average_days:t.cost_moving_average_days||30,show_tariff_chart:void 0===t.show_tariff_chart||t.show_tariff_chart,selected_tariff_for_cost:t.selected_tariff_for_cost,consumption_sensor:t.consumption_sensor}}setConfig(t){const e=this._applyDefaults(t);JSON.stringify(this._config)!==JSON.stringify(e)&&(this._config=e)}willUpdate(t){if(t.has("config")&&this.config){const t=this._applyDefaults(this.config);JSON.stringify(this._config)!==JSON.stringify(t)&&(this._config=t)}if(t.has("hass")&&this.hass){const t=this.hass.language||"en";this._language!==t&&(this._language=t)}}firstUpdated(){if(this.config){const t=this._applyDefaults(this.config);JSON.stringify(this._config)!==JSON.stringify(t)&&(this._config=t)}this.hass&&(this._language=this.hass.language||"en")}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.detail.value;e.view||(e.view="consumption");const r=this._config.view!==e.view;r&&"heat-calendar"===e.view&&(!e.heat_calendar_period||"month"!==e.heat_calendar_period&&"year"!==e.heat_calendar_period)&&(e.heat_calendar_period="month"),!1===e.show_cost_on_chart&&(e.selected_tariff_for_cost=void 0),this._config=e,r&&this.requestUpdate(),this._fireConfigChanged()}_fireConfigChanged(){const t=new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0});this.dispatchEvent(t)}_buildSchema(){const t=this._config.view,e=[{name:"view",selector:{select:{mode:"dropdown",options:[{value:"consumption",label:ft("editor.view_consumption",this._language)},{value:"heat-calendar",label:ft("editor.view_heat_calendar",this._language)},{value:"week-analysis",label:ft("editor.view_week_analysis",this._language)},{value:"tariff-comparison",label:ft("editor.view_tariff_comparison",this._language)}]}}},{name:"source_entry_id",required:!0,selector:{config_entry:{integration:"octopus_energy_es"}}}];return"consumption"===t?(e.push({name:"default_period",selector:{select:{mode:"dropdown",options:[{value:"day",label:ft("editor.period_day",this._language)},{value:"week",label:ft("editor.period_week",this._language)},{value:"month",label:ft("editor.period_month",this._language)}]}}},{name:"chart_type",selector:{select:{mode:"dropdown",options:[{value:"line",label:ft("editor.chart_type_line",this._language)},{value:"bar",label:ft("editor.chart_type_bar",this._language)},{value:"stacked-area",label:ft("editor.chart_type_stacked_area",this._language)}]}}},{name:"show_navigation",selector:{boolean:{}}},{name:"show_period_distribution",selector:{boolean:{}}},{name:"show_moving_average",selector:{boolean:{}}}),this._config.show_moving_average&&e.push({name:"moving_average_days",selector:{number:{min:2,max:30,mode:"box"}}}),e.push({name:"show_cost_on_chart",selector:{boolean:{}}}),this._config.show_cost_on_chart&&e.push({name:"selected_tariff_for_cost",selector:{config_entry:{integration:"octopus_energy_es"}}}),e.push({name:"show_cost_trend",selector:{boolean:{}}}),this._config.show_cost_trend&&e.push({name:"cost_moving_average_days",selector:{number:{min:2,max:90,mode:"box"}}})):"heat-calendar"===t?e.push({name:"heat_calendar_period",default:this._config.heat_calendar_period||"month",selector:{select:{mode:"dropdown",options:[{value:"month",label:ft("editor.heat_calendar_period_month",this._language)},{value:"year",label:ft("editor.heat_calendar_period_year",this._language)}]}}},{name:"show_navigation",selector:{boolean:{}}}):"week-analysis"===t?e.push({name:"week_comparison_count",selector:{number:{min:2,max:8,mode:"box"}}},{name:"show_navigation",selector:{boolean:{}}}):"tariff-comparison"===t&&e.push({name:"show_tariff_chart",selector:{boolean:{}}}),e.push({name:"consumption_sensor",selector:{entity:{domain:"sensor"}}}),e}_handleTariffSelection(t,e){const r=e.detail.value,n=[...this._config.tariff_entry_ids||[]];for(;n.length<=t;)n.push("");let i;if(r){const e=n.findIndex((e,n)=>n!==t&&e===r);-1!==e&&(n[e]=""),n[t]=r,i=n.filter((t,e,r)=>t&&r.indexOf(t)===e)}else n.splice(t,1),i=n.filter(t=>t);this._config={...this._config,tariff_entry_ids:i},this.requestUpdate(),this._fireConfigChanged()}_removeTariff(t){const e=this._config.tariff_entry_ids||[];if(t>=e.length)return;const r=[...e];r.splice(t,1);const n=r.filter(t=>t);this._config={...this._config,tariff_entry_ids:n},this.requestUpdate(),this._fireConfigChanged()}_renderTariffDropdowns(){const t=this._config.tariff_entry_ids||[],e=t.length>0?t.length+1:1;return Y`
      <div class="form-group">
        <label>${ft("editor.tariff_entry_ids_label",this._language)}</label>
        <div class="tariff-dropdown-list">
          ${Array.from({length:e},(e,r)=>{const n=t[r]||"";return Y`
              <div class="tariff-dropdown-item">
                <ha-selector
                  .hass=${this.hass}
                  .selector=${{config_entry:{integration:"octopus_energy_es"}}}
                  .value=${n}
                  .label=${0===r?ft("editor.tariff_entry_ids_helper",this._language):W}
                  @value-changed=${t=>this._handleTariffSelection(r,t)}
                ></ha-selector>
                ${n?Y`
                  <ha-icon-button
                    .label=${"Remove"}
                    @click=${()=>this._removeTariff(r)}
                  >
                    <ha-icon icon="mdi:delete"></ha-icon>
                  </ha-icon-button>
                `:W}
              </div>
            `})}
        </div>
      </div>
    `}render(){if(!this.hass)return Y`<div class="card-config">Loading...</div>`;const t=this._buildSchema(),e=this._config.view;return Y`
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
        
        ${"tariff-comparison"===e?this._renderTariffDropdowns():W}
      </div>
    `}}vt.enabledWarnings=[],vt.styles=gt,mt([ht({attribute:!1})],vt.prototype,"hass",void 0),mt([ht({attribute:!1})],vt.prototype,"config",void 0),mt([ut()],vt.prototype,"_config",void 0),"undefined"!=typeof window&&"undefined"!=typeof customElements&&(customElements.get("octopus-consumption-card-editor")||customElements.define("octopus-consumption-card-editor",vt));class yt{static info(t,...e){const r=[t,this.STYLES.info];e.forEach((t,e)=>{r.push(t,e%2==0?this.STYLES.infoValue:this.STYLES.info)}),console.log(...r)}static error(t,e){e?console.error(`%c${t}%c${e}`,this.STYLES.error,this.STYLES.errorValue):console.error(`%c${t}`,this.STYLES.error)}static warn(t,e){e?console.warn(`%c${t}%c${e}`,this.STYLES.warning,this.STYLES.warningValue):console.warn(`%c${t}`,this.STYLES.warning)}static success(t){console.log(`%c${t}`,this.STYLES.success)}static data(t,e){console.log(`%c  ${t}: %c${JSON.stringify(e,null,2)}`,this.STYLES.info,this.STYLES.infoValue)}static serviceCall(t,e,r=!1){this.info("  Calling service: ",`${t}.${e}${r?" (with return_response)":""}`)}static serviceData(t){this.data("Service data",t)}static serviceResponse(t){this.data("Raw Service Response",t)}static serviceError(t){console.error("%c  Service Error Details: %c"+JSON.stringify(t,Object.getOwnPropertyNames(t),2),this.STYLES.info,this.STYLES.errorValue)}static groupServiceCall(t,e){console.groupCollapsed(`%c🔧 Service Call: %c${t}.${e}`,this.STYLES.info,this.STYLES.infoValue)}static groupEnd(){console.groupEnd()}static groupDataLoad(t,e,r){console.groupCollapsed(`%c📊 Loading Data: %cEntry: ${t} | Period: ${e} | ${r}`,this.STYLES.info,this.STYLES.infoValue)}static groupError(t){console.groupCollapsed(`%c❌ ${t}`,this.STYLES.error)}}function wt(t,e){return null==t||null==e?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function bt(t,e){return null==t||null==e?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function xt(t){let e,r,n;function i(t,n,i=0,a=t.length){if(i<a){if(0!==e(n,n))return a;do{const e=i+a>>>1;r(t[e],n)<0?i=e+1:a=e}while(i<a)}return i}return 2!==t.length?(e=wt,r=(e,r)=>wt(t(e),r),n=(e,r)=>t(e)-r):(e=t===wt||t===bt?t:kt,r=t,n=t),{left:i,center:function(t,e,r=0,a=t.length){const o=i(t,e,r,a-1);return o>r&&n(t[o-1],e)>-n(t[o],e)?o-1:o},right:function(t,n,i=0,a=t.length){if(i<a){if(0!==e(n,n))return a;do{const e=i+a>>>1;r(t[e],n)<=0?i=e+1:a=e}while(i<a)}return i}}}function kt(){return 0}yt.STYLES={info:"color: #666; font-size: 11px;",infoValue:"color: #999; font-size: 11px; font-family: monospace;",error:"color: #f00; font-size: 11px; font-weight: bold;",errorValue:"color: #f00; font-size: 11px;",warning:"color: #ff9800; font-size: 11px;",warningValue:"color: #ff9800; font-size: 11px;",success:"color: #4caf50; font-size: 11px;"};const $t=xt(wt).right;xt(function(t){return null===t?NaN:+t}).center;class Dt extends Map{constructor(t,e=Ct){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:e}}),null!=t)for(const[e,r]of t)this.set(e,r)}get(t){return super.get(St(this,t))}has(t){return super.has(St(this,t))}set(t,e){return super.set(function({_intern:t,_key:e},r){const n=e(r);return t.has(n)?t.get(n):(t.set(n,r),r)}(this,t),e)}delete(t){return super.delete(function({_intern:t,_key:e},r){const n=e(r);t.has(n)&&(r=t.get(n),t.delete(n));return r}(this,t))}}function St({_intern:t,_key:e},r){const n=e(r);return t.has(n)?t.get(n):r}function Ct(t){return null!==t&&"object"==typeof t?t.valueOf():t}const Et=Math.sqrt(50),At=Math.sqrt(10),Mt=Math.sqrt(2);function Pt(t,e,r){const n=(e-t)/Math.max(0,r),i=Math.floor(Math.log10(n)),a=n/Math.pow(10,i),o=a>=Et?10:a>=At?5:a>=Mt?2:1;let s,c,l;return i<0?(l=Math.pow(10,-i)/o,s=Math.round(t*l),c=Math.round(e*l),s/l<t&&++s,c/l>e&&--c,l=-l):(l=Math.pow(10,i)*o,s=Math.round(t/l),c=Math.round(e/l),s*l<t&&++s,c*l>e&&--c),c<s&&.5<=r&&r<2?Pt(t,e,2*r):[s,c,l]}function Tt(t,e,r){return Pt(t=+t,e=+e,r=+r)[2]}function Nt(t){return t}var Ht=1e-6;function Ot(t){return"translate("+t+",0)"}function Rt(t){return"translate(0,"+t+")"}function zt(t){return e=>+t(e)}function Ft(t,e){return e=Math.max(0,t.bandwidth()-2*e)/2,t.round()&&(e=Math.round(e)),r=>+t(r)+e}function Lt(){return!this.__axis}function It(t,e){var r=[],n=null,i=null,a=6,o=6,s=3,c="undefined"!=typeof window&&window.devicePixelRatio>1?0:.5,l=1===t||4===t?-1:1,d=4===t||2===t?"x":"y",h=1===t||3===t?Ot:Rt;function u(u){var p=null==n?e.ticks?e.ticks.apply(e,r):e.domain():n,f=null==i?e.tickFormat?e.tickFormat.apply(e,r):Nt:i,_=Math.max(a,0)+s,g=e.range(),m=+g[0]+c,v=+g[g.length-1]+c,y=(e.bandwidth?Ft:zt)(e.copy(),c),w=u.selection?u.selection():u,b=w.selectAll(".domain").data([null]),x=w.selectAll(".tick").data(p,e).order(),k=x.exit(),$=x.enter().append("g").attr("class","tick"),D=x.select("line"),S=x.select("text");b=b.merge(b.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),x=x.merge($),D=D.merge($.append("line").attr("stroke","currentColor").attr(d+"2",l*a)),S=S.merge($.append("text").attr("fill","currentColor").attr(d,l*_).attr("dy",1===t?"0em":3===t?"0.71em":"0.32em")),u!==w&&(b=b.transition(u),x=x.transition(u),D=D.transition(u),S=S.transition(u),k=k.transition(u).attr("opacity",Ht).attr("transform",function(t){return isFinite(t=y(t))?h(t+c):this.getAttribute("transform")}),$.attr("opacity",Ht).attr("transform",function(t){var e=this.parentNode.__axis;return h((e&&isFinite(e=e(t))?e:y(t))+c)})),k.remove(),b.attr("d",4===t||2===t?o?"M"+l*o+","+m+"H"+c+"V"+v+"H"+l*o:"M"+c+","+m+"V"+v:o?"M"+m+","+l*o+"V"+c+"H"+v+"V"+l*o:"M"+m+","+c+"H"+v),x.attr("opacity",1).attr("transform",function(t){return h(y(t)+c)}),D.attr(d+"2",l*a),S.attr(d,l*_).text(f),w.filter(Lt).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",2===t?"start":4===t?"end":"middle"),w.each(function(){this.__axis=y})}return u.scale=function(t){return arguments.length?(e=t,u):e},u.ticks=function(){return r=Array.from(arguments),u},u.tickArguments=function(t){return arguments.length?(r=null==t?[]:Array.from(t),u):r.slice()},u.tickValues=function(t){return arguments.length?(n=null==t?null:Array.from(t),u):n&&n.slice()},u.tickFormat=function(t){return arguments.length?(i=t,u):i},u.tickSize=function(t){return arguments.length?(a=o=+t,u):a},u.tickSizeInner=function(t){return arguments.length?(a=+t,u):a},u.tickSizeOuter=function(t){return arguments.length?(o=+t,u):o},u.tickPadding=function(t){return arguments.length?(s=+t,u):s},u.offset=function(t){return arguments.length?(c=+t,u):c},u}function jt(t){return It(3,t)}var Vt={value:()=>{}};function Yt(){for(var t,e=0,r=arguments.length,n={};e<r;++e){if(!(t=arguments[e]+"")||t in n||/[\s.]/.test(t))throw new Error("illegal type: "+t);n[t]=[]}return new Ut(n)}function Ut(t){this._=t}function Wt(t,e){for(var r,n=0,i=t.length;n<i;++n)if((r=t[n]).name===e)return r.value}function qt(t,e,r){for(var n=0,i=t.length;n<i;++n)if(t[n].name===e){t[n]=Vt,t=t.slice(0,n).concat(t.slice(n+1));break}return null!=r&&t.push({name:e,value:r}),t}Ut.prototype=Yt.prototype={constructor:Ut,on:function(t,e){var r,n,i=this._,a=(n=i,(t+"").trim().split(/^|\s+/).map(function(t){var e="",r=t.indexOf(".");if(r>=0&&(e=t.slice(r+1),t=t.slice(0,r)),t&&!n.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:e}})),o=-1,s=a.length;if(!(arguments.length<2)){if(null!=e&&"function"!=typeof e)throw new Error("invalid callback: "+e);for(;++o<s;)if(r=(t=a[o]).type)i[r]=qt(i[r],t.name,e);else if(null==e)for(r in i)i[r]=qt(i[r],t.name,null);return this}for(;++o<s;)if((r=(t=a[o]).type)&&(r=Wt(i[r],t.name)))return r},copy:function(){var t={},e=this._;for(var r in e)t[r]=e[r].slice();return new Ut(t)},call:function(t,e){if((r=arguments.length-2)>0)for(var r,n,i=new Array(r),a=0;a<r;++a)i[a]=arguments[a+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(a=0,r=(n=this._[t]).length;a<r;++a)n[a].value.apply(e,i)},apply:function(t,e,r){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var n=this._[t],i=0,a=n.length;i<a;++i)n[i].value.apply(e,r)}};var Bt="http://www.w3.org/1999/xhtml",Xt={svg:"http://www.w3.org/2000/svg",xhtml:Bt,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Gt(t){var e=t+="",r=e.indexOf(":");return r>=0&&"xmlns"!==(e=t.slice(0,r))&&(t=t.slice(r+1)),Xt.hasOwnProperty(e)?{space:Xt[e],local:t}:t}function Jt(t){return function(){var e=this.ownerDocument,r=this.namespaceURI;return r===Bt&&e.documentElement.namespaceURI===Bt?e.createElement(t):e.createElementNS(r,t)}}function Zt(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function Kt(t){var e=Gt(t);return(e.local?Zt:Jt)(e)}function Qt(){}function te(t){return null==t?Qt:function(){return this.querySelector(t)}}function ee(){return[]}function re(t){return null==t?ee:function(){return this.querySelectorAll(t)}}function ne(t){return function(){return function(t){return null==t?[]:Array.isArray(t)?t:Array.from(t)}(t.apply(this,arguments))}}function ie(t){return function(){return this.matches(t)}}function ae(t){return function(e){return e.matches(t)}}var oe=Array.prototype.find;function se(){return this.firstElementChild}var ce=Array.prototype.filter;function le(){return Array.from(this.children)}function de(t){return new Array(t.length)}function he(t,e){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=e}function ue(t,e,r,n,i,a){for(var o,s=0,c=e.length,l=a.length;s<l;++s)(o=e[s])?(o.__data__=a[s],n[s]=o):r[s]=new he(t,a[s]);for(;s<c;++s)(o=e[s])&&(i[s]=o)}function pe(t,e,r,n,i,a,o){var s,c,l,d=new Map,h=e.length,u=a.length,p=new Array(h);for(s=0;s<h;++s)(c=e[s])&&(p[s]=l=o.call(c,c.__data__,s,e)+"",d.has(l)?i[s]=c:d.set(l,c));for(s=0;s<u;++s)l=o.call(t,a[s],s,a)+"",(c=d.get(l))?(n[s]=c,c.__data__=a[s],d.delete(l)):r[s]=new he(t,a[s]);for(s=0;s<h;++s)(c=e[s])&&d.get(p[s])===c&&(i[s]=c)}function fe(t){return t.__data__}function _e(t){return"object"==typeof t&&"length"in t?t:Array.from(t)}function ge(t,e){return t<e?-1:t>e?1:t>=e?0:NaN}function me(t){return function(){this.removeAttribute(t)}}function ve(t){return function(){this.removeAttributeNS(t.space,t.local)}}function ye(t,e){return function(){this.setAttribute(t,e)}}function we(t,e){return function(){this.setAttributeNS(t.space,t.local,e)}}function be(t,e){return function(){var r=e.apply(this,arguments);null==r?this.removeAttribute(t):this.setAttribute(t,r)}}function xe(t,e){return function(){var r=e.apply(this,arguments);null==r?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,r)}}function ke(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function $e(t){return function(){this.style.removeProperty(t)}}function De(t,e,r){return function(){this.style.setProperty(t,e,r)}}function Se(t,e,r){return function(){var n=e.apply(this,arguments);null==n?this.style.removeProperty(t):this.style.setProperty(t,n,r)}}function Ce(t,e){return t.style.getPropertyValue(e)||ke(t).getComputedStyle(t,null).getPropertyValue(e)}function Ee(t){return function(){delete this[t]}}function Ae(t,e){return function(){this[t]=e}}function Me(t,e){return function(){var r=e.apply(this,arguments);null==r?delete this[t]:this[t]=r}}function Pe(t){return t.trim().split(/^|\s+/)}function Te(t){return t.classList||new Ne(t)}function Ne(t){this._node=t,this._names=Pe(t.getAttribute("class")||"")}function He(t,e){for(var r=Te(t),n=-1,i=e.length;++n<i;)r.add(e[n])}function Oe(t,e){for(var r=Te(t),n=-1,i=e.length;++n<i;)r.remove(e[n])}function Re(t){return function(){He(this,t)}}function ze(t){return function(){Oe(this,t)}}function Fe(t,e){return function(){(e.apply(this,arguments)?He:Oe)(this,t)}}function Le(){this.textContent=""}function Ie(t){return function(){this.textContent=t}}function je(t){return function(){var e=t.apply(this,arguments);this.textContent=null==e?"":e}}function Ve(){this.innerHTML=""}function Ye(t){return function(){this.innerHTML=t}}function Ue(t){return function(){var e=t.apply(this,arguments);this.innerHTML=null==e?"":e}}function We(){this.nextSibling&&this.parentNode.appendChild(this)}function qe(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Be(){return null}function Xe(){var t=this.parentNode;t&&t.removeChild(this)}function Ge(){var t=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function Je(){var t=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function Ze(t){return function(){var e=this.__on;if(e){for(var r,n=0,i=-1,a=e.length;n<a;++n)r=e[n],t.type&&r.type!==t.type||r.name!==t.name?e[++i]=r:this.removeEventListener(r.type,r.listener,r.options);++i?e.length=i:delete this.__on}}}function Ke(t,e,r){return function(){var n,i=this.__on,a=function(t){return function(e){t.call(this,e,this.__data__)}}(e);if(i)for(var o=0,s=i.length;o<s;++o)if((n=i[o]).type===t.type&&n.name===t.name)return this.removeEventListener(n.type,n.listener,n.options),this.addEventListener(n.type,n.listener=a,n.options=r),void(n.value=e);this.addEventListener(t.type,a,r),n={type:t.type,name:t.name,value:e,listener:a,options:r},i?i.push(n):this.__on=[n]}}function Qe(t,e,r){var n=ke(t),i=n.CustomEvent;"function"==typeof i?i=new i(e,r):(i=n.document.createEvent("Event"),r?(i.initEvent(e,r.bubbles,r.cancelable),i.detail=r.detail):i.initEvent(e,!1,!1)),t.dispatchEvent(i)}function tr(t,e){return function(){return Qe(this,t,e)}}function er(t,e){return function(){return Qe(this,t,e.apply(this,arguments))}}he.prototype={constructor:he,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,e){return this._parent.insertBefore(t,e)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}},Ne.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var e=this._names.indexOf(t);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};var rr=[null];function nr(t,e){this._groups=t,this._parents=e}function ir(){return new nr([[document.documentElement]],rr)}function ar(t){return"string"==typeof t?new nr([[document.querySelector(t)]],[document.documentElement]):new nr([[t]],rr)}function or(t,e){if(t=function(t){let e;for(;e=t.sourceEvent;)t=e;return t}(t),void 0===e&&(e=t.currentTarget),e){var r=e.ownerSVGElement||e;if(r.createSVGPoint){var n=r.createSVGPoint();return n.x=t.clientX,n.y=t.clientY,[(n=n.matrixTransform(e.getScreenCTM().inverse())).x,n.y]}if(e.getBoundingClientRect){var i=e.getBoundingClientRect();return[t.clientX-i.left-e.clientLeft,t.clientY-i.top-e.clientTop]}}return[t.pageX,t.pageY]}function sr(t,e,r){t.prototype=e.prototype=r,r.constructor=t}function cr(t,e){var r=Object.create(t.prototype);for(var n in e)r[n]=e[n];return r}function lr(){}nr.prototype=ir.prototype={constructor:nr,select:function(t){"function"!=typeof t&&(t=te(t));for(var e=this._groups,r=e.length,n=new Array(r),i=0;i<r;++i)for(var a,o,s=e[i],c=s.length,l=n[i]=new Array(c),d=0;d<c;++d)(a=s[d])&&(o=t.call(a,a.__data__,d,s))&&("__data__"in a&&(o.__data__=a.__data__),l[d]=o);return new nr(n,this._parents)},selectAll:function(t){t="function"==typeof t?ne(t):re(t);for(var e=this._groups,r=e.length,n=[],i=[],a=0;a<r;++a)for(var o,s=e[a],c=s.length,l=0;l<c;++l)(o=s[l])&&(n.push(t.call(o,o.__data__,l,s)),i.push(o));return new nr(n,i)},selectChild:function(t){return this.select(null==t?se:function(t){return function(){return oe.call(this.children,t)}}("function"==typeof t?t:ae(t)))},selectChildren:function(t){return this.selectAll(null==t?le:function(t){return function(){return ce.call(this.children,t)}}("function"==typeof t?t:ae(t)))},filter:function(t){"function"!=typeof t&&(t=ie(t));for(var e=this._groups,r=e.length,n=new Array(r),i=0;i<r;++i)for(var a,o=e[i],s=o.length,c=n[i]=[],l=0;l<s;++l)(a=o[l])&&t.call(a,a.__data__,l,o)&&c.push(a);return new nr(n,this._parents)},data:function(t,e){if(!arguments.length)return Array.from(this,fe);var r=e?pe:ue,n=this._parents,i=this._groups;"function"!=typeof t&&(t=function(t){return function(){return t}}(t));for(var a=i.length,o=new Array(a),s=new Array(a),c=new Array(a),l=0;l<a;++l){var d=n[l],h=i[l],u=h.length,p=_e(t.call(d,d&&d.__data__,l,n)),f=p.length,_=s[l]=new Array(f),g=o[l]=new Array(f);r(d,h,_,g,c[l]=new Array(u),p,e);for(var m,v,y=0,w=0;y<f;++y)if(m=_[y]){for(y>=w&&(w=y+1);!(v=g[w])&&++w<f;);m._next=v||null}}return(o=new nr(o,n))._enter=s,o._exit=c,o},enter:function(){return new nr(this._enter||this._groups.map(de),this._parents)},exit:function(){return new nr(this._exit||this._groups.map(de),this._parents)},join:function(t,e,r){var n=this.enter(),i=this,a=this.exit();return"function"==typeof t?(n=t(n))&&(n=n.selection()):n=n.append(t+""),null!=e&&(i=e(i))&&(i=i.selection()),null==r?a.remove():r(a),n&&i?n.merge(i).order():i},merge:function(t){for(var e=t.selection?t.selection():t,r=this._groups,n=e._groups,i=r.length,a=n.length,o=Math.min(i,a),s=new Array(i),c=0;c<o;++c)for(var l,d=r[c],h=n[c],u=d.length,p=s[c]=new Array(u),f=0;f<u;++f)(l=d[f]||h[f])&&(p[f]=l);for(;c<i;++c)s[c]=r[c];return new nr(s,this._parents)},selection:function(){return this},order:function(){for(var t=this._groups,e=-1,r=t.length;++e<r;)for(var n,i=t[e],a=i.length-1,o=i[a];--a>=0;)(n=i[a])&&(o&&4^n.compareDocumentPosition(o)&&o.parentNode.insertBefore(n,o),o=n);return this},sort:function(t){function e(e,r){return e&&r?t(e.__data__,r.__data__):!e-!r}t||(t=ge);for(var r=this._groups,n=r.length,i=new Array(n),a=0;a<n;++a){for(var o,s=r[a],c=s.length,l=i[a]=new Array(c),d=0;d<c;++d)(o=s[d])&&(l[d]=o);l.sort(e)}return new nr(i,this._parents).order()},call:function(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this},nodes:function(){return Array.from(this)},node:function(){for(var t=this._groups,e=0,r=t.length;e<r;++e)for(var n=t[e],i=0,a=n.length;i<a;++i){var o=n[i];if(o)return o}return null},size:function(){let t=0;for(const e of this)++t;return t},empty:function(){return!this.node()},each:function(t){for(var e=this._groups,r=0,n=e.length;r<n;++r)for(var i,a=e[r],o=0,s=a.length;o<s;++o)(i=a[o])&&t.call(i,i.__data__,o,a);return this},attr:function(t,e){var r=Gt(t);if(arguments.length<2){var n=this.node();return r.local?n.getAttributeNS(r.space,r.local):n.getAttribute(r)}return this.each((null==e?r.local?ve:me:"function"==typeof e?r.local?xe:be:r.local?we:ye)(r,e))},style:function(t,e,r){return arguments.length>1?this.each((null==e?$e:"function"==typeof e?Se:De)(t,e,null==r?"":r)):Ce(this.node(),t)},property:function(t,e){return arguments.length>1?this.each((null==e?Ee:"function"==typeof e?Me:Ae)(t,e)):this.node()[t]},classed:function(t,e){var r=Pe(t+"");if(arguments.length<2){for(var n=Te(this.node()),i=-1,a=r.length;++i<a;)if(!n.contains(r[i]))return!1;return!0}return this.each(("function"==typeof e?Fe:e?Re:ze)(r,e))},text:function(t){return arguments.length?this.each(null==t?Le:("function"==typeof t?je:Ie)(t)):this.node().textContent},html:function(t){return arguments.length?this.each(null==t?Ve:("function"==typeof t?Ue:Ye)(t)):this.node().innerHTML},raise:function(){return this.each(We)},lower:function(){return this.each(qe)},append:function(t){var e="function"==typeof t?t:Kt(t);return this.select(function(){return this.appendChild(e.apply(this,arguments))})},insert:function(t,e){var r="function"==typeof t?t:Kt(t),n=null==e?Be:"function"==typeof e?e:te(e);return this.select(function(){return this.insertBefore(r.apply(this,arguments),n.apply(this,arguments)||null)})},remove:function(){return this.each(Xe)},clone:function(t){return this.select(t?Je:Ge)},datum:function(t){return arguments.length?this.property("__data__",t):this.node().__data__},on:function(t,e,r){var n,i,a=function(t){return t.trim().split(/^|\s+/).map(function(t){var e="",r=t.indexOf(".");return r>=0&&(e=t.slice(r+1),t=t.slice(0,r)),{type:t,name:e}})}(t+""),o=a.length;if(!(arguments.length<2)){for(s=e?Ke:Ze,n=0;n<o;++n)this.each(s(a[n],e,r));return this}var s=this.node().__on;if(s)for(var c,l=0,d=s.length;l<d;++l)for(n=0,c=s[l];n<o;++n)if((i=a[n]).type===c.type&&i.name===c.name)return c.value},dispatch:function(t,e){return this.each(("function"==typeof e?er:tr)(t,e))},[Symbol.iterator]:function*(){for(var t=this._groups,e=0,r=t.length;e<r;++e)for(var n,i=t[e],a=0,o=i.length;a<o;++a)(n=i[a])&&(yield n)}};var dr=.7,hr=1/dr,ur="\\s*([+-]?\\d+)\\s*",pr="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",fr="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",_r=/^#([0-9a-f]{3,8})$/,gr=new RegExp(`^rgb\\(${ur},${ur},${ur}\\)$`),mr=new RegExp(`^rgb\\(${fr},${fr},${fr}\\)$`),vr=new RegExp(`^rgba\\(${ur},${ur},${ur},${pr}\\)$`),yr=new RegExp(`^rgba\\(${fr},${fr},${fr},${pr}\\)$`),wr=new RegExp(`^hsl\\(${pr},${fr},${fr}\\)$`),br=new RegExp(`^hsla\\(${pr},${fr},${fr},${pr}\\)$`),xr={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function kr(){return this.rgb().formatHex()}function $r(){return this.rgb().formatRgb()}function Dr(t){var e,r;return t=(t+"").trim().toLowerCase(),(e=_r.exec(t))?(r=e[1].length,e=parseInt(e[1],16),6===r?Sr(e):3===r?new Ar(e>>8&15|e>>4&240,e>>4&15|240&e,(15&e)<<4|15&e,1):8===r?Cr(e>>24&255,e>>16&255,e>>8&255,(255&e)/255):4===r?Cr(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|240&e,((15&e)<<4|15&e)/255):null):(e=gr.exec(t))?new Ar(e[1],e[2],e[3],1):(e=mr.exec(t))?new Ar(255*e[1]/100,255*e[2]/100,255*e[3]/100,1):(e=vr.exec(t))?Cr(e[1],e[2],e[3],e[4]):(e=yr.exec(t))?Cr(255*e[1]/100,255*e[2]/100,255*e[3]/100,e[4]):(e=wr.exec(t))?Or(e[1],e[2]/100,e[3]/100,1):(e=br.exec(t))?Or(e[1],e[2]/100,e[3]/100,e[4]):xr.hasOwnProperty(t)?Sr(xr[t]):"transparent"===t?new Ar(NaN,NaN,NaN,0):null}function Sr(t){return new Ar(t>>16&255,t>>8&255,255&t,1)}function Cr(t,e,r,n){return n<=0&&(t=e=r=NaN),new Ar(t,e,r,n)}function Er(t,e,r,n){return 1===arguments.length?function(t){return t instanceof lr||(t=Dr(t)),t?new Ar((t=t.rgb()).r,t.g,t.b,t.opacity):new Ar}(t):new Ar(t,e,r,null==n?1:n)}function Ar(t,e,r,n){this.r=+t,this.g=+e,this.b=+r,this.opacity=+n}function Mr(){return`#${Hr(this.r)}${Hr(this.g)}${Hr(this.b)}`}function Pr(){const t=Tr(this.opacity);return`${1===t?"rgb(":"rgba("}${Nr(this.r)}, ${Nr(this.g)}, ${Nr(this.b)}${1===t?")":`, ${t})`}`}function Tr(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function Nr(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function Hr(t){return((t=Nr(t))<16?"0":"")+t.toString(16)}function Or(t,e,r,n){return n<=0?t=e=r=NaN:r<=0||r>=1?t=e=NaN:e<=0&&(t=NaN),new zr(t,e,r,n)}function Rr(t){if(t instanceof zr)return new zr(t.h,t.s,t.l,t.opacity);if(t instanceof lr||(t=Dr(t)),!t)return new zr;if(t instanceof zr)return t;var e=(t=t.rgb()).r/255,r=t.g/255,n=t.b/255,i=Math.min(e,r,n),a=Math.max(e,r,n),o=NaN,s=a-i,c=(a+i)/2;return s?(o=e===a?(r-n)/s+6*(r<n):r===a?(n-e)/s+2:(e-r)/s+4,s/=c<.5?a+i:2-a-i,o*=60):s=c>0&&c<1?0:o,new zr(o,s,c,t.opacity)}function zr(t,e,r,n){this.h=+t,this.s=+e,this.l=+r,this.opacity=+n}function Fr(t){return(t=(t||0)%360)<0?t+360:t}function Lr(t){return Math.max(0,Math.min(1,t||0))}function Ir(t,e,r){return 255*(t<60?e+(r-e)*t/60:t<180?r:t<240?e+(r-e)*(240-t)/60:e)}sr(lr,Dr,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:kr,formatHex:kr,formatHex8:function(){return this.rgb().formatHex8()},formatHsl:function(){return Rr(this).formatHsl()},formatRgb:$r,toString:$r}),sr(Ar,Er,cr(lr,{brighter(t){return t=null==t?hr:Math.pow(hr,t),new Ar(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=null==t?dr:Math.pow(dr,t),new Ar(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new Ar(Nr(this.r),Nr(this.g),Nr(this.b),Tr(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Mr,formatHex:Mr,formatHex8:function(){return`#${Hr(this.r)}${Hr(this.g)}${Hr(this.b)}${Hr(255*(isNaN(this.opacity)?1:this.opacity))}`},formatRgb:Pr,toString:Pr})),sr(zr,function(t,e,r,n){return 1===arguments.length?Rr(t):new zr(t,e,r,null==n?1:n)},cr(lr,{brighter(t){return t=null==t?hr:Math.pow(hr,t),new zr(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=null==t?dr:Math.pow(dr,t),new zr(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+360*(this.h<0),e=isNaN(t)||isNaN(this.s)?0:this.s,r=this.l,n=r+(r<.5?r:1-r)*e,i=2*r-n;return new Ar(Ir(t>=240?t-240:t+120,i,n),Ir(t,i,n),Ir(t<120?t+240:t-120,i,n),this.opacity)},clamp(){return new zr(Fr(this.h),Lr(this.s),Lr(this.l),Tr(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const t=Tr(this.opacity);return`${1===t?"hsl(":"hsla("}${Fr(this.h)}, ${100*Lr(this.s)}%, ${100*Lr(this.l)}%${1===t?")":`, ${t})`}`}}));var jr=t=>()=>t;function Vr(t){return 1===(t=+t)?Yr:function(e,r){return r-e?function(t,e,r){return t=Math.pow(t,r),e=Math.pow(e,r)-t,r=1/r,function(n){return Math.pow(t+n*e,r)}}(e,r,t):jr(isNaN(e)?r:e)}}function Yr(t,e){var r=e-t;return r?function(t,e){return function(r){return t+r*e}}(t,r):jr(isNaN(t)?e:t)}var Ur=function t(e){var r=Vr(e);function n(t,e){var n=r((t=Er(t)).r,(e=Er(e)).r),i=r(t.g,e.g),a=r(t.b,e.b),o=Yr(t.opacity,e.opacity);return function(e){return t.r=n(e),t.g=i(e),t.b=a(e),t.opacity=o(e),t+""}}return n.gamma=t,n}(1);function Wr(t,e){e||(e=[]);var r,n=t?Math.min(e.length,t.length):0,i=e.slice();return function(a){for(r=0;r<n;++r)i[r]=t[r]*(1-a)+e[r]*a;return i}}function qr(t,e){var r,n=e?e.length:0,i=t?Math.min(n,t.length):0,a=new Array(i),o=new Array(n);for(r=0;r<i;++r)a[r]=Qr(t[r],e[r]);for(;r<n;++r)o[r]=e[r];return function(t){for(r=0;r<i;++r)o[r]=a[r](t);return o}}function Br(t,e){var r=new Date;return t=+t,e=+e,function(n){return r.setTime(t*(1-n)+e*n),r}}function Xr(t,e){return t=+t,e=+e,function(r){return t*(1-r)+e*r}}function Gr(t,e){var r,n={},i={};for(r in null!==t&&"object"==typeof t||(t={}),null!==e&&"object"==typeof e||(e={}),e)r in t?n[r]=Qr(t[r],e[r]):i[r]=e[r];return function(t){for(r in n)i[r]=n[r](t);return i}}var Jr=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Zr=new RegExp(Jr.source,"g");function Kr(t,e){var r,n,i,a=Jr.lastIndex=Zr.lastIndex=0,o=-1,s=[],c=[];for(t+="",e+="";(r=Jr.exec(t))&&(n=Zr.exec(e));)(i=n.index)>a&&(i=e.slice(a,i),s[o]?s[o]+=i:s[++o]=i),(r=r[0])===(n=n[0])?s[o]?s[o]+=n:s[++o]=n:(s[++o]=null,c.push({i:o,x:Xr(r,n)})),a=Zr.lastIndex;return a<e.length&&(i=e.slice(a),s[o]?s[o]+=i:s[++o]=i),s.length<2?c[0]?function(t){return function(e){return t(e)+""}}(c[0].x):function(t){return function(){return t}}(e):(e=c.length,function(t){for(var r,n=0;n<e;++n)s[(r=c[n]).i]=r.x(t);return s.join("")})}function Qr(t,e){var r,n=typeof e;return null==e||"boolean"===n?jr(e):("number"===n?Xr:"string"===n?(r=Dr(e))?(e=r,Ur):Kr:e instanceof Dr?Ur:e instanceof Date?Br:function(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}(e)?Wr:Array.isArray(e)?qr:"function"!=typeof e.valueOf&&"function"!=typeof e.toString||isNaN(e)?Gr:Xr)(t,e)}function tn(t,e){return t=+t,e=+e,function(r){return Math.round(t*(1-r)+e*r)}}var en,rn=180/Math.PI,nn={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function an(t,e,r,n,i,a){var o,s,c;return(o=Math.sqrt(t*t+e*e))&&(t/=o,e/=o),(c=t*r+e*n)&&(r-=t*c,n-=e*c),(s=Math.sqrt(r*r+n*n))&&(r/=s,n/=s,c/=s),t*n<e*r&&(t=-t,e=-e,c=-c,o=-o),{translateX:i,translateY:a,rotate:Math.atan2(e,t)*rn,skewX:Math.atan(c)*rn,scaleX:o,scaleY:s}}function on(t,e,r,n){function i(t){return t.length?t.pop()+" ":""}return function(a,o){var s=[],c=[];return a=t(a),o=t(o),function(t,n,i,a,o,s){if(t!==i||n!==a){var c=o.push("translate(",null,e,null,r);s.push({i:c-4,x:Xr(t,i)},{i:c-2,x:Xr(n,a)})}else(i||a)&&o.push("translate("+i+e+a+r)}(a.translateX,a.translateY,o.translateX,o.translateY,s,c),function(t,e,r,a){t!==e?(t-e>180?e+=360:e-t>180&&(t+=360),a.push({i:r.push(i(r)+"rotate(",null,n)-2,x:Xr(t,e)})):e&&r.push(i(r)+"rotate("+e+n)}(a.rotate,o.rotate,s,c),function(t,e,r,a){t!==e?a.push({i:r.push(i(r)+"skewX(",null,n)-2,x:Xr(t,e)}):e&&r.push(i(r)+"skewX("+e+n)}(a.skewX,o.skewX,s,c),function(t,e,r,n,a,o){if(t!==r||e!==n){var s=a.push(i(a)+"scale(",null,",",null,")");o.push({i:s-4,x:Xr(t,r)},{i:s-2,x:Xr(e,n)})}else 1===r&&1===n||a.push(i(a)+"scale("+r+","+n+")")}(a.scaleX,a.scaleY,o.scaleX,o.scaleY,s,c),a=o=null,function(t){for(var e,r=-1,n=c.length;++r<n;)s[(e=c[r]).i]=e.x(t);return s.join("")}}}var sn,cn,ln=on(function(t){const e=new("function"==typeof DOMMatrix?DOMMatrix:WebKitCSSMatrix)(t+"");return e.isIdentity?nn:an(e.a,e.b,e.c,e.d,e.e,e.f)},"px, ","px)","deg)"),dn=on(function(t){return null==t?nn:(en||(en=document.createElementNS("http://www.w3.org/2000/svg","g")),en.setAttribute("transform",t),(t=en.transform.baseVal.consolidate())?an((t=t.matrix).a,t.b,t.c,t.d,t.e,t.f):nn)},", ",")",")"),hn=0,un=0,pn=0,fn=0,_n=0,gn=0,mn="object"==typeof performance&&performance.now?performance:Date,vn="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function yn(){return _n||(vn(wn),_n=mn.now()+gn)}function wn(){_n=0}function bn(){this._call=this._time=this._next=null}function xn(t,e,r){var n=new bn;return n.restart(t,e,r),n}function kn(){_n=(fn=mn.now())+gn,hn=un=0;try{!function(){yn(),++hn;for(var t,e=sn;e;)(t=_n-e._time)>=0&&e._call.call(void 0,t),e=e._next;--hn}()}finally{hn=0,function(){var t,e,r=sn,n=1/0;for(;r;)r._call?(n>r._time&&(n=r._time),t=r,r=r._next):(e=r._next,r._next=null,r=t?t._next=e:sn=e);cn=t,Dn(n)}(),_n=0}}function $n(){var t=mn.now(),e=t-fn;e>1e3&&(gn-=e,fn=t)}function Dn(t){hn||(un&&(un=clearTimeout(un)),t-_n>24?(t<1/0&&(un=setTimeout(kn,t-mn.now()-gn)),pn&&(pn=clearInterval(pn))):(pn||(fn=mn.now(),pn=setInterval($n,1e3)),hn=1,vn(kn)))}function Sn(t,e,r){var n=new bn;return e=null==e?0:+e,n.restart(r=>{n.stop(),t(r+e)},e,r),n}bn.prototype=xn.prototype={constructor:bn,restart:function(t,e,r){if("function"!=typeof t)throw new TypeError("callback is not a function");r=(null==r?yn():+r)+(null==e?0:+e),this._next||cn===this||(cn?cn._next=this:sn=this,cn=this),this._call=t,this._time=r,Dn()},stop:function(){this._call&&(this._call=null,this._time=1/0,Dn())}};var Cn=Yt("start","end","cancel","interrupt"),En=[];function An(t,e,r,n,i,a){var o=t.__transition;if(o){if(r in o)return}else t.__transition={};!function(t,e,r){var n,i=t.__transition;function a(t){r.state=1,r.timer.restart(o,r.delay,r.time),r.delay<=t&&o(t-r.delay)}function o(a){var l,d,h,u;if(1!==r.state)return c();for(l in i)if((u=i[l]).name===r.name){if(3===u.state)return Sn(o);4===u.state?(u.state=6,u.timer.stop(),u.on.call("interrupt",t,t.__data__,u.index,u.group),delete i[l]):+l<e&&(u.state=6,u.timer.stop(),u.on.call("cancel",t,t.__data__,u.index,u.group),delete i[l])}if(Sn(function(){3===r.state&&(r.state=4,r.timer.restart(s,r.delay,r.time),s(a))}),r.state=2,r.on.call("start",t,t.__data__,r.index,r.group),2===r.state){for(r.state=3,n=new Array(h=r.tween.length),l=0,d=-1;l<h;++l)(u=r.tween[l].value.call(t,t.__data__,r.index,r.group))&&(n[++d]=u);n.length=d+1}}function s(e){for(var i=e<r.duration?r.ease.call(null,e/r.duration):(r.timer.restart(c),r.state=5,1),a=-1,o=n.length;++a<o;)n[a].call(t,i);5===r.state&&(r.on.call("end",t,t.__data__,r.index,r.group),c())}function c(){for(var n in r.state=6,r.timer.stop(),delete i[e],i)return;delete t.__transition}i[e]=r,r.timer=xn(a,0,r.time)}(t,r,{name:e,index:n,group:i,on:Cn,tween:En,time:a.time,delay:a.delay,duration:a.duration,ease:a.ease,timer:null,state:0})}function Mn(t,e){var r=Tn(t,e);if(r.state>0)throw new Error("too late; already scheduled");return r}function Pn(t,e){var r=Tn(t,e);if(r.state>3)throw new Error("too late; already running");return r}function Tn(t,e){var r=t.__transition;if(!r||!(r=r[e]))throw new Error("transition not found");return r}function Nn(t,e){var r,n;return function(){var i=Pn(this,t),a=i.tween;if(a!==r)for(var o=0,s=(n=r=a).length;o<s;++o)if(n[o].name===e){(n=n.slice()).splice(o,1);break}i.tween=n}}function Hn(t,e,r){var n,i;if("function"!=typeof r)throw new Error;return function(){var a=Pn(this,t),o=a.tween;if(o!==n){i=(n=o).slice();for(var s={name:e,value:r},c=0,l=i.length;c<l;++c)if(i[c].name===e){i[c]=s;break}c===l&&i.push(s)}a.tween=i}}function On(t,e,r){var n=t._id;return t.each(function(){var t=Pn(this,n);(t.value||(t.value={}))[e]=r.apply(this,arguments)}),function(t){return Tn(t,n).value[e]}}function Rn(t,e){var r;return("number"==typeof e?Xr:e instanceof Dr?Ur:(r=Dr(e))?(e=r,Ur):Kr)(t,e)}function zn(t){return function(){this.removeAttribute(t)}}function Fn(t){return function(){this.removeAttributeNS(t.space,t.local)}}function Ln(t,e,r){var n,i,a=r+"";return function(){var o=this.getAttribute(t);return o===a?null:o===n?i:i=e(n=o,r)}}function In(t,e,r){var n,i,a=r+"";return function(){var o=this.getAttributeNS(t.space,t.local);return o===a?null:o===n?i:i=e(n=o,r)}}function jn(t,e,r){var n,i,a;return function(){var o,s,c=r(this);if(null!=c)return(o=this.getAttribute(t))===(s=c+"")?null:o===n&&s===i?a:(i=s,a=e(n=o,c));this.removeAttribute(t)}}function Vn(t,e,r){var n,i,a;return function(){var o,s,c=r(this);if(null!=c)return(o=this.getAttributeNS(t.space,t.local))===(s=c+"")?null:o===n&&s===i?a:(i=s,a=e(n=o,c));this.removeAttributeNS(t.space,t.local)}}function Yn(t,e){var r,n;function i(){var i=e.apply(this,arguments);return i!==n&&(r=(n=i)&&function(t,e){return function(r){this.setAttributeNS(t.space,t.local,e.call(this,r))}}(t,i)),r}return i._value=e,i}function Un(t,e){var r,n;function i(){var i=e.apply(this,arguments);return i!==n&&(r=(n=i)&&function(t,e){return function(r){this.setAttribute(t,e.call(this,r))}}(t,i)),r}return i._value=e,i}function Wn(t,e){return function(){Mn(this,t).delay=+e.apply(this,arguments)}}function qn(t,e){return e=+e,function(){Mn(this,t).delay=e}}function Bn(t,e){return function(){Pn(this,t).duration=+e.apply(this,arguments)}}function Xn(t,e){return e=+e,function(){Pn(this,t).duration=e}}var Gn=ir.prototype.constructor;function Jn(t){return function(){this.style.removeProperty(t)}}var Zn=0;function Kn(t,e,r,n){this._groups=t,this._parents=e,this._name=r,this._id=n}function Qn(){return++Zn}var ti=ir.prototype;function ei(t){return 1-function(t){return 1.0009775171065494*(Math.pow(2,-10*t)-.0009765625)}(t)}Kn.prototype={constructor:Kn,select:function(t){var e=this._name,r=this._id;"function"!=typeof t&&(t=te(t));for(var n=this._groups,i=n.length,a=new Array(i),o=0;o<i;++o)for(var s,c,l=n[o],d=l.length,h=a[o]=new Array(d),u=0;u<d;++u)(s=l[u])&&(c=t.call(s,s.__data__,u,l))&&("__data__"in s&&(c.__data__=s.__data__),h[u]=c,An(h[u],e,r,u,h,Tn(s,r)));return new Kn(a,this._parents,e,r)},selectAll:function(t){var e=this._name,r=this._id;"function"!=typeof t&&(t=re(t));for(var n=this._groups,i=n.length,a=[],o=[],s=0;s<i;++s)for(var c,l=n[s],d=l.length,h=0;h<d;++h)if(c=l[h]){for(var u,p=t.call(c,c.__data__,h,l),f=Tn(c,r),_=0,g=p.length;_<g;++_)(u=p[_])&&An(u,e,r,_,p,f);a.push(p),o.push(c)}return new Kn(a,o,e,r)},selectChild:ti.selectChild,selectChildren:ti.selectChildren,filter:function(t){"function"!=typeof t&&(t=ie(t));for(var e=this._groups,r=e.length,n=new Array(r),i=0;i<r;++i)for(var a,o=e[i],s=o.length,c=n[i]=[],l=0;l<s;++l)(a=o[l])&&t.call(a,a.__data__,l,o)&&c.push(a);return new Kn(n,this._parents,this._name,this._id)},merge:function(t){if(t._id!==this._id)throw new Error;for(var e=this._groups,r=t._groups,n=e.length,i=r.length,a=Math.min(n,i),o=new Array(n),s=0;s<a;++s)for(var c,l=e[s],d=r[s],h=l.length,u=o[s]=new Array(h),p=0;p<h;++p)(c=l[p]||d[p])&&(u[p]=c);for(;s<n;++s)o[s]=e[s];return new Kn(o,this._parents,this._name,this._id)},selection:function(){return new Gn(this._groups,this._parents)},transition:function(){for(var t=this._name,e=this._id,r=Qn(),n=this._groups,i=n.length,a=0;a<i;++a)for(var o,s=n[a],c=s.length,l=0;l<c;++l)if(o=s[l]){var d=Tn(o,e);An(o,t,r,l,s,{time:d.time+d.delay+d.duration,delay:0,duration:d.duration,ease:d.ease})}return new Kn(n,this._parents,t,r)},call:ti.call,nodes:ti.nodes,node:ti.node,size:ti.size,empty:ti.empty,each:ti.each,on:function(t,e){var r=this._id;return arguments.length<2?Tn(this.node(),r).on.on(t):this.each(function(t,e,r){var n,i,a=function(t){return(t+"").trim().split(/^|\s+/).every(function(t){var e=t.indexOf(".");return e>=0&&(t=t.slice(0,e)),!t||"start"===t})}(e)?Mn:Pn;return function(){var o=a(this,t),s=o.on;s!==n&&(i=(n=s).copy()).on(e,r),o.on=i}}(r,t,e))},attr:function(t,e){var r=Gt(t),n="transform"===r?dn:Rn;return this.attrTween(t,"function"==typeof e?(r.local?Vn:jn)(r,n,On(this,"attr."+t,e)):null==e?(r.local?Fn:zn)(r):(r.local?In:Ln)(r,n,e))},attrTween:function(t,e){var r="attr."+t;if(arguments.length<2)return(r=this.tween(r))&&r._value;if(null==e)return this.tween(r,null);if("function"!=typeof e)throw new Error;var n=Gt(t);return this.tween(r,(n.local?Yn:Un)(n,e))},style:function(t,e,r){var n="transform"==(t+="")?ln:Rn;return null==e?this.styleTween(t,function(t,e){var r,n,i;return function(){var a=Ce(this,t),o=(this.style.removeProperty(t),Ce(this,t));return a===o?null:a===r&&o===n?i:i=e(r=a,n=o)}}(t,n)).on("end.style."+t,Jn(t)):"function"==typeof e?this.styleTween(t,function(t,e,r){var n,i,a;return function(){var o=Ce(this,t),s=r(this),c=s+"";return null==s&&(this.style.removeProperty(t),c=s=Ce(this,t)),o===c?null:o===n&&c===i?a:(i=c,a=e(n=o,s))}}(t,n,On(this,"style."+t,e))).each(function(t,e){var r,n,i,a,o="style."+e,s="end."+o;return function(){var c=Pn(this,t),l=c.on,d=null==c.value[o]?a||(a=Jn(e)):void 0;l===r&&i===d||(n=(r=l).copy()).on(s,i=d),c.on=n}}(this._id,t)):this.styleTween(t,function(t,e,r){var n,i,a=r+"";return function(){var o=Ce(this,t);return o===a?null:o===n?i:i=e(n=o,r)}}(t,n,e),r).on("end.style."+t,null)},styleTween:function(t,e,r){var n="style."+(t+="");if(arguments.length<2)return(n=this.tween(n))&&n._value;if(null==e)return this.tween(n,null);if("function"!=typeof e)throw new Error;return this.tween(n,function(t,e,r){var n,i;function a(){var a=e.apply(this,arguments);return a!==i&&(n=(i=a)&&function(t,e,r){return function(n){this.style.setProperty(t,e.call(this,n),r)}}(t,a,r)),n}return a._value=e,a}(t,e,null==r?"":r))},text:function(t){return this.tween("text","function"==typeof t?function(t){return function(){var e=t(this);this.textContent=null==e?"":e}}(On(this,"text",t)):function(t){return function(){this.textContent=t}}(null==t?"":t+""))},textTween:function(t){var e="text";if(arguments.length<1)return(e=this.tween(e))&&e._value;if(null==t)return this.tween(e,null);if("function"!=typeof t)throw new Error;return this.tween(e,function(t){var e,r;function n(){var n=t.apply(this,arguments);return n!==r&&(e=(r=n)&&function(t){return function(e){this.textContent=t.call(this,e)}}(n)),e}return n._value=t,n}(t))},remove:function(){return this.on("end.remove",function(t){return function(){var e=this.parentNode;for(var r in this.__transition)if(+r!==t)return;e&&e.removeChild(this)}}(this._id))},tween:function(t,e){var r=this._id;if(t+="",arguments.length<2){for(var n,i=Tn(this.node(),r).tween,a=0,o=i.length;a<o;++a)if((n=i[a]).name===t)return n.value;return null}return this.each((null==e?Nn:Hn)(r,t,e))},delay:function(t){var e=this._id;return arguments.length?this.each(("function"==typeof t?Wn:qn)(e,t)):Tn(this.node(),e).delay},duration:function(t){var e=this._id;return arguments.length?this.each(("function"==typeof t?Bn:Xn)(e,t)):Tn(this.node(),e).duration},ease:function(t){var e=this._id;return arguments.length?this.each(function(t,e){if("function"!=typeof e)throw new Error;return function(){Pn(this,t).ease=e}}(e,t)):Tn(this.node(),e).ease},easeVarying:function(t){if("function"!=typeof t)throw new Error;return this.each(function(t,e){return function(){var r=e.apply(this,arguments);if("function"!=typeof r)throw new Error;Pn(this,t).ease=r}}(this._id,t))},end:function(){var t,e,r=this,n=r._id,i=r.size();return new Promise(function(a,o){var s={value:o},c={value:function(){0===--i&&a()}};r.each(function(){var r=Pn(this,n),i=r.on;i!==t&&((e=(t=i).copy())._.cancel.push(s),e._.interrupt.push(s),e._.end.push(c)),r.on=e}),0===i&&a()})},[Symbol.iterator]:ti[Symbol.iterator]};var ri={time:null,delay:0,duration:250,ease:function(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}};function ni(t,e){for(var r;!(r=t.__transition)||!(r=r[e]);)if(!(t=t.parentNode))throw new Error(`transition ${e} not found`);return r}ir.prototype.interrupt=function(t){return this.each(function(){!function(t,e){var r,n,i,a=t.__transition,o=!0;if(a){for(i in e=null==e?null:e+"",a)(r=a[i]).name===e?(n=r.state>2&&r.state<5,r.state=6,r.timer.stop(),r.on.call(n?"interrupt":"cancel",t,t.__data__,r.index,r.group),delete a[i]):o=!1;o&&delete t.__transition}}(this,t)})},ir.prototype.transition=function(t){var e,r;t instanceof Kn?(e=t._id,t=t._name):(e=Qn(),(r=ri).time=yn(),t=null==t?null:t+"");for(var n=this._groups,i=n.length,a=0;a<i;++a)for(var o,s=n[a],c=s.length,l=0;l<c;++l)(o=s[l])&&An(o,t,e,l,s,r||ni(o,e));return new Kn(n,this._parents,t,e)};const ii=Math.PI,ai=2*ii,oi=1e-6,si=ai-oi;function ci(t){this._+=t[0];for(let e=1,r=t.length;e<r;++e)this._+=arguments[e]+t[e]}class li{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=null==t?ci:function(t){let e=Math.floor(t);if(!(e>=0))throw new Error(`invalid digits: ${t}`);if(e>15)return ci;const r=10**e;return function(t){this._+=t[0];for(let e=1,n=t.length;e<n;++e)this._+=Math.round(arguments[e]*r)/r+t[e]}}(t)}moveTo(t,e){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+e}`}closePath(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,e){this._append`L${this._x1=+t},${this._y1=+e}`}quadraticCurveTo(t,e,r,n){this._append`Q${+t},${+e},${this._x1=+r},${this._y1=+n}`}bezierCurveTo(t,e,r,n,i,a){this._append`C${+t},${+e},${+r},${+n},${this._x1=+i},${this._y1=+a}`}arcTo(t,e,r,n,i){if(t=+t,e=+e,r=+r,n=+n,(i=+i)<0)throw new Error(`negative radius: ${i}`);let a=this._x1,o=this._y1,s=r-t,c=n-e,l=a-t,d=o-e,h=l*l+d*d;if(null===this._x1)this._append`M${this._x1=t},${this._y1=e}`;else if(h>oi)if(Math.abs(d*s-c*l)>oi&&i){let u=r-a,p=n-o,f=s*s+c*c,_=u*u+p*p,g=Math.sqrt(f),m=Math.sqrt(h),v=i*Math.tan((ii-Math.acos((f+h-_)/(2*g*m)))/2),y=v/m,w=v/g;Math.abs(y-1)>oi&&this._append`L${t+y*l},${e+y*d}`,this._append`A${i},${i},0,0,${+(d*u>l*p)},${this._x1=t+w*s},${this._y1=e+w*c}`}else this._append`L${this._x1=t},${this._y1=e}`;else;}arc(t,e,r,n,i,a){if(t=+t,e=+e,a=!!a,(r=+r)<0)throw new Error(`negative radius: ${r}`);let o=r*Math.cos(n),s=r*Math.sin(n),c=t+o,l=e+s,d=1^a,h=a?n-i:i-n;null===this._x1?this._append`M${c},${l}`:(Math.abs(this._x1-c)>oi||Math.abs(this._y1-l)>oi)&&this._append`L${c},${l}`,r&&(h<0&&(h=h%ai+ai),h>si?this._append`A${r},${r},0,1,${d},${t-o},${e-s}A${r},${r},0,1,${d},${this._x1=c},${this._y1=l}`:h>oi&&this._append`A${r},${r},0,${+(h>=ii)},${d},${this._x1=t+r*Math.cos(i)},${this._y1=e+r*Math.sin(i)}`)}rect(t,e,r,n){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+e}h${r=+r}v${+n}h${-r}Z`}toString(){return this._}}function di(t,e){if(!isFinite(t)||0===t)return null;var r=(t=e?t.toExponential(e-1):t.toExponential()).indexOf("e"),n=t.slice(0,r);return[n.length>1?n[0]+n.slice(2):n,+t.slice(r+1)]}function hi(t){return(t=di(Math.abs(t)))?t[1]:NaN}var ui,pi=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function fi(t){if(!(e=pi.exec(t)))throw new Error("invalid format: "+t);var e;return new _i({fill:e[1],align:e[2],sign:e[3],symbol:e[4],zero:e[5],width:e[6],comma:e[7],precision:e[8]&&e[8].slice(1),trim:e[9],type:e[10]})}function _i(t){this.fill=void 0===t.fill?" ":t.fill+"",this.align=void 0===t.align?">":t.align+"",this.sign=void 0===t.sign?"-":t.sign+"",this.symbol=void 0===t.symbol?"":t.symbol+"",this.zero=!!t.zero,this.width=void 0===t.width?void 0:+t.width,this.comma=!!t.comma,this.precision=void 0===t.precision?void 0:+t.precision,this.trim=!!t.trim,this.type=void 0===t.type?"":t.type+""}function gi(t,e){var r=di(t,e);if(!r)return t+"";var n=r[0],i=r[1];return i<0?"0."+new Array(-i).join("0")+n:n.length>i+1?n.slice(0,i+1)+"."+n.slice(i+1):n+new Array(i-n.length+2).join("0")}fi.prototype=_i.prototype,_i.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(void 0===this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(void 0===this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type};var mi={"%":(t,e)=>(100*t).toFixed(e),b:t=>Math.round(t).toString(2),c:t=>t+"",d:function(t){return Math.abs(t=Math.round(t))>=1e21?t.toLocaleString("en").replace(/,/g,""):t.toString(10)},e:(t,e)=>t.toExponential(e),f:(t,e)=>t.toFixed(e),g:(t,e)=>t.toPrecision(e),o:t=>Math.round(t).toString(8),p:(t,e)=>gi(100*t,e),r:gi,s:function(t,e){var r=di(t,e);if(!r)return ui=void 0,t.toPrecision(e);var n=r[0],i=r[1],a=i-(ui=3*Math.max(-8,Math.min(8,Math.floor(i/3))))+1,o=n.length;return a===o?n:a>o?n+new Array(a-o+1).join("0"):a>0?n.slice(0,a)+"."+n.slice(a):"0."+new Array(1-a).join("0")+di(t,Math.max(0,e+a-1))[0]},X:t=>Math.round(t).toString(16).toUpperCase(),x:t=>Math.round(t).toString(16)};function vi(t){return t}var yi,wi,bi,xi=Array.prototype.map,ki=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function $i(t){var e,r,n=void 0===t.grouping||void 0===t.thousands?vi:(e=xi.call(t.grouping,Number),r=t.thousands+"",function(t,n){for(var i=t.length,a=[],o=0,s=e[0],c=0;i>0&&s>0&&(c+s+1>n&&(s=Math.max(1,n-c)),a.push(t.substring(i-=s,i+s)),!((c+=s+1)>n));)s=e[o=(o+1)%e.length];return a.reverse().join(r)}),i=void 0===t.currency?"":t.currency[0]+"",a=void 0===t.currency?"":t.currency[1]+"",o=void 0===t.decimal?".":t.decimal+"",s=void 0===t.numerals?vi:function(t){return function(e){return e.replace(/[0-9]/g,function(e){return t[+e]})}}(xi.call(t.numerals,String)),c=void 0===t.percent?"%":t.percent+"",l=void 0===t.minus?"−":t.minus+"",d=void 0===t.nan?"NaN":t.nan+"";function h(t,e){var r=(t=fi(t)).fill,h=t.align,u=t.sign,p=t.symbol,f=t.zero,_=t.width,g=t.comma,m=t.precision,v=t.trim,y=t.type;"n"===y?(g=!0,y="g"):mi[y]||(void 0===m&&(m=12),v=!0,y="g"),(f||"0"===r&&"="===h)&&(f=!0,r="0",h="=");var w=(e&&void 0!==e.prefix?e.prefix:"")+("$"===p?i:"#"===p&&/[boxX]/.test(y)?"0"+y.toLowerCase():""),b=("$"===p?a:/[%p]/.test(y)?c:"")+(e&&void 0!==e.suffix?e.suffix:""),x=mi[y],k=/[defgprs%]/.test(y);function $(t){var e,i,a,c=w,p=b;if("c"===y)p=x(t)+p,t="";else{var $=(t=+t)<0||1/t<0;if(t=isNaN(t)?d:x(Math.abs(t),m),v&&(t=function(t){t:for(var e,r=t.length,n=1,i=-1;n<r;++n)switch(t[n]){case".":i=e=n;break;case"0":0===i&&(i=n),e=n;break;default:if(!+t[n])break t;i>0&&(i=0)}return i>0?t.slice(0,i)+t.slice(e+1):t}(t)),$&&0===+t&&"+"!==u&&($=!1),c=($?"("===u?u:l:"-"===u||"("===u?"":u)+c,p=("s"!==y||isNaN(t)||void 0===ui?"":ki[8+ui/3])+p+($&&"("===u?")":""),k)for(e=-1,i=t.length;++e<i;)if(48>(a=t.charCodeAt(e))||a>57){p=(46===a?o+t.slice(e+1):t.slice(e))+p,t=t.slice(0,e);break}}g&&!f&&(t=n(t,1/0));var D=c.length+t.length+p.length,S=D<_?new Array(_-D+1).join(r):"";switch(g&&f&&(t=n(S+t,S.length?_-p.length:1/0),S=""),h){case"<":t=c+t+p+S;break;case"=":t=c+S+t+p;break;case"^":t=S.slice(0,D=S.length>>1)+c+t+p+S.slice(D);break;default:t=S+c+t+p}return s(t)}return m=void 0===m?6:/[gprs]/.test(y)?Math.max(1,Math.min(21,m)):Math.max(0,Math.min(20,m)),$.toString=function(){return t+""},$}return{format:h,formatPrefix:function(t,e){var r=3*Math.max(-8,Math.min(8,Math.floor(hi(e)/3))),n=Math.pow(10,-r),i=h(((t=fi(t)).type="f",t),{suffix:ki[8+r/3]});return function(t){return i(n*t)}}}}function Di(t,e){switch(arguments.length){case 0:break;case 1:this.range(t);break;default:this.range(e).domain(t)}return this}yi=$i({thousands:",",grouping:[3],currency:["$",""]}),wi=yi.format,bi=yi.formatPrefix;const Si=Symbol("implicit");function Ci(){var t=new Dt,e=[],r=[],n=Si;function i(i){let a=t.get(i);if(void 0===a){if(n!==Si)return n;t.set(i,a=e.push(i)-1)}return r[a%r.length]}return i.domain=function(r){if(!arguments.length)return e.slice();e=[],t=new Dt;for(const n of r)t.has(n)||t.set(n,e.push(n)-1);return i},i.range=function(t){return arguments.length?(r=Array.from(t),i):r.slice()},i.unknown=function(t){return arguments.length?(n=t,i):n},i.copy=function(){return Ci(e,r).unknown(n)},Di.apply(i,arguments),i}function Ei(){var t,e,r=Ci().unknown(void 0),n=r.domain,i=r.range,a=0,o=1,s=!1,c=0,l=0,d=.5;function h(){var r=n().length,h=o<a,u=h?o:a,p=h?a:o;t=(p-u)/Math.max(1,r-c+2*l),s&&(t=Math.floor(t)),u+=(p-u-t*(r-c))*d,e=t*(1-c),s&&(u=Math.round(u),e=Math.round(e));var f=function(t,e,r){t=+t,e=+e,r=(i=arguments.length)<2?(e=t,t=0,1):i<3?1:+r;for(var n=-1,i=0|Math.max(0,Math.ceil((e-t)/r)),a=new Array(i);++n<i;)a[n]=t+n*r;return a}(r).map(function(e){return u+t*e});return i(h?f.reverse():f)}return delete r.unknown,r.domain=function(t){return arguments.length?(n(t),h()):n()},r.range=function(t){return arguments.length?([a,o]=t,a=+a,o=+o,h()):[a,o]},r.rangeRound=function(t){return[a,o]=t,a=+a,o=+o,s=!0,h()},r.bandwidth=function(){return e},r.step=function(){return t},r.round=function(t){return arguments.length?(s=!!t,h()):s},r.padding=function(t){return arguments.length?(c=Math.min(1,l=+t),h()):c},r.paddingInner=function(t){return arguments.length?(c=Math.min(1,t),h()):c},r.paddingOuter=function(t){return arguments.length?(l=+t,h()):l},r.align=function(t){return arguments.length?(d=Math.max(0,Math.min(1,t)),h()):d},r.copy=function(){return Ei(n(),[a,o]).round(s).paddingInner(c).paddingOuter(l).align(d)},Di.apply(h(),arguments)}function Ai(t){return+t}var Mi=[0,1];function Pi(t){return t}function Ti(t,e){return(e-=t=+t)?function(r){return(r-t)/e}:function(t){return function(){return t}}(isNaN(e)?NaN:.5)}function Ni(t,e,r){var n=t[0],i=t[1],a=e[0],o=e[1];return i<n?(n=Ti(i,n),a=r(o,a)):(n=Ti(n,i),a=r(a,o)),function(t){return a(n(t))}}function Hi(t,e,r){var n=Math.min(t.length,e.length)-1,i=new Array(n),a=new Array(n),o=-1;for(t[n]<t[0]&&(t=t.slice().reverse(),e=e.slice().reverse());++o<n;)i[o]=Ti(t[o],t[o+1]),a[o]=r(e[o],e[o+1]);return function(e){var r=$t(t,e,1,n)-1;return a[r](i[r](e))}}function Oi(){var t,e,r,n,i,a,o=Mi,s=Mi,c=Qr,l=Pi;function d(){var t=Math.min(o.length,s.length);return l!==Pi&&(l=function(t,e){var r;return t>e&&(r=t,t=e,e=r),function(r){return Math.max(t,Math.min(e,r))}}(o[0],o[t-1])),n=t>2?Hi:Ni,i=a=null,h}function h(e){return null==e||isNaN(e=+e)?r:(i||(i=n(o.map(t),s,c)))(t(l(e)))}return h.invert=function(r){return l(e((a||(a=n(s,o.map(t),Xr)))(r)))},h.domain=function(t){return arguments.length?(o=Array.from(t,Ai),d()):o.slice()},h.range=function(t){return arguments.length?(s=Array.from(t),d()):s.slice()},h.rangeRound=function(t){return s=Array.from(t),c=tn,d()},h.clamp=function(t){return arguments.length?(l=!!t||Pi,d()):l!==Pi},h.interpolate=function(t){return arguments.length?(c=t,d()):c},h.unknown=function(t){return arguments.length?(r=t,h):r},function(r,n){return t=r,e=n,d()}}function Ri(t,e,r,n){var i,a=function(t,e,r){r=+r;const n=(e=+e)<(t=+t),i=n?Tt(e,t,r):Tt(t,e,r);return(n?-1:1)*(i<0?1/-i:i)}(t,e,r);switch((n=fi(null==n?",f":n)).type){case"s":var o=Math.max(Math.abs(t),Math.abs(e));return null!=n.precision||isNaN(i=function(t,e){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(hi(e)/3)))-hi(Math.abs(t)))}(a,o))||(n.precision=i),bi(n,o);case"":case"e":case"g":case"p":case"r":null!=n.precision||isNaN(i=function(t,e){return t=Math.abs(t),e=Math.abs(e)-t,Math.max(0,hi(e)-hi(t))+1}(a,Math.max(Math.abs(t),Math.abs(e))))||(n.precision=i-("e"===n.type));break;case"f":case"%":null!=n.precision||isNaN(i=function(t){return Math.max(0,-hi(Math.abs(t)))}(a))||(n.precision=i-2*("%"===n.type))}return wi(n)}function zi(t){var e=t.domain;return t.ticks=function(t){var r=e();return function(t,e,r){if(!((r=+r)>0))return[];if((t=+t)===(e=+e))return[t];const n=e<t,[i,a,o]=n?Pt(e,t,r):Pt(t,e,r);if(!(a>=i))return[];const s=a-i+1,c=new Array(s);if(n)if(o<0)for(let t=0;t<s;++t)c[t]=(a-t)/-o;else for(let t=0;t<s;++t)c[t]=(a-t)*o;else if(o<0)for(let t=0;t<s;++t)c[t]=(i+t)/-o;else for(let t=0;t<s;++t)c[t]=(i+t)*o;return c}(r[0],r[r.length-1],null==t?10:t)},t.tickFormat=function(t,r){var n=e();return Ri(n[0],n[n.length-1],null==t?10:t,r)},t.nice=function(r){null==r&&(r=10);var n,i,a=e(),o=0,s=a.length-1,c=a[o],l=a[s],d=10;for(l<c&&(i=c,c=l,l=i,i=o,o=s,s=i);d-- >0;){if((i=Tt(c,l,r))===n)return a[o]=c,a[s]=l,e(a);if(i>0)c=Math.floor(c/i)*i,l=Math.ceil(l/i)*i;else{if(!(i<0))break;c=Math.ceil(c*i)/i,l=Math.floor(l*i)/i}n=i}return t},t}function Fi(){var t=Oi()(Pi,Pi);return t.copy=function(){return e=t,Fi().domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());var e},Di.apply(t,arguments),zi(t)}function Li(t){return function(){return t}}function Ii(t){let e=3;return t.digits=function(r){if(!arguments.length)return e;if(null==r)e=null;else{const t=Math.floor(r);if(!(t>=0))throw new RangeError(`invalid digits: ${r}`);e=t}return t},()=>new li(e)}function ji(t){return"object"==typeof t&&"length"in t?t:Array.from(t)}function Vi(t){this._context=t}function Yi(t){return new Vi(t)}function Ui(t){return t[0]}function Wi(t){return t[1]}function qi(t,e){var r=Li(!0),n=null,i=Yi,a=null,o=Ii(s);function s(s){var c,l,d,h=(s=ji(s)).length,u=!1;for(null==n&&(a=i(d=o())),c=0;c<=h;++c)!(c<h&&r(l=s[c],c,s))===u&&((u=!u)?a.lineStart():a.lineEnd()),u&&a.point(+t(l,c,s),+e(l,c,s));if(d)return a=null,d+""||null}return t="function"==typeof t?t:void 0===t?Ui:Li(t),e="function"==typeof e?e:void 0===e?Wi:Li(e),s.x=function(e){return arguments.length?(t="function"==typeof e?e:Li(+e),s):t},s.y=function(t){return arguments.length?(e="function"==typeof t?t:Li(+t),s):e},s.defined=function(t){return arguments.length?(r="function"==typeof t?t:Li(!!t),s):r},s.curve=function(t){return arguments.length?(i=t,null!=n&&(a=i(n)),s):i},s.context=function(t){return arguments.length?(null==t?n=a=null:a=i(n=t),s):n},s}function Bi(t,e,r){var n=null,i=Li(!0),a=null,o=Yi,s=null,c=Ii(l);function l(l){var d,h,u,p,f,_=(l=ji(l)).length,g=!1,m=new Array(_),v=new Array(_);for(null==a&&(s=o(f=c())),d=0;d<=_;++d){if(!(d<_&&i(p=l[d],d,l))===g)if(g=!g)h=d,s.areaStart(),s.lineStart();else{for(s.lineEnd(),s.lineStart(),u=d-1;u>=h;--u)s.point(m[u],v[u]);s.lineEnd(),s.areaEnd()}g&&(m[d]=+t(p,d,l),v[d]=+e(p,d,l),s.point(n?+n(p,d,l):m[d],r?+r(p,d,l):v[d]))}if(f)return s=null,f+""||null}function d(){return qi().defined(i).curve(o).context(a)}return t="function"==typeof t?t:void 0===t?Ui:Li(+t),e="function"==typeof e?e:Li(void 0===e?0:+e),r="function"==typeof r?r:void 0===r?Wi:Li(+r),l.x=function(e){return arguments.length?(t="function"==typeof e?e:Li(+e),n=null,l):t},l.x0=function(e){return arguments.length?(t="function"==typeof e?e:Li(+e),l):t},l.x1=function(t){return arguments.length?(n=null==t?null:"function"==typeof t?t:Li(+t),l):n},l.y=function(t){return arguments.length?(e="function"==typeof t?t:Li(+t),r=null,l):e},l.y0=function(t){return arguments.length?(e="function"==typeof t?t:Li(+t),l):e},l.y1=function(t){return arguments.length?(r=null==t?null:"function"==typeof t?t:Li(+t),l):r},l.lineX0=l.lineY0=function(){return d().x(t).y(e)},l.lineY1=function(){return d().x(t).y(r)},l.lineX1=function(){return d().x(n).y(e)},l.defined=function(t){return arguments.length?(i="function"==typeof t?t:Li(!!t),l):i},l.curve=function(t){return arguments.length?(o=t,null!=a&&(s=o(a)),l):o},l.context=function(t){return arguments.length?(null==t?a=s=null:s=o(a=t),l):a},l}function Xi(t){return t<0?-1:1}function Gi(t,e,r){var n=t._x1-t._x0,i=e-t._x1,a=(t._y1-t._y0)/(n||i<0&&-0),o=(r-t._y1)/(i||n<0&&-0),s=(a*i+o*n)/(n+i);return(Xi(a)+Xi(o))*Math.min(Math.abs(a),Math.abs(o),.5*Math.abs(s))||0}function Ji(t,e){var r=t._x1-t._x0;return r?(3*(t._y1-t._y0)/r-e)/2:e}function Zi(t,e,r){var n=t._x0,i=t._y0,a=t._x1,o=t._y1,s=(a-n)/3;t._context.bezierCurveTo(n+s,i+s*e,a-s,o-s*r,a,o)}function Ki(t){this._context=t}function Qi(t){return new Ki(t)}function ta(t,e){if((i=t.length)>1)for(var r,n,i,a=1,o=t[e[0]],s=o.length;a<i;++a)for(n=o,o=t[e[a]],r=0;r<s;++r)o[r][1]+=o[r][0]=isNaN(n[r][1])?n[r][0]:n[r][1]}function ea(t){for(var e=t.length,r=new Array(e);--e>=0;)r[e]=e;return r}function ra(t,e){return t[e]}function na(t){const e=[];return e.key=t,e}function ia(t,e,r){this.k=t,this.x=e,this.y=r}Vi.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2;default:this._context.lineTo(t,e)}}},Ki.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:Zi(this,this._t0,Ji(this,this._t0))}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){var r=NaN;if(e=+e,(t=+t)!==this._x1||e!==this._y1){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2;break;case 2:this._point=3,Zi(this,Ji(this,r=Gi(this,t,e)),r);break;default:Zi(this,this._t0,r=Gi(this,t,e))}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=e,this._t0=r}}},Object.create(Ki.prototype).point=function(t,e){Ki.prototype.point.call(this,e,t)},ia.prototype={constructor:ia,scale:function(t){return 1===t?this:new ia(this.k*t,this.x,this.y)},translate:function(t,e){return 0===t&0===e?this:new ia(this.k,this.x+this.k*t,this.y+this.k*e)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}},ia.prototype;const aa=["ENE","FEB","MAR","ABR","MAY","JUN","JUL","AGO","SEP","OCT","NOV","DIC"],oa=["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"];function sa(t,e,r,n,i){const{width:a,height:o,padding:s}=e,c=a-s.left-s.right,l=o-s.top-s.bottom,d=n-r||1,h=t.length>1?c/(t.length-1):0;return t.map((t,e)=>({x:s.left+e*h,y:s.top+l-(t-r)/d*l,value:t,label:i?.[e],timestamp:i?.[e]}))}function ca(t,e){try{const r=new Date(t);if("day"===e)return r.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",hour12:!1});if("week"===e){const t=r.getDate().toString().padStart(2,"0");return`${t}/${(r.getMonth()+1).toString().padStart(2,"0")}`}if("month"===e){const t=r.getDate().toString().padStart(2,"0");return`${t}/${(r.getMonth()+1).toString().padStart(2,"0")}`}return oa[r.getMonth()]}catch{return t.split("T")[0]}}function la(t,e){if(e<=0||0===t.length)return t.map(()=>null);const r=[];for(let n=0;n<t.length;n++){if(n<e-1){r.push(null);continue}let i=0;for(let r=n-e+1;r<=n;r++)i+=t[r];r.push(i/e)}return r}function da(t,e="en"){const r="es"===e?"es-ES":"be"===e?"be-BY":"en-US",n=t.value.toLocaleString(r,{minimumFractionDigits:2,maximumFractionDigits:2}),i=t.timestamp?new Date(t.timestamp):null;let a="N/A";if(i){a=`${i.getDate()} ${aa[i.getMonth()]}`}return`${n} kWh\n${a}`}const ha=.2,ua=.2,pa=.9,fa="13px",_a="Roboto, sans-serif",ga=5,ma=1.1,va=.4,ya=.1,wa=-10,ba=5,xa=12;function ka(t){const{width:e,height:r,padding:n}=t;return{chartWidth:e-n.left-n.right,chartHeight:r-n.top-n.bottom}}function $a(t,e,r,n){if("month"===r||"week"===r){const r=void 0!==n?n:ya;return Ei().domain(t).range([0,e]).padding(r)}return Fi().domain([0,t.length-1]).range([0,e])}function Da(t,e){return Fi().domain([0,t*ma]).range([e,0])}function Sa(t,e){return t.append("g").attr("class","chart-content").attr("transform",`translate(${e.left}, ${e.top})`)}function Ca(t,e,r,n){const i=t.append("g").attr("class","grid"),a=e.ticks(ga);i.selectAll("line.grid-line").data(a).join("line").attr("class","grid-line").attr("x1",0).attr("x2",r).attr("y1",t=>e(t)).attr("y2",t=>e(t)).attr("stroke",n.colors.grid).attr("stroke-width",1).attr("opacity",ha)}function Ea(t,e,r,n,i){const{width:a,height:o,padding:s}=i,{chartHeight:c}=ka(i),l=s.top+c-20,d=t.append("g").attr("class","axis axis-x").attr("transform",`translate(${s.left}, ${l})`);if("month"===n||"week"===n){const t=jt(e).tickFormat(t=>ca(t,n));"month"===n&&t.tickValues(r.filter(t=>new Date(t).getDate()%2==1)),d.call(t)}else{const t=jt(e).ticks(Math.min(r.length,xa)).tickFormat(t=>{const e=Math.round(t);return e>=0&&e<r.length?ca(r[e],n):""});d.call(t)}return d.selectAll("line, path").attr("stroke","none").attr("opacity",0),d.selectAll("text").attr("fill",i.colors.text).attr("font-size",fa).attr("font-family",i.fontFamily||_a).attr("opacity",pa).each(function(){const t=this,e=t.getBBox();ar(t.parentNode).insert("rect",function(){return t}).attr("x",e.x-4).attr("y",e.y-2).attr("width",e.width+8).attr("height",e.height+4).attr("fill",i.colors.background).attr("opacity",.85).attr("rx",2).attr("ry",2)}),d}function Aa(t,e,r){const{padding:n}=r,i=t.append("g").attr("class","axis axis-y").attr("transform",`translate(${n.left}, ${n.top})`),a=(o=e,It(4,o)).ticks(ga).tickFormat(t=>String(t));var o;return i.call(a),i.selectAll("text").attr("fill",r.colors.text).attr("font-size",fa).attr("font-family",r.fontFamily||_a).attr("opacity",pa).style("display",function(){return"0"===ar(this).text()?"none":null}),i.selectAll("line, path").attr("stroke",r.colors.axis).attr("opacity",ua),i}function Ma(t,e,r){t.append("text").attr("class","y-axis-label").attr("x",e.left+wa).attr("y",e.top+ba).attr("text-anchor","end").attr("fill",r.colors.text).attr("font-size",fa).attr("font-family",r.fontFamily||_a).attr("opacity",pa).text("kWh")}function Pa(t,e,r,n){if("month"===n||"week"===n){const r=t,n=r(e||"");return n?n+r.bandwidth()/2:0}return t(r)}async function Ta(t,e,r,n,i){const{padding:a}=e,{chartWidth:o,chartHeight:s}=ka(e);t.selectAll("g.chart-content, g.axis, g.grid, path.area-stack").remove();const c=Sa(t,a),l=r.timestamps||[],d=n.period||"month";if(0===r.layers.length||0===l.length)return;const h=$a(l,o,d),u=Da(r.maxValue,s);i.setXScale(h),i.setYScale(u),Ca(c,u,o,e),Ea(t,h,l,d,e),Aa(t,u,e),Ma(t,a,e);const p=Array.from({length:l.length},(t,e)=>{const n={};return r.layers.forEach((t,r)=>{n[r.toString()]=t.data[e]||0}),n}),f=function(){var t=Li([]),e=ea,r=ta,n=ra;function i(i){var a,o,s=Array.from(t.apply(this,arguments),na),c=s.length,l=-1;for(const t of i)for(a=0,++l;a<c;++a)(s[a][l]=[0,+n(t,s[a].key,l,i)]).data=t;for(a=0,o=ji(e(s));a<c;++a)s[o[a]].index=a;return r(s,o),s}return i.keys=function(e){return arguments.length?(t="function"==typeof e?e:Li(Array.from(e)),i):t},i.value=function(t){return arguments.length?(n="function"==typeof t?t:Li(+t),i):n},i.order=function(t){return arguments.length?(e=null==t?ea:"function"==typeof t?t:Li(Array.from(t)),i):e},i.offset=function(t){return arguments.length?(r=null==t?ta:t,i):r},i}().keys(r.layers.map((t,e)=>e.toString())).value((t,e)=>t[e]||0).order(ea).offset(ta),_=f(p),g=Bi().x((t,e)=>Pa(h,l[e],e,d)).y0(t=>u(t[0])).y1(t=>u(t[1])).curve(Qi),m=c.append("g").attr("class","areas");if(_.forEach((t,n)=>{const a=r.layers[n];a&&m.append("path").datum(t).attr("class",`area-stack layer-${n}`).attr("d",g).attr("fill",a.color).attr("fill-opacity",a.opacity||.7).attr("stroke","none").style("cursor","pointer").on("mouseenter",function(r,n){const[o]=or(r,c.node());let s=0,u=1/0;if(t.forEach((t,e)=>{if(e<l.length){const t=Pa(h,l[e],e,d),r=Math.abs(o-t);r<u&&(u=r,s=e)}}),s<l.length){const t={x:0,y:0,value:a.data[s],timestamp:l[s]};i.setHoveredPoint(t),ar(this).attr("title",da(t,e.language))}}).on("mouseleave",function(){i.setHoveredPoint(null),ar(this).attr("title","")}).on("mousemove",function(r,n){const[i]=or(r,c.node());let o=0,s=1/0;if(t.forEach((t,e)=>{if(e<l.length){const t=Pa(h,l[e],e,d),r=Math.abs(i-t);r<s&&(s=r,o=e)}}),o<l.length){const t={value:a.data[o],timestamp:l[o]};ar(this).attr("title",da(t,e.language))}})}),n.animation?.enabled){const t=n.animation;m.selectAll("path.area-stack").attr("opacity",0).transition().duration(t.duration||800).delay((e,r)=>(t.delay||0)+100*r).ease(ei).attr("opacity",(t,e)=>r.layers[e]?.opacity||.7)}}class Na{constructor(t,e){this.xScale=null,this.yScale=null,this.hoveredPoint=null,this.currentDataPoints=[],this.currentBarWidth=0,this._resizeTimeout=null,this._resizeObserver=null,this.container=t,this.config=e,this.chartId=`chart-${Math.random().toString(36).substring(2,9)}`;const r=e.language||"en";this.svg=ar(t).append("svg").attr("class","chart-svg").attr("width",e.width).attr("height",e.height).attr("viewBox",`0 0 ${e.width} ${e.height}`).attr("role","img").attr("aria-label",ft("chart.accessibility.title",r)).attr("aria-live","polite").attr("tabindex","0").style("display","block").style("pointer-events","all"),this._addKeyboardSupport(),this._addTouchSupport(),this._addResizeSupport()}clear(){this.svg.selectAll("g.chart-content, g.axis, g.grid, path.bar, path.line, path.area, circle.point, g.areas, text.y-axis-label").remove()}resize(t,e){this.config.width=t,this.config.height=e,this.svg.attr("width",t).attr("height",e).attr("viewBox",`0 0 ${t} ${e}`),this.currentDataPoints.length>0&&(this.xScale=null,this.yScale=null)}getComputedColor(t,e){if("undefined"==typeof window)return e;try{const r=this.container.getRootNode(),n=r instanceof ShadowRoot?r.host:document.documentElement,i=getComputedStyle(n);return i.getPropertyValue(t).trim()||e}catch{return e}}async renderBarChart(t,e){this.currentDataPoints=t.points,await async function(t,e,r,n,i){const{padding:a}=e,{chartWidth:o,chartHeight:s}=ka(e);t.selectAll("g.chart-content, g.axis, g.grid, path.bar, path.moving-average").remove();const c=Sa(t,a),l=r.points.map(t=>t.timestamp||""),d=r.points.map(t=>t.value),h=n.period||"month",u=$a(l,o,h,"month"===h||"week"===h?va:ya),p=Da(r.maxValue,s);i.setXScale(u),i.setYScale(p);const f=n.barWidth||("month"===h||"week"===h?u.bandwidth():o/d.length*.6);i.setBarWidth&&i.setBarWidth(f),Ca(c,p,o,e),Ea(t,u,l,h,e),Aa(t,p,e),Ma(t,a,e);const _=e.colors.gradient?.enabled??!1;if(_&&e.colors.gradient){const r=t.select("defs").empty()?t.append("defs"):t.select("defs");r.select("#octopus-pink-gradient").remove();const n=e.colors.gradient,i=n.id||"octopus-pink-gradient",a=n.stops||[{offset:"0%",color:"#F050F8"},{offset:"100%",color:"#FA98FF"}],o=r.append("linearGradient").attr("id",i).attr("x1",n.x1||"0%").attr("y1",n.y1||"0%").attr("x2",n.x2||"0%").attr("y2",n.y2||"100%");a.forEach(t=>{o.append("stop").attr("offset",t.offset).attr("stop-color",t.color)})}const g=c.append("g").attr("class","bars"),m=(t,e,r,n)=>`\n      M ${t},${e}\n      L ${t+r},${e}\n      L ${t+r},${e+n}\n      L ${t},${e+n}\n      Z\n    `,v=g.selectAll("path.bar").data(r.points);if(v.enter().append("path").attr("class","bar").merge(v).attr("d",(t,e)=>{const r="month"===h||"week"===h?u(t.timestamp||"")||0:(u(e)||0)-f/2,n=p(t.value),i="month"===h||"week"===h?u.bandwidth():f;return m(r,n,i,s-n)}).attr("fill",t=>i.hoveredPoint&&i.hoveredPoint.timestamp===t.timestamp&&i.hoveredPoint.value===t.value?e.colors.hover||"#ff69b4":_?`url(#${e.colors.gradient?.id||"octopus-pink-gradient"})`:e.colors.primary).style("cursor","pointer").attr("title",t=>da(t,e.language)).on("mouseenter",function(t,r){i.setHoveredPoint(r),ar(this).transition().duration(200).attr("fill",e.colors.hover||"#ff69b4")}).on("mouseleave",function(){i.setHoveredPoint(null),ar(this).transition().duration(150).attr("fill",e.colors.primary)}),v.exit().remove(),n.showMovingAverage&&n.movingAverageDays){const t=la(d,n.movingAverageDays),r=[];for(let e=n.movingAverageDays-1;e<t.length;e++){const n=t[e];null!==n&&r.push({x:0,y:0,value:n,timestamp:l[e]})}if(r.length>0){const t=qi().x((t,e)=>{const r=t.timestamp||"",n=l.indexOf(r);return Pa(u,r,n,h)}).y(t=>p(t.value)).curve(Qi);c.append("path").datum(r).attr("class","line moving-average").attr("d",t).attr("fill","none").attr("stroke",e.colors.accent).attr("stroke-width",2).attr("stroke-dasharray","5,5")}}if(n.animation?.enabled){const t=n.animation,e=t.duration||2e3;v.attr("d",(t,e)=>{const r="month"===h||"week"===h?u(t.timestamp||"")||0:(u(e)||0)-f/2,n="month"===h||"week"===h?u.bandwidth():f;return m(r,s,n,0)}).transition().duration(e).delay((e,r)=>(t.delay||0)+50*r).ease(ei).attr("d",(t,e)=>{const r="month"===h||"week"===h?u(t.timestamp||"")||0:(u(e)||0)-f/2,n=p(t.value),i="month"===h||"week"===h?u.bandwidth():f;return m(r,n,i,s-n)})}}(this.svg,this.config,t,e||{},{xScale:this.xScale,yScale:this.yScale,setXScale:t=>{this.xScale=t},setYScale:t=>{this.yScale=t},hoveredPoint:this.hoveredPoint,setHoveredPoint:t=>{this.hoveredPoint=t},setBarWidth:t=>{this.currentBarWidth=t}})}async renderLineChart(t,e){this.currentDataPoints=t.points,await async function(t,e,r,n,i){const{padding:a}=e,{chartWidth:o,chartHeight:s}=ka(e);t.selectAll("g.chart-content, g.axis, g.grid, path.line, path.area, circle.point").remove();const c=Sa(t,a),l=r.points.map(t=>t.timestamp||""),d=r.points.map(t=>t.value),h=n.period||"month",u=$a(l,o,h),p=Da(r.maxValue,s);i.setXScale(u),i.setYScale(p),Ca(c,p,o,e),Ea(t,u,l,h,e),Aa(t,p,e),Ma(t,a,e);const f=qi().x((t,e)=>Pa(u,t.timestamp,e,h)).y(t=>p(t.value)).curve(Qi);if(n.showArea){const t=Bi().x((t,e)=>Pa(u,t.timestamp,e,h)).y0(s).y1(t=>p(t.value)).curve(Qi);c.append("path").datum(r.points).attr("class","area").attr("d",t).attr("fill",e.colors.primary).attr("fill-opacity",.2).attr("stroke","none")}const _=c.append("path").datum(r.points).attr("class","line").attr("d",f).attr("fill","none").attr("stroke",e.colors.primary).attr("stroke-width",2);if(n.showMovingAverage&&n.movingAverageDays){const t=la(d,n.movingAverageDays),r=[];for(let e=n.movingAverageDays-1;e<t.length;e++){const n=t[e];null!==n&&r.push({x:0,y:0,value:n,timestamp:l[e]})}if(r.length>0){const t=qi().x((t,e)=>{const r=t.timestamp||"",n=l.indexOf(r);return Pa(u,r,n,h)}).y(t=>p(t.value)).curve(Qi);c.append("path").datum(r).attr("class","line moving-average").attr("d",t).attr("fill","none").attr("stroke",e.colors.accent).attr("stroke-width",2).attr("stroke-dasharray","5,5")}}const g=c.append("g").attr("class","points").selectAll("circle.point").data(r.points);if(g.enter().append("circle").attr("class","point").merge(g).attr("cx",(t,e)=>Pa(u,t.timestamp,e,h)).attr("cy",t=>p(t.value)).attr("r",t=>i.hoveredPoint&&i.hoveredPoint.timestamp===t.timestamp&&i.hoveredPoint.value===t.value?6:3).attr("fill",t=>i.hoveredPoint&&i.hoveredPoint.timestamp===t.timestamp&&i.hoveredPoint.value===t.value?e.colors.hover||"#ff69b4":e.colors.primary).attr("stroke","#fff").attr("stroke-width",2).style("cursor","pointer").attr("title",t=>da(t,e.language)).on("mouseenter",function(t,r){i.setHoveredPoint(r),ar(this).transition().duration(150).attr("r",6).attr("fill",e.colors.hover||"#ff69b4")}).on("mouseleave",function(){i.setHoveredPoint(null),ar(this).transition().duration(200).attr("r",3).attr("fill",e.colors.primary)}),g.exit().remove(),n.animation?.enabled){const t=_.node()?.getTotalLength()||0;_.attr("stroke-dasharray",`${t} ${t}`).attr("stroke-dashoffset",t).transition().duration(n.animation.duration||2e3).ease(ei).attr("stroke-dashoffset",0)}}(this.svg,this.config,t,e||{},{xScale:this.xScale,yScale:this.yScale,setXScale:t=>{this.xScale=t},setYScale:t=>{this.yScale=t},hoveredPoint:this.hoveredPoint,setHoveredPoint:t=>{this.hoveredPoint=t}})}async renderStackedAreaChart(t,e){if(t.layers.length>0&&t.timestamps){const e=t.layers[0];this.currentDataPoints=e.data.map((e,r)=>({x:0,y:0,value:e,timestamp:t.timestamps?.[r]}))}await Ta(this.svg,this.config,t,e||{},{xScale:this.xScale,yScale:this.yScale,setXScale:t=>{this.xScale=t},setYScale:t=>{this.yScale=t},hoveredPoint:this.hoveredPoint,setHoveredPoint:t=>{this.hoveredPoint=t}})}getSVG(){return this.svg}updateTitle(t,e){const r=this.config.language||"en",n="es"===r?"es-ES":"be"===r?"be-BY":"en-US",i=e.toLocaleString(n,{minimumFractionDigits:2,maximumFractionDigits:2});this.svg.attr("aria-label",function(t,e,r="en"){let n=ft(t,r);return Object.entries(e).forEach(([t,e])=>{n=n.replace(new RegExp(`\\{${t}\\}`,"g"),e)}),n}("chart.accessibility.title_with_data",{period:t,total:i},r))}_addKeyboardSupport(){this.svg.on("keydown",t=>{switch(t.key){case"ArrowLeft":t.preventDefault(),this.container.dispatchEvent(new CustomEvent("chart-navigate",{detail:{direction:"previous"}}));break;case"ArrowRight":t.preventDefault(),this.container.dispatchEvent(new CustomEvent("chart-navigate",{detail:{direction:"next"}}));break;case"Home":t.preventDefault(),this.container.dispatchEvent(new CustomEvent("chart-navigate",{detail:{direction:"first"}}));break;case"End":t.preventDefault(),this.container.dispatchEvent(new CustomEvent("chart-navigate",{detail:{direction:"last"}}))}})}_addTouchSupport(){if("undefined"==typeof window||!("ontouchstart"in window))return;let t=0,e=0,r=0;this.container.addEventListener("touchstart",n=>{1===n.touches.length&&(t=n.touches[0].clientX,e=n.touches[0].clientY,r=Date.now())},{passive:!0}),this.container.addEventListener("touchmove",n=>{if(1===n.touches.length){const i=n.touches[0].clientX-t,a=n.touches[0].clientY-e,o=Date.now()-r;if(Math.abs(i)>50&&Math.abs(a)<30&&o<300){n.preventDefault();const o=i>0?"previous":"next";this.container.dispatchEvent(new CustomEvent("chart-swipe",{detail:{direction:o,deltaX:i,deltaY:a}})),t=n.touches[0].clientX,e=n.touches[0].clientY,r=Date.now()}}}),this.container.addEventListener("touchend",()=>{t=0,e=0,r=0},{passive:!0})}_addResizeSupport(){"undefined"!=typeof window&&"undefined"!=typeof ResizeObserver&&(this._resizeObserver=new ResizeObserver(t=>{null!==this._resizeTimeout&&window.clearTimeout(this._resizeTimeout),this._resizeTimeout=window.setTimeout(()=>{for(const e of t){const{width:t,height:r}=e.contentRect;t===this.config.width&&r===this.config.height||(this.config.width=t,this.config.height=r,this.container.dispatchEvent(new CustomEvent("chart-resize",{detail:{width:t,height:r}})))}},250)}),this._resizeObserver.observe(this.container))}destroy(){this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=null),null!==this._resizeTimeout&&(window.clearTimeout(this._resizeTimeout),this._resizeTimeout=null)}}var Ha=function(t,e,r,n){var i,a=arguments.length,o=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(o=(a<3?i(o):a>3?i(e,r,o):i(e,r))||o);return a>3&&o&&Object.defineProperty(e,r,o),o};void 0!==st&&st.disableWarning&&st.disableWarning("change-in-update");class Oa extends st{constructor(){super(...arguments),this._consumptionData=[],this._comparisonResult=null,this._tariffCosts=null,this._loading=!1,this._error=null,this._comparisonError=null,this._currentPeriod="week",this._currentDate=new Date,this._weekComparisonData=null,this._showChartView=!0,this._lastDataDate=null,this._chartInstance=null,this._hasInitialData=!1,this._hasAttemptedLoad=!1,this._chartEventHandlers={},this._lastNavigationTime=0,this._navigationThrottleMs=300,this._isNavigating=!1}static get cardName(){return"Octopus Energy España Consumption"}_getComputedColor(t,e){if("undefined"!=typeof window&&this.shadowRoot)try{const r=this.shadowRoot.host||document.documentElement,n=getComputedStyle(r);return n.getPropertyValue(t).trim()||e}catch{return e}return e}setConfig(t){if(!t)throw new Error("Invalid configuration");if(!t.source_entry_id)throw new Error("Configuration incomplete. Please select your Octopus Energy tariff in the card editor.");if(!t.view)throw new Error("Configuration incomplete. Please select a view in the card editor.");this.config=t,t.default_period&&(this._currentPeriod=t.default_period)}getCardSize(){let t=1;this.config&&!1!==this.config.show_navigation&&(t+=1);const e=this.config.view;return this.config&&"tariff-comparison"===e&&(t+=1),this.config&&"heat-calendar"===e&&"year"===this.config.heat_calendar_period&&(t+=3),t}connectedCallback(){super.connectedCallback(),this._validateConfig(),this._currentPeriod=this.config.default_period||"week",this._error||this._loadData(),this._setupChartNavigationListeners()}disconnectedCallback(){super.disconnectedCallback(),this._chartInstance&&(this._chartInstance.destroy(),this._chartInstance=null);const t=this.shadowRoot?.querySelector("#chart-container");t&&this._chartEventHandlers&&(this._chartEventHandlers.swipe&&t.removeEventListener("chart-swipe",this._chartEventHandlers.swipe),this._chartEventHandlers.navigate&&t.removeEventListener("chart-navigate",this._chartEventHandlers.navigate),this._chartEventHandlers.resize&&t.removeEventListener("chart-resize",this._chartEventHandlers.resize),this._chartEventHandlers={})}_setupChartNavigationListeners(){requestAnimationFrame(()=>{const t=this.shadowRoot?.querySelector("#chart-container");t&&(this._chartEventHandlers.swipe=t=>{const{direction:e}=t.detail;"next"===e?this._navigatePeriod("next"):"previous"===e&&this._navigatePeriod("prev")},this._chartEventHandlers.navigate=t=>{const{direction:e}=t.detail;switch(e){case"next":this._navigatePeriod("next");break;case"previous":this._navigatePeriod("prev");break;case"first":const t=new Date;t.setFullYear(t.getFullYear()-1),this._currentDate=t,this._loadData();break;case"last":this._currentDate=new Date,this._loadData()}},this._chartEventHandlers.resize=t=>{const{width:e,height:r}=t.detail;this._chartInstance&&(this._chartInstance.resize(e,r),this._renderD3Chart())},t.addEventListener("chart-swipe",this._chartEventHandlers.swipe),t.addEventListener("chart-navigate",this._chartEventHandlers.navigate),t.addEventListener("chart-resize",this._chartEventHandlers.resize))})}updated(t){if(super.updated(t),t.has("config")){const e=t.get("config");this._validateConfig(),void 0!==e&&e.source_entry_id!==this.config.source_entry_id&&(this._hasInitialData=!1,this._hasAttemptedLoad=!1),this.config.default_period&&this._currentPeriod!==this.config.default_period&&(this._currentPeriod=this.config.default_period),void 0!==e&&e!==this.config&&this._loadData()}if(t.has("hass")){const e=t.get("hass");void 0!==e&&e!==this.hass?!this.hass||this._loading||this._isNavigating||this._error||this._hasAttemptedLoad||0!==this._consumptionData.length||!this.config?.source_entry_id||(this._hasAttemptedLoad=!0,this._loadData()):void 0!==e||!this.hass||this._loading||this._isNavigating||this._error||this._hasAttemptedLoad||0!==this._consumptionData.length||!this.config?.source_entry_id||(this._hasAttemptedLoad=!0,this._loadData())}const e=this.config?.view,r="consumption"===e;if((t.has("_currentPeriod")||t.has("_currentDate"))&&!this._loading&&!this._isNavigating&&this.hass&&this.config?.source_entry_id&&!this._error){const e=t.get("_currentPeriod"),n=t.get("_currentDate"),i=t.has("_currentPeriod")&&void 0!==e&&e!==this._currentPeriod,a=t.has("_currentDate")&&void 0!==n&&n.getTime()!==this._currentDate.getTime();(i&&r||a)&&!this._isNavigating&&this._loadData()}const n=t.has("_loading")&&!1===this._loading&&!0===t.get("_loading");(t.has("_consumptionData")||t.has("_tariffCosts")||t.has("config")&&this._consumptionData.length>0||n)&&requestAnimationFrame(()=>{"consumption"===this.config.view&&this._consumptionData.length>0&&!this._loading&&!this._error&&this._renderD3Chart()})}_validateConfig(){if(!this.config)return this._error="Card configuration is required",void(this._loading=!1);if(!this.config.source_entry_id)return this._error="Configuration incomplete. Please edit this card and select your Octopus Energy tariff.",void(this._loading=!1);this._error&&this.config.source_entry_id&&(this._error=null);"tariff-comparison"!==this.config.view||this.config.tariff_entry_ids&&0!==this.config.tariff_entry_ids.length||yt.warn("Tariff comparison view is active but no tariff_entry_ids provided. Comparison will be disabled."),this.config.show_cost_on_chart&&!this.config.selected_tariff_for_cost&&yt.warn("show_cost_on_chart is enabled but selected_tariff_for_cost is not set. Cost display will be disabled.")}_createTimeoutPromise(t){return new Promise((e,r)=>{setTimeout(()=>r(new Error("Request timeout. The service call took too long to respond.")),t)})}async _callServiceWithTimeout(t,e,r,n=!0){yt.groupServiceCall(t,e);try{let i;if(yt.serviceCall(t,e,n),r&&yt.serviceData(r),n&&this.hass.callWS)try{i=await this._callServiceViaWebSocket(t,e,r)}catch(n){const a=n instanceof Error?n.message:String(n);yt.warn("⚠ WebSocket call failed, falling back to callService: ",a),i=await this._callServiceViaStandard(t,e,r)}else i=await this._callServiceViaStandard(t,e,r);return yt.serviceResponse(i),yt.groupEnd(),i}catch(r){throw yt.serviceError(r),yt.groupEnd(),this._handleServiceError(r,t,e)}}_handleServiceError(t,e,r){const n=r===Oa.SERVICE_GET_LAST_DATA_DATE;if(t instanceof Error){if(t.message.includes("timeout")){const t=n?`Service call timeout: ${e}.${r} (this service is optional and may not be available)`:`Service call timeout: ${e}.${r} took longer than ${Oa.SERVICE_TIMEOUT}ms`;return new Error(t)}if(t.message.includes("Service not found")||t.message.includes("not available")||t.message.includes("Unknown service"))return n?new Error(`Service ${e}.${r} is not available (this is normal if integration version doesn't support it yet)`):new Error(`Service ${e}.${r} is not available. Please ensure the Octopus Energy España integration is installed and configured.`);if("service_validation_error"===t.code)return this._handleValidationError(t);const i=n&&t.message.includes("not available")?`Service ${e}.${r} is not available (this is normal if integration version doesn't support it yet)`:`Service call failed: ${e}.${r} - ${t.message}`;return new Error(i)}if(t&&"object"==typeof t){const i=t;if("service_validation_error"===i.code)return this._handleValidationError(i);const a=i.message||i.translation_key||"Unknown service error",o=n&&(a.includes("not found")||a.includes("not available"))?`Service ${e}.${r} is not available (this is normal if integration version doesn't support it yet)`:`Service call failed: ${e}.${r} - ${a}`;return new Error(o)}return t instanceof Error?t:new Error(String(t))}_handleValidationError(t){const e=(Error,t);let r=e.message||e.translation_key||"Service validation error";return r.includes("return_response")&&(r="The service integration may not support response data yet. Please ensure you're using the latest version of the Octopus Energy España integration and that it has been reloaded after updating."),new Error(`Service validation error: ${r}`)}_validateConsumptionResponse(t){if(!t||"object"!=typeof t)throw yt.groupError("Invalid service response"),yt.error("✗ Invalid service response: ","expected object with success field"),yt.groupEnd(),new Error("Invalid response from service: expected object with success field");if(!("success"in t))throw yt.groupError("Invalid service response format"),yt.error("✗ Invalid service response format: ","response does not contain success field"),yt.data("Received response",t),yt.groupEnd(),new Error("Service returned unexpected response format. The service may not be returning data correctly. Please check the integration configuration and ensure the service supports returning response data.")}_extractErrorMessage(t){return t instanceof Error?t.message:t&&"object"==typeof t?t.message||t.translation_key||JSON.stringify(t):String(t)}_isIntegrationNotAvailableError(t){if(!t)return!1;const e=t.toLowerCase();return(e.includes("octopus_energy_es")||e.includes("octopus energy españa"))&&(e.includes("not available")||e.includes("not found")||e.includes("not installed")||e.includes("not configured")||e.includes("ensure the")||e.includes("integration is installed"))}_extractWebSocketResponse(t){return t&&"object"==typeof t?"service_response"in t?t.service_response:"response"in t?t.response:t:t}async _callServiceViaWebSocket(t,e,r){if(!this.hass.callWS)throw new Error("callWS is not available");const n=this.hass.callWS({type:"call_service",domain:t,service:e,service_data:r,return_response:!0}),i=this._createTimeoutPromise(Oa.SERVICE_TIMEOUT),a=await Promise.race([n,i]);return this._extractWebSocketResponse(a)}async _callServiceViaStandard(t,e,r){const n=this.hass.callService(t,e,r),i=this._createTimeoutPromise(Oa.SERVICE_TIMEOUT);return await Promise.race([n,i])}async _loadData(){if(!this.hass||!this.config)return;const t=this.config.source_entry_id;if(!t)return this._error="source_entry_id is required. Please select your tariff from the card editor.",void(this._loading=!1);this._loading=!0,this._error=null,this._comparisonError=null;try{try{await this._fetchLastDataDate(t)}catch(t){const e=t instanceof Error?t.message:String(t);yt.warn("Failed to fetch last data date (continuing without it):",e),this._lastDataDate=null}const{startDate:e,endDate:r}=this._getDateRange();this._validateDateRange(e,r);const n=`${e.toISOString().split("T")[0]} → ${r.toISOString().split("T")[0]}`,i=this.config.view,a="heat-calendar"===i||"tariff-comparison"===i||"week-analysis"===i?"daily":this._currentPeriod;yt.groupDataLoad(t,a,n);const o=await this._fetchConsumptionData(t,e,r);this._consumptionData=o.consumption_data||[],o.tariff_costs?this._tariffCosts=o.tariff_costs:this._tariffCosts=null,"tariff-comparison"===i&&this.config.tariff_entry_ids?.length?await this._fetchTariffComparison(t,e,r):this._comparisonResult=null,this._weekComparisonData="week-analysis"===i?this._calculateWeekComparison():null,yt.groupEnd(),this._hasInitialData||(this._hasInitialData=!0)}catch(t){yt.groupError("Error loading data");const e=t instanceof Error?t.message:String(t);this._error=e||"Failed to load consumption data. Please try again.",yt.error("Error loading data: ",this._extractErrorMessage(t)),yt.data("Error details",t),yt.groupEnd(),!this._hasInitialData&&this._consumptionData.length>0&&(this._hasInitialData=!0)}finally{this._loading=!1}}_validateDateRange(t,e){if(t>new Date)throw new Error(`Invalid date range: start date (${t.toISOString().split("T")[0]}) is in the future. Please navigate to a past period.`);if(t>e)throw new Error("Invalid date range: start date is after end date.")}async _fetchLastDataDate(t){try{const e=await this._callServiceWithTimeout(Oa.SERVICE_DOMAIN,Oa.SERVICE_GET_LAST_DATA_DATE,{entry_id:t});if(e&&e.success&&e.last_data_date){if(this._lastDataDate=e.last_data_date,yt.info("Last data date:",this._lastDataDate),"tariff-comparison"===this.config.view){const t=new Date(this._lastDataDate);t.setHours(23,59,59,999),this._currentDate>t&&(this._currentDate=new Date(t))}}else this._lastDataDate=null,e&&e.error?yt.warn("Failed to fetch last data date:",e.error):yt.warn("Service get_last_data_date returned unsuccessful result or missing data")}catch(t){this._lastDataDate=null;const e=t instanceof Error?t.message:String(t);e.includes("not found")||e.includes("does not exist")||e.includes("Unknown service")?yt.info("Service get_last_data_date is not available (this is normal if integration version is older)"):yt.warn("Could not fetch last data date:",e)}}async _fetchConsumptionData(t,e,r){const n=this.config.view,i="heat-calendar"===n||"tariff-comparison"===n||"week-analysis"===n?"daily":"day"===this._currentPeriod?"hourly":"daily";let a;try{a=await this._callServiceWithTimeout(Oa.SERVICE_DOMAIN,Oa.SERVICE_FETCH_CONSUMPTION,{entry_id:t,start_date:e.toISOString().split("T")[0],end_date:r.toISOString().split("T")[0],granularity:i}),yt.data("Raw Service Response (before processing)",a);const n=a;return this._validateConsumptionResponse(n),n.success||this._handleConsumptionError(n,t),n}catch(t){throw yt.groupError("Service call failed"),yt.error("✗ Service call failed: ",this._extractErrorMessage(t)),yt.data("Full Error Object",t),yt.groupEnd(),this._handleServiceError(t,Oa.SERVICE_DOMAIN,Oa.SERVICE_FETCH_CONSUMPTION)}}_handleConsumptionError(t,e){const r=t.error||"Failed to fetch consumption data";let n=r;throw t.warning&&(n+=`. ${t.warning}`,yt.warn("⚠ Service Warning: ",t.warning)),yt.groupError("Service returned error"),yt.error("✗ Service returned error: ",r),yt.data("Requested Entry ID",e),t.context&&(yt.data("Service Context",t.context),t.context.id&&t.context.id!==e&&yt.warn("⚠ Note: Service context shows different entry ID (",t.context.id+"). This may be informational.")),yt.groupEnd(),yt.data("Full Response",{success:t.success,error:t.error,warning:t.warning,context:t.context}),new Error(n)}async _fetchTariffComparison(t,e,r){try{const n="daily",i=await this._callServiceWithTimeout(Oa.SERVICE_DOMAIN,Oa.SERVICE_COMPARE_TARIFFS,{tariff_entry_ids:this.config.tariff_entry_ids,source_entry_id:t,period:n,start_date:e.toISOString().split("T")[0],end_date:r.toISOString().split("T")[0]});if(i.success&&i.result)if(i.result.tariffs&&Array.isArray(i.result.tariffs)&&i.result.tariffs.length>0){0===i.result.tariffs.filter(t=>t.period_breakdown&&"number"==typeof t.period_breakdown.p1_consumption&&"number"==typeof t.period_breakdown.p2_consumption&&"number"==typeof t.period_breakdown.p3_consumption).length&&i.result.tariffs.length>0&&(yt.groupError("Tariff comparison missing period breakdown"),yt.warn("⚠ Tariff comparison result has tariffs but no valid period_breakdown data"),yt.data("Tariffs structure",i.result.tariffs.map(t=>({name:t.name,has_period_breakdown:!!t.period_breakdown,period_breakdown:t.period_breakdown}))),yt.groupEnd()),this._comparisonResult=i.result,this._comparisonError=null}else{const t=i.result.error||i.result.warning||"Tariff comparison returned no tariff data";this._comparisonError=t,this._comparisonResult=null,yt.groupError("Tariff comparison returned empty data"),yt.warn("⚠ Tariff comparison result has no tariffs"),yt.data("Result structure",i.result),yt.groupEnd()}else{const t=i.error||"Failed to compare tariffs";this._comparisonError=t,this._comparisonResult=null,yt.groupError("Tariff comparison failed"),yt.warn("⚠ Tariff comparison failed: ",t),yt.groupEnd()}}catch(t){const e=t instanceof Error?t.message:String(t);this._comparisonError=`Tariff comparison error: ${e}`,yt.groupError("Tariff comparison error"),yt.warn("⚠ Tariff comparison error: ",e),yt.groupEnd()}}_adjustEndDateForLastDataDate(t){if(this._lastDataDate){const e=new Date(this._lastDataDate);return e.setHours(23,59,59,999),t>e?e:t}return t}_getDateRange(){const t=this.config.view;if("heat-calendar"===t){if("year"===this.config.heat_calendar_period){const t=this._currentDate.getFullYear(),e=new Date(t,0,1);e.setHours(0,0,0,0);let r=new Date(t,11,31);return r.setHours(23,59,59,999),r=this._adjustEndDateForLastDataDate(r),{startDate:e,endDate:r}}{const t=new Date(this._currentDate),e=t.getFullYear(),r=t.getMonth(),n=new Date(e,r,1);n.setHours(0,0,0,0);let i=new Date(e,r+1,0);return i.setHours(23,59,59,999),i=this._adjustEndDateForLastDataDate(i),{startDate:n,endDate:i}}}if("tariff-comparison"===t){let t=this._lastDataDate?new Date(this._lastDataDate):new Date(this._currentDate);t.setHours(23,59,59,999),t=this._adjustEndDateForLastDataDate(t);const e=new Date(t);if(e.setDate(e.getDate()-364),e.setHours(0,0,0,0),this._lastDataDate){const t=new Date(this._lastDataDate);t.setHours(0,0,0,0),e<t&&e.setTime(t.getTime())}return{startDate:e,endDate:t}}if("week-analysis"===t){const t=this.config.week_comparison_count||2;let e=new Date(this._currentDate);const r=e.getDay();let n;n=0===r?0:7-r,e.setDate(e.getDate()+n),e.setHours(23,59,59,999),e=this._adjustEndDateForLastDataDate(e);const i=new Date(e);i.setDate(i.getDate()-7*(t-1));const a=i.getDay();let o;if(o=0===a?-6:-(a-1),i.setDate(i.getDate()+o),i.setHours(0,0,0,0),this._lastDataDate){const t=new Date(this._lastDataDate);t.setHours(0,0,0,0),i>t&&i.setTime(t.getTime())}return{startDate:i,endDate:e}}let e=new Date(this._currentDate);e.setHours(23,59,59,999),e=this._adjustEndDateForLastDataDate(e);const r=new Date(e);if("day"===this._currentPeriod){if(r.setHours(0,0,0,0),this._lastDataDate){const t=new Date(this._lastDataDate);t.setHours(0,0,0,0),r>t&&r.setTime(t.getTime())}}else if("week"===this._currentPeriod){const t=e.getDay();let n;if(n=0===t?-6:-(t-1),r.setTime(e.getTime()),r.setDate(r.getDate()+n),r.setHours(0,0,0,0),e.setTime(r.getTime()),e.setDate(e.getDate()+6),e.setHours(23,59,59,999),e=this._adjustEndDateForLastDataDate(e),this._lastDataDate){const t=new Date(this._lastDataDate);t.setHours(0,0,0,0),r>t&&r.setTime(t.getTime())}}else"month"===this._currentPeriod&&(r.setDate(r.getDate()-29),r.setHours(0,0,0,0));return{startDate:r,endDate:e}}_wouldNavigateToFuture(){const t=this._lastDataDate?new Date(this._lastDataDate):new Date;t.setHours(23,59,59,999);const e=this.config.view,r="heat-calendar"===e,n=r&&"year"===this.config.heat_calendar_period,i=r&&"month"===this.config.heat_calendar_period,a="tariff-comparison"===e;if("week-analysis"===e){const e=this._currentDate.getDay();let r;r=0===e?0:7-e;const n=new Date(this._currentDate);n.setDate(this._currentDate.getDate()+r);const i=new Date(n);return i.setDate(n.getDate()+7),i.setHours(23,59,59,999),i>t}if(n){return this._currentDate.getFullYear()+1>t.getFullYear()}if(i){const e=new Date(this._currentDate);e.setMonth(e.getMonth()+1);const{endDate:r}=this._getDateRangeForDate(e);return r>t}if(a){const e=new Date(this._currentDate);return e.setMonth(e.getMonth()+1),e.setHours(23,59,59,999),e>t}const o=new Date(this._currentDate);if("day"===this._currentPeriod)return o.setDate(o.getDate()+1),o.setHours(23,59,59,999),o>t;if("week"===this._currentPeriod){const e=this._currentDate.getDay();let r;r=0===e?1:8-e;const n=new Date(this._currentDate);if(n.setDate(this._currentDate.getDate()+r),n.setHours(0,0,0,0),n>t)return!0;o.setDate(o.getDate()+7)}else"month"===this._currentPeriod&&o.setMonth(o.getMonth()+1);const{endDate:s}=this._getDateRangeForDate(o);return s>t}_getDateRangeForDate(t){const e=this.config.view;if("week-analysis"===e){const e=this.config.week_comparison_count||2;let r=new Date(t);const n=r.getDay();let i;i=0===n?0:7-n,r.setDate(r.getDate()+i),r.setHours(23,59,59,999),r=this._adjustEndDateForLastDataDate(r);const a=new Date(r);a.setDate(a.getDate()-7*(e-1));const o=a.getDay();let s;if(s=0===o?-6:-(o-1),a.setDate(a.getDate()+s),a.setHours(0,0,0,0),this._lastDataDate){const t=new Date(this._lastDataDate);t.setHours(0,0,0,0),a>t&&a.setTime(t.getTime())}return{startDate:a,endDate:r}}if("heat-calendar"===e){if("year"===this.config.heat_calendar_period){const e=t.getFullYear(),r=new Date(e,0,1);r.setHours(0,0,0,0);let n=new Date(e,11,31);return n.setHours(23,59,59,999),n=this._adjustEndDateForLastDataDate(n),{startDate:r,endDate:n}}{const e=t.getFullYear(),r=t.getMonth(),n=new Date(e,r,1);n.setHours(0,0,0,0);let i=new Date(e,r+1,0);return i.setHours(23,59,59,999),i=this._adjustEndDateForLastDataDate(i),{startDate:n,endDate:i}}}if("tariff-comparison"===e){let e=new Date(t);e.setHours(23,59,59,999),e=this._adjustEndDateForLastDataDate(e);const r=new Date(e);return r.setDate(r.getDate()-364),r.setHours(0,0,0,0),{startDate:r,endDate:e}}let r=new Date(t);r.setHours(23,59,59,999),r=this._adjustEndDateForLastDataDate(r);const n=new Date(r);if("day"===this._currentPeriod){if(n.setHours(0,0,0,0),this._lastDataDate){const t=new Date(this._lastDataDate);t.setHours(0,0,0,0),n>t&&n.setTime(t.getTime())}}else if("week"===this._currentPeriod){const t=r.getDay();let e;if(e=0===t?-6:-(t-1),n.setDate(r.getDate()+e),n.setHours(0,0,0,0),r.setDate(n.getDate()+6),r.setHours(23,59,59,999),r=this._adjustEndDateForLastDataDate(r),this._lastDataDate){const t=new Date(this._lastDataDate);t.setHours(0,0,0,0),n>t&&n.setTime(t.getTime())}}else"month"===this._currentPeriod&&(n.setDate(n.getDate()-29),n.setHours(0,0,0,0));return{startDate:n,endDate:r}}_navigatePeriod(t){const e=Date.now();if(this._isNavigating||e-this._lastNavigationTime<this._navigationThrottleMs)return;if("next"===t&&this._wouldNavigateToFuture())return;this._isNavigating=!0,this._lastNavigationTime=e;const r="prev"===t?-1:1,n=this.config.view,i="heat-calendar"===n,a=i&&"year"===this.config.heat_calendar_period,o=i&&"month"===this.config.heat_calendar_period,s="tariff-comparison"===n;if("week-analysis"===n){const t=this._currentDate.getDay();let e;e=0===t?0:7-t;const n=new Date(this._currentDate);if(n.setDate(this._currentDate.getDate()+e),n.setDate(n.getDate()+7*r),this._currentDate=n,this._lastDataDate&&r>0){const t=new Date(this._lastDataDate);t.setHours(23,59,59,999);const e=t.getDay();let r;r=0===e?0:7-e;const n=new Date(t);n.setDate(t.getDate()+r),n.setHours(23,59,59,999),this._currentDate>n&&(this._currentDate=new Date(n))}}else if(a)this._currentDate.setFullYear(this._currentDate.getFullYear()+r),this._currentDate=new Date(this._currentDate);else if(o)this._currentDate.setMonth(this._currentDate.getMonth()+r),this._currentDate=new Date(this._currentDate);else if(s)this._currentDate.setMonth(this._currentDate.getMonth()+r),this._currentDate=new Date(this._currentDate);else{if("day"===this._currentPeriod?this._currentDate.setDate(this._currentDate.getDate()+r):"week"===this._currentPeriod?this._currentDate.setDate(this._currentDate.getDate()+7*r):"month"===this._currentPeriod&&this._currentDate.setMonth(this._currentDate.getMonth()+r),this._currentDate=new Date(this._currentDate),"day"===this._currentPeriod&&this._lastDataDate){const t=new Date(this._lastDataDate);t.setHours(23,59,59,999),this._currentDate>t&&(this._currentDate=new Date(t),this._currentDate.setHours(0,0,0,0))}if("week"===this._currentPeriod&&this._lastDataDate){const t=new Date(this._lastDataDate);t.setHours(23,59,59,999),this._currentDate>t&&(this._currentDate=new Date(t))}}this._loadData().finally(()=>{this._isNavigating=!1,requestAnimationFrame(()=>{"consumption"===this.config.view&&this._consumptionData.length>0&&!this._loading&&!this._error&&this._renderD3Chart()})})}_setPeriod(t){if(this._currentPeriod===t||this._isNavigating)return;const e=Date.now();e-this._lastNavigationTime<this._navigationThrottleMs||(this._isNavigating=!0,this._lastNavigationTime=e,this._currentPeriod=t,this._loadData().finally(()=>{this._isNavigating=!1}))}_extractPeriodData(){if(this._tariffCosts&&this.config.source_entry_id){const t=this._tariffCosts[this.config.source_entry_id];if(t&&t.hourly_breakdown){const e=new Map;for(const r of t.hourly_breakdown){const t=r.hour||"",n=r.consumption||0;e.has(t)||e.set(t,{p1:0,p2:0,p3:0});const i=e.get(t);"P1"===r.period?i.p1+=n:"P2"===r.period?i.p2+=n:"P3"===r.period&&(i.p3+=n)}const r=Array.from(e.entries()).map(([t,e])=>({timestamp:t,...e})).sort((t,e)=>t.timestamp.localeCompare(e.timestamp));if(r.length>0)return r}if(t&&t.daily_breakdown&&("week"===this._currentPeriod||"month"===this._currentPeriod)&&t.period_breakdown){const e=t.period_breakdown.p1_percentage/100,r=t.period_breakdown.p2_percentage/100,n=t.period_breakdown.p3_percentage/100;return t.daily_breakdown.map(t=>({timestamp:t.date,p1:t.consumption*e,p2:t.consumption*r,p3:t.consumption*n})).sort((t,e)=>t.timestamp.localeCompare(e.timestamp))}}if(this._consumptionData.length>0){const t=this._consumptionData[0];if(void 0!==t.p1_consumption||t.period){const t=[...this._consumptionData].sort((t,e)=>{const r=t.start_time||t.date||"",n=e.start_time||e.date||"";return r.localeCompare(n)});return t.map(t=>({timestamp:t.start_time||t.date||"",p1:t.p1_consumption||("P1"===t.period?t.consumption:0),p2:t.p2_consumption||("P2"===t.period?t.consumption:0),p3:t.p3_consumption||("P3"===t.period?t.consumption:0)}))}}return null}_calculateMovingAverage(t,e){if(e<2||0===t.length)return t.map(()=>null);const r=[];for(let n=0;n<t.length;n++)if(n<e-1)r.push(null);else{let i=0;for(let r=0;r<e;r++)i+=t[n-r];r.push(i/e)}return r}_calculateCostMovingAverage(t,e=30){return this._calculateMovingAverage(t,e)}_renderHeatCalendar(){const t=this.hass?.language||"en",e=this._getHeatCalendarData(),r="year"===(this.config.heat_calendar_period||"month");if(0===e.length)return Y`
        <div class="error-message">
          <div class="error-title">${ft("card.heat_calendar.unavailable",t)}</div>
          <div class="error-details">
            ${ft("card.heat_calendar.unavailable_details",t)}
          </div>
        </div>
      `;const n=new Map,i=[ft("card.day.mon",t),ft("card.day.tue",t),ft("card.day.wed",t),ft("card.day.thu",t),ft("card.day.fri",t),ft("card.day.sat",t),ft("card.day.sun",t)],a=[ft("card.month.jan",t),ft("card.month.feb",t),ft("card.month.mar",t),ft("card.month.apr",t),ft("card.month.may",t),ft("card.month.jun",t),ft("card.month.jul",t),ft("card.month.aug",t),ft("card.month.sep",t),ft("card.month.oct",t),ft("card.month.nov",t),ft("card.month.dec",t)],o=new Map;for(const t of e){const e=r?t.weekOfYear??0:t.weekOfMonth??0;n.has(e)||n.set(e,new Map),n.get(e).set(t.dayOfWeek,t),r&&void 0!==t.month&&(o.has(e)&&o.get(e)===t.month||o.set(e,t.month))}let s,c;if(r){const t=Array.from(n.keys());t.length>0?(c=Math.min(...t),s=Math.max(...t),s-c<51&&(s=c+52)):(c=0,s=52)}else s=Math.max(...Array.from(n.keys()),0),c=Math.min(...Array.from(n.keys()),0);const l=[];for(let t=c;t<=s;t++){const e=[];for(let r=0;r<7;r++){const i=n.get(t)?.get(r)||null;e.push(i)}l.push(e)}let d=null;if(r&&e.length>0){const t=e.reduce((t,e)=>t+e.consumption,0);d={totalConsumption:t,totalCost:e.reduce((t,e)=>t+e.cost,0),avgDailyConsumption:t/e.length,year:e[0]?.year||this._currentDate.getFullYear()}}return Y`
      <div class="heat-calendar-container ${r?"heat-calendar-year-view":""}">
        ${r&&d?Y`
          <div class="heat-calendar-summary">
            <span>Total: ${d.totalConsumption.toFixed(1)} kWh</span>
            <span>Avg/Day: ${d.avgDailyConsumption.toFixed(2)} kWh</span>
            <span>Cost: €${d.totalCost.toFixed(2)}</span>
          </div>
        `:""}
        <div class="heat-calendar-grid ${r?"heat-calendar-grid-year":""}">
          ${i.map(t=>Y`
            <div class="heat-calendar-day empty" style="font-weight: 600;">${t}</div>
          `)}
          ${l.map((t,e)=>{const n=c+e,i=o.get(n),s=r&&void 0!==i&&(0===e||o.get(c+e-1)!==i);return Y`
              ${s?Y`
                <div class="heat-calendar-month-label" style="grid-column: 1 / -1;">
                  ${a[i]}
                </div>
              `:""}
              ${t.map(t=>{if(!t)return Y`<div class="heat-calendar-day empty"></div>`;const e=new Date(t.date),n=e.getDate(),i=a[e.getMonth()],o=r?`${i} ${n}, ${t.year}: ${t.consumption.toFixed(2)} kWh, €${t.cost.toFixed(2)}`:`${t.date}: ${t.consumption.toFixed(2)} kWh, €${t.cost.toFixed(2)}`;return Y`
                  <div 
                    class="heat-calendar-day intensity-${t.intensity}"
                    title="${o}"
                  >
                    ${r?"":Y`
                      <div style="font-weight: 600; margin-bottom: 2px;">${n}</div>
                      <div style="font-size: 10px; opacity: 0.9;">${t.consumption.toFixed(1)} kWh</div>
                    `}
                  </div>
                `})}
            `})}
        </div>
        <div class="heat-calendar-legend">
          <div class="heat-calendar-legend-label">
            ${ft("card.heat_calendar.intensity_label",t)}:
          </div>
          <div class="heat-calendar-legend-item" title="${ft("card.heat_calendar.intensity_low_tooltip",t)}">
            <div class="heat-calendar-legend-color intensity-low"></div>
            <span>Low</span>
          </div>
          <div class="heat-calendar-legend-item" title="${ft("card.heat_calendar.intensity_medium_tooltip",t)}">
            <div class="heat-calendar-legend-color intensity-medium"></div>
            <span>Medium</span>
          </div>
          <div class="heat-calendar-legend-item" title="${ft("card.heat_calendar.intensity_high_tooltip",t)}">
            <div class="heat-calendar-legend-color intensity-high"></div>
            <span>High</span>
          </div>
        </div>
      </div>
    `}_renderWeekComparison(){const t=this.hass?.language||"en";if(!this._weekComparisonData||0===this._weekComparisonData.weeks.length)return Y`<div class="loading">${ft("card.week_comparison.no_data",t)}</div>`;const{weeks:e,comparisons:r}=this._weekComparisonData;return Y`
      <div class="week-comparison-section">
        <div class="week-comparison-grid">
          ${e.map((e,n)=>{const i=r.find(t=>t.weekIndex===n),a=`${e.weekStart} - ${e.weekEnd}`,o=!e.isComplete;let s=0,c=0;if(o&&e.daysCount>0){s=7*(e.consumption/e.daysCount),c=7*(e.cost/e.daysCount)}return Y`
              <div class="week-card ${o?"week-card-incomplete":""}">
                <div class="week-card-header">
                  <div class="week-card-header-title">
                    <span class="week-period-date">${a}</span>
                  </div>
                  ${i?Y`
                    <span class="week-change ${i.consumptionChangePercent>=0?"positive":"negative"} ${i.isForecastComparison?"week-change-forecast":""}" 
                          title="${i.isForecastComparison?ft("card.week_comparison.forecast_comparison_tooltip",t):""}">
                      ${i.consumptionChangePercent>=0?"↑":"↓"} ${Math.abs(i.consumptionChangePercent).toFixed(1)}%
                      ${i.isForecastComparison?Y`<span class="week-change-forecast-indicator">*</span>`:""}
                    </span>
                  `:""}
                </div>
                <div class="week-card-metrics">
                  ${o?Y`
                    <div class="week-metric week-metric-days">
                      <span class="week-metric-label">${ft("card.week_comparison.days_available",t)}:</span>
                      <div class="week-metric-value-container">
                        <span class="week-metric-value">${e.daysCount}/7 ${ft("card.week_comparison.days",t)}</span>
                        <span class="week-incomplete-badge">${ft("card.week_comparison.incomplete",t)}</span>
                      </div>
                    </div>
                  `:""}
                  <div class="week-metric">
                    <span class="week-metric-label">${ft("card.week_comparison.consumption",t)}:</span>
                    <div class="week-metric-value-container">
                      <span class="week-metric-value">${e.consumption.toFixed(1)} kWh</span>
                      ${o&&s>0?Y`
                        <div class="week-forecast">${ft("card.week_comparison.forecast",t)}: ${s.toFixed(1)} kWh</div>
                      `:""}
                    </div>
                  </div>
                  <div class="week-metric">
                    <span class="week-metric-label">${ft("card.week_comparison.cost",t)}:</span>
                    <div class="week-metric-value-container">
                      <span class="week-metric-value">€${e.cost.toFixed(2)}</span>
                      ${o&&c>0?Y`
                        <div class="week-forecast">${ft("card.week_comparison.forecast",t)}: €${c.toFixed(2)}</div>
                      `:""}
                    </div>
                  </div>
                </div>
              </div>
            `})}
        </div>
      </div>
    `}_renderTariffComparisonChart(){if(!this._comparisonResult||!this._comparisonResult.tariffs||0===this._comparisonResult.tariffs.length)return Y``;const t=this._comparisonResult.tariffs.filter(t=>t.period_breakdown&&void 0!==t.period_breakdown.p1_consumption&&void 0!==t.period_breakdown.p2_consumption&&void 0!==t.period_breakdown.p3_consumption&&null!==t.period_breakdown.p1_consumption&&null!==t.period_breakdown.p2_consumption&&null!==t.period_breakdown.p3_consumption);if(0===t.length)return Y`
        <div class="tariff-chart-container">
          <div style="padding: 16px; color: var(--secondary-text-color); font-size: 14px;">
            Period breakdown data not available. Ensure consumption data includes P1/P2/P3 period information.
          </div>
        </div>
      `;let e=0;for(const r of t){const t=r.period_breakdown;e=Math.max(e,t.p1_consumption||0,t.p2_consumption||0,t.p3_consumption||0),(t.p1_consumption||0)>0&&r.hourly_breakdown?.filter(t=>"P1"===t.period).reduce((t,e)=>t+e.cost,0),(t.p2_consumption||0)>0&&r.hourly_breakdown?.filter(t=>"P2"===t.period).reduce((t,e)=>t+e.cost,0),(t.p3_consumption||0)>0&&r.hourly_breakdown?.filter(t=>"P3"===t.period).reduce((t,e)=>t+e.cost,0)}return Y`
      <div class="tariff-chart-container">
        <div class="period-breakdown-title">Consumption & Cost by Period</div>
        ${t.map(t=>{const r=t.period_breakdown,n=r.p1_consumption||0,i=r.p2_consumption||0,a=r.p3_consumption||0;return n>0&&t.hourly_breakdown?.filter(t=>"P1"===t.period).reduce((t,e)=>t+e.cost,0),i>0&&t.hourly_breakdown?.filter(t=>"P2"===t.period).reduce((t,e)=>t+e.cost,0),a>0&&t.hourly_breakdown?.filter(t=>"P3"===t.period).reduce((t,e)=>t+e.cost,0),Y`
            <div style="margin-top: 16px;">
              <div class="tariff-name" style="margin-bottom: 8px;">${t.name}</div>
              <div class="tariff-chart-bars">
                <div class="tariff-chart-bar-group">
                  <div class="tariff-chart-bar-label">P1</div>
                  <div 
                    class="tariff-chart-bar p1" 
                    style="height: ${e>0?n/e*100:0}%"
                  ></div>
                </div>
                <div class="tariff-chart-bar-group">
                  <div class="tariff-chart-bar-label">P2</div>
                  <div 
                    class="tariff-chart-bar p2" 
                    style="height: ${e>0?i/e*100:0}%"
                  ></div>
                </div>
                <div class="tariff-chart-bar-group">
                  <div class="tariff-chart-bar-label">P3</div>
                  <div 
                    class="tariff-chart-bar p3" 
                    style="height: ${e>0?a/e*100:0}%"
                  ></div>
                </div>
              </div>
            </div>
          `})}
      </div>
    `}_getISOWeekOfYear(t){const e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate())),r=e.getUTCDay()||7;e.setUTCDate(e.getUTCDate()+4-r);const n=new Date(Date.UTC(e.getUTCFullYear(),0,1));return Math.ceil(((e.getTime()-n.getTime())/864e5+1)/7)-1}_getHeatCalendarData(){const t=this.config.heat_calendar_period||"month";let e=[];if(this._tariffCosts&&this.config.source_entry_id){const t=this._tariffCosts[this.config.source_entry_id];t&&t.daily_breakdown&&t.daily_breakdown.length>0&&(e=[...t.daily_breakdown].sort((t,e)=>(t.date||"").localeCompare(e.date||"")))}if(0===e.length&&this._consumptionData&&this._consumptionData.length>0){const t=new Map;for(const e of this._consumptionData){const r=e.date||(e.start_time?e.start_time.split("T")[0]:null);if(!r)continue;const n=e.consumption||e.value||0,i=t.get(r)||{consumption:0,cost:0};t.set(r,{consumption:i.consumption+n,cost:i.cost})}e=Array.from(t.entries()).map(([t,e])=>({date:t,consumption:e.consumption,cost:e.cost})).sort((t,e)=>t.date.localeCompare(e.date))}if(0===e.length)return[];if("year"===t){const t=this._currentDate.getFullYear();e=e.filter(e=>new Date(e.date).getFullYear()===t)}else{const t=this._currentDate.getFullYear(),r=this._currentDate.getMonth();e=e.filter(e=>{const n=new Date(e.date);return n.getFullYear()===t&&n.getMonth()===r})}if(0===e.length)return[];const r=e.map(t=>t.consumption).filter(t=>t>0);if(0===r.length)return[];const n=[...r].sort((t,e)=>t-e),i=n[Math.floor(.33*n.length)],a=n[Math.floor(.67*n.length)],o=[];for(const r of e){const e=new Date(r.date),n=0===e.getDay()?6:e.getDay()-1,s=e.getFullYear(),c=e.getMonth();let l,d;if("year"===t)d=this._getISOWeekOfYear(e);else{const t=new Date(e.getFullYear(),e.getMonth(),1),r=0===t.getDay()?6:t.getDay()-1,n=e.getDate();l=Math.floor((n+r-1)/7)}let h="medium";r.consumption<=i?h="low":r.consumption>=a&&(h="high"),o.push({date:r.date,consumption:r.consumption,cost:r.cost||0,dayOfWeek:n,weekOfMonth:l,weekOfYear:d,month:c,year:s,intensity:h})}return o}_calculateWeekComparison(){const t=this.config.week_comparison_count||2;let e=[],r=null;if(this._tariffCosts&&this.config.source_entry_id&&(r=this._tariffCosts[this.config.source_entry_id],r&&r.daily_breakdown&&r.daily_breakdown.length>0&&(e=[...r.daily_breakdown].sort((t,e)=>(t.date||"").localeCompare(e.date||"")))),0===e.length&&this._consumptionData&&this._consumptionData.length>0){const t=new Map;for(const e of this._consumptionData){const r=e.date||(e.start_time?e.start_time.split("T")[0]:null);if(!r)continue;const n=e.consumption||e.value||0,i=t.get(r)||{consumption:0,cost:0,p1_consumption:0,p2_consumption:0,p3_consumption:0};t.set(r,{consumption:i.consumption+n,cost:i.cost,p1_consumption:i.p1_consumption+(e.p1_consumption||0),p2_consumption:i.p2_consumption+(e.p2_consumption||0),p3_consumption:i.p3_consumption+(e.p3_consumption||0)})}e=Array.from(t.entries()).map(([t,e])=>({date:t,consumption:e.consumption,cost:e.cost,p1_consumption:e.p1_consumption,p2_consumption:e.p2_consumption,p3_consumption:e.p3_consumption})).sort((t,e)=>t.date.localeCompare(e.date))}if(0===e.length)return null;const n=new Map,i=new Date;i.setHours(0,0,0,0);for(const t of e){const e=new Date(t.date),i=e.getDay();let a;a=0===i?-6:-(i-1);const o=new Date(e);o.setDate(e.getDate()+a),o.setHours(0,0,0,0);const s=o.toISOString().split("T")[0];if(!n.has(s)){const t=new Date(o);t.setDate(o.getDate()+6),n.set(s,{weekStart:s,weekEnd:t.toISOString().split("T")[0],consumption:0,cost:0,daysCount:0,isComplete:!1,daysSet:new Set,periodBreakdown:{p1_consumption:0,p2_consumption:0,p3_consumption:0}})}const c=n.get(s),l=t.date;if(c.daysSet.has(l)||(c.daysSet.add(l),c.daysCount++),c.consumption+=t.consumption,c.cost+=t.cost||0,void 0!==t.p1_consumption&&void 0!==t.p2_consumption&&void 0!==t.p3_consumption)c.periodBreakdown.p1_consumption+=t.p1_consumption,c.periodBreakdown.p2_consumption+=t.p2_consumption,c.periodBreakdown.p3_consumption+=t.p3_consumption;else if(r&&r.period_breakdown){const e=r.period_breakdown.p1_percentage/100,n=r.period_breakdown.p2_percentage/100,i=r.period_breakdown.p3_percentage/100;c.periodBreakdown.p1_consumption+=t.consumption*e,c.periodBreakdown.p2_consumption+=t.consumption*n,c.periodBreakdown.p3_consumption+=t.consumption*i}}for(const t of n.values()){const e=new Date(t.weekEnd);e.setHours(0,0,0,0),t.isComplete=e<=i&&7===t.daysCount,delete t.daysSet}const a=Array.from(n.values()).sort((t,e)=>new Date(e.weekStart).getTime()-new Date(t.weekStart).getTime()),o=a.slice(0,t).map(t=>{const{daysSet:e,...r}=t;return r}),s=[];for(let t=0;t<o.length-1;t++){const e=o[t],r=o[t+1];let n=e.consumption,i=e.cost,a=r.consumption,c=r.cost,l=!1;if(!e.isComplete&&e.daysCount>0){n=7*(e.consumption/e.daysCount),i=7*(e.cost/e.daysCount),l=!0}if(!r.isComplete&&r.daysCount>0){a=7*(r.consumption/r.daysCount),c=7*(r.cost/r.daysCount),l=!0}const d=n-a,h=a>0?d/a*100:0,u=i-c,p=c>0?u/c*100:0;s.push({weekIndex:t,consumptionChange:d,consumptionChangePercent:h,costChange:u,costChangePercent:p,isForecastComparison:l})}return{weeks:o,comparisons:s}}render(){const t=this.hass?.language||"en";if(this._loading&&!this._hasInitialData)return Y`
        <div class="loading">
          <ha-circular-progress indeterminate></ha-circular-progress>
          <p>${ft("card.loading",t)}</p>
        </div>
      `;if(this._error){const e=this._error.includes("Configuration incomplete")||this._error.includes("configuration is required"),r=this._isIntegrationNotAvailableError(this._error);return Y`
        <div class="error-message">
          <ha-icon icon="${e?"mdi:cog-outline":"mdi:alert-circle"}" class="error-icon"></ha-icon>
          <div class="error-title">${ft(e?"card.error.configuration_required":"card.error.unable_to_load",t)}</div>
          <div class="error-details">${this._error}</div>
          ${r?Y`
            <div class="integration-badges">
              <a 
                href="https://my.home-assistant.io/redirect/hacs_repository/?owner=bthos&repository=ha-octopus-energy-es&category=integration" 
                target="_blank" 
                rel="noopener noreferrer"
                class="integration-badge hacs-badge"
              >
                <ha-icon icon="mdi:package-variant"></ha-icon>
                <span>HACS</span>
              </a>
              <a 
                href="https://github.com/bthos/ha-octopus-energy-es" 
                target="_blank" 
                rel="noopener noreferrer"
                class="integration-badge github-badge"
              >
                <ha-icon icon="mdi:github"></ha-icon>
                <span>GitHub</span>
              </a>
            </div>
          `:e?Y`
            <div class="error-details" style="margin-top: 12px; font-size: 13px;">
              ${ft("card.error.config_help",t)}
            </div>
          `:Y`
            <button class="retry-button" @click=${this._loadData}>
              ${ft("card.button.retry",t)}
            </button>
          `}
        </div>
      `}const e=this.config.view;return Y`
      <div class="card-content-wrapper">
        ${this._loading&&this._hasInitialData?Y`
          <div class="loading-overlay">
            <ha-circular-progress indeterminate style="--mdc-theme-primary: var(--primary-color);"></ha-circular-progress>
          </div>
        `:W}
        ${"consumption"===e?this._renderConsumptionView():W}
        ${"heat-calendar"===e?this._renderHeatCalendarView():W}
        ${"week-analysis"===e?this._renderWeekAnalysisView():W}
        ${"tariff-comparison"===e?this._renderTariffComparisonView():W}
      </div>
    `}_renderConsumptionView(){const t=this.hass?.language||"en",e=this._consumptionData.reduce((t,e)=>t+(e.consumption||e.value||0),0);return Y`
      ${!1!==this.config.show_navigation?Y`
        <div class="navigation-controls">
          <button 
            type="button"
            class="nav-button" 
            @click=${t=>{t.preventDefault(),t.stopPropagation(),this._navigatePeriod("prev")}}
          >
            ${ft("card.button.previous",t)}
          </button>
          <button 
            type="button"
            class="nav-button" 
            @click=${t=>{t.preventDefault(),t.stopPropagation(),this._navigatePeriod("next")}}
            ?disabled=${this._wouldNavigateToFuture()}
            style=${this._wouldNavigateToFuture()?"opacity: 0.5; cursor: not-allowed;":""}
          >
            ${ft("card.button.next",t)}
          </button>
        </div>
      `:W}

      ${this._consumptionData.length>0?Y`
        <div class="consumption-summary-header">
          <div class="summary-header-top">
            <div class="summary-title-section">
              <ha-icon icon="mdi:lightning-bolt" class="summary-icon"></ha-icon>
              <h3 class="summary-title">${ft("card.title.electricity",t)}</h3>
            </div>
            <div class="summary-view-toggle">
              <ha-icon 
                icon="mdi:chart-line" 
                class="view-icon ${this._showChartView?"active":""}"
                @click=${t=>{t.preventDefault(),t.stopPropagation(),this._showChartView=!0}}
              ></ha-icon>
              <ha-icon 
                icon="mdi:view-list" 
                class="view-icon ${this._showChartView?"":"active"}"
                @click=${t=>{t.preventDefault(),t.stopPropagation(),this._showChartView=!1}}
              ></ha-icon>
            </div>
          </div>
          <div class="summary-date-range">${this._formatDateRange()}</div>
          <div class="summary-total-consumption">${e.toLocaleString("es-ES",{minimumFractionDigits:0,maximumFractionDigits:0})} kWh</div>
        </div>
      `:W}

      ${this._showChartView?Y`
        <div class="chart-container">
          ${this._renderChart()}
        </div>
      `:Y`
        <div class="consumption-list-container">
          ${this._renderConsumptionList()}
        </div>
      `}
    `}_renderConsumptionList(){const t=this.hass?.language||"en";if(this._loading)return Y`<div class="loading">${ft("card.loading",t)}</div>`;if(!this._loading&&!this._error&&0===this._consumptionData.length){const e=this._formatDateRange();return Y`
        <div class="loading">
          <div>${ft("card.no_data",t)}</div>
          <div style="margin-top: 8px; font-size: 12px; color: var(--secondary-text-color);">
            Period: ${e}
          </div>
        </div>
      `}if(this._error){const e=this._isIntegrationNotAvailableError(this._error);return Y`
        <div class="error-message">
          <ha-icon icon="mdi:alert-circle" class="error-icon"></ha-icon>
          <div class="error-title">${ft("card.error.unable_to_load",t)}</div>
          <div class="error-details">${this._error}</div>
          ${e?Y`
            <div class="integration-badges">
              <a 
                href="https://my.home-assistant.io/redirect/hacs_repository/?owner=bthos&repository=ha-octopus-energy-es&category=integration" 
                target="_blank" 
                rel="noopener noreferrer"
                class="integration-badge hacs-badge"
              >
                <ha-icon icon="mdi:package-variant"></ha-icon>
                <span>HACS</span>
              </a>
              <a 
                href="https://github.com/bthos/ha-octopus-energy-es" 
                target="_blank" 
                rel="noopener noreferrer"
                class="integration-badge github-badge"
              >
                <ha-icon icon="mdi:github"></ha-icon>
                <span>GitHub</span>
              </a>
            </div>
          `:Y`
            <button class="retry-button" @click=${this._loadData}>
              ${ft("card.button.retry",t)}
            </button>
          `}
        </div>
      `}const e=this._consumptionData.map(t=>{const e=new Date(t.start_time||t.date||""),r=t.consumption||t.value||0,n=t.period||null;let i="";return i="day"===this._currentPeriod?e.toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit"}):"week"===this._currentPeriod?e.toLocaleDateString("es-ES",{weekday:"short",day:"numeric",month:"short"}):e.toLocaleDateString("es-ES",{day:"numeric",month:"short"}),{date:e,dateStr:i,consumption:r,period:n,p1:t.p1_consumption,p2:t.p2_consumption,p3:t.p3_consumption}}),r=e.some(t=>void 0!==t.p1||void 0!==t.p2||void 0!==t.p3);return Y`
      <div class="consumption-list">
        <table class="consumption-table">
          <thead>
            <tr>
              <th>${"day"===this._currentPeriod?"Time":"Date"}</th>
              ${r?Y`
                <th>P1</th>
                <th>P2</th>
                <th>P3</th>
              `:""}
              <th>Total (kWh)</th>
              ${r?"":Y`
                <th>Period</th>
              `}
            </tr>
          </thead>
          <tbody>
            ${e.map(t=>Y`
              <tr>
                <td>${t.dateStr}</td>
                ${r?Y`
                  <td>${void 0!==t.p1?t.p1.toFixed(2):"-"}</td>
                  <td>${void 0!==t.p2?t.p2.toFixed(2):"-"}</td>
                  <td>${void 0!==t.p3?t.p3.toFixed(2):"-"}</td>
                `:""}
                <td class="consumption-value">${t.consumption.toFixed(2)}</td>
                ${r?"":Y`
                  <td>${t.period||"-"}</td>
                `}
              </tr>
            `)}
          </tbody>
        </table>
      </div>
    `}_renderHeatCalendarView(){const t=this.hass?.language||"en";return Y`
      ${!1!==this.config.show_navigation?Y`
        <div class="navigation-controls">
          <button 
            type="button"
            class="nav-button" 
            @click=${t=>{t.preventDefault(),t.stopPropagation(),this._navigatePeriod("prev")}}
          >
            ${"year"===this.config.heat_calendar_period?`${ft("card.button.previous",t)} ${ft("editor.heat_calendar_period_year",t)}`:`${ft("card.button.previous",t)} ${ft("editor.heat_calendar_period_month",t)}`}
          </button>
          <button 
            type="button"
            class="nav-button" 
            @click=${t=>{t.preventDefault(),t.stopPropagation(),this._navigatePeriod("next")}}
            ?disabled=${this._wouldNavigateToFuture()}
            style=${this._wouldNavigateToFuture()?"opacity: 0.5; cursor: not-allowed;":""}
          >
            ${"year"===this.config.heat_calendar_period?`${ft("editor.heat_calendar_period_year",t)} ${ft("card.button.next",t)}`:`${ft("editor.heat_calendar_period_month",t)} ${ft("card.button.next",t)}`}
          </button>
        </div>
      `:W}

      <div class="chart-container">
        ${this._renderHeatCalendar()}
      </div>
    `}_renderWeekAnalysisView(){return this.hass,Y`
      ${!1!==this.config.show_navigation?Y`
        <div class="navigation-controls">
          <button 
            type="button"
            class="nav-button" 
            @click=${t=>{t.preventDefault(),t.stopPropagation(),this._navigatePeriod("prev")}}
          >
            ← Previous
          </button>
          <button 
            type="button"
            class="nav-button" 
            @click=${t=>{t.preventDefault(),t.stopPropagation(),this._navigatePeriod("next")}}
            ?disabled=${this._wouldNavigateToFuture()}
            style=${this._wouldNavigateToFuture()?"opacity: 0.5; cursor: not-allowed;":""}
          >
            Next →
          </button>
        </div>
      `:W}

      ${this._renderWeekComparison()}
    `}_renderTariffComparisonView(){const t=this.hass?.language||"en";return this._loading?Y`
        <div class="comparison-section">
          <div class="loading">${ft("card.tariff_comparison.loading",t)}</div>
        </div>
      `:Y`
      <div class="comparison-section">
        ${this._comparisonError?Y`
          <div class="comparison-error">
            <ha-icon icon="mdi:alert"></ha-icon>
            <span>${this._comparisonError}</span>
          </div>
        `:this._comparisonResult&&this._comparisonResult.tariffs&&this._comparisonResult.tariffs.length>0?Y`
          <div class="tariff-comparison-info">
            <ha-icon icon="mdi:information-outline"></ha-icon>
            <span>${ft("card.tariff_comparison.info",t)}</span>
          </div>
          ${this._renderComparison()}
          ${!1!==this.config.show_tariff_chart?this._renderTariffComparisonChart():W}
        `:Y`
          <div class="loading">
            <p>No comparison data available</p>
            ${this._comparisonResult?Y`
              <p style="font-size: 12px; color: var(--secondary-text-color); margin-top: 8px;">
                Service returned result but no tariff data found. Check that tariff_entry_ids are valid and contain data for the selected period.
              </p>
            `:Y`
              <p style="font-size: 12px; color: var(--secondary-text-color); margin-top: 8px;">
                Ensure tariff_entry_ids are configured in card settings.
              </p>
            `}
          </div>
        `}
      </div>
    `}_formatDate(t,e){const r=this.hass?.language||"en";if("year"===e){return[ft("card.month.jan",r),ft("card.month.feb",r),ft("card.month.mar",r),ft("card.month.apr",r),ft("card.month.may",r),ft("card.month.jun",r),ft("card.month.jul",r),ft("card.month.aug",r),ft("card.month.sep",r),ft("card.month.oct",r),ft("card.month.nov",r),ft("card.month.dec",r)][t.getMonth()]}const n=[ft("card.month.long.jan",r),ft("card.month.long.feb",r),ft("card.month.long.mar",r),ft("card.month.long.apr",r),ft("card.month.long.may",r),ft("card.month.long.jun",r),ft("card.month.long.jul",r),ft("card.month.long.aug",r),ft("card.month.long.sep",r),ft("card.month.long.oct",r),ft("card.month.long.nov",r),ft("card.month.long.dec",r)],i=t.getDate(),a=n[t.getMonth()],o=t.getFullYear(),s=ft("card.date.of",r);return"en"===r?`${a} ${i}, ${o}`:"es"===r?`${i} ${s} ${a} ${s} ${o}`:`${i} ${a} ${o}`}_formatDateRange(){const{startDate:t,endDate:e}=this._getDateRange(),r=this._formatDate(t),n=this._formatDate(e);return r===n?r:`${r} - ${n}`}_renderChart(){const t=this.hass?.language||"en";return Y`
      <div 
        id="chart-container"
        class="chart-svg-container">
        ${this._loading?Y`
          <div class="loading" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 100%; text-align: center;">
            ${ft("card.loading",t)}
          </div>
        `:W}
        ${this._loading||this._error||0!==this._consumptionData.length?W:Y`
          <div class="loading" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 100%; text-align: center;">
            <div>${ft("card.no_data",t)}</div>
            <div style="margin-top: 8px; font-size: 12px; color: var(--secondary-text-color);">
              Period: ${this._formatDateRange()}
            </div>
          </div>
        `}
      </div>
    `}async _renderD3Chart(){const t=this.shadowRoot?.querySelector("#chart-container");if(!t||this._loading||this._error||0===this._consumptionData.length||"consumption"!==this.config.view)return;const e=this.config.chart_type||"line",r=800,n=400,i=[...this._consumptionData].sort((t,e)=>{const r=t.start_time||t.date||"",n=e.start_time||e.date||"";return r.localeCompare(n)});let a,o=i.map(t=>t.consumption||t.value||0),s=i.map(t=>t.start_time||t.date||"");if("week"===this._currentPeriod){const{startDate:t}=this._getDateRange(),e=[],r=[],n=s.map(t=>t.split("T")[0]),i=new Date(t);i.setHours(0,0,0,0);for(let t=0;t<7;t++){const a=new Date(i);a.setDate(i.getDate()+t);const s=`${a.getFullYear()}-${String(a.getMonth()+1).padStart(2,"0")}-${String(a.getDate()).padStart(2,"0")}`;e.push(s);const c=n.indexOf(s);r.push(c>=0?o[c]:0)}s=e,o=r}const c=!(!this.config.show_cost_on_chart||!this.config.selected_tariff_for_cost||null===this._tariffCosts);if(c&&this._tariffCosts&&this.config.selected_tariff_for_cost){const t=this._tariffCosts[this.config.selected_tariff_for_cost];if(t){const e="day"===this._currentPeriod?t.hourly_breakdown:t.daily_breakdown;if(e&&e.length>0){const t=[...e].sort((t,e)=>{const r=("hour"in t?t.hour:"date"in t?t.date:"")||"",n=("hour"in e?e.hour:"date"in e?e.date:"")||"";return r.localeCompare(n)});let i=t.map(t=>t.cost),s=t.map(t=>("hour"in t?t.hour:"date"in t?t.date:"")||"");if("week"===this._currentPeriod){const{startDate:t}=this._getDateRange(),e=[],r=[],n=s.map(t=>t.split("T")[0]),a=new Date(t);a.setHours(0,0,0,0);for(let t=0;t<7;t++){const o=new Date(a);o.setDate(a.getDate()+t);const s=`${o.getFullYear()}-${String(o.getMonth()+1).padStart(2,"0")}-${String(o.getDate()).padStart(2,"0")}`;e.push(s);const c=n.indexOf(s);r.push(c>=0?i[c]:0)}s=e,i=r}if(i.length===o.length){const t=Math.max(...i,.01),e=Math.min(...i,0);a={points:sa(i,{width:r,height:n,padding:{top:10,right:60,bottom:10,left:60}},e,t,s),minValue:e,maxValue:t,range:t-e||1}}}}}const l={top:10,right:a?60:20,bottom:10,left:60},d=function(t){const e=Math.min(...t,0),r=Math.max(...t,1);return{points:[],minValue:e,maxValue:r,range:r-e||1}}(o),h={width:r,height:n,padding:l};d.points=sa(o,h,d.minValue,d.maxValue,s);const u=this._getComputedColor("--primary-color","#8B5CF6"),p={text:this._getComputedColor("--secondary-text-color","#b0b0b0"),accent:this._getComputedColor("--accent-color","#ff9800"),primary:u,hover:"#ff69b4",error:this._getComputedColor("--error-color","#f44336"),warning:this._getComputedColor("--warning-color","#ff9800"),success:this._getComputedColor("--success-color","#4caf50"),info:this._getComputedColor("--info-color","#2196f3"),background:this._getComputedColor("--card-background-color","#fff"),grid:this._getComputedColor("--divider-color","rgba(255, 255, 255, 0.1)"),axis:this._getComputedColor("--divider-color","rgba(255, 255, 255, 0.2)")};this._chartInstance?(this._chartInstance.clear(),this._chartInstance.resize(r,n)):(t.innerHTML="",this._chartInstance=new Na(t,{width:r,height:n,padding:l,colors:p,language:this.hass?.language||"en"}));const f={enabled:!1};try{switch(e){case"line":await this._chartInstance.renderLineChart(d,{showArea:!0,showMovingAverage:!!this.config.show_moving_average,movingAverageDays:this.config.moving_average_days||7,showCostAxis:!(!c||!a),costData:a,animation:f,period:this._currentPeriod,interactive:!0});break;case"bar":await this._chartInstance.renderBarChart(d,{showCostOverlay:!(!c||!a),costData:a,showMovingAverage:!!this.config.show_moving_average,movingAverageDays:this.config.moving_average_days||7,animation:f,period:this._currentPeriod,interactive:!0});break;case"stacked-area":const e=this._prepareStackedData();if(e)await this._chartInstance.renderStackedAreaChart(e,{animation:f,period:this._currentPeriod,interactive:!0});else{const e=this.hass?.language||"en",r=document.createElement("div");r.className="error-message",r.innerHTML=`\n              <div class="error-title">${ft("card.stacked_area.unavailable",e)}</div>\n              <div class="error-details">\n                ${ft("card.stacked_area.unavailable_details",e)}\n              </div>\n            `,t.firstChild?t.replaceChild(r,t.firstChild):t.appendChild(r)}}}catch(t){yt.error("Error rendering chart: ",t instanceof Error?t.message:String(t))}}_prepareStackedData(){const t=this._extractPeriodData();if(!t||0===t.length)return null;const e=t.map(t=>t.p1||0),r=t.map(t=>t.p2||0),n=t.map(t=>t.p3||0),i=n.map((t,e)=>t+(r[e]||0)),a=i.map((t,r)=>t+(e[r]||0)),o=Math.max(...a,1);return{layers:[{data:n,color:this._getComputedColor("--success-color","#4caf50"),opacity:.6,label:"P3 (Valley)"},{data:r,color:this._getComputedColor("--warning-color","#ff9800"),opacity:.6,label:"P2 (Flat)"},{data:e,color:this._getComputedColor("--error-color","#f44336"),opacity:.6,label:"P1 (Peak)"}],timestamps:t.map(t=>t.timestamp),minValue:0,maxValue:o,range:o||1}}_renderComparison(){if(!this._comparisonResult||!this._comparisonResult.tariffs||0===this._comparisonResult.tariffs.length)return this.hass,this._comparisonError?Y`
          <div class="comparison-error">
            <ha-icon icon="mdi:alert"></ha-icon>
            <span>${this._comparisonError}</span>
          </div>
        `:Y`
        <div class="loading">
          <p>No comparison data available</p>
          ${this._comparisonResult?Y`
            <p style="font-size: 12px; color: var(--secondary-text-color); margin-top: 8px;">
              Result received but contains no tariff data. Check service response structure.
            </p>
          `:""}
        </div>
      `;const t=[...this._comparisonResult.tariffs].sort((t,e)=>t.total_cost-e.total_cost),e=this._comparisonResult.best_tariff?.entry_id,r=this._comparisonResult.tariffs[0],n=r?.period_breakdown;return Y`
      <!-- Consumption Summary -->
      ${n?Y`
        <div class="consumption-summary">
          <div class="summary-title">Period Summary</div>
          <div class="summary-grid">
            <div class="summary-item">
              <div class="summary-period p1">
                <span class="period-icon">🔴</span>
                <span class="period-name">Peak (P1)</span>
              </div>
              <div class="summary-value">${n.p1_consumption.toFixed(1)} kWh</div>
              <div class="summary-percentage">${n.p1_percentage.toFixed(1)}%</div>
            </div>
            <div class="summary-item">
              <div class="summary-period p2">
                <span class="period-icon">🟠</span>
                <span class="period-name">Flat (P2)</span>
              </div>
              <div class="summary-value">${n.p2_consumption.toFixed(1)} kWh</div>
              <div class="summary-percentage">${n.p2_percentage.toFixed(1)}%</div>
            </div>
            <div class="summary-item">
              <div class="summary-period p3">
                <span class="period-icon">🟢</span>
                <span class="period-name">Valley (P3)</span>
              </div>
              <div class="summary-value">${n.p3_consumption.toFixed(1)} kWh</div>
              <div class="summary-percentage">${n.p3_percentage.toFixed(1)}%</div>
            </div>
            <div class="summary-item summary-total">
              <div class="summary-period">
                <span class="period-name"><strong>Total</strong></span>
              </div>
              <div class="summary-value"><strong>${n.total_consumption.toFixed(1)} kWh</strong></div>
            </div>
          </div>
        </div>
      `:""}
      
      <div class="tariff-list">
        ${t.map(t=>Y`
          <div class="tariff-item">
            <div class="tariff-header">
              <span class="tariff-name">
                ${t.name}
                ${e===t.entry_id?Y`<span class="best-tariff-badge">Best</span>`:W}
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

      ${this._comparisonResult.savings?Y`
        <div class="savings-info">
          <strong>Potential Savings:</strong> €${this._comparisonResult.savings.amount.toFixed(2)} 
          (${this._comparisonResult.savings.percentage.toFixed(1)}%) by choosing the best tariff
        </div>
      `:W}
    `}_renderPeriodBreakdown(t,e){const r=Math.max(t.p1_consumption,t.p2_consumption,t.p3_consumption);let n=0,i=0,a=0;if(e.hourly_breakdown&&e.hourly_breakdown.length>0)for(const t of e.hourly_breakdown)"P1"===t.period&&t.consumption>0?n+=t.cost:"P2"===t.period&&t.consumption>0?i+=t.cost:"P3"===t.period&&t.consumption>0&&(a+=t.cost);const o=t.p1_consumption>0?n/t.p1_consumption:0,s=t.p2_consumption>0?i/t.p2_consumption:0,c=t.p3_consumption>0?a/t.p3_consumption:0;return Y`
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
              ${n>0?Y`<span class="cost-per-kwh">€${o.toFixed(3)}/kWh</span>`:""}
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
              ${i>0?Y`<span class="cost-per-kwh">€${s.toFixed(3)}/kWh</span>`:""}
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
              ${a>0?Y`<span class="cost-per-kwh">€${c.toFixed(3)}/kWh</span>`:""}
            </div>
          </div>
        </div>
      </div>
    `}static getStubConfig(){return{type:"custom:octopus-consumption-card",source_entry_id:"",view:"consumption",default_period:"week",chart_type:"line",tariff_entry_ids:[],show_cost_on_chart:!1,show_navigation:!0,show_period_distribution:!1,show_moving_average:!1,moving_average_days:7,heat_calendar_period:"month",week_comparison_count:2,show_cost_trend:!1,cost_moving_average_days:30,show_tariff_chart:!0}}static getConfigElement(){return document.createElement("octopus-consumption-card-editor")}}function Ra(){return Oa}function za(){return vt}function Fa(){return Oa.getStubConfig()}if(Oa.enabledWarnings=[],Oa.SERVICE_TIMEOUT=1e4,Oa.SERVICE_DOMAIN="octopus_energy_es",Oa.SERVICE_FETCH_CONSUMPTION="fetch_consumption",Oa.SERVICE_COMPARE_TARIFFS="compare_tariffs",Oa.SERVICE_GET_LAST_DATA_DATE="get_last_data_date",Oa.styles=_t,Ha([ht({attribute:!1})],Oa.prototype,"hass",void 0),Ha([ht({attribute:!1})],Oa.prototype,"config",void 0),Ha([ut()],Oa.prototype,"_consumptionData",void 0),Ha([ut()],Oa.prototype,"_comparisonResult",void 0),Ha([ut()],Oa.prototype,"_tariffCosts",void 0),Ha([ut()],Oa.prototype,"_loading",void 0),Ha([ut()],Oa.prototype,"_error",void 0),Ha([ut()],Oa.prototype,"_comparisonError",void 0),Ha([ut()],Oa.prototype,"_currentPeriod",void 0),Ha([ut()],Oa.prototype,"_currentDate",void 0),Ha([ut()],Oa.prototype,"_weekComparisonData",void 0),Ha([ut()],Oa.prototype,"_showChartView",void 0),Ha([ut()],Oa.prototype,"_lastDataDate",void 0),"undefined"!=typeof window&&(window.getCardElement=Ra,window.getCardConfigElement=za,window.getStubConfig=Fa),"undefined"!=typeof window&&"undefined"!=typeof customElements){try{customElements.get("octopus-consumption-card")||customElements.define("octopus-consumption-card",Oa)}catch(t){yt.error("Failed to register octopus-consumption-card: ",t instanceof Error?t.message:String(t))}if(void 0===window.customCards&&(window.customCards=[]),Array.isArray(window.customCards)){window.customCards.some(t=>"custom:octopus-consumption-card"===t.type)||window.customCards.push({type:"custom:octopus-consumption-card",name:"Octopus Energy España Consumption",preview:!1,description:"Display consumption data and tariff comparisons for Octopus Energy España"})}window.customCards["octopus-consumption-card"]=Oa,window.OctopusConsumptionCard=Oa;const t="0.6.28",e=!!customElements.get("octopus-consumption-card");console.groupCollapsed("%c⚡ Octopus Energy España","background: linear-gradient(90deg, #e10090 0%, #c000a0 100%);color: #fff;padding: 4px 8px;border-radius: 4px;font-weight: bold;"),yt.info("Consumption Card",`v${t}`),yt.info(e?"✓ Custom element: ":"✗ Custom element: ","octopus-consumption-card"),yt.success("✓ Added to card picker"),yt.success("✓ Visual editor enabled"),yt.info("ℹ Supported languages: ","en, es, be"),e||yt.error("✗ Registration failed! Element not found in customElements registry"),console.groupEnd()}return t.OctopusConsumptionCard=Oa,t.getCardConfigElement=za,t.getCardElement=Ra,t.getStubConfig=Fa,t}({});
