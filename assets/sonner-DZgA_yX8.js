import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{Dn as t,En as n,Fn as r,M as i,Ot as a,St as o,Tn as s,pt as c,rt as l,tn as u,wn as d}from"./index-DnsCB0LC.js";var f=e();function p(){return(0,f.jsxs)(o,{kind:`component`,route:`/components/sonner`,description:`Тосты о результате операции, после которой работа продолжается: сохранено, скопировано, не удалось отправить. Toaster ставится один раз в корне приложения.`,usage:(0,f.jsx)(r,{use:[`Результат операции, после которого работа продолжается: сохранено, скопировано, не удалось отправить.`,`Отмена только что выполненного действия кнопкой в тосте.`],avoid:[{text:`Ошибка, которая блокирует экран.`,instead:{href:`/components/error-state`,label:`ErrorState`}},{text:`Ошибка поля формы.`,instead:{href:`/recipes/field`,label:`FieldRecipe`}},{text:`Подтверждение до действия.`,instead:{href:`/components/alert-dialog`,label:`AlertDialog`}}]}),example:(0,f.jsx)(l,{code:`import type { ReactNode } from "react"

// Toaster стоит один раз в корне приложения.
function Root({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <Toaster />
    </>
  )
}

// Тост вызывают из обработчика любого компонента.
toast.success("Сохранено")
toast.warning("Проверь соединение")
toast.error("Не удалось загрузить", { description: "Сервер не ответил за 10 с" })
toast.info("Вышла версия 7.2")`,gpuiCode:`use anikin_lab_gpui::prelude::*;

// Очередь монтируется один раз в корне окна Root.
DsToastQueue::mount(window, cx);

// Тосты вызываются из любого обработчика.
DsToastQueue::success("Сохранено", cx);
DsToastQueue::warning("Проверь соединение", cx);
DsToastQueue::error("Не удалось загрузить", cx);
DsToastQueue::info("Вышла версия 9.0", cx);`,children:(0,f.jsx)(n,{})}),imports:(0,f.jsx)(c,{code:`import { toast } from "sonner"
import { Toaster, toastIcons } from "@chucky23/design-system/extended/sonner"
import { Button } from "@chucky23/design-system/react"`}),api:(0,f.jsx)(i,{items:[{name:`Toaster`,props:[{name:`position`,type:`"top-left" | "top-right" | "top-center" | "bottom-left" | "bottom-right" | "bottom-center"`,defaultValue:`"bottom-right"`,description:`Угол экрана, где появляются тосты.`},{name:`duration`,type:`number`,defaultValue:`4000`,description:`Миллисекунды до закрытия. На тост ошибки не действует: его время задаёт errorDuration.`},{name:`errorDuration`,type:`number`,defaultValue:`Infinity`,description:`Сколько висит тост ошибки без своего duration. По умолчанию ошибка висит до закрытия и получает кнопку закрытия. Число возвращает автозакрытие, например 4000.`},{name:`closeButton`,type:`boolean`,defaultValue:`false`,description:`Кнопка закрытия на остальных тостах. У тоста ошибки она есть, пока errorDuration равен Infinity.`},{name:`expand`,type:`boolean`,defaultValue:`false`,description:`Разворачивает стопку тостов.`},{name:`containerAriaLabel`,type:`string`,defaultValue:`"Уведомления"`,description:`Имя области уведомлений для скринридера.`},{name:`hotkey`,type:`string[]`,defaultValue:`["altKey", "KeyT"]`,description:`Сочетание, которое переводит фокус в область тостов.`},{name:`icons`,type:`ToasterProps["icons"]`,defaultValue:`toastIcons`,description:`Значки типов: SignalIcon для success, info, warning, error и Spinner для loading. Расширяй через { ...toastIcons }.`},{name:`className`,type:`string`,description:`Раскладка области тостов, добавляется к классам Toaster. Тосту и его частям раскладку передают toastOptions.className и toastOptions.classNames: отступы снаружи и место во flex. Ширину тоста, внутренние поля и высоту кнопок задаёт sonner: ширину меняй переменной --width в style.`}]}]}),related:(0,f.jsx)(a,{links:[{href:`/components/dialog`,label:`Dialog`,description:`Решение, которое нельзя пропустить, показывает окно, а не тост.`},{href:`/components/signal-icon`,label:`SignalIcon`,description:`Значки типов тоста.`},{href:`/components/spinner`,label:`Spinner`,description:`Значок загрузки в toast.promise.`}]}),children:[(0,f.jsx)(u,{id:`types`,label:`Типы тостов`,description:`Когда исход операции разный: тип задаёт значок, цвет есть только у ошибки. Нажми кнопку, чтобы увидеть тост.`,children:(0,f.jsx)(l,{code:`<>
  <Button onClick={() => toast.success("Задача сохранена")}>Успех</Button>
  <Button onClick={() => toast.warning("Сборка идёт дольше обычного")}>Предупреждение</Button>
  <Button onClick={() => toast.error("Не удалось загрузить спринт")}>Ошибка</Button>
  <Button onClick={() => toast.info("Вышла версия 7.2")}>Сведения</Button>
</>`,children:(0,f.jsx)(t,{})})}),(0,f.jsx)(u,{id:`action`,label:`Описание и действие`,description:`Когда действие можно отменить: кнопка в тосте отменяет назначение и возвращает фокус на кнопку «Назначить».`,children:(0,f.jsx)(l,{code:`import { useRef, useState } from "react"

function AssignIncident() {
  const [assigned, setAssigned] = useState(false)
  const assignButton = useRef<HTMLButtonElement>(null)

  function assign() {
    setAssigned(true)
    toast("Инцидент назначен", {
      description: "INC-4012 передан команде платформы",
      action: {
        label: "Отменить",
        onClick: () => {
          setAssigned(false)
          assignButton.current?.focus()
          toast("Назначение отменено")
        },
      },
    })
  }

  return (
    <Button ref={assignButton} tone="neutral" variant="outline" aria-disabled={assigned} onClick={assigned ? undefined : assign}>
      Назначить
    </Button>
  )
}`,children:(0,f.jsx)(d,{})})}),(0,f.jsx)(u,{id:`promise`,label:`Тост на Promise`,description:`Когда операция идёт заметное время: тост показывает загрузку, затем успех или ошибку.`,children:(0,f.jsx)(l,{code:`toast.promise(saveSprint(), {
  loading: "Сохраняю спринт…",
  success: "Спринт сохранён",
  error: "Спринт не сохранён",
})`,children:(0,f.jsx)(s,{})})})]})}export{p as default};