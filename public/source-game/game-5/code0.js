gdjs.MenuCode = {};
gdjs.MenuCode.localVariables = [];
gdjs.MenuCode.GDFondoAObjects1= [];
gdjs.MenuCode.GDFondoAObjects2= [];
gdjs.MenuCode.GDFondoAObjects3= [];
gdjs.MenuCode.GDFondoAObjects4= [];
gdjs.MenuCode.GDTitleObjects1= [];
gdjs.MenuCode.GDTitleObjects2= [];
gdjs.MenuCode.GDTitleObjects3= [];
gdjs.MenuCode.GDTitleObjects4= [];
gdjs.MenuCode.GDLogoObjects1= [];
gdjs.MenuCode.GDLogoObjects2= [];
gdjs.MenuCode.GDLogoObjects3= [];
gdjs.MenuCode.GDLogoObjects4= [];
gdjs.MenuCode.GDBotonJugarObjects1= [];
gdjs.MenuCode.GDBotonJugarObjects2= [];
gdjs.MenuCode.GDBotonJugarObjects3= [];
gdjs.MenuCode.GDBotonJugarObjects4= [];
gdjs.MenuCode.GDInstruccionesObjects1= [];
gdjs.MenuCode.GDInstruccionesObjects2= [];
gdjs.MenuCode.GDInstruccionesObjects3= [];
gdjs.MenuCode.GDInstruccionesObjects4= [];
gdjs.MenuCode.GDNuevoLogoObjects1= [];
gdjs.MenuCode.GDNuevoLogoObjects2= [];
gdjs.MenuCode.GDNuevoLogoObjects3= [];
gdjs.MenuCode.GDNuevoLogoObjects4= [];
gdjs.MenuCode.GDcloudoOneObjects1= [];
gdjs.MenuCode.GDcloudoOneObjects2= [];
gdjs.MenuCode.GDcloudoOneObjects3= [];
gdjs.MenuCode.GDcloudoOneObjects4= [];
gdjs.MenuCode.GDGuardarPuntajeObjects1= [];
gdjs.MenuCode.GDGuardarPuntajeObjects2= [];
gdjs.MenuCode.GDGuardarPuntajeObjects3= [];
gdjs.MenuCode.GDGuardarPuntajeObjects4= [];
gdjs.MenuCode.GDMusicButtonObjects1= [];
gdjs.MenuCode.GDMusicButtonObjects2= [];
gdjs.MenuCode.GDMusicButtonObjects3= [];
gdjs.MenuCode.GDMusicButtonObjects4= [];
gdjs.MenuCode.GDSoundButtonObjects1= [];
gdjs.MenuCode.GDSoundButtonObjects2= [];
gdjs.MenuCode.GDSoundButtonObjects3= [];
gdjs.MenuCode.GDSoundButtonObjects4= [];


gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18846868);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.setAdaptGameResolutionAtRuntime(runtimeScene, true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(2).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18847356);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "funny-bgm-240795.mp3", 1, true, 50, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "funny-bgm-240795.mp3", 1, true, 50, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cloudoOne"), gdjs.MenuCode.GDcloudoOneObjects2);
{for(var i = 0, len = gdjs.MenuCode.GDcloudoOneObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDcloudoOneObjects2[i].getBehavior("Opacity").setOpacity(180);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.getLayerTimeScale(runtimeScene, "") == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cloudoOne"), gdjs.MenuCode.GDcloudoOneObjects2);
{for(var i = 0, len = gdjs.MenuCode.GDcloudoOneObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDcloudoOneObjects2[i].setYOffset(gdjs.MenuCode.GDcloudoOneObjects2[i].getYOffset() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * -(150)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GuardarPuntaje"), gdjs.MenuCode.GDGuardarPuntajeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDGuardarPuntajeObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDGuardarPuntajeObjects1[i].behaviorActivated("ButtonFSM") ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDGuardarPuntajeObjects1[k] = gdjs.MenuCode.GDGuardarPuntajeObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDGuardarPuntajeObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDGuardarPuntajeObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDGuardarPuntajeObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDGuardarPuntajeObjects1[i].hide();
}
}}

}


};gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDBotonJugarObjects2Objects = Hashtable.newFrom({"BotonJugar": gdjs.MenuCode.GDBotonJugarObjects2});
gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDInstruccionesObjects2Objects = Hashtable.newFrom({"Instrucciones": gdjs.MenuCode.GDInstruccionesObjects2});
gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDMusicButtonObjects2Objects = Hashtable.newFrom({"MusicButton": gdjs.MenuCode.GDMusicButtonObjects2});
gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(2).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.MenuCode.GDMusicButtonObjects2, gdjs.MenuCode.GDMusicButtonObjects3);

