gdjs.introCode = {};
gdjs.introCode.localVariables = [];
gdjs.introCode.GDfondoObjects1= [];
gdjs.introCode.GDfondoObjects2= [];
gdjs.introCode.GDpastor_9595alemanObjects1= [];
gdjs.introCode.GDpastor_9595alemanObjects2= [];
gdjs.introCode.GDgatonegroObjects1= [];
gdjs.introCode.GDgatonegroObjects2= [];
gdjs.introCode.GDperritoObjects1= [];
gdjs.introCode.GDperritoObjects2= [];
gdjs.introCode.GDshitzuObjects1= [];
gdjs.introCode.GDshitzuObjects2= [];
gdjs.introCode.GDsimi1Objects1= [];
gdjs.introCode.GDsimi1Objects2= [];
gdjs.introCode.GDtituloObjects1= [];
gdjs.introCode.GDtituloObjects2= [];
gdjs.introCode.GDNewTiledSpriteObjects1= [];
gdjs.introCode.GDNewTiledSpriteObjects2= [];
gdjs.introCode.GDjugarObjects1= [];
gdjs.introCode.GDjugarObjects2= [];
gdjs.introCode.GDjugar1Objects1= [];
gdjs.introCode.GDjugar1Objects2= [];
gdjs.introCode.GDTransitionObjects1= [];
gdjs.introCode.GDTransitionObjects2= [];


gdjs.introCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("jugar1"), gdjs.introCode.GDjugar1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.introCode.GDjugar1Objects1.length;i<l;++i) {
    if ( gdjs.introCode.GDjugar1Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.introCode.GDjugar1Objects1[k] = gdjs.introCode.GDjugar1Objects1[i];
        ++k;
    }
}
gdjs.introCode.GDjugar1Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Overworld", false);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}}

}


};

gdjs.introCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.introCode.GDfondoObjects1.length = 0;
gdjs.introCode.GDfondoObjects2.length = 0;
gdjs.introCode.GDpastor_9595alemanObjects1.length = 0;
gdjs.introCode.GDpastor_9595alemanObjects2.length = 0;
gdjs.introCode.GDgatonegroObjects1.length = 0;
gdjs.introCode.GDgatonegroObjects2.length = 0;
gdjs.introCode.GDperritoObjects1.length = 0;
gdjs.introCode.GDperritoObjects2.length = 0;
gdjs.introCode.GDshitzuObjects1.length = 0;
gdjs.introCode.GDshitzuObjects2.length = 0;
gdjs.introCode.GDsimi1Objects1.length = 0;
gdjs.introCode.GDsimi1Objects2.length = 0;
gdjs.introCode.GDtituloObjects1.length = 0;
gdjs.introCode.GDtituloObjects2.length = 0;
gdjs.introCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.introCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.introCode.GDjugarObjects1.length = 0;
gdjs.introCode.GDjugarObjects2.length = 0;
gdjs.introCode.GDjugar1Objects1.length = 0;
gdjs.introCode.GDjugar1Objects2.length = 0;
gdjs.introCode.GDTransitionObjects1.length = 0;
gdjs.introCode.GDTransitionObjects2.length = 0;

gdjs.introCode.eventsList0(runtimeScene);
gdjs.introCode.GDfondoObjects1.length = 0;
gdjs.introCode.GDfondoObjects2.length = 0;
gdjs.introCode.GDpastor_9595alemanObjects1.length = 0;
gdjs.introCode.GDpastor_9595alemanObjects2.length = 0;
gdjs.introCode.GDgatonegroObjects1.length = 0;
gdjs.introCode.GDgatonegroObjects2.length = 0;
gdjs.introCode.GDperritoObjects1.length = 0;
gdjs.introCode.GDperritoObjects2.length = 0;
gdjs.introCode.GDshitzuObjects1.length = 0;
gdjs.introCode.GDshitzuObjects2.length = 0;
gdjs.introCode.GDsimi1Objects1.length = 0;
gdjs.introCode.GDsimi1Objects2.length = 0;
gdjs.introCode.GDtituloObjects1.length = 0;
gdjs.introCode.GDtituloObjects2.length = 0;
gdjs.introCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.introCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.introCode.GDjugarObjects1.length = 0;
gdjs.introCode.GDjugarObjects2.length = 0;
gdjs.introCode.GDjugar1Objects1.length = 0;
gdjs.introCode.GDjugar1Objects2.length = 0;
gdjs.introCode.GDTransitionObjects1.length = 0;
gdjs.introCode.GDTransitionObjects2.length = 0;


return;

}

gdjs['introCode'] = gdjs.introCode;
