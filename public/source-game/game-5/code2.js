gdjs.JugarCode = {};
gdjs.JugarCode.localVariables = [];
gdjs.JugarCode.GDFlatDarkJoystickObjects1= [];
gdjs.JugarCode.GDFlatDarkJoystickObjects2= [];
gdjs.JugarCode.GDFlatDarkJoystickObjects3= [];
gdjs.JugarCode.GDFlatDarkJoystickObjects4= [];
gdjs.JugarCode.GDPausaYelloObjects1= [];
gdjs.JugarCode.GDPausaYelloObjects2= [];
gdjs.JugarCode.GDPausaYelloObjects3= [];
gdjs.JugarCode.GDPausaYelloObjects4= [];
gdjs.JugarCode.GDPlayerObjects1= [];
gdjs.JugarCode.GDPlayerObjects2= [];
gdjs.JugarCode.GDPlayerObjects3= [];
gdjs.JugarCode.GDPlayerObjects4= [];
gdjs.JugarCode.GDMenuInicioObjects1= [];
gdjs.JugarCode.GDMenuInicioObjects2= [];
gdjs.JugarCode.GDMenuInicioObjects3= [];
gdjs.JugarCode.GDMenuInicioObjects4= [];
gdjs.JugarCode.GDCartoonSmokeBlastObjects1= [];
gdjs.JugarCode.GDCartoonSmokeBlastObjects2= [];
gdjs.JugarCode.GDCartoonSmokeBlastObjects3= [];
gdjs.JugarCode.GDCartoonSmokeBlastObjects4= [];
gdjs.JugarCode.GDFlatHeartBarObjects1= [];
gdjs.JugarCode.GDFlatHeartBarObjects2= [];
gdjs.JugarCode.GDFlatHeartBarObjects3= [];
gdjs.JugarCode.GDFlatHeartBarObjects4= [];
gdjs.JugarCode.GDObstaculo1Objects1= [];
gdjs.JugarCode.GDObstaculo1Objects2= [];
gdjs.JugarCode.GDObstaculo1Objects3= [];
gdjs.JugarCode.GDObstaculo1Objects4= [];
gdjs.JugarCode.GDObstaculo2Objects1= [];
gdjs.JugarCode.GDObstaculo2Objects2= [];
gdjs.JugarCode.GDObstaculo2Objects3= [];
gdjs.JugarCode.GDObstaculo2Objects4= [];
gdjs.JugarCode.GDObstaculo3Objects1= [];
gdjs.JugarCode.GDObstaculo3Objects2= [];
gdjs.JugarCode.GDObstaculo3Objects3= [];
gdjs.JugarCode.GDObstaculo3Objects4= [];
gdjs.JugarCode.GDFondo1Objects1= [];
gdjs.JugarCode.GDFondo1Objects2= [];
gdjs.JugarCode.GDFondo1Objects3= [];
gdjs.JugarCode.GDFondo1Objects4= [];
gdjs.JugarCode.GDFondo3Objects1= [];
gdjs.JugarCode.GDFondo3Objects2= [];
gdjs.JugarCode.GDFondo3Objects3= [];
gdjs.JugarCode.GDFondo3Objects4= [];
gdjs.JugarCode.GDBarraObjects1= [];
gdjs.JugarCode.GDBarraObjects2= [];
gdjs.JugarCode.GDBarraObjects3= [];
gdjs.JugarCode.GDBarraObjects4= [];
gdjs.JugarCode.GDFondoPObjects1= [];
gdjs.JugarCode.GDFondoPObjects2= [];
gdjs.JugarCode.GDFondoPObjects3= [];
gdjs.JugarCode.GDFondoPObjects4= [];
gdjs.JugarCode.GDReiniciarObjects1= [];
gdjs.JugarCode.GDReiniciarObjects2= [];
gdjs.JugarCode.GDReiniciarObjects3= [];
gdjs.JugarCode.GDReiniciarObjects4= [];
gdjs.JugarCode.GDBarraPuntosObjects1= [];
gdjs.JugarCode.GDBarraPuntosObjects2= [];
gdjs.JugarCode.GDBarraPuntosObjects3= [];
gdjs.JugarCode.GDBarraPuntosObjects4= [];
gdjs.JugarCode.GDPuntosObjects1= [];
gdjs.JugarCode.GDPuntosObjects2= [];
gdjs.JugarCode.GDPuntosObjects3= [];
gdjs.JugarCode.GDPuntosObjects4= [];
gdjs.JugarCode.GDPuntos_9595Objects1= [];
gdjs.JugarCode.GDPuntos_9595Objects2= [];
gdjs.JugarCode.GDPuntos_9595Objects3= [];
gdjs.JugarCode.GDPuntos_9595Objects4= [];
gdjs.JugarCode.GDTEXTSCOREObjects1= [];
gdjs.JugarCode.GDTEXTSCOREObjects2= [];
gdjs.JugarCode.GDTEXTSCOREObjects3= [];
gdjs.JugarCode.GDTEXTSCOREObjects4= [];
gdjs.JugarCode.GDPausaMusicaObjects1= [];
gdjs.JugarCode.GDPausaMusicaObjects2= [];
gdjs.JugarCode.GDPausaMusicaObjects3= [];
gdjs.JugarCode.GDPausaMusicaObjects4= [];
gdjs.JugarCode.GDSoundButtonObjects1= [];
gdjs.JugarCode.GDSoundButtonObjects2= [];
gdjs.JugarCode.GDSoundButtonObjects3= [];
gdjs.JugarCode.GDSoundButtonObjects4= [];
gdjs.JugarCode.GDMusicButtonObjects1= [];
gdjs.JugarCode.GDMusicButtonObjects2= [];
gdjs.JugarCode.GDMusicButtonObjects3= [];
gdjs.JugarCode.GDMusicButtonObjects4= [];
gdjs.JugarCode.GDSoundButton2Objects1= [];
gdjs.JugarCode.GDSoundButton2Objects2= [];
gdjs.JugarCode.GDSoundButton2Objects3= [];
gdjs.JugarCode.GDSoundButton2Objects4= [];


