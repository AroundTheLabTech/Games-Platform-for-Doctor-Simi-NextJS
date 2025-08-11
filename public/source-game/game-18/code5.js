gdjs.Nivel_322Code = {};
gdjs.Nivel_322Code.localVariables = [];
gdjs.Nivel_322Code.GDEnemyObjects1_1final = [];

gdjs.Nivel_322Code.GDPlayerObjects1_1final = [];

gdjs.Nivel_322Code.GDEnemyObjects1= [];
gdjs.Nivel_322Code.GDEnemyObjects2= [];
gdjs.Nivel_322Code.GDEnemyObjects3= [];
gdjs.Nivel_322Code.GDEnemyObjects4= [];
gdjs.Nivel_322Code.GDPlayerObjects1= [];
gdjs.Nivel_322Code.GDPlayerObjects2= [];
gdjs.Nivel_322Code.GDPlayerObjects3= [];
gdjs.Nivel_322Code.GDPlayerObjects4= [];
gdjs.Nivel_322Code.GDPlayerHealthBarObjects1= [];
gdjs.Nivel_322Code.GDPlayerHealthBarObjects2= [];
gdjs.Nivel_322Code.GDPlayerHealthBarObjects3= [];
gdjs.Nivel_322Code.GDPlayerHealthBarObjects4= [];
gdjs.Nivel_322Code.GDEnemyHealthBarObjects1= [];
gdjs.Nivel_322Code.GDEnemyHealthBarObjects2= [];
gdjs.Nivel_322Code.GDEnemyHealthBarObjects3= [];
gdjs.Nivel_322Code.GDEnemyHealthBarObjects4= [];
gdjs.Nivel_322Code.GDDialogueObjects1= [];
gdjs.Nivel_322Code.GDDialogueObjects2= [];
gdjs.Nivel_322Code.GDDialogueObjects3= [];
gdjs.Nivel_322Code.GDDialogueObjects4= [];
gdjs.Nivel_322Code.GDGrassObjects1= [];
gdjs.Nivel_322Code.GDGrassObjects2= [];
gdjs.Nivel_322Code.GDGrassObjects3= [];
gdjs.Nivel_322Code.GDGrassObjects4= [];
gdjs.Nivel_322Code.GDAttack1Objects1= [];
gdjs.Nivel_322Code.GDAttack1Objects2= [];
gdjs.Nivel_322Code.GDAttack1Objects3= [];
gdjs.Nivel_322Code.GDAttack1Objects4= [];
gdjs.Nivel_322Code.GDAttack2Objects1= [];
gdjs.Nivel_322Code.GDAttack2Objects2= [];
gdjs.Nivel_322Code.GDAttack2Objects3= [];
gdjs.Nivel_322Code.GDAttack2Objects4= [];
gdjs.Nivel_322Code.GDRunObjects1= [];
gdjs.Nivel_322Code.GDRunObjects2= [];
gdjs.Nivel_322Code.GDRunObjects3= [];
gdjs.Nivel_322Code.GDRunObjects4= [];
gdjs.Nivel_322Code.GDBackgroundObjects1= [];
gdjs.Nivel_322Code.GDBackgroundObjects2= [];
gdjs.Nivel_322Code.GDBackgroundObjects3= [];
gdjs.Nivel_322Code.GDBackgroundObjects4= [];
gdjs.Nivel_322Code.GDTextBorderObjects1= [];
gdjs.Nivel_322Code.GDTextBorderObjects2= [];
gdjs.Nivel_322Code.GDTextBorderObjects3= [];
gdjs.Nivel_322Code.GDTextBorderObjects4= [];
gdjs.Nivel_322Code.GDTransitionObjects1= [];
gdjs.Nivel_322Code.GDTransitionObjects2= [];
gdjs.Nivel_322Code.GDTransitionObjects3= [];
gdjs.Nivel_322Code.GDTransitionObjects4= [];


