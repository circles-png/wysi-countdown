import { useEffect, useState } from 'react'
import { DateTime } from 'luxon'

const App = () => {
  const getTime = () => {
    let diff = DateTime
      .now()
      .plus({
        days: DateTime.now() > DateTime
          .fromObject({
            hour  : 7,
            minute: 27
          })
          ? 1
          : 0
      })
      .set({
        hour  : 7,
        minute: 27,
        second: 0
      })
      .diff(DateTime.now(), [ 'hours', 'minutes', 'seconds' ])
    diff = diff.set({ seconds: Math.ceil(diff.seconds) })
    return diff.toHuman({ maximumFractionDigits: 0 })
  },
        [ time, setTime ] = useState(getTime())
  useEffect(() => {
    const timer = setInterval(() => setTime(getTime()), 1000)
    return () => clearInterval(timer)
  }, [])
  return <>
    <div className='h-full bg-slate-900 text-slate-200 text-xl text-center flex flex-col'>
      <div className='h-full grid place-content-center'>
        <div className='flex flex-col gap-8'>
          <h1>wysi countdown</h1>
          <span className='font-bold flex flex-col text-4xl sm:text-7xl'>
            {time.split(', ').map((section, index) => <span className='after:content-[","]' key={index}>{section}</span>)}
          </span>
          <span>to the next <span className='font-medium'>7:27 pm</span></span>
        </div>
      </div>
      <footer className='text-slate-400 border-t border-slate-500 p-4 grow-0 shrink text-sm'>
        by Matthew Li, <a
          href='https://github.com/circles-png'
          className='underline decoration-2 text-slate-300'
          target='#blank'
        >
          @circles-png
        </a>
      </footer>
    </div>
  </>
}


export default App
