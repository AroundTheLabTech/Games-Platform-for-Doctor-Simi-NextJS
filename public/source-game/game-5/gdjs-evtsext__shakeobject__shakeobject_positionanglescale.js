
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale || {};

/**
 * Behavior generated from Shake object (position, angle, scale)
 */
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale = class ShakeObject_PositionAngleScale extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Scale = behaviorData.Scale !== undefined ? behaviorData.Scale : "";
    this._behaviorData.Property = behaviorData.Property !== undefined ? behaviorData.Property : Number("") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.Scale !== newBehaviorData.Scale)
      this._behaviorData.Scale = newBehaviorData.Scale;
    if (oldBehaviorData.Property !== newBehaviorData.Property)
      this._behaviorData.Property = newBehaviorData.Property;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    Scale: this._behaviorData.Scale,
    Property: this._behaviorData.Property,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.Scale !== undefined)
      this._behaviorData.Scale = networkSyncData.props.Scale;
    if (networkSyncData.props.Property !== undefined)
      this._behaviorData.Property = networkSyncData.props.Property;
  }

  // Properties:
  
  _getScale() {
    return this._behaviorData.Scale !== undefined ? this._behaviorData.Scale : "";
  }
  _setScale(newValue) {
    this._behaviorData.Scale = newValue;
  }
  _getProperty() {
    return this._behaviorData.Property !== undefined ? this._behaviorData.Property : Number("") || 0;
  }
  _setProperty(newValue) {
    this._behaviorData.Property = newValue;
  }
}

/**
 * Shared data generated from Shake object (position, angle, scale)
 */
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.SharedData = class ShakeObject_PositionAngleScaleSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._ShakeObject_ShakeObject_PositionAngleScaleSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._ShakeObject_ShakeObject_PositionAngleScaleSharedData = new gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.SharedData(
      initialData
    );
  }
  return instanceContainer._ShakeObject_ShakeObject_PositionAngleScaleSharedData;
}

// Methods:
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext = {};
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects1= [];
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2= [];
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects3= [];


gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].resetTimer("__ShakeObject_DurationTimer");
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].getVariables().get("__ShakeObject_Duration")).setNumber(eventsFunctionContext.getArgument("Duration"));
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].getVariables().get("__ShakeObject_PowerX")).setNumber(eventsFunctionContext.getArgument("PowerX"));
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].getVariables().get("__ShakeObject_PowerY")).setNumber(eventsFunctionContext.getArgument("PowerY"));
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].getVariables().get("__ShakeObject_PowerAngle")).setNumber(eventsFunctionContext.getArgument("PowerAngle"));
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].getVariables().get("__ShakeObject_PowerScale")).setNumber(eventsFunctionContext.getArgument("PowerScale"));
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].getVariables().get("__ShakeObject_TimeBetweenShakes")).setNumber(eventsFunctionContext.getArgument("TimeBetweenShakes"));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].setVariableBoolean(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].getVariables().get("__ShakeObject_ShakeForever"), false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("ShakeForever");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].setVariableBoolean(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].getVariables().get("__ShakeObject_ShakeForever"), true);
}
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].getVariables().get("__ShakeObject_Duration")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].getVariables().get("__ShakeObject_Duration")).setNumber(0.5);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].getVariables().get("__ShakeObject_TimeBetweenShakes")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].getVariables().get("__ShakeObject_TimeBetweenShakes")).setNumber(0.08);
}
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].getVariables().get("__ShakeObject_Duration")) < (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].getVariables().get("__ShakeObject_TimeBetweenShakes"))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].getVariables().get("__ShakeObject_Duration")).setNumber((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].getVariables().get("__ShakeObject_TimeBetweenShakes"))));
}
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].getVariables().get("__ShakeObject_ShakeInProgress")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2[i].getVariables().get("__ShakeObject_InitialShake")).setNumber(1);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects1[i].getVariables().get("__ShakeObject_ShakeInProgress")).setNumber(1);
}
}}

}


};gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.eventsList0(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScale = function(Duration, PowerX, PowerY, PowerAngle, PowerScale, TimeBetweenShakes, ShakeForever, parentEventsFunctionContext) {

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
, "Scale": this._getScale()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ShakeObject"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ShakeObject"),
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
if (argName === "Duration") return Duration;
if (argName === "PowerX") return PowerX;
if (argName === "PowerY") return PowerY;
if (argName === "PowerAngle") return PowerAngle;
if (argName === "PowerScale") return PowerScale;
if (argName === "TimeBetweenShakes") return TimeBetweenShakes;
if (argName === "ShakeForever") return ShakeForever;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.ShakeObject_PositionAngleScaleContext.GDObjectObjects3.length = 0;


return;
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1_1final = [];

gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2_1final = [];

gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3_1final = [];

gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4_1final = [];

gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5_1final = [];

gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4= [];
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5= [];
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6= [];
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects7= [];


gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6);

