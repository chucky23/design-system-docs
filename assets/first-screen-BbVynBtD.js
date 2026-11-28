import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{b as t}from"./chunk-NA6PDP3U-Cjn5wWWb.js";import{$n as n,Ot as r,Qn as i,St as a,gt as o,pt as s,rt as c,tn as l,xn as u}from"./index-DnsCB0LC.js";var d=e(),f=`import { useMemo, useState } from "react"
import { Select, Table, TableBody, TableCell, TableHead, TableHeader, TableRow, WorkflowIcon } from "@chucky23/design-system/react"
import { StatusTag } from "@chucky23/design-system/patterns"
import { RegistryWorkspace, WorkspacePage, WorkspaceQuickCreate, WorkspaceShell } from "@chucky23/design-system/patterns/workspace"

type Status = "open" | "progress" | "closed"
type Task = { id: string; title: string; status: Status; assignee: string }

const labels: Record<Status, string> = { open: "Открыта", progress: "В работе", closed: "Готово" }
const statuses = [{ value: "all", label: "Все статусы" }, ...Object.entries(labels).map(([value, label]) => ({ value, label }))]

const initialTasks: Task[] = [
  { id: "TASK-4210", title: "Перенести экспорт отчётов в очередь", status: "progress", assignee: "Анна Котова" },
  { id: "TASK-4211", title: "Разобрать дубли уведомлений", status: "open", assignee: "Илья Смирнов" },
  { id: "TASK-4213", title: "Обновить сертификаты балансировщика", status: "closed", assignee: "Олег Петров" },
]

const navigation = [{ id: "work", label: "Работа", items: [{ id: "tasks", label: "Задачи", onActivate: () => {} }] }]

export function TasksScreen() {
  const [tasks, setTasks] = useState(initialTasks)
  const [query, setQuery] = useState("")
  const [status, setStatus] = useState("all")
  const [creating, setCreating] = useState(false)

  const visible = useMemo(() => tasks.filter((task) => {
    const byQuery = \`\${task.id} \${task.title}\`.toLowerCase().includes(query.trim().toLowerCase())
    return byQuery && (status === "all" || task.status === status)
  }), [tasks, query, status])

  const clear = () => {
    setQuery("")
    setStatus("all")
  }
  const create = (title: string) => {
    setTasks([{ id: \`TASK-\${4300 + tasks.length}\`, title, status: "open", assignee: "Анна Котова" }, ...tasks])
  }

  return (
    <WorkspaceShell brand="Tasks" groups={navigation} activeId="tasks">
      <WorkspacePage
        title="Задачи"
        description="Задачи текущего спринта"
        actions={{ primary: { id: "create", label: "Создать задачу", onActivate: () => setCreating(true) } }}
      >
        <RegistryWorkspace
          label="Задачи"
          query={query}
          onQueryChange={setQuery}
          onClear={clear}
          searchPlaceholder="ID или название"
          filters={<Select ariaLabel="Статус" value={status} onValueChange={(next) => setStatus(next ?? "all")} options={statuses} />}
          activeFilters={status === "all" ? [] : [{ id: "status", label: labels[status as Status], onRemove: () => setStatus("all") }]}
          state={{ kind: "ready", matching: visible.length, total: tasks.length }}
          empty={{ title: "Задач пока нет", description: "Создай первую задачу спринта" }}
          noResults={{ title: "Ничего не найдено", description: "Сбрось поиск или фильтр" }}
          create={<WorkspaceQuickCreate open={creating} onOpenChange={setCreating} label="Новая задача" placeholder="Название задачи" icon={<WorkflowIcon status="open" />} onCreate={create} />}
        >
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Задача</TableHead>
                <TableHead>Статус</TableHead>
                <TableHead>Исполнитель</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {visible.map((task) => (
                <TableRow key={task.id}>
                  <TableCell wrap="nowrap" mono>{task.id}</TableCell>
                  <TableCell>{task.title}</TableCell>
                  <TableCell wrap="nowrap"><StatusTag label={labels[task.status]} status={task.status} /></TableCell>
                  <TableCell>{task.assignee}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </RegistryWorkspace>
      </WorkspacePage>
    </WorkspaceShell>
  )
}`,p=`import { useState } from "react"
import { WorkspacePage, WorkspaceShell } from "@chucky23/design-system/patterns/workspace"

const navigation = [
  { id: "work", label: "Работа", items: [{ id: "tasks", label: "Задачи", onActivate: () => undefined }] },
]

function TasksPage() {
  const [creating, setCreating] = useState(false)
  return (
    <WorkspaceShell brand="Tasks" groups={navigation} activeId="tasks">
      <WorkspacePage
        title="Задачи"
        description="Задачи текущего спринта"
        actions={{
          primary: { id: "create", label: "Создать задачу", onActivate: () => setCreating(true) },
        }}
      >
        {/* Один тип экрана: следующий шаг. */}
        {creating ? "Открыто создание задачи" : null}
      </WorkspacePage>
    </WorkspaceShell>
  )
}`,m=`import { useState } from "react"
import { Table, TableBody, TableCell, TableRow } from "@chucky23/design-system/react"
import { RegistryWorkspace } from "@chucky23/design-system/patterns/workspace"

type Task = { id: string; title: string }

function TaskList({ tasks }: { tasks: readonly Task[] }) {
  const [query, setQuery] = useState("")
  const needle = query.trim().toLocaleLowerCase("ru")
  const visible = tasks.filter((task) => \`\${task.id} \${task.title}\`.toLocaleLowerCase("ru").includes(needle))
  return (
    <RegistryWorkspace
      label="Задачи"
      query={query}
      onQueryChange={setQuery}
      state={{ kind: "ready", matching: visible.length, total: tasks.length }}
      empty={{ title: "Задач пока нет", description: "Создай первую задачу спринта" }}
    >
      <Table>
        <TableBody>
          {visible.map((task) => (
            <TableRow key={task.id}>
              <TableCell mono>{task.id}</TableCell>
              <TableCell>{task.title}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </RegistryWorkspace>
  )
}`,h=`import { useState } from "react"
import { Select, Table, TableBody, TableCell, TableRow } from "@chucky23/design-system/react"
import { StatusTag } from "@chucky23/design-system/patterns"
import { RegistryWorkspace } from "@chucky23/design-system/patterns/workspace"

type Status = "open" | "progress" | "closed"
type Task = { id: string; title: string; status: Status }

const labels: Record<Status, string> = { open: "Открыта", progress: "В работе", closed: "Готово" }
const statuses = [{ value: "all", label: "Все статусы" }, ...Object.entries(labels).map(([value, label]) => ({ value, label }))]

function FilteredTaskList({ tasks }: { tasks: readonly Task[] }) {
  const [query, setQuery] = useState("")
  const [status, setStatus] = useState("all")
  const clear = () => {
    setQuery("")
    setStatus("all")
  }
  const needle = query.trim().toLocaleLowerCase("ru")
  const visible = tasks.filter((task) =>
    (status === "all" || task.status === status) && \`\${task.id} \${task.title}\`.toLocaleLowerCase("ru").includes(needle))
  return (
    <RegistryWorkspace
      label="Задачи"
      query={query}
      onQueryChange={setQuery}
      onClear={clear}
      searchPlaceholder="ID или название"
      filters={
        <Select
          ariaLabel="Статус"
          value={status}
          onValueChange={(next) => setStatus(next ?? "all")}
          options={statuses}
        />
      }
      filtersActive={status !== "all"}
      state={{ kind: "ready", matching: visible.length, total: tasks.length }}
      empty={{ title: "Задач пока нет", description: "Создай первую задачу спринта" }}
      noResults={{ title: "Ничего не найдено", description: "Сбрось поиск или фильтр" }}
    >
      <Table>
        <TableBody>
          {visible.map((task) => (
            <TableRow key={task.id}>
              <TableCell mono>{task.id}</TableCell>
              <TableCell>{task.title}</TableCell>
              <TableCell><StatusTag status={task.status} label={labels[task.status]} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </RegistryWorkspace>
  )
}`,g=`// Загрузка
state={{ kind: "loading", label: "Загружаю задачи" }}

// Ошибка: кнопку повтора рисует тип экрана
state={{
  kind: "error",
  title: "Не удалось загрузить задачи",
  description: "Сервер не ответил. Данные на экране не изменились.",
  retry: { id: "retry", label: "Повторить", onActivate: reload },
}}

// Пусто: total равен нулю, показывается empty
state={{ kind: "ready", matching: 0, total: 0 }}`,_=`import { useState } from "react"
import { Table, TableBody, TableCell, TableRow } from "@chucky23/design-system/react"
import { RegistryWorkspace, WorkspaceQuickCreate } from "@chucky23/design-system/patterns/workspace"

type Task = { id: string; title: string }

function TaskListWithCreate({ initialTasks }: { initialTasks: Task[] }) {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)
  const [creating, setCreating] = useState(false)
  const [query, setQuery] = useState("")
  const create = (title: string) => {
    setTasks((current) => [...current, { id: \`TASK-\${4300 + current.length}\`, title }])
    setCreating(false)
  }
  return (
    <RegistryWorkspace
      label="Задачи"
      query={query}
      onQueryChange={setQuery}
      state={{ kind: "ready", matching: tasks.length, total: tasks.length }}
      empty={{ title: "Задач пока нет", description: "Создай первую задачу спринта" }}
      create={
        <WorkspaceQuickCreate
          open={creating}
          onOpenChange={setCreating}
          label="Новая задача"
          onCreate={create}
        />
      }
    >
      <Table>
        <TableBody>
          {tasks.map((task) => (
            <TableRow key={task.id}>
              <TableCell mono>{task.id}</TableCell>
              <TableCell>{task.title}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </RegistryWorkspace>
  )
}`,v=[[`Список однотипных записей с поиском и фильтрами`,`RegistryWorkspace`,(0,d.jsx)(o,{href:`/examples/sprint/registry`,children:`Реестр задач`},`registry`)],[`Одна запись: документ и свойства`,`DocumentWorkspace`,(0,d.jsx)(o,{href:`/examples/sprint/document`,children:`Документ задачи`},`document`)],[`Настройки с одним сохранением`,`SettingsWorkspace`,(0,d.jsx)(o,{href:`/examples/sprint/settings`,children:`Процесс задачи`},`settings`)],[`Колонки статуса с переносом карточек`,`BoardWorkspace`,(0,d.jsx)(o,{href:`/examples/sprint/board`,children:`Доска задач`},`board`)],[`Сводка с метриками и переходами`,`OverviewWorkspace`,(0,d.jsx)(o,{href:`/examples/sprint/overview`,children:`Обзор спринта`},`overview`)]],y=f.slice(0,f.indexOf(`

`));function b(){return(0,d.jsxs)(a,{kind:`overview`,route:`/first-screen`,description:`Собери реестр задач на RegistryWorkspace: оболочка, строки, поиск, фильтр, состояния и создание.`,related:(0,d.jsx)(r,{links:[{href:`/screens/registry`,label:`Реестр`,description:`Все слоты и свойства RegistryWorkspace.`},{href:`/installation#providers`,label:`Провайдеры`,description:`AnikinLabProvider вокруг приложения: тема, CSP и всплывающие окна.`},{href:`/how-it-works`,label:`Как устроена система`,description:`Почему экран собирается из слоёв.`},{href:`/examples`,label:`Все примеры`,description:`Готовые экраны приложения Sprint.`}]}),children:[(0,d.jsx)(l,{id:`result`,label:`Что получится`,description:`Поиск, фильтр и создание здесь работают. Полный файл экрана — под кнопкой «Код». Экран рендерится внутри AnikinLabProvider, который ставит начальная настройка.`,children:(0,d.jsx)(c,{layout:`block`,code:f,codeLanguage:`tsx`,children:(0,d.jsx)(i,{})})}),(0,d.jsx)(l,{id:`choose`,label:`Выбери тип экрана`,description:`Экран принадлежит одному типу из пяти. Здесь нужен реестр.`,children:(0,d.jsx)(u,{label:`Тип экрана под задачу`,columns:[{label:`Задача`,width:`50%`},{label:`Тип экрана`,kind:`name`},{label:`Пример`}],rows:v})}),(0,d.jsx)(l,{id:`imports`,label:`Импорт`,description:`Фрагменты ниже берут имена из этих строк.`,children:(0,d.jsx)(s,{code:y})}),(0,d.jsx)(l,{id:`shell`,label:`Поставь оболочку`,description:`Навигацию, крошки, заголовок и действия страницы рисует страничная оболочка.`,children:(0,d.jsx)(t,{language:`tsx`,copyLabel:`Скопировать код: оболочка`,code:p})}),(0,d.jsx)(l,{id:`registry`,label:`Передай строки`,description:`Тип экрана рисует панель коллекции и состояния. Проект передаёт данные и таблицу.`,children:(0,d.jsx)(t,{language:`tsx`,copyLabel:`Скопировать код: RegistryWorkspace`,code:m})}),(0,d.jsx)(l,{id:`filters`,label:`Добавь поиск и фильтр`,description:`Поле поиска уже есть в панели. Фильтры идут в filters, снятие фильтра в activeFilters.`,children:(0,d.jsx)(t,{language:`tsx`,copyLabel:`Скопировать код: поиск и фильтр`,code:h})}),(0,d.jsx)(l,{id:`states`,label:`Опиши состояния`,description:`Экран не рисует спиннер и пустое состояние сам: их выбирает проп state.`,children:(0,d.jsx)(c,{layout:`block`,code:g,codeLanguage:`tsx`,children:(0,d.jsx)(n,{})})}),(0,d.jsx)(l,{id:`create`,label:`Добавь создание`,description:`Кнопка страницы и строка в конце списка открывают одно поле.`,children:(0,d.jsx)(t,{language:`tsx`,copyLabel:`Скопировать код: быстрое создание`,code:_})})]})}export{b as default};