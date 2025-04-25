
if (typeof gdjs.evtsExt__CommonUtils__ConsoleLog2 !== "undefined") {
  gdjs.evtsExt__CommonUtils__ConsoleLog2.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CommonUtils__ConsoleLog2 = {};


gdjs.evtsExt__CommonUtils__ConsoleLog2.userFunc0x8550f8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
var name1 = eventsFunctionContext.getArgument('name1');
var value1 = eventsFunctionContext.getArgument('value1');
var name2 = eventsFunctionContext.getArgument('name2');
var value2 = eventsFunctionContext.getArgument('value2');

console.log(name1 + ": " + value1 + " " + name2 + ": " + value2);
};
gdjs.evtsExt__CommonUtils__ConsoleLog2.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__CommonUtils__ConsoleLog2.userFunc0x8550f8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__CommonUtils__ConsoleLog2.func = function(runtimeScene, name1, value1, name2, value2, parentEventsFunctionContext) {
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
if (argName === "name1") return name1;
if (argName === "value1") return value1;
if (argName === "name2") return name2;
if (argName === "value2") return value2;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CommonUtils__ConsoleLog2.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__CommonUtils__ConsoleLog2.registeredGdjsCallbacks = [];