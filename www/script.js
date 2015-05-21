/* jshint
browser: true,
devel: true
*/
/* globals device, StatusBar, CanvasCamera */

var pictureSource; // picture source
var destinationType; // sets the format of returned value 

// Wait for Cordova to connect with the device
//
document.addEventListener("deviceready", onDeviceReady, false);

// Cordova is ready to be used!
//
function onDeviceReady() {
    console.log(device);
    console.log(window.device);
    console.log(window.plugins);
    StatusBar.hide();
    
    var objCanvas = document.getElementById("canvas");
    window.plugin.CanvasCamera.initialize(objCanvas);
	document.getElementById("takePicture").addEventListener("click", takePic, false);
}

function takePic(e) {
    var options = {
        quality: 75,
        destinationType: CanvasCamera.DestinationType.DATA_URL,
        encodingType: CanvasCamera.EncodingType.JPEG,
        //allowEdit: false,
        width: 100,
        height: 100
    };
    CanvasCamera.start(options);
    //window.plugin.takePicture(onPicSuccess);
}

function onPicSuccess(data){
    console.log(data);
}