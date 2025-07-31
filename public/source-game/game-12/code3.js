gdjs.GameOverCode = {};
gdjs.GameOverCode.localVariables = [];
gdjs.GameOverCode.GDBackgroundObjects1= [];
gdjs.GameOverCode.GDBackgroundObjects2= [];
gdjs.GameOverCode.GDStartObjects1= [];
gdjs.GameOverCode.GDStartObjects2= [];
gdjs.GameOverCode.GDRestartObjects1= [];
gdjs.GameOverCode.GDRestartObjects2= [];
gdjs.GameOverCode.GDSaveAndExitObjects1= [];
gdjs.GameOverCode.GDSaveAndExitObjects2= [];
gdjs.GameOverCode.GDFinalScoreTextObjects1= [];
gdjs.GameOverCode.GDFinalScoreTextObjects2= [];


gdjs.GameOverCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("FinalScoreText"), gdjs.GameOverCode.GDFinalScoreTextObjects1);
{for(var i = 0, len = gdjs.GameOverCode.GDFinalScoreTextObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDFinalScoreTextObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Restart"), gdjs.GameOverCode.GDRestartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameOverCode.GDRestartObjects1.length;i<l;++i) {
    if ( gdjs.GameOverCode.GDRestartObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameOverCode.GDRestartObjects1[k] = gdjs.GameOverCode.GDRestartObjects1[i];
        ++k;
    }
}
gdjs.GameOverCode.GDRestartObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameOverCode.GDRestartObjects1 */
{for(var i = 0, len = gdjs.GameOverCode.GDRestartObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDRestartObjects1[i].getBehavior("Animation").setAnimationName("Pressed");
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(3);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Restart"), gdjs.GameOverCode.GDRestartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameOverCode.GDRestartObjects1.length;i<l;++i) {
    if ( !(gdjs.GameOverCode.GDRestartObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.GameOverCode.GDRestartObjects1[k] = gdjs.GameOverCode.GDRestartObjects1[i];
        ++k;
    }
}
gdjs.GameOverCode.GDRestartObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameOverCode.GDRestartObjects1 */
{for(var i = 0, len = gdjs.GameOverCode.GDRestartObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDRestartObjects1[i].getBehavior("Animation").setAnimationName("Unpressed");
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SaveAndExit"), gdjs.GameOverCode.GDSaveAndExitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameOverCode.GDSaveAndExitObjects1.length;i<l;++i) {
    if ( gdjs.GameOverCode.GDSaveAndExitObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameOverCode.GDSaveAndExitObjects1[k] = gdjs.GameOverCode.GDSaveAndExitObjects1[i];
        ++k;
    }
}
gdjs.GameOverCode.GDSaveAndExitObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Restart"), gdjs.GameOverCode.GDRestartObjects1);
{for(var i = 0, len = gdjs.GameOverCode.GDRestartObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDRestartObjects1[i].getBehavior("Animation").setAnimationName("Pressed");
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(3);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SaveAndExit"), gdjs.GameOverCode.GDSaveAndExitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameOverCode.GDSaveAndExitObjects1.length;i<l;++i) {
    if ( !(gdjs.GameOverCode.GDSaveAndExitObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.GameOverCode.GDSaveAndExitObjects1[k] = gdjs.GameOverCode.GDSaveAndExitObjects1[i];
        ++k;
    }
}
gdjs.GameOverCode.GDSaveAndExitObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Restart"), gdjs.GameOverCode.GDRestartObjects1);
{for(var i = 0, len = gdjs.GameOverCode.GDRestartObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDRestartObjects1[i].getBehavior("Animation").setAnimationName("Unpressed");
}
}}

}


};

gdjs.GameOverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOverCode.GDBackgroundObjects1.length = 0;
gdjs.GameOverCode.GDBackgroundObjects2.length = 0;
gdjs.GameOverCode.GDStartObjects1.length = 0;
gdjs.GameOverCode.GDStartObjects2.length = 0;
gdjs.GameOverCode.GDRestartObjects1.length = 0;
gdjs.GameOverCode.GDRestartObjects2.length = 0;
gdjs.GameOverCode.GDSaveAndExitObjects1.length = 0;
gdjs.GameOverCode.GDSaveAndExitObjects2.length = 0;
gdjs.GameOverCode.GDFinalScoreTextObjects1.length = 0;
gdjs.GameOverCode.GDFinalScoreTextObjects2.length = 0;

gdjs.GameOverCode.eventsList0(runtimeScene);
gdjs.GameOverCode.GDBackgroundObjects1.length = 0;
gdjs.GameOverCode.GDBackgroundObjects2.length = 0;
gdjs.GameOverCode.GDStartObjects1.length = 0;
gdjs.GameOverCode.GDStartObjects2.length = 0;
gdjs.GameOverCode.GDRestartObjects1.length = 0;
gdjs.GameOverCode.GDRestartObjects2.length = 0;
gdjs.GameOverCode.GDSaveAndExitObjects1.length = 0;
gdjs.GameOverCode.GDSaveAndExitObjects2.length = 0;
gdjs.GameOverCode.GDFinalScoreTextObjects1.length = 0;
gdjs.GameOverCode.GDFinalScoreTextObjects2.length = 0;


return;

}

gdjs['GameOverCode'] = gdjs.GameOverCode;
