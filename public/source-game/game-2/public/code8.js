gdjs.leadboardCode = {};
gdjs.leadboardCode.localVariables = [];
gdjs.leadboardCode.GDNewPanelSpriteObjects1= [];
gdjs.leadboardCode.GDNewPanelSpriteObjects2= [];
gdjs.leadboardCode.GDusuarioObjects1= [];
gdjs.leadboardCode.GDusuarioObjects2= [];
gdjs.leadboardCode.GDtextoObjects1= [];
gdjs.leadboardCode.GDtextoObjects2= [];
gdjs.leadboardCode.GDGuardarObjects1= [];
gdjs.leadboardCode.GDGuardarObjects2= [];
gdjs.leadboardCode.GDRepetirObjects1= [];
gdjs.leadboardCode.GDRepetirObjects2= [];
gdjs.leadboardCode.GDLeaderboardObjects1= [];
gdjs.leadboardCode.GDLeaderboardObjects2= [];
gdjs.leadboardCode.GDPlayerObjects1= [];
gdjs.leadboardCode.GDPlayerObjects2= [];
gdjs.leadboardCode.GDMonsterObjects1= [];
gdjs.leadboardCode.GDMonsterObjects2= [];
gdjs.leadboardCode.GDFlyObjects1= [];
gdjs.leadboardCode.GDFlyObjects2= [];
gdjs.leadboardCode.GDCoinObjects1= [];
gdjs.leadboardCode.GDCoinObjects2= [];
gdjs.leadboardCode.GDCoin2Objects1= [];
gdjs.leadboardCode.GDCoin2Objects2= [];
gdjs.leadboardCode.GDBacteria3Objects1= [];
gdjs.leadboardCode.GDBacteria3Objects2= [];


gdjs.leadboardCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("texto"), gdjs.leadboardCode.GDtextoObjects1);
{for(var i = 0, len = gdjs.leadboardCode.GDtextoObjects1.length ;i < len;++i) {
    gdjs.leadboardCode.GDtextoObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getGame().getVariables().getFromIndex(1))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Guardar"), gdjs.leadboardCode.GDGuardarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.leadboardCode.GDGuardarObjects1.length;i<l;++i) {
    if ( gdjs.leadboardCode.GDGuardarObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.leadboardCode.GDGuardarObjects1[k] = gdjs.leadboardCode.GDGuardarObjects1[i];
        ++k;
    }
}
gdjs.leadboardCode.GDGuardarObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.leadboardCode.GDGuardarObjects1 */
gdjs.copyArray(runtimeScene.getObjects("texto"), gdjs.leadboardCode.GDtextoObjects1);
gdjs.copyArray(runtimeScene.getObjects("usuario"), gdjs.leadboardCode.GDusuarioObjects1);
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "4aefa063-567e-496b-ac84-9f52e2488657", gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getGame().getVariables().getFromIndex(1)), (( gdjs.leadboardCode.GDusuarioObjects1.length === 0 ) ? "" :gdjs.leadboardCode.GDusuarioObjects1[0].getText()));
}{for(var i = 0, len = gdjs.leadboardCode.GDtextoObjects1.length ;i < len;++i) {
    gdjs.leadboardCode.GDtextoObjects1[i].getBehavior("Text").setText("Puntuación Guardada");
}
}{for(var i = 0, len = gdjs.leadboardCode.GDGuardarObjects1.length ;i < len;++i) {
    gdjs.leadboardCode.GDGuardarObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Repetir"), gdjs.leadboardCode.GDRepetirObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.leadboardCode.GDRepetirObjects1.length;i<l;++i) {
    if ( gdjs.leadboardCode.GDRepetirObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.leadboardCode.GDRepetirObjects1[k] = gdjs.leadboardCode.GDRepetirObjects1[i];
        ++k;
    }
}
gdjs.leadboardCode.GDRepetirObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Leaderboard"), gdjs.leadboardCode.GDLeaderboardObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.leadboardCode.GDLeaderboardObjects1.length;i<l;++i) {
    if ( gdjs.leadboardCode.GDLeaderboardObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.leadboardCode.GDLeaderboardObjects1[k] = gdjs.leadboardCode.GDLeaderboardObjects1[i];
        ++k;
    }
}
gdjs.leadboardCode.GDLeaderboardObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "4aefa063-567e-496b-ac84-9f52e2488657", false);
}}

}


};

gdjs.leadboardCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.leadboardCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.leadboardCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.leadboardCode.GDusuarioObjects1.length = 0;
gdjs.leadboardCode.GDusuarioObjects2.length = 0;
gdjs.leadboardCode.GDtextoObjects1.length = 0;
gdjs.leadboardCode.GDtextoObjects2.length = 0;
gdjs.leadboardCode.GDGuardarObjects1.length = 0;
gdjs.leadboardCode.GDGuardarObjects2.length = 0;
gdjs.leadboardCode.GDRepetirObjects1.length = 0;
gdjs.leadboardCode.GDRepetirObjects2.length = 0;
gdjs.leadboardCode.GDLeaderboardObjects1.length = 0;
gdjs.leadboardCode.GDLeaderboardObjects2.length = 0;
gdjs.leadboardCode.GDPlayerObjects1.length = 0;
gdjs.leadboardCode.GDPlayerObjects2.length = 0;
gdjs.leadboardCode.GDMonsterObjects1.length = 0;
gdjs.leadboardCode.GDMonsterObjects2.length = 0;
gdjs.leadboardCode.GDFlyObjects1.length = 0;
gdjs.leadboardCode.GDFlyObjects2.length = 0;
gdjs.leadboardCode.GDCoinObjects1.length = 0;
gdjs.leadboardCode.GDCoinObjects2.length = 0;
gdjs.leadboardCode.GDCoin2Objects1.length = 0;
gdjs.leadboardCode.GDCoin2Objects2.length = 0;
gdjs.leadboardCode.GDBacteria3Objects1.length = 0;
gdjs.leadboardCode.GDBacteria3Objects2.length = 0;

gdjs.leadboardCode.eventsList0(runtimeScene);

return;

}

gdjs['leadboardCode'] = gdjs.leadboardCode;
