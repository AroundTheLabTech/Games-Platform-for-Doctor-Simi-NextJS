gdjs.GameOverN1Code = {};
gdjs.GameOverN1Code.localVariables = [];
gdjs.GameOverN1Code.GDbhovn1Objects1= [];
gdjs.GameOverN1Code.GDbhovn1Objects2= [];
gdjs.GameOverN1Code.GDentre1Objects1= [];
gdjs.GameOverN1Code.GDentre1Objects2= [];
gdjs.GameOverN1Code.GDMESJFINALN1Objects1= [];
gdjs.GameOverN1Code.GDMESJFINALN1Objects2= [];
gdjs.GameOverN1Code.GDCOINS1Objects1= [];
gdjs.GameOverN1Code.GDCOINS1Objects2= [];
gdjs.GameOverN1Code.GDCOINIMGObjects1= [];
gdjs.GameOverN1Code.GDCOINIMGObjects2= [];
gdjs.GameOverN1Code.GDBACKObjects1= [];
gdjs.GameOverN1Code.GDBACKObjects2= [];
gdjs.GameOverN1Code.GDTransitionObjects1= [];
gdjs.GameOverN1Code.GDTransitionObjects2= [];


gdjs.GameOverN1Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BACK"), gdjs.GameOverN1Code.GDBACKObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameOverN1Code.GDBACKObjects1.length;i<l;++i) {
    if ( gdjs.GameOverN1Code.GDBACKObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameOverN1Code.GDBACKObjects1[k] = gdjs.GameOverN1Code.GDBACKObjects1[i];
        ++k;
    }
}
gdjs.GameOverN1Code.GDBACKObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Overworld", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("COINS1"), gdjs.GameOverN1Code.GDCOINS1Objects1);
{for(var i = 0, len = gdjs.GameOverN1Code.GDCOINS1Objects1.length ;i < len;++i) {
    gdjs.GameOverN1Code.GDCOINS1Objects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}}

}


};

gdjs.GameOverN1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOverN1Code.GDbhovn1Objects1.length = 0;
gdjs.GameOverN1Code.GDbhovn1Objects2.length = 0;
gdjs.GameOverN1Code.GDentre1Objects1.length = 0;
gdjs.GameOverN1Code.GDentre1Objects2.length = 0;
gdjs.GameOverN1Code.GDMESJFINALN1Objects1.length = 0;
gdjs.GameOverN1Code.GDMESJFINALN1Objects2.length = 0;
gdjs.GameOverN1Code.GDCOINS1Objects1.length = 0;
gdjs.GameOverN1Code.GDCOINS1Objects2.length = 0;
gdjs.GameOverN1Code.GDCOINIMGObjects1.length = 0;
gdjs.GameOverN1Code.GDCOINIMGObjects2.length = 0;
gdjs.GameOverN1Code.GDBACKObjects1.length = 0;
gdjs.GameOverN1Code.GDBACKObjects2.length = 0;
gdjs.GameOverN1Code.GDTransitionObjects1.length = 0;
gdjs.GameOverN1Code.GDTransitionObjects2.length = 0;

gdjs.GameOverN1Code.eventsList0(runtimeScene);
gdjs.GameOverN1Code.GDbhovn1Objects1.length = 0;
gdjs.GameOverN1Code.GDbhovn1Objects2.length = 0;
gdjs.GameOverN1Code.GDentre1Objects1.length = 0;
gdjs.GameOverN1Code.GDentre1Objects2.length = 0;
gdjs.GameOverN1Code.GDMESJFINALN1Objects1.length = 0;
gdjs.GameOverN1Code.GDMESJFINALN1Objects2.length = 0;
gdjs.GameOverN1Code.GDCOINS1Objects1.length = 0;
gdjs.GameOverN1Code.GDCOINS1Objects2.length = 0;
gdjs.GameOverN1Code.GDCOINIMGObjects1.length = 0;
gdjs.GameOverN1Code.GDCOINIMGObjects2.length = 0;
gdjs.GameOverN1Code.GDBACKObjects1.length = 0;
gdjs.GameOverN1Code.GDBACKObjects2.length = 0;
gdjs.GameOverN1Code.GDTransitionObjects1.length = 0;
gdjs.GameOverN1Code.GDTransitionObjects2.length = 0;


return;

}

gdjs['GameOverN1Code'] = gdjs.GameOverN1Code;
