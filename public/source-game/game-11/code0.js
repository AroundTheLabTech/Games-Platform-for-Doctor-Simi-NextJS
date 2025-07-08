gdjs.Game_32SceneCode = {};
gdjs.Game_32SceneCode.localVariables = [];
gdjs.Game_32SceneCode.GDRoad_95953DObjects1= [];
gdjs.Game_32SceneCode.GDRoad_95953DObjects2= [];
gdjs.Game_32SceneCode.GDRoad_95953DObjects3= [];
gdjs.Game_32SceneCode.GDRoad_95953DObjects4= [];
gdjs.Game_32SceneCode.GDSkyboxObjects1= [];
gdjs.Game_32SceneCode.GDSkyboxObjects2= [];
gdjs.Game_32SceneCode.GDSkyboxObjects3= [];
gdjs.Game_32SceneCode.GDSkyboxObjects4= [];
gdjs.Game_32SceneCode.GDGrass_95953DObjects1= [];
gdjs.Game_32SceneCode.GDGrass_95953DObjects2= [];
gdjs.Game_32SceneCode.GDGrass_95953DObjects3= [];
gdjs.Game_32SceneCode.GDGrass_95953DObjects4= [];
gdjs.Game_32SceneCode.GDPlayerObjects1= [];
gdjs.Game_32SceneCode.GDPlayerObjects2= [];
gdjs.Game_32SceneCode.GDPlayerObjects3= [];
gdjs.Game_32SceneCode.GDPlayerObjects4= [];
gdjs.Game_32SceneCode.GDWallObjects1= [];
gdjs.Game_32SceneCode.GDWallObjects2= [];
gdjs.Game_32SceneCode.GDWallObjects3= [];
gdjs.Game_32SceneCode.GDWallObjects4= [];
gdjs.Game_32SceneCode.GDLeft_9595ButtonObjects1= [];
gdjs.Game_32SceneCode.GDLeft_9595ButtonObjects2= [];
gdjs.Game_32SceneCode.GDLeft_9595ButtonObjects3= [];
gdjs.Game_32SceneCode.GDLeft_9595ButtonObjects4= [];
gdjs.Game_32SceneCode.GDRigth_9595ButtonObjects1= [];
gdjs.Game_32SceneCode.GDRigth_9595ButtonObjects2= [];
gdjs.Game_32SceneCode.GDRigth_9595ButtonObjects3= [];
gdjs.Game_32SceneCode.GDRigth_9595ButtonObjects4= [];
gdjs.Game_32SceneCode.GDFish_95951Objects1= [];
gdjs.Game_32SceneCode.GDFish_95951Objects2= [];
gdjs.Game_32SceneCode.GDFish_95951Objects3= [];
gdjs.Game_32SceneCode.GDFish_95951Objects4= [];
gdjs.Game_32SceneCode.GDFish_95952Objects1= [];
gdjs.Game_32SceneCode.GDFish_95952Objects2= [];
gdjs.Game_32SceneCode.GDFish_95952Objects3= [];
gdjs.Game_32SceneCode.GDFish_95952Objects4= [];
gdjs.Game_32SceneCode.GDFish_95953Objects1= [];
gdjs.Game_32SceneCode.GDFish_95953Objects2= [];
gdjs.Game_32SceneCode.GDFish_95953Objects3= [];
gdjs.Game_32SceneCode.GDFish_95953Objects4= [];
gdjs.Game_32SceneCode.GDCoinObjects1= [];
gdjs.Game_32SceneCode.GDCoinObjects2= [];
gdjs.Game_32SceneCode.GDCoinObjects3= [];
gdjs.Game_32SceneCode.GDCoinObjects4= [];
gdjs.Game_32SceneCode.GDLivesTextObjects1= [];
gdjs.Game_32SceneCode.GDLivesTextObjects2= [];
gdjs.Game_32SceneCode.GDLivesTextObjects3= [];
gdjs.Game_32SceneCode.GDLivesTextObjects4= [];
gdjs.Game_32SceneCode.GDScoreTextObjects1= [];
gdjs.Game_32SceneCode.GDScoreTextObjects2= [];
gdjs.Game_32SceneCode.GDScoreTextObjects3= [];
gdjs.Game_32SceneCode.GDScoreTextObjects4= [];
gdjs.Game_32SceneCode.GDWall2Objects1= [];
gdjs.Game_32SceneCode.GDWall2Objects2= [];
gdjs.Game_32SceneCode.GDWall2Objects3= [];
gdjs.Game_32SceneCode.GDWall2Objects4= [];
gdjs.Game_32SceneCode.GDScoreImageObjects1= [];
gdjs.Game_32SceneCode.GDScoreImageObjects2= [];
gdjs.Game_32SceneCode.GDScoreImageObjects3= [];
gdjs.Game_32SceneCode.GDScoreImageObjects4= [];
gdjs.Game_32SceneCode.GDLivesImageObjects1= [];
gdjs.Game_32SceneCode.GDLivesImageObjects2= [];
gdjs.Game_32SceneCode.GDLivesImageObjects3= [];
gdjs.Game_32SceneCode.GDLivesImageObjects4= [];


