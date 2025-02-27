gdjs.Pantalla_32InicioCode = {};
gdjs.Pantalla_32InicioCode.localVariables = [];
gdjs.Pantalla_32InicioCode.GDFondoObjects1= [];
gdjs.Pantalla_32InicioCode.GDFondoObjects2= [];
gdjs.Pantalla_32InicioCode.GDFondo_9595negroObjects1= [];
gdjs.Pantalla_32InicioCode.GDFondo_9595negroObjects2= [];
gdjs.Pantalla_32InicioCode.GDComenzarObjects1= [];
gdjs.Pantalla_32InicioCode.GDComenzarObjects2= [];
gdjs.Pantalla_32InicioCode.GDFondo_9595negro2Objects1= [];
gdjs.Pantalla_32InicioCode.GDFondo_9595negro2Objects2= [];
gdjs.Pantalla_32InicioCode.GDFondo_9595negro3Objects1= [];
gdjs.Pantalla_32InicioCode.GDFondo_9595negro3Objects2= [];


gdjs.Pantalla_32InicioCode.mapOfGDgdjs_9546Pantalla_959532InicioCode_9546GDFondo_95959595negroObjects1Objects = Hashtable.newFrom({"Fondo_negro": gdjs.Pantalla_32InicioCode.GDFondo_9595negroObjects1});
gdjs.Pantalla_32InicioCode.mapOfGDgdjs_9546Pantalla_959532InicioCode_9546GDFondo_95959595negro3Objects1Objects = Hashtable.newFrom({"Fondo_negro3": gdjs.Pantalla_32InicioCode.GDFondo_9595negro3Objects1});
gdjs.Pantalla_32InicioCode.mapOfGDgdjs_9546Pantalla_959532InicioCode_9546GDComenzarObjects1Objects = Hashtable.newFrom({"Comenzar": gdjs.Pantalla_32InicioCode.GDComenzarObjects1});
gdjs.Pantalla_32InicioCode.mapOfGDgdjs_9546Pantalla_959532InicioCode_9546GDFondo_95959595negro2Objects1Objects = Hashtable.newFrom({"Fondo_negro2": gdjs.Pantalla_32InicioCode.GDFondo_9595negro2Objects1});
gdjs.Pantalla_32InicioCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.Pantalla_32InicioCode.GDFondo_9595negroObjects1.length = 0;

gdjs.Pantalla_32InicioCode.GDFondo_9595negro3Objects1.length = 0;

