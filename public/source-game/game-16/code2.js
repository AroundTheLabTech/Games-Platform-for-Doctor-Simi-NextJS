gdjs.finCode = {};
gdjs.finCode.localVariables = [];
gdjs.finCode.GDfondoObjects1= [];
gdjs.finCode.GDfondoObjects2= [];
gdjs.finCode.GDflyoverObjects1= [];
gdjs.finCode.GDflyoverObjects2= [];
gdjs.finCode.GDGOVERObjects1= [];
gdjs.finCode.GDGOVERObjects2= [];
gdjs.finCode.GDSCORETXTObjects1= [];
gdjs.finCode.GDSCORETXTObjects2= [];
gdjs.finCode.GDregresarObjects1= [];
gdjs.finCode.GDregresarObjects2= [];


gdjs.finCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SCORETXT"), gdjs.finCode.GDSCORETXTObjects1);
{for(var i = 0, len = gdjs.finCode.GDSCORETXTObjects1.length ;i < len;++i) {
    gdjs.finCode.GDSCORETXTObjects1[i].getBehavior("Text").setText("SCORE\n" + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber()));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("regresar"), gdjs.finCode.GDregresarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.finCode.GDregresarObjects1.length;i<l;++i) {
    if ( gdjs.finCode.GDregresarObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.finCode.GDregresarObjects1[k] = gdjs.finCode.GDregresarObjects1[i];
        ++k;
    }
}
gdjs.finCode.GDregresarObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};

gdjs.finCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.finCode.GDfondoObjects1.length = 0;
gdjs.finCode.GDfondoObjects2.length = 0;
gdjs.finCode.GDflyoverObjects1.length = 0;
gdjs.finCode.GDflyoverObjects2.length = 0;
gdjs.finCode.GDGOVERObjects1.length = 0;
gdjs.finCode.GDGOVERObjects2.length = 0;
gdjs.finCode.GDSCORETXTObjects1.length = 0;
gdjs.finCode.GDSCORETXTObjects2.length = 0;
gdjs.finCode.GDregresarObjects1.length = 0;
gdjs.finCode.GDregresarObjects2.length = 0;

gdjs.finCode.eventsList0(runtimeScene);
gdjs.finCode.GDfondoObjects1.length = 0;
gdjs.finCode.GDfondoObjects2.length = 0;
gdjs.finCode.GDflyoverObjects1.length = 0;
gdjs.finCode.GDflyoverObjects2.length = 0;
gdjs.finCode.GDGOVERObjects1.length = 0;
gdjs.finCode.GDGOVERObjects2.length = 0;
gdjs.finCode.GDSCORETXTObjects1.length = 0;
gdjs.finCode.GDSCORETXTObjects2.length = 0;
gdjs.finCode.GDregresarObjects1.length = 0;
gdjs.finCode.GDregresarObjects2.length = 0;


return;

}

gdjs['finCode'] = gdjs.finCode;