for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6[i].getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6[i].getVariables().get("__ShakeObject_PowerX")) != 0 ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5_1final.indexOf(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6[j]) === -1 )
            gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5_1final.push(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6);

for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6[i].getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6[i].getVariables().get("__ShakeObject_PowerY")) != 0 ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5_1final.indexOf(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6[j]) === -1 )
            gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5_1final.push(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5_1final, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].setX(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getX() - ((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariables().get("__ShakeObject_DisplacementTravelledX")))));
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].setY(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getY() - ((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariables().get("__ShakeObject_DisplacementTravelledY")))));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariables().get("__ShakeObject_PowerAngle")) != 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].setAngle(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getAngle() - ((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariables().get("__ShakeObject_AngleTravelled")))));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariables().get("__ShakeObject_PowerScale")) != 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getBehavior(eventsFunctionContext.getBehaviorName("Scale")).setScale(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getBehavior(eventsFunctionContext.getBehaviorName("Scale")).getScale() - ((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariables().get("__ShakeObject_ScaleTravelled")))));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4);

{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_DisplacementTravelledX")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_DisplacementTravelledY")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_AngleTravelled")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_ScaleTravelled")).setNumber(0);
}
}}

}


};gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6[i].getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6[i].getVariables().get("__ShakeObject_PowerX")) != 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6[i].getVariables().get("__ShakeObject_DisplacementX")).setNumber(((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6[i].getVariables().get("__ShakeObject_Duration"))) - (gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6[i].getTimerElapsedTimeInSeconds("__ShakeObject_DurationTimer"))) / (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6[i].getVariables().get("__ShakeObject_Duration"))) * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6[i].getVariables().get("__ShakeObject_PowerX"))));
}
}}

}


{

/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariables().get("__ShakeObject_PowerY")) != 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariables().get("__ShakeObject_DisplacementY")).setNumber(((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariables().get("__ShakeObject_Duration"))) - (gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getTimerElapsedTimeInSeconds("__ShakeObject_DurationTimer"))) / (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariables().get("__ShakeObject_Duration"))) * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariables().get("__ShakeObject_PowerY"))));
}
}}

}


};gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariables().get("__ShakeObject_PowerX")) != 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariables().get("__ShakeObject_DisplacementX")).setNumber(((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariables().get("__ShakeObject_Duration"))) - (gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getTimerElapsedTimeInSeconds("__ShakeObject_DurationTimer"))) / (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariables().get("__ShakeObject_Duration"))) * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariables().get("__ShakeObject_PowerX"))) * gdjs.randomWithStep(-(1), 1, 2));
}
}}

}


{

/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_PowerY")) != 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_DisplacementY")).setNumber(((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_Duration"))) - (gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getTimerElapsedTimeInSeconds("__ShakeObject_DurationTimer"))) / (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_Duration"))) * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_PowerY"))) * gdjs.randomWithStep(-(1), 1, 2));
}
}}

}


};gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{



}


{



}


