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
gdjs.NewSceneCode.GDCloudObjects1= [];
gdjs.NewSceneCode.GDCloudObjects2= [];
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
gdjs.NewSceneCode.GDcheckpointObjects1= [];
gdjs.NewSceneCode.GDcheckpointObjects2= [];
gdjs.NewSceneCode.GDDeathsObjects1= [];
gdjs.NewSceneCode.GDDeathsObjects2= [];
gdjs.NewSceneCode.GDWinObjects1= [];
gdjs.NewSceneCode.GDWinObjects2= [];

gdjs.NewSceneCode.conditionTrue_0 = {val:false};
gdjs.NewSceneCode.condition0IsTrue_0 = {val:false};
gdjs.NewSceneCode.condition1IsTrue_0 = {val:false};
gdjs.NewSceneCode.condition2IsTrue_0 = {val:false};


gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.NewSceneCode.GDPlayerObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDCoinObjects1Objects = Hashtable.newFrom({"Coin": gdjs.NewSceneCode.GDCoinObjects1});gdjs.NewSceneCode.eventsList0x6fe064 = function(runtimeScene) {

}; //End of gdjs.NewSceneCode.eventsList0x6fe064
gdjs.NewSceneCode.eventsList0x6fdf04 = function(runtimeScene) {

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


}; //End of gdjs.NewSceneCode.eventsList0x6fdf04
gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.NewSceneCode.GDEnemyObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDrightObjects1Objects = Hashtable.newFrom({"right": gdjs.NewSceneCode.GDrightObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.NewSceneCode.GDEnemyObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDleftObjects1Objects = Hashtable.newFrom({"left": gdjs.NewSceneCode.GDleftObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.NewSceneCode.GDPlayerObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.NewSceneCode.GDEnemyObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.NewSceneCode.GDPlayerObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.NewSceneCode.GDEnemyObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.NewSceneCode.GDPlayerObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDcheckpointObjects1Objects = Hashtable.newFrom({"checkpoint": gdjs.NewSceneCode.GDcheckpointObjects1});gdjs.NewSceneCode.eventsList0x6ffd8c = function(runtimeScene) {

}; //End of gdjs.NewSceneCode.eventsList0x6ffd8c
gdjs.NewSceneCode.eventsList0x6ffa94 = function(runtimeScene) {

{

/* Reuse gdjs.NewSceneCode.GDcheckpointObjects1 */

for(gdjs.NewSceneCode.forEachIndex2 = 0;gdjs.NewSceneCode.forEachIndex2 < gdjs.NewSceneCode.GDcheckpointObjects1.length;++gdjs.NewSceneCode.forEachIndex2) {
gdjs.NewSceneCode.GDcheckpointObjects2.length = 0;


gdjs.NewSceneCode.forEachTemporary2 = gdjs.NewSceneCode.GDcheckpointObjects1[gdjs.NewSceneCode.forEachIndex2];
gdjs.NewSceneCode.GDcheckpointObjects2.push(gdjs.NewSceneCode.forEachTemporary2);
if (true) {
{for(var i = 0, len = gdjs.NewSceneCode.GDcheckpointObjects2.length ;i < len;++i) {
    gdjs.NewSceneCode.GDcheckpointObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(10);
}}
}

}


}; //End of gdjs.NewSceneCode.eventsList0x6ffa94
gdjs.NewSceneCode.eventsList0xb4320 = function(runtimeScene) {

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
gdjs.NewSceneCode.eventsList0x6fdf04(runtimeScene);} //End of subevents
}

}


{


{
gdjs.NewSceneCode.GDDeathsObjects1.createFrom(runtimeScene.getObjects("Deaths"));
gdjs.NewSceneCode.GDScoreObjects1.createFrom(runtimeScene.getObjects("Score"));
{for(var i = 0, len = gdjs.NewSceneCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDScoreObjects1[i].setString("Score : " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDDeathsObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDDeathsObjects1[i].setString("Deaths: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Deaths")));
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
gdjs.NewSceneCode.GDPlayerObjects1.length = k;}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDEnemyObjects1 */
/* Reuse gdjs.NewSceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDEnemyObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(10);
}{gdjs.evtTools.sound.playSound(runtimeScene, "ht.mp3", false, 100, 1);
}}

}


{

gdjs.NewSceneCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));
gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
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
gdjs.NewSceneCode.GDPlayerObjects1.length = k;}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
gdjs.NewSceneCode.GDDeathsObjects1.createFrom(runtimeScene.getObjects("Deaths"));
/* Reuse gdjs.NewSceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].setPosition(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("checkpointX")),gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("checkpointY")));
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(-(10));
}{gdjs.evtTools.sound.playSound(runtimeScene, "oof.wav", false, 100, 1);
}{runtimeScene.getGame().getVariables().get("Deaths").add(1);
}{for(var i = 0, len = gdjs.NewSceneCode.GDDeathsObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDDeathsObjects1[i].hide(false);
}
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDDeathsObjects1.createFrom(runtimeScene.getObjects("Deaths"));
gdjs.NewSceneCode.GDleftObjects1.createFrom(runtimeScene.getObjects("left"));
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
}}

}


{

gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.NewSceneCode.GDcheckpointObjects1.createFrom(runtimeScene.getObjects("checkpoint"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDcheckpointObjects1Objects, false, runtimeScene, false);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDcheckpointObjects1 */
{runtimeScene.getVariables().get("checkpointX").setNumber((( gdjs.NewSceneCode.GDcheckpointObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDcheckpointObjects1[0].getPointX("")));
}{runtimeScene.getVariables().get("checkpointY").setNumber((( gdjs.NewSceneCode.GDcheckpointObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDcheckpointObjects1[0].getPointY("")));
}
{ //Subevents
gdjs.NewSceneCode.eventsList0x6ffa94(runtimeScene);} //End of subevents
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
gdjs.NewSceneCode.GDDeathsObjects1.createFrom(runtimeScene.getObjects("Deaths"));
/* Reuse gdjs.NewSceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].setPosition(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("checkpointX")),gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("checkpointY")));
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(-(10));
}{gdjs.evtTools.sound.playSound(runtimeScene, "oof.wav", false, 100, 1);
}{runtimeScene.getGame().getVariables().get("Deaths").add(1);
}{for(var i = 0, len = gdjs.NewSceneCode.GDDeathsObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDDeathsObjects1[i].hide(false);
}
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.NewSceneCode.GDPlayerObjects1.length !== 0 ? gdjs.NewSceneCode.GDPlayerObjects1[0] : null), false, "", 0);
}}

}


}; //End of gdjs.NewSceneCode.eventsList0xb4320


gdjs.NewSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.NewSceneCode.GDFloorObjects1.length = 0;
gdjs.NewSceneCode.GDFloorObjects2.length = 0;
gdjs.NewSceneCode.GDPlayerObjects1.length = 0;
gdjs.NewSceneCode.GDPlayerObjects2.length = 0;
gdjs.NewSceneCode.GDJumpTObjects1.length = 0;
gdjs.NewSceneCode.GDJumpTObjects2.length = 0;
gdjs.NewSceneCode.GDCloudObjects1.length = 0;
gdjs.NewSceneCode.GDCloudObjects2.length = 0;
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
gdjs.NewSceneCode.GDcheckpointObjects1.length = 0;
gdjs.NewSceneCode.GDcheckpointObjects2.length = 0;
gdjs.NewSceneCode.GDDeathsObjects1.length = 0;
gdjs.NewSceneCode.GDDeathsObjects2.length = 0;
gdjs.NewSceneCode.GDWinObjects1.length = 0;
gdjs.NewSceneCode.GDWinObjects2.length = 0;

gdjs.NewSceneCode.eventsList0xb4320(runtimeScene);
return;

}
gdjs['NewSceneCode'] = gdjs.NewSceneCode;
