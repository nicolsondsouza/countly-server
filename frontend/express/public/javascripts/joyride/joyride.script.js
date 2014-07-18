Joyride = {};
Joyride.onCheck = function(){
    console.log(window.countlyGlobal.apps)
    // $("#sidebar-menu a:first").unbind("click",Joyride.onCheck);
    // $("#sidebar-menu a:first").bind("click",Joyride.onCheck);
    var count = 0;
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
    console.log(window.countlyGlobal.apps);
    var check = Joyride.onCheck();
    setTimeout(function(){
        window.location.href = "#/";
        if(check)
            Joyride.callJoyRide(); 
    },500);
}

Joyride.callJoyRide = function(){
    $("#joyRideTipContent").joyride({});
    $("#joyRideTipContent").joyride({});
}