{gdjs.evtTools.sound.playSound(runtimeScene, "audio\\background.wav", true, 70, 1);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Pantalla_32InicioCode.mapOfGDgdjs_9546Pantalla_959532InicioCode_9546GDFondo_95959595negroObjects1Objects, 0, 0, "");
}{for(var i = 0, len = gdjs.Pantalla_32InicioCode.GDFondo_9595negroObjects1.length ;i < len;++i) {
    gdjs.Pantalla_32InicioCode.GDFondo_9595negroObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.Pantalla_32InicioCode.GDFondo_9595negroObjects1.length ;i < len;++i) {
    gdjs.Pantalla_32InicioCode.GDFondo_9595negroObjects1[i].getBehavior("Resizable").setSize(1280, 720);
}
}{for(var i = 0, len = gdjs.Pantalla_32InicioCode.GDFondo_9595negroObjects1.length ;i < len;++i) {
    gdjs.Pantalla_32InicioCode.GDFondo_9595negroObjects1[i].setZOrder(1);
}
}{for(var i = 0, len = gdjs.Pantalla_32InicioCode.GDFondo_9595negroObjects1.length ;i < len;++i) {
    gdjs.Pantalla_32InicioCode.GDFondo_9595negroObjects1[i].getBehavior("Opacity").setOpacity(150);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Pantalla_32InicioCode.mapOfGDgdjs_9546Pantalla_959532InicioCode_9546GDFondo_95959595negro3Objects1Objects, 0, 0, "");
}{for(var i = 0, len = gdjs.Pantalla_32InicioCode.GDFondo_9595negro3Objects1.length ;i < len;++i) {
    gdjs.Pantalla_32InicioCode.GDFondo_9595negro3Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.Pantalla_32InicioCode.GDFondo_9595negro3Objects1.length ;i < len;++i) {
    gdjs.Pantalla_32InicioCode.GDFondo_9595negro3Objects1[i].getBehavior("Resizable").setSize(1280, 720);
}
}{for(var i = 0, len = gdjs.Pantalla_32InicioCode.GDFondo_9595negro3Objects1.length ;i < len;++i) {
    gdjs.Pantalla_32InicioCode.GDFondo_9595negro3Objects1[i].setZOrder(100);
}
}{for(var i = 0, len = gdjs.Pantalla_32InicioCode.GDFondo_9595negro3Objects1.length ;i < len;++i) {
    gdjs.Pantalla_32InicioCode.GDFondo_9595negro3Objects1[i].getBehavior("Opacity").setOpacity(255);
}
}{for(var i = 0, len = gdjs.Pantalla_32InicioCode.GDFondo_9595negro3Objects1.length ;i < len;++i) {
    gdjs.Pantalla_32InicioCode.GDFondo_9595negro3Objects1[i].getBehavior("Tween").addObjectOpacityTween2("Fin", 0, "easeOutQuad", 1, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Comenzar"), gdjs.Pantalla_32InicioCode.GDComenzarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Fondo_negro3"), gdjs.Pantalla_32InicioCode.GDFondo_9595negro3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Pantalla_32InicioCode.GDFondo_9595negro3Objects1.length;i<l;++i) {
    if ( gdjs.Pantalla_32InicioCode.GDFondo_9595negro3Objects1[i].getBehavior("Tween").hasFinished("Fin") ) {
        isConditionTrue_0 = true;
        gdjs.Pantalla_32InicioCode.GDFondo_9595negro3Objects1[k] = gdjs.Pantalla_32InicioCode.GDFondo_9595negro3Objects1[i];
        ++k;
    }
}
gdjs.Pantalla_32InicioCode.GDFondo_9595negro3Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Pantalla_32InicioCode.mapOfGDgdjs_9546Pantalla_959532InicioCode_9546GDComenzarObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11029332);
}
}
}
}
if (isConditionTrue_0) {
gdjs.Pantalla_32InicioCode.GDFondo_9595negro2Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Pantalla_32InicioCode.mapOfGDgdjs_9546Pantalla_959532InicioCode_9546GDFondo_95959595negro2Objects1Objects, 0, 0, "");
}{for(var i = 0, len = gdjs.Pantalla_32InicioCode.GDFondo_9595negro2Objects1.length ;i < len;++i) {
    gdjs.Pantalla_32InicioCode.GDFondo_9595negro2Objects1[i].getBehavior("Resizable").setSize(1280, 720);
}
}{for(var i = 0, len = gdjs.Pantalla_32InicioCode.GDFondo_9595negro2Objects1.length ;i < len;++i) {
    gdjs.Pantalla_32InicioCode.GDFondo_9595negro2Objects1[i].setZOrder(3);
}
}{for(var i = 0, len = gdjs.Pantalla_32InicioCode.GDFondo_9595negro2Objects1.length ;i < len;++i) {
    gdjs.Pantalla_32InicioCode.GDFondo_9595negro2Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.Pantalla_32InicioCode.GDFondo_9595negro2Objects1.length ;i < len;++i) {
    gdjs.Pantalla_32InicioCode.GDFondo_9595negro2Objects1[i].getBehavior("Tween").addObjectOpacityTween2("Fin", 255, "easeOutQuad", 1, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fondo_negro2"), gdjs.Pantalla_32InicioCode.GDFondo_9595negro2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Pantalla_32InicioCode.GDFondo_9595negro2Objects1.length;i<l;++i) {
    if ( gdjs.Pantalla_32InicioCode.GDFondo_9595negro2Objects1[i].getBehavior("Tween").hasFinished("Fin") ) {
        isConditionTrue_0 = true;
        gdjs.Pantalla_32InicioCode.GDFondo_9595negro2Objects1[k] = gdjs.Pantalla_32InicioCode.GDFondo_9595negro2Objects1[i];
        ++k;
    }
}
gdjs.Pantalla_32InicioCode.GDFondo_9595negro2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Gameplay", true);
}}

}


};

gdjs.Pantalla_32InicioCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Pantalla_32InicioCode.GDFondoObjects1.length = 0;
gdjs.Pantalla_32InicioCode.GDFondoObjects2.length = 0;
gdjs.Pantalla_32InicioCode.GDFondo_9595negroObjects1.length = 0;
gdjs.Pantalla_32InicioCode.GDFondo_9595negroObjects2.length = 0;
gdjs.Pantalla_32InicioCode.GDComenzarObjects1.length = 0;
gdjs.Pantalla_32InicioCode.GDComenzarObjects2.length = 0;
gdjs.Pantalla_32InicioCode.GDFondo_9595negro2Objects1.length = 0;
gdjs.Pantalla_32InicioCode.GDFondo_9595negro2Objects2.length = 0;
gdjs.Pantalla_32InicioCode.GDFondo_9595negro3Objects1.length = 0;
gdjs.Pantalla_32InicioCode.GDFondo_9595negro3Objects2.length = 0;

gdjs.Pantalla_32InicioCode.eventsList0(runtimeScene);
gdjs.Pantalla_32InicioCode.GDFondoObjects1.length = 0;
gdjs.Pantalla_32InicioCode.GDFondoObjects2.length = 0;
gdjs.Pantalla_32InicioCode.GDFondo_9595negroObjects1.length = 0;
gdjs.Pantalla_32InicioCode.GDFondo_9595negroObjects2.length = 0;
gdjs.Pantalla_32InicioCode.GDComenzarObjects1.length = 0;
gdjs.Pantalla_32InicioCode.GDComenzarObjects2.length = 0;
gdjs.Pantalla_32InicioCode.GDFondo_9595negro2Objects1.length = 0;
gdjs.Pantalla_32InicioCode.GDFondo_9595negro2Objects2.length = 0;
gdjs.Pantalla_32InicioCode.GDFondo_9595negro3Objects1.length = 0;
gdjs.Pantalla_32InicioCode.GDFondo_9595negro3Objects2.length = 0;


return;

}

gdjs['Pantalla_32InicioCode'] = gdjs.Pantalla_32InicioCode;
