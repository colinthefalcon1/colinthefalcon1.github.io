gdjs.NewSceneCode = {};
gdjs.NewSceneCode.forEachIndex2 = 0;

gdjs.NewSceneCode.forEachObjects2 = [];

gdjs.NewSceneCode.forEachTemporary2 = null;

gdjs.NewSceneCode.forEachTotalCount2 = 0;

gdjs.NewSceneCode.GDFloorObjects1= [];
gdjs.NewSceneCode.GDFloorObjects2= [];
gdjs.NewSceneCode.GDPlayerObjects1= [];
gdjs.NewSceneCode.GDPlayerObjects2= [];
gdjs.NewSceneCode.GDJumpTObjects1= [];
gdjs.NewSceneCode.GDJumpTObjects2= [];
gdjs.NewSceneCode.GDCoinObjects1= [];
gdjs.NewSceneCode.GDCoinObjects2= [];
gdjs.NewSceneCode.GDScoreObjects1= [];
gdjs.NewSceneCode.GDScoreObjects2= [];
gdjs.NewSceneCode.GDEnemyObjects1= [];
gdjs.NewSceneCode.GDEnemyObjects2= [];
gdjs.NewSceneCode.GDleftObjects1= [];
gdjs.NewSceneCode.GDleftObjects2= [];
gdjs.NewSceneCode.GDrightObjects1= [];
gdjs.NewSceneCode.GDrightObjects2= [];
gdjs.NewSceneCode.GDDeathsObjects1= [];
gdjs.NewSceneCode.GDDeathsObjects2= [];
gdjs.NewSceneCode.GDWinObjects1= [];
gdjs.NewSceneCode.GDWinObjects2= [];
gdjs.NewSceneCode.GDTimerObjects1= [];
gdjs.NewSceneCode.GDTimerObjects2= [];
gdjs.NewSceneCode.GDWinnerObjects1= [];
gdjs.NewSceneCode.GDWinnerObjects2= [];
gdjs.NewSceneCode.GDPhilObjects1= [];
gdjs.NewSceneCode.GDPhilObjects2= [];
gdjs.NewSceneCode.GDStopPhilObjects1= [];
gdjs.NewSceneCode.GDStopPhilObjects2= [];
gdjs.NewSceneCode.GDMrCleanObjects1= [];
gdjs.NewSceneCode.GDMrCleanObjects2= [];
gdjs.NewSceneCode.GDloss2Objects1= [];
gdjs.NewSceneCode.GDloss2Objects2= [];
gdjs.NewSceneCode.GDloss1Objects1= [];
gdjs.NewSceneCode.GDloss1Objects2= [];
gdjs.NewSceneCode.GDPortal1Objects1= [];
gdjs.NewSceneCode.GDPortal1Objects2= [];
gdjs.NewSceneCode.GDPortal1ExitObjects1= [];
gdjs.NewSceneCode.GDPortal1ExitObjects2= [];
gdjs.NewSceneCode.GDPortal2Objects1= [];
gdjs.NewSceneCode.GDPortal2Objects2= [];
gdjs.NewSceneCode.GDPortal2ExitObjects1= [];
gdjs.NewSceneCode.GDPortal2ExitObjects2= [];
gdjs.NewSceneCode.GDPortal3Objects1= [];
gdjs.NewSceneCode.GDPortal3Objects2= [];
gdjs.NewSceneCode.GDPortal3ExitObjects1= [];
gdjs.NewSceneCode.GDPortal3ExitObjects2= [];
gdjs.NewSceneCode.GDSecObjects1= [];
gdjs.NewSceneCode.GDSecObjects2= [];

gdjs.NewSceneCode.conditionTrue_0 = {val:false};
gdjs.NewSceneCode.condition0IsTrue_0 = {val:false};
gdjs.NewSceneCode.condition1IsTrue_0 = {val:false};
gdjs.NewSceneCode.condition2IsTrue_0 = {val:false};
gdjs.NewSceneCode.condition3IsTrue_0 = {val:false};


gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.NewSceneCode.GDPlayerObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDCoinObjects1Objects = Hashtable.newFrom({"Coin": gdjs.NewSceneCode.GDCoinObjects1});gdjs.NewSceneCode.eventsList0x8482d4 = function(runtimeScene) {

}; //End of gdjs.NewSceneCode.eventsList0x8482d4
gdjs.NewSceneCode.eventsList0x6fbe6c = function(runtimeScene) {

{

/* Reuse gdjs.NewSceneCode.GDCoinObjects1 */

for(gdjs.NewSceneCode.forEachIndex2 = 0;gdjs.NewSceneCode.forEachIndex2 < gdjs.NewSceneCode.GDCoinObjects1.length;++gdjs.NewSceneCode.forEachIndex2) {
gdjs.NewSceneCode.GDCoinObjects2.length = 0;


gdjs.NewSceneCode.forEachTemporary2 = gdjs.NewSceneCode.GDCoinObjects1[gdjs.NewSceneCode.forEachIndex2];
gdjs.NewSceneCode.GDCoinObjects2.push(gdjs.NewSceneCode.forEachTemporary2);
if (true) {
{for(var i = 0, len = gdjs.NewSceneCode.GDCoinObjects2.length ;i < len;++i) {
    gdjs.NewSceneCode.GDCoinObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(10);
}}
}

}


}; //End of gdjs.NewSceneCode.eventsList0x6fbe6c
gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.NewSceneCode.GDEnemyObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDrightObjects1Objects = Hashtable.newFrom({"right": gdjs.NewSceneCode.GDrightObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.NewSceneCode.GDEnemyObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDleftObjects1Objects = Hashtable.newFrom({"left": gdjs.NewSceneCode.GDleftObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.NewSceneCode.GDPlayerObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.NewSceneCode.GDEnemyObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.NewSceneCode.GDPlayerObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.NewSceneCode.GDEnemyObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.NewSceneCode.GDPlayerObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDWinnerObjects1Objects = Hashtable.newFrom({"Winner": gdjs.NewSceneCode.GDWinnerObjects1});gdjs.NewSceneCode.eventsList0x6fe2e4 = function(runtimeScene) {

{



}


}; //End of gdjs.NewSceneCode.eventsList0x6fe2e4
gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPhilObjects1Objects = Hashtable.newFrom({"Phil": gdjs.NewSceneCode.GDPhilObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.NewSceneCode.GDPlayerObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPhilObjects1Objects = Hashtable.newFrom({"Phil": gdjs.NewSceneCode.GDPhilObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDJumpTObjects1Objects = Hashtable.newFrom({"JumpT": gdjs.NewSceneCode.GDJumpTObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPhilObjects1Objects = Hashtable.newFrom({"Phil": gdjs.NewSceneCode.GDPhilObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.NewSceneCode.GDEnemyObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPhilObjects1Objects = Hashtable.newFrom({"Phil": gdjs.NewSceneCode.GDPhilObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDStopPhilObjects1Objects = Hashtable.newFrom({"StopPhil": gdjs.NewSceneCode.GDStopPhilObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDMrCleanObjects1Objects = Hashtable.newFrom({"MrClean": gdjs.NewSceneCode.GDMrCleanObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.NewSceneCode.GDPlayerObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDMrCleanObjects1Objects = Hashtable.newFrom({"MrClean": gdjs.NewSceneCode.GDMrCleanObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDStopPhilObjects1Objects = Hashtable.newFrom({"StopPhil": gdjs.NewSceneCode.GDStopPhilObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.NewSceneCode.GDPlayerObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPortal1Objects1Objects = Hashtable.newFrom({"Portal1": gdjs.NewSceneCode.GDPortal1Objects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.NewSceneCode.GDPlayerObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPortal2Objects1Objects = Hashtable.newFrom({"Portal2": gdjs.NewSceneCode.GDPortal2Objects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.NewSceneCode.GDPlayerObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPortal3Objects1Objects = Hashtable.newFrom({"Portal3": gdjs.NewSceneCode.GDPortal3Objects1});gdjs.NewSceneCode.eventsList0xb4a60 = function(runtimeScene) {

{


{
gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.NewSceneCode.GDPlayerObjects1.length !== 0 ? gdjs.NewSceneCode.GDPlayerObjects1[0] : null), false, "", 0);
}}

}


{

gdjs.NewSceneCode.GDCoinObjects1.createFrom(runtimeScene.getObjects("Coin"));
gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDCoinObjects1Objects, false, runtimeScene, false);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.NewSceneCode.eventsList0x6fbe6c(runtimeScene);} //End of subevents
}

}


{


{
gdjs.NewSceneCode.GDDeathsObjects1.createFrom(runtimeScene.getObjects("Deaths"));
gdjs.NewSceneCode.GDScoreObjects1.createFrom(runtimeScene.getObjects("Score"));
gdjs.NewSceneCode.GDTimerObjects1.createFrom(runtimeScene.getObjects("Timer"));
{for(var i = 0, len = gdjs.NewSceneCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDScoreObjects1[i].setString("Score : " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDDeathsObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDDeathsObjects1[i].setString("Deaths: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Deaths")));
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDTimerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDTimerObjects1[i].setString("" + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("GTimer4")));
}
}}

}


{

gdjs.NewSceneCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));
gdjs.NewSceneCode.GDrightObjects1.createFrom(runtimeScene.getObjects("right"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDEnemyObjects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDrightObjects1Objects, false, runtimeScene, false);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDEnemyObjects1[i].returnVariable(gdjs.NewSceneCode.GDEnemyObjects1[i].getVariables().getFromIndex(0)).setString("right");
}
}}

}


{

gdjs.NewSceneCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));
gdjs.NewSceneCode.GDleftObjects1.createFrom(runtimeScene.getObjects("left"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDEnemyObjects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDleftObjects1Objects, false, runtimeScene, false);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDEnemyObjects1[i].returnVariable(gdjs.NewSceneCode.GDEnemyObjects1[i].getVariables().getFromIndex(0)).setString("left");
}
}}

}


{

gdjs.NewSceneCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDEnemyObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDEnemyObjects1[i].getVariableString(gdjs.NewSceneCode.GDEnemyObjects1[i].getVariables().getFromIndex(0)) == "left" ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDEnemyObjects1[k] = gdjs.NewSceneCode.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDEnemyObjects1.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDEnemyObjects1[i].addPolarForce(180, 100, 0);
}
}}

}


{

gdjs.NewSceneCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDEnemyObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDEnemyObjects1[i].getVariableString(gdjs.NewSceneCode.GDEnemyObjects1[i].getVariables().getFromIndex(0)) == "right" ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDEnemyObjects1[k] = gdjs.NewSceneCode.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDEnemyObjects1.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDEnemyObjects1[i].addPolarForce(0, 100, 0);
}
}}

}


{

gdjs.NewSceneCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));
gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
gdjs.NewSceneCode.condition2IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDEnemyObjects1Objects, false, runtimeScene, false);
}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.NewSceneCode.condition1IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects1[k] = gdjs.NewSceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects1.length = k;}if ( gdjs.NewSceneCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDEnemyObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDEnemyObjects1[i].getVariableNumber(gdjs.NewSceneCode.GDEnemyObjects1[i].getVariables().getFromIndex(1)) == 0 ) {
        gdjs.NewSceneCode.condition2IsTrue_0.val = true;
        gdjs.NewSceneCode.GDEnemyObjects1[k] = gdjs.NewSceneCode.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDEnemyObjects1.length = k;}}
}
if (gdjs.NewSceneCode.condition2IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDEnemyObjects1 */
/* Reuse gdjs.NewSceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(10);
}{gdjs.evtTools.sound.playSound(runtimeScene, "ht.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.NewSceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDEnemyObjects1[i].returnVariable(gdjs.NewSceneCode.GDEnemyObjects1[i].getVariables().getFromIndex(1)).setNumber(1);
}
}}

}


{

gdjs.NewSceneCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));
gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
gdjs.NewSceneCode.condition2IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDEnemyObjects1Objects, false, runtimeScene, false);
}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.NewSceneCode.condition1IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects1[k] = gdjs.NewSceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects1.length = k;}if ( gdjs.NewSceneCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDEnemyObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDEnemyObjects1[i].getVariableNumber(gdjs.NewSceneCode.GDEnemyObjects1[i].getVariables().getFromIndex(1)) == 0 ) {
        gdjs.NewSceneCode.condition2IsTrue_0.val = true;
        gdjs.NewSceneCode.GDEnemyObjects1[k] = gdjs.NewSceneCode.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDEnemyObjects1.length = k;}}
}
if (gdjs.NewSceneCode.condition2IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDPlayerObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.NewSceneCode.GDPlayerObjects1.length !== 0 ? gdjs.NewSceneCode.GDPlayerObjects1[0] : null), false, "", 0);
}{runtimeScene.getVariables().getFromIndex(4).setNumber(1);
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDDeathsObjects1.createFrom(runtimeScene.getObjects("Deaths"));
gdjs.NewSceneCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));
gdjs.NewSceneCode.GDMrCleanObjects1.createFrom(runtimeScene.getObjects("MrClean"));
gdjs.NewSceneCode.GDPhilObjects1.createFrom(runtimeScene.getObjects("Phil"));
gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.NewSceneCode.GDPortal1ExitObjects1.createFrom(runtimeScene.getObjects("Portal1Exit"));
gdjs.NewSceneCode.GDPortal2ExitObjects1.createFrom(runtimeScene.getObjects("Portal2Exit"));
gdjs.NewSceneCode.GDStopPhilObjects1.createFrom(runtimeScene.getObjects("StopPhil"));
gdjs.NewSceneCode.GDWinObjects1.createFrom(runtimeScene.getObjects("Win"));
gdjs.NewSceneCode.GDleftObjects1.createFrom(runtimeScene.getObjects("left"));
gdjs.NewSceneCode.GDloss1Objects1.createFrom(runtimeScene.getObjects("loss1"));
gdjs.NewSceneCode.GDloss2Objects1.createFrom(runtimeScene.getObjects("loss2"));
gdjs.NewSceneCode.GDrightObjects1.createFrom(runtimeScene.getObjects("right"));
{for(var i = 0, len = gdjs.NewSceneCode.GDleftObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDleftObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDrightObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDrightObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDDeathsObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDDeathsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDPhilObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPhilObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDEnemyObjects1[i].returnVariable(gdjs.NewSceneCode.GDEnemyObjects1[i].getVariables().getFromIndex(1)).setNumber(0);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].returnVariable(gdjs.NewSceneCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDStopPhilObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDStopPhilObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDWinObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDWinObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDMrCleanObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDMrCleanObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDloss1Objects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDloss1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDloss2Objects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDloss2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDPortal1ExitObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPortal1ExitObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDPortal2ExitObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPortal2ExitObjects1[i].hide();
}
}}

}


{

gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.NewSceneCode.GDWinnerObjects1.createFrom(runtimeScene.getObjects("Winner"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDWinnerObjects1Objects, false, runtimeScene, false);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDPlayerObjects1 */
gdjs.NewSceneCode.GDScoreObjects1.createFrom(runtimeScene.getObjects("Score"));
gdjs.NewSceneCode.GDTimerObjects1.createFrom(runtimeScene.getObjects("Timer"));
gdjs.NewSceneCode.GDWinObjects1.createFrom(runtimeScene.getObjects("Win"));
/* Reuse gdjs.NewSceneCode.GDWinnerObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDWinnerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDWinnerObjects1[i].pauseTimer("GTimer");
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDTimerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDTimerObjects1[i].setColor("17;163;39");
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].returnVariable(gdjs.NewSceneCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDWinObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDWinObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDWinnerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDWinnerObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDScoreObjects1[i].setColor("17;163;39");
}
}}

}


{


{

{ //Subevents
gdjs.NewSceneCode.eventsList0x6fe2e4(runtimeScene);} //End of subevents
}

}


{

gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDPlayerObjects1[i].getY() >= 2000 ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects1[k] = gdjs.NewSceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects1.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDPlayerObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.NewSceneCode.GDPlayerObjects1.length !== 0 ? gdjs.NewSceneCode.GDPlayerObjects1[0] : null), true, "", 0);
}{runtimeScene.getVariables().getFromIndex(4).setNumber(1);
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
gdjs.NewSceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)) == 0;
}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
gdjs.NewSceneCode.GDWinnerObjects1.createFrom(runtimeScene.getObjects("Winner"));
{for(var i = 0, len = gdjs.NewSceneCode.GDWinnerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDWinnerObjects1[i].unpauseTimer("GTimer");
}
}}

}


{

gdjs.NewSceneCode.GDWinnerObjects1.createFrom(runtimeScene.getObjects("Winner"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
gdjs.NewSceneCode.condition2IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) >= (( gdjs.NewSceneCode.GDWinnerObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDWinnerObjects1[0].getTimerElapsedTimeInSeconds("GTimer"));
}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
gdjs.NewSceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) <= (( gdjs.NewSceneCode.GDWinnerObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDWinnerObjects1[0].getTimerElapsedTimeInSeconds("GTimer")) + 1;
}if ( gdjs.NewSceneCode.condition1IsTrue_0.val ) {
{
gdjs.NewSceneCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)) == 0;
}}
}
if (gdjs.NewSceneCode.condition2IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).add(1);
}{runtimeScene.getVariables().getFromIndex(2).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) - 2);
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)) == 0;
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("GTimer4").setNumber(60 - (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) - 2));
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "q");
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDDeathsObjects1.createFrom(runtimeScene.getObjects("Deaths"));
gdjs.NewSceneCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));
gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.NewSceneCode.GDTimerObjects1.createFrom(runtimeScene.getObjects("Timer"));
gdjs.NewSceneCode.GDWinnerObjects1.createFrom(runtimeScene.getObjects("Winner"));
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].setPosition(60,386);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs.NewSceneCode.GDDeathsObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDDeathsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDWinnerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDWinnerObjects1[i].removeTimer("GTimer");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(2).setNumber(0);
}{for(var i = 0, len = gdjs.NewSceneCode.GDWinnerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDWinnerObjects1[i].resetTimer("Gtimer");
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDEnemyObjects1[i].returnVariable(gdjs.NewSceneCode.GDEnemyObjects1[i].getVariables().getFromIndex(1)).setNumber(0);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDTimerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDTimerObjects1[i].setColor("6;0;0");
}
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.NewSceneCode.GDPlayerObjects1.length !== 0 ? gdjs.NewSceneCode.GDPlayerObjects1[0] : null), false, "", 0);
}}

}


{

gdjs.NewSceneCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDEnemyObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDEnemyObjects1[i].getVariableNumber(gdjs.NewSceneCode.GDEnemyObjects1[i].getVariables().getFromIndex(1)) == 0 ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDEnemyObjects1[k] = gdjs.NewSceneCode.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDEnemyObjects1.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDEnemyObjects1[i].hide(false);
}
}}

}


{

gdjs.NewSceneCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDEnemyObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDEnemyObjects1[i].getVariableNumber(gdjs.NewSceneCode.GDEnemyObjects1[i].getVariables().getFromIndex(1)) == 1 ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDEnemyObjects1[k] = gdjs.NewSceneCode.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDEnemyObjects1.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDEnemyObjects1[i].hide();
}
}}

}


{

gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDPlayerObjects1[i].getX() >= 4850 ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects1[k] = gdjs.NewSceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects1.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDPhilObjects1.createFrom(runtimeScene.getObjects("Phil"));
{for(var i = 0, len = gdjs.NewSceneCode.GDPhilObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPhilObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDPhilObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPhilObjects1[i].addPolarForce(0, 415, 0);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "phol2.mp3", false, 100, 1);
}}

}


{

gdjs.NewSceneCode.GDPhilObjects1.createFrom(runtimeScene.getObjects("Phil"));
gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
gdjs.NewSceneCode.condition2IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPhilObjects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDPlayerObjects1[i].getVariableNumber(gdjs.NewSceneCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.NewSceneCode.condition1IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects1[k] = gdjs.NewSceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects1.length = k;}if ( gdjs.NewSceneCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDPlayerObjects1[i].getX() >= 4800 ) {
        gdjs.NewSceneCode.condition2IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects1[k] = gdjs.NewSceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects1.length = k;}}
}
if (gdjs.NewSceneCode.condition2IsTrue_0.val) {
gdjs.NewSceneCode.GDDeathsObjects1.createFrom(runtimeScene.getObjects("Deaths"));
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs.NewSceneCode.GDDeathsObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDDeathsObjects1[i].hide(false);
}
}{runtimeScene.getVariables().getFromIndex(4).setNumber(1);
}}

}


{

gdjs.NewSceneCode.GDJumpTObjects1.createFrom(runtimeScene.getObjects("JumpT"));
gdjs.NewSceneCode.GDPhilObjects1.createFrom(runtimeScene.getObjects("Phil"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPhilObjects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDJumpTObjects1Objects, false, runtimeScene, false);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDJumpTObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDJumpTObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDJumpTObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.NewSceneCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));
gdjs.NewSceneCode.GDPhilObjects1.createFrom(runtimeScene.getObjects("Phil"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPhilObjects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDEnemyObjects1Objects, false, runtimeScene, false);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDEnemyObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDPlayerObjects1[i].getVariableNumber(gdjs.NewSceneCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects1[k] = gdjs.NewSceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects1.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDPhilObjects1.createFrom(runtimeScene.getObjects("Phil"));
{for(var i = 0, len = gdjs.NewSceneCode.GDPhilObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPhilObjects1[i].clearForces();
}
}}

}


{

gdjs.NewSceneCode.GDPhilObjects1.createFrom(runtimeScene.getObjects("Phil"));
gdjs.NewSceneCode.GDStopPhilObjects1.createFrom(runtimeScene.getObjects("StopPhil"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPhilObjects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDStopPhilObjects1Objects, false, runtimeScene, false);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].returnVariable(gdjs.NewSceneCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}}

}


{

gdjs.NewSceneCode.GDMrCleanObjects1.createFrom(runtimeScene.getObjects("MrClean"));
gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
gdjs.NewSceneCode.condition2IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDMrCleanObjects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDPlayerObjects1[i].getX() < 5900 ) {
        gdjs.NewSceneCode.condition1IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects1[k] = gdjs.NewSceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects1.length = k;}if ( gdjs.NewSceneCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDPlayerObjects1[i].getY() < -(800) ) {
        gdjs.NewSceneCode.condition2IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects1[k] = gdjs.NewSceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects1.length = k;}}
}
if (gdjs.NewSceneCode.condition2IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDMrCleanObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs.NewSceneCode.GDMrCleanObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDMrCleanObjects1[i].clearForces();
}
}{runtimeScene.getVariables().getFromIndex(4).setNumber(1);
}}

}


{

gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDPlayerObjects1[i].getX() < 5750 ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects1[k] = gdjs.NewSceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects1.length = k;}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDPlayerObjects1[i].getY() < -(850) ) {
        gdjs.NewSceneCode.condition1IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects1[k] = gdjs.NewSceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects1.length = k;}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
gdjs.NewSceneCode.GDMrCleanObjects1.createFrom(runtimeScene.getObjects("MrClean"));
{for(var i = 0, len = gdjs.NewSceneCode.GDMrCleanObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDMrCleanObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDMrCleanObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDMrCleanObjects1[i].addPolarForce(-(90), 210, 0);
}
}}

}


{

gdjs.NewSceneCode.GDMrCleanObjects1.createFrom(runtimeScene.getObjects("MrClean"));
gdjs.NewSceneCode.GDStopPhilObjects1.createFrom(runtimeScene.getObjects("StopPhil"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDMrCleanObjects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDStopPhilObjects1Objects, false, runtimeScene, false);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDMrCleanObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDMrCleanObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDMrCleanObjects1[i].clearForces();
}
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)) == 1;
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));
gdjs.NewSceneCode.GDMrCleanObjects1.createFrom(runtimeScene.getObjects("MrClean"));
gdjs.NewSceneCode.GDPhilObjects1.createFrom(runtimeScene.getObjects("Phil"));
gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.NewSceneCode.GDScoreObjects1.createFrom(runtimeScene.getObjects("Score"));
gdjs.NewSceneCode.GDTimerObjects1.createFrom(runtimeScene.getObjects("Timer"));
gdjs.NewSceneCode.GDWinnerObjects1.createFrom(runtimeScene.getObjects("Winner"));
gdjs.NewSceneCode.GDloss1Objects1.createFrom(runtimeScene.getObjects("loss1"));
gdjs.NewSceneCode.GDloss2Objects1.createFrom(runtimeScene.getObjects("loss2"));
{for(var i = 0, len = gdjs.NewSceneCode.GDloss1Objects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDloss1Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDTimerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDTimerObjects1[i].setColor("217;61;31");
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDWinnerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDWinnerObjects1[i].pauseTimer("GTimer");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "oof.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.NewSceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDEnemyObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDPhilObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPhilObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDMrCleanObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDMrCleanObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDScoreObjects1[i].setColor("217;61;31");
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].activateBehavior("PlatformerObject", false);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDloss2Objects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDloss2Objects1[i].hide(false);
}
}}

}


{

gdjs.NewSceneCode.GDWinnerObjects1.createFrom(runtimeScene.getObjects("Winner"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDWinnerObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDWinnerObjects1[i].timerElapsedTime("GTimer", 60) ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDWinnerObjects1[k] = gdjs.NewSceneCode.GDWinnerObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDWinnerObjects1.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(4).setNumber(1);
}}

}


{

gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.NewSceneCode.GDPortal1Objects1.createFrom(runtimeScene.getObjects("Portal1"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPortal1Objects1Objects, false, runtimeScene, false);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDPlayerObjects1 */
gdjs.NewSceneCode.GDPortal1ExitObjects1.createFrom(runtimeScene.getObjects("Portal1Exit"));
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].setPosition((( gdjs.NewSceneCode.GDPortal1ExitObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDPortal1ExitObjects1[0].getPointX("")),(( gdjs.NewSceneCode.GDPortal1ExitObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDPortal1ExitObjects1[0].getPointY("")));
}
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.NewSceneCode.GDPlayerObjects1.length !== 0 ? gdjs.NewSceneCode.GDPlayerObjects1[0] : null), false, "", 0);
}{for(var i = 0, len = gdjs.NewSceneCode.GDPortal1ExitObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPortal1ExitObjects1[i].hide(false);
}
}}

}