{for(var i = 0, len = gdjs.MenuCode.GDMusicButtonObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDMusicButtonObjects3[i].getBehavior("Animation").setAnimationName("on");
}
}{gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(2).getAsBoolean();
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDMusicButtonObjects2 */
{for(var i = 0, len = gdjs.MenuCode.GDMusicButtonObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMusicButtonObjects2[i].getBehavior("Animation").setAnimationName("off");
}
}{gdjs.evtTools.sound.pauseMusicOnChannel(runtimeScene, 1);
}}

}


};gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDSoundButtonObjects2Objects = Hashtable.newFrom({"SoundButton": gdjs.MenuCode.GDSoundButtonObjects2});
gdjs.MenuCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BotonJugar"), gdjs.MenuCode.GDBotonJugarObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDBotonJugarObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18850700);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Jugar", false);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "select-sound-121244.mp3", 3, false, 50, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Instrucciones"), gdjs.MenuCode.GDInstruccionesObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDInstruccionesObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18852452);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "instrucciones", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MusicButton"), gdjs.MenuCode.GDMusicButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDMusicButtonObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18853420);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.toggleVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2));
}
{ //Subevents
gdjs.MenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SoundButton"), gdjs.MenuCode.GDSoundButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDSoundButtonObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.toggleVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(4));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(4).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SoundButton"), gdjs.MenuCode.GDSoundButtonObjects2);
{for(var i = 0, len = gdjs.MenuCode.GDSoundButtonObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDSoundButtonObjects2[i].getBehavior("Animation").setAnimationName("off1");
}
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(4).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SoundButton"), gdjs.MenuCode.GDSoundButtonObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDSoundButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDSoundButtonObjects1[i].getBehavior("Animation").setAnimationName("on1");
}
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 50);
}}

}


};gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDGuardarPuntajeObjects1Objects = Hashtable.newFrom({"GuardarPuntaje": gdjs.MenuCode.GDGuardarPuntajeObjects1});
gdjs.MenuCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("GuardarPuntaje"), gdjs.MenuCode.GDGuardarPuntajeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDGuardarPuntajeObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "select-sound-121244.mp3", 3, false, 40, 1);
}{gdjs.evtTools.storage.readNumberFromJSONFile("Storage", "Storage", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(3));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MaxScore", false);
}}

}


};gdjs.MenuCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(3);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}}

}


};gdjs.MenuCode.eventsList5 = function(runtimeScene) {

{


gdjs.MenuCode.eventsList0(runtimeScene);
}


{


gdjs.MenuCode.eventsList2(runtimeScene);
}


{


gdjs.MenuCode.eventsList3(runtimeScene);
}


{


gdjs.MenuCode.eventsList4(runtimeScene);
}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDFondoAObjects1.length = 0;
gdjs.MenuCode.GDFondoAObjects2.length = 0;
gdjs.MenuCode.GDFondoAObjects3.length = 0;
gdjs.MenuCode.GDFondoAObjects4.length = 0;
gdjs.MenuCode.GDTitleObjects1.length = 0;
gdjs.MenuCode.GDTitleObjects2.length = 0;
gdjs.MenuCode.GDTitleObjects3.length = 0;
gdjs.MenuCode.GDTitleObjects4.length = 0;
gdjs.MenuCode.GDLogoObjects1.length = 0;
gdjs.MenuCode.GDLogoObjects2.length = 0;
gdjs.MenuCode.GDLogoObjects3.length = 0;
gdjs.MenuCode.GDLogoObjects4.length = 0;
gdjs.MenuCode.GDBotonJugarObjects1.length = 0;
gdjs.MenuCode.GDBotonJugarObjects2.length = 0;
gdjs.MenuCode.GDBotonJugarObjects3.length = 0;
gdjs.MenuCode.GDBotonJugarObjects4.length = 0;
gdjs.MenuCode.GDInstruccionesObjects1.length = 0;
gdjs.MenuCode.GDInstruccionesObjects2.length = 0;
gdjs.MenuCode.GDInstruccionesObjects3.length = 0;
gdjs.MenuCode.GDInstruccionesObjects4.length = 0;
gdjs.MenuCode.GDNuevoLogoObjects1.length = 0;
gdjs.MenuCode.GDNuevoLogoObjects2.length = 0;
gdjs.MenuCode.GDNuevoLogoObjects3.length = 0;
gdjs.MenuCode.GDNuevoLogoObjects4.length = 0;
gdjs.MenuCode.GDcloudoOneObjects1.length = 0;
gdjs.MenuCode.GDcloudoOneObjects2.length = 0;
gdjs.MenuCode.GDcloudoOneObjects3.length = 0;
gdjs.MenuCode.GDcloudoOneObjects4.length = 0;
gdjs.MenuCode.GDGuardarPuntajeObjects1.length = 0;
gdjs.MenuCode.GDGuardarPuntajeObjects2.length = 0;
gdjs.MenuCode.GDGuardarPuntajeObjects3.length = 0;
gdjs.MenuCode.GDGuardarPuntajeObjects4.length = 0;
gdjs.MenuCode.GDMusicButtonObjects1.length = 0;
gdjs.MenuCode.GDMusicButtonObjects2.length = 0;
gdjs.MenuCode.GDMusicButtonObjects3.length = 0;
gdjs.MenuCode.GDMusicButtonObjects4.length = 0;
gdjs.MenuCode.GDSoundButtonObjects1.length = 0;
gdjs.MenuCode.GDSoundButtonObjects2.length = 0;
gdjs.MenuCode.GDSoundButtonObjects3.length = 0;
gdjs.MenuCode.GDSoundButtonObjects4.length = 0;

gdjs.MenuCode.eventsList5(runtimeScene);
gdjs.MenuCode.GDFondoAObjects1.length = 0;
gdjs.MenuCode.GDFondoAObjects2.length = 0;
gdjs.MenuCode.GDFondoAObjects3.length = 0;
gdjs.MenuCode.GDFondoAObjects4.length = 0;
gdjs.MenuCode.GDTitleObjects1.length = 0;
gdjs.MenuCode.GDTitleObjects2.length = 0;
gdjs.MenuCode.GDTitleObjects3.length = 0;
gdjs.MenuCode.GDTitleObjects4.length = 0;
gdjs.MenuCode.GDLogoObjects1.length = 0;
gdjs.MenuCode.GDLogoObjects2.length = 0;
gdjs.MenuCode.GDLogoObjects3.length = 0;
gdjs.MenuCode.GDLogoObjects4.length = 0;
gdjs.MenuCode.GDBotonJugarObjects1.length = 0;
gdjs.MenuCode.GDBotonJugarObjects2.length = 0;
gdjs.MenuCode.GDBotonJugarObjects3.length = 0;
gdjs.MenuCode.GDBotonJugarObjects4.length = 0;
gdjs.MenuCode.GDInstruccionesObjects1.length = 0;
gdjs.MenuCode.GDInstruccionesObjects2.length = 0;
gdjs.MenuCode.GDInstruccionesObjects3.length = 0;
gdjs.MenuCode.GDInstruccionesObjects4.length = 0;
gdjs.MenuCode.GDNuevoLogoObjects1.length = 0;
gdjs.MenuCode.GDNuevoLogoObjects2.length = 0;
gdjs.MenuCode.GDNuevoLogoObjects3.length = 0;
gdjs.MenuCode.GDNuevoLogoObjects4.length = 0;
gdjs.MenuCode.GDcloudoOneObjects1.length = 0;
gdjs.MenuCode.GDcloudoOneObjects2.length = 0;
gdjs.MenuCode.GDcloudoOneObjects3.length = 0;
gdjs.MenuCode.GDcloudoOneObjects4.length = 0;
gdjs.MenuCode.GDGuardarPuntajeObjects1.length = 0;
gdjs.MenuCode.GDGuardarPuntajeObjects2.length = 0;
gdjs.MenuCode.GDGuardarPuntajeObjects3.length = 0;
gdjs.MenuCode.GDGuardarPuntajeObjects4.length = 0;
gdjs.MenuCode.GDMusicButtonObjects1.length = 0;
gdjs.MenuCode.GDMusicButtonObjects2.length = 0;
gdjs.MenuCode.GDMusicButtonObjects3.length = 0;
gdjs.MenuCode.GDMusicButtonObjects4.length = 0;
gdjs.MenuCode.GDSoundButtonObjects1.length = 0;
gdjs.MenuCode.GDSoundButtonObjects2.length = 0;
gdjs.MenuCode.GDSoundButtonObjects3.length = 0;
gdjs.MenuCode.GDSoundButtonObjects4.length = 0;


return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