gdjs.Nivel_322Code.asyncCallback18170796 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Nivel_322Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Grass"), gdjs.Nivel_322Code.GDGrassObjects2);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Nivel_322Code.GDGrassObjects2.length !== 0 ? gdjs.Nivel_322Code.GDGrassObjects2[0] : null), true, "Background", 0);
}gdjs.Nivel_322Code.localVariables.length = 0;
}
gdjs.Nivel_322Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Nivel_322Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.Nivel_322Code.asyncCallback18170796(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Nivel_322Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Nivel_322Code.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("EnemyHealthBar"), gdjs.Nivel_322Code.GDEnemyHealthBarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Nivel_322Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerHealthBar"), gdjs.Nivel_322Code.GDPlayerHealthBarObjects1);
{for(var i = 0, len = gdjs.Nivel_322Code.GDPlayerHealthBarObjects1.length ;i < len;++i) {
    gdjs.Nivel_322Code.GDPlayerHealthBarObjects1[i].SetValue((( gdjs.Nivel_322Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Nivel_322Code.GDPlayerObjects1[0].getBehavior("Health").Health((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Nivel_322Code.GDEnemyHealthBarObjects1.length ;i < len;++i) {
    gdjs.Nivel_322Code.GDEnemyHealthBarObjects1[i].SetValue((( gdjs.Nivel_322Code.GDEnemyObjects1.length === 0 ) ? 0 :gdjs.Nivel_322Code.GDEnemyObjects1[0].getBehavior("Health").Health((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.Nivel_322Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Attack1"), gdjs.Nivel_322Code.GDAttack1Objects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Nivel_322Code.GDAttack1Objects3.length;i<l;++i) {
    if ( gdjs.Nivel_322Code.GDAttack1Objects3[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Nivel_322Code.GDAttack1Objects3[k] = gdjs.Nivel_322Code.GDAttack1Objects3[i];
        ++k;
    }
}
gdjs.Nivel_322Code.GDAttack1Objects3.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("PlayPlayerAttack");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Run"), gdjs.Nivel_322Code.GDRunObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Nivel_322Code.GDRunObjects2.length;i<l;++i) {
    if ( gdjs.Nivel_322Code.GDRunObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Nivel_322Code.GDRunObjects2[k] = gdjs.Nivel_322Code.GDRunObjects2[i];
        ++k;
    }
}
gdjs.Nivel_322Code.GDRunObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};gdjs.Nivel_322Code.asyncCallback18184052 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Nivel_322Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Enemy"), gdjs.Nivel_322Code.GDEnemyObjects4);

{for(var i = 0, len = gdjs.Nivel_322Code.GDEnemyObjects4.length ;i < len;++i) {
    gdjs.Nivel_322Code.GDEnemyObjects4[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, -(2.5), -(2.5), 0, 2, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setString("WaitEnemyChoice");
}gdjs.Nivel_322Code.localVariables.length = 0;
}
gdjs.Nivel_322Code.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Nivel_322Code.localVariables);
for (const obj of gdjs.Nivel_322Code.GDEnemyObjects3) asyncObjectsList.addObject("Enemy", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Nivel_322Code.asyncCallback18184052(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Nivel_322Code.asyncCallback18180820 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Nivel_322Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.Nivel_322Code.GDDialogueObjects3);
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Nivel_322Code.GDEnemyObjects3);
{gdjs.evtTools.sound.playSound(runtimeScene, "Attack.wav", false, 90, gdjs.randomFloatInRange(0.9, 1));
}{for(var i = 0, len = gdjs.Nivel_322Code.GDEnemyObjects3.length ;i < len;++i) {
    gdjs.Nivel_322Code.GDEnemyObjects3[i].getBehavior("ShakeObject_PositionAngle").StopShaking((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Nivel_322Code.GDEnemyObjects3.length ;i < len;++i) {
    gdjs.Nivel_322Code.GDEnemyObjects3[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(0.6, 7, 7, 5, 10, 0.2, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Nivel_322Code.GDEnemyObjects3.length ;i < len;++i) {
    gdjs.Nivel_322Code.GDEnemyObjects3[i].getBehavior("Flash").Flash(0.3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Nivel_322Code.GDEnemyObjects3.length ;i < len;++i) {
    gdjs.Nivel_322Code.GDEnemyObjects3[i].getBehavior("Health").Hit(10, true, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Nivel_322Code.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.Nivel_322Code.GDDialogueObjects3[i].getBehavior("Text").setText("You attacked your enemy.");
}
}
{ //Subevents
gdjs.Nivel_322Code.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Nivel_322Code.localVariables.length = 0;
}
gdjs.Nivel_322Code.eventsList4 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Nivel_322Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.Nivel_322Code.asyncCallback18180820(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Nivel_322Code.asyncCallback18180268 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Nivel_322Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Player"), gdjs.Nivel_322Code.GDPlayerObjects2);

{for(var i = 0, len = gdjs.Nivel_322Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Nivel_322Code.GDPlayerObjects2[i].getBehavior("Tween").addObjectPositionTween2("BackUp", (gdjs.Nivel_322Code.GDPlayerObjects2[i].getPointX("")) + 67, (gdjs.Nivel_322Code.GDPlayerObjects2[i].getPointY("")), "easeInQuad", 0.1, false);
}
}
{ //Subevents
gdjs.Nivel_322Code.eventsList4(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Nivel_322Code.localVariables.length = 0;
}
gdjs.Nivel_322Code.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Nivel_322Code.localVariables);
for (const obj of gdjs.Nivel_322Code.GDPlayerObjects1) asyncObjectsList.addObject("Player", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Nivel_322Code.asyncCallback18180268(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Nivel_322Code.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18179260);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Nivel_322Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Nivel_322Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Nivel_322Code.GDPlayerObjects1[i].getBehavior("Tween").addObjectPositionTween2("BackUp", (gdjs.Nivel_322Code.GDPlayerObjects1[i].getPointX("")) - 67, (gdjs.Nivel_322Code.GDPlayerObjects1[i].getPointY("")), "easeOutQuad", 0.5, false);
}
}
{ //Subevents
gdjs.Nivel_322Code.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.Nivel_322Code.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Attack1"), gdjs.Nivel_322Code.GDAttack1Objects2);
gdjs.copyArray(runtimeScene.getObjects("Attack2"), gdjs.Nivel_322Code.GDAttack2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Run"), gdjs.Nivel_322Code.GDRunObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Nivel_322Code.GDAttack1Objects2.length;i<l;++i) {
    if ( gdjs.Nivel_322Code.GDAttack1Objects2[i].IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Nivel_322Code.GDAttack1Objects2[k] = gdjs.Nivel_322Code.GDAttack1Objects2[i];
        ++k;
    }
}
gdjs.Nivel_322Code.GDAttack1Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.Nivel_322Code.GDAttack2Objects2.length;i<l;++i) {
    if ( gdjs.Nivel_322Code.GDAttack2Objects2[i].IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Nivel_322Code.GDAttack2Objects2[k] = gdjs.Nivel_322Code.GDAttack2Objects2[i];
        ++k;
    }
}
gdjs.Nivel_322Code.GDAttack2Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.Nivel_322Code.GDRunObjects2.length;i<l;++i) {
    if ( gdjs.Nivel_322Code.GDRunObjects2[i].IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Nivel_322Code.GDRunObjects2[k] = gdjs.Nivel_322Code.GDRunObjects2[i];
        ++k;
    }
}
gdjs.Nivel_322Code.GDRunObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18174412);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "HoverSound.wav", false, 20, gdjs.randomFloatInRange(0.8, 0.9));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "WaitPlayerChoice");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Nivel_322Code.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "PlayPlayerAttack");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Nivel_322Code.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.Nivel_322Code.asyncCallback18187180 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Nivel_322Code.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("PlayEnemyAttack");
}gdjs.Nivel_322Code.localVariables.length = 0;
}
gdjs.Nivel_322Code.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Nivel_322Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Nivel_322Code.asyncCallback18187180(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Nivel_322Code.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18187020);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Nivel_322Code.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.Nivel_322Code.asyncCallback18192732 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Nivel_322Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Player"), gdjs.Nivel_322Code.GDPlayerObjects4);

{for(var i = 0, len = gdjs.Nivel_322Code.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.Nivel_322Code.GDPlayerObjects4[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 3.5, 3.5, 0, 2, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setString("WaitPlayerChoice");
}gdjs.Nivel_322Code.localVariables.length = 0;
}
gdjs.Nivel_322Code.eventsList10 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Nivel_322Code.localVariables);
for (const obj of gdjs.Nivel_322Code.GDPlayerObjects3) asyncObjectsList.addObject("Player", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Nivel_322Code.asyncCallback18192732(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Nivel_322Code.asyncCallback18190372 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Nivel_322Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.Nivel_322Code.GDDialogueObjects3);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Nivel_322Code.GDPlayerObjects3);
{gdjs.evtTools.sound.playSound(runtimeScene, "Attack.wav", false, 90, gdjs.randomFloatInRange(0.9, 1));
}{for(var i = 0, len = gdjs.Nivel_322Code.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Nivel_322Code.GDPlayerObjects3[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(0.6, 7, 7, 5, 10, 0.2, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Nivel_322Code.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Nivel_322Code.GDPlayerObjects3[i].getBehavior("Flash").Flash(0.3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Nivel_322Code.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Nivel_322Code.GDPlayerObjects3[i].getBehavior("Health").Hit(10, true, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Nivel_322Code.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.Nivel_322Code.GDDialogueObjects3[i].getBehavior("Text").setText("Your enemy attacked you.");
}
}
{ //Subevents
gdjs.Nivel_322Code.eventsList10(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Nivel_322Code.localVariables.length = 0;
}
gdjs.Nivel_322Code.eventsList11 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Nivel_322Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.Nivel_322Code.asyncCallback18190372(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Nivel_322Code.asyncCallback18189820 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Nivel_322Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Enemy"), gdjs.Nivel_322Code.GDEnemyObjects2);

{for(var i = 0, len = gdjs.Nivel_322Code.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Nivel_322Code.GDEnemyObjects2[i].getBehavior("Tween").addObjectPositionTween2("BackUp", (gdjs.Nivel_322Code.GDEnemyObjects2[i].getPointX("")) - 67, (gdjs.Nivel_322Code.GDEnemyObjects2[i].getPointY("")), "easeInQuad", 0.1, false);
}
}
{ //Subevents
gdjs.Nivel_322Code.eventsList11(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Nivel_322Code.localVariables.length = 0;
}
gdjs.Nivel_322Code.eventsList12 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Nivel_322Code.localVariables);
for (const obj of gdjs.Nivel_322Code.GDEnemyObjects1) asyncObjectsList.addObject("Enemy", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Nivel_322Code.asyncCallback18189820(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Nivel_322Code.eventsList13 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18188812);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Nivel_322Code.GDEnemyObjects1);
{for(var i = 0, len = gdjs.Nivel_322Code.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Nivel_322Code.GDEnemyObjects1[i].getBehavior("Tween").addObjectPositionTween2("BackUp", (gdjs.Nivel_322Code.GDEnemyObjects1[i].getPointX("")) + 67, (gdjs.Nivel_322Code.GDEnemyObjects1[i].getPointY("")), "easeOutQuad", 0.5, false);
}
}
{ //Subevents
gdjs.Nivel_322Code.eventsList12(runtimeScene);} //End of subevents
}

}


};gdjs.Nivel_322Code.eventsList14 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "WaitEnemyChoice");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Nivel_322Code.eventsList9(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "PlayEnemyAttack");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Nivel_322Code.eventsList13(runtimeScene);} //End of subevents
}

}


};gdjs.Nivel_322Code.eventsList15 = function(runtimeScene) {

{

gdjs.Nivel_322Code.GDEnemyObjects1.length = 0;

gdjs.Nivel_322Code.GDPlayerObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Nivel_322Code.GDEnemyObjects1_1final.length = 0;
gdjs.Nivel_322Code.GDPlayerObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Nivel_322Code.GDEnemyObjects2);
for (var i = 0, k = 0, l = gdjs.Nivel_322Code.GDEnemyObjects2.length;i<l;++i) {
    if ( gdjs.Nivel_322Code.GDEnemyObjects2[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.Nivel_322Code.GDEnemyObjects2[k] = gdjs.Nivel_322Code.GDEnemyObjects2[i];
        ++k;
    }
}
gdjs.Nivel_322Code.GDEnemyObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Nivel_322Code.GDEnemyObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Nivel_322Code.GDEnemyObjects1_1final.indexOf(gdjs.Nivel_322Code.GDEnemyObjects2[j]) === -1 )
            gdjs.Nivel_322Code.GDEnemyObjects1_1final.push(gdjs.Nivel_322Code.GDEnemyObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Nivel_322Code.GDPlayerObjects2);
for (var i = 0, k = 0, l = gdjs.Nivel_322Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Nivel_322Code.GDPlayerObjects2[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.Nivel_322Code.GDPlayerObjects2[k] = gdjs.Nivel_322Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Nivel_322Code.GDPlayerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Nivel_322Code.GDPlayerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Nivel_322Code.GDPlayerObjects1_1final.indexOf(gdjs.Nivel_322Code.GDPlayerObjects2[j]) === -1 )
            gdjs.Nivel_322Code.GDPlayerObjects1_1final.push(gdjs.Nivel_322Code.GDPlayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Nivel_322Code.GDEnemyObjects1_1final, gdjs.Nivel_322Code.GDEnemyObjects1);
gdjs.copyArray(gdjs.Nivel_322Code.GDPlayerObjects1_1final, gdjs.Nivel_322Code.GDPlayerObjects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};gdjs.Nivel_322Code.eventsList16 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Nivel_322Code.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Nivel_322Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.Nivel_322Code.GDTransitionObjects1);
{for(var i = 0, len = gdjs.Nivel_322Code.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.Nivel_322Code.GDTransitionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.5, "Circular", "Backward", 255, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Nivel_322Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Nivel_322Code.GDPlayerObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 7, 7, 0, 2, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Nivel_322Code.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Nivel_322Code.GDEnemyObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, -(5), -(5), 0, 2, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 6.5, "Background", 0);
}
{ //Subevents
gdjs.Nivel_322Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.Nivel_322Code.eventsList1(runtimeScene);
}


{


gdjs.Nivel_322Code.eventsList7(runtimeScene);
}


{


gdjs.Nivel_322Code.eventsList14(runtimeScene);
}


{


gdjs.Nivel_322Code.eventsList15(runtimeScene);
}


};

gdjs.Nivel_322Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Nivel_322Code.GDEnemyObjects1.length = 0;
gdjs.Nivel_322Code.GDEnemyObjects2.length = 0;
gdjs.Nivel_322Code.GDEnemyObjects3.length = 0;
gdjs.Nivel_322Code.GDEnemyObjects4.length = 0;
gdjs.Nivel_322Code.GDPlayerObjects1.length = 0;
gdjs.Nivel_322Code.GDPlayerObjects2.length = 0;
gdjs.Nivel_322Code.GDPlayerObjects3.length = 0;
gdjs.Nivel_322Code.GDPlayerObjects4.length = 0;
gdjs.Nivel_322Code.GDPlayerHealthBarObjects1.length = 0;
gdjs.Nivel_322Code.GDPlayerHealthBarObjects2.length = 0;
gdjs.Nivel_322Code.GDPlayerHealthBarObjects3.length = 0;
gdjs.Nivel_322Code.GDPlayerHealthBarObjects4.length = 0;
gdjs.Nivel_322Code.GDEnemyHealthBarObjects1.length = 0;
gdjs.Nivel_322Code.GDEnemyHealthBarObjects2.length = 0;
gdjs.Nivel_322Code.GDEnemyHealthBarObjects3.length = 0;
gdjs.Nivel_322Code.GDEnemyHealthBarObjects4.length = 0;
gdjs.Nivel_322Code.GDDialogueObjects1.length = 0;
gdjs.Nivel_322Code.GDDialogueObjects2.length = 0;
gdjs.Nivel_322Code.GDDialogueObjects3.length = 0;
gdjs.Nivel_322Code.GDDialogueObjects4.length = 0;
gdjs.Nivel_322Code.GDGrassObjects1.length = 0;
gdjs.Nivel_322Code.GDGrassObjects2.length = 0;
gdjs.Nivel_322Code.GDGrassObjects3.length = 0;
gdjs.Nivel_322Code.GDGrassObjects4.length = 0;
gdjs.Nivel_322Code.GDAttack1Objects1.length = 0;
gdjs.Nivel_322Code.GDAttack1Objects2.length = 0;
gdjs.Nivel_322Code.GDAttack1Objects3.length = 0;
gdjs.Nivel_322Code.GDAttack1Objects4.length = 0;
gdjs.Nivel_322Code.GDAttack2Objects1.length = 0;
gdjs.Nivel_322Code.GDAttack2Objects2.length = 0;
gdjs.Nivel_322Code.GDAttack2Objects3.length = 0;
gdjs.Nivel_322Code.GDAttack2Objects4.length = 0;
gdjs.Nivel_322Code.GDRunObjects1.length = 0;
gdjs.Nivel_322Code.GDRunObjects2.length = 0;
gdjs.Nivel_322Code.GDRunObjects3.length = 0;
gdjs.Nivel_322Code.GDRunObjects4.length = 0;
gdjs.Nivel_322Code.GDBackgroundObjects1.length = 0;
gdjs.Nivel_322Code.GDBackgroundObjects2.length = 0;
gdjs.Nivel_322Code.GDBackgroundObjects3.length = 0;
gdjs.Nivel_322Code.GDBackgroundObjects4.length = 0;
gdjs.Nivel_322Code.GDTextBorderObjects1.length = 0;
gdjs.Nivel_322Code.GDTextBorderObjects2.length = 0;
gdjs.Nivel_322Code.GDTextBorderObjects3.length = 0;
gdjs.Nivel_322Code.GDTextBorderObjects4.length = 0;
gdjs.Nivel_322Code.GDTransitionObjects1.length = 0;
gdjs.Nivel_322Code.GDTransitionObjects2.length = 0;
gdjs.Nivel_322Code.GDTransitionObjects3.length = 0;
gdjs.Nivel_322Code.GDTransitionObjects4.length = 0;

gdjs.Nivel_322Code.eventsList16(runtimeScene);
gdjs.Nivel_322Code.GDEnemyObjects1.length = 0;
gdjs.Nivel_322Code.GDEnemyObjects2.length = 0;
gdjs.Nivel_322Code.GDEnemyObjects3.length = 0;
gdjs.Nivel_322Code.GDEnemyObjects4.length = 0;
gdjs.Nivel_322Code.GDPlayerObjects1.length = 0;
gdjs.Nivel_322Code.GDPlayerObjects2.length = 0;
gdjs.Nivel_322Code.GDPlayerObjects3.length = 0;
gdjs.Nivel_322Code.GDPlayerObjects4.length = 0;
gdjs.Nivel_322Code.GDPlayerHealthBarObjects1.length = 0;
gdjs.Nivel_322Code.GDPlayerHealthBarObjects2.length = 0;
gdjs.Nivel_322Code.GDPlayerHealthBarObjects3.length = 0;
gdjs.Nivel_322Code.GDPlayerHealthBarObjects4.length = 0;
gdjs.Nivel_322Code.GDEnemyHealthBarObjects1.length = 0;
gdjs.Nivel_322Code.GDEnemyHealthBarObjects2.length = 0;
gdjs.Nivel_322Code.GDEnemyHealthBarObjects3.length = 0;
gdjs.Nivel_322Code.GDEnemyHealthBarObjects4.length = 0;
gdjs.Nivel_322Code.GDDialogueObjects1.length = 0;
gdjs.Nivel_322Code.GDDialogueObjects2.length = 0;
gdjs.Nivel_322Code.GDDialogueObjects3.length = 0;
gdjs.Nivel_322Code.GDDialogueObjects4.length = 0;
gdjs.Nivel_322Code.GDGrassObjects1.length = 0;
gdjs.Nivel_322Code.GDGrassObjects2.length = 0;
gdjs.Nivel_322Code.GDGrassObjects3.length = 0;
gdjs.Nivel_322Code.GDGrassObjects4.length = 0;
gdjs.Nivel_322Code.GDAttack1Objects1.length = 0;
gdjs.Nivel_322Code.GDAttack1Objects2.length = 0;
gdjs.Nivel_322Code.GDAttack1Objects3.length = 0;
gdjs.Nivel_322Code.GDAttack1Objects4.length = 0;
gdjs.Nivel_322Code.GDAttack2Objects1.length = 0;
gdjs.Nivel_322Code.GDAttack2Objects2.length = 0;
gdjs.Nivel_322Code.GDAttack2Objects3.length = 0;
gdjs.Nivel_322Code.GDAttack2Objects4.length = 0;
gdjs.Nivel_322Code.GDRunObjects1.length = 0;
gdjs.Nivel_322Code.GDRunObjects2.length = 0;
gdjs.Nivel_322Code.GDRunObjects3.length = 0;
gdjs.Nivel_322Code.GDRunObjects4.length = 0;
gdjs.Nivel_322Code.GDBackgroundObjects1.length = 0;
gdjs.Nivel_322Code.GDBackgroundObjects2.length = 0;
gdjs.Nivel_322Code.GDBackgroundObjects3.length = 0;
gdjs.Nivel_322Code.GDBackgroundObjects4.length = 0;
gdjs.Nivel_322Code.GDTextBorderObjects1.length = 0;
gdjs.Nivel_322Code.GDTextBorderObjects2.length = 0;
gdjs.Nivel_322Code.GDTextBorderObjects3.length = 0;
gdjs.Nivel_322Code.GDTextBorderObjects4.length = 0;
gdjs.Nivel_322Code.GDTransitionObjects1.length = 0;
gdjs.Nivel_322Code.GDTransitionObjects2.length = 0;
gdjs.Nivel_322Code.GDTransitionObjects3.length = 0;
gdjs.Nivel_322Code.GDTransitionObjects4.length = 0;


return;

}

gdjs['Nivel_322Code'] = gdjs.Nivel_322Code;
