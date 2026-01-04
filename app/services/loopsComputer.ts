export const getTotalLength = (loops: Loop[]): string => 
    loops.reduce((total, loop) => 
        loop.selected ? total + parseFloat(loop.length) : total, 0
    ).toFixed(1);
