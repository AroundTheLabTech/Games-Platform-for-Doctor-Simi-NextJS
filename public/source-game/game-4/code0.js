gdjs.InitCode = {};
gdjs.InitCode.localVariables = [];
gdjs.InitCode.GDNewPanelSprite2Objects1= [];
gdjs.InitCode.GDNewPanelSprite2Objects2= [];
gdjs.InitCode.GDBoton_9595JugarObjects1= [];
gdjs.InitCode.GDBoton_9595JugarObjects2= [];
gdjs.InitCode.GDNewPanelSpriteObjects1= [];
gdjs.InitCode.GDNewPanelSpriteObjects2= [];
gdjs.InitCode.GDCuadro_9595BlancoObjects1= [];
gdjs.InitCode.GDCuadro_9595BlancoObjects2= [];


gdjs.InitCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Boton_Jugar"), gdjs.InitCode.GDBoton_9595JugarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.InitCode.GDBoton_9595JugarObjects1.length;i<l;++i) {
    if ( gdjs.InitCode.GDBoton_9595JugarObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.InitCode.GDBoton_9595JugarObjects1[k] = gdjs.InitCode.GDBoton_9595JugarObjects1[i];
        ++k;
    }
}
gdjs.InitCode.GDBoton_9595JugarObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Click_01.aac", false, 30, 1);
}}

}


};

gdjs.InitCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.InitCode.GDNewPanelSprite2Objects1.length = 0;
gdjs.InitCode.GDNewPanelSprite2Objects2.length = 0;
gdjs.InitCode.GDBoton_9595JugarObjects1.length = 0;
gdjs.InitCode.GDBoton_9595JugarObjects2.length = 0;
gdjs.InitCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.InitCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.InitCode.GDCuadro_9595BlancoObjects1.length = 0;
gdjs.InitCode.GDCuadro_9595BlancoObjects2.length = 0;

gdjs.InitCode.eventsList0(runtimeScene);
gdjs.InitCode.GDNewPanelSprite2Objects1.length = 0;
gdjs.InitCode.GDNewPanelSprite2Objects2.length = 0;
gdjs.InitCode.GDBoton_9595JugarObjects1.length = 0;
gdjs.InitCode.GDBoton_9595JugarObjects2.length = 0;
gdjs.InitCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.InitCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.InitCode.GDCuadro_9595BlancoObjects1.length = 0;
gdjs.InitCode.GDCuadro_9595BlancoObjects2.length = 0;


return;

}

gdjs['InitCode'] = gdjs.InitCode;
