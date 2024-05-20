const Heading = ({
  children,
  customClass,
}: {
  children: React.ReactNode | string;
  customClass?: string;
}) => {
  return (
    <h2
      className={`font-sans font-bold text-4xl sm:text-3xl text-[#074288] text-center ${
        customClass && customClass
      }`}
    >
      {children}
    </h2>
  );
};

export default Heading;