{

gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.NewSceneCode.GDPortal2Objects1.createFrom(runtimeScene.getObjects("Portal2"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPortal2Objects1Objects, false, runtimeScene, false);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDPlayerObjects1 */
gdjs.NewSceneCode.GDPortal2ExitObjects1.createFrom(runtimeScene.getObjects("Portal2Exit"));
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].setPosition((( gdjs.NewSceneCode.GDPortal2ExitObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDPortal2ExitObjects1[0].getPointX("")),(( gdjs.NewSceneCode.GDPortal2ExitObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDPortal2ExitObjects1[0].getPointY("")));
}
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.NewSceneCode.GDPlayerObjects1.length !== 0 ? gdjs.NewSceneCode.GDPlayerObjects1[0] : null), false, "", 0);
}{for(var i = 0, len = gdjs.NewSceneCode.GDPortal2ExitObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPortal2ExitObjects1[i].hide(false);
}
}}

}


{

gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.NewSceneCode.GDPortal3Objects1.createFrom(runtimeScene.getObjects("Portal3"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPortal3Objects1Objects, false, runtimeScene, false);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDPlayerObjects1 */
gdjs.NewSceneCode.GDPortal3ExitObjects1.createFrom(runtimeScene.getObjects("Portal3Exit"));
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].setPosition((( gdjs.NewSceneCode.GDPortal3ExitObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDPortal3ExitObjects1[0].getPointX("")),(( gdjs.NewSceneCode.GDPortal3ExitObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDPortal3ExitObjects1[0].getPointY("")));
}
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.NewSceneCode.GDPlayerObjects1.length !== 0 ? gdjs.NewSceneCode.GDPlayerObjects1[0] : null), false, "", 0);
}{for(var i = 0, len = gdjs.NewSceneCode.GDPortal3ExitObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPortal3ExitObjects1[i].hide(false);
}
}}

}


}; //End of gdjs.NewSceneCode.eventsList0xb4a60


