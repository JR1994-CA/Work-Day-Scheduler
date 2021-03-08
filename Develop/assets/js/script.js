function showTime() {

    var rightNow = moment().format("MMMM Do, YYYY");
    document.getElementById("currentDay").textContent = rightNow;
    document.getElementById("currentDay").innerText = rightNow;
}

showTime();