const ButtonOrganizer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="grid grid-cols-1 grid-rows-2 place-items-center">
      {children}
    </div>
  );
};

export default ButtonOrganizer;
