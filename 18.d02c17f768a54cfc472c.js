(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{Co1K:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),c=function(){return function(){}}(),o=u("1OEa"),a=u("l4vA"),t=u("pMnS"),i=u("IKgy"),b=u("LuDt"),s=u("leug"),d=u("AytR"),m='<svg xmlns="http://www.w3.org/2000/svg">\n  <path d="M0 0h24v24H0z" fill="none"/>\n  <path d="M15.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm5.8-10l2.4-2.4.8.8c1.3 1.3 3 2.1 5.1 2.1V9c-1.5 0-2.7-.6-3.6-1.5l-1.9-1.9c-.5-.4-1-.6-1.6-.6s-1.1.2-1.4.6L7.8 8.4c-.4.4-.6.9-.6 1.4 0 .6.2 1.1.6 1.4L11 14v5h2v-6.2l-2.2-2.3zM19 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z"/>\n</svg>',r='<svg>\n  <defs>\n  <svg id="account-balance">\n    <path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z"/>\n  </svg>\n  <svg id="account-balance-wallet">\n    <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"\n    />\n  </svg>\n  <svg id="account-box">\n    <path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"/>\n  </svg>\n  </defs>\n</svg>',p=function(){function l(){}return l.prototype.ngOnInit=function(){this._componentViewer.componentView=new s.a("Icons","Material icons use geometric shapes to visually represent core ideas, capabilities, or topics.","import { MdcIconModule } from '@angular-mdc/web';",[{label:"Api",route:"./api"},{label:"Examples",route:"./examples"}]),this._componentViewer.componentView.references=[{name:"Material Design guidelines: Icons",url:"https://material.io/guidelines/style/icons.html"}]},l}(),g=function(){return function(){}}(),h=function(){function l(l,n){this.customHeader="import { DomSanitizer } from '@angular/platform-browser';\nimport { MdcIconRegistry } from '@angular-mdc/web';\n\nconstructor(iconRegistry: MdcIconRegistry, sanitizer: DomSanitizer) {\n  iconRegistry",this.customSass=".demo-icon-custom-colors {\n  $color: $material-color-orange-500;\n\n  @include mdc-theme-prop(color, $color);\n}",this.exampleMaterial={html:"<mdc-icon>home</mdc-icon>"},this.exampleTheme={html:'<mdc-icon class="demo-icon-custom-colors">home</mdc-icon>',sass:this.customSass},this.exampleFa={html:'<mdc-icon fontSet="fa" fontIcon="fa-camera"></mdc-icon>\n\n<mdc-icon fontSet="fa" fontIcon="fa-camera" class="demo-icon-custom-colors"></mdc-icon>',ts:this.customHeader+"\n    .registerFontClassAlias('fontawesome', 'fa');",sass:this.customSass},this.exampleSvg={html:'<mdc-icon>\n  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path d="M0 0h24v24H0z" fill="none"></path>\n    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path>\n  </svg>\n</mdc-icon>'},this.exampleInline={html:"<p>\n  My <span>dog</span>\n  <mdc-icon inline>pets</mdc-icon> is my\n  <span>favorite</span>\n  <mdc-icon inline>favorite</mdc-icon>,\n  he loves to go on <span>walks</span>\n  <mdc-icon inline>directions_walk</mdc-icon>\n</p>"},this.exampleAddSvgIcon={html:'<mdc-icon svgIcon="thumbs-up"></mdc-icon>',ts:this.customHeader+"\n    .addSvgIcon('thumbs-up',\n      sanitizer.bypassSecurityTrustResourceUrl('/assets/thumbup-icon.svg'));"},this.exampleSvgIconLiteral={html:'<mdc-icon svgIcon="bike"></mdc-icon>\n<mdc-icon svgIcon="bike" class="demo-svg-custom-color"></mdc-icon>',ts:this.customHeader+"\n    .addSvgIconLiteral('bike',\n      sanitizer.bypassSecurityTrustHtml(BIKE_ICON));",svg:"const BIKE_ICON =\n`"+m+"`;",sass:".demo-svg-custom-color {\n  $color: $material-color-orange-500;\n\n  @include mdc-theme-prop(fill, $color);\n}"},this.exampleSvgIconSetInNamespace={html:'<mdc-icon svgIcon="core:alarm"></mdc-icon>\n\n<mdc-icon svgIcon="core:accessibility"></mdc-icon>\n\n<mdc-icon svgIcon="core:alarm"></mdc-icon>',ts:this.customHeader+"\n    .addSvgIconSetInNamespace('core',\n      sanitizer.bypassSecurityTrustResourceUrl('/assets/core-icon-set.svg'));"},this.exampleSvgIconSetLiteralInNamespace={html:'<mdc-icon svgIcon="core-inline:account-balance"></mdc-icon>\n\n<mdc-icon svgIcon="core-inline:account-balance-wallet"></mdc-icon>\n\n<mdc-icon svgIcon="core-inline:account-box"></mdc-icon>',ts:this.customHeader+"\n    .addSvgIconSetLiteralInNamespace('core-inline',\n      sanitizer.bypassSecurityTrustHtml(INLINE_ICON_SET));",svg:"const INLINE_ICON_SET =\n`"+r+"`;"},l.addSvgIcon("thumbs-up",n.bypassSecurityTrustResourceUrl(d.a.production?"https://trimox.github.io/angular-mdc-web/assets/thumbup-icon.svg":"/assets/thumbup-icon.svg")).addSvgIconLiteral("bike",n.bypassSecurityTrustHtml(m)).addSvgIconSetInNamespace("core",n.bypassSecurityTrustResourceUrl(d.a.production?"https://trimox.github.io/angular-mdc-web/assets/core-icon-set.svg":"/assets/core-icon-set.svg")).addSvgIconSetLiteralInNamespace("core-inline",n.bypassSecurityTrustHtml(r)).registerFontClassAlias("fontawesome","fa"),console.log(l)}return l.prototype.alternateColors=function(l){var n="demo-icon-custom-colors";l.elementRef.nativeElement.classList.contains(n)?l.elementRef.nativeElement.classList.remove(n):l.elementRef.nativeElement.classList.add(n)},l}(),v=u("Sl5x"),f=u("C40I"),I=u("nWas"),q=u("XbMX"),x=u("dkiD"),y=u("sks2"),H=u("ZYjt"),S=e.ob({encapsulation:2,styles:[],data:{}});function w(l){return e.Jb(0,[e.Fb(402653184,1,{_componentViewer:0}),(l()(),e.qb(1,0,null,null,1,"component-viewer",[],null,null,null,i.b,i.a)),e.pb(2,49152,[[1,4]],0,b.b,[],null,null)],null,null)}function A(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,1,"ng-component",[],null,null,null,w,S)),e.pb(1,114688,null,0,p,[],null,null)],function(l,n){l(n,1,0)},null)}var k=e.mb("ng-component",p,A,{},{},[]),R=e.ob({encapsulation:2,styles:[],data:{}});function M(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,109,"div",[["class","docs-api"]],null,null,null,null,null)),(l()(),e.qb(1,0,null,null,2,"h2",[["class","mdc-typography--headline6"],["mdcHeadline6",""]],null,null,null,null,null)),e.pb(2,16384,null,0,v.i,[],null,null),(l()(),e.Hb(-1,null,["Service"])),(l()(),e.qb(4,0,null,null,2,"h3",[["class","mdc-typography--headline6"],["mdcHeadline6",""]],null,null,null,null,null)),e.pb(5,16384,null,0,v.i,[],null,null),(l()(),e.Hb(-1,null,["MdcIconRegistry"])),(l()(),e.Hb(-1,null,[" Service to register and display icons used by the "])),(l()(),e.qb(8,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["<mdc-icon>"])),(l()(),e.Hb(-1,null,[" component. "])),(l()(),e.qb(11,0,null,null,8,"ul",[],null,null,null,null,null)),(l()(),e.qb(12,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Registers icon URLs by namespace and name."])),(l()(),e.qb(14,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Registers icon set URLs by namespace."])),(l()(),e.qb(16,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Registers aliases for CSS classes, for use with icon fonts."])),(l()(),e.qb(18,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Loads icons from URLs and extracts individual icons from icon sets."])),(l()(),e.qb(20,0,null,null,2,"h4",[["class","mdc-typography--subtitle2"],["mdcSubtitle2",""]],null,null,null,null,null)),e.pb(21,16384,null,0,v.l,[],null,null),(l()(),e.Hb(-1,null,["Methods"])),(l()(),e.qb(23,0,null,null,86,"table",[],null,null,null,null,null)),(l()(),e.qb(24,0,null,null,85,"tbody",[],null,null,null,null,null)),(l()(),e.qb(25,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.qb(26,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["addSvgIcon()"])),(l()(),e.qb(28,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Registers an icon by URL in the default namespace."])),(l()(),e.qb(30,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.qb(31,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["addSvgIconInNamespace()"])),(l()(),e.qb(33,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Registers an icon by URL in the specified namespace."])),(l()(),e.qb(35,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.qb(36,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["addSvgIconLiteral()"])),(l()(),e.qb(38,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Registers an icon using an HTML string in the default namespace."])),(l()(),e.qb(40,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.qb(41,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["addSvgIconLiteralInNamespace()"])),(l()(),e.qb(43,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Registers an icon using an HTML string in the specified namespace."])),(l()(),e.qb(45,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.qb(46,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["addSvgIconSet()"])),(l()(),e.qb(48,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Registers an icon set by URL in the default namespace."])),(l()(),e.qb(50,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.qb(51,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["addSvgIconSetInNamespace()"])),(l()(),e.qb(53,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Registers an icon set by URL in the specified namespace."])),(l()(),e.qb(55,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.qb(56,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["addSvgIconSetLiteral()"])),(l()(),e.qb(58,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Registers an icon set using an HTML string in the default namespace."])),(l()(),e.qb(60,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.qb(61,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["addSvgIconSetLiteralInNamespace()"])),(l()(),e.qb(63,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Registers an icon set using an HTML string in the specified namespace."])),(l()(),e.qb(65,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.qb(66,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["classNameForFontAlias()"])),(l()(),e.qb(68,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Returns the CSS class name associated with the alias by a previous call to registerFontClassAlias. If no CSS class has been associated, returns the alias unmodified."])),(l()(),e.qb(70,0,null,null,7,"tr",[],null,null,null,null,null)),(l()(),e.qb(71,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["getDefaultFontSetClass()"])),(l()(),e.qb(73,0,null,null,4,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Returns the CSS class name to be used for icon fonts when an "])),(l()(),e.qb(75,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["<mdc-icon>"])),(l()(),e.Hb(-1,null,[" component does not have a fontSet input value, and is not loading an icon by name or URL."])),(l()(),e.qb(78,0,null,null,7,"tr",[],null,null,null,null,null)),(l()(),e.qb(79,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["getNamedSvgIcon()"])),(l()(),e.qb(81,0,null,null,4,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Returns an Observable that produces the icon (as an "])),(l()(),e.qb(83,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["<svg>"])),(l()(),e.Hb(-1,null,[" DOM element) with the given name and namespace. The icon must have been previously registered with addIcon or addIconSet; if not, the Observable will throw an error."])),(l()(),e.qb(86,0,null,null,7,"tr",[],null,null,null,null,null)),(l()(),e.qb(87,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["getSvgIconFromUrl()"])),(l()(),e.qb(89,0,null,null,4,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Returns an Observable that produces the icon (as an "])),(l()(),e.qb(91,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["<svg>"])),(l()(),e.Hb(-1,null,[" DOM element) from the given URL. The response from the URL may be cached so this will not always cause an HTTP request, but the produced element will always be a new copy of the originally fetched icon. (That is, it will not contain any modifications made to elements previously returned)."])),(l()(),e.qb(94,0,null,null,7,"tr",[],null,null,null,null,null)),(l()(),e.qb(95,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["registerFontClassAlias()"])),(l()(),e.qb(97,0,null,null,4,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Defines an alias for a CSS class name to be used for icon fonts. Creating an mdcIcon component with the alias as the fontSet input will cause the class name to be applied to the "])),(l()(),e.qb(99,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["<mdc-icon>"])),(l()(),e.Hb(-1,null,[" element."])),(l()(),e.qb(102,0,null,null,7,"tr",[],null,null,null,null,null)),(l()(),e.qb(103,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["setDefaultFontSetClass()"])),(l()(),e.qb(105,0,null,null,4,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Sets the CSS class name to be used for icon fonts when an "])),(l()(),e.qb(107,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["<mdc-icon>"])),(l()(),e.Hb(-1,null,[" component does not have a fontSet input value, and is not loading an icon by name or URL."])),(l()(),e.qb(110,0,null,null,79,"div",[["class","docs-api"]],null,null,null,null,null)),(l()(),e.qb(111,0,null,null,2,"h2",[["class","mdc-typography--headline6"],["mdcHeadline6",""]],null,null,null,null,null)),e.pb(112,16384,null,0,v.i,[],null,null),(l()(),e.Hb(-1,null,["Directives"])),(l()(),e.qb(114,0,null,null,2,"h3",[["class","mdc-typography--headline6"],["mdcHeadline6",""]],null,null,null,null,null)),e.pb(115,16384,null,0,v.i,[],null,null),(l()(),e.Hb(-1,null,["MdcIcon"])),(l()(),e.Hb(-1,null,[" Component to display an icon. It can be used in the following ways: "])),(l()(),e.qb(118,0,null,null,24,"ul",[],null,null,null,null,null)),(l()(),e.qb(119,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),e.qb(120,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,['Specify the svgIcon input to load an SVG icon from a URL previously registered with the addSvgIcon, addSvgIconInNamespace, addSvgIconSet, or addSvgIconSetInNamespace methods of MdcIconRegistry. If the svgIcon value contains a colon it is assumed to be in the format "[namespace]:[name]", if not the value will be the name of an icon in the default namespace. Examples: '])),(l()(),e.qb(122,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,['<mdc-icon svgIcon="left-arrow"></mdc-icon> <mdc-icon svgIcon="animals:cat"></mdc-icon>'])),(l()(),e.qb(124,0,null,null,10,"li",[],null,null,null,null,null)),(l()(),e.qb(125,0,null,null,9,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Use a font ligature as an icon by putting the ligature text in the content of the "])),(l()(),e.qb(127,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["<mdc-icon>"])),(l()(),e.Hb(-1,null,[" component. By default the Material icons font is used as described at "])),(l()(),e.qb(130,0,null,null,1,"a",[["href","http://google.github.io/material-design-icons/#icon-font-for-the-web"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["http://google.github.io/material-design-icons/#icon-font-for-the-web"])),(l()(),e.Hb(-1,null,[". You can specify an alternate font by setting the fontSet input to either the CSS class to apply to use the desired font, or to an alias previously registered with MdcIconRegistry.registerFontClassAlias. Examples: "])),(l()(),e.qb(133,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,['<mdc-icon>home</mdc-icon> <mdc-icon fontSet="myfont">sun</mdc-icon>'])),(l()(),e.qb(135,0,null,null,7,"li",[],null,null,null,null,null)),(l()(),e.qb(136,0,null,null,6,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Specify a font glyph to be included via CSS rules by setting the fontSet input to specify the font, and the fontIcon input to specify the icon. Typically the fontIcon will specify a CSS class which causes the glyph to be displayed via a :before selector, as in "])),(l()(),e.qb(138,0,null,null,1,"a",[["href","https://fortawesome.github.io/Font-Awesome/examples/"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["https://fortawesome.github.io/Font-Awesome/examples/"])),(l()(),e.Hb(-1,null,[" Example: "])),(l()(),e.qb(141,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,['<mdc-icon fontSet="fa" fontIcon="alarm"></mdc-icon>'])),(l()(),e.qb(143,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,[" Selector: "])),(l()(),e.qb(145,0,null,null,1,"span",[["class","markdown-code"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["mdc-icon"])),(l()(),e.qb(147,0,null,null,1,"span",[["class","markdown-code"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["mdcIcon"])),(l()(),e.qb(149,0,null,null,1,"span",[["class","markdown-code"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["a[mdc-icon]"])),(l()(),e.Hb(-1,null,[" Exported as: "])),(l()(),e.qb(152,0,null,null,1,"span",[["class","markdown-code"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["mdcIcon"])),(l()(),e.qb(154,0,null,null,2,"h4",[["class","mdc-typography--subtitle2"],["mdcSubtitle2",""]],null,null,null,null,null)),e.pb(155,16384,null,0,v.l,[],null,null),(l()(),e.Hb(-1,null,["Properties"])),(l()(),e.qb(157,0,null,null,32,"table",[],null,null,null,null,null)),(l()(),e.qb(158,0,null,null,5,"thead",[],null,null,null,null,null)),(l()(),e.qb(159,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.qb(160,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Name"])),(l()(),e.qb(162,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Description"])),(l()(),e.qb(164,0,null,null,25,"tbody",[],null,null,null,null,null)),(l()(),e.qb(165,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.qb(166,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["fontSet: string"])),(l()(),e.qb(168,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Font set that the icon is a part of."])),(l()(),e.qb(170,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.qb(171,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["fontIcon: string"])),(l()(),e.qb(173,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Name of an icon within a font set."])),(l()(),e.qb(175,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.qb(176,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["svgIcon: string"])),(l()(),e.qb(178,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Name of the icon in the SVG icon set."])),(l()(),e.qb(180,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.qb(181,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["clickable: boolean"])),(l()(),e.qb(183,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Whether or not icon can be interacted with."])),(l()(),e.qb(185,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.qb(186,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["inline: boolean"])),(l()(),e.qb(188,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Whether the icon should be inlined, automatically sizing the icon to match the font size of the element the icon is contained in."]))],null,null)}function L(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,1,"ng-component",[],null,null,null,M,R)),e.pb(1,49152,null,0,g,[],null,null)],null,null)}var z=e.mb("ng-component",g,L,{},{},[]),_=e.ob({encapsulation:2,styles:[],data:{}});function C(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,7,"div",[["class","demo-content"]],null,null,null,null,null)),(l()(),e.qb(1,0,null,null,1,"h3",[["class","demo-content__headline"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Material Icons"])),(l()(),e.qb(3,0,null,null,2,"mdc-icon",[["class","ngx-mdc-icon"]],[[1,"role",0],[1,"tabindex",0],[2,"ngx-mdc-icon--clickable",null],[2,"ngx-mdc-icon--inline",null]],null,null,f.b,f.a)),e.pb(4,9158656,[["demoicon",4]],0,I.b,[e.k,I.d,[8,null],I.a],null,null),(l()(),e.Hb(-1,0,["home"])),(l()(),e.qb(6,0,null,null,1,"example-viewer",[],null,null,null,q.b,q.a)),e.pb(7,114688,null,0,x.a,[y.b],{example:[0,"example"]},null),(l()(),e.qb(8,0,null,null,7,"div",[["class","demo-content"]],null,null,null,null,null)),(l()(),e.qb(9,0,null,null,1,"h3",[["class","demo-content__headline"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Material Icons - Theme"])),(l()(),e.qb(11,0,null,null,2,"mdc-icon",[["class","demo-icon-custom-colors ngx-mdc-icon"]],[[1,"role",0],[1,"tabindex",0],[2,"ngx-mdc-icon--clickable",null],[2,"ngx-mdc-icon--inline",null]],null,null,f.b,f.a)),e.pb(12,9158656,null,0,I.b,[e.k,I.d,[8,null],I.a],null,null),(l()(),e.Hb(-1,0,["home"])),(l()(),e.qb(14,0,null,null,1,"example-viewer",[],null,null,null,q.b,q.a)),e.pb(15,114688,null,0,x.a,[y.b],{example:[0,"example"]},null),(l()(),e.qb(16,0,null,null,11,"div",[["class","demo-content"]],null,null,null,null,null)),(l()(),e.qb(17,0,null,null,1,"h3",[["class","demo-content__headline"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Using Font Awesome"])),(l()(),e.qb(19,0,null,null,6,"div",[["class","demo-layout__row"]],null,null,null,null,null)),(l()(),e.qb(20,0,null,null,2,"div",[["class","demo-container"]],null,null,null,null,null)),(l()(),e.qb(21,0,null,null,1,"mdc-icon",[["class","ngx-mdc-icon"],["fontIcon","fa-camera"],["fontSet","fa"]],[[1,"role",0],[1,"tabindex",0],[2,"ngx-mdc-icon--clickable",null],[2,"ngx-mdc-icon--inline",null]],null,null,f.b,f.a)),e.pb(22,9158656,null,0,I.b,[e.k,I.d,[8,null],I.a],{fontSet:[0,"fontSet"],fontIcon:[1,"fontIcon"]},null),(l()(),e.qb(23,0,null,null,2,"div",[["class","demo-container"]],null,null,null,null,null)),(l()(),e.qb(24,0,null,null,1,"mdc-icon",[["class","demo-icon-custom-colors ngx-mdc-icon"],["fontIcon","fa-camera"],["fontSet","fa"]],[[1,"role",0],[1,"tabindex",0],[2,"ngx-mdc-icon--clickable",null],[2,"ngx-mdc-icon--inline",null]],null,null,f.b,f.a)),e.pb(25,9158656,null,0,I.b,[e.k,I.d,[8,null],I.a],{fontSet:[0,"fontSet"],fontIcon:[1,"fontIcon"]},null),(l()(),e.qb(26,0,null,null,1,"example-viewer",[],null,null,null,q.b,q.a)),e.pb(27,114688,null,0,x.a,[y.b],{example:[0,"example"]},null),(l()(),e.qb(28,0,null,null,9,"div",[["class","demo-content"]],null,null,null,null,null)),(l()(),e.qb(29,0,null,null,1,"h3",[["class","demo-content__headline"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["SVG Icon"])),(l()(),e.qb(31,0,null,null,4,"mdc-icon",[["class","ngx-mdc-icon"]],[[1,"role",0],[1,"tabindex",0],[2,"ngx-mdc-icon--clickable",null],[2,"ngx-mdc-icon--inline",null]],null,null,f.b,f.a)),e.pb(32,9158656,null,0,I.b,[e.k,I.d,[8,null],I.a],null,null),(l()(),e.qb(33,0,null,0,2,":svg:svg",[["height","24"],["viewBox","0 0 24 24"],["width","24"],["xmlns","http://www.w3.org/2000/svg"]],null,null,null,null,null)),(l()(),e.qb(34,0,null,null,0,":svg:path",[["d","M0 0h24v24H0z"],["fill","none"]],null,null,null,null,null)),(l()(),e.qb(35,0,null,null,0,":svg:path",[["d","M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"]],null,null,null,null,null)),(l()(),e.qb(36,0,null,null,1,"example-viewer",[],null,null,null,q.b,q.a)),e.pb(37,114688,null,0,x.a,[y.b],{example:[0,"example"]},null),(l()(),e.qb(38,0,null,null,23,"div",[["class","demo-content"]],null,null,null,null,null)),(l()(),e.qb(39,0,null,null,1,"h3",[["class","demo-content__headline"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Inline"])),(l()(),e.qb(41,0,null,null,18,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,[" My "])),(l()(),e.qb(43,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["dog"])),(l()(),e.qb(45,0,null,null,2,"mdc-icon",[["class","ngx-mdc-icon"],["inline",""]],[[1,"role",0],[1,"tabindex",0],[2,"ngx-mdc-icon--clickable",null],[2,"ngx-mdc-icon--inline",null]],null,null,f.b,f.a)),e.pb(46,9158656,null,0,I.b,[e.k,I.d,[8,null],I.a],{inline:[0,"inline"]},null),(l()(),e.Hb(-1,0,["pets"])),(l()(),e.Hb(-1,null,[" is my "])),(l()(),e.qb(49,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["favorite"])),(l()(),e.qb(51,0,null,null,2,"mdc-icon",[["class","ngx-mdc-icon"],["inline",""]],[[1,"role",0],[1,"tabindex",0],[2,"ngx-mdc-icon--clickable",null],[2,"ngx-mdc-icon--inline",null]],null,null,f.b,f.a)),e.pb(52,9158656,null,0,I.b,[e.k,I.d,[8,null],I.a],{inline:[0,"inline"]},null),(l()(),e.Hb(-1,0,["favorite"])),(l()(),e.Hb(-1,null,[", he loves to go on "])),(l()(),e.qb(55,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["walks"])),(l()(),e.qb(57,0,null,null,2,"mdc-icon",[["class","ngx-mdc-icon"],["inline",""]],[[1,"role",0],[1,"tabindex",0],[2,"ngx-mdc-icon--clickable",null],[2,"ngx-mdc-icon--inline",null]],null,null,f.b,f.a)),e.pb(58,9158656,null,0,I.b,[e.k,I.d,[8,null],I.a],{inline:[0,"inline"]},null),(l()(),e.Hb(-1,0,["directions_walk"])),(l()(),e.qb(60,0,null,null,1,"example-viewer",[],null,null,null,q.b,q.a)),e.pb(61,114688,null,0,x.a,[y.b],{example:[0,"example"]},null),(l()(),e.qb(62,0,null,null,6,"div",[["class","demo-content"]],null,null,null,null,null)),(l()(),e.qb(63,0,null,null,1,"h3",[["class","demo-content__headline"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["MdcIconRegistry - addSvgIcon"])),(l()(),e.qb(65,0,null,null,1,"mdc-icon",[["class","ngx-mdc-icon"],["svgIcon","thumbs-up"]],[[1,"role",0],[1,"tabindex",0],[2,"ngx-mdc-icon--clickable",null],[2,"ngx-mdc-icon--inline",null]],null,null,f.b,f.a)),e.pb(66,9158656,null,0,I.b,[e.k,I.d,[8,null],I.a],{svgIcon:[0,"svgIcon"]},null),(l()(),e.qb(67,0,null,null,1,"example-viewer",[],null,null,null,q.b,q.a)),e.pb(68,114688,null,0,x.a,[y.b],{example:[0,"example"]},null),(l()(),e.qb(69,0,null,null,8,"div",[["class","demo-content"]],null,null,null,null,null)),(l()(),e.qb(70,0,null,null,1,"h3",[["class","demo-content__headline"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["MdcIconRegistry - addSvgIconLiteral"])),(l()(),e.qb(72,0,null,null,1,"mdc-icon",[["class","ngx-mdc-icon"],["svgIcon","bike"]],[[1,"role",0],[1,"tabindex",0],[2,"ngx-mdc-icon--clickable",null],[2,"ngx-mdc-icon--inline",null]],null,null,f.b,f.a)),e.pb(73,9158656,null,0,I.b,[e.k,I.d,[8,null],I.a],{svgIcon:[0,"svgIcon"]},null),(l()(),e.qb(74,0,null,null,1,"mdc-icon",[["class","demo-svg-custom-color ngx-mdc-icon"],["svgIcon","bike"]],[[1,"role",0],[1,"tabindex",0],[2,"ngx-mdc-icon--clickable",null],[2,"ngx-mdc-icon--inline",null]],null,null,f.b,f.a)),e.pb(75,9158656,null,0,I.b,[e.k,I.d,[8,null],I.a],{svgIcon:[0,"svgIcon"]},null),(l()(),e.qb(76,0,null,null,1,"example-viewer",[],null,null,null,q.b,q.a)),e.pb(77,114688,null,0,x.a,[y.b],{example:[0,"example"]},null),(l()(),e.qb(78,0,null,null,11,"div",[["class","demo-content"]],null,null,null,null,null)),(l()(),e.qb(79,0,null,null,1,"h3",[["class","demo-content__headline"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["MdcIconRegistry - addSvgIconSetInNamespace"])),(l()(),e.qb(81,0,null,null,6,"div",[["class","demo-layout__row"]],null,null,null,null,null)),(l()(),e.qb(82,0,null,null,1,"mdc-icon",[["class","ngx-mdc-icon"],["svgIcon","core:alarm"]],[[1,"role",0],[1,"tabindex",0],[2,"ngx-mdc-icon--clickable",null],[2,"ngx-mdc-icon--inline",null]],null,null,f.b,f.a)),e.pb(83,9158656,null,0,I.b,[e.k,I.d,[8,null],I.a],{svgIcon:[0,"svgIcon"]},null),(l()(),e.qb(84,0,null,null,1,"mdc-icon",[["class","ngx-mdc-icon"],["svgIcon","core:accessibility"]],[[1,"role",0],[1,"tabindex",0],[2,"ngx-mdc-icon--clickable",null],[2,"ngx-mdc-icon--inline",null]],null,null,f.b,f.a)),e.pb(85,9158656,null,0,I.b,[e.k,I.d,[8,null],I.a],{svgIcon:[0,"svgIcon"]},null),(l()(),e.qb(86,0,null,null,1,"mdc-icon",[["class","ngx-mdc-icon"],["svgIcon","core:alarm"]],[[1,"role",0],[1,"tabindex",0],[2,"ngx-mdc-icon--clickable",null],[2,"ngx-mdc-icon--inline",null]],null,null,f.b,f.a)),e.pb(87,9158656,null,0,I.b,[e.k,I.d,[8,null],I.a],{svgIcon:[0,"svgIcon"]},null),(l()(),e.qb(88,0,null,null,1,"example-viewer",[],null,null,null,q.b,q.a)),e.pb(89,114688,null,0,x.a,[y.b],{example:[0,"example"]},null),(l()(),e.qb(90,0,null,null,11,"div",[["class","demo-content"]],null,null,null,null,null)),(l()(),e.qb(91,0,null,null,1,"h3",[["class","demo-content__headline"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["MdcIconRegistry - addSvgIconSetLiteralInNamespace"])),(l()(),e.qb(93,0,null,null,6,"div",[["class","demo-layout__row"]],null,null,null,null,null)),(l()(),e.qb(94,0,null,null,1,"mdc-icon",[["class","ngx-mdc-icon"],["svgIcon","core-inline:account-balance"]],[[1,"role",0],[1,"tabindex",0],[2,"ngx-mdc-icon--clickable",null],[2,"ngx-mdc-icon--inline",null]],null,null,f.b,f.a)),e.pb(95,9158656,null,0,I.b,[e.k,I.d,[8,null],I.a],{svgIcon:[0,"svgIcon"]},null),(l()(),e.qb(96,0,null,null,1,"mdc-icon",[["class","ngx-mdc-icon"],["svgIcon","core-inline:account-balance-wallet"]],[[1,"role",0],[1,"tabindex",0],[2,"ngx-mdc-icon--clickable",null],[2,"ngx-mdc-icon--inline",null]],null,null,f.b,f.a)),e.pb(97,9158656,null,0,I.b,[e.k,I.d,[8,null],I.a],{svgIcon:[0,"svgIcon"]},null),(l()(),e.qb(98,0,null,null,1,"mdc-icon",[["class","ngx-mdc-icon"],["svgIcon","core-inline:account-box"]],[[1,"role",0],[1,"tabindex",0],[2,"ngx-mdc-icon--clickable",null],[2,"ngx-mdc-icon--inline",null]],null,null,f.b,f.a)),e.pb(99,9158656,null,0,I.b,[e.k,I.d,[8,null],I.a],{svgIcon:[0,"svgIcon"]},null),(l()(),e.qb(100,0,null,null,1,"example-viewer",[],null,null,null,q.b,q.a)),e.pb(101,114688,null,0,x.a,[y.b],{example:[0,"example"]},null)],function(l,n){var u=n.component;l(n,4,0),l(n,7,0,u.exampleMaterial),l(n,12,0),l(n,15,0,u.exampleTheme),l(n,22,0,"fa","fa-camera"),l(n,25,0,"fa","fa-camera"),l(n,27,0,u.exampleFa),l(n,32,0),l(n,37,0,u.exampleSvg),l(n,46,0,""),l(n,52,0,""),l(n,58,0,""),l(n,61,0,u.exampleInline),l(n,66,0,"thumbs-up"),l(n,68,0,u.exampleAddSvgIcon),l(n,73,0,"bike"),l(n,75,0,"bike"),l(n,77,0,u.exampleSvgIconLiteral),l(n,83,0,"core:alarm"),l(n,85,0,"core:accessibility"),l(n,87,0,"core:alarm"),l(n,89,0,u.exampleSvgIconSetInNamespace),l(n,95,0,"core-inline:account-balance"),l(n,97,0,"core-inline:account-balance-wallet"),l(n,99,0,"core-inline:account-box"),l(n,101,0,u.exampleSvgIconSetLiteralInNamespace)},function(l,n){l(n,3,0,e.Ab(n,4).role,e.Ab(n,4).tabIndex,e.Ab(n,4).clickable,e.Ab(n,4).inline),l(n,11,0,e.Ab(n,12).role,e.Ab(n,12).tabIndex,e.Ab(n,12).clickable,e.Ab(n,12).inline),l(n,21,0,e.Ab(n,22).role,e.Ab(n,22).tabIndex,e.Ab(n,22).clickable,e.Ab(n,22).inline),l(n,24,0,e.Ab(n,25).role,e.Ab(n,25).tabIndex,e.Ab(n,25).clickable,e.Ab(n,25).inline),l(n,31,0,e.Ab(n,32).role,e.Ab(n,32).tabIndex,e.Ab(n,32).clickable,e.Ab(n,32).inline),l(n,45,0,e.Ab(n,46).role,e.Ab(n,46).tabIndex,e.Ab(n,46).clickable,e.Ab(n,46).inline),l(n,51,0,e.Ab(n,52).role,e.Ab(n,52).tabIndex,e.Ab(n,52).clickable,e.Ab(n,52).inline),l(n,57,0,e.Ab(n,58).role,e.Ab(n,58).tabIndex,e.Ab(n,58).clickable,e.Ab(n,58).inline),l(n,65,0,e.Ab(n,66).role,e.Ab(n,66).tabIndex,e.Ab(n,66).clickable,e.Ab(n,66).inline),l(n,72,0,e.Ab(n,73).role,e.Ab(n,73).tabIndex,e.Ab(n,73).clickable,e.Ab(n,73).inline),l(n,74,0,e.Ab(n,75).role,e.Ab(n,75).tabIndex,e.Ab(n,75).clickable,e.Ab(n,75).inline),l(n,82,0,e.Ab(n,83).role,e.Ab(n,83).tabIndex,e.Ab(n,83).clickable,e.Ab(n,83).inline),l(n,84,0,e.Ab(n,85).role,e.Ab(n,85).tabIndex,e.Ab(n,85).clickable,e.Ab(n,85).inline),l(n,86,0,e.Ab(n,87).role,e.Ab(n,87).tabIndex,e.Ab(n,87).clickable,e.Ab(n,87).inline),l(n,94,0,e.Ab(n,95).role,e.Ab(n,95).tabIndex,e.Ab(n,95).clickable,e.Ab(n,95).inline),l(n,96,0,e.Ab(n,97).role,e.Ab(n,97).tabIndex,e.Ab(n,97).clickable,e.Ab(n,97).inline),l(n,98,0,e.Ab(n,99).role,e.Ab(n,99).tabIndex,e.Ab(n,99).clickable,e.Ab(n,99).inline)})}function N(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,1,"ng-component",[],null,null,null,C,_)),e.pb(1,49152,null,0,h,[I.d,H.b],null,null)],null,null)}var T=e.mb("ng-component",h,N,{},{},[]),U=u("Ip0R"),E=u("gIcY"),F=u("UbVM"),V=u("xgI4"),D=u("AGHz"),O=u("XHh6"),J=u("6MSC"),j=u("hMXP"),K=u("3h+E"),B=u("RvxL"),X=u("Y5c5"),Y=u("IEKO"),Z=u("fsoo"),$=u("e35x"),G=u("84sf"),P=u("diqM"),W=u("rDbZ"),Q=u("eKpT"),ll=u("Q2wE"),nl=u("6wbl"),ul=u("Y6EJ"),el=u("P18B"),cl=u("oSez"),ol=u("nlZK"),al=u("jlzV"),tl=u("EpaD"),il=u("8JU9"),bl=u("ppXW"),sl=u("x3pU"),dl=u("eLLS"),ml=u("a3kT"),rl=u("FZZA"),pl=u("HolX"),gl=u("vvyD"),hl=u("ZYCi"),vl=u("Lkda"),fl=u("OQP5"),Il=u("d2mR"),ql=function(){return function(){}}();u.d(n,"IconModuleNgFactory",function(){return xl});var xl=e.nb(c,[],function(l){return e.xb([e.yb(512,e.j,e.cb,[[8,[o.b,o.a,a.b,a.a,t.a,k,z,T]],[3,e.j],e.y]),e.yb(4608,U.l,U.k,[e.v,[2,U.v]]),e.yb(4608,E.w,E.w,[]),e.yb(4608,F.a,F.a,[F.b,e.j,e.r,e.A,U.c,[2,U.g]]),e.yb(135680,V.c,V.c,[F.a,e.r,[2,V.b],[3,V.c]]),e.yb(4608,E.b,E.b,[]),e.yb(1073742336,U.b,U.b,[]),e.yb(1073742336,E.u,E.u,[]),e.yb(1073742336,E.h,E.h,[]),e.yb(1073742336,D.c,D.c,[]),e.yb(1073742336,O.h,O.h,[]),e.yb(1073742336,J.e,J.e,[]),e.yb(1073742336,j.b,j.b,[]),e.yb(1073742336,I.c,I.c,[]),e.yb(1073742336,K.g,K.g,[]),e.yb(1073742336,B.f,B.f,[]),e.yb(1073742336,F.c,F.c,[]),e.yb(1073742336,V.k,V.k,[]),e.yb(1073742336,X.e,X.e,[]),e.yb(1073742336,Y.b,Y.b,[]),e.yb(1073742336,Z.c,Z.c,[]),e.yb(1073742336,$.b,$.b,[]),e.yb(1073742336,G.f,G.f,[]),e.yb(1073742336,P.b,P.b,[]),e.yb(1073742336,W.j,W.j,[]),e.yb(1073742336,Q.d,Q.d,[]),e.yb(1073742336,ll.b,ll.b,[]),e.yb(1073742336,nl.c,nl.c,[]),e.yb(1073742336,ul.c,ul.c,[]),e.yb(1073742336,el.b,el.b,[]),e.yb(1073742336,cl.b,cl.b,[]),e.yb(1073742336,ol.b,ol.b,[]),e.yb(1073742336,al.d,al.d,[]),e.yb(1073742336,tl.b,tl.b,[]),e.yb(1073742336,y.f,y.f,[]),e.yb(1073742336,il.b,il.b,[]),e.yb(1073742336,bl.b,bl.b,[]),e.yb(1073742336,sl.e,sl.e,[]),e.yb(1073742336,dl.b,dl.b,[]),e.yb(1073742336,ml.b,ml.b,[]),e.yb(1073742336,rl.d,rl.d,[]),e.yb(1073742336,pl.d,pl.d,[]),e.yb(1073742336,v.n,v.n,[]),e.yb(1073742336,gl.a,gl.a,[]),e.yb(1073742336,E.r,E.r,[]),e.yb(1073742336,hl.o,hl.o,[[2,hl.u],[2,hl.l]]),e.yb(1073742336,vl.b,vl.b,[]),e.yb(1073742336,fl.d,fl.d,[]),e.yb(1073742336,Il.a,Il.a,[]),e.yb(1073742336,ql,ql,[]),e.yb(1073742336,c,c,[]),e.yb(1024,hl.j,function(){return[[{path:"",component:p,children:[{path:"",redirectTo:"api"},{path:"api",component:g},{path:"examples",component:h}]}]]},[])])})}}]);