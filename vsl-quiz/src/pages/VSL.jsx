import React, { useEffect, useState } from 'react';
import { PlayCircle, ShieldCheck, Check, TrendingUp, Key, Zap, MessageSquareWarning } from 'lucide-react';
import '../styles/VSL.css';
import proImage from '../assets/pro.png';

export default function VSL() {
  const [showPitch, setShowPitch] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPitch(true);
    }, 170000); // 2:50 min em ms

    const s = document.createElement("script");
    s.src = "https://scripts.converteai.net/7f6a95c8-9d58-4683-95f9-5644ba159913/players/69d58fb384e8b7c7228550d4/v4/player.js";
    s.async = true;
    document.head.appendChild(s);

    return () => clearTimeout(timer);
  }, []);

  const ctaText = "Quiero desbloquear mi confianza ahora";

  const basicFeatures = [
    "Guía directa: cómo acercarte a una mujer sin quedarte en blanco",
    "10 scripts de mensajes listos para usar (Insta/Whats)",
    "Los 3 errores que hacen que una mujer pierda el interés",
    "Mini paso a paso para pasar de cero a la 1ª conversación",
    "Checklist: qué hacer antes de hablar con ella"
  ];

  const proFeatures = [
    "TODO LO DEL PLAN BÁSICO",
    "Aplicativo AAC (Acceso Anticipado)",
    "Scripts completos y adaptables",
    "Cómo coquetear sin parecer raro",
    "Qué decir luego que ella responde",
    "Cómo no caer en el silencio incómodo",
    "Estrategia para llevarla al encuentro rápido",
    "Qué responder a sus historias",
    "Guía Extrema de Actitud, Abordaje y Comunicación"
  ];

  const bonuses = [
    { title: 'Pack "Respuestas para el silencio incómodo"', desc: "Mensajes listos para cuando ella deja de responder." },
    { title: 'Rompehielo Infinito', desc: "+30 aperturas listas." },
    { title: 'Guía de Ligue Natural', desc: "Demuestra interés sin parecer necesitado." },
    { title: 'Método "Engancha, conecta, llama"', desc: "Paso a paso simple y directo para el abordaje." },
    { title: 'Errores que te hacen ser ignorado', desc: "Lista directa de los comportamientos letales." }
  ];

  const scrollToPricing = () => {
    document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="vsl-page">
      <section className="hero-section">
        <h1 className="headline">
          Cómo dejar de ser <span className="headline-highlight">ignorado</span> y acercarte a mujeres por encima de la media
        </h1>

        <div className="video-container">
          <vturb-smartplayer id="vid-69d58fb384e8b7c7228550d4" style={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '400px' }}></vturb-smartplayer>
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
              <h2 className="section-title">Lo que aprenderás hoy:</h2>
              <div className="benefits-list">
                <div className="benefit-item">
                  <Key className="benefit-icon" size={24} />
                  <div className="benefit-text">
                    <strong>La Llave Maestra de la Comunicación:</strong> Deja de buscar "frases hechas" en Google. Entiende cómo crear deseo instantáneo desde el momento en que abres la boca.
                  </div>
                </div>
                <div className="benefit-item">
                  <MessageSquareWarning className="benefit-icon" size={24} />
                  <div className="benefit-text">
                    <strong>El Fin del Silencio Incómodo en WhatsApp:</strong> Descubre el patrón exacto que usan los hombres seguros para lograr que una mujer responda rápido y mantenga el interés.
                  </div>
                </div>
                <div className="benefit-item">
                  <TrendingUp className="benefit-icon" size={24} />
                  <div className="benefit-text">
                    <strong>Evolución de Cero a la Cita:</strong> Un mapa directo y sin rodeos, que te dice exactamente qué hacer antes de acercarte y cómo invitarla a salir sin ser rechazado.
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="hero-section" style={{ padding: '3rem 1.5rem 0' }}>
            <p className="subheadline" style={{ color: '#fff', fontSize: '1.4rem' }}>
              No necesitas haber nacido con suerte, dinero o lucir como un modelo fitness. Solo necesitas el guion correcto.
            </p>
          </section>

          <section id="pricing" className="pricing-section">
            <h2 className="section-title" style={{ marginBottom: '1rem' }}>Elige tu plan</h2>
            <div className="pricing-grid">

              {/* Basic Plan */}
              <div className="pricing-card">
                <h3 className="plan-name">Plan Básico</h3>
                <div className="plan-price">
                  <span className="price-currency">$</span>
                  <span>5</span>
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
                <a href={`https://pay.kiwify.com/orpbu60${window.location.search}`} className="buy-button" style={{ fontSize: '1rem', padding: '1rem', textDecoration: 'none' }}>
                  ELEGIR PLAN
                </a>
              </div>

              {/* Pro Plan */}
              <div className="pricing-card pro">
                <div className="popular-badge">Más Elegido</div>
                <img src={proImage} alt="Mockups de todos los bonos exclusivos" style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', borderRadius: '8px', marginBottom: '1.5rem', marginTop: '0.5rem', border: '1px solid var(--primary-red)' }} />
                <h3 className="plan-name">Plan PRO <span style={{ color: 'var(--primary-red)' }}>+ Bonos Vip</span></h3>
                <div style={{ textDecoration: 'line-through', color: 'var(--primary-red)', fontSize: '1.1rem', opacity: 0.8, marginTop: '0.5rem' }}>De $ 97,00</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '1rem', marginTop: '0.2rem', marginBottom: '0' }}>Por solo:</div>
                <div className="plan-price">
                  <span className="price-currency">$</span>
                  <span>7</span>
                  <span className="price-currency" style={{ marginTop: 'auto', marginBottom: '0.5rem', marginLeft: '2px' }}>,50</span>
                </div>
                <ul className="plan-features">
                  {proFeatures.map((feat, i) => (
                    <li key={`pro-${i}`} className="feature-item">
                      <Check size={18} color="var(--primary-red)" style={{ flexShrink: 0 }} />
                      <span style={i === 0 ? { fontWeight: 'bold' } : {}}>{feat}</span>
                    </li>
                  ))}
                  <div style={{ height: '1px', backgroundColor: 'var(--surface-border)', margin: '1rem 0' }}></div>
                  <p style={{ fontWeight: 'bold', color: '#fbbf24', marginBottom: '0.5rem' }}>🔥 5 Bonos si te lo llevas hoy:</p>
                  {bonuses.map((bonus, i) => (
                    <li key={`bonus-${i}`} className="feature-item bonus">
                      <Zap size={18} color="#fbbf24" style={{ flexShrink: 0 }} />
                      <span><strong>{bonus.title}</strong>: {bonus.desc}</span>
                    </li>
                  ))}
                </ul>
                <a href={`https://pay.kiwify.com/FDTPYlD${window.location.search}`} className="buy-button" style={{ fontSize: '1.2rem', padding: '1.2rem', textDecoration: 'none' }}>
                  ELEGIR PLAN
                </a>
              </div>

            </div>
          </section>

          <section className="guarantee-section">
            <ShieldCheck size={80} className="guarantee-icon" />
            <div className="guarantee-content">
              <h3>Garantía Incondicional de 7 Días</h3>
              <p>Sea por cualquier motivo, si no sientes que tu confianza se dispara, basta un correo electrónico para recuperar el 100% de tu dinero. No corres ningún riesgo.</p>
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
