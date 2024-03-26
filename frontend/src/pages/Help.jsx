import React from 'react'
import Sidebar from '../components/Sidebar'

const Help = () => {
    return (
        <div>
            <Sidebar>
                <div className="helppage">
                    <div className='page-title'>Help</div><br />
                    <div className="help-container">
                        <div className="hc-title">How to use Practice Log?</div>
                        <div className="hc-content">To use the Practice Log, there are <span>3 fields</span> you need to fill out: Date, Duration, and Notes</div>
                        <div className="hc-content">Once those are filled out, click "Add Session" and it will be save to your data.</div>
                        <div className="hc-content">Each practice session can be edited or deleted. You will be able to view your latest session on your Dashboard. </div>
                    </div><br/>
                    <div className="help-container">
                        <div className="hc-title">How to use Goal Setting?</div>
                        <div className="hc-content">To use the Goal Setting, there are <span>2 fields</span> you need to fill out: Title and Description</div>
                        <div className="hc-content">Once those are filled out, click "Set Goal" and it will be save to your data.</div>
                        <div className="hc-content">Each goal can be edited or deleted. You will be able to view your latest goal on your Dashboard.</div>
                    </div><br/>
                    <div className="help-container">
                        <div className="hc-title">How to use Public Forum?</div>
                        <div className="hc-content">To use the create a Forum post, there are <span>2 fields</span> you need to fill out: Title and Description</div>
                        <div className="hc-content">Once those are filled out, click "Submit" and it will be publicly visible.</div>
                        <div className="hc-content">Anyone can like your post and to comment on your post.</div>
                    </div>
                </div>
            </Sidebar>
        </div>
    )
}

export default Help
