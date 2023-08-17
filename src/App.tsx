import { useState } from "react"
import { BsArrowDownCircleFill } from "react-icons/bs"


interface birthDate {
  day: number | undefined
  month: number | undefined
  year: number | undefined
}

function App() {

  const [data, setData] = useState<birthDate>({
    day: 0,
    month: 0,
    year: 0
  })

  
  // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = event.target;
  //   setData(prevData => ({
  //     ...prevData,
  //     [name]: value
  //   }));
  // };


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = event.target.name;
    const fieldValue = parseInt(event.target.value);

    setData(prevData => ({
      ...prevData,
      [fieldName]: fieldValue
    }));
  };

  
  return (
    <>
      <div className="container border h-screen mx-auto flex justify-center items-center">
        <div className="card w-[550px] bg-white rounded-xl rounded-br-[140px]">
          <div className="top-inputs flex gap-5 ml-7 mt-7">
            <div className="day flex flex-col uppercase">
              <span className="mb-2 font-semibold text-xs text-[#727272]">Day</span>
              <input className="border border-[#dddddd] w-28 h-12 text-2xl rounded font-bold pl-4" name="day" onChange={(event) => handleInputChange(event)} type="number" minLength={1} maxLength={2} value={data.day}/>
            </div>
            <div className="month flex flex-col uppercase">
              <span className="mb-2 font-semibold text-xs text-[#727272]">Month</span>
              <input className="border border-[#dddddd] w-28 h-12 text-2xl rounded font-bold pl-4" name="month" onChange={(event) => handleInputChange(event)} type="number" minLength={1} maxLength={2} value={data.month}/>
            </div>
            <div className="year flex flex-col uppercase">
              <span className="mb-2 font-semibold text-xs text-[#727272]">Year</span>
              <input className="border border-[#dddddd] w-28 h-12 text-2xl rounded font-bold pl-4" name="year" onChange={(event) => handleInputChange(event)} type="number" minLength={1} maxLength={4} value={data.year}/>
            </div>
          </div>
          <div className="middle-button flex justify-center items-center">
            <div className="line w-full">
              <hr className="ml-[28px]" />
            </div>
            <div className="button mr-14 text-[#864cff]">
              <button><BsArrowDownCircleFill size={60}/></button>
            </div>
          </div>
          <div className="bot-output flex flex-col text-[80px] italic font-bold ml-7 mb-7">
            <h1 className=" mb-1"> <span className="text-[#864cff]">38</span> Years</h1>
            <h1 className=" leading-3 mb-1"> <span className="text-[#864cff]">3</span> Months</h1>
            <h1> <span className="text-[#864cff]">26</span> Days</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
