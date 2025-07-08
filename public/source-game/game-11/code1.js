gdjs.MainCode = {};
gdjs.MainCode.localVariables = [];
gdjs.MainCode.GDBackgroundObjects1= [];
gdjs.MainCode.GDBackgroundObjects2= [];
gdjs.MainCode.GDBoardObjects1= [];
gdjs.MainCode.GDBoardObjects2= [];
gdjs.MainCode.GDPlayObjects1= [];
gdjs.MainCode.GDPlayObjects2= [];


gdjs.MainCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.MainCode.GDPlayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDPlayObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDPlayObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDPlayObjects1[k] = gdjs.MainCode.GDPlayObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDPlayObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Instructions", false);
}}

}


};

gdjs.MainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainCode.GDBackgroundObjects1.length = 0;
gdjs.MainCode.GDBackgroundObjects2.length = 0;
gdjs.MainCode.GDBoardObjects1.length = 0;
gdjs.MainCode.GDBoardObjects2.length = 0;
gdjs.MainCode.GDPlayObjects1.length = 0;
gdjs.MainCode.GDPlayObjects2.length = 0;

gdjs.MainCode.eventsList0(runtimeScene);
gdjs.MainCode.GDBackgroundObjects1.length = 0;
gdjs.MainCode.GDBackgroundObjects2.length = 0;
gdjs.MainCode.GDBoardObjects1.length = 0;
gdjs.MainCode.GDBoardObjects2.length = 0;
gdjs.MainCode.GDPlayObjects1.length = 0;
gdjs.MainCode.GDPlayObjects2.length = 0;


return;

}

gdjs['MainCode'] = gdjs.MainCode;
