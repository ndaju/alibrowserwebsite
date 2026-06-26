export default function Logo({ size = 36, ariaLabel = 'AliBrowser' }) {
  return (
    <img
      src="/logo.png"
      alt={ariaLabel}
      height={size}
      style={{ display: 'block', width: 'auto', height: size, borderRadius: 6 }}
    />
  );
}