gdjs.NewSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.NewSceneCode.GDFloorObjects1.length = 0;
gdjs.NewSceneCode.GDFloorObjects2.length = 0;
gdjs.NewSceneCode.GDPlayerObjects1.length = 0;
gdjs.NewSceneCode.GDPlayerObjects2.length = 0;
gdjs.NewSceneCode.GDJumpTObjects1.length = 0;
gdjs.NewSceneCode.GDJumpTObjects2.length = 0;
gdjs.NewSceneCode.GDCoinObjects1.length = 0;
gdjs.NewSceneCode.GDCoinObjects2.length = 0;
gdjs.NewSceneCode.GDScoreObjects1.length = 0;
gdjs.NewSceneCode.GDScoreObjects2.length = 0;
gdjs.NewSceneCode.GDEnemyObjects1.length = 0;
gdjs.NewSceneCode.GDEnemyObjects2.length = 0;
gdjs.NewSceneCode.GDleftObjects1.length = 0;
gdjs.NewSceneCode.GDleftObjects2.length = 0;
gdjs.NewSceneCode.GDrightObjects1.length = 0;
gdjs.NewSceneCode.GDrightObjects2.length = 0;
gdjs.NewSceneCode.GDDeathsObjects1.length = 0;
gdjs.NewSceneCode.GDDeathsObjects2.length = 0;
gdjs.NewSceneCode.GDWinObjects1.length = 0;
gdjs.NewSceneCode.GDWinObjects2.length = 0;
gdjs.NewSceneCode.GDTimerObjects1.length = 0;
gdjs.NewSceneCode.GDTimerObjects2.length = 0;
gdjs.NewSceneCode.GDWinnerObjects1.length = 0;
gdjs.NewSceneCode.GDWinnerObjects2.length = 0;
gdjs.NewSceneCode.GDPhilObjects1.length = 0;
gdjs.NewSceneCode.GDPhilObjects2.length = 0;
gdjs.NewSceneCode.GDStopPhilObjects1.length = 0;
gdjs.NewSceneCode.GDStopPhilObjects2.length = 0;
gdjs.NewSceneCode.GDMrCleanObjects1.length = 0;
gdjs.NewSceneCode.GDMrCleanObjects2.length = 0;
gdjs.NewSceneCode.GDloss2Objects1.length = 0;
gdjs.NewSceneCode.GDloss2Objects2.length = 0;
gdjs.NewSceneCode.GDloss1Objects1.length = 0;
gdjs.NewSceneCode.GDloss1Objects2.length = 0;
gdjs.NewSceneCode.GDPortal1Objects1.length = 0;
gdjs.NewSceneCode.GDPortal1Objects2.length = 0;
gdjs.NewSceneCode.GDPortal1ExitObjects1.length = 0;
gdjs.NewSceneCode.GDPortal1ExitObjects2.length = 0;
gdjs.NewSceneCode.GDPortal2Objects1.length = 0;
gdjs.NewSceneCode.GDPortal2Objects2.length = 0;
gdjs.NewSceneCode.GDPortal2ExitObjects1.length = 0;
gdjs.NewSceneCode.GDPortal2ExitObjects2.length = 0;
gdjs.NewSceneCode.GDPortal3Objects1.length = 0;
gdjs.NewSceneCode.GDPortal3Objects2.length = 0;
gdjs.NewSceneCode.GDPortal3ExitObjects1.length = 0;
gdjs.NewSceneCode.GDPortal3ExitObjects2.length = 0;
gdjs.NewSceneCode.GDSecObjects1.length = 0;
gdjs.NewSceneCode.GDSecObjects2.length = 0;

gdjs.NewSceneCode.eventsList0xb4a60(runtimeScene);
return;

}
gdjs['NewSceneCode'] = gdjs.NewSceneCode;
