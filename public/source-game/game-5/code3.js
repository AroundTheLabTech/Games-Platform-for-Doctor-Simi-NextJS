gdjs.game_32overCode = {};
gdjs.game_32overCode.localVariables = [];
gdjs.game_32overCode.GDYellowJellyButtonObjects1= [];
gdjs.game_32overCode.GDYellowJellyButtonObjects2= [];
gdjs.game_32overCode.GDMensajeParaJugadorObjects1= [];
gdjs.game_32overCode.GDMensajeParaJugadorObjects2= [];
gdjs.game_32overCode.GDFondoGObjects1= [];
gdjs.game_32overCode.GDFondoGObjects2= [];
gdjs.game_32overCode.GDNewSprite3Objects1= [];
gdjs.game_32overCode.GDNewSprite3Objects2= [];
gdjs.game_32overCode.GDTextPuntosObjects1= [];
gdjs.game_32overCode.GDTextPuntosObjects2= [];
gdjs.game_32overCode.GDPuntosObjects1= [];
gdjs.game_32overCode.GDPuntosObjects2= [];
gdjs.game_32overCode.GDFondoMosaicoGameOverObjects1= [];
gdjs.game_32overCode.GDFondoMosaicoGameOverObjects2= [];
gdjs.game_32overCode.GDTitleGame_9595overObjects1= [];
gdjs.game_32overCode.GDTitleGame_9595overObjects2= [];
gdjs.game_32overCode.GDCloudTwoObjects1= [];
gdjs.game_32overCode.GDCloudTwoObjects2= [];
gdjs.game_32overCode.GDGuardarPuntajeObjects1= [];
gdjs.game_32overCode.GDGuardarPuntajeObjects2= [];


