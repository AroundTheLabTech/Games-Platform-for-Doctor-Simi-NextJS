
if (typeof gdjs.evtsExt__TetrisUtils__Block_PutLockedOne !== "undefined") {
  gdjs.evtsExt__TetrisUtils__Block_PutLockedOne.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__TetrisUtils__Block_PutLockedOne = {};
gdjs.evtsExt__TetrisUtils__Block_PutLockedOne.GDlockedBlockObjects1= [];
gdjs.evtsExt__TetrisUtils__Block_PutLockedOne.GDlockedBlockObjects2= [];
gdjs.evtsExt__TetrisUtils__Block_PutLockedOne.GDgridObjects1= [];
gdjs.evtsExt__TetrisUtils__Block_PutLockedOne.GDgridObjects2= [];


gdjs.evtsExt__TetrisUtils__Block_PutLockedOne.mapOfGDgdjs_9546evtsExt_9595_9595TetrisUtils_9595_9595Block_9595PutLockedOne_9546GDlockedBlockObjects1Objects = Hashtable.newFrom({"lockedBlock": gdjs.evtsExt__TetrisUtils__Block_PutLockedOne.GDlockedBlockObjects1});
gdjs.evtsExt__TetrisUtils__Block_PutLockedOne.mapOfGDgdjs_9546evtsExt_9595_9595TetrisUtils_9595_9595Block_9595PutLockedOne_9546GDlockedBlockObjects1Objects = Hashtable.newFrom({"lockedBlock": gdjs.evtsExt__TetrisUtils__Block_PutLockedOne.GDlockedBlockObjects1});
gdjs.evtsExt__TetrisUtils__Block_PutLockedOne.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("grid"), gdjs.evtsExt__TetrisUtils__Block_PutLockedOne.GDgridObjects1);
gdjs.evtsExt__TetrisUtils__Block_PutLockedOne.GDlockedBlockObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__TetrisUtils__Block_PutLockedOne.mapOfGDgdjs_9546evtsExt_9595_9595TetrisUtils_9595_9595Block_9595PutLockedOne_9546GDlockedBlockObjects1Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("_GridX")) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("x")) || 0 : 0) * gdjs.evtsExt__TetrisUtils__GetBlockSize.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("_GridY")) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("y")) || 0 : 0) * gdjs.evtsExt__TetrisUtils__GetBlockSize.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), "");
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__Block_PutLockedOne.GDlockedBlockObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__Block_PutLockedOne.GDlockedBlockObjects1[i].setAnimationName(gdjs.evtsExt__TetrisUtils__Piece_GetName.func(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("_Temp")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__Block_PutLockedOne.GDgridObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__Block_PutLockedOne.GDgridObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TetrisGrid")).PlaceAt(gdjs.evtsExt__TetrisUtils__Block_PutLockedOne.mapOfGDgdjs_9546evtsExt_9595_9595TetrisUtils_9595_9595Block_9595PutLockedOne_9546GDlockedBlockObjects1Objects, eventsFunctionContext.getBehaviorName("TetrisBlock"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.evtsExt__TetrisUtils__Block_PutLockedOne.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("_Temp").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("type")) || 0 : 0));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("type")) || 0 : 0) == -(1));
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("_Temp").setNumber(gdjs.randomInRange(0, 6));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("value")) || 0 : 0) == 1);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__TetrisUtils__Block_PutLockedOne.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__TetrisUtils__Block_PutLockedOne.func = function(runtimeScene, x, y, type, value, lockedBlock, TetrisBlock, grid, TetrisGrid, parentEventsFunctionContext) {
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
if (argName === "x") return x;
if (argName === "y") return y;
if (argName === "type") return type;
if (argName === "value") return value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__TetrisUtils__Block_PutLockedOne.GDlockedBlockObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__Block_PutLockedOne.GDlockedBlockObjects2.length = 0;
gdjs.evtsExt__TetrisUtils__Block_PutLockedOne.GDgridObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__Block_PutLockedOne.GDgridObjects2.length = 0;

gdjs.evtsExt__TetrisUtils__Block_PutLockedOne.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TetrisUtils__Block_PutLockedOne.GDlockedBlockObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__Block_PutLockedOne.GDlockedBlockObjects2.length = 0;
gdjs.evtsExt__TetrisUtils__Block_PutLockedOne.GDgridObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__Block_PutLockedOne.GDgridObjects2.length = 0;


return;
}

gdjs.evtsExt__TetrisUtils__Block_PutLockedOne.registeredGdjsCallbacks = [];