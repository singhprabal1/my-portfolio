import { useReveal } from "../hooks";

export default function Reveal({ children, delay = 0, as = "div", className = "" }) {
  const ref = useReveal();
  const Tag = as;
  return (
    <Tag ref={ref} className={`reveal ${className}`.trim()} style={delay ? { "--reveal-delay": `${delay}s` } : undefined}>
      {children}
    </Tag>
  );
}
