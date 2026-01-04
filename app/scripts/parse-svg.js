import fs from 'fs'
import { DOMParser } from 'xmldom'

const svgFile = 'app/assets/slopes.svg'
const outputFile = 'app/assets/loops.ts'

function parsePath(path, index) {
  const d = path.getAttribute('d')
  const label = path.getAttribute('inkscape:label')
  if (!d || !label) return null
  const splittedLabel = label.split('/');
  const [grade, length, name] = splittedLabel;

  return { 
    id: index + 1,
    label: label,
    name: name,
    grade: grade,
    length: length,
    path: d,
    selected: false,
    center: { x: 0, y: 0 },
  }
}

function extractPaths() {
  const svgContent = fs.readFileSync(svgFile, 'utf8')
  const doc = new DOMParser().parseFromString(svgContent, 'image/svg+xml')
  const paths = Array.from(doc.getElementsByTagName('path'))

  const loops = paths.map(parsePath).filter(Boolean)

  return loops
}

function createFile(loops) {
  const jsContent = `export const loopsData = ${JSON.stringify(loops, null, 2)}\n`
  fs.writeFileSync(outputFile, jsContent)
}

createFile(extractPaths());
console.log("Slopes succesfully parsed");
