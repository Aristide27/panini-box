import React from 'react'

const features = [
  { label: 'Matière', value: 'PTG premium, impression 3D haute résolution' },
  { label: 'Format', value: 'Poche de pantalon, ultra-fin' },
  { label: 'Capacité', value: 'Environ 70 stickers panini' },
  { label: 'Fermeture', value: 'Couvercle clipsé, maintien assuré' },
  { label: 'Logo', value: 'Logo Coupe du Monde 2026 gravé en relief' },
  { label: 'Couleur', value: 'Blanc' },
]

export default function Product() {
  return (
    <section id="produit">
      <div className="container">

        {/* Section 1 : Boîte ouverte avec cartes */}
        <div style={{ marginBottom: '120px' }}>
          <div className="section-label">Le produit</div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 900,
            fontSize: 'clamp(36px, 5vw, 60px)',
            textTransform: 'uppercase',
            lineHeight: 1,
            marginBottom: '56px',
          }}>
            La PaniniBox.<br />
            <span style={{ color: 'var(--gold)' }}>Simple. Efficace. Élégante.</span>
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '48px',
            alignItems: 'center',
          }}>
            <img
              src="/Boîte ouverte avec carte.jpg"
              alt="PaniniBox ouverte avec des cartes Panini à l'intérieur"
              style={{
                width: '100%',
                borderRadius: 'var(--radius-lg)',
                objectFit: 'cover',
                aspectRatio: '9/16',
                maxHeight: '560px',
              }}
            />
            <div>
              <p style={{
                fontSize: '17px',
                color: 'rgba(245,242,236,0.65)',
                lineHeight: 1.75,
                marginBottom: '16px',
              }}>
                Conçue et imprimée à la main par des collectionneurs passionnés, la PaniniBox est le compagnon idéal pour protéger, transporter et présenter tes stickers en double lors de chaque échange.
              </p>
              <p style={{
                fontSize: '17px',
                color: 'rgba(245,242,236,0.65)',
                lineHeight: 1.75,
                marginBottom: '36px',
              }}>
                Finie la carte cornée dans le fond d'une poche. Place à un objet pensé pour les vrais collectionneurs.
              </p>
              <a href="#commander" className="btn btn-primary" style={{ justifyContent: 'center', width: '100%' }}>
                Je veux ma PaniniBox
              </a>
            </div>
          </div>
        </div>

        {/* Section 2 : Boîte dans la poche + specs */}
        <div>
          <div className="section-label">Caractéristiques</div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 900,
            fontSize: 'clamp(36px, 5vw, 60px)',
            textTransform: 'uppercase',
            lineHeight: 1,
            marginBottom: '56px',
          }}>
            La boîte qui change<br />
            <span style={{ color: 'var(--gold)' }}>tes échanges.</span>
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '48px',
            alignItems: 'start',
          }}>
            <img
              src="/boîte dans pantalon.jpg"
              alt="PaniniBox dans une poche de pantalon — format ultra-compact"
              style={{
                width: '100%',
                borderRadius: 'var(--radius-lg)',
                objectFit: 'cover',
                aspectRatio: '9/16',
                maxHeight: '560px',
              }}
            />

            <div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {features.map(({ label, value }, i) => (
                  <div key={label} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    gap: '16px',
                    padding: '16px 0',
                    borderBottom: i < features.length - 1
                      ? '1px solid rgba(255,255,255,0.06)'
                      : 'none',
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: '12px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      color: 'var(--grey)',
                      flexShrink: 0,
                    }}>{label}</span>
                    <span style={{
                      fontSize: '14px',
                      color: 'var(--white)',
                      textAlign: 'right',
                      opacity: 0.85,
                    }}>{value}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '36px' }}>
                <a href="#commander" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Je veux ma PaniniBox
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
