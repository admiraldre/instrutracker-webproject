import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [quizStarted, setQuizStarted] = useState(false); 

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
    setQuizStarted(true); 
  };

  return (
    <div className=''>
      <div className='homepage'>
        <section className='hero-section'>
          <h1 className='home-title'>InstruTracker</h1>
          <h3 className='home-subtitle'>The next-generation music practice platform.</h3>
          <h5 className='home-subSubtitle'>Track, set goals, share your musical journey in practicing musical instruments with InstruTracker.</h5>
          <img src="./assets/drums.png" alt="" />
          <section className='join'>
            <button className='join-button' onClick={() => navigate('/register')}>Join Now!</button>
          </section>
        </section>
        <div className='feature-maintitle'>
          <div className="feature-mt">InstruTracker's Features</div>
        </div>
        <section className='app-features'>
          <div className="app-features-section">
            <div className="feature">
              <h1 className='feature-title'>Track</h1>
              <h2 className='feature-description'>Keep tabs on your practice hustle with InstruTracker's Practice Log – your personal practice partner in crime!</h2>
            </div>
          </div>
          <div className="app-features-section">
            <div className="feature">
              <h1 className='feature-title'>Goals</h1>
              <h2 className='feature-description'>Set up cool milestones for yourself! It's like crafting your own quest in a game, but for your music journey!</h2>
            </div>
          </div>
          <div className="app-features-section">
            <div className="feature">
              <h1 className='feature-title'>Collaborate</h1>
              <h2 className='feature-description'>Show off your epic progress to the InstruTracker Crew! Get hyped feedback and high-fives from fellow players on our Public Forum!</h2>
            </div>
          </div>
        </section>
        <div className="testimonials">
          <div className="testimonials-title">Here's what our users say:</div>
          <div className="testimonials-section">
            <p>"InstruTracker has revolutionized my music practice routine. With its intuitive features and supportive community, I've been able to track my progress and stay motivated like never before!"</p>
            <h2>- Emily Smith</h2>
          </div>
          <div className="testimonials-section">
            <p>""As a musician, I've always struggled to set meaningful practice goals. Thanks to InstruTracker, I can now set milestones and track my achievements along the way. It's made practicing both fun and rewarding!"</p>
            <h2>- Alex Johnson</h2>
          </div>
          <div className="testimonials-section">
            <p>"InstruTracker's collaborative forum has been a game-changer for me. Being able to share my musical journey with fellow musicians and receive feedback in real-time has helped me grow and improve faster than I ever thought possible."</p>
            <h2>- Sarah Thompson</h2>
          </div>
          <div className="testimonials-section">
            <p>"I was skeptical at first, but InstruTracker exceeded all my expectations. Not only does it provide powerful tools for tracking practice sessions, but it also fosters a sense of community among musicians. I highly recommend it to anyone serious about their musical development!"</p>
            <h2>- Michael Davis</h2>
          </div>
        </div>
        <div className='quiz-container'>
          <p>Not sure which instruments you want to try first?</p><br />
          {!quizStarted ? (
            <button onClick={startQuiz}>Take Quiz</button>
          ) : (
            <div>
              <h2>{questions[currentQuestionIndex].question}</h2>
              <div className='choices'>
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
