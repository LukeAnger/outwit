declare interface boardObj {
  pos: number;
  zone: number;
  highlight: boolean;
  occupied: number | null;
  edgeN: number | null;
  edgeS: number | null;
  edgeE: number | null;
  edgeW: number | null;
  edgeNW: number | null;
  edgeNE: number | null;
  edgeSE: number | null;
  edgeSW: number | null;
}

declare interface gameObj {
  pos: number;
  zone: number;
  highlight: boolean;
  occupied: number;
  [edgeN: string]: number;
  [edgeS: string]: number;
  [edgeE: string]: number;
  [edgeW: string]: number;
  [edgeNW: string]: number;
  [edgeNE: string]: number;
  [edgeSE: string]: number;
  [edgeSW: string]: number;
}

declare interface pathObj {
  [N: string]: number[];
  [S: string]: number[];
  [E: string]: number[];
  [W: string]: number[];
  [NW: string]: number[];
  [NE: string]: number[];
  [SW: string]: number[];
  [SE: string]: number[]
}