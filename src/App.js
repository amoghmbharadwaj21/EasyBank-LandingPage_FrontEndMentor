import './App.css';
import Intro from './Components/Intro';
import Navbar from './Components/Navbar';
import logo from './images/logo.svg';
import bgIntro from './images/bg-intro-desktop.svg';
import mockUpImage from './images/image-mockups.png';
import WhyChooseEB from './Components/WhyChooseEB';
import onlineBanking from './images/icon-online.svg'
import simpleBudgeting from './images/icon-budgeting.svg'
import fastOnboarding from './images/icon-onboarding.svg'
import openAPI from './images/icon-api.svg'
import Articles from './Components/Articles';
import currency from './images/image-currency.jpg';
import restaurant from './images/image-restaurant.jpg';
import plane from './images/image-plane.jpg';
import confetti from './images/image-confetti.jpg';
import Footer from './Components/Footer';
import facebook from './images/icon-facebook.svg'
import youtube from './images/icon-youtube.svg'
import pinterest from './images/icon-pinterest.svg'
import twitter from './images/icon-twitter.svg'
import instagram from './images/icon-instagram.svg'
import hamburgerImage from './images/icon-hamburger.svg'

function App() {
  return (
    <>
      <Navbar source={logo} hamburger={hamburgerImage}/>
      <Intro bgIntroSource={bgIntro} mockUpImageSource={mockUpImage} />
      <div className='choose-easybank-main'>
        <div className='main-title reveal fade-right'>Why choose Easybank?</div>
        <div className='choose-easybank-main-description reveal fade-right'>We leverage Open Banking to turn your bank account into your financial hub.<br /> Control your finances like never before.</div>
        <div className='choose-easybank-main-cards'>
          <WhyChooseEB source={onlineBanking} alt='online icon' title='Online Banking' description='Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.' />
          <WhyChooseEB source={simpleBudgeting} alt='simple budgeting icon' title='Simple Budgeting' description="See exactly where your money goes each month. Receive notifications when you're close to hitting your limits." />
          <WhyChooseEB source={fastOnboarding} alt='fast onboarding icon' title='Fast Onboarding' description="We don't do branches. Open your account in minutes online and start taking control of your finances right away." />
          <WhyChooseEB source={openAPI} alt='open API icon' title='Open API' description='Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.' />
        </div>
      </div>
      <div className='latest-articles-main'>
        <div className='main-title latest-articles-main-title reveal fade-left'>Latest Articles</div>
        <div className='latest-articles-main-cards'>
          
            <Articles source={currency} alt='currency image' name='By Claire Robinson' title='Receive money in any currency with no fees' description="The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single ..." />
            <Articles source={restaurant} alt='restaurant image' name='By Wilson Hutton' title='Treat yourself without worrying about money' description="Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ..." />
          
            <Articles source={plane} alt='plane image' name='By Wilson Hutton' title='Take your Easybank card wherever you go' description="We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show ..." />
            <Articles source={confetti} alt='confetti image' name='By Claire Robinson' title='Our invite-only Beta accounts are now live!' description="After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through ..." />
          
        </div>
      </div>
      <Footer mainLogo={logo} facebookSource={facebook} youtube={youtube} pinterest={pinterest} twitter={twitter} instagram={instagram} />

    </>

  );
}

export default App;
