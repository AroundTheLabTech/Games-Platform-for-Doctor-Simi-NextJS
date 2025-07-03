gdjs.MainCode = {};
gdjs.MainCode.localVariables = [];
gdjs.MainCode.GDBackgroundObjects1= [];
gdjs.MainCode.GDBackgroundObjects2= [];
gdjs.MainCode.GDPlayImageObjects1= [];
gdjs.MainCode.GDPlayImageObjects2= [];
gdjs.MainCode.GDPlayButonObjects1= [];
gdjs.MainCode.GDPlayButonObjects2= [];


gdjs.MainCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButon"), gdjs.MainCode.GDPlayButonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDPlayButonObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDPlayButonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDPlayButonObjects1[k] = gdjs.MainCode.GDPlayButonObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDPlayButonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Instructions", false);
}}

}


};

gdjs.MainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainCode.GDBackgroundObjects1.length = 0;
gdjs.MainCode.GDBackgroundObjects2.length = 0;
gdjs.MainCode.GDPlayImageObjects1.length = 0;
gdjs.MainCode.GDPlayImageObjects2.length = 0;
gdjs.MainCode.GDPlayButonObjects1.length = 0;
gdjs.MainCode.GDPlayButonObjects2.length = 0;

gdjs.MainCode.eventsList0(runtimeScene);
gdjs.MainCode.GDBackgroundObjects1.length = 0;
gdjs.MainCode.GDBackgroundObjects2.length = 0;
gdjs.MainCode.GDPlayImageObjects1.length = 0;
gdjs.MainCode.GDPlayImageObjects2.length = 0;
gdjs.MainCode.GDPlayButonObjects1.length = 0;
gdjs.MainCode.GDPlayButonObjects2.length = 0;


return;

}

gdjs['MainCode'] = gdjs.MainCode;
