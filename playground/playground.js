document.addEventListener("DOMContentLoaded", (e) => {

    let messages = [];
    let statusDiv = document.getElementById("status-div");
    updateStatusMsg("Initialised!");

    const dbLetterMap = {
        'q': 36, 'w': 38, 'e': 40, 'r': 41, 't': 43,
        'a': 45, 's': 47, 'd': 48, 'f': 50, 'g': 52,
        'z': 53, 'x': 55, 'c': 57, 'v': 59, 'b': 60,
        'y': 60, 'u': 62, 'i': 64, 'o': 65, 'p': 67,
        'h': 69, 'j': 71, 'k': 72, 'l': 74, ';': 76,
        'n': 77, 'm': 79, ',': 81, '.': 83, '/': 84,
    };

    const sgLetterMap1 = {
        'q': 36, 'w': 38, 'e': 40, 'r': 41, 't': 43,
        'a': 45, 's': 47, 'd': 48, 'f': 50, 'g': 52,
        'z': 53, 'x': 55, 'c': 57, 'v': 59, 'b': 60,
    };

    const sgLetterMap2 = {
        'q': 60, 'w': 62, 'e': 64, 'r': 65, 't': 67,
        'a': 69, 's': 71, 'd': 72, 'f': 74, 'g': 76,
        'z': 77, 'x': 79, 'c': 81, 'v': 83, 'b': 84,
    };

    let letterMap = dbLetterMap;
    const pressedKeys = new Set();
    const synth = new Tone.PolySynth(Tone.Synth).toDestination();
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
    
    function handleKeyDown(event) {
        const key = event.key.toLowerCase();
        if (key in letterMap && !pressedKeys.has(key)) {
            pressedKeys.add(key);
            synth.triggerAttack(Tone.Frequency(letterMap[key], "midi"));
        }
    }
    
    function handleKeyUp(event) {
        const key = event.key.toLowerCase();
        if (key in letterMap) {
            pressedKeys.delete(key);
            synth.triggerRelease(Tone.Frequency(letterMap[key], "midi"));
        }
    }

    document.addEventListener('click', async () => {
        await Tone.start();
    });


// buttons in html & their behaviour
    let sgToggle1 = document.getElementById("singlekeyboard1");
    let sgToggle2 = document.getElementById("singlekeyboard2");
    let dbToggle = document.getElementById("doublekeyboard");

    sgToggle1.addEventListener("click", (e) => {
        // update lettermap to single keyboard 1
        letterMap = sgLetterMap1;
        updateStatusMsg("current: single keyboard (lower)");
        
    })

    sgToggle2.addEventListener("click", (e) => {
        // update lettermap to single keyboard 2
        letterMap = sgLetterMap2;
        updateStatusMsg("current: single keyboard (higher)");
        
    })

    dbToggle.addEventListener("click", (e) => {
        // update lettermap to double keyboard
        letterMap = dbLetterMap;
        updateStatusMsg("current: doublekeyboard");
    })



    // for logging
    function updateStatusMsg(message) {
        const now = new Date(Date.now());
        const formattedTime = now.toLocaleString();
        messages.push(message + " | Log time: " + formattedTime);
        const status = messages.join('<br>');
        statusDiv.innerHTML = status;
    }
});