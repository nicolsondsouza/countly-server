Joyride = {};
Joyride.onCheck = function(){
    console.log(window.countlyGlobal.apps)
    $("#sidebar-menu a:first").unbind("click",Joyride.onCheck);
    $("#sidebar-menu a:first").bind("click",Joyride.onCheck);
    var count = 0;
    $.each(window.countlyGlobal.apps, function(key, value){
        if(key){
            count++
        }
    });
    if(count == 1){
        Joyride.callJoyRide();
    }
};

Joyride.callJoyRide = function(){
    $("#joyRideTipContent").joyride({});
    $("#joyRideTipContent").joyride({});
}