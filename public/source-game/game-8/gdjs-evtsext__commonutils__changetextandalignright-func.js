
if (typeof gdjs.evtsExt__CommonUtils__ChangeTextAndAlignRight !== "undefined") {
  gdjs.evtsExt__CommonUtils__ChangeTextAndAlignRight.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CommonUtils__ChangeTextAndAlignRight = {};
gdjs.evtsExt__CommonUtils__ChangeTextAndAlignRight.GDobjObjects1= [];
gdjs.evtsExt__CommonUtils__ChangeTextAndAlignRight.GDobjObjects2= [];


gdjs.evtsExt__CommonUtils__ChangeTextAndAlignRight.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("obj"), gdjs.evtsExt__CommonUtils__ChangeTextAndAlignRight.GDobjObjects1);
{for(var i = 0, len = gdjs.evtsExt__CommonUtils__ChangeTextAndAlignRight.GDobjObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CommonUtils__ChangeTextAndAlignRight.GDobjObjects1[i].setString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("text") : ""));
}
}{for(var i = 0, len = gdjs.evtsExt__CommonUtils__ChangeTextAndAlignRight.GDobjObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CommonUtils__ChangeTextAndAlignRight.GDobjObjects1[i].setX((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("anchorPos")) || 0 : 0) - (gdjs.evtsExt__CommonUtils__ChangeTextAndAlignRight.GDobjObjects1[i].getWidth()));
}
}}

}


};

gdjs.evtsExt__CommonUtils__ChangeTextAndAlignRight.func = function(runtimeScene, obj, text, anchorPos, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"obj": obj
},
  _objectArraysMap: {
"obj": gdjs.objectsListsToArray(obj)
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
if (argName === "text") return text;
if (argName === "anchorPos") return anchorPos;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__CommonUtils__ChangeTextAndAlignRight.GDobjObjects1.length = 0;
gdjs.evtsExt__CommonUtils__ChangeTextAndAlignRight.GDobjObjects2.length = 0;

gdjs.evtsExt__CommonUtils__ChangeTextAndAlignRight.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__CommonUtils__ChangeTextAndAlignRight.GDobjObjects1.length = 0;
gdjs.evtsExt__CommonUtils__ChangeTextAndAlignRight.GDobjObjects2.length = 0;


return;
}

gdjs.evtsExt__CommonUtils__ChangeTextAndAlignRight.registeredGdjsCallbacks = [];