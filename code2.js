gdjs.gameoverCode = {};
gdjs.gameoverCode.GDalien1Objects1= [];
gdjs.gameoverCode.GDalien1Objects2= [];
gdjs.gameoverCode.GDalien2Objects1= [];
gdjs.gameoverCode.GDalien2Objects2= [];
gdjs.gameoverCode.GDGameoverObjects1= [];
gdjs.gameoverCode.GDGameoverObjects2= [];
gdjs.gameoverCode.GDreplayObjects1= [];
gdjs.gameoverCode.GDreplayObjects2= [];

gdjs.gameoverCode.conditionTrue_0 = {val:false};
gdjs.gameoverCode.condition0IsTrue_0 = {val:false};
gdjs.gameoverCode.condition1IsTrue_0 = {val:false};


gdjs.gameoverCode.eventsList0xaff48 = function(runtimeScene) {

{


gdjs.gameoverCode.condition0IsTrue_0.val = false;
{
gdjs.gameoverCode.condition0IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}if (gdjs.gameoverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "gra", false);
}}

}


}; //End of gdjs.gameoverCode.eventsList0xaff48


gdjs.gameoverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.gameoverCode.GDalien1Objects1.length = 0;
gdjs.gameoverCode.GDalien1Objects2.length = 0;
gdjs.gameoverCode.GDalien2Objects1.length = 0;
gdjs.gameoverCode.GDalien2Objects2.length = 0;
gdjs.gameoverCode.GDGameoverObjects1.length = 0;
gdjs.gameoverCode.GDGameoverObjects2.length = 0;
gdjs.gameoverCode.GDreplayObjects1.length = 0;
gdjs.gameoverCode.GDreplayObjects2.length = 0;

gdjs.gameoverCode.eventsList0xaff48(runtimeScene);
return;
}
gdjs['gameoverCode'] = gdjs.gameoverCode;
