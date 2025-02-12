// ボタン要素を取得
const btn = document.getElementById('btn');
// h2要素を取得
const text = document.getElementById('text');

// ボタンクリック時のイベント
btn.addEventListener('click', () => {
    // 表示を変更
    text.innerText = 'ボタンをクリックしました';
});
