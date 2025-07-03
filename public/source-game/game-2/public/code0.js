gdjs.introCode = {};
gdjs.introCode.localVariables = [];
gdjs.introCode.GDINTROObjects1= [];
gdjs.introCode.GDINTROObjects2= [];
gdjs.introCode.GDINICIOObjects1= [];
gdjs.introCode.GDINICIOObjects2= [];


gdjs.introCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("INICIO"), gdjs.introCode.GDINICIOObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.introCode.GDINICIOObjects1.length;i<l;++i) {
    if ( gdjs.introCode.GDINICIOObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.introCode.GDINICIOObjects1[k] = gdjs.introCode.GDINICIOObjects1[i];
        ++k;
    }
}
gdjs.introCode.GDINICIOObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "INSTRUCCIONES", false);
}}

}


};

gdjs.introCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.introCode.GDINTROObjects1.length = 0;
gdjs.introCode.GDINTROObjects2.length = 0;
gdjs.introCode.GDINICIOObjects1.length = 0;
gdjs.introCode.GDINICIOObjects2.length = 0;

gdjs.introCode.eventsList0(runtimeScene);
gdjs.introCode.GDINTROObjects1.length = 0;
gdjs.introCode.GDINTROObjects2.length = 0;
gdjs.introCode.GDINICIOObjects1.length = 0;
gdjs.introCode.GDINICIOObjects2.length = 0;


return;

}

gdjs['introCode'] = gdjs.introCode;
