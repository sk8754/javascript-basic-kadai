const beforeText = document.getElementById('text');

const beforeButton = document.getElementById('btn');

beforeButton.addEventListener('click', () => {
    setTimeout(() => {
        beforeText.textContent = 'ボタンをクリックしました';
    }, 2000);
});