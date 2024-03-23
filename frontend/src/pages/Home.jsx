import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [quizStarted, setQuizStarted] = useState(false); // State to track if the quiz has started

  const questions = [
    {
      question: "When you listen to music, which sound appeals to you the most?",
      options: [
        { text: "Rich, deep tones", value: "a" },
        { text: "Bright, sparkling tones", value: "b" },
        { text: "Soft, soothing tones", value: "c" },
        { text: "Sharp, percussive tones", value: "d" }
      ]
    },
    {
      question: "How do you prefer to express yourself?",
      options: [
        { text: "Through a powerful and commanding presence", value: "a" },
        { text: "With a cheerful and lively demeanor", value: "b" },
        { text: "By conveying emotion and sensitivity", value: "c" },
        { text: "Through rhythmic patterns and energy", value: "d" }
      ]
    },
    {
      question: "Which environment do you feel most comfortable in?",
      options: [
        { text: "Large concert halls or auditoriums", value: "a" },
        { text: "Outdoor festivals or parties", value: "b" },
        { text: "Intimate cafes or small gatherings", value: "c" },
        { text: "Energetic performances or bustling streets", value: "d" }
      ]
    },
    {
      question: "What's your approach to challenges?",
      options: [
        { text: "With determination and assertiveness", value: "a" },
        { text: "With optimism and enthusiasm", value: "b" },
        { text: "With introspection and contemplation", value: "c" },
        { text: "With adaptability and quick thinking", value: "d" }
      ]
    }
  ];

  const handleAnswer = (optionValue, index) => {
    setAnswers({ ...answers, [index]: optionValue });
    if (index + 1 < questions.length) {
      setCurrentQuestionIndex(index + 1);
    } else {
      navigate('/result', { state: { answers, questions } });
    }
  };

  const startQuiz = () => {
    setQuizStarted(true); // Set quizStarted to true when "Take quiz" button is clicked
  };

  return (
    <div className='container'>
      <div className='homepage'>
        <section className='hero-section'>
          <h1 className='home-title'>InstruTracker</h1>
          <h3 className='home-subtitle'>The next-generation music practice platform.</h3>
          <h5 className='home-subSubtitle'>Track, set goals, share your musical journey in practicing musical instruments with InstruTracker.</h5>
        </section>
        <section className='join'>
          <button className='join-button' onClick={() => navigate('/register')}>Join Now!</button>
        </section>
        <section className='app-features'>
        </section>
        <div className='mini-quiz'>
          {!quizStarted ? ( // Render "Take quiz" button if quiz hasn't started
            <button onClick={startQuiz}>Take Quiz</button>
          ) : (
            <div>
              <h2>{questions[currentQuestionIndex].question}</h2>
              <div>
                {questions[currentQuestionIndex].options.map((option, index) => (
                  <button key={index} onClick={() => handleAnswer(option.value, currentQuestionIndex)}>
                    {option.text}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;





{/* <section className='hero-section'>
        <h1 className='home-title'>InstruTracker</h1>
        <h3 className='home-subtitle'>The next-generation music practice platform.</h3>
        <h5 className='home-subSubtitle'>Track, set goals, share your musical journey in practicing musical instruments with InstruTracker.</h5>
      </section>
      <section className='join'>
        <button className='join-button' onClick={() => navigate('/register')}>Join Now!</button>
      </section>
      <section className='app-features'>
      </section> */}