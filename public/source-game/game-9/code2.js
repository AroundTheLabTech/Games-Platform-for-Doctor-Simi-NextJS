gdjs.InstructionsCode = {};
gdjs.InstructionsCode.localVariables = [];
gdjs.InstructionsCode.GDBackgroundObjects1= [];
gdjs.InstructionsCode.GDBackgroundObjects2= [];
gdjs.InstructionsCode.GDCloseInstructionsObjects1= [];
gdjs.InstructionsCode.GDCloseInstructionsObjects2= [];
gdjs.InstructionsCode.GDInstructionsObjects1= [];
gdjs.InstructionsCode.GDInstructionsObjects2= [];


gdjs.InstructionsCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("CloseInstructions"), gdjs.InstructionsCode.GDCloseInstructionsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.InstructionsCode.GDCloseInstructionsObjects1.length;i<l;++i) {
    if ( gdjs.InstructionsCode.GDCloseInstructionsObjects1[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.InstructionsCode.GDCloseInstructionsObjects1[k] = gdjs.InstructionsCode.GDCloseInstructionsObjects1[i];
        ++k;
    }
}
gdjs.InstructionsCode.GDCloseInstructionsObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "NewScene", false);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}}

}


};gdjs.InstructionsCode.eventsList1 = function(runtimeScene) {

{


gdjs.InstructionsCode.eventsList0(runtimeScene);
}


};

gdjs.InstructionsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.InstructionsCode.GDBackgroundObjects1.length = 0;
gdjs.InstructionsCode.GDBackgroundObjects2.length = 0;
gdjs.InstructionsCode.GDCloseInstructionsObjects1.length = 0;
gdjs.InstructionsCode.GDCloseInstructionsObjects2.length = 0;
gdjs.InstructionsCode.GDInstructionsObjects1.length = 0;
gdjs.InstructionsCode.GDInstructionsObjects2.length = 0;

gdjs.InstructionsCode.eventsList1(runtimeScene);
gdjs.InstructionsCode.GDBackgroundObjects1.length = 0;
gdjs.InstructionsCode.GDBackgroundObjects2.length = 0;
gdjs.InstructionsCode.GDCloseInstructionsObjects1.length = 0;
gdjs.InstructionsCode.GDCloseInstructionsObjects2.length = 0;
gdjs.InstructionsCode.GDInstructionsObjects1.length = 0;
gdjs.InstructionsCode.GDInstructionsObjects2.length = 0;


return;

}

gdjs['InstructionsCode'] = gdjs.InstructionsCode;
