type Props = { children?: React.ReactNode; customClass?: string };

const Text = ({ children, customClass }: Props) => {
  return (
    <p
      className={`text-center 2xl:text-2xl sm-440:text-md 2xl:mt-10 text-[#002157] ${
        customClass && customClass
      }`}
    >
      {children}
    </p>
  );
};

export default Text;
