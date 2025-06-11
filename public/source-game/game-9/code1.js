gdjs.MainCode = {};
gdjs.MainCode.localVariables = [];
gdjs.MainCode.GDBackgroundObjects1= [];
gdjs.MainCode.GDBackgroundObjects2= [];
gdjs.MainCode.GDNewPlayObjects1= [];
gdjs.MainCode.GDNewPlayObjects2= [];
gdjs.MainCode.GDLogoObjects1= [];
gdjs.MainCode.GDLogoObjects2= [];


gdjs.MainCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewPlay"), gdjs.MainCode.GDNewPlayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDNewPlayObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDNewPlayObjects1[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDNewPlayObjects1[k] = gdjs.MainCode.GDNewPlayObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDNewPlayObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Instructions", false);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}}

}


};gdjs.MainCode.eventsList1 = function(runtimeScene) {

{


gdjs.MainCode.eventsList0(runtimeScene);
}


};

gdjs.MainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainCode.GDBackgroundObjects1.length = 0;
gdjs.MainCode.GDBackgroundObjects2.length = 0;
gdjs.MainCode.GDNewPlayObjects1.length = 0;
gdjs.MainCode.GDNewPlayObjects2.length = 0;
gdjs.MainCode.GDLogoObjects1.length = 0;
gdjs.MainCode.GDLogoObjects2.length = 0;

gdjs.MainCode.eventsList1(runtimeScene);
gdjs.MainCode.GDBackgroundObjects1.length = 0;
gdjs.MainCode.GDBackgroundObjects2.length = 0;
gdjs.MainCode.GDNewPlayObjects1.length = 0;
gdjs.MainCode.GDNewPlayObjects2.length = 0;
gdjs.MainCode.GDLogoObjects1.length = 0;
gdjs.MainCode.GDLogoObjects2.length = 0;


return;

}

gdjs['MainCode'] = gdjs.MainCode;
