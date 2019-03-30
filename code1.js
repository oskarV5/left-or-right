gdjs.graCode = {};
gdjs.graCode.GDalien1Objects1= [];
gdjs.graCode.GDalien1Objects2= [];
gdjs.graCode.GDalien1Objects3= [];
gdjs.graCode.GDalien2Objects1= [];
gdjs.graCode.GDalien2Objects2= [];
gdjs.graCode.GDalien2Objects3= [];
gdjs.graCode.GDPlayerObjects1= [];
gdjs.graCode.GDPlayerObjects2= [];
gdjs.graCode.GDPlayerObjects3= [];
gdjs.graCode.GDpunktyObjects1= [];
gdjs.graCode.GDpunktyObjects2= [];
gdjs.graCode.GDpunktyObjects3= [];

gdjs.graCode.conditionTrue_0 = {val:false};
gdjs.graCode.condition0IsTrue_0 = {val:false};
gdjs.graCode.condition1IsTrue_0 = {val:false};
gdjs.graCode.condition2IsTrue_0 = {val:false};


gdjs.graCode.mapOfGDgdjs_46graCode_46GDalien1Objects1Objects = Hashtable.newFrom({"alien1": gdjs.graCode.GDalien1Objects1});gdjs.graCode.mapOfGDgdjs_46graCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.graCode.GDPlayerObjects1});gdjs.graCode.mapOfGDgdjs_46graCode_46GDalien1Objects1Objects = Hashtable.newFrom({"alien1": gdjs.graCode.GDalien1Objects1});gdjs.graCode.eventsList0x675698 = function(runtimeScene) {

{

gdjs.graCode.GDPlayerObjects2.createFrom(gdjs.graCode.GDPlayerObjects1);

gdjs.graCode.GDalien1Objects2.createFrom(gdjs.graCode.GDalien1Objects1);


gdjs.graCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.graCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.graCode.GDPlayerObjects2[i].getX() == (( gdjs.graCode.GDalien1Objects2.length === 0 ) ? 0 :gdjs.graCode.GDalien1Objects2[0].getX())+100 ) {
        gdjs.graCode.condition0IsTrue_0.val = true;
        gdjs.graCode.GDPlayerObjects2[k] = gdjs.graCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.graCode.GDPlayerObjects2.length = k;}if (gdjs.graCode.condition0IsTrue_0.val) {
/* Reuse gdjs.graCode.GDalien1Objects2 */
{for(var i = 0, len = gdjs.graCode.GDalien1Objects2.length ;i < len;++i) {
    gdjs.graCode.GDalien1Objects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(0).add(1);
}}

}


{

gdjs.graCode.GDPlayerObjects2.createFrom(gdjs.graCode.GDPlayerObjects1);

gdjs.graCode.GDalien1Objects2.createFrom(gdjs.graCode.GDalien1Objects1);


gdjs.graCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.graCode.GDalien1Objects2.length;i<l;++i) {
    if ( gdjs.graCode.GDalien1Objects2[i].getX() == (( gdjs.graCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.graCode.GDPlayerObjects2[0].getX())+100 ) {
        gdjs.graCode.condition0IsTrue_0.val = true;
        gdjs.graCode.GDalien1Objects2[k] = gdjs.graCode.GDalien1Objects2[i];
        ++k;
    }
}
gdjs.graCode.GDalien1Objects2.length = k;}if (gdjs.graCode.condition0IsTrue_0.val) {
/* Reuse gdjs.graCode.GDalien1Objects2 */
{for(var i = 0, len = gdjs.graCode.GDalien1Objects2.length ;i < len;++i) {
    gdjs.graCode.GDalien1Objects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(0).add(1);
}}

}


{

gdjs.graCode.GDPlayerObjects2.createFrom(gdjs.graCode.GDPlayerObjects1);

gdjs.graCode.GDalien1Objects2.createFrom(gdjs.graCode.GDalien1Objects1);


gdjs.graCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.graCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.graCode.GDPlayerObjects2[i].getY() == (( gdjs.graCode.GDalien1Objects2.length === 0 ) ? 0 :gdjs.graCode.GDalien1Objects2[0].getY())+100 ) {
        gdjs.graCode.condition0IsTrue_0.val = true;
        gdjs.graCode.GDPlayerObjects2[k] = gdjs.graCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.graCode.GDPlayerObjects2.length = k;}if (gdjs.graCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "gameover", false);
}}

}


{



}


{



}


}; //End of gdjs.graCode.eventsList0x675698
gdjs.graCode.mapOfGDgdjs_46graCode_46GDalien2Objects2Objects = Hashtable.newFrom({"alien2": gdjs.graCode.GDalien2Objects2});gdjs.graCode.eventsList0x677688 = function(runtimeScene) {

{


gdjs.graCode.condition0IsTrue_0.val = false;
{
gdjs.graCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "Atak_alien2");
}if (gdjs.graCode.condition0IsTrue_0.val) {
gdjs.graCode.GDalien2Objects2.createFrom(gdjs.graCode.GDalien2Objects1);

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.graCode.mapOfGDgdjs_46graCode_46GDalien2Objects2Objects, gdjs.random(400), 800, "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Atak_alien2");
}}

}


