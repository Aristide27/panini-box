import React from 'react'

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '33600000000'
const WHATSAPP_MSG = encodeURIComponent("Bonjour, je suis intéressé par la PaniniBox Coupe du Monde 2026. Pouvez-vous m'en dire plus ?")
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`

export default function Hero() {
  return (
    <section id="hero" style={{
      paddingTop: '80px',
      display: 'flex',
      flexDirection: 'column',
    }}>

      {/* Image en haut sur mobile, à droite sur desktop */}
      <style>{`
        #hero-inner {
          display: grid;
          gridTemplateColumns: 1fr 1fr;
          height: 890px;
        }
        #hero-image {
          order: 0;
        }
        @media (max-width: 768px) {
          #hero-inner {
            display: flex !important;
            flex-direction: column !important;
            height: auto !important;
          }
          #hero-image {
            order: -1;
            width: 100%;
            height: 60vw;
            min-height: 240px;
            max-height: 360px;
          }
          #hero-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center top;
          }
        }
      `}</style>

      <div id="hero-inner">

        {/* Texte gauche */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          padding: 'clamp(24px, 6vw, 80px)',
          position: 'relative',
          zIndex: 2,
        }}>
          <div style={{ position: 'relative', width: '100%' }}>

            <div className="section-label" style={{ marginBottom: '24px' }}>
              Coupe du Monde 2026 · Édition Collector
            </div>

            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 900,
              fontSize: 'clamp(36px, 5vw, 78px)',
              lineHeight: 0.95,
              letterSpacing: '-0.01em',
              textTransform: 'uppercase',
              marginBottom: '28px',
            }}>
              Protège tes<br />
              cartes Panini<br />
              <span style={{ color: 'var(--gold)' }}>comme un pro.</span>
            </h1>

            <div className="divider" />

            <p style={{
              fontSize: 'clamp(14px, 1.5vw, 18px)',
              fontWeight: 300,
              color: 'rgba(245,242,236,0.65)',
              maxWidth: '420px',
              marginBottom: '40px',
              lineHeight: 1.7,
              marginTop: '20px',
            }}>
              La boîte parfaite, format poche, spécialement conçue pour transporter et échanger tes stickers Panini en toute sécurité.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '320px' }}>
              <a href="#commander" className="btn btn-primary" style={{ justifyContent: 'center' }}>
                Commander la Panini Box
              </a>
              
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ justifyContent: 'center' }}
              >
                <WhatsAppIcon />
                Écrire sur WhatsApp
              </a>
            </div>

            <div style={{
              marginTop: '40px',
              paddingTop: '24px',
              borderTop: '1px solid rgba(255,255,255,0.07)',
              display: 'flex',
              gap: '32px',
              flexWrap: 'wrap',
            }}>
              {[
                { num: '3D', label: 'Impression précise' },
                { num: '~70', label: 'Stickers protégés' },
                { num: '∞', label: 'Échanges sereins' },
              ].map(({ num, label }) => (
                <div key={label}>
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 900,
                    fontSize: '26px',
                    color: 'var(--gold)',
                    lineHeight: 1,
                  }}>{num}</div>
                  <div style={{ fontSize: '12px', color: 'var(--grey)', marginTop: '4px' }}>{label}</div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Image droite / haut sur mobile */}
        <div id="hero-image" style={{
          position: 'relative',
          overflow: 'hidden',
          height: '100%',
        }}>
          <img
            src="/Présentation boite.jpeg"
            alt="PaniniBox — boîte de protection stickers Panini Coupe du Monde 2026"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              objectPosition: 'center top',
              display: 'block',
            }}
          />
        </div>

      </div>
    </section>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}