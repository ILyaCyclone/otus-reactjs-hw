export const createMatrix = (cols: number, rows: number, fill: boolean): boolean[][] =>
    Array.from({ length: cols }, () => new Array(rows).fill(fill));

export const createMatrixRandom = (cols: number, rows: number): boolean[][] =>
    Array.from({ length: cols }, () => Array.from({ length: rows }, () => Math.random() < 0.5));

export const toggleElement = (matrix: boolean[][], row: number, col: number): boolean[][] => {
    const clone: boolean[][] = matrix.slice(0);
    clone[row][col] = !clone[row][col];
    return clone;
};
