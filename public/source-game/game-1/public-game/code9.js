gdjs.EndCode = {};
gdjs.EndCode.localVariables = [];
gdjs.EndCode.GDgameoverbgObjects1= [];
gdjs.EndCode.GDgameoverbgObjects2= [];
gdjs.EndCode.GDfelizObjects1= [];
gdjs.EndCode.GDfelizObjects2= [];
gdjs.EndCode.GDSIMIFELIZObjects1= [];
gdjs.EndCode.GDSIMIFELIZObjects2= [];
gdjs.EndCode.GDSCOREENDObjects1= [];
gdjs.EndCode.GDSCOREENDObjects2= [];
gdjs.EndCode.GDESCORENDObjects1= [];
gdjs.EndCode.GDESCORENDObjects2= [];
gdjs.EndCode.GDMENU1Objects1= [];
gdjs.EndCode.GDMENU1Objects2= [];
gdjs.EndCode.GDTOTALESObjects1= [];
gdjs.EndCode.GDTOTALESObjects2= [];


gdjs.EndCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ESCOREND"), gdjs.EndCode.GDESCORENDObjects1);
gdjs.copyArray(runtimeScene.getObjects("SIMIFELIZ"), gdjs.EndCode.GDSIMIFELIZObjects1);
{for(var i = 0, len = gdjs.EndCode.GDSIMIFELIZObjects1.length ;i < len;++i) {
    gdjs.EndCode.GDSIMIFELIZObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.EndCode.GDESCORENDObjects1.length ;i < len;++i) {
    gdjs.EndCode.GDESCORENDObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MENU1"), gdjs.EndCode.GDMENU1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.EndCode.GDMENU1Objects1.length;i<l;++i) {
    if ( gdjs.EndCode.GDMENU1Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.EndCode.GDMENU1Objects1[k] = gdjs.EndCode.GDMENU1Objects1[i];
        ++k;
    }
}
gdjs.EndCode.GDMENU1Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level", false);
}}

}


};

gdjs.EndCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.EndCode.GDgameoverbgObjects1.length = 0;
gdjs.EndCode.GDgameoverbgObjects2.length = 0;
gdjs.EndCode.GDfelizObjects1.length = 0;
gdjs.EndCode.GDfelizObjects2.length = 0;
gdjs.EndCode.GDSIMIFELIZObjects1.length = 0;
gdjs.EndCode.GDSIMIFELIZObjects2.length = 0;
gdjs.EndCode.GDSCOREENDObjects1.length = 0;
gdjs.EndCode.GDSCOREENDObjects2.length = 0;
gdjs.EndCode.GDESCORENDObjects1.length = 0;
gdjs.EndCode.GDESCORENDObjects2.length = 0;
gdjs.EndCode.GDMENU1Objects1.length = 0;
gdjs.EndCode.GDMENU1Objects2.length = 0;
gdjs.EndCode.GDTOTALESObjects1.length = 0;
gdjs.EndCode.GDTOTALESObjects2.length = 0;

gdjs.EndCode.eventsList0(runtimeScene);
gdjs.EndCode.GDgameoverbgObjects1.length = 0;
gdjs.EndCode.GDgameoverbgObjects2.length = 0;
gdjs.EndCode.GDfelizObjects1.length = 0;
gdjs.EndCode.GDfelizObjects2.length = 0;
gdjs.EndCode.GDSIMIFELIZObjects1.length = 0;
gdjs.EndCode.GDSIMIFELIZObjects2.length = 0;
gdjs.EndCode.GDSCOREENDObjects1.length = 0;
gdjs.EndCode.GDSCOREENDObjects2.length = 0;
gdjs.EndCode.GDESCORENDObjects1.length = 0;
gdjs.EndCode.GDESCORENDObjects2.length = 0;
gdjs.EndCode.GDMENU1Objects1.length = 0;
gdjs.EndCode.GDMENU1Objects2.length = 0;
gdjs.EndCode.GDTOTALESObjects1.length = 0;
gdjs.EndCode.GDTOTALESObjects2.length = 0;


return;

}

gdjs['EndCode'] = gdjs.EndCode;
