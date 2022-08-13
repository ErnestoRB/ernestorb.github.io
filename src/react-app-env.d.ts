/// <reference types="react-scripts" />

declare module "*.svg" {
  const src: string;
  export default src;
}

interface Coords {
  x: number;
  y: number;
}

interface BasicComponentProps {
  children: React.ReactNode;
  className?: string;
}
