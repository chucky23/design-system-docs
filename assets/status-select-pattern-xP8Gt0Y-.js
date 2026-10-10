import{$n as e,Hn as t,Mo as n,kn as r}from"./chunk-ZW5N5E5H-C8fDcLjq.js";import{A as i,M as a,r as o,s}from"./docs-CtJuZ0WF.js";import"./index-D3G-KnJA.js";var c=n();function l(){return(0,c.jsxs)(s,{className:`flex flex-col gap-6`,children:[(0,c.jsx)(t,{title:`StatusSelectPattern`,description:`Async-status field с lazy-loading списка transitions. Замена ручному Popover-anti-pattern.`}),(0,c.jsxs)(a,{className:`max-w-prose`,"data-body":!0,children:[`Паттерн оборачивает Select с поддержкой lazy-loading: вызывает`,` onOpen`,` при первом раскрытии, показывает Spinner при`,` isLoading`,`, блокирует trigger при `,`isPending`,`. Закрытый API без `,`className`,` и `,`style`,`.`]}),(0,c.jsx)(e,{label:`default`,children:(0,c.jsx)(o,{title:`Default`,description:`Выбор статуса из списка transitions. Текущее значение отображается в trigger.`,code:`<StatusSelectPattern
  current={task.status}
  options={transitions}
  onChange={(id) => mutation.mutate(id)}
  ariaLabel="Сменить статус"
/>`,children:(0,c.jsx)(i,{})})}),(0,c.jsx)(e,{label:`loading state`,children:(0,c.jsx)(o,{title:`isLoading`,description:`Spinner вместо списка опций — пока transitions загружаются.`,code:`<StatusSelectPattern
  current={task.status}
  options={[]}
  isLoading
  onChange={handleChange}
  ariaLabel="Статус"
/>`,children:(0,c.jsx)(i,{state:`loading`})})}),(0,c.jsx)(e,{label:`pending state`,children:(0,c.jsx)(o,{title:`isPending`,description:`Trigger заблокирован — идёт мутация после выбора нового статуса.`,code:`<StatusSelectPattern
  current={task.status}
  options={transitions}
  isPending
  onChange={handleChange}
  ariaLabel="Статус"
/>`,children:(0,c.jsx)(i,{state:`pending`})})}),(0,c.jsx)(e,{label:`lazy-loading (react-query)`,children:(0,c.jsx)(r,{language:`tsx`,code:`import { useState } from "react"
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
}`})})]})}export{l as default};