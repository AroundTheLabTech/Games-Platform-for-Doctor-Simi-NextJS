
if (typeof gdjs.evtsExt__SceneUtils__Settings_HandleVolumeButton !== "undefined") {
  gdjs.evtsExt__SceneUtils__Settings_HandleVolumeButton.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__SceneUtils__Settings_HandleVolumeButton = {};
gdjs.evtsExt__SceneUtils__Settings_HandleVolumeButton.GDminusButtonObjects1= [];
gdjs.evtsExt__SceneUtils__Settings_HandleVolumeButton.GDminusButtonObjects2= [];
gdjs.evtsExt__SceneUtils__Settings_HandleVolumeButton.GDminusButtonObjects3= [];
gdjs.evtsExt__SceneUtils__Settings_HandleVolumeButton.GDplusButtonObjects1= [];
gdjs.evtsExt__SceneUtils__Settings_HandleVolumeButton.GDplusButtonObjects2= [];
gdjs.evtsExt__SceneUtils__Settings_HandleVolumeButton.GDplusButtonObjects3= [];
gdjs.evtsExt__SceneUtils__Settings_HandleVolumeButton.GDpercentTextObjects1= [];
gdjs.evtsExt__SceneUtils__Settings_HandleVolumeButton.GDpercentTextObjects2= [];
gdjs.evtsExt__SceneUtils__Settings_HandleVolumeButton.GDpercentTextObjects3= [];


gdjs.evtsExt__SceneUtils__Settings_HandleVolumeButton.mapOfGDgdjs_9546evtsExt_9595_9595SceneUtils_9595_9595Settings_9595HandleVolumeButton_9546GDpercentTextObjects2Objects = Hashtable.newFrom({"percentText": gdjs.evtsExt__SceneUtils__Settings_HandleVolumeButton.GDpercentTextObjects2});
gdjs.evtsExt__SceneUtils__Settings_HandleVolumeButton.mapOfGDgdjs_9546evtsExt_9595_9595SceneUtils_9595_9595Settings_9595HandleVolumeButton_9546GDpercentTextObjects1Objects = Hashtable.newFrom({"percentText": gdjs.evtsExt__SceneUtils__Settings_HandleVolumeButton.GDpercentTextObjects1});
gdjs.evtsExt__SceneUtils__Settings_HandleVolumeButton.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("minusButton"), gdjs.evtsExt__SceneUtils__Settings_HandleVolumeButton.GDminusButtonObjects2);
{for(var i = 0, len = gdjs.evtsExt__SceneUtils__Settings_HandleVolumeButton.GDminusButtonObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SceneUtils__Settings_HandleVolumeButton.GDminusButtonObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Button")).HandleEvent((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("minusButton"), gdjs.evtsExt__SceneUtils__Settings_HandleVolumeButton.GDminusButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SceneUtils__Settings_HandleVolumeButton.GDminusButtonObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__SceneUtils__Settings_HandleVolumeButton.GDminusButtonObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Button")).IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SceneUtils__Settings_HandleVolumeButton.GDminusButtonObjects2[k] = gdjs.evtsExt__SceneUtils__Settings_HandleVolumeButton.GDminusButtonObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__SceneUtils__Settings_HandleVolumeButton.GDminusButtonObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SceneUtils__Settings_HandleVolumeButton.GDminusButtonObjects2 */
gdjs.copyArray(eventsFunctionContext.getObjects("percentText"), gdjs.evtsExt__SceneUtils__Settings_HandleVolumeButton.GDpercentTextObjects2);
{for(var i = 0, len = gdjs.evtsExt__SceneUtils__Settings_HandleVolumeButton.GDminusButtonObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SceneUtils__Settings_HandleVolumeButton.GDminusButtonObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Button")).ResetPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{runtimeScene.getScene().getVariables().get("Settings").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("varName") : "")).setNumber(Math.max(0, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Settings").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("varName") : ""))) - 10));
}{gdjs.evtsExt__CommonUtils__ChangeTextAndAlignCenterHorizontally.func(runtimeScene, gdjs.evtsExt__SceneUtils__Settings_HandleVolumeButton.mapOfGDgdjs_9546evtsExt_9595_9595SceneUtils_9595_9595Settings_9595HandleVolumeButton_9546GDpercentTextObjects2Objects, gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("Settings").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("varName") : ""))) + "%", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("_VolumeTextBasePos")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("plusButton"), gdjs.evtsExt__SceneUtils__Settings_HandleVolumeButton.GDplusButtonObjects2);
{for(var i = 0, len = gdjs.evtsExt__SceneUtils__Settings_HandleVolumeButton.GDplusButtonObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SceneUtils__Settings_HandleVolumeButton.GDplusButtonObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Button")).HandleEvent((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("plusButton"), gdjs.evtsExt__SceneUtils__Settings_HandleVolumeButton.GDplusButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SceneUtils__Settings_HandleVolumeButton.GDplusButtonObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SceneUtils__Settings_HandleVolumeButton.GDplusButtonObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Button")).IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SceneUtils__Settings_HandleVolumeButton.GDplusButtonObjects1[k] = gdjs.evtsExt__SceneUtils__Settings_HandleVolumeButton.GDplusButtonObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SceneUtils__Settings_HandleVolumeButton.GDplusButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("percentText"), gdjs.evtsExt__SceneUtils__Settings_HandleVolumeButton.GDpercentTextObjects1);
/* Reuse gdjs.evtsExt__SceneUtils__Settings_HandleVolumeButton.GDplusButtonObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SceneUtils__Settings_HandleVolumeButton.GDplusButtonObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SceneUtils__Settings_HandleVolumeButton.GDplusButtonObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Button")).ResetPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{runtimeScene.getScene().getVariables().get("Settings").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("varName") : "")).setNumber(Math.min(100, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Settings").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("varName") : ""))) + 10));
}{gdjs.evtsExt__CommonUtils__ChangeTextAndAlignCenterHorizontally.func(runtimeScene, gdjs.evtsExt__SceneUtils__Settings_HandleVolumeButton.mapOfGDgdjs_9546evtsExt_9595_9595SceneUtils_9595_9595Settings_9595HandleVolumeButton_9546GDpercentTextObjects1Objects, gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("Settings").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("varName") : ""))) + "%", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("_VolumeTextBasePos")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.evtsExt__SceneUtils__Settings_HandleVolumeButton.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__SceneUtils__Settings_HandleVolumeButton.eventsList0(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__SceneUtils__Settings_HandleVolumeButton.func = function(runtimeScene, minusButton, Button, plusButton, Button, percentText, varName, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"minusButton": minusButton
, "plusButton": plusButton
, "percentText": percentText
},
  _objectArraysMap: {
"minusButton": gdjs.objectsListsToArray(minusButton)
, "plusButton": gdjs.objectsListsToArray(plusButton)
, "percentText": gdjs.objectsListsToArray(percentText)
},
  _behaviorNamesMap: {
"Button": Button
, "Button": Button
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
if (argName === "varName") return varName;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__SceneUtils__Settings_HandleVolumeButton.GDminusButtonObjects1.length = 0;
gdjs.evtsExt__SceneUtils__Settings_HandleVolumeButton.GDminusButtonObjects2.length = 0;
gdjs.evtsExt__SceneUtils__Settings_HandleVolumeButton.GDminusButtonObjects3.length = 0;
gdjs.evtsExt__SceneUtils__Settings_HandleVolumeButton.GDplusButtonObjects1.length = 0;
gdjs.evtsExt__SceneUtils__Settings_HandleVolumeButton.GDplusButtonObjects2.length = 0;
gdjs.evtsExt__SceneUtils__Settings_HandleVolumeButton.GDplusButtonObjects3.length = 0;
gdjs.evtsExt__SceneUtils__Settings_HandleVolumeButton.GDpercentTextObjects1.length = 0;
gdjs.evtsExt__SceneUtils__Settings_HandleVolumeButton.GDpercentTextObjects2.length = 0;
gdjs.evtsExt__SceneUtils__Settings_HandleVolumeButton.GDpercentTextObjects3.length = 0;

gdjs.evtsExt__SceneUtils__Settings_HandleVolumeButton.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SceneUtils__Settings_HandleVolumeButton.GDminusButtonObjects1.length = 0;
gdjs.evtsExt__SceneUtils__Settings_HandleVolumeButton.GDminusButtonObjects2.length = 0;
gdjs.evtsExt__SceneUtils__Settings_HandleVolumeButton.GDminusButtonObjects3.length = 0;
gdjs.evtsExt__SceneUtils__Settings_HandleVolumeButton.GDplusButtonObjects1.length = 0;
gdjs.evtsExt__SceneUtils__Settings_HandleVolumeButton.GDplusButtonObjects2.length = 0;
gdjs.evtsExt__SceneUtils__Settings_HandleVolumeButton.GDplusButtonObjects3.length = 0;
gdjs.evtsExt__SceneUtils__Settings_HandleVolumeButton.GDpercentTextObjects1.length = 0;
gdjs.evtsExt__SceneUtils__Settings_HandleVolumeButton.GDpercentTextObjects2.length = 0;
gdjs.evtsExt__SceneUtils__Settings_HandleVolumeButton.GDpercentTextObjects3.length = 0;


return;
}

gdjs.evtsExt__SceneUtils__Settings_HandleVolumeButton.registeredGdjsCallbacks = [];