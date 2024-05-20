type Props = {
  customClass?: string | undefined;
  firstElement: React.ReactNode;
  secondElement: React.ReactNode;
  secondElementClasses?: string;
  firstElementClasses?: string;
  orientation?: "vertical" | "horizontal";
  isDebug?: boolean;
  boxed?: boolean;
};

const Container = ({
  customClass,
  firstElement,
  secondElement,
  orientation,
  secondElementClasses,
  isDebug,
  firstElementClasses,
  boxed,
}: Props) => {
  let orientationClasses = "";

  switch (orientation) {
    case "vertical":
      orientationClasses = "w-full";
      break;
    case "horizontal":
      orientationClasses = "w-full md:flex-row";
      break;
    default:
      orientation = "horizontal";
  }
  
  const finalClasses = `${orientationClasses && orientationClasses} ${customClass && customClass} ${
    boxed && "lg:max-w-[1444px] lg:px-28 md:px-6 px-2"
  }`;

  return (
    <section className={`w-full flex flex-col ${finalClasses}`}>
      <div
        className={`w-full ${firstElementClasses && firstElementClasses} ${
          isDebug && "border border-lime-300 bg-slate-400"
        }`}
      >
        {firstElement}
      </div>
      <div
        className={`w-full ${secondElementClasses && secondElementClasses} ${
          isDebug && "border border-orange-500 bg-slate-500"
        }`}
      >
        {secondElement}
      </div>
    </section>
  );
};

export default Container;
