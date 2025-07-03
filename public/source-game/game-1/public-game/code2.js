gdjs.game_32overCode = {};
gdjs.game_32overCode.localVariables = [];
gdjs.game_32overCode.GDbackgroundgoObjects1= [];
gdjs.game_32overCode.GDbackgroundgoObjects2= [];
gdjs.game_32overCode.GDmoradoObjects1= [];
gdjs.game_32overCode.GDmoradoObjects2= [];
gdjs.game_32overCode.GDgameoverObjects1= [];
gdjs.game_32overCode.GDgameoverObjects2= [];
gdjs.game_32overCode.GDsimi_9595tristeObjects1= [];
gdjs.game_32overCode.GDsimi_9595tristeObjects2= [];
gdjs.game_32overCode.GDscore2Objects1= [];
gdjs.game_32overCode.GDscore2Objects2= [];
gdjs.game_32overCode.GDNewTiledSpriteObjects1= [];
gdjs.game_32overCode.GDNewTiledSpriteObjects2= [];
gdjs.game_32overCode.GDreiniciarObjects1= [];
gdjs.game_32overCode.GDreiniciarObjects2= [];
gdjs.game_32overCode.GDscoregoObjects1= [];
gdjs.game_32overCode.GDscoregoObjects2= [];
gdjs.game_32overCode.GDbtnREINICIARObjects1= [];
gdjs.game_32overCode.GDbtnREINICIARObjects2= [];
gdjs.game_32overCode.GDTransitionObjects1= [];
gdjs.game_32overCode.GDTransitionObjects2= [];
gdjs.game_32overCode.GDDarkenObjects1= [];
gdjs.game_32overCode.GDDarkenObjects2= [];


gdjs.game_32overCode.mapOfGDgdjs_9546game_959532overCode_9546GDbtnREINICIARObjects1Objects = Hashtable.newFrom({"btnREINICIAR": gdjs.game_32overCode.GDbtnREINICIARObjects1});
gdjs.game_32overCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("scorego"), gdjs.game_32overCode.GDscoregoObjects1);
{for(var i = 0, len = gdjs.game_32overCode.GDscoregoObjects1.length ;i < len;++i) {
    gdjs.game_32overCode.GDscoregoObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btnREINICIAR"), gdjs.game_32overCode.GDbtnREINICIARObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.game_32overCode.mapOfGDgdjs_9546game_959532overCode_9546GDbtnREINICIARObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.game_32overCode.GDbtnREINICIARObjects1.length;i<l;++i) {
    if ( gdjs.game_32overCode.GDbtnREINICIARObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.game_32overCode.GDbtnREINICIARObjects1[k] = gdjs.game_32overCode.GDbtnREINICIARObjects1[i];
        ++k;
    }
}
gdjs.game_32overCode.GDbtnREINICIARObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.game_32overCode.GDTransitionObjects1);
{for(var i = 0, len = gdjs.game_32overCode.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.game_32overCode.GDTransitionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Circular", "Forward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.game_32overCode.GDTransitionObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.game_32overCode.GDTransitionObjects1.length;i<l;++i) {
    if ( gdjs.game_32overCode.GDTransitionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffectIsEnd((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.game_32overCode.GDTransitionObjects1[k] = gdjs.game_32overCode.GDTransitionObjects1[i];
        ++k;
    }
}
gdjs.game_32overCode.GDTransitionObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};

gdjs.game_32overCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.game_32overCode.GDbackgroundgoObjects1.length = 0;
gdjs.game_32overCode.GDbackgroundgoObjects2.length = 0;
gdjs.game_32overCode.GDmoradoObjects1.length = 0;
gdjs.game_32overCode.GDmoradoObjects2.length = 0;
gdjs.game_32overCode.GDgameoverObjects1.length = 0;
gdjs.game_32overCode.GDgameoverObjects2.length = 0;
gdjs.game_32overCode.GDsimi_9595tristeObjects1.length = 0;
gdjs.game_32overCode.GDsimi_9595tristeObjects2.length = 0;
gdjs.game_32overCode.GDscore2Objects1.length = 0;
gdjs.game_32overCode.GDscore2Objects2.length = 0;
gdjs.game_32overCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.game_32overCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.game_32overCode.GDreiniciarObjects1.length = 0;
gdjs.game_32overCode.GDreiniciarObjects2.length = 0;
gdjs.game_32overCode.GDscoregoObjects1.length = 0;
gdjs.game_32overCode.GDscoregoObjects2.length = 0;
gdjs.game_32overCode.GDbtnREINICIARObjects1.length = 0;
gdjs.game_32overCode.GDbtnREINICIARObjects2.length = 0;
gdjs.game_32overCode.GDTransitionObjects1.length = 0;
gdjs.game_32overCode.GDTransitionObjects2.length = 0;
gdjs.game_32overCode.GDDarkenObjects1.length = 0;
gdjs.game_32overCode.GDDarkenObjects2.length = 0;

gdjs.game_32overCode.eventsList0(runtimeScene);
gdjs.game_32overCode.GDbackgroundgoObjects1.length = 0;
gdjs.game_32overCode.GDbackgroundgoObjects2.length = 0;
gdjs.game_32overCode.GDmoradoObjects1.length = 0;
gdjs.game_32overCode.GDmoradoObjects2.length = 0;
gdjs.game_32overCode.GDgameoverObjects1.length = 0;
gdjs.game_32overCode.GDgameoverObjects2.length = 0;
gdjs.game_32overCode.GDsimi_9595tristeObjects1.length = 0;
gdjs.game_32overCode.GDsimi_9595tristeObjects2.length = 0;
gdjs.game_32overCode.GDscore2Objects1.length = 0;
gdjs.game_32overCode.GDscore2Objects2.length = 0;
gdjs.game_32overCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.game_32overCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.game_32overCode.GDreiniciarObjects1.length = 0;
gdjs.game_32overCode.GDreiniciarObjects2.length = 0;
gdjs.game_32overCode.GDscoregoObjects1.length = 0;
gdjs.game_32overCode.GDscoregoObjects2.length = 0;
gdjs.game_32overCode.GDbtnREINICIARObjects1.length = 0;
gdjs.game_32overCode.GDbtnREINICIARObjects2.length = 0;
gdjs.game_32overCode.GDTransitionObjects1.length = 0;
gdjs.game_32overCode.GDTransitionObjects2.length = 0;
gdjs.game_32overCode.GDDarkenObjects1.length = 0;
gdjs.game_32overCode.GDDarkenObjects2.length = 0;


return;

}

gdjs['game_32overCode'] = gdjs.game_32overCode;
