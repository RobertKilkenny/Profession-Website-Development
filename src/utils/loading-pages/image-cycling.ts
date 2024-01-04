import {State, Status} from "@/utils/Custom functions/project-custom-types"

const wait = (n: number) => new Promise((resolve) => setTimeout(resolve, n));


export async function cycleImages(state:State, setCycleIndex: (index: number) => void, cycleIndex: number) {
    await wait(1000 * 10);
    if (state.status != Status.Loaded) return;
    if (cycleIndex >= state.project.cycling_images.length - 1) {setCycleIndex(0);}
    else {setCycleIndex(cycleIndex + 1);}
    cycleImages(state, setCycleIndex, cycleIndex + 1);
  }