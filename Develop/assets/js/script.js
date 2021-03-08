
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

    let textBox9 = $("#eventColumn9");
    let textBox10 = $("#eventColumn10");
    let textBox11 = $("#eventColumn11");
    let textBox12 = $("#eventColumn12");
    let textBox1 = $("#eventColumn1");
    let textBox2 = $("#eventColumn2");
    let textBox3 = $("#eventColumn3");
    let textBox4 = $("#eventColumn4");
    let textBox5 = $("#eventColumn5");

    let saveBtnId9 = $("#saveBtn9");
    let saveBtnId10 = $("#saveBtn10");
    let saveBtnId11 = $("#saveBtn11");
    let saveBtnId12 = $("#saveBtn12");
    let saveBtnId1 = $("#saveBtn1");
    let saveBtnId2 = $("#saveBtn2");
    let saveBtnId3 = $("#saveBtn3");
    let saveBtnId4 = $("#saveBtn4");
    let saveBtnId5 = $("#saveBtn5");

    $(saveBtnId9).on("click", function (event) {
        event.preventDefault();
        let textBox9 = $("#eventColumn9").val().trim();
        localStorage.setItem("appointment9", (textBox9));
    });
    let ninthApp = (localStorage.getItem("appointment9"));
    textBox9.val(ninthApp);

    $(saveBtnId10).on("click", function (event) {
        event.preventDefault();
        let textBox10 = $("#eventColumn10").val().trim();
        localStorage.setItem("appointment10", (textBox10));
    });
    let tenthApp = (localStorage.getItem("appointment10"));
    textBox10.val(tenthApp);

    $(saveBtnId11).on("click", function (event) {
        event.preventDefault();
        let textBox11 = $("#eventColumn11").val().trim();
        localStorage.setItem("appointment11", (textBox11));
    });
    let eleventhApp = (localStorage.getItem("appointment11"));
    textBox11.val(eleventhApp);

    $(saveBtnId12).on("click", function (event) {
        event.preventDefault();
        let textBox12 = $("#eventColumn12").val().trim();
        localStorage.setItem("appointment12", (textBox12));
    });
    let twelthApp = (localStorage.getItem("appointment12"));
    textBox12.val(twelthApp);

    $(saveBtnId1).on("click", function (event) {
        event.preventDefault();
        let textBox1 = $("#eventColumn1").val().trim();
        localStorage.setItem("appointment1", (textBox1));
    });
    let firstApp = (localStorage.getItem("appointment1"));
    textBox1.val(firstApp);

    $(saveBtnId2).on("click", function (event) {
        event.preventDefault();
        let textBox2 = $("#eventColumn2").val().trim();
        localStorage.setItem("appointment2", (textBox2));
    });
    let secondApp = (localStorage.getItem("appointment2"));
    textBox2.val(secondApp);

    $(saveBtnId3).on("click", function (event) {
        event.preventDefault();
        let textBox3 = $("#eventColumn3").val().trim();
        localStorage.setItem("appointment3", (textBox3));
    });
    let thirdApp = (localStorage.getItem("appointment3"));
    textBox3.val(thirdApp);

    $(saveBtnId4).on("click", function (event) {
        event.preventDefault();
        let textBox4 = $("#eventColumn4").val().trim();
        localStorage.setItem("appointment4", (textBox4));
    });
    let fourthApp = (localStorage.getItem("appointment4"));
    textBox4.val(fourthApp);

    $(saveBtnId5).on("click", function (event) {
        event.preventDefault();
        let textBox5 = $("#eventColumn5").val().trim();
        localStorage.setItem("appointment5", (textBox5));
    });
    let fifthApp = (localStorage.getItem("appointment5"));
    textBox5.val(fifthApp);
