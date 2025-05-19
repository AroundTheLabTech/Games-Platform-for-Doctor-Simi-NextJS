
if (typeof gdjs.evtsExt__CommonUtils__ConsoleSceneVariable !== "undefined") {
  gdjs.evtsExt__CommonUtils__ConsoleSceneVariable.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CommonUtils__ConsoleSceneVariable = {};


gdjs.evtsExt__CommonUtils__ConsoleSceneVariable.userFunc0x8711a8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
var tag = eventsFunctionContext.getArgument('tag');
var svName = eventsFunctionContext.getArgument('svName');

let vars = runtimeScene.getVariables();
let sv = vars.get(svName);

console.log(tag, sv);

};
gdjs.evtsExt__CommonUtils__ConsoleSceneVariable.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__CommonUtils__ConsoleSceneVariable.userFunc0x8711a8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__CommonUtils__ConsoleSceneVariable.func = function(runtimeScene, tag, svName, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("CommonUtils"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("CommonUtils"),
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
if (argName === "tag") return tag;
if (argName === "svName") return svName;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CommonUtils__ConsoleSceneVariable.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__CommonUtils__ConsoleSceneVariable.registeredGdjsCallbacks = [];