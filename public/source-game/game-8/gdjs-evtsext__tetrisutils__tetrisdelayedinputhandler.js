
gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler = gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler || {};

/**
 * Behavior generated from TetrisUtils::TetrisKeyHandler
 */
gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler = class TetrisDelayedInputHandler extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.getSharedData(
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
 * Shared data generated from TetrisUtils::TetrisKeyHandler
 */
gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.SharedData = class TetrisDelayedInputHandlerSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._TetrisUtils_TetrisDelayedInputHandlerSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._TetrisUtils_TetrisDelayedInputHandlerSharedData = new gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.SharedData(
      initialData
    );
  }
  return instanceContainer._TetrisUtils_TetrisDelayedInputHandlerSharedData;
}

// Methods:
gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.onCreatedContext = {};
gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.onCreatedContext.GDObjectObjects2= [];


gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.onCreatedContext.GDObjectObjects1[i].resetTimer("InputTimer");
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.onCreatedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("LastInputTime")).setNumber((gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.onCreatedContext.GDObjectObjects1[i].getTimerElapsedTimeInSeconds("InputTimer")));
}
}}

}


};

gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.onCreated = function(parentEventsFunctionContext) {

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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.onCreatedContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.SetInputDelayContext = {};
gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.SetInputDelayContext.GDObjectObjects1= [];
gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.SetInputDelayContext.GDObjectObjects2= [];


gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.SetInputDelayContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.SetInputDelayContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.SetInputDelayContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.SetInputDelayContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.SetInputDelayContext.GDObjectObjects1[i].getVariables().get("InputDelay")).setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("delay")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.SetInputDelay = function(delay, parentEventsFunctionContext) {

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
if (argName === "delay") return delay;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.SetInputDelayContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.SetInputDelayContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.SetInputDelayContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.SetInputDelayContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.SetInputDelayContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.ResetContext = {};
gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.ResetContext.GDObjectObjects1= [];
gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.ResetContext.GDObjectObjects2= [];


gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.ResetContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.ResetContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.ResetContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.ResetContext.GDObjectObjects1[i].resetTimer("InputTimer");
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.ResetContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.ResetContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.ResetContext.GDObjectObjects1[i].getVariables().get("LastInputTime")).setNumber((gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.ResetContext.GDObjectObjects1[i].getTimerElapsedTimeInSeconds("InputTimer")));
}
}}

}


};

gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.Reset = function(parentEventsFunctionContext) {

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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.ResetContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.ResetContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.ResetContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.ResetContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.ResetContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.IsPressedContext = {};
gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.IsPressedContext.GDObjectObjects1= [];
gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.IsPressedContext.GDObjectObjects2= [];


gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.IsPressedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.IsPressedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("keyName") : ""));
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = ((( gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.IsPressedContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.IsPressedContext.GDObjectObjects1[0].getTimerElapsedTimeInSeconds("InputTimer")) - (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.IsPressedContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.IsPressedContext.GDObjectObjects1[0].getVariables()).get("LastInputTime"))) > (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.IsPressedContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.IsPressedContext.GDObjectObjects1[0].getVariables()).get("InputDelay"))));
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.IsPressedContext.GDObjectObjects1 */
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.IsPressedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.IsPressedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.IsPressedContext.GDObjectObjects1[i].getVariables().get("LastInputTime")).setNumber((gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.IsPressedContext.GDObjectObjects1[i].getTimerElapsedTimeInSeconds("InputTimer")));
}
}}

}


};

gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.IsPressed = function(keyName, parentEventsFunctionContext) {

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
if (argName === "keyName") return keyName;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.IsPressedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.IsPressedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.IsPressedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.IsPressedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.IsPressedContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.IsPressed2Context = {};
gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.IsPressed2Context.GDObjectObjects1= [];
gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.IsPressed2Context.GDObjectObjects2= [];


gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.IsPressed2Context.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.IsPressed2Context.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.IsPressed2Context.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.IsPressed2Context.GDObjectObjects1[0].getTimerElapsedTimeInSeconds("InputTimer")) - (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.IsPressed2Context.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.IsPressed2Context.GDObjectObjects1[0].getVariables()).get("LastInputTime"))) > (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.IsPressed2Context.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.IsPressed2Context.GDObjectObjects1[0].getVariables()).get("InputDelay"))));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.IsPressed2Context.GDObjectObjects1 */
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.IsPressed2Context.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.IsPressed2Context.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.IsPressed2Context.GDObjectObjects1[i].getVariables().get("LastInputTime")).setNumber((gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.IsPressed2Context.GDObjectObjects1[i].getTimerElapsedTimeInSeconds("InputTimer")));
}
}}

}


};gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.IsPressed2Context.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("keyName1") : ""));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("keyName2") : ""));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.IsPressed2Context.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.IsPressed2 = function(keyName1, keyName2, parentEventsFunctionContext) {

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
if (argName === "keyName1") return keyName1;
if (argName === "keyName2") return keyName2;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.IsPressed2Context.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.IsPressed2Context.GDObjectObjects2.length = 0;

gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.IsPressed2Context.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.IsPressed2Context.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.IsPressed2Context.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("TetrisUtils::TetrisDelayedInputHandler", gdjs.evtsExt__TetrisUtils__TetrisDelayedInputHandler.TetrisDelayedInputHandler);
