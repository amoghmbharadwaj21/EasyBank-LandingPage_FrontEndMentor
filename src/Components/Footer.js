import React from 'react'

export default function Footer(props) {
    return (
        <div className='footer'>
            <div className='footer-block social-media-logos'>
                <div>
                    Connect with us
                </div>
                <div className='social-media-logos-connect'>
                    <img className='social-media-logo-image' src={props.facebookSource} alt='facebook logo' />
                    <img className='social-media-logo-image' src={props.youtube} alt='youtube logo' />
                    <img className='social-media-logo-image' src={props.pinterest} alt='pinterest logo' />
                    <img className='social-media-logo-image' src={props.twitter} alt='twitter logo' />
                    <img className='social-media-logo-image' src={props.instagram} alt='instagram logo' />
                </div>
            </div>

            <div className='footer-block links-text'>
                <div className='links-text-block'>
                   
                    <p className='links-text-block-items'>About Us</p>
                    <p className='links-text-block-items'>Contact</p>
                    <p className='links-text-block-items'>Blog</p>
                    

                </div>
                <div className='links-text-block'>
                    
                    <p className='links-text-block-items'>Careers</p>
                    <p className='links-text-block-items'>Support</p>
                    <p className='links-text-block-items'>Privacy Policy</p>
                    
                </div>
            </div>

            <div className='footer-block copyright'>
                <button className='request-button-button'>Request Invite</button>
                <p id='copyright-text'>© Easybank. All Rights Reserved</p>
            </div>
        </div>
    )
}
