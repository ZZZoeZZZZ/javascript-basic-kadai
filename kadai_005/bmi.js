/* =========== 定数　=========== */
// 体重[kg]
const weight = 68;
// 身長[m]
const height = 1.7;

/* =========== 変数　=========== */
// BMI
let bmi = 0;


/* =========== 処理　=========== */

// BMIを計算
bmi = weight / (height * height);

// コンソールに出力
console.log(bmi);