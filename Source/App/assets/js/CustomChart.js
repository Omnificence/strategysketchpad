!function(e,t,a,i){function l(t,a){this.element=t,this.options=e.extend({},o,a),this.init()}var n="SimpleChart",o={ChartType:"Line",xPadding:25,yPadding:20,topmargin:0,rightmargin:0,data:null,toolwidth:300,toolheight:300,axiscolor:"#333",font:"italic 10pt sans-serif",headerfontsize:"14px",axisfontsize:"12px",piefontsize:"13px",pielabelcolor:"#fff",pielabelpercentcolor:"#000",textAlign:"center",textcolor:"#E6E6E6",showlegends:!0,showpielables:!1,legendposition:"bottom",legendsize:"100",xaxislabel:null,yaxislabel:null,title:null,LegendTitle:"Legend",pieborderColor:"#fff",pieborderWidth:2,showxaxistext:!0,showyaxistext:!0};l.prototype={init:function(){var t=this,i=t.options,l=createHiDPICanvas(e(t.element).width(),e(t.element).height()),n=a.createAttribute("class");n.value="SimpleChartcanvas",l.setAttributeNode(n);var o=e(t.element).addClass("SimpleChart").addClass(i.ChartType).append(l).find("canvas").css({"float":"right"==i.legendposition||"left"==i.legendposition?"left":"","margin-top":i.topmargin,"margin-right":i.rightmargin}),r=(o[0].getContext("2d"),o[0].getContext("2d"));switch(i.ChartType){case"Line":t.drawAxis(r,o),t.drawLineAreaScatteredHybridCharts(r,o);break;case"Area":t.drawAxis(r,o),t.drawLineAreaScatteredHybridCharts(r,o);break;case"Scattered":t.drawAxis(r,o),t.drawLineAreaScatteredHybridCharts(r,o);break;case"Hybrid":t.drawAxis(r,o),t.drawLineAreaScatteredHybridCharts(r,o),t.drawBar(r,o),t.drawHybrid(r,o);break;case"Bar":t.drawAxis(r,o),t.drawBar(r,o);break;case"Pie":t.drawPie(r,o);break;case"Stacked":t.drawAxis(r,o),t.drawStacked(r,o);break;case"StackedHybrid":t.drawAxis(r,o),t.drawStacked(r,o),t.drawLineAreaScatteredHybridCharts(r,o)}i.showlegends&&t.drawLegends(o)},reload:function(){e(this.element).empty(),this.init()},destroy:function(){e(this.element).empty()},FindYMax:function(){config=this.options;for(var e=0,t=0;t<config.data.length;t++)for(var a=0;a<config.data[t].values.length;a++)config.data[t].values[a].Y>e&&(e=config.data[t].values[a].Y);return e+=10-e%10},pixelX:function(t,a){config=this.options;var i=e(this.element).find(".SimpleChartcanvas");return(i.width()-config.xPadding)/config.data[a].values.length*t+1.5*config.xPadding},pixelY:function(t){config=this.options;var a=e(this.element).find(".SimpleChartcanvas");return a.height()-(a.height()-config.yPadding)/this.FindYMax()*t-config.yPadding},getRandomColor:function(){for(var e="0123456789ABCDEF".split(""),t="#",a=0;6>a;a++)t+=e[Math.floor(16*Math.random())];return t},drawAxis:function(t,a){var i=this,l=new Array,n=this.options;if(!(n.data[0].values.length<=0)){t.lineWidth=2,t.strokeStyle=n.axiscolor,t.font=n.font,t.textAlign=n.textAlign,t.beginPath(),t.moveTo(n.xPadding,0),t.lineTo(n.xPadding,a.height()-n.yPadding),t.lineTo(a.width(),a.height()-n.yPadding),t.stroke(),t.fillStyle=n.textcolor;for(var o=0;o<n.data.length;o++)for(var r=0;r<n.data[o].values.length;r++)l.indexOf(n.data[o].values[r].X)<0&&(l.push(n.data[o].values[r].X),n.showxaxistext&&t.fillText(n.data[o].values[r].X,i.pixelX(r,o),a.height()-n.yPadding+20));t.save();var d=t.font.split(" ");t.font=n.axisfontsize+" "+d[d.length-1],n.xaxislabel&&t.fillText(n.xaxislabel,a.width()/2,a.height()-10),n.yaxislabel&&(t.save(),t.translate(0,a.height()/2-parseInt(a.height()/10)),t.rotate(-Math.PI/2),t.fillText(n.yaxislabel,0,15),t.restore()),n.title&&e("<div class='simple-chart-Header' />").appendTo(e(i.element)).html(n.title).css({left:a.width()/2-e(i.element).find(".simple-chart-Header").width()/2,top:5}),t.restore(),t.textAlign="right",t.textBaseline="middle";for(var s=i.FindYMax(),h="",o=0;o<Math.ceil(s).toString().length-1;o++)h+="0";h="1"+h,h=Math.ceil(s/parseInt(h))*Math.pow(10,Math.ceil(s/10).toString().length-1);for(var o=0;o<i.FindYMax();o+=parseInt(h))t.fillStyle=n.textcolor,n.showyaxistext&&t.fillText(o,n.xPadding-10,i.pixelY(o)),t.fillStyle=n.axiscolor,t.beginPath(),t.fill()}},drawPie:function(t,a){var i=this,l=this.options;t.clearRect(0,0,a.width(),a.height());for(var n=0,o=0,r=0;r<l.data[0].values.length;r++)n+="number"==typeof l.data[0].values[r].Y?l.data[0].values[r].Y:0;for(var d=0;d<l.data[0].values.length;d++){t.fillStyle="Random"==l.data[0].linecolor?l.data[0].values[d].color=randomcolor=i.getRandomColor():l.data[0].linecolor,t.beginPath();var s=a.width()/2.2,h=a.height()/2.2;if(t.moveTo(s,h),t.arc(s,h,"right"==l.legendposition||"left"==l.legendposition?s:h,o,o+2*Math.PI*(l.data[0].values[d].Y/n),!1),t.lineTo(s,h),t.fill(),t.fillStyle=l.pielabelcolor,t.lineWidth=l.pieborderWidth,t.strokeStyle=l.pieborderColor,t.stroke(),l.showpielables){t.save(),t.translate(s,h),t.rotate(o-.2+2*Math.PI*(l.data[0].values[d].Y/n));var p=Math.floor(.5*s)+40,g=Math.floor(.05*h);t.textAlign="right";var c=t.font.split(" ");t.font=l.piefontsize+" "+c[c.length-1],t.fillText(l.data[0].values[d].X,p,g),t.restore(),t.save(),t.fillStyle=l.pielabelpercentcolor,t.translate(s,h),t.rotate(o-.15+2*Math.PI*(l.data[0].values[d].Y/n));var p=Math.floor(.5*s)+90,g=Math.floor(.05*h);t.textAlign="right";var c=t.font.split(" ");t.font=l.piefontsize+" "+c[c.length-1],t.fillText(Math.round(l.data[0].values[d].Y/n*100)+"%",p,g),t.restore()}o+=2*Math.PI*(l.data[0].values[d].Y/n)}var f=e(a).offset();f.left,f.top},drawBar:function(e,t){for(var a=this,i=this.options,l=0;l<i.data[0].values.length;l++){var n;e.strokeStyle="Random"==i.data[0].linecolor?i.data[0].values[l].color=n=a.getRandomColor():i.data[0].linecolor,e.fillStyle="Random"==i.data[0].linecolor?n:i.data[0].linecolor,e.beginPath(),e.rect(a.pixelX(l,0)-i.yPadding/4,a.pixelY(i.data[0].values[l].Y),i.yPadding/2,t.height()-a.pixelY(i.data[0].values[l].Y)-i.xPadding+8),e.closePath(),e.stroke(),e.fill(),e.textAlign="left",e.fillStyle="#000",e.fillText(i.data[0].values[l].Y,a.pixelX(l,0)-i.yPadding/4,a.pixelY(i.data[0].values[l].Y)+7,200)}},drawStacked:function(e,t){for(var a=this,i=this.options,l=0;l<i.data.length;l++)for(var n=0;n<i.data[l].values.length;n++){var o;e.strokeStyle="Random"==i.data[l].linecolor?i.data[l].values[n].color=o=a.getRandomColor():i.data[l].linecolor,e.fillStyle="Random"==i.data[l].linecolor?o:i.data[l].linecolor,e.beginPath(),e.rect(a.pixelX(n,0)-i.yPadding/4,a.pixelY(i.data[l].values[n].Y),i.yPadding/2,t.height()-a.pixelY(i.data[l].values[n].Y)-i.xPadding+8),e.closePath(),e.stroke(),e.fill(),e.textAlign="left",e.fillStyle="#000",e.fillText(i.data[l].values[n].Y,a.pixelX(n,0)-i.yPadding/4,a.pixelY(i.data[l].values[n].Y)+7,200)}},drawHybrid:function(e,t){var a,i=this,l=this.options;e.strokeStyle="Random"==l.data[0].linecolor?a=i.getRandomColor():l.data[0].linecolor,e.beginPath(),e.moveTo(i.pixelX(0,0),i.pixelY(l.data[0].values[0].Y));for(var n=1;n<l.data[0].values.length;n++)e.lineTo(i.pixelX(n,0),i.pixelY(l.data[0].values[n].Y));e.stroke(),e.fillStyle="Random"==l.data[0].linecolor?a:l.data[0].linecolor;for(var n=0;n<l.data[0].values.length;n++)e.beginPath(),e.arc(i.pixelX(n,0),i.pixelY(l.data[0].values[n].Y),4,0,2*Math.PI,!0),e.fill()},drawLineAreaScatteredHybridCharts:function(t,a){function i(t){mouseX=parseInt(t.changedTouches[0].pageX-e(t.currentTarget).offset().left),mouseY=parseInt(t.changedTouches[0].pageY-e(t.currentTarget).offset().top);for(var a=!1,i=0;i<c.length;i++){var l=c[i],h=mouseX-l.x,p=mouseY-l.y;h*h+p*p<l.rXr&&(o[0].style.left=l.x-o[0].clientWidth/2-2+"px",o[0].style.top=l.y-14-o[0].clientHeight+n.topmargin+"px",o[0].innerHTML="<div class='tipD'>"+l.tip+"</div>",s[0].style.left=l.x-6+"px",s[0].style.top=l.y+n.topmargin-15+"px",("Line"==n.ChartType||"Scattered"==n.ChartType||"Hybrid"==n.ChartType||"StackedHybrid"==n.ChartType)&&(r[0].style.left=l.x-9+"px",r[0].style.top=l.y+n.topmargin-9+"px"),d.clearRect(0,0,r.width(),r.height()),d.strokeStyle="#E52",d.beginPath(),d.arc(9,9,5,0,2*Math.PI,!0),d.fillStyle="#E52",d.fill(),a=!0)}a||(o[0].style.left="-1600px",r[0].style.left="-1600px",s[0].style.left="-1600px")}var l=this,n=this.options;if(!(n.data[0].values.length<=0)){var o=e(l.element).append("<div id='tip'></div><div class='down-triangle'></div>").find("#tip").attr("width",n.toolwidth).attr("height",n.toolheight),r=(o[0],e(l.element).append("<canvas id='highlighter'></canvas>").find("#highlighter").attr("width","18").attr("height","18")),d=r[0].getContext("2d"),s=e(l.element).find(".down-triangle"),h=e(a).offset();h.left,h.top;a[0].addEventListener("touchstart",function(e){i(e)},!1);for(var p=0;p<n.data.length;p++){if(t.strokeStyle="Random"==n.data[p].linecolor?n.data[p].Randomlinecolor=l.getRandomColor():n.data[p].linecolor,t.beginPath(),t.moveTo(l.pixelX(0,p),l.pixelY(n.data[p].values[0].Y)),"Scattered"!==n.ChartType&&"Hybrid"!==n.ChartType){for(var g=1;g<n.data[p].values.length;g++)t.lineTo(l.pixelX(g,p),l.pixelY(n.data[p].values[g].Y));t.lineWidth=1.5,t.stroke()}if(t.fillStyle="Random"==n.data[p].linecolor?n.data[p].Randomlinecolor:n.data[p].linecolor,"Area"==n.ChartType&&(t.lineTo(l.pixelX(n.data[p].values.length-1,p),l.pixelY(0)),t.lineTo(l.pixelX(0,0),l.pixelY(0)),t.stroke(),t.fill()),"Line"==n.ChartType||"Scattered"==n.ChartType||"StackedHybrid"==n.ChartType)for(var g=0;g<n.data[p].values.length;g++)t.beginPath(),t.arc(l.pixelX(g,p),l.pixelY(n.data[p].values[g].Y),4,0,2*Math.PI,!0),t.fill()}for(var c=[],p=0;p<n.data.length;p++)for(var g=0;g<n.data[p].values.length;g++)c.push({x:l.pixelX(g,p),y:l.pixelY(n.data[p].values[g].Y),r:16,rXr:240,tip:n.data[p].values[g].Y,color:"Random"==n.data[p].linecolor?n.data[p].Randomlinecolor:n.data[p].linecolor})}},drawLegends:function(t){var a=this,i=this.options;if("Line"==i.ChartType||"Area"==i.ChartType||"Scattered"==i.ChartType||"Stacked"==i.ChartType||"StackedHybrid"==i.ChartType){for(var l=e("<div class='simple-chart-legends' />",{id:"legendsdiv"}).css({width:"right"==i.legendposition||"left"==i.legendposition?i.legendsize-5:t.width(),height:"top"==i.legendposition||"bottom"==i.legendposition?i.legendsize-5:t.height(),"float":"right"==i.legendposition||"left"==i.legendposition?"left":""}).appendTo(e(a.element)),n=e(l).append("<span>"+i.LegendTitle+"</span>").append("<ul />").find("ul"),o=0;o<i.data.length;o++)e("<li />",{"class":"legendsli"}).append("<span />").find("span").addClass("legendindicator").append('<span class="line" style="background: '+("Random"==i.data[o].linecolor?i.data[o].Randomlinecolor:i.data[o].linecolor)+'"></span><span class="circle" style="background: '+("Random"==i.data[o].linecolor?i.data[o].Randomlinecolor:i.data[o].linecolor)+'"></span>').parent().append("<span>"+i.data[o].title+"</span>").appendTo(n);("top"==i.legendposition||"left"==i.legendposition)&&e(l).insertBefore(e(a.element).find(".SimpleChartcanvas")),"right"==i.legendposition||"left"==i.legendposition?e(l).addClass("vertical"):e(l).addClass("horizontal")}if("Bar"==i.ChartType||"Hybrid"==i.ChartType||"Pie"==i.ChartType){for(var l=e("<div class='simple-chart-legends' />",{id:"legendsdiv"}).css({width:"right"==i.legendposition||"left"==i.legendposition?i.legendsize-5:t.width(),height:"top"==i.legendposition||"bottom"==i.legendposition?i.legendsize-5:t.height(),"float":"right"==i.legendposition||"left"==i.legendposition?"left":""}).appendTo(e(a.element)),n=e(l).append("<span>"+i.LegendTitle+"</span>").append("<ul />").find("ul"),o=0;o<i.data[0].values.length;o++)e("<li />",{"class":"legendsli"}).append("<span />").find("span").addClass("legendindicator").append('<span class="line" style="background: '+("Random"==i.data[0].linecolor?i.data[0].values[o].color:i.data[0].linecolor)+'"></span><span class="circle" style="background: '+("Random"==i.data[0].linecolor?i.data[0].values[o].color:i.data[0].linecolor)+'"></span>').parent().append("<span>"+i.data[0].values[o].X+"</span><span class='legendvalue'>"+("Pie"==i.ChartType?i.data[0].values[o].Y:"")+"</span>").appendTo(n);("top"==i.legendposition||"left"==i.legendposition)&&e(l).insertBefore(e(a.element).find(".SimpleChartcanvas")),"right"==i.legendposition||"left"==i.legendposition?e(l).addClass("vertical"):e(l).addClass("horizontal")}}},e.fn[n]=function(t){if("string"!=typeof t)return this.each(function(){e.data(this,"plugin_"+n)||e.data(this,"plugin_"+n,new l(this,t))});var a=Array.prototype.slice.call(arguments,1);this.each(function(){var i=e.data(this,"plugin_"+n);i[t]?i[t].apply(i,a):i.options[t]=a[0]})}}(jQuery,window,document,void 0);var PIXEL_RATIO=function(){var e=document.createElement("canvas").getContext("2d"),t=window.devicePixelRatio||1,a=e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1;return t/a}();createHiDPICanvas=function(e,t,a){a||(a=PIXEL_RATIO);var i=document.createElement("canvas");return i.width=e*a,i.height=t*a,i.style.width=e+"px",i.style.height=t+"px",i.getContext("2d").setTransform(a,0,0,a,0,0),i};