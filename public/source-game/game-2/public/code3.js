gdjs.Trans1Code = {};
gdjs.Trans1Code.localVariables = [];
gdjs.Trans1Code.GDtransbg1Objects1= [];
gdjs.Trans1Code.GDtransbg1Objects2= [];
gdjs.Trans1Code.GDNewTextObjects1= [];
gdjs.Trans1Code.GDNewTextObjects2= [];
gdjs.Trans1Code.GDNewSprite2Objects1= [];
gdjs.Trans1Code.GDNewSprite2Objects2= [];
gdjs.Trans1Code.GDWhiteSleekButtonObjects1= [];
gdjs.Trans1Code.GDWhiteSleekButtonObjects2= [];
gdjs.Trans1Code.GDscoret1Objects1= [];
gdjs.Trans1Code.GDscoret1Objects2= [];


gdjs.Trans1Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("scoret1"), gdjs.Trans1Code.GDscoret1Objects1);
{for(var i = 0, len = gdjs.Trans1Code.GDscoret1Objects1.length ;i < len;++i) {
    gdjs.Trans1Code.GDscoret1Objects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteSleekButton"), gdjs.Trans1Code.GDWhiteSleekButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Trans1Code.GDWhiteSleekButtonObjects1.length;i<l;++i) {
    if ( gdjs.Trans1Code.GDWhiteSleekButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Trans1Code.GDWhiteSleekButtonObjects1[k] = gdjs.Trans1Code.GDWhiteSleekButtonObjects1[i];
        ++k;
    }
}
gdjs.Trans1Code.GDWhiteSleekButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level2", false);
}}

}


};

gdjs.Trans1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Trans1Code.GDtransbg1Objects1.length = 0;
gdjs.Trans1Code.GDtransbg1Objects2.length = 0;
gdjs.Trans1Code.GDNewTextObjects1.length = 0;
gdjs.Trans1Code.GDNewTextObjects2.length = 0;
gdjs.Trans1Code.GDNewSprite2Objects1.length = 0;
gdjs.Trans1Code.GDNewSprite2Objects2.length = 0;
gdjs.Trans1Code.GDWhiteSleekButtonObjects1.length = 0;
gdjs.Trans1Code.GDWhiteSleekButtonObjects2.length = 0;
gdjs.Trans1Code.GDscoret1Objects1.length = 0;
gdjs.Trans1Code.GDscoret1Objects2.length = 0;

gdjs.Trans1Code.eventsList0(runtimeScene);
gdjs.Trans1Code.GDtransbg1Objects1.length = 0;
gdjs.Trans1Code.GDtransbg1Objects2.length = 0;
gdjs.Trans1Code.GDNewTextObjects1.length = 0;
gdjs.Trans1Code.GDNewTextObjects2.length = 0;
gdjs.Trans1Code.GDNewSprite2Objects1.length = 0;
gdjs.Trans1Code.GDNewSprite2Objects2.length = 0;
gdjs.Trans1Code.GDWhiteSleekButtonObjects1.length = 0;
gdjs.Trans1Code.GDWhiteSleekButtonObjects2.length = 0;
gdjs.Trans1Code.GDscoret1Objects1.length = 0;
gdjs.Trans1Code.GDscoret1Objects2.length = 0;


return;

}

gdjs['Trans1Code'] = gdjs.Trans1Code;
