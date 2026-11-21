import{a as e,n as t,t as n}from"./jsx-runtime-dBoqvwbd.js";import{as as r}from"./useLabelableId-C6GEk9LR.js";import{t as i}from"./chunk-C6BK6UFJ-CUqnApcm.js";import{A as a,Kr as o,X as s,_t as c,dt as l,rt as u,vn as d}from"./index-BX5CNJVf.js";var f=e(t(),1),p=n(),m=[{value:`TM-1036`,label:`TM-1036 Перенос реестра на тип экрана`},{value:`TM-1041`,label:`TM-1041 Проверка переходов статуса`}];function h(){let[e,t]=(0,f.useState)(!0),[n,h]=(0,f.useState)(5058),g=(0,f.useRef)(null),_=(0,f.useRef)(null),v=(0,f.useRef)(!1);(0,f.useEffect)(()=>{if(v.current&&=((e?_:g).current?.focus(),!1),!e)return;let t=Date.now(),n=0,r=window.setInterval(()=>{let e=Math.floor((Date.now()-t)/1e3);if(e<=n)return;let r=e-n;n=e,h(e=>e+r)},1e3);return()=>window.clearInterval(r)},[e]);function y(e){v.current=!0,t(e)}return(0,p.jsx)(l,{kind:`component`,route:`/patterns/timer-panel`,description:`Панель таймера: прошедшее время, выбор задачи и пара команд «Старт» и «Стоп». Бери её, когда время на задачу списывают по ходу работы.`,example:(0,p.jsx)(s,{layout:`stack`,code:`import { useEffect, useRef, useState } from "react"
import { Button, Select } from "@chucky23/design-system/react"
import { TimerPanelPattern } from "@chucky23/design-system/patterns/timer-panel"

const tasks = [
  { value: "TM-1036", label: "TM-1036 Перенос реестра на тип экрана" },
  { value: "TM-1041", label: "TM-1041 Проверка переходов статуса" },
]

function TimerExample() {
  const [running, setRunning] = useState(true)
  const [elapsedSeconds, setElapsedSeconds] = useState(84 * 60 + 18)
  const startRef = useRef<HTMLButtonElement>(null)
  const stopRef = useRef<HTMLButtonElement>(null)
  const moveFocus = useRef(false)

  useEffect(() => {
    if (moveFocus.current) {
      (running ? stopRef : startRef).current?.focus()
      moveFocus.current = false
    }
    if (!running) return

    const startedAt = Date.now()
    let previousTick = 0
    const interval = window.setInterval(() => {
      const tick = Math.floor((Date.now() - startedAt) / 1000)
      if (tick <= previousTick) return
      const seconds = tick - previousTick
      previousTick = tick
      setElapsedSeconds((elapsed) => elapsed + seconds)
    }, 1000)
    return () => window.clearInterval(interval)
  }, [running])

  function changeRunning(value: boolean) {
    moveFocus.current = true
    setRunning(value)
  }

  const elapsed = [
    Math.floor(elapsedSeconds / 3600),
    Math.floor(elapsedSeconds / 60) % 60,
    elapsedSeconds % 60,
  ].map((part) => String(part).padStart(2, "0")).join(":")

  return (
    <TimerPanelPattern
      label="Таймер"
      elapsed={elapsed}
      running={running}
      taskSelect={<Select ariaLabel="Задача таймера" defaultValue="TM-1036" options={tasks} />}
      taskDescription="Отсчёт в этом примере ведётся локально."
      startAction={<Button ref={startRef} disabled={running} onClick={() => changeRunning(true)}>Старт</Button>}
      stopAction={<Button ref={stopRef} tone="neutral" variant="outline" disabled={!running} onClick={() => changeRunning(false)}>Стоп</Button>}
    />
  )
}`,children:(0,p.jsx)(o,{label:`Таймер`,elapsed:[Math.floor(n/3600),Math.floor(n/60)%60,n%60].map(e=>String(e).padStart(2,`0`)).join(`:`),running:e,taskSelect:(0,p.jsx)(i,{ariaLabel:`Задача таймера`,defaultValue:`TM-1036`,options:m}),taskDescription:`Отсчёт в этом примере ведётся локально.`,startAction:(0,p.jsx)(r,{ref:g,disabled:e,onClick:()=>y(!0),children:`Старт`}),stopAction:(0,p.jsx)(r,{ref:_,tone:`neutral`,variant:`outline`,disabled:!e,onClick:()=>y(!1),children:`Стоп`})})}),imports:(0,p.jsx)(u,{code:`import { TimerPanelPattern } from "@chucky23/design-system/patterns/timer-panel"
import { Button, Select } from "@chucky23/design-system/react"`}),usage:(0,p.jsx)(d,{placement:[{screen:{href:`/screens/overview`,label:`Обзор`},slot:`sections[].content`},{screen:{href:`/screens/shell`,label:`WorkspaceShell`},slot:`bottomDock`}],use:[`Учёт времени по текущей задаче, пока открыт обзор дня.`,`Таймер в нижнем доке, который виден на любом экране.`],avoid:[{text:`Списанные часы за неделю по дням.`,instead:{href:`/patterns/calendar-grid`,label:`CalendarGridPattern`}},{text:`Ход долгой операции: сборки или выгрузки.`,instead:{href:`/components/progress`,label:`Progress`}}]}),api:(0,p.jsx)(a,{items:[{name:`TimerPanelPattern`,props:[{name:`label`,type:`ReactNode`,required:!0,description:`Видимый заголовок панели: «Таймер», «Учёт времени».`},{name:`elapsed`,type:`ReactNode`,required:!0,description:`Прошедшее время, например 01:24:18.`},{name:`running`,type:`boolean`,required:!0,description:`Идёт ли отсчёт. Во время записи видна пульсирующая метка REC.`},{name:`startAction`,type:`ReactNode`,required:!0,description:`Кнопка запуска. Пока отсчёт идёт, сделай её недоступной.`},{name:`stopAction`,type:`ReactNode`,required:!0,description:`Кнопка остановки. Фокус переходит на неё после запуска.`},{name:`taskSelect`,type:`ReactNode`,description:`Выбор задачи, обычно Select.`},{name:`taskDescription`,type:`ReactNode`,description:`Пояснение под выбором задачи: куда уйдёт время.`},{name:`ariaLabel`,type:`string`,description:`Доступное имя панели, если оно отличается от label.`},{name:`id`,type:`string`,description:`Якорь для ссылки на панель с другой части страницы.`}]}]}),related:(0,p.jsx)(c,{links:[{href:`/patterns/calendar-grid`,label:`CalendarGridPattern`,description:`Часы по дням недели.`},{href:`/components/select`,label:`Select`,description:`Выбор задачи.`}]})})}export{h as default};