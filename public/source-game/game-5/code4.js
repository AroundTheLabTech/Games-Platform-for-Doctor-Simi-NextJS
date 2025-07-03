gdjs.MaxScoreCode = {};
gdjs.MaxScoreCode.localVariables = [];
gdjs.MaxScoreCode.GDMosaicoObjects1= [];
gdjs.MaxScoreCode.GDMosaicoObjects2= [];
gdjs.MaxScoreCode.GDMosaicoObjects3= [];
gdjs.MaxScoreCode.GDMosaicoObjects4= [];
gdjs.MaxScoreCode.GDTextPuntosObjects1= [];
gdjs.MaxScoreCode.GDTextPuntosObjects2= [];
gdjs.MaxScoreCode.GDTextPuntosObjects3= [];
gdjs.MaxScoreCode.GDTextPuntosObjects4= [];
gdjs.MaxScoreCode.GDNewSprite3Objects1= [];
gdjs.MaxScoreCode.GDNewSprite3Objects2= [];
gdjs.MaxScoreCode.GDNewSprite3Objects3= [];
gdjs.MaxScoreCode.GDNewSprite3Objects4= [];
gdjs.MaxScoreCode.GDMenuInicioObjects1= [];
gdjs.MaxScoreCode.GDMenuInicioObjects2= [];
gdjs.MaxScoreCode.GDMenuInicioObjects3= [];
gdjs.MaxScoreCode.GDMenuInicioObjects4= [];
gdjs.MaxScoreCode.GDPuntosObjects1= [];
gdjs.MaxScoreCode.GDPuntosObjects2= [];
gdjs.MaxScoreCode.GDPuntosObjects3= [];
gdjs.MaxScoreCode.GDPuntosObjects4= [];
gdjs.MaxScoreCode.GDTitleObjects1= [];
gdjs.MaxScoreCode.GDTitleObjects2= [];
gdjs.MaxScoreCode.GDTitleObjects3= [];
gdjs.MaxScoreCode.GDTitleObjects4= [];
gdjs.MaxScoreCode.GDMusicButtonObjects1= [];
gdjs.MaxScoreCode.GDMusicButtonObjects2= [];
gdjs.MaxScoreCode.GDMusicButtonObjects3= [];
gdjs.MaxScoreCode.GDMusicButtonObjects4= [];
gdjs.MaxScoreCode.GDSoundButtonObjects1= [];
gdjs.MaxScoreCode.GDSoundButtonObjects2= [];
gdjs.MaxScoreCode.GDSoundButtonObjects3= [];
gdjs.MaxScoreCode.GDSoundButtonObjects4= [];


gdjs.MaxScoreCode.mapOfGDgdjs_9546MaxScoreCode_9546GDMenuInicioObjects2Objects = Hashtable.newFrom({"MenuInicio": gdjs.MaxScoreCode.GDMenuInicioObjects2});
gdjs.MaxScoreCode.mapOfGDgdjs_9546MaxScoreCode_9546GDMusicButtonObjects2Objects = Hashtable.newFrom({"MusicButton": gdjs.MaxScoreCode.GDMusicButtonObjects2});
gdjs.MaxScoreCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(2).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.MaxScoreCode.GDMusicButtonObjects2, gdjs.MaxScoreCode.GDMusicButtonObjects3);

{for(var i = 0, len = gdjs.MaxScoreCode.GDMusicButtonObjects3.length ;i < len;++i) {
    gdjs.MaxScoreCode.GDMusicButtonObjects3[i].getBehavior("Animation").setAnimationName("on");
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
/* Reuse gdjs.MaxScoreCode.GDMusicButtonObjects2 */
{for(var i = 0, len = gdjs.MaxScoreCode.GDMusicButtonObjects2.length ;i < len;++i) {
    gdjs.MaxScoreCode.GDMusicButtonObjects2[i].getBehavior("Animation").setAnimationName("off");
}
}{gdjs.evtTools.sound.pauseMusicOnChannel(runtimeScene, 1);
}}

}


};gdjs.MaxScoreCode.mapOfGDgdjs_9546MaxScoreCode_9546GDSoundButtonObjects2Objects = Hashtable.newFrom({"SoundButton": gdjs.MaxScoreCode.GDSoundButtonObjects2});
gdjs.MaxScoreCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(4).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.MaxScoreCode.GDSoundButtonObjects2, gdjs.MaxScoreCode.GDSoundButtonObjects3);

