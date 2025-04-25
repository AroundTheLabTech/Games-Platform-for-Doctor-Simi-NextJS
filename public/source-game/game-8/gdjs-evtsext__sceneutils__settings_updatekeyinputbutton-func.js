
if (typeof gdjs.evtsExt__SceneUtils__Settings_UpdateKeyInputButton !== "undefined") {
  gdjs.evtsExt__SceneUtils__Settings_UpdateKeyInputButton.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__SceneUtils__Settings_UpdateKeyInputButton = {};
gdjs.evtsExt__SceneUtils__Settings_UpdateKeyInputButton.GDSettingsKeyInputTextKeyNameObjects1= [];
gdjs.evtsExt__SceneUtils__Settings_UpdateKeyInputButton.GDSettingsKeyInputTextKeyNameObjects2= [];
gdjs.evtsExt__SceneUtils__Settings_UpdateKeyInputButton.GDSettingsTextKeyButtonObjects1= [];
gdjs.evtsExt__SceneUtils__Settings_UpdateKeyInputButton.GDSettingsTextKeyButtonObjects2= [];


gdjs.evtsExt__SceneUtils__Settings_UpdateKeyInputButton.mapOfGDgdjs_9546evtsExt_9595_9595SceneUtils_9595_9595Settings_9595UpdateKeyInputButton_9546GDSettingsTextKeyButtonObjects1Objects = Hashtable.newFrom({"SettingsTextKeyButton": gdjs.evtsExt__SceneUtils__Settings_UpdateKeyInputButton.GDSettingsTextKeyButtonObjects1});
gdjs.evtsExt__SceneUtils__Settings_UpdateKeyInputButton.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("SettingsKeyInputTextKeyName"), gdjs.evtsExt__SceneUtils__Settings_UpdateKeyInputButton.GDSettingsKeyInputTextKeyNameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SceneUtils__Settings_UpdateKeyInputButton.GDSettingsKeyInputTextKeyNameObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SceneUtils__Settings_UpdateKeyInputButton.GDSettingsKeyInputTextKeyNameObjects1[i].getString() == gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("Settings").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("keyName") : "")).getChild("name")) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SceneUtils__Settings_UpdateKeyInputButton.GDSettingsKeyInputTextKeyNameObjects1[k] = gdjs.evtsExt__SceneUtils__Settings_UpdateKeyInputButton.GDSettingsKeyInputTextKeyNameObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SceneUtils__Settings_UpdateKeyInputButton.GDSettingsKeyInputTextKeyNameObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("SettingsTextKeyButton"), gdjs.evtsExt__SceneUtils__Settings_UpdateKeyInputButton.GDSettingsTextKeyButtonObjects1);
{runtimeScene.getScene().getVariables().get("Settings").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("keyName") : "")).getChild("key").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("SettingKeyInput")));
}{gdjs.evtsExt__CommonUtils__ChangeTextAndAlignCenterHorizontally.func(runtimeScene, gdjs.evtsExt__SceneUtils__Settings_UpdateKeyInputButton.mapOfGDgdjs_9546evtsExt_9595_9595SceneUtils_9595_9595Settings_9595UpdateKeyInputButton_9546GDSettingsTextKeyButtonObjects1Objects, gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("Settings").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("keyName") : "")).getChild("key")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("_VolumeTextBasePos")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};

gdjs.evtsExt__SceneUtils__Settings_UpdateKeyInputButton.func = function(runtimeScene, SettingsKeyInputTextKeyName, SettingsTextKeyButton, keyName, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"SettingsKeyInputTextKeyName": SettingsKeyInputTextKeyName
, "SettingsTextKeyButton": SettingsTextKeyButton
},
  _objectArraysMap: {
"SettingsKeyInputTextKeyName": gdjs.objectsListsToArray(SettingsKeyInputTextKeyName)
, "SettingsTextKeyButton": gdjs.objectsListsToArray(SettingsTextKeyButton)
},
  _behaviorNamesMap: {
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

gdjs.evtsExt__SceneUtils__Settings_UpdateKeyInputButton.GDSettingsKeyInputTextKeyNameObjects1.length = 0;
gdjs.evtsExt__SceneUtils__Settings_UpdateKeyInputButton.GDSettingsKeyInputTextKeyNameObjects2.length = 0;
gdjs.evtsExt__SceneUtils__Settings_UpdateKeyInputButton.GDSettingsTextKeyButtonObjects1.length = 0;
gdjs.evtsExt__SceneUtils__Settings_UpdateKeyInputButton.GDSettingsTextKeyButtonObjects2.length = 0;

gdjs.evtsExt__SceneUtils__Settings_UpdateKeyInputButton.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SceneUtils__Settings_UpdateKeyInputButton.GDSettingsKeyInputTextKeyNameObjects1.length = 0;
gdjs.evtsExt__SceneUtils__Settings_UpdateKeyInputButton.GDSettingsKeyInputTextKeyNameObjects2.length = 0;
gdjs.evtsExt__SceneUtils__Settings_UpdateKeyInputButton.GDSettingsTextKeyButtonObjects1.length = 0;
gdjs.evtsExt__SceneUtils__Settings_UpdateKeyInputButton.GDSettingsTextKeyButtonObjects2.length = 0;


return;
}

gdjs.evtsExt__SceneUtils__Settings_UpdateKeyInputButton.registeredGdjsCallbacks = [];