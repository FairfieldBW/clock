(function(t){function e(e){for(var o,a,r=e[0],c=e[1],n=e[2],d=0,h=[];d<r.length;d++)a=r[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&h.push(i[a][0]),i[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(h.length)h.shift()();return l.push.apply(l,n||[]),s()}function s(){for(var t,e=0;e<l.length;e++){for(var s=l[e],o=!0,r=1;r<s.length;r++){var c=s[r];0!==i[c]&&(o=!1)}o&&(l.splice(e--,1),t=a(a.s=s[0]))}return t}var o={},i={app:0},l=[];function a(e){if(o[e])return o[e].exports;var s=o[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=t,a.c=o,a.d=function(t,e,s){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(s,o,function(e){return t[e]}.bind(null,o));return s},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/clock/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var n=0;n<r.length;n++)e(r[n]);var u=c;l.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0800":function(t){t.exports=JSON.parse('{"Default":{"color":"primary","button_colors":{"Bay Site":"is-info","Lunch Menu":"is-warning","Custom Schedule":"is-danger","Customize":"is-primary"},"progress_color":"is-success"},"Monochrome":{"color":"light","button_colors":{"Bay Site":"is-black","Lunch Menu":"is-dark","Custom Schedule":"is-light","Customize":"is-white"},"progress_color":"is-light"}}')},"2fc4":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var o=s("2b0e"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"body"}},[o("section",{staticClass:"section",attrs:{id:"top-bar"}},[o("nav",{staticClass:"level"},[t.information_bools["Clock"]?o("div",{staticClass:"level-left"},[o("h1",{staticClass:"title is-1"},[t._v(t._s(t.getCurrentTime(t.time)))])]):t._e(),t.information_bools["Block Indicator"]?o("div",{staticClass:"level-right"},[o("h1",{staticClass:"title is-1"},[t._v(t._s(t.getBlock()))])]):t._e()])]),o("section",{staticClass:"section",attrs:{id:"mid-bar"}},[o("nav",{staticClass:"level"},[t.information_bools["Date"]?o("div",{staticClass:"level-left"},[o("h2",{staticClass:"subtitle is-3",attrs:{id:"date"}},[t._v(t._s(t.time.toDateString()))])]):t._e(),t.special_schedule_bool&&t.information_bools["Special Schedule Indicator"]?o("div",{staticClass:"level-right"},[o("h2",{staticClass:"subtitle is-3",attrs:{id:"date"}},[t._v("SPECIAL SCHEDULE")])]):t._e()])]),0!=t.time.getDay()&&6!=t.time.getDay()?o("div",{attrs:{id:"block-container"}},t._l(t.getDayDict(),(function(e,s){return o("section",{key:s,staticClass:"section block"},[o("b-progress",{attrs:{value:t.getProgress(e),size:"is-large",type:t.progress_color,"show-value":""}},[o("nav",{staticClass:"level is-mobile"},[o("div",{staticClass:"level-left"},[o("p",{staticClass:"level-item"},[t._v(t._s(t.getName(s)))])]),o("div",{staticClass:"level-right"},[o("p",{staticClass:"level-item"},[t._v(t._s(t.getTime(e[0])+" - "+t.getTime(e[1])))])])])])],1)})),0):t._e(),o("section",{staticClass:"section"},[o("nav",{staticClass:"level"},[o("div",{staticClass:"level-left"},[o("div",{staticClass:"level-item"},[o("b-button",{attrs:{type:t.button_colors["Bay Site"],tag:"a",href:"https://www.bayschoolsf.org/",target:"_blank"}},[t._v("Bay Site")])],1),o("div",{staticClass:"level-item"},[o("b-button",{attrs:{label:"Lunch Menu",type:t.button_colors["Lunch Menu"]},on:{click:function(e){t.isLunchModalActive=!0}}})],1),o("div",{staticClass:"level-item"},[o("b-button",{attrs:{label:"Custom Schedule",type:t.button_colors["Custom Schedule"]},on:{click:function(e){t.isRescheduleModalActive=!0}}})],1),o("div",{staticClass:"level-item"},[o("b-button",{attrs:{label:"Customize",type:t.button_colors["Customize"]},on:{click:function(e){t.isCustomizeModalActive=!0}}})],1)])])]),o("b-modal",{model:{value:t.isLunchModalActive,callback:function(e){t.isLunchModalActive=e},expression:"isLunchModalActive"}},[o("p",{staticClass:"image"},[o("img",{attrs:{src:s("6c20")}})]),o("p",{staticClass:"image"},[o("img",{attrs:{src:s("68dc")}})])]),o("b-modal",{attrs:{"can-cancel":"['escape', 'outside']"},model:{value:t.isRescheduleModalActive,callback:function(e){t.isRescheduleModalActive=e},expression:"isRescheduleModalActive"}},[o("div",{staticClass:"modal-card",staticStyle:{width:"auto"}},[o("header",{staticClass:"modal-card-head"},[o("p",{staticClass:"modal-card-title"},[t._v("Custom Schedule")]),o("button",{staticClass:"delete",attrs:{type:"button"},on:{click:function(e){t.isRescheduleModalActive=!1}}})]),o("section",{staticClass:"modal-card-body"},t._l(Object.keys(t.blocks),(function(e){return o("b-field",{key:e,attrs:{label:e+" Block:"}},[o("b-input",{model:{value:t.blocks[e],callback:function(s){t.$set(t.blocks,e,s)},expression:"blocks[block]"}})],1)})),1),o("footer",{staticClass:"modal-card-foot"},[o("b-button",{attrs:{label:"Close"},on:{click:function(e){t.isRescheduleModalActive=!1}}}),o("b-button",{attrs:{label:"Save",type:"is-primary"},on:{click:t.saveBlocks}})],1)])]),o("b-modal",{attrs:{"can-cancel":"['escape', 'outside']"},model:{value:t.isCustomizeModalActive,callback:function(e){t.isCustomizeModalActive=e},expression:"isCustomizeModalActive"}},[o("div",{staticClass:"modal-card",staticStyle:{width:"auto"}},[o("header",{staticClass:"modal-card-head"},[o("p",{staticClass:"modal-card-title"},[t._v("Customize")]),o("button",{staticClass:"delete",attrs:{type:"button"},on:{click:function(e){t.isCustomizeModalActive=!1}}})]),o("section",{staticClass:"modal-card-body"},[o("h4",{staticClass:"subtitle is-4"},[t._v("Information")]),o("nav",{staticClass:"level"},[o("div",{staticClass:"level-left"},[o("div",{staticClass:"level-item"},[o("b-field",t._l(Object.keys(t.information_bools),(function(e){return o("b-checkbox",{key:e,model:{value:t.information_bools[e],callback:function(s){t.$set(t.information_bools,e,s)},expression:"information_bools[item]"}},[t._v(" "+t._s(e)+" ")])})),1)],1)])]),o("h4",{staticClass:"subtitle is-4"},[t._v("Progress Bar")]),o("nav",{staticClass:"level"},[o("div",{staticClass:"level-left"},[o("div",{staticClass:"level-item"},[o("b-field",{attrs:{label:"Color"}},[o("b-select",{attrs:{placeholder:"Select a color"},model:{value:t.progress_color,callback:function(e){t.progress_color=e},expression:"progress_color"}},[o("option",{attrs:{disabled:""}},[t._v("Default Colors:")]),t._l(t.colors,(function(e,s){return o("option",{key:e,domProps:{value:e}},[t._v(" "+t._s(s)+" ")])})),o("option",{attrs:{disabled:""}},[t._v("Olympic Team Colors:")]),t._l(t.olympic_teams,(function(e,s){return o("option",{key:e,domProps:{value:e}},[t._v(" "+t._s(s.replace(/^\w/,(function(t){return t.toUpperCase()})))+" ")])}))],2)],1)],1)])]),o("h4",{staticClass:"subtitle is-4"},[t._v("Buttons")]),o("nav",{staticClass:"level"},[o("div",{staticClass:"level-left"},t._l(t.button_colors,(function(e,s){return o("div",{key:e,staticClass:"level-item"},[o("b-field",{attrs:{label:s}},[o("b-select",{attrs:{placeholder:"Select a color"},model:{value:t.button_colors[s],callback:function(e){t.$set(t.button_colors,s,e)},expression:"button_colors[button_name]"}},[o("option",{attrs:{disabled:""}},[t._v("Default Colors:")]),t._l(t.colors,(function(e,s){return o("option",{key:e,domProps:{value:e}},[t._v(" "+t._s(s)+" ")])})),o("option",{attrs:{disabled:""}},[t._v("Olympic Team Colors:")]),t._l(t.olympic_teams,(function(e,s){return o("option",{key:e,domProps:{value:e}},[t._v(" "+t._s(s.replace(/^\w/,(function(t){return t.toUpperCase()})))+" ")])}))],2)],1)],1)})),0)]),o("h4",{staticClass:"subtitle is-4"},[t._v("Presets")]),o("h5",{staticClass:"subtitle is-5"},[t._v("Rep your Olympic Team!")]),o("b-field",t._l(Object.keys(t.olympic_teams),(function(e){return o("b-radio-button",{key:e,attrs:{"native-value":e,type:"is-"+e+"-team is-light is-outlined"},nativeOn:{click:function(s){return s.preventDefault(),t.setPreset(e)}},model:{value:t.preset,callback:function(e){t.preset=e},expression:"preset"}},[o("span",[t._v(t._s(e.replace(/^\w/,(function(t){return t.toUpperCase()}))))])])})),1),o("h5",{staticClass:"subtitle is-5"},[t._v("Other")]),o("b-field",t._l(t.presets,(function(e,s){return o("b-radio-button",{key:s,attrs:{"native-value":s,type:"is-"+e["color"]+" is-light is-outlined"},nativeOn:{click:function(e){return e.preventDefault(),t.setPreset(s)}},model:{value:t.preset,callback:function(e){t.preset=e},expression:"preset"}},[o("span",[t._v(t._s(s))])])})),1)],1),o("footer",{staticClass:"modal-card-foot"},[o("b-button",{attrs:{label:"Close"},on:{click:function(e){t.isCustomizeModalActive=!1}}}),o("b-button",{attrs:{label:"Save",type:"is-primary"},on:{click:t.saveCustomizations}})],1)])]),o("footer",{staticClass:"footer"},[o("div",{staticClass:"content has-text-centered"},[o("p",[o("a",{attrs:{id:"easter-egg"},on:{click:t.easterEgg}},[t._v("Coded")]),t._v(" by "),o("a",{attrs:{href:"https://github.com/FairfieldBW",target:"_blank"}},[t._v("Lucas Chang")]),t._v(". Updated on 10/02/21.")]),o("p",[t._v("Found a Bug? Email: lchang24@bayschoolsf.org")])])])],1)},l=[],a=s("3835"),r=(s("07ac"),s("b64b"),s("4fad"),s("c565")),c=s("d4aa"),n=s("0800"),u={data:function(){return{time:new Date,schedule:r,special_schedule:c,presets:n,special_schedule_bool:!1,isRescheduleModalActive:!1,isCustomizeModalActive:!1,isLunchModalActive:!1,information_bools:{Clock:!0,"Block Indicator":!0,Date:!0,"Special Schedule Indicator":!0},button_colors:{"Bay Site":"is-info","Lunch Menu":"is-warning","Custom Schedule":"is-danger",Customize:"is-primary"},olympic_teams:{blue:"is-blue-team",crimson:"is-crimson-team",orange:"is-orange-team",gold:"is-gold-team",green:"is-green-team",grey:"is-grey-team",pink:"is-pink-team",purple:"is-purple-team"},blocks:{A:"A",B:"B",C:"C",D:"D",E:"E",F:"F"},colors:{White:"is-white",Black:"is-black","Light Gray":"is-light","Dark Gray":"is-dark",Turquoise:"is-primary",Blue:"is-info",Green:"is-success",Yellow:"is-warning",Red:"is-danger"},progress_color:"is-success",preset:""}},methods:{setPreset:function(t){if(this.preset=t,t in this.olympic_teams){var e="is-"+t+"-team";this.progress_color=e,this.button_colors={"Bay Site":e,"Lunch Menu":e,"Custom Schedule":e,Customize:e}}else this.progress_color=this.presets[t]["progress_color"],this.button_colors=this.presets[t]["button_colors"]},saveCustomizations:function(){var t={information_bools:this.information_bools,progress_color:this.progress_color,button_colors:this.button_colors},e=JSON.stringify(t);localStorage.setItem("custom_styles",e),this.isCustomizeModalActive=!1},saveBlocks:function(){var t=JSON.stringify(this.blocks);localStorage.setItem("custom_blocks",t),this.isRescheduleModalActive=!1},getName:function(t){return t in this.blocks?this.blocks[t]:t},loadSchedule:function(t){for(var e=t,s=this.time,o=0,i=Object.values(e);o<i.length;o++)for(var l=i[o],a=0,r=Object.values(l);a<r.length;a++){var c=r[a];c[0]=new Date(s.getFullYear(),s.getMonth(),s.getDate(),c[0][0],c[0][1]),c[1]=new Date(s.getFullYear(),s.getMonth(),s.getDate(),c[1][0],c[1][1])}return e},easterEgg:function(){this.$buefy.dialog.alert("Coded this for so long that my eye started twitching!")},getDayDict:function(){for(var t=0,e=Object.keys(this.special_schedule);t<e.length;t++){var s=e[t],o=new Date(s);if(o.getFullYear()===this.time.getFullYear()&&o.getMonth()===this.time.getMonth()&&o.getDate()===this.time.getDate())return this.special_schedule_bool=!0,this.special_schedule[s]}return this.special_schedule_bool=!1,Object.values(this.schedule)[this.time.getDay()-1]},dayDictLength:function(){return Object.keys(this.getDayDict()).length},getCurrentTime:function(t){var e=t.getHours(),s=t.getMinutes(),o=t.getSeconds(),i="AM";return e>11&&(12!=e&&(e-=12),i="PM"),e=e<10?"0"+e:e,s=s<10?"0"+s:s,o=o<10?"0"+o:o,e+":"+s+":"+o+i},getProgress:function(t){var e=parseInt((t[1]-t[0])/1e3)/60,s=parseInt((this.time-t[0])/1e3)/60;return Math.round(s/e*100)},getTime:function(t){var e=t.getHours(),s=t.getMinutes();return e>11&&12!=e&&(e-=12),e=e<10?"0"+e:e,s=s<10?"0"+s:s,e+":"+s},getFirstPeriod:function(t){return Object.values(t)[0][0]},getLastPeriod:function(t){return Object.values(t)[Object.keys(t).length-1][1]},getBlock:function(){var t=this.getDayDict();if(0==this.time.getDay()||6==this.time.getDay())return"Weekend";if(this.time<this.getFirstPeriod(t))return"School hasn't started";if(this.time>this.getLastPeriod(t))return"School is over";for(var e=0,s=Object.entries(t);e<s.length;e++){var o=Object(a["a"])(s[e],2),i=o[0],l=o[1];if(this.time>=l[0]&&this.time<l[1])return"Block: "+this.getName(i)}return"Block: Passing"},tick:function(){this.time=new Date,document.title=this.getBlock()}},created:function(){this.schedule=this.loadSchedule(this.schedule),this.special_schedule=this.loadSchedule(this.special_schedule),setInterval(this.tick,1e3)},mounted:function(){if(localStorage.getItem("custom_blocks"))try{this.blocks=JSON.parse(localStorage.getItem("custom_blocks"))}catch(e){localStorage.removeItem("custom_blocks")}if(localStorage.getItem("custom_styles"))try{var t=JSON.parse(localStorage.getItem("custom_styles"));this.information_bools=t["information_bools"],this.progress_color=t["progress_color"],this.button_colors=t["button_colors"]}catch(e){localStorage.removeItem("custom_styles")}}},d=u,h=s("2877"),p=Object(h["a"])(d,i,l,!1,null,null,null),v=p.exports,m=(s("2fc4"),s("289d"));o["a"].config.productionTip=!1,o["a"].use(m["a"]),new o["a"]({render:function(t){return t(v)}}).$mount("#app")},"68dc":function(t,e,s){t.exports=s.p+"img/2.65362d19.jpg"},"6c20":function(t,e,s){t.exports=s.p+"img/1.2783849f.jpg"},c565:function(t){t.exports=JSON.parse('{"Monday":{"Morning Meeting":[[8,30],[8,50]],"A":[[8,55],[10,10]],"B":[[10,15],[11,30]],"Lunch":[[11,30],[12,30]],"C":[[12,30],[13,45]],"D":[[13,50],[15,5]],"Tutorial":[[15,5],[15,35]]},"Tuesday":{"Group Advisory/1-on-1s":[[8,30],[8,50]],"E":[[8,55],[10,10]],"F":[[10,15],[11,30]],"Lunch":[[11,30],[12,30]],"A":[[12,30],[13,45]],"B":[[13,50],[15,5]],"Tutorial":[[15,5],[15,35]]},"Wednesday":{"Morning Meeting":[[8,30],[8,50]],"C":[[8,55],[10,10]],"D":[[10,15],[11,30]],"Lunch":[[11,30],[12,30]],"E":[[12,30],[13,45]],"F":[[13,50],[15,5]],"Tutorial":[[15,5],[15,35]]},"Thursday":{"Group Advisory/1-on-1s":[[8,30],[8,50]],"B":[[8,55],[10,25]],"A":[[10,35],[12,5]],"Lunch":[[12,5],[12,55]],"C":[[12,55],[14,25]],"Tutorial":[[14,25],[14,55]]},"Friday":{"Morning Meeting":[[8,30],[8,50]],"D":[[8,55],[10,25]],"F":[[10,35],[12,5]],"Lunch":[[12,5],[12,55]],"E":[[12,55],[14,25]]}}')},d4aa:function(t){t.exports=JSON.parse('{"2021/09/30":{"Group Advisory/1-on-1s":[[8,30],[8,50]],"A":[[8,55],[10,10]],"B":[[10,15],[11,30]],"Lunch":[[11,30],[12,30]],"Field Day":[[12,30],[14,50]]},"2021/10/01":{"Morning Meeting":[[8,30],[8,50]],"C":[[8,55],[10,10]],"D":[[10,15],[11,30]],"Lunch":[[11,30],[12,30]],"E":[[12,30],[13,45]],"F":[[13,50],[15,5]]}}')}});
//# sourceMappingURL=app.eb89965b.js.map