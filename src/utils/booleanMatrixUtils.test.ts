import { createMatrix, toggleElement, createMatrixRandom } from "./booleanMatrixUtils";

describe("booleanMatrixUtils", () => {
    it("createMatrix of false", () => {
        const matrix: boolean[][] = createMatrix(2, 3, false);

        expect(matrix).toStrictEqual([
            [false, false, false],
            [false, false, false]
        ]);
    });

    it("createMatrix of true", () => {
        const matrix: boolean[][] = createMatrix(3, 2, true);

        expect(matrix).toStrictEqual([
            [true, true],
            [true, true],
            [true, true]
        ]);
    });

    it("toggleElement", () => {
        const initial: boolean[][] = [
            [false, false, false],
            [false, false, false]
        ];

        const result: boolean[][] = toggleElement(initial, 1, 2);

        expect(result).toStrictEqual([
            [false, false, false],
            [false, false, true]
        ]);
    });

    it("createMatrixRandom", () => {
        const matrix: boolean[][] = createMatrixRandom(2, 3);

        expect(matrix).toHaveLength(2);
        matrix.forEach((row) => expect(row).toHaveLength(3));
    });
});
