const quizData = [
    {
        question: 'What is Idaho area code?',
        a: '110',
        b: '911',
        c: '208',
        d: '385',
        correct: 'c'
    },{
        question: 'Where does BYU-Idaho locate?',
        a: 'Rexburg',
        b: 'Idaho Falls',
        c: 'Twin Falls',
        d: 'Boise',
        correct: 'a'
    },{
        question: 'HTML stands for?',
        a: 'Hey Taylor Misses Larry',
        b: 'Hypertext Markup Language',
        c: 'Hippie Travel Mobile Land',
        d: 'Homo Toby Married Lesbian',
        correct: 'b'
    },{
        question: 'How would you say Hello in Mandarin?',
        a: 'Wowow',
        b: 'LeHo',
        c: 'Ni2Hao3',
        d: 'LiHo',
        correct: 'c'
    },{
        question: 'What is the name of worldwide virus in 2020',
        a: 'Mimo-20',
        b: 'Covid-19',
        c: 'Trump-19',
        d: 'Wuhan-20',
        correct: 'b'
    }
];
const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const answerEl = document.querySelectorAll('.option');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuestion = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswer();
    const currentQuizData = quizData[currentQuestion];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}
function getSelected(){
    
    let answer = undefined;
    answerEl.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
}
function deselectAnswer(){
    answerEl.forEach((answerEl) => {
        answerEl.checked = false;
    });
}
submitBtn.addEventListener('click', () => {
    //check to see the answer
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuestion].correct){
            score++;
        }

        currentQuestion++;
        if(currentQuestion < quizData.length){
            loadQuiz();
        } else{
            //TODO: Show results
            quiz.innerHTML = `<h2>You got ${score} out of ${quizData.length}.</h2><button onClick="location.reload()">Reload</button>`
        }
    }
    
});