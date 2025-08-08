
gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement = gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement || {};

/**
 * Behavior generated from Animated Back and Forth (mirrored) Movement
 */
gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement = class AnimatedBackAndForthMirroredMovement extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Animation = behaviorData.Animation !== undefined ? behaviorData.Animation : "";
    this._behaviorData.Flippable = behaviorData.Flippable !== undefined ? behaviorData.Flippable : "";
    this._behaviorData.SpeedX = behaviorData.SpeedX !== undefined ? behaviorData.SpeedX : Number("200") || 0;
    this._behaviorData.DistanceX = behaviorData.DistanceX !== undefined ? behaviorData.DistanceX : Number("300") || 0;
    this._behaviorData.InitialX = Number("0") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.Animation !== newBehaviorData.Animation)
      this._behaviorData.Animation = newBehaviorData.Animation;
    if (oldBehaviorData.Flippable !== newBehaviorData.Flippable)
      this._behaviorData.Flippable = newBehaviorData.Flippable;
    if (oldBehaviorData.SpeedX !== newBehaviorData.SpeedX)
      this._behaviorData.SpeedX = newBehaviorData.SpeedX;
    if (oldBehaviorData.DistanceX !== newBehaviorData.DistanceX)
      this._behaviorData.DistanceX = newBehaviorData.DistanceX;
    if (oldBehaviorData.InitialX !== newBehaviorData.InitialX)
      this._behaviorData.InitialX = newBehaviorData.InitialX;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    Animation: this._behaviorData.Animation,
    Flippable: this._behaviorData.Flippable,
    SpeedX: this._behaviorData.SpeedX,
    DistanceX: this._behaviorData.DistanceX,
    InitialX: this._behaviorData.InitialX,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.Animation !== undefined)
      this._behaviorData.Animation = networkSyncData.props.Animation;
    if (networkSyncData.props.Flippable !== undefined)
      this._behaviorData.Flippable = networkSyncData.props.Flippable;
    if (networkSyncData.props.SpeedX !== undefined)
      this._behaviorData.SpeedX = networkSyncData.props.SpeedX;
    if (networkSyncData.props.DistanceX !== undefined)
      this._behaviorData.DistanceX = networkSyncData.props.DistanceX;
    if (networkSyncData.props.InitialX !== undefined)
      this._behaviorData.InitialX = networkSyncData.props.InitialX;
  }

  // Properties:
  
  _getAnimation() {
    return this._behaviorData.Animation !== undefined ? this._behaviorData.Animation : "";
  }
  _setAnimation(newValue) {
    this._behaviorData.Animation = newValue;
  }
  _getFlippable() {
    return this._behaviorData.Flippable !== undefined ? this._behaviorData.Flippable : "";
  }
  _setFlippable(newValue) {
    this._behaviorData.Flippable = newValue;
  }
  _getSpeedX() {
    return this._behaviorData.SpeedX !== undefined ? this._behaviorData.SpeedX : Number("200") || 0;
  }
  _setSpeedX(newValue) {
    this._behaviorData.SpeedX = newValue;
  }
  _getDistanceX() {
    return this._behaviorData.DistanceX !== undefined ? this._behaviorData.DistanceX : Number("300") || 0;
  }
  _setDistanceX(newValue) {
    this._behaviorData.DistanceX = newValue;
  }
  _getInitialX() {
    return this._behaviorData.InitialX !== undefined ? this._behaviorData.InitialX : Number("0") || 0;
  }
  _setInitialX(newValue) {
    this._behaviorData.InitialX = newValue;
  }
}

/**
 * Shared data generated from Animated Back and Forth (mirrored) Movement
 */
gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.SharedData = class AnimatedBackAndForthMirroredMovementSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._AnimatedBackAndForthMovement_AnimatedBackAndForthMirroredMovementSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._AnimatedBackAndForthMovement_AnimatedBackAndForthMirroredMovementSharedData = new gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.SharedData(
      initialData
    );
  }
  return instanceContainer._AnimatedBackAndForthMovement_AnimatedBackAndForthMirroredMovementSharedData;
}

// Methods:
gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getInitialX() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1);
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setInitialX((( gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[0].getX()))
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).getAnimationName() == "GoLeft" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Flippable")).isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].addForce(-(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeedX()), 0, 0);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).getAnimationName() == "GoLeft" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Flippable")).isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].addForce(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeedX(), 0, 0);
}
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getX() > eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getInitialX() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].setX(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getInitialX());
}
}{for(var i = 0, len = gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationName("TurnLeft");
}
}{for(var i = 0, len = gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Flippable")).flipX(false);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getX() < eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getInitialX() - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDistanceX() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].setX(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getInitialX() - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDistanceX());
}
}{for(var i = 0, len = gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationName("TurnLeft");
}
}{for(var i = 0, len = gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Flippable")).flipX(true);
}
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).getAnimationName() == "TurnLeft" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationName("GoLeft");
}
}}

}


};

gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
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
, "Animation": this._getAnimation()
, "Flippable": this._getFlippable()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AnimatedBackAndForthMovement"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AnimatedBackAndForthMovement"),
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

gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;


return;
}


gdjs.registerBehavior("AnimatedBackAndForthMovement::AnimatedBackAndForthMirroredMovement", gdjs.evtsExt__AnimatedBackAndForthMovement__AnimatedBackAndForthMirroredMovement.AnimatedBackAndForthMirroredMovement);
