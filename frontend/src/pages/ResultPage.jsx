import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { answers, questions } = location.state;

  console.log('Answers:', answers);
  console.log('Questions:', questions);

  const calculateResult = () => {
    const counts = { a: 0, b: 0, c: 0, d: 0 };
    for (const answer of Object.values(answers)) {
      counts[answer]++;
    }

    let maxCount = 0;
    let result = '';
    for (const [option, count] of Object.entries(counts)) {
      if (count > maxCount) {
        maxCount = count;
        result = option;
      }
    }

    const instrumentFamilies = {
      a: "Brass",
      b: "Woodwind",
      c: "String",
      d: "Percussion"
    };

    return `You might like the ${instrumentFamilies[result]} instruments!`;
  };

  return (
    <div className=''>
      <div className='resultpage'>
        <h2>Quiz Result</h2>
        <p className='actual-result'>{calculateResult()}</p><br/>
        <p>Want to know more about that family? Join InstruTracker now!</p>
        <section className='join'>
          <button className='join-button' onClick={() => navigate('/register')}>Join Now!</button>
        </section>
      </div>
    </div>

  );
};

export default ResultPage;
