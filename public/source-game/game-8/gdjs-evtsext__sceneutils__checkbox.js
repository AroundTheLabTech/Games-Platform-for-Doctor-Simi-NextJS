
gdjs.evtsExt__SceneUtils__CheckBox = gdjs.evtsExt__SceneUtils__CheckBox || {};

/**
 * Behavior generated from SceneUtils::CheckBox
 */
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox = class CheckBox extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
  }

  // Properties:
  
}

/**
 * Shared data generated from SceneUtils::CheckBox
 */
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.SharedData = class CheckBoxSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._SceneUtils_CheckBoxSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._SceneUtils_CheckBoxSharedData = new gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.SharedData(
      initialData
    );
  }
  return instanceContainer._SceneUtils_CheckBoxSharedData;
}

// Methods:
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.onCreatedContext = {};
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.onCreatedContext.GDObjectObjects2= [];


gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.onCreatedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("_State")).setString("");
}
}{for(var i = 0, len = gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.onCreatedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("_CheckedState")).setNumber(0);
}
}}

}


};

gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.onCreatedContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.IsPressedContext = {};
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.IsPressedContext.GDObjectObjects1= [];
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.IsPressedContext.GDObjectObjects2= [];


gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.IsPressedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.IsPressedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.IsPressedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.IsPressedContext.GDObjectObjects1[i].getVariableString(gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.IsPressedContext.GDObjectObjects1[i].getVariables().get("_State")) == "pressed" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.IsPressedContext.GDObjectObjects1[k] = gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.IsPressedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.IsPressedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.IsPressed = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.IsPressedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.IsPressedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.IsPressedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.IsPressedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.IsPressedContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.ResetPressedContext = {};
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.ResetPressedContext.GDObjectObjects1= [];
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.ResetPressedContext.GDObjectObjects2= [];


gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.ResetPressedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.ResetPressedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.ResetPressedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.ResetPressedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.ResetPressedContext.GDObjectObjects1[i].getVariables().get("_State")).setString("");
}
}}

}


};

gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.ResetPressed = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.ResetPressedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.ResetPressedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.ResetPressedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.ResetPressedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.ResetPressedContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.GetCheckedContext = {};
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.GetCheckedContext.GDObjectObjects1= [];
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.GetCheckedContext.GDObjectObjects2= [];


gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.GetCheckedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.GetCheckedContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.GetCheckedContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.GetCheckedContext.GDObjectObjects1[0].getVariables()).get("_CheckedState"))); }}}

}


};

gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.GetChecked = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.GetCheckedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.GetCheckedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.GetCheckedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.GetCheckedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.GetCheckedContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext = {};
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.GDObjectObjects1= [];
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.GDObjectObjects2= [];
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.GDcheckObjObjects1= [];
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.GDcheckObjObjects2= [];


gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.GDObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("checkObj"), gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.GDcheckObjObjects1);
{for(var i = 0, len = gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.GDObjectObjects1[i].getVariables().get("_CheckedState")).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.GDcheckObjObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.GDcheckObjObjects1[i].hide(false);
}
}}

}


};gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.GDObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("checkObj"), gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.GDcheckObjObjects1);
{for(var i = 0, len = gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.GDObjectObjects1[i].getVariables().get("_CheckedState")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.GDcheckObjObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.GDcheckObjObjects1[i].hide();
}
}}

}


};gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("check")) || 0 : 0) == 1);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("check")) || 0 : 0) == 0);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetChecked = function(checkObj, check, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "checkObj": checkObj
},
  _objectArraysMap: {
"Object": thisObjectList
, "checkObj": gdjs.objectsListsToArray(checkObj)
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "check") return check;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.GDcheckObjObjects1.length = 0;
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.GDcheckObjObjects2.length = 0;

gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.eventsList2(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.GDcheckObjObjects1.length = 0;
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.GDcheckObjObjects2.length = 0;


return;
}
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext = {};
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects1= [];
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2= [];
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects3= [];
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDcheckObjObjects1= [];
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDcheckObjObjects2= [];
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDcheckObjObjects3= [];


gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.mapOfGDgdjs_9546evtsExt_9595_9595SceneUtils_9595_9595CheckBox_9546CheckBox_9546prototype_9546HandleEventContext_9546GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects1});
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.mapOfGDgdjs_9546evtsExt_9595_9595SceneUtils_9595_9595CheckBox_9546CheckBox_9546prototype_9546HandleEventContext_9546GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects1});
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects1, gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2[i].getVariables().get("_State")).setString("pressed");
}
}{for(var i = 0, len = gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2[i].getVariables().get("_Temp")).setNumber(0);
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects1, gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2[i].getVariables().get("_CheckedState")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2[k] = gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2 */
gdjs.copyArray(eventsFunctionContext.getObjects("checkObj"), gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDcheckObjObjects2);
{for(var i = 0, len = gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2[i].getVariables().get("_CheckedState")).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDcheckObjObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDcheckObjObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2[i].getVariables().get("_Temp")).setNumber(1);
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects1, gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2[i].getVariables().get("_Temp")) == 0 ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2[k] = gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2[i].getVariables().get("_CheckedState")) == 1 ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2[k] = gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2.length = k;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2 */
gdjs.copyArray(eventsFunctionContext.getObjects("checkObj"), gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDcheckObjObjects2);
{for(var i = 0, len = gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2[i].getVariables().get("_CheckedState")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDcheckObjObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDcheckObjObjects2[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects1, gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2[i].setAnimationName("Pressed");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.mapOfGDgdjs_9546evtsExt_9595_9595SceneUtils_9595_9595CheckBox_9546CheckBox_9546prototype_9546HandleEventContext_9546GDObjectObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects1[i].setAnimationName("Normal");
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.mapOfGDgdjs_9546evtsExt_9595_9595SceneUtils_9595_9595CheckBox_9546CheckBox_9546prototype_9546HandleEventContext_9546GDObjectObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects1[i].setAnimationName("Hover");
}
}
{ //Subevents
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEvent = function(checkObj, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "checkObj": checkObj
},
  _objectArraysMap: {
"Object": thisObjectList
, "checkObj": gdjs.objectsListsToArray(checkObj)
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDcheckObjObjects1.length = 0;
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDcheckObjObjects2.length = 0;
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDcheckObjObjects3.length = 0;

gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.eventsList2(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDcheckObjObjects1.length = 0;
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDcheckObjObjects2.length = 0;
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDcheckObjObjects3.length = 0;


return;
}

gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("SceneUtils::CheckBox", gdjs.evtsExt__SceneUtils__CheckBox.CheckBox);
