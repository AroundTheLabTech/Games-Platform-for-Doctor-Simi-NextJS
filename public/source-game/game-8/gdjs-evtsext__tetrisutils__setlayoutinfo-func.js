
if (typeof gdjs.evtsExt__TetrisUtils__SetLayoutInfo !== "undefined") {
  gdjs.evtsExt__TetrisUtils__SetLayoutInfo.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__TetrisUtils__SetLayoutInfo = {};


gdjs.evtsExt__TetrisUtils__SetLayoutInfo.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("_GridX").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("gridX")) || 0 : 0));
}{runtimeScene.getScene().getVariables().get("_GridY").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("gridY")) || 0 : 0));
}}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("_NextPieceX").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("nextPieceX")) || 0 : 0));
}{runtimeScene.getScene().getVariables().get("_NextPieceY").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("nextPieceY")) || 0 : 0));
}{runtimeScene.getScene().getVariables().get("_HoldPieceX").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("holdPieceX")) || 0 : 0));
}{runtimeScene.getScene().getVariables().get("_HoldPieceY").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("holdPieceY")) || 0 : 0));
}}

}


};

gdjs.evtsExt__TetrisUtils__SetLayoutInfo.func = function(runtimeScene, nextPieceX, nextPieceY, holdPieceX, holdPieceY, gridX, gridY, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
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
if (argName === "nextPieceX") return nextPieceX;
if (argName === "nextPieceY") return nextPieceY;
if (argName === "holdPieceX") return holdPieceX;
if (argName === "holdPieceY") return holdPieceY;
if (argName === "gridX") return gridX;
if (argName === "gridY") return gridY;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__TetrisUtils__SetLayoutInfo.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__TetrisUtils__SetLayoutInfo.registeredGdjsCallbacks = [];