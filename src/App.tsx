import { useState } from "react";
import { BsArrowDownCircleFill } from "react-icons/bs";

interface BirthDate {
  day: number | undefined;
  month: number | undefined;
  year: number | undefined;
}

function App() {
  const [data, setData] = useState<BirthDate>({
    day: 0,
    month: 0,
    year: 2000,
  });

  const [idade, setIdade] = useState({
    years: 0,
    months: 0,
    days: 0,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = event.target.name;
    let fieldValue = parseInt(event.target.value);
  
    if (fieldName === "day") {
      // Limitar o valor ao máximo de 31
      fieldValue = Math.min(31, fieldValue);
    } else if (fieldName === "month") {
      // Limitar o valor ao máximo de 12
      fieldValue = Math.min(12, fieldValue);
    }
  
    setData((prevData) => ({
      ...prevData,
      [fieldName]: fieldValue,
    }));
  };


  const calculated = () => {
    const calculatedIdade = calcularIdade(
      data.day || 1,
      data.month || 1,
      data.year || 2000
    );
    setIdade(calculatedIdade);
  };


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    calculated();
  };

  function calcularIdade(year: number, month: number, day: number) {
    const today = new Date();
    const birthDate = new Date(day, month - 1, year);

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
      years--;
      months += 12;
    }

    if (days < 0) {
      const lastDayPreviousMonth = new Date(
        today.getFullYear(),
        today.getMonth(),
        0
      ).getDate();
      days += lastDayPreviousMonth;
      months--;
    }

    return {
      days: days,
      months: months,
      years: years,
    };
  }

  return (
    <>
      <div className="container border h-screen mx-auto flex justify-center items-center">
        <div className="card w-[550px] bg-white rounded-xl rounded-br-[140px]">
          <form onSubmit={handleSubmit}>
            <div className="top-inputs flex gap-5 ml-7 mt-7">
              <div className="day flex flex-col uppercase">
                <span className="mb-2 font-semibold text-xs text-[#727272]">
                  Day
                </span>
                <input
                  className="border border-[#dddddd] w-28 h-12 text-2xl rounded font-bold pl-4"
                  name="day"
                  onChange={(event) => handleInputChange(event)}
                  type="number"
                  minLength={1}
                  maxLength={2}
                  value={data.day}
                />
              </div>
              <div className="month flex flex-col uppercase">
                <span className="mb-2 font-semibold text-xs text-[#727272]">
                  Month
                </span>
                <input
                  className="border border-[#dddddd] w-28 h-12 text-2xl rounded font-bold pl-4"
                  name="month"
                  onChange={(event) => handleInputChange(event)}
                  type="number"
                  minLength={1}
                  maxLength={2}
                  value={data.month}
                />
              </div>
              <div className="year flex flex-col uppercase">
                <span className="mb-2 font-semibold text-xs text-[#727272]">
                  Year
                </span>
                <input
                  className="border border-[#dddddd] w-28 h-12 text-2xl rounded font-bold pl-4"
                  name="year"
                  onChange={(event) => handleInputChange(event)}
                  type="number"
                  minLength={1}
                  maxLength={4}
                  value={data.year}
                />
              </div>
            </div>
            <div className="middle-button flex justify-center items-center">
              <div className="line w-full">
                <hr className="ml-[28px]" />
              </div>
              <div className="button mr-14 text-[#864cff]">
                <button onClick={calculated}>
                  <BsArrowDownCircleFill size={60} />
                </button>
              </div>
            </div>
            <div className="bot-output flex flex-col text-[80px] italic font-bold ml-7 mb-7">
              <h1 className=" mb-1">
                {" "}
                <span className="text-[#864cff]">{idade.years}</span> Years
              </h1>
              <h1 className=" leading-3 mb-1">
                {" "}
                <span className="text-[#864cff]">{idade.months}</span> Months
              </h1>
              <h1>
                {" "}
                <span className="text-[#864cff]">{idade.days}</span> Days
              </h1>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
