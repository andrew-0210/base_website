import { ReactLenis } from "lenis/react";

export default function SmoothScrolling({ children }) {
  return (
    <ReactLenis root options={{ duration: 1.2 }}>
      {children}
    </ReactLenis>
  );
}
