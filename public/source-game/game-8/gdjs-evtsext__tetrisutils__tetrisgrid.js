
gdjs.evtsExt__TetrisUtils__TetrisGrid = gdjs.evtsExt__TetrisUtils__TetrisGrid || {};

/**
 * Behavior generated from TetrisUtils::TetrisGrid
 */
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid = class TetrisGrid extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.getSharedData(
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
 * Shared data generated from TetrisUtils::TetrisGrid
 */
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.SharedData = class TetrisGridSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._TetrisUtils_TetrisGridSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._TetrisUtils_TetrisGridSharedData = new gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.SharedData(
      initialData
    );
  }
  return instanceContainer._TetrisUtils_TetrisGridSharedData;
}

// Methods:
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.onCreatedContext = {};
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.onCreatedContext.GDObjectObjects2= [];


gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.onCreatedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("_Grid").getChild("0").getChild("0")).setNumber(0);
}
}}

}


};

gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.onCreated = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.onCreatedContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.RemoveAtContext = {};
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.RemoveAtContext.GDObjectObjects1= [];
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.RemoveAtContext.GDObjectObjects2= [];
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.RemoveAtContext.GDblockObjects1= [];
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.RemoveAtContext.GDblockObjects2= [];


gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.RemoveAtContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.RemoveAtContext.GDObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("block"), gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.RemoveAtContext.GDblockObjects1);
{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.RemoveAtContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.RemoveAtContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.RemoveAtContext.GDObjectObjects1[i].getVariables().get("_Grid").getChild(gdjs.evtTools.common.toString((( gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.RemoveAtContext.GDblockObjects1.length === 0 ) ? 0 :gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.RemoveAtContext.GDblockObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("TetrisBlock")).ConvertToGridY((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))))).getChild(gdjs.evtTools.common.toString((( gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.RemoveAtContext.GDblockObjects1.length === 0 ) ? 0 :gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.RemoveAtContext.GDblockObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("TetrisBlock")).ConvertToGridX((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))))).setNumber(0);
}
}}

}


};

gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.RemoveAt = function(block, TetrisBlock, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "block": block
},
  _objectArraysMap: {
"Object": thisObjectList
, "block": gdjs.objectsListsToArray(block)
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "TetrisBlock": TetrisBlock
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

gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.RemoveAtContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.RemoveAtContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.RemoveAtContext.GDblockObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.RemoveAtContext.GDblockObjects2.length = 0;

gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.RemoveAtContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.RemoveAtContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.RemoveAtContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.RemoveAtContext.GDblockObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.RemoveAtContext.GDblockObjects2.length = 0;


return;
}
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.IsPlaceableAtContext = {};
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.IsPlaceableAtContext.GDObjectObjects1= [];
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.IsPlaceableAtContext.GDObjectObjects2= [];


gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.IsPlaceableAtContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.IsPlaceableAtContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{isConditionTrue_1 = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("gridX")) || 0 : 0) >= 0);
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("gridX")) || 0 : 0) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("_GridColumnCount")));
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("gridY")) || 0 : 0) >= 0);
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("gridY")) || 0 : 0) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("_GridRowCount")));
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.IsPlaceableAtContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.IsPlaceableAtContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.IsPlaceableAtContext.GDObjectObjects1[i].getVariables().get("_Grid").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("gridY") : "")).getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("gridX") : ""))) == 0 ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.IsPlaceableAtContext.GDObjectObjects1[k] = gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.IsPlaceableAtContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.IsPlaceableAtContext.GDObjectObjects1.length = k;
}
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.IsPlaceableAt = function(gridX, gridY, parentEventsFunctionContext) {

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

gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.IsPlaceableAtContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.IsPlaceableAtContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.IsPlaceableAtContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.IsPlaceableAtContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.IsPlaceableAtContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.ResetContext = {};
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.ResetContext.GDObjectObjects1= [];
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.ResetContext.GDObjectObjects2= [];
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.ResetContext.GDObjectObjects3= [];
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.ResetContext.GDObjectObjects4= [];


gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.ResetContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.ResetContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{


const repeatCount4 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("_GridColumnCount"));
for (let repeatIndex4 = 0;repeatIndex4 < repeatCount4;++repeatIndex4) {
gdjs.copyArray(gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.ResetContext.GDObjectObjects2, gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.ResetContext.GDObjectObjects4);


let isConditionTrue_0 = false;
if (true)
{
{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.ResetContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.ResetContext.GDObjectObjects4[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.ResetContext.GDObjectObjects4[i].getVariables().get("_Grid").getChild((gdjs.RuntimeObject.getVariableString(gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.ResetContext.GDObjectObjects4[i].getVariables().get("_Y")))).getChild((gdjs.RuntimeObject.getVariableString(gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.ResetContext.GDObjectObjects4[i].getVariables().get("_X"))))).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.ResetContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.ResetContext.GDObjectObjects4[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.ResetContext.GDObjectObjects4[i].getVariables().get("_X")).add(1);
}
}}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.ResetContext.GDObjectObjects2, gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.ResetContext.GDObjectObjects3);

