gdjs.game_32overCode = {};
gdjs.game_32overCode.localVariables = [];
gdjs.game_32overCode.GDYellowJellyButtonObjects1= [];
gdjs.game_32overCode.GDYellowJellyButtonObjects2= [];
gdjs.game_32overCode.GDYellowJellyButtonObjects3= [];
gdjs.game_32overCode.GDYellowJellyButtonObjects4= [];
gdjs.game_32overCode.GDMensajeParaJugadorObjects1= [];
gdjs.game_32overCode.GDMensajeParaJugadorObjects2= [];
gdjs.game_32overCode.GDMensajeParaJugadorObjects3= [];
gdjs.game_32overCode.GDMensajeParaJugadorObjects4= [];
gdjs.game_32overCode.GDFondoGObjects1= [];
gdjs.game_32overCode.GDFondoGObjects2= [];
gdjs.game_32overCode.GDFondoGObjects3= [];
gdjs.game_32overCode.GDFondoGObjects4= [];
gdjs.game_32overCode.GDNewSprite3Objects1= [];
gdjs.game_32overCode.GDNewSprite3Objects2= [];
gdjs.game_32overCode.GDNewSprite3Objects3= [];
gdjs.game_32overCode.GDNewSprite3Objects4= [];
gdjs.game_32overCode.GDTextPuntosObjects1= [];
gdjs.game_32overCode.GDTextPuntosObjects2= [];
gdjs.game_32overCode.GDTextPuntosObjects3= [];
gdjs.game_32overCode.GDTextPuntosObjects4= [];
gdjs.game_32overCode.GDPuntosObjects1= [];
gdjs.game_32overCode.GDPuntosObjects2= [];
gdjs.game_32overCode.GDPuntosObjects3= [];
gdjs.game_32overCode.GDPuntosObjects4= [];
gdjs.game_32overCode.GDFondoMosaicoGameOverObjects1= [];
gdjs.game_32overCode.GDFondoMosaicoGameOverObjects2= [];
gdjs.game_32overCode.GDFondoMosaicoGameOverObjects3= [];
gdjs.game_32overCode.GDFondoMosaicoGameOverObjects4= [];
gdjs.game_32overCode.GDTitleGame_9595overObjects1= [];
gdjs.game_32overCode.GDTitleGame_9595overObjects2= [];
gdjs.game_32overCode.GDTitleGame_9595overObjects3= [];
gdjs.game_32overCode.GDTitleGame_9595overObjects4= [];
gdjs.game_32overCode.GDCloudTwoObjects1= [];
gdjs.game_32overCode.GDCloudTwoObjects2= [];
gdjs.game_32overCode.GDCloudTwoObjects3= [];
gdjs.game_32overCode.GDCloudTwoObjects4= [];
gdjs.game_32overCode.GDGuardarPuntajeObjects1= [];
gdjs.game_32overCode.GDGuardarPuntajeObjects2= [];
gdjs.game_32overCode.GDGuardarPuntajeObjects3= [];
gdjs.game_32overCode.GDGuardarPuntajeObjects4= [];
gdjs.game_32overCode.GDMusicButtonObjects1= [];
gdjs.game_32overCode.GDMusicButtonObjects2= [];
gdjs.game_32overCode.GDMusicButtonObjects3= [];
gdjs.game_32overCode.GDMusicButtonObjects4= [];
gdjs.game_32overCode.GDSoundButtonObjects1= [];
gdjs.game_32overCode.GDSoundButtonObjects2= [];
gdjs.game_32overCode.GDSoundButtonObjects3= [];
gdjs.game_32overCode.GDSoundButtonObjects4= [];


