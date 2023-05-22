import React from 'react'

export default function Intro(props) {
   
    return (
        <div className='intro-section'>
            <div className='intro-section-text'>
                <div id='intro-section-text-heading'>Next generation digital banking</div>
                <div id='intro-section-text-para'>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</div>
                <div className='intro-section-button'>
                <button className='request-button-button'>Request Invite</button>
                </div>
            </div>
            <div className='intro-section-image'>
                
                <div id='mockup-image-div'><img id='mockup-image' src={props.mockUpImageSource} alt='mock up '/></div>
                
                
            </div>
        </div>
    )
}