gdjs.JugarCode.eventsList0 = function(runtimeScene) {

};gdjs.JugarCode.mapOfGDgdjs_9546JugarCode_9546GDMusicButtonObjects1Objects = Hashtable.newFrom({"MusicButton": gdjs.JugarCode.GDMusicButtonObjects1});
gdjs.JugarCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(2).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.JugarCode.GDMusicButtonObjects1, gdjs.JugarCode.GDMusicButtonObjects2);

{for(var i = 0, len = gdjs.JugarCode.GDMusicButtonObjects2.length ;i < len;++i) {
    gdjs.JugarCode.GDMusicButtonObjects2[i].getBehavior("Animation").setAnimationName("off");
}
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "funny-bgm-240795.mp3", 1, true, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(2).getAsBoolean();
}
if (isConditionTrue_0) {
/* Reuse gdjs.JugarCode.GDMusicButtonObjects1 */
{for(var i = 0, len = gdjs.JugarCode.GDMusicButtonObjects1.length ;i < len;++i) {
    gdjs.JugarCode.GDMusicButtonObjects1[i].getBehavior("Animation").setAnimationName("on");
}
}{gdjs.evtTools.sound.pauseMusicOnChannel(runtimeScene, 1);
}}

}


};gdjs.JugarCode.mapOfGDgdjs_9546JugarCode_9546GDMenuInicioObjects1Objects = Hashtable.newFrom({"MenuInicio": gdjs.JugarCode.GDMenuInicioObjects1});
gdjs.JugarCode.mapOfGDgdjs_9546JugarCode_9546GDBarraObjects1Objects = Hashtable.newFrom({"Barra": gdjs.JugarCode.GDBarraObjects1});
gdjs.JugarCode.mapOfGDgdjs_9546JugarCode_9546GDObstaculo1Objects3Objects = Hashtable.newFrom({"Obstaculo1": gdjs.JugarCode.GDObstaculo1Objects3});
gdjs.JugarCode.mapOfGDgdjs_9546JugarCode_9546GDObstaculo2Objects3Objects = Hashtable.newFrom({"Obstaculo2": gdjs.JugarCode.GDObstaculo2Objects3});
gdjs.JugarCode.mapOfGDgdjs_9546JugarCode_9546GDObstaculo3Objects2Objects = Hashtable.newFrom({"Obstaculo3": gdjs.JugarCode.GDObstaculo3Objects2});
gdjs.JugarCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.JugarCode.GDObstaculo1Objects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.JugarCode.mapOfGDgdjs_9546JugarCode_9546GDObstaculo1Objects3Objects, gdjs.randomInRange(145, 1038), 100, "");
}{for(var i = 0, len = gdjs.JugarCode.GDObstaculo1Objects3.length ;i < len;++i) {
    gdjs.JugarCode.GDObstaculo1Objects3[i].addForce(0, 250, 1);
}
}{for(var i = 0, len = gdjs.JugarCode.GDObstaculo1Objects3.length ;i < len;++i) {
    gdjs.JugarCode.GDObstaculo1Objects3[i].rotateTowardAngle(gdjs.randomInRange(0, 0), 0, runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.JugarCode.GDObstaculo2Objects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.JugarCode.mapOfGDgdjs_9546JugarCode_9546GDObstaculo2Objects3Objects, gdjs.randomInRange(145, 1038), -(100), "");
}{for(var i = 0, len = gdjs.JugarCode.GDObstaculo2Objects3.length ;i < len;++i) {
    gdjs.JugarCode.GDObstaculo2Objects3[i].addForce(0, 250, 1);
}
}{for(var i = 0, len = gdjs.JugarCode.GDObstaculo2Objects3.length ;i < len;++i) {
    gdjs.JugarCode.GDObstaculo2Objects3[i].rotateTowardAngle(gdjs.randomInRange(0, 0), 0, runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.JugarCode.GDObstaculo3Objects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.JugarCode.mapOfGDgdjs_9546JugarCode_9546GDObstaculo3Objects2Objects, gdjs.randomInRange(145, 1038), -(100), "");
}{for(var i = 0, len = gdjs.JugarCode.GDObstaculo3Objects2.length ;i < len;++i) {
    gdjs.JugarCode.GDObstaculo3Objects2[i].addForce(0, 250, 1);
}
}{for(var i = 0, len = gdjs.JugarCode.GDObstaculo3Objects2.length ;i < len;++i) {
    gdjs.JugarCode.GDObstaculo3Objects2[i].rotateTowardAngle(gdjs.randomInRange(0, 0), 0, runtimeScene);
}
}}

}


};gdjs.JugarCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Temporizador1");
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Temporizador1") > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0));
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(gdjs.randomInRange(0, 2));
}{runtimeScene.getScene().getVariables().getFromIndex(0).mul(0.99);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Temporizador1");
}
{ //Subevents
gdjs.JugarCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Obstaculo1"), gdjs.JugarCode.GDObstaculo1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Obstaculo2"), gdjs.JugarCode.GDObstaculo2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Obstaculo3"), gdjs.JugarCode.GDObstaculo3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JugarCode.GDObstaculo1Objects1.length;i<l;++i) {
    if ( gdjs.JugarCode.GDObstaculo1Objects1[i].getY() > 1400 ) {
        isConditionTrue_0 = true;
        gdjs.JugarCode.GDObstaculo1Objects1[k] = gdjs.JugarCode.GDObstaculo1Objects1[i];
        ++k;
    }
}
gdjs.JugarCode.GDObstaculo1Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.JugarCode.GDObstaculo2Objects1.length;i<l;++i) {
    if ( gdjs.JugarCode.GDObstaculo2Objects1[i].getY() > 1400 ) {
        isConditionTrue_0 = true;
        gdjs.JugarCode.GDObstaculo2Objects1[k] = gdjs.JugarCode.GDObstaculo2Objects1[i];
        ++k;
    }
}
gdjs.JugarCode.GDObstaculo2Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.JugarCode.GDObstaculo3Objects1.length;i<l;++i) {
    if ( gdjs.JugarCode.GDObstaculo3Objects1[i].getY() > 1400 ) {
        isConditionTrue_0 = true;
        gdjs.JugarCode.GDObstaculo3Objects1[k] = gdjs.JugarCode.GDObstaculo3Objects1[i];
        ++k;
    }
}
gdjs.JugarCode.GDObstaculo3Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.JugarCode.GDObstaculo1Objects1 */
/* Reuse gdjs.JugarCode.GDObstaculo2Objects1 */
/* Reuse gdjs.JugarCode.GDObstaculo3Objects1 */
{for(var i = 0, len = gdjs.JugarCode.GDObstaculo1Objects1.length ;i < len;++i) {
    gdjs.JugarCode.GDObstaculo1Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.JugarCode.GDObstaculo2Objects1.length ;i < len;++i) {
    gdjs.JugarCode.GDObstaculo2Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.JugarCode.GDObstaculo3Objects1.length ;i < len;++i) {
    gdjs.JugarCode.GDObstaculo3Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.JugarCode.eventsList4 = function(runtimeScene) {

};gdjs.JugarCode.mapOfGDgdjs_9546JugarCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.JugarCode.GDPlayerObjects2});
gdjs.JugarCode.mapOfGDgdjs_9546JugarCode_9546GDObstaculo1Objects2ObjectsGDgdjs_9546JugarCode_9546GDObstaculo2Objects2ObjectsGDgdjs_9546JugarCode_9546GDObstaculo3Objects2Objects = Hashtable.newFrom({"Obstaculo1": gdjs.JugarCode.GDObstaculo1Objects2, "Obstaculo2": gdjs.JugarCode.GDObstaculo2Objects2, "Obstaculo3": gdjs.JugarCode.GDObstaculo3Objects2});
gdjs.JugarCode.eventsList5 = function(runtimeScene) {

{

/* Reuse gdjs.JugarCode.GDPlayerObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15201708);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JugarCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.JugarCode.GDPlayerObjects2[i].getBehavior("Health").IsJustDamaged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.JugarCode.GDPlayerObjects2[k] = gdjs.JugarCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.JugarCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JugarCode.GDPlayerObjects2.length;i<l;++i) {
    if ( (gdjs.JugarCode.GDPlayerObjects2[i].getBehavior("Animation").getAnimationName()).endsWith("De") ) {
        isConditionTrue_0 = true;
        gdjs.JugarCode.GDPlayerObjects2[k] = gdjs.JugarCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.JugarCode.GDPlayerObjects2.length = k;
}
}
if (isConditionTrue_0) {
}

}


};gdjs.JugarCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Fondo1"), gdjs.JugarCode.GDFondo1Objects2);
{for(var i = 0, len = gdjs.JugarCode.GDFondo1Objects2.length ;i < len;++i) {
    gdjs.JugarCode.GDFondo1Objects2[i].getBehavior("Opacity").setOpacity(100);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.getLayerTimeScale(runtimeScene, "") == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Fondo1"), gdjs.JugarCode.GDFondo1Objects2);
{for(var i = 0, len = gdjs.JugarCode.GDFondo1Objects2.length ;i < len;++i) {
    gdjs.JugarCode.GDFondo1Objects2[i].setYOffset(gdjs.JugarCode.GDFondo1Objects2[i].getYOffset() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * -(150)));
}
}}

}


{


gdjs.JugarCode.eventsList4(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Obstaculo1"), gdjs.JugarCode.GDObstaculo1Objects2);
gdjs.copyArray(runtimeScene.getObjects("Obstaculo2"), gdjs.JugarCode.GDObstaculo2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Obstaculo3"), gdjs.JugarCode.GDObstaculo3Objects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.JugarCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.JugarCode.mapOfGDgdjs_9546JugarCode_9546GDPlayerObjects2Objects, gdjs.JugarCode.mapOfGDgdjs_9546JugarCode_9546GDObstaculo1Objects2ObjectsGDgdjs_9546JugarCode_9546GDObstaculo2Objects2ObjectsGDgdjs_9546JugarCode_9546GDObstaculo3Objects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JugarCode.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.JugarCode.GDPlayerObjects2[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.JugarCode.GDPlayerObjects2[k] = gdjs.JugarCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.JugarCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JugarCode.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.JugarCode.GDPlayerObjects2[i].getBehavior("Health").IsDamageCooldownActive((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.JugarCode.GDPlayerObjects2[k] = gdjs.JugarCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.JugarCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15199268);
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FlatHeartBar"), gdjs.JugarCode.GDFlatHeartBarObjects2);
/* Reuse gdjs.JugarCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.JugarCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.JugarCode.GDPlayerObjects2[i].getBehavior("Health").Hit(1, true, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.JugarCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.JugarCode.GDPlayerObjects2[i].getBehavior("Flash").Flash(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.JugarCode.GDFlatHeartBarObjects2.length ;i < len;++i) {
    gdjs.JugarCode.GDFlatHeartBarObjects2[i].getBehavior("Flash").Flash(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.JugarCode.GDFlatHeartBarObjects2.length ;i < len;++i) {
    gdjs.JugarCode.GDFlatHeartBarObjects2[i].SetValue((( gdjs.JugarCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.JugarCode.GDPlayerObjects2[0].getBehavior("Health").Health((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).sub(1);
}
{ //Subevents
gdjs.JugarCode.eventsList5(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() >= 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() <= 0);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).sub(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game over", false);
}}

}


};gdjs.JugarCode.mapOfGDgdjs_9546JugarCode_9546GDBarraPuntosObjects1Objects = Hashtable.newFrom({"BarraPuntos": gdjs.JugarCode.GDBarraPuntosObjects1});
gdjs.JugarCode.mapOfGDgdjs_9546JugarCode_9546GDObstaculo1Objects1ObjectsGDgdjs_9546JugarCode_9546GDObstaculo2Objects1ObjectsGDgdjs_9546JugarCode_9546GDObstaculo3Objects1Objects = Hashtable.newFrom({"Obstaculo1": gdjs.JugarCode.GDObstaculo1Objects1, "Obstaculo2": gdjs.JugarCode.GDObstaculo2Objects1, "Obstaculo3": gdjs.JugarCode.GDObstaculo3Objects1});
gdjs.JugarCode.eventsList7 = function(runtimeScene) {

{


gdjs.JugarCode.eventsList0(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.window.isFullScreen(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isMobile();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.setAdaptGameResolutionAtRuntime(runtimeScene, true);
}{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MusicButton"), gdjs.JugarCode.GDMusicButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.JugarCode.mapOfGDgdjs_9546JugarCode_9546GDMusicButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15187036);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.toggleVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2));
}
{ //Subevents
gdjs.JugarCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MenuInicio"), gdjs.JugarCode.GDMenuInicioObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.JugarCode.mapOfGDgdjs_9546JugarCode_9546GDMenuInicioObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Barra"), gdjs.JugarCode.GDBarraObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.JugarCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.JugarCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.JugarCode.GDPlayerObjects1[i].separateFromObjectsList(gdjs.JugarCode.mapOfGDgdjs_9546JugarCode_9546GDBarraObjects1Objects, false);
}
}}

}


{


gdjs.JugarCode.eventsList3(runtimeScene);
}


{


gdjs.JugarCode.eventsList6(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("BarraPuntos"), gdjs.JugarCode.GDBarraPuntosObjects1);
gdjs.copyArray(runtimeScene.getObjects("Obstaculo1"), gdjs.JugarCode.GDObstaculo1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Obstaculo2"), gdjs.JugarCode.GDObstaculo2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Obstaculo3"), gdjs.JugarCode.GDObstaculo3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.JugarCode.mapOfGDgdjs_9546JugarCode_9546GDBarraPuntosObjects1Objects, gdjs.JugarCode.mapOfGDgdjs_9546JugarCode_9546GDObstaculo1Objects1ObjectsGDgdjs_9546JugarCode_9546GDObstaculo2Objects1ObjectsGDgdjs_9546JugarCode_9546GDObstaculo3Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.JugarCode.GDObstaculo1Objects1 */
/* Reuse gdjs.JugarCode.GDObstaculo2Objects1 */
/* Reuse gdjs.JugarCode.GDObstaculo3Objects1 */
{for(var i = 0, len = gdjs.JugarCode.GDObstaculo1Objects1.length ;i < len;++i) {
    gdjs.JugarCode.GDObstaculo1Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.JugarCode.GDObstaculo2Objects1.length ;i < len;++i) {
    gdjs.JugarCode.GDObstaculo2Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.JugarCode.GDObstaculo3Objects1.length ;i < len;++i) {
    gdjs.JugarCode.GDObstaculo3Objects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Puntos"), gdjs.JugarCode.GDPuntosObjects1);
{for(var i = 0, len = gdjs.JugarCode.GDPuntosObjects1.length ;i < len;++i) {
    gdjs.JugarCode.GDPuntosObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}}

}


{



}


};

gdjs.JugarCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.JugarCode.GDFlatDarkJoystickObjects1.length = 0;
gdjs.JugarCode.GDFlatDarkJoystickObjects2.length = 0;
gdjs.JugarCode.GDFlatDarkJoystickObjects3.length = 0;
gdjs.JugarCode.GDFlatDarkJoystickObjects4.length = 0;
gdjs.JugarCode.GDPausaYelloObjects1.length = 0;
gdjs.JugarCode.GDPausaYelloObjects2.length = 0;
gdjs.JugarCode.GDPausaYelloObjects3.length = 0;
gdjs.JugarCode.GDPausaYelloObjects4.length = 0;
gdjs.JugarCode.GDPlayerObjects1.length = 0;
gdjs.JugarCode.GDPlayerObjects2.length = 0;
gdjs.JugarCode.GDPlayerObjects3.length = 0;
gdjs.JugarCode.GDPlayerObjects4.length = 0;
gdjs.JugarCode.GDMenuInicioObjects1.length = 0;
gdjs.JugarCode.GDMenuInicioObjects2.length = 0;
gdjs.JugarCode.GDMenuInicioObjects3.length = 0;
gdjs.JugarCode.GDMenuInicioObjects4.length = 0;
gdjs.JugarCode.GDCartoonSmokeBlastObjects1.length = 0;
gdjs.JugarCode.GDCartoonSmokeBlastObjects2.length = 0;
gdjs.JugarCode.GDCartoonSmokeBlastObjects3.length = 0;
gdjs.JugarCode.GDCartoonSmokeBlastObjects4.length = 0;
gdjs.JugarCode.GDFlatHeartBarObjects1.length = 0;
gdjs.JugarCode.GDFlatHeartBarObjects2.length = 0;
gdjs.JugarCode.GDFlatHeartBarObjects3.length = 0;
gdjs.JugarCode.GDFlatHeartBarObjects4.length = 0;
gdjs.JugarCode.GDObstaculo1Objects1.length = 0;
gdjs.JugarCode.GDObstaculo1Objects2.length = 0;
gdjs.JugarCode.GDObstaculo1Objects3.length = 0;
gdjs.JugarCode.GDObstaculo1Objects4.length = 0;
gdjs.JugarCode.GDObstaculo2Objects1.length = 0;
gdjs.JugarCode.GDObstaculo2Objects2.length = 0;
gdjs.JugarCode.GDObstaculo2Objects3.length = 0;
gdjs.JugarCode.GDObstaculo2Objects4.length = 0;
gdjs.JugarCode.GDObstaculo3Objects1.length = 0;
gdjs.JugarCode.GDObstaculo3Objects2.length = 0;
gdjs.JugarCode.GDObstaculo3Objects3.length = 0;
gdjs.JugarCode.GDObstaculo3Objects4.length = 0;
gdjs.JugarCode.GDFondo1Objects1.length = 0;
gdjs.JugarCode.GDFondo1Objects2.length = 0;
gdjs.JugarCode.GDFondo1Objects3.length = 0;
gdjs.JugarCode.GDFondo1Objects4.length = 0;
gdjs.JugarCode.GDFondo3Objects1.length = 0;
gdjs.JugarCode.GDFondo3Objects2.length = 0;
gdjs.JugarCode.GDFondo3Objects3.length = 0;
gdjs.JugarCode.GDFondo3Objects4.length = 0;
gdjs.JugarCode.GDBarraObjects1.length = 0;
gdjs.JugarCode.GDBarraObjects2.length = 0;
gdjs.JugarCode.GDBarraObjects3.length = 0;
gdjs.JugarCode.GDBarraObjects4.length = 0;
gdjs.JugarCode.GDFondoPObjects1.length = 0;
gdjs.JugarCode.GDFondoPObjects2.length = 0;
gdjs.JugarCode.GDFondoPObjects3.length = 0;
gdjs.JugarCode.GDFondoPObjects4.length = 0;
gdjs.JugarCode.GDReiniciarObjects1.length = 0;
gdjs.JugarCode.GDReiniciarObjects2.length = 0;
gdjs.JugarCode.GDReiniciarObjects3.length = 0;
gdjs.JugarCode.GDReiniciarObjects4.length = 0;
gdjs.JugarCode.GDBarraPuntosObjects1.length = 0;
gdjs.JugarCode.GDBarraPuntosObjects2.length = 0;
gdjs.JugarCode.GDBarraPuntosObjects3.length = 0;
gdjs.JugarCode.GDBarraPuntosObjects4.length = 0;
gdjs.JugarCode.GDPuntosObjects1.length = 0;
gdjs.JugarCode.GDPuntosObjects2.length = 0;
gdjs.JugarCode.GDPuntosObjects3.length = 0;
gdjs.JugarCode.GDPuntosObjects4.length = 0;
gdjs.JugarCode.GDPuntos_9595Objects1.length = 0;
gdjs.JugarCode.GDPuntos_9595Objects2.length = 0;
gdjs.JugarCode.GDPuntos_9595Objects3.length = 0;
gdjs.JugarCode.GDPuntos_9595Objects4.length = 0;
gdjs.JugarCode.GDTEXTSCOREObjects1.length = 0;
gdjs.JugarCode.GDTEXTSCOREObjects2.length = 0;
gdjs.JugarCode.GDTEXTSCOREObjects3.length = 0;
gdjs.JugarCode.GDTEXTSCOREObjects4.length = 0;
gdjs.JugarCode.GDPausaMusicaObjects1.length = 0;
gdjs.JugarCode.GDPausaMusicaObjects2.length = 0;
gdjs.JugarCode.GDPausaMusicaObjects3.length = 0;
gdjs.JugarCode.GDPausaMusicaObjects4.length = 0;
gdjs.JugarCode.GDSoundButtonObjects1.length = 0;
gdjs.JugarCode.GDSoundButtonObjects2.length = 0;
gdjs.JugarCode.GDSoundButtonObjects3.length = 0;
gdjs.JugarCode.GDSoundButtonObjects4.length = 0;
gdjs.JugarCode.GDMusicButtonObjects1.length = 0;
gdjs.JugarCode.GDMusicButtonObjects2.length = 0;
gdjs.JugarCode.GDMusicButtonObjects3.length = 0;
gdjs.JugarCode.GDMusicButtonObjects4.length = 0;
gdjs.JugarCode.GDSoundButton2Objects1.length = 0;
gdjs.JugarCode.GDSoundButton2Objects2.length = 0;
gdjs.JugarCode.GDSoundButton2Objects3.length = 0;
gdjs.JugarCode.GDSoundButton2Objects4.length = 0;

gdjs.JugarCode.eventsList7(runtimeScene);
gdjs.JugarCode.GDFlatDarkJoystickObjects1.length = 0;
gdjs.JugarCode.GDFlatDarkJoystickObjects2.length = 0;
gdjs.JugarCode.GDFlatDarkJoystickObjects3.length = 0;
gdjs.JugarCode.GDFlatDarkJoystickObjects4.length = 0;
gdjs.JugarCode.GDPausaYelloObjects1.length = 0;
gdjs.JugarCode.GDPausaYelloObjects2.length = 0;
gdjs.JugarCode.GDPausaYelloObjects3.length = 0;
gdjs.JugarCode.GDPausaYelloObjects4.length = 0;
gdjs.JugarCode.GDPlayerObjects1.length = 0;
gdjs.JugarCode.GDPlayerObjects2.length = 0;
gdjs.JugarCode.GDPlayerObjects3.length = 0;
gdjs.JugarCode.GDPlayerObjects4.length = 0;
gdjs.JugarCode.GDMenuInicioObjects1.length = 0;
gdjs.JugarCode.GDMenuInicioObjects2.length = 0;
gdjs.JugarCode.GDMenuInicioObjects3.length = 0;
gdjs.JugarCode.GDMenuInicioObjects4.length = 0;
gdjs.JugarCode.GDCartoonSmokeBlastObjects1.length = 0;
gdjs.JugarCode.GDCartoonSmokeBlastObjects2.length = 0;
gdjs.JugarCode.GDCartoonSmokeBlastObjects3.length = 0;
gdjs.JugarCode.GDCartoonSmokeBlastObjects4.length = 0;
gdjs.JugarCode.GDFlatHeartBarObjects1.length = 0;
gdjs.JugarCode.GDFlatHeartBarObjects2.length = 0;
gdjs.JugarCode.GDFlatHeartBarObjects3.length = 0;
gdjs.JugarCode.GDFlatHeartBarObjects4.length = 0;
gdjs.JugarCode.GDObstaculo1Objects1.length = 0;
gdjs.JugarCode.GDObstaculo1Objects2.length = 0;
gdjs.JugarCode.GDObstaculo1Objects3.length = 0;
gdjs.JugarCode.GDObstaculo1Objects4.length = 0;
gdjs.JugarCode.GDObstaculo2Objects1.length = 0;
gdjs.JugarCode.GDObstaculo2Objects2.length = 0;
gdjs.JugarCode.GDObstaculo2Objects3.length = 0;
gdjs.JugarCode.GDObstaculo2Objects4.length = 0;
gdjs.JugarCode.GDObstaculo3Objects1.length = 0;
gdjs.JugarCode.GDObstaculo3Objects2.length = 0;
gdjs.JugarCode.GDObstaculo3Objects3.length = 0;
gdjs.JugarCode.GDObstaculo3Objects4.length = 0;
gdjs.JugarCode.GDFondo1Objects1.length = 0;
gdjs.JugarCode.GDFondo1Objects2.length = 0;
gdjs.JugarCode.GDFondo1Objects3.length = 0;
gdjs.JugarCode.GDFondo1Objects4.length = 0;
gdjs.JugarCode.GDFondo3Objects1.length = 0;
gdjs.JugarCode.GDFondo3Objects2.length = 0;
gdjs.JugarCode.GDFondo3Objects3.length = 0;
gdjs.JugarCode.GDFondo3Objects4.length = 0;
gdjs.JugarCode.GDBarraObjects1.length = 0;
gdjs.JugarCode.GDBarraObjects2.length = 0;
gdjs.JugarCode.GDBarraObjects3.length = 0;
gdjs.JugarCode.GDBarraObjects4.length = 0;
gdjs.JugarCode.GDFondoPObjects1.length = 0;
gdjs.JugarCode.GDFondoPObjects2.length = 0;
gdjs.JugarCode.GDFondoPObjects3.length = 0;
gdjs.JugarCode.GDFondoPObjects4.length = 0;
gdjs.JugarCode.GDReiniciarObjects1.length = 0;
gdjs.JugarCode.GDReiniciarObjects2.length = 0;
gdjs.JugarCode.GDReiniciarObjects3.length = 0;
gdjs.JugarCode.GDReiniciarObjects4.length = 0;
gdjs.JugarCode.GDBarraPuntosObjects1.length = 0;
gdjs.JugarCode.GDBarraPuntosObjects2.length = 0;
gdjs.JugarCode.GDBarraPuntosObjects3.length = 0;
gdjs.JugarCode.GDBarraPuntosObjects4.length = 0;
gdjs.JugarCode.GDPuntosObjects1.length = 0;
gdjs.JugarCode.GDPuntosObjects2.length = 0;
gdjs.JugarCode.GDPuntosObjects3.length = 0;
gdjs.JugarCode.GDPuntosObjects4.length = 0;
gdjs.JugarCode.GDPuntos_9595Objects1.length = 0;
gdjs.JugarCode.GDPuntos_9595Objects2.length = 0;
gdjs.JugarCode.GDPuntos_9595Objects3.length = 0;
gdjs.JugarCode.GDPuntos_9595Objects4.length = 0;
gdjs.JugarCode.GDTEXTSCOREObjects1.length = 0;
gdjs.JugarCode.GDTEXTSCOREObjects2.length = 0;
gdjs.JugarCode.GDTEXTSCOREObjects3.length = 0;
gdjs.JugarCode.GDTEXTSCOREObjects4.length = 0;
gdjs.JugarCode.GDPausaMusicaObjects1.length = 0;
gdjs.JugarCode.GDPausaMusicaObjects2.length = 0;
gdjs.JugarCode.GDPausaMusicaObjects3.length = 0;
gdjs.JugarCode.GDPausaMusicaObjects4.length = 0;
gdjs.JugarCode.GDSoundButtonObjects1.length = 0;
gdjs.JugarCode.GDSoundButtonObjects2.length = 0;
gdjs.JugarCode.GDSoundButtonObjects3.length = 0;
gdjs.JugarCode.GDSoundButtonObjects4.length = 0;
gdjs.JugarCode.GDMusicButtonObjects1.length = 0;
gdjs.JugarCode.GDMusicButtonObjects2.length = 0;
gdjs.JugarCode.GDMusicButtonObjects3.length = 0;
gdjs.JugarCode.GDMusicButtonObjects4.length = 0;
gdjs.JugarCode.GDSoundButton2Objects1.length = 0;
gdjs.JugarCode.GDSoundButton2Objects2.length = 0;
gdjs.JugarCode.GDSoundButton2Objects3.length = 0;
gdjs.JugarCode.GDSoundButton2Objects4.length = 0;


return;

}

gdjs['JugarCode'] = gdjs.JugarCode;