gdjs.game_32overCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FondoMosaicoGameOver"), gdjs.game_32overCode.GDFondoMosaicoGameOverObjects2);
{for(var i = 0, len = gdjs.game_32overCode.GDFondoMosaicoGameOverObjects2.length ;i < len;++i) {
    gdjs.game_32overCode.GDFondoMosaicoGameOverObjects2[i].getBehavior("Opacity").setOpacity(150);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.getLayerTimeScale(runtimeScene, "") == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FondoMosaicoGameOver"), gdjs.game_32overCode.GDFondoMosaicoGameOverObjects2);
{for(var i = 0, len = gdjs.game_32overCode.GDFondoMosaicoGameOverObjects2.length ;i < len;++i) {
    gdjs.game_32overCode.GDFondoMosaicoGameOverObjects2[i].setXOffset(gdjs.game_32overCode.GDFondoMosaicoGameOverObjects2[i].getXOffset() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * -(150)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CloudTwo"), gdjs.game_32overCode.GDCloudTwoObjects2);
{for(var i = 0, len = gdjs.game_32overCode.GDCloudTwoObjects2.length ;i < len;++i) {
    gdjs.game_32overCode.GDCloudTwoObjects2[i].getBehavior("Opacity").setOpacity(200);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.getLayerTimeScale(runtimeScene, "") == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CloudTwo"), gdjs.game_32overCode.GDCloudTwoObjects2);
{for(var i = 0, len = gdjs.game_32overCode.GDCloudTwoObjects2.length ;i < len;++i) {
    gdjs.game_32overCode.GDCloudTwoObjects2[i].setXOffset(gdjs.game_32overCode.GDCloudTwoObjects2[i].getXOffset() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * -(150)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Puntos"), gdjs.game_32overCode.GDPuntosObjects1);
{gdjs.evtTools.storage.readNumberFromJSONFile("Storage", "Storage", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(3));
}{for(var i = 0, len = gdjs.game_32overCode.GDPuntosObjects1.length ;i < len;++i) {
    gdjs.game_32overCode.GDPuntosObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber()));
}
}}

}


};gdjs.game_32overCode.mapOfGDgdjs_9546game_959532overCode_9546GDGuardarPuntajeObjects2Objects = Hashtable.newFrom({"GuardarPuntaje": gdjs.game_32overCode.GDGuardarPuntajeObjects2});
gdjs.game_32overCode.mapOfGDgdjs_9546game_959532overCode_9546GDYellowJellyButtonObjects2Objects = Hashtable.newFrom({"YellowJellyButton": gdjs.game_32overCode.GDYellowJellyButtonObjects2});
gdjs.game_32overCode.mapOfGDgdjs_9546game_959532overCode_9546GDMusicButtonObjects2Objects = Hashtable.newFrom({"MusicButton": gdjs.game_32overCode.GDMusicButtonObjects2});
gdjs.game_32overCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(2).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.game_32overCode.GDMusicButtonObjects2, gdjs.game_32overCode.GDMusicButtonObjects3);

{for(var i = 0, len = gdjs.game_32overCode.GDMusicButtonObjects3.length ;i < len;++i) {
    gdjs.game_32overCode.GDMusicButtonObjects3[i].getBehavior("Animation").setAnimationName("on");
}
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "funny-bgm-240795.mp3", 1, true, 50, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(2).getAsBoolean();
}
if (isConditionTrue_0) {
/* Reuse gdjs.game_32overCode.GDMusicButtonObjects2 */
{for(var i = 0, len = gdjs.game_32overCode.GDMusicButtonObjects2.length ;i < len;++i) {
    gdjs.game_32overCode.GDMusicButtonObjects2[i].getBehavior("Animation").setAnimationName("off");
}
}{gdjs.evtTools.sound.pauseMusicOnChannel(runtimeScene, 1);
}}

}


};gdjs.game_32overCode.mapOfGDgdjs_9546game_959532overCode_9546GDSoundButtonObjects2Objects = Hashtable.newFrom({"SoundButton": gdjs.game_32overCode.GDSoundButtonObjects2});
gdjs.game_32overCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(4).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.game_32overCode.GDSoundButtonObjects2, gdjs.game_32overCode.GDSoundButtonObjects3);

{for(var i = 0, len = gdjs.game_32overCode.GDSoundButtonObjects3.length ;i < len;++i) {
    gdjs.game_32overCode.GDSoundButtonObjects3[i].getBehavior("Animation").setAnimationName("on1");
}
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 50);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(4).getAsBoolean();
}
if (isConditionTrue_0) {
/* Reuse gdjs.game_32overCode.GDSoundButtonObjects2 */
{for(var i = 0, len = gdjs.game_32overCode.GDSoundButtonObjects2.length ;i < len;++i) {
    gdjs.game_32overCode.GDSoundButtonObjects2[i].getBehavior("Animation").setAnimationName("off1");
}
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}}

}


};gdjs.game_32overCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("GuardarPuntaje"), gdjs.game_32overCode.GDGuardarPuntajeObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.game_32overCode.mapOfGDgdjs_9546game_959532overCode_9546GDGuardarPuntajeObjects2Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "select-sound-121244.mp3", 3, false, 40, 1);
}{gdjs.evtTools.storage.writeNumberInJSONFile("Storage", "Storage", runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber());
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MaxScore", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("YellowJellyButton"), gdjs.game_32overCode.GDYellowJellyButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.game_32overCode.mapOfGDgdjs_9546game_959532overCode_9546GDYellowJellyButtonObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15304940);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "select-sound-121244.mp3", 3, false, 40, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MusicButton"), gdjs.game_32overCode.GDMusicButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.game_32overCode.mapOfGDgdjs_9546game_959532overCode_9546GDMusicButtonObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15306428);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.toggleVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2));
}
{ //Subevents
gdjs.game_32overCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SoundButton"), gdjs.game_32overCode.GDSoundButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.game_32overCode.mapOfGDgdjs_9546game_959532overCode_9546GDSoundButtonObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.toggleVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(4));
}
{ //Subevents
gdjs.game_32overCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.game_32overCode.eventsList4 = function(runtimeScene) {

{


gdjs.game_32overCode.eventsList0(runtimeScene);
}


{


gdjs.game_32overCode.eventsList3(runtimeScene);
}


};

gdjs.game_32overCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.game_32overCode.GDYellowJellyButtonObjects1.length = 0;
gdjs.game_32overCode.GDYellowJellyButtonObjects2.length = 0;
gdjs.game_32overCode.GDYellowJellyButtonObjects3.length = 0;
gdjs.game_32overCode.GDYellowJellyButtonObjects4.length = 0;
gdjs.game_32overCode.GDMensajeParaJugadorObjects1.length = 0;
gdjs.game_32overCode.GDMensajeParaJugadorObjects2.length = 0;
gdjs.game_32overCode.GDMensajeParaJugadorObjects3.length = 0;
gdjs.game_32overCode.GDMensajeParaJugadorObjects4.length = 0;
gdjs.game_32overCode.GDFondoGObjects1.length = 0;
gdjs.game_32overCode.GDFondoGObjects2.length = 0;
gdjs.game_32overCode.GDFondoGObjects3.length = 0;
gdjs.game_32overCode.GDFondoGObjects4.length = 0;
gdjs.game_32overCode.GDNewSprite3Objects1.length = 0;
gdjs.game_32overCode.GDNewSprite3Objects2.length = 0;
gdjs.game_32overCode.GDNewSprite3Objects3.length = 0;
gdjs.game_32overCode.GDNewSprite3Objects4.length = 0;
gdjs.game_32overCode.GDTextPuntosObjects1.length = 0;
gdjs.game_32overCode.GDTextPuntosObjects2.length = 0;
gdjs.game_32overCode.GDTextPuntosObjects3.length = 0;
gdjs.game_32overCode.GDTextPuntosObjects4.length = 0;
gdjs.game_32overCode.GDPuntosObjects1.length = 0;
gdjs.game_32overCode.GDPuntosObjects2.length = 0;
gdjs.game_32overCode.GDPuntosObjects3.length = 0;
gdjs.game_32overCode.GDPuntosObjects4.length = 0;
gdjs.game_32overCode.GDFondoMosaicoGameOverObjects1.length = 0;
gdjs.game_32overCode.GDFondoMosaicoGameOverObjects2.length = 0;
gdjs.game_32overCode.GDFondoMosaicoGameOverObjects3.length = 0;
gdjs.game_32overCode.GDFondoMosaicoGameOverObjects4.length = 0;
gdjs.game_32overCode.GDTitleGame_9595overObjects1.length = 0;
gdjs.game_32overCode.GDTitleGame_9595overObjects2.length = 0;
gdjs.game_32overCode.GDTitleGame_9595overObjects3.length = 0;
gdjs.game_32overCode.GDTitleGame_9595overObjects4.length = 0;
gdjs.game_32overCode.GDCloudTwoObjects1.length = 0;
gdjs.game_32overCode.GDCloudTwoObjects2.length = 0;
gdjs.game_32overCode.GDCloudTwoObjects3.length = 0;
gdjs.game_32overCode.GDCloudTwoObjects4.length = 0;
gdjs.game_32overCode.GDGuardarPuntajeObjects1.length = 0;
gdjs.game_32overCode.GDGuardarPuntajeObjects2.length = 0;
gdjs.game_32overCode.GDGuardarPuntajeObjects3.length = 0;
gdjs.game_32overCode.GDGuardarPuntajeObjects4.length = 0;
gdjs.game_32overCode.GDMusicButtonObjects1.length = 0;
gdjs.game_32overCode.GDMusicButtonObjects2.length = 0;
gdjs.game_32overCode.GDMusicButtonObjects3.length = 0;
gdjs.game_32overCode.GDMusicButtonObjects4.length = 0;
gdjs.game_32overCode.GDSoundButtonObjects1.length = 0;
gdjs.game_32overCode.GDSoundButtonObjects2.length = 0;
gdjs.game_32overCode.GDSoundButtonObjects3.length = 0;
gdjs.game_32overCode.GDSoundButtonObjects4.length = 0;

gdjs.game_32overCode.eventsList4(runtimeScene);
gdjs.game_32overCode.GDYellowJellyButtonObjects1.length = 0;
gdjs.game_32overCode.GDYellowJellyButtonObjects2.length = 0;
gdjs.game_32overCode.GDYellowJellyButtonObjects3.length = 0;
gdjs.game_32overCode.GDYellowJellyButtonObjects4.length = 0;
gdjs.game_32overCode.GDMensajeParaJugadorObjects1.length = 0;
gdjs.game_32overCode.GDMensajeParaJugadorObjects2.length = 0;
gdjs.game_32overCode.GDMensajeParaJugadorObjects3.length = 0;
gdjs.game_32overCode.GDMensajeParaJugadorObjects4.length = 0;
gdjs.game_32overCode.GDFondoGObjects1.length = 0;
gdjs.game_32overCode.GDFondoGObjects2.length = 0;
gdjs.game_32overCode.GDFondoGObjects3.length = 0;
gdjs.game_32overCode.GDFondoGObjects4.length = 0;
gdjs.game_32overCode.GDNewSprite3Objects1.length = 0;
gdjs.game_32overCode.GDNewSprite3Objects2.length = 0;
gdjs.game_32overCode.GDNewSprite3Objects3.length = 0;
gdjs.game_32overCode.GDNewSprite3Objects4.length = 0;
gdjs.game_32overCode.GDTextPuntosObjects1.length = 0;
gdjs.game_32overCode.GDTextPuntosObjects2.length = 0;
gdjs.game_32overCode.GDTextPuntosObjects3.length = 0;
gdjs.game_32overCode.GDTextPuntosObjects4.length = 0;
gdjs.game_32overCode.GDPuntosObjects1.length = 0;
gdjs.game_32overCode.GDPuntosObjects2.length = 0;
gdjs.game_32overCode.GDPuntosObjects3.length = 0;
gdjs.game_32overCode.GDPuntosObjects4.length = 0;
gdjs.game_32overCode.GDFondoMosaicoGameOverObjects1.length = 0;
gdjs.game_32overCode.GDFondoMosaicoGameOverObjects2.length = 0;
gdjs.game_32overCode.GDFondoMosaicoGameOverObjects3.length = 0;
gdjs.game_32overCode.GDFondoMosaicoGameOverObjects4.length = 0;
gdjs.game_32overCode.GDTitleGame_9595overObjects1.length = 0;
gdjs.game_32overCode.GDTitleGame_9595overObjects2.length = 0;
gdjs.game_32overCode.GDTitleGame_9595overObjects3.length = 0;
gdjs.game_32overCode.GDTitleGame_9595overObjects4.length = 0;
gdjs.game_32overCode.GDCloudTwoObjects1.length = 0;
gdjs.game_32overCode.GDCloudTwoObjects2.length = 0;
gdjs.game_32overCode.GDCloudTwoObjects3.length = 0;
gdjs.game_32overCode.GDCloudTwoObjects4.length = 0;
gdjs.game_32overCode.GDGuardarPuntajeObjects1.length = 0;
gdjs.game_32overCode.GDGuardarPuntajeObjects2.length = 0;
gdjs.game_32overCode.GDGuardarPuntajeObjects3.length = 0;
gdjs.game_32overCode.GDGuardarPuntajeObjects4.length = 0;
gdjs.game_32overCode.GDMusicButtonObjects1.length = 0;
gdjs.game_32overCode.GDMusicButtonObjects2.length = 0;
gdjs.game_32overCode.GDMusicButtonObjects3.length = 0;
gdjs.game_32overCode.GDMusicButtonObjects4.length = 0;
gdjs.game_32overCode.GDSoundButtonObjects1.length = 0;
gdjs.game_32overCode.GDSoundButtonObjects2.length = 0;
gdjs.game_32overCode.GDSoundButtonObjects3.length = 0;
gdjs.game_32overCode.GDSoundButtonObjects4.length = 0;


return;

}

gdjs['game_32overCode'] = gdjs.game_32overCode;
