
if (typeof gdjs.evtsExt__TetrisUtils__Piece_GetBlockLocalY !== "undefined") {
  gdjs.evtsExt__TetrisUtils__Piece_GetBlockLocalY.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__TetrisUtils__Piece_GetBlockLocalY = {};


gdjs.evtsExt__TetrisUtils__Piece_GetBlockLocalY.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("_Pieces").getChild(gdjs.evtTools.common.toString((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("type")) || 0 : 0))).getChild("blocks").getChild(gdjs.evtTools.common.toString((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("index")) || 0 : 0))).getChild("y")); }}}

}


};

gdjs.evtsExt__TetrisUtils__Piece_GetBlockLocalY.func = function(runtimeScene, type, index, parentEventsFunctionContext) {
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
if (argName === "type") return type;
if (argName === "index") return index;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__TetrisUtils__Piece_GetBlockLocalY.eventsList0(runtimeScene, eventsFunctionContext);


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__TetrisUtils__Piece_GetBlockLocalY.registeredGdjsCallbacks = [];