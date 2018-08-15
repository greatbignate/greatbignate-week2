var bodyX = 219;
var bodyY = 298;
var bodyW = 319;
var bodyH = bodyW*0.95;
var headW = bodyW/2;
var headH = headW*0.79;
var headY = bodyY - ((bodyH+headH)/2-headH*0.33);
var pupilSize = (headH*0.1);
var pupilMax = (headH*0.15)-pupilSize;

draw = function() {
    //left eye
    fill(252, 252, 252);
    ellipse(bodyX-headW*0.25, headY, headW*0.30, headH*0.30);//eye
    fill(0, 0, 0);
    var pupilLX = (bodyX-headW*0.25)+(1.5*(mouseX*2-400)/400)*pupilMax;
    var pupilLY = headY+(1.5*(mouseY*2-400)/400)*pupilMax;
    ellipse(pupilLX,pupilLY, pupilSize, pupilSize); //pupil
    
    //right eye
    fill(252, 252, 252);
    ellipse(bodyX+headW*0.25, headY, headW*0.30, headH*0.30);
    fill(0, 0, 0);
    var pupilRX = (bodyX+headW*0.25)+(1.5*(mouseX*2-400)/400)*pupilMax;
    var pupilRY = headY+(1.5*(mouseY*2-400)/400)*pupilMax;
    ellipse(pupilRX, pupilRY, pupilSize, pupilSize);
};