{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.ResetContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.ResetContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.ResetContext.GDObjectObjects3[i].getVariables().get("_Y")).add(1);
}
}}

}


};gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.ResetContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


const repeatCount2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("_GridRowCount"));
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {
gdjs.copyArray(gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.ResetContext.GDObjectObjects1, gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.ResetContext.GDObjectObjects2);


let isConditionTrue_0 = false;
if (true)
{
{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.ResetContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.ResetContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.ResetContext.GDObjectObjects2[i].getVariables().get("_X")).setNumber(0);
}
}
{ //Subevents: 
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.ResetContext.eventsList1(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.ResetContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.ResetContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.ResetContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.ResetContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.ResetContext.GDObjectObjects1[i].getVariables().get("_Y")).setNumber(0);
}
}
{ //Subevents
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.ResetContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.Reset = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.ResetContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.ResetContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.ResetContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.ResetContext.GDObjectObjects4.length = 0;

gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.ResetContext.eventsList3(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.ResetContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.ResetContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.ResetContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.ResetContext.GDObjectObjects4.length = 0;


return;
}
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.LogDebugContext = {};
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.LogDebugContext.GDObjectObjects1= [];
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.LogDebugContext.GDObjectObjects2= [];
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.LogDebugContext.GDObjectObjects3= [];
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.LogDebugContext.GDObjectObjects4= [];


gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.LogDebugContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.LogDebugContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.LogDebugContext.GDObjectObjects2, gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.LogDebugContext.GDObjectObjects3);

{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.LogDebugContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.LogDebugContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.LogDebugContext.GDObjectObjects3[i].getVariables().get("_X")).setNumber(0);
}
}}

}


{


const repeatCount4 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("_GridColumnCount"));
for (let repeatIndex4 = 0;repeatIndex4 < repeatCount4;++repeatIndex4) {
gdjs.copyArray(gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.LogDebugContext.GDObjectObjects2, gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.LogDebugContext.GDObjectObjects4);


let isConditionTrue_0 = false;
if (true)
{
{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.LogDebugContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.LogDebugContext.GDObjectObjects4[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.LogDebugContext.GDObjectObjects4[i].getVariables().get("_Message")).setString((gdjs.RuntimeObject.getVariableString(gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.LogDebugContext.GDObjectObjects4[i].getVariables().get("_Message"))) + (gdjs.RuntimeObject.getVariableString(gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.LogDebugContext.GDObjectObjects4[i].getVariables().get("_Grid").getChild((gdjs.RuntimeObject.getVariableString(gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.LogDebugContext.GDObjectObjects4[i].getVariables().get("_Y")))).getChild((gdjs.RuntimeObject.getVariableString(gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.LogDebugContext.GDObjectObjects4[i].getVariables().get("_X")))))));
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.LogDebugContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.LogDebugContext.GDObjectObjects4[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.LogDebugContext.GDObjectObjects4[i].getVariables().get("_X")).add(1);
}
}}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.LogDebugContext.GDObjectObjects2, gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.LogDebugContext.GDObjectObjects3);

{gdjs.evtsExt__CommonUtils__ConsoleLog.func(runtimeScene, (gdjs.RuntimeObject.getVariableString(((gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.LogDebugContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.LogDebugContext.GDObjectObjects3[0].getVariables()).get("_Message"))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.LogDebugContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.LogDebugContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.LogDebugContext.GDObjectObjects3[i].getVariables().get("_Y")).add(1);
}
}}

}


};gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.LogDebugContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.LogDebugContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.LogDebugContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.LogDebugContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.LogDebugContext.GDObjectObjects2[i].getVariables().get("_Y")).setNumber(0);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


const repeatCount2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("_GridRowCount"));
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.LogDebugContext.GDObjectObjects2);

