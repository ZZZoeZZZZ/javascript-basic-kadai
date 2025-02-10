// Dateオブジェクト取得
const today = new Date();

// Dateオブジェクトから年、月、日をそれぞれ取得
const year = today.getFullYear();
const month = today.getMonth();
const date = today.getDate();

// 出力
console.log(year + '年' + month + '月' + date + '日');