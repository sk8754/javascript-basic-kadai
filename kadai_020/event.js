const beforeText = document.getElementById('text');

const beforeButton = document.getElementById('btn');

beforeButton.addEventListener('click', () => {
    beforeText.textContent = 'ボタンをクリックしました';
});