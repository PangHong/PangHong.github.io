zingchart.THEME="classic";
function square() {
    var v = [];
    for (x=-1;x<=1;x+=.1) {
        v.push([x, x*x]);
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
            "step" : .1,
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
            "values":"0:1:.1",
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
    			"values":square(),
    			"text":"<i>f(x) = x * x = x </i><sup>2</sup>",
    			"data-equation":"%k<sup>2<sup> = <b><span style='color:#000'>%v</span></b>"
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