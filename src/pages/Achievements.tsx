import { useLanguage } from "@/hooks/useLanguage";
import { getDate } from "@/scripts/date";
import { getExperience } from "@/scripts/experience";
import { useState, useEffect } from "react";

export default function Achievements() {
  const { t } = useLanguage();

  const [expList, setExpList] = useState(getExperience(t))

  useEffect(() => {
    const res = getExperience(t);
    setExpList(res);
  }, [t])

  return (
    <section className="flex flex-col min-h-screen pagePadding">
      <h3 className="text-4xl">Achievements</h3>
      <ul className="flex flex-col gap-4 w-full justify-between list-none">
        {expList.map((current, index) => (
          <li className={`flex flex-col w-2/3 py-3  ${index % 2 === 0 ? 'text-start' : 'self-end text-end'} rounded-md`} 
          onClick={() => { }}>
            <h4 className="text-xl">{current.title}</h4>
            <span className="text-sm text-[#828282]">{getDate(new Date(current.date.year, current.date.month + 1, current.date.day))}</span>
            <div className="flex">
              <p className=" line-clamp-2 text-start" >{current.description}</p>
            </div>
            <button className={`flex w-full ${index %2 ===0 ? 'flex-row-reverse' : 'flex-row'}`}>
              View More
            </button>

          </li>
        ))}
      </ul>
    </section>
  )
}


