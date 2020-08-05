// -----JS CODE-----
// @input SceneObject[] obj

//set all objects to initlaly be disabled
for (var i = 1; i < script.obj.length; i++) {
    script.obj[i].enabled = false;
}

function onTapped(eventData) {    
    // Go through all objects and enable/disable
    for (var i = 0; i < script.obj.length; i++) {
        if (script.obj[i].enabled) {
            script.obj[i].enabled = false;
            print("disabled")
        } else {
            script.obj[i].enabled = true;
            print("enabled")
        }
    }
}

var event = script.createEvent("TapEvent");
event.bind(onTapped);
