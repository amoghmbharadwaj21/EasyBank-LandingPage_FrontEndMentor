import React from 'react'

export default function Articles(props) {
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

        <div className="card latest-articles reveal fade-left">
            <img className="card-img-top" src={props.source} alt={props.alt} />
            <div className="card-body">
                <div className='latest-articles-text-name'>{props.name}</div>
                <div className='latest-articles-text-title'>{props.title}</div>
                <div className='latest-articles-text-description'>{props.description}</div>
            </div>
        </div>
    )
}
