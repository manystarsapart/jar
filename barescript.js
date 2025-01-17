document.addEventListener("DOMContentLoaded", (e) => {

    console.log("DOM loaded");

    let messages = [];
    let statusDiv = document.getElementById("status-div");
    updateStatusMsg("Initialised!");

    // buttons:
    // 1: ea
    // 2: wy
    // 3: an
    // 4: qi 
    // 5: sy
    // 6: ai

    let b1 = document.getElementById("b1");
    let b2 = document.getElementById("b2");
    let b3 = document.getElementById("b3");
    let b4 = document.getElementById("b4");
    let b5 = document.getElementById("b5");
    let b6 = document.getElementById("b6");

    b1.addEventListener("click", (e) => {
        // send a request to db to add b1 count by 1
        updateStatusMsg("b1 count +1");
    });

    b2.addEventListener("click", (e) => {
        // send a request to db to add b2 count by 1
        updateStatusMsg("b2 count +1");

    });

    b3.addEventListener("click", (e) => {
        // send a request to db to add b3 count by 1
        updateStatusMsg("b3 count +1");
    });

    b4.addEventListener("click", (e) => {
        // send a request to db to add b4 count by 1
        updateStatusMsg("b4 count +1");
    });

    b5.addEventListener("click", (e) => {
        // send a request to db to add b5 count by 1
        updateStatusMsg("b5 count +1");
    });

    b6.addEventListener("click", (e) => {
        // send a request to db to add b6 count by 1
        
    });

function updateStatusMsg(message) {
    const now = new Date(Date.now());
    const formattedTime = now.toLocaleString();
    messages.push(message + " | Log time: " + formattedTime);
    const status = messages.join('<br>');
    statusDiv.innerHTML = status;
}







});