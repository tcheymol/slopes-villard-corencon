import type { Loop } from "./loops";

export const getTotalLength = (loops: Loop[]): string => 
    loops.reduce((total, loop) => {
        if (!loop.selected) return total;

        if (loop.laps > 1) return total + loop.laps * parseFloat(loop.length);

        return total + parseFloat(loop.length);
    }, 0).toFixed(1);
