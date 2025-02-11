/* ========== 変数・定数宣言 ========== */
// 処理に渡す数字
const number = Math.floor(Math.random() * 10);


/* ========== 関数宣言 ========== */
const square = (num) => {
    return num**2;
}


/* ========== 処理 ========== */
console.log(square(number));