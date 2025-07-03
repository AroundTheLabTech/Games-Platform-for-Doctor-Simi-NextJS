gdjs.Game_32OverCode = {};
gdjs.Game_32OverCode.localVariables = [];
gdjs.Game_32OverCode.GDBackgroundObjects1= [];
gdjs.Game_32OverCode.GDBackgroundObjects2= [];
gdjs.Game_32OverCode.GDScoreImageObjects1= [];
gdjs.Game_32OverCode.GDScoreImageObjects2= [];
gdjs.Game_32OverCode.GDFinalScoreTextObjects1= [];
gdjs.Game_32OverCode.GDFinalScoreTextObjects2= [];
gdjs.Game_32OverCode.GDGameOverImageObjects1= [];
gdjs.Game_32OverCode.GDGameOverImageObjects2= [];
gdjs.Game_32OverCode.GDRestartButtonObjects1= [];
gdjs.Game_32OverCode.GDRestartButtonObjects2= [];
gdjs.Game_32OverCode.GDSaveButtonObjects1= [];
gdjs.Game_32OverCode.GDSaveButtonObjects2= [];


gdjs.Game_32OverCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FinalScoreText"), gdjs.Game_32OverCode.GDFinalScoreTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("GameOverImage"), gdjs.Game_32OverCode.GDGameOverImageObjects1);
gdjs.copyArray(runtimeScene.getObjects("RestartButton"), gdjs.Game_32OverCode.GDRestartButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("SaveButton"), gdjs.Game_32OverCode.GDSaveButtonObjects1);
{for(var i = 0, len = gdjs.Game_32OverCode.GDFinalScoreTextObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDFinalScoreTextObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}{for(var i = 0, len = gdjs.Game_32OverCode.GDGameOverImageObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDGameOverImageObjects1[i].hide();
}
for(var i = 0, len = gdjs.Game_32OverCode.GDRestartButtonObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDRestartButtonObjects1[i].hide();
}
for(var i = 0, len = gdjs.Game_32OverCode.GDSaveButtonObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDSaveButtonObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Wait_Score");
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Wait_Score") >= 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FinalScoreText"), gdjs.Game_32OverCode.GDFinalScoreTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("GameOverImage"), gdjs.Game_32OverCode.GDGameOverImageObjects1);
gdjs.copyArray(runtimeScene.getObjects("RestartButton"), gdjs.Game_32OverCode.GDRestartButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("SaveButton"), gdjs.Game_32OverCode.GDSaveButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("ScoreImage"), gdjs.Game_32OverCode.GDScoreImageObjects1);
{for(var i = 0, len = gdjs.Game_32OverCode.GDScoreImageObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDScoreImageObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Game_32OverCode.GDFinalScoreTextObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDFinalScoreTextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Game_32OverCode.GDGameOverImageObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDGameOverImageObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.Game_32OverCode.GDRestartButtonObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDRestartButtonObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.Game_32OverCode.GDSaveButtonObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDSaveButtonObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RestartButton"), gdjs.Game_32OverCode.GDRestartButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32OverCode.GDRestartButtonObjects1.length;i<l;++i) {
    if ( gdjs.Game_32OverCode.GDRestartButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32OverCode.GDRestartButtonObjects1[k] = gdjs.Game_32OverCode.GDRestartButtonObjects1[i];
        ++k;
    }
}
gdjs.Game_32OverCode.GDRestartButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Scene", false);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(3);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SaveButton"), gdjs.Game_32OverCode.GDSaveButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32OverCode.GDSaveButtonObjects1.length;i<l;++i) {
    if ( gdjs.Game_32OverCode.GDSaveButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32OverCode.GDSaveButtonObjects1[k] = gdjs.Game_32OverCode.GDSaveButtonObjects1[i];
        ++k;
    }
}
gdjs.Game_32OverCode.GDSaveButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(3);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}}

}


};

gdjs.Game_32OverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32OverCode.GDBackgroundObjects1.length = 0;
gdjs.Game_32OverCode.GDBackgroundObjects2.length = 0;
gdjs.Game_32OverCode.GDScoreImageObjects1.length = 0;
gdjs.Game_32OverCode.GDScoreImageObjects2.length = 0;
gdjs.Game_32OverCode.GDFinalScoreTextObjects1.length = 0;
gdjs.Game_32OverCode.GDFinalScoreTextObjects2.length = 0;
gdjs.Game_32OverCode.GDGameOverImageObjects1.length = 0;
gdjs.Game_32OverCode.GDGameOverImageObjects2.length = 0;
gdjs.Game_32OverCode.GDRestartButtonObjects1.length = 0;
gdjs.Game_32OverCode.GDRestartButtonObjects2.length = 0;
gdjs.Game_32OverCode.GDSaveButtonObjects1.length = 0;
gdjs.Game_32OverCode.GDSaveButtonObjects2.length = 0;

gdjs.Game_32OverCode.eventsList0(runtimeScene);
gdjs.Game_32OverCode.GDBackgroundObjects1.length = 0;
gdjs.Game_32OverCode.GDBackgroundObjects2.length = 0;
gdjs.Game_32OverCode.GDScoreImageObjects1.length = 0;
gdjs.Game_32OverCode.GDScoreImageObjects2.length = 0;
gdjs.Game_32OverCode.GDFinalScoreTextObjects1.length = 0;
gdjs.Game_32OverCode.GDFinalScoreTextObjects2.length = 0;
gdjs.Game_32OverCode.GDGameOverImageObjects1.length = 0;
gdjs.Game_32OverCode.GDGameOverImageObjects2.length = 0;
gdjs.Game_32OverCode.GDRestartButtonObjects1.length = 0;
gdjs.Game_32OverCode.GDRestartButtonObjects2.length = 0;
gdjs.Game_32OverCode.GDSaveButtonObjects1.length = 0;
gdjs.Game_32OverCode.GDSaveButtonObjects2.length = 0;


return;

}

gdjs['Game_32OverCode'] = gdjs.Game_32OverCode;
