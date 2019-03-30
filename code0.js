gdjs.menuCode = {};
gdjs.menuCode.GDalien1Objects1= [];
gdjs.menuCode.GDalien1Objects2= [];
gdjs.menuCode.GDalien2Objects1= [];
gdjs.menuCode.GDalien2Objects2= [];
gdjs.menuCode.GDLorObjects1= [];
gdjs.menuCode.GDLorObjects2= [];
gdjs.menuCode.GDTextlorObjects1= [];
gdjs.menuCode.GDTextlorObjects2= [];
gdjs.menuCode.GDStartObjects1= [];
gdjs.menuCode.GDStartObjects2= [];

gdjs.menuCode.conditionTrue_0 = {val:false};
gdjs.menuCode.condition0IsTrue_0 = {val:false};
gdjs.menuCode.condition1IsTrue_0 = {val:false};


gdjs.menuCode.eventsList0xaff48 = function(runtimeScene) {

{


gdjs.menuCode.condition0IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}if (gdjs.menuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "gra", false);
}}

}


}; //End of gdjs.menuCode.eventsList0xaff48


gdjs.menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.menuCode.GDalien1Objects1.length = 0;
gdjs.menuCode.GDalien1Objects2.length = 0;
gdjs.menuCode.GDalien2Objects1.length = 0;
gdjs.menuCode.GDalien2Objects2.length = 0;
gdjs.menuCode.GDLorObjects1.length = 0;
gdjs.menuCode.GDLorObjects2.length = 0;
gdjs.menuCode.GDTextlorObjects1.length = 0;
gdjs.menuCode.GDTextlorObjects2.length = 0;
gdjs.menuCode.GDStartObjects1.length = 0;
gdjs.menuCode.GDStartObjects2.length = 0;

gdjs.menuCode.eventsList0xaff48(runtimeScene);
return;
}
gdjs['menuCode'] = gdjs.menuCode;
