
gdjs.evtsExt__TetrisUtils__TetrisPiece = gdjs.evtsExt__TetrisUtils__TetrisPiece || {};

/**
 * Behavior generated from TetrisUtils::TetrisPiece
 */
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece = class TetrisPiece extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.getSharedData(
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
 * Shared data generated from TetrisUtils::TetrisPiece
 */
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.SharedData = class TetrisPieceSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._TetrisUtils_TetrisPieceSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._TetrisUtils_TetrisPieceSharedData = new gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.SharedData(
      initialData
    );
  }
  return instanceContainer._TetrisUtils_TetrisPieceSharedData;
}

// Methods:
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext = {};
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2= [];
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects3= [];


gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRSTrans").getChild("1").getChild("0")).setString("R");
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRSTrans").getChild("1").getChild("R")).setString("2");
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRSTrans").getChild("1").getChild("2")).setString("L");
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRSTrans").getChild("1").getChild("L")).setString("0");
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("_SRSTrans").getChild("-1").getChild("0")).setString("L");
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("_SRSTrans").getChild("-1").getChild("R")).setString("0");
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("_SRSTrans").getChild("-1").getChild("2")).setString("R");
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("_SRSTrans").getChild("-1").getChild("L")).setString("2");
}
}}

}


};gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("0").getChild("0").getChild("R").getChild("0").getChild("x")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("0").getChild("0").getChild("R").getChild("0").getChild("y")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("0").getChild("0").getChild("R").getChild("1").getChild("x")).setNumber(-(1));
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("0").getChild("0").getChild("R").getChild("1").getChild("y")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("0").getChild("0").getChild("R").getChild("2").getChild("x")).setNumber(-(1));
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("0").getChild("0").getChild("R").getChild("2").getChild("y")).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("0").getChild("0").getChild("R").getChild("3").getChild("x")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("0").getChild("0").getChild("R").getChild("3").getChild("y")).setNumber(-(2));
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("0").getChild("0").getChild("R").getChild("4").getChild("x")).setNumber(-(1));
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("0").getChild("0").getChild("R").getChild("4").getChild("y")).setNumber(-(2));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("0").getChild("R").getChild("0").getChild("0").getChild("x")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("0").getChild("R").getChild("0").getChild("0").getChild("y")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("0").getChild("R").getChild("0").getChild("1").getChild("x")).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("0").getChild("R").getChild("0").getChild("1").getChild("y")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("0").getChild("R").getChild("0").getChild("2").getChild("x")).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("0").getChild("R").getChild("0").getChild("2").getChild("y")).setNumber(-(1));
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("0").getChild("R").getChild("0").getChild("3").getChild("x")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("0").getChild("R").getChild("0").getChild("3").getChild("y")).setNumber(2);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("0").getChild("R").getChild("0").getChild("4").getChild("x")).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("0").getChild("R").getChild("0").getChild("4").getChild("y")).setNumber(2);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("0").getChild("R").getChild("2").getChild("0").getChild("x")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("0").getChild("R").getChild("2").getChild("0").getChild("y")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("0").getChild("R").getChild("2").getChild("1").getChild("x")).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("0").getChild("R").getChild("2").getChild("1").getChild("y")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("0").getChild("R").getChild("2").getChild("2").getChild("x")).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("0").getChild("R").getChild("2").getChild("2").getChild("y")).setNumber(-(1));
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("0").getChild("R").getChild("2").getChild("3").getChild("x")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("0").getChild("R").getChild("2").getChild("3").getChild("y")).setNumber(2);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("0").getChild("R").getChild("2").getChild("4").getChild("x")).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("0").getChild("R").getChild("2").getChild("4").getChild("y")).setNumber(2);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("0").getChild("2").getChild("R").getChild("0").getChild("x")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("0").getChild("2").getChild("R").getChild("0").getChild("y")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("0").getChild("2").getChild("R").getChild("1").getChild("x")).setNumber(-(1));
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("0").getChild("2").getChild("R").getChild("1").getChild("y")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("0").getChild("2").getChild("R").getChild("2").getChild("x")).setNumber(-(1));
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("0").getChild("2").getChild("R").getChild("2").getChild("y")).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("0").getChild("2").getChild("R").getChild("3").getChild("x")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("0").getChild("2").getChild("R").getChild("3").getChild("y")).setNumber(-(2));
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("0").getChild("2").getChild("R").getChild("4").getChild("x")).setNumber(-(1));
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("0").getChild("2").getChild("R").getChild("4").getChild("y")).setNumber(-(2));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("0").getChild("2").getChild("L").getChild("0").getChild("x")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("0").getChild("2").getChild("L").getChild("0").getChild("y")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("0").getChild("2").getChild("L").getChild("1").getChild("x")).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("0").getChild("2").getChild("L").getChild("1").getChild("y")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("0").getChild("2").getChild("L").getChild("2").getChild("x")).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("0").getChild("2").getChild("L").getChild("2").getChild("y")).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("0").getChild("2").getChild("L").getChild("3").getChild("x")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("0").getChild("2").getChild("L").getChild("3").getChild("y")).setNumber(-(2));
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("0").getChild("2").getChild("L").getChild("4").getChild("x")).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("0").getChild("2").getChild("L").getChild("4").getChild("y")).setNumber(-(2));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("_SRS").getChild("0").getChild("L").getChild("2").getChild("0").getChild("x").setNumber(0);
}{runtimeScene.getScene().getVariables().get("_SRS").getChild("0").getChild("L").getChild("2").getChild("0").getChild("y").setNumber(0);
}{runtimeScene.getScene().getVariables().get("_SRS").getChild("0").getChild("L").getChild("2").getChild("1").getChild("x").setNumber(-(1));
}{runtimeScene.getScene().getVariables().get("_SRS").getChild("0").getChild("L").getChild("2").getChild("1").getChild("y").setNumber(0);
}{runtimeScene.getScene().getVariables().get("_SRS").getChild("0").getChild("L").getChild("2").getChild("2").getChild("x").setNumber(-(1));
}{runtimeScene.getScene().getVariables().get("_SRS").getChild("0").getChild("L").getChild("2").getChild("2").getChild("y").setNumber(-(1));
}{runtimeScene.getScene().getVariables().get("_SRS").getChild("0").getChild("L").getChild("2").getChild("3").getChild("x").setNumber(0);
}{runtimeScene.getScene().getVariables().get("_SRS").getChild("0").getChild("L").getChild("2").getChild("3").getChild("y").setNumber(2);
}{runtimeScene.getScene().getVariables().get("_SRS").getChild("0").getChild("L").getChild("2").getChild("4").getChild("x").setNumber(-(1));
}{runtimeScene.getScene().getVariables().get("_SRS").getChild("0").getChild("L").getChild("2").getChild("4").getChild("y").setNumber(2);
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("0").getChild("L").getChild("0").getChild("0").getChild("x")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("0").getChild("L").getChild("0").getChild("0").getChild("y")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("0").getChild("L").getChild("0").getChild("1").getChild("x")).setNumber(-(1));
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("0").getChild("L").getChild("0").getChild("1").getChild("y")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("0").getChild("L").getChild("0").getChild("2").getChild("x")).setNumber(-(1));
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("0").getChild("L").getChild("0").getChild("2").getChild("y")).setNumber(-(1));
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("0").getChild("L").getChild("0").getChild("3").getChild("x")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("0").getChild("L").getChild("0").getChild("3").getChild("y")).setNumber(2);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("0").getChild("L").getChild("0").getChild("4").getChild("x")).setNumber(-(1));
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("0").getChild("L").getChild("0").getChild("4").getChild("y")).setNumber(2);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("_SRS").getChild("0").getChild("0").getChild("L").getChild("0").getChild("x")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("_SRS").getChild("0").getChild("0").getChild("L").getChild("0").getChild("y")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("_SRS").getChild("0").getChild("0").getChild("L").getChild("1").getChild("x")).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("_SRS").getChild("0").getChild("0").getChild("L").getChild("1").getChild("y")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("_SRS").getChild("0").getChild("0").getChild("L").getChild("2").getChild("x")).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("_SRS").getChild("0").getChild("0").getChild("L").getChild("2").getChild("y")).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("_SRS").getChild("0").getChild("0").getChild("L").getChild("3").getChild("x")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("_SRS").getChild("0").getChild("0").getChild("L").getChild("3").getChild("y")).setNumber(-(2));
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("_SRS").getChild("0").getChild("0").getChild("L").getChild("4").getChild("x")).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("_SRS").getChild("0").getChild("0").getChild("L").getChild("4").getChild("y")).setNumber(-(2));
}
}}

}


};gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("0").getChild("R").getChild("0").getChild("x")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("0").getChild("R").getChild("0").getChild("y")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("0").getChild("R").getChild("1").getChild("x")).setNumber(-(2));
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("0").getChild("R").getChild("1").getChild("y")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("0").getChild("R").getChild("2").getChild("x")).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("0").getChild("R").getChild("2").getChild("y")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("0").getChild("R").getChild("3").getChild("x")).setNumber(-(2));
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("0").getChild("R").getChild("3").getChild("y")).setNumber(-(1));
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("0").getChild("R").getChild("4").getChild("x")).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("0").getChild("R").getChild("4").getChild("y")).setNumber(2);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("0").getChild("R").getChild("5").getChild("y")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("0").getChild("R").getChild("5").getChild("y")).setNumber(-(2));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("R").getChild("0").getChild("0").getChild("x")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("R").getChild("0").getChild("0").getChild("y")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("R").getChild("0").getChild("1").getChild("x")).setNumber(2);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("R").getChild("0").getChild("1").getChild("y")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("R").getChild("0").getChild("2").getChild("x")).setNumber(-(1));
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("R").getChild("0").getChild("2").getChild("y")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("R").getChild("0").getChild("3").getChild("x")).setNumber(2);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("R").getChild("0").getChild("3").getChild("y")).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("R").getChild("0").getChild("4").getChild("x")).setNumber(-(1));
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("R").getChild("0").getChild("4").getChild("y")).setNumber(-(2));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("R").getChild("2").getChild("0").getChild("x")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("R").getChild("2").getChild("0").getChild("y")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("R").getChild("2").getChild("1").getChild("x")).setNumber(-(1));
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("R").getChild("2").getChild("1").getChild("y")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("R").getChild("2").getChild("2").getChild("x")).setNumber(2);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("R").getChild("2").getChild("2").getChild("y")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("R").getChild("2").getChild("3").getChild("x")).setNumber(-(1));
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("R").getChild("2").getChild("3").getChild("y")).setNumber(2);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("R").getChild("2").getChild("4").getChild("x")).setNumber(2);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("R").getChild("2").getChild("4").getChild("y")).setNumber(-(1));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("2").getChild("R").getChild("0").getChild("x")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("2").getChild("R").getChild("0").getChild("y")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("2").getChild("R").getChild("1").getChild("x")).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("2").getChild("R").getChild("1").getChild("y")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("2").getChild("R").getChild("2").getChild("x")).setNumber(-(2));
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("2").getChild("R").getChild("2").getChild("y")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("2").getChild("R").getChild("3").getChild("x")).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("2").getChild("R").getChild("3").getChild("y")).setNumber(-(2));
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("2").getChild("R").getChild("4").getChild("x")).setNumber(-(2));
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("2").getChild("R").getChild("4").getChild("y")).setNumber(1);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("2").getChild("L").getChild("0").getChild("x")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("2").getChild("L").getChild("0").getChild("y")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("2").getChild("L").getChild("1").getChild("x")).setNumber(2);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("2").getChild("L").getChild("1").getChild("y")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("2").getChild("L").getChild("2").getChild("x")).setNumber(-(1));
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("2").getChild("L").getChild("2").getChild("y")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("2").getChild("L").getChild("3").getChild("x")).setNumber(2);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("2").getChild("L").getChild("3").getChild("y")).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("2").getChild("L").getChild("4").getChild("x")).setNumber(-(1));
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("2").getChild("L").getChild("4").getChild("y")).setNumber(-(2));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("L").getChild("2").getChild("0").getChild("x")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("L").getChild("2").getChild("0").getChild("y")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("L").getChild("2").getChild("1").getChild("x")).setNumber(-(2));
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("L").getChild("2").getChild("1").getChild("y")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("L").getChild("2").getChild("2").getChild("x")).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("L").getChild("2").getChild("2").getChild("y")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("L").getChild("2").getChild("3").getChild("x")).setNumber(-(2));
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("L").getChild("2").getChild("3").getChild("y")).setNumber(-(1));
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("L").getChild("2").getChild("4").getChild("x")).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("L").getChild("2").getChild("4").getChild("y")).setNumber(2);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("L").getChild("0").getChild("0").getChild("x")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("L").getChild("0").getChild("0").getChild("y")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("L").getChild("0").getChild("1").getChild("x")).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("L").getChild("0").getChild("1").getChild("y")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("L").getChild("0").getChild("2").getChild("x")).setNumber(-(2));
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("L").getChild("0").getChild("2").getChild("y")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("L").getChild("0").getChild("3").getChild("x")).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("L").getChild("0").getChild("3").getChild("y")).setNumber(-(2));
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("L").getChild("0").getChild("4").getChild("x")).setNumber(-(2));
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2[i].getVariables().get("_SRS").getChild("1").getChild("L").getChild("0").getChild("4").getChild("y")).setNumber(1);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("_SRS").getChild("1").getChild("0").getChild("L").getChild("0").getChild("x")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("_SRS").getChild("1").getChild("0").getChild("L").getChild("0").getChild("y")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("_SRS").getChild("1").getChild("0").getChild("L").getChild("1").getChild("x")).setNumber(-(1));
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("_SRS").getChild("1").getChild("0").getChild("L").getChild("1").getChild("y")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("_SRS").getChild("1").getChild("0").getChild("L").getChild("2").getChild("x")).setNumber(2);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("_SRS").getChild("1").getChild("0").getChild("L").getChild("2").getChild("y")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("_SRS").getChild("1").getChild("0").getChild("L").getChild("3").getChild("x")).setNumber(-(1));
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("_SRS").getChild("1").getChild("0").getChild("L").getChild("3").getChild("y")).setNumber(2);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("_SRS").getChild("1").getChild("0").getChild("L").getChild("4").getChild("x")).setNumber(2);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("_SRS").getChild("1").getChild("0").getChild("L").getChild("4").getChild("y")).setNumber(-(1));
}
}}

}


};gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("_Type")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("_Size")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("_GridX")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("_GridY")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("_SrsState")).setString("");
}
}}

}


{


gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
}


{



}


{


gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.eventsList1(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.eventsList2(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreated = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.eventsList3(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.onCreatedContext.GDObjectObjects3.length = 0;


return;
}
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.SetupTypeContext = {};
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.SetupTypeContext.GDObjectObjects1= [];
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.SetupTypeContext.GDObjectObjects2= [];


gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.SetupTypeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.SetupTypeContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.SetupTypeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.SetupTypeContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.SetupTypeContext.GDObjectObjects1[i].getVariables().get("_Type")).setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("type")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.SetupTypeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.SetupTypeContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.SetupTypeContext.GDObjectObjects1[i].getVariables().get("_Name")).setString(gdjs.evtsExt__TetrisUtils__Piece_GetName.func(runtimeScene, (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.SetupTypeContext.GDObjectObjects1[i].getVariables().get("_Type"))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.SetupTypeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.SetupTypeContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.SetupTypeContext.GDObjectObjects1[i].getVariables().get("_SrsType")).setString(gdjs.evtsExt__TetrisUtils__Piece_GetSrsType.func(runtimeScene, (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.SetupTypeContext.GDObjectObjects1[i].getVariables().get("_Type"))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.SetupTypeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.SetupTypeContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.SetupTypeContext.GDObjectObjects1[i].getVariables().get("_Size")).setNumber(gdjs.evtsExt__TetrisUtils__Piece_GetSize.func(runtimeScene, (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.SetupTypeContext.GDObjectObjects1[i].getVariables().get("_Type"))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.SetupTypeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.SetupTypeContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.SetupTypeContext.GDObjectObjects1[i].getVariables().get("_BlockCount")).setNumber(gdjs.evtsExt__TetrisUtils__Piece_GetBlockCount.func(runtimeScene, (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.SetupTypeContext.GDObjectObjects1[i].getVariables().get("_Type"))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.SetupTypeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.SetupTypeContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.SetupTypeContext.GDObjectObjects1[i].getVariables().get("_SrsState")).setString("0");
}
}}

}


};

gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.SetupType = function(type, parentEventsFunctionContext) {

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

gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.SetupTypeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.SetupTypeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.SetupTypeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.SetupTypeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.SetupTypeContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetNameContext = {};
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetNameContext.GDObjectObjects1= [];
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetNameContext.GDObjectObjects2= [];


gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetNameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetNameContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (gdjs.RuntimeObject.getVariableString(((gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetNameContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetNameContext.GDObjectObjects1[0].getVariables()).get("_Name"))); }}}

}


};

gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetName = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetNameContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetNameContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetNameContext.GDObjectObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSizeContext = {};
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSizeContext.GDObjectObjects1= [];
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSizeContext.GDObjectObjects2= [];


gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSizeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSizeContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSizeContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSizeContext.GDObjectObjects1[0].getVariables()).get("_Size"))); }}}

}


};

gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSize = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSizeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSizeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSizeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSizeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSizeContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetBlockCountContext = {};
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetBlockCountContext.GDObjectObjects1= [];
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetBlockCountContext.GDObjectObjects2= [];


gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetBlockCountContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetBlockCountContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetBlockCountContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetBlockCountContext.GDObjectObjects1[0].getVariables()).get("_BlockCount"))); }}}

}


};

gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetBlockCount = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetBlockCountContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetBlockCountContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetBlockCountContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetBlockCountContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetBlockCountContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.CenterAtCreationContext = {};
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.CenterAtCreationContext.GDObjectObjects1= [];
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.CenterAtCreationContext.GDObjectObjects2= [];


gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.CenterAtCreationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.CenterAtCreationContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.CenterAtCreationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.CenterAtCreationContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.CenterAtCreationContext.GDObjectObjects1[i].getVariables().get("_GridX")).setNumber(Math.round((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("_GridColumnCount")) - (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.CenterAtCreationContext.GDObjectObjects1[i].getVariables().get("_Size")))) / 2));
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.CenterAtCreationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.CenterAtCreationContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.CenterAtCreationContext.GDObjectObjects1[i].getVariables().get("_GridY")).setNumber(0);
}
}}

}


};

gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.CenterAtCreation = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.CenterAtCreationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.CenterAtCreationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.CenterAtCreationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.CenterAtCreationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.CenterAtCreationContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveLeftContext = {};
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveLeftContext.GDObjectObjects1= [];
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveLeftContext.GDObjectObjects2= [];


gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveLeftContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveLeftContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveLeftContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveLeftContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).MoveBy(-(1), 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveLeft = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveLeftContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveLeftContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveLeftContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveLeftContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveLeftContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveRightContext = {};
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveRightContext.GDObjectObjects1= [];
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveRightContext.GDObjectObjects2= [];


gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveRightContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveRightContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveRightContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveRightContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).MoveBy(1, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveRight = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveRightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveRightContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveRightContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveRightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveRightContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveDownContext = {};
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveDownContext.GDObjectObjects1= [];
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveDownContext.GDObjectObjects2= [];


gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveDownContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveDownContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveDownContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveDownContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).MoveBy(0, 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveDown = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveDownContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveDownContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveDownContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveDownContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveDownContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveDownByContext = {};
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveDownByContext.GDObjectObjects1= [];
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveDownByContext.GDObjectObjects2= [];


gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveDownByContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveDownByContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveDownByContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveDownByContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).MoveBy(0, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("yOffset")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveDownBy = function(yOffset, parentEventsFunctionContext) {

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
if (argName === "yOffset") return yOffset;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveDownByContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveDownByContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveDownByContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveDownByContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveDownByContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveByContext = {};
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveByContext.GDObjectObjects1= [];
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveByContext.GDObjectObjects2= [];


gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveByContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveByContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveByContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveByContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveByContext.GDObjectObjects1[i].getVariables().get("_GridX")).setNumber((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveByContext.GDObjectObjects1[i].getVariables().get("_GridX"))) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("xOffset")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveByContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveByContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveByContext.GDObjectObjects1[i].getVariables().get("_GridY")).setNumber((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveByContext.GDObjectObjects1[i].getVariables().get("_GridY"))) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("yOffset")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveByContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveByContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveByContext.GDObjectObjects1[i].getVariables().get("_IsMovedOrRotated")).setNumber(1);
}
}}

}


};

gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveBy = function(xOffset, yOffset, parentEventsFunctionContext) {

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
if (argName === "xOffset") return xOffset;
if (argName === "yOffset") return yOffset;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveByContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveByContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveByContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveByContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.MoveByContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.TurnSrsTypeContext = {};
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.TurnSrsTypeContext.GDObjectObjects1= [];
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.TurnSrsTypeContext.GDObjectObjects2= [];


gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.TurnSrsTypeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.TurnSrsTypeContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.TurnSrsTypeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.TurnSrsTypeContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.TurnSrsTypeContext.GDObjectObjects1[i].getVariables().get("_SrsState")).setString((gdjs.RuntimeObject.getVariableString(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.TurnSrsTypeContext.GDObjectObjects1[i].getVariables().get("_SRSTrans").getChild(gdjs.evtTools.common.toString((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("direction")) || 0 : 0))).getChild((gdjs.RuntimeObject.getVariableString(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.TurnSrsTypeContext.GDObjectObjects1[i].getVariables().get("_SrsState")))))));
}
}}

}


};

gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.TurnSrsType = function(direction, parentEventsFunctionContext) {

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
if (argName === "direction") return direction;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.TurnSrsTypeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.TurnSrsTypeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.TurnSrsTypeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.TurnSrsTypeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.TurnSrsTypeContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetGridXContext = {};
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetGridXContext.GDObjectObjects1= [];
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetGridXContext.GDObjectObjects2= [];


gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetGridXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetGridXContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetGridXContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetGridXContext.GDObjectObjects1[0].getVariables()).get("_GridX"))); }}}

}


};

gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetGridX = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetGridXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetGridXContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetGridXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetGridXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetGridXContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetGridYContext = {};
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetGridYContext.GDObjectObjects1= [];
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetGridYContext.GDObjectObjects2= [];


gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetGridYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetGridYContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetGridYContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetGridYContext.GDObjectObjects1[0].getVariables()).get("_GridY"))); }}}

}


};

gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetGridY = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetGridYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetGridYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetGridYContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetGridYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetGridYContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsTestCountContext = {};
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsTestCountContext.GDObjectObjects1= [];
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsTestCountContext.GDObjectObjects2= [];


gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsTestCountContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsTestCountContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsTestCountContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsTestCountContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsTestCountContext.GDObjectObjects1[i].getVariables().get("_NextState")).setString((gdjs.RuntimeObject.getVariableString(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsTestCountContext.GDObjectObjects1[i].getVariables().get("_SRSTrans").getChild(gdjs.evtTools.common.toString((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("direction")) || 0 : 0))).getChild((gdjs.RuntimeObject.getVariableString(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsTestCountContext.GDObjectObjects1[i].getVariables().get("_SrsState")))))));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsTestCountContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (gdjs.RuntimeObject.getVariableChildCount(((gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsTestCountContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsTestCountContext.GDObjectObjects1[0].getVariables()).get("_SRS").getChild((gdjs.RuntimeObject.getVariableString(((gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsTestCountContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsTestCountContext.GDObjectObjects1[0].getVariables()).get("_SrsType")))).getChild((gdjs.RuntimeObject.getVariableString(((gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsTestCountContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsTestCountContext.GDObjectObjects1[0].getVariables()).get("_SrsState")))).getChild((gdjs.RuntimeObject.getVariableString(((gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsTestCountContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsTestCountContext.GDObjectObjects1[0].getVariables()).get("_NextState")))))); }}}

}


};

gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsTestCount = function(direction, parentEventsFunctionContext) {

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
if (argName === "direction") return direction;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsTestCountContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsTestCountContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsTestCountContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsTestCountContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsTestCountContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsOffsetXContext = {};
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsOffsetXContext.GDObjectObjects1= [];
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsOffsetXContext.GDObjectObjects2= [];


gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsOffsetXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsOffsetXContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsOffsetXContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsOffsetXContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsOffsetXContext.GDObjectObjects1[i].getVariables().get("_NextState")).setString((gdjs.RuntimeObject.getVariableString(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsOffsetXContext.GDObjectObjects1[i].getVariables().get("_SRSTrans").getChild(gdjs.evtTools.common.toString((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("direction")) || 0 : 0))).getChild((gdjs.RuntimeObject.getVariableString(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsOffsetXContext.GDObjectObjects1[i].getVariables().get("_SrsState")))))));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsOffsetXContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsOffsetXContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsOffsetXContext.GDObjectObjects1[0].getVariables()).get("_SRS").getChild((gdjs.RuntimeObject.getVariableString(((gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsOffsetXContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsOffsetXContext.GDObjectObjects1[0].getVariables()).get("_SrsType")))).getChild((gdjs.RuntimeObject.getVariableString(((gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsOffsetXContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsOffsetXContext.GDObjectObjects1[0].getVariables()).get("_SrsState")))).getChild((gdjs.RuntimeObject.getVariableString(((gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsOffsetXContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsOffsetXContext.GDObjectObjects1[0].getVariables()).get("_NextState")))).getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("test") : "")).getChild("x"))); }}}

}


};

gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsOffsetX = function(direction, test, parentEventsFunctionContext) {

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
if (argName === "direction") return direction;
if (argName === "test") return test;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsOffsetXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsOffsetXContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsOffsetXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsOffsetXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsOffsetXContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsOffsetYContext = {};
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsOffsetYContext.GDObjectObjects1= [];
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsOffsetYContext.GDObjectObjects2= [];


gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsOffsetYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsOffsetYContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsOffsetYContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsOffsetYContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsOffsetYContext.GDObjectObjects1[i].getVariables().get("_NextState")).setString((gdjs.RuntimeObject.getVariableString(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsOffsetYContext.GDObjectObjects1[i].getVariables().get("_SRSTrans").getChild(gdjs.evtTools.common.toString((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("direction")) || 0 : 0))).getChild((gdjs.RuntimeObject.getVariableString(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsOffsetYContext.GDObjectObjects1[i].getVariables().get("_SrsState")))))));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsOffsetYContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsOffsetYContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsOffsetYContext.GDObjectObjects1[0].getVariables()).get("_SRS").getChild((gdjs.RuntimeObject.getVariableString(((gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsOffsetYContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsOffsetYContext.GDObjectObjects1[0].getVariables()).get("_SrsType")))).getChild((gdjs.RuntimeObject.getVariableString(((gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsOffsetYContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsOffsetYContext.GDObjectObjects1[0].getVariables()).get("_SrsState")))).getChild((gdjs.RuntimeObject.getVariableString(((gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsOffsetYContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsOffsetYContext.GDObjectObjects1[0].getVariables()).get("_NextState")))).getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("test") : "")).getChild("y"))); }}}

}


};

gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsOffsetY = function(direction, test, parentEventsFunctionContext) {

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
if (argName === "direction") return direction;
if (argName === "test") return test;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsOffsetYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsOffsetYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsOffsetYContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsOffsetYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.GetSrsOffsetYContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.SetMovedOrRotatedContext = {};
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.SetMovedOrRotatedContext.GDObjectObjects1= [];
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.SetMovedOrRotatedContext.GDObjectObjects2= [];


gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.SetMovedOrRotatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.SetMovedOrRotatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.SetMovedOrRotatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.SetMovedOrRotatedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.SetMovedOrRotatedContext.GDObjectObjects1[i].getVariables().get("_IsMovedOrRotated")).setNumber(1);
}
}}

}


};

gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.SetMovedOrRotated = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.SetMovedOrRotatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.SetMovedOrRotatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.SetMovedOrRotatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.SetMovedOrRotatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.SetMovedOrRotatedContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.ResetMovedOrRotatedContext = {};
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.ResetMovedOrRotatedContext.GDObjectObjects1= [];
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.ResetMovedOrRotatedContext.GDObjectObjects2= [];


gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.ResetMovedOrRotatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.ResetMovedOrRotatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.ResetMovedOrRotatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.ResetMovedOrRotatedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.ResetMovedOrRotatedContext.GDObjectObjects1[i].getVariables().get("_IsMovedOrRotated")).setNumber(0);
}
}}

}


};

gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.ResetMovedOrRotated = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.ResetMovedOrRotatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.ResetMovedOrRotatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.ResetMovedOrRotatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.ResetMovedOrRotatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.ResetMovedOrRotatedContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.IsMovedOrRotatedContext = {};
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.IsMovedOrRotatedContext.GDObjectObjects1= [];
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.IsMovedOrRotatedContext.GDObjectObjects2= [];


gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.IsMovedOrRotatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.IsMovedOrRotatedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.IsMovedOrRotatedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.IsMovedOrRotatedContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.IsMovedOrRotatedContext.GDObjectObjects1[i].getVariables().get("_IsMovedOrRotated")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.IsMovedOrRotatedContext.GDObjectObjects1[k] = gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.IsMovedOrRotatedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.IsMovedOrRotatedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.IsMovedOrRotated = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.IsMovedOrRotatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.IsMovedOrRotatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.IsMovedOrRotatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.IsMovedOrRotatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.IsMovedOrRotatedContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("TetrisUtils::TetrisPiece", gdjs.evtsExt__TetrisUtils__TetrisPiece.TetrisPiece);
