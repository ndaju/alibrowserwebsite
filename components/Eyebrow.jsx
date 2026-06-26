export function Eyebrow({ children, number, light = false, dot = false, dotColor = 'var(--orange)' }) {
  return (
    <span className={`eyebrow ${light ? 'eyebrow--light' : ''}`}>
      {number && <span className="num">№ {number}</span>}
      {children && <span>— {children}</span>}
      {dot && (
        <span
          aria-hidden="true"
          style={{
            display: 'inline-block',
            width: 7,
            height: 7,
            borderRadius: '50%',
            background: dotColor,
            marginLeft: 4,
          }}
        />
      )}
    </span>
  );
}

export function SectionHead({ number, label, title, lede, light = false, as: As = 'h2' }) {
  return (
    <div className="section-head">
      <div className="section-head__rule">
        <span className={`eyebrow ${light ? 'eyebrow--light' : ''}`}>
          <span className="num">№ {number}</span>
          <span>— {label}</span>
        </span>
      </div>
      <div className="section-head__title">
        <As style={{
          fontFamily: 'var(--f-serif)',
          fontSize: 'clamp(34px, 4.6vw, 44px)',
          lineHeight: 1.02,
          letterSpacing: '-0.022em',
          fontVariationSettings: light ? "'opsz' 96, 'SOFT' 70" : "'opsz' 96, 'SOFT' 70",
          fontWeight: 500,
          color: 'inherit',
          margin: 0,
          textWrap: 'balance',
        }}>{title}</As>
      </div>
      {lede && <p className="section-head__lede">{lede}</p>}
    </div>
  );
}
