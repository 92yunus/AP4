process.stdin.resume();
process.stdin.setEncoding('utf8');
var L = 1,
    N = 20,
    k = 10,
    h = L / (N+1);

var alphaValues = {}
var gFuncValues = {}

var alpha1Value = -(2 + Math.pow(k, 2)*Math.pow(h, 2));
var fFunc1Value = Math.pow(h, 2) - 1;

var lastGValue = fFunc1Value;
var lastAlphaValue = alpha1Value;

alphaValues[1] = lastAlphaValue;
gFuncValues[1] = lastGValue;

// main loop calculation
for(var j = 2; j <= N; j++) {
  lastGValue = fFunc1Value - ((1 / lastAlphaValue) * lastGValue); 
  lastAlphaValue = lastAlphaValue - ((1 / lastAlphaValue) * 1);
  
  alphaValues[j] = lastGValue;
  gFuncValues[j] = lastAlphaValue;
}

var lastUValue = lastGValue / lastAlphaValue;
var uValues = {}

uValues[N] = lastUValue;
for(var k = 1; k < N; k++) {
  lastUValue = (gFuncValues[N-k] - lastUValue) / alphaValues[N-k];

  uValues[k] = lastUValue;
}

console.log("U Values", Object.values(uValues), 
            "G Values", Object.values(gFuncValues), 
            "Alpha Values", Object.values(alphaValues));


