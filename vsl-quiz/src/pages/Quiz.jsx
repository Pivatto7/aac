import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import '../styles/Quiz.css';

const questions = [
  {
    question: "¿Cuál es tu mayor obstáculo a la hora de relacionarte con una mujer atractiva?",
    options: [
      "Quedarme completamente en blanco antes de acercarme a ella.",
      "No saber qué decir para mantener la conversación.",
      "Ser ignorado en WhatsApp en los primeros días.",
      "Sentir que no soy lo suficientemente guapo o rico."
    ]
  },
  {
    question: "Cuando intentas iniciar una conversación en Instagram o WhatsApp, ¿qué suele pasar?",
    options: [
      "Ella responde con 'jaja' o respuestas muy cortas.",
      "Me deja en visto y no responde.",
      "La conversación muere muy rápido, siempre.",
      "Ni siquiera lo intento porque creo que me ignorará."
    ]
  },
  {
    question: "¿Cuál de estas opciones describe mejor cómo te sientes cuando ves a un chico común con una mujer muy por encima de la media?",
    options: [
      "Me frustro porque yo podría ser ese chico.",
      "Me siento mal por no tener el mismo valor.",
      "Creo que debe tener mucho dinero.",
      "No me importa, pero me gustaría tener su labia."
    ]
  },
  {
    question: "¿Qué pasa por tu cabeza cuando piensas en abordar a una mujer muy atractiva?",
    options: [
      "'Me va a rechazar y me hará pasar vergüenza'.",
      "'¿Qué le digo que no sea un cliché?'",
      "'Soy demasiado feo/bajo/flaco para ella'.",
      "'Mejor me quedo tranquilo y evito el rechazo'."
    ]
  },
  {
    question: "Si pudieras resolver solo UN problema hoy, ¿cuál sería?",
    options: [
      "Perder el miedo y tener una actitud inquebrantable.",
      "Tener un arsenal de mensajes listos para que responda de inmediato.",
      "Tener un paso a paso de qué decirle en persona.",
      "Entender de una vez por todas cómo hacerme atractivo."
    ]
  }
];

const letters = ['A', 'B', 'C', 'D'];

export default function Quiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [status, setStatus] = useState('quiz'); // quiz, loading, result
  const navigate = useNavigate();

  const handleOptionClick = () => {
    if (currentStep < questions.length - 1) {
      if (currentStep === questions.length - 2) {
        setIsTransitioning(true);
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentStep(currentStep + 1);
        }, 1500);
      } else {
        setCurrentStep(currentStep + 1);
      }
    } else {
      setStatus('loading');
      setTimeout(() => setStatus('result'), 3000);
    }
  };

  const progressPercentage = ((currentStep) / questions.length) * 100;

  if (status === 'loading') {
    return (
      <div className="quiz-container">
        <div className="quiz-content" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className="loading-spinner"></div>
          <h2 className="loading-text">Analizando tus patrones de comportamiento...</h2>
        </div>
      </div>
    );
  }

  if (status === 'result') {
    return (
      <div className="quiz-container">
        <div className="quiz-content" style={{ textAlign: 'center' }}>
          <h1 className="diagnostic-title">
            Tu problema <span className="diagnostic-highlight">no es tu apariencia...</span>
          </h1>
          <p className="diagnostic-text">
            La verdadera razón por la que te quedas en blanco, te ignoran o te dejan en visto tiene que ver con un error invisible de <strong>comunicación de alto valor</strong> que cometes sin darte cuenta.
          </p>
          <p className="diagnostic-text" style={{ fontSize: '1rem' }}>
            Hemos mapeado exactamente en qué te estás equivocando. La buena noticia es que esto es fácil de arreglar (incluso si eres el tipo más introvertido del mundo).
          </p>
          <button onClick={() => navigate('/vsl')} className="cta-button">
            Ver cómo resolverlo ahora <ArrowRight size={20} />
          </button>
        </div>
      </div>
    );
  }

  if (isTransitioning) {
    return (
      <div className="quiz-container">
        <div className="transition-text">Última pregunta...</div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="quiz-content">
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progressPercentage}%` }}></div>
        </div>
        <h2 className="question-text">{questions[currentStep].question}</h2>
        
        <div className="options-container">
          {questions[currentStep].options.map((opt, index) => (
            <button 
              key={index} 
              className="option-btn"
              onClick={handleOptionClick}
            >
              <div className="option-content">
                <div className="option-letter">{letters[index]}</div>
                <span>{opt}</span>
              </div>
              <ChevronRight size={18} color="var(--text-muted)" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
