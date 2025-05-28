function checkOrthonormalVectors(vector1, vector2) {

    if (vector1.length !== vector2.length) {
        throw new Error("Ошибка: Длины векторов различаются");
    }

    let dotProduct = 0;
    for (let i = 0; i < vector1.length; i++) {
        dotProduct += vector1[i] * vector2[i];
    }

    if (Math.abs(dotProduct) > 1e-10) { //погрешность вычислений
        return false;
    }

    const norm1 = Math.sqrt(vector1.reduce((sum, x) => sum + x * x, 0));
    const norm2 = Math.sqrt(vector2.reduce((sum, x) => sum + x * x, 0));

    const isNormalized1 = Math.abs(norm1 - 1) < 1e-10;
    const isNormalized2 = Math.abs(norm2 - 1) < 1e-10;

    if (isNormalized1 && isNormalized2) {
        return true;
    }

    const normalizedVector1 = vector1.map(x => x / norm1);
    const normalizedVector2 = vector2.map(x => x / norm2);

    return [normalizedVector1, normalizedVector2];
}

try {
    const vector1 = [1, 0];
    const vector2 = [0, 1];
    console.log(checkOrthonormalVectors(vector1, vector2));
    // true

    const vector3 = [2, 0];
    const vector4 = [0, 3];
    console.log(checkOrthonormalVectors(vector3, vector4));
    // [[1, 0], [0, 1]]

    const vector5 = [1, 1];
    const vector6 = [1, -1];
    console.log(checkOrthonormalVectors(vector5, vector6));
    // false (не ортогональны)

    const vector7 = [1, 0, 0];
    const vector8 = [0, 1];
    console.log(checkOrthonormalVectors(vector7, vector8));
    // Ошибка: Длины векторов различаются
} catch (error) {
    console.error(error.message);
}