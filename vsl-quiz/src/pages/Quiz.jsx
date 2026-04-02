import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import '../styles/Quiz.css';

const questions = [
  {
    question: "Qual é o seu maior obstáculo na hora de se relacionar com uma mulher atraente?",
    options: [
      "Travar completamente antes de chegar nela.",
      "Não saber o que falar pra manter a conversa.",
      "Tomar vácuo no WhatsApp logo nos primeiros dias.",
      "Sentir que não sou bonito ou rico o suficiente."
    ]
  },
  {
    question: "Quando você tenta puxar assunto no Instagram ou WhatsApp, o que costuma acontecer?",
    options: [
      "Ela responde com 'kkk' ou respostas muito curtas.",
      "Visualiza e não responde (o famoso vácuo).",
      "A conversa morre muito rápido, sempre.",
      "Eu nem tento porque acho que vou ser ignorado."
    ]
  },
  {
    question: "Qual destas opções descreve melhor o seu sentimento quando vê um cara comum com uma mulher muito acima da média?",
    options: [
      "Fico frustrado porque eu poderia ser aquele cara.",
      "Me sinto mal por não ter a mesma coragem.",
      "Acho que ele deve ter muito dinheiro.",
      "Não ligo, mas queria ter a mesma lábia."
    ]
  },
  {
    question: "O que passa na sua cabeça quando você pensa em abordar uma mulher muito gata?",
    options: [
      "'Ela vai me esnobar e me fazer passar vergonha'.",
      "'O que eu vou falar que não seja clichê?'",
      "'Sou feio/baixo/magro demais pra ela'.",
      "'Melhor ficar na minha e evitar a rejeição'."
    ]
  },
  {
    question: "Se você pudesse resolver apenas UM problema hoje, qual seria?",
    options: [
      "Perder o medo e ganhar atitude inabalável.",
      "Ter um arsenal de mensagens prontas para ela responder na hora.",
      "Ter um passo a passo do que falar pessoalmente.",
      "Entender definitivamente como se tornar atraente."
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
          <h2 className="loading-text">Analisando seus padrões de comportamento...</h2>
        </div>
      </div>
    );
  }

  if (status === 'result') {
    return (
      <div className="quiz-container">
        <div className="quiz-content" style={{ textAlign: 'center' }}>
          <h1 className="diagnostic-title">
            Seu problema <span className="diagnostic-highlight">não é aparência...</span>
          </h1>
          <p className="diagnostic-text">
            O verdadeiro motivo de você travar, ser ignorado ou tomar vácuo tem a ver com um erro invisível de <strong>comunicação de alto valor</strong> que você comete sem perceber.
          </p>
          <p className="diagnostic-text" style={{ fontSize: '1rem' }}>
            Nós mapeamos exatamente onde você está errando. A boa notícia é que isso é simples de consertar (mesmo se você for o cara mais introvertido do mundo).
          </p>
          <button onClick={() => navigate('/vsl')} className="cta-button">
            Ver como resolver isso agora <ArrowRight size={20} />
          </button>
        </div>
      </div>
    );
  }

  if (isTransitioning) {
    return (
      <div className="quiz-container">
        <div className="transition-text">Última pergunta...</div>
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
