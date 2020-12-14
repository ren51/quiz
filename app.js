const quiz =[
    {
        question:'世界一高い山は何ですか？',
        ansewr:[
            '富士山',
            'K2',
            'エベレスト',
            'モンブラン'
        ],
        correct:'エベレスト'
    },
    {
        question:'私の好きなカフェはどれ？',
        ansewr:[
            'スタバ',
            'ドトール',
            'タリーズ',
            'マクドナルド'　
        ],
        correct:'ドトール'
    },
    {
        question:'一番苦いのは？',
        ansewr:[
            'カフェラテ',
            'ブラック',
            'ミルクティー',
            'レモンの皮'
        ],
        correct:'レモンの皮'

    }
];
const quizLen = quiz.length;
let quizIndex = 0;
let score =0;

const $button = document.getElementsByTagName('button');
let buttonLength = $button.length;//buttonの数

//関数クイズの問題分文
const setQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;//問題文
    let buttonIndex = 0;
    //回答ボタン
    while (buttonIndex < buttonLength) {
        $button[buttonIndex].textContent = quiz[quizIndex].ansewr[buttonIndex];
        buttonIndex++;
    }
}
setQuiz();


//判定式
const clickHand = (e) => {
    if (quiz[quizIndex].correct === e.target.textContent) {
        window.alert('正解');
        score++;
    } else {
        window.alert('不正解');
    }

    quizIndex++;
    
    if (quizIndex < quizLen) {
        setQuiz();
    } else {
        window.alert('終了！あなたの正解数は'+score+'/'+quizLen+'です！');

    }
}


// クリック
let clickCount = 0;

while (clickCount < buttonLength) {

    $button[clickCount].addEventListener('click', (e) => {
        clickHand(e);
    });
    clickCount++;
}