{

gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariables().get("__ShakeObject_InitialShake")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{

/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_InitialShake")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{



}


{



}


{

gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.common.mod((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[0].getVariables()).get("__ShakeObject_ShakeCounter"))), 2) == 0);
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariables().get("__ShakeObject_DisplacementAngle")).setNumber(-(1) * ((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariables().get("__ShakeObject_Duration"))) - (gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getTimerElapsedTimeInSeconds("__ShakeObject_DurationTimer"))) / (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariables().get("__ShakeObject_Duration"))) * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariables().get("__ShakeObject_PowerAngle"))));
}
}}

}


{



}


{



}


{

/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.common.mod((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[0].getVariables()).get("__ShakeObject_ShakeCounter"))), 2) == 1);
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_DisplacementAngle")).setNumber(((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_Duration"))) - (gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getTimerElapsedTimeInSeconds("__ShakeObject_DurationTimer"))) / (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_Duration"))) * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_PowerAngle"))));
}
}}

}


};gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{



}


{



}


{



}


{

gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.common.mod((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[0].getVariables()).get("__ShakeObject_ShakeCounter"))), 2) == 0);
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariables().get("__ShakeObject_DisplacementScale")).setNumber(-(1) * ((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariables().get("__ShakeObject_Duration"))) - (gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getTimerElapsedTimeInSeconds("__ShakeObject_DurationTimer"))) / (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariables().get("__ShakeObject_Duration"))) * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariables().get("__ShakeObject_PowerScale"))) * (1 / 100));
}
}}

}


{



}


{



}


{

/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.common.mod((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[0].getVariables()).get("__ShakeObject_ShakeCounter"))), 2) == 1);
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_DisplacementScale")).setNumber(((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_Duration"))) - (gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getTimerElapsedTimeInSeconds("__ShakeObject_DurationTimer"))) / (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_Duration"))) * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_PowerScale"))) * (1 / 100));
}
}}

}


};gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
}


{



}


{

gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5);

for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariables().get("__ShakeObject_PowerX")) != 0 ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4_1final.indexOf(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[j]) === -1 )
            gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4_1final.push(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5);

for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariables().get("__ShakeObject_PowerY")) != 0 ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4_1final.indexOf(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[j]) === -1 )
            gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4_1final.push(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4_1final, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_PowerAngle")) != 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_PowerScale")) != 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList5(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getVariables().get("__ShakeObject_InitialShake")).setNumber(0);
}
}}

}


};gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4);

for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_InitialShake")) == 1 ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3_1final.indexOf(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[j]) === -1 )
            gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3_1final.push(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4);

for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].timerElapsedTime("__ShakeObject_ShakeTimer", (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_TimeBetweenShakes")))) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3_1final.indexOf(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[j]) === -1 )
            gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3_1final.push(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3_1final, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].resetTimer("__ShakeObject_ShakeTimer");
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getVariables().get("__ShakeObject_ShakeCounter")).add(1);
}
}
{ //Subevents
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList6(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_DisplacementTravelledX")).add(Math.round(1024 * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_DisplacementX"))) * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_PercentTimeElapsedThisFrame")))) / 1024);
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_DisplacementTravelledY")).add(Math.round(1024 * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_DisplacementY"))) * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_PercentTimeElapsedThisFrame")))) / 1024);
}
}}

}


};gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList9 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_AngleTravelled")).add(Math.round(1024 * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_DisplacementAngle"))) * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_PercentTimeElapsedThisFrame")))) / 1024);
}
}}

}


};gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList10 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getVariables().get("__ShakeObject_ScaleTravelled")).add(Math.round(1024 * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getVariables().get("__ShakeObject_DisplacementScale"))) * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getVariables().get("__ShakeObject_PercentTimeElapsedThisFrame")))) / 1024);
}
}}

}


};gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList11 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5);

for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariables().get("__ShakeObject_PowerX")) != 0 ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4_1final.indexOf(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[j]) === -1 )
            gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4_1final.push(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5);

