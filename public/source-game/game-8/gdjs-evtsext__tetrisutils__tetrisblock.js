
gdjs.evtsExt__TetrisUtils__TetrisBlock = gdjs.evtsExt__TetrisUtils__TetrisBlock || {};

/**
 * Behavior generated from TetrisUtils::TetrisBlock
 */
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock = class TetrisBlock extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.getSharedData(
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
 * Shared data generated from TetrisUtils::TetrisBlock
 */
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.SharedData = class TetrisBlockSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._TetrisUtils_TetrisBlockSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._TetrisUtils_TetrisBlockSharedData = new gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.SharedData(
      initialData
    );
  }
  return instanceContainer._TetrisUtils_TetrisBlockSharedData;
}

// Methods:
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.onCreatedContext = {};
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.onCreatedContext.GDObjectObjects2= [];


gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.onCreatedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("_Id")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.onCreatedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("_LocalX")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.onCreatedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("_LocalY")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.onCreatedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("_IsOverlapped")).setNumber(0);
}
}}

}


};

gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.onCreated = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.onCreatedContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.SetupLocalPositionContext = {};
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.SetupLocalPositionContext.GDObjectObjects1= [];
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.SetupLocalPositionContext.GDObjectObjects2= [];


gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.SetupLocalPositionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.SetupLocalPositionContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.SetupLocalPositionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.SetupLocalPositionContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.SetupLocalPositionContext.GDObjectObjects1[i].getVariables().get("_Id")).setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("id")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.SetupLocalPositionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.SetupLocalPositionContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.SetupLocalPositionContext.GDObjectObjects1[i].getVariables().get("_LocalX")).setNumber(gdjs.evtsExt__TetrisUtils__Piece_GetBlockLocalX.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("type")) || 0 : 0), (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.SetupLocalPositionContext.GDObjectObjects1[i].getVariables().get("_Id"))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.SetupLocalPositionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.SetupLocalPositionContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.SetupLocalPositionContext.GDObjectObjects1[i].getVariables().get("_LocalY")).setNumber(gdjs.evtsExt__TetrisUtils__Piece_GetBlockLocalY.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("type")) || 0 : 0), (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.SetupLocalPositionContext.GDObjectObjects1[i].getVariables().get("_Id"))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}}

}


};

gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.SetupLocalPosition = function(type, id, parentEventsFunctionContext) {

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
if (argName === "type") return type;
if (argName === "id") return id;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.SetupLocalPositionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.SetupLocalPositionContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.SetupLocalPositionContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.SetupLocalPositionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.SetupLocalPositionContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.UpdateNextPositionContext = {};
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.UpdateNextPositionContext.GDObjectObjects1= [];
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.UpdateNextPositionContext.GDObjectObjects2= [];


gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.UpdateNextPositionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.UpdateNextPositionContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.UpdateNextPositionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.UpdateNextPositionContext.GDObjectObjects1[i].setX(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("_NextPieceX")) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("_PieceMaxSize")) - gdjs.evtsExt__TetrisUtils__Piece_GetSize.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("type")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) / 2 * gdjs.evtsExt__TetrisUtils__GetBlockSize.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.UpdateNextPositionContext.GDObjectObjects1[i].getVariables().get("_LocalX"))) * gdjs.evtsExt__TetrisUtils__GetBlockSize.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.UpdateNextPositionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.UpdateNextPositionContext.GDObjectObjects1[i].setY(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("_NextPieceY")) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("index")) || 0 : 0) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("_BlockSize")) * 3 + (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.UpdateNextPositionContext.GDObjectObjects1[i].getVariables().get("_LocalY"))) * gdjs.evtsExt__TetrisUtils__GetBlockSize.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + gdjs.evtsExt__TetrisUtils__Piece_GetPreviewOffsetY.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("type")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}}

}


};

gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.UpdateNextPosition = function(type, index, parentEventsFunctionContext) {

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
if (argName === "type") return type;
if (argName === "index") return index;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.UpdateNextPositionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.UpdateNextPositionContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.UpdateNextPositionContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.UpdateNextPositionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.UpdateNextPositionContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.UpdateHoldPositionContext = {};
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.UpdateHoldPositionContext.GDObjectObjects1= [];
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.UpdateHoldPositionContext.GDObjectObjects2= [];


gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.UpdateHoldPositionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.UpdateHoldPositionContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.UpdateHoldPositionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.UpdateHoldPositionContext.GDObjectObjects1[i].setX(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("_HoldPieceX")) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("_PieceMaxSize")) - gdjs.evtsExt__TetrisUtils__Piece_GetSize.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("type")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) / 2 * gdjs.evtsExt__TetrisUtils__GetBlockSize.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.UpdateHoldPositionContext.GDObjectObjects1[i].getVariables().get("_LocalX"))) * gdjs.evtsExt__TetrisUtils__GetBlockSize.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.UpdateHoldPositionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.UpdateHoldPositionContext.GDObjectObjects1[i].setY(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("_HoldPieceY")) + (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.UpdateHoldPositionContext.GDObjectObjects1[i].getVariables().get("_LocalY"))) * gdjs.evtsExt__TetrisUtils__GetBlockSize.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + gdjs.evtsExt__TetrisUtils__Piece_GetPreviewOffsetY.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("type")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}}

}


};

gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.UpdateHoldPosition = function(type, parentEventsFunctionContext) {

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
if (argName === "type") return type;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.UpdateHoldPositionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.UpdateHoldPositionContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.UpdateHoldPositionContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.UpdateHoldPositionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.UpdateHoldPositionContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.UpdatePositionContext = {};
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.UpdatePositionContext.GDObjectObjects1= [];
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.UpdatePositionContext.GDObjectObjects2= [];
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.UpdatePositionContext.GDpieceObjects1= [];
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.UpdatePositionContext.GDpieceObjects2= [];


gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.UpdatePositionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.UpdatePositionContext.GDObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("piece"), gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.UpdatePositionContext.GDpieceObjects1);
{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.UpdatePositionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.UpdatePositionContext.GDObjectObjects1[i].setX(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("_GridX")) + (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.UpdatePositionContext.GDpieceObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.UpdatePositionContext.GDpieceObjects1[0].getVariables()).get("_GridX"))) * gdjs.evtsExt__TetrisUtils__GetBlockSize.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.UpdatePositionContext.GDObjectObjects1[i].getVariables().get("_LocalX"))) * gdjs.evtsExt__TetrisUtils__GetBlockSize.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.UpdatePositionContext.GDObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("piece"), gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.UpdatePositionContext.GDpieceObjects1);
{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.UpdatePositionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.UpdatePositionContext.GDObjectObjects1[i].setY(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("_GridY")) + (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.UpdatePositionContext.GDpieceObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.UpdatePositionContext.GDpieceObjects1[0].getVariables()).get("_GridY"))) * gdjs.evtsExt__TetrisUtils__GetBlockSize.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.UpdatePositionContext.GDObjectObjects1[i].getVariables().get("_LocalY"))) * gdjs.evtsExt__TetrisUtils__GetBlockSize.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}}

}


};

gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.UpdatePosition = function(piece, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "piece": piece
},
  _objectArraysMap: {
"Object": thisObjectList
, "piece": gdjs.objectsListsToArray(piece)
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

gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.UpdatePositionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.UpdatePositionContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.UpdatePositionContext.GDpieceObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.UpdatePositionContext.GDpieceObjects2.length = 0;

gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.UpdatePositionContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.UpdatePositionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.UpdatePositionContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.UpdatePositionContext.GDpieceObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.UpdatePositionContext.GDpieceObjects2.length = 0;


return;
}
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.SetPositionContext = {};
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.SetPositionContext.GDObjectObjects1= [];
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.SetPositionContext.GDObjectObjects2= [];


gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.SetPositionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.SetPositionContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.SetPositionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.SetPositionContext.GDObjectObjects1[i].setX(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("_GridX")) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("gridX")) || 0 : 0) * gdjs.evtsExt__TetrisUtils__GetBlockSize.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.SetPositionContext.GDObjectObjects1[i].getVariables().get("_LocalX"))) * gdjs.evtsExt__TetrisUtils__GetBlockSize.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.SetPositionContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.SetPositionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.SetPositionContext.GDObjectObjects1[i].setY(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("_GridY")) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("gridY")) || 0 : 0) * gdjs.evtsExt__TetrisUtils__GetBlockSize.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.SetPositionContext.GDObjectObjects1[i].getVariables().get("_LocalY"))) * gdjs.evtsExt__TetrisUtils__GetBlockSize.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}}

}


};

gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.SetPosition = function(gridX, gridY, parentEventsFunctionContext) {

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
if (argName === "gridX") return gridX;
if (argName === "gridY") return gridY;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.SetPositionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.SetPositionContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.SetPositionContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.SetPositionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.SetPositionContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsOverlappingContext = {};
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsOverlappingContext.GDObjectObjects1= [];
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsOverlappingContext.GDObjectObjects2= [];
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsOverlappingContext.GDgridObjects1= [];
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsOverlappingContext.GDgridObjects2= [];


gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsOverlappingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsOverlappingContext.GDObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("grid"), gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsOverlappingContext.GDgridObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsOverlappingContext.GDgridObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsOverlappingContext.GDgridObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TetrisGrid")).IsPlaceableAt((( gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsOverlappingContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsOverlappingContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ConvertToGridX((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (( gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsOverlappingContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsOverlappingContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ConvertToGridY((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsOverlappingContext.GDgridObjects1[k] = gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsOverlappingContext.GDgridObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsOverlappingContext.GDgridObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


};

gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsOverlapping = function(grid, TetrisGrid, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "grid": grid
},
  _objectArraysMap: {
"Object": thisObjectList
, "grid": gdjs.objectsListsToArray(grid)
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "TetrisGrid": TetrisGrid
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

gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsOverlappingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsOverlappingContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsOverlappingContext.GDgridObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsOverlappingContext.GDgridObjects2.length = 0;

gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsOverlappingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsOverlappingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsOverlappingContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsOverlappingContext.GDgridObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsOverlappingContext.GDgridObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableLeftContext = {};
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableLeftContext.GDObjectObjects1= [];
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableLeftContext.GDObjectObjects2= [];
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableLeftContext.GDgridObjects1= [];
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableLeftContext.GDgridObjects2= [];


gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableLeftContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableLeftContext.GDObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("grid"), gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableLeftContext.GDgridObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableLeftContext.GDgridObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableLeftContext.GDgridObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TetrisGrid")).IsPlaceableAt((( gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableLeftContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableLeftContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ConvertToGridX((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) - 1, (( gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableLeftContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableLeftContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ConvertToGridY((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableLeftContext.GDgridObjects1[k] = gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableLeftContext.GDgridObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableLeftContext.GDgridObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableLeft = function(grid, TetrisGrid, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "grid": grid
},
  _objectArraysMap: {
"Object": thisObjectList
, "grid": gdjs.objectsListsToArray(grid)
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "TetrisGrid": TetrisGrid
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

gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableLeftContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableLeftContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableLeftContext.GDgridObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableLeftContext.GDgridObjects2.length = 0;

gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableLeftContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableLeftContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableLeftContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableLeftContext.GDgridObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableLeftContext.GDgridObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableRightContext = {};
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableRightContext.GDObjectObjects1= [];
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableRightContext.GDObjectObjects2= [];
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableRightContext.GDgridObjects1= [];
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableRightContext.GDgridObjects2= [];


gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableRightContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableRightContext.GDObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("grid"), gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableRightContext.GDgridObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableRightContext.GDgridObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableRightContext.GDgridObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TetrisGrid")).IsPlaceableAt((( gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableRightContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableRightContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ConvertToGridX((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) + 1, (( gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableRightContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableRightContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ConvertToGridY((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableRightContext.GDgridObjects1[k] = gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableRightContext.GDgridObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableRightContext.GDgridObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableRight = function(grid, TetrisGrid, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "grid": grid
},
  _objectArraysMap: {
"Object": thisObjectList
, "grid": gdjs.objectsListsToArray(grid)
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "TetrisGrid": TetrisGrid
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

gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableRightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableRightContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableRightContext.GDgridObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableRightContext.GDgridObjects2.length = 0;

gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableRightContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableRightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableRightContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableRightContext.GDgridObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableRightContext.GDgridObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableDownContext = {};
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableDownContext.GDObjectObjects1= [];
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableDownContext.GDObjectObjects2= [];
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableDownContext.GDgridObjects1= [];
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableDownContext.GDgridObjects2= [];


gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableDownContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableDownContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableDownContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableDownContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableDownContext.GDObjectObjects1[i].getVariables().get("_Temp")).setNumber(0);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableDownContext.GDObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("grid"), gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableDownContext.GDgridObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableDownContext.GDgridObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableDownContext.GDgridObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TetrisGrid")).IsPlaceableAt((( gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableDownContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableDownContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ConvertToGridX((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (( gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableDownContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableDownContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ConvertToGridY((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) + 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableDownContext.GDgridObjects1[k] = gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableDownContext.GDgridObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableDownContext.GDgridObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableDownContext.GDObjectObjects1 */
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableDownContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableDownContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableDownContext.GDObjectObjects1[i].getVariables().get("_Temp")).setNumber(1);
}
}}

}


};

gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableDown = function(grid, TetrisGrid, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "grid": grid
},
  _objectArraysMap: {
"Object": thisObjectList
, "grid": gdjs.objectsListsToArray(grid)
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "TetrisGrid": TetrisGrid
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

gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableDownContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableDownContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableDownContext.GDgridObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableDownContext.GDgridObjects2.length = 0;

gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableDownContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableDownContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableDownContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableDownContext.GDgridObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableDownContext.GDgridObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableDownByContext = {};
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableDownByContext.GDObjectObjects1= [];
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableDownByContext.GDObjectObjects2= [];
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableDownByContext.GDgridObjects1= [];
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableDownByContext.GDgridObjects2= [];


gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableDownByContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableDownByContext.GDObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("grid"), gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableDownByContext.GDgridObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableDownByContext.GDgridObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableDownByContext.GDgridObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TetrisGrid")).IsPlaceableAt((( gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableDownByContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableDownByContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ConvertToGridX((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (( gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableDownByContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableDownByContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ConvertToGridY((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("yOffset")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableDownByContext.GDgridObjects1[k] = gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableDownByContext.GDgridObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableDownByContext.GDgridObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableDownBy = function(yOffset, grid, TetrisGrid, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "grid": grid
},
  _objectArraysMap: {
"Object": thisObjectList
, "grid": gdjs.objectsListsToArray(grid)
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "TetrisGrid": TetrisGrid
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
if (argName === "yOffset") return yOffset;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableDownByContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableDownByContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableDownByContext.GDgridObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableDownByContext.GDgridObjects2.length = 0;

gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableDownByContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableDownByContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableDownByContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableDownByContext.GDgridObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsMoveableDownByContext.GDgridObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsRotatableContext = {};
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsRotatableContext.GDObjectObjects1= [];
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsRotatableContext.GDObjectObjects2= [];
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsRotatableContext.GDpieceObjects1= [];
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsRotatableContext.GDpieceObjects2= [];
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsRotatableContext.GDgridObjects1= [];
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsRotatableContext.GDgridObjects2= [];


gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsRotatableContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsRotatableContext.GDObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("grid"), gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsRotatableContext.GDgridObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("piece"), gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsRotatableContext.GDpieceObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsRotatableContext.GDgridObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsRotatableContext.GDgridObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TetrisGrid")).IsPlaceableAt((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsRotatableContext.GDpieceObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsRotatableContext.GDpieceObjects1[0].getVariables()).get("_GridX"))) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("offsetX")) || 0 : 0) + 1 - ((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsRotatableContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsRotatableContext.GDObjectObjects1[0].getVariables()).get("_LocalY"))) - ((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsRotatableContext.GDpieceObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsRotatableContext.GDpieceObjects1[0].getVariables()).get("_Size"))) - 2)), (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsRotatableContext.GDpieceObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsRotatableContext.GDpieceObjects1[0].getVariables()).get("_GridY"))) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("offsetY")) || 0 : 0) + (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsRotatableContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsRotatableContext.GDObjectObjects1[0].getVariables()).get("_LocalX"))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsRotatableContext.GDgridObjects1[k] = gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsRotatableContext.GDgridObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsRotatableContext.GDgridObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsRotatableContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsRotatableContext.GDObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("grid"), gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsRotatableContext.GDgridObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("piece"), gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsRotatableContext.GDpieceObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsRotatableContext.GDgridObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsRotatableContext.GDgridObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TetrisGrid")).IsPlaceableAt((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsRotatableContext.GDpieceObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsRotatableContext.GDpieceObjects1[0].getVariables()).get("_GridX"))) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("offsetX")) || 0 : 0) + (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsRotatableContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsRotatableContext.GDObjectObjects1[0].getVariables()).get("_LocalY"))), (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsRotatableContext.GDpieceObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsRotatableContext.GDpieceObjects1[0].getVariables()).get("_GridY"))) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("offsetY")) || 0 : 0) + 1 - ((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsRotatableContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsRotatableContext.GDObjectObjects1[0].getVariables()).get("_LocalX"))) - ((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsRotatableContext.GDpieceObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsRotatableContext.GDpieceObjects1[0].getVariables()).get("_Size"))) - 2)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsRotatableContext.GDgridObjects1[k] = gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsRotatableContext.GDgridObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsRotatableContext.GDgridObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsRotatableContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

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
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("direction")) || 0 : 0) == 1);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsRotatableContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("direction")) || 0 : 0) == -(1));
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsRotatableContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsRotatable = function(piece, grid, TetrisGrid, offsetX, offsetY, direction, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "piece": piece
, "grid": grid
},
  _objectArraysMap: {
"Object": thisObjectList
, "piece": gdjs.objectsListsToArray(piece)
, "grid": gdjs.objectsListsToArray(grid)
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "TetrisGrid": TetrisGrid
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
if (argName === "offsetX") return offsetX;
if (argName === "offsetY") return offsetY;
if (argName === "direction") return direction;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsRotatableContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsRotatableContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsRotatableContext.GDpieceObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsRotatableContext.GDpieceObjects2.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsRotatableContext.GDgridObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsRotatableContext.GDgridObjects2.length = 0;

gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsRotatableContext.eventsList2(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsRotatableContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsRotatableContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsRotatableContext.GDpieceObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsRotatableContext.GDpieceObjects2.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsRotatableContext.GDgridObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.IsRotatableContext.GDgridObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.RotateLocalPositionContext = {};
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.RotateLocalPositionContext.GDObjectObjects1= [];
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.RotateLocalPositionContext.GDObjectObjects2= [];
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.RotateLocalPositionContext.GDpieceObjects1= [];
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.RotateLocalPositionContext.GDpieceObjects2= [];


gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.RotateLocalPositionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.RotateLocalPositionContext.GDObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("piece"), gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.RotateLocalPositionContext.GDpieceObjects1);
{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.RotateLocalPositionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.RotateLocalPositionContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.RotateLocalPositionContext.GDObjectObjects1[i].getVariables().get("_Temp")).setNumber((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.RotateLocalPositionContext.GDObjectObjects1[i].getVariables().get("_LocalX"))));
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.RotateLocalPositionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.RotateLocalPositionContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.RotateLocalPositionContext.GDObjectObjects1[i].getVariables().get("_LocalX")).setNumber(1 - ((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.RotateLocalPositionContext.GDObjectObjects1[i].getVariables().get("_LocalY"))) - ((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.RotateLocalPositionContext.GDpieceObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.RotateLocalPositionContext.GDpieceObjects1[0].getVariables()).get("_Size"))) - 2)));
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.RotateLocalPositionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.RotateLocalPositionContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.RotateLocalPositionContext.GDObjectObjects1[i].getVariables().get("_LocalY")).setNumber((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.RotateLocalPositionContext.GDObjectObjects1[i].getVariables().get("_Temp"))));
}
}}

}


};gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.RotateLocalPositionContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.RotateLocalPositionContext.GDObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("piece"), gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.RotateLocalPositionContext.GDpieceObjects1);
{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.RotateLocalPositionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.RotateLocalPositionContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.RotateLocalPositionContext.GDObjectObjects1[i].getVariables().get("_Temp")).setNumber((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.RotateLocalPositionContext.GDObjectObjects1[i].getVariables().get("_LocalX"))));
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.RotateLocalPositionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.RotateLocalPositionContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.RotateLocalPositionContext.GDObjectObjects1[i].getVariables().get("_LocalX")).setNumber((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.RotateLocalPositionContext.GDObjectObjects1[i].getVariables().get("_LocalY"))));
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.RotateLocalPositionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.RotateLocalPositionContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.RotateLocalPositionContext.GDObjectObjects1[i].getVariables().get("_LocalY")).setNumber(1 - ((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.RotateLocalPositionContext.GDObjectObjects1[i].getVariables().get("_Temp"))) - ((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.RotateLocalPositionContext.GDpieceObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.RotateLocalPositionContext.GDpieceObjects1[0].getVariables()).get("_Size"))) - 2)));
}
}}

}


};gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.RotateLocalPositionContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("direction")) || 0 : 0) == 1);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.RotateLocalPositionContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("direction")) || 0 : 0) == -(1));
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.RotateLocalPositionContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("piece"), gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.RotateLocalPositionContext.GDpieceObjects1);
{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.RotateLocalPositionContext.GDpieceObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.RotateLocalPositionContext.GDpieceObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TetrisPiece")).SetMovedOrRotated((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.RotateLocalPosition = function(piece, TetrisPiece, direction, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "piece": piece
},
  _objectArraysMap: {
"Object": thisObjectList
, "piece": gdjs.objectsListsToArray(piece)
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "TetrisPiece": TetrisPiece
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
if (argName === "direction") return direction;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.RotateLocalPositionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.RotateLocalPositionContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.RotateLocalPositionContext.GDpieceObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.RotateLocalPositionContext.GDpieceObjects2.length = 0;

gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.RotateLocalPositionContext.eventsList2(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.RotateLocalPositionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.RotateLocalPositionContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.RotateLocalPositionContext.GDpieceObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.RotateLocalPositionContext.GDpieceObjects2.length = 0;


return;
}
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.MoveLeftContext = {};
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.MoveLeftContext.GDObjectObjects1= [];
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.MoveLeftContext.GDObjectObjects2= [];


gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.MoveLeftContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.MoveLeftContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.MoveLeftContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.MoveLeftContext.GDObjectObjects1[i].setX(gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.MoveLeftContext.GDObjectObjects1[i].getX() - (gdjs.evtsExt__TetrisUtils__GetBlockSize.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}}

}


};

gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.MoveLeft = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.MoveLeftContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.MoveLeftContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.MoveLeftContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.MoveLeftContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.MoveLeftContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.MoveRightContext = {};
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.MoveRightContext.GDObjectObjects1= [];
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.MoveRightContext.GDObjectObjects2= [];


gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.MoveRightContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.MoveRightContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.MoveRightContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.MoveRightContext.GDObjectObjects1[i].setX(gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.MoveRightContext.GDObjectObjects1[i].getX() + (gdjs.evtsExt__TetrisUtils__GetBlockSize.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}}

}


};

gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.MoveRight = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.MoveRightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.MoveRightContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.MoveRightContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.MoveRightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.MoveRightContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.ConvertToGridXContext = {};
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.ConvertToGridXContext.GDObjectObjects1= [];
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.ConvertToGridXContext.GDObjectObjects2= [];


gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.ConvertToGridXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.ConvertToGridXContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = ((( gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.ConvertToGridXContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.ConvertToGridXContext.GDObjectObjects1[0].getX()) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("_GridX"))) / gdjs.evtsExt__TetrisUtils__GetBlockSize.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)); }}}

}


};

gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.ConvertToGridX = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.ConvertToGridXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.ConvertToGridXContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.ConvertToGridXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.ConvertToGridXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.ConvertToGridXContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.ConvertToGridYContext = {};
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.ConvertToGridYContext.GDObjectObjects1= [];
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.ConvertToGridYContext.GDObjectObjects2= [];


gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.ConvertToGridYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.ConvertToGridYContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = ((( gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.ConvertToGridYContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.ConvertToGridYContext.GDObjectObjects1[0].getY()) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("_GridY"))) / gdjs.evtsExt__TetrisUtils__GetBlockSize.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)); }}}

}


};

gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.ConvertToGridY = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.ConvertToGridYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.ConvertToGridYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.ConvertToGridYContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.ConvertToGridYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.ConvertToGridYContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.FallToFloorContext = {};
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.FallToFloorContext.GDObjectObjects1= [];
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.FallToFloorContext.GDObjectObjects2= [];


gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.FallToFloorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.FallToFloorContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.FallToFloorContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.FallToFloorContext.GDObjectObjects1[i].addForce(0, gdjs.evtsExt__TetrisUtils__GetBlockSize.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("distance")) || 0 : 0) / (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0), 1);
}
}}

}


};

gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.FallToFloor = function(distance, speed, parentEventsFunctionContext) {

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
if (argName === "distance") return distance;
if (argName === "speed") return speed;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.FallToFloorContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.FallToFloorContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.FallToFloorContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.FallToFloorContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.FallToFloorContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.AdjustGapAfterFallingContext = {};
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.AdjustGapAfterFallingContext.GDObjectObjects1= [];
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.AdjustGapAfterFallingContext.GDObjectObjects2= [];


gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.AdjustGapAfterFallingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.AdjustGapAfterFallingContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.AdjustGapAfterFallingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.AdjustGapAfterFallingContext.GDObjectObjects1[i].setY(((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("gridY")) || 0 : 0) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("distance")) || 0 : 0)) * gdjs.evtsExt__TetrisUtils__GetBlockSize.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}}

}


};

gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.AdjustGapAfterFalling = function(gridY, distance, parentEventsFunctionContext) {

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
if (argName === "gridY") return gridY;
if (argName === "distance") return distance;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.AdjustGapAfterFallingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.AdjustGapAfterFallingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.AdjustGapAfterFallingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.AdjustGapAfterFallingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.AdjustGapAfterFallingContext.GDObjectObjects2.length = 0;


return;
}

gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("TetrisUtils::TetrisBlock", gdjs.evtsExt__TetrisUtils__TetrisBlock.TetrisBlock);
