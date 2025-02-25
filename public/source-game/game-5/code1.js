gdjs.instruccionesCode = {};
gdjs.instruccionesCode.localVariables = [];
gdjs.instruccionesCode.GDOrangeBubbleButtonObjects1= [];
gdjs.instruccionesCode.GDOrangeBubbleButtonObjects2= [];
gdjs.instruccionesCode.GDNewSpriteObjects1= [];
gdjs.instruccionesCode.GDNewSpriteObjects2= [];
gdjs.instruccionesCode.GDTexInsObjects1= [];
gdjs.instruccionesCode.GDTexInsObjects2= [];
gdjs.instruccionesCode.GDIniciarJuegoObjects1= [];
gdjs.instruccionesCode.GDIniciarJuegoObjects2= [];
gdjs.instruccionesCode.GDInstrucciones_9595simpelsObjects1= [];
gdjs.instruccionesCode.GDInstrucciones_9595simpelsObjects2= [];


gdjs.instruccionesCode.mapOfGDgdjs_9546instruccionesCode_9546GDOrangeBubbleButtonObjects1Objects = Hashtable.newFrom({"OrangeBubbleButton": gdjs.instruccionesCode.GDOrangeBubbleButtonObjects1});
gdjs.instruccionesCode.mapOfGDgdjs_9546instruccionesCode_9546GDIniciarJuegoObjects1Objects = Hashtable.newFrom({"IniciarJuego": gdjs.instruccionesCode.GDIniciarJuegoObjects1});
gdjs.instruccionesCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("OrangeBubbleButton"), gdjs.instruccionesCode.GDOrangeBubbleButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.instruccionesCode.mapOfGDgdjs_9546instruccionesCode_9546GDOrangeBubbleButtonObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("IniciarJuego"), gdjs.instruccionesCode.GDIniciarJuegoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.instruccionesCode.mapOfGDgdjs_9546instruccionesCode_9546GDIniciarJuegoObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Jugar", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, false);
}{gdjs.evtTools.window.setAdaptGameResolutionAtRuntime(runtimeScene, true);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.instruccionesCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.instruccionesCode.GDOrangeBubbleButtonObjects1.length = 0;
gdjs.instruccionesCode.GDOrangeBubbleButtonObjects2.length = 0;
gdjs.instruccionesCode.GDNewSpriteObjects1.length = 0;
gdjs.instruccionesCode.GDNewSpriteObjects2.length = 0;
gdjs.instruccionesCode.GDTexInsObjects1.length = 0;
gdjs.instruccionesCode.GDTexInsObjects2.length = 0;
gdjs.instruccionesCode.GDIniciarJuegoObjects1.length = 0;
gdjs.instruccionesCode.GDIniciarJuegoObjects2.length = 0;
gdjs.instruccionesCode.GDInstrucciones_9595simpelsObjects1.length = 0;
gdjs.instruccionesCode.GDInstrucciones_9595simpelsObjects2.length = 0;

gdjs.instruccionesCode.eventsList0(runtimeScene);
gdjs.instruccionesCode.GDOrangeBubbleButtonObjects1.length = 0;
gdjs.instruccionesCode.GDOrangeBubbleButtonObjects2.length = 0;
gdjs.instruccionesCode.GDNewSpriteObjects1.length = 0;
gdjs.instruccionesCode.GDNewSpriteObjects2.length = 0;
gdjs.instruccionesCode.GDTexInsObjects1.length = 0;
gdjs.instruccionesCode.GDTexInsObjects2.length = 0;
gdjs.instruccionesCode.GDIniciarJuegoObjects1.length = 0;
gdjs.instruccionesCode.GDIniciarJuegoObjects2.length = 0;
gdjs.instruccionesCode.GDInstrucciones_9595simpelsObjects1.length = 0;
gdjs.instruccionesCode.GDInstrucciones_9595simpelsObjects2.length = 0;


return;

}

gdjs['instruccionesCode'] = gdjs.instruccionesCode;
