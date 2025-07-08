gdjs.Game_32OverCode = {};
gdjs.Game_32OverCode.localVariables = [];
gdjs.Game_32OverCode.GDBackgroundObjects1= [];
gdjs.Game_32OverCode.GDBackgroundObjects2= [];
gdjs.Game_32OverCode.GDBoardObjects1= [];
gdjs.Game_32OverCode.GDBoardObjects2= [];
gdjs.Game_32OverCode.GDRestartObjects1= [];
gdjs.Game_32OverCode.GDRestartObjects2= [];
gdjs.Game_32OverCode.GDSaveObjects1= [];
gdjs.Game_32OverCode.GDSaveObjects2= [];
gdjs.Game_32OverCode.GDScoreTextObjects1= [];
gdjs.Game_32OverCode.GDScoreTextObjects2= [];


gdjs.Game_32OverCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.Game_32OverCode.GDScoreTextObjects1);
{for(var i = 0, len = gdjs.Game_32OverCode.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDScoreTextObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Restart"), gdjs.Game_32OverCode.GDRestartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32OverCode.GDRestartObjects1.length;i<l;++i) {
    if ( gdjs.Game_32OverCode.GDRestartObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32OverCode.GDRestartObjects1[k] = gdjs.Game_32OverCode.GDRestartObjects1[i];
        ++k;
    }
}
gdjs.Game_32OverCode.GDRestartObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(5);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Scene", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Save"), gdjs.Game_32OverCode.GDSaveObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32OverCode.GDSaveObjects1.length;i<l;++i) {
    if ( gdjs.Game_32OverCode.GDSaveObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32OverCode.GDSaveObjects1[k] = gdjs.Game_32OverCode.GDSaveObjects1[i];
        ++k;
    }
}
gdjs.Game_32OverCode.GDSaveObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(5);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}}

}


};

gdjs.Game_32OverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32OverCode.GDBackgroundObjects1.length = 0;
gdjs.Game_32OverCode.GDBackgroundObjects2.length = 0;
gdjs.Game_32OverCode.GDBoardObjects1.length = 0;
gdjs.Game_32OverCode.GDBoardObjects2.length = 0;
gdjs.Game_32OverCode.GDRestartObjects1.length = 0;
gdjs.Game_32OverCode.GDRestartObjects2.length = 0;
gdjs.Game_32OverCode.GDSaveObjects1.length = 0;
gdjs.Game_32OverCode.GDSaveObjects2.length = 0;
gdjs.Game_32OverCode.GDScoreTextObjects1.length = 0;
gdjs.Game_32OverCode.GDScoreTextObjects2.length = 0;

gdjs.Game_32OverCode.eventsList0(runtimeScene);
gdjs.Game_32OverCode.GDBackgroundObjects1.length = 0;
gdjs.Game_32OverCode.GDBackgroundObjects2.length = 0;
gdjs.Game_32OverCode.GDBoardObjects1.length = 0;
gdjs.Game_32OverCode.GDBoardObjects2.length = 0;
gdjs.Game_32OverCode.GDRestartObjects1.length = 0;
gdjs.Game_32OverCode.GDRestartObjects2.length = 0;
gdjs.Game_32OverCode.GDSaveObjects1.length = 0;
gdjs.Game_32OverCode.GDSaveObjects2.length = 0;
gdjs.Game_32OverCode.GDScoreTextObjects1.length = 0;
gdjs.Game_32OverCode.GDScoreTextObjects2.length = 0;


return;

}

gdjs['Game_32OverCode'] = gdjs.Game_32OverCode;