gdjs.Game_32SceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Left_Button"), gdjs.Game_32SceneCode.GDLeft_9595ButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDLeft_9595ButtonObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDLeft_9595ButtonObjects2[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDLeft_9595ButtonObjects2[k] = gdjs.Game_32SceneCode.GDLeft_9595ButtonObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDLeft_9595ButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects2[i].getY() > 1140 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects2[k] = gdjs.Game_32SceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].setY(gdjs.Game_32SceneCode.GDPlayerObjects2[i].getY() - (2));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Rigth_Button"), gdjs.Game_32SceneCode.GDRigth_9595ButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDRigth_9595ButtonObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDRigth_9595ButtonObjects2[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDRigth_9595ButtonObjects2[k] = gdjs.Game_32SceneCode.GDRigth_9595ButtonObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDRigth_9595ButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects2[i].getY() < 1940 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects2[k] = gdjs.Game_32SceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].setY(gdjs.Game_32SceneCode.GDPlayerObjects2[i].getY() + (2));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].setY(gdjs.Game_32SceneCode.GDPlayerObjects2[i].getY() - (2));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].setY(gdjs.Game_32SceneCode.GDPlayerObjects1[i].getY() + (2));
}
}}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDFish_959595953Objects3Objects = Hashtable.newFrom({"Fish_3": gdjs.Game_32SceneCode.GDFish_95953Objects3});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDFish_959595951Objects3Objects = Hashtable.newFrom({"Fish_1": gdjs.Game_32SceneCode.GDFish_95951Objects3});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDFish_959595952Objects3Objects = Hashtable.newFrom({"Fish_2": gdjs.Game_32SceneCode.GDFish_95952Objects3});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDFish_959595953Objects3Objects = Hashtable.newFrom({"Fish_3": gdjs.Game_32SceneCode.GDFish_95953Objects3});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDFish_959595951Objects3Objects = Hashtable.newFrom({"Fish_1": gdjs.Game_32SceneCode.GDFish_95951Objects3});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDFish_959595952Objects3Objects = Hashtable.newFrom({"Fish_2": gdjs.Game_32SceneCode.GDFish_95952Objects3});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDCoinObjects3Objects = Hashtable.newFrom({"Coin": gdjs.Game_32SceneCode.GDCoinObjects3});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDCoinObjects3Objects = Hashtable.newFrom({"Coin": gdjs.Game_32SceneCode.GDCoinObjects3});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDCoinObjects3Objects = Hashtable.newFrom({"Coin": gdjs.Game_32SceneCode.GDCoinObjects3});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDWall2Objects3Objects = Hashtable.newFrom({"Wall2": gdjs.Game_32SceneCode.GDWall2Objects3});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDFish_959595951Objects3Objects = Hashtable.newFrom({"Fish_1": gdjs.Game_32SceneCode.GDFish_95951Objects3});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDWall2Objects3Objects = Hashtable.newFrom({"Wall2": gdjs.Game_32SceneCode.GDWall2Objects3});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDFish_959595952Objects3Objects = Hashtable.newFrom({"Fish_2": gdjs.Game_32SceneCode.GDFish_95952Objects3});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDWall2Objects3Objects = Hashtable.newFrom({"Wall2": gdjs.Game_32SceneCode.GDWall2Objects3});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDFish_959595953Objects2Objects = Hashtable.newFrom({"Fish_3": gdjs.Game_32SceneCode.GDFish_95953Objects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDWall2Objects2Objects = Hashtable.newFrom({"Wall2": gdjs.Game_32SceneCode.GDWall2Objects2});
gdjs.Game_32SceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Generate_Fish3_Time") >= 8;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects3);
gdjs.Game_32SceneCode.GDFish_95951Objects3.length = 0;

gdjs.Game_32SceneCode.GDFish_95953Objects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDFish_959595953Objects3Objects, (( gdjs.Game_32SceneCode.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects3[0].getX()) + gdjs.randomInRange(600, 700), gdjs.randomInRange(1436, 1856), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDFish_959595951Objects3Objects, (( gdjs.Game_32SceneCode.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects3[0].getX()) + gdjs.randomInRange(700, 800), gdjs.randomInRange(1436, 1856), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Generate_Fish3_Time");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Generate_Fish2_Time") >= 7;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects3);
gdjs.Game_32SceneCode.GDFish_95952Objects3.length = 0;

gdjs.Game_32SceneCode.GDFish_95953Objects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDFish_959595952Objects3Objects, (( gdjs.Game_32SceneCode.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects3[0].getX()) + gdjs.randomInRange(700, 800), gdjs.randomInRange(1436, 1856), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDFish_959595953Objects3Objects, (( gdjs.Game_32SceneCode.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects3[0].getX()) + gdjs.randomInRange(600, 700), gdjs.randomInRange(1436, 1856), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Generate_Fish2_Time");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Generate_Fish1_Time") >= 6;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects3);
gdjs.Game_32SceneCode.GDFish_95951Objects3.length = 0;

gdjs.Game_32SceneCode.GDFish_95952Objects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDFish_959595951Objects3Objects, (( gdjs.Game_32SceneCode.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects3[0].getX()) + gdjs.randomInRange(600, 700), gdjs.randomInRange(1436, 1856), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDFish_959595952Objects3Objects, (( gdjs.Game_32SceneCode.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects3[0].getX()) + gdjs.randomInRange(700, 800), gdjs.randomInRange(1436, 1856), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Generate_Fish1_Time");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Generate_Coin_Time") >= 5;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects3);
gdjs.Game_32SceneCode.GDCoinObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDCoinObjects3Objects, (( gdjs.Game_32SceneCode.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects3[0].getX()) + gdjs.randomInRange(600, 700), gdjs.randomInRange(1436, 1856), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDCoinObjects3Objects, (( gdjs.Game_32SceneCode.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects3[0].getX()) + gdjs.randomInRange(700, 800), gdjs.randomInRange(1436, 1856), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Generate_Coin_Time");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.Game_32SceneCode.GDCoinObjects3);
gdjs.copyArray(runtimeScene.getObjects("Wall2"), gdjs.Game_32SceneCode.GDWall2Objects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics3d.areObjectsColliding(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDCoinObjects3Objects, "Physics3D", gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDWall2Objects3Objects, "Physics3D", false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDCoinObjects3 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDCoinObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDCoinObjects3[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fish_1"), gdjs.Game_32SceneCode.GDFish_95951Objects3);
gdjs.copyArray(runtimeScene.getObjects("Wall2"), gdjs.Game_32SceneCode.GDWall2Objects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics3d.areObjectsColliding(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDFish_959595951Objects3Objects, "Physics3D", gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDWall2Objects3Objects, "Physics3D", false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDFish_95951Objects3 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDFish_95951Objects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDFish_95951Objects3[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fish_2"), gdjs.Game_32SceneCode.GDFish_95952Objects3);
gdjs.copyArray(runtimeScene.getObjects("Wall2"), gdjs.Game_32SceneCode.GDWall2Objects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics3d.areObjectsColliding(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDFish_959595952Objects3Objects, "Physics3D", gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDWall2Objects3Objects, "Physics3D", false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDFish_95952Objects3 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDFish_95952Objects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDFish_95952Objects3[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fish_3"), gdjs.Game_32SceneCode.GDFish_95953Objects2);
gdjs.copyArray(runtimeScene.getObjects("Wall2"), gdjs.Game_32SceneCode.GDWall2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics3d.areObjectsColliding(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDFish_959595953Objects2Objects, "Physics3D", gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDWall2Objects2Objects, "Physics3D", false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDFish_95953Objects2 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDFish_95953Objects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDFish_95953Objects2[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Game_32SceneCode.GDPlayerObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDCoinObjects2Objects = Hashtable.newFrom({"Coin": gdjs.Game_32SceneCode.GDCoinObjects2});
gdjs.Game_32SceneCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.Game_32SceneCode.GDCoinObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics3d.areObjectsColliding(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects2Objects, "Physics3D", gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDCoinObjects2Objects, "Physics3D", false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDCoinObjects2 */
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.Game_32SceneCode.GDScoreTextObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDCoinObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDCoinObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(10);
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDScoreTextObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDScoreTextObjects2[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Game_32SceneCode.GDPlayerObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDFish_959595951Objects2Objects = Hashtable.newFrom({"Fish_1": gdjs.Game_32SceneCode.GDFish_95951Objects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Game_32SceneCode.GDPlayerObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDFish_959595952Objects2Objects = Hashtable.newFrom({"Fish_2": gdjs.Game_32SceneCode.GDFish_95952Objects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Game_32SceneCode.GDPlayerObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDFish_959595953Objects1Objects = Hashtable.newFrom({"Fish_3": gdjs.Game_32SceneCode.GDFish_95953Objects1});
gdjs.Game_32SceneCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.common.mod(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber(), 100) == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() < 5);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() > runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LivesText"), gdjs.Game_32SceneCode.GDLivesTextObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDLivesTextObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDLivesTextObjects2[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fish_1"), gdjs.Game_32SceneCode.GDFish_95951Objects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics3d.areObjectsColliding(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects2Objects, "Physics3D", gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDFish_959595951Objects2Objects, "Physics3D", false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() > 0);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDFish_95951Objects2 */
gdjs.copyArray(runtimeScene.getObjects("LivesText"), gdjs.Game_32SceneCode.GDLivesTextObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(1).sub(1);
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDLivesTextObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDLivesTextObjects2[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDFish_95951Objects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDFish_95951Objects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fish_2"), gdjs.Game_32SceneCode.GDFish_95952Objects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics3d.areObjectsColliding(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects2Objects, "Physics3D", gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDFish_959595952Objects2Objects, "Physics3D", false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() > 0);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDFish_95952Objects2 */
gdjs.copyArray(runtimeScene.getObjects("LivesText"), gdjs.Game_32SceneCode.GDLivesTextObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(1).sub(1);
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDLivesTextObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDLivesTextObjects2[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDFish_95952Objects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDFish_95952Objects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fish_3"), gdjs.Game_32SceneCode.GDFish_95953Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics3d.areObjectsColliding(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects, "Physics3D", gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDFish_959595953Objects1Objects, "Physics3D", false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() > 0);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDFish_95953Objects1 */
gdjs.copyArray(runtimeScene.getObjects("LivesText"), gdjs.Game_32SceneCode.GDLivesTextObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(1).sub(1);
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDLivesTextObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDLivesTextObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDFish_95953Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDFish_95953Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.Game_32SceneCode.eventsList4 = function(runtimeScene) {

{


gdjs.Game_32SceneCode.eventsList1(runtimeScene);
}


{


gdjs.Game_32SceneCode.eventsList2(runtimeScene);
}


{


gdjs.Game_32SceneCode.eventsList3(runtimeScene);
}


};gdjs.Game_32SceneCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LivesText"), gdjs.Game_32SceneCode.GDLivesTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Generate_Coin_Time");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Generate_Fish1_Time");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Generate_Fish2_Time");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Generate_Fish3_Time");
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("Physics3D").setLinearVelocityX(150);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDLivesTextObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDLivesTextObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("Physics3D").setLinearVelocityX(150);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("Object3D").setZ(10);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
{gdjs.evtsExt__ThirdPersonCamera__LookFromDistanceAtPosition3D.func(runtimeScene, (( gdjs.Game_32SceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects1[0].getX()) - 300, 1695, (( gdjs.Game_32SceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects1[0].getZ()) + 150, 0, 90, 15, "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Wall"), gdjs.Game_32SceneCode.GDWallObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDWallObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDWallObjects1[i].setX((( gdjs.Game_32SceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects1[0].getX()) - 100);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Wall2"), gdjs.Game_32SceneCode.GDWall2Objects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDWall2Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDWall2Objects1[i].setX((( gdjs.Game_32SceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects1[0].getX()) - 500);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDWall2Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDWall2Objects1[i].getBehavior("Physics3D").setLinearVelocityX(100);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.Game_32SceneCode.eventsList0(runtimeScene);
}


{


gdjs.Game_32SceneCode.eventsList4(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() == 0);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Over", false);
}}

}


};

gdjs.Game_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32SceneCode.GDRoad_95953DObjects1.length = 0;
gdjs.Game_32SceneCode.GDRoad_95953DObjects2.length = 0;
gdjs.Game_32SceneCode.GDRoad_95953DObjects3.length = 0;
gdjs.Game_32SceneCode.GDRoad_95953DObjects4.length = 0;
gdjs.Game_32SceneCode.GDSkyboxObjects1.length = 0;
gdjs.Game_32SceneCode.GDSkyboxObjects2.length = 0;
gdjs.Game_32SceneCode.GDSkyboxObjects3.length = 0;
gdjs.Game_32SceneCode.GDSkyboxObjects4.length = 0;
gdjs.Game_32SceneCode.GDGrass_95953DObjects1.length = 0;
gdjs.Game_32SceneCode.GDGrass_95953DObjects2.length = 0;
gdjs.Game_32SceneCode.GDGrass_95953DObjects3.length = 0;
gdjs.Game_32SceneCode.GDGrass_95953DObjects4.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects3.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects4.length = 0;
gdjs.Game_32SceneCode.GDWallObjects1.length = 0;
gdjs.Game_32SceneCode.GDWallObjects2.length = 0;
gdjs.Game_32SceneCode.GDWallObjects3.length = 0;
gdjs.Game_32SceneCode.GDWallObjects4.length = 0;
gdjs.Game_32SceneCode.GDLeft_9595ButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDLeft_9595ButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDLeft_9595ButtonObjects3.length = 0;
gdjs.Game_32SceneCode.GDLeft_9595ButtonObjects4.length = 0;
gdjs.Game_32SceneCode.GDRigth_9595ButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDRigth_9595ButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDRigth_9595ButtonObjects3.length = 0;
gdjs.Game_32SceneCode.GDRigth_9595ButtonObjects4.length = 0;
gdjs.Game_32SceneCode.GDFish_95951Objects1.length = 0;
gdjs.Game_32SceneCode.GDFish_95951Objects2.length = 0;
gdjs.Game_32SceneCode.GDFish_95951Objects3.length = 0;
gdjs.Game_32SceneCode.GDFish_95951Objects4.length = 0;
gdjs.Game_32SceneCode.GDFish_95952Objects1.length = 0;
gdjs.Game_32SceneCode.GDFish_95952Objects2.length = 0;
gdjs.Game_32SceneCode.GDFish_95952Objects3.length = 0;
gdjs.Game_32SceneCode.GDFish_95952Objects4.length = 0;
gdjs.Game_32SceneCode.GDFish_95953Objects1.length = 0;
gdjs.Game_32SceneCode.GDFish_95953Objects2.length = 0;
gdjs.Game_32SceneCode.GDFish_95953Objects3.length = 0;
gdjs.Game_32SceneCode.GDFish_95953Objects4.length = 0;
gdjs.Game_32SceneCode.GDCoinObjects1.length = 0;
gdjs.Game_32SceneCode.GDCoinObjects2.length = 0;
gdjs.Game_32SceneCode.GDCoinObjects3.length = 0;
gdjs.Game_32SceneCode.GDCoinObjects4.length = 0;
gdjs.Game_32SceneCode.GDLivesTextObjects1.length = 0;
gdjs.Game_32SceneCode.GDLivesTextObjects2.length = 0;
gdjs.Game_32SceneCode.GDLivesTextObjects3.length = 0;
gdjs.Game_32SceneCode.GDLivesTextObjects4.length = 0;
gdjs.Game_32SceneCode.GDScoreTextObjects1.length = 0;
gdjs.Game_32SceneCode.GDScoreTextObjects2.length = 0;
gdjs.Game_32SceneCode.GDScoreTextObjects3.length = 0;
gdjs.Game_32SceneCode.GDScoreTextObjects4.length = 0;
gdjs.Game_32SceneCode.GDWall2Objects1.length = 0;
gdjs.Game_32SceneCode.GDWall2Objects2.length = 0;
gdjs.Game_32SceneCode.GDWall2Objects3.length = 0;
gdjs.Game_32SceneCode.GDWall2Objects4.length = 0;
gdjs.Game_32SceneCode.GDScoreImageObjects1.length = 0;
gdjs.Game_32SceneCode.GDScoreImageObjects2.length = 0;
gdjs.Game_32SceneCode.GDScoreImageObjects3.length = 0;
gdjs.Game_32SceneCode.GDScoreImageObjects4.length = 0;
gdjs.Game_32SceneCode.GDLivesImageObjects1.length = 0;
gdjs.Game_32SceneCode.GDLivesImageObjects2.length = 0;
gdjs.Game_32SceneCode.GDLivesImageObjects3.length = 0;
gdjs.Game_32SceneCode.GDLivesImageObjects4.length = 0;

gdjs.Game_32SceneCode.eventsList5(runtimeScene);
gdjs.Game_32SceneCode.GDRoad_95953DObjects1.length = 0;
gdjs.Game_32SceneCode.GDRoad_95953DObjects2.length = 0;
gdjs.Game_32SceneCode.GDRoad_95953DObjects3.length = 0;
gdjs.Game_32SceneCode.GDRoad_95953DObjects4.length = 0;
gdjs.Game_32SceneCode.GDSkyboxObjects1.length = 0;
gdjs.Game_32SceneCode.GDSkyboxObjects2.length = 0;
gdjs.Game_32SceneCode.GDSkyboxObjects3.length = 0;
gdjs.Game_32SceneCode.GDSkyboxObjects4.length = 0;
gdjs.Game_32SceneCode.GDGrass_95953DObjects1.length = 0;
gdjs.Game_32SceneCode.GDGrass_95953DObjects2.length = 0;
gdjs.Game_32SceneCode.GDGrass_95953DObjects3.length = 0;
gdjs.Game_32SceneCode.GDGrass_95953DObjects4.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects3.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects4.length = 0;
gdjs.Game_32SceneCode.GDWallObjects1.length = 0;
gdjs.Game_32SceneCode.GDWallObjects2.length = 0;
gdjs.Game_32SceneCode.GDWallObjects3.length = 0;
gdjs.Game_32SceneCode.GDWallObjects4.length = 0;
gdjs.Game_32SceneCode.GDLeft_9595ButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDLeft_9595ButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDLeft_9595ButtonObjects3.length = 0;
gdjs.Game_32SceneCode.GDLeft_9595ButtonObjects4.length = 0;
gdjs.Game_32SceneCode.GDRigth_9595ButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDRigth_9595ButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDRigth_9595ButtonObjects3.length = 0;
gdjs.Game_32SceneCode.GDRigth_9595ButtonObjects4.length = 0;
gdjs.Game_32SceneCode.GDFish_95951Objects1.length = 0;
gdjs.Game_32SceneCode.GDFish_95951Objects2.length = 0;
gdjs.Game_32SceneCode.GDFish_95951Objects3.length = 0;
gdjs.Game_32SceneCode.GDFish_95951Objects4.length = 0;
gdjs.Game_32SceneCode.GDFish_95952Objects1.length = 0;
gdjs.Game_32SceneCode.GDFish_95952Objects2.length = 0;
gdjs.Game_32SceneCode.GDFish_95952Objects3.length = 0;
gdjs.Game_32SceneCode.GDFish_95952Objects4.length = 0;
gdjs.Game_32SceneCode.GDFish_95953Objects1.length = 0;
gdjs.Game_32SceneCode.GDFish_95953Objects2.length = 0;
gdjs.Game_32SceneCode.GDFish_95953Objects3.length = 0;
gdjs.Game_32SceneCode.GDFish_95953Objects4.length = 0;
gdjs.Game_32SceneCode.GDCoinObjects1.length = 0;
gdjs.Game_32SceneCode.GDCoinObjects2.length = 0;
gdjs.Game_32SceneCode.GDCoinObjects3.length = 0;
gdjs.Game_32SceneCode.GDCoinObjects4.length = 0;
gdjs.Game_32SceneCode.GDLivesTextObjects1.length = 0;
gdjs.Game_32SceneCode.GDLivesTextObjects2.length = 0;
gdjs.Game_32SceneCode.GDLivesTextObjects3.length = 0;
gdjs.Game_32SceneCode.GDLivesTextObjects4.length = 0;
gdjs.Game_32SceneCode.GDScoreTextObjects1.length = 0;
gdjs.Game_32SceneCode.GDScoreTextObjects2.length = 0;
gdjs.Game_32SceneCode.GDScoreTextObjects3.length = 0;
gdjs.Game_32SceneCode.GDScoreTextObjects4.length = 0;
gdjs.Game_32SceneCode.GDWall2Objects1.length = 0;
gdjs.Game_32SceneCode.GDWall2Objects2.length = 0;
gdjs.Game_32SceneCode.GDWall2Objects3.length = 0;
gdjs.Game_32SceneCode.GDWall2Objects4.length = 0;
gdjs.Game_32SceneCode.GDScoreImageObjects1.length = 0;
gdjs.Game_32SceneCode.GDScoreImageObjects2.length = 0;
gdjs.Game_32SceneCode.GDScoreImageObjects3.length = 0;
gdjs.Game_32SceneCode.GDScoreImageObjects4.length = 0;
gdjs.Game_32SceneCode.GDLivesImageObjects1.length = 0;
gdjs.Game_32SceneCode.GDLivesImageObjects2.length = 0;
gdjs.Game_32SceneCode.GDLivesImageObjects3.length = 0;
gdjs.Game_32SceneCode.GDLivesImageObjects4.length = 0;


return;

}

gdjs['Game_32SceneCode'] = gdjs.Game_32SceneCode;
