gdjs.game_32overCode = {};
gdjs.game_32overCode.localVariables = [];
gdjs.game_32overCode.GDNewSpriteObjects1= [];
gdjs.game_32overCode.GDNewSpriteObjects2= [];
gdjs.game_32overCode.GDNewSprite2Objects1= [];
gdjs.game_32overCode.GDNewSprite2Objects2= [];
gdjs.game_32overCode.GDYellowJellyButtonObjects1= [];
gdjs.game_32overCode.GDYellowJellyButtonObjects2= [];
gdjs.game_32overCode.GDNewTextObjects1= [];
gdjs.game_32overCode.GDNewTextObjects2= [];
gdjs.game_32overCode.GDFondoGObjects1= [];
gdjs.game_32overCode.GDFondoGObjects2= [];
gdjs.game_32overCode.GDNewSprite3Objects1= [];
gdjs.game_32overCode.GDNewSprite3Objects2= [];


gdjs.game_32overCode.mapOfGDgdjs_9546game_959532overCode_9546GDYellowJellyButtonObjects1Objects = Hashtable.newFrom({"YellowJellyButton": gdjs.game_32overCode.GDYellowJellyButtonObjects1});
gdjs.game_32overCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("YellowJellyButton"), gdjs.game_32overCode.GDYellowJellyButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.game_32overCode.mapOfGDgdjs_9546game_959532overCode_9546GDYellowJellyButtonObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(3);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}}

}


};

gdjs.game_32overCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.game_32overCode.GDNewSpriteObjects1.length = 0;
gdjs.game_32overCode.GDNewSpriteObjects2.length = 0;
gdjs.game_32overCode.GDNewSprite2Objects1.length = 0;
gdjs.game_32overCode.GDNewSprite2Objects2.length = 0;
gdjs.game_32overCode.GDYellowJellyButtonObjects1.length = 0;
gdjs.game_32overCode.GDYellowJellyButtonObjects2.length = 0;
gdjs.game_32overCode.GDNewTextObjects1.length = 0;
gdjs.game_32overCode.GDNewTextObjects2.length = 0;
gdjs.game_32overCode.GDFondoGObjects1.length = 0;
gdjs.game_32overCode.GDFondoGObjects2.length = 0;
gdjs.game_32overCode.GDNewSprite3Objects1.length = 0;
gdjs.game_32overCode.GDNewSprite3Objects2.length = 0;

gdjs.game_32overCode.eventsList0(runtimeScene);
gdjs.game_32overCode.GDNewSpriteObjects1.length = 0;
gdjs.game_32overCode.GDNewSpriteObjects2.length = 0;
gdjs.game_32overCode.GDNewSprite2Objects1.length = 0;
gdjs.game_32overCode.GDNewSprite2Objects2.length = 0;
gdjs.game_32overCode.GDYellowJellyButtonObjects1.length = 0;
gdjs.game_32overCode.GDYellowJellyButtonObjects2.length = 0;
gdjs.game_32overCode.GDNewTextObjects1.length = 0;
gdjs.game_32overCode.GDNewTextObjects2.length = 0;
gdjs.game_32overCode.GDFondoGObjects1.length = 0;
gdjs.game_32overCode.GDFondoGObjects2.length = 0;
gdjs.game_32overCode.GDNewSprite3Objects1.length = 0;
gdjs.game_32overCode.GDNewSprite3Objects2.length = 0;


return;

}

gdjs['game_32overCode'] = gdjs.game_32overCode;
