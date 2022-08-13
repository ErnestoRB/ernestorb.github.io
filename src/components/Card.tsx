interface CardProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

const Card = ({ children, id = "", className = "" }: CardProps) => (
  <div
    id={id}
    className={`flex flex-wrap content-center justify-center max-w-md md:max-w-lg lg:max-w-2xl bg-white shadow-lg rounded-lg p-2 md:p-4 lg:p-8 ${className}`}
  >
    {children}
  </div>
);

export default Card;
