
if (typeof gdjs.evtsExt__CommonUtils__ConsoleLog4 !== "undefined") {
  gdjs.evtsExt__CommonUtils__ConsoleLog4.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CommonUtils__ConsoleLog4 = {};


gdjs.evtsExt__CommonUtils__ConsoleLog4.userFunc0x872430 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
var name1 = eventsFunctionContext.getArgument('name1');
var value1 = eventsFunctionContext.getArgument('value1');
var name2 = eventsFunctionContext.getArgument('name2');
var value2 = eventsFunctionContext.getArgument('value2');
var name3 = eventsFunctionContext.getArgument('name3');
var value3 = eventsFunctionContext.getArgument('value3');
var name4 = eventsFunctionContext.getArgument('name4');
var value4 = eventsFunctionContext.getArgument('value4');

console.log(name1 + ": " + value1 + " " + name2 + ": " + value2 + " " + name3 + ": " + value3 + " " + name4 + ": " + value4);
};
gdjs.evtsExt__CommonUtils__ConsoleLog4.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__CommonUtils__ConsoleLog4.userFunc0x872430(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__CommonUtils__ConsoleLog4.func = function(runtimeScene, name1, value1, name2, value2, name3, value3, name4, value4, parentEventsFunctionContext) {
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
if (argName === "name3") return name3;
if (argName === "value3") return value3;
if (argName === "name4") return name4;
if (argName === "value4") return value4;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CommonUtils__ConsoleLog4.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__CommonUtils__ConsoleLog4.registeredGdjsCallbacks = [];