function jsvm_this_initialization(u){var e=5;u:while(e!==undefined){switch(e%10){case 0:(function(_a_r_g_,t){switch(t){case 0:{e=i<64?70:3;return}case 1:{e=i<H?6:90;return}case 2:{e=i<m?31:2;return}case 3:{I=-I;e=51;return}case 4:{i+=4;e=60;return}case 5:{T+=u.charCodeAt(i);e=1;return}case 6:{e=i<a.length?9:12;return}case 7:{r[n.charAt(i)]=i;e=91;return}case 8:{e=I==0?41:51;return}case 9:{i=0;e=60;return}}})(arguments,e/10|0);break;case 1:(function(_a_r_g_,u){switch(u){case 0:{i++;e=11;return}case 1:{e=i<m?50:7;return}case 2:{i++;e=20;return}case 3:{I=I*31+~i>>>0;V[i]=I%m;e=21;return}case 4:{I=13;e=51;return}case 5:{i=0;e=20;return}case 6:{i+=4;e=10;return}case 7:{i++;e=81;return}case 8:{e=i<m?8:4;return}case 9:{i++;e=0;return}}})(arguments,e/10|0);break;case 2:(function(_a_r_g_,u){switch(u){case 0:{i=0;e=81;return}case 1:{jsvm_this_sdata=s.join("|");e=undefined;break}}})(arguments,e/10|0);break;case 3:{var t=s.pop();H=t.length;jsvm_this_insns=[];i=0;e=10;break}case 4:{u=s.join("");s=u.split("|");var a=s.pop();var n=s.pop();var r={};i=0;e=0;break}case 5:{var s=u.split("");var m=s.length;var i;var H;var V=[];var T=0;i=0;e=11;break}case 6:{var h=r[t.charAt(i+0)]<<18|r[t.charAt(i+1)]<<12|r[t.charAt(i+2)]<<6|r[t.charAt(i+3)];jsvm_this_insns.push(h);e=61;break}case 7:{var I=~(T*m);e=I<0?30:80;break}case 8:{var g=V[i];var o=s[g];s[g]=s[0];s[0]=o;e=71;break}case 9:{var h=r[a.charAt(i+0)]<<18|r[a.charAt(i+1)]<<12|r[a.charAt(i+2)]<<6|r[a.charAt(i+3)];jsvm_this_entrances.push(h);e=40;break}}}}function jsvm_this_run(u,e){function decimalToHex(u,e){var t=1;u:while(t!==undefined){switch(t%3){case 0:(function(_a_r_g_,u){switch(u){case 0:{t=a.length<e?3:2;return}case 1:{a="0"+a;t=0;return}}})(arguments,t/3|0);break;case 1:{var a=(+u).toString(16);e=e||2;t=0;break}case 2:{return a}}}}function loaddata(u){return a[u]}function storedata(u,e){a[u]=e}var t=3;u:while(t!==undefined){switch(t%7){case 0:(function(_a_r_g_,u){switch(u){case 0:{t=35;return}case 1:{g=false;t=I>jsvm_this_insns.length?2:6;return}case 2:{I+=O+1;t=28;return}case 3:{t=I===undefined?1:15;return}case 4:{t=1?7:35;return}case 5:{t=undefined;break}case 6:{n=jsvm_this_entrances[e];r=[];s=[undefined];m=[];t=8;return}}})(arguments,t/7|0);break;case 1:(function(_a_r_g_,u){switch(u){case 0:{t=35;return}case 1:{t=0?22:5;return}case 2:{t=g===false?14:28;return}case 3:{a=jsvm_this_sdata.split("\t");i=0;t=29;return}case 4:{t=i<a.length?4:42;return}case 5:{i++;t=29;return}}})(arguments,t/7|0);break;case 2:{return}case 3:{var a,n,r,s,m,i,H,V,T,h;t=22;break}case 4:{try{{a[i]=u(a[i])}}catch(u){a[i]=undefined}t=36;break}case 5:{var I;var g;var o;var v;var c=0;var _=0;var N=[];var p=[];var d=true;v=[undefined];I=n-1;o=0;t=7;break}case 6:{var j;var f,W;var b,Z,l,C,w,E,k;var O=0;f=jsvm_this_insns[I];j=f&127;switch(j){case 26:O=1;W=jsvm_this_insns[I+1];b=f>>7&31;Z=f>>12&4095;l=W>>0&31;r[b][Z]=r[l];break;case 21:b=f>>7&31;Z=f>>12&31;l=f>>17&31;r[b]=r[Z]===r[l];break;case 64:b=f>>7&31;Z=f>>12&31;l=f>>17&31;r[b]=loaddata(r[Z]+r[l]);break;case 96:O=1;W=jsvm_this_insns[I+1];b=f>>7&31;Z=f>>12&31;l=f>>17&127;l|=(W>>0&511)<<7;r[b]=loaddata(r[Z]+l);break;case 16:b=f>>7&31;Z=f>>12&255;r[b]=Z==2?+r[b]:Z==0?{}:Z==1?[]:undefined;break;case 32:O=1;W=jsvm_this_insns[I+1];b=f>>7&31;Z=f>>12&4095;Z|=(W>>0&15)<<12;r[b]=Z;break;case 48:O=1;W=jsvm_this_insns[I+1];b=f>>7&31;Z=f>>12&4095;Z|=(W>>0&15)<<12;Z=Z<<16>>16;r[b]=Z;break;case 80:O=1;W=jsvm_this_insns[I+1];b=f>>7&65535;Z=f>>23&1;Z|=(W>>0&15)<<1;l=W>>4&65535;storedata(b+l,r[Z]);break;case 8:O=1;W=jsvm_this_insns[I+1];b=f>>7&31;Z=f>>12&31;l=f>>17&31;C=f>>22&3;C|=(W>>0&7)<<2;w=W>>3&31;try{if(Z===31){r[b]=r[l](r[C],r[w])}else{r[b]=r[Z][r[l]](r[C],r[w])}}catch(u){g=true;I=v.pop();if(I==undefined){break}if(I===-1){I=v.pop()}if(c===2){c=v.pop();I=v.pop();if(I===-1){s.pop();I=v.pop()}}_=3+c;c=(c+1)%3;r[0]=u}break;case 112:O=1;W=jsvm_this_insns[I+1];b=f>>7&31;Z=f>>12&4095;Z|=(W>>0&15)<<12;l=W>>4&31;r[b]=loaddata(Z+r[l]);break;case 72:O=1;W=jsvm_this_insns[I+1];b=f>>7&31;Z=f>>12&31;l=f>>17&31;C=f>>22&3;C|=(W>>0&7)<<2;try{if(Z===31){r[b]=r[l](r[C])}else{r[b]=r[Z][r[l]](r[C])}}catch(u){g=true;I=v.pop();if(I==undefined){break}if(I===-1){I=v.pop()}if(c===2){c=v.pop();I=v.pop();if(I===-1){s.pop();I=v.pop()}}_=3+c;c=(c+1)%3;r[0]=u}break;case 104:O=1;W=jsvm_this_insns[I+1];b=f>>7&31;Z=f>>12&31;l=f>>17&31;C=f>>22&3;C|=(W>>0&7)<<2;w=W>>3&31;E=W>>8&31;k=W>>13&31;try{if(o===0){if(Z===31){r[b]=r[l](r[C],r[w],r[E],r[k])}else{r[b]=r[Z][r[l]](r[C],r[w],r[E],r[k])}}else{V=[];if(Z==31){T=undefined}else{T=r[Z]}V.push(r[C]);V.push(r[w]);V.push(r[E]);V.push(r[k]);h=[];for(i=0;i<o;i++){h.push(s.pop())}for(i=0;i<o;i++){V.push(h.pop())}if(Z==31){r[b]=r[l].apply(T,V)}else{r[b]=T[r[l]].apply(T,V)}o=0}}catch(u){g=true;I=v.pop();if(I==undefined){break}if(I===-1){I=v.pop()}if(c===2){c=v.pop();I=v.pop();if(I===-1){s.pop();I=v.pop()}}_=3+c;c=(c+1)%3;r[0]=u}break;case 24:b=f>>7&31;Z=f>>12&31;l=f>>17&31;try{if(Z===31){r[b]=r[l]()}else{r[b]=r[Z][r[l]]()}}catch(u){g=true;I=v.pop();if(I==undefined){break}if(I===-1){I=v.pop()}if(c===2){c=v.pop();I=v.pop();if(I===-1){s.pop();I=v.pop()}}_=3+c;c=(c+1)%3;r[0]=u}break;case 88:b=f>>7&31;Z=f>>12&31;l=f>>17&31;storedata(r[b]+r[l],r[Z]);break;case 40:O=1;W=jsvm_this_insns[I+1];b=f>>7&31;Z=f>>12&31;l=f>>17&31;C=f>>22&3;C|=(W>>0&7)<<2;w=W>>3&31;E=W>>8&31;try{if(Z===31){r[b]=r[l](r[C],r[w],r[E])}else{r[b]=r[Z][r[l]](r[C],r[w],r[E])}}catch(u){g=true;I=v.pop();if(I==undefined){break}if(I===-1){I=v.pop()}if(c===2){c=v.pop();I=v.pop();if(I===-1){s.pop();I=v.pop()}}_=3+c;c=(c+1)%3;r[0]=u}break;case 120:b=f>>7&31;Z=f>>12&31;r[b]=u(r[Z]);break;case 4:b=f>>7&31;Z=f>>12&31;l=f>>17&31;o+=3;s.push(r[b]);s.push(r[Z]);s.push(r[l]);break;case 68:O=1;W=jsvm_this_insns[I+1];b=f>>7&31;Z=f>>12&31;l=f>>17&127;l|=(W>>0&511)<<7;storedata(r[b]+l,r[Z]);break;case 36:b=f>>7&31;o+=1;s.push(r[b]);break;case 56:O=1;W=jsvm_this_insns[I+1];b=f>>7&31;Z=f>>12&31;l=f>>17&31;C=f>>22&3;C|=(W>>0&7)<<2;o+=4;s.push(r[b]);s.push(r[Z]);s.push(r[l]);s.push(r[C]);break;case 100:b=f>>7&31;Z=f>>12&31;o+=2;s.push(r[b]);s.push(r[Z]);break;case 20:O=1;W=jsvm_this_insns[I+1];b=f>>7&65535;Z=f>>23&1;Z|=(W>>0&15)<<1;l=W>>4&31;storedata(b+r[l],r[Z]);break;case 84:b=f>>7&65535;b=b<<16>>16;v.push(I+b);break;case 52:b=f>>7&65535;b=b<<16>>16;v.push(I+b);break;case 116:b=f>>7&65535;b=b<<16>>16;v.push(c);_=0;c=0;v.push(I+b);break;case 12:b=f>>7&31;r[0]=r[b];_=3+c;break;case 76:g=true;I=v.pop();c=v.pop();if(_>3){I=v.pop();if(I===-1){s.pop();I=v.pop()}}_=0;break;case 44:g=true;I=v.pop();c++;if(_===0){I=v.pop();c++}break;case 108:g=true;I=v.pop();c++;break;case 92:b=f>>7&65535;g=true;I=b-1;break;case 60:O=1;W=jsvm_this_insns[I+1];b=f>>7&31;Z=f>>12&4095;Z|=(W>>0&15)<<12;r[b]=Z;break;case 124:b=f>>7&31;g=true;I=r[b]-1;break;case 28:b=f>>7&31;g=true;d=false;s.push(I+1+O);I=r[b]-1;v.push(-1);c=0;_=0;break;case 66:b=f>>7&31;Z=f>>12&31;jsvm_this_tmpValue=r[Z];u(""+r[b]+" = jsvm_this_tmpValue;");break;case 2:b=f>>7&31;r[b]={};break;case 98:b=f>>7&31;Z=f>>12&31;l=f>>17&31;r[b]=r[Z]|r[l];break;case 34:b=f>>7&31;Z=f>>12&31;l=f>>17&31;r[b]=r[Z]^r[l];break;case 82:b=f>>7&31;Z=f>>12&31;l=f>>17&31;r[b]=r[Z]%r[l];break;case 18:b=f>>7&31;Z=f>>12&31;l=f>>17&31;r[b]=r[Z]/r[l];break;case 114:b=f>>7&31;Z=f>>12&31;l=f>>17&31;r[b]=r[Z]&r[l];break;case 50:b=f>>7&31;Z=f>>12&31;r[b]=~r[Z];break;case 74:b=f>>7&31;Z=f>>12&31;l=f>>17&31;r[b]=r[Z]*r[l];break;case 10:b=f>>7&31;Z=f>>12&31;l=f>>17&31;r[b]=r[Z]-r[l];break;case 42:b=f>>7&31;Z=f>>12&31;l=f>>17&31;r[b]=r[Z]+r[l];break;case 106:b=f>>7&31;Z=f>>12&31;l=f>>17&31;r[b]=r[Z]>>>r[l];break;case 0:O=1;W=jsvm_this_insns[I+1];b=f>>7&31;Z=f>>12&4095;Z|=(W>>0&15)<<12;l=W>>4&65535;r[b]=loaddata(Z+l);break;case 58:b=f>>7&31;Z=f>>12&31;l=f>>17&31;r[b]=r[Z]<<r[l];break;case 90:O=1;W=jsvm_this_insns[I+1];b=f>>7&31;Z=f>>12&31;l=f>>17&127;l|=(W>>0&31)<<7;r[b]=r[Z][l];break;case 6:O=1;W=jsvm_this_insns[I+1];b=f>>7&31;Z=f>>12&4095;Z|=(W>>0&15)<<12;if(r[b]){g=true;I=Z-1}break;case 70:g=true;v.pop();I=s.pop();if(I===undefined){I=-1}break;case 122:b=f>>7&31;Z=f>>12&31;r[b]=u(""+r[Z]);break;case 38:O=1;W=jsvm_this_insns[I+1];b=f>>7&65535;b=b<<16>>16;Z=f>>23&1;Z|=(W>>0&15)<<1;if(s.length<=b){break}s[s.length-1-b]=r[Z];break;case 22:b=f>>7&31;Z=f>>12&31;if(s.length<=r[Z]){break}r[b]=s[s.length-1-r[Z]];break;case 86:b=f>>7&31;Z=f>>12&31;if(s.length<=r[b]){break}s[s.length-1-r[b]]=r[Z];break;case 54:b=f>>7&31;Z=f>>12&31;l=f>>17&31;if(r[b]===undefined){jsvm_this_tmpValue=r[l];u(""+r[Z]+" = jsvm_this_tmpValue;")}else{try{r[b][r[Z]]=r[l]}catch(u){g=true;I=v.pop();if(I==undefined){break}if(I===-1){I=v.pop()}if(c===2){c=v.pop();I=v.pop();if(I===-1){s.pop();I=v.pop()}}_=3+c;c=(c+1)%3;r[0]=u}}break;case 102:b=f>>7&31;Z=f>>12&31;if(r[b]){g=true;I=r[Z]-1}break;case 118:b=f>>7&31;Z=f>>12&31;l=f>>17&31;try{r[b]=r[Z][r[l]]}catch(u){g=true;I=v.pop();if(I==undefined){break}if(I===-1){I=v.pop()}if(c===2){c=v.pop();I=v.pop();if(I===-1){s.pop();I=v.pop()}}_=3+c;c=(c+1)%3;r[0]=u}break;case 14:O=1;W=jsvm_this_insns[I+1];b=f>>7&31;Z=f>>12&31;l=f>>17&31;C=f>>22&3;C|=(W>>0&7)<<2;s.push(r[b]);s.push(r[Z]);s.push(r[l]);s.push(r[C]);break;case 46:b=f>>7&31;Z=f>>12&31;l=f>>17&31;r[b]=s.pop();m.push(r[b]);r[Z]=s.pop();m.push(r[Z]);r[l]=s.pop();m.push(r[l]);break;case 78:b=f>>7&31;r[b]=s.pop();m.push(r[b]);break;case 30:b=f>>7&31;Z=f>>12&31;if(r[b]){s.push(r[Z])};break;case 94:b=f>>7&31;Z=f>>12&31;l=f>>17&31;s.push(r[b]);s.push(r[Z]);s.push(r[l]);break;case 62:b=f>>7&31;Z=f>>12&31;r[b]=r[Z];break;case 126:b=f>>7&31;s.push(r[b]);break;case 110:b=f>>7&31;Z=f>>12&31;r[b]=s.pop();m.push(r[b]);r[Z]=s.pop();m.push(r[Z]);break;case 65:b=f>>7&31;Z=f>>12&31;l=f>>17&31;r[b]=r[Z]>=r[l];break;case 1:b=f>>7&31;Z=f>>12&31;l=f>>17&31;r[b]=r[Z]<=r[l];break;case 33:b=f>>7&31;Z=f>>12&31;l=f>>17&31;r[b]=r[Z]<r[l];break;case 97:b=f>>7&31;Z=f>>12&31;l=f>>17&31;r[b]=r[Z]>r[l];break;case 17:b=f>>7&31;Z=f>>12&31;l=f>>17&31;r[b]=r[Z]&&r[l];break;case 81:b=f>>7&31;Z=f>>12&31;l=f>>17&31;r[b]=r[Z]||r[l];break;case 113:b=f>>7&31;Z=f>>12&31;r[b]=!r[Z];break;case 9:b=f>>7&31;Z=f>>12&31;l=f>>17&31;r[b]=r[Z]!==r[l];break;case 49:b=f>>7&31;Z=f>>12&31;l=f>>17&31;r[b]=r[Z]>>r[l];break;case 41:b=f>>7&31;Z=f>>12&31;l=f>>17&31;r[b]=r[Z]!=r[l];break;case 73:O=1;W=jsvm_this_insns[I+1];b=f>>7&31;Z=f>>12&4095;Z|=(W>>0&15)<<12;Z=Z<<16>>16;if(s.length<=Z){break}r[b]=s[s.length-1-Z];break;case 105:O=1;W=jsvm_this_insns[I+1];b=f>>7&31;Z=f>>12&31;l=f>>17&31;C=f>>22&3;C|=(W>>0&7)<<2;r[b]=s.pop();m.push(r[b]);r[Z]=s.pop();m.push(r[Z]);r[l]=s.pop();m.push(r[l]);r[C]=s.pop();m.push(r[C]);break;case 89:b=f>>7&31;Z=f>>12&31;l=f>>17&31;r[b]=r[Z]in r[l];break;case 57:b=f>>7&31;r[b]={};break;case 121:O=1;W=jsvm_this_insns[I+1];b=f>>7&31;Z=f>>12&4095;Z|=(W>>0&15)<<12;l=W>>4&255;if(typeof r[b]["jsvmfunc"]=="number"){for(i=1;i<=l;i++){p.push(loaddata(Z+i))}d=true;s.push(loaddata(Z));g=true;s.push(I+1+O);I=r[b]["jsvmfunc"]-1;v.push(-1);c=0;_=0}else{V=[];T=loaddata(Z);for(i=0;i<l;i++){V.push(loaddata(Z+l-i))}if(typeof r[b]=="function"){s.push(r[b].apply(T,V))}}break;case 25:b=f>>7&31;r[b]=[];break;case 69:b=f>>7&255;if(d){for(i=0;i<b;i++){s.push(p.pop())}}p=[];d=false;break;case 37:O=1;W=jsvm_this_insns[I+1];b=f>>7&65535;Z=f>>23&1;Z|=(W>>0&32767)<<1;for(i=1;i<=Z;i++){storedata(b+Z-i,s.pop())}break;case 101:b=f>>7&31;Z=f>>12&31;l=f>>17&31;r[b]=r[Z]==r[l];break;case 5:O=1;W=jsvm_this_insns[I+1];b=f>>7&65535;Z=f>>23&1;Z|=(W>>0&32767)<<1;for(i=0;i<Z;i++){s.push(loaddata(b+i))}break;default:b=f>>7&255;for(i=0;i<b;i++){s.push(m.pop())}break}t=I===-1?0:21;break}}}}function checkWasm(){try{{var u=0;u:while(u!==undefined){switch(u%3){case 0:(function(_a_r_g_,e){switch(e){case 0:{u=typeof WebAssembly==="object"&&typeof WebAssembly.instantiate==="function"?1:3;return}case 1:{u=undefined;break}}})(arguments,u/3|0);break;case 1:{var e=new WebAssembly.Module(Uint8Array.of(0,97,115,109,1,0,0,0));u=e instanceof WebAssembly.Module?2:3;break}case 2:{return new WebAssembly.Instance(e)instanceof WebAssembly.Instance}}}}}catch(e){}return false}function isDesktop(){var u=navigator.userAgent||navigator.vendor||window.opera;var isDesktop=!(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series([46])0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(u)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br([ev])w|bumb|bw-([nu])|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do([cp])o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly([-_])|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-([mpt])|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c([- _agpst])|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac([ \-/])|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja([tv])a|jbro|jemu|jigs|kddi|keji|kgt([ /])|klon|kpt |kwc-|kyo([ck])|le(no|xi)|lg( g|\/([klu])|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t([- ov])|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30([02])|n50([025])|n7(0([01])|10)|ne(([cm])-|on|tf|wf|wg|wt)|nok([6i])|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan([adt])|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c([-01])|47|mc|nd|ri)|sgh-|shar|sie([-m])|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel([im])|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c([- ])|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(u.substr(0,4)));return isDesktop}var jsvm_this_tmpValue;var jsvm_this_insns=[];var jsvm_this_sdata=[];var jsvm_this_entrances=[];var jsvm_this_privs=[];jsvm_this_initialization("unTuZ\tuInIYmrnuf'uONetIaeA\tiuT+t\tumuduDuTud+vTVIuVBu'u\tnouI\t'Hn+ufuuedu\tfre_v'\t'ahuu9VAguCt'\t0HuHiVnuogH\tmuseCuuenn'\tutuuuwerC9se'u'I'Sumunnz\t'uegt0uVuoFd|uuhonHuiguduu'ndefin\tduund\t_unuR\t''zv\t8ruuduHN+mCVvau Vn'Yhug'duNsvmuunmu'Hjsuuportul_MTGnY+uef7ued\tRtVut\t9ueduuuued'h'HEuu\tlu\ttMSuuuuH'u0ui'cAgA'WINu'um\tzgE't0'tnd9fuoud'e+HuTu+Zu\tHuduf\t'uuduf'nuyu\t'Fetval\t\t'niuK\tjundff0uguh\t'ru+umu'\t0nuut\t'uIdesuneu'uIu0t1auuuOuuuH\t'TnmwdiEudua'rfcv0\t0ui\tHue\t''nduunnedWuuIuuv_I'_jnuOtQ'uuH59u'ebNu'uutua0ugiCoN+uuHTueuvnudV\t'ePuvEuurVuout\t9unG'uCn_u'\tNV_+vpu'0unuuWHuuRdun\tuAd'\t'4+zVuuW+i0out''EuIPfiahuwuur+uGuu/nund29iueauumoVijTuud9fiuepukuuet_wu0\tHuuzuhVuuvDEw'uumwXe+La\tWduuIw'u+ONZuUuuRrEXAu+'\t'mZCZNG0gVHHuENVuo'TnCINVnMOw'gH0EfVHuuAMEu9NuIu0H_fZuH'umu\tMeC0u;'IuuTzHgGHnjuCuuERWOWVeVH_MEDuUO'u'6awERhuuhHGC'uLuDvUMu\tVC'Mne+TuuOMCnR\tT9_VIuHu\tnCAjf_A0FIAMEuRu+E__uDduMahu77uuu0SIO0THbGu'V'BuuVu6SIuuEZuP'+T+VOn'ZDuiTg\t'uIuLAIuRugI0OSOCnu\tuiuucNGTAlEuuu0u'DuVTHzvfmu_Wu0ge'VYV0OEIuuE_PV'm''NunTIouPTuiwSue'DunfuETYLEHuj'gOCEuduacERTAt'uugTunEVudE'oqOHIEInIuauTYuZTINIT' OOv9PITgOu_TO\tOCVuumhu9WuOAjFAuhONu\tuuEeuSOu'\tIuPEVFueOunTYgg_PB'u'_PuuAmuONVTVYEhhuuVCTu9D'umuu0uION_+uudVgWVuGuNuuu'9u0rARION_TguECfbCum0ZPiVuEuMIuNu\t'uPL\tuE0uIuuHMYuCiNunNt_TuWEIL0Iuu\tutOuuVNZVTuPekPu'\tu'xeYtG6uOuT_ENCee'NGu\tKLuuwCONuEuTuTYPECNudwnmNuegun'uVnjIi_d\tgeuviVunh5nteH'un6Hi\tf2hZ12u0\tuC0\thV0Hu4.u.0u\t'uf52uz'.'T9WuNLs'\th0V\t'0wu'P5uuHYebuu'ics'uuu\t0rN\tdW\t'cum+'olul\tz\tu_WuTmu\tmizuu'iuuEuifyuu'uVonuu'nNu\tHuohI0Wh'+iuP9'\t'uuP'\t'2uuuj'up'li'atuo0/jguekZyupiudcnuTu\t/uuotueufuumgTiuCQZ0uxtusuCVuH cuauVeu=UTm+Vuw'jsP+uenu0PuuIuau0ugdeTTuedanurCgvaHuuund\tguued0un\t.fRnhH\tu'l_utrguumuuueNdVjuLf\tTtu8s'\t'9vvnmunc'uubu'hVoCuuu_PguuuCAjERA6VRAuujRmTuuHb0hgHAuuolIneH\tuuVeftnI6\tuCAjENu_Ip0uuumnuNhWV'u+nuiiGsuu9m\tHTg.rhuhbWu'Eb0LHwerrUse'0'tuStH9CgTT'tmub'+ua9fariE\tudSrpmkx\tuuopRatio'\tw+OiNitR0tiuU\t'sVVeoWi+tb0ZIvidfmouZfOtu\tbCmaguZguuDuiavHNeTD_V'PEuA0vu5\t0u52'HWVusuAE9P6'uuhTnuVuuTOduoZiu+zuWVurgeo'HEuGtu\t''u9un'\t+Wuught'H'ueadonuemu'u'2'0uHduaRuta9edZ'geI0uTReDa'u'uguvgMeubInfN0uuduIiu'uH9eu\t9u/vmumt'ea\tuui+MTuurnHIT'+auukCetyTH'uvuad\tCusVrAIT'tu\tmguuuOunIONTENmuEmCODuuGua0ITeuinwTuVwagudu0ouu060ed+TDeuiSeu'g\tget'sgQueeIa'uu+ahigatorihfueer8guEt+Ta0oLuuHrCiu9+\t'uoDerghge\t'ueiN'guncu\tVw0erRu99uoONu\tVIeUOZ\t'uuSafaeV'euc\tnc0WTbRT\tYuuu0ueTuuEeaudu\t'b'wuuuaIuNuTmuuuVunvmWu0'u''etNVgaIujISu'uPwtOueuhuouT9ou'+uEeruOyOpeoationuyuu'uTcHnReneuNpuuuogeurI+uBjtuntundNdiu01\t'ueWi\tgCovduuvTZpeCv'Ip_Me0wisn'\t'fauuNeM9TeI\tuur0mvugte'\t'cu\tur9JeiuIt.u'4nhuIaWi_uu'WuTuIuu+Ixubgm'Cevm ulu'\tiuV'f\tTed\twUdoTiuvu\tTu\tefiu_uunndIgune0\tun0uekt\t\t1uVdeuinMuuundeuRIgu\tjnkN8vnpV0unuufiueO\t0CSe6u_eG\tun0Hfinud\tfnCeuinHu\tu\tde+0u3dzhnduVi'euuuuue\tiCHuAKVue'IY6BEuVueAi0udePHu0fiuejZdg'g+uAgIVN_fEuuujRu WyueIRUjIu0uTaWE_VEIENu'\tuIpEuH0uyTuTyuE_eSud'a6rhuuINuT0VeaHInueuinTueuudeuiueu'uLOvuCTN+ueTTTYCEj\thnuvNImHg\tw+dTfu0e7\tugHeHFued8'isDTCVtlA'\tuDuViH'T0\tu_PZ'CBDEVICufHVEuuuB9uuFNItNh_zhZuuUuEX_EDMCu'uuCCeHuVeduiE'eeieui\tu'uwui8e|uuO0IeuAu+ONhTuuuuuR+u\tunI8RAHNOH_ugNuum\tuTwV'NfEuu.CON9nY'huV'CuOu'uu\tNuueI2nedus7hetNued0undufNnebuuudefuuHduunm4uiuud\te+d_fCnuluupdufiutuEu\tMefiuu'\tuumeuunud\tuVdzHuVe\toujCHuENuuTuPHuuTVVwR\tC_tE'tIONuuzIudagune_TgBEVVuRSuON_TIuHVNuO'OPu\tuoCuu\t'u0OLAuHuAG\ttmuuu'm'Nu\t',H\tuudLwmWeduTuZHfijeueundwuenHdugGAMd9V_EIUTHuM'DuUM'CHZHuruRTIguuuuu7Huu'VefJuuuuumamtwOmVuuuvuu+ouu0uuV0Hvjuuuug_vu0uguWuuVjxVWIuuuuuuutuu0mCNHuuhuIuunuu8uWuutuVuuH'uCOuumguuV0NWVHu0uuHu\tuVVeU0uuuwuu0uuutuuuWuuV0uzuIauvuufutuTVHHumuuuuIuuguuTV0uFmRuuuUuuuuumTh/jV0SIuuug8WIdNnuuVmug9euhuhuY_Hu'NZuHHeu+u9u\tnuuHWwujV0Z0jbEmtTNm80muVm\t+HulouuaHlRIguZuuHuuuuFueujVuA\tr2e0VuuIiOtuCuutLuImu0Huu'wIuugi0uT9jdH'uumHuu_u2b+Wu'V0oaduT7u0uuutuUuueuNuuuuuVuu'uuVu_uTuunugmVu9_uuug9uosOuIuuiuEuuuVua+uZH'uVPIuumHIWvZu+_\ttuWuu'jhuub9Ee0HvVuIuIcZuuRzuJViVeHuHuu'muuIuuVZWhuuuuVIuujuuh+uu9uTuuj0uWoIuz'uPduuuuvIuHu_\tue0u0uEISuLSuug_\t+Euuu0uu+iduVZVtz\tuHwurTuuzCu\tuu'zuiuIuuuuuau0u0VmuTHeuggIuWu0uuHTuuuTuu0VuZTT'euuuuV0uTrIuguuuRuNuuVmuVH0uSuIuugHu0TZIu0uuuuuuwuTxuuHVutuJauIWuNmuuuV0fVu+UVeuVuH\tauPjuehuuHHuauCuuouuCuuu\tueHkdMuuuuuVu'uuOeumuWumueu\tjHuuCZeuuVTa8uuXu0ueWuCuV0UWusuuiuuuutuuvuu+Huuouwuugju0E+Hg+uu+uuHmoeuVuWHue8uuuuugjVuWuuuuu9+uruTu9TuGVqv\tNuuHVHuIuCZuVugvN6uZ+bSHNtuuuCuu9Euu'Iuwhu\tuTWumTHHuuuuTVCTHmCuguhguM6eZNuQ+NIduyuuHmuum0'gCuu+agW0uTuHuNIudVCueuauwuWTvh8uQmuFanIuuuuHHmusSVuNWhIIZT1uuCkHhVuuuTCu9uuuuuuNHuIuZI'/zIFLuuuHhVumn8IZwhuuuV_Ni9EHVuuu\tVCgTuTugpw\tguVHuu'ue'IHuTPHamu9uIugVhnIdTuuuZHuhNuutEENMmuTjuZuvu6ug+esa''0'Z9WVmumuuIgwazIVuuuuZ9uHudjuVCV0LuuZ_90vN6eHubx+uwI40uuhMuumgrur1+IZTWZuzkuhu'RuuCTguk'u0ugiNV9IHbqTuPuuuZ'umuuajNgwjzw0uWuuuECuOuiNnVuVm0nVNeg9'Run+b+maIuWuuuhuuuuuPgW+zZuVmuuEHdhuuguVCuhmCfuuWhgN6uGEmuHNTuu+uuumyuI\tTguhz0ZNWuu'uueou+uVCn9mEuulugAg6uu+ud'6\tuuWuHum/9u0Vunhze9TWIwwuuVjvuuNYHgmHuiuu0uN\tuZ+bohHIuueuueTHuuVIgzuzuuTWIWwBHhuuuuICujuCu+Zugwu6uZ+uuhNIuuT'Hhusufu0uIIzuu\tuiuuHHhuu1uV'pmTsWWR\tgvNeuZe9VeTIuu'ujhuuuuuuug'zIZugui7uHhNeumVCuumNnub0MiHHl0+buW9uHu+0u\tuuuuVoju'zITTWIumkHhuuugV'uW'uuuwuuPuWuZuvQWNI'uuouhhu9uTuumhzaZTfud0uHhNVt_VChgmi0uu8Tuuueu+bxuNuLuuuHhm\tuuVuguhVuuTWujPteuuu0uPC+omTuuuuhuN6uHWg+aujuu'uHhjuuu'I0uNYIZTWuuKuHuNuOEZuuTmVuumuucNIuu+u3QITg_ueHumuuVuIaHhzgiuu0uuuaujHghNIuuVCuduu'uuGNsN6uZNuQuNImEuu9nmuuuuugwZVqqHuuuu_uujuHu'uuuTuujmuhuOAguN0nZZVFaeIumuiHZmu0uVuuVhuguuuuuuIuZ+u+hNu_u'uvpOCPbVNuvNeuZ+b/quIuwuVmWmrjuuoatuzmuNuunuuuTjVjhNgxuuV9RuuuuuuHvNuTziuUTbNuuuuuhmuu8Vugwh0uuNTuuVuNUuuHeNuuWVugrh'uue'gvuumuub'HuIuVutuhm_uuVIEwRzg_'euuduuujuehtmuuVuuwu0u0uuVjNVmZEmaiNVuuZVHhmlGMVue0BzgHuuuNVTuTjLHhN/uuumu7mVuuuuuIJ6uZHuquNIuuuVHhIVu9rIuHhm.uu'u\tVCuTjudhuuuuIuOKmCuuuuT'eeuW+u00NuuVSuH'\tu\tNVuuwhzeHIHuuHCuufeahNduRPWuimu'gH9gnNuDZ+unuNuueu0HNmuCuheuwVuWu6e'uHuuu0HNFumhu8fu+uCTunugvu6g'YbUuuuuuuuHuTVunIhuwVug+N0++tu0TjmHx'uufI'uVmuuutuuV96uIubuV\tH0uuuHhtuVIuHTwuuuuuuIuHCrzqHT'NuuugCujZCuuu+9uNmaZubFZhIuuug'juuuuVu\tw+YWHmuuuuDVjHHH9uuhRrTauuuuuuugvNhuZ+buINuuuuu'VmuvugugwhuguNEuT+.uuWHHhNuNumugVuCiOuCgC'6uh+bUhNIuuuuu+0'u0Vua0hzgHNnuVmIdTTHuunuuuHCuWHCuuIhgv060Zoggk\tIHHuushiuuuV8VTuu'HNduuuTHnjH7huuuuVuuC0uuNR0gnu6uuuuOhNeduY+eumurgVIgwhCuHYuuuuuuTuHHlduuu'NueVCuu0uNTC6n\tebHViIuuuupCHueoVIIwhzgHuu_u9WuHjHuuuuuufhuiI0euwTVHu0uutDuuu0uuiuuH90uHZ9uu9uu900hu9Luu\tquN+Hu0TWuu+huu_\tumPuouuuujnuuYuWudVe/VuIn9Z'uuuuuuVu9aHHuuVIhuVHFuKZuCuuuvtVu+gCuu_Wuunhu7uIuW0uuuuuAuum'0HIuuWIuRgHuuVuuu\tuuZeueIuuuuT9uNuHIu'IuuuudIupuuuuuIuuu_uuuuuH5uuTuhZuuuutu\tegY'0dLuuTuujVISm\tuuuuuuuuuuuuuTu8CW9AeHN0I\tuLduuhguu9TuI0'gwGvuvdAHuZVENTuuo0zuuuui9Tuu\tuHuum90XmNhVuTubHIuh+uuuu9TIuuuiWZuV0uuMoueuWuuubHutiuu7Cu0n'iwVVuV7nuu000uvmvHZuYhh'VI+iuVeNmu90uuue'T9uuH0uuuiu\tHuNmuauwuh0V68uuuKHcuf0umuuauu8uuI0TuVmuZ\tm_VhMuuu'ouV00nH099u06uIugu0uZujuuIu+uuuuuX7G_u9iueuuVTN\tudHE+HuHuuw7VzuuunKuuPn0m9mKVTwHuuEuH0juuHTuTT9uutKW0uWGuiuuHmNuI_uuNuTruHZdIkuCegIIhu90uuuVuTNuuuNWuHuHlHuHuuuVuuuTuuu0e'C0uTHmuwvugTjuuVV0ZTOuFPhTuug0uuu0VuTuauuuuueHuHuKu1zuuuuTuuAugauuuu900uuTI\tNuVuuui0mHu9ZTuhhPnuGTuH+0u0uuuI9Thuu9ogWuCuHCuHguHHZWuuvvuuhWuuAuu9H_uupIuuTIu\tjuuHuuuT\t+EehCuuw0u9mue\tNAuuHuuHeHuHZ+uTeuuuuVuu9uuumI6TuuuuuuuHuHIHZeVCIgesuGuuW0uij0NVN7u0eWuHuuuIuuguuuuWmWEu90u9u0uTNuuuTuuHZHOEuCuNuuuu+TuuR'u9u+VuVu0_mCuHuwuHZ'uTuuWuNHuZ9Wh9iuHuuMuuRu0iuHueZ0HZgIuuNuuu9Wu0uuVTuou9emfujhuVHuVTuuuuuH9V9uN9uTVTEjVuo9uojNuHZPCuuuTD+Iuu90uIunuZN9uu90aE\tHT+imVTuu/uuCu0'Iu0u0uumuuuTuNZNHuujuhTuu0R08uu9CmuZ0mTumuuuWuHIHuI00Muuuu'uuuu90uHTeWTeeftTgwHTHjHuuTu6uuujuuu9\tifu0un_PuuTCuHuHNuZHuHu0uuj'uuuHw'uKWTNTuumuHHjt+iWuVTuuuumueu9uueuuIu'n+uZWuWTHIHZe0TuPuuuWHju0puu.tTjuuIIeuw0Vugjuh'uuuu+Iu+elK99\tVuuuuufuuuOHuHd0Vuuuuu+Cu+u0C9RuETIuu9gwmpuHuIZCuzuuVuu9guEuu9u+uauu'uwWwmuH0uu0owuu2NV''uuuW9uHVuuuNuTIuumHuuZzuuuuuumduu90u9m0dEHju0wuHhguuHuumT7uuu9ubu\tuumuuVunuIu7uuuuHu'ueVTuuuuWuuuV0uu09uguuv9ZuIu+uuuuuuHhLuu.uZuN'uum0uu+TuuVum\tZmjmuuuuVHuu+muuVVmuu0uuWuuaVuguhuevuuuuVu05uuuuuluIT6n\tuuluuuuuueqebIuuVu_uVuuu9+uuTN\thu9j9NvOumLu2uuuImdvuTughhuO9uuuTV8u0Zu\t\tVuuInuZuuuuueumuu09uBuuuWu_+0Huu+uuu_uuu+0ulVuUuHuuuuuunHVHuZWuhVIZ+uVuNuu'dethuVmHuHuuuuou0HHVumTH8Zuuu\tuuujmuMu0njuSuZn'uzhuv0vJH2hiunuurTm0uu900ngjuTnuuuHuvbhmu7N0fuuu\thuZHwuuPuZ9uujguuuHmuVTuVZ0I0MTuuuu9+T+uuuu_TW'+uHuuouuWu9eur009umuuuu_wTV0uuHnu\tPIuI9auuu0++.uuuuuuuu00u/nuI96s+TZ9aheuWHI0VNr'uH0uW+uuI9quuT\tWuuuuu9079duIOsu+ut_uu+0uuETwu+0Tumuu+ZZuuuuuujuut+gumVueujH'n1uWVu9TuiWWI++Hn+uuruuurueuuV+uu+h09uuuVuuuweWuuuuIul\tgsuRgeVuuuutuuum0lZuCZuuuIT unbuuVuCuuHAuHVIu0umIVh0ZuVuHRhuuuuufIewHuuuHUu5uuNuZu'N'wuW+wvHumnuuuuVgu0M+uu0VTNmzuZu'Yu+Au\tTTuuduuVuuu+hVGVmuuwfuIh'uuu0unCuuuSJN\tV8unHh'uu_muuj+xT00ugtuPh0\tT'1QuhwoGuu'JTmuu\tCyuVu8nu+aTVVru0huuuuuu+auuuzVmuuVTVmuu9uu9uHHuTLuu0VuHumugT0uuu0uu'0uhZuuneuuujm9W8muuuTuZj0IuuLouuuHuqgu'uuuTuIuum0u9u0I9unuuuIuumm7\tTuuuu'utrgdaZuIuHuuuimuuemuHVWuunuuubTFCuruuh0uhuuVVVuutYuuhuWuuWuuu'NHHuuuuuuuuVuumu0uusHVoH0IudEuutzuuC0ujrSu+uuud+uTuuKuujHuw'Wuu0quufuhuu9uujtgZuuwuuoMnIOu+ugI74muguEgjuu6PguTuumhhZuuu5NuueuIIeWuuuHuTuDHJuu\tmuCuuIuuuumuuVT0uHu_uuhuITwu9u0H+H0uuuu+uu0euumuuu\tujzWHuuouHNZue'u\tcH5g'iuuuuWuwuutuouu7dVfmuuWeTMuuuruuTfuV'u+uuuNu9uguRuuHuHHNTuV'Vmuu9uudW\tvwuuuuIuuJuuueVWTuHuuu\tuuNVwuuVu0uuIu9ueu9TuugTume9i0iHuuuV0nTumIwuuuuukuuutuuu\tmujauwZWPoedgjmuu\tuuuuuwuHtuufOWuweuuuuugeHuVu\tA\tu'uuueie74IuuumgGeu'uUfuZTmjhZuuWuuuufmuHuu9uuHu'ujmuuu'ZwGithe\tVoVHuhuuuuuu++uuuumuuNZ89guujbuuuumuuZfuuTAuuu0uMPtNuKuhuCC.ru0iu0uuu9009u0uubLuuuguu+mDu00ii\tZumVZigC+jN\tuuujCuu0muuhVuHjouRoZuuuwuuhuuO+WuLVuuZHuuuuIuHTVLuP0ZuuVuuuCuuuuuuu0_NV0uuH/uuu0uIueu9uT\tgH0uuuouuuaZujuuu2muTuWuuuh\twuWZuuV+eVBuuuuTuZm\tbmufuupuum0iuuhuug0uueEuW+0uuHV0dHIHuu0wITouneuuhVm9uT0urjCYuj9iummuueuuChgItGuuuuugC+uHEuIhutmueduuuufuu8uCu0muuPZu9u0u0Nuuum\tuHuHAKuu'uVumuIgNuvWVuEguu04uI'gg90u'9uuuX0H0K\tu\tuuujTVTuuu:euxuTwiWuuu4kuumuujuubh'uouuuuuuuwGHuuIuuggMvu0juumu9ueu00uqumTuEuuIuZ+ZewNIutu0_uhPuu+CuuVuoNtmI69eu9u0Iuuuuuug0uVmuuuwuuu'uuVZH03un0uCuu+umu0uue0uu9NuVe6uhu\tO0Aqm8Wzuuau0EA0muhfue+uIuuuGNj+muuV+IIj0ZT0TuuuuYeuuTuwgzgi80uNbuuuuuITzujuuuWj9uoguuuuZ/h0ZuuhPgMNuuut'hTV8uMuu0uuuun0Zu\tT03Myuuu_eZ'jhuuNwuIuuuuTuuuWCjgh0UoReuTiwugh'uuuHu9+0uuumu090u9ujIuuLT0uuuZ0wuuH0eeI0uuuZZuh9uuuCVagujuVmuEfuu9uqIVuLVnu0u_+mIu+duu'0hAFV+6ZVuuuu\tVjm0gIduIN0uu_0I7STWuuVrNhPPuuTuT0Wuu9uH9u'e00LuuujuN1nunT0uu++uuHutZ9uTuuuuuOuzx\tmu'VTsuguuuCRuNu'Im0_TuuVjNV8uuiuugumu\tmuuuuajN+m+uuuuu+0HuuZHhVujuuuuuumunLHu+wTuvutaf_W9u0uuuW\tuuIWu0uoVtHEu'uWuau\tuuAuuj8Tu+wVWuzu\tauuuu+0uH0uVw+HumuuHuNB6uuouujPnuITuuu.uHeWuekmoua0uHu0u_VICudxuIuTgu6uuuuIHgVtuuuIuuu4uuT0uu'muVuGrEuuuusuHauuuwVuuuu+u+uTHRuvuuTtuHHHug0uuGVNuu96uVu0TaNuuuuWuhRCu'tug\t'aVuuIuuJuuuHutIuiuU70uT+usuudah'buuu+PuvuuuVuAuAauthuHaNaZuoEuuuHHHuIH0Huuu9zuuhEua'uumuWuIeHgu'uuhuum_uuuIHISIiHuun0uuuuouV0u9m0HguuuauSu0jHgHuMuNj6HweWuuHu0ITWuuThup\tHu+90uuuH\tIuu+Hwuuij'HuZCugMuuTu8VtW0uua0eZ+GuZh1unuETHT'HwHUuoHjwTu0LvV\tu'jme7+GumuZuMuCHCujIu99Vgq+umguu9m0uVuuHah0uuuIu0VmNugWuuEu0u9H/uN0u9/0uW\tmuH+WuLWmbwWZ'uAuIuueumXTugmAuuIVgvtTCu7Cuuuhuu0QuuudHuHtgvNhH\tjNuuUIdZuHueuWuTuHuauuuumuuuVhZFRNnuhuugugIiVmu0Z0uH90utV0uuuNDo+hu6umuuEfZuCQidjZNuNivuC\tuTltuuqCfuBu8ihuagWtuu0\tuw0HuuuuuuldZvuEHujCuuVeuujHuA6uuuuWCu0uuuduuuO0uuIZuETzu9uhgdH0uuguHunNn'guuuVg0HumZIITu|VHuuu09uj_SuH_uu_gu9EfguuuSDVu\tuj+ueThmuu\t0ucvheru'CVji0j0gIN0uuHnuwzhouuVguuuufuuuheWuu'qw9uWe7\tVuTTmeuuWuuTiHqZuuuNucguIHwTWZuu\tuu+9NzeWmuujuuHHWhen1VuEuWT0ZaJNuu9ouuRm'uuuuuV0u8m'uTu0mITzk9u0uuHnu+\tuwKuZuuuuuu\tnuMeHuu\ti9unVM8uuuIIuuu+u0auiuuuIueh8hahuIOuuoTuuuZgsnug0uu+FIwu'gAVgu\t+0uHeWuuVou\tem06gWuh0uuIuHVreHuuuuuuz0guvVSuHuuJ+uuuNmThjIgueWuuuOweduujuHuuH0u_NTVuuTuRju0eNLuuuIIuju'0Nuuuua0nCuuuugHeNtuudIuueWneuqgVNuHuPW0IeW09uHgENruWVIuueWuuuf'NNHuuVtuwCHuuhuuuVuIuuuuweWu'lg9ugN0rNCVuuMI\temuuu7nqZuue'uuu+uIweWuuHkueumI+m9uCZoMu+mmNuWVuu0g0euuuuWuCHu9uuIVu+0uV\tWiuuuu9u'V0teuuT0eum+uIguVeVZue+mIw+WtuTHu'ueHZj0uuuugue'bu\t0ZeuuntuuTiu0uQNuVuuusau'gegut_uITYp0eeuuuuuCu'eg'muhuwe0uuVuuueAmuuquuRWuuubuezVuWuVuuumIqZuVuuuhu+mIw'0uVT'uuu'IuuZ\t+uouuumINVuHisHHuT0ua'uV'0uuD+Guuu0\tuVIueC0uTgmuIcuNEu0Z'dVuuT0uuhCuuWeuu00qaiuuuTh'NseElhuVuuuZug8uTThVuIu+uuuuuHIu'uuHuhuuu0HuLg8uuiuE9uTuuHuuRuWohuuuug0muV0uuuuuwHWuuuuuTTheuuGugUmT'eW0uVHhu+'IweBVu'ouuguIweuuuVeTuuuJHm'uuu6uu+Euuumu4jm+wc0HV_wTu9euuCuuuj0ueNuu3uWuu9e+eVhWuuUuujuue'auuu7uwjNm\tumgTNuueurNuHuuuundeNuumVWeIGVNo+xW'NuuuuHVHuWuuYugeNuuuVuub6uTjaVX9IWgu+Vge+Muu\tueNTmHqZuou'T'TVumNuVneukuu+uCwgV\tuuuuZH'uueWumusHmHT2uIuNu90uuurHez8uHueujuHuZh9B\tVutTV0uuK0uTu0u9uLuHVKuIuuuuTuuuuGejVZ ufCuuu0uu+0uuIVOVuTv9+0uA8Vu'uKTuuuNuCuusu0iuuZVWuuuZYuIuH'uueuIuugIuGchw9Tu_uugiuu0uduuueu9uw08ugmeuguuGP4PwuWuHhNmdPWTuuugeuauuuTWuTTuuZu90uIueVuuhumuZ+Nu6uZu\tHugvuuuZIz_TVuuuI+jwquuChuuuuIITf8uuu0u9Vm0VuIIunoIwvL\tuuVuIu6umTu8d+TuZVeHhyuuuueWuZNOuuubuVTuaC0HMuTuIHTH4VuEuZuhTVi\tuV0m'uVTuuLuu0ufuumuuh0NsuuuVuVTu'xluuoguIhb0+e\tuVTTuiu9d1uuguuguhugmuuKTu0uHgnmZZL9wsZuuu'uz+muwT0+udzauIZuhZuuuuCuujmmuuugpuuuuN0h9HuuuTnudu'uufVuT9jHwnHV_uueITuuuEuHWuuuHuuju+muu'0rujmuuHMuI9Iu0THNmu0n9H'su10uV+m\tDjmuzmun0euuuzug0+uf+IZvuuuueOuIuu0uweu\thuuuwBgZ0TVg+ajguuTuGemgCuu0uu0mu1ufYeIeuuuuuT0HsVuuuuCuuun\tTjeu+V0Huuhuuu0rIuue0uw0fHhuuuuT0umwuuamujTuCNWuh0HgVNTuVuuu0VuueguuuuuTwuWuVVmduuWuljnuo+uuTuuuuWmgug2uu'Wuu+IauuWuuUHutazuuemuu9uuW\tWuweWu\tHuuuuuuu0Wjs\tuuuuuuH'wuugIuIx9u9um'9HdeHTAgu5uC8hHHuuAVI+VIjTEuuufuu+m9uguu0dmuuu'uVNq0'ueuuuuQujZuuNuunoW00sWoujgTuuHuHzIbueWHuu-ujBCuitViuWu\tuVu\tuuZjuWuuuhuuu+jIwuuB'huRuNWVuiehZHCZuhHYuhZeehiHsu'euuueuuuZuuudnNuzum0HIuiAVu0ZHu0uue0gVuuu+uHuue0uuugwwTEugnuuu+muujmuujmuuHWuuuqgeuumuurBXijgeNuuCuNew0WT9zuneuTuuuIuweeeuu\tMwTumeuV0ttMuuuhuuuugnnguthuHuhuIwee'gEHuuuuu+V0b8TuauT000WeugurDxhZuuuuugjunuuTli+'uNu'ue9Tu9uhIurKp7uqju9uuWH0Au+0duV0+YhuuuYCdI+0nfumYV90u960euuumuuNAu+juudmuH'huuVuHauuMddI0uumIu\tOu6VuuunmuwHuuuuuu8UNgWuuuT08geHmsuiiuI96uug0uINuVuuWuuu8uIH9uuDsuMemuuT0e8ueuuuVZu'0uTNmuI9Cuuu0g88uutuk+'NOuVHeuuVxuI96EuT0Cu'mud0Zuob0uo3I0uuHuu0VuiT0uzT0uuE9|uV\tW9Tun7KdmNjv9WjHKHetSx/UNta1cIN+uFLvm5u8luaTVIuiu\tCH2numueVhe|uuZjuuuGVuVuuui+u0+ubuTBuuuDunuFuuugu\tuiummuuuHZudVu+uumuuyGuEVEwnuuuuuthTN0umgq");"__p_r_e_n_e_t_a_g__";var e;var FACING_MODE_ENV_EXACT,FACING_MODE_USER_EXACT,FACING_MODE_ENV,FACING_MODE_USER,CAMERA_WIDTH_HIGH,CAMERA_HEIGHT_HIGH,CAMERA_WIDTH_MEDIUM,CAMERA_HEIGHT_MEDIUM,CAMERA_FRAME_RATE_HIGH,CAMERA_FRAME_RATE_MEDIUM,BIOVERSION_HIGH,BIOVERSION_LOW,BIOPRODUCT,BIOLANGUAGE_JSON,BIOLANGUAGE_PB,DEVICETYPE_WEB,DEVICETYPE_PC,DEVICETYPE_IOS,DEVICETYPE_ANDROID,OPERTATION_TYPE_PRE,OPERATION_TYPE_INIT,OPERATION_TYPE_VERIFY,OPERATION_TYPE_JSON,OPERATION_TYPE_PB,OPERATION_TYPE_VERSION,OPERATION_TYPE_VERSION2,OPERATION_TYPE_SEC,RPC_VERSION,RPC_VERSION2,CONTENT_TYPE_JSON,CONTENT_TYPE_PB,LOG_CONTENT_ENCODING,LOG_CONTENT_TYPE;jsvm_this_run(function(){return eval(arguments[0])},0);var isIOS,isUC,isSafari,checkWebRTC,getImageData,video,canvas,uiType,bioMetaInfo,deviceType,getMetaInfo,initOpertionType,verifyOperationType,contentType,getLogContentEncoding,getLogContentType,rpcVersion,facingMode,frameRate,cameraHeight,cameraWidth,userAgent,topRatio,heightRatio,videoWidth,videoHeight,imageRgbaData;var jsvmportal_1_1=function(){var inout=arguments,retval;jsvm_this_run(function(){return eval(arguments[0])},1);return retval};var jsvmportal_1_2=function(){var inout=arguments,retval;jsvm_this_run(function(){return eval(arguments[0])},2);return retval};var jsvmportal_1_3=function(){var inout=arguments,retval;jsvm_this_run(function(){return eval(arguments[0])},3);return retval};var jsvmportal_1_4=function(){var inout=arguments,retval;jsvm_this_run(function(){return eval(arguments[0])},4);return retval};var jsvmportal_1_5=function(){var inout=arguments,retval;jsvm_this_run(function(){return eval(arguments[0])},5);return retval};var jsvmportal_1_6=function(){var inout=arguments,retval;jsvm_this_run(function(){return eval(arguments[0])},6);return retval};var jsvmportal_1_7=function(){var inout=arguments,retval;jsvm_this_run(function(){return eval(arguments[0])},7);return retval};var jsvmportal_1_8=function(){var inout=arguments,retval;jsvm_this_run(function(){return eval(arguments[0])},8);return retval};var jsvmportal_1_9=function(){var inout=arguments,retval;jsvm_this_run(function(){return eval(arguments[0])},9);return retval};var jsvmportal_1_10=function(){var inout=arguments,retval;jsvm_this_run(function(){return eval(arguments[0])},10);return retval};var jsvmportal_1_11=function(){var inout=arguments,retval;jsvm_this_run(function(){return eval(arguments[0])},11);return retval};var jsvmportal_1_12=function(){var inout=arguments,retval;jsvm_this_run(function(){return eval(arguments[0])},12);return retval};var jsvmportal_1_13=function(){var inout=arguments,retval;jsvm_this_run(function(){return eval(arguments[0])},13);return retval};var jsvmportal_1_14=function(){var inout=arguments,retval;jsvm_this_run(function(){return eval(arguments[0])},14);return retval};var jsvmportal_1_15=function(){var inout=arguments,retval;jsvm_this_run(function(){return eval(arguments[0])},15);return retval};var jsvmportal_1_16=function(){var inout=arguments,retval;jsvm_this_run(function(){return eval(arguments[0])},16);return retval};var jsvmportal_1_17=function(){var inout=arguments,retval;jsvm_this_run(function(){return eval(arguments[0])},17);return retval};var jsvmportal_1_18=function(){var inout=arguments,retval;jsvm_this_run(function(){return eval(arguments[0])},18);return retval};jsvm_this_run(function(){return eval(arguments[0])},19);"";"";