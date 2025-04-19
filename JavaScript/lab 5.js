function sumBeforeMinElement(arr) {
    if (arr.length === 0) return 0;
    const minIndex = arr.indexOf(Math.min(...arr));
    if (minIndex <= 0) return 0;
    return arr.slice(0, minIndex).reduce((sum, num) => sum + num, 0);
}




const array1 = [3.5, 1.2, 4.7, 2.1, 0.9, 5.3];
console.log(sumBeforeMinElement(array1));

const array2 = [5.0, 4.0, 3.0, 2.0, 1.0];
console.log(sumBeforeMinElement(array2));

const array3 = [1.0, 2.0, 3.0];
console.log(sumBeforeMinElement(array3));



function findSaddlePoints(matrix) {
    const saddlePoints = [];

    if (matrix.length === 0 || matrix[0].length === 0) return saddlePoints;

    const rows = matrix.length;
    const cols = matrix[0].length;

    for (let i = 0; i < rows; i++) {
        const row = matrix[i];
        const minInRow = Math.min(...row);

        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === minInRow) {
                let isMaxInCol = true;
                for (let k = 0; k < rows; k++) {
                    if (matrix[k][j] > minInRow) {
                        isMaxInCol = false;
                        break;
                    }
                }

                if (isMaxInCol) {
                    saddlePoints.push({ row: i, col: j });
                }
            }
        }
    }

    return saddlePoints;
}


const matrix = [
    [0, 2, 0],
    [0, 2, 0],
    [0, 2, 0]
];

const saddlePoints = findSaddlePoints(matrix);
console.log("Седловые точки:");
saddlePoints.forEach(point => {
    console.log([${point.row}, ${point.col}], Значение: ${matrix[point.row][point.col]});
});