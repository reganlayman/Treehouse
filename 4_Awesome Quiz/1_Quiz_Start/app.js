//Create Questions
var questions = [
new Question("Who was the first President of the United States?", ["George Washington", "Thomas Jefferson"], "George Washington"),
new Questions("What is the answer to the ultimate Question of Life, the Universe, and Everything?", ["Pi", "42"], "42")
];

//Create Quiz
var quiz = new Quiz(questions);

//Display Quiz
QuizUI.displayNext();