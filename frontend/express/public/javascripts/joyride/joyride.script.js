Joyride = {};
Joyride.onCheck = function(){
    var count = 0;
    console.log(window.countlyGlobal.apps);
    $.each(window.countlyGlobal.apps, function(key, value){
        if(key){
            count++
        }
    });
    if(count == 0){
        console.log("onCheck");
        return true;
    }
    return false;
};

Joyride.checkStart = function(){
    var check = Joyride.onCheck();
    var local = window.localStorage.getItem("Joyride");
    setTimeout(function(){
        window.location.href = "#/";
        if(check && !local){
            Joyride.callJoyRide(); 
            window.localStorage.setItem("Joyride",true);
        }
            
    },100);
}

Joyride.callJoyRide = function(){
    $("#joyRideTipContent").joyride({});
    $("#joyRideTipContent").joyride({});
}