{



}


}; //End of gdjs.graCode.eventsList0x677688
gdjs.graCode.mapOfGDgdjs_46graCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.graCode.GDPlayerObjects1});gdjs.graCode.mapOfGDgdjs_46graCode_46GDalien2Objects1Objects = Hashtable.newFrom({"alien2": gdjs.graCode.GDalien2Objects1});gdjs.graCode.eventsList0x65b138 = function(runtimeScene) {

{

gdjs.graCode.GDPlayerObjects2.createFrom(gdjs.graCode.GDPlayerObjects1);

gdjs.graCode.GDalien2Objects2.createFrom(gdjs.graCode.GDalien2Objects1);


gdjs.graCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.graCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.graCode.GDPlayerObjects2[i].getX() == (( gdjs.graCode.GDalien2Objects2.length === 0 ) ? 0 :gdjs.graCode.GDalien2Objects2[0].getX())+100 ) {
        gdjs.graCode.condition0IsTrue_0.val = true;
        gdjs.graCode.GDPlayerObjects2[k] = gdjs.graCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.graCode.GDPlayerObjects2.length = k;}if (gdjs.graCode.condition0IsTrue_0.val) {
/* Reuse gdjs.graCode.GDalien2Objects2 */
{for(var i = 0, len = gdjs.graCode.GDalien2Objects2.length ;i < len;++i) {
    gdjs.graCode.GDalien2Objects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(0).add(1);
}}

}


{

gdjs.graCode.GDPlayerObjects2.createFrom(gdjs.graCode.GDPlayerObjects1);

gdjs.graCode.GDalien2Objects2.createFrom(gdjs.graCode.GDalien2Objects1);


gdjs.graCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.graCode.GDalien2Objects2.length;i<l;++i) {
    if ( gdjs.graCode.GDalien2Objects2[i].getX() == (( gdjs.graCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.graCode.GDPlayerObjects2[0].getX())+100 ) {
        gdjs.graCode.condition0IsTrue_0.val = true;
        gdjs.graCode.GDalien2Objects2[k] = gdjs.graCode.GDalien2Objects2[i];
        ++k;
    }
}
gdjs.graCode.GDalien2Objects2.length = k;}if (gdjs.graCode.condition0IsTrue_0.val) {
/* Reuse gdjs.graCode.GDalien2Objects2 */
{for(var i = 0, len = gdjs.graCode.GDalien2Objects2.length ;i < len;++i) {
    gdjs.graCode.GDalien2Objects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(0).add(1);
}}

}


{

gdjs.graCode.GDPlayerObjects2.createFrom(gdjs.graCode.GDPlayerObjects1);

gdjs.graCode.GDalien2Objects2.createFrom(gdjs.graCode.GDalien2Objects1);


gdjs.graCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.graCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.graCode.GDPlayerObjects2[i].getY() == (( gdjs.graCode.GDalien2Objects2.length === 0 ) ? 0 :gdjs.graCode.GDalien2Objects2[0].getY())-100 ) {
        gdjs.graCode.condition0IsTrue_0.val = true;
        gdjs.graCode.GDPlayerObjects2[k] = gdjs.graCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.graCode.GDPlayerObjects2.length = k;}if (gdjs.graCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "gameover", false);
}}

}


{



}


}; //End of gdjs.graCode.eventsList0x65b138
gdjs.graCode.eventsList0xaff48 = function(runtimeScene) {

{



}


{


gdjs.graCode.condition0IsTrue_0.val = false;
{
gdjs.graCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.graCode.condition0IsTrue_0.val) {
gdjs.graCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.graCode.GDalien1Objects1.createFrom(runtimeScene.getObjects("alien1"));
gdjs.graCode.GDalien2Objects1.createFrom(runtimeScene.getObjects("alien2"));
{for(var i = 0, len = gdjs.graCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.graCode.GDPlayerObjects1[i].setPosition(245,360);
}
}{for(var i = 0, len = gdjs.graCode.GDalien1Objects1.length ;i < len;++i) {
    gdjs.graCode.GDalien1Objects1[i].setPosition(gdjs.random(400),0);
}
}{for(var i = 0, len = gdjs.graCode.GDalien2Objects1.length ;i < len;++i) {
    gdjs.graCode.GDalien2Objects1[i].setPosition(gdjs.random(400),800);
}
}{for(var i = 0, len = gdjs.graCode.GDalien2Objects1.length ;i < len;++i) {
    gdjs.graCode.GDalien2Objects1[i].hide();
}
}}

}


{



}


{



}


{


{
gdjs.graCode.GDpunktyObjects1.createFrom(runtimeScene.getObjects("punkty"));
{for(var i = 0, len = gdjs.graCode.GDpunktyObjects1.length ;i < len;++i) {
    gdjs.graCode.GDpunktyObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}
}}

}


{



}


{



}


{

gdjs.graCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.graCode.condition0IsTrue_0.val = false;
gdjs.graCode.condition1IsTrue_0.val = false;
{
gdjs.graCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if ( gdjs.graCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.graCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.graCode.GDPlayerObjects1[i].getX() <= 480 ) {
        gdjs.graCode.condition1IsTrue_0.val = true;
        gdjs.graCode.GDPlayerObjects1[k] = gdjs.graCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.graCode.GDPlayerObjects1.length = k;}}
if (gdjs.graCode.condition1IsTrue_0.val) {
/* Reuse gdjs.graCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.graCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.graCode.GDPlayerObjects1[i].addPolarForce(0, 240, 0);
}
}}

}


{

gdjs.graCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.graCode.condition0IsTrue_0.val = false;
gdjs.graCode.condition1IsTrue_0.val = false;
{
gdjs.graCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if ( gdjs.graCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.graCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.graCode.GDPlayerObjects1[i].getX() >= 0 ) {
        gdjs.graCode.condition1IsTrue_0.val = true;
        gdjs.graCode.GDPlayerObjects1[k] = gdjs.graCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.graCode.GDPlayerObjects1.length = k;}}
if (gdjs.graCode.condition1IsTrue_0.val) {
/* Reuse gdjs.graCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.graCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.graCode.GDPlayerObjects1[i].addPolarForce(180, 240, 0);
}
}}

}


{


gdjs.graCode.condition0IsTrue_0.val = false;
{
gdjs.graCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "p");
}if (gdjs.graCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{



}


{


{
}

}


{



}


{


gdjs.graCode.condition0IsTrue_0.val = false;
{
gdjs.graCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "Atak_alien");
}if (gdjs.graCode.condition0IsTrue_0.val) {
gdjs.graCode.GDalien1Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.graCode.mapOfGDgdjs_46graCode_46GDalien1Objects1Objects, gdjs.random(400), 0, "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Atak_alien");
}}

}


{


{
gdjs.graCode.GDalien1Objects1.createFrom(runtimeScene.getObjects("alien1"));
{for(var i = 0, len = gdjs.graCode.GDalien1Objects1.length ;i < len;++i) {
    gdjs.graCode.GDalien1Objects1[i].addPolarForce(90, 200, 0);
}
}}

}


{

gdjs.graCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.graCode.GDalien1Objects1.createFrom(runtimeScene.getObjects("alien1"));

gdjs.graCode.condition0IsTrue_0.val = false;
{
gdjs.graCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.graCode.mapOfGDgdjs_46graCode_46GDPlayerObjects1Objects, gdjs.graCode.mapOfGDgdjs_46graCode_46GDalien1Objects1Objects, false, runtimeScene);
}if (gdjs.graCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.graCode.eventsList0x675698(runtimeScene);} //End of subevents
}

}


{


gdjs.graCode.condition0IsTrue_0.val = false;
{
gdjs.graCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) > 5;
}if (gdjs.graCode.condition0IsTrue_0.val) {
gdjs.graCode.GDalien2Objects1.createFrom(runtimeScene.getObjects("alien2"));
{for(var i = 0, len = gdjs.graCode.GDalien2Objects1.length ;i < len;++i) {
    gdjs.graCode.GDalien2Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.graCode.GDalien2Objects1.length ;i < len;++i) {
    gdjs.graCode.GDalien2Objects1[i].addPolarForce(270, 200, 0);
}
}
{ //Subevents
gdjs.graCode.eventsList0x677688(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.graCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.graCode.GDalien2Objects1.createFrom(runtimeScene.getObjects("alien2"));

gdjs.graCode.condition0IsTrue_0.val = false;
{
gdjs.graCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.graCode.mapOfGDgdjs_46graCode_46GDPlayerObjects1Objects, gdjs.graCode.mapOfGDgdjs_46graCode_46GDalien2Objects1Objects, false, runtimeScene);
}if (gdjs.graCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.graCode.eventsList0x65b138(runtimeScene);} //End of subevents
}

}


{


{
}

}


}; //End of gdjs.graCode.eventsList0xaff48


gdjs.graCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.graCode.GDalien1Objects1.length = 0;
gdjs.graCode.GDalien1Objects2.length = 0;
gdjs.graCode.GDalien1Objects3.length = 0;
gdjs.graCode.GDalien2Objects1.length = 0;
gdjs.graCode.GDalien2Objects2.length = 0;
gdjs.graCode.GDalien2Objects3.length = 0;
gdjs.graCode.GDPlayerObjects1.length = 0;
gdjs.graCode.GDPlayerObjects2.length = 0;
gdjs.graCode.GDPlayerObjects3.length = 0;
gdjs.graCode.GDpunktyObjects1.length = 0;
gdjs.graCode.GDpunktyObjects2.length = 0;
gdjs.graCode.GDpunktyObjects3.length = 0;

gdjs.graCode.eventsList0xaff48(runtimeScene);
return;
}
gdjs['graCode'] = gdjs.graCode;
