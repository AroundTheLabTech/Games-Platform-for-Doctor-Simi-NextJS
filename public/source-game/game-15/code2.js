gdjs.LeaderboardCode = {};
gdjs.LeaderboardCode.localVariables = [];
gdjs.LeaderboardCode.GDLeaderboardDialogObjects1= [];
gdjs.LeaderboardCode.GDLeaderboardDialogObjects2= [];
gdjs.LeaderboardCode.GDSCOREObjects1= [];
gdjs.LeaderboardCode.GDSCOREObjects2= [];
gdjs.LeaderboardCode.GDreintentarObjects1= [];
gdjs.LeaderboardCode.GDreintentarObjects2= [];
gdjs.LeaderboardCode.GDsalirObjects1= [];
gdjs.LeaderboardCode.GDsalirObjects2= [];
gdjs.LeaderboardCode.GDRedButtonObjects1= [];
gdjs.LeaderboardCode.GDRedButtonObjects2= [];
gdjs.LeaderboardCode.GDcrysimiObjects1= [];
gdjs.LeaderboardCode.GDcrysimiObjects2= [];
gdjs.LeaderboardCode.GDPlatformObjects1= [];
gdjs.LeaderboardCode.GDPlatformObjects2= [];
gdjs.LeaderboardCode.GDBackgroundObjects1= [];
gdjs.LeaderboardCode.GDBackgroundObjects2= [];
gdjs.LeaderboardCode.GDDustParticlesObjects1= [];
gdjs.LeaderboardCode.GDDustParticlesObjects2= [];


gdjs.LeaderboardCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LeaderboardDialog"), gdjs.LeaderboardCode.GDLeaderboardDialogObjects1);
gdjs.copyArray(runtimeScene.getObjects("SCORE"), gdjs.LeaderboardCode.GDSCOREObjects1);
{gdjs.evtTools.sound.playMusic(runtimeScene, "LeaderboardMusic.mp3", true, 70, 1);
}{for(var i = 0, len = gdjs.LeaderboardCode.GDLeaderboardDialogObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDLeaderboardDialogObjects1[i].SetScore(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDLeaderboardDialogObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDLeaderboardDialogObjects1[i].SetDefaultPlayerName(runtimeScene.getGame().getVariables().getFromIndex(1).getAsString(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDSCOREObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDSCOREObjects1[i].getBehavior("Text").setText("SCORE:" + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LeaderboardDialog"), gdjs.LeaderboardCode.GDLeaderboardDialogObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LeaderboardCode.GDLeaderboardDialogObjects1.length;i<l;++i) {
    if ( gdjs.LeaderboardCode.GDLeaderboardDialogObjects1[i].IsRestartClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LeaderboardCode.GDLeaderboardDialogObjects1[k] = gdjs.LeaderboardCode.GDLeaderboardDialogObjects1[i];
        ++k;
    }
}
gdjs.LeaderboardCode.GDLeaderboardDialogObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LeaderboardDialog"), gdjs.LeaderboardCode.GDLeaderboardDialogObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LeaderboardCode.GDLeaderboardDialogObjects1.length;i<l;++i) {
    if ( gdjs.LeaderboardCode.GDLeaderboardDialogObjects1[i].IsScoreSubmitted((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LeaderboardCode.GDLeaderboardDialogObjects1[k] = gdjs.LeaderboardCode.GDLeaderboardDialogObjects1[i];
        ++k;
    }
}
gdjs.LeaderboardCode.GDLeaderboardDialogObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.LeaderboardCode.GDLeaderboardDialogObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(1).setString((( gdjs.LeaderboardCode.GDLeaderboardDialogObjects1.length === 0 ) ? "" :gdjs.LeaderboardCode.GDLeaderboardDialogObjects1[0].PlayerName((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedButton"), gdjs.LeaderboardCode.GDRedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LeaderboardCode.GDRedButtonObjects1.length;i<l;++i) {
    if ( gdjs.LeaderboardCode.GDRedButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LeaderboardCode.GDRedButtonObjects1[k] = gdjs.LeaderboardCode.GDRedButtonObjects1[i];
        ++k;
    }
}
gdjs.LeaderboardCode.GDRedButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Intro", false);
}}

}


};

gdjs.LeaderboardCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LeaderboardCode.GDLeaderboardDialogObjects1.length = 0;
gdjs.LeaderboardCode.GDLeaderboardDialogObjects2.length = 0;
gdjs.LeaderboardCode.GDSCOREObjects1.length = 0;
gdjs.LeaderboardCode.GDSCOREObjects2.length = 0;
gdjs.LeaderboardCode.GDreintentarObjects1.length = 0;
gdjs.LeaderboardCode.GDreintentarObjects2.length = 0;
gdjs.LeaderboardCode.GDsalirObjects1.length = 0;
gdjs.LeaderboardCode.GDsalirObjects2.length = 0;
gdjs.LeaderboardCode.GDRedButtonObjects1.length = 0;
gdjs.LeaderboardCode.GDRedButtonObjects2.length = 0;
gdjs.LeaderboardCode.GDcrysimiObjects1.length = 0;
gdjs.LeaderboardCode.GDcrysimiObjects2.length = 0;
gdjs.LeaderboardCode.GDPlatformObjects1.length = 0;
gdjs.LeaderboardCode.GDPlatformObjects2.length = 0;
gdjs.LeaderboardCode.GDBackgroundObjects1.length = 0;
gdjs.LeaderboardCode.GDBackgroundObjects2.length = 0;
gdjs.LeaderboardCode.GDDustParticlesObjects1.length = 0;
gdjs.LeaderboardCode.GDDustParticlesObjects2.length = 0;

gdjs.LeaderboardCode.eventsList0(runtimeScene);
gdjs.LeaderboardCode.GDLeaderboardDialogObjects1.length = 0;
gdjs.LeaderboardCode.GDLeaderboardDialogObjects2.length = 0;
gdjs.LeaderboardCode.GDSCOREObjects1.length = 0;
gdjs.LeaderboardCode.GDSCOREObjects2.length = 0;
gdjs.LeaderboardCode.GDreintentarObjects1.length = 0;
gdjs.LeaderboardCode.GDreintentarObjects2.length = 0;
gdjs.LeaderboardCode.GDsalirObjects1.length = 0;
gdjs.LeaderboardCode.GDsalirObjects2.length = 0;
gdjs.LeaderboardCode.GDRedButtonObjects1.length = 0;
gdjs.LeaderboardCode.GDRedButtonObjects2.length = 0;
gdjs.LeaderboardCode.GDcrysimiObjects1.length = 0;
gdjs.LeaderboardCode.GDcrysimiObjects2.length = 0;
gdjs.LeaderboardCode.GDPlatformObjects1.length = 0;
gdjs.LeaderboardCode.GDPlatformObjects2.length = 0;
gdjs.LeaderboardCode.GDBackgroundObjects1.length = 0;
gdjs.LeaderboardCode.GDBackgroundObjects2.length = 0;
gdjs.LeaderboardCode.GDDustParticlesObjects1.length = 0;
gdjs.LeaderboardCode.GDDustParticlesObjects2.length = 0;


return;

}

gdjs['LeaderboardCode'] = gdjs.LeaderboardCode;
