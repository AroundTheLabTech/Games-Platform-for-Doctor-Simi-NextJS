gdjs.GAMEOVERCode = {};
gdjs.GAMEOVERCode.localVariables = [];
gdjs.GAMEOVERCode.GDgameoverbgObjects1= [];
gdjs.GAMEOVERCode.GDgameoverbgObjects2= [];
gdjs.GAMEOVERCode.GDfelizObjects1= [];
gdjs.GAMEOVERCode.GDfelizObjects2= [];
gdjs.GAMEOVERCode.GDSIMISADObjects1= [];
gdjs.GAMEOVERCode.GDSIMISADObjects2= [];
gdjs.GAMEOVERCode.GDSCOREENDObjects1= [];
gdjs.GAMEOVERCode.GDSCOREENDObjects2= [];
gdjs.GAMEOVERCode.GDESCORENDObjects1= [];
gdjs.GAMEOVERCode.GDESCORENDObjects2= [];
gdjs.GAMEOVERCode.GDMENU1Objects1= [];
gdjs.GAMEOVERCode.GDMENU1Objects2= [];
gdjs.GAMEOVERCode.GDTOTALESObjects1= [];
gdjs.GAMEOVERCode.GDTOTALESObjects2= [];


gdjs.GAMEOVERCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ESCOREND"), gdjs.GAMEOVERCode.GDESCORENDObjects1);
gdjs.copyArray(runtimeScene.getObjects("SIMISAD"), gdjs.GAMEOVERCode.GDSIMISADObjects1);
{for(var i = 0, len = gdjs.GAMEOVERCode.GDSIMISADObjects1.length ;i < len;++i) {
    gdjs.GAMEOVERCode.GDSIMISADObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.GAMEOVERCode.GDESCORENDObjects1.length ;i < len;++i) {
    gdjs.GAMEOVERCode.GDESCORENDObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MENU1"), gdjs.GAMEOVERCode.GDMENU1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GAMEOVERCode.GDMENU1Objects1.length;i<l;++i) {
    if ( gdjs.GAMEOVERCode.GDMENU1Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GAMEOVERCode.GDMENU1Objects1[k] = gdjs.GAMEOVERCode.GDMENU1Objects1[i];
        ++k;
    }
}
gdjs.GAMEOVERCode.GDMENU1Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "intro", false);
}}

}


};

gdjs.GAMEOVERCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GAMEOVERCode.GDgameoverbgObjects1.length = 0;
gdjs.GAMEOVERCode.GDgameoverbgObjects2.length = 0;
gdjs.GAMEOVERCode.GDfelizObjects1.length = 0;
gdjs.GAMEOVERCode.GDfelizObjects2.length = 0;
gdjs.GAMEOVERCode.GDSIMISADObjects1.length = 0;
gdjs.GAMEOVERCode.GDSIMISADObjects2.length = 0;
gdjs.GAMEOVERCode.GDSCOREENDObjects1.length = 0;
gdjs.GAMEOVERCode.GDSCOREENDObjects2.length = 0;
gdjs.GAMEOVERCode.GDESCORENDObjects1.length = 0;
gdjs.GAMEOVERCode.GDESCORENDObjects2.length = 0;
gdjs.GAMEOVERCode.GDMENU1Objects1.length = 0;
gdjs.GAMEOVERCode.GDMENU1Objects2.length = 0;
gdjs.GAMEOVERCode.GDTOTALESObjects1.length = 0;
gdjs.GAMEOVERCode.GDTOTALESObjects2.length = 0;

gdjs.GAMEOVERCode.eventsList0(runtimeScene);
gdjs.GAMEOVERCode.GDgameoverbgObjects1.length = 0;
gdjs.GAMEOVERCode.GDgameoverbgObjects2.length = 0;
gdjs.GAMEOVERCode.GDfelizObjects1.length = 0;
gdjs.GAMEOVERCode.GDfelizObjects2.length = 0;
gdjs.GAMEOVERCode.GDSIMISADObjects1.length = 0;
gdjs.GAMEOVERCode.GDSIMISADObjects2.length = 0;
gdjs.GAMEOVERCode.GDSCOREENDObjects1.length = 0;
gdjs.GAMEOVERCode.GDSCOREENDObjects2.length = 0;
gdjs.GAMEOVERCode.GDESCORENDObjects1.length = 0;
gdjs.GAMEOVERCode.GDESCORENDObjects2.length = 0;
gdjs.GAMEOVERCode.GDMENU1Objects1.length = 0;
gdjs.GAMEOVERCode.GDMENU1Objects2.length = 0;
gdjs.GAMEOVERCode.GDTOTALESObjects1.length = 0;
gdjs.GAMEOVERCode.GDTOTALESObjects2.length = 0;


return;

}

gdjs['GAMEOVERCode'] = gdjs.GAMEOVERCode;