for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i].getVariables().get("__ShakeObject_PowerY")) != 0 ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4_1final.indexOf(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[j]) === -1 )
            gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4_1final.push(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4_1final, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].setX(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getX() + (Math.round(1024 * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_DisplacementX"))) * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_PercentTimeElapsedThisFrame")))) / 1024));
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].setY(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getY() + (Math.round(1024 * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_DisplacementY"))) * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_PercentTimeElapsedThisFrame")))) / 1024));
}
}
{ //Subevents
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList8(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[0].getVariables()).get("__ShakeObject_PowerAngle"))) != 0);
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].setAngle(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getAngle() + (Math.round(1024 * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_DisplacementAngle"))) * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_PercentTimeElapsedThisFrame")))) / 1024));
}
}
{ //Subevents
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList9(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{

/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[0].getVariables()).get("__ShakeObject_PowerScale"))) != 0);
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Scale")).setScale(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Scale")).getScale() + (Math.round(1024 * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getVariables().get("__ShakeObject_DisplacementScale"))) * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getVariables().get("__ShakeObject_PercentTimeElapsedThisFrame")))) / 1024));
}
}
{ //Subevents
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList10(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList12 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getVariables().get("__ShakeObject_DisplacementTravelledX")).sub(Math.round(1024 * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getVariables().get("__ShakeObject_DisplacementX"))) * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getVariables().get("__ShakeObject_PercentTimeElapsedThisFrame")))) / 1024);
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getVariables().get("__ShakeObject_DisplacementTravelledY")).sub(Math.round(1024 * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getVariables().get("__ShakeObject_DisplacementY"))) * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getVariables().get("__ShakeObject_PercentTimeElapsedThisFrame")))) / 1024);
}
}}

}


};gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList13 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getVariables().get("__ShakeObject_AngleTravelled")).sub(Math.round(1024 * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getVariables().get("__ShakeObject_DisplacementAngle"))) * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getVariables().get("__ShakeObject_PercentTimeElapsedThisFrame")))) / 1024);
}
}}

}


};gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList14 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("__ShakeObject_ScaleTravelled")).sub(Math.round(1024 * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("__ShakeObject_DisplacementScale"))) * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("__ShakeObject_PercentTimeElapsedThisFrame")))) / 1024);
}
}}

}


};gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList15 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4);

for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_PowerX")) != 0 ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3_1final.indexOf(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[j]) === -1 )
            gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3_1final.push(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4);

for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i].getVariables().get("__ShakeObject_PowerY")) != 0 ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3_1final.indexOf(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[j]) === -1 )
            gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3_1final.push(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3_1final, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].setX(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getX() - (Math.round(1024 * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getVariables().get("__ShakeObject_DisplacementX"))) * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getVariables().get("__ShakeObject_PercentTimeElapsedThisFrame")))) / 1024));
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].setY(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getY() - (Math.round(1024 * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getVariables().get("__ShakeObject_DisplacementY"))) * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getVariables().get("__ShakeObject_PercentTimeElapsedThisFrame")))) / 1024));
}
}
{ //Subevents
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList12(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[0].getVariables()).get("__ShakeObject_PowerAngle"))) != 0);
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].setAngle(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getAngle() - (Math.round(1024 * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getVariables().get("__ShakeObject_DisplacementAngle"))) * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getVariables().get("__ShakeObject_PercentTimeElapsedThisFrame")))) / 1024));
}
}
{ //Subevents
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList13(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{

/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[0].getVariables()).get("__ShakeObject_PowerScale"))) != 0);
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Scale")).setScale(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Scale")).getScale() - (Math.round(1024 * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("__ShakeObject_DisplacementScale"))) * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("__ShakeObject_PercentTimeElapsedThisFrame")))) / 1024));
}
}
{ //Subevents
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList14(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList16 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3);

{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getVariables().get("__ShakeObject_PercentTimeElapsedThisFrame")).setNumber(Math.min(1, gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) / (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getVariables().get("__ShakeObject_TimeBetweenShakes")))));
}
}}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].timerElapsedTime("__ShakeObject_ShakeTimer", (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getVariables().get("__ShakeObject_TimeBetweenShakes"))) / 2)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList11(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{

/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i].timerElapsedTime("__ShakeObject_ShakeTimer", (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("__ShakeObject_TimeBetweenShakes"))) / 2) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList15(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList17 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getVariableBoolean(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getVariables().get("__ShakeObject_ShakeForever"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getVariables().get("__ShakeObject_Duration")).setNumber(100);
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].resetTimer("__ShakeObject_DurationTimer");
}
}}

}


