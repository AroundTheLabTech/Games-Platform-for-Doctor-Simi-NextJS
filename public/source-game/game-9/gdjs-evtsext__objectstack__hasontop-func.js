
if (typeof gdjs.evtsExt__ObjectStack__HasOnTop !== "undefined") {
  gdjs.evtsExt__ObjectStack__HasOnTop.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ObjectStack__HasOnTop = {};
gdjs.evtsExt__ObjectStack__HasOnTop.GDObjectObjects1= [];
gdjs.evtsExt__ObjectStack__HasOnTop.GDElementObjects1= [];


gdjs.evtsExt__ObjectStack__HasOnTop.userFunc0x956b58 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const stackBehaviorName = eventsFunctionContext.getBehaviorName("Behavior");
/** @type {Hashtable<gdjs.RuntimeObject[]>} */
const stackObjectsLists = eventsFunctionContext.getObjectsLists("Object");
/** @type {Hashtable<gdjs.RuntimeObject[]>} */
const elementObjectsLists = eventsFunctionContext.getObjectsLists("Element");

eventsFunctionContext.returnValue = gdjs.evtTools.object.twoListsTest(
  (stackObject, element) => {
    const behavior = stackObject.getBehavior(stackBehaviorName);
    return behavior.objectStack.hasOnTop(element);
  },
  stackObjectsLists,
  elementObjectsLists,
  false
);
};
gdjs.evtsExt__ObjectStack__HasOnTop.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ObjectStack__HasOnTop.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__ObjectStack__HasOnTop.GDObjectObjects1);
gdjs.evtsExt__ObjectStack__HasOnTop.userFunc0x956b58(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ObjectStack__HasOnTop.func = function(runtimeScene, Object, Behavior, Element, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Element": Element
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
, "Element": gdjs.objectsListsToArray(Element)
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ObjectStack"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ObjectStack"),
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__ObjectStack__HasOnTop.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectStack__HasOnTop.GDElementObjects1.length = 0;

gdjs.evtsExt__ObjectStack__HasOnTop.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ObjectStack__HasOnTop.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectStack__HasOnTop.GDElementObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__ObjectStack__HasOnTop.registeredGdjsCallbacks = [];