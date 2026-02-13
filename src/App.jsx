import { useState } from 'react'
import './App.css'

function App() {
  const [currentStep, setCurrentStep] = useState('initial')
  const [noCount, setNoCount] = useState(0)

  const handleYes = () => {
    setCurrentStep('yes')
  }

  const handleNo = () => {
    setNoCount(prev => prev + 1)
    if (noCount >= 3) {
      setCurrentStep('persistent')
    }
  }

  const renderInitial = () => (
    <div className="card">
      <div className="emoji-header">
        <span className="emoji sick">🤧</span>
        <span className="emoji heart">💕</span>
        <span className="emoji sick">🤒</span>
      </div>
      
      <h1 className="title">
        Hey Beautiful! 💖
      </h1>
      
      <div className="message">
        <p>I know I have the flu and I'm probably looking like a mess right now... 
        <span className="emoji">🤧</span></p>
        
        <p><strong>BUT</strong> it's Valentine's Day tomorrow and I can't let a little sickness 
        stop me from asking the most amazing person in the world something important!</p>
        
        <div className="question-box">
          <h2 className="question">
            Will you go out with me on Valentine's Day? 
            <span className="heart-beat">❤️</span>
          </h2>
          <p className="sub-question">
            (I promise to keep my distance and wear a mask! 😷💕)
          </p>
        </div>
        
        <div className="button-container">
          <button 
            className="yes-btn" 
            onClick={handleYes}
            onMouseEnter={() => document.querySelector('.yes-btn').style.transform = 'scale(1.1)'}
            onMouseLeave={() => document.querySelector('.yes-btn').style.transform = 'scale(1)'}
          >
            Yes! 💕
          </button>
          <button 
            className="no-btn" 
            onClick={handleNo}
            style={{
              transform: noCount > 0 ? `translate(${Math.random() * 200 - 100}px, ${Math.random() * 100 - 50}px)` : 'none'
            }}
          >
            {noCount === 0 ? 'No 💔' : noCount === 1 ? 'Still No? 🥺' : noCount === 2 ? 'Please? 🥺👉👈' : 'Come on! 😭'}
          </button>
        </div>
      </div>
    </div>
  )

  const renderYes = () => (
    <div className="card celebration">
      <div className="confetti">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`confetti-piece confetti-${i % 4}`}></div>
        ))}
      </div>
      
      <div className="emoji-header">
        <span className="emoji celebration">🎉</span>
        <span className="emoji heart big">💖</span>
        <span className="emoji celebration">🥳</span>
      </div>
      
      <h1 className="title success">
        YESSSS!! 🎉
      </h1>
      
      <div className="message">
        <p>You just made the sickest (literally 🤧) but happiest person in the world!</p>
        
        <div className="promise-box">
          <h3>My Valentine's Day Promises:</h3>
          <ul>
            <li>😷 I'll wear a mask (a cute one!)</li>
            <li>🧴 I'll bring hand sanitizer</li>
            <li>🌹 I'll still bring you flowers (from a safe distance)</li>
            <li>🍫 I'll get you your favorite chocolates</li>
            <li>💕 I'll make it the most romantic socially-distant date ever!</li>
          </ul>
        </div>
        
        <div className="love-note">
          <p>Even with a runny nose and a cough, you still said yes to me. 
          That's how I know you're the one! 💕</p>
        </div>
        
        <button 
          className="restart-btn"
          onClick={() => setCurrentStep('initial')}
        >
          Ask me again! 💕
        </button>
      </div>
    </div>
  )

  const renderPersistent = () => (
    <div className="card persistent">
      <div className="emoji-header">
        <span className="emoji">🥺</span>
        <span className="emoji heart">💔</span>
        <span className="emoji">😷</span>
      </div>
      
      <h1 className="title">
        But... but... 🥺
      </h1>
      
      <div className="message">
        <p>Look, I know I'm sick and probably not the most attractive right now...</p>
        <p>But I was really hoping we could do something special for Valentine's Day!</p>
        
        <div className="alternatives-box">
          <h3>How about these alternatives? 🤔</h3>
          <ul>
            <li>📱 A virtual date over video call?</li>
            <li>🏠 I could drop off goodies at your door?</li>
            <li>💌 We could write love letters to each other?</li>
            <li>🎬 Watch a movie together online?</li>
          </ul>
        </div>
        
        <p className="plea">
          Come on... it's Valentine's Day! Even sick me deserves love! 😷💕
        </p>
        
        <div className="button-container">
          <button 
            className="yes-btn" 
            onClick={handleYes}
          >
            Fine, yes! 💕
          </button>
          <button 
            className="maybe-btn"
            onClick={() => setCurrentStep('initial')}
          >
            Let me think... 🤔
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <div className="app">
      <div className="background-hearts">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i} 
            className="floating-heart"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              fontSize: `${Math.random() * 20 + 15}px`
            }}
          >
            💕
          </div>
        ))}
      </div>
      
      <main>
        {currentStep === 'initial' && renderInitial()}
        {currentStep === 'yes' && renderYes()}
        {currentStep === 'persistent' && renderPersistent()}
      </main>
      
      <footer>
        <p className="footer-text">
          Made with 💕 (and a stuffy nose 🤧) for the most amazing person ever!
        </p>
      </footer>
    </div>
  )
}

export default App