
if (typeof gdjs.evtsExt__SceneUtils__Settings_HandleKeyInputButton !== "undefined") {
  gdjs.evtsExt__SceneUtils__Settings_HandleKeyInputButton.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__SceneUtils__Settings_HandleKeyInputButton = {};
gdjs.evtsExt__SceneUtils__Settings_HandleKeyInputButton.GDbuttonObjects1= [];
gdjs.evtsExt__SceneUtils__Settings_HandleKeyInputButton.GDbuttonObjects2= [];


gdjs.evtsExt__SceneUtils__Settings_HandleKeyInputButton.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("button"), gdjs.evtsExt__SceneUtils__Settings_HandleKeyInputButton.GDbuttonObjects1);
{for(var i = 0, len = gdjs.evtsExt__SceneUtils__Settings_HandleKeyInputButton.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SceneUtils__Settings_HandleKeyInputButton.GDbuttonObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Button")).HandleEvent((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("button"), gdjs.evtsExt__SceneUtils__Settings_HandleKeyInputButton.GDbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SceneUtils__Settings_HandleKeyInputButton.GDbuttonObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SceneUtils__Settings_HandleKeyInputButton.GDbuttonObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Button")).IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SceneUtils__Settings_HandleKeyInputButton.GDbuttonObjects1[k] = gdjs.evtsExt__SceneUtils__Settings_HandleKeyInputButton.GDbuttonObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SceneUtils__Settings_HandleKeyInputButton.GDbuttonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SceneUtils__Settings_HandleKeyInputButton.GDbuttonObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SceneUtils__Settings_HandleKeyInputButton.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SceneUtils__Settings_HandleKeyInputButton.GDbuttonObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Button")).ResetPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{runtimeScene.getScene().getVariables().get("HomeState").setString("settings_key_input_created");
}{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "SettingsKeyInput", 175, 255, 0);
}{runtimeScene.getScene().getVariables().get("SettingsKeyInputKeyNameText").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("Settings").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("keyName") : "")).getChild("name")));
}}

}


};

gdjs.evtsExt__SceneUtils__Settings_HandleKeyInputButton.func = function(runtimeScene, button, Button, keyName, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"button": button
},
  _objectArraysMap: {
"button": gdjs.objectsListsToArray(button)
},
  _behaviorNamesMap: {
"Button": Button
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SceneUtils"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SceneUtils"),
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
if (argName === "keyName") return keyName;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__SceneUtils__Settings_HandleKeyInputButton.GDbuttonObjects1.length = 0;
gdjs.evtsExt__SceneUtils__Settings_HandleKeyInputButton.GDbuttonObjects2.length = 0;

gdjs.evtsExt__SceneUtils__Settings_HandleKeyInputButton.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SceneUtils__Settings_HandleKeyInputButton.GDbuttonObjects1.length = 0;
gdjs.evtsExt__SceneUtils__Settings_HandleKeyInputButton.GDbuttonObjects2.length = 0;


return;
}

gdjs.evtsExt__SceneUtils__Settings_HandleKeyInputButton.registeredGdjsCallbacks = [];