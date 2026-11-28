import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{b as t}from"./chunk-NA6PDP3U-Cjn5wWWb.js";import{Fn as n,M as r,Ot as i,St as a,bn as o,pt as s,rt as c,tn as l}from"./index-DnsCB0LC.js";var u=e();function d(){return(0,u.jsxs)(a,{kind:`component`,route:`/patterns/status-select`,description:`Поле смены статуса задачи: показывает текущий статус и доступные переходы. Бери его в шапке страницы или панели задачи, когда статус меняют на месте.`,example:(0,u.jsx)(c,{code:`import { useState } from "react"
import { WorkflowIcon } from "@chucky23/design-system/react"

// Статус — значок и слово: значок передаётся в icon.
const transitions = [
  { id: "OPEN", label: "Открыта", icon: <WorkflowIcon status="open" /> },
  { id: "PROGRESS", label: "В работе", icon: <WorkflowIcon status="progress" /> },
  { id: "BLOCKED", label: "Заблокирована", icon: <WorkflowIcon status="blocked" /> },
  { id: "DEFERRED", label: "Отложена", icon: <WorkflowIcon status="deferred" /> },
  { id: "CLOSED", label: "Готово", icon: <WorkflowIcon status="closed" /> },
]

function TaskStatus() {
  const [status, setStatus] = useState<string | null>("OPEN")
  return <StatusSelectPattern current={status} options={transitions} onChange={setStatus} ariaLabel="Сменить статус задачи" />
}`,children:(0,u.jsx)(o,{})}),imports:(0,u.jsx)(s,{from:`@chucky23/design-system/patterns/status-select`,names:[`StatusSelectPattern`]}),usage:(0,u.jsx)(n,{placement:[{screen:{href:`/screens/shell`,label:`WorkspacePage`},slot:`meta`},{screen:{href:`/screens/document`,label:`Документ`},slot:`meta`}],use:[`Смена статуса в шапке страницы задачи.`,`Статус в панели задачи рядом с реестром.`,`Переходы, которые сервер отдаёт по запросу: список грузится при первом раскрытии.`],avoid:[{text:`Статус только для чтения в строке списка.`,instead:{href:`/components/status-tag`,label:`StatusTag`}},{text:`У перехода есть условия, доказательства или согласование.`,instead:{href:`/recipes/transition-gate`,label:`TransitionGateRecipe`}},{text:`Выбор значения, которое не статус: исполнитель, спринт.`,instead:{href:`/components/select`,label:`Select`}}]}),api:(0,u.jsx)(r,{items:[{name:`StatusSelectPattern`,props:[{name:`current`,type:`string | null`,required:!0,description:`Идентификатор текущего статуса или null.`},{name:`options`,type:`ReadonlyArray<StatusSelectOption>`,required:!0,description:`Доступные переходы.`},{name:`onChange`,type:`(id: string) => void`,required:!0,description:`Вызывается при выборе нового статуса.`},{name:`ariaLabel`,type:`string`,required:!0,description:`Доступное имя поля: «Сменить статус задачи». Видимой подписи у поля нет.`},{name:`onOpen`,type:`() => void | Promise<void>`,description:`Вызывается один раз при первом раскрытии: здесь загружают переходы.`},{name:`isLoading`,type:`boolean`,defaultValue:`false`,description:`Индикатор загрузки вместо списка, пока переходы загружаются.`},{name:`isPending`,type:`boolean`,defaultValue:`false`,description:`Блокирует поле, пока идёт смена статуса.`},{name:`size`,type:`"sm" | "default"`,defaultValue:`"sm"`,description:`Высота 20 или 24 px.`}]},{name:`StatusSelectOption`,props:[{name:`id`,type:`string`,required:!0,description:`Идентификатор статуса или перехода.`},{name:`label`,type:`string`,required:!0,description:`Название статуса: «Бэклог», «Открыта», «В работе», «Заблокирована», «Отложена», «Готово».`},{name:`icon`,type:`ReactNode`,description:`Значок статуса слева от названия в списке и в поле: <WorkflowIcon status="progress" />. Так статус показан значком и словом, как во всей системе.`},{name:`tone`,type:`"ok" | "warn" | "err" | "info" | "neutral"`,description:`Сигнал пункта для стилей приложения: ставит data-tone, цвета не даёт. Статус показывает icon.`},{name:`disabled`,type:`boolean`,description:`Недоступный переход.`},{name:`disabledReason`,type:`string`,description:`Причина, по которой переход недоступен.`}]}]}),related:(0,u.jsx)(i,{links:[{href:`/recipes/status`,label:`StatusRecipe`,description:`Статус как значение, без смены.`},{href:`/recipes/transition-gate`,label:`TransitionGateRecipe`,description:`Условия, которые проверяются перед переходом.`},{href:`/components/select`,label:`Select`,description:`Обычный выбор из списка.`}]}),children:[(0,u.jsx)(l,{id:`loading`,label:`Загрузка списка`,description:`Когда переходы ещё грузятся с сервера: вместо списка индикатор загрузки.`,children:(0,u.jsx)(c,{fragment:!0,code:`<StatusSelectPattern current="OPEN" options={[]} isLoading onChange={change} ariaLabel="Статус" />`,children:(0,u.jsx)(o,{state:`loading`})})}),(0,u.jsx)(l,{id:`pending`,label:`Смена статуса`,description:`Когда смена статуса отправлена и ждёт ответа: поле заблокировано, второй выбор невозможен.`,children:(0,u.jsx)(c,{fragment:!0,code:`<StatusSelectPattern current="OPEN" options={transitions} isPending onChange={change} ariaLabel="Статус" />`,children:(0,u.jsx)(o,{state:`pending`})})}),(0,u.jsx)(l,{id:`lazy`,label:`Ленивая загрузка`,description:`Когда переходы зависят от прав и процесса: запрос уходит только при первом раскрытии.`,children:(0,u.jsx)(t,{fragment:!0,copyLabel:`Скопировать код: ленивая загрузка переходов`,language:`tsx`,code:`function TaskStatus({ taskId }: { taskId: string }) {
  const [open, setOpen] = useState(false)
  const query = useQuery({ queryKey: ["transitions", taskId], queryFn: () => fetchTransitions(taskId), enabled: open })
  const mutation = useMutation({ mutationFn: (id: string) => applyTransition(taskId, id) })

  return (
    <StatusSelectPattern
      current={query.data?.current ?? null}
      options={query.data?.transitions ?? []}
      isLoading={query.isLoading}
      isPending={mutation.isPending}
      onOpen={() => setOpen(true)}
      onChange={(id) => mutation.mutate(id)}
      ariaLabel="Сменить статус задачи"
    />
  )
}`})})]})}export{d as default};