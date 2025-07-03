
gdjs.evtsExt__Plane_Object__Plane_Object = gdjs.evtsExt__Plane_Object__Plane_Object || {};

/**
 * Object generated from 
 */
gdjs.evtsExt__Plane_Object__Plane_Object.Plane_Object = class Plane_Object extends gdjs.CustomRuntimeObject2D {
  constructor(parentInstanceContainer, objectData) {
    super(parentInstanceContainer, objectData);
    this._parentInstanceContainer = parentInstanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._objectData = {};
    
    

    // It calls the onCreated super implementation at the end.
    this.onCreated();
  }

  // Hot-reload:
  updateFromObjectData(oldObjectData, newObjectData) {
    super.updateFromObjectData(oldObjectData, newObjectData);

    this.onHotReloading(this._parentInstanceContainer);
    return true;
  }

  // Properties:
  

  

  
}

// Methods:

gdjs.evtsExt__Plane_Object__Plane_Object.Plane_Object.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerObject("Plane_Object::Plane_Object", gdjs.evtsExt__Plane_Object__Plane_Object.Plane_Object);
