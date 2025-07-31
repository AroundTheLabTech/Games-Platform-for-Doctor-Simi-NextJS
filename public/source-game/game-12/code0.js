gdjs.GameCode = {};
gdjs.GameCode.localVariables = [];
gdjs.GameCode.GDBombObjects1= [];
gdjs.GameCode.GDBombObjects2= [];
gdjs.GameCode.GDBombObjects3= [];
gdjs.GameCode.GDBombObjects4= [];
gdjs.GameCode.GDCrateObjects1= [];
gdjs.GameCode.GDCrateObjects2= [];
gdjs.GameCode.GDCrateObjects3= [];
gdjs.GameCode.GDCrateObjects4= [];
gdjs.GameCode.GDFireObjects1= [];
gdjs.GameCode.GDFireObjects2= [];
gdjs.GameCode.GDFireObjects3= [];
gdjs.GameCode.GDFireObjects4= [];
gdjs.GameCode.GDWallObjects1= [];
gdjs.GameCode.GDWallObjects2= [];
gdjs.GameCode.GDWallObjects3= [];
gdjs.GameCode.GDWallObjects4= [];
gdjs.GameCode.GDPlayerObjects1= [];
gdjs.GameCode.GDPlayerObjects2= [];
gdjs.GameCode.GDPlayerObjects3= [];
gdjs.GameCode.GDPlayerObjects4= [];
gdjs.GameCode.GDTile_9595GrassObjects1= [];
gdjs.GameCode.GDTile_9595GrassObjects2= [];
gdjs.GameCode.GDTile_9595GrassObjects3= [];
gdjs.GameCode.GDTile_9595GrassObjects4= [];
gdjs.GameCode.GDTile_9595WallObjects1= [];
gdjs.GameCode.GDTile_9595WallObjects2= [];
gdjs.GameCode.GDTile_9595WallObjects3= [];
gdjs.GameCode.GDTile_9595WallObjects4= [];
gdjs.GameCode.GDTile_9595RoofObjects1= [];
gdjs.GameCode.GDTile_9595RoofObjects2= [];
gdjs.GameCode.GDTile_9595RoofObjects3= [];
gdjs.GameCode.GDTile_9595RoofObjects4= [];
gdjs.GameCode.GDRight_9595FireObjects1= [];
gdjs.GameCode.GDRight_9595FireObjects2= [];
gdjs.GameCode.GDRight_9595FireObjects3= [];
gdjs.GameCode.GDRight_9595FireObjects4= [];
gdjs.GameCode.GDLeft_9595FireObjects1= [];
gdjs.GameCode.GDLeft_9595FireObjects2= [];
gdjs.GameCode.GDLeft_9595FireObjects3= [];
gdjs.GameCode.GDLeft_9595FireObjects4= [];
gdjs.GameCode.GDUp_9595FireObjects1= [];
gdjs.GameCode.GDUp_9595FireObjects2= [];
gdjs.GameCode.GDUp_9595FireObjects3= [];
gdjs.GameCode.GDUp_9595FireObjects4= [];
gdjs.GameCode.GDDown_9595FireObjects1= [];
gdjs.GameCode.GDDown_9595FireObjects2= [];
gdjs.GameCode.GDDown_9595FireObjects3= [];
gdjs.GameCode.GDDown_9595FireObjects4= [];
gdjs.GameCode.GDTile_9595FloorObjects1= [];
gdjs.GameCode.GDTile_9595FloorObjects2= [];
gdjs.GameCode.GDTile_9595FloorObjects3= [];
gdjs.GameCode.GDTile_9595FloorObjects4= [];
gdjs.GameCode.GDbackgroundObjects1= [];
gdjs.GameCode.GDbackgroundObjects2= [];
gdjs.GameCode.GDbackgroundObjects3= [];
gdjs.GameCode.GDbackgroundObjects4= [];
gdjs.GameCode.GDSpace_9595To_9595GenerateObjects1= [];
gdjs.GameCode.GDSpace_9595To_9595GenerateObjects2= [];
gdjs.GameCode.GDSpace_9595To_9595GenerateObjects3= [];
gdjs.GameCode.GDSpace_9595To_9595GenerateObjects4= [];
gdjs.GameCode.GDFlatDarkJoystickObjects1= [];
gdjs.GameCode.GDFlatDarkJoystickObjects2= [];
gdjs.GameCode.GDFlatDarkJoystickObjects3= [];
gdjs.GameCode.GDFlatDarkJoystickObjects4= [];
gdjs.GameCode.GDBirdObjects1= [];
gdjs.GameCode.GDBirdObjects2= [];
gdjs.GameCode.GDBirdObjects3= [];
gdjs.GameCode.GDBirdObjects4= [];
gdjs.GameCode.GDTlacuacheObjects1= [];
gdjs.GameCode.GDTlacuacheObjects2= [];
gdjs.GameCode.GDTlacuacheObjects3= [];
gdjs.GameCode.GDTlacuacheObjects4= [];
gdjs.GameCode.GDSeedsObjects1= [];
gdjs.GameCode.GDSeedsObjects2= [];
gdjs.GameCode.GDSeedsObjects3= [];
gdjs.GameCode.GDSeedsObjects4= [];
gdjs.GameCode.GDArrowButtonObjects1= [];
gdjs.GameCode.GDArrowButtonObjects2= [];
gdjs.GameCode.GDArrowButtonObjects3= [];
gdjs.GameCode.GDArrowButtonObjects4= [];
gdjs.GameCode.GDWaterButtonObjects1= [];
gdjs.GameCode.GDWaterButtonObjects2= [];
gdjs.GameCode.GDWaterButtonObjects3= [];
gdjs.GameCode.GDWaterButtonObjects4= [];
gdjs.GameCode.GDHeart1Objects1= [];
gdjs.GameCode.GDHeart1Objects2= [];
gdjs.GameCode.GDHeart1Objects3= [];
gdjs.GameCode.GDHeart1Objects4= [];
gdjs.GameCode.GDHeart2Objects1= [];
gdjs.GameCode.GDHeart2Objects2= [];
gdjs.GameCode.GDHeart2Objects3= [];
gdjs.GameCode.GDHeart2Objects4= [];
gdjs.GameCode.GDHeart3Objects1= [];
gdjs.GameCode.GDHeart3Objects2= [];
gdjs.GameCode.GDHeart3Objects3= [];
gdjs.GameCode.GDHeart3Objects4= [];
gdjs.GameCode.GDScoreImageObjects1= [];
gdjs.GameCode.GDScoreImageObjects2= [];
gdjs.GameCode.GDScoreImageObjects3= [];
gdjs.GameCode.GDScoreImageObjects4= [];
gdjs.GameCode.GDScoreTextObjects1= [];
gdjs.GameCode.GDScoreTextObjects2= [];
gdjs.GameCode.GDScoreTextObjects3= [];
gdjs.GameCode.GDScoreTextObjects4= [];


gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBombObjects2Objects = Hashtable.newFrom({"Bomb": gdjs.GameCode.GDBombObjects2});
gdjs.GameCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects2[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlayerObjects2 */
gdjs.GameCode.GDBombObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBombObjects2Objects, Math.round((( gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects2[0].getPointX("")) / 64) * 64, Math.round((( gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects2[0].getPointY("")) / 64) * 64, "");
}{for(var i = 0, len = gdjs.GameCode.GDBombObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBombObjects2[i].setZOrder(1);
}
}{for(var i = 0, len = gdjs.GameCode.GDBombObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBombObjects2[i].setAnimationName("Exploding");
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].returnVariable(gdjs.GameCode.GDPlayerObjects2[i].getVariables().getFromIndex(0)).add(1);
}
}{runtimeScene.getScene().getVariables().getFromIndex(8).setBoolean(false);
}}

}


};gdjs.GameCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].addForce(200, 0, 0);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].setAnimationName("Right_Walking");
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].flipX(false);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].flipY(false);
}
}{runtimeScene.getScene().getVariables().getFromIndex(2).setString("None");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].addForce(-(200), 0, 0);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].setAnimationName("Right_Walking");
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].flipX(true);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].flipY(false);
}
}{runtimeScene.getScene().getVariables().getFromIndex(2).setString("None");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].addForce(0, -(200), 0);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].setAnimationName("Up_Walking");
}
}{runtimeScene.getScene().getVariables().getFromIndex(2).setString("None");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].addForce(0, 200, 0);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].setAnimationName("Down_Walking");
}
}{runtimeScene.getScene().getVariables().getFromIndex(2).setString("None");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12838748);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("WaterButton"), gdjs.GameCode.GDWaterButtonObjects2);
{for(var i = 0, len = gdjs.GameCode.GDWaterButtonObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDWaterButtonObjects2[i].getBehavior("Animation").setAnimationIndex(1);
}
}
{ //Subevents
gdjs.GameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("WaterButton"), gdjs.GameCode.GDWaterButtonObjects2);
{for(var i = 0, len = gdjs.GameCode.GDWaterButtonObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDWaterButtonObjects2[i].getBehavior("Animation").setAnimationIndex(0);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].setAnimationName("Right_Idle");
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].flipX(false);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].flipY(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].setAnimationName("Right_Idle");
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].flipX(true);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].flipY(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Up");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].setAnimationName("Up_Idle");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Down");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].setAnimationName("Down_Idle");
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBombObjects2Objects = Hashtable.newFrom({"Bomb": gdjs.GameCode.GDBombObjects2});
gdjs.GameCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects2[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlayerObjects2 */
gdjs.GameCode.GDBombObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBombObjects2Objects, Math.round((( gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects2[0].getPointX("")) / 64) * 64, Math.round((( gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects2[0].getPointY("")) / 64) * 64, "");
}{for(var i = 0, len = gdjs.GameCode.GDBombObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBombObjects2[i].setZOrder(1);
}
}{for(var i = 0, len = gdjs.GameCode.GDBombObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBombObjects2[i].setAnimationName("Exploding");
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].returnVariable(gdjs.GameCode.GDPlayerObjects2[i].getVariables().getFromIndex(0)).add(1);
}
}{runtimeScene.getScene().getVariables().getFromIndex(8).setBoolean(false);
}}

}


};gdjs.GameCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("FlatDarkJoystick"), gdjs.GameCode.GDFlatDarkJoystickObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDFlatDarkJoystickObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDFlatDarkJoystickObjects2[i].IsDirectionPushed4Way("Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDFlatDarkJoystickObjects2[k] = gdjs.GameCode.GDFlatDarkJoystickObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDFlatDarkJoystickObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].addForce(200, 0, 0);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].setAnimationName("Right_Walking");
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].flipX(false);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].flipY(false);
}
}{runtimeScene.getScene().getVariables().getFromIndex(2).setString("Right_Walking");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FlatDarkJoystick"), gdjs.GameCode.GDFlatDarkJoystickObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDFlatDarkJoystickObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDFlatDarkJoystickObjects2[i].IsDirectionPushed4Way("Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDFlatDarkJoystickObjects2[k] = gdjs.GameCode.GDFlatDarkJoystickObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDFlatDarkJoystickObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].addForce(-(200), 0, 0);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].setAnimationName("Right_Walking");
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].flipX(true);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].flipY(false);
}
}{runtimeScene.getScene().getVariables().getFromIndex(2).setString("Left_Walking");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FlatDarkJoystick"), gdjs.GameCode.GDFlatDarkJoystickObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDFlatDarkJoystickObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDFlatDarkJoystickObjects2[i].IsDirectionPushed4Way("Up", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDFlatDarkJoystickObjects2[k] = gdjs.GameCode.GDFlatDarkJoystickObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDFlatDarkJoystickObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].addForce(0, -(200), 0);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].setAnimationName("Up_Walking");
}
}{runtimeScene.getScene().getVariables().getFromIndex(2).setString("Up_Walking");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FlatDarkJoystick"), gdjs.GameCode.GDFlatDarkJoystickObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDFlatDarkJoystickObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDFlatDarkJoystickObjects2[i].IsDirectionPushed4Way("Down", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDFlatDarkJoystickObjects2[k] = gdjs.GameCode.GDFlatDarkJoystickObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDFlatDarkJoystickObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].addForce(0, 200, 0);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].setAnimationName("Down_Walking");
}
}{runtimeScene.getScene().getVariables().getFromIndex(2).setString("Down_Walking");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("WaterButton"), gdjs.GameCode.GDWaterButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDWaterButtonObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDWaterButtonObjects2[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDWaterButtonObjects2[k] = gdjs.GameCode.GDWaterButtonObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDWaterButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12851284);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDWaterButtonObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDWaterButtonObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDWaterButtonObjects2[i].getBehavior("Animation").setAnimationIndex(1);
}
}
{ //Subevents
gdjs.GameCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("WaterButton"), gdjs.GameCode.GDWaterButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDWaterButtonObjects2.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDWaterButtonObjects2[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDWaterButtonObjects2[k] = gdjs.GameCode.GDWaterButtonObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDWaterButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Right"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space"));
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDWaterButtonObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDWaterButtonObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDWaterButtonObjects2[i].getBehavior("Animation").setAnimationIndex(0);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("FlatDarkJoystick"), gdjs.GameCode.GDFlatDarkJoystickObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDFlatDarkJoystickObjects2.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDFlatDarkJoystickObjects2[i].IsDirectionPushed4Way("Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDFlatDarkJoystickObjects2[k] = gdjs.GameCode.GDFlatDarkJoystickObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDFlatDarkJoystickObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsString() == "Right_Walking");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].setAnimationName("Right_Idle");
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].flipX(false);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].flipY(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FlatDarkJoystick"), gdjs.GameCode.GDFlatDarkJoystickObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDFlatDarkJoystickObjects2.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDFlatDarkJoystickObjects2[i].IsDirectionPushed4Way("Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDFlatDarkJoystickObjects2[k] = gdjs.GameCode.GDFlatDarkJoystickObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDFlatDarkJoystickObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsString() == "Left_Walking");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].setAnimationName("Right_Idle");
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].flipX(true);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].flipY(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FlatDarkJoystick"), gdjs.GameCode.GDFlatDarkJoystickObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDFlatDarkJoystickObjects2.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDFlatDarkJoystickObjects2[i].IsDirectionPushed4Way("Up", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDFlatDarkJoystickObjects2[k] = gdjs.GameCode.GDFlatDarkJoystickObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDFlatDarkJoystickObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsString() == "Up_Walking");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].setAnimationName("Up_Idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FlatDarkJoystick"), gdjs.GameCode.GDFlatDarkJoystickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDFlatDarkJoystickObjects1.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDFlatDarkJoystickObjects1[i].IsDirectionPushed4Way("Down", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDFlatDarkJoystickObjects1[k] = gdjs.GameCode.GDFlatDarkJoystickObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDFlatDarkJoystickObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsString() == "Down_Walking");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].setAnimationName("Down_Idle");
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDTile_95959595WallObjects1ObjectsGDgdjs_9546GameCode_9546GDTile_95959595RoofObjects1ObjectsGDgdjs_9546GameCode_9546GDWallObjects1ObjectsGDgdjs_9546GameCode_9546GDCrateObjects1Objects = Hashtable.newFrom({"Tile_Wall": gdjs.GameCode.GDTile_9595WallObjects1, "Tile_Roof": gdjs.GameCode.GDTile_9595RoofObjects1, "Wall": gdjs.GameCode.GDWallObjects1, "Crate": gdjs.GameCode.GDCrateObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDFireObjects1Objects = Hashtable.newFrom({"Fire": gdjs.GameCode.GDFireObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDRight_95959595FireObjects1Objects = Hashtable.newFrom({"Right_Fire": gdjs.GameCode.GDRight_9595FireObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDUp_95959595FireObjects1Objects = Hashtable.newFrom({"Up_Fire": gdjs.GameCode.GDUp_9595FireObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDLeft_95959595FireObjects1Objects = Hashtable.newFrom({"Left_Fire": gdjs.GameCode.GDLeft_9595FireObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDown_95959595FireObjects1Objects = Hashtable.newFrom({"Down_Fire": gdjs.GameCode.GDDown_9595FireObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDRight_95959595FireObjects1Objects = Hashtable.newFrom({"Right_Fire": gdjs.GameCode.GDRight_9595FireObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCrateObjects1Objects = Hashtable.newFrom({"Crate": gdjs.GameCode.GDCrateObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBirdObjects2Objects = Hashtable.newFrom({"Bird": gdjs.GameCode.GDBirdObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDTlacuacheObjects2Objects = Hashtable.newFrom({"Tlacuache": gdjs.GameCode.GDTlacuacheObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDSeedsObjects1Objects = Hashtable.newFrom({"Seeds": gdjs.GameCode.GDSeedsObjects1});
gdjs.GameCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() > 70);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(4).getAsBoolean();
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GameCode.GDCrateObjects1, gdjs.GameCode.GDCrateObjects2);

gdjs.GameCode.GDBirdObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBirdObjects2Objects, (( gdjs.GameCode.GDCrateObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDCrateObjects2[0].getPointX("")), (( gdjs.GameCode.GDCrateObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDCrateObjects2[0].getPointY("")), "");
}{runtimeScene.getScene().getVariables().getFromIndex(4).setBoolean(true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() > 80);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(4).getAsBoolean();
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GameCode.GDCrateObjects1, gdjs.GameCode.GDCrateObjects2);

gdjs.GameCode.GDTlacuacheObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDTlacuacheObjects2Objects, (( gdjs.GameCode.GDCrateObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDCrateObjects2[0].getPointX("")), (( gdjs.GameCode.GDCrateObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDCrateObjects2[0].getPointY("")), "");
}{runtimeScene.getScene().getVariables().getFromIndex(4).setBoolean(true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber() > 90);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(4).getAsBoolean();
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCrateObjects1 */
gdjs.GameCode.GDSeedsObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDSeedsObjects1Objects, (( gdjs.GameCode.GDCrateObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDCrateObjects1[0].getPointX("")), (( gdjs.GameCode.GDCrateObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDCrateObjects1[0].getPointY("")), "");
}{runtimeScene.getScene().getVariables().getFromIndex(4).setBoolean(true);
}}

}


};gdjs.GameCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(gdjs.random(100));
}{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(gdjs.random(100));
}{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(gdjs.random(100));
}
{ //Subevents
gdjs.GameCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDLeft_95959595FireObjects1Objects = Hashtable.newFrom({"Left_Fire": gdjs.GameCode.GDLeft_9595FireObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCrateObjects1Objects = Hashtable.newFrom({"Crate": gdjs.GameCode.GDCrateObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDUp_95959595FireObjects1Objects = Hashtable.newFrom({"Up_Fire": gdjs.GameCode.GDUp_9595FireObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCrateObjects1Objects = Hashtable.newFrom({"Crate": gdjs.GameCode.GDCrateObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDown_95959595FireObjects1Objects = Hashtable.newFrom({"Down_Fire": gdjs.GameCode.GDDown_9595FireObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCrateObjects1Objects = Hashtable.newFrom({"Crate": gdjs.GameCode.GDCrateObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBirdObjects1Objects = Hashtable.newFrom({"Bird": gdjs.GameCode.GDBirdObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDTlacuacheObjects1Objects = Hashtable.newFrom({"Tlacuache": gdjs.GameCode.GDTlacuacheObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDSeedsObjects1Objects = Hashtable.newFrom({"Seeds": gdjs.GameCode.GDSeedsObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDSpace_95959595To_95959595GenerateObjects3Objects = Hashtable.newFrom({"Space_To_Generate": gdjs.GameCode.GDSpace_9595To_9595GenerateObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDSpace_95959595To_95959595GenerateObjects3Objects = Hashtable.newFrom({"Space_To_Generate": gdjs.GameCode.GDSpace_9595To_9595GenerateObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDWallObjects3ObjectsGDgdjs_9546GameCode_9546GDPlayerObjects3ObjectsGDgdjs_9546GameCode_9546GDCrateObjects3Objects = Hashtable.newFrom({"Wall": gdjs.GameCode.GDWallObjects3, "Player": gdjs.GameCode.GDPlayerObjects3, "Crate": gdjs.GameCode.GDCrateObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCrateObjects3Objects = Hashtable.newFrom({"Crate": gdjs.GameCode.GDCrateObjects3});
gdjs.GameCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Crate"), gdjs.GameCode.GDCrateObjects3);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);
/* Reuse gdjs.GameCode.GDSpace_9595To_9595GenerateObjects3 */
gdjs.copyArray(runtimeScene.getObjects("Wall"), gdjs.GameCode.GDWallObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() > 80);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDSpace_95959595To_95959595GenerateObjects3Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDWallObjects3ObjectsGDgdjs_9546GameCode_9546GDPlayerObjects3ObjectsGDgdjs_9546GameCode_9546GDCrateObjects3Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() < 28);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDSpace_9595To_9595GenerateObjects3 */
/* Reuse gdjs.GameCode.GDCrateObjects3 */
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCrateObjects3Objects, (( gdjs.GameCode.GDSpace_9595To_9595GenerateObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDSpace_9595To_9595GenerateObjects3[0].getPointX("")), (( gdjs.GameCode.GDSpace_9595To_9595GenerateObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDSpace_9595To_9595GenerateObjects3[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.GameCode.GDSpace_9595To_9595GenerateObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDSpace_9595To_9595GenerateObjects3[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}}

}


};gdjs.GameCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.random(100));
}
{ //Subevents
gdjs.GameCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Space_To_Generate"), gdjs.GameCode.GDSpace_9595To_9595GenerateObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickRandomObject((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDSpace_95959595To_95959595GenerateObjects3Objects);
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDFireObjects1Objects = Hashtable.newFrom({"Fire": gdjs.GameCode.GDFireObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDRight_95959595FireObjects1Objects = Hashtable.newFrom({"Right_Fire": gdjs.GameCode.GDRight_9595FireObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDLeft_95959595FireObjects1Objects = Hashtable.newFrom({"Left_Fire": gdjs.GameCode.GDLeft_9595FireObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDUp_95959595FireObjects1Objects = Hashtable.newFrom({"Up_Fire": gdjs.GameCode.GDUp_9595FireObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDown_95959595FireObjects1Objects = Hashtable.newFrom({"Down_Fire": gdjs.GameCode.GDDown_9595FireObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects1});
gdjs.GameCode.asyncCallback11503356 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameOver", false);
}gdjs.GameCode.localVariables.length = 0;
}
gdjs.GameCode.eventsList9 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.GameCode.asyncCallback11503356(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GameCode.mapOfEmptyGDCrateObjects = Hashtable.newFrom({"Crate": []});
gdjs.GameCode.mapOfEmptyGDBirdObjects = Hashtable.newFrom({"Bird": []});
gdjs.GameCode.mapOfEmptyGDTlacuacheObjects = Hashtable.newFrom({"Tlacuache": []});
gdjs.GameCode.mapOfEmptyGDSeedsObjects = Hashtable.newFrom({"Seeds": []});
gdjs.GameCode.asyncCallback10384508 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(9).setBoolean(false);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameOver", false);
}gdjs.GameCode.localVariables.length = 0;
}
gdjs.GameCode.eventsList10 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.GameCode.asyncCallback10384508(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GameCode.eventsList11 = function(runtimeScene) {

{



}


{



}


{



}


{



}


{


gdjs.GameCode.eventsList1(runtimeScene);
}


{


gdjs.GameCode.eventsList3(runtimeScene);
}


{



}


{



}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Crate"), gdjs.GameCode.GDCrateObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tile_Roof"), gdjs.GameCode.GDTile_9595RoofObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tile_Wall"), gdjs.GameCode.GDTile_9595WallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Wall"), gdjs.GameCode.GDWallObjects1);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].separateFromObjectsList(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDTile_95959595WallObjects1ObjectsGDgdjs_9546GameCode_9546GDTile_95959595RoofObjects1ObjectsGDgdjs_9546GameCode_9546GDWallObjects1ObjectsGDgdjs_9546GameCode_9546GDCrateObjects1Objects, false);
}
}}

}


{



}


{



}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Bomb"), gdjs.GameCode.GDBombObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDBombObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDBombObjects1[i].hasAnimationEndedLegacy() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDBombObjects1[k] = gdjs.GameCode.GDBombObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDBombObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDBombObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
gdjs.GameCode.GDFireObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDFireObjects1Objects, (( gdjs.GameCode.GDBombObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDBombObjects1[0].getPointX("")), (( gdjs.GameCode.GDBombObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDBombObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.GameCode.GDFireObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFireObjects1[i].setZOrder(1);
}
}{for(var i = 0, len = gdjs.GameCode.GDBombObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBombObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].returnVariable(gdjs.GameCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Fire"), gdjs.GameCode.GDFireObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDFireObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDFireObjects1[i].getAnimationFrame() == 3 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDFireObjects1[k] = gdjs.GameCode.GDFireObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDFireObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDFireObjects1 */
gdjs.GameCode.GDDown_9595FireObjects1.length = 0;

gdjs.GameCode.GDLeft_9595FireObjects1.length = 0;

gdjs.GameCode.GDRight_9595FireObjects1.length = 0;

gdjs.GameCode.GDUp_9595FireObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDRight_95959595FireObjects1Objects, (( gdjs.GameCode.GDFireObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDFireObjects1[0].getPointX("")) + 64, (( gdjs.GameCode.GDFireObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDFireObjects1[0].getPointY("")), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDUp_95959595FireObjects1Objects, (( gdjs.GameCode.GDFireObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDFireObjects1[0].getPointX("")), (( gdjs.GameCode.GDFireObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDFireObjects1[0].getPointY("")) - 64, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDLeft_95959595FireObjects1Objects, (( gdjs.GameCode.GDFireObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDFireObjects1[0].getPointX("")) - 64, (( gdjs.GameCode.GDFireObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDFireObjects1[0].getPointY("")), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDown_95959595FireObjects1Objects, (( gdjs.GameCode.GDFireObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDFireObjects1[0].getPointX("")), (( gdjs.GameCode.GDFireObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDFireObjects1[0].getPointY("")) + 64, "");
}{for(var i = 0, len = gdjs.GameCode.GDRight_9595FireObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDRight_9595FireObjects1[i].setZOrder(1);
}
}{for(var i = 0, len = gdjs.GameCode.GDUp_9595FireObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDUp_9595FireObjects1[i].setZOrder(1);
}
}{for(var i = 0, len = gdjs.GameCode.GDLeft_9595FireObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDLeft_9595FireObjects1[i].setZOrder(1);
}
}{for(var i = 0, len = gdjs.GameCode.GDDown_9595FireObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDDown_9595FireObjects1[i].setZOrder(1);
}
}{for(var i = 0, len = gdjs.GameCode.GDFireObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFireObjects1[i].returnVariable(gdjs.GameCode.GDFireObjects1[i].getVariables().getFromIndex(0)).add(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Fire"), gdjs.GameCode.GDFireObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDFireObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDFireObjects1[i].getVariableNumber(gdjs.GameCode.GDFireObjects1[i].getVariables().getFromIndex(0)) >= 0.3 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDFireObjects1[k] = gdjs.GameCode.GDFireObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDFireObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Down_Fire"), gdjs.GameCode.GDDown_9595FireObjects1);
/* Reuse gdjs.GameCode.GDFireObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Left_Fire"), gdjs.GameCode.GDLeft_9595FireObjects1);
gdjs.copyArray(runtimeScene.getObjects("Right_Fire"), gdjs.GameCode.GDRight_9595FireObjects1);
gdjs.copyArray(runtimeScene.getObjects("Up_Fire"), gdjs.GameCode.GDUp_9595FireObjects1);
{for(var i = 0, len = gdjs.GameCode.GDFireObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFireObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDRight_9595FireObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDRight_9595FireObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDLeft_9595FireObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDLeft_9595FireObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDUp_9595FireObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDUp_9595FireObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDDown_9595FireObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDDown_9595FireObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getScene().getVariables().getFromIndex(4).setBoolean(false);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Crate"), gdjs.GameCode.GDCrateObjects1);
gdjs.copyArray(runtimeScene.getObjects("Right_Fire"), gdjs.GameCode.GDRight_9595FireObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDRight_95959595FireObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCrateObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCrateObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDCrateObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCrateObjects1[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.GameCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Crate"), gdjs.GameCode.GDCrateObjects1);
gdjs.copyArray(runtimeScene.getObjects("Left_Fire"), gdjs.GameCode.GDLeft_9595FireObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDLeft_95959595FireObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCrateObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCrateObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDCrateObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCrateObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Crate"), gdjs.GameCode.GDCrateObjects1);
gdjs.copyArray(runtimeScene.getObjects("Up_Fire"), gdjs.GameCode.GDUp_9595FireObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDUp_95959595FireObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCrateObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCrateObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDCrateObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCrateObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Crate"), gdjs.GameCode.GDCrateObjects1);
gdjs.copyArray(runtimeScene.getObjects("Down_Fire"), gdjs.GameCode.GDDown_9595FireObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDown_95959595FireObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCrateObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCrateObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDCrateObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCrateObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bird"), gdjs.GameCode.GDBirdObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBirdObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDBirdObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDBirdObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBirdObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(5);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tlacuache"), gdjs.GameCode.GDTlacuacheObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDTlacuacheObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDTlacuacheObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDTlacuacheObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDTlacuacheObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(10);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Seeds"), gdjs.GameCode.GDSeedsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDSeedsObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDSeedsObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDSeedsObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDSeedsObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(15);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


const repeatCount2 = 20;
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {

let isConditionTrue_0 = false;
if (true)
{

{ //Subevents: 
gdjs.GameCode.eventsList8(runtimeScene);} //Subevents end.
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() >= 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Heart1"), gdjs.GameCode.GDHeart1Objects1);
{for(var i = 0, len = gdjs.GameCode.GDHeart1Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDHeart1Objects1[i].getBehavior("Animation").setAnimationName("Alive");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() >= 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Heart2"), gdjs.GameCode.GDHeart2Objects1);
{for(var i = 0, len = gdjs.GameCode.GDHeart2Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDHeart2Objects1[i].getBehavior("Animation").setAnimationName("Alive");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() >= 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Heart3"), gdjs.GameCode.GDHeart3Objects1);
{for(var i = 0, len = gdjs.GameCode.GDHeart3Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDHeart3Objects1[i].getBehavior("Animation").setAnimationName("Alive");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() <= 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Heart1"), gdjs.GameCode.GDHeart1Objects1);
{for(var i = 0, len = gdjs.GameCode.GDHeart1Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDHeart1Objects1[i].getBehavior("Animation").setAnimationName("Dead");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() <= 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Heart2"), gdjs.GameCode.GDHeart2Objects1);
{for(var i = 0, len = gdjs.GameCode.GDHeart2Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDHeart2Objects1[i].getBehavior("Animation").setAnimationName("Dead");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() <= 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Heart3"), gdjs.GameCode.GDHeart3Objects1);
{for(var i = 0, len = gdjs.GameCode.GDHeart3Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDHeart3Objects1[i].getBehavior("Animation").setAnimationName("Dead");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fire"), gdjs.GameCode.GDFireObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDFireObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(8).getAsBoolean();
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).sub(1);
}{runtimeScene.getScene().getVariables().getFromIndex(8).setBoolean(true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Right_Fire"), gdjs.GameCode.GDRight_9595FireObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDRight_95959595FireObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(8).getAsBoolean();
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).sub(1);
}{runtimeScene.getScene().getVariables().getFromIndex(8).setBoolean(true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Left_Fire"), gdjs.GameCode.GDLeft_9595FireObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDLeft_95959595FireObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(8).getAsBoolean();
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).sub(1);
}{runtimeScene.getScene().getVariables().getFromIndex(8).setBoolean(true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Up_Fire"), gdjs.GameCode.GDUp_9595FireObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDUp_95959595FireObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(8).getAsBoolean();
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).sub(1);
}{runtimeScene.getScene().getVariables().getFromIndex(8).setBoolean(true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Down_Fire"), gdjs.GameCode.GDDown_9595FireObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDown_95959595FireObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(8).getAsBoolean();
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).sub(1);
}{runtimeScene.getScene().getVariables().getFromIndex(8).setBoolean(true);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.GameCode.GDScoreTextObjects1);
{for(var i = 0, len = gdjs.GameCode.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDScoreTextObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() == 0);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList9(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfEmptyGDCrateObjects) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfEmptyGDBirdObjects) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfEmptyGDTlacuacheObjects) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfEmptyGDSeedsObjects) == 0;
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(9).setBoolean(true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(9).getAsBoolean();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList10(runtimeScene);} //End of subevents
}

}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDBombObjects1.length = 0;
gdjs.GameCode.GDBombObjects2.length = 0;
gdjs.GameCode.GDBombObjects3.length = 0;
gdjs.GameCode.GDBombObjects4.length = 0;
gdjs.GameCode.GDCrateObjects1.length = 0;
gdjs.GameCode.GDCrateObjects2.length = 0;
gdjs.GameCode.GDCrateObjects3.length = 0;
gdjs.GameCode.GDCrateObjects4.length = 0;
gdjs.GameCode.GDFireObjects1.length = 0;
gdjs.GameCode.GDFireObjects2.length = 0;
gdjs.GameCode.GDFireObjects3.length = 0;
gdjs.GameCode.GDFireObjects4.length = 0;
gdjs.GameCode.GDWallObjects1.length = 0;
gdjs.GameCode.GDWallObjects2.length = 0;
gdjs.GameCode.GDWallObjects3.length = 0;
gdjs.GameCode.GDWallObjects4.length = 0;
gdjs.GameCode.GDPlayerObjects1.length = 0;
gdjs.GameCode.GDPlayerObjects2.length = 0;
gdjs.GameCode.GDPlayerObjects3.length = 0;
gdjs.GameCode.GDPlayerObjects4.length = 0;
gdjs.GameCode.GDTile_9595GrassObjects1.length = 0;
gdjs.GameCode.GDTile_9595GrassObjects2.length = 0;
gdjs.GameCode.GDTile_9595GrassObjects3.length = 0;
gdjs.GameCode.GDTile_9595GrassObjects4.length = 0;
gdjs.GameCode.GDTile_9595WallObjects1.length = 0;
gdjs.GameCode.GDTile_9595WallObjects2.length = 0;
gdjs.GameCode.GDTile_9595WallObjects3.length = 0;
gdjs.GameCode.GDTile_9595WallObjects4.length = 0;
gdjs.GameCode.GDTile_9595RoofObjects1.length = 0;
gdjs.GameCode.GDTile_9595RoofObjects2.length = 0;
gdjs.GameCode.GDTile_9595RoofObjects3.length = 0;
gdjs.GameCode.GDTile_9595RoofObjects4.length = 0;
gdjs.GameCode.GDRight_9595FireObjects1.length = 0;
gdjs.GameCode.GDRight_9595FireObjects2.length = 0;
gdjs.GameCode.GDRight_9595FireObjects3.length = 0;
gdjs.GameCode.GDRight_9595FireObjects4.length = 0;
gdjs.GameCode.GDLeft_9595FireObjects1.length = 0;
gdjs.GameCode.GDLeft_9595FireObjects2.length = 0;
gdjs.GameCode.GDLeft_9595FireObjects3.length = 0;
gdjs.GameCode.GDLeft_9595FireObjects4.length = 0;
gdjs.GameCode.GDUp_9595FireObjects1.length = 0;
gdjs.GameCode.GDUp_9595FireObjects2.length = 0;
gdjs.GameCode.GDUp_9595FireObjects3.length = 0;
gdjs.GameCode.GDUp_9595FireObjects4.length = 0;
gdjs.GameCode.GDDown_9595FireObjects1.length = 0;
gdjs.GameCode.GDDown_9595FireObjects2.length = 0;
gdjs.GameCode.GDDown_9595FireObjects3.length = 0;
gdjs.GameCode.GDDown_9595FireObjects4.length = 0;
gdjs.GameCode.GDTile_9595FloorObjects1.length = 0;
gdjs.GameCode.GDTile_9595FloorObjects2.length = 0;
gdjs.GameCode.GDTile_9595FloorObjects3.length = 0;
gdjs.GameCode.GDTile_9595FloorObjects4.length = 0;
gdjs.GameCode.GDbackgroundObjects1.length = 0;
gdjs.GameCode.GDbackgroundObjects2.length = 0;
gdjs.GameCode.GDbackgroundObjects3.length = 0;
gdjs.GameCode.GDbackgroundObjects4.length = 0;
gdjs.GameCode.GDSpace_9595To_9595GenerateObjects1.length = 0;
gdjs.GameCode.GDSpace_9595To_9595GenerateObjects2.length = 0;
gdjs.GameCode.GDSpace_9595To_9595GenerateObjects3.length = 0;
gdjs.GameCode.GDSpace_9595To_9595GenerateObjects4.length = 0;
gdjs.GameCode.GDFlatDarkJoystickObjects1.length = 0;
gdjs.GameCode.GDFlatDarkJoystickObjects2.length = 0;
gdjs.GameCode.GDFlatDarkJoystickObjects3.length = 0;
gdjs.GameCode.GDFlatDarkJoystickObjects4.length = 0;
gdjs.GameCode.GDBirdObjects1.length = 0;
gdjs.GameCode.GDBirdObjects2.length = 0;
gdjs.GameCode.GDBirdObjects3.length = 0;
gdjs.GameCode.GDBirdObjects4.length = 0;
gdjs.GameCode.GDTlacuacheObjects1.length = 0;
gdjs.GameCode.GDTlacuacheObjects2.length = 0;
gdjs.GameCode.GDTlacuacheObjects3.length = 0;
gdjs.GameCode.GDTlacuacheObjects4.length = 0;
gdjs.GameCode.GDSeedsObjects1.length = 0;
gdjs.GameCode.GDSeedsObjects2.length = 0;
gdjs.GameCode.GDSeedsObjects3.length = 0;
gdjs.GameCode.GDSeedsObjects4.length = 0;
gdjs.GameCode.GDArrowButtonObjects1.length = 0;
gdjs.GameCode.GDArrowButtonObjects2.length = 0;
gdjs.GameCode.GDArrowButtonObjects3.length = 0;
gdjs.GameCode.GDArrowButtonObjects4.length = 0;
gdjs.GameCode.GDWaterButtonObjects1.length = 0;
gdjs.GameCode.GDWaterButtonObjects2.length = 0;
gdjs.GameCode.GDWaterButtonObjects3.length = 0;
gdjs.GameCode.GDWaterButtonObjects4.length = 0;
gdjs.GameCode.GDHeart1Objects1.length = 0;
gdjs.GameCode.GDHeart1Objects2.length = 0;
gdjs.GameCode.GDHeart1Objects3.length = 0;
gdjs.GameCode.GDHeart1Objects4.length = 0;
gdjs.GameCode.GDHeart2Objects1.length = 0;
gdjs.GameCode.GDHeart2Objects2.length = 0;
gdjs.GameCode.GDHeart2Objects3.length = 0;
gdjs.GameCode.GDHeart2Objects4.length = 0;
gdjs.GameCode.GDHeart3Objects1.length = 0;
gdjs.GameCode.GDHeart3Objects2.length = 0;
gdjs.GameCode.GDHeart3Objects3.length = 0;
gdjs.GameCode.GDHeart3Objects4.length = 0;
gdjs.GameCode.GDScoreImageObjects1.length = 0;
gdjs.GameCode.GDScoreImageObjects2.length = 0;
gdjs.GameCode.GDScoreImageObjects3.length = 0;
gdjs.GameCode.GDScoreImageObjects4.length = 0;
gdjs.GameCode.GDScoreTextObjects1.length = 0;
gdjs.GameCode.GDScoreTextObjects2.length = 0;
gdjs.GameCode.GDScoreTextObjects3.length = 0;
gdjs.GameCode.GDScoreTextObjects4.length = 0;

gdjs.GameCode.eventsList11(runtimeScene);
gdjs.GameCode.GDBombObjects1.length = 0;
gdjs.GameCode.GDBombObjects2.length = 0;
gdjs.GameCode.GDBombObjects3.length = 0;
gdjs.GameCode.GDBombObjects4.length = 0;
gdjs.GameCode.GDCrateObjects1.length = 0;
gdjs.GameCode.GDCrateObjects2.length = 0;
gdjs.GameCode.GDCrateObjects3.length = 0;
gdjs.GameCode.GDCrateObjects4.length = 0;
gdjs.GameCode.GDFireObjects1.length = 0;
gdjs.GameCode.GDFireObjects2.length = 0;
gdjs.GameCode.GDFireObjects3.length = 0;
gdjs.GameCode.GDFireObjects4.length = 0;
gdjs.GameCode.GDWallObjects1.length = 0;
gdjs.GameCode.GDWallObjects2.length = 0;
gdjs.GameCode.GDWallObjects3.length = 0;
gdjs.GameCode.GDWallObjects4.length = 0;
gdjs.GameCode.GDPlayerObjects1.length = 0;
gdjs.GameCode.GDPlayerObjects2.length = 0;
gdjs.GameCode.GDPlayerObjects3.length = 0;
gdjs.GameCode.GDPlayerObjects4.length = 0;
gdjs.GameCode.GDTile_9595GrassObjects1.length = 0;
gdjs.GameCode.GDTile_9595GrassObjects2.length = 0;
gdjs.GameCode.GDTile_9595GrassObjects3.length = 0;
gdjs.GameCode.GDTile_9595GrassObjects4.length = 0;
gdjs.GameCode.GDTile_9595WallObjects1.length = 0;
gdjs.GameCode.GDTile_9595WallObjects2.length = 0;
gdjs.GameCode.GDTile_9595WallObjects3.length = 0;
gdjs.GameCode.GDTile_9595WallObjects4.length = 0;
gdjs.GameCode.GDTile_9595RoofObjects1.length = 0;
gdjs.GameCode.GDTile_9595RoofObjects2.length = 0;
gdjs.GameCode.GDTile_9595RoofObjects3.length = 0;
gdjs.GameCode.GDTile_9595RoofObjects4.length = 0;
gdjs.GameCode.GDRight_9595FireObjects1.length = 0;
gdjs.GameCode.GDRight_9595FireObjects2.length = 0;
gdjs.GameCode.GDRight_9595FireObjects3.length = 0;
gdjs.GameCode.GDRight_9595FireObjects4.length = 0;
gdjs.GameCode.GDLeft_9595FireObjects1.length = 0;
gdjs.GameCode.GDLeft_9595FireObjects2.length = 0;
gdjs.GameCode.GDLeft_9595FireObjects3.length = 0;
gdjs.GameCode.GDLeft_9595FireObjects4.length = 0;
gdjs.GameCode.GDUp_9595FireObjects1.length = 0;
gdjs.GameCode.GDUp_9595FireObjects2.length = 0;
gdjs.GameCode.GDUp_9595FireObjects3.length = 0;
gdjs.GameCode.GDUp_9595FireObjects4.length = 0;
gdjs.GameCode.GDDown_9595FireObjects1.length = 0;
gdjs.GameCode.GDDown_9595FireObjects2.length = 0;
gdjs.GameCode.GDDown_9595FireObjects3.length = 0;
gdjs.GameCode.GDDown_9595FireObjects4.length = 0;
gdjs.GameCode.GDTile_9595FloorObjects1.length = 0;
gdjs.GameCode.GDTile_9595FloorObjects2.length = 0;
gdjs.GameCode.GDTile_9595FloorObjects3.length = 0;
gdjs.GameCode.GDTile_9595FloorObjects4.length = 0;
gdjs.GameCode.GDbackgroundObjects1.length = 0;
gdjs.GameCode.GDbackgroundObjects2.length = 0;
gdjs.GameCode.GDbackgroundObjects3.length = 0;
gdjs.GameCode.GDbackgroundObjects4.length = 0;
gdjs.GameCode.GDSpace_9595To_9595GenerateObjects1.length = 0;
gdjs.GameCode.GDSpace_9595To_9595GenerateObjects2.length = 0;
gdjs.GameCode.GDSpace_9595To_9595GenerateObjects3.length = 0;
gdjs.GameCode.GDSpace_9595To_9595GenerateObjects4.length = 0;
gdjs.GameCode.GDFlatDarkJoystickObjects1.length = 0;
gdjs.GameCode.GDFlatDarkJoystickObjects2.length = 0;
gdjs.GameCode.GDFlatDarkJoystickObjects3.length = 0;
gdjs.GameCode.GDFlatDarkJoystickObjects4.length = 0;
gdjs.GameCode.GDBirdObjects1.length = 0;
gdjs.GameCode.GDBirdObjects2.length = 0;
gdjs.GameCode.GDBirdObjects3.length = 0;
gdjs.GameCode.GDBirdObjects4.length = 0;
gdjs.GameCode.GDTlacuacheObjects1.length = 0;
gdjs.GameCode.GDTlacuacheObjects2.length = 0;
gdjs.GameCode.GDTlacuacheObjects3.length = 0;
gdjs.GameCode.GDTlacuacheObjects4.length = 0;
gdjs.GameCode.GDSeedsObjects1.length = 0;
gdjs.GameCode.GDSeedsObjects2.length = 0;
gdjs.GameCode.GDSeedsObjects3.length = 0;
gdjs.GameCode.GDSeedsObjects4.length = 0;
gdjs.GameCode.GDArrowButtonObjects1.length = 0;
gdjs.GameCode.GDArrowButtonObjects2.length = 0;
gdjs.GameCode.GDArrowButtonObjects3.length = 0;
gdjs.GameCode.GDArrowButtonObjects4.length = 0;
gdjs.GameCode.GDWaterButtonObjects1.length = 0;
gdjs.GameCode.GDWaterButtonObjects2.length = 0;
gdjs.GameCode.GDWaterButtonObjects3.length = 0;
gdjs.GameCode.GDWaterButtonObjects4.length = 0;
gdjs.GameCode.GDHeart1Objects1.length = 0;
gdjs.GameCode.GDHeart1Objects2.length = 0;
gdjs.GameCode.GDHeart1Objects3.length = 0;
gdjs.GameCode.GDHeart1Objects4.length = 0;
gdjs.GameCode.GDHeart2Objects1.length = 0;
gdjs.GameCode.GDHeart2Objects2.length = 0;
gdjs.GameCode.GDHeart2Objects3.length = 0;
gdjs.GameCode.GDHeart2Objects4.length = 0;
gdjs.GameCode.GDHeart3Objects1.length = 0;
gdjs.GameCode.GDHeart3Objects2.length = 0;
gdjs.GameCode.GDHeart3Objects3.length = 0;
gdjs.GameCode.GDHeart3Objects4.length = 0;
gdjs.GameCode.GDScoreImageObjects1.length = 0;
gdjs.GameCode.GDScoreImageObjects2.length = 0;
gdjs.GameCode.GDScoreImageObjects3.length = 0;
gdjs.GameCode.GDScoreImageObjects4.length = 0;
gdjs.GameCode.GDScoreTextObjects1.length = 0;
gdjs.GameCode.GDScoreTextObjects2.length = 0;
gdjs.GameCode.GDScoreTextObjects3.length = 0;
gdjs.GameCode.GDScoreTextObjects4.length = 0;


return;

}

gdjs['GameCode'] = gdjs.GameCode;
