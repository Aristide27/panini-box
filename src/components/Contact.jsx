import React, { useState } from 'react'

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '33600000000'
const WHATSAPP_MSG = encodeURIComponent("Bonjour, je suis intéressé par la PaniniBox Coupe du Monde 2026. Pouvez-vous m'en dire plus ?")
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    const form = e.target
    const data = new FormData(form)

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data).toString(),
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" style={{ background: 'var(--black)' }}>
      <div className="container">

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '80px',
          alignItems: 'start',
        }}>

          {/* Left: copy */}
          <div>
            <div className="section-label">Contact</div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 900,
              fontSize: 'clamp(36px, 5vw, 58px)',
              textTransform: 'uppercase',
              lineHeight: 1,
              marginBottom: '24px',
            }}>
              Intéressé ?<br />
              <span style={{ color: 'var(--gold)' }}>On répond vite.</span>
            </h2>
            <div className="divider" />
            <p style={{
              fontSize: '16px',
              color: 'rgba(245,242,236,0.55)',
              lineHeight: 1.75,
              marginTop: '20px',
              marginBottom: '36px',
            }}>
              Pour commander, poser une question ou connaître la disponibilité, envoie-nous un message. Pas de boutique en ligne, pas de prise de tête — on échange directement.
            </p>

            {/* WhatsApp CTA */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ marginBottom: '16px', width: '100%', justifyContent: 'center' }}
            >
              <WhatsAppIcon />
              Écrire sur WhatsApp
            </a>

            <p style={{
              textAlign: 'center',
              fontSize: '13px',
              color: 'var(--grey-light)',
              letterSpacing: '0.05em',
            }}>— ou utilisez le formulaire ci-contre —</p>
          </div>

          {/* Right: form (Netlify Forms) */}
          <div>
            {status === 'success' ? (
              <SuccessMessage />
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
              >
                {/* Hidden fields for Netlify */}
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" style={{ display: 'none' }} />

                <div className="form-group">
                  <label htmlFor="name">Votre nom</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Jean Dupont"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="jean@exemple.fr"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Votre message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Je voudrais commander une boîte, ou en savoir plus sur..."
                    required
                  />
                </div>

                {status === 'error' && (
                  <p style={{ color: '#ff6b6b', fontSize: '14px' }}>
                    Une erreur s'est produite. Réessayez ou contactez-nous directement par WhatsApp.
                  </p>
                )}

                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={status === 'sending'}
                  style={{
                    justifyContent: 'center',
                    opacity: status === 'sending' ? 0.6 : 1,
                    cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                  }}
                >
                  {status === 'sending' ? 'Envoi en cours...' : 'Envoyer le message'}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}

function SuccessMessage() {
  return (
    <div style={{
      background: 'var(--black-light)',
      border: '1px solid rgba(201,168,76,0.2)',
      borderRadius: 'var(--radius-lg)',
      padding: '48px 36px',
      textAlign: 'center',
    }}>
      <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: '22px',
        textTransform: 'uppercase',
        letterSpacing: '0.04em',
        color: 'var(--gold-light)',
        marginBottom: '12px',
      }}>Message envoyé !</h3>
      <p style={{ color: 'rgba(245,242,236,0.55)', fontSize: '15px' }}>
        On revient vers vous très rapidement. À bientôt !
      </p>
    </div>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}
