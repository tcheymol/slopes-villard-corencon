export interface Loop {
    id: number,
    name: string,
    grade: string,
    path: string,
    length: string,
    selected: boolean,
    laps: number,
    center: { x: number, y: number },
}

export const toggleLoop = (loop: Loop) => {
  loop.selected = !loop.selected

  if (!loop.selected) {
    loop.laps = 0
  }
}

export const addLap = (loop: Loop) => {
  loop.laps += 1
}

export const removeLap = (loop: Loop) => {
  loop.laps -= 1
  if (loop.laps < 1) loop.selected = false;
}

export const getColor = (loop: Loop) => {
  switch (loop.grade) {
      case 'green':
          return '#008000'
      case 'blue':
          return '#0000FF'
      case 'red':
          return '#FF0000'
      case 'black':
          return '#000000'
      default:
          return '#000000'
  }
}

export const getStyles = (loop: Loop) => ({ '--path-color': getColor(loop), '--slope-length': loop.length });
