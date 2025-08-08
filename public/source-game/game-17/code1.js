gdjs.HomeCode = {};
gdjs.HomeCode.localVariables = [];
gdjs.HomeCode.GDbgsspObjects1= [];
gdjs.HomeCode.GDbgsspObjects2= [];
gdjs.HomeCode.GDmsjeObjects1= [];
gdjs.HomeCode.GDmsjeObjects2= [];
gdjs.HomeCode.GDjugarObjects1= [];
gdjs.HomeCode.GDjugarObjects2= [];


gdjs.HomeCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("jugar"), gdjs.HomeCode.GDjugarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HomeCode.GDjugarObjects1.length;i<l;++i) {
    if ( gdjs.HomeCode.GDjugarObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.HomeCode.GDjugarObjects1[k] = gdjs.HomeCode.GDjugarObjects1[i];
        ++k;
    }
}
gdjs.HomeCode.GDjugarObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level", false);
}}

}


};

gdjs.HomeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.HomeCode.GDbgsspObjects1.length = 0;
gdjs.HomeCode.GDbgsspObjects2.length = 0;
gdjs.HomeCode.GDmsjeObjects1.length = 0;
gdjs.HomeCode.GDmsjeObjects2.length = 0;
gdjs.HomeCode.GDjugarObjects1.length = 0;
gdjs.HomeCode.GDjugarObjects2.length = 0;

gdjs.HomeCode.eventsList0(runtimeScene);
gdjs.HomeCode.GDbgsspObjects1.length = 0;
gdjs.HomeCode.GDbgsspObjects2.length = 0;
gdjs.HomeCode.GDmsjeObjects1.length = 0;
gdjs.HomeCode.GDmsjeObjects2.length = 0;
gdjs.HomeCode.GDjugarObjects1.length = 0;
gdjs.HomeCode.GDjugarObjects2.length = 0;


return;

}

gdjs['HomeCode'] = gdjs.HomeCode;
