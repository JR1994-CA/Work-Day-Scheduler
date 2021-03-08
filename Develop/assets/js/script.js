
function showTime() {

    var rightNow = moment().format("MMMM Do, YYYY");
    document.getElementById("currentDay").textContent = rightNow;
    document.getElementById("currentDay").innerText = rightNow;
}

showTime();

//function setUp() {

//     $(document).ready(function () {

       

//         function displayBlocks() {
//             //Array of Work Hours to label blocks
//             let workHours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]

//             let row;
//             let timeSquare;
//             let eventColumn;
//             let saveBtn;

//             for(let i = 0; i < workHours.length; i++) {
//                 let row = $("<div>").addClass("row");
//                 let timeSquare = $("<text-area>").text(workHours[i]).addClass("hour");
//                 let eventColumn = $("<input>").addClass("time-block");
//                 let saveBtn = $("<button>").addClass("saveBtn").text("Save");
//                 $(row).append(timeSquare).append(eventColumn).append(saveBtn);
//                 $("#schedule").append(row);
//             }

//             //Loop to label Blocks


//         }

//         displayBlocks();
//     })
// }