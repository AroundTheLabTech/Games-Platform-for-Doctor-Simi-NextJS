gdjs.Pantalla_32Game_32OverCode = {};
gdjs.Pantalla_32Game_32OverCode.localVariables = [];
gdjs.Pantalla_32Game_32OverCode.GDFondoObjects1= [];
gdjs.Pantalla_32Game_32OverCode.GDFondoObjects2= [];
gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negroObjects1= [];
gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negroObjects2= [];
gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negro2Objects1= [];
gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negro2Objects2= [];
gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negro3Objects1= [];
gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negro3Objects2= [];
gdjs.Pantalla_32Game_32OverCode.GDGame_9595OverObjects1= [];
gdjs.Pantalla_32Game_32OverCode.GDGame_9595OverObjects2= [];
gdjs.Pantalla_32Game_32OverCode.GDFondo_9595gameoverObjects1= [];
gdjs.Pantalla_32Game_32OverCode.GDFondo_9595gameoverObjects2= [];
gdjs.Pantalla_32Game_32OverCode.GDBoton_9595guardarObjects1= [];
gdjs.Pantalla_32Game_32OverCode.GDBoton_9595guardarObjects2= [];
gdjs.Pantalla_32Game_32OverCode.GDboton_9595repetirObjects1= [];
gdjs.Pantalla_32Game_32OverCode.GDboton_9595repetirObjects2= [];


gdjs.Pantalla_32Game_32OverCode.mapOfGDgdjs_9546Pantalla_959532Game_959532OverCode_9546GDFondo_95959595negro3Objects1Objects = Hashtable.newFrom({"Fondo_negro3": gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negro3Objects1});
gdjs.Pantalla_32Game_32OverCode.mapOfGDgdjs_9546Pantalla_959532Game_959532OverCode_9546GDFondo_95959595negroObjects1Objects = Hashtable.newFrom({"Fondo_negro": gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negroObjects1});
gdjs.Pantalla_32Game_32OverCode.mapOfGDgdjs_9546Pantalla_959532Game_959532OverCode_9546GDboton_95959595repetirObjects1Objects = Hashtable.newFrom({"boton_repetir": gdjs.Pantalla_32Game_32OverCode.GDboton_9595repetirObjects1});
gdjs.Pantalla_32Game_32OverCode.mapOfGDgdjs_9546Pantalla_959532Game_959532OverCode_9546GDFondo_95959595negro2Objects1Objects = Hashtable.newFrom({"Fondo_negro2": gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negro2Objects1});
gdjs.Pantalla_32Game_32OverCode.mapOfGDgdjs_9546Pantalla_959532Game_959532OverCode_9546GDBoton_95959595guardarObjects1Objects = Hashtable.newFrom({"Boton_guardar": gdjs.Pantalla_32Game_32OverCode.GDBoton_9595guardarObjects1});
gdjs.Pantalla_32Game_32OverCode.userFunc0xaafb30 = function GDJSInlineCode(runtimeScene) {
"use strict";
runtimeScene.setBackgroundColor(100,100,240);

};
gdjs.Pantalla_32Game_32OverCode.eventsList0 = function(runtimeScene) {

{


gdjs.Pantalla_32Game_32OverCode.userFunc0xaafb30(runtimeScene);

}


};gdjs.Pantalla_32Game_32OverCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negroObjects1.length = 0;

gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negro3Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Pantalla_32Game_32OverCode.mapOfGDgdjs_9546Pantalla_959532Game_959532OverCode_9546GDFondo_95959595negro3Objects1Objects, 0, 0, "");
}{for(var i = 0, len = gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negro3Objects1.length ;i < len;++i) {
    gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negro3Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negro3Objects1.length ;i < len;++i) {
    gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negro3Objects1[i].getBehavior("Resizable").setSize(1280, 720);
}
}{for(var i = 0, len = gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negro3Objects1.length ;i < len;++i) {
    gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negro3Objects1[i].setZOrder(100);
}
}{for(var i = 0, len = gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negro3Objects1.length ;i < len;++i) {
    gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negro3Objects1[i].getBehavior("Opacity").setOpacity(255);
}
}{for(var i = 0, len = gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negro3Objects1.length ;i < len;++i) {
    gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negro3Objects1[i].getBehavior("Tween").addObjectOpacityTween2("Fin", 0, "easeOutQuad", 1, false);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Pantalla_32Game_32OverCode.mapOfGDgdjs_9546Pantalla_959532Game_959532OverCode_9546GDFondo_95959595negroObjects1Objects, 0, 0, "");
}{for(var i = 0, len = gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negroObjects1.length ;i < len;++i) {
    gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negroObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negroObjects1.length ;i < len;++i) {
    gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negroObjects1[i].getBehavior("Resizable").setSize(1280, 720);
}
}{for(var i = 0, len = gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negroObjects1.length ;i < len;++i) {
    gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negroObjects1[i].setZOrder(1);
}
}{for(var i = 0, len = gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negroObjects1.length ;i < len;++i) {
    gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negroObjects1[i].getBehavior("Opacity").setOpacity(150);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fondo_negro2"), gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negro2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negro2Objects1.length;i<l;++i) {
    if ( gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negro2Objects1[i].getBehavior("Tween").hasFinished("Fin") ) {
        isConditionTrue_0 = true;
        gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negro2Objects1[k] = gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negro2Objects1[i];
        ++k;
    }
}
gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negro2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Pantalla Inicio", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("boton_repetir"), gdjs.Pantalla_32Game_32OverCode.GDboton_9595repetirObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Pantalla_32Game_32OverCode.mapOfGDgdjs_9546Pantalla_959532Game_959532OverCode_9546GDboton_95959595repetirObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
}
}
if (isConditionTrue_0) {
gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negro2Objects1.length = 0;

{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(true);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Pantalla_32Game_32OverCode.mapOfGDgdjs_9546Pantalla_959532Game_959532OverCode_9546GDFondo_95959595negro2Objects1Objects, 0, 0, "");
}{for(var i = 0, len = gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negro2Objects1.length ;i < len;++i) {
    gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negro2Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negro2Objects1.length ;i < len;++i) {
    gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negro2Objects1[i].getBehavior("Resizable").setSize(1280, 720);
}
}{for(var i = 0, len = gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negro2Objects1.length ;i < len;++i) {
    gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negro2Objects1[i].setZOrder(5);
}
}{for(var i = 0, len = gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negro2Objects1.length ;i < len;++i) {
    gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negro2Objects1[i].getBehavior("Tween").addObjectOpacityTween2("Fin", 255, "easeOutQuad", 1, false);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Boton_guardar"), gdjs.Pantalla_32Game_32OverCode.GDBoton_9595guardarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Pantalla_32Game_32OverCode.mapOfGDgdjs_9546Pantalla_959532Game_959532OverCode_9546GDBoton_95959595guardarObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13782340);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Pantalla_32Game_32OverCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.Pantalla_32Game_32OverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Pantalla_32Game_32OverCode.GDFondoObjects1.length = 0;
gdjs.Pantalla_32Game_32OverCode.GDFondoObjects2.length = 0;
gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negroObjects1.length = 0;
gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negroObjects2.length = 0;
gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negro2Objects1.length = 0;
gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negro2Objects2.length = 0;
gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negro3Objects1.length = 0;
gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negro3Objects2.length = 0;
gdjs.Pantalla_32Game_32OverCode.GDGame_9595OverObjects1.length = 0;
gdjs.Pantalla_32Game_32OverCode.GDGame_9595OverObjects2.length = 0;
gdjs.Pantalla_32Game_32OverCode.GDFondo_9595gameoverObjects1.length = 0;
gdjs.Pantalla_32Game_32OverCode.GDFondo_9595gameoverObjects2.length = 0;
gdjs.Pantalla_32Game_32OverCode.GDBoton_9595guardarObjects1.length = 0;
gdjs.Pantalla_32Game_32OverCode.GDBoton_9595guardarObjects2.length = 0;
gdjs.Pantalla_32Game_32OverCode.GDboton_9595repetirObjects1.length = 0;
gdjs.Pantalla_32Game_32OverCode.GDboton_9595repetirObjects2.length = 0;

gdjs.Pantalla_32Game_32OverCode.eventsList1(runtimeScene);
gdjs.Pantalla_32Game_32OverCode.GDFondoObjects1.length = 0;
gdjs.Pantalla_32Game_32OverCode.GDFondoObjects2.length = 0;
gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negroObjects1.length = 0;
gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negroObjects2.length = 0;
gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negro2Objects1.length = 0;
gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negro2Objects2.length = 0;
gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negro3Objects1.length = 0;
gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negro3Objects2.length = 0;
gdjs.Pantalla_32Game_32OverCode.GDGame_9595OverObjects1.length = 0;
gdjs.Pantalla_32Game_32OverCode.GDGame_9595OverObjects2.length = 0;
gdjs.Pantalla_32Game_32OverCode.GDFondo_9595gameoverObjects1.length = 0;
gdjs.Pantalla_32Game_32OverCode.GDFondo_9595gameoverObjects2.length = 0;
gdjs.Pantalla_32Game_32OverCode.GDBoton_9595guardarObjects1.length = 0;
gdjs.Pantalla_32Game_32OverCode.GDBoton_9595guardarObjects2.length = 0;
gdjs.Pantalla_32Game_32OverCode.GDboton_9595repetirObjects1.length = 0;
gdjs.Pantalla_32Game_32OverCode.GDboton_9595repetirObjects2.length = 0;


return;

}

gdjs['Pantalla_32Game_32OverCode'] = gdjs.Pantalla_32Game_32OverCode;