let isConditionTrue_0 = false;
if (true)
{
{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.LogDebugContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.LogDebugContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.LogDebugContext.GDObjectObjects2[i].getVariables().get("_Message")).setString("[Grid_LogDebug][" + (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("tag") : "") + "][" + (gdjs.RuntimeObject.getVariableString(gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.LogDebugContext.GDObjectObjects2[i].getVariables().get("_Y"))) + "]");
}
}
{ //Subevents: 
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.LogDebugContext.eventsList1(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.LogDebugContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.LogDebugContext.eventsList2(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.LogDebug = function(tag, parentEventsFunctionContext) {

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
if (argName === "tag") return tag;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.LogDebugContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.LogDebugContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.LogDebugContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.LogDebugContext.GDObjectObjects4.length = 0;

gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.LogDebugContext.eventsList3(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.LogDebugContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.LogDebugContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.LogDebugContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.LogDebugContext.GDObjectObjects4.length = 0;


return;
}
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.GetFillCountContext = {};
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.GetFillCountContext.GDObjectObjects1= [];
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.GetFillCountContext.GDObjectObjects2= [];
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.GetFillCountContext.GDObjectObjects3= [];
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.GetFillCountContext.GDObjectObjects4= [];


gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.GetFillCountContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.GetFillCountContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.GetFillCountContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.GetFillCountContext.GDObjectObjects3[0].getVariables()).get("_Grid").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("gridY") : "")).getChild((gdjs.RuntimeObject.getVariableString(((gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.GetFillCountContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.GetFillCountContext.GDObjectObjects3[0].getVariables()).get("_X")))))) == 1);
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.GetFillCountContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.GetFillCountContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.GetFillCountContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.GetFillCountContext.GDObjectObjects3[i].getVariables().get("_Counter")).add(1);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.GetFillCountContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.GetFillCountContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.GetFillCountContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.GetFillCountContext.GDObjectObjects3[i].getVariables().get("_X")).add(1);
}
}}

}


};gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.GetFillCountContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.GetFillCountContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.GetFillCountContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.GetFillCountContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.GetFillCountContext.GDObjectObjects1[i].getVariables().get("_X")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.GetFillCountContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.GetFillCountContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.GetFillCountContext.GDObjectObjects1[i].getVariables().get("_Counter")).setNumber(0);
}
}}

}


{


const repeatCount2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("_GridColumnCount"));
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {

let isConditionTrue_0 = false;
if (true)
{

{ //Subevents: 
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.GetFillCountContext.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.GetFillCountContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.GetFillCountContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.GetFillCountContext.GDObjectObjects1[0].getVariables()).get("_Counter"))); }}}

}


};

gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.GetFillCount = function(gridY, parentEventsFunctionContext) {

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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.GetFillCountContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.GetFillCountContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.GetFillCountContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.GetFillCountContext.GDObjectObjects4.length = 0;

gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.GetFillCountContext.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.GetFillCountContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.GetFillCountContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.GetFillCountContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.GetFillCountContext.GDObjectObjects4.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.SetAtContext = {};
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.SetAtContext.GDObjectObjects1= [];
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.SetAtContext.GDObjectObjects2= [];


gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.SetAtContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.SetAtContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.SetAtContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.SetAtContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.SetAtContext.GDObjectObjects1[i].getVariables().get("_Grid").getChild(gdjs.evtTools.common.toString((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("x")) || 0 : 0))).getChild(gdjs.evtTools.common.toString((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("y")) || 0 : 0)))).setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.SetAt = function(x, y, value, parentEventsFunctionContext) {

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
if (argName === "x") return x;
if (argName === "y") return y;
if (argName === "value") return value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.SetAtContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.SetAtContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.SetAtContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.SetAtContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.SetAtContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.PlaceAtContext = {};
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.PlaceAtContext.GDObjectObjects1= [];
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.PlaceAtContext.GDObjectObjects2= [];
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.PlaceAtContext.GDblockObjects1= [];
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.PlaceAtContext.GDblockObjects2= [];


gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.PlaceAtContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.PlaceAtContext.GDObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("block"), gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.PlaceAtContext.GDblockObjects1);
{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.PlaceAtContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.PlaceAtContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.PlaceAtContext.GDObjectObjects1[i].getVariables().get("_Grid").getChild(gdjs.evtTools.common.toString((( gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.PlaceAtContext.GDblockObjects1.length === 0 ) ? 0 :gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.PlaceAtContext.GDblockObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("TetrisBlock")).ConvertToGridY((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))))).getChild(gdjs.evtTools.common.toString((( gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.PlaceAtContext.GDblockObjects1.length === 0 ) ? 0 :gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.PlaceAtContext.GDblockObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("TetrisBlock")).ConvertToGridX((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))))).setNumber(1);
}
}}

}


};

gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.PlaceAt = function(block, TetrisBlock, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "block": block
},
  _objectArraysMap: {
"Object": thisObjectList
, "block": gdjs.objectsListsToArray(block)
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "TetrisBlock": TetrisBlock
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

gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.PlaceAtContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.PlaceAtContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.PlaceAtContext.GDblockObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.PlaceAtContext.GDblockObjects2.length = 0;

gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.PlaceAtContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.PlaceAtContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.PlaceAtContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.PlaceAtContext.GDblockObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.PlaceAtContext.GDblockObjects2.length = 0;


return;
}

gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("TetrisUtils::TetrisGrid", gdjs.evtsExt__TetrisUtils__TetrisGrid.TetrisGrid);
