import React, { useEffect, useState } from 'react';
import { PlayCircle, ShieldCheck, Check, TrendingUp, Key, Zap, MessageSquareWarning } from 'lucide-react';
import '../styles/VSL.css';
import basicImage from '../assets/basic.jpg';
import proImage from '../assets/pro.jpg';

export default function VSL() {
  const [showPitch, setShowPitch] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPitch(true);
    }, 208000); // 3:28 min em ms

    const s = document.createElement("script");
    s.src = "https://scripts.converteai.net/7f6a95c8-9d58-4683-95f9-5644ba159913/players/69d158cdc5b65f18922e9aab/v4/player.js";
    s.async = true;
    document.head.appendChild(s);

    return () => clearTimeout(timer);
  }, []);

  const ctaText = "Quero destravar minha confiança agora";

  const basicFeatures = [
    "Guia direto: como chegar em mulher sem travar",
    "10 scripts de mensagens prontas pra usar (Insta/Whats)",
    "Os 3 erros que fazem mulher perder interesse",
    "Mini passo a passo pra sair do zero à 1ª conversa",
    "Checklist: o que fazer antes de falar com ela"
  ];

  const proFeatures = [
    "TUDO DO PLANO BÁSICO",
    "Aplicativo AAC (Acesso Antecipado)",
    "Scripts completos e adaptáveis",
    "Robô de resposta (mande o print e ele te diz o que falar)",
    "Como flertar sem parecer estranho",
    "Como manter a conversa interessante",
    "O que falar depois que ela responde",
    "Como não cair no vácuo de novo",
    "Estratégia para levar pro encontro rápido",
    "Cantadas testadas que funcionam",
    "O que responder nos Stories dela",
    "Guia Extremo de Atitude, Abordagem e Comunicação"
  ];

  const bonuses = [
    { title: 'Pack "Respostas Pro Vácuo"', desc: "Mensagens prontas pra quando ela para de responder." },
    { title: 'Quebra-Gelo Infinito', desc: "+30 formas de iniciar conversa sem parecer estranho." },
    { title: 'Guia de Flertar Sem Ser Forçado', desc: "Demonstre interesse sem parecer carente." },
    { title: 'Método "Puxou, Conectou, Chamou"', desc: "Passo a passo simples e direto de abordagem." },
    { title: 'Erros que Te Fazem Ser Ignorado', desc: "Lista direta dos comportamentos letais." }
  ];

  const scrollToPricing = () => {
    document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="vsl-page">
      <section className="hero-section">
        <h1 className="headline">
          Como parar de ser <span className="headline-highlight">ignorado</span> e chegar em mulheres acima da média
        </h1>

        <div className="video-container">
          <vturb-smartplayer id="vid-69d158cdc5b65f18922e9aab" style={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '400px' }}></vturb-smartplayer>
        </div>

        {showPitch && (
          <div className="buy-button-wrapper">
            <button onClick={scrollToPricing} className="buy-button">
              {ctaText} <Zap size={20} />
            </button>
          </div>
        )}
      </section>

      {showPitch && (
        <>
          <section className="benefits-section">
        <div className="benefits-container">
          <h2 className="section-title">O Que Você Vai Aprender Hoje:</h2>
          <div className="benefits-list">
            <div className="benefit-item">
              <Key className="benefit-icon" size={24} />
              <div className="benefit-text">
                <strong>A Chave Mestra da Comunicação:</strong> Pare de buscar "frases prontas" no Google. Entenda como criar desejo instantâneo a partir do momento em que você abre a boca.
              </div>
            </div>
            <div className="benefit-item">
              <MessageSquareWarning className="benefit-icon" size={24} />
              <div className="benefit-text">
                <strong>O Fim do Vácuo no WhatsApp:</strong> Descubra o padrão exato que os homens confiantes usam para fazer uma mulher responder rápido e manter o interesse.
              </div>
            </div>
            <div className="benefit-item">
              <TrendingUp className="benefit-icon" size={24} />
              <div className="benefit-text">
                <strong>Evolução de Zero a Encontro:</strong> Um mapa direto e sem enrolação, dizendo exatamente o que fazer antes de abordar e como chamar para sair sem ser rejeitado.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hero-section" style={{ padding: '3rem 1.5rem 0' }}>
        <p className="subheadline" style={{ color: '#fff', fontSize: '1.4rem' }}>
          Você não precisa nascer com sorte, dinheiro ou parecer um modelo fitness. Precisa apenas do roteiro certo.
        </p>
      </section>

      <section id="pricing" className="pricing-section">
        <h2 className="section-title" style={{ marginBottom: '1rem' }}>Escolha o seu plano</h2>
        <div className="pricing-grid">

          {/* Basic Plan */}
          <div className="pricing-card">
            <img src={basicImage} alt="Mockup do Guia O Que Falar" style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', borderRadius: '8px', marginBottom: '1.5rem', border: '1px solid var(--surface-border)' }} />
            <h3 className="plan-name">Plano Básico</h3>
            <div className="plan-price">
              <span className="price-currency">R$</span>
              <span>27</span>
              <span className="price-currency" style={{ marginTop: 'auto', marginBottom: '0.5rem', marginLeft: '2px' }}>,00</span>
            </div>
            <ul className="plan-features">
              {basicFeatures.map((feat, i) => (
                <li key={i} className="feature-item">
                  <Check size={18} color="var(--primary-red)" style={{ flexShrink: 0 }} />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
            <button onClick={() => window.location.href = 'https://ggcheckout.app/checkout/v5/2OFxJPywnmdIHXBqAep1'} className="buy-button" style={{ fontSize: '1rem', padding: '1rem' }}>
              Finalizar Compra
            </button>
          </div>

          {/* Pro Plan */}
          <div className="pricing-card pro">
            <div className="popular-badge">Mais Escolhido</div>
            <img src={proImage} alt="Mockups de todos os bônus exclusivos" style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', borderRadius: '8px', marginBottom: '1.5rem', marginTop: '0.5rem', border: '1px solid var(--primary-red)' }} />
            <h3 className="plan-name">Plano PRO <span style={{ color: 'var(--primary-red)' }}>+ Bônus Vip</span></h3>
            <div style={{ textDecoration: 'line-through', color: 'var(--primary-red)', fontSize: '1.1rem', opacity: 0.8, marginTop: '0.5rem' }}>De R$ 197,00</div>
            <div style={{ color: 'var(--text-muted)', fontSize: '1rem', marginTop: '0.2rem', marginBottom: '0' }}>Por apenas:</div>
            <div className="plan-price">
              <span className="price-currency">R$</span>
              <span>47</span>
              <span className="price-currency" style={{ marginTop: 'auto', marginBottom: '0.5rem', marginLeft: '2px' }}>,00</span>
            </div>
            <ul className="plan-features">
              {proFeatures.map((feat, i) => (
                <li key={`pro-${i}`} className="feature-item">
                  <Check size={18} color="var(--primary-red)" style={{ flexShrink: 0 }} />
                  <span style={i === 0 ? { fontWeight: 'bold' } : {}}>{feat}</span>
                </li>
              ))}
              <div style={{ height: '1px', backgroundColor: 'var(--surface-border)', margin: '1rem 0' }}></div>
              <p style={{ fontWeight: 'bold', color: '#fbbf24', marginBottom: '0.5rem' }}>🔥 5 Bônus se levar Hoje:</p>
              {bonuses.map((bonus, i) => (
                <li key={`bonus-${i}`} className="feature-item bonus">
                  <Zap size={18} color="#fbbf24" style={{ flexShrink: 0 }} />
                  <span><strong>{bonus.title}</strong>: {bonus.desc}</span>
                </li>
              ))}
            </ul>
            <button onClick={() => window.location.href = 'https://ggcheckout.app/checkout/v5/KBJkmfI8656y3k7xaNAa'} className="buy-button" style={{ fontSize: '1.2rem', padding: '1.2rem' }}>
              Quero o PRO Agora
            </button>
          </div>

        </div>
      </section>

      <section className="guarantee-section">
        <ShieldCheck size={80} className="guarantee-icon" />
        <div className="guarantee-content">
          <h3>Garantia Incondicional de 7 Dias</h3>
          <p>Seja por qualquer motivo, se você não sentir sua confiança disparar, basta um e-mail para ter 100% do seu dinheiro de volta. Você não corre nenhum risco.</p>
        </div>
      </section>

      <div className="buy-button-wrapper" style={{ marginBottom: '5rem' }}>
        <button onClick={scrollToPricing} className="buy-button" style={{ maxWidth: '800px' }}>
          {ctaText} <Zap size={20} />
        </button>
      </div>
        </>
      )}

    </div>
  );
}
