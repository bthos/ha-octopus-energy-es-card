var OctopusConsumptionCard=function(e){"use strict";
/**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const t=globalThis,r=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),i=new WeakMap;let a=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(r&&void 0===e){const r=void 0!==t&&1===t.length;r&&(e=i.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&i.set(t,e))}return e}toString(){return this.cssText}};const s=(e,...t)=>{const r=1===e.length?e[0]:t.reduce((t,r,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[o+1],e[0]);return new a(r,e,o)},n=r?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return(e=>new a("string"==typeof e?e:e+"",void 0,o))(t)})(e):e,{is:c,defineProperty:l,getOwnPropertyDescriptor:d,getOwnPropertyNames:p,getOwnPropertySymbols:h,getPrototypeOf:_}=Object,u=globalThis,f=u.trustedTypes,m=f?f.emptyScript:"",g=u.reactiveElementPolyfillSupport,v=(e,t)=>e,y={toAttribute(e,t){switch(t){case Boolean:e=e?m:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},w=(e,t)=>!c(e,t),b={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:w};
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=b){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(e,r,t);void 0!==o&&l(this.prototype,e,o)}}static getPropertyDescriptor(e,t,r){const{get:o,set:i}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:o,set(t){const a=o?.call(this);i?.call(this,t),this.requestUpdate(e,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??b}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const e=_(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const e=this.properties,t=[...p(e),...h(e)];for(const r of t)this.createProperty(r,e[r])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,r]of t)this.elementProperties.set(e,r)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const r=this._$Eu(e,t);void 0!==r&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const e of r)t.unshift(n(e))}else void 0!==e&&t.push(n(e));return t}static _$Eu(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,o)=>{if(r)e.adoptedStyleSheets=o.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const r of o){const o=document.createElement("style"),i=t.litNonce;void 0!==i&&o.setAttribute("nonce",i),o.textContent=r.cssText,e.appendChild(o)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){const r=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,r);if(void 0!==o&&!0===r.reflect){const i=(void 0!==r.converter?.toAttribute?r.converter:y).toAttribute(t,r.type);this._$Em=e,null==i?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(e,t){const r=this.constructor,o=r._$Eh.get(e);if(void 0!==o&&this._$Em!==o){const e=r.getPropertyOptions(o),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:y;this._$Em=o;const a=i.fromAttribute(t,e.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(e,t,r,o=!1,i){if(void 0!==e){const a=this.constructor;if(!1===o&&(i=this[e]),r??=a.getPropertyOptions(e),!((r.hasChanged??w)(i,t)||r.useDefault&&r.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,r))))return;this.C(e,t,r)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:o,wrapped:i},a){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||void 0!==a)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),!0===o&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,r]of e){const{wrapped:e}=r,o=this[t];!0!==e||this._$AL.has(t)||void 0===o||this.C(t,void 0,r,o)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[v("elementProperties")]=new Map,x[v("finalized")]=new Map,g?.({ReactiveElement:x}),(u.reactiveElementVersions??=[]).push("2.1.2");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const $=globalThis,k=e=>e,C=$.trustedTypes,S=C?C.createPolicy("lit-html",{createHTML:e=>e}):void 0,E="$lit$",P=`lit$${Math.random().toFixed(9).slice(2)}$`,A="?"+P,D=`<${A}>`,T=document,M=()=>T.createComment(""),O=e=>null===e||"object"!=typeof e&&"function"!=typeof e,R=Array.isArray,F="[ \t\n\f\r]",z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,W=/-->/g,N=/>/g,U=RegExp(`>|${F}(?:([^\\s"'>=/]+)(${F}*=${F}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),I=/'/g,L=/"/g,H=/^(?:script|style|textarea|title)$/i,V=(e=>(t,...r)=>({_$litType$:e,strings:t,values:r}))(1),Y=Symbol.for("lit-noChange"),j=Symbol.for("lit-nothing"),B=new WeakMap,q=T.createTreeWalker(T,129);function J(e,t){if(!R(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(t):t}const X=(e,t)=>{const r=e.length-1,o=[];let i,a=2===t?"<svg>":3===t?"<math>":"",s=z;for(let t=0;t<r;t++){const r=e[t];let n,c,l=-1,d=0;for(;d<r.length&&(s.lastIndex=d,c=s.exec(r),null!==c);)d=s.lastIndex,s===z?"!--"===c[1]?s=W:void 0!==c[1]?s=N:void 0!==c[2]?(H.test(c[2])&&(i=RegExp("</"+c[2],"g")),s=U):void 0!==c[3]&&(s=U):s===U?">"===c[0]?(s=i??z,l=-1):void 0===c[1]?l=-2:(l=s.lastIndex-c[2].length,n=c[1],s=void 0===c[3]?U:'"'===c[3]?L:I):s===L||s===I?s=U:s===W||s===N?s=z:(s=U,i=void 0);const p=s===U&&e[t+1].startsWith("/>")?" ":"";a+=s===z?r+D:l>=0?(o.push(n),r.slice(0,l)+E+r.slice(l)+P+p):r+P+(-2===l?t:p)}return[J(e,a+(e[r]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),o]};class G{constructor({strings:e,_$litType$:t},r){let o;this.parts=[];let i=0,a=0;const s=e.length-1,n=this.parts,[c,l]=X(e,t);if(this.el=G.createElement(c,r),q.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=q.nextNode())&&n.length<s;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(E)){const t=l[a++],r=o.getAttribute(e).split(P),s=/([.?@])?(.*)/.exec(t);n.push({type:1,index:i,name:s[2],strings:r,ctor:"."===s[1]?te:"?"===s[1]?re:"@"===s[1]?oe:ee}),o.removeAttribute(e)}else e.startsWith(P)&&(n.push({type:6,index:i}),o.removeAttribute(e));if(H.test(o.tagName)){const e=o.textContent.split(P),t=e.length-1;if(t>0){o.textContent=C?C.emptyScript:"";for(let r=0;r<t;r++)o.append(e[r],M()),q.nextNode(),n.push({type:2,index:++i});o.append(e[t],M())}}}else if(8===o.nodeType)if(o.data===A)n.push({type:2,index:i});else{let e=-1;for(;-1!==(e=o.data.indexOf(P,e+1));)n.push({type:7,index:i}),e+=P.length-1}i++}}static createElement(e,t){const r=T.createElement("template");return r.innerHTML=e,r}}function Z(e,t,r=e,o){if(t===Y)return t;let i=void 0!==o?r._$Co?.[o]:r._$Cl;const a=O(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),void 0===a?i=void 0:(i=new a(e),i._$AT(e,r,o)),void 0!==o?(r._$Co??=[])[o]=i:r._$Cl=i),void 0!==i&&(t=Z(e,i._$AS(e,t.values),i,o)),t}class K{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,o=(e?.creationScope??T).importNode(t,!0);q.currentNode=o;let i=q.nextNode(),a=0,s=0,n=r[0];for(;void 0!==n;){if(a===n.index){let t;2===n.type?t=new Q(i,i.nextSibling,this,e):1===n.type?t=new n.ctor(i,n.name,n.strings,this,e):6===n.type&&(t=new ie(i,this,e)),this._$AV.push(t),n=r[++s]}a!==n?.index&&(i=q.nextNode(),a++)}return q.currentNode=T,o}p(e){let t=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,o){this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Z(this,e,t),O(e)?e===j||null==e||""===e?(this._$AH!==j&&this._$AR(),this._$AH=j):e!==this._$AH&&e!==Y&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>R(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==j&&O(this._$AH)?this._$AA.nextSibling.data=e:this.T(T.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:r}=e,o="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=G.createElement(J(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===o)this._$AH.p(t);else{const e=new K(o,this),r=e.u(this.options);e.p(t),this.T(r),this._$AH=e}}_$AC(e){let t=B.get(e.strings);return void 0===t&&B.set(e.strings,t=new G(e)),t}k(e){R(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,o=0;for(const i of e)o===t.length?t.push(r=new Q(this.O(M()),this.O(M()),this,this.options)):r=t[o],r._$AI(i),o++;o<t.length&&(this._$AR(r&&r._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=k(e).nextSibling;k(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ee{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,o,i){this.type=1,this._$AH=j,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=i,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=j}_$AI(e,t=this,r,o){const i=this.strings;let a=!1;if(void 0===i)e=Z(this,e,t,0),a=!O(e)||e!==this._$AH&&e!==Y,a&&(this._$AH=e);else{const o=e;let s,n;for(e=i[0],s=0;s<i.length-1;s++)n=Z(this,o[r+s],t,s),n===Y&&(n=this._$AH[s]),a||=!O(n)||n!==this._$AH[s],n===j?e=j:e!==j&&(e+=(n??"")+i[s+1]),this._$AH[s]=n}a&&!o&&this.j(e)}j(e){e===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class te extends ee{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===j?void 0:e}}class re extends ee{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==j)}}class oe extends ee{constructor(e,t,r,o,i){super(e,t,r,o,i),this.type=5}_$AI(e,t=this){if((e=Z(this,e,t,0)??j)===Y)return;const r=this._$AH,o=e===j&&r!==j||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,i=e!==j&&(r===j||o);o&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ie{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Z(this,e)}}const ae=$.litHtmlPolyfillSupport;ae?.(G,Q),($.litHtmlVersions??=[]).push("3.3.2");const se=globalThis;
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */class ne extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,r)=>{const o=r?.renderBefore??t;let i=o._$litPart$;if(void 0===i){const e=r?.renderBefore??null;o._$litPart$=i=new Q(t.insertBefore(M(),e),e,void 0,r??{})}return i._$AI(e),i})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Y}}ne._$litElement$=!0,ne.finalized=!0,se.litElementHydrateSupport?.({LitElement:ne});const ce=se.litElementPolyfillSupport;ce?.({LitElement:ne}),(se.litElementVersions??=[]).push("4.2.2");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const le={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:w},de=(e=le,t,r)=>{const{kind:o,metadata:i}=r;let a=globalThis.litPropertyMetadata.get(i);if(void 0===a&&globalThis.litPropertyMetadata.set(i,a=new Map),"setter"===o&&((e=Object.create(e)).wrapped=!0),a.set(r.name,e),"accessor"===o){const{name:o}=r;return{set(r){const i=t.get.call(this);t.set.call(this,r),this.requestUpdate(o,i,e,!0,r)},init(t){return void 0!==t&&this.C(o,void 0,e,t),t}}}if("setter"===o){const{name:o}=r;return function(r){const i=this[o];t.call(this,r),this.requestUpdate(o,i,e,!0,r)}}throw Error("Unsupported decorator location: "+o)};function pe(e){return(t,r)=>"object"==typeof r?de(e,t,r):((e,t,r)=>{const o=t.hasOwnProperty(r);return t.constructor.createProperty(r,e),o?Object.getOwnPropertyDescriptor(t,r):void 0})(e,t,r)}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function he(e){return pe({...e,state:!0,attribute:!1})}const _e={en:{"editor.basic_settings":"Basic Settings","editor.source_entry_id_label":"Primary Tariff","editor.source_entry_id_helper":"Select the Octopus Energy tariff to display consumption data for","editor.entity_label":"Entity","editor.entity_helper":"Select the Octopus Energy España consumption sensor (deprecated)","editor.display_options":"Display Options","editor.show_comparison_label":"Show Comparison","editor.show_comparison_helper":"Compare current period with previous period","editor.default_period_label":"Default Period","editor.default_period_helper":"Initial time period to display","editor.chart_type_label":"Chart Type","editor.chart_type_helper":"Type of chart to display","editor.show_navigation_label":"Show Navigation","editor.show_navigation_helper":"Show period navigation buttons","editor.tariff_comparison":"Tariff Comparison","editor.show_tariff_comparison_label":"Show Tariff Comparison","editor.show_tariff_comparison_helper":"Compare consumption costs across different tariffs","editor.tariff_entry_ids_label":"Comparison Tariffs","editor.tariff_entry_ids_helper":"Optional: Select additional tariffs to compare costs","editor.cost_display":"Cost Display","editor.show_cost_on_chart_label":"Show Cost on Chart","editor.show_cost_on_chart_helper":"Display cost information on the chart","editor.selected_tariff_for_cost_label":"Selected Tariff for Cost","editor.selected_tariff_for_cost_helper":"Tariff entry ID to use for cost calculation","editor.consumption_sensor_label":"Consumption Sensor Override","editor.consumption_sensor_helper":"Optional: Manually specify a consumption sensor instead of using integration data","editor.migration_warning":"Configuration migration required. Please edit the card and select your tariff.","editor.select_tariff":"Select a tariff to get started","editor.view_label":"View","editor.view_helper":"Select which view to display","editor.view_consumption":"Consumption Overview","editor.view_heat_calendar":"Heat Calendar","editor.view_week_analysis":"Week Analysis","editor.view_tariff_comparison":"Tariff Comparison","editor.chart_type_line":"Line","editor.chart_type_bar":"Bar","editor.chart_type_stacked_area":"Stacked Area","editor.chart_type_heat_calendar":"Heat Calendar","editor.advanced_visualization":"Advanced Visualization","editor.show_period_distribution_label":"Show Period Distribution","editor.show_period_distribution_helper":"Show P1/P2/P3 consumption breakdown on chart","editor.show_moving_average_label":"Show Moving Average","editor.show_moving_average_helper":"Display trend line with moving average","editor.moving_average_days_label":"Moving Average Days","editor.moving_average_days_helper":"Number of days for moving average calculation (default: 7)","editor.period_day":"Day","editor.period_week":"Week","editor.period_month":"Month","editor.show_heat_calendar_label":"Show Heat Calendar","editor.show_heat_calendar_helper":"Display consumption heatmap calendar","editor.heat_calendar_period_label":"Heat Calendar Period","editor.heat_calendar_period_helper":"Time period for heat calendar display","editor.heat_calendar_period_month":"Month","editor.heat_calendar_period_year":"Year","editor.show_week_comparison_label":"Show Week Comparison","editor.show_week_comparison_helper":"Compare consumption across consecutive weeks","editor.week_comparison_count_label":"Week Comparison Count","editor.week_comparison_count_helper":"Number of weeks to compare (default: 2)","editor.show_cost_trend_label":"Show Cost Trend","editor.show_cost_trend_helper":"Display cost trend with moving average","editor.cost_moving_average_days_label":"Cost Moving Average Days","editor.cost_moving_average_days_helper":"Number of days for cost moving average (default: 30)","editor.show_tariff_chart_label":"Show Tariff Chart","editor.show_tariff_chart_helper":"Display visual chart in tariff comparison section","editor.entity_required":"Entity is required","editor.entity_invalid":"Entity must be an Octopus Energy España sensor (sensor.octopus_energy_es_*)"},es:{"editor.basic_settings":"Configuración Básica","editor.source_entry_id_label":"Tarifa Principal","editor.source_entry_id_helper":"Selecciona la tarifa de Octopus Energy para mostrar datos de consumo","editor.entity_label":"Entidad","editor.entity_helper":"Seleccione el sensor de consumo de Octopus Energy España (obsoleto)","editor.display_options":"Opciones de Visualización","editor.show_comparison_label":"Mostrar Comparación","editor.show_comparison_helper":"Comparar período actual con período anterior","editor.default_period_label":"Período Predeterminado","editor.default_period_helper":"Período de tiempo inicial a mostrar","editor.chart_type_label":"Tipo de Gráfico","editor.chart_type_helper":"Tipo de gráfico a mostrar","editor.show_navigation_label":"Mostrar Navegación","editor.show_navigation_helper":"Mostrar botones de navegación de período","editor.tariff_comparison":"Comparación de Tarifas","editor.show_tariff_comparison_label":"Mostrar Comparación de Tarifas","editor.show_tariff_comparison_helper":"Comparar costes de consumo entre diferentes tarifas","editor.tariff_entry_ids_label":"Tarifas de Comparación","editor.tariff_entry_ids_helper":"Opcional: Selecciona tarifas adicionales para comparar costes","editor.cost_display":"Visualización de Costes","editor.show_cost_on_chart_label":"Mostrar Coste en Gráfico","editor.show_cost_on_chart_helper":"Mostrar información de costes en el gráfico","editor.selected_tariff_for_cost_label":"Tarifa Seleccionada para Coste","editor.selected_tariff_for_cost_helper":"ID de entrada de tarifa a usar para cálculo de costes","editor.consumption_sensor_label":"Sensor de Consumo Manual","editor.consumption_sensor_helper":"Opcional: Especifica manualmente un sensor de consumo en lugar de usar datos de integración","editor.migration_warning":"Se requiere migración de configuración. Por favor, edita la tarjeta y selecciona tu tarifa.","editor.select_tariff":"Selecciona una tarifa para comenzar","editor.view_label":"Vista","editor.view_helper":"Selecciona qué vista mostrar","editor.view_consumption":"Resumen de Consumo","editor.view_heat_calendar":"Calendario de Calor","editor.view_week_analysis":"Análisis Semanal","editor.view_tariff_comparison":"Comparación de Tarifas","editor.chart_type_line":"Línea","editor.chart_type_bar":"Barras","editor.chart_type_stacked_area":"Área Apilada","editor.chart_type_heat_calendar":"Calendario de Calor","editor.advanced_visualization":"Visualización Avanzada","editor.show_period_distribution_label":"Mostrar Distribución por Períodos","editor.show_period_distribution_helper":"Mostrar desglose de consumo P1/P2/P3 en el gráfico","editor.show_moving_average_label":"Mostrar Media Móvil","editor.show_moving_average_helper":"Mostrar línea de tendencia con media móvil","editor.moving_average_days_label":"Días de Media Móvil","editor.moving_average_days_helper":"Número de días para el cálculo de la media móvil (predeterminado: 7)","editor.period_day":"Día","editor.period_week":"Semana","editor.period_month":"Mes","editor.show_heat_calendar_label":"Mostrar Calendario de Calor","editor.show_heat_calendar_helper":"Mostrar mapa de calor de consumo","editor.heat_calendar_period_label":"Período del Calendario de Calor","editor.heat_calendar_period_helper":"Período de tiempo para el calendario de calor","editor.heat_calendar_period_month":"Mes","editor.heat_calendar_period_year":"Año","editor.show_week_comparison_label":"Mostrar Comparación Semanal","editor.show_week_comparison_helper":"Comparar consumo entre semanas consecutivas","editor.week_comparison_count_label":"Número de Semanas a Comparar","editor.week_comparison_count_helper":"Número de semanas para comparar (predeterminado: 2)","editor.show_cost_trend_label":"Mostrar Tendencia de Costes","editor.show_cost_trend_helper":"Mostrar tendencia de costes con media móvil","editor.cost_moving_average_days_label":"Días de Media Móvil de Costes","editor.cost_moving_average_days_helper":"Número de días para la media móvil de costes (predeterminado: 30)","editor.show_tariff_chart_label":"Mostrar Gráfico de Tarifas","editor.show_tariff_chart_helper":"Mostrar gráfico visual en la sección de comparación de tarifas","editor.entity_required":"La entidad es requerida","editor.entity_invalid":"La entidad debe ser un sensor de Octopus Energy España (sensor.octopus_energy_es_*)"},be:{"editor.basic_settings":"Асноўныя налады","editor.source_entry_id_label":"Асноўны тарыф","editor.source_entry_id_helper":"Выберыце тарыф Octopus Energy для адлюстравання даных спажывання","editor.entity_label":"Сутнасць","editor.entity_helper":"Выберыце сэнсар спажывання Octopus Energy España (састарэлы)","editor.display_options":"Параметры адлюстравання","editor.show_comparison_label":"Паказаць параўнанне","editor.show_comparison_helper":"Параўнаць бягучы перыяд з папярэднім перыядам","editor.default_period_label":"Перыяд па змаўчанні","editor.default_period_helper":"Пачатковы часовы перыяд для адлюстравання","editor.chart_type_label":"Тып дыяграмы","editor.chart_type_helper":"Тып дыяграмы для адлюстравання","editor.show_navigation_label":"Паказаць навігацыю","editor.show_navigation_helper":"Паказаць кнопкі навігацыі па перыядах","editor.tariff_comparison":"Параўнанне тарыфаў","editor.show_tariff_comparison_label":"Паказаць параўнанне тарыфаў","editor.show_tariff_comparison_helper":"Параўнаць выдаткі на спажыванне паміж рознымі тарыфамі","editor.tariff_entry_ids_label":"Тарыфы для параўнання","editor.tariff_entry_ids_helper":"Неабавязкова: Выберыце дадатковыя тарыфы для параўнання кошту","editor.cost_display":"Адлюстраванне кошту","editor.show_cost_on_chart_label":"Паказаць кошт на дыяграме","editor.show_cost_on_chart_helper":"Адлюстраваць інфармацыю аб кошце на дыяграме","editor.selected_tariff_for_cost_label":"Выбраны тарыф для кошту","editor.selected_tariff_for_cost_helper":"ID запісу тарыфу для разліку кошту","editor.consumption_sensor_label":"Ручны сенсар спажывання","editor.consumption_sensor_helper":"Неабавязкова: Укажыце сенсар спажывання ўручную замест выкарыстання даных інтэграцыі","editor.migration_warning":"Патрабуецца міграцыя канфігурацыі. Калі ласка, адрэдагуйце картку і выберыце свой тарыф.","editor.select_tariff":"Выберыце тарыф для пачатку","editor.view_label":"Выгляд","editor.view_helper":"Выберыце, які выгляд адлюстраваць","editor.view_consumption":"Агляд спажывання","editor.view_heat_calendar":"Каляндар цяпла","editor.view_week_analysis":"Тыднёвы аналіз","editor.view_tariff_comparison":"Параўнанне тарыфаў","editor.chart_type_line":"Лінія","editor.chart_type_bar":"Слупкі","editor.chart_type_stacked_area":"Стопачная дыяграма","editor.chart_type_heat_calendar":"Каляндар цяпла","editor.advanced_visualization":"Пашыраная візуалізацыя","editor.show_period_distribution_label":"Паказаць размеркаванне па перыядах","editor.show_period_distribution_helper":"Паказаць разбіўку спажывання P1/P2/P3 на дыяграме","editor.show_moving_average_label":"Паказаць рухомае сярэдняе","editor.show_moving_average_helper":"Паказаць лінію трэнду з рухомым сярэднім","editor.moving_average_days_label":"Дні рухомага сярэдняга","editor.moving_average_days_helper":"Колькасць дзён для разліку рухомага сярэдняга (па змаўчанні: 7)","editor.period_day":"Дзень","editor.period_week":"Тыдзень","editor.period_month":"Месяц","editor.show_heat_calendar_label":"Паказаць каляндар цяпла","editor.show_heat_calendar_helper":"Адлюстраваць карту цяпла спажывання","editor.heat_calendar_period_label":"Перыяд каляндара цяпла","editor.heat_calendar_period_helper":"Часавы перыяд для адлюстравання каляндара цяпла","editor.heat_calendar_period_month":"Месяц","editor.heat_calendar_period_year":"Год","editor.show_week_comparison_label":"Паказаць параўнанне тыдняў","editor.show_week_comparison_helper":"Параўнаць спажыванне паміж паслядоўнымі тыднямі","editor.week_comparison_count_label":"Колькасць тыдняў для параўнання","editor.week_comparison_count_helper":"Колькасць тыдняў для параўнання (па змаўчанні: 2)","editor.show_cost_trend_label":"Паказаць трэнд кошту","editor.show_cost_trend_helper":"Адлюстраваць трэнд кошту з рухомым сярэднім","editor.cost_moving_average_days_label":"Дні рухомага сярэдняга кошту","editor.cost_moving_average_days_helper":"Колькасць дзён для рухомага сярэдняга кошту (па змаўчанні: 30)","editor.show_tariff_chart_label":"Паказаць дыяграму тарыфаў","editor.show_tariff_chart_helper":"Адлюстраваць візуальную дыяграму ў раздзеле параўнання тарыфаў","editor.entity_required":"Сутнасць абавязковая","editor.entity_invalid":"Сутнасць павінна быць сэнсарам Octopus Energy España (sensor.octopus_energy_es_*)"}};function ue(e,t="en"){const r=t.toLowerCase(),o=_e[r]?.[e]||_e.en?.[e];return o||e.replace("editor.","").replace(/_/g," ")}const fe=s`
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
    color: var(--secondary-text-color, #888);
    font-size: 12px;
    font-family: var(--mdc-typography-body1-font-family, Roboto, sans-serif);
    pointer-events: none;
    user-select: none;
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
`,me=s`
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
`;var ge=function(e,t,r,o){var i,a=arguments.length,s=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(a<3?i(s):a>3?i(t,r,s):i(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s};void 0!==ne&&ne.disableWarning&&ne.disableWarning("change-in-update");class ve extends ne{constructor(){super(...arguments),this._config={type:"custom:octopus-consumption-card",source_entry_id:"",view:"consumption",show_comparison:!0,default_period:"week",chart_type:"line",show_tariff_comparison:!1,tariff_entry_ids:[],show_cost_on_chart:!1,show_navigation:!0,show_period_distribution:!1,show_moving_average:!1,moving_average_days:7},this._language="en",this._computeLabel=e=>function(e,t="en"){return ue(`editor.${e.name}_label`,t)}(e,this._language),this._computeHelper=e=>function(e,t="en"){return ue(`editor.${e.name}_helper`,t)}(e,this._language)}setConfig(e){const t={...e,view:e.view||"consumption"};JSON.stringify(this._config)!==JSON.stringify(t)&&(this._config=t)}willUpdate(e){if(e.has("config")&&this.config){const e={...this.config,view:this.config.view||"consumption"};JSON.stringify(this._config)!==JSON.stringify(e)&&(this._config=e)}if(e.has("hass")&&this.hass){const e=this.hass.language||"en";this._language!==e&&(this._language=e)}}firstUpdated(){if(this.config){const e={...this.config,view:this.config.view||"consumption"};JSON.stringify(this._config)!==JSON.stringify(e)&&(this._config=e)}this.hass&&(this._language=this.hass.language||"en")}_valueChanged(e){if(!this._config||!this.hass)return;const t=e.detail.value;t.view||(t.view="consumption");const r=this._config.view!==t.view;!1===t.show_tariff_comparison&&(t.show_cost_on_chart=!1,t.selected_tariff_for_cost=void 0,t.tariff_entry_ids=void 0),!1===t.show_cost_on_chart&&(t.selected_tariff_for_cost=void 0),this._config=t,r&&this.requestUpdate(),this._fireConfigChanged()}_fireConfigChanged(){const e=new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0});this.dispatchEvent(e)}_buildSchema(){const e=this._config.view||"consumption",t=[{name:"view",selector:{select:{mode:"dropdown",options:[{value:"consumption",label:ue("editor.view_consumption",this._language)},{value:"heat-calendar",label:ue("editor.view_heat_calendar",this._language)},{value:"week-analysis",label:ue("editor.view_week_analysis",this._language)},{value:"tariff-comparison",label:ue("editor.view_tariff_comparison",this._language)}]}}},{name:"source_entry_id",required:!0,selector:{config_entry:{integration:"octopus_energy_es"}}}];return"consumption"===e?(t.push({name:"show_comparison",selector:{boolean:{}}},{name:"default_period",selector:{select:{mode:"dropdown",options:[{value:"day",label:ue("editor.period_day",this._language)},{value:"week",label:ue("editor.period_week",this._language)},{value:"month",label:ue("editor.period_month",this._language)}]}}},{name:"chart_type",selector:{select:{mode:"dropdown",options:[{value:"line",label:ue("editor.chart_type_line",this._language)},{value:"bar",label:ue("editor.chart_type_bar",this._language)},{value:"stacked-area",label:ue("editor.chart_type_stacked_area",this._language)}]}}},{name:"show_navigation",selector:{boolean:{}}},{name:"show_period_distribution",selector:{boolean:{}}},{name:"show_moving_average",selector:{boolean:{}}}),this._config.show_moving_average&&t.push({name:"moving_average_days",selector:{number:{min:2,max:30,mode:"box"}}}),t.push({name:"show_cost_on_chart",selector:{boolean:{}}}),this._config.show_cost_on_chart&&t.push({name:"selected_tariff_for_cost",selector:{config_entry:{integration:"octopus_energy_es"}}}),t.push({name:"show_cost_trend",selector:{boolean:{}}}),this._config.show_cost_trend&&t.push({name:"cost_moving_average_days",selector:{number:{min:2,max:90,mode:"box"}}})):"heat-calendar"===e?t.push({name:"heat_calendar_period",selector:{select:{mode:"dropdown",options:[{value:"month",label:ue("editor.heat_calendar_period_month",this._language)},{value:"year",label:ue("editor.heat_calendar_period_year",this._language)}]}}},{name:"show_navigation",selector:{boolean:{}}}):"week-analysis"===e?(t.push({name:"show_week_comparison",selector:{boolean:{}}},{name:"show_navigation",selector:{boolean:{}}}),this._config.show_week_comparison&&t.push({name:"week_comparison_count",selector:{number:{min:2,max:8,mode:"box"}}})):"tariff-comparison"===e&&(t.push({name:"show_tariff_comparison",selector:{boolean:{}}}),this._config.show_tariff_comparison&&t.push({name:"show_tariff_chart",selector:{boolean:{}}})),t.push({name:"consumption_sensor",selector:{entity:{domain:"sensor"}}}),t}_handleTariffSelection(e,t){const r=t.detail.value;this._config.tariff_entry_ids||(this._config.tariff_entry_ids=[]);const o=[...this._config.tariff_entry_ids];for(;o.length<=e;)o.push("");if(r){const t=o.findIndex((t,o)=>o!==e&&t===r);-1!==t&&(o[t]=""),o[e]=r,this._config.tariff_entry_ids=o.filter((e,t,r)=>e&&r.indexOf(e)===t)}else o.splice(e,1),this._config.tariff_entry_ids=o.filter(e=>e);this.requestUpdate(),this._fireConfigChanged()}_removeTariff(e){if(!this._config.tariff_entry_ids||e>=this._config.tariff_entry_ids.length)return;const t=[...this._config.tariff_entry_ids];t.splice(e,1),this._config.tariff_entry_ids=t.filter(e=>e),this.requestUpdate(),this._fireConfigChanged()}_renderTariffDropdowns(){if(!this._config.show_tariff_comparison)return V``;const e=this._config.tariff_entry_ids||[],t=e.length>0?e.length+1:1;return V`
      <div class="form-group">
        <label>${ue("editor.tariff_entry_ids_label",this._language)}</label>
        <div class="tariff-dropdown-list">
          ${Array.from({length:t},(t,r)=>{const o=e[r]||"";return V`
              <div class="tariff-dropdown-item">
                <ha-selector
                  .hass=${this.hass}
                  .selector=${{config_entry:{integration:"octopus_energy_es"}}}
                  .value=${o}
                  .label=${0===r?ue("editor.tariff_entry_ids_helper",this._language):""}
                  @value-changed=${e=>this._handleTariffSelection(r,e)}
                ></ha-selector>
                ${o?V`
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
    `}render(){if(!this.hass)return V`<div class="card-config">Loading...</div>`;const e=this._buildSchema(),t=this._config.view||"consumption";return V`
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
        
        <!-- Custom Tariff Selection UI for tariff-comparison view -->
        ${"tariff-comparison"===t&&this._config.show_tariff_comparison?this._renderTariffDropdowns():""}
      </div>
    `}}ve.enabledWarnings=[],ve.styles=me,ge([pe({attribute:!1})],ve.prototype,"hass",void 0),ge([pe({attribute:!1})],ve.prototype,"config",void 0),ge([he()],ve.prototype,"_config",void 0),"undefined"!=typeof window&&"undefined"!=typeof customElements&&(customElements.get("octopus-consumption-card-editor")||customElements.define("octopus-consumption-card-editor",ve));class ye{static info(e,...t){const r=[e,this.STYLES.info];t.forEach((e,t)=>{r.push(e,t%2==0?this.STYLES.infoValue:this.STYLES.info)}),console.log(...r)}static error(e,t){t?console.error(`%c${e}%c${t}`,this.STYLES.error,this.STYLES.errorValue):console.error(`%c${e}`,this.STYLES.error)}static warn(e,t){t?console.warn(`%c${e}%c${t}`,this.STYLES.warning,this.STYLES.warningValue):console.warn(`%c${e}`,this.STYLES.warning)}static success(e){console.log(`%c${e}`,this.STYLES.success)}static data(e,t){console.log(`%c  ${e}: %c${JSON.stringify(t,null,2)}`,this.STYLES.info,this.STYLES.infoValue)}static serviceCall(e,t,r=!1){this.info("  Calling service: ",`${e}.${t}${r?" (with return_response)":""}`)}static serviceData(e){this.data("Service data",e)}static serviceResponse(e){this.data("Raw Service Response",e)}static serviceError(e){console.error("%c  Service Error Details: %c"+JSON.stringify(e,Object.getOwnPropertyNames(e),2),this.STYLES.info,this.STYLES.errorValue)}static groupServiceCall(e,t){console.groupCollapsed(`%c🔧 Service Call: %c${e}.${t}`,this.STYLES.info,this.STYLES.infoValue)}static groupEnd(){console.groupEnd()}static groupDataLoad(e,t,r){console.groupCollapsed(`%c📊 Loading Data: %cEntry: ${e} | Period: ${t} | ${r}`,this.STYLES.info,this.STYLES.infoValue)}static groupError(e){console.groupCollapsed(`%c❌ ${e}`,this.STYLES.error)}}ye.STYLES={info:"color: #666; font-size: 11px;",infoValue:"color: #999; font-size: 11px; font-family: monospace;",error:"color: #f00; font-size: 11px; font-weight: bold;",errorValue:"color: #f00; font-size: 11px;",warning:"color: #ff9800; font-size: 11px;",warningValue:"color: #ff9800; font-size: 11px;",success:"color: #4caf50; font-size: 11px;"};var we=function(e,t,r,o){var i,a=arguments.length,s=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(a<3?i(s):a>3?i(t,r,s):i(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s};void 0!==ne&&ne.disableWarning&&ne.disableWarning("change-in-update");class be extends ne{constructor(){super(...arguments),this._consumptionData=[],this._comparisonResult=null,this._tariffCosts=null,this._loading=!1,this._error=null,this._comparisonError=null,this._currentPeriod="week",this._currentDate=new Date,this._weekComparisonData=null}setConfig(e){if(!e)throw new Error("Invalid configuration");const t={...e,view:e.view||"consumption"};this.config=t,t.default_period&&(this._currentPeriod=t.default_period)}getCardSize(){let e=1;return this.config&&!1!==this.config.show_navigation&&(e+=1),this.config&&this.config.show_tariff_comparison&&(e+=1),e}connectedCallback(){super.connectedCallback(),this._validateConfig(),this._currentPeriod=this.config.default_period||"week",this._loadData()}updated(e){super.updated(e),e.has("config")&&(this._validateConfig(),this.config.default_period&&this._currentPeriod!==this.config.default_period&&(this._currentPeriod=this.config.default_period),void 0!==e.get("config")&&this._loadData())}_validateConfig(){return this.config?this.config.source_entry_id?(!this.config.show_tariff_comparison||this.config.tariff_entry_ids&&0!==this.config.tariff_entry_ids.length||ye.warn("show_tariff_comparison is enabled but no tariff_entry_ids provided. Comparison will be disabled."),void(this.config.show_cost_on_chart&&!this.config.selected_tariff_for_cost&&ye.warn("show_cost_on_chart is enabled but selected_tariff_for_cost is not set. Cost display will be disabled."))):(this._error="source_entry_id is required. Please select your tariff from the card editor.",void(this._loading=!1)):(this._error="Card configuration is required",void(this._loading=!1))}_createTimeoutPromise(e){return new Promise((t,r)=>{setTimeout(()=>r(new Error("Request timeout. The service call took too long to respond.")),e)})}async _callServiceWithTimeout(e,t,r,o=!0){ye.groupServiceCall(e,t);try{let i;if(ye.serviceCall(e,t,o),r&&ye.serviceData(r),o&&this.hass.callWS)try{i=await this._callServiceViaWebSocket(e,t,r)}catch(o){const a=o instanceof Error?o.message:String(o);ye.warn("⚠ WebSocket call failed, falling back to callService: ",a),i=await this._callServiceViaStandard(e,t,r)}else i=await this._callServiceViaStandard(e,t,r);return ye.serviceResponse(i),ye.groupEnd(),i}catch(r){throw ye.serviceError(r),ye.groupEnd(),this._handleServiceError(r,e,t)}}_handleServiceError(e,t,r){if(e instanceof Error)return e.message.includes("timeout")?new Error(`Service call timeout: ${t}.${r} took longer than ${be.SERVICE_TIMEOUT}ms`):e.message.includes("Service not found")||e.message.includes("not available")?new Error(`Service ${t}.${r} is not available. Please ensure the Octopus Energy España integration is installed and configured.`):"service_validation_error"===e.code?this._handleValidationError(e):new Error(`Service call failed: ${t}.${r} - ${e.message}`);if(e&&"object"==typeof e){const o=e;if("service_validation_error"===o.code)return this._handleValidationError(o);const i=o.message||o.translation_key||"Unknown service error";return new Error(`Service call failed: ${t}.${r} - ${i}`)}return e instanceof Error?e:new Error(String(e))}_handleValidationError(e){const t=(Error,e);let r=t.message||t.translation_key||"Service validation error";return r.includes("return_response")&&(r="The service integration may not support response data yet. Please ensure you're using the latest version of the Octopus Energy España integration and that it has been reloaded after updating."),new Error(`Service validation error: ${r}`)}_validateConsumptionResponse(e){if(!e||"object"!=typeof e)throw ye.groupError("Invalid service response"),ye.error("✗ Invalid service response: ","expected object with success field"),ye.groupEnd(),new Error("Invalid response from service: expected object with success field");if(!("success"in e))throw ye.groupError("Invalid service response format"),ye.error("✗ Invalid service response format: ","response does not contain success field"),ye.data("Received response",e),ye.groupEnd(),new Error("Service returned unexpected response format. The service may not be returning data correctly. Please check the integration configuration and ensure the service supports returning response data.")}_extractErrorMessage(e){return e instanceof Error?e.message:e&&"object"==typeof e?e.message||e.translation_key||JSON.stringify(e):String(e)}_createUserFriendlyError(e){if(e instanceof Error)return e;if(e&&"object"==typeof e){const t=e;let r=t.message||t.translation_key||JSON.stringify(e);return"service_validation_error"===t.code&&(r=r.includes("return_response")?"The service integration may not support response data yet. Please ensure you're using the latest version of the Octopus Energy España integration and that it has been reloaded after updating.":r||"Service validation error. Please check your configuration."),new Error(r)}return new Error(String(e))}_extractWebSocketResponse(e){return e&&"object"==typeof e?"service_response"in e?e.service_response:"response"in e?e.response:e:e}async _callServiceViaWebSocket(e,t,r){if(!this.hass.callWS)throw new Error("callWS is not available");const o=this.hass.callWS({type:"call_service",domain:e,service:t,service_data:r,return_response:!0}),i=this._createTimeoutPromise(be.SERVICE_TIMEOUT),a=await Promise.race([o,i]);return this._extractWebSocketResponse(a)}async _callServiceViaStandard(e,t,r){const o=this.hass.callService(e,t,r),i=this._createTimeoutPromise(be.SERVICE_TIMEOUT);return await Promise.race([o,i])}async _loadData(){if(!this.hass||!this.config)return;const e=this.config.source_entry_id;if(!e)return this._error="source_entry_id is required. Please select your tariff from the card editor.",void(this._loading=!1);this._loading=!0,this._error=null,this._comparisonError=null;try{const{startDate:t,endDate:r}=this._getDateRange();this._validateDateRange(t,r);const o=`${t.toISOString().split("T")[0]} → ${r.toISOString().split("T")[0]}`;ye.groupDataLoad(e,this._currentPeriod,o);const i=await this._fetchConsumptionData(e,t,r);this._consumptionData=i.consumption_data||[],i.tariff_costs?this._tariffCosts=i.tariff_costs:this._tariffCosts=null;const a=this.config.view||"consumption";"tariff-comparison"===a&&this.config.show_tariff_comparison&&this.config.tariff_entry_ids?.length?await this._fetchTariffComparison(e,t,r):this._comparisonResult=null,"week-analysis"===a&&this.config.show_week_comparison?this._weekComparisonData=this._calculateWeekComparison():this._weekComparisonData=null,ye.groupEnd()}catch(e){ye.groupError("Error loading data"),this._error=e instanceof Error?e.message:String(e),ye.error("Error loading data: ",this._extractErrorMessage(e)),ye.data("Error details",e),ye.groupEnd()}finally{this._loading=!1}}_validateDateRange(e,t){if(e>new Date)throw new Error(`Invalid date range: start date (${e.toISOString().split("T")[0]}) is in the future. Please navigate to a past period.`);if(e>t)throw new Error("Invalid date range: start date is after end date.")}async _fetchConsumptionData(e,t,r){const o="heat-calendar"===this.config.chart_type&&"year"===this.config.heat_calendar_period?"daily":"day"===this._currentPeriod||"week"===this._currentPeriod?"hourly":"daily";let i;try{i=await this._callServiceWithTimeout(be.SERVICE_DOMAIN,be.SERVICE_FETCH_CONSUMPTION,{entry_id:e,start_date:t.toISOString().split("T")[0],end_date:r.toISOString().split("T")[0],granularity:o}),ye.data("Raw Service Response (before processing)",i);const a=i;return this._validateConsumptionResponse(a),a.success||this._handleConsumptionError(a,e),a}catch(e){throw ye.groupError("Service call failed"),ye.error("✗ Service call failed: ",this._extractErrorMessage(e)),ye.data("Full Error Object",e),ye.groupEnd(),this._createUserFriendlyError(e)}}_handleConsumptionError(e,t){const r=e.error||"Failed to fetch consumption data";let o=r;throw e.warning&&(o+=`. ${e.warning}`,ye.warn("⚠ Service Warning: ",e.warning)),ye.groupError("Service returned error"),ye.error("✗ Service returned error: ",r),ye.data("Requested Entry ID",t),e.context&&(ye.data("Service Context",e.context),e.context.id&&e.context.id!==t&&ye.warn("⚠ Note: Service context shows different entry ID (",e.context.id+"). This may be informational.")),ye.groupEnd(),ye.data("Full Response",{success:e.success,error:e.error,warning:e.warning,context:e.context}),new Error(o)}async _fetchTariffComparison(e,t,r){try{const o="day"===this._currentPeriod?"daily":"week"===this._currentPeriod?"weekly":"monthly",i=await this._callServiceWithTimeout(be.SERVICE_DOMAIN,be.SERVICE_COMPARE_TARIFFS,{tariff_entry_ids:this.config.tariff_entry_ids,source_entry_id:e,period:o,start_date:t.toISOString().split("T")[0],end_date:r.toISOString().split("T")[0]});if(i.success&&i.result)this._comparisonResult=i.result;else{const e=i.error||"Failed to compare tariffs";this._comparisonError=e,ye.groupError("Tariff comparison failed"),ye.warn("⚠ Tariff comparison failed: ",e),ye.groupEnd()}}catch(e){const t=e instanceof Error?e.message:String(e);this._comparisonError=`Tariff comparison error: ${t}`,ye.groupError("Tariff comparison error"),ye.warn("⚠ Tariff comparison error: ",t),ye.groupEnd()}}_getDateRange(){if("heat-calendar"===this.config.chart_type&&"year"===this.config.heat_calendar_period){const e=this._currentDate.getFullYear(),t=new Date,r=e===t.getFullYear(),o=new Date(e,0,1);o.setHours(0,0,0,0);const i=r?new Date(t):new Date(e,11,31);return i.setHours(23,59,59,999),{startDate:o,endDate:i}}const e=new Date(this._currentDate);e.setHours(23,59,59,999);const t=new Date(e);return"day"===this._currentPeriod?t.setHours(0,0,0,0):"week"===this._currentPeriod?(t.setDate(t.getDate()-6),t.setHours(0,0,0,0)):"month"===this._currentPeriod&&(t.setDate(t.getDate()-29),t.setHours(0,0,0,0)),{startDate:t,endDate:e}}_navigatePeriod(e){const t="prev"===e?-1:1;if("heat-calendar"===this.config.chart_type&&"year"===this.config.heat_calendar_period)return this._currentDate.setFullYear(this._currentDate.getFullYear()+t),this._currentDate=new Date(this._currentDate),void this._loadData();"day"===this._currentPeriod?this._currentDate.setDate(this._currentDate.getDate()+t):"week"===this._currentPeriod?this._currentDate.setDate(this._currentDate.getDate()+7*t):"month"===this._currentPeriod&&this._currentDate.setMonth(this._currentDate.getMonth()+t),this._currentDate=new Date(this._currentDate),this._loadData()}_setPeriod(e){this._currentPeriod=e,this._loadData()}_extractPeriodData(){if(this._tariffCosts&&this.config.source_entry_id){const e=this._tariffCosts[this.config.source_entry_id];if(e&&e.hourly_breakdown){const t=new Map;for(const r of e.hourly_breakdown){const e=r.hour||"",o=r.consumption||0,i=r.period;t.has(e)||t.set(e,{p1:0,p2:0,p3:0});const a=t.get(e);"P1"===i?a.p1+=o:"P2"===i?a.p2+=o:"P3"===i&&(a.p3+=o)}const r=Array.from(t.entries()).map(([e,t])=>({timestamp:e,...t}));if(r.length>0)return r}if(e&&e.daily_breakdown&&"month"===this._currentPeriod&&e.period_breakdown){const t=e.period_breakdown.p1_percentage/100,r=e.period_breakdown.p2_percentage/100,o=e.period_breakdown.p3_percentage/100;return e.daily_breakdown.map(e=>({timestamp:e.date,p1:e.consumption*t,p2:e.consumption*r,p3:e.consumption*o}))}}if(this._consumptionData.length>0){const e=this._consumptionData[0];if(void 0!==e.p1_consumption||e.period)return this._consumptionData.map(e=>({timestamp:e.start_time||e.date||"",p1:e.p1_consumption||("P1"===e.period?e.consumption:0),p2:e.p2_consumption||("P2"===e.period?e.consumption:0),p3:e.p3_consumption||("P3"===e.period?e.consumption:0)}))}return null}_calculateMovingAverage(e,t){if(t<2||0===e.length)return e.map(()=>null);const r=[];for(let o=0;o<e.length;o++)if(o<t-1)r.push(null);else{let i=0;for(let r=0;r<t;r++)i+=e[o-r];r.push(i/t)}return r}_calculateCostMovingAverage(e,t=30){return this._calculateMovingAverage(e,t)}_renderHeatCalendar(){const e=this._getHeatCalendarData(),t="year"===(this.config.heat_calendar_period||"month");if(0===e.length)return V`
        <div class="error-message">
          <div class="error-title">Heat Calendar Unavailable</div>
          <div class="error-details">
            Daily breakdown data is not available. Please ensure tariff comparison is enabled or daily data is available from the service.
          </div>
        </div>
      `;const r=new Map,o=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],i=new Map;for(const o of e){const e=t?o.weekOfYear??0:o.weekOfMonth??0;r.has(e)||r.set(e,new Map),r.get(e).set(o.dayOfWeek,o),t&&void 0!==o.month&&(i.has(e)&&i.get(e)===o.month||i.set(e,o.month))}let a,s;if(t){const e=Array.from(r.keys());e.length>0?(s=Math.min(...e),a=Math.max(...e),a-s<51&&(a=s+52)):(s=0,a=52)}else a=Math.max(...Array.from(r.keys()),0),s=Math.min(...Array.from(r.keys()),0);const n=[];for(let e=s;e<=a;e++){const t=[];for(let o=0;o<7;o++){const i=r.get(e)?.get(o)||null;t.push(i)}n.push(t)}let c=null;if(t&&e.length>0){const t=e.reduce((e,t)=>e+t.consumption,0);c={totalConsumption:t,totalCost:e.reduce((e,t)=>e+t.cost,0),avgDailyConsumption:t/e.length,year:e[0]?.year||this._currentDate.getFullYear()}}return V`
      <div class="heat-calendar-container ${t?"heat-calendar-year-view":""}">
        <div class="comparison-title">
          Consumption Heat Calendar
          ${t&&c?V` - ${c.year}`:""}
        </div>
        ${t&&c?V`
          <div class="heat-calendar-summary">
            <span>Total: ${c.totalConsumption.toFixed(1)} kWh</span>
            <span>Avg/Day: ${c.avgDailyConsumption.toFixed(2)} kWh</span>
            <span>Cost: €${c.totalCost.toFixed(2)}</span>
          </div>
        `:""}
        <div class="heat-calendar-grid ${t?"heat-calendar-grid-year":""}">
          ${["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(e=>V`
            <div class="heat-calendar-day empty" style="font-weight: 600;">${e}</div>
          `)}
          ${n.map((e,r)=>{const a=s+r,n=i.get(a),c=t&&void 0!==n&&(0===r||i.get(s+r-1)!==n);return V`
              ${c?V`
                <div class="heat-calendar-month-label" style="grid-column: 1 / -1;">
                  ${o[n]}
                </div>
              `:""}
              ${e.map(e=>{if(!e)return V`<div class="heat-calendar-day empty"></div>`;const r=new Date(e.date),i=r.getDate(),a=o[r.getMonth()],s=t?`${a} ${i}, ${e.year}: ${e.consumption.toFixed(2)} kWh, €${e.cost.toFixed(2)}`:`${e.date}: ${e.consumption.toFixed(2)} kWh, €${e.cost.toFixed(2)}`;return V`
                  <div 
                    class="heat-calendar-day intensity-${e.intensity}"
                    title="${s}"
                  >
                    ${t?"":i}
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
    `}_renderWeekComparison(){if(!this._weekComparisonData||0===this._weekComparisonData.weeks.length)return V`<div class="loading">No week comparison data available</div>`;const{weeks:e,comparisons:t}=this._weekComparisonData;return V`
      <div class="week-comparison-section">
        <div class="comparison-title">Week-over-Week Comparison</div>
        <div class="week-comparison-grid">
          ${e.map((r,o)=>{const i=t.find(e=>e.weekIndex===o);return V`
              <div class="week-card">
                <div class="week-card-header">
                  Week ${e.length-o}
                  ${i?V`
                    <span class="week-change ${i.consumptionChangePercent>=0?"positive":"negative"}">
                      ${i.consumptionChangePercent>=0?"↑":"↓"} ${Math.abs(i.consumptionChangePercent).toFixed(1)}%
                    </span>
                  `:""}
                </div>
                <div class="week-card-metrics">
                  <div class="week-metric">
                    <span class="week-metric-label">Consumption:</span>
                    <span class="week-metric-value">${r.consumption.toFixed(1)} kWh</span>
                  </div>
                  <div class="week-metric">
                    <span class="week-metric-label">Cost:</span>
                    <span class="week-metric-value">€${r.cost.toFixed(2)}</span>
                  </div>
                  <div class="week-metric">
                    <span class="week-metric-label">Period:</span>
                    <span class="week-metric-value">${r.weekStart} - ${r.weekEnd}</span>
                  </div>
                </div>
              </div>
            `})}
        </div>
      </div>
    `}_renderTariffComparisonChart(){if(!this._comparisonResult||!this._comparisonResult.tariffs||0===this._comparisonResult.tariffs.length)return V``;const e=this._comparisonResult.tariffs;let t=0;for(const r of e){const e=r.period_breakdown;t=Math.max(t,e.p1_consumption,e.p2_consumption,e.p3_consumption),e.p1_consumption>0&&r.hourly_breakdown?.filter(e=>"P1"===e.period).reduce((e,t)=>e+t.cost,0),e.p2_consumption>0&&r.hourly_breakdown?.filter(e=>"P2"===e.period).reduce((e,t)=>e+t.cost,0),e.p3_consumption>0&&r.hourly_breakdown?.filter(e=>"P3"===e.period).reduce((e,t)=>e+t.cost,0)}return V`
      <div class="tariff-chart-container">
        <div class="period-breakdown-title">Consumption & Cost by Period</div>
        ${e.map(e=>{const r=e.period_breakdown,o=r.p1_consumption>0&&e.hourly_breakdown?.filter(e=>"P1"===e.period).reduce((e,t)=>e+t.cost,0)||0,i=r.p2_consumption>0&&e.hourly_breakdown?.filter(e=>"P2"===e.period).reduce((e,t)=>e+t.cost,0)||0,a=r.p3_consumption>0&&e.hourly_breakdown?.filter(e=>"P3"===e.period).reduce((e,t)=>e+t.cost,0)||0,s=r.p1_consumption>0?o/r.p1_consumption:0,n=r.p2_consumption>0?i/r.p2_consumption:0,c=r.p3_consumption>0?a/r.p3_consumption:0;return V`
            <div style="margin-top: 16px;">
              <div class="tariff-name" style="margin-bottom: 8px;">${e.name}</div>
              <div class="tariff-chart-bars">
                <div class="tariff-chart-bar-group">
                  <div class="tariff-chart-bar-label">P1</div>
                  <div 
                    class="tariff-chart-bar p1" 
                    style="height: ${t>0?r.p1_consumption/t*100:0}%"
                    title="P1: ${r.p1_consumption.toFixed(2)} kWh, €${o.toFixed(2)} (€${s.toFixed(3)}/kWh)"
                  ></div>
                </div>
                <div class="tariff-chart-bar-group">
                  <div class="tariff-chart-bar-label">P2</div>
                  <div 
                    class="tariff-chart-bar p2" 
                    style="height: ${t>0?r.p2_consumption/t*100:0}%"
                    title="P2: ${r.p2_consumption.toFixed(2)} kWh, €${i.toFixed(2)} (€${n.toFixed(3)}/kWh)"
                  ></div>
                </div>
                <div class="tariff-chart-bar-group">
                  <div class="tariff-chart-bar-label">P3</div>
                  <div 
                    class="tariff-chart-bar p3" 
                    style="height: ${t>0?r.p3_consumption/t*100:0}%"
                    title="P3: ${r.p3_consumption.toFixed(2)} kWh, €${a.toFixed(2)} (€${c.toFixed(3)}/kWh)"
                  ></div>
                </div>
              </div>
            </div>
          `})}
      </div>
    `}_getISOWeekOfYear(e){const t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate())),r=t.getUTCDay()||7;t.setUTCDate(t.getUTCDate()+4-r);const o=new Date(Date.UTC(t.getUTCFullYear(),0,1));return Math.ceil(((t.getTime()-o.getTime())/864e5+1)/7)-1}_getHeatCalendarData(){if(!this._tariffCosts||!this.config.source_entry_id)return[];const e=this._tariffCosts[this.config.source_entry_id];if(!e||!e.daily_breakdown||0===e.daily_breakdown.length)return[];const t=this.config.heat_calendar_period||"month";let r=e.daily_breakdown;if("year"===t){const e=this._currentDate.getFullYear();r=r.filter(t=>new Date(t.date).getFullYear()===e)}else{const e=this._currentDate.getFullYear(),t=this._currentDate.getMonth();r=r.filter(r=>{const o=new Date(r.date);return o.getFullYear()===e&&o.getMonth()===t})}if(0===r.length)return[];const o=r.map(e=>e.consumption).filter(e=>e>0);if(0===o.length)return[];const i=[...o].sort((e,t)=>e-t),a=i[Math.floor(.33*i.length)],s=i[Math.floor(.67*i.length)],n=[];for(const e of r){const r=new Date(e.date),o=r.getDay(),i=r.getFullYear(),c=r.getMonth();let l,d;if("year"===t)d=this._getISOWeekOfYear(r);else{const e=new Date(r.getFullYear(),r.getMonth(),1).getDay(),t=r.getDate();l=Math.floor((t+e-1)/7)}let p="medium";e.consumption<=a?p="low":e.consumption>=s&&(p="high"),n.push({date:e.date,consumption:e.consumption,cost:e.cost,dayOfWeek:o,weekOfMonth:l,weekOfYear:d,month:c,year:i,intensity:p})}return n}_calculateWeekComparison(){if(!this._tariffCosts||!this.config.source_entry_id)return null;const e=this._tariffCosts[this.config.source_entry_id];if(!e||!e.daily_breakdown||0===e.daily_breakdown.length)return null;const t=this.config.week_comparison_count||2,r=e.daily_breakdown,o=new Map;for(const t of r){const r=new Date(t.date),i=r.getDay(),a=r.getDate()-i+(0===i?-6:1),s=new Date(r.setDate(a));s.setHours(0,0,0,0);const n=s.toISOString().split("T")[0];if(!o.has(n)){const e=new Date(s);e.setDate(s.getDate()+6),o.set(n,{weekStart:n,weekEnd:e.toISOString().split("T")[0],consumption:0,cost:0,periodBreakdown:{p1_consumption:0,p2_consumption:0,p3_consumption:0}})}const c=o.get(n);if(c.consumption+=t.consumption,c.cost+=t.cost,e.period_breakdown){const r=e.period_breakdown.p1_percentage/100,o=e.period_breakdown.p2_percentage/100,i=e.period_breakdown.p3_percentage/100;c.periodBreakdown.p1_consumption+=t.consumption*r,c.periodBreakdown.p2_consumption+=t.consumption*o,c.periodBreakdown.p3_consumption+=t.consumption*i}}const i=Array.from(o.values()).sort((e,t)=>new Date(t.weekStart).getTime()-new Date(e.weekStart).getTime()),a=i.slice(0,t),s=[];for(let e=0;e<a.length-1;e++){const t=a[e],r=a[e+1],o=t.consumption-r.consumption,i=r.consumption>0?o/r.consumption*100:0,n=t.cost-r.cost,c=r.cost>0?n/r.cost*100:0;s.push({weekIndex:e,consumptionChange:o,consumptionChangePercent:i,costChange:n,costChangePercent:c})}return{weeks:a,comparisons:s}}render(){if(this._loading)return V`
        <div class="loading">
          <ha-circular-progress indeterminate></ha-circular-progress>
          <p>Loading consumption data...</p>
        </div>
      `;if(this._error)return V`
        <div class="error-message">
          <ha-icon icon="mdi:alert-circle" class="error-icon"></ha-icon>
          <div class="error-title">Unable to Load Data</div>
          <div class="error-details">${this._error}</div>
          <button class="retry-button" @click=${this._loadData}>
            Retry
          </button>
        </div>
      `;const e=this.config.view||"consumption";return V`
      ${"consumption"===e?this._renderConsumptionView():""}
      ${"heat-calendar"===e?this._renderHeatCalendarView():""}
      ${"week-analysis"===e?this._renderWeekAnalysisView():""}
      ${"tariff-comparison"===e?this._renderTariffComparisonView():""}
    `}_renderConsumptionView(){return V`
      ${!1!==this.config.show_navigation?V`
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
    `}_renderHeatCalendarView(){return V`
      ${!1!==this.config.show_navigation?V`
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
    `}_renderWeekAnalysisView(){return this.config.show_week_comparison?V`
      ${!1!==this.config.show_navigation?V`
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
    `:V`
        <div class="error-message">
          <div class="error-title">Week Comparison Not Enabled</div>
          <div class="error-details">
            Please enable "Show Week Comparison" in the card configuration to use the Week Analysis view.
          </div>
        </div>
      `}_renderTariffComparisonView(){return this.config.show_tariff_comparison?V`
      <div class="comparison-section">
        <h3 class="comparison-title">Tariff Comparison</h3>
        ${this._comparisonError?V`
          <div class="comparison-error">
            <ha-icon icon="mdi:alert"></ha-icon>
            ${this._comparisonError}
          </div>
        `:this._comparisonResult?V`
          ${this._renderComparison()}
          ${!1!==this.config.show_tariff_chart?this._renderTariffComparisonChart():""}
        `:V`
          <div class="loading">Loading tariff comparison...</div>
        `}
      </div>
    `:V`
        <div class="error-message">
          <div class="error-title">Tariff Comparison Not Enabled</div>
          <div class="error-details">
            Please enable "Show Tariff Comparison" in the card configuration to use the Tariff Comparison view.
          </div>
        </div>
      `}_renderChart(){if(0===this._consumptionData.length)return V`<div class="loading">No consumption data available</div>`;const e=this.config.chart_type||"line";if("heat-calendar"===e)return this._renderHeatCalendar();const t=this._consumptionData.map(e=>e.consumption||e.value||0),r=Math.max(...t,1),o=Math.min(...t,0),i=r-o||1;let a=[],s=0,n=0,c=1;const l=this.config.show_cost_on_chart&&this.config.selected_tariff_for_cost&&null!==this._tariffCosts;if(l&&this._tariffCosts&&this.config.selected_tariff_for_cost){const e=this._tariffCosts[this.config.selected_tariff_for_cost];if(e){const r="month"===this._currentPeriod?e.daily_breakdown:e.hourly_breakdown;r&&r.length>0?(a=r.map(e=>e.cost),a.length!==t.length?(ye.warn(`Cost data length (${a.length}) does not match consumption data length (${t.length}). Cost display disabled.`),a=[]):(s=Math.max(...a,.01),n=Math.min(...a,0),c=s-n||1)):ye.warn(`No breakdown data available for tariff ${this.config.selected_tariff_for_cost}. Cost display disabled.`)}else ye.warn(`Tariff cost data not found for entry ID: ${this.config.selected_tariff_for_cost}. Cost display disabled.`)}const d=l&&a.length>0&&a.length===t.length,p=800,h=300,_=20,u=d?60:20,f=40,m=60,g=h-_-f,v=(p-m-u)/(t.length-1||1),y=t.map((e,t)=>({x:m+t*v,y:_+g-(e-o)/i*g,value:e})),w=y.length>0?`M ${y[0].x} ${y[0].y} ${y.slice(1).map(e=>`L ${e.x} ${e.y}`).join(" ")}`:"",b=y.length>0?`${w} L ${y[y.length-1].x} ${h-f} L ${y[0].x} ${h-f} Z`:"",x=[];if(!isNaN(i)&&i>0)for(let e=0;e<=5;e++){const t=o+i*e/5,r=_+g-e/5*g;x.push({value:t,y:r})}else ye.warn(`Cannot generate Y-axis labels: chartHeight=${g}, range=${i}`);let $=[],k="",C=[];if(d&&a.length>0&&a.length===t.length){$=a.map((e,t)=>({x:m+t*v,y:_+g-(e-n)/c*g,value:e})),$.length>0&&(k=`M ${$[0].x} ${$[0].y} ${$.slice(1).map(e=>`L ${e.x} ${e.y}`).join(" ")}`);for(let e=0;e<=5;e++){const t=n+c*e/5,r=_+g-e/5*g;C.push({value:t,y:r})}}const S=[];if(y.length>0&&this._consumptionData.length>0){const e=this._consumptionData[0],t=this._consumptionData[this._consumptionData.length-1],r=Math.floor(this._consumptionData.length/2),o=this._consumptionData[r],i=e=>{try{return new Date(e).toLocaleDateString("en-US",{month:"short",day:"numeric"})}catch{return e.split("T")[0]}};e&&(e.start_time||e.date)&&S.push({label:i(e.start_time||e.date||""),x:y[0].x}),o&&(o.start_time||o.date)&&S.push({label:i(o.start_time||o.date||""),x:y[r]?.x||y[0].x}),t&&(t.start_time||t.date)&&S.push({label:i(t.start_time||t.date||""),x:y[y.length-1].x})}else ye.warn(`Cannot generate X-axis labels: points.length=${y.length}, consumptionData.length=${this._consumptionData.length}`);if("bar"===e)return V`
        <svg class="chart-svg" viewBox="0 0 ${p} ${h}" preserveAspectRatio="xMidYMid meet">
          <!-- Grid lines -->
          ${x.map(e=>V`
            <line class="chart-grid-line" 
              x1="${m}" y1="${e.y}" 
              x2="${p-u}" y2="${e.y}"/>
          `)}
          
          <!-- Bars -->
          ${y.map((e,t)=>{const r=Math.max(.6*v,2),o=e.x-r/2,i=h-f-e.y;return V`
              <rect class="chart-bar"
                x="${o}" 
                y="${e.y}" 
                width="${r}" 
                height="${i}"/>
            `})}
          
          <!-- Y-axis -->
          <line class="chart-axis" 
            x1="${m}" y1="${_}" 
            x2="${m}" y2="${h-f}"/>
          
          <!-- X-axis -->
          <line class="chart-axis" 
            x1="${m}" y1="${h-f}" 
            x2="${p-u}" y2="${h-f}"/>
          
          <!-- Y-axis labels (consumption - left) -->
          ${x.map(e=>V`
            <text class="chart-text" x="${m-10}" y="${e.y+4}" text-anchor="end" fill="var(--secondary-text-color, #888)">
              ${e.value.toFixed(1)} kWh
            </text>
          `)}
          
          <!-- Cost Y-axis labels (right) -->
          ${d?C.map(e=>V`
            <text class="chart-text" x="${p-u+10}" y="${e.y+4}" text-anchor="start" fill="var(--accent-color, #ff9800)">
              €${e.value.toFixed(2)}
            </text>
          `):""}
          
          <!-- Cost Y-axis (right) -->
          ${d?V`
            <line class="chart-axis" 
              x1="${p-u}" y1="${_}" 
              x2="${p-u}" y2="${h-f}"
              stroke="var(--accent-color, #ff9800)" opacity="0.5"/>
          `:""}
          
          <!-- Cost line overlay (for bar chart) -->
          ${d&&k?V`
            <path class="chart-line-cost" d="${k}"/>
            ${$.map(e=>V`
              <circle 
                cx="${e.x}" 
                cy="${e.y}" 
                r="3" 
                fill="var(--accent-color, #ff9800)"
                stroke="var(--card-background-color, #fff)"
                stroke-width="2"/>
            `)}
          `:""}
          
          <!-- X-axis labels -->
          ${S.map(e=>V`
            <text class="chart-text" x="${e.x}" y="${h-f+20}" text-anchor="middle" fill="var(--secondary-text-color, #888)">
              ${e.label}
            </text>
          `)}
          
          <!-- Legend -->
          ${d?V`
            <g>
              <rect x="${p-u-100}" y="${_+5}" width="15" height="10" 
                fill="var(--primary-color, #03a9f4)" opacity="0.7"/>
              <text x="${p-u-80}" y="${_+14}" class="chart-text" font-size="11px" fill="var(--secondary-text-color, #888)">Consumption</text>
              <line x1="${p-u-100}" y1="${_+25}" x2="${p-u-85}" y2="${_+25}" 
                stroke="var(--accent-color, #ff9800)" stroke-width="2" stroke-dasharray="5,5"/>
              <text x="${p-u-75}" y="${_+29}" class="chart-text" font-size="11px" fill="var(--accent-color, #ff9800)">Cost</text>
            </g>
          `:""}
        </svg>
      `;if("stacked-area"===e){const e=this._extractPeriodData();if(!e||0===e.length)return V`
          <div class="error-message">
            <div class="error-title">Stacked Area Chart Unavailable</div>
            <div class="error-details">
              Period breakdown data (P1/P2/P3) is not available. 
              Please ensure tariff comparison is enabled or period data is available from the service.
            </div>
          </div>
        `;const t=e.map(e=>e.p1||0),r=e.map(e=>e.p2||0),o=e.map(e=>e.p3||0),i=o,a=o.map((e,t)=>e+(r[t]||0)),s=a.map((e,r)=>e+(t[r]||0)),n=Math.max(...s,1),c=0,l=n-c||1,d=(e,t)=>{if(0===e.length)return"";const r=e.map((e,t)=>({x:m+t*v,y:_+g-(e-c)/l*g})),o=t.map((e,t)=>({x:m+t*v,y:_+g-(e-c)/l*g})).reverse(),i=r.map((e,t)=>0===t?`M ${e.x} ${e.y}`:`L ${e.x} ${e.y}`).join(" "),a=o.map(e=>`L ${e.x} ${e.y}`).join(" ");return`${i} ${a} Z`},y=[];for(let e=0;e<=5;e++){const t=c+l*e/5,r=_+g-e/5*g;y.push({value:t,y:r})}const w=d(i,new Array(e.length).fill(0)),b=d(a,i),x=d(s,a);return V`
        <svg class="chart-svg" viewBox="0 0 ${p} ${h}" preserveAspectRatio="xMidYMid meet">
          <!-- Grid lines -->
          ${y.map(e=>V`
            <line class="chart-grid-line" 
              x1="${m}" y1="${e.y}" 
              x2="${p-u}" y2="${e.y}"/>
          `)}
          
          <!-- Stacked areas (bottom to top: P3, P2, P1) -->
          <path class="chart-area-p3" d="${w}"/>
          <path class="chart-area-p2" d="${b}"/>
          <path class="chart-area-p1" d="${x}"/>
          
          <!-- Y-axis -->
          <line class="chart-axis" 
            x1="${m}" y1="${_}" 
            x2="${m}" y2="${h-f}"/>
          
          <!-- X-axis -->
          <line class="chart-axis" 
            x1="${m}" y1="${h-f}" 
            x2="${p-u}" y2="${h-f}"/>
          
          <!-- Y-axis labels -->
          ${y.map(e=>V`
            <text class="chart-text" x="${m}" y="${e.y+4}" text-anchor="start" fill="var(--secondary-text-color, #888)">
              ${e.value.toFixed(1)} kWh
            </text>
          `)}
          
          <!-- X-axis labels -->
          ${S.map(e=>V`
            <text class="chart-text" x="${e.x}" y="${h-f+20}" text-anchor="middle" fill="var(--secondary-text-color, #888)">
              ${e.label}
            </text>
          `)}
          
          <!-- Legend -->
          <g>
            <rect x="${m+10}" y="${_+5}" width="12" height="12" 
              fill="var(--error-color, #f44336)" opacity="0.6"/>
            <text x="${m+28}" y="${_+15}" class="chart-text" font-size="11px" fill="var(--secondary-text-color, #888)">P1 (Peak)</text>
            
            <rect x="${m+100}" y="${_+5}" width="12" height="12" 
              fill="var(--warning-color, #ff9800)" opacity="0.6"/>
            <text x="${m+118}" y="${_+15}" class="chart-text" font-size="11px" fill="var(--secondary-text-color, #888)">P2 (Flat)</text>
            
            <rect x="${m+190}" y="${_+5}" width="12" height="12" 
              fill="var(--success-color, #4caf50)" opacity="0.6"/>
            <text x="${m+208}" y="${_+15}" class="chart-text" font-size="11px" fill="var(--secondary-text-color, #888)">P3 (Valley)</text>
          </g>
        </svg>
      `}let E="";if(this.config.show_moving_average){const e=this.config.moving_average_days||7,r=this._calculateMovingAverage(t,e).map((e,t)=>{if(null===e)return null;return{x:m+t*v,y:_+g-(e-o)/i*g,value:e}}).filter(e=>null!==e);r.length>0&&(E=`M ${r[0].x} ${r[0].y} ${r.slice(1).map(e=>`L ${e.x} ${e.y}`).join(" ")}`)}let P="";if(this.config.show_cost_trend&&d&&a.length>0){const e=this.config.cost_moving_average_days||30,t=this._calculateCostMovingAverage(a,e).map((e,t)=>{if(null===e)return null;return{x:m+t*v,y:_+g-(e-n)/c*g,value:e}}).filter(e=>null!==e);t.length>0&&(P=`M ${t[0].x} ${t[0].y} ${t.slice(1).map(e=>`L ${e.x} ${e.y}`).join(" ")}`)}return V`
      <svg class="chart-svg" viewBox="0 0 ${p} ${h}" preserveAspectRatio="xMidYMid meet">
        <!-- Grid lines -->
        ${x.map(e=>V`
          <line class="chart-grid-line" 
            x1="${m}" y1="${e.y}" 
            x2="${p-u}" y2="${e.y}"/>
        `)}
        
        <!-- Area under line -->
        <path class="chart-area" d="${b}"/>
        
        <!-- Line -->
        <path class="chart-line" d="${w}"/>
        
        <!-- Moving average line -->
        ${this.config.show_moving_average&&E?V`
          <path class="chart-line-moving-avg" d="${E}"/>
        `:""}
        
        <!-- Data points -->
        ${y.map(e=>V`
          <circle 
            cx="${e.x}" 
            cy="${e.y}" 
            r="3" 
            fill="var(--primary-color, #03a9f4)"
            stroke="var(--card-background-color, #fff)"
            stroke-width="2"/>
        `)}
        
        <!-- Y-axis -->
        <line class="chart-axis" 
          x1="${m}" y1="${_}" 
          x2="${m}" y2="${h-f}"/>
        
        <!-- X-axis -->
        <line class="chart-axis" 
          x1="${m}" y1="${h-f}" 
          x2="${p-u}" y2="${h-f}"/>
        
        <!-- Y-axis labels (consumption - left) -->
        ${x.map(e=>V`
          <text class="chart-text" x="${m-10}" y="${e.y+4}" text-anchor="end" fill="var(--secondary-text-color, #888)">
            ${e.value.toFixed(1)} kWh
          </text>
        `)}
        
        <!-- Cost Y-axis labels (right) -->
        ${d?C.map(e=>V`
            <text class="chart-text" x="${p-u+10}" y="${e.y+4}" text-anchor="start" fill="var(--accent-color, #ff9800)">
              €${e.value.toFixed(2)}
            </text>
          `):""}
        
        <!-- Cost Y-axis (right) -->
        ${d?V`
          <line class="chart-axis" 
            x1="${p-u}" y1="${_}" 
            x2="${p-u}" y2="${h-f}"
            stroke="var(--accent-color, #ff9800)" opacity="0.5"/>
        `:""}
        
        <!-- X-axis labels -->
        ${S.map(e=>V`
          <text class="chart-text" x="${e.x}" y="${h-f+20}" text-anchor="middle" fill="var(--secondary-text-color, #888)">
            ${e.label}
          </text>
        `)}
        
        <!-- Legend -->
        ${d||this.config.show_moving_average||this.config.show_cost_trend?V`
          <g>
            ${d?V`
              <rect x="${p-u-120}" y="${_+5}" width="15" height="10" 
                fill="var(--primary-color, #03a9f4)" opacity="0.7"/>
              <text x="${p-u-100}" y="${_+14}" class="chart-text" font-size="11px" fill="var(--secondary-text-color, #888)">Consumption</text>
              <line x1="${p-u-120}" y1="${_+25}" x2="${p-u-105}" y2="${_+25}" 
                stroke="var(--accent-color, #ff9800)" stroke-width="2" stroke-dasharray="5,5"/>
              <text x="${p-u-95}" y="${_+29}" class="chart-text" font-size="11px" fill="var(--accent-color, #ff9800)">Cost</text>
            `:""}
            ${this.config.show_moving_average?V`
              <line x1="${m+10}" y1="${_+10}" x2="${m+25}" y2="${_+10}" 
                stroke="var(--info-color, #2196f3)" stroke-width="2" stroke-dasharray="3,3" opacity="0.8"/>
              <text x="${m+30}" y="${_+14}" class="chart-text" font-size="11px" fill="var(--info-color, #2196f3)">
                ${this.config.moving_average_days||7}-day avg
              </text>
            `:""}
            ${this.config.show_cost_trend&&P?V`
              <line x1="${m+10}" y1="${_+30}" x2="${m+25}" y2="${_+30}" 
                stroke="var(--accent-color, #ff9800)" stroke-width="2" stroke-dasharray="3,3" opacity="0.7"/>
              <text x="${m+30}" y="${_+34}" class="chart-text" font-size="11px" fill="var(--accent-color, #ff9800)">
                ${this.config.cost_moving_average_days||30}-day cost avg
              </text>
            `:""}
          </g>
        `:""}
      </svg>
    `}_renderComparison(){if(!this._comparisonResult||!this._comparisonResult.tariffs||0===this._comparisonResult.tariffs.length)return V`<p>No comparison data available</p>`;const e=[...this._comparisonResult.tariffs].sort((e,t)=>e.total_cost-t.total_cost),t=this._comparisonResult.best_tariff?.entry_id,r=this._comparisonResult.tariffs[0],o=r?.period_breakdown;return V`
      <!-- Consumption Summary -->
      ${o?V`
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
        ${e.map(e=>V`
          <div class="tariff-item">
            <div class="tariff-header">
              <span class="tariff-name">
                ${e.name}
                ${t===e.entry_id?V`<span class="best-tariff-badge">Best</span>`:""}
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

      ${this._comparisonResult.savings?V`
        <div class="savings-info">
          <strong>Potential Savings:</strong> €${this._comparisonResult.savings.amount.toFixed(2)} 
          (${this._comparisonResult.savings.percentage.toFixed(1)}%) by choosing the best tariff
        </div>
      `:""}
    `}_renderPeriodBreakdown(e,t){const r=Math.max(e.p1_consumption,e.p2_consumption,e.p3_consumption);let o=0,i=0,a=0;if(t.hourly_breakdown&&t.hourly_breakdown.length>0)for(const e of t.hourly_breakdown)"P1"===e.period&&e.consumption>0?o+=e.cost:"P2"===e.period&&e.consumption>0?i+=e.cost:"P3"===e.period&&e.consumption>0&&(a+=e.cost);const s=e.p1_consumption>0?o/e.p1_consumption:0,n=e.p2_consumption>0?i/e.p2_consumption:0,c=e.p3_consumption>0?a/e.p3_consumption:0;return V`
      <div class="period-breakdown">
        <div class="period-breakdown-title">Consumption by Period</div>
        <div class="period-bars">
          <div class="period-bar">
            <div
              class="period-bar-fill p1"
              style="height: ${r>0?e.p1_consumption/r*100:0}%"
            ></div>
            <div class="period-bar-label">
              <strong>P1 Peak</strong><br>
              ${e.p1_consumption.toFixed(2)} kWh<br>
              ${e.p1_percentage.toFixed(1)}%<br>
              ${o>0?V`<span class="cost-per-kwh">€${s.toFixed(3)}/kWh</span>`:""}
            </div>
          </div>
          <div class="period-bar">
            <div
              class="period-bar-fill p2"
              style="height: ${r>0?e.p2_consumption/r*100:0}%"
            ></div>
            <div class="period-bar-label">
              <strong>P2 Flat</strong><br>
              ${e.p2_consumption.toFixed(2)} kWh<br>
              ${e.p2_percentage.toFixed(1)}%<br>
              ${i>0?V`<span class="cost-per-kwh">€${n.toFixed(3)}/kWh</span>`:""}
            </div>
          </div>
          <div class="period-bar">
            <div
              class="period-bar-fill p3"
              style="height: ${r>0?e.p3_consumption/r*100:0}%"
            ></div>
            <div class="period-bar-label">
              <strong>P3 Valley</strong><br>
              ${e.p3_consumption.toFixed(2)} kWh<br>
              ${e.p3_percentage.toFixed(1)}%<br>
              ${a>0?V`<span class="cost-per-kwh">€${c.toFixed(3)}/kWh</span>`:""}
            </div>
          </div>
        </div>
      </div>
    `}static getStubConfig(){return{type:"custom:octopus-consumption-card",source_entry_id:"",view:"consumption",show_comparison:!0,default_period:"week",chart_type:"line",show_tariff_comparison:!1,tariff_entry_ids:[],show_cost_on_chart:!1,show_navigation:!0,show_period_distribution:!1,show_moving_average:!1,moving_average_days:7,show_heat_calendar:!1,heat_calendar_period:"month",show_week_comparison:!1,week_comparison_count:2,show_cost_trend:!1,cost_moving_average_days:30,show_tariff_chart:!0}}static getConfigElement(){return document.createElement("octopus-consumption-card-editor")}}function xe(){return be}function $e(){return ve}function ke(){return be.getStubConfig()}if(be.enabledWarnings=[],be.SERVICE_TIMEOUT=1e4,be.SERVICE_DOMAIN="octopus_energy_es",be.SERVICE_FETCH_CONSUMPTION="fetch_consumption",be.SERVICE_COMPARE_TARIFFS="compare_tariffs",be.styles=fe,we([pe({attribute:!1})],be.prototype,"hass",void 0),we([pe({attribute:!1})],be.prototype,"config",void 0),we([he()],be.prototype,"_consumptionData",void 0),we([he()],be.prototype,"_comparisonResult",void 0),we([he()],be.prototype,"_tariffCosts",void 0),we([he()],be.prototype,"_loading",void 0),we([he()],be.prototype,"_error",void 0),we([he()],be.prototype,"_comparisonError",void 0),we([he()],be.prototype,"_currentPeriod",void 0),we([he()],be.prototype,"_currentDate",void 0),we([he()],be.prototype,"_weekComparisonData",void 0),"undefined"!=typeof window&&(window.getCardElement=xe,window.getCardConfigElement=$e,window.getStubConfig=ke),"undefined"!=typeof window&&"undefined"!=typeof customElements){try{customElements.get("octopus-consumption-card")||customElements.define("octopus-consumption-card",be)}catch(e){ye.error("Failed to register octopus-consumption-card: ",e instanceof Error?e.message:String(e))}if(void 0===window.customCards&&(window.customCards=[]),Array.isArray(window.customCards)){window.customCards.some(e=>"custom:octopus-consumption-card"===e.type)||window.customCards.push({type:"custom:octopus-consumption-card",name:"Octopus Energy España Consumption Card",preview:!1,description:"Display consumption data and tariff comparisons for Octopus Energy España"})}window.customCards["octopus-consumption-card"]=be,window.OctopusConsumptionCard=be;const e="0.5.4",t=!!customElements.get("octopus-consumption-card");console.groupCollapsed("%c⚡ Octopus Energy España","background: linear-gradient(90deg, #e10090 0%, #c000a0 100%);color: #fff;padding: 4px 8px;border-radius: 4px;font-weight: bold;"),ye.info("Consumption Card",`v${e}`),ye.info(t?"✓ Custom element: ":"✗ Custom element: ","octopus-consumption-card"),ye.success("✓ Added to card picker"),ye.success("✓ Visual editor enabled"),ye.info("ℹ Supported languages: ","en, es, be"),t||ye.error("✗ Registration failed! Element not found in customElements registry"),console.groupEnd()}return e.OctopusConsumptionCard=be,e.getCardConfigElement=$e,e.getCardElement=xe,e.getStubConfig=ke,e}({});
