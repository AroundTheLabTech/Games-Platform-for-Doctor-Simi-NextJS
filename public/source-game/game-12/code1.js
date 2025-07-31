gdjs.MainCode = {};
gdjs.MainCode.localVariables = [];
gdjs.MainCode.GDBackgroundObjects1= [];
gdjs.MainCode.GDBackgroundObjects2= [];
gdjs.MainCode.GDStartObjects1= [];
gdjs.MainCode.GDStartObjects2= [];
gdjs.MainCode.GDPlayObjects1= [];
gdjs.MainCode.GDPlayObjects2= [];


gdjs.MainCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.MainCode.GDPlayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDPlayObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDPlayObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDPlayObjects1[k] = gdjs.MainCode.GDPlayObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDPlayObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDPlayObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDPlayObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDPlayObjects1[i].getBehavior("Animation").setAnimationName("Pressed");
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Instructions", false);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.MainCode.GDPlayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDPlayObjects1.length;i<l;++i) {
    if ( !(gdjs.MainCode.GDPlayObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDPlayObjects1[k] = gdjs.MainCode.GDPlayObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDPlayObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDPlayObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDPlayObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDPlayObjects1[i].getBehavior("Animation").setAnimationName("Unpressed");
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.MainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainCode.GDBackgroundObjects1.length = 0;
gdjs.MainCode.GDBackgroundObjects2.length = 0;
gdjs.MainCode.GDStartObjects1.length = 0;
gdjs.MainCode.GDStartObjects2.length = 0;
gdjs.MainCode.GDPlayObjects1.length = 0;
gdjs.MainCode.GDPlayObjects2.length = 0;

gdjs.MainCode.eventsList0(runtimeScene);
gdjs.MainCode.GDBackgroundObjects1.length = 0;
gdjs.MainCode.GDBackgroundObjects2.length = 0;
gdjs.MainCode.GDStartObjects1.length = 0;
gdjs.MainCode.GDStartObjects2.length = 0;
gdjs.MainCode.GDPlayObjects1.length = 0;
gdjs.MainCode.GDPlayObjects2.length = 0;


return;

}

gdjs['MainCode'] = gdjs.MainCode;
