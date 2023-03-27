declare interface boardObj {
  pos: number
  zone: number
  highlight: boolean
  occupied: number | null
  edgeN: number | null
  edgeS: number | null
  edgeE: number | null
  edgeW: number | null
  edgeNW: number | null
  edgeNE: number | null
  edgeSE: number | null
  edgeSW: number | null
}

declare interface gameObj {
  pos: number
  zone: number
  highlight: boolean
  occupied: number
  edgeN: number
  edgeS: number
  edgeE: number
  edgeW: number
  edgeNW: number
  edgeNE: number
  edgeSE: number
  edgeSW: number
}

declare interface pathObj {
  N: number[],
  S: number[],
  E: number[],
  W: number[],
  NW: number[],
  NE: number[],
  SE: number[],
  SW: number[]
}