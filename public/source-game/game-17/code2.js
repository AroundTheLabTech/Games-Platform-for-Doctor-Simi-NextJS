gdjs.finCode = {};
gdjs.finCode.localVariables = [];
gdjs.finCode.GDfase1Objects1= [];
gdjs.finCode.GDfase1Objects2= [];
gdjs.finCode.GDbgfinalObjects1= [];
gdjs.finCode.GDbgfinalObjects2= [];
gdjs.finCode.GDscorefinalObjects1= [];
gdjs.finCode.GDscorefinalObjects2= [];
gdjs.finCode.GDREINICO1Objects1= [];
gdjs.finCode.GDREINICO1Objects2= [];


gdjs.finCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("scorefinal"), gdjs.finCode.GDscorefinalObjects1);
{for(var i = 0, len = gdjs.finCode.GDscorefinalObjects1.length ;i < len;++i) {
    gdjs.finCode.GDscorefinalObjects1[i].getBehavior("Text").setText("score " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("REINICO1"), gdjs.finCode.GDREINICO1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.finCode.GDREINICO1Objects1.length;i<l;++i) {
    if ( gdjs.finCode.GDREINICO1Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.finCode.GDREINICO1Objects1[k] = gdjs.finCode.GDREINICO1Objects1[i];
        ++k;
    }
}
gdjs.finCode.GDREINICO1Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Home", false);
}}

}


};

gdjs.finCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.finCode.GDfase1Objects1.length = 0;
gdjs.finCode.GDfase1Objects2.length = 0;
gdjs.finCode.GDbgfinalObjects1.length = 0;
gdjs.finCode.GDbgfinalObjects2.length = 0;
gdjs.finCode.GDscorefinalObjects1.length = 0;
gdjs.finCode.GDscorefinalObjects2.length = 0;
gdjs.finCode.GDREINICO1Objects1.length = 0;
gdjs.finCode.GDREINICO1Objects2.length = 0;

gdjs.finCode.eventsList0(runtimeScene);
gdjs.finCode.GDfase1Objects1.length = 0;
gdjs.finCode.GDfase1Objects2.length = 0;
gdjs.finCode.GDbgfinalObjects1.length = 0;
gdjs.finCode.GDbgfinalObjects2.length = 0;
gdjs.finCode.GDscorefinalObjects1.length = 0;
gdjs.finCode.GDscorefinalObjects2.length = 0;
gdjs.finCode.GDREINICO1Objects1.length = 0;
gdjs.finCode.GDREINICO1Objects2.length = 0;


return;

}

gdjs['finCode'] = gdjs.finCode;
