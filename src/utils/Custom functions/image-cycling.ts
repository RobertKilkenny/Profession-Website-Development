const CYCLE_TIME = 5 // should be in seconds 
const wait = (n: number) => new Promise((resolve) => setTimeout(resolve, n));


export async function cycleImages(length:number, isInManual:() => boolean, setCycleIndex: (index: number) => void, cycleIndex: number) {
    if(isInManual())
      return;
    await wait(1000 * CYCLE_TIME);
    if(isInManual())
      return;
    if (cycleIndex >= length - 1) {setCycleIndex(0);}
    else {setCycleIndex(cycleIndex + 1);}
    cycleImages(length, isInManual, setCycleIndex, cycleIndex + 1);
  }