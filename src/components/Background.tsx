function Circle() {
  return (
    <div className="absolute block w-32 h-32 bg-rose-200 rounded-full"></div>
  );
}

export default function Background() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <Circle></Circle>
    </div>
  );
}