{for(var i = 0, len = gdjs.MaxScoreCode.GDSoundButtonObjects3.length ;i < len;++i) {
    gdjs.MaxScoreCode.GDSoundButtonObjects3[i].getBehavior("Animation").setAnimationName("on1");
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
/* Reuse gdjs.MaxScoreCode.GDSoundButtonObjects2 */
{for(var i = 0, len = gdjs.MaxScoreCode.GDSoundButtonObjects2.length ;i < len;++i) {
    gdjs.MaxScoreCode.GDSoundButtonObjects2[i].getBehavior("Animation").setAnimationName("off1");
}
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}}

}


};gdjs.MaxScoreCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MenuInicio"), gdjs.MaxScoreCode.GDMenuInicioObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MaxScoreCode.mapOfGDgdjs_9546MaxScoreCode_9546GDMenuInicioObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15347412);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "select-sound-121244.mp3", 4, false, 40, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MusicButton"), gdjs.MaxScoreCode.GDMusicButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MaxScoreCode.mapOfGDgdjs_9546MaxScoreCode_9546GDMusicButtonObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15349020);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.toggleVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2));
}
{ //Subevents
gdjs.MaxScoreCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SoundButton"), gdjs.MaxScoreCode.GDSoundButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MaxScoreCode.mapOfGDgdjs_9546MaxScoreCode_9546GDSoundButtonObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.toggleVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(4));
}
{ //Subevents
gdjs.MaxScoreCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.MaxScoreCode.eventsList3 = function(runtimeScene) {

{


gdjs.MaxScoreCode.eventsList2(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Puntos"), gdjs.MaxScoreCode.GDPuntosObjects1);
{gdjs.evtTools.storage.readNumberFromJSONFile("Storage", "Storage", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(3));
}{for(var i = 0, len = gdjs.MaxScoreCode.GDPuntosObjects1.length ;i < len;++i) {
    gdjs.MaxScoreCode.GDPuntosObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber()));
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.MaxScoreCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MaxScoreCode.GDMosaicoObjects1.length = 0;
gdjs.MaxScoreCode.GDMosaicoObjects2.length = 0;
gdjs.MaxScoreCode.GDMosaicoObjects3.length = 0;
gdjs.MaxScoreCode.GDMosaicoObjects4.length = 0;
gdjs.MaxScoreCode.GDTextPuntosObjects1.length = 0;
gdjs.MaxScoreCode.GDTextPuntosObjects2.length = 0;
gdjs.MaxScoreCode.GDTextPuntosObjects3.length = 0;
gdjs.MaxScoreCode.GDTextPuntosObjects4.length = 0;
gdjs.MaxScoreCode.GDNewSprite3Objects1.length = 0;
gdjs.MaxScoreCode.GDNewSprite3Objects2.length = 0;
gdjs.MaxScoreCode.GDNewSprite3Objects3.length = 0;
gdjs.MaxScoreCode.GDNewSprite3Objects4.length = 0;
gdjs.MaxScoreCode.GDMenuInicioObjects1.length = 0;
gdjs.MaxScoreCode.GDMenuInicioObjects2.length = 0;
gdjs.MaxScoreCode.GDMenuInicioObjects3.length = 0;
gdjs.MaxScoreCode.GDMenuInicioObjects4.length = 0;
gdjs.MaxScoreCode.GDPuntosObjects1.length = 0;
gdjs.MaxScoreCode.GDPuntosObjects2.length = 0;
gdjs.MaxScoreCode.GDPuntosObjects3.length = 0;
gdjs.MaxScoreCode.GDPuntosObjects4.length = 0;
gdjs.MaxScoreCode.GDTitleObjects1.length = 0;
gdjs.MaxScoreCode.GDTitleObjects2.length = 0;
gdjs.MaxScoreCode.GDTitleObjects3.length = 0;
gdjs.MaxScoreCode.GDTitleObjects4.length = 0;
gdjs.MaxScoreCode.GDMusicButtonObjects1.length = 0;
gdjs.MaxScoreCode.GDMusicButtonObjects2.length = 0;
gdjs.MaxScoreCode.GDMusicButtonObjects3.length = 0;
gdjs.MaxScoreCode.GDMusicButtonObjects4.length = 0;
gdjs.MaxScoreCode.GDSoundButtonObjects1.length = 0;
gdjs.MaxScoreCode.GDSoundButtonObjects2.length = 0;
gdjs.MaxScoreCode.GDSoundButtonObjects3.length = 0;
gdjs.MaxScoreCode.GDSoundButtonObjects4.length = 0;

gdjs.MaxScoreCode.eventsList3(runtimeScene);
gdjs.MaxScoreCode.GDMosaicoObjects1.length = 0;
gdjs.MaxScoreCode.GDMosaicoObjects2.length = 0;
gdjs.MaxScoreCode.GDMosaicoObjects3.length = 0;
gdjs.MaxScoreCode.GDMosaicoObjects4.length = 0;
gdjs.MaxScoreCode.GDTextPuntosObjects1.length = 0;
gdjs.MaxScoreCode.GDTextPuntosObjects2.length = 0;
gdjs.MaxScoreCode.GDTextPuntosObjects3.length = 0;
gdjs.MaxScoreCode.GDTextPuntosObjects4.length = 0;
gdjs.MaxScoreCode.GDNewSprite3Objects1.length = 0;
gdjs.MaxScoreCode.GDNewSprite3Objects2.length = 0;
gdjs.MaxScoreCode.GDNewSprite3Objects3.length = 0;
gdjs.MaxScoreCode.GDNewSprite3Objects4.length = 0;
gdjs.MaxScoreCode.GDMenuInicioObjects1.length = 0;
gdjs.MaxScoreCode.GDMenuInicioObjects2.length = 0;
gdjs.MaxScoreCode.GDMenuInicioObjects3.length = 0;
gdjs.MaxScoreCode.GDMenuInicioObjects4.length = 0;
gdjs.MaxScoreCode.GDPuntosObjects1.length = 0;
gdjs.MaxScoreCode.GDPuntosObjects2.length = 0;
gdjs.MaxScoreCode.GDPuntosObjects3.length = 0;
gdjs.MaxScoreCode.GDPuntosObjects4.length = 0;
gdjs.MaxScoreCode.GDTitleObjects1.length = 0;
gdjs.MaxScoreCode.GDTitleObjects2.length = 0;
gdjs.MaxScoreCode.GDTitleObjects3.length = 0;
gdjs.MaxScoreCode.GDTitleObjects4.length = 0;
gdjs.MaxScoreCode.GDMusicButtonObjects1.length = 0;
gdjs.MaxScoreCode.GDMusicButtonObjects2.length = 0;
gdjs.MaxScoreCode.GDMusicButtonObjects3.length = 0;
gdjs.MaxScoreCode.GDMusicButtonObjects4.length = 0;
gdjs.MaxScoreCode.GDSoundButtonObjects1.length = 0;
gdjs.MaxScoreCode.GDSoundButtonObjects2.length = 0;
gdjs.MaxScoreCode.GDSoundButtonObjects3.length = 0;
gdjs.MaxScoreCode.GDSoundButtonObjects4.length = 0;


return;

}

gdjs['MaxScoreCode'] = gdjs.MaxScoreCode;
