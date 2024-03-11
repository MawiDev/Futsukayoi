const Counter = ({span,buttonMin, buttonPlus}) => {
  return (
    <>
      <button
        className="bg-yellow-300 text-[#454545] md:text-2xl md:font-bold"
        onClick={buttonMin}
      >
        -
      </button>
      <span className="md:text-2xl">{span}</span>
      <button
        className="bg-yellow-300 text-[#454545] md:text-2xl md:font-bold"
        onClick={buttonPlus}
      >
        +
      </button>
    </>
  );
};

const BoxButton = ({span,buttonMin, buttonPlus}) => {
  return (
    <div className="grid grid-cols-3 justify-items-center items-center">
        <Counter span={span} buttonMin={buttonMin} buttonPlus={buttonPlus}/>
    </div>
  );
};

export default function Cards({ children, span,buttonMin, buttonPlus }) {
  return (
    <div className="flex flex-col justify-center items-center bg-[whitesmoke] pt-3 pr-3 rounded-md shadow-md">
      {children}
      <BoxButton span={span} buttonMin={buttonMin} buttonPlus={buttonPlus}/>
    </div>
  );
}