{


gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList7(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList16(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList18 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("__ShakeObject_ShakeInProgress")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList17(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList19 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3);

for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getVariables().get("__ShakeObject_PowerX")) != 0 ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2_1final.indexOf(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[j]) === -1 )
            gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2_1final.push(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3);

for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i].getVariables().get("__ShakeObject_PowerY")) != 0 ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2_1final.indexOf(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[j]) === -1 )
            gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2_1final.push(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2_1final, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i].setX(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i].getX() - ((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("__ShakeObject_DisplacementTravelledX")))));
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i].setY(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i].getY() - ((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("__ShakeObject_DisplacementTravelledY")))));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("__ShakeObject_PowerAngle")) != 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i].setAngle(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i].getAngle() - ((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("__ShakeObject_AngleTravelled")))));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("__ShakeObject_PowerScale")) != 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Scale")).setScale(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Scale")).getScale() - ((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("__ShakeObject_ScaleTravelled")))));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("__ShakeObject_DisplacementTravelledX")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("__ShakeObject_DisplacementTravelledY")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("__ShakeObject_AngleTravelled")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("__ShakeObject_ScaleTravelled")).setNumber(0);
}
}}

}


};gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList20 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList19(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList21 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i].timerElapsedTime("__ShakeObject_DurationTimer", (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("__ShakeObject_Duration")))) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1_1final.push(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("__ShakeObject_ShakeInProgress")) == -(1) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1_1final.push(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1_1final, gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(15020052);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("__ShakeObject_ShakeInProgress")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("__ShakeObject_ShakeCounter")).setNumber(0);
}
}
{ //Subevents
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList20(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList22 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList18(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList21(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList23 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList22(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

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
, "Scale": this._getScale()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ShakeObject"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ShakeObject"),
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

gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5.length = 0;
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6.length = 0;
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects7.length = 0;

gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.eventsList23(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects5.length = 0;
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects6.length = 0;
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPostEventsContext.GDObjectObjects7.length = 0;


return;
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.StopShakingContext = {};
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.StopShakingContext.GDObjectObjects1= [];
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.StopShakingContext.GDObjectObjects2= [];


gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.StopShakingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.StopShakingContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.StopShakingContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.StopShakingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsShaking((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.StopShakingContext.GDObjectObjects1[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.StopShakingContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.StopShakingContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.StopShakingContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.StopShakingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.StopShakingContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.StopShakingContext.GDObjectObjects1[i].getVariables().get("__ShakeObject_ShakeInProgress")).setNumber(-(1));
}
}}

}


};

gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.StopShaking = function(parentEventsFunctionContext) {

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
, "Scale": this._getScale()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ShakeObject"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ShakeObject"),
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

gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.StopShakingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.StopShakingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.StopShakingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.StopShakingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.StopShakingContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.IsShakingContext = {};
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.IsShakingContext.GDObjectObjects1= [];
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.IsShakingContext.GDObjectObjects2= [];


gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.IsShakingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.IsShakingContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.IsShakingContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.IsShakingContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.IsShakingContext.GDObjectObjects1[i].getVariables().get("__ShakeObject_ShakeInProgress")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.IsShakingContext.GDObjectObjects1[k] = gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.IsShakingContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.IsShakingContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.IsShaking = function(parentEventsFunctionContext) {

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
, "Scale": this._getScale()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ShakeObject"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ShakeObject"),
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

gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.IsShakingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.IsShakingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.IsShakingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.IsShakingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.IsShakingContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("ShakeObject::ShakeObject_PositionAngleScale", gdjs.evtsExt__ShakeObject__ShakeObject_PositionAngleScale.ShakeObject_PositionAngleScale);
