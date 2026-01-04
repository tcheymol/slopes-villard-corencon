export interface Loop {
    id: number,
    name: string,
    grade: string,
    path: string,
    length: string,
    selected: boolean,
    center: { x: number, y: number },
}

export const toggleLoop = (loop: Loop) => {
  loop.selected = !loop.selected
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