gdjs.game_32overCode.mapOfGDgdjs_9546game_959532overCode_9546GDYellowJellyButtonObjects1Objects = Hashtable.newFrom({"YellowJellyButton": gdjs.game_32overCode.GDYellowJellyButtonObjects1});
gdjs.game_32overCode.mapOfGDgdjs_9546game_959532overCode_9546GDGuardarPuntajeObjects1Objects = Hashtable.newFrom({"GuardarPuntaje": gdjs.game_32overCode.GDGuardarPuntajeObjects1});
gdjs.game_32overCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FondoMosaicoGameOver"), gdjs.game_32overCode.GDFondoMosaicoGameOverObjects1);
{for(var i = 0, len = gdjs.game_32overCode.GDFondoMosaicoGameOverObjects1.length ;i < len;++i) {
    gdjs.game_32overCode.GDFondoMosaicoGameOverObjects1[i].getBehavior("Opacity").setOpacity(150);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.getLayerTimeScale(runtimeScene, "") == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FondoMosaicoGameOver"), gdjs.game_32overCode.GDFondoMosaicoGameOverObjects1);
{for(var i = 0, len = gdjs.game_32overCode.GDFondoMosaicoGameOverObjects1.length ;i < len;++i) {
    gdjs.game_32overCode.GDFondoMosaicoGameOverObjects1[i].setXOffset(gdjs.game_32overCode.GDFondoMosaicoGameOverObjects1[i].getXOffset() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * -(150)));
}
}}

}


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
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Puntos"), gdjs.game_32overCode.GDPuntosObjects1);
{for(var i = 0, len = gdjs.game_32overCode.GDPuntosObjects1.length ;i < len;++i) {
    gdjs.game_32overCode.GDPuntosObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.getLayerTimeScale(runtimeScene, "") == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CloudTwo"), gdjs.game_32overCode.GDCloudTwoObjects1);
{for(var i = 0, len = gdjs.game_32overCode.GDCloudTwoObjects1.length ;i < len;++i) {
    gdjs.game_32overCode.GDCloudTwoObjects1[i].setXOffset(gdjs.game_32overCode.GDCloudTwoObjects1[i].getXOffset() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * -(150)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CloudTwo"), gdjs.game_32overCode.GDCloudTwoObjects1);
{for(var i = 0, len = gdjs.game_32overCode.GDCloudTwoObjects1.length ;i < len;++i) {
    gdjs.game_32overCode.GDCloudTwoObjects1[i].getBehavior("Opacity").setOpacity(200);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GuardarPuntaje"), gdjs.game_32overCode.GDGuardarPuntajeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.game_32overCode.mapOfGDgdjs_9546game_959532overCode_9546GDGuardarPuntajeObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() == runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber());
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.storage.writeNumberInJSONFile("datos1", "MaxScore", runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber());
}{gdjs.evtTools.storage.writeNumberInJSONFile("datos1", "MaxScore", runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber());
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MaxScore", false);
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.storage.loadJSONFileFromStorage("datos1");
}}

}


};

gdjs.game_32overCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.game_32overCode.GDYellowJellyButtonObjects1.length = 0;
gdjs.game_32overCode.GDYellowJellyButtonObjects2.length = 0;
gdjs.game_32overCode.GDMensajeParaJugadorObjects1.length = 0;
gdjs.game_32overCode.GDMensajeParaJugadorObjects2.length = 0;
gdjs.game_32overCode.GDFondoGObjects1.length = 0;
gdjs.game_32overCode.GDFondoGObjects2.length = 0;
gdjs.game_32overCode.GDNewSprite3Objects1.length = 0;
gdjs.game_32overCode.GDNewSprite3Objects2.length = 0;
gdjs.game_32overCode.GDTextPuntosObjects1.length = 0;
gdjs.game_32overCode.GDTextPuntosObjects2.length = 0;
gdjs.game_32overCode.GDPuntosObjects1.length = 0;
gdjs.game_32overCode.GDPuntosObjects2.length = 0;
gdjs.game_32overCode.GDFondoMosaicoGameOverObjects1.length = 0;
gdjs.game_32overCode.GDFondoMosaicoGameOverObjects2.length = 0;
gdjs.game_32overCode.GDTitleGame_9595overObjects1.length = 0;
gdjs.game_32overCode.GDTitleGame_9595overObjects2.length = 0;
gdjs.game_32overCode.GDCloudTwoObjects1.length = 0;
gdjs.game_32overCode.GDCloudTwoObjects2.length = 0;
gdjs.game_32overCode.GDGuardarPuntajeObjects1.length = 0;
gdjs.game_32overCode.GDGuardarPuntajeObjects2.length = 0;

gdjs.game_32overCode.eventsList0(runtimeScene);
gdjs.game_32overCode.GDYellowJellyButtonObjects1.length = 0;
gdjs.game_32overCode.GDYellowJellyButtonObjects2.length = 0;
gdjs.game_32overCode.GDMensajeParaJugadorObjects1.length = 0;
gdjs.game_32overCode.GDMensajeParaJugadorObjects2.length = 0;
gdjs.game_32overCode.GDFondoGObjects1.length = 0;
gdjs.game_32overCode.GDFondoGObjects2.length = 0;
gdjs.game_32overCode.GDNewSprite3Objects1.length = 0;
gdjs.game_32overCode.GDNewSprite3Objects2.length = 0;
gdjs.game_32overCode.GDTextPuntosObjects1.length = 0;
gdjs.game_32overCode.GDTextPuntosObjects2.length = 0;
gdjs.game_32overCode.GDPuntosObjects1.length = 0;
gdjs.game_32overCode.GDPuntosObjects2.length = 0;
gdjs.game_32overCode.GDFondoMosaicoGameOverObjects1.length = 0;
gdjs.game_32overCode.GDFondoMosaicoGameOverObjects2.length = 0;
gdjs.game_32overCode.GDTitleGame_9595overObjects1.length = 0;
gdjs.game_32overCode.GDTitleGame_9595overObjects2.length = 0;
gdjs.game_32overCode.GDCloudTwoObjects1.length = 0;
gdjs.game_32overCode.GDCloudTwoObjects2.length = 0;
gdjs.game_32overCode.GDGuardarPuntajeObjects1.length = 0;
gdjs.game_32overCode.GDGuardarPuntajeObjects2.length = 0;


return;

}

gdjs['game_32overCode'] = gdjs.game_32overCode;
