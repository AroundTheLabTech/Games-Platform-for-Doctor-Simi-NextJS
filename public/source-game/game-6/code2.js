gdjs.Pantalla_32Game_32OverCode = {};
gdjs.Pantalla_32Game_32OverCode.localVariables = [];
gdjs.Pantalla_32Game_32OverCode.GDFondoObjects1= [];
gdjs.Pantalla_32Game_32OverCode.GDFondoObjects2= [];
gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negroObjects1= [];
gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negroObjects2= [];
gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negro2Objects1= [];
gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negro2Objects2= [];
gdjs.Pantalla_32Game_32OverCode.GDFin_9595de_9595juegoObjects1= [];
gdjs.Pantalla_32Game_32OverCode.GDFin_9595de_9595juegoObjects2= [];
gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negro3Objects1= [];
gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negro3Objects2= [];


gdjs.Pantalla_32Game_32OverCode.mapOfGDgdjs_9546Pantalla_959532Game_959532OverCode_9546GDFondo_95959595negro3Objects1Objects = Hashtable.newFrom({"Fondo_negro3": gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negro3Objects1});
gdjs.Pantalla_32Game_32OverCode.mapOfGDgdjs_9546Pantalla_959532Game_959532OverCode_9546GDFondo_95959595negroObjects1Objects = Hashtable.newFrom({"Fondo_negro": gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negroObjects1});
gdjs.Pantalla_32Game_32OverCode.mapOfGDgdjs_9546Pantalla_959532Game_959532OverCode_9546GDFondo_95959595negro2Objects2Objects = Hashtable.newFrom({"Fondo_negro2": gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negro2Objects2});
gdjs.Pantalla_32Game_32OverCode.asyncCallback11362220 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Pantalla_32Game_32OverCode.localVariables);
gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negro2Objects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Pantalla_32Game_32OverCode.mapOfGDgdjs_9546Pantalla_959532Game_959532OverCode_9546GDFondo_95959595negro2Objects2Objects, 0, 0, "");
}{for(var i = 0, len = gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negro2Objects2.length ;i < len;++i) {
    gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negro2Objects2[i].getBehavior("Resizable").setSize(1280, 720);
}
}{for(var i = 0, len = gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negro2Objects2.length ;i < len;++i) {
    gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negro2Objects2[i].setZOrder(3);
}
}{for(var i = 0, len = gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negro2Objects2.length ;i < len;++i) {
    gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negro2Objects2[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negro2Objects2.length ;i < len;++i) {
    gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negro2Objects2[i].getBehavior("Tween").addObjectOpacityTween2("Fin", 255, "easeOutQuad", 1, false);
}
}gdjs.Pantalla_32Game_32OverCode.localVariables.length = 0;
}
gdjs.Pantalla_32Game_32OverCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Pantalla_32Game_32OverCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.Pantalla_32Game_32OverCode.asyncCallback11362220(runtimeScene, asyncObjectsList)));
}
}

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
}
{ //Subevents
gdjs.Pantalla_32Game_32OverCode.eventsList0(runtimeScene);} //End of subevents
}

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


};

gdjs.Pantalla_32Game_32OverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Pantalla_32Game_32OverCode.GDFondoObjects1.length = 0;
gdjs.Pantalla_32Game_32OverCode.GDFondoObjects2.length = 0;
gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negroObjects1.length = 0;
gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negroObjects2.length = 0;
gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negro2Objects1.length = 0;
gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negro2Objects2.length = 0;
gdjs.Pantalla_32Game_32OverCode.GDFin_9595de_9595juegoObjects1.length = 0;
gdjs.Pantalla_32Game_32OverCode.GDFin_9595de_9595juegoObjects2.length = 0;
gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negro3Objects1.length = 0;
gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negro3Objects2.length = 0;

gdjs.Pantalla_32Game_32OverCode.eventsList1(runtimeScene);
gdjs.Pantalla_32Game_32OverCode.GDFondoObjects1.length = 0;
gdjs.Pantalla_32Game_32OverCode.GDFondoObjects2.length = 0;
gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negroObjects1.length = 0;
gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negroObjects2.length = 0;
gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negro2Objects1.length = 0;
gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negro2Objects2.length = 0;
gdjs.Pantalla_32Game_32OverCode.GDFin_9595de_9595juegoObjects1.length = 0;
gdjs.Pantalla_32Game_32OverCode.GDFin_9595de_9595juegoObjects2.length = 0;
gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negro3Objects1.length = 0;
gdjs.Pantalla_32Game_32OverCode.GDFondo_9595negro3Objects2.length = 0;


return;

}

gdjs['Pantalla_32Game_32OverCode'] = gdjs.Pantalla_32Game_32OverCode;
