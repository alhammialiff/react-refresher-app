
// ================================================================
// This generates a dummy multilevel wave
// How it works?
// (1) Set amplitudes
// (2) Set duty cycle (default to 4)
// (3) At every duty cycle (multiples of 4), we begin choosing 
//     the amplitude at random
// ================================================================
export const generateMultiLevelWave = (x: number) => {
    const levels = [50, 80, 150, 180];
    
    // Change period randomly
    const cycle = x % 4; 
    

    if (cycle === 0) {

        // Pick random level every 8 steps
        return levels[Math.floor(Math.random() * levels.length)];
    
    }
    
    // Hold the same level for the duration
    return levels[Math.floor(x / 8) % levels.length];

};


// =========================================
// This generates a dummy timestamp where the generated 
// initial time would be current date and 12am 
// =========================================
export const getDummyTimestamp = () =>{

    const startTime = new Date();
    startTime.setHours(0, 0, 0, 0);
    startTime.setDate(startTime.getDate())

    return startTime;

}