gdjs.N4Code = {};
gdjs.N4Code.localVariables = [];
gdjs.N4Code.GDesteticaObjects1= [];
gdjs.N4Code.GDesteticaObjects2= [];
gdjs.N4Code.GDsimi2Objects1= [];
gdjs.N4Code.GDsimi2Objects2= [];
gdjs.N4Code.GDba_95241eraObjects1= [];
gdjs.N4Code.GDba_95241eraObjects2= [];
gdjs.N4Code.GDaustralianoObjects1= [];
gdjs.N4Code.GDaustralianoObjects2= [];
gdjs.N4Code.GDsecadoraObjects1= [];
gdjs.N4Code.GDsecadoraObjects2= [];
gdjs.N4Code.GDShampooObjects1= [];
gdjs.N4Code.GDShampooObjects2= [];
gdjs.N4Code.GDTijerasObjects1= [];
gdjs.N4Code.GDTijerasObjects2= [];
gdjs.N4Code.GDcr_9595secadoraObjects1= [];
gdjs.N4Code.GDcr_9595secadoraObjects2= [];
gdjs.N4Code.GDestatus1Objects1= [];
gdjs.N4Code.GDestatus1Objects2= [];
gdjs.N4Code.GDburbuja1Objects1= [];
gdjs.N4Code.GDburbuja1Objects2= [];
gdjs.N4Code.GDscore2Objects1= [];
gdjs.N4Code.GDscore2Objects2= [];
gdjs.N4Code.GDNivel2Objects1= [];
gdjs.N4Code.GDNivel2Objects2= [];
gdjs.N4Code.GDscoretext2Objects1= [];
gdjs.N4Code.GDscoretext2Objects2= [];
gdjs.N4Code.GDnextmsktObjects1= [];
gdjs.N4Code.GDnextmsktObjects2= [];
gdjs.N4Code.GDnexmasktaObjects1= [];
gdjs.N4Code.GDnexmasktaObjects2= [];
gdjs.N4Code.GDregresar1Objects1= [];
gdjs.N4Code.GDregresar1Objects2= [];
gdjs.N4Code.GDcr_9595shampoObjects1= [];
gdjs.N4Code.GDcr_9595shampoObjects2= [];
gdjs.N4Code.GDcr_9595tijerasObjects1= [];
gdjs.N4Code.GDcr_9595tijerasObjects2= [];
gdjs.N4Code.GDsigmascotaObjects1= [];
gdjs.N4Code.GDsigmascotaObjects2= [];
gdjs.N4Code.GDni_95241itaObjects1= [];
gdjs.N4Code.GDni_95241itaObjects2= [];
gdjs.N4Code.GDni_95241ita2Objects1= [];
gdjs.N4Code.GDni_95241ita2Objects2= [];
gdjs.N4Code.GDperritoObjects1= [];
gdjs.N4Code.GDperritoObjects2= [];
gdjs.N4Code.GDTransitionObjects1= [];
gdjs.N4Code.GDTransitionObjects2= [];


gdjs.N4Code.mapOfGDgdjs_9546N4Code_9546GDcr_95959595secadoraObjects1Objects = Hashtable.newFrom({"cr_secadora": gdjs.N4Code.GDcr_9595secadoraObjects1});
gdjs.N4Code.mapOfGDgdjs_9546N4Code_9546GDaustralianoObjects1Objects = Hashtable.newFrom({"australiano": gdjs.N4Code.GDaustralianoObjects1});
gdjs.N4Code.eventsList0 = function(runtimeScene) {

};gdjs.N4Code.mapOfGDgdjs_9546N4Code_9546GDcr_95959595shampoObjects1Objects = Hashtable.newFrom({"cr_shampo": gdjs.N4Code.GDcr_9595shampoObjects1});
gdjs.N4Code.mapOfGDgdjs_9546N4Code_9546GDaustralianoObjects1Objects = Hashtable.newFrom({"australiano": gdjs.N4Code.GDaustralianoObjects1});
gdjs.N4Code.mapOfGDgdjs_9546N4Code_9546GDcr_95959595tijerasObjects1Objects = Hashtable.newFrom({"cr_tijeras": gdjs.N4Code.GDcr_9595tijerasObjects1});
gdjs.N4Code.mapOfGDgdjs_9546N4Code_9546GDaustralianoObjects1Objects = Hashtable.newFrom({"australiano": gdjs.N4Code.GDaustralianoObjects1});
gdjs.N4Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("australiano"), gdjs.N4Code.GDaustralianoObjects1);
gdjs.copyArray(runtimeScene.getObjects("cr_secadora"), gdjs.N4Code.GDcr_9595secadoraObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.N4Code.mapOfGDgdjs_9546N4Code_9546GDcr_95959595secadoraObjects1Objects, gdjs.N4Code.mapOfGDgdjs_9546N4Code_9546GDaustralianoObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.N4Code.GDcr_9595secadoraObjects1 */
gdjs.copyArray(runtimeScene.getObjects("scoretext2"), gdjs.N4Code.GDscoretext2Objects1);
gdjs.copyArray(runtimeScene.getObjects("secadora"), gdjs.N4Code.GDsecadoraObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).add(10);
}{for(var i = 0, len = gdjs.N4Code.GDscoretext2Objects1.length ;i < len;++i) {
    gdjs.N4Code.GDscoretext2Objects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}{for(var i = 0, len = gdjs.N4Code.GDcr_9595secadoraObjects1.length ;i < len;++i) {
    gdjs.N4Code.GDcr_9595secadoraObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.N4Code.GDsecadoraObjects1.length ;i < len;++i) {
    gdjs.N4Code.GDsecadoraObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).add(1);
}{gdjs.evtTools.input.showCursor(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("regresar1"), gdjs.N4Code.GDregresar1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.N4Code.GDregresar1Objects1.length;i<l;++i) {
    if ( gdjs.N4Code.GDregresar1Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.N4Code.GDregresar1Objects1[k] = gdjs.N4Code.GDregresar1Objects1[i];
        ++k;
    }
}
gdjs.N4Code.GDregresar1Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Overworld", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.N4Code.eventsList0(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("secadora"), gdjs.N4Code.GDsecadoraObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.N4Code.GDsecadoraObjects1.length;i<l;++i) {
    if ( gdjs.N4Code.GDsecadoraObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.N4Code.GDsecadoraObjects1[k] = gdjs.N4Code.GDsecadoraObjects1[i];
        ++k;
    }
}
gdjs.N4Code.GDsecadoraObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.input.hideCursor(runtimeScene);
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cr_secadora"), gdjs.N4Code.GDcr_9595secadoraObjects1);
{for(var i = 0, len = gdjs.N4Code.GDcr_9595secadoraObjects1.length ;i < len;++i) {
    gdjs.N4Code.GDcr_9595secadoraObjects1[i].putAround(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Shampoo"), gdjs.N4Code.GDShampooObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.N4Code.GDShampooObjects1.length;i<l;++i) {
    if ( gdjs.N4Code.GDShampooObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.N4Code.GDShampooObjects1[k] = gdjs.N4Code.GDShampooObjects1[i];
        ++k;
    }
}
gdjs.N4Code.GDShampooObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.input.hideCursor(runtimeScene);
}{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cr_shampo"), gdjs.N4Code.GDcr_9595shampoObjects1);
{for(var i = 0, len = gdjs.N4Code.GDcr_9595shampoObjects1.length ;i < len;++i) {
    gdjs.N4Code.GDcr_9595shampoObjects1[i].putAround(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tijeras"), gdjs.N4Code.GDTijerasObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.N4Code.GDTijerasObjects1.length;i<l;++i) {
    if ( gdjs.N4Code.GDTijerasObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.N4Code.GDTijerasObjects1[k] = gdjs.N4Code.GDTijerasObjects1[i];
        ++k;
    }
}
gdjs.N4Code.GDTijerasObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.input.hideCursor(runtimeScene);
}{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cr_tijeras"), gdjs.N4Code.GDcr_9595tijerasObjects1);
{for(var i = 0, len = gdjs.N4Code.GDcr_9595tijerasObjects1.length ;i < len;++i) {
    gdjs.N4Code.GDcr_9595tijerasObjects1[i].putAround(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("australiano"), gdjs.N4Code.GDaustralianoObjects1);
gdjs.copyArray(runtimeScene.getObjects("cr_shampo"), gdjs.N4Code.GDcr_9595shampoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.N4Code.mapOfGDgdjs_9546N4Code_9546GDcr_95959595shampoObjects1Objects, gdjs.N4Code.mapOfGDgdjs_9546N4Code_9546GDaustralianoObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Shampoo"), gdjs.N4Code.GDShampooObjects1);
/* Reuse gdjs.N4Code.GDcr_9595shampoObjects1 */
gdjs.copyArray(runtimeScene.getObjects("scoretext2"), gdjs.N4Code.GDscoretext2Objects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).add(10);
}{for(var i = 0, len = gdjs.N4Code.GDscoretext2Objects1.length ;i < len;++i) {
    gdjs.N4Code.GDscoretext2Objects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}{for(var i = 0, len = gdjs.N4Code.GDcr_9595shampoObjects1.length ;i < len;++i) {
    gdjs.N4Code.GDcr_9595shampoObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.N4Code.GDShampooObjects1.length ;i < len;++i) {
    gdjs.N4Code.GDShampooObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).add(1);
}{gdjs.evtTools.input.showCursor(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("australiano"), gdjs.N4Code.GDaustralianoObjects1);
gdjs.copyArray(runtimeScene.getObjects("cr_tijeras"), gdjs.N4Code.GDcr_9595tijerasObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.N4Code.mapOfGDgdjs_9546N4Code_9546GDcr_95959595tijerasObjects1Objects, gdjs.N4Code.mapOfGDgdjs_9546N4Code_9546GDaustralianoObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Tijeras"), gdjs.N4Code.GDTijerasObjects1);
/* Reuse gdjs.N4Code.GDcr_9595tijerasObjects1 */
gdjs.copyArray(runtimeScene.getObjects("scoretext2"), gdjs.N4Code.GDscoretext2Objects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).add(10);
}{for(var i = 0, len = gdjs.N4Code.GDscoretext2Objects1.length ;i < len;++i) {
    gdjs.N4Code.GDscoretext2Objects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}{for(var i = 0, len = gdjs.N4Code.GDcr_9595tijerasObjects1.length ;i < len;++i) {
    gdjs.N4Code.GDcr_9595tijerasObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.N4Code.GDTijerasObjects1.length ;i < len;++i) {
    gdjs.N4Code.GDTijerasObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).add(1);
}{gdjs.evtTools.input.showCursor(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("scoretext2"), gdjs.N4Code.GDscoretext2Objects1);
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(0);
}{for(var i = 0, len = gdjs.N4Code.GDscoretext2Objects1.length ;i < len;++i) {
    gdjs.N4Code.GDscoretext2Objects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("estatus1"), gdjs.N4Code.GDestatus1Objects1);
{for(var i = 0, len = gdjs.N4Code.GDestatus1Objects1.length ;i < len;++i) {
    gdjs.N4Code.GDestatus1Objects1[i].getBehavior("Animation").setAnimationName("sadblue");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("estatus1"), gdjs.N4Code.GDestatus1Objects1);
{for(var i = 0, len = gdjs.N4Code.GDestatus1Objects1.length ;i < len;++i) {
    gdjs.N4Code.GDestatus1Objects1[i].getBehavior("Animation").setAnimationName("happy");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber() == 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("australiano"), gdjs.N4Code.GDaustralianoObjects1);
gdjs.copyArray(runtimeScene.getObjects("estatus1"), gdjs.N4Code.GDestatus1Objects1);
gdjs.copyArray(runtimeScene.getObjects("niñita"), gdjs.N4Code.GDni_95241itaObjects1);
{for(var i = 0, len = gdjs.N4Code.GDestatus1Objects1.length ;i < len;++i) {
    gdjs.N4Code.GDestatus1Objects1[i].getBehavior("Animation").setAnimationName("happyend");
}
}{gdjs.evtTools.camera.showLayer(runtimeScene, "MAgia");
}{for(var i = 0, len = gdjs.N4Code.GDaustralianoObjects1.length ;i < len;++i) {
    gdjs.N4Code.GDaustralianoObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.N4Code.GDni_95241itaObjects1.length ;i < len;++i) {
    gdjs.N4Code.GDni_95241itaObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("sigmascota"), gdjs.N4Code.GDsigmascotaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.N4Code.GDsigmascotaObjects1.length;i<l;++i) {
    if ( gdjs.N4Code.GDsigmascotaObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.N4Code.GDsigmascotaObjects1[k] = gdjs.N4Code.GDsigmascotaObjects1[i];
        ++k;
    }
}
gdjs.N4Code.GDsigmascotaObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Overworld", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.N4Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.N4Code.GDesteticaObjects1.length = 0;
gdjs.N4Code.GDesteticaObjects2.length = 0;
gdjs.N4Code.GDsimi2Objects1.length = 0;
gdjs.N4Code.GDsimi2Objects2.length = 0;
gdjs.N4Code.GDba_95241eraObjects1.length = 0;
gdjs.N4Code.GDba_95241eraObjects2.length = 0;
gdjs.N4Code.GDaustralianoObjects1.length = 0;
gdjs.N4Code.GDaustralianoObjects2.length = 0;
gdjs.N4Code.GDsecadoraObjects1.length = 0;
gdjs.N4Code.GDsecadoraObjects2.length = 0;
gdjs.N4Code.GDShampooObjects1.length = 0;
gdjs.N4Code.GDShampooObjects2.length = 0;
gdjs.N4Code.GDTijerasObjects1.length = 0;
gdjs.N4Code.GDTijerasObjects2.length = 0;
gdjs.N4Code.GDcr_9595secadoraObjects1.length = 0;
gdjs.N4Code.GDcr_9595secadoraObjects2.length = 0;
gdjs.N4Code.GDestatus1Objects1.length = 0;
gdjs.N4Code.GDestatus1Objects2.length = 0;
gdjs.N4Code.GDburbuja1Objects1.length = 0;
gdjs.N4Code.GDburbuja1Objects2.length = 0;
gdjs.N4Code.GDscore2Objects1.length = 0;
gdjs.N4Code.GDscore2Objects2.length = 0;
gdjs.N4Code.GDNivel2Objects1.length = 0;
gdjs.N4Code.GDNivel2Objects2.length = 0;
gdjs.N4Code.GDscoretext2Objects1.length = 0;
gdjs.N4Code.GDscoretext2Objects2.length = 0;
gdjs.N4Code.GDnextmsktObjects1.length = 0;
gdjs.N4Code.GDnextmsktObjects2.length = 0;
gdjs.N4Code.GDnexmasktaObjects1.length = 0;
gdjs.N4Code.GDnexmasktaObjects2.length = 0;
gdjs.N4Code.GDregresar1Objects1.length = 0;
gdjs.N4Code.GDregresar1Objects2.length = 0;
gdjs.N4Code.GDcr_9595shampoObjects1.length = 0;
gdjs.N4Code.GDcr_9595shampoObjects2.length = 0;
gdjs.N4Code.GDcr_9595tijerasObjects1.length = 0;
gdjs.N4Code.GDcr_9595tijerasObjects2.length = 0;
gdjs.N4Code.GDsigmascotaObjects1.length = 0;
gdjs.N4Code.GDsigmascotaObjects2.length = 0;
gdjs.N4Code.GDni_95241itaObjects1.length = 0;
gdjs.N4Code.GDni_95241itaObjects2.length = 0;
gdjs.N4Code.GDni_95241ita2Objects1.length = 0;
gdjs.N4Code.GDni_95241ita2Objects2.length = 0;
gdjs.N4Code.GDperritoObjects1.length = 0;
gdjs.N4Code.GDperritoObjects2.length = 0;
gdjs.N4Code.GDTransitionObjects1.length = 0;
gdjs.N4Code.GDTransitionObjects2.length = 0;

gdjs.N4Code.eventsList1(runtimeScene);
gdjs.N4Code.GDesteticaObjects1.length = 0;
gdjs.N4Code.GDesteticaObjects2.length = 0;
gdjs.N4Code.GDsimi2Objects1.length = 0;
gdjs.N4Code.GDsimi2Objects2.length = 0;
gdjs.N4Code.GDba_95241eraObjects1.length = 0;
gdjs.N4Code.GDba_95241eraObjects2.length = 0;
gdjs.N4Code.GDaustralianoObjects1.length = 0;
gdjs.N4Code.GDaustralianoObjects2.length = 0;
gdjs.N4Code.GDsecadoraObjects1.length = 0;
gdjs.N4Code.GDsecadoraObjects2.length = 0;
gdjs.N4Code.GDShampooObjects1.length = 0;
gdjs.N4Code.GDShampooObjects2.length = 0;
gdjs.N4Code.GDTijerasObjects1.length = 0;
gdjs.N4Code.GDTijerasObjects2.length = 0;
gdjs.N4Code.GDcr_9595secadoraObjects1.length = 0;
gdjs.N4Code.GDcr_9595secadoraObjects2.length = 0;
gdjs.N4Code.GDestatus1Objects1.length = 0;
gdjs.N4Code.GDestatus1Objects2.length = 0;
gdjs.N4Code.GDburbuja1Objects1.length = 0;
gdjs.N4Code.GDburbuja1Objects2.length = 0;
gdjs.N4Code.GDscore2Objects1.length = 0;
gdjs.N4Code.GDscore2Objects2.length = 0;
gdjs.N4Code.GDNivel2Objects1.length = 0;
gdjs.N4Code.GDNivel2Objects2.length = 0;
gdjs.N4Code.GDscoretext2Objects1.length = 0;
gdjs.N4Code.GDscoretext2Objects2.length = 0;
gdjs.N4Code.GDnextmsktObjects1.length = 0;
gdjs.N4Code.GDnextmsktObjects2.length = 0;
gdjs.N4Code.GDnexmasktaObjects1.length = 0;
gdjs.N4Code.GDnexmasktaObjects2.length = 0;
gdjs.N4Code.GDregresar1Objects1.length = 0;
gdjs.N4Code.GDregresar1Objects2.length = 0;
gdjs.N4Code.GDcr_9595shampoObjects1.length = 0;
gdjs.N4Code.GDcr_9595shampoObjects2.length = 0;
gdjs.N4Code.GDcr_9595tijerasObjects1.length = 0;
gdjs.N4Code.GDcr_9595tijerasObjects2.length = 0;
gdjs.N4Code.GDsigmascotaObjects1.length = 0;
gdjs.N4Code.GDsigmascotaObjects2.length = 0;
gdjs.N4Code.GDni_95241itaObjects1.length = 0;
gdjs.N4Code.GDni_95241itaObjects2.length = 0;
gdjs.N4Code.GDni_95241ita2Objects1.length = 0;
gdjs.N4Code.GDni_95241ita2Objects2.length = 0;
gdjs.N4Code.GDperritoObjects1.length = 0;
gdjs.N4Code.GDperritoObjects2.length = 0;
gdjs.N4Code.GDTransitionObjects1.length = 0;
gdjs.N4Code.GDTransitionObjects2.length = 0;


return;

}

gdjs['N4Code'] = gdjs.N4Code;
