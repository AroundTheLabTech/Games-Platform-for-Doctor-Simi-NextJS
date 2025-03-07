gdjs.MaxScoreCode = {};
gdjs.MaxScoreCode.localVariables = [];
gdjs.MaxScoreCode.GDMosaicoObjects1= [];
gdjs.MaxScoreCode.GDMosaicoObjects2= [];
gdjs.MaxScoreCode.GDTextPuntosObjects1= [];
gdjs.MaxScoreCode.GDTextPuntosObjects2= [];
gdjs.MaxScoreCode.GDNewSprite3Objects1= [];
gdjs.MaxScoreCode.GDNewSprite3Objects2= [];
gdjs.MaxScoreCode.GDMenuInicioObjects1= [];
gdjs.MaxScoreCode.GDMenuInicioObjects2= [];
gdjs.MaxScoreCode.GDPuntosObjects1= [];
gdjs.MaxScoreCode.GDPuntosObjects2= [];
gdjs.MaxScoreCode.GDTitleObjects1= [];
gdjs.MaxScoreCode.GDTitleObjects2= [];


gdjs.MaxScoreCode.mapOfGDgdjs_9546MaxScoreCode_9546GDMenuInicioObjects1Objects = Hashtable.newFrom({"MenuInicio": gdjs.MaxScoreCode.GDMenuInicioObjects1});
gdjs.MaxScoreCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MenuInicio"), gdjs.MaxScoreCode.GDMenuInicioObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MaxScoreCode.mapOfGDgdjs_9546MaxScoreCode_9546GDMenuInicioObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Puntos"), gdjs.MaxScoreCode.GDPuntosObjects1);
{gdjs.evtTools.storage.readNumberFromJSONFile("datos1", runtimeScene.getGame().getVariables().getFromIndex(1).getAsString(), runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(3));
}{gdjs.evtTools.storage.loadJSONFileFromStorage("datos1");
}{for(var i = 0, len = gdjs.MaxScoreCode.GDPuntosObjects1.length ;i < len;++i) {
    gdjs.MaxScoreCode.GDPuntosObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}}

}


};

gdjs.MaxScoreCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MaxScoreCode.GDMosaicoObjects1.length = 0;
gdjs.MaxScoreCode.GDMosaicoObjects2.length = 0;
gdjs.MaxScoreCode.GDTextPuntosObjects1.length = 0;
gdjs.MaxScoreCode.GDTextPuntosObjects2.length = 0;
gdjs.MaxScoreCode.GDNewSprite3Objects1.length = 0;
gdjs.MaxScoreCode.GDNewSprite3Objects2.length = 0;
gdjs.MaxScoreCode.GDMenuInicioObjects1.length = 0;
gdjs.MaxScoreCode.GDMenuInicioObjects2.length = 0;
gdjs.MaxScoreCode.GDPuntosObjects1.length = 0;
gdjs.MaxScoreCode.GDPuntosObjects2.length = 0;
gdjs.MaxScoreCode.GDTitleObjects1.length = 0;
gdjs.MaxScoreCode.GDTitleObjects2.length = 0;

gdjs.MaxScoreCode.eventsList0(runtimeScene);
gdjs.MaxScoreCode.GDMosaicoObjects1.length = 0;
gdjs.MaxScoreCode.GDMosaicoObjects2.length = 0;
gdjs.MaxScoreCode.GDTextPuntosObjects1.length = 0;
gdjs.MaxScoreCode.GDTextPuntosObjects2.length = 0;
gdjs.MaxScoreCode.GDNewSprite3Objects1.length = 0;
gdjs.MaxScoreCode.GDNewSprite3Objects2.length = 0;
gdjs.MaxScoreCode.GDMenuInicioObjects1.length = 0;
gdjs.MaxScoreCode.GDMenuInicioObjects2.length = 0;
gdjs.MaxScoreCode.GDPuntosObjects1.length = 0;
gdjs.MaxScoreCode.GDPuntosObjects2.length = 0;
gdjs.MaxScoreCode.GDTitleObjects1.length = 0;
gdjs.MaxScoreCode.GDTitleObjects2.length = 0;


return;

}

gdjs['MaxScoreCode'] = gdjs.MaxScoreCode;
