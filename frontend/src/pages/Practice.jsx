import React from 'react'
import Sidebar from '../components/Sidebar';

const Practice = () => {
  const logNewSession = () => {

  }
    return (
    <div>
      <Sidebar>
        <div className='practicepage'>
          <div className='page-title'>My Practice Log</div>
          <div className="practice-top">
            <form className='newSession' onSubmit={logNewSession}>

            </form>
          </div>
          <div className="recentlogs">
            <div className="rl-title">Recent Practice Sessions:</div>
          </div>

        </div>
      </Sidebar>
    </div>
  )
}

export default Practice
