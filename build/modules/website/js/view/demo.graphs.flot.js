!function(e){function o(t){if(r[t])return r[t].exports;var a=r[t]={exports:{},id:t,loaded:!1};return e[t].call(a.exports,a,a.exports,o),a.loaded=!0,a.exports}var r={};return o.m=e,o.c=r,o.p="./",o(0)}({0:function(e,o,r){e.exports=r(42)},42:function(e,o){function r(){function e(){for(j.length>0&&(j=j.slice(1));j.length<w;){var e=j.length>0?j[j.length-1]:50,o=e+10*Math.random()-5;o<0&&(o=0),o>100&&(o=100),j.push(o)}for(var r=[],t=0;t<j.length;++t)r.push([t,j[t]]);return r}function o(){i.setData([e()]),i.draw(),setTimeout(o,Q)}var r="#eaeaea";if($color_grid_color="#dddddd",$color_main="#E24913",$color_second="#6595b4",$color_third="#FF9F01",$color_fourth="#7e9d3a",$color_fifth="#BD362F",$color_mono="#000000",jQuery("#flot-sales").length>0){for(var t=[[11964636e5,0],[119655e7,0],[11966364e5,0],[11967228e5,77],[11968092e5,3636],[11968956e5,3575],[1196982e6,2736],[11970684e5,1086],[11971548e5,676],[11972412e5,1205],[11973276e5,906],[1197414e6,710],[11975004e5,639],[11975868e5,540],[11976732e5,435],[11977596e5,301],[1197846e6,575],[11979324e5,481],[11980188e5,591],[11981052e5,608],[11981916e5,459],[1198278e6,234],[11983644e5,1352],[11984508e5,686],[11985372e5,279],[11986236e5,449],[119871e7,468],[11987964e5,392],[11988828e5,282],[11989692e5,208],[11990556e5,229],[1199142e6,177],[11992284e5,374],[11993148e5,436],[11994012e5,404],[11994876e5,253],[1199574e6,218],[11996604e5,476],[11997468e5,462],[11998332e5,500],[11999196e5,700],[1200006e6,750],[12000924e5,600],[12001788e5,500],[12002652e5,900],[12003516e5,930],[1200438e6,1200],[12005244e5,980],[12006108e5,950],[12006972e5,900],[12007836e5,1e3],[120087e7,1050],[12009564e5,1150],[12010428e5,1100],[12011292e5,1200],[12012156e5,1300],[1201302e6,1700],[12013884e5,1450],[12014748e5,1500],[12015612e5,546],[12016476e5,614],[1201734e6,954],[12018204e5,1700],[12019068e5,1800],[12019932e5,1900],[12020796e5,2e3],[1202166e6,2100],[12022524e5,2200],[12023388e5,2300],[12024252e5,2400],[12025116e5,2550],[1202598e6,2600],[12026844e5,2500],[12027708e5,2700],[12028572e5,2750],[12029436e5,2800],[120303e7,3245],[12031164e5,3345],[12032028e5,3e3],[12032892e5,3200],[12033756e5,3300],[1203462e6,3400],[12035484e5,3600],[12036348e5,3700],[12037212e5,3800],[12038076e5,4e3],[1203894e6,4500]],a=0;a<t.length;++a)t[a][0]+=36e5;var l={xaxis:{mode:"time",tickLength:5},series:{lines:{show:!0,lineWidth:1,fill:!0,fillColor:{colors:[{opacity:.1},{opacity:.15}]}},shadowSize:0},selection:{mode:"x"},grid:{hoverable:!0,clickable:!0,tickColor:r,borderWidth:0,borderColor:r},tooltip:!0,tooltipOpts:{content:"Your sales for <b>%x</b> was <span>$%y</span>",dateFormat:"%y-%0m-%0d",defaultTheme:!1},colors:[$color_second]},i=jQuery.plot(jQuery("#flot-sales"),[t],l)}if(jQuery("#flot-sin").length>0){for(var s=[],n=[],a=0;a<16;a+=.5)s.push([a,Math.sin(a)]),n.push([a,Math.cos(a)]);var i=jQuery.plot(jQuery("#flot-sin"),[{data:s,label:"sin(x)"},{data:n,label:"cos(x)"}],{series:{lines:{show:!0},points:{show:!0}},grid:{hoverable:!0,clickable:!0,tickColor:r,borderWidth:0,borderColor:r},tooltip:!0,tooltipOpts:{defaultTheme:!1},colors:[$color_second,$color_fourth],yaxis:{min:-1.1,max:1.1},xaxis:{min:0,max:15}});jQuery("#flot-sin").bind("plotclick",function(e,o,r){r&&(jQuery("#clickdata").text("You clicked point "+r.dataIndex+" in "+r.series.label+"."),i.highlight(r.series,r.datapoint))})}if(jQuery("#flot-bar").length>0){for(var d=[],a=0;a<=12;a+=1)d.push([a,parseInt(30*Math.random())]);for(var h=[],a=0;a<=12;a+=1)h.push([a,parseInt(30*Math.random())]);for(var c=[],a=0;a<=12;a+=1)c.push([a,parseInt(30*Math.random())]);var u=new Array;u.push({data:d,bars:{show:!0,barWidth:.2,order:1}}),u.push({data:h,bars:{show:!0,barWidth:.2,order:2}}),u.push({data:c,bars:{show:!0,barWidth:.2,order:3}}),jQuery.plot(jQuery("#flot-bar"),u,{colors:[$color_second,$color_fourth,"#666","#BBB"],grid:{show:!0,hoverable:!0,clickable:!0,tickColor:r,borderWidth:0,borderColor:r},legend:!0,tooltip:!0,tooltipOpts:{content:"<b>%x</b> = <span>%y</span>",defaultTheme:!1}})}if(jQuery("#flot-bar-horizontal").length>0){for(var p=[],a=0;a<=3;a+=1)p.push([parseInt(30*Math.random()),a]);for(var f=[],a=0;a<=3;a+=1)f.push([parseInt(30*Math.random()),a]);for(var b=[],a=0;a<=3;a+=1)b.push([parseInt(30*Math.random()),a]);var y=new Array;y.push({data:p,bars:{horizontal:!0,show:!0,barWidth:.2,order:1}}),y.push({data:f,bars:{horizontal:!0,show:!0,barWidth:.2,order:2}}),y.push({data:b,bars:{horizontal:!0,show:!0,barWidth:.2,order:3}}),jQuery.plot(jQuery("#flot-bar-horizontal"),y,{colors:[$color_second,$color_fourth,"#666","#BBB"],grid:{show:!0,hoverable:!0,clickable:!0,tickColor:r,borderWidth:0,borderColor:r},legend:!0,tooltip:!0,tooltipOpts:{content:"<b>%x</b> = <span>%y</span>",defaultTheme:!1}})}if(jQuery("#flot-pie").length>0){for(var m=[],x=Math.floor(10*Math.random())+1,a=0;a<x;a++)m[a]={label:"Series"+(a+1),data:Math.floor(100*Math.random())+1};jQuery.plot(jQuery("#flot-pie"),m,{series:{pie:{show:!0,innerRadius:.5,radius:1,label:{show:!1,radius:2/3,formatter:function(e,o){return'<div style="font-size:11px;text-align:center;padding:4px;color:white;">'+e+"<br/>"+Math.round(o.percent)+"%</div>"},threshold:.1}}},legend:{show:!0,noColumns:1,labelFormatter:null,labelBoxBorderColor:"#000",container:null,position:"ne",margin:[5,10],backgroundColor:"#efefef",backgroundOpacity:1},grid:{hoverable:!0,clickable:!0}})}if(jQuery("#flot-stats").length)var g=[[1,75],[3,87],[4,93],[5,127],[6,116],[7,137],[8,135],[9,130],[10,167],[11,169],[12,179],[13,185],[14,176],[15,180],[16,174],[17,193],[18,186],[19,177],[20,153],[21,149],[22,130],[23,100],[24,50]],v=[[1,65],[3,50],[4,73],[5,100],[6,95],[7,103],[8,111],[9,97],[10,125],[11,100],[12,95],[13,141],[14,126],[15,131],[16,146],[17,158],[18,160],[19,151],[20,125],[21,110],[22,100],[23,85],[24,37]],i=jQuery.plot(jQuery("#flot-stats"),[{data:g,label:"Your pageviews"},{data:v,label:"Site visitors"}],{series:{lines:{show:!0,lineWidth:1,fill:!0,fillColor:{colors:[{opacity:.1},{opacity:.15}]}},points:{show:!0},shadowSize:0},xaxis:{mode:"time",tickLength:10},yaxes:[{min:20,tickLength:5}],grid:{hoverable:!0,clickable:!0,tickColor:r,borderWidth:0,borderColor:r},tooltip:!0,tooltipOpts:{content:"%s for <b>%x:00 hrs</b> was %y",dateFormat:"%y-%0m-%0d",defaultTheme:!1},colors:[$color_main,$color_second],xaxis:{ticks:15,tickDecimals:2},yaxis:{ticks:15,tickDecimals:0}});if(jQuery("#flot-realtime").length){var j=[],w=200,Q=1e3;jQuery("#flot-realtime").val(Q).change(function(){var e=jQuery(this).val();e&&!isNaN(+e)&&(Q=+e,Q<1&&(Q=1),Q>2e3&&(Q=2e3),jQuery(this).val(""+Q))});var l={yaxis:{min:0,max:100},xaxis:{min:0,max:100},colors:[$color_fourth],series:{lines:{lineWidth:1,fill:!0,fillColor:{colors:[{opacity:.4},{opacity:0}]},steps:!1}}},i=jQuery.plot(jQuery("#flot-realtime"),[e()],l);o()}}jQuery(window).ready(function(){r()})}});