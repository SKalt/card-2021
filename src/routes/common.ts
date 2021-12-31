export type Coordinate = [number, number];
export type Coords = Array<Coordinate>;

export type Book = {
  title: string;
  author?: string;
  coords: Coords;
  recommended?: boolean;
  component?: any;
};

export const snake_case = (input: string) =>
  input
    .replace("'", "")
    .split(/[^0-9a-zA-Z]+/g)
    .map((s) => s.toLowerCase())
    .join("_");

export const drawShape = (ctx: CanvasRenderingContext2D, coords: Coords) => {
  coords = [...coords];
  const [x, y] = coords.pop();
  ctx.moveTo(x, y);
  ctx.beginPath();
  while (coords.length) {
    let [x, y] = coords.pop();
    ctx.lineTo(x, y);
  }
  ctx.lineTo(x, y);
  ctx.closePath();
  ctx.stroke();
};
export const defaultDraw = (canvas: HTMLCanvasElement, coords: Coords) => {
  const ctx = canvas.getContext("2d");
  ctx.setLineDash([15, 15]);
  ctx.lineWidth = 4;
  ctx.strokeStyle = "rgba(256, 256, 256, .75)";
  drawShape(ctx, coords);
};
export const recommendedDraw = (canvas: HTMLCanvasElement, coords: Coords) => {
  const ctx = canvas.getContext("2d");
  ctx.setLineDash([0, 0]);
  ctx.lineWidth = 4;
  ctx.strokeStyle = "#fff";
  drawShape(ctx, coords);
};
export const clear = (canvas: HTMLCanvasElement) => {
  canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
};
