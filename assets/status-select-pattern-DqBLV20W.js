import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{Gn as t,Rn as n,ar as r,br as i,m as a,o}from"./chunk-ZW5N5E5H-ScFucA-b.js";import{S as s,j as c,r as l}from"./docs-Ck_i9UNX.js";import"./index-DiNellwx.js";import"./workspace-BwWB7lTa.js";import{n as u,t as d}from"./docs-article-BUNGnjgF.js";var f=e(),p=[{id:`usage`,label:`Использование`},{id:`loading-state`,label:`Загрузка списка`},{id:`pending-state`,label:`Выполнение смены`},{id:`lazy-loading`,label:`Ленивая загрузка`},{id:`api`,label:`API`}];function m(){return(0,f.jsx)(a,{title:`StatusSelectPattern`,description:`Async-status field с lazy-loading списка transitions. Замена ручному Popover-anti-pattern.`,breadcrumbs:d(`/components/status-select-pattern`),children:(0,f.jsx)(o,{presentation:`article`,label:`StatusSelectPattern`,inspector:u(p),document:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(l,{title:`Default`,description:`Выбор статуса из списка transitions. Текущее значение отображается в trigger.`,code:`<StatusSelectPattern
  current={task.status}
  options={transitions}
  onChange={(id) => mutation.mutate(id)}
  ariaLabel="Сменить статус"
/>`,children:(0,f.jsx)(s,{})}),(0,f.jsxs)(n,{children:[`Паттерн оборачивает Select с поддержкой lazy-loading: вызывает `,(0,f.jsx)(r,{children:`onOpen`}),` при первом раскрытии, показывает Spinner при `,(0,f.jsx)(r,{children:`isLoading`}),`, блокирует trigger при`,` `,(0,f.jsx)(r,{children:`isPending`}),`. Закрытый API без `,(0,f.jsx)(r,{children:`className`}),` и`,` `,(0,f.jsx)(r,{children:`style`}),`.`]}),(0,f.jsx)(i,{id:`usage`,label:`Использование`,children:(0,f.jsx)(t,{copyLabel:`Скопировать код: использование StatusSelectPattern`,language:`tsx`,code:`import { StatusSelectPattern } from "@chucky23/design-system/patterns/status-select"

<StatusSelectPattern
  current={task.status}
  options={[
    { id: "TODO", label: "К выполнению" },
    { id: "PROGRESS", label: "В работе", tone: "info" },
  ]}
  onChange={changeStatus}
  ariaLabel="Сменить статус задачи"
/>`})}),(0,f.jsx)(i,{id:`loading-state`,label:`Загрузка списка`,children:(0,f.jsx)(l,{title:`isLoading`,description:`Spinner вместо списка опций — пока transitions загружаются.`,code:`<StatusSelectPattern
  current={task.status}
  options={[]}
  isLoading
  onChange={handleChange}
  ariaLabel="Статус"
/>`,children:(0,f.jsx)(s,{state:`loading`})})}),(0,f.jsx)(i,{id:`pending-state`,label:`Выполнение смены`,children:(0,f.jsx)(l,{title:`isPending`,description:`Trigger заблокирован — идёт мутация после выбора нового статуса.`,code:`<StatusSelectPattern
  current={task.status}
  options={transitions}
  isPending
  onChange={handleChange}
  ariaLabel="Статус"
/>`,children:(0,f.jsx)(s,{state:`pending`})})}),(0,f.jsxs)(i,{id:`lazy-loading`,label:`Ленивая загрузка`,children:[(0,f.jsx)(n,{children:`Пример с react-query: список transitions запрашивается только после первого раскрытия.`}),(0,f.jsx)(t,{copyLabel:`Скопировать код: ленивая загрузка переходов`,language:`tsx`,code:`import { useState } from "react"
import { useQuery, useMutation } from "@tanstack/react-query"
import { StatusSelectPattern } from "@chucky23/design-system/patterns/status-select"

function TaskStatusField({ taskId }: { taskId: string }) {
  const [open, setOpen] = useState(false)

  const transitionsQuery = useQuery({
    queryKey: ["transitions", taskId],
    queryFn: () => fetchTransitions(taskId),
    enabled: open,
  })

  const mutation = useMutation({
    mutationFn: (id: string) => applyTransition(taskId, id),
  })

  return (
    <StatusSelectPattern
      current={transitionsQuery.data?.current ?? null}
      options={transitionsQuery.data?.transitions ?? []}
      isLoading={transitionsQuery.isLoading}
      isPending={mutation.isPending}
      onOpen={() => setOpen(true)}
      onChange={(id) => mutation.mutate(id)}
      ariaLabel="Сменить статус задачи"
    />
  )
}`})]}),(0,f.jsxs)(i,{id:`api`,label:`API`,children:[(0,f.jsx)(c,{title:`Пропсы StatusSelectPattern`,props:[{name:`current`,type:`string | null`,defaultValue:`—`,description:`ID текущего статуса или null, если статус не задан.`},{name:`options`,type:`ReadonlyArray<StatusSelectOption>`,defaultValue:`—`,description:`Доступные переходы: { id, label, tone?, disabled? }.`},{name:`onOpen`,type:`() => void | Promise<void>`,defaultValue:`—`,description:`Вызывается при первом раскрытии, чтобы загрузить переходы.`},{name:`onChange`,type:`(id: string) => void`,defaultValue:`—`,description:`Вызывается при выборе нового статуса.`},{name:`isLoading`,type:`boolean`,defaultValue:`false`,description:`Показывает Spinner вместо списка опций.`},{name:`isPending`,type:`boolean`,defaultValue:`false`,description:`Блокирует trigger, пока выполняется смена статуса.`},{name:`ariaLabel`,type:`string`,defaultValue:`—`,description:`Доступное название trigger. Обязательный.`},{name:`size`,type:`"sm" | "default"`,defaultValue:`"sm"`,description:`Высота trigger: 28 или 32px.`}]}),(0,f.jsx)(c,{title:`StatusSelectOption`,props:[{name:`id`,type:`string`,defaultValue:`—`,description:`Уникальный ID статуса, например Jira transition id.`},{name:`label`,type:`string`,defaultValue:`—`,description:`Отображаемая метка.`},{name:`tone`,type:`"ok" | "warn" | "err" | "info" | "neutral"`,defaultValue:`—`,description:`Сигнальный маркер слева от метки.`},{name:`disabled`,type:`boolean`,defaultValue:`—`,description:`Отключает недоступный переход в списке.`}]})]})]})})})}export{m as default};