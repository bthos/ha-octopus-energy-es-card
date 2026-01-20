var OctopusConsumptionCard=function(t){"use strict";
/**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const e=globalThis,r=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),i=new WeakMap;let o=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(r&&void 0===t){const r=void 0!==e&&1===e.length;r&&(t=i.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&i.set(e,t))}return t}toString(){return this.cssText}};const a=(t,...e)=>{const r=1===t.length?t[0]:e.reduce((e,r,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[n+1],t[0]);return new o(r,t,n)},s=r?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,n))(e)})(t):t,{is:c,defineProperty:l,getOwnPropertyDescriptor:d,getOwnPropertyNames:h,getOwnPropertySymbols:u,getPrototypeOf:p}=Object,f=globalThis,_=f.trustedTypes,m=_?_.emptyScript:"",g=f.reactiveElementPolyfillSupport,v=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?m:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},w=(t,e)=>!c(t,e),b={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:w};
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),n=this.getPropertyDescriptor(t,r,e);void 0!==n&&l(this.prototype,t,n)}}static getPropertyDescriptor(t,e,r){const{get:n,set:i}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:n,set(e){const o=n?.call(this);i?.call(this,e),this.requestUpdate(t,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,e=[...h(t),...u(t)];for(const r of e)this.createProperty(r,t[r])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,r]of e)this.elementProperties.set(t,r)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const r=this._$Eu(t,e);void 0!==r&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const t of r)e.unshift(s(t))}else void 0!==t&&e.push(s(t));return e}static _$Eu(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,n)=>{if(r)t.adoptedStyleSheets=n.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const r of n){const n=document.createElement("style"),i=e.litNonce;void 0!==i&&n.setAttribute("nonce",i),n.textContent=r.cssText,t.appendChild(n)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ET(t,e){const r=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,r);if(void 0!==n&&!0===r.reflect){const i=(void 0!==r.converter?.toAttribute?r.converter:y).toAttribute(e,r.type);this._$Em=t,null==i?this.removeAttribute(n):this.setAttribute(n,i),this._$Em=null}}_$AK(t,e){const r=this.constructor,n=r._$Eh.get(t);if(void 0!==n&&this._$Em!==n){const t=r.getPropertyOptions(n),i="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=n;const o=i.fromAttribute(e,t.type);this[n]=o??this._$Ej?.get(n)??o,this._$Em=null}}requestUpdate(t,e,r,n=!1,i){if(void 0!==t){const o=this.constructor;if(!1===n&&(i=this[t]),r??=o.getPropertyOptions(t),!((r.hasChanged??w)(i,e)||r.useDefault&&r.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,r))))return;this.C(t,e,r)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:r,reflect:n,wrapped:i},o){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==i||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||r||(e=void 0),this._$AL.set(t,e)),!0===n&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,r]of t){const{wrapped:t}=r,n=this[e];!0!==t||this._$AL.has(e)||void 0===n||this.C(e,void 0,r,n)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[v("elementProperties")]=new Map,x[v("finalized")]=new Map,g?.({ReactiveElement:x}),(f.reactiveElementVersions??=[]).push("2.1.2");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const k=globalThis,$=t=>t,S=k.trustedTypes,E=S?S.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",D=`lit$${Math.random().toFixed(9).slice(2)}$`,A="?"+D,M=`<${A}>`,P=document,T=()=>P.createComment(""),N=t=>null===t||"object"!=typeof t&&"function"!=typeof t,O=Array.isArray,R="[ \t\n\f\r]",F=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,H=/>/g,I=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,j=/"/g,V=/^(?:script|style|textarea|title)$/i,U=(t=>(e,...r)=>({_$litType$:t,strings:e,values:r}))(1),W=Symbol.for("lit-noChange"),Y=Symbol.for("lit-nothing"),q=new WeakMap,B=P.createTreeWalker(P,129);function X(t,e){if(!O(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}const J=(t,e)=>{const r=t.length-1,n=[];let i,o=2===e?"<svg>":3===e?"<math>":"",a=F;for(let e=0;e<r;e++){const r=t[e];let s,c,l=-1,d=0;for(;d<r.length&&(a.lastIndex=d,c=a.exec(r),null!==c);)d=a.lastIndex,a===F?"!--"===c[1]?a=z:void 0!==c[1]?a=H:void 0!==c[2]?(V.test(c[2])&&(i=RegExp("</"+c[2],"g")),a=I):void 0!==c[3]&&(a=I):a===I?">"===c[0]?(a=i??F,l=-1):void 0===c[1]?l=-2:(l=a.lastIndex-c[2].length,s=c[1],a=void 0===c[3]?I:'"'===c[3]?j:L):a===j||a===L?a=I:a===z||a===H?a=F:(a=I,i=void 0);const h=a===I&&t[e+1].startsWith("/>")?" ":"";o+=a===F?r+M:l>=0?(n.push(s),r.slice(0,l)+C+r.slice(l)+D+h):r+D+(-2===l?e:h)}return[X(t,o+(t[r]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),n]};class G{constructor({strings:t,_$litType$:e},r){let n;this.parts=[];let i=0,o=0;const a=t.length-1,s=this.parts,[c,l]=J(t,e);if(this.el=G.createElement(c,r),B.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(n=B.nextNode())&&s.length<a;){if(1===n.nodeType){if(n.hasAttributes())for(const t of n.getAttributeNames())if(t.endsWith(C)){const e=l[o++],r=n.getAttribute(t).split(D),a=/([.?@])?(.*)/.exec(e);s.push({type:1,index:i,name:a[2],strings:r,ctor:"."===a[1]?et:"?"===a[1]?rt:"@"===a[1]?nt:tt}),n.removeAttribute(t)}else t.startsWith(D)&&(s.push({type:6,index:i}),n.removeAttribute(t));if(V.test(n.tagName)){const t=n.textContent.split(D),e=t.length-1;if(e>0){n.textContent=S?S.emptyScript:"";for(let r=0;r<e;r++)n.append(t[r],T()),B.nextNode(),s.push({type:2,index:++i});n.append(t[e],T())}}}else if(8===n.nodeType)if(n.data===A)s.push({type:2,index:i});else{let t=-1;for(;-1!==(t=n.data.indexOf(D,t+1));)s.push({type:7,index:i}),t+=D.length-1}i++}}static createElement(t,e){const r=P.createElement("template");return r.innerHTML=t,r}}function Z(t,e,r=t,n){if(e===W)return e;let i=void 0!==n?r._$Co?.[n]:r._$Cl;const o=N(e)?void 0:e._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),void 0===o?i=void 0:(i=new o(t),i._$AT(t,r,n)),void 0!==n?(r._$Co??=[])[n]=i:r._$Cl=i),void 0!==i&&(e=Z(t,i._$AS(t,e.values),i,n)),e}class K{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,n=(t?.creationScope??P).importNode(e,!0);B.currentNode=n;let i=B.nextNode(),o=0,a=0,s=r[0];for(;void 0!==s;){if(o===s.index){let e;2===s.type?e=new Q(i,i.nextSibling,this,t):1===s.type?e=new s.ctor(i,s.name,s.strings,this,t):6===s.type&&(e=new it(i,this,t)),this._$AV.push(e),s=r[++a]}o!==s?.index&&(i=B.nextNode(),o++)}return B.currentNode=P,n}p(t){let e=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,n){this.type=2,this._$AH=Y,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),N(t)?t===Y||null==t||""===t?(this._$AH!==Y&&this._$AR(),this._$AH=Y):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>O(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Y&&N(this._$AH)?this._$AA.nextSibling.data=t:this.T(P.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:r}=t,n="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=G.createElement(X(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===n)this._$AH.p(e);else{const t=new K(n,this),r=t.u(this.options);t.p(e),this.T(r),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new G(t)),e}k(t){O(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,n=0;for(const i of t)n===e.length?e.push(r=new Q(this.O(T()),this.O(T()),this,this.options)):r=e[n],r._$AI(i),n++;n<e.length&&(this._$AR(r&&r._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=$(t).nextSibling;$(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,n,i){this.type=1,this._$AH=Y,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=i,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=Y}_$AI(t,e=this,r,n){const i=this.strings;let o=!1;if(void 0===i)t=Z(this,t,e,0),o=!N(t)||t!==this._$AH&&t!==W,o&&(this._$AH=t);else{const n=t;let a,s;for(t=i[0],a=0;a<i.length-1;a++)s=Z(this,n[r+a],e,a),s===W&&(s=this._$AH[a]),o||=!N(s)||s!==this._$AH[a],s===Y?t=Y:t!==Y&&(t+=(s??"")+i[a+1]),this._$AH[a]=s}o&&!n&&this.j(t)}j(t){t===Y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Y?void 0:t}}class rt extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Y)}}class nt extends tt{constructor(t,e,r,n,i){super(t,e,r,n,i),this.type=5}_$AI(t,e=this){if((t=Z(this,t,e,0)??Y)===W)return;const r=this._$AH,n=t===Y&&r!==Y||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==Y&&(r===Y||n);n&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}}const ot=k.litHtmlPolyfillSupport;ot?.(G,Q),(k.litHtmlVersions??=[]).push("3.3.2");const at=globalThis;
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */class st extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,r)=>{const n=r?.renderBefore??e;let i=n._$litPart$;if(void 0===i){const t=r?.renderBefore??null;n._$litPart$=i=new Q(e.insertBefore(T(),t),t,void 0,r??{})}return i._$AI(t),i})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}}st._$litElement$=!0,st.finalized=!0,at.litElementHydrateSupport?.({LitElement:st});const ct=at.litElementPolyfillSupport;ct?.({LitElement:st}),(at.litElementVersions??=[]).push("4.2.2");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const lt={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:w},dt=(t=lt,e,r)=>{const{kind:n,metadata:i}=r;let o=globalThis.litPropertyMetadata.get(i);if(void 0===o&&globalThis.litPropertyMetadata.set(i,o=new Map),"setter"===n&&((t=Object.create(t)).wrapped=!0),o.set(r.name,t),"accessor"===n){const{name:n}=r;return{set(r){const i=e.get.call(this);e.set.call(this,r),this.requestUpdate(n,i,t,!0,r)},init(e){return void 0!==e&&this.C(n,void 0,t,e),e}}}if("setter"===n){const{name:n}=r;return function(r){const i=this[n];e.call(this,r),this.requestUpdate(n,i,t,!0,r)}}throw Error("Unsupported decorator location: "+n)};function ht(t){return(e,r)=>"object"==typeof r?dt(t,e,r):((t,e,r)=>{const n=e.hasOwnProperty(r);return e.constructor.createProperty(r,t),n?Object.getOwnPropertyDescriptor(e,r):void 0})(t,e,r)}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function ut(t){return ht({...t,state:!0,attribute:!1})}const pt={en:{"editor.basic_settings":"Basic Settings","editor.source_entry_id_label":"Primary Tariff","editor.source_entry_id_helper":"Select the Octopus Energy tariff to display consumption data for","editor.display_options":"Display Options","editor.default_period_label":"Default Period","editor.default_period_helper":"Initial time period to display","editor.chart_type_label":"Chart Type","editor.chart_type_helper":"Type of chart to display","editor.show_navigation_label":"Show Navigation","editor.show_navigation_helper":"Show period navigation buttons","editor.tariff_comparison":"Tariff Comparison","editor.tariff_entry_ids_label":"Comparison Tariffs","editor.tariff_entry_ids_helper":"Optional: Select additional tariffs to compare costs","editor.cost_display":"Cost Display","editor.show_cost_on_chart_label":"Show Cost on Chart","editor.show_cost_on_chart_helper":"Display cost information on the chart","editor.selected_tariff_for_cost_label":"Selected Tariff for Cost","editor.selected_tariff_for_cost_helper":"Tariff entry ID to use for cost calculation","editor.consumption_sensor_label":"Consumption Sensor Override","editor.consumption_sensor_helper":"Optional: Manually specify a consumption sensor instead of using integration data","editor.migration_warning":"Configuration migration required. Please edit the card and select your tariff.","editor.select_tariff":"Select a tariff to get started","editor.view_label":"View","editor.view_helper":"Select which view to display","editor.view_consumption":"Consumption Overview","editor.view_heat_calendar":"Heat Calendar","editor.view_week_analysis":"Week Analysis","editor.view_tariff_comparison":"Tariff Comparison","editor.chart_type_line":"Line","editor.chart_type_bar":"Bar","editor.chart_type_stacked_area":"Stacked Area","editor.advanced_visualization":"Advanced Visualization","editor.show_period_distribution_label":"Show Period Distribution","editor.show_period_distribution_helper":"Show P1/P2/P3 consumption breakdown on chart","editor.show_moving_average_label":"Show Moving Average","editor.show_moving_average_helper":"Display trend line with moving average","editor.moving_average_days_label":"Moving Average Days","editor.moving_average_days_helper":"Number of days for moving average calculation (default: 7)","editor.period_day":"Day","editor.period_week":"Week","editor.period_month":"Month","editor.heat_calendar_period_label":"Heat Calendar Period","editor.heat_calendar_period_helper":"Time period for heat calendar display","editor.heat_calendar_period_month":"Month","editor.heat_calendar_period_year":"Year","editor.show_week_comparison_label":"Show Week Comparison","editor.show_week_comparison_helper":"Compare consumption across consecutive weeks","editor.week_comparison_count_label":"Week Comparison Count","editor.week_comparison_count_helper":"Number of weeks to compare (default: 2)","editor.show_cost_trend_label":"Show Cost Trend","editor.show_cost_trend_helper":"Display cost trend with moving average","editor.cost_moving_average_days_label":"Cost Moving Average Days","editor.cost_moving_average_days_helper":"Number of days for cost moving average (default: 30)","editor.show_tariff_chart_label":"Show Tariff Chart","editor.show_tariff_chart_helper":"Display visual chart in tariff comparison section","chart.accessibility.title":"Energy consumption chart for selected period","chart.accessibility.title_with_data":"Energy consumption chart. {period}. Total: {total} kWh","chart.print.header":"Energy Consumption Chart","card.loading":"Loading consumption data...","card.error.configuration_required":"Configuration Required","card.error.unable_to_load":"Unable to Load Data","card.error.config_help":"Click the ⋮ menu in the top-right corner of this card and select Edit to configure it.","card.button.retry":"Retry","card.button.previous":"← Previous","card.button.next":"Next →","card.title.electricity":"Electricity","card.heat_calendar.unavailable":"Heat Calendar Unavailable","card.heat_calendar.unavailable_details":"Heat calendar view requires consumption data. Please ensure data is available for the selected period.","card.week_comparison.not_enabled":"Week Comparison Not Enabled","card.week_comparison.not_enabled_details":"Week comparison is not enabled in the card configuration. Please edit the card and enable 'Show Week Comparison'.","card.week_comparison.no_data":"No week comparison data available","card.tariff_comparison.loading":"Loading tariff comparison...","card.no_data":"No consumption data available","card.stacked_area.unavailable":"Stacked Area Chart Unavailable","card.stacked_area.unavailable_details":"Stacked area chart requires period breakdown data (P1/P2/P3). This data may not be available for the selected tariff or period.","card.month.jan":"Jan","card.month.feb":"Feb","card.month.mar":"Mar","card.month.apr":"Apr","card.month.may":"May","card.month.jun":"Jun","card.month.jul":"Jul","card.month.aug":"Aug","card.month.sep":"Sep","card.month.oct":"Oct","card.month.nov":"Nov","card.month.dec":"Dec","card.day.sun":"Sun","card.day.mon":"Mon","card.day.tue":"Tue","card.day.wed":"Wed","card.day.thu":"Thu","card.day.fri":"Fri","card.day.sat":"Sat"},es:{"editor.basic_settings":"Configuración Básica","editor.source_entry_id_label":"Tarifa Principal","editor.source_entry_id_helper":"Selecciona la tarifa de Octopus Energy para mostrar datos de consumo","editor.display_options":"Opciones de Visualización","editor.default_period_label":"Período Predeterminado","editor.default_period_helper":"Período de tiempo inicial a mostrar","editor.chart_type_label":"Tipo de Gráfico","editor.chart_type_helper":"Tipo de gráfico a mostrar","editor.show_navigation_label":"Mostrar Navegación","editor.show_navigation_helper":"Mostrar botones de navegación de período","editor.tariff_comparison":"Comparación de Tarifas","editor.tariff_entry_ids_label":"Tarifas de Comparación","editor.tariff_entry_ids_helper":"Opcional: Selecciona tarifas adicionales para comparar costes","editor.cost_display":"Visualización de Costes","editor.show_cost_on_chart_label":"Mostrar Coste en Gráfico","editor.show_cost_on_chart_helper":"Mostrar información de costes en el gráfico","editor.selected_tariff_for_cost_label":"Tarifa Seleccionada para Coste","editor.selected_tariff_for_cost_helper":"ID de entrada de tarifa a usar para cálculo de costes","editor.consumption_sensor_label":"Sensor de Consumo Manual","editor.consumption_sensor_helper":"Opcional: Especifica manualmente un sensor de consumo en lugar de usar datos de integración","editor.migration_warning":"Se requiere migración de configuración. Por favor, edita la tarjeta y selecciona tu tarifa.","editor.select_tariff":"Selecciona una tarifa para comenzar","editor.view_label":"Vista","editor.view_helper":"Selecciona qué vista mostrar","editor.view_consumption":"Resumen de Consumo","editor.view_heat_calendar":"Calendario de Calor","editor.view_week_analysis":"Análisis Semanal","editor.view_tariff_comparison":"Comparación de Tarifas","editor.chart_type_line":"Línea","editor.chart_type_bar":"Barras","editor.chart_type_stacked_area":"Área Apilada","editor.advanced_visualization":"Visualización Avanzada","editor.show_period_distribution_label":"Mostrar Distribución por Períodos","editor.show_period_distribution_helper":"Mostrar desglose de consumo P1/P2/P3 en el gráfico","editor.show_moving_average_label":"Mostrar Media Móvil","editor.show_moving_average_helper":"Mostrar línea de tendencia con media móvil","editor.moving_average_days_label":"Días de Media Móvil","editor.moving_average_days_helper":"Número de días para el cálculo de la media móvil (predeterminado: 7)","editor.period_day":"Día","editor.period_week":"Semana","editor.period_month":"Mes","editor.heat_calendar_period_label":"Período del Calendario de Calor","editor.heat_calendar_period_helper":"Período de tiempo para el calendario de calor","editor.heat_calendar_period_month":"Mes","editor.heat_calendar_period_year":"Año","editor.show_week_comparison_label":"Mostrar Comparación Semanal","editor.show_week_comparison_helper":"Comparar consumo entre semanas consecutivas","editor.week_comparison_count_label":"Número de Semanas a Comparar","editor.week_comparison_count_helper":"Número de semanas para comparar (predeterminado: 2)","editor.show_cost_trend_label":"Mostrar Tendencia de Costes","editor.show_cost_trend_helper":"Mostrar tendencia de costes con media móvil","editor.cost_moving_average_days_label":"Días de Media Móvil de Costes","editor.cost_moving_average_days_helper":"Número de días para la media móvil de costes (predeterminado: 30)","editor.show_tariff_chart_label":"Mostrar Gráfico de Tarifas","editor.show_tariff_chart_helper":"Mostrar gráfico visual en la sección de comparación de tarifas","chart.accessibility.title":"Gráfico de consumo energético para el período seleccionado","chart.accessibility.title_with_data":"Gráfico de consumo energético. {period}. Total: {total} kWh","chart.print.header":"Gráfico de Consumo Energético","card.loading":"Cargando datos de consumo...","card.error.configuration_required":"Configuración Requerida","card.error.unable_to_load":"No se Puede Cargar Datos","card.error.config_help":"Haz clic en el menú ⋮ en la esquina superior derecha de esta tarjeta y selecciona Editar para configurarla.","card.button.retry":"Reintentar","card.button.previous":"← Anterior","card.button.next":"Siguiente →","card.title.electricity":"Electricidad","card.heat_calendar.unavailable":"Calendario de Calor No Disponible","card.heat_calendar.unavailable_details":"La vista del calendario de calor requiere datos de consumo. Por favor, asegúrate de que los datos estén disponibles para el período seleccionado.","card.week_comparison.not_enabled":"Comparación Semanal No Habilitada","card.week_comparison.not_enabled_details":"La comparación semanal no está habilitada en la configuración de la tarjeta. Por favor, edita la tarjeta y habilita 'Mostrar Comparación Semanal'.","card.week_comparison.no_data":"No hay datos de comparación semanal disponibles","card.tariff_comparison.loading":"Cargando comparación de tarifas...","card.no_data":"No hay datos de consumo disponibles","card.stacked_area.unavailable":"Gráfico de Área Apilada No Disponible","card.stacked_area.unavailable_details":"El gráfico de área apilada requiere datos de desglose por períodos (P1/P2/P3). Estos datos pueden no estar disponibles para la tarifa o período seleccionado.","card.month.jan":"ene","card.month.feb":"feb","card.month.mar":"mar","card.month.apr":"abr","card.month.may":"may","card.month.jun":"jun","card.month.jul":"jul","card.month.aug":"ago","card.month.sep":"sep","card.month.oct":"oct","card.month.nov":"nov","card.month.dec":"dic","card.day.sun":"Dom","card.day.mon":"Lun","card.day.tue":"Mar","card.day.wed":"Mié","card.day.thu":"Jue","card.day.fri":"Vie","card.day.sat":"Sáb"},be:{"editor.basic_settings":"Асноўныя налады","editor.source_entry_id_label":"Асноўны тарыф","editor.source_entry_id_helper":"Выберыце тарыф Octopus Energy для адлюстравання даных спажывання","editor.display_options":"Параметры адлюстравання","editor.default_period_label":"Перыяд па змаўчанні","editor.default_period_helper":"Пачатковы часовы перыяд для адлюстравання","editor.chart_type_label":"Тып дыяграмы","editor.chart_type_helper":"Тып дыяграмы для адлюстравання","editor.show_navigation_label":"Паказаць навігацыю","editor.show_navigation_helper":"Паказаць кнопкі навігацыі па перыядах","editor.tariff_comparison":"Параўнанне тарыфаў","editor.tariff_entry_ids_label":"Тарыфы для параўнання","editor.tariff_entry_ids_helper":"Неабавязкова: Выберыце дадатковыя тарыфы для параўнання кошту","editor.cost_display":"Адлюстраванне кошту","editor.show_cost_on_chart_label":"Паказаць кошт на дыяграме","editor.show_cost_on_chart_helper":"Адлюстраваць інфармацыю аб кошце на дыяграме","editor.selected_tariff_for_cost_label":"Выбраны тарыф для кошту","editor.selected_tariff_for_cost_helper":"ID запісу тарыфу для разліку кошту","editor.consumption_sensor_label":"Ручны сенсар спажывання","editor.consumption_sensor_helper":"Неабавязкова: Укажыце сенсар спажывання ўручную замест выкарыстання даных інтэграцыі","editor.migration_warning":"Патрабуецца міграцыя канфігурацыі. Калі ласка, адрэдагуйце картку і выберыце свой тарыф.","editor.select_tariff":"Выберыце тарыф для пачатку","editor.view_label":"Выгляд","editor.view_helper":"Выберыце, які выгляд адлюстраваць","editor.view_consumption":"Агляд спажывання","editor.view_heat_calendar":"Каляндар цяпла","editor.view_week_analysis":"Тыднёвы аналіз","editor.view_tariff_comparison":"Параўнанне тарыфаў","editor.chart_type_line":"Лінія","editor.chart_type_bar":"Слупкі","editor.chart_type_stacked_area":"Стопачная дыяграма","editor.advanced_visualization":"Пашыраная візуалізацыя","editor.show_period_distribution_label":"Паказаць размеркаванне па перыядах","editor.show_period_distribution_helper":"Паказаць разбіўку спажывання P1/P2/P3 на дыяграме","editor.show_moving_average_label":"Паказаць рухомае сярэдняе","editor.show_moving_average_helper":"Паказаць лінію трэнду з рухомым сярэднім","editor.moving_average_days_label":"Дні рухомага сярэдняга","editor.moving_average_days_helper":"Колькасць дзён для разліку рухомага сярэдняга (па змаўчанні: 7)","editor.period_day":"Дзень","editor.period_week":"Тыдзень","editor.period_month":"Месяц","editor.heat_calendar_period_label":"Перыяд каляндара цяпла","editor.heat_calendar_period_helper":"Часавы перыяд для адлюстравання каляндара цяпла","editor.heat_calendar_period_month":"Месяц","editor.heat_calendar_period_year":"Год","editor.show_week_comparison_label":"Паказаць параўнанне тыдняў","editor.show_week_comparison_helper":"Параўнаць спажыванне паміж паслядоўнымі тыднямі","editor.week_comparison_count_label":"Колькасць тыдняў для параўнання","editor.week_comparison_count_helper":"Колькасць тыдняў для параўнання (па змаўчанні: 2)","editor.show_cost_trend_label":"Паказаць трэнд кошту","editor.show_cost_trend_helper":"Адлюстраваць трэнд кошту з рухомым сярэднім","editor.cost_moving_average_days_label":"Дні рухомага сярэдняга кошту","editor.cost_moving_average_days_helper":"Колькасць дзён для рухомага сярэдняга кошту (па змаўчанні: 30)","editor.show_tariff_chart_label":"Паказаць дыяграму тарыфаў","editor.show_tariff_chart_helper":"Адлюстраваць візуальную дыяграму ў раздзеле параўнання тарыфаў","chart.accessibility.title":"Дыяграма спажывання энергіі для выбранага перыяду","chart.accessibility.title_with_data":"Дыяграма спажывання энергіі. {period}. Усяго: {total} кВт·г","chart.print.header":"Дыяграма Спажывання Энергіі","card.loading":"Загрузка даных спажывання...","card.error.configuration_required":"Патрабуецца канфігурацыя","card.error.unable_to_load":"Немагчыма загрузіць даныя","card.error.config_help":"Націсніце меню ⋮ у верхнім правым куце гэтай карткі і выберыце Рэдагаваць для налады.","card.button.retry":"Паспрабаваць зноў","card.button.previous":"← Папярэдні","card.button.next":"Наступны →","card.title.electricity":"Электрычнасць","card.heat_calendar.unavailable":"Каляндар цяпла недаступны","card.heat_calendar.unavailable_details":"Выгляд каляндара цяпла патрабуе даных спажывання. Калі ласка, пераканайцеся, што даныя даступныя для выбранага перыяду.","card.week_comparison.not_enabled":"Параўнанне тыдняў не ўключана","card.week_comparison.not_enabled_details":"Параўнанне тыдняў не ўключана ў канфігурацыі карткі. Калі ласка, адрэдагуйце картку і ўключыце 'Паказаць параўнанне тыдняў'.","card.week_comparison.no_data":"Даных параўнання тыдняў няма","card.tariff_comparison.loading":"Загрузка параўнання тарыфаў...","card.no_data":"Даных спажывання няма","card.stacked_area.unavailable":"Стопачная дыяграма недаступная","card.stacked_area.unavailable_details":"Стопачная дыяграма патрабуе даных разбіўкі па перыядах (P1/P2/P3). Гэтыя даныя могуць быць недаступныя для выбранага тарыфу або перыяду.","card.month.jan":"студз","card.month.feb":"лют","card.month.mar":"сакав","card.month.apr":"крас","card.month.may":"май","card.month.jun":"чэрв","card.month.jul":"ліп","card.month.aug":"жнів","card.month.sep":"вер","card.month.oct":"кастр","card.month.nov":"ліст","card.month.dec":"снеж","card.day.sun":"Нд","card.day.mon":"Пн","card.day.tue":"Аўт","card.day.wed":"Ср","card.day.thu":"Чцв","card.day.fri":"Пт","card.day.sat":"Сб"}};function ft(t,e="en"){const r=e.toLowerCase(),n=pt[r]?.[t]||pt.en?.[t];return n||t.replace("editor.","").replace("chart.","").replace(/_/g," ")}const _t=a`
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
    /* Victory.js-inspired touch optimization */
    touch-action: auto; /* Allow browser pan/zoom */
    -webkit-tap-highlight-color: transparent; /* No iOS tap flash */
    -webkit-touch-callout: none; /* No iOS callout on long press */
    user-select: none; /* Prevent text selection */
  }

  .chart-svg-container {
    width: 100%;
    height: 300px;
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

  .consumption-summary-header {
    margin-bottom: 24px;
    padding: 16px;
    background: var(--card-background-color);
    border-radius: 8px;
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

  .summary-title {
    font-size: 20px;
    font-weight: 600;
    margin: 0;
    color: var(--primary-text-color);
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
`,mt=a`
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
`;var gt=function(t,e,r,n){var i,o=arguments.length,a=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(o<3?i(a):o>3?i(e,r,a):i(e,r))||a);return o>3&&a&&Object.defineProperty(e,r,a),a};void 0!==st&&st.disableWarning&&st.disableWarning("change-in-update");class vt extends st{constructor(){super(...arguments),this._config={type:"custom:octopus-consumption-card",source_entry_id:"",view:"consumption",default_period:"week",chart_type:"line",tariff_entry_ids:[],show_cost_on_chart:!1,show_navigation:!0,show_period_distribution:!1,show_moving_average:!1,moving_average_days:7},this._language="en",this._computeLabel=t=>function(t,e="en"){return ft(`editor.${t.name}_label`,e)}(t,this._language),this._computeHelper=t=>function(t,e="en"){return ft(`editor.${t.name}_helper`,e)}(t,this._language)}_applyDefaults(t){return{type:t.type||"custom:octopus-consumption-card",source_entry_id:t.source_entry_id||"",view:t.view||"consumption",default_period:t.default_period||"week",chart_type:t.chart_type||"line",tariff_entry_ids:t.tariff_entry_ids||[],show_cost_on_chart:void 0!==t.show_cost_on_chart&&t.show_cost_on_chart,show_navigation:void 0===t.show_navigation||t.show_navigation,show_period_distribution:void 0!==t.show_period_distribution&&t.show_period_distribution,show_moving_average:void 0!==t.show_moving_average&&t.show_moving_average,moving_average_days:t.moving_average_days||7,heat_calendar_period:t.heat_calendar_period||"month",show_week_comparison:void 0!==t.show_week_comparison&&t.show_week_comparison,week_comparison_count:t.week_comparison_count||2,show_cost_trend:void 0!==t.show_cost_trend&&t.show_cost_trend,cost_moving_average_days:t.cost_moving_average_days||30,show_tariff_chart:void 0===t.show_tariff_chart||t.show_tariff_chart,selected_tariff_for_cost:t.selected_tariff_for_cost,consumption_sensor:t.consumption_sensor}}setConfig(t){const e=this._applyDefaults(t);JSON.stringify(this._config)!==JSON.stringify(e)&&(this._config=e)}willUpdate(t){if(t.has("config")&&this.config){const t=this._applyDefaults(this.config);JSON.stringify(this._config)!==JSON.stringify(t)&&(this._config=t)}if(t.has("hass")&&this.hass){const t=this.hass.language||"en";this._language!==t&&(this._language=t)}}firstUpdated(){if(this.config){const t=this._applyDefaults(this.config);JSON.stringify(this._config)!==JSON.stringify(t)&&(this._config=t)}this.hass&&(this._language=this.hass.language||"en")}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.detail.value;e.view||(e.view="consumption");const r=this._config.view!==e.view;!1===e.show_cost_on_chart&&(e.selected_tariff_for_cost=void 0),!1===e.show_cost_on_chart&&(e.selected_tariff_for_cost=void 0),this._config=e,r&&this.requestUpdate(),this._fireConfigChanged()}_fireConfigChanged(){const t=new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0});this.dispatchEvent(t)}_buildSchema(){const t=this._config.view||"consumption",e=[{name:"view",selector:{select:{mode:"dropdown",options:[{value:"consumption",label:ft("editor.view_consumption",this._language)},{value:"heat-calendar",label:ft("editor.view_heat_calendar",this._language)},{value:"week-analysis",label:ft("editor.view_week_analysis",this._language)},{value:"tariff-comparison",label:ft("editor.view_tariff_comparison",this._language)}]}}},{name:"source_entry_id",required:!0,selector:{config_entry:{integration:"octopus_energy_es"}}}];return"consumption"===t?(e.push({name:"default_period",selector:{select:{mode:"dropdown",options:[{value:"day",label:ft("editor.period_day",this._language)},{value:"week",label:ft("editor.period_week",this._language)},{value:"month",label:ft("editor.period_month",this._language)}]}}},{name:"chart_type",selector:{select:{mode:"dropdown",options:[{value:"line",label:ft("editor.chart_type_line",this._language)},{value:"bar",label:ft("editor.chart_type_bar",this._language)},{value:"stacked-area",label:ft("editor.chart_type_stacked_area",this._language)}]}}},{name:"show_navigation",selector:{boolean:{}}},{name:"show_period_distribution",selector:{boolean:{}}},{name:"show_moving_average",selector:{boolean:{}}}),this._config.show_moving_average&&e.push({name:"moving_average_days",selector:{number:{min:2,max:30,mode:"box"}}}),e.push({name:"show_cost_on_chart",selector:{boolean:{}}}),this._config.show_cost_on_chart&&e.push({name:"selected_tariff_for_cost",selector:{config_entry:{integration:"octopus_energy_es"}}}),e.push({name:"show_cost_trend",selector:{boolean:{}}}),this._config.show_cost_trend&&e.push({name:"cost_moving_average_days",selector:{number:{min:2,max:90,mode:"box"}}})):"heat-calendar"===t?e.push({name:"heat_calendar_period",selector:{select:{mode:"dropdown",options:[{value:"month",label:ft("editor.heat_calendar_period_month",this._language)},{value:"year",label:ft("editor.heat_calendar_period_year",this._language)}]}}},{name:"show_navigation",selector:{boolean:{}}}):"week-analysis"===t?(e.push({name:"show_week_comparison",selector:{boolean:{}}},{name:"show_navigation",selector:{boolean:{}}}),this._config.show_week_comparison&&e.push({name:"week_comparison_count",selector:{number:{min:2,max:8,mode:"box"}}})):"tariff-comparison"===t&&e.push({name:"show_tariff_chart",selector:{boolean:{}}}),e.push({name:"consumption_sensor",selector:{entity:{domain:"sensor"}}}),e}_handleTariffSelection(t,e){const r=e.detail.value,n=[...this._config.tariff_entry_ids||[]];for(;n.length<=t;)n.push("");let i;if(r){const e=n.findIndex((e,n)=>n!==t&&e===r);-1!==e&&(n[e]=""),n[t]=r,i=n.filter((t,e,r)=>t&&r.indexOf(t)===e)}else n.splice(t,1),i=n.filter(t=>t);this._config={...this._config,tariff_entry_ids:i},this.requestUpdate(),this._fireConfigChanged()}_removeTariff(t){const e=this._config.tariff_entry_ids||[];if(t>=e.length)return;const r=[...e];r.splice(t,1);const n=r.filter(t=>t);this._config={...this._config,tariff_entry_ids:n},this.requestUpdate(),this._fireConfigChanged()}_renderTariffDropdowns(){const t=this._config.tariff_entry_ids||[],e=t.length>0?t.length+1:1;return U`
      <div class="form-group">
        <label>${ft("editor.tariff_entry_ids_label",this._language)}</label>
        <div class="tariff-dropdown-list">
          ${Array.from({length:e},(e,r)=>{const n=t[r]||"";return U`
              <div class="tariff-dropdown-item">
                <ha-selector
                  .hass=${this.hass}
                  .selector=${{config_entry:{integration:"octopus_energy_es"}}}
                  .value=${n}
                  .label=${0===r?ft("editor.tariff_entry_ids_helper",this._language):""}
                  @value-changed=${t=>this._handleTariffSelection(r,t)}
                ></ha-selector>
                ${n?U`
                  <ha-icon-button
                    .label=${"Remove"}
                    @click=${()=>this._removeTariff(r)}
                  >
                    <ha-icon icon="mdi:delete"></ha-icon>
                  </ha-icon-button>
                `:""}
              </div>
            `})}
        </div>
      </div>
    `}render(){if(!this.hass)return U`<div class="card-config">Loading...</div>`;const t=this._buildSchema(),e=this._config.view||"consumption";return U`
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
    `}}vt.enabledWarnings=[],vt.styles=mt,gt([ht({attribute:!1})],vt.prototype,"hass",void 0),gt([ht({attribute:!1})],vt.prototype,"config",void 0),gt([ut()],vt.prototype,"_config",void 0),"undefined"!=typeof window&&"undefined"!=typeof customElements&&(customElements.get("octopus-consumption-card-editor")||customElements.define("octopus-consumption-card-editor",vt));class yt{static info(t,...e){const r=[t,this.STYLES.info];e.forEach((t,e)=>{r.push(t,e%2==0?this.STYLES.infoValue:this.STYLES.info)}),console.log(...r)}static error(t,e){e?console.error(`%c${t}%c${e}`,this.STYLES.error,this.STYLES.errorValue):console.error(`%c${t}`,this.STYLES.error)}static warn(t,e){e?console.warn(`%c${t}%c${e}`,this.STYLES.warning,this.STYLES.warningValue):console.warn(`%c${t}`,this.STYLES.warning)}static success(t){console.log(`%c${t}`,this.STYLES.success)}static data(t,e){console.log(`%c  ${t}: %c${JSON.stringify(e,null,2)}`,this.STYLES.info,this.STYLES.infoValue)}static serviceCall(t,e,r=!1){this.info("  Calling service: ",`${t}.${e}${r?" (with return_response)":""}`)}static serviceData(t){this.data("Service data",t)}static serviceResponse(t){this.data("Raw Service Response",t)}static serviceError(t){console.error("%c  Service Error Details: %c"+JSON.stringify(t,Object.getOwnPropertyNames(t),2),this.STYLES.info,this.STYLES.errorValue)}static groupServiceCall(t,e){console.groupCollapsed(`%c🔧 Service Call: %c${t}.${e}`,this.STYLES.info,this.STYLES.infoValue)}static groupEnd(){console.groupEnd()}static groupDataLoad(t,e,r){console.groupCollapsed(`%c📊 Loading Data: %cEntry: ${t} | Period: ${e} | ${r}`,this.STYLES.info,this.STYLES.infoValue)}static groupError(t){console.groupCollapsed(`%c❌ ${t}`,this.STYLES.error)}}function wt(t,e){return null==t||null==e?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function bt(t,e){return null==t||null==e?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function xt(t){let e,r,n;function i(t,n,i=0,o=t.length){if(i<o){if(0!==e(n,n))return o;do{const e=i+o>>>1;r(t[e],n)<0?i=e+1:o=e}while(i<o)}return i}return 2!==t.length?(e=wt,r=(e,r)=>wt(t(e),r),n=(e,r)=>t(e)-r):(e=t===wt||t===bt?t:kt,r=t,n=t),{left:i,center:function(t,e,r=0,o=t.length){const a=i(t,e,r,o-1);return a>r&&n(t[a-1],e)>-n(t[a],e)?a-1:a},right:function(t,n,i=0,o=t.length){if(i<o){if(0!==e(n,n))return o;do{const e=i+o>>>1;r(t[e],n)<=0?i=e+1:o=e}while(i<o)}return i}}}function kt(){return 0}yt.STYLES={info:"color: #666; font-size: 11px;",infoValue:"color: #999; font-size: 11px; font-family: monospace;",error:"color: #f00; font-size: 11px; font-weight: bold;",errorValue:"color: #f00; font-size: 11px;",warning:"color: #ff9800; font-size: 11px;",warningValue:"color: #ff9800; font-size: 11px;",success:"color: #4caf50; font-size: 11px;"};const $t=xt(wt).right;xt(function(t){return null===t?NaN:+t}).center;class St extends Map{constructor(t,e=Ct){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:e}}),null!=t)for(const[e,r]of t)this.set(e,r)}get(t){return super.get(Et(this,t))}has(t){return super.has(Et(this,t))}set(t,e){return super.set(function({_intern:t,_key:e},r){const n=e(r);return t.has(n)?t.get(n):(t.set(n,r),r)}(this,t),e)}delete(t){return super.delete(function({_intern:t,_key:e},r){const n=e(r);t.has(n)&&(r=t.get(n),t.delete(n));return r}(this,t))}}function Et({_intern:t,_key:e},r){const n=e(r);return t.has(n)?t.get(n):r}function Ct(t){return null!==t&&"object"==typeof t?t.valueOf():t}const Dt=Math.sqrt(50),At=Math.sqrt(10),Mt=Math.sqrt(2);function Pt(t,e,r){const n=(e-t)/Math.max(0,r),i=Math.floor(Math.log10(n)),o=n/Math.pow(10,i),a=o>=Dt?10:o>=At?5:o>=Mt?2:1;let s,c,l;return i<0?(l=Math.pow(10,-i)/a,s=Math.round(t*l),c=Math.round(e*l),s/l<t&&++s,c/l>e&&--c,l=-l):(l=Math.pow(10,i)*a,s=Math.round(t/l),c=Math.round(e/l),s*l<t&&++s,c*l>e&&--c),c<s&&.5<=r&&r<2?Pt(t,e,2*r):[s,c,l]}function Tt(t,e,r){return Pt(t=+t,e=+e,r=+r)[2]}function Nt(t){return t}var Ot=1e-6;function Rt(t){return"translate("+t+",0)"}function Ft(t){return"translate(0,"+t+")"}function zt(t){return e=>+t(e)}function Ht(t,e){return e=Math.max(0,t.bandwidth()-2*e)/2,t.round()&&(e=Math.round(e)),r=>+t(r)+e}function It(){return!this.__axis}function Lt(t,e){var r=[],n=null,i=null,o=6,a=6,s=3,c="undefined"!=typeof window&&window.devicePixelRatio>1?0:.5,l=1===t||4===t?-1:1,d=4===t||2===t?"x":"y",h=1===t||3===t?Rt:Ft;function u(u){var p=null==n?e.ticks?e.ticks.apply(e,r):e.domain():n,f=null==i?e.tickFormat?e.tickFormat.apply(e,r):Nt:i,_=Math.max(o,0)+s,m=e.range(),g=+m[0]+c,v=+m[m.length-1]+c,y=(e.bandwidth?Ht:zt)(e.copy(),c),w=u.selection?u.selection():u,b=w.selectAll(".domain").data([null]),x=w.selectAll(".tick").data(p,e).order(),k=x.exit(),$=x.enter().append("g").attr("class","tick"),S=x.select("line"),E=x.select("text");b=b.merge(b.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),x=x.merge($),S=S.merge($.append("line").attr("stroke","currentColor").attr(d+"2",l*o)),E=E.merge($.append("text").attr("fill","currentColor").attr(d,l*_).attr("dy",1===t?"0em":3===t?"0.71em":"0.32em")),u!==w&&(b=b.transition(u),x=x.transition(u),S=S.transition(u),E=E.transition(u),k=k.transition(u).attr("opacity",Ot).attr("transform",function(t){return isFinite(t=y(t))?h(t+c):this.getAttribute("transform")}),$.attr("opacity",Ot).attr("transform",function(t){var e=this.parentNode.__axis;return h((e&&isFinite(e=e(t))?e:y(t))+c)})),k.remove(),b.attr("d",4===t||2===t?a?"M"+l*a+","+g+"H"+c+"V"+v+"H"+l*a:"M"+c+","+g+"V"+v:a?"M"+g+","+l*a+"V"+c+"H"+v+"V"+l*a:"M"+g+","+c+"H"+v),x.attr("opacity",1).attr("transform",function(t){return h(y(t)+c)}),S.attr(d+"2",l*o),E.attr(d,l*_).text(f),w.filter(It).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",2===t?"start":4===t?"end":"middle"),w.each(function(){this.__axis=y})}return u.scale=function(t){return arguments.length?(e=t,u):e},u.ticks=function(){return r=Array.from(arguments),u},u.tickArguments=function(t){return arguments.length?(r=null==t?[]:Array.from(t),u):r.slice()},u.tickValues=function(t){return arguments.length?(n=null==t?null:Array.from(t),u):n&&n.slice()},u.tickFormat=function(t){return arguments.length?(i=t,u):i},u.tickSize=function(t){return arguments.length?(o=a=+t,u):o},u.tickSizeInner=function(t){return arguments.length?(o=+t,u):o},u.tickSizeOuter=function(t){return arguments.length?(a=+t,u):a},u.tickPadding=function(t){return arguments.length?(s=+t,u):s},u.offset=function(t){return arguments.length?(c=+t,u):c},u}function jt(t){return Lt(3,t)}function Vt(t){return Lt(4,t)}var Ut={value:()=>{}};function Wt(){for(var t,e=0,r=arguments.length,n={};e<r;++e){if(!(t=arguments[e]+"")||t in n||/[\s.]/.test(t))throw new Error("illegal type: "+t);n[t]=[]}return new Yt(n)}function Yt(t){this._=t}function qt(t,e){for(var r,n=0,i=t.length;n<i;++n)if((r=t[n]).name===e)return r.value}function Bt(t,e,r){for(var n=0,i=t.length;n<i;++n)if(t[n].name===e){t[n]=Ut,t=t.slice(0,n).concat(t.slice(n+1));break}return null!=r&&t.push({name:e,value:r}),t}Yt.prototype=Wt.prototype={constructor:Yt,on:function(t,e){var r,n,i=this._,o=(n=i,(t+"").trim().split(/^|\s+/).map(function(t){var e="",r=t.indexOf(".");if(r>=0&&(e=t.slice(r+1),t=t.slice(0,r)),t&&!n.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:e}})),a=-1,s=o.length;if(!(arguments.length<2)){if(null!=e&&"function"!=typeof e)throw new Error("invalid callback: "+e);for(;++a<s;)if(r=(t=o[a]).type)i[r]=Bt(i[r],t.name,e);else if(null==e)for(r in i)i[r]=Bt(i[r],t.name,null);return this}for(;++a<s;)if((r=(t=o[a]).type)&&(r=qt(i[r],t.name)))return r},copy:function(){var t={},e=this._;for(var r in e)t[r]=e[r].slice();return new Yt(t)},call:function(t,e){if((r=arguments.length-2)>0)for(var r,n,i=new Array(r),o=0;o<r;++o)i[o]=arguments[o+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(o=0,r=(n=this._[t]).length;o<r;++o)n[o].value.apply(e,i)},apply:function(t,e,r){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var n=this._[t],i=0,o=n.length;i<o;++i)n[i].value.apply(e,r)}};var Xt="http://www.w3.org/1999/xhtml",Jt={svg:"http://www.w3.org/2000/svg",xhtml:Xt,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Gt(t){var e=t+="",r=e.indexOf(":");return r>=0&&"xmlns"!==(e=t.slice(0,r))&&(t=t.slice(r+1)),Jt.hasOwnProperty(e)?{space:Jt[e],local:t}:t}function Zt(t){return function(){var e=this.ownerDocument,r=this.namespaceURI;return r===Xt&&e.documentElement.namespaceURI===Xt?e.createElement(t):e.createElementNS(r,t)}}function Kt(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function Qt(t){var e=Gt(t);return(e.local?Kt:Zt)(e)}function te(){}function ee(t){return null==t?te:function(){return this.querySelector(t)}}function re(){return[]}function ne(t){return null==t?re:function(){return this.querySelectorAll(t)}}function ie(t){return function(){return function(t){return null==t?[]:Array.isArray(t)?t:Array.from(t)}(t.apply(this,arguments))}}function oe(t){return function(){return this.matches(t)}}function ae(t){return function(e){return e.matches(t)}}var se=Array.prototype.find;function ce(){return this.firstElementChild}var le=Array.prototype.filter;function de(){return Array.from(this.children)}function he(t){return new Array(t.length)}function ue(t,e){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=e}function pe(t,e,r,n,i,o){for(var a,s=0,c=e.length,l=o.length;s<l;++s)(a=e[s])?(a.__data__=o[s],n[s]=a):r[s]=new ue(t,o[s]);for(;s<c;++s)(a=e[s])&&(i[s]=a)}function fe(t,e,r,n,i,o,a){var s,c,l,d=new Map,h=e.length,u=o.length,p=new Array(h);for(s=0;s<h;++s)(c=e[s])&&(p[s]=l=a.call(c,c.__data__,s,e)+"",d.has(l)?i[s]=c:d.set(l,c));for(s=0;s<u;++s)l=a.call(t,o[s],s,o)+"",(c=d.get(l))?(n[s]=c,c.__data__=o[s],d.delete(l)):r[s]=new ue(t,o[s]);for(s=0;s<h;++s)(c=e[s])&&d.get(p[s])===c&&(i[s]=c)}function _e(t){return t.__data__}function me(t){return"object"==typeof t&&"length"in t?t:Array.from(t)}function ge(t,e){return t<e?-1:t>e?1:t>=e?0:NaN}function ve(t){return function(){this.removeAttribute(t)}}function ye(t){return function(){this.removeAttributeNS(t.space,t.local)}}function we(t,e){return function(){this.setAttribute(t,e)}}function be(t,e){return function(){this.setAttributeNS(t.space,t.local,e)}}function xe(t,e){return function(){var r=e.apply(this,arguments);null==r?this.removeAttribute(t):this.setAttribute(t,r)}}function ke(t,e){return function(){var r=e.apply(this,arguments);null==r?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,r)}}function $e(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function Se(t){return function(){this.style.removeProperty(t)}}function Ee(t,e,r){return function(){this.style.setProperty(t,e,r)}}function Ce(t,e,r){return function(){var n=e.apply(this,arguments);null==n?this.style.removeProperty(t):this.style.setProperty(t,n,r)}}function De(t,e){return t.style.getPropertyValue(e)||$e(t).getComputedStyle(t,null).getPropertyValue(e)}function Ae(t){return function(){delete this[t]}}function Me(t,e){return function(){this[t]=e}}function Pe(t,e){return function(){var r=e.apply(this,arguments);null==r?delete this[t]:this[t]=r}}function Te(t){return t.trim().split(/^|\s+/)}function Ne(t){return t.classList||new Oe(t)}function Oe(t){this._node=t,this._names=Te(t.getAttribute("class")||"")}function Re(t,e){for(var r=Ne(t),n=-1,i=e.length;++n<i;)r.add(e[n])}function Fe(t,e){for(var r=Ne(t),n=-1,i=e.length;++n<i;)r.remove(e[n])}function ze(t){return function(){Re(this,t)}}function He(t){return function(){Fe(this,t)}}function Ie(t,e){return function(){(e.apply(this,arguments)?Re:Fe)(this,t)}}function Le(){this.textContent=""}function je(t){return function(){this.textContent=t}}function Ve(t){return function(){var e=t.apply(this,arguments);this.textContent=null==e?"":e}}function Ue(){this.innerHTML=""}function We(t){return function(){this.innerHTML=t}}function Ye(t){return function(){var e=t.apply(this,arguments);this.innerHTML=null==e?"":e}}function qe(){this.nextSibling&&this.parentNode.appendChild(this)}function Be(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Xe(){return null}function Je(){var t=this.parentNode;t&&t.removeChild(this)}function Ge(){var t=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function Ze(){var t=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function Ke(t){return function(){var e=this.__on;if(e){for(var r,n=0,i=-1,o=e.length;n<o;++n)r=e[n],t.type&&r.type!==t.type||r.name!==t.name?e[++i]=r:this.removeEventListener(r.type,r.listener,r.options);++i?e.length=i:delete this.__on}}}function Qe(t,e,r){return function(){var n,i=this.__on,o=function(t){return function(e){t.call(this,e,this.__data__)}}(e);if(i)for(var a=0,s=i.length;a<s;++a)if((n=i[a]).type===t.type&&n.name===t.name)return this.removeEventListener(n.type,n.listener,n.options),this.addEventListener(n.type,n.listener=o,n.options=r),void(n.value=e);this.addEventListener(t.type,o,r),n={type:t.type,name:t.name,value:e,listener:o,options:r},i?i.push(n):this.__on=[n]}}function tr(t,e,r){var n=$e(t),i=n.CustomEvent;"function"==typeof i?i=new i(e,r):(i=n.document.createEvent("Event"),r?(i.initEvent(e,r.bubbles,r.cancelable),i.detail=r.detail):i.initEvent(e,!1,!1)),t.dispatchEvent(i)}function er(t,e){return function(){return tr(this,t,e)}}function rr(t,e){return function(){return tr(this,t,e.apply(this,arguments))}}ue.prototype={constructor:ue,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,e){return this._parent.insertBefore(t,e)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}},Oe.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var e=this._names.indexOf(t);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};var nr=[null];function ir(t,e){this._groups=t,this._parents=e}function or(){return new ir([[document.documentElement]],nr)}function ar(t){return"string"==typeof t?new ir([[document.querySelector(t)]],[document.documentElement]):new ir([[t]],nr)}function sr(t,e){if(t=function(t){let e;for(;e=t.sourceEvent;)t=e;return t}(t),void 0===e&&(e=t.currentTarget),e){var r=e.ownerSVGElement||e;if(r.createSVGPoint){var n=r.createSVGPoint();return n.x=t.clientX,n.y=t.clientY,[(n=n.matrixTransform(e.getScreenCTM().inverse())).x,n.y]}if(e.getBoundingClientRect){var i=e.getBoundingClientRect();return[t.clientX-i.left-e.clientLeft,t.clientY-i.top-e.clientTop]}}return[t.pageX,t.pageY]}function cr(t,e,r){t.prototype=e.prototype=r,r.constructor=t}function lr(t,e){var r=Object.create(t.prototype);for(var n in e)r[n]=e[n];return r}function dr(){}ir.prototype=or.prototype={constructor:ir,select:function(t){"function"!=typeof t&&(t=ee(t));for(var e=this._groups,r=e.length,n=new Array(r),i=0;i<r;++i)for(var o,a,s=e[i],c=s.length,l=n[i]=new Array(c),d=0;d<c;++d)(o=s[d])&&(a=t.call(o,o.__data__,d,s))&&("__data__"in o&&(a.__data__=o.__data__),l[d]=a);return new ir(n,this._parents)},selectAll:function(t){t="function"==typeof t?ie(t):ne(t);for(var e=this._groups,r=e.length,n=[],i=[],o=0;o<r;++o)for(var a,s=e[o],c=s.length,l=0;l<c;++l)(a=s[l])&&(n.push(t.call(a,a.__data__,l,s)),i.push(a));return new ir(n,i)},selectChild:function(t){return this.select(null==t?ce:function(t){return function(){return se.call(this.children,t)}}("function"==typeof t?t:ae(t)))},selectChildren:function(t){return this.selectAll(null==t?de:function(t){return function(){return le.call(this.children,t)}}("function"==typeof t?t:ae(t)))},filter:function(t){"function"!=typeof t&&(t=oe(t));for(var e=this._groups,r=e.length,n=new Array(r),i=0;i<r;++i)for(var o,a=e[i],s=a.length,c=n[i]=[],l=0;l<s;++l)(o=a[l])&&t.call(o,o.__data__,l,a)&&c.push(o);return new ir(n,this._parents)},data:function(t,e){if(!arguments.length)return Array.from(this,_e);var r=e?fe:pe,n=this._parents,i=this._groups;"function"!=typeof t&&(t=function(t){return function(){return t}}(t));for(var o=i.length,a=new Array(o),s=new Array(o),c=new Array(o),l=0;l<o;++l){var d=n[l],h=i[l],u=h.length,p=me(t.call(d,d&&d.__data__,l,n)),f=p.length,_=s[l]=new Array(f),m=a[l]=new Array(f);r(d,h,_,m,c[l]=new Array(u),p,e);for(var g,v,y=0,w=0;y<f;++y)if(g=_[y]){for(y>=w&&(w=y+1);!(v=m[w])&&++w<f;);g._next=v||null}}return(a=new ir(a,n))._enter=s,a._exit=c,a},enter:function(){return new ir(this._enter||this._groups.map(he),this._parents)},exit:function(){return new ir(this._exit||this._groups.map(he),this._parents)},join:function(t,e,r){var n=this.enter(),i=this,o=this.exit();return"function"==typeof t?(n=t(n))&&(n=n.selection()):n=n.append(t+""),null!=e&&(i=e(i))&&(i=i.selection()),null==r?o.remove():r(o),n&&i?n.merge(i).order():i},merge:function(t){for(var e=t.selection?t.selection():t,r=this._groups,n=e._groups,i=r.length,o=n.length,a=Math.min(i,o),s=new Array(i),c=0;c<a;++c)for(var l,d=r[c],h=n[c],u=d.length,p=s[c]=new Array(u),f=0;f<u;++f)(l=d[f]||h[f])&&(p[f]=l);for(;c<i;++c)s[c]=r[c];return new ir(s,this._parents)},selection:function(){return this},order:function(){for(var t=this._groups,e=-1,r=t.length;++e<r;)for(var n,i=t[e],o=i.length-1,a=i[o];--o>=0;)(n=i[o])&&(a&&4^n.compareDocumentPosition(a)&&a.parentNode.insertBefore(n,a),a=n);return this},sort:function(t){function e(e,r){return e&&r?t(e.__data__,r.__data__):!e-!r}t||(t=ge);for(var r=this._groups,n=r.length,i=new Array(n),o=0;o<n;++o){for(var a,s=r[o],c=s.length,l=i[o]=new Array(c),d=0;d<c;++d)(a=s[d])&&(l[d]=a);l.sort(e)}return new ir(i,this._parents).order()},call:function(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this},nodes:function(){return Array.from(this)},node:function(){for(var t=this._groups,e=0,r=t.length;e<r;++e)for(var n=t[e],i=0,o=n.length;i<o;++i){var a=n[i];if(a)return a}return null},size:function(){let t=0;for(const e of this)++t;return t},empty:function(){return!this.node()},each:function(t){for(var e=this._groups,r=0,n=e.length;r<n;++r)for(var i,o=e[r],a=0,s=o.length;a<s;++a)(i=o[a])&&t.call(i,i.__data__,a,o);return this},attr:function(t,e){var r=Gt(t);if(arguments.length<2){var n=this.node();return r.local?n.getAttributeNS(r.space,r.local):n.getAttribute(r)}return this.each((null==e?r.local?ye:ve:"function"==typeof e?r.local?ke:xe:r.local?be:we)(r,e))},style:function(t,e,r){return arguments.length>1?this.each((null==e?Se:"function"==typeof e?Ce:Ee)(t,e,null==r?"":r)):De(this.node(),t)},property:function(t,e){return arguments.length>1?this.each((null==e?Ae:"function"==typeof e?Pe:Me)(t,e)):this.node()[t]},classed:function(t,e){var r=Te(t+"");if(arguments.length<2){for(var n=Ne(this.node()),i=-1,o=r.length;++i<o;)if(!n.contains(r[i]))return!1;return!0}return this.each(("function"==typeof e?Ie:e?ze:He)(r,e))},text:function(t){return arguments.length?this.each(null==t?Le:("function"==typeof t?Ve:je)(t)):this.node().textContent},html:function(t){return arguments.length?this.each(null==t?Ue:("function"==typeof t?Ye:We)(t)):this.node().innerHTML},raise:function(){return this.each(qe)},lower:function(){return this.each(Be)},append:function(t){var e="function"==typeof t?t:Qt(t);return this.select(function(){return this.appendChild(e.apply(this,arguments))})},insert:function(t,e){var r="function"==typeof t?t:Qt(t),n=null==e?Xe:"function"==typeof e?e:ee(e);return this.select(function(){return this.insertBefore(r.apply(this,arguments),n.apply(this,arguments)||null)})},remove:function(){return this.each(Je)},clone:function(t){return this.select(t?Ze:Ge)},datum:function(t){return arguments.length?this.property("__data__",t):this.node().__data__},on:function(t,e,r){var n,i,o=function(t){return t.trim().split(/^|\s+/).map(function(t){var e="",r=t.indexOf(".");return r>=0&&(e=t.slice(r+1),t=t.slice(0,r)),{type:t,name:e}})}(t+""),a=o.length;if(!(arguments.length<2)){for(s=e?Qe:Ke,n=0;n<a;++n)this.each(s(o[n],e,r));return this}var s=this.node().__on;if(s)for(var c,l=0,d=s.length;l<d;++l)for(n=0,c=s[l];n<a;++n)if((i=o[n]).type===c.type&&i.name===c.name)return c.value},dispatch:function(t,e){return this.each(("function"==typeof e?rr:er)(t,e))},[Symbol.iterator]:function*(){for(var t=this._groups,e=0,r=t.length;e<r;++e)for(var n,i=t[e],o=0,a=i.length;o<a;++o)(n=i[o])&&(yield n)}};var hr=.7,ur=1/hr,pr="\\s*([+-]?\\d+)\\s*",fr="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",_r="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",mr=/^#([0-9a-f]{3,8})$/,gr=new RegExp(`^rgb\\(${pr},${pr},${pr}\\)$`),vr=new RegExp(`^rgb\\(${_r},${_r},${_r}\\)$`),yr=new RegExp(`^rgba\\(${pr},${pr},${pr},${fr}\\)$`),wr=new RegExp(`^rgba\\(${_r},${_r},${_r},${fr}\\)$`),br=new RegExp(`^hsl\\(${fr},${_r},${_r}\\)$`),xr=new RegExp(`^hsla\\(${fr},${_r},${_r},${fr}\\)$`),kr={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function $r(){return this.rgb().formatHex()}function Sr(){return this.rgb().formatRgb()}function Er(t){var e,r;return t=(t+"").trim().toLowerCase(),(e=mr.exec(t))?(r=e[1].length,e=parseInt(e[1],16),6===r?Cr(e):3===r?new Mr(e>>8&15|e>>4&240,e>>4&15|240&e,(15&e)<<4|15&e,1):8===r?Dr(e>>24&255,e>>16&255,e>>8&255,(255&e)/255):4===r?Dr(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|240&e,((15&e)<<4|15&e)/255):null):(e=gr.exec(t))?new Mr(e[1],e[2],e[3],1):(e=vr.exec(t))?new Mr(255*e[1]/100,255*e[2]/100,255*e[3]/100,1):(e=yr.exec(t))?Dr(e[1],e[2],e[3],e[4]):(e=wr.exec(t))?Dr(255*e[1]/100,255*e[2]/100,255*e[3]/100,e[4]):(e=br.exec(t))?Fr(e[1],e[2]/100,e[3]/100,1):(e=xr.exec(t))?Fr(e[1],e[2]/100,e[3]/100,e[4]):kr.hasOwnProperty(t)?Cr(kr[t]):"transparent"===t?new Mr(NaN,NaN,NaN,0):null}function Cr(t){return new Mr(t>>16&255,t>>8&255,255&t,1)}function Dr(t,e,r,n){return n<=0&&(t=e=r=NaN),new Mr(t,e,r,n)}function Ar(t,e,r,n){return 1===arguments.length?function(t){return t instanceof dr||(t=Er(t)),t?new Mr((t=t.rgb()).r,t.g,t.b,t.opacity):new Mr}(t):new Mr(t,e,r,null==n?1:n)}function Mr(t,e,r,n){this.r=+t,this.g=+e,this.b=+r,this.opacity=+n}function Pr(){return`#${Rr(this.r)}${Rr(this.g)}${Rr(this.b)}`}function Tr(){const t=Nr(this.opacity);return`${1===t?"rgb(":"rgba("}${Or(this.r)}, ${Or(this.g)}, ${Or(this.b)}${1===t?")":`, ${t})`}`}function Nr(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function Or(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function Rr(t){return((t=Or(t))<16?"0":"")+t.toString(16)}function Fr(t,e,r,n){return n<=0?t=e=r=NaN:r<=0||r>=1?t=e=NaN:e<=0&&(t=NaN),new Hr(t,e,r,n)}function zr(t){if(t instanceof Hr)return new Hr(t.h,t.s,t.l,t.opacity);if(t instanceof dr||(t=Er(t)),!t)return new Hr;if(t instanceof Hr)return t;var e=(t=t.rgb()).r/255,r=t.g/255,n=t.b/255,i=Math.min(e,r,n),o=Math.max(e,r,n),a=NaN,s=o-i,c=(o+i)/2;return s?(a=e===o?(r-n)/s+6*(r<n):r===o?(n-e)/s+2:(e-r)/s+4,s/=c<.5?o+i:2-o-i,a*=60):s=c>0&&c<1?0:a,new Hr(a,s,c,t.opacity)}function Hr(t,e,r,n){this.h=+t,this.s=+e,this.l=+r,this.opacity=+n}function Ir(t){return(t=(t||0)%360)<0?t+360:t}function Lr(t){return Math.max(0,Math.min(1,t||0))}function jr(t,e,r){return 255*(t<60?e+(r-e)*t/60:t<180?r:t<240?e+(r-e)*(240-t)/60:e)}cr(dr,Er,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:$r,formatHex:$r,formatHex8:function(){return this.rgb().formatHex8()},formatHsl:function(){return zr(this).formatHsl()},formatRgb:Sr,toString:Sr}),cr(Mr,Ar,lr(dr,{brighter(t){return t=null==t?ur:Math.pow(ur,t),new Mr(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=null==t?hr:Math.pow(hr,t),new Mr(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new Mr(Or(this.r),Or(this.g),Or(this.b),Nr(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Pr,formatHex:Pr,formatHex8:function(){return`#${Rr(this.r)}${Rr(this.g)}${Rr(this.b)}${Rr(255*(isNaN(this.opacity)?1:this.opacity))}`},formatRgb:Tr,toString:Tr})),cr(Hr,function(t,e,r,n){return 1===arguments.length?zr(t):new Hr(t,e,r,null==n?1:n)},lr(dr,{brighter(t){return t=null==t?ur:Math.pow(ur,t),new Hr(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=null==t?hr:Math.pow(hr,t),new Hr(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+360*(this.h<0),e=isNaN(t)||isNaN(this.s)?0:this.s,r=this.l,n=r+(r<.5?r:1-r)*e,i=2*r-n;return new Mr(jr(t>=240?t-240:t+120,i,n),jr(t,i,n),jr(t<120?t+240:t-120,i,n),this.opacity)},clamp(){return new Hr(Ir(this.h),Lr(this.s),Lr(this.l),Nr(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const t=Nr(this.opacity);return`${1===t?"hsl(":"hsla("}${Ir(this.h)}, ${100*Lr(this.s)}%, ${100*Lr(this.l)}%${1===t?")":`, ${t})`}`}}));var Vr=t=>()=>t;function Ur(t){return 1===(t=+t)?Wr:function(e,r){return r-e?function(t,e,r){return t=Math.pow(t,r),e=Math.pow(e,r)-t,r=1/r,function(n){return Math.pow(t+n*e,r)}}(e,r,t):Vr(isNaN(e)?r:e)}}function Wr(t,e){var r=e-t;return r?function(t,e){return function(r){return t+r*e}}(t,r):Vr(isNaN(t)?e:t)}var Yr=function t(e){var r=Ur(e);function n(t,e){var n=r((t=Ar(t)).r,(e=Ar(e)).r),i=r(t.g,e.g),o=r(t.b,e.b),a=Wr(t.opacity,e.opacity);return function(e){return t.r=n(e),t.g=i(e),t.b=o(e),t.opacity=a(e),t+""}}return n.gamma=t,n}(1);function qr(t,e){e||(e=[]);var r,n=t?Math.min(e.length,t.length):0,i=e.slice();return function(o){for(r=0;r<n;++r)i[r]=t[r]*(1-o)+e[r]*o;return i}}function Br(t,e){var r,n=e?e.length:0,i=t?Math.min(n,t.length):0,o=new Array(i),a=new Array(n);for(r=0;r<i;++r)o[r]=tn(t[r],e[r]);for(;r<n;++r)a[r]=e[r];return function(t){for(r=0;r<i;++r)a[r]=o[r](t);return a}}function Xr(t,e){var r=new Date;return t=+t,e=+e,function(n){return r.setTime(t*(1-n)+e*n),r}}function Jr(t,e){return t=+t,e=+e,function(r){return t*(1-r)+e*r}}function Gr(t,e){var r,n={},i={};for(r in null!==t&&"object"==typeof t||(t={}),null!==e&&"object"==typeof e||(e={}),e)r in t?n[r]=tn(t[r],e[r]):i[r]=e[r];return function(t){for(r in n)i[r]=n[r](t);return i}}var Zr=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Kr=new RegExp(Zr.source,"g");function Qr(t,e){var r,n,i,o=Zr.lastIndex=Kr.lastIndex=0,a=-1,s=[],c=[];for(t+="",e+="";(r=Zr.exec(t))&&(n=Kr.exec(e));)(i=n.index)>o&&(i=e.slice(o,i),s[a]?s[a]+=i:s[++a]=i),(r=r[0])===(n=n[0])?s[a]?s[a]+=n:s[++a]=n:(s[++a]=null,c.push({i:a,x:Jr(r,n)})),o=Kr.lastIndex;return o<e.length&&(i=e.slice(o),s[a]?s[a]+=i:s[++a]=i),s.length<2?c[0]?function(t){return function(e){return t(e)+""}}(c[0].x):function(t){return function(){return t}}(e):(e=c.length,function(t){for(var r,n=0;n<e;++n)s[(r=c[n]).i]=r.x(t);return s.join("")})}function tn(t,e){var r,n=typeof e;return null==e||"boolean"===n?Vr(e):("number"===n?Jr:"string"===n?(r=Er(e))?(e=r,Yr):Qr:e instanceof Er?Yr:e instanceof Date?Xr:function(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}(e)?qr:Array.isArray(e)?Br:"function"!=typeof e.valueOf&&"function"!=typeof e.toString||isNaN(e)?Gr:Jr)(t,e)}function en(t,e){return t=+t,e=+e,function(r){return Math.round(t*(1-r)+e*r)}}var rn,nn=180/Math.PI,on={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function an(t,e,r,n,i,o){var a,s,c;return(a=Math.sqrt(t*t+e*e))&&(t/=a,e/=a),(c=t*r+e*n)&&(r-=t*c,n-=e*c),(s=Math.sqrt(r*r+n*n))&&(r/=s,n/=s,c/=s),t*n<e*r&&(t=-t,e=-e,c=-c,a=-a),{translateX:i,translateY:o,rotate:Math.atan2(e,t)*nn,skewX:Math.atan(c)*nn,scaleX:a,scaleY:s}}function sn(t,e,r,n){function i(t){return t.length?t.pop()+" ":""}return function(o,a){var s=[],c=[];return o=t(o),a=t(a),function(t,n,i,o,a,s){if(t!==i||n!==o){var c=a.push("translate(",null,e,null,r);s.push({i:c-4,x:Jr(t,i)},{i:c-2,x:Jr(n,o)})}else(i||o)&&a.push("translate("+i+e+o+r)}(o.translateX,o.translateY,a.translateX,a.translateY,s,c),function(t,e,r,o){t!==e?(t-e>180?e+=360:e-t>180&&(t+=360),o.push({i:r.push(i(r)+"rotate(",null,n)-2,x:Jr(t,e)})):e&&r.push(i(r)+"rotate("+e+n)}(o.rotate,a.rotate,s,c),function(t,e,r,o){t!==e?o.push({i:r.push(i(r)+"skewX(",null,n)-2,x:Jr(t,e)}):e&&r.push(i(r)+"skewX("+e+n)}(o.skewX,a.skewX,s,c),function(t,e,r,n,o,a){if(t!==r||e!==n){var s=o.push(i(o)+"scale(",null,",",null,")");a.push({i:s-4,x:Jr(t,r)},{i:s-2,x:Jr(e,n)})}else 1===r&&1===n||o.push(i(o)+"scale("+r+","+n+")")}(o.scaleX,o.scaleY,a.scaleX,a.scaleY,s,c),o=a=null,function(t){for(var e,r=-1,n=c.length;++r<n;)s[(e=c[r]).i]=e.x(t);return s.join("")}}}var cn,ln,dn=sn(function(t){const e=new("function"==typeof DOMMatrix?DOMMatrix:WebKitCSSMatrix)(t+"");return e.isIdentity?on:an(e.a,e.b,e.c,e.d,e.e,e.f)},"px, ","px)","deg)"),hn=sn(function(t){return null==t?on:(rn||(rn=document.createElementNS("http://www.w3.org/2000/svg","g")),rn.setAttribute("transform",t),(t=rn.transform.baseVal.consolidate())?an((t=t.matrix).a,t.b,t.c,t.d,t.e,t.f):on)},", ",")",")"),un=0,pn=0,fn=0,_n=0,mn=0,gn=0,vn="object"==typeof performance&&performance.now?performance:Date,yn="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function wn(){return mn||(yn(bn),mn=vn.now()+gn)}function bn(){mn=0}function xn(){this._call=this._time=this._next=null}function kn(t,e,r){var n=new xn;return n.restart(t,e,r),n}function $n(){mn=(_n=vn.now())+gn,un=pn=0;try{!function(){wn(),++un;for(var t,e=cn;e;)(t=mn-e._time)>=0&&e._call.call(void 0,t),e=e._next;--un}()}finally{un=0,function(){var t,e,r=cn,n=1/0;for(;r;)r._call?(n>r._time&&(n=r._time),t=r,r=r._next):(e=r._next,r._next=null,r=t?t._next=e:cn=e);ln=t,En(n)}(),mn=0}}function Sn(){var t=vn.now(),e=t-_n;e>1e3&&(gn-=e,_n=t)}function En(t){un||(pn&&(pn=clearTimeout(pn)),t-mn>24?(t<1/0&&(pn=setTimeout($n,t-vn.now()-gn)),fn&&(fn=clearInterval(fn))):(fn||(_n=vn.now(),fn=setInterval(Sn,1e3)),un=1,yn($n)))}function Cn(t,e,r){var n=new xn;return e=null==e?0:+e,n.restart(r=>{n.stop(),t(r+e)},e,r),n}xn.prototype=kn.prototype={constructor:xn,restart:function(t,e,r){if("function"!=typeof t)throw new TypeError("callback is not a function");r=(null==r?wn():+r)+(null==e?0:+e),this._next||ln===this||(ln?ln._next=this:cn=this,ln=this),this._call=t,this._time=r,En()},stop:function(){this._call&&(this._call=null,this._time=1/0,En())}};var Dn=Wt("start","end","cancel","interrupt"),An=[];function Mn(t,e,r,n,i,o){var a=t.__transition;if(a){if(r in a)return}else t.__transition={};!function(t,e,r){var n,i=t.__transition;function o(t){r.state=1,r.timer.restart(a,r.delay,r.time),r.delay<=t&&a(t-r.delay)}function a(o){var l,d,h,u;if(1!==r.state)return c();for(l in i)if((u=i[l]).name===r.name){if(3===u.state)return Cn(a);4===u.state?(u.state=6,u.timer.stop(),u.on.call("interrupt",t,t.__data__,u.index,u.group),delete i[l]):+l<e&&(u.state=6,u.timer.stop(),u.on.call("cancel",t,t.__data__,u.index,u.group),delete i[l])}if(Cn(function(){3===r.state&&(r.state=4,r.timer.restart(s,r.delay,r.time),s(o))}),r.state=2,r.on.call("start",t,t.__data__,r.index,r.group),2===r.state){for(r.state=3,n=new Array(h=r.tween.length),l=0,d=-1;l<h;++l)(u=r.tween[l].value.call(t,t.__data__,r.index,r.group))&&(n[++d]=u);n.length=d+1}}function s(e){for(var i=e<r.duration?r.ease.call(null,e/r.duration):(r.timer.restart(c),r.state=5,1),o=-1,a=n.length;++o<a;)n[o].call(t,i);5===r.state&&(r.on.call("end",t,t.__data__,r.index,r.group),c())}function c(){for(var n in r.state=6,r.timer.stop(),delete i[e],i)return;delete t.__transition}i[e]=r,r.timer=kn(o,0,r.time)}(t,r,{name:e,index:n,group:i,on:Dn,tween:An,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:0})}function Pn(t,e){var r=Nn(t,e);if(r.state>0)throw new Error("too late; already scheduled");return r}function Tn(t,e){var r=Nn(t,e);if(r.state>3)throw new Error("too late; already running");return r}function Nn(t,e){var r=t.__transition;if(!r||!(r=r[e]))throw new Error("transition not found");return r}function On(t,e){var r,n;return function(){var i=Tn(this,t),o=i.tween;if(o!==r)for(var a=0,s=(n=r=o).length;a<s;++a)if(n[a].name===e){(n=n.slice()).splice(a,1);break}i.tween=n}}function Rn(t,e,r){var n,i;if("function"!=typeof r)throw new Error;return function(){var o=Tn(this,t),a=o.tween;if(a!==n){i=(n=a).slice();for(var s={name:e,value:r},c=0,l=i.length;c<l;++c)if(i[c].name===e){i[c]=s;break}c===l&&i.push(s)}o.tween=i}}function Fn(t,e,r){var n=t._id;return t.each(function(){var t=Tn(this,n);(t.value||(t.value={}))[e]=r.apply(this,arguments)}),function(t){return Nn(t,n).value[e]}}function zn(t,e){var r;return("number"==typeof e?Jr:e instanceof Er?Yr:(r=Er(e))?(e=r,Yr):Qr)(t,e)}function Hn(t){return function(){this.removeAttribute(t)}}function In(t){return function(){this.removeAttributeNS(t.space,t.local)}}function Ln(t,e,r){var n,i,o=r+"";return function(){var a=this.getAttribute(t);return a===o?null:a===n?i:i=e(n=a,r)}}function jn(t,e,r){var n,i,o=r+"";return function(){var a=this.getAttributeNS(t.space,t.local);return a===o?null:a===n?i:i=e(n=a,r)}}function Vn(t,e,r){var n,i,o;return function(){var a,s,c=r(this);if(null!=c)return(a=this.getAttribute(t))===(s=c+"")?null:a===n&&s===i?o:(i=s,o=e(n=a,c));this.removeAttribute(t)}}function Un(t,e,r){var n,i,o;return function(){var a,s,c=r(this);if(null!=c)return(a=this.getAttributeNS(t.space,t.local))===(s=c+"")?null:a===n&&s===i?o:(i=s,o=e(n=a,c));this.removeAttributeNS(t.space,t.local)}}function Wn(t,e){var r,n;function i(){var i=e.apply(this,arguments);return i!==n&&(r=(n=i)&&function(t,e){return function(r){this.setAttributeNS(t.space,t.local,e.call(this,r))}}(t,i)),r}return i._value=e,i}function Yn(t,e){var r,n;function i(){var i=e.apply(this,arguments);return i!==n&&(r=(n=i)&&function(t,e){return function(r){this.setAttribute(t,e.call(this,r))}}(t,i)),r}return i._value=e,i}function qn(t,e){return function(){Pn(this,t).delay=+e.apply(this,arguments)}}function Bn(t,e){return e=+e,function(){Pn(this,t).delay=e}}function Xn(t,e){return function(){Tn(this,t).duration=+e.apply(this,arguments)}}function Jn(t,e){return e=+e,function(){Tn(this,t).duration=e}}var Gn=or.prototype.constructor;function Zn(t){return function(){this.style.removeProperty(t)}}var Kn=0;function Qn(t,e,r,n){this._groups=t,this._parents=e,this._name=r,this._id=n}function ti(){return++Kn}var ei=or.prototype;function ri(t){return 1-function(t){return 1.0009775171065494*(Math.pow(2,-10*t)-.0009765625)}(t)}Qn.prototype={constructor:Qn,select:function(t){var e=this._name,r=this._id;"function"!=typeof t&&(t=ee(t));for(var n=this._groups,i=n.length,o=new Array(i),a=0;a<i;++a)for(var s,c,l=n[a],d=l.length,h=o[a]=new Array(d),u=0;u<d;++u)(s=l[u])&&(c=t.call(s,s.__data__,u,l))&&("__data__"in s&&(c.__data__=s.__data__),h[u]=c,Mn(h[u],e,r,u,h,Nn(s,r)));return new Qn(o,this._parents,e,r)},selectAll:function(t){var e=this._name,r=this._id;"function"!=typeof t&&(t=ne(t));for(var n=this._groups,i=n.length,o=[],a=[],s=0;s<i;++s)for(var c,l=n[s],d=l.length,h=0;h<d;++h)if(c=l[h]){for(var u,p=t.call(c,c.__data__,h,l),f=Nn(c,r),_=0,m=p.length;_<m;++_)(u=p[_])&&Mn(u,e,r,_,p,f);o.push(p),a.push(c)}return new Qn(o,a,e,r)},selectChild:ei.selectChild,selectChildren:ei.selectChildren,filter:function(t){"function"!=typeof t&&(t=oe(t));for(var e=this._groups,r=e.length,n=new Array(r),i=0;i<r;++i)for(var o,a=e[i],s=a.length,c=n[i]=[],l=0;l<s;++l)(o=a[l])&&t.call(o,o.__data__,l,a)&&c.push(o);return new Qn(n,this._parents,this._name,this._id)},merge:function(t){if(t._id!==this._id)throw new Error;for(var e=this._groups,r=t._groups,n=e.length,i=r.length,o=Math.min(n,i),a=new Array(n),s=0;s<o;++s)for(var c,l=e[s],d=r[s],h=l.length,u=a[s]=new Array(h),p=0;p<h;++p)(c=l[p]||d[p])&&(u[p]=c);for(;s<n;++s)a[s]=e[s];return new Qn(a,this._parents,this._name,this._id)},selection:function(){return new Gn(this._groups,this._parents)},transition:function(){for(var t=this._name,e=this._id,r=ti(),n=this._groups,i=n.length,o=0;o<i;++o)for(var a,s=n[o],c=s.length,l=0;l<c;++l)if(a=s[l]){var d=Nn(a,e);Mn(a,t,r,l,s,{time:d.time+d.delay+d.duration,delay:0,duration:d.duration,ease:d.ease})}return new Qn(n,this._parents,t,r)},call:ei.call,nodes:ei.nodes,node:ei.node,size:ei.size,empty:ei.empty,each:ei.each,on:function(t,e){var r=this._id;return arguments.length<2?Nn(this.node(),r).on.on(t):this.each(function(t,e,r){var n,i,o=function(t){return(t+"").trim().split(/^|\s+/).every(function(t){var e=t.indexOf(".");return e>=0&&(t=t.slice(0,e)),!t||"start"===t})}(e)?Pn:Tn;return function(){var a=o(this,t),s=a.on;s!==n&&(i=(n=s).copy()).on(e,r),a.on=i}}(r,t,e))},attr:function(t,e){var r=Gt(t),n="transform"===r?hn:zn;return this.attrTween(t,"function"==typeof e?(r.local?Un:Vn)(r,n,Fn(this,"attr."+t,e)):null==e?(r.local?In:Hn)(r):(r.local?jn:Ln)(r,n,e))},attrTween:function(t,e){var r="attr."+t;if(arguments.length<2)return(r=this.tween(r))&&r._value;if(null==e)return this.tween(r,null);if("function"!=typeof e)throw new Error;var n=Gt(t);return this.tween(r,(n.local?Wn:Yn)(n,e))},style:function(t,e,r){var n="transform"==(t+="")?dn:zn;return null==e?this.styleTween(t,function(t,e){var r,n,i;return function(){var o=De(this,t),a=(this.style.removeProperty(t),De(this,t));return o===a?null:o===r&&a===n?i:i=e(r=o,n=a)}}(t,n)).on("end.style."+t,Zn(t)):"function"==typeof e?this.styleTween(t,function(t,e,r){var n,i,o;return function(){var a=De(this,t),s=r(this),c=s+"";return null==s&&(this.style.removeProperty(t),c=s=De(this,t)),a===c?null:a===n&&c===i?o:(i=c,o=e(n=a,s))}}(t,n,Fn(this,"style."+t,e))).each(function(t,e){var r,n,i,o,a="style."+e,s="end."+a;return function(){var c=Tn(this,t),l=c.on,d=null==c.value[a]?o||(o=Zn(e)):void 0;l===r&&i===d||(n=(r=l).copy()).on(s,i=d),c.on=n}}(this._id,t)):this.styleTween(t,function(t,e,r){var n,i,o=r+"";return function(){var a=De(this,t);return a===o?null:a===n?i:i=e(n=a,r)}}(t,n,e),r).on("end.style."+t,null)},styleTween:function(t,e,r){var n="style."+(t+="");if(arguments.length<2)return(n=this.tween(n))&&n._value;if(null==e)return this.tween(n,null);if("function"!=typeof e)throw new Error;return this.tween(n,function(t,e,r){var n,i;function o(){var o=e.apply(this,arguments);return o!==i&&(n=(i=o)&&function(t,e,r){return function(n){this.style.setProperty(t,e.call(this,n),r)}}(t,o,r)),n}return o._value=e,o}(t,e,null==r?"":r))},text:function(t){return this.tween("text","function"==typeof t?function(t){return function(){var e=t(this);this.textContent=null==e?"":e}}(Fn(this,"text",t)):function(t){return function(){this.textContent=t}}(null==t?"":t+""))},textTween:function(t){var e="text";if(arguments.length<1)return(e=this.tween(e))&&e._value;if(null==t)return this.tween(e,null);if("function"!=typeof t)throw new Error;return this.tween(e,function(t){var e,r;function n(){var n=t.apply(this,arguments);return n!==r&&(e=(r=n)&&function(t){return function(e){this.textContent=t.call(this,e)}}(n)),e}return n._value=t,n}(t))},remove:function(){return this.on("end.remove",function(t){return function(){var e=this.parentNode;for(var r in this.__transition)if(+r!==t)return;e&&e.removeChild(this)}}(this._id))},tween:function(t,e){var r=this._id;if(t+="",arguments.length<2){for(var n,i=Nn(this.node(),r).tween,o=0,a=i.length;o<a;++o)if((n=i[o]).name===t)return n.value;return null}return this.each((null==e?On:Rn)(r,t,e))},delay:function(t){var e=this._id;return arguments.length?this.each(("function"==typeof t?qn:Bn)(e,t)):Nn(this.node(),e).delay},duration:function(t){var e=this._id;return arguments.length?this.each(("function"==typeof t?Xn:Jn)(e,t)):Nn(this.node(),e).duration},ease:function(t){var e=this._id;return arguments.length?this.each(function(t,e){if("function"!=typeof e)throw new Error;return function(){Tn(this,t).ease=e}}(e,t)):Nn(this.node(),e).ease},easeVarying:function(t){if("function"!=typeof t)throw new Error;return this.each(function(t,e){return function(){var r=e.apply(this,arguments);if("function"!=typeof r)throw new Error;Tn(this,t).ease=r}}(this._id,t))},end:function(){var t,e,r=this,n=r._id,i=r.size();return new Promise(function(o,a){var s={value:a},c={value:function(){0===--i&&o()}};r.each(function(){var r=Tn(this,n),i=r.on;i!==t&&((e=(t=i).copy())._.cancel.push(s),e._.interrupt.push(s),e._.end.push(c)),r.on=e}),0===i&&o()})},[Symbol.iterator]:ei[Symbol.iterator]};var ni={time:null,delay:0,duration:250,ease:function(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}};function ii(t,e){for(var r;!(r=t.__transition)||!(r=r[e]);)if(!(t=t.parentNode))throw new Error(`transition ${e} not found`);return r}or.prototype.interrupt=function(t){return this.each(function(){!function(t,e){var r,n,i,o=t.__transition,a=!0;if(o){for(i in e=null==e?null:e+"",o)(r=o[i]).name===e?(n=r.state>2&&r.state<5,r.state=6,r.timer.stop(),r.on.call(n?"interrupt":"cancel",t,t.__data__,r.index,r.group),delete o[i]):a=!1;a&&delete t.__transition}}(this,t)})},or.prototype.transition=function(t){var e,r;t instanceof Qn?(e=t._id,t=t._name):(e=ti(),(r=ni).time=wn(),t=null==t?null:t+"");for(var n=this._groups,i=n.length,o=0;o<i;++o)for(var a,s=n[o],c=s.length,l=0;l<c;++l)(a=s[l])&&Mn(a,t,e,l,s,r||ii(a,e));return new Qn(n,this._parents,t,e)};const oi=Math.PI,ai=2*oi,si=1e-6,ci=ai-si;function li(t){this._+=t[0];for(let e=1,r=t.length;e<r;++e)this._+=arguments[e]+t[e]}class di{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=null==t?li:function(t){let e=Math.floor(t);if(!(e>=0))throw new Error(`invalid digits: ${t}`);if(e>15)return li;const r=10**e;return function(t){this._+=t[0];for(let e=1,n=t.length;e<n;++e)this._+=Math.round(arguments[e]*r)/r+t[e]}}(t)}moveTo(t,e){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+e}`}closePath(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,e){this._append`L${this._x1=+t},${this._y1=+e}`}quadraticCurveTo(t,e,r,n){this._append`Q${+t},${+e},${this._x1=+r},${this._y1=+n}`}bezierCurveTo(t,e,r,n,i,o){this._append`C${+t},${+e},${+r},${+n},${this._x1=+i},${this._y1=+o}`}arcTo(t,e,r,n,i){if(t=+t,e=+e,r=+r,n=+n,(i=+i)<0)throw new Error(`negative radius: ${i}`);let o=this._x1,a=this._y1,s=r-t,c=n-e,l=o-t,d=a-e,h=l*l+d*d;if(null===this._x1)this._append`M${this._x1=t},${this._y1=e}`;else if(h>si)if(Math.abs(d*s-c*l)>si&&i){let u=r-o,p=n-a,f=s*s+c*c,_=u*u+p*p,m=Math.sqrt(f),g=Math.sqrt(h),v=i*Math.tan((oi-Math.acos((f+h-_)/(2*m*g)))/2),y=v/g,w=v/m;Math.abs(y-1)>si&&this._append`L${t+y*l},${e+y*d}`,this._append`A${i},${i},0,0,${+(d*u>l*p)},${this._x1=t+w*s},${this._y1=e+w*c}`}else this._append`L${this._x1=t},${this._y1=e}`;else;}arc(t,e,r,n,i,o){if(t=+t,e=+e,o=!!o,(r=+r)<0)throw new Error(`negative radius: ${r}`);let a=r*Math.cos(n),s=r*Math.sin(n),c=t+a,l=e+s,d=1^o,h=o?n-i:i-n;null===this._x1?this._append`M${c},${l}`:(Math.abs(this._x1-c)>si||Math.abs(this._y1-l)>si)&&this._append`L${c},${l}`,r&&(h<0&&(h=h%ai+ai),h>ci?this._append`A${r},${r},0,1,${d},${t-a},${e-s}A${r},${r},0,1,${d},${this._x1=c},${this._y1=l}`:h>si&&this._append`A${r},${r},0,${+(h>=oi)},${d},${this._x1=t+r*Math.cos(i)},${this._y1=e+r*Math.sin(i)}`)}rect(t,e,r,n){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+e}h${r=+r}v${+n}h${-r}Z`}toString(){return this._}}function hi(t,e){if(!isFinite(t)||0===t)return null;var r=(t=e?t.toExponential(e-1):t.toExponential()).indexOf("e"),n=t.slice(0,r);return[n.length>1?n[0]+n.slice(2):n,+t.slice(r+1)]}function ui(t){return(t=hi(Math.abs(t)))?t[1]:NaN}var pi,fi=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function _i(t){if(!(e=fi.exec(t)))throw new Error("invalid format: "+t);var e;return new mi({fill:e[1],align:e[2],sign:e[3],symbol:e[4],zero:e[5],width:e[6],comma:e[7],precision:e[8]&&e[8].slice(1),trim:e[9],type:e[10]})}function mi(t){this.fill=void 0===t.fill?" ":t.fill+"",this.align=void 0===t.align?">":t.align+"",this.sign=void 0===t.sign?"-":t.sign+"",this.symbol=void 0===t.symbol?"":t.symbol+"",this.zero=!!t.zero,this.width=void 0===t.width?void 0:+t.width,this.comma=!!t.comma,this.precision=void 0===t.precision?void 0:+t.precision,this.trim=!!t.trim,this.type=void 0===t.type?"":t.type+""}function gi(t,e){var r=hi(t,e);if(!r)return t+"";var n=r[0],i=r[1];return i<0?"0."+new Array(-i).join("0")+n:n.length>i+1?n.slice(0,i+1)+"."+n.slice(i+1):n+new Array(i-n.length+2).join("0")}_i.prototype=mi.prototype,mi.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(void 0===this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(void 0===this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type};var vi={"%":(t,e)=>(100*t).toFixed(e),b:t=>Math.round(t).toString(2),c:t=>t+"",d:function(t){return Math.abs(t=Math.round(t))>=1e21?t.toLocaleString("en").replace(/,/g,""):t.toString(10)},e:(t,e)=>t.toExponential(e),f:(t,e)=>t.toFixed(e),g:(t,e)=>t.toPrecision(e),o:t=>Math.round(t).toString(8),p:(t,e)=>gi(100*t,e),r:gi,s:function(t,e){var r=hi(t,e);if(!r)return pi=void 0,t.toPrecision(e);var n=r[0],i=r[1],o=i-(pi=3*Math.max(-8,Math.min(8,Math.floor(i/3))))+1,a=n.length;return o===a?n:o>a?n+new Array(o-a+1).join("0"):o>0?n.slice(0,o)+"."+n.slice(o):"0."+new Array(1-o).join("0")+hi(t,Math.max(0,e+o-1))[0]},X:t=>Math.round(t).toString(16).toUpperCase(),x:t=>Math.round(t).toString(16)};function yi(t){return t}var wi,bi,xi,ki=Array.prototype.map,$i=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function Si(t){var e,r,n=void 0===t.grouping||void 0===t.thousands?yi:(e=ki.call(t.grouping,Number),r=t.thousands+"",function(t,n){for(var i=t.length,o=[],a=0,s=e[0],c=0;i>0&&s>0&&(c+s+1>n&&(s=Math.max(1,n-c)),o.push(t.substring(i-=s,i+s)),!((c+=s+1)>n));)s=e[a=(a+1)%e.length];return o.reverse().join(r)}),i=void 0===t.currency?"":t.currency[0]+"",o=void 0===t.currency?"":t.currency[1]+"",a=void 0===t.decimal?".":t.decimal+"",s=void 0===t.numerals?yi:function(t){return function(e){return e.replace(/[0-9]/g,function(e){return t[+e]})}}(ki.call(t.numerals,String)),c=void 0===t.percent?"%":t.percent+"",l=void 0===t.minus?"−":t.minus+"",d=void 0===t.nan?"NaN":t.nan+"";function h(t,e){var r=(t=_i(t)).fill,h=t.align,u=t.sign,p=t.symbol,f=t.zero,_=t.width,m=t.comma,g=t.precision,v=t.trim,y=t.type;"n"===y?(m=!0,y="g"):vi[y]||(void 0===g&&(g=12),v=!0,y="g"),(f||"0"===r&&"="===h)&&(f=!0,r="0",h="=");var w=(e&&void 0!==e.prefix?e.prefix:"")+("$"===p?i:"#"===p&&/[boxX]/.test(y)?"0"+y.toLowerCase():""),b=("$"===p?o:/[%p]/.test(y)?c:"")+(e&&void 0!==e.suffix?e.suffix:""),x=vi[y],k=/[defgprs%]/.test(y);function $(t){var e,i,o,c=w,p=b;if("c"===y)p=x(t)+p,t="";else{var $=(t=+t)<0||1/t<0;if(t=isNaN(t)?d:x(Math.abs(t),g),v&&(t=function(t){t:for(var e,r=t.length,n=1,i=-1;n<r;++n)switch(t[n]){case".":i=e=n;break;case"0":0===i&&(i=n),e=n;break;default:if(!+t[n])break t;i>0&&(i=0)}return i>0?t.slice(0,i)+t.slice(e+1):t}(t)),$&&0===+t&&"+"!==u&&($=!1),c=($?"("===u?u:l:"-"===u||"("===u?"":u)+c,p=("s"!==y||isNaN(t)||void 0===pi?"":$i[8+pi/3])+p+($&&"("===u?")":""),k)for(e=-1,i=t.length;++e<i;)if(48>(o=t.charCodeAt(e))||o>57){p=(46===o?a+t.slice(e+1):t.slice(e))+p,t=t.slice(0,e);break}}m&&!f&&(t=n(t,1/0));var S=c.length+t.length+p.length,E=S<_?new Array(_-S+1).join(r):"";switch(m&&f&&(t=n(E+t,E.length?_-p.length:1/0),E=""),h){case"<":t=c+t+p+E;break;case"=":t=c+E+t+p;break;case"^":t=E.slice(0,S=E.length>>1)+c+t+p+E.slice(S);break;default:t=E+c+t+p}return s(t)}return g=void 0===g?6:/[gprs]/.test(y)?Math.max(1,Math.min(21,g)):Math.max(0,Math.min(20,g)),$.toString=function(){return t+""},$}return{format:h,formatPrefix:function(t,e){var r=3*Math.max(-8,Math.min(8,Math.floor(ui(e)/3))),n=Math.pow(10,-r),i=h(((t=_i(t)).type="f",t),{suffix:$i[8+r/3]});return function(t){return i(n*t)}}}}function Ei(t,e){switch(arguments.length){case 0:break;case 1:this.range(t);break;default:this.range(e).domain(t)}return this}wi=Si({thousands:",",grouping:[3],currency:["$",""]}),bi=wi.format,xi=wi.formatPrefix;const Ci=Symbol("implicit");function Di(){var t=new St,e=[],r=[],n=Ci;function i(i){let o=t.get(i);if(void 0===o){if(n!==Ci)return n;t.set(i,o=e.push(i)-1)}return r[o%r.length]}return i.domain=function(r){if(!arguments.length)return e.slice();e=[],t=new St;for(const n of r)t.has(n)||t.set(n,e.push(n)-1);return i},i.range=function(t){return arguments.length?(r=Array.from(t),i):r.slice()},i.unknown=function(t){return arguments.length?(n=t,i):n},i.copy=function(){return Di(e,r).unknown(n)},Ei.apply(i,arguments),i}function Ai(){var t,e,r=Di().unknown(void 0),n=r.domain,i=r.range,o=0,a=1,s=!1,c=0,l=0,d=.5;function h(){var r=n().length,h=a<o,u=h?a:o,p=h?o:a;t=(p-u)/Math.max(1,r-c+2*l),s&&(t=Math.floor(t)),u+=(p-u-t*(r-c))*d,e=t*(1-c),s&&(u=Math.round(u),e=Math.round(e));var f=function(t,e,r){t=+t,e=+e,r=(i=arguments.length)<2?(e=t,t=0,1):i<3?1:+r;for(var n=-1,i=0|Math.max(0,Math.ceil((e-t)/r)),o=new Array(i);++n<i;)o[n]=t+n*r;return o}(r).map(function(e){return u+t*e});return i(h?f.reverse():f)}return delete r.unknown,r.domain=function(t){return arguments.length?(n(t),h()):n()},r.range=function(t){return arguments.length?([o,a]=t,o=+o,a=+a,h()):[o,a]},r.rangeRound=function(t){return[o,a]=t,o=+o,a=+a,s=!0,h()},r.bandwidth=function(){return e},r.step=function(){return t},r.round=function(t){return arguments.length?(s=!!t,h()):s},r.padding=function(t){return arguments.length?(c=Math.min(1,l=+t),h()):c},r.paddingInner=function(t){return arguments.length?(c=Math.min(1,t),h()):c},r.paddingOuter=function(t){return arguments.length?(l=+t,h()):l},r.align=function(t){return arguments.length?(d=Math.max(0,Math.min(1,t)),h()):d},r.copy=function(){return Ai(n(),[o,a]).round(s).paddingInner(c).paddingOuter(l).align(d)},Ei.apply(h(),arguments)}function Mi(t){return+t}var Pi=[0,1];function Ti(t){return t}function Ni(t,e){return(e-=t=+t)?function(r){return(r-t)/e}:function(t){return function(){return t}}(isNaN(e)?NaN:.5)}function Oi(t,e,r){var n=t[0],i=t[1],o=e[0],a=e[1];return i<n?(n=Ni(i,n),o=r(a,o)):(n=Ni(n,i),o=r(o,a)),function(t){return o(n(t))}}function Ri(t,e,r){var n=Math.min(t.length,e.length)-1,i=new Array(n),o=new Array(n),a=-1;for(t[n]<t[0]&&(t=t.slice().reverse(),e=e.slice().reverse());++a<n;)i[a]=Ni(t[a],t[a+1]),o[a]=r(e[a],e[a+1]);return function(e){var r=$t(t,e,1,n)-1;return o[r](i[r](e))}}function Fi(){var t,e,r,n,i,o,a=Pi,s=Pi,c=tn,l=Ti;function d(){var t=Math.min(a.length,s.length);return l!==Ti&&(l=function(t,e){var r;return t>e&&(r=t,t=e,e=r),function(r){return Math.max(t,Math.min(e,r))}}(a[0],a[t-1])),n=t>2?Ri:Oi,i=o=null,h}function h(e){return null==e||isNaN(e=+e)?r:(i||(i=n(a.map(t),s,c)))(t(l(e)))}return h.invert=function(r){return l(e((o||(o=n(s,a.map(t),Jr)))(r)))},h.domain=function(t){return arguments.length?(a=Array.from(t,Mi),d()):a.slice()},h.range=function(t){return arguments.length?(s=Array.from(t),d()):s.slice()},h.rangeRound=function(t){return s=Array.from(t),c=en,d()},h.clamp=function(t){return arguments.length?(l=!!t||Ti,d()):l!==Ti},h.interpolate=function(t){return arguments.length?(c=t,d()):c},h.unknown=function(t){return arguments.length?(r=t,h):r},function(r,n){return t=r,e=n,d()}}function zi(t,e,r,n){var i,o=function(t,e,r){r=+r;const n=(e=+e)<(t=+t),i=n?Tt(e,t,r):Tt(t,e,r);return(n?-1:1)*(i<0?1/-i:i)}(t,e,r);switch((n=_i(null==n?",f":n)).type){case"s":var a=Math.max(Math.abs(t),Math.abs(e));return null!=n.precision||isNaN(i=function(t,e){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(ui(e)/3)))-ui(Math.abs(t)))}(o,a))||(n.precision=i),xi(n,a);case"":case"e":case"g":case"p":case"r":null!=n.precision||isNaN(i=function(t,e){return t=Math.abs(t),e=Math.abs(e)-t,Math.max(0,ui(e)-ui(t))+1}(o,Math.max(Math.abs(t),Math.abs(e))))||(n.precision=i-("e"===n.type));break;case"f":case"%":null!=n.precision||isNaN(i=function(t){return Math.max(0,-ui(Math.abs(t)))}(o))||(n.precision=i-2*("%"===n.type))}return bi(n)}function Hi(t){var e=t.domain;return t.ticks=function(t){var r=e();return function(t,e,r){if(!((r=+r)>0))return[];if((t=+t)===(e=+e))return[t];const n=e<t,[i,o,a]=n?Pt(e,t,r):Pt(t,e,r);if(!(o>=i))return[];const s=o-i+1,c=new Array(s);if(n)if(a<0)for(let t=0;t<s;++t)c[t]=(o-t)/-a;else for(let t=0;t<s;++t)c[t]=(o-t)*a;else if(a<0)for(let t=0;t<s;++t)c[t]=(i+t)/-a;else for(let t=0;t<s;++t)c[t]=(i+t)*a;return c}(r[0],r[r.length-1],null==t?10:t)},t.tickFormat=function(t,r){var n=e();return zi(n[0],n[n.length-1],null==t?10:t,r)},t.nice=function(r){null==r&&(r=10);var n,i,o=e(),a=0,s=o.length-1,c=o[a],l=o[s],d=10;for(l<c&&(i=c,c=l,l=i,i=a,a=s,s=i);d-- >0;){if((i=Tt(c,l,r))===n)return o[a]=c,o[s]=l,e(o);if(i>0)c=Math.floor(c/i)*i,l=Math.ceil(l/i)*i;else{if(!(i<0))break;c=Math.ceil(c*i)/i,l=Math.floor(l*i)/i}n=i}return t},t}function Ii(){var t=Fi()(Ti,Ti);return t.copy=function(){return e=t,Ii().domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());var e},Ei.apply(t,arguments),Hi(t)}function Li(t){return function(){return t}}function ji(t){let e=3;return t.digits=function(r){if(!arguments.length)return e;if(null==r)e=null;else{const t=Math.floor(r);if(!(t>=0))throw new RangeError(`invalid digits: ${r}`);e=t}return t},()=>new di(e)}function Vi(t){return"object"==typeof t&&"length"in t?t:Array.from(t)}function Ui(t){this._context=t}function Wi(t){return new Ui(t)}function Yi(t){return t[0]}function qi(t){return t[1]}function Bi(t,e){var r=Li(!0),n=null,i=Wi,o=null,a=ji(s);function s(s){var c,l,d,h=(s=Vi(s)).length,u=!1;for(null==n&&(o=i(d=a())),c=0;c<=h;++c)!(c<h&&r(l=s[c],c,s))===u&&((u=!u)?o.lineStart():o.lineEnd()),u&&o.point(+t(l,c,s),+e(l,c,s));if(d)return o=null,d+""||null}return t="function"==typeof t?t:void 0===t?Yi:Li(t),e="function"==typeof e?e:void 0===e?qi:Li(e),s.x=function(e){return arguments.length?(t="function"==typeof e?e:Li(+e),s):t},s.y=function(t){return arguments.length?(e="function"==typeof t?t:Li(+t),s):e},s.defined=function(t){return arguments.length?(r="function"==typeof t?t:Li(!!t),s):r},s.curve=function(t){return arguments.length?(i=t,null!=n&&(o=i(n)),s):i},s.context=function(t){return arguments.length?(null==t?n=o=null:o=i(n=t),s):n},s}function Xi(t,e,r){var n=null,i=Li(!0),o=null,a=Wi,s=null,c=ji(l);function l(l){var d,h,u,p,f,_=(l=Vi(l)).length,m=!1,g=new Array(_),v=new Array(_);for(null==o&&(s=a(f=c())),d=0;d<=_;++d){if(!(d<_&&i(p=l[d],d,l))===m)if(m=!m)h=d,s.areaStart(),s.lineStart();else{for(s.lineEnd(),s.lineStart(),u=d-1;u>=h;--u)s.point(g[u],v[u]);s.lineEnd(),s.areaEnd()}m&&(g[d]=+t(p,d,l),v[d]=+e(p,d,l),s.point(n?+n(p,d,l):g[d],r?+r(p,d,l):v[d]))}if(f)return s=null,f+""||null}function d(){return Bi().defined(i).curve(a).context(o)}return t="function"==typeof t?t:void 0===t?Yi:Li(+t),e="function"==typeof e?e:Li(void 0===e?0:+e),r="function"==typeof r?r:void 0===r?qi:Li(+r),l.x=function(e){return arguments.length?(t="function"==typeof e?e:Li(+e),n=null,l):t},l.x0=function(e){return arguments.length?(t="function"==typeof e?e:Li(+e),l):t},l.x1=function(t){return arguments.length?(n=null==t?null:"function"==typeof t?t:Li(+t),l):n},l.y=function(t){return arguments.length?(e="function"==typeof t?t:Li(+t),r=null,l):e},l.y0=function(t){return arguments.length?(e="function"==typeof t?t:Li(+t),l):e},l.y1=function(t){return arguments.length?(r=null==t?null:"function"==typeof t?t:Li(+t),l):r},l.lineX0=l.lineY0=function(){return d().x(t).y(e)},l.lineY1=function(){return d().x(t).y(r)},l.lineX1=function(){return d().x(n).y(e)},l.defined=function(t){return arguments.length?(i="function"==typeof t?t:Li(!!t),l):i},l.curve=function(t){return arguments.length?(a=t,null!=o&&(s=a(o)),l):a},l.context=function(t){return arguments.length?(null==t?o=s=null:s=a(o=t),l):o},l}function Ji(t){return t<0?-1:1}function Gi(t,e,r){var n=t._x1-t._x0,i=e-t._x1,o=(t._y1-t._y0)/(n||i<0&&-0),a=(r-t._y1)/(i||n<0&&-0),s=(o*i+a*n)/(n+i);return(Ji(o)+Ji(a))*Math.min(Math.abs(o),Math.abs(a),.5*Math.abs(s))||0}function Zi(t,e){var r=t._x1-t._x0;return r?(3*(t._y1-t._y0)/r-e)/2:e}function Ki(t,e,r){var n=t._x0,i=t._y0,o=t._x1,a=t._y1,s=(o-n)/3;t._context.bezierCurveTo(n+s,i+s*e,o-s,a-s*r,o,a)}function Qi(t){this._context=t}function to(t){return new Qi(t)}function eo(t,e){if((i=t.length)>1)for(var r,n,i,o=1,a=t[e[0]],s=a.length;o<i;++o)for(n=a,a=t[e[o]],r=0;r<s;++r)a[r][1]+=a[r][0]=isNaN(n[r][1])?n[r][0]:n[r][1]}function ro(t){for(var e=t.length,r=new Array(e);--e>=0;)r[e]=e;return r}function no(t,e){return t[e]}function io(t){const e=[];return e.key=t,e}function oo(t,e,r){this.k=t,this.x=e,this.y=r}function ao(t,e,r,n,i){const{width:o,height:a,padding:s}=e,c=o-s.left-s.right,l=a-s.top-s.bottom,d=n-r||1,h=t.length>1?c/(t.length-1):0;return t.map((t,e)=>({x:s.left+e*h,y:s.top+l-(t-r)/d*l,value:t,label:i?.[e],timestamp:i?.[e]}))}function so(t,e){try{const r=new Date(t);if("day"===e)return r.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",hour12:!1});if("week"===e){return`Week ${function(t){const e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate())),r=e.getUTCDay()||7;e.setUTCDate(e.getUTCDate()+4-r);const n=new Date(Date.UTC(e.getUTCFullYear(),0,1));return Math.ceil(((e.getTime()-n.getTime())/864e5+1)/7)}(ho(r))}`}if("month"===e){const t=["ENE","FEB","MAR","ABR","MAY","JUN","JUL","AGO","SEP","OCT","NOV","DIC"],e=r.getDate();return`${e} ${t[r.getMonth()]}`}if("year"===e){return["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"][r.getMonth()]}return["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"][r.getMonth()]}catch{return t.split("T")[0]}}function co(t,e){if(0===t.length||0===e.length)return{values:[],timestamps:[]};const r=new Map;for(let n=0;n<t.length;n++){const i=ho(new Date(e[n])),o=i.toISOString().split("T")[0];r.has(o)||r.set(o,{sum:0,count:0,weekStart:i});const a=r.get(o);a.sum+=t[n],a.count+=1}const n=Array.from(r.entries()).sort((t,e)=>t[1].weekStart.getTime()-e[1].weekStart.getTime());return{values:n.map(t=>t[1].sum),timestamps:n.map(t=>t[1].weekStart.toISOString())}}function lo(t,e){if(0===t.length||0===e.length)return{values:[],timestamps:[]};const r=new Map;for(let n=0;n<t.length;n++){const i=new Date(e[n]),o=new Date(i.getFullYear(),i.getMonth(),1),a=`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}`;r.has(a)||r.set(a,{sum:0,count:0,monthStart:o});const s=r.get(a);s.sum+=t[n],s.count+=1}const n=Array.from(r.entries()).sort((t,e)=>t[1].monthStart.getTime()-e[1].monthStart.getTime());return{values:n.map(t=>t[1].sum),timestamps:n.map(t=>t[1].monthStart.toISOString())}}function ho(t){const e=new Date(t),r=e.getDay(),n=e.getDate()-r+(0===r?-6:1),i=new Date(e.setDate(n));return i.setHours(0,0,0,0),i}async function uo(t,e,r,n,i){const{width:o,height:a,padding:s}=e,c=o-s.left-s.right,l=a-s.top-s.bottom;t.selectAll("g.chart-content, g.axis, g.grid, path.area-stack").remove();const d=t.append("g").attr("class","chart-content").attr("transform",`translate(${s.left}, ${s.top})`),h=r.timestamps||[],u=r.layers;if(0===u.length||0===h.length)return;let p;const f=n.period||"month";p="month"===f||"week"===f?Ai().domain(h).range([0,c]).padding(.1):Ii().domain([0,h.length-1]).range([0,c]);const _=Ii().domain([0,1.1*r.maxValue]).range([l,0]);i.setXScale(p),i.setYScale(_);const m=d.append("g").attr("class","grid"),g=_.ticks(5);m.selectAll("line.grid-line").data(g).join("line").attr("class","grid-line").attr("x1",0).attr("x2",c).attr("y1",t=>_(t)).attr("y2",t=>_(t)).attr("stroke",e.colors.grid).attr("stroke-width",1).attr("opacity",.2);const v=t.append("g").attr("class","axis axis-x").attr("transform",`translate(${s.left}, ${a-s.bottom})`),y=t.append("g").attr("class","axis axis-y").attr("transform",`translate(${s.left}, ${s.top})`);if("month"===f||"week"===f){const t=jt(p).tickFormat(t=>so(t,f));"month"===f&&t.tickValues(h.filter((t,e)=>new Date(t).getDate()%2==1)),v.call(t)}else{const t=jt(p).ticks(Math.min(h.length,12)).tickFormat((t,e)=>{const r=Math.round(t);return r>=0&&r<h.length?so(h[r],f):""});v.call(t)}v.selectAll("text").attr("fill",e.colors.text).attr("font-size","13px").attr("font-family",e.fontFamily||"Roboto, sans-serif").attr("opacity",.9),v.selectAll("line, path").attr("stroke",e.colors.axis).attr("opacity",.2);const w=Vt(_).ticks(5).tickFormat(t=>`${t} kWh`);y.call(w).selectAll("text").attr("fill",e.colors.text).attr("font-size","13px").attr("font-family",e.fontFamily||"Roboto, sans-serif").attr("opacity",.9),y.selectAll("line, path").attr("stroke",e.colors.axis).attr("opacity",.2);const b=Array.from({length:h.length},(t,e)=>{const r={};return u.forEach((t,n)=>{r[n.toString()]=t.data[e]||0}),r}),x=function(){var t=Li([]),e=ro,r=eo,n=no;function i(i){var o,a,s=Array.from(t.apply(this,arguments),io),c=s.length,l=-1;for(const t of i)for(o=0,++l;o<c;++o)(s[o][l]=[0,+n(t,s[o].key,l,i)]).data=t;for(o=0,a=Vi(e(s));o<c;++o)s[a[o]].index=o;return r(s,a),s}return i.keys=function(e){return arguments.length?(t="function"==typeof e?e:Li(Array.from(e)),i):t},i.value=function(t){return arguments.length?(n="function"==typeof t?t:Li(+t),i):n},i.order=function(t){return arguments.length?(e=null==t?ro:"function"==typeof t?t:Li(Array.from(t)),i):e},i.offset=function(t){return arguments.length?(r=null==t?eo:t,i):r},i}().keys(u.map((t,e)=>e.toString())).value((t,e)=>t[e]||0).order(ro).offset(eo),k=x(b),$=Xi().x((t,e)=>{if("month"===f||"week"===f){const t=p,r=t(h[e]);return r?r+t.bandwidth()/2:0}return p(e)}).y0(t=>_(t[0])).y1(t=>_(t[1])).curve(to),S=d.append("g").attr("class","areas");k.forEach((e,r)=>{const n=u[r];n&&S.append("path").datum(e).attr("class",`area-stack layer-${r}`).attr("d",$).attr("fill",n.color).attr("fill-opacity",n.opacity||.7).attr("stroke","none").style("cursor","pointer").on("mouseenter",function(r,o){const[a]=sr(r,d.node());let s=0,c=1/0;if(e.forEach((t,e)=>{if(e<h.length){const t="month"===f||"week"===f?p(h[e])+p.bandwidth()/2:p(e),r=Math.abs(a-t);r<c&&(c=r,s=e)}}),s<h.length){const e={x:0,y:0,value:n.data[s],timestamp:h[s]};i.setHoveredPoint(e);const[o,a]=sr(r,t.node());i.showTooltip(o,a,e)}}).on("mouseleave",function(){i.setHoveredPoint(null),i.hideTooltip()}).on("mousemove",function(r,o){const[a]=sr(r,d.node());let s=0,c=1/0;if(e.forEach((t,e)=>{if(e<h.length){const t="month"===f||"week"===f?p(h[e])+p.bandwidth()/2:p(e),r=Math.abs(a-t);r<c&&(c=r,s=e)}}),s<h.length){const e={x:0,y:0,value:n.data[s],timestamp:h[s]},[o,a]=sr(r,t.node());i.showTooltip(o,a,e)}})});const E=n.animation;E?.enabled&&S.selectAll("path.area-stack").attr("opacity",0).transition().duration(E.duration||800).delay((t,e)=>(E.delay||0)+100*e).ease(ri).attr("opacity",(t,e)=>u[e]?.opacity||.7)}Ui.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2;default:this._context.lineTo(t,e)}}},Qi.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:Ki(this,this._t0,Zi(this,this._t0))}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){var r=NaN;if(e=+e,(t=+t)!==this._x1||e!==this._y1){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2;break;case 2:this._point=3,Ki(this,Zi(this,r=Gi(this,t,e)),r);break;default:Ki(this,this._t0,r=Gi(this,t,e))}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=e,this._t0=r}}},Object.create(Qi.prototype).point=function(t,e){Qi.prototype.point.call(this,e,t)},oo.prototype={constructor:oo,scale:function(t){return 1===t?this:new oo(this.k*t,this.x,this.y)},translate:function(t,e){return 0===t&0===e?this:new oo(this.k,this.x+this.k*t,this.y+this.k*e)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}},oo.prototype;class po{constructor(t,e){this.xScale=null,this.yScale=null,this.hoveredPoint=null,this.tooltipElement=null,this.currentDataPoints=[],this.currentBarWidth=0,this._resizeTimeout=null,this._resizeObserver=null,this.container=t,this.config=e,this.chartId=`chart-${Math.random().toString(36).substring(2,9)}`,this.svg=ar(t).append("svg").attr("class","chart-svg").attr("width",e.width).attr("height",e.height).attr("viewBox",`0 0 ${e.width} ${e.height}`).attr("role","img").attr("aria-labelledby",`${this.chartId}-title`).attr("aria-live","polite").attr("tabindex","0").style("display","block").style("pointer-events","all");const r=e.language||"en";this.svg.append("title").attr("id",`${this.chartId}-title`).text(ft("chart.accessibility.title",r)),this._createTooltip(),this._addKeyboardSupport(),this._addTouchSupport(),this._addResizeSupport()}clear(){this.svg.selectAll("g.chart-content, g.axis, g.grid, path.bar, path.line, path.area, circle.point, g.areas").remove()}resize(t,e){this.config.width=t,this.config.height=e,this.svg.attr("width",t).attr("height",e).attr("viewBox",`0 0 ${t} ${e}`),this.currentDataPoints.length>0&&(this.xScale=null,this.yScale=null)}getComputedColor(t,e){if("undefined"==typeof window)return e;try{const r=this.container.getRootNode(),n=r instanceof ShadowRoot?r.host:document.documentElement,i=getComputedStyle(n);return i.getPropertyValue(t).trim()||e}catch{return e}}_createTooltip(){this.tooltipElement=this.svg.append("g").attr("class","chart-tooltip").style("display","none").style("pointer-events","none")}showTooltip(t,e,r){if(!this.tooltipElement)return;const n=r.value.toLocaleString("es-ES",{minimumFractionDigits:2,maximumFractionDigits:2}),i=r.timestamp?new Date(r.timestamp):null;let o="N/A";if(i){const t=["ENE","FEB","MAR","ABR","MAY","JUN","JUL","AGO","SEP","OCT","NOV","DIC"];o=`${i.getDate()} ${t[i.getMonth()]}`}const a=this.tooltipElement.selectAll("g.tooltip-content").data([r]).join("g").attr("class","tooltip-content").attr("transform",`translate(${t+15}, ${e+15})`);a.selectAll("rect.tooltip-bg").data([r]).join("rect").attr("class","tooltip-bg").attr("rx",8).attr("ry",8).attr("fill","rgba(40, 26, 61, 0.95)").attr("stroke","none"),a.selectAll("text.tooltip-value").data([r]).join("text").attr("class","tooltip-value").attr("x",12).attr("y",20).attr("fill","#ff69b4").attr("font-size","16px").attr("font-weight","600").attr("font-family","Roboto, sans-serif").text(`${n} kWh`),a.selectAll("text.tooltip-date").data([r]).join("text").attr("class","tooltip-date").attr("x",12).attr("y",38).attr("fill","#fff").attr("font-size","13px").attr("font-weight","500").attr("font-family","Roboto, sans-serif").text(o);const s=a.node();if(s&&"getBBox"in s){const t=s.getBBox();a.select("rect.tooltip-bg").attr("width",t.width+24).attr("height",t.height+16).attr("x",-12).attr("y",-8)}this.tooltipElement.style("display","block")}hideTooltip(){this.tooltipElement&&this.tooltipElement.style("display","none")}async renderBarChart(t,e){this.currentDataPoints=t.points,await async function(t,e,r,n,i){const{width:o,height:a,padding:s}=e,c=o-s.left-s.right,l=a-s.top-s.bottom;t.selectAll("g.chart-content, g.axis, g.grid, path.bar").remove();const d=t.append("g").attr("class","chart-content").attr("transform",`translate(${s.left}, ${s.top})`),h=r.points.map(t=>t.timestamp||""),u=r.points.map(t=>t.value);let p;const f=n.period||"month";p="month"===f||"week"===f?Ai().domain(h).range([0,c]).padding(.4):Ii().domain([0,h.length-1]).range([0,c]);const _=Ii().domain([0,1.1*r.maxValue]).range([l,0]);i.setXScale(p),i.setYScale(_);const m=n.barWidth||("month"===f||"week"===f?p.bandwidth():c/u.length*.6);i.setBarWidth(m);const g=d.append("g").attr("class","grid"),v=_.ticks(5);g.selectAll("line.grid-line").data(v).join("line").attr("class","grid-line").attr("x1",0).attr("x2",c).attr("y1",t=>_(t)).attr("y2",t=>_(t)).attr("stroke",e.colors.grid).attr("stroke-width",1).attr("opacity",.2);const y=t.append("g").attr("class","axis axis-x").attr("transform",`translate(${s.left}, ${a-s.bottom})`),w=t.append("g").attr("class","axis axis-y").attr("transform",`translate(${s.left}, ${s.top})`);if("month"===f||"week"===f){const t=jt(p).tickFormat(t=>so(t,f));"month"===f&&t.tickValues(h.filter((t,e)=>new Date(t).getDate()%2==1)),y.call(t)}else{const t=jt(p).ticks(Math.min(h.length,12)).tickFormat((t,e)=>{const r=Math.round(t);return r>=0&&r<h.length?so(h[r],f):""});y.call(t)}y.selectAll("text").attr("fill",e.colors.text).attr("font-size","13px").attr("font-family",e.fontFamily||"Roboto, sans-serif").attr("opacity",.9),y.selectAll("line, path").attr("stroke",e.colors.axis).attr("opacity",.2);const b=Vt(_).ticks(5).tickFormat(t=>`${t} kWh`);w.call(b).selectAll("text").attr("fill",e.colors.text).attr("font-size","13px").attr("font-family",e.fontFamily||"Roboto, sans-serif").attr("opacity",.9),w.selectAll("line, path").attr("stroke",e.colors.axis).attr("opacity",.2);const x=e.colors.gradient?.enabled??!1;if(x&&e.colors.gradient){const r=t.select("defs").empty()?t.append("defs"):t.select("defs");r.select("#octopus-pink-gradient").remove();const n=e.colors.gradient,i=n.id||"octopus-pink-gradient",o=n.stops||[{offset:"0%",color:"#F050F8"},{offset:"100%",color:"#FA98FF"}],a=r.append("linearGradient").attr("id",i).attr("x1",n.x1||"0%").attr("y1",n.y1||"0%").attr("x2",n.x2||"0%").attr("y2",n.y2||"100%");o.forEach(t=>{a.append("stop").attr("offset",t.offset).attr("stop-color",t.color)})}const k=d.append("g").attr("class","bars"),$=(t,e,r,n,i)=>{const o=e+n;return`\n      M ${t+i},${e}\n      L ${t+r-i},${e}\n      Q ${t+r},${e} ${t+r},${e+i}\n      L ${t+r},${o}\n      L ${t},${o}\n      L ${t},${e+i}\n      Q ${t},${e} ${t+i},${e}\n      Z\n    `},S=k.selectAll("path.bar").data(r.points);S.enter().append("path").attr("class","bar").merge(S).attr("d",(t,e)=>{const r="month"===f||"week"===f?p(t.timestamp||"")||0:(p(e)||0)-m/2,n=_(t.value),i="month"===f||"week"===f?p.bandwidth():m;return $(r,n,i,l-n,8)}).attr("fill",t=>i.hoveredPoint&&i.hoveredPoint.timestamp===t.timestamp&&i.hoveredPoint.value===t.value?e.colors.hover||"#ff69b4":x?`url(#${e.colors.gradient?.id||"octopus-pink-gradient"})`:e.colors.primary).style("cursor","pointer").on("mouseenter",function(r,n){i.setHoveredPoint(n),ar(this).transition().duration(200).attr("fill",e.colors.hover||"#ff69b4");const[o,a]=sr(r,t.node());i.showTooltip(o,a,n)}).on("mouseleave",function(){i.setHoveredPoint(null),ar(this).transition().duration(150).attr("fill",e.colors.primary),i.hideTooltip()}).on("mousemove",function(e,r){const[n,o]=sr(e,t.node());i.showTooltip(n,o,r)}),S.exit().remove();const E=n.animation;if(E?.enabled){const t=E.duration||2e3;S.attr("d",(t,e)=>{const r="month"===f||"week"===f?p(t.timestamp||"")||0:(p(e)||0)-m/2,n=l,i="month"===f||"week"===f?p.bandwidth():m;return $(r,n,i,0,8)}).transition().duration(t).delay((t,e)=>(E.delay||0)+50*e).ease(ri).attr("d",(t,e)=>{const r="month"===f||"week"===f?p(t.timestamp||"")||0:(p(e)||0)-m/2,n=_(t.value),i="month"===f||"week"===f?p.bandwidth():m;return $(r,n,i,l-n,8)})}}(this.svg,this.config,t,e||{},{xScale:this.xScale,yScale:this.yScale,setXScale:t=>{this.xScale=t},setYScale:t=>{this.yScale=t},hoveredPoint:this.hoveredPoint,setHoveredPoint:t=>{this.hoveredPoint=t},showTooltip:(t,e,r)=>this.showTooltip(t,e,r),hideTooltip:()=>this.hideTooltip(),setBarWidth:t=>{this.currentBarWidth=t}})}async renderLineChart(t,e){this.currentDataPoints=t.points,await async function(t,e,r,n,i){const{width:o,height:a,padding:s}=e,c=o-s.left-s.right,l=a-s.top-s.bottom;t.selectAll("g.chart-content, g.axis, g.grid, path.line, path.area, circle.point").remove();const d=t.append("g").attr("class","chart-content").attr("transform",`translate(${s.left}, ${s.top})`),h=r.points.map(t=>t.timestamp||""),u=r.points.map(t=>t.value);let p;const f=n.period||"month";p="month"===f||"week"===f?Ai().domain(h).range([0,c]).padding(.1):Ii().domain([0,h.length-1]).range([0,c]);const _=Ii().domain([0,1.1*r.maxValue]).range([l,0]);i.setXScale(p),i.setYScale(_);const m=d.append("g").attr("class","grid"),g=_.ticks(5);m.selectAll("line.grid-line").data(g).join("line").attr("class","grid-line").attr("x1",0).attr("x2",c).attr("y1",t=>_(t)).attr("y2",t=>_(t)).attr("stroke",e.colors.grid).attr("stroke-width",1).attr("opacity",.2);const v=t.append("g").attr("class","axis axis-x").attr("transform",`translate(${s.left}, ${a-s.bottom})`),y=t.append("g").attr("class","axis axis-y").attr("transform",`translate(${s.left}, ${s.top})`);if("month"===f||"week"===f){const t=jt(p).tickFormat(t=>so(t,f));"month"===f&&t.tickValues(h.filter((t,e)=>new Date(t).getDate()%2==1)),v.call(t)}else{const t=jt(p).ticks(Math.min(h.length,12)).tickFormat((t,e)=>{const r=Math.round(t);return r>=0&&r<h.length?so(h[r],f):""});v.call(t)}v.selectAll("text").attr("fill",e.colors.text).attr("font-size","13px").attr("font-family",e.fontFamily||"Roboto, sans-serif").attr("opacity",.9),v.selectAll("line, path").attr("stroke",e.colors.axis).attr("opacity",.2);const w=Vt(_).ticks(5).tickFormat(t=>`${t} kWh`);y.call(w).selectAll("text").attr("fill",e.colors.text).attr("font-size","13px").attr("font-family",e.fontFamily||"Roboto, sans-serif").attr("opacity",.9),y.selectAll("line, path").attr("stroke",e.colors.axis).attr("opacity",.2);const b=Bi().x((t,e)=>{if("month"===f||"week"===f){const e=p,r=e(t.timestamp||"");return r?r+e.bandwidth()/2:0}return p(e)}).y(t=>_(t.value)).curve(to);if(n.showArea){const t=Xi().x((t,e)=>{if("month"===f||"week"===f){const e=p,r=e(t.timestamp||"");return r?r+e.bandwidth()/2:0}return p(e)}).y0(l).y1(t=>_(t.value)).curve(to);d.append("path").datum(r.points).attr("class","area").attr("d",t).attr("fill",e.colors.primary).attr("fill-opacity",.2).attr("stroke","none")}const x=d.append("path").datum(r.points).attr("class","line").attr("d",b).attr("fill","none").attr("stroke",e.colors.primary).attr("stroke-width",2);if(n.showMovingAverage&&n.movingAverageDays){const t=function(t,e){if(e<=0||0===t.length)return t.map(()=>null);const r=[];for(let n=0;n<t.length;n++){if(n<e-1){r.push(null);continue}let i=0;for(let r=n-e+1;r<=n;r++)i+=t[r];r.push(i/e)}return r}(u,n.movingAverageDays),r=t.map((t,e)=>({x:0,y:0,value:t||0,timestamp:h[e]})),i=Bi().x((t,e)=>{if("month"===f||"week"===f){const e=p,r=e(t.timestamp||"");return r?r+e.bandwidth()/2:0}return p(e)}).y(t=>_(t.value)).curve(to);d.append("path").datum(r).attr("class","line moving-average").attr("d",i).attr("fill","none").attr("stroke",e.colors.accent).attr("stroke-width",2).attr("stroke-dasharray","5,5")}const k=d.append("g").attr("class","points").selectAll("circle.point").data(r.points);if(k.enter().append("circle").attr("class","point").merge(k).attr("cx",(t,e)=>{if("month"===f||"week"===f){const e=p,r=e(t.timestamp||"");return r?r+e.bandwidth()/2:0}return p(e)}).attr("cy",t=>_(t.value)).attr("r",t=>i.hoveredPoint&&i.hoveredPoint.timestamp===t.timestamp&&i.hoveredPoint.value===t.value?6:3).attr("fill",t=>i.hoveredPoint&&i.hoveredPoint.timestamp===t.timestamp&&i.hoveredPoint.value===t.value?e.colors.hover||"#ff69b4":e.colors.primary).attr("stroke","#fff").attr("stroke-width",2).style("cursor","pointer").on("mouseenter",function(r,n){i.setHoveredPoint(n),ar(this).transition().duration(150).attr("r",6).attr("fill",e.colors.hover||"#ff69b4");const[o,a]=sr(r,t.node());i.showTooltip(o,a,n)}).on("mouseleave",function(){i.setHoveredPoint(null),ar(this).transition().duration(200).attr("r",3).attr("fill",e.colors.primary),i.hideTooltip()}).on("mousemove",function(e,r){const[n,o]=sr(e,t.node());i.showTooltip(n,o,r)}),k.exit().remove(),n.animation?.enabled){const t=x.node()?.getTotalLength()||0;x.attr("stroke-dasharray",`${t} ${t}`).attr("stroke-dashoffset",t).transition().duration(n.animation.duration||2e3).ease(ri).attr("stroke-dashoffset",0)}}(this.svg,this.config,t,e||{},{xScale:this.xScale,yScale:this.yScale,setXScale:t=>{this.xScale=t},setYScale:t=>{this.yScale=t},hoveredPoint:this.hoveredPoint,setHoveredPoint:t=>{this.hoveredPoint=t},showTooltip:(t,e,r)=>this.showTooltip(t,e,r),hideTooltip:()=>this.hideTooltip()})}async renderStackedAreaChart(t,e){if(t.layers.length>0&&t.timestamps){const e=t.layers[0];this.currentDataPoints=e.data.map((e,r)=>({x:0,y:0,value:e,timestamp:t.timestamps?.[r]}))}await uo(this.svg,this.config,t,e||{},{xScale:this.xScale,yScale:this.yScale,setXScale:t=>{this.xScale=t},setYScale:t=>{this.yScale=t},hoveredPoint:this.hoveredPoint,setHoveredPoint:t=>{this.hoveredPoint=t},showTooltip:(t,e,r)=>this.showTooltip(t,e,r),hideTooltip:()=>this.hideTooltip()})}getSVG(){return this.svg}updateTitle(t,e){const r=this.config.language||"en",n="es"===r?"es-ES":"be"===r?"be-BY":"en-US",i=e.toLocaleString(n,{minimumFractionDigits:2,maximumFractionDigits:2});this.svg.select("title").text(function(t,e,r="en"){let n=ft(t,r);return Object.entries(e).forEach(([t,e])=>{n=n.replace(new RegExp(`\\{${t}\\}`,"g"),e)}),n}("chart.accessibility.title_with_data",{period:t,total:i},r))}_addKeyboardSupport(){this.svg.on("keydown",t=>{switch(t.key){case"ArrowLeft":t.preventDefault(),this.container.dispatchEvent(new CustomEvent("chart-navigate",{detail:{direction:"previous"}}));break;case"ArrowRight":t.preventDefault(),this.container.dispatchEvent(new CustomEvent("chart-navigate",{detail:{direction:"next"}}));break;case"Home":t.preventDefault(),this.container.dispatchEvent(new CustomEvent("chart-navigate",{detail:{direction:"first"}}));break;case"End":t.preventDefault(),this.container.dispatchEvent(new CustomEvent("chart-navigate",{detail:{direction:"last"}}))}})}_addTouchSupport(){if("undefined"==typeof window||!("ontouchstart"in window))return;let t=0,e=0,r=0;this.container.addEventListener("touchstart",n=>{1===n.touches.length&&(t=n.touches[0].clientX,e=n.touches[0].clientY,r=Date.now())},{passive:!0}),this.container.addEventListener("touchmove",n=>{if(1===n.touches.length){const i=n.touches[0].clientX-t,o=n.touches[0].clientY-e,a=Date.now()-r;if(Math.abs(i)>50&&Math.abs(o)<30&&a<300){n.preventDefault();const a=i>0?"previous":"next";this.container.dispatchEvent(new CustomEvent("chart-swipe",{detail:{direction:a,deltaX:i,deltaY:o}})),t=n.touches[0].clientX,e=n.touches[0].clientY,r=Date.now()}}}),this.container.addEventListener("touchend",()=>{t=0,e=0,r=0},{passive:!0})}_addResizeSupport(){"undefined"!=typeof window&&"undefined"!=typeof ResizeObserver&&(this._resizeObserver=new ResizeObserver(t=>{null!==this._resizeTimeout&&window.clearTimeout(this._resizeTimeout),this._resizeTimeout=window.setTimeout(()=>{for(const e of t){const{width:t,height:r}=e.contentRect;t===this.config.width&&r===this.config.height||(this.config.width=t,this.config.height=r,this.container.dispatchEvent(new CustomEvent("chart-resize",{detail:{width:t,height:r}})))}},250)}),this._resizeObserver.observe(this.container))}destroy(){this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=null),null!==this._resizeTimeout&&(window.clearTimeout(this._resizeTimeout),this._resizeTimeout=null)}}var fo=function(t,e,r,n){var i,o=arguments.length,a=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(o<3?i(a):o>3?i(e,r,a):i(e,r))||a);return o>3&&a&&Object.defineProperty(e,r,a),a};void 0!==st&&st.disableWarning&&st.disableWarning("change-in-update");class _o extends st{constructor(){super(...arguments),this._consumptionData=[],this._comparisonResult=null,this._tariffCosts=null,this._loading=!1,this._error=null,this._comparisonError=null,this._currentPeriod="week",this._currentDate=new Date,this._weekComparisonData=null,this._chartInstance=null,this._hasInitialData=!1,this._chartEventHandlers={},this._lastNavigationTime=0,this._navigationThrottleMs=300,this._isNavigating=!1}static get cardName(){return"Octopus Energy España Consumption"}_getComputedColor(t,e){if("undefined"!=typeof window&&this.shadowRoot)try{const r=this.shadowRoot.host||document.documentElement,n=getComputedStyle(r);return n.getPropertyValue(t).trim()||e}catch{return e}return e}setConfig(t){if(!t)throw new Error("Invalid configuration");if(!t.source_entry_id)throw new Error("Configuration incomplete. Please select your Octopus Energy tariff in the card editor.");const e={...t,view:t.view||"consumption"};this.config=e,e.default_period&&(this._currentPeriod=e.default_period)}getCardSize(){let t=1;this.config&&!1!==this.config.show_navigation&&(t+=1);const e=this.config?.view||"consumption";return this.config&&"tariff-comparison"===e&&(t+=1),t}connectedCallback(){super.connectedCallback(),this._validateConfig(),this._currentPeriod=this.config.default_period||"week",this._error||this._loadData(),this._setupChartNavigationListeners()}disconnectedCallback(){super.disconnectedCallback(),this._chartInstance&&(this._chartInstance.destroy(),this._chartInstance=null);const t=this.shadowRoot?.querySelector("#chart-container");t&&this._chartEventHandlers&&(this._chartEventHandlers.swipe&&t.removeEventListener("chart-swipe",this._chartEventHandlers.swipe),this._chartEventHandlers.navigate&&t.removeEventListener("chart-navigate",this._chartEventHandlers.navigate),this._chartEventHandlers.resize&&t.removeEventListener("chart-resize",this._chartEventHandlers.resize),this._chartEventHandlers={})}_setupChartNavigationListeners(){requestAnimationFrame(()=>{const t=this.shadowRoot?.querySelector("#chart-container");t&&(this._chartEventHandlers.swipe=t=>{const{direction:e}=t.detail;"next"===e?this._navigatePeriod("next"):"previous"===e&&this._navigatePeriod("prev")},this._chartEventHandlers.navigate=t=>{const{direction:e}=t.detail;switch(e){case"next":this._navigatePeriod("next");break;case"previous":this._navigatePeriod("prev");break;case"first":const t=new Date;t.setFullYear(t.getFullYear()-1),this._currentDate=t,this._loadData();break;case"last":this._currentDate=new Date,this._loadData()}},this._chartEventHandlers.resize=t=>{const{width:e,height:r}=t.detail;this._chartInstance&&(this._chartInstance.resize(e,r),this._renderD3Chart())},t.addEventListener("chart-swipe",this._chartEventHandlers.swipe),t.addEventListener("chart-navigate",this._chartEventHandlers.navigate),t.addEventListener("chart-resize",this._chartEventHandlers.resize))})}updated(t){if(super.updated(t),t.has("config")){const e=t.get("config");this._validateConfig(),void 0!==e&&e.source_entry_id!==this.config.source_entry_id&&(this._hasInitialData=!1),this.config.default_period&&this._currentPeriod!==this.config.default_period&&(this._currentPeriod=this.config.default_period),void 0!==e&&e!==this.config&&this._loadData()}if(t.has("hass")){const e=t.get("hass");void 0!==e&&this.hass,!this.hass||this._loading||this._isNavigating||this._error||0!==this._consumptionData.length||!this.config?.source_entry_id||this._loadData()}if((t.has("_currentPeriod")||t.has("_currentDate"))&&!this._loading&&!this._isNavigating&&this.hass&&this.config?.source_entry_id&&!this._error){const e=t.get("_currentPeriod"),r=t.get("_currentDate"),n=t.has("_currentPeriod")&&void 0!==e&&e!==this._currentPeriod,i=t.has("_currentDate")&&void 0!==r&&r.getTime()!==this._currentDate.getTime();!n&&!i||this._isNavigating||this._loadData()}(t.has("_consumptionData")||t.has("_tariffCosts")||t.has("config")&&this._consumptionData.length>0)&&this._renderD3Chart()}_validateConfig(){if(!this.config)return this._error="Card configuration is required",void(this._loading=!1);if(!this.config.source_entry_id)return this._error="Configuration incomplete. Please edit this card and select your Octopus Energy tariff.",void(this._loading=!1);this._error&&this.config.source_entry_id&&(this._error=null);"tariff-comparison"!==(this.config.view||"consumption")||this.config.tariff_entry_ids&&0!==this.config.tariff_entry_ids.length||yt.warn("Tariff comparison view is active but no tariff_entry_ids provided. Comparison will be disabled."),this.config.show_cost_on_chart&&!this.config.selected_tariff_for_cost&&yt.warn("show_cost_on_chart is enabled but selected_tariff_for_cost is not set. Cost display will be disabled.")}_createTimeoutPromise(t){return new Promise((e,r)=>{setTimeout(()=>r(new Error("Request timeout. The service call took too long to respond.")),t)})}async _callServiceWithTimeout(t,e,r,n=!0){yt.groupServiceCall(t,e);try{let i;if(yt.serviceCall(t,e,n),r&&yt.serviceData(r),n&&this.hass.callWS)try{i=await this._callServiceViaWebSocket(t,e,r)}catch(n){const o=n instanceof Error?n.message:String(n);yt.warn("⚠ WebSocket call failed, falling back to callService: ",o),i=await this._callServiceViaStandard(t,e,r)}else i=await this._callServiceViaStandard(t,e,r);return yt.serviceResponse(i),yt.groupEnd(),i}catch(r){throw yt.serviceError(r),yt.groupEnd(),this._handleServiceError(r,t,e)}}_handleServiceError(t,e,r){if(t instanceof Error)return t.message.includes("timeout")?new Error(`Service call timeout: ${e}.${r} took longer than ${_o.SERVICE_TIMEOUT}ms`):t.message.includes("Service not found")||t.message.includes("not available")?new Error(`Service ${e}.${r} is not available. Please ensure the Octopus Energy España integration is installed and configured.`):"service_validation_error"===t.code?this._handleValidationError(t):new Error(`Service call failed: ${e}.${r} - ${t.message}`);if(t&&"object"==typeof t){const n=t;if("service_validation_error"===n.code)return this._handleValidationError(n);const i=n.message||n.translation_key||"Unknown service error";return new Error(`Service call failed: ${e}.${r} - ${i}`)}return t instanceof Error?t:new Error(String(t))}_handleValidationError(t){const e=(Error,t);let r=e.message||e.translation_key||"Service validation error";return r.includes("return_response")&&(r="The service integration may not support response data yet. Please ensure you're using the latest version of the Octopus Energy España integration and that it has been reloaded after updating."),new Error(`Service validation error: ${r}`)}_validateConsumptionResponse(t){if(!t||"object"!=typeof t)throw yt.groupError("Invalid service response"),yt.error("✗ Invalid service response: ","expected object with success field"),yt.groupEnd(),new Error("Invalid response from service: expected object with success field");if(!("success"in t))throw yt.groupError("Invalid service response format"),yt.error("✗ Invalid service response format: ","response does not contain success field"),yt.data("Received response",t),yt.groupEnd(),new Error("Service returned unexpected response format. The service may not be returning data correctly. Please check the integration configuration and ensure the service supports returning response data.")}_extractErrorMessage(t){return t instanceof Error?t.message:t&&"object"==typeof t?t.message||t.translation_key||JSON.stringify(t):String(t)}_createUserFriendlyError(t){if(t instanceof Error)return t;if(t&&"object"==typeof t){const e=t;let r=e.message||e.translation_key||JSON.stringify(t);return"service_validation_error"===e.code&&(r=r.includes("return_response")?"The service integration may not support response data yet. Please ensure you're using the latest version of the Octopus Energy España integration and that it has been reloaded after updating.":r||"Service validation error. Please check your configuration."),new Error(r)}return new Error(String(t))}_extractWebSocketResponse(t){return t&&"object"==typeof t?"service_response"in t?t.service_response:"response"in t?t.response:t:t}async _callServiceViaWebSocket(t,e,r){if(!this.hass.callWS)throw new Error("callWS is not available");const n=this.hass.callWS({type:"call_service",domain:t,service:e,service_data:r,return_response:!0}),i=this._createTimeoutPromise(_o.SERVICE_TIMEOUT),o=await Promise.race([n,i]);return this._extractWebSocketResponse(o)}async _callServiceViaStandard(t,e,r){const n=this.hass.callService(t,e,r),i=this._createTimeoutPromise(_o.SERVICE_TIMEOUT);return await Promise.race([n,i])}async _loadData(){if(!this.hass||!this.config)return;const t=this.config.source_entry_id;if(!t)return this._error="source_entry_id is required. Please select your tariff from the card editor.",void(this._loading=!1);this._loading=!0,this._error=null,this._comparisonError=null;try{const{startDate:e,endDate:r}=this._getDateRange();this._validateDateRange(e,r);const n=`${e.toISOString().split("T")[0]} → ${r.toISOString().split("T")[0]}`;yt.groupDataLoad(t,this._currentPeriod,n);const i=await this._fetchConsumptionData(t,e,r);this._consumptionData=i.consumption_data||[],i.tariff_costs?this._tariffCosts=i.tariff_costs:this._tariffCosts=null;const o=this.config.view||"consumption";"tariff-comparison"===o&&this.config.tariff_entry_ids?.length?await this._fetchTariffComparison(t,e,r):this._comparisonResult=null,"week-analysis"===o&&this.config.show_week_comparison?this._weekComparisonData=this._calculateWeekComparison():this._weekComparisonData=null,yt.groupEnd()}catch(t){yt.groupError("Error loading data");const e=t instanceof Error?t.message:String(t);this._error=e||"Failed to load consumption data. Please try again.",yt.error("Error loading data: ",this._extractErrorMessage(t)),yt.data("Error details",t),yt.groupEnd(),!this._hasInitialData&&this._consumptionData.length>0&&(this._hasInitialData=!0)}finally{this._loading=!1}}_validateDateRange(t,e){if(t>new Date)throw new Error(`Invalid date range: start date (${t.toISOString().split("T")[0]}) is in the future. Please navigate to a past period.`);if(t>e)throw new Error("Invalid date range: start date is after end date.")}async _fetchConsumptionData(t,e,r){const n="heat-calendar"===(this.config.view||"consumption")&&"year"===this.config.heat_calendar_period?"daily":"day"===this._currentPeriod?"hourly":"daily";let i;try{i=await this._callServiceWithTimeout(_o.SERVICE_DOMAIN,_o.SERVICE_FETCH_CONSUMPTION,{entry_id:t,start_date:e.toISOString().split("T")[0],end_date:r.toISOString().split("T")[0],granularity:n}),yt.data("Raw Service Response (before processing)",i);const o=i;return this._validateConsumptionResponse(o),o.success||this._handleConsumptionError(o,t),o}catch(t){throw yt.groupError("Service call failed"),yt.error("✗ Service call failed: ",this._extractErrorMessage(t)),yt.data("Full Error Object",t),yt.groupEnd(),this._createUserFriendlyError(t)}}_handleConsumptionError(t,e){const r=t.error||"Failed to fetch consumption data";let n=r;throw t.warning&&(n+=`. ${t.warning}`,yt.warn("⚠ Service Warning: ",t.warning)),yt.groupError("Service returned error"),yt.error("✗ Service returned error: ",r),yt.data("Requested Entry ID",e),t.context&&(yt.data("Service Context",t.context),t.context.id&&t.context.id!==e&&yt.warn("⚠ Note: Service context shows different entry ID (",t.context.id+"). This may be informational.")),yt.groupEnd(),yt.data("Full Response",{success:t.success,error:t.error,warning:t.warning,context:t.context}),new Error(n)}async _fetchTariffComparison(t,e,r){try{const n="day"===this._currentPeriod?"daily":"week"===this._currentPeriod?"weekly":"monthly",i=await this._callServiceWithTimeout(_o.SERVICE_DOMAIN,_o.SERVICE_COMPARE_TARIFFS,{tariff_entry_ids:this.config.tariff_entry_ids,source_entry_id:t,period:n,start_date:e.toISOString().split("T")[0],end_date:r.toISOString().split("T")[0]});if(i.success&&i.result)this._comparisonResult=i.result;else{const t=i.error||"Failed to compare tariffs";this._comparisonError=t,yt.groupError("Tariff comparison failed"),yt.warn("⚠ Tariff comparison failed: ",t),yt.groupEnd()}}catch(t){const e=t instanceof Error?t.message:String(t);this._comparisonError=`Tariff comparison error: ${e}`,yt.groupError("Tariff comparison error"),yt.warn("⚠ Tariff comparison error: ",e),yt.groupEnd()}}_getDateRange(){const t=this.config.view||"consumption";if("heat-calendar"===t&&"year"===this.config.heat_calendar_period){const t=this._currentDate.getFullYear(),e=new Date,r=t===e.getFullYear(),n=new Date(t,0,1);n.setHours(0,0,0,0);const i=r?new Date(e):new Date(t,11,31);return i.setHours(23,59,59,999),{startDate:n,endDate:i}}if("week-analysis"===t&&this.config.show_week_comparison){const t=7*(this.config.week_comparison_count||2)+6,e=new Date(this._currentDate);e.setHours(23,59,59,999);const r=new Date(e);return r.setDate(r.getDate()-(t-1)),r.setHours(0,0,0,0),{startDate:r,endDate:e}}const e=new Date(this._currentDate);e.setHours(23,59,59,999);const r=new Date(e);return"day"===this._currentPeriod?r.setHours(0,0,0,0):"week"===this._currentPeriod?(r.setDate(r.getDate()-6),r.setHours(0,0,0,0)):"month"===this._currentPeriod&&(r.setDate(r.getDate()-29),r.setHours(0,0,0,0)),{startDate:r,endDate:e}}_wouldNavigateToFuture(){const t=new Date;t.setHours(23,59,59,999);const e=this.config.view||"consumption",r="heat-calendar"===e&&"year"===this.config.heat_calendar_period;if("week-analysis"===e&&this.config.show_week_comparison){const e=new Date(this._currentDate);e.setDate(e.getDate()+7);const{endDate:r}=this._getDateRangeForDate(e);return r>t}if(r){return this._currentDate.getFullYear()+1>t.getFullYear()}const n=new Date(this._currentDate);"day"===this._currentPeriod?n.setDate(n.getDate()+1):"week"===this._currentPeriod?n.setDate(n.getDate()+7):"month"===this._currentPeriod&&n.setMonth(n.getMonth()+1);const{endDate:i}=this._getDateRangeForDate(n);return i>t}_getDateRangeForDate(t){const e=this.config.view||"consumption";if("week-analysis"===e&&this.config.show_week_comparison){const e=7*(this.config.week_comparison_count||2)+6,r=new Date(t);r.setHours(23,59,59,999);const n=new Date(r);return n.setDate(n.getDate()-(e-1)),n.setHours(0,0,0,0),{startDate:n,endDate:r}}if("heat-calendar"===e&&"year"===this.config.heat_calendar_period){const e=t.getFullYear(),r=new Date,n=e===r.getFullYear(),i=new Date(e,0,1);i.setHours(0,0,0,0);const o=n?new Date(r):new Date(e,11,31);return o.setHours(23,59,59,999),{startDate:i,endDate:o}}const r=new Date(t);r.setHours(23,59,59,999);const n=new Date(r);return"day"===this._currentPeriod?n.setHours(0,0,0,0):"week"===this._currentPeriod?(n.setDate(n.getDate()-6),n.setHours(0,0,0,0)):"month"===this._currentPeriod&&(n.setDate(n.getDate()-29),n.setHours(0,0,0,0)),{startDate:n,endDate:r}}_navigatePeriod(t){const e=Date.now();if(this._isNavigating||e-this._lastNavigationTime<this._navigationThrottleMs)return;if("next"===t&&this._wouldNavigateToFuture())return;this._isNavigating=!0,this._lastNavigationTime=e;const r="prev"===t?-1:1,n=this.config.view||"consumption",i="heat-calendar"===n&&"year"===this.config.heat_calendar_period;"week-analysis"===n&&this.config.show_week_comparison?(this._currentDate.setDate(this._currentDate.getDate()+7*r),this._currentDate=new Date(this._currentDate)):i?(this._currentDate.setFullYear(this._currentDate.getFullYear()+r),this._currentDate=new Date(this._currentDate)):("day"===this._currentPeriod?this._currentDate.setDate(this._currentDate.getDate()+r):"week"===this._currentPeriod?this._currentDate.setDate(this._currentDate.getDate()+7*r):"month"===this._currentPeriod&&this._currentDate.setMonth(this._currentDate.getMonth()+r),this._currentDate=new Date(this._currentDate)),this._loadData().finally(()=>{this._isNavigating=!1})}_setPeriod(t){if(this._currentPeriod===t||this._isNavigating)return;const e=Date.now();e-this._lastNavigationTime<this._navigationThrottleMs||(this._isNavigating=!0,this._lastNavigationTime=e,this._currentPeriod=t,this._loadData().finally(()=>{this._isNavigating=!1}))}_extractPeriodData(){if(this._tariffCosts&&this.config.source_entry_id){const t=this._tariffCosts[this.config.source_entry_id];if(t&&t.hourly_breakdown){const e=new Map;for(const r of t.hourly_breakdown){const t=r.hour||"",n=r.consumption||0,i=r.period;e.has(t)||e.set(t,{p1:0,p2:0,p3:0});const o=e.get(t);"P1"===i?o.p1+=n:"P2"===i?o.p2+=n:"P3"===i&&(o.p3+=n)}const r=Array.from(e.entries()).map(([t,e])=>({timestamp:t,...e}));if(r.length>0)return r}if(t&&t.daily_breakdown&&"month"===this._currentPeriod&&t.period_breakdown){const e=t.period_breakdown.p1_percentage/100,r=t.period_breakdown.p2_percentage/100,n=t.period_breakdown.p3_percentage/100;return t.daily_breakdown.map(t=>({timestamp:t.date,p1:t.consumption*e,p2:t.consumption*r,p3:t.consumption*n}))}}if(this._consumptionData.length>0){const t=this._consumptionData[0];if(void 0!==t.p1_consumption||t.period)return this._consumptionData.map(t=>({timestamp:t.start_time||t.date||"",p1:t.p1_consumption||("P1"===t.period?t.consumption:0),p2:t.p2_consumption||("P2"===t.period?t.consumption:0),p3:t.p3_consumption||("P3"===t.period?t.consumption:0)}))}return null}_calculateMovingAverage(t,e){if(e<2||0===t.length)return t.map(()=>null);const r=[];for(let n=0;n<t.length;n++)if(n<e-1)r.push(null);else{let i=0;for(let r=0;r<e;r++)i+=t[n-r];r.push(i/e)}return r}_calculateCostMovingAverage(t,e=30){return this._calculateMovingAverage(t,e)}_renderHeatCalendar(){const t=this.hass?.language||"en",e=this._getHeatCalendarData(),r="year"===(this.config.heat_calendar_period||"month");if(0===e.length)return U`
        <div class="error-message">
          <div class="error-title">${ft("card.heat_calendar.unavailable",t)}</div>
          <div class="error-details">
            ${ft("card.heat_calendar.unavailable_details",t)}
          </div>
        </div>
      `;const n=new Map,i=[ft("card.day.sun",t),ft("card.day.mon",t),ft("card.day.tue",t),ft("card.day.wed",t),ft("card.day.thu",t),ft("card.day.fri",t),ft("card.day.sat",t)],o=[ft("card.month.jan",t),ft("card.month.feb",t),ft("card.month.mar",t),ft("card.month.apr",t),ft("card.month.may",t),ft("card.month.jun",t),ft("card.month.jul",t),ft("card.month.aug",t),ft("card.month.sep",t),ft("card.month.oct",t),ft("card.month.nov",t),ft("card.month.dec",t)],a=new Map;for(const t of e){const e=r?t.weekOfYear??0:t.weekOfMonth??0;n.has(e)||n.set(e,new Map),n.get(e).set(t.dayOfWeek,t),r&&void 0!==t.month&&(a.has(e)&&a.get(e)===t.month||a.set(e,t.month))}let s,c;if(r){const t=Array.from(n.keys());t.length>0?(c=Math.min(...t),s=Math.max(...t),s-c<51&&(s=c+52)):(c=0,s=52)}else s=Math.max(...Array.from(n.keys()),0),c=Math.min(...Array.from(n.keys()),0);const l=[];for(let t=c;t<=s;t++){const e=[];for(let r=0;r<7;r++){const i=n.get(t)?.get(r)||null;e.push(i)}l.push(e)}let d=null;if(r&&e.length>0){const t=e.reduce((t,e)=>t+e.consumption,0);d={totalConsumption:t,totalCost:e.reduce((t,e)=>t+e.cost,0),avgDailyConsumption:t/e.length,year:e[0]?.year||this._currentDate.getFullYear()}}return U`
      <div class="heat-calendar-container ${r?"heat-calendar-year-view":""}">
        <div class="comparison-title">
          Consumption Heat Calendar
          ${r&&d?U` - ${d.year}`:""}
        </div>
        ${r&&d?U`
          <div class="heat-calendar-summary">
            <span>Total: ${d.totalConsumption.toFixed(1)} kWh</span>
            <span>Avg/Day: ${d.avgDailyConsumption.toFixed(2)} kWh</span>
            <span>Cost: €${d.totalCost.toFixed(2)}</span>
          </div>
        `:""}
        <div class="heat-calendar-grid ${r?"heat-calendar-grid-year":""}">
          ${i.map(t=>U`
            <div class="heat-calendar-day empty" style="font-weight: 600;">${t}</div>
          `)}
          ${l.map((t,e)=>{const n=c+e,i=a.get(n),s=r&&void 0!==i&&(0===e||a.get(c+e-1)!==i);return U`
              ${s?U`
                <div class="heat-calendar-month-label" style="grid-column: 1 / -1;">
                  ${o[i]}
                </div>
              `:""}
              ${t.map(t=>{if(!t)return U`<div class="heat-calendar-day empty"></div>`;const e=new Date(t.date),n=e.getDate(),i=o[e.getMonth()],a=r?`${i} ${n}, ${t.year}: ${t.consumption.toFixed(2)} kWh, €${t.cost.toFixed(2)}`:`${t.date}: ${t.consumption.toFixed(2)} kWh, €${t.cost.toFixed(2)}`;return U`
                  <div 
                    class="heat-calendar-day intensity-${t.intensity}"
                    title="${a}"
                  >
                    ${r?"":n}
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
    `}_renderWeekComparison(){const t=this.hass?.language||"en";if(!this._weekComparisonData||0===this._weekComparisonData.weeks.length)return U`<div class="loading">${ft("card.week_comparison.no_data",t)}</div>`;const{weeks:e,comparisons:r}=this._weekComparisonData;return U`
      <div class="week-comparison-section">
        <div class="comparison-title">Week-over-Week Comparison</div>
        <div class="week-comparison-grid">
          ${e.map((t,n)=>{const i=r.find(t=>t.weekIndex===n);return U`
              <div class="week-card">
                <div class="week-card-header">
                  Week ${e.length-n}
                  ${i?U`
                    <span class="week-change ${i.consumptionChangePercent>=0?"positive":"negative"}">
                      ${i.consumptionChangePercent>=0?"↑":"↓"} ${Math.abs(i.consumptionChangePercent).toFixed(1)}%
                    </span>
                  `:""}
                </div>
                <div class="week-card-metrics">
                  <div class="week-metric">
                    <span class="week-metric-label">Consumption:</span>
                    <span class="week-metric-value">${t.consumption.toFixed(1)} kWh</span>
                  </div>
                  <div class="week-metric">
                    <span class="week-metric-label">Cost:</span>
                    <span class="week-metric-value">€${t.cost.toFixed(2)}</span>
                  </div>
                  <div class="week-metric">
                    <span class="week-metric-label">Period:</span>
                    <span class="week-metric-value">${t.weekStart} - ${t.weekEnd}</span>
                  </div>
                </div>
              </div>
            `})}
        </div>
      </div>
    `}_renderTariffComparisonChart(){if(!this._comparisonResult||!this._comparisonResult.tariffs||0===this._comparisonResult.tariffs.length)return U``;const t=this._comparisonResult.tariffs;let e=0;for(const r of t){const t=r.period_breakdown;e=Math.max(e,t.p1_consumption,t.p2_consumption,t.p3_consumption),t.p1_consumption>0&&r.hourly_breakdown?.filter(t=>"P1"===t.period).reduce((t,e)=>t+e.cost,0),t.p2_consumption>0&&r.hourly_breakdown?.filter(t=>"P2"===t.period).reduce((t,e)=>t+e.cost,0),t.p3_consumption>0&&r.hourly_breakdown?.filter(t=>"P3"===t.period).reduce((t,e)=>t+e.cost,0)}return U`
      <div class="tariff-chart-container">
        <div class="period-breakdown-title">Consumption & Cost by Period</div>
        ${t.map(t=>{const r=t.period_breakdown,n=r.p1_consumption>0&&t.hourly_breakdown?.filter(t=>"P1"===t.period).reduce((t,e)=>t+e.cost,0)||0,i=r.p2_consumption>0&&t.hourly_breakdown?.filter(t=>"P2"===t.period).reduce((t,e)=>t+e.cost,0)||0,o=r.p3_consumption>0&&t.hourly_breakdown?.filter(t=>"P3"===t.period).reduce((t,e)=>t+e.cost,0)||0,a=r.p1_consumption>0?n/r.p1_consumption:0,s=r.p2_consumption>0?i/r.p2_consumption:0,c=r.p3_consumption>0?o/r.p3_consumption:0;return U`
            <div style="margin-top: 16px;">
              <div class="tariff-name" style="margin-bottom: 8px;">${t.name}</div>
              <div class="tariff-chart-bars">
                <div class="tariff-chart-bar-group">
                  <div class="tariff-chart-bar-label">P1</div>
                  <div 
                    class="tariff-chart-bar p1" 
                    style="height: ${e>0?r.p1_consumption/e*100:0}%"
                    title="P1: ${r.p1_consumption.toFixed(2)} kWh, €${n.toFixed(2)} (€${a.toFixed(3)}/kWh)"
                  ></div>
                </div>
                <div class="tariff-chart-bar-group">
                  <div class="tariff-chart-bar-label">P2</div>
                  <div 
                    class="tariff-chart-bar p2" 
                    style="height: ${e>0?r.p2_consumption/e*100:0}%"
                    title="P2: ${r.p2_consumption.toFixed(2)} kWh, €${i.toFixed(2)} (€${s.toFixed(3)}/kWh)"
                  ></div>
                </div>
                <div class="tariff-chart-bar-group">
                  <div class="tariff-chart-bar-label">P3</div>
                  <div 
                    class="tariff-chart-bar p3" 
                    style="height: ${e>0?r.p3_consumption/e*100:0}%"
                    title="P3: ${r.p3_consumption.toFixed(2)} kWh, €${o.toFixed(2)} (€${c.toFixed(3)}/kWh)"
                  ></div>
                </div>
              </div>
            </div>
          `})}
      </div>
    `}_getISOWeekOfYear(t){const e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate())),r=e.getUTCDay()||7;e.setUTCDate(e.getUTCDate()+4-r);const n=new Date(Date.UTC(e.getUTCFullYear(),0,1));return Math.ceil(((e.getTime()-n.getTime())/864e5+1)/7)-1}_getHeatCalendarData(){const t=this.config.heat_calendar_period||"month";let e=[];if(this._tariffCosts&&this.config.source_entry_id){const t=this._tariffCosts[this.config.source_entry_id];t&&t.daily_breakdown&&t.daily_breakdown.length>0&&(e=t.daily_breakdown)}if(0===e.length&&this._consumptionData&&this._consumptionData.length>0){const t=new Map;for(const e of this._consumptionData){const r=e.date||(e.start_time?e.start_time.split("T")[0]:null);if(!r)continue;const n=e.consumption||e.value||0,i=t.get(r)||{consumption:0,cost:0};t.set(r,{consumption:i.consumption+n,cost:i.cost})}e=Array.from(t.entries()).map(([t,e])=>({date:t,consumption:e.consumption,cost:e.cost})).sort((t,e)=>t.date.localeCompare(e.date))}if(0===e.length)return[];if("year"===t){const t=this._currentDate.getFullYear();e=e.filter(e=>new Date(e.date).getFullYear()===t)}else{const t=this._currentDate.getFullYear(),r=this._currentDate.getMonth();e=e.filter(e=>{const n=new Date(e.date);return n.getFullYear()===t&&n.getMonth()===r})}if(0===e.length)return[];const r=e.map(t=>t.consumption).filter(t=>t>0);if(0===r.length)return[];const n=[...r].sort((t,e)=>t-e),i=n[Math.floor(.33*n.length)],o=n[Math.floor(.67*n.length)],a=[];for(const r of e){const e=new Date(r.date),n=e.getDay(),s=e.getFullYear(),c=e.getMonth();let l,d;if("year"===t)d=this._getISOWeekOfYear(e);else{const t=new Date(e.getFullYear(),e.getMonth(),1).getDay(),r=e.getDate();l=Math.floor((r+t-1)/7)}let h="medium";r.consumption<=i?h="low":r.consumption>=o&&(h="high"),a.push({date:r.date,consumption:r.consumption,cost:r.cost||0,dayOfWeek:n,weekOfMonth:l,weekOfYear:d,month:c,year:s,intensity:h})}return a}_calculateWeekComparison(){const t=this.config.week_comparison_count||2;let e=[],r=null;if(this._tariffCosts&&this.config.source_entry_id&&(r=this._tariffCosts[this.config.source_entry_id],r&&r.daily_breakdown&&r.daily_breakdown.length>0&&(e=r.daily_breakdown)),0===e.length&&this._consumptionData&&this._consumptionData.length>0){const t=new Map;for(const e of this._consumptionData){const r=e.date||(e.start_time?e.start_time.split("T")[0]:null);if(!r)continue;const n=e.consumption||e.value||0,i=t.get(r)||{consumption:0,cost:0,p1_consumption:0,p2_consumption:0,p3_consumption:0};t.set(r,{consumption:i.consumption+n,cost:i.cost,p1_consumption:i.p1_consumption+(e.p1_consumption||0),p2_consumption:i.p2_consumption+(e.p2_consumption||0),p3_consumption:i.p3_consumption+(e.p3_consumption||0)})}e=Array.from(t.entries()).map(([t,e])=>({date:t,consumption:e.consumption,cost:e.cost,p1_consumption:e.p1_consumption,p2_consumption:e.p2_consumption,p3_consumption:e.p3_consumption})).sort((t,e)=>t.date.localeCompare(e.date))}if(0===e.length)return null;const n=new Map;for(const t of e){const e=new Date(t.date),i=e.getDay(),o=e.getDate()-i+(0===i?-6:1),a=new Date(e.setDate(o));a.setHours(0,0,0,0);const s=a.toISOString().split("T")[0];if(!n.has(s)){const t=new Date(a);t.setDate(a.getDate()+6),n.set(s,{weekStart:s,weekEnd:t.toISOString().split("T")[0],consumption:0,cost:0,periodBreakdown:{p1_consumption:0,p2_consumption:0,p3_consumption:0}})}const c=n.get(s);if(c.consumption+=t.consumption,c.cost+=t.cost||0,void 0!==t.p1_consumption&&void 0!==t.p2_consumption&&void 0!==t.p3_consumption)c.periodBreakdown.p1_consumption+=t.p1_consumption,c.periodBreakdown.p2_consumption+=t.p2_consumption,c.periodBreakdown.p3_consumption+=t.p3_consumption;else if(r&&r.period_breakdown){const e=r.period_breakdown.p1_percentage/100,n=r.period_breakdown.p2_percentage/100,i=r.period_breakdown.p3_percentage/100;c.periodBreakdown.p1_consumption+=t.consumption*e,c.periodBreakdown.p2_consumption+=t.consumption*n,c.periodBreakdown.p3_consumption+=t.consumption*i}}const i=Array.from(n.values()).sort((t,e)=>new Date(e.weekStart).getTime()-new Date(t.weekStart).getTime()),o=i.slice(0,t),a=[];for(let t=0;t<o.length-1;t++){const e=o[t],r=o[t+1],n=e.consumption-r.consumption,i=r.consumption>0?n/r.consumption*100:0,s=e.cost-r.cost,c=r.cost>0?s/r.cost*100:0;a.push({weekIndex:t,consumptionChange:n,consumptionChangePercent:i,costChange:s,costChangePercent:c})}return{weeks:o,comparisons:a}}render(){const t=this.hass?.language||"en";if(this._loading&&!this._hasInitialData)return U`
        <div class="loading">
          <ha-circular-progress indeterminate></ha-circular-progress>
          <p>${ft("card.loading",t)}</p>
        </div>
      `;if(this._error){const e=this._error.includes("Configuration incomplete")||this._error.includes("configuration is required");return U`
        <div class="error-message">
          <ha-icon icon="${e?"mdi:cog-outline":"mdi:alert-circle"}" class="error-icon"></ha-icon>
          <div class="error-title">${ft(e?"card.error.configuration_required":"card.error.unable_to_load",t)}</div>
          <div class="error-details">${this._error}</div>
          ${e?U`
            <div class="error-details" style="margin-top: 12px; font-size: 13px;">
              ${ft("card.error.config_help",t)}
            </div>
          `:U`
            <button class="retry-button" @click=${this._loadData}>
              ${ft("card.button.retry",t)}
            </button>
          `}
        </div>
      `}const e=this.config.view||"consumption";return U`
      <div class="card-content-wrapper">
        ${this._loading&&this._hasInitialData?U`
          <div class="loading-overlay">
            <ha-circular-progress indeterminate style="--mdc-theme-primary: var(--primary-color);"></ha-circular-progress>
          </div>
        `:""}
        ${"consumption"===e?this._renderConsumptionView():""}
        ${"heat-calendar"===e?this._renderHeatCalendarView():""}
        ${"week-analysis"===e?this._renderWeekAnalysisView():""}
        ${"tariff-comparison"===e?this._renderTariffComparisonView():""}
      </div>
    `}_renderConsumptionView(){const t=this.hass?.language||"en",e=this._consumptionData.reduce((t,e)=>t+(e.consumption||e.value||0),0);return U`
      ${!1!==this.config.show_navigation?U`
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
      `:""}

      ${this._consumptionData.length>0?U`
        <div class="consumption-summary-header">
          <div class="summary-header-top">
            <div class="summary-title-section">
              <ha-icon icon="mdi:lightning-bolt" class="summary-icon"></ha-icon>
              <h3 class="summary-title">${ft("card.title.electricity",t)}</h3>
            </div>
            <div class="summary-view-toggle">
              <ha-icon icon="mdi:chart-line" class="view-icon active"></ha-icon>
              <ha-icon icon="mdi:view-list" class="view-icon"></ha-icon>
            </div>
          </div>
          <div class="summary-date-range">${this._formatDateRange()}</div>
          <div class="summary-total-consumption">${e.toLocaleString("es-ES",{minimumFractionDigits:0,maximumFractionDigits:0})} kWh</div>
        </div>
      `:""}

      <div class="chart-container">
        ${this._renderChart()}
      </div>
    `}_renderHeatCalendarView(){const t=this.hass?.language||"en";return U`
      ${!1!==this.config.show_navigation?U`
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
      `:""}

      <div class="chart-container">
        ${this._renderHeatCalendar()}
      </div>
    `}_renderWeekAnalysisView(){const t=this.hass?.language||"en";return this.config.show_week_comparison?U`
      ${!1!==this.config.show_navigation?U`
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
      `:""}

      ${this._renderWeekComparison()}
    `:U`
        <div class="error-message">
          <div class="error-title">${ft("card.week_comparison.not_enabled",t)}</div>
          <div class="error-details">
            ${ft("card.week_comparison.not_enabled_details",t)}
          </div>
        </div>
      `}_renderTariffComparisonView(){const t=this.hass?.language||"en";return U`
      <div class="comparison-section">
        <h3 class="comparison-title">${ft("editor.tariff_comparison",t)}</h3>
        ${this._comparisonError?U`
          <div class="comparison-error">
            <ha-icon icon="mdi:alert"></ha-icon>
            ${this._comparisonError}
          </div>
        `:this._comparisonResult?U`
          ${this._renderComparison()}
          ${!1!==this.config.show_tariff_chart?this._renderTariffComparisonChart():""}
        `:U`
          <div class="loading">${ft("card.tariff_comparison.loading",t)}</div>
        `}
      </div>
    `}_formatDate(t,e){const r=this.hass?.language||"en";if("year"===e){return[ft("card.month.jan",r),ft("card.month.feb",r),ft("card.month.mar",r),ft("card.month.apr",r),ft("card.month.may",r),ft("card.month.jun",r),ft("card.month.jul",r),ft("card.month.aug",r),ft("card.month.sep",r),ft("card.month.oct",r),ft("card.month.nov",r),ft("card.month.dec",r)][t.getMonth()]}return t.toLocaleDateString("es-ES",{day:"numeric",month:"long",year:"numeric"})}_formatDateRange(){const{startDate:t,endDate:e}=this._getDateRange(),r=this._formatDate(t),n=this._formatDate(e);return r===n?r:`${r} - ${n}`}_renderChart(){const t=this.hass?.language||"en";if(this._loading)return U`<div class="loading">${ft("card.loading",t)}</div>`;if(!this._loading&&!this._error&&0===this._consumptionData.length){const e=this._formatDateRange();return U`
        <div class="loading">
          <div>${ft("card.no_data",t)}</div>
          <div style="margin-top: 8px; font-size: 12px; color: var(--secondary-text-color);">
            Period: ${e}
          </div>
        </div>
      `}return U`
      <div 
        id="chart-container"
        class="chart-svg-container">
      </div>
    `}async _renderD3Chart(){const t=this.shadowRoot?.querySelector("#chart-container");if(!t||this._loading||this._error||0===this._consumptionData.length)return;const e=this.config.chart_type||"line",r=800,n=300;let i=this._consumptionData.map(t=>t.consumption||t.value||0),o=this._consumptionData.map(t=>t.start_time||t.date||"");const a="heat-calendar"===(this.config.view||"consumption")&&"year"===this.config.heat_calendar_period;if("week"===this._currentPeriod&&i.length>0){const t=co(i,o);i=t.values,o=t.timestamps}else if(a&&i.length>0){const t=lo(i,o);i=t.values,o=t.timestamps}let s;const c=!(!this.config.show_cost_on_chart||!this.config.selected_tariff_for_cost||null===this._tariffCosts);if(c&&this._tariffCosts&&this.config.selected_tariff_for_cost){const t=this._tariffCosts[this.config.selected_tariff_for_cost];if(t){const e="day"===this._currentPeriod?t.hourly_breakdown:t.daily_breakdown;if(e&&e.length>0){let t=e.map(t=>t.cost),o=e.map(t=>t.timestamp||t.date||"");if("week"===this._currentPeriod&&t.length>0){const e=co(t,o);t=e.values,o=e.timestamps}else if(a&&t.length>0){const e=lo(t,o);t=e.values,o=e.timestamps}if(t.length===i.length){const e=Math.max(...t,.01),i=Math.min(...t,0);s={points:ao(t,{width:r,height:n,padding:{top:20,right:60,bottom:40,left:60}},i,e,o),minValue:i,maxValue:e,range:e-i||1}}}}}const l={top:20,right:s?60:20,bottom:40,left:60},d=function(t){const e=Math.min(...t,0),r=Math.max(...t,1);return{points:[],minValue:e,maxValue:r,range:r-e||1}}(i),h={width:r,height:n,padding:l};d.points=ao(i,h,d.minValue,d.maxValue,o);const u=this._getComputedColor("--primary-color","#8B5CF6"),p={text:this._getComputedColor("--secondary-text-color","#b0b0b0"),accent:this._getComputedColor("--accent-color","#ff9800"),primary:u,hover:"#ff69b4",error:this._getComputedColor("--error-color","#f44336"),warning:this._getComputedColor("--warning-color","#ff9800"),success:this._getComputedColor("--success-color","#4caf50"),info:this._getComputedColor("--info-color","#2196f3"),background:this._getComputedColor("--card-background-color","#fff"),grid:this._getComputedColor("--divider-color","rgba(255, 255, 255, 0.1)"),axis:this._getComputedColor("--divider-color","rgba(255, 255, 255, 0.2)")};this._chartInstance?(this._chartInstance.clear(),this._chartInstance.resize(r,n)):(t.innerHTML="",this._chartInstance=new po(t,{width:r,height:n,padding:l,colors:p,language:this.hass?.language||"en"}));const f={enabled:!1},_=a?"year":this._currentPeriod;try{switch(e){case"line":await this._chartInstance.renderLineChart(d,{showArea:!0,showMovingAverage:!!this.config.show_moving_average,movingAverageDays:this.config.moving_average_days||7,showCostAxis:!(!c||!s),costData:s,animation:f,period:_,interactive:!0});break;case"bar":await this._chartInstance.renderBarChart(d,{showCostOverlay:!(!c||!s),costData:s,animation:f,period:_,interactive:!0});break;case"stacked-area":const e=this._prepareStackedData();if(e)await this._chartInstance.renderStackedAreaChart(e,{animation:f,period:_,interactive:!0});else{const e=this.hass?.language||"en",r=document.createElement("div");r.className="error-message",r.innerHTML=`\n              <div class="error-title">${ft("card.stacked_area.unavailable",e)}</div>\n              <div class="error-details">\n                ${ft("card.stacked_area.unavailable_details",e)}\n              </div>\n            `,t.firstChild?t.replaceChild(r,t.firstChild):t.appendChild(r)}}}catch(t){yt.error("Error rendering chart: ",t instanceof Error?t.message:String(t))}}_prepareStackedData(){const t=this._extractPeriodData();if(!t||0===t.length)return null;const e=t.map(t=>t.p1||0),r=t.map(t=>t.p2||0),n=t.map(t=>t.p3||0),i=n.map((t,e)=>t+(r[e]||0)),o=i.map((t,r)=>t+(e[r]||0)),a=Math.max(...o,1),s=a-0||1,c=this._getComputedColor("--error-color","#f44336"),l=this._getComputedColor("--warning-color","#ff9800");return{layers:[{data:n,color:this._getComputedColor("--success-color","#4caf50"),opacity:.6,label:"P3 (Valley)"},{data:r,color:l,opacity:.6,label:"P2 (Flat)"},{data:e,color:c,opacity:.6,label:"P1 (Peak)"}],timestamps:t.map(t=>t.timestamp),minValue:0,maxValue:a,range:s}}_renderComparison(){if(!this._comparisonResult||!this._comparisonResult.tariffs||0===this._comparisonResult.tariffs.length)return U`<p>No comparison data available</p>`;const t=[...this._comparisonResult.tariffs].sort((t,e)=>t.total_cost-e.total_cost),e=this._comparisonResult.best_tariff?.entry_id,r=this._comparisonResult.tariffs[0],n=r?.period_breakdown;return U`
      <!-- Consumption Summary -->
      ${n?U`
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
        ${t.map(t=>U`
          <div class="tariff-item">
            <div class="tariff-header">
              <span class="tariff-name">
                ${t.name}
                ${e===t.entry_id?U`<span class="best-tariff-badge">Best</span>`:""}
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

      ${this._comparisonResult.savings?U`
        <div class="savings-info">
          <strong>Potential Savings:</strong> €${this._comparisonResult.savings.amount.toFixed(2)} 
          (${this._comparisonResult.savings.percentage.toFixed(1)}%) by choosing the best tariff
        </div>
      `:""}
    `}_renderPeriodBreakdown(t,e){const r=Math.max(t.p1_consumption,t.p2_consumption,t.p3_consumption);let n=0,i=0,o=0;if(e.hourly_breakdown&&e.hourly_breakdown.length>0)for(const t of e.hourly_breakdown)"P1"===t.period&&t.consumption>0?n+=t.cost:"P2"===t.period&&t.consumption>0?i+=t.cost:"P3"===t.period&&t.consumption>0&&(o+=t.cost);const a=t.p1_consumption>0?n/t.p1_consumption:0,s=t.p2_consumption>0?i/t.p2_consumption:0,c=t.p3_consumption>0?o/t.p3_consumption:0;return U`
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
              ${n>0?U`<span class="cost-per-kwh">€${a.toFixed(3)}/kWh</span>`:""}
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
              ${i>0?U`<span class="cost-per-kwh">€${s.toFixed(3)}/kWh</span>`:""}
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
              ${o>0?U`<span class="cost-per-kwh">€${c.toFixed(3)}/kWh</span>`:""}
            </div>
          </div>
        </div>
      </div>
    `}static getStubConfig(){return{type:"custom:octopus-consumption-card",source_entry_id:"",view:"consumption",default_period:"week",chart_type:"line",tariff_entry_ids:[],show_cost_on_chart:!1,show_navigation:!0,show_period_distribution:!1,show_moving_average:!1,moving_average_days:7,heat_calendar_period:"month",show_week_comparison:!1,week_comparison_count:2,show_cost_trend:!1,cost_moving_average_days:30,show_tariff_chart:!0}}static getConfigElement(){return document.createElement("octopus-consumption-card-editor")}}function mo(){return _o}function go(){return vt}function vo(){return _o.getStubConfig()}if(_o.enabledWarnings=[],_o.SERVICE_TIMEOUT=1e4,_o.SERVICE_DOMAIN="octopus_energy_es",_o.SERVICE_FETCH_CONSUMPTION="fetch_consumption",_o.SERVICE_COMPARE_TARIFFS="compare_tariffs",_o.styles=_t,fo([ht({attribute:!1})],_o.prototype,"hass",void 0),fo([ht({attribute:!1})],_o.prototype,"config",void 0),fo([ut()],_o.prototype,"_consumptionData",void 0),fo([ut()],_o.prototype,"_comparisonResult",void 0),fo([ut()],_o.prototype,"_tariffCosts",void 0),fo([ut()],_o.prototype,"_loading",void 0),fo([ut()],_o.prototype,"_error",void 0),fo([ut()],_o.prototype,"_comparisonError",void 0),fo([ut()],_o.prototype,"_currentPeriod",void 0),fo([ut()],_o.prototype,"_currentDate",void 0),fo([ut()],_o.prototype,"_weekComparisonData",void 0),"undefined"!=typeof window&&(window.getCardElement=mo,window.getCardConfigElement=go,window.getStubConfig=vo),"undefined"!=typeof window&&"undefined"!=typeof customElements){try{customElements.get("octopus-consumption-card")||customElements.define("octopus-consumption-card",_o)}catch(t){yt.error("Failed to register octopus-consumption-card: ",t instanceof Error?t.message:String(t))}if(void 0===window.customCards&&(window.customCards=[]),Array.isArray(window.customCards)){window.customCards.some(t=>"custom:octopus-consumption-card"===t.type)||window.customCards.push({type:"custom:octopus-consumption-card",name:"Octopus Energy España Consumption",preview:!1,description:"Display consumption data and tariff comparisons for Octopus Energy España"})}window.customCards["octopus-consumption-card"]=_o,window.OctopusConsumptionCard=_o;const t="0.6.7",e=!!customElements.get("octopus-consumption-card");console.groupCollapsed("%c⚡ Octopus Energy España","background: linear-gradient(90deg, #e10090 0%, #c000a0 100%);color: #fff;padding: 4px 8px;border-radius: 4px;font-weight: bold;"),yt.info("Consumption Card",`v${t}`),yt.info(e?"✓ Custom element: ":"✗ Custom element: ","octopus-consumption-card"),yt.success("✓ Added to card picker"),yt.success("✓ Visual editor enabled"),yt.info("ℹ Supported languages: ","en, es, be"),e||yt.error("✗ Registration failed! Element not found in customElements registry"),console.groupEnd()}return t.OctopusConsumptionCard=_o,t.getCardConfigElement=go,t.getCardElement=mo,t.getStubConfig=vo,t}({});
