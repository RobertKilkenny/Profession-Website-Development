const CYCLE_TIME = 5 // should be in seconds 
const wait = (n: number) => new Promise((resolve) => setTimeout(resolve, n));


export async function cycleImages(length:number, setCycleIndex: (index: number) => void, cycleIndex: number) {
    await wait(1000 * CYCLE_TIME);
    if (cycleIndex >= length - 1) {setCycleIndex(0);}
    else {setCycleIndex(cycleIndex + 1);}
    cycleImages(length, setCycleIndex, cycleIndex + 1);
  }