
function showTime() {

    var rightNow = moment().format("MMMM Do, YYYY");
    document.getElementById("currentDay").textContent = rightNow;
    document.getElementById("currentDay").innerText = rightNow;
}

showTime();

function coloringIn() {
    
    var rightNowInHours = new Date().getHours();

    if(rightNowInHours > 8) {
        $("#eventColumn9").addClass("past");
    }
    else if(rightNowInHours >= 8 && rightNowInHours < 9) {
        $("#eventColumn9").addClass("present");
    }
    else if(rightNowInHours < 8) {
        $("#eventColumn9").addClass("future");
    }

    if(rightNowInHours > 9) {
        $("#eventColumn10").addClass("past");
    }
    else if(rightNowInHours >= 9 && rightNowInHours < 10) {
        $("#eventColumn10").addClass("present");
    }
    else if(rightNowInHours < 9) {
        $("#eventColumn10").addClass("future");
    }

    if(rightNowInHours > 10) {
        $("#eventColumn11").addClass("past");
    }
    else if(rightNowInHours >= 10 && rightNowInHours < 11) {
        $("#eventColumn11").addClass("present");
    }
    else if(rightNowInHours < 10) {
        $("#eventColumn11").addClass("future");
    }

    if(rightNowInHours > 11) {
        $("#eventColumn12").addClass("past");
    }
    else if(rightNowInHours >= 11 && rightNowInHours < 12) {
        $("#eventColumn12").addClass("present");
    }
    else if(rightNowInHours < 11) {
        $("#eventColumn12").addClass("future");
    }

    if(rightNowInHours > 12) {
        $("#eventColumn1").addClass("past");
    }
    else if(rightNowInHours >= 12 && rightNowInHours < 13) {
        $("#eventColumn1").addClass("present");
    }
    else if(rightNowInHours < 12) {
        $("#eventColumn1").addClass("future");
    }

    if(rightNowInHours > 13) {
        $("#eventColumn2").addClass("past");
    }
    else if(rightNowInHours >= 13 && rightNowInHours < 14) {
        $("#eventColumn2").addClass("present");
    }
    else if(rightNowInHours < 13) {
        $("#eventColumn2").addClass("future");
    }

    if(rightNowInHours > 14) {
        $("#eventColumn2").addClass("past");
    }
    else if(rightNowInHours >= 14 && rightNowInHours < 15) {
        $("#eventColumn2").addClass("present");
    }
    else if(rightNowInHours < 14) {
        $("#eventColumn2").addClass("future");
    }

    if(rightNowInHours > 15) {
        $("#eventColumn3").addClass("past");
    }
    else if(rightNowInHours >= 15 && rightNowInHours < 16) {
        $("#eventColumn3").addClass("present");
    }
    else if(rightNowInHours < 15) {
        $("#eventColumn3").addClass("future");
    }

    if(rightNowInHours > 16) {
        $("#eventColumn4").addClass("past");
    }
    else if(rightNowInHours >= 16 && rightNowInHours < 17) {
        $("#eventColumn4").addClass("present");
    }
    else if(rightNowInHours < 16) {
        $("#eventColumn4").addClass("future");
    }
    if(rightNowInHours > 17) {
        $("#eventColumn5").addClass("past");
    }
    else if(rightNowInHours >= 17 && rightNowInHours < 18) {
        $("#eventColumn5").addClass("present");
    }
    else if(rightNowInHours < 17) {
        $("#eventColumn5").addClass("future");
    }

 }
 coloringIn();