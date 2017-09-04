zingchart.THEME="classic";
function sinv() {
    var v = [];
    for (x=-360;x<=360;x+=5) {
        v.push([x, 1*Math.sin((x*2*Math.PI)/360)]);
    }
    return v;
}

function cosv() {
    var v = [];
    for (x=-360;x<=360;x+=5) {
        v.push([x, 1*Math.cos((x*2*Math.PI)/360)]);
    }
    return v;
}

function eq() {
    var v = [];
    for (x=-360;x<=360;x+=5) {
        v.push([x, 1*Math.sin((x*2*Math.PI)/360) + 1*Math.cos((x*2*Math.PI)/360)]);
    }
    return v;
}


zingchart.fnJSON = function() {
    return {
        "flat":true,
        "type":"line",
        "background-color":"#fff",
    	"plotarea":{
            "margin":"dynamic"
    	},
        "legend":{
          "background-color": "#FFF",
            "margin":"auto auto 10 auto",
            "adjust-layout":true,
            "layout":"float",
            "marker":{
                "type":"match",
                "showLine":true
            },
            "shadow":false,
            "border-radius":3
        },
      "crosshair-x":{
        "line-style":"dashed",
        "plot-label":{
          "html-mode":true,
          "text":"%data-equation",
          "decimals":2,
          "font-size":12,
          "multiple":true,
          "background-color":"#b5e8c0",
          "color":"white",
          "border-width":2,
          "border-color":"#33994a",
          "padding":"4 6",
          "shadow":false,
          "border-radius":3
        },
        "scale-label":{
          "visible":false
        }
      },
    	"scaleX":{
    	  "maxItems":5,
            "zooming":1,
            "lineWidth":0,
            "guide" : {
                "line-style":"solid",
                "line-color":"#33994a"
            },
            "tick" : {
                "lineWidth":1,
                "placement":"ref-auto",
                "line-color":"#FFF"
            },
            "minor-ticks":4,
            "minor-tick":{
              "visible":false
            },
            "minor-guide":{
              "line-style":"solid",
              "line-color":"#33994a"
            },
            "items-overlap":true,
            "item":{
                "color": "#333"
            },
            "format":"%v°",
            "step" : 20,
            "-refValue" : 0,
            "refLine" : {
                "visible":true,
                "lineWidth":2,
                "lineColor":"#33994a"
            }
    	},
    	"scaleY":{
            "zooming":1,
            "lineWidth":0,
            "values":"-1.6:1.6:0.2",
            "guide" : {
                "line-style":"solid",
                "line-color":"#33994a"
            },
            "tick" : {
                "visible":false
            },
            "minor-ticks":4,
            "minor-tick":{
              "visible":false
            },
            "minor-guide":{
              "line-style":"solid",
              "line-color":"#33994a"
            },
            "item":{
                "color": "#333"
            },
            "refValue" : 0,
            "refLine" : {
                "lineWidth":1,
                "lineColor":"#33994a"
            }
    	},
    	"plot":{
            "maxTrackers":9999,
            "lineWidth":1,
            "aspect":"spline",
            "exact": true,
            "marker":{
                "visible":false
            },
            "tooltip":{
              "visible":false
            },
            "animation": {
              "effect": "ANIMATION_SLIDE_LEFT",
              "method": "ANIMATION_REGULAR_EASE_OUT",
              "sequence": "ANIMATION_BY_PLOT",
              "speed": 200
            }
    	},
    	"series":[
    		{
    		  "line-color":"#000",
    			"values":sinv(),
    			"text":"Sine",
    			"data-equation":"<b><span style='color:#000;'>sin(</span></b> %k° <b><span style='color:#000'>)</span></b> = <b><span style='color:#000'>%v</span></b>"
    		},
    		{
    		  "line-color":"#6e6c6c",
    			"values":cosv(),
    			"text":"Cosine",
    			"data-equation":"<b><span style='color:#6e6c6c;'>cos(</span></b> %k°<b><span style='color:#6e6c6c;'>)</span></b> = <b><span style='color:#6e6c6c'>%v</span></b>"
    		},
    		{
    		  "line-color":"#3f0bff",
    			"values":eq(),
    			"text":"Equation",
    			"data-equation":"<b><span style='color:#000'>sin(</span></b>%k°<b><span style='color:#000'>)</span> + <span style='color:#6e6c6c;'>cos(</span></b> %k°<b><span style='color:#6e6c6c;'>)</span></b> = <b><span style='color:#3f0bff;'>%v</span></b>"
    		}
    	]
    };
};

zingchart.render({ 
	id : 'myChart', 
	data : zingchart.fnJSON(), 
	height: '100%', 
	width: '100%',
	output: 'canvas'
	
});