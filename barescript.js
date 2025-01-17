document.addEventListener("DOMContentLoaded", (e) => {

    console.log("DOM loaded");

    let messages = [];
    let statusDiv = document.getElementById("status-div");
    updateStatusMsg("Initialised!");

    const synth = new Tone.Synth().toDestination();

    function playNote(midiNote) {
    synth.triggerAttackRelease(Tone.Frequency(midiNote, "midi"), "8n");
};


    // buttons:
    // 1: ea
    // 2: wy
    // 3: an
    // 4: qi 
    // 5: sy
    // 6: ai

    // const buttons = Array.from({ length: 6 }, (_, i) => document.getElementById(`b${i + 1}`));

    // buttons.forEach((button, i) => {
    //     button.addEventListener("click", () => incrementSwear(i + 1));
    // });

    // document.addEventListener("keydown", (event) => {
    //     const key = event.key;
    //     if (key >= "1" && key <= "6") {
    //         const index = parseInt(key) - 1;
    //         incrementSwear(index + 1);
    //     }
    // });
    
    const swearMap = {
        'click': e => e.target.id.slice(1),
        'keydown': e => e.key
    };
    
    document.addEventListener('click', handleSwear);
    document.addEventListener('keydown', handleSwear);
    
    function handleSwear(event) {
        const value = swearMap[event.type](event);
        if (value >= '1' && value <= '6') {
            incrementSwear(parseInt(value));
        };
    };
    

    function incrementSwear(personIndex) {
        // TODO: CONNECT TO DB TO SEND REQUEST TO INCREMENT COUNT OF PERSON BY 1

        // updates in statusdiv
        updateStatusMsg(`person ${personIndex} count +1`);
        const midiNotes = [60, 60, 62, 64, 65, 67, 69];
        playNote(midiNotes[personIndex]);
    };


function updateStatusMsg(message) {
    const now = new Date(Date.now());
    const formattedTime = now.toLocaleString();
    messages.push(message + " | Log time: " + formattedTime);
    const status = messages.join('<br>');
    statusDiv.innerHTML = status;
}







});