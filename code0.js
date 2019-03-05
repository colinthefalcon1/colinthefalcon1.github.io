gdjs.melCode = {};
gdjs.melCode.GDWazowskiObjects1= [];
gdjs.melCode.GDWazowskiObjects2= [];
gdjs.melCode.GDMelObjects1= [];
gdjs.melCode.GDMelObjects2= [];
gdjs.melCode.GDFloorObjects1= [];
gdjs.melCode.GDFloorObjects2= [];

gdjs.melCode.conditionTrue_0 = {val:false};
gdjs.melCode.condition0IsTrue_0 = {val:false};


gdjs.melCode.eventsList0xb0cf8 = function(runtimeScene) {

{


{
gdjs.melCode.GDWazowskiObjects1.createFrom(runtimeScene.getObjects("Wazowski"));
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.melCode.GDWazowskiObjects1.length !== 0 ? gdjs.melCode.GDWazowskiObjects1[0] : null), true, "", 0);
}}

}


}; //End of gdjs.melCode.eventsList0xb0cf8


gdjs.melCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.melCode.GDWazowskiObjects1.length = 0;
gdjs.melCode.GDWazowskiObjects2.length = 0;
gdjs.melCode.GDMelObjects1.length = 0;
gdjs.melCode.GDMelObjects2.length = 0;
gdjs.melCode.GDFloorObjects1.length = 0;
gdjs.melCode.GDFloorObjects2.length = 0;

gdjs.melCode.eventsList0xb0cf8(runtimeScene);
return;
}
gdjs['melCode'] = gdjs.melCode;
