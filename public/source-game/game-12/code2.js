gdjs.InstructionsCode = {};
gdjs.InstructionsCode.localVariables = [];
gdjs.InstructionsCode.GDBackgroundObjects1= [];
gdjs.InstructionsCode.GDBackgroundObjects2= [];
gdjs.InstructionsCode.GDStartObjects1= [];
gdjs.InstructionsCode.GDStartObjects2= [];
gdjs.InstructionsCode.GDOkObjects1= [];
gdjs.InstructionsCode.GDOkObjects2= [];


gdjs.InstructionsCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Ok"), gdjs.InstructionsCode.GDOkObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.InstructionsCode.GDOkObjects1.length;i<l;++i) {
    if ( gdjs.InstructionsCode.GDOkObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.InstructionsCode.GDOkObjects1[k] = gdjs.InstructionsCode.GDOkObjects1[i];
        ++k;
    }
}
gdjs.InstructionsCode.GDOkObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.InstructionsCode.GDOkObjects1 */
{for(var i = 0, len = gdjs.InstructionsCode.GDOkObjects1.length ;i < len;++i) {
    gdjs.InstructionsCode.GDOkObjects1[i].getBehavior("Animation").setAnimationName("Pressed");
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ok"), gdjs.InstructionsCode.GDOkObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.InstructionsCode.GDOkObjects1.length;i<l;++i) {
    if ( !(gdjs.InstructionsCode.GDOkObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.InstructionsCode.GDOkObjects1[k] = gdjs.InstructionsCode.GDOkObjects1[i];
        ++k;
    }
}
gdjs.InstructionsCode.GDOkObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.InstructionsCode.GDOkObjects1 */
{for(var i = 0, len = gdjs.InstructionsCode.GDOkObjects1.length ;i < len;++i) {
    gdjs.InstructionsCode.GDOkObjects1[i].getBehavior("Animation").setAnimationName("Unpressed");
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.InstructionsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.InstructionsCode.GDBackgroundObjects1.length = 0;
gdjs.InstructionsCode.GDBackgroundObjects2.length = 0;
gdjs.InstructionsCode.GDStartObjects1.length = 0;
gdjs.InstructionsCode.GDStartObjects2.length = 0;
gdjs.InstructionsCode.GDOkObjects1.length = 0;
gdjs.InstructionsCode.GDOkObjects2.length = 0;

gdjs.InstructionsCode.eventsList0(runtimeScene);
gdjs.InstructionsCode.GDBackgroundObjects1.length = 0;
gdjs.InstructionsCode.GDBackgroundObjects2.length = 0;
gdjs.InstructionsCode.GDStartObjects1.length = 0;
gdjs.InstructionsCode.GDStartObjects2.length = 0;
gdjs.InstructionsCode.GDOkObjects1.length = 0;
gdjs.InstructionsCode.GDOkObjects2.length = 0;


return;

}

gdjs['InstructionsCode'] = gdjs.InstructionsCode;
