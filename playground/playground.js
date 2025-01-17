document.addEventListener("DOMContentLoaded", (e) => {
    const letterMap = {
        'q': 36, 'w': 38, 'e': 40, 'r': 41, 't': 43,
        'a': 45, 's': 47, 'd': 48, 'f': 50, 'g': 52,
        'z': 53, 'x': 55, 'c': 57, 'v': 59, 'b': 60,
        'y': 60, 'u': 62, 'i': 64, 'o': 65, 'p': 67,
        'h': 69, 'j': 71, 'k': 72, 'l': 74, ';': 76,
        'n': 77, 'm': 79, ',': 81, '.': 83, '/': 84,
    };
    
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
});