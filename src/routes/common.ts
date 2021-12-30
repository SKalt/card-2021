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
