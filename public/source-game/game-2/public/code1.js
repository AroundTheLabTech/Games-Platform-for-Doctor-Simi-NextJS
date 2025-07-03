gdjs.INSTRUCCIONESCode = {};
gdjs.INSTRUCCIONESCode.localVariables = [];
gdjs.INSTRUCCIONESCode.GDINTRUCObjects1= [];
gdjs.INSTRUCCIONESCode.GDINTRUCObjects2= [];
gdjs.INSTRUCCIONESCode.GDINS1Objects1= [];
gdjs.INSTRUCCIONESCode.GDINS1Objects2= [];
gdjs.INSTRUCCIONESCode.GDINS2Objects1= [];
gdjs.INSTRUCCIONESCode.GDINS2Objects2= [];
gdjs.INSTRUCCIONESCode.GDNewSpriteObjects1= [];
gdjs.INSTRUCCIONESCode.GDNewSpriteObjects2= [];
gdjs.INSTRUCCIONESCode.GDCOMENZARObjects1= [];
gdjs.INSTRUCCIONESCode.GDCOMENZARObjects2= [];


gdjs.INSTRUCCIONESCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.INSTRUCCIONESCode.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.INSTRUCCIONESCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.INSTRUCCIONESCode.GDNewSpriteObjects1[i].getBehavior("Animation").resumeAnimation();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("COMENZAR"), gdjs.INSTRUCCIONESCode.GDCOMENZARObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.INSTRUCCIONESCode.GDCOMENZARObjects1.length;i<l;++i) {
    if ( gdjs.INSTRUCCIONESCode.GDCOMENZARObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.INSTRUCCIONESCode.GDCOMENZARObjects1[k] = gdjs.INSTRUCCIONESCode.GDCOMENZARObjects1[i];
        ++k;
    }
}
gdjs.INSTRUCCIONESCode.GDCOMENZARObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level", false);
}}

}


};

gdjs.INSTRUCCIONESCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.INSTRUCCIONESCode.GDINTRUCObjects1.length = 0;
gdjs.INSTRUCCIONESCode.GDINTRUCObjects2.length = 0;
gdjs.INSTRUCCIONESCode.GDINS1Objects1.length = 0;
gdjs.INSTRUCCIONESCode.GDINS1Objects2.length = 0;
gdjs.INSTRUCCIONESCode.GDINS2Objects1.length = 0;
gdjs.INSTRUCCIONESCode.GDINS2Objects2.length = 0;
gdjs.INSTRUCCIONESCode.GDNewSpriteObjects1.length = 0;
gdjs.INSTRUCCIONESCode.GDNewSpriteObjects2.length = 0;
gdjs.INSTRUCCIONESCode.GDCOMENZARObjects1.length = 0;
gdjs.INSTRUCCIONESCode.GDCOMENZARObjects2.length = 0;

gdjs.INSTRUCCIONESCode.eventsList0(runtimeScene);
gdjs.INSTRUCCIONESCode.GDINTRUCObjects1.length = 0;
gdjs.INSTRUCCIONESCode.GDINTRUCObjects2.length = 0;
gdjs.INSTRUCCIONESCode.GDINS1Objects1.length = 0;
gdjs.INSTRUCCIONESCode.GDINS1Objects2.length = 0;
gdjs.INSTRUCCIONESCode.GDINS2Objects1.length = 0;
gdjs.INSTRUCCIONESCode.GDINS2Objects2.length = 0;
gdjs.INSTRUCCIONESCode.GDNewSpriteObjects1.length = 0;
gdjs.INSTRUCCIONESCode.GDNewSpriteObjects2.length = 0;
gdjs.INSTRUCCIONESCode.GDCOMENZARObjects1.length = 0;
gdjs.INSTRUCCIONESCode.GDCOMENZARObjects2.length = 0;


return;

}

gdjs['INSTRUCCIONESCode'] = gdjs.INSTRUCCIONESCode;
