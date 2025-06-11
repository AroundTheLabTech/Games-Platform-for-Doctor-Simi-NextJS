gdjs.GameOverCode = {};
gdjs.GameOverCode.localVariables = [];
gdjs.GameOverCode.GDBackgroundObjects1= [];
gdjs.GameOverCode.GDBackgroundObjects2= [];
gdjs.GameOverCode.GDrestartObjects1= [];
gdjs.GameOverCode.GDrestartObjects2= [];
gdjs.GameOverCode.GDBoardObjects1= [];
gdjs.GameOverCode.GDBoardObjects2= [];
gdjs.GameOverCode.GDFinalScoreObjects1= [];
gdjs.GameOverCode.GDFinalScoreObjects2= [];
gdjs.GameOverCode.GDsaveObjects1= [];
gdjs.GameOverCode.GDsaveObjects2= [];


gdjs.GameOverCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("restart"), gdjs.GameOverCode.GDrestartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameOverCode.GDrestartObjects1.length;i<l;++i) {
    if ( gdjs.GameOverCode.GDrestartObjects1[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameOverCode.GDrestartObjects1[k] = gdjs.GameOverCode.GDrestartObjects1[i];
        ++k;
    }
}
gdjs.GameOverCode.GDrestartObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "NewScene", false);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}}

}


};gdjs.GameOverCode.eventsList1 = function(runtimeScene) {

{


gdjs.GameOverCode.eventsList0(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("save"), gdjs.GameOverCode.GDsaveObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameOverCode.GDsaveObjects1.length;i<l;++i) {
    if ( gdjs.GameOverCode.GDsaveObjects1[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameOverCode.GDsaveObjects1[k] = gdjs.GameOverCode.GDsaveObjects1[i];
        ++k;
    }
}
gdjs.GameOverCode.GDsaveObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FinalScore"), gdjs.GameOverCode.GDFinalScoreObjects1);
{for(var i = 0, len = gdjs.GameOverCode.GDFinalScoreObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDFinalScoreObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}}

}


};

gdjs.GameOverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOverCode.GDBackgroundObjects1.length = 0;
gdjs.GameOverCode.GDBackgroundObjects2.length = 0;
gdjs.GameOverCode.GDrestartObjects1.length = 0;
gdjs.GameOverCode.GDrestartObjects2.length = 0;
gdjs.GameOverCode.GDBoardObjects1.length = 0;
gdjs.GameOverCode.GDBoardObjects2.length = 0;
gdjs.GameOverCode.GDFinalScoreObjects1.length = 0;
gdjs.GameOverCode.GDFinalScoreObjects2.length = 0;
gdjs.GameOverCode.GDsaveObjects1.length = 0;
gdjs.GameOverCode.GDsaveObjects2.length = 0;

gdjs.GameOverCode.eventsList1(runtimeScene);
gdjs.GameOverCode.GDBackgroundObjects1.length = 0;
gdjs.GameOverCode.GDBackgroundObjects2.length = 0;
gdjs.GameOverCode.GDrestartObjects1.length = 0;
gdjs.GameOverCode.GDrestartObjects2.length = 0;
gdjs.GameOverCode.GDBoardObjects1.length = 0;
gdjs.GameOverCode.GDBoardObjects2.length = 0;
gdjs.GameOverCode.GDFinalScoreObjects1.length = 0;
gdjs.GameOverCode.GDFinalScoreObjects2.length = 0;
gdjs.GameOverCode.GDsaveObjects1.length = 0;
gdjs.GameOverCode.GDsaveObjects2.length = 0;


return;

}

gdjs['GameOverCode'] = gdjs.GameOverCode;
