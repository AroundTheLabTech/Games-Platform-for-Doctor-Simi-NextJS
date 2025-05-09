
if (typeof gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes !== "undefined") {
  gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes = {};
gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.GDlockedBlockObjects1= [];
gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.GDlockedBlockObjects2= [];
gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.GDlockedBlockObjects3= [];
gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.GDlockedBlockObjects4= [];
gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.GDgridObjects1= [];
gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.GDgridObjects2= [];
gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.GDgridObjects3= [];
gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.GDgridObjects4= [];


gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.mapOfGDgdjs_9546evtsExt_9595_9595TetrisUtils_9595_9595Block_9595PutLockedOnes_9546GDlockedBlockObjects3Objects = Hashtable.newFrom({"lockedBlock": gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.GDlockedBlockObjects3});
gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.mapOfGDgdjs_9546evtsExt_9595_9595TetrisUtils_9595_9595Block_9595PutLockedOnes_9546GDgridObjects3Objects = Hashtable.newFrom({"grid": gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.GDgridObjects3});
gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("_TempValue").setNumber(gdjs.evtTools.common.toNumber(gdjs.evtTools.string.strAt(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("_TempStr")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("_Count")))));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("_TempValue")) == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("grid"), gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.GDgridObjects3);
gdjs.copyArray(eventsFunctionContext.getObjects("lockedBlock"), gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.GDlockedBlockObjects3);
{gdjs.evtsExt__TetrisUtils__Block_PutLockedOne.func(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("_Count")), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("y")) || 0 : 0), -(1), 1, gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.mapOfGDgdjs_9546evtsExt_9595_9595TetrisUtils_9595_9595Block_9595PutLockedOnes_9546GDlockedBlockObjects3Objects, eventsFunctionContext.getBehaviorName("TetrisBlock"), gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.mapOfGDgdjs_9546evtsExt_9595_9595TetrisUtils_9595_9595Block_9595PutLockedOnes_9546GDgridObjects3Objects, eventsFunctionContext.getBehaviorName("TetrisGrid"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("_Count").add(1);
}}

}


};gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("_TempStr").setString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("values") : ""));
}{runtimeScene.getScene().getVariables().get("_Count").setNumber(0);
}}

}


{


const repeatCount2 = gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("_TempStr")));
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {

let isConditionTrue_0 = false;
if (true)
{

{ //Subevents: 
gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};

gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.func = function(runtimeScene, y, lockedBlock, TetrisBlock, grid, TetrisGrid, values, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"lockedBlock": lockedBlock
, "grid": grid
},
  _objectArraysMap: {
"lockedBlock": gdjs.objectsListsToArray(lockedBlock)
, "grid": gdjs.objectsListsToArray(grid)
},
  _behaviorNamesMap: {
"TetrisBlock": TetrisBlock
, "TetrisGrid": TetrisGrid
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("TetrisUtils"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("TetrisUtils"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "y") return y;
if (argName === "values") return values;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.GDlockedBlockObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.GDlockedBlockObjects2.length = 0;
gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.GDlockedBlockObjects3.length = 0;
gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.GDlockedBlockObjects4.length = 0;
gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.GDgridObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.GDgridObjects2.length = 0;
gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.GDgridObjects3.length = 0;
gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.GDgridObjects4.length = 0;

gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.GDlockedBlockObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.GDlockedBlockObjects2.length = 0;
gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.GDlockedBlockObjects3.length = 0;
gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.GDlockedBlockObjects4.length = 0;
gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.GDgridObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.GDgridObjects2.length = 0;
gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.GDgridObjects3.length = 0;
gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.GDgridObjects4.length = 0;


return;
}

gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.registeredGdjsCallbacks = [];