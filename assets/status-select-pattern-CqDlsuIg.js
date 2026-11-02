import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{Ir as t,Qr as n,Sr as r,j as i,kr as a,x as o}from"./chunk-FJ6G7XYZ-vkrr-AON.js";import{Q as s,V as c,g as l}from"./docs-CTQgkcVe.js";import"./index-CylhoBOX.js";import"./workspace-B0gvzNJe.js";import{n as u,r as d,t as f}from"./docs-article-CV9v0E7s.js";var p=e(),m=[{id:`usage`,label:`Использование`},{id:`loading-state`,label:`Загрузка списка`},{id:`pending-state`,label:`Выполнение смены`},{id:`lazy-loading`,label:`Ленивая загрузка`},{id:`api`,label:`API`}];function h(){return(0,p.jsx)(i,{title:`StatusSelectPattern`,description:`Async-status field с lazy-loading списка transitions. Замена ручному Popover-anti-pattern.`,breadcrumbs:f(`/components/status-select-pattern`),meta:u(`/components/status-select-pattern`),children:(0,p.jsx)(o,{presentation:`article`,label:`StatusSelectPattern`,inspector:d(m),document:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(l,{title:`Default`,description:`Выбор статуса из списка transitions. Текущее значение отображается в trigger.`,code:`<StatusSelectPattern
  current={task.status}
  options={transitions}
  onChange={(id) => mutation.mutate(id)}
  ariaLabel="Сменить статус"
/>`,children:(0,p.jsx)(c,{})}),(0,p.jsxs)(r,{children:[`Паттерн оборачивает Select с поддержкой lazy-loading: вызывает `,(0,p.jsx)(t,{children:`onOpen`}),` при первом раскрытии, показывает Spinner при `,(0,p.jsx)(t,{children:`isLoading`}),`, блокирует trigger при`,` `,(0,p.jsx)(t,{children:`isPending`}),`. Закрытый API без `,(0,p.jsx)(t,{children:`className`}),` и`,` `,(0,p.jsx)(t,{children:`style`}),`.`]}),(0,p.jsx)(n,{id:`usage`,label:`Использование`,children:(0,p.jsx)(a,{copyLabel:`Скопировать код: использование StatusSelectPattern`,language:`tsx`,code:`import { StatusSelectPattern } from "@chucky23/design-system/patterns/status-select"

<StatusSelectPattern
  current={task.status}
  options={[
    { id: "TODO", label: "К выполнению" },
    { id: "PROGRESS", label: "В работе", tone: "info" },
  ]}
  onChange={changeStatus}
  ariaLabel="Сменить статус задачи"
/>`})}),(0,p.jsx)(n,{id:`loading-state`,label:`Загрузка списка`,children:(0,p.jsx)(l,{title:`isLoading`,description:`Spinner вместо списка опций — пока transitions загружаются.`,code:`<StatusSelectPattern
  current={task.status}
  options={[]}
  isLoading
  onChange={handleChange}
  ariaLabel="Статус"
/>`,children:(0,p.jsx)(c,{state:`loading`})})}),(0,p.jsx)(n,{id:`pending-state`,label:`Выполнение смены`,children:(0,p.jsx)(l,{title:`isPending`,description:`Trigger заблокирован — идёт мутация после выбора нового статуса.`,code:`<StatusSelectPattern
  current={task.status}
  options={transitions}
  isPending
  onChange={handleChange}
  ariaLabel="Статус"
/>`,children:(0,p.jsx)(c,{state:`pending`})})}),(0,p.jsxs)(n,{id:`lazy-loading`,label:`Ленивая загрузка`,children:[(0,p.jsx)(r,{children:`Пример с react-query: список transitions запрашивается только после первого раскрытия.`}),(0,p.jsx)(a,{copyLabel:`Скопировать код: ленивая загрузка переходов`,language:`tsx`,code:`import { useState } from "react"
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
}`})]}),(0,p.jsxs)(n,{id:`api`,label:`API`,children:[(0,p.jsx)(s,{title:`Пропсы StatusSelectPattern`,props:[{name:`current`,type:`string | null`,defaultValue:`—`,description:`ID текущего статуса или null, если статус не задан.`},{name:`options`,type:`ReadonlyArray<StatusSelectOption>`,defaultValue:`—`,description:`Доступные переходы: { id, label, tone?, disabled? }.`},{name:`onOpen`,type:`() => void | Promise<void>`,defaultValue:`—`,description:`Вызывается при первом раскрытии, чтобы загрузить переходы.`},{name:`onChange`,type:`(id: string) => void`,defaultValue:`—`,description:`Вызывается при выборе нового статуса.`},{name:`isLoading`,type:`boolean`,defaultValue:`false`,description:`Показывает Spinner вместо списка опций.`},{name:`isPending`,type:`boolean`,defaultValue:`false`,description:`Блокирует trigger, пока выполняется смена статуса.`},{name:`ariaLabel`,type:`string`,defaultValue:`—`,description:`Доступное название trigger. Обязательный.`},{name:`size`,type:`"sm" | "default"`,defaultValue:`"sm"`,description:`Высота trigger: 20 или 24px.`}]}),(0,p.jsx)(s,{title:`StatusSelectOption`,props:[{name:`id`,type:`string`,defaultValue:`—`,description:`Уникальный ID статуса, например Jira transition id.`},{name:`label`,type:`string`,defaultValue:`—`,description:`Отображаемая метка.`},{name:`tone`,type:`"ok" | "warn" | "err" | "info" | "neutral"`,defaultValue:`—`,description:`Сигнальный маркер слева от метки.`},{name:`disabled`,type:`boolean`,defaultValue:`—`,description:`Отключает недоступный переход в списке.`}]})]})]})})})}export{h as default};