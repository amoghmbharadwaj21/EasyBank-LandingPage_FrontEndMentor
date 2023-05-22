import React from 'react'

export default function WhyChooseEB(props) {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);
  return (
    <div className='whyChooseEB-card reveal fade-right'>
      <div id='whyChooseEB-card-logo'>
        <img src={props.source} alt={props.alt}/>
      </div>
      <div id='whyChooseEB-card-title'>{props.title}</div>
      <div id='whyChooseEB-card-description'>{props.description}</div>
    </div>
  )
}
