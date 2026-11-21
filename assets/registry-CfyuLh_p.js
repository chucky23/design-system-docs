import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{A as t,Lt as n,Mt as r,Nt as i,Pt as a,Ut as o,X as s,_t as c,at as l,dt as u,on as d,rt as f}from"./index-BX5CNJVf.js";import{i as p}from"./snapshots-8Mq4mrcp.js";import{a as m,i as h,r as g}from"./api-rows-DPEAOUKj.js";var _=e();function v(){return(0,_.jsxs)(u,{kind:`component`,route:`/screens/registry`,description:`RegistryWorkspace: коллекция однотипных записей с поиском, фильтрами, счётчиком, состояниями и инспектором. Строки передаёт приложение, панель и раскладка принадлежат пакету.`,example:(0,_.jsx)(s,{fragment:!0,layout:`block`,code:`import { useState } from "react"

function TaskRegistry() {
  const [open, setOpen] = useState(false)
  return (
    <RegistryWorkspace
      label="Задачи"
      query={query}
      onQueryChange={setQuery}
      onClear={reset}
      filters={<Select ariaLabel="Статус" value={status} onValueChange={setStatus} options={statusOptions} />}
      activeFilters={activeFilters}
      views={{ label: "Вид", active: view, onChange: setView, options: viewOptions }}
      state={{ kind: "ready", matching: visible.length, total: tasks.length }}
      empty={{ title: "Задач пока нет", description: "Создай первую задачу строкой ниже" }}
      create={<WorkspaceQuickCreate label="Новая задача" onCreate={add} />}
      inspector={{ open, label: "Задача", onClose: () => setOpen(false), content: <DocumentWorkspace presentation="panel" label="Задача" title={task.title} /> }}
    >
      <Table>…</Table>
    </RegistryWorkspace>
  )
}`,children:(0,_.jsx)(r,{})}),imports:(0,_.jsx)(f,{code:`import { Button, Checkbox, Select, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@chucky23/design-system/react"
import { DocumentWorkspace, RegistryWorkspace, WorkspaceQuickCreate, type RegistryWorkspaceState } from "@chucky23/design-system/patterns/workspace"`}),api:(0,_.jsx)(t,{items:[{name:`RegistryWorkspace`,props:[...g,{name:`pagination`,type:`RegistryPagination`,description:`Номера страниц или курсор без общего числа. Показывается, когда страниц больше одной.`},{name:`measure`,type:`"full" | "centered"`,defaultValue:`"full"`,description:`centered: колонка чтения до 48rem для коротких строк.`},{name:`inspector`,type:`WorkspaceInspector`,description:`Документ выбранной строки.`},{name:`create`,type:`ReactNode`,description:`Быстрое создание под списком. Видно в состоянии ready.`},{name:`selection`,type:`RegistrySelection`,description:`Выбор строк: панель «Выбрано N» с групповыми действиями над результатами, Escape снимает выбор.`},{name:`children`,type:`ReactNode`,required:!0,description:`Результаты: Table, SortableTree, TreeSurface или список EntityRowRecipe.`}]},...h,{name:`RegistryPagination`,props:[{name:`page`,type:`number`,required:!0,description:`Текущая страница от 1.`},{name:`pageCount`,type:`number`,required:!0,description:`Всего страниц. Только у постраничного варианта.`},{name:`onPageChange`,type:`(page: number) => void`,required:!0,description:`Смена страницы. Только у постраничного варианта.`},{name:`kind`,type:`"cursor"`,description:`Курсорный вариант для журналов: общего числа нет.`},{name:`hasPrevious, hasNext`,type:`boolean`,description:`Есть ли соседние страницы. Только у курсора, обязательны.`},{name:`onPrevious, onNext`,type:`() => void`,description:`Переходы. Только у курсора, обязательны.`},{name:`label`,type:`string`,defaultValue:`"Страницы"`,description:`Имя навигации.`},{name:`previousLabel`,type:`string`,defaultValue:`"Предыдущая страница"`,description:`Имя кнопки.`},{name:`nextLabel`,type:`string`,defaultValue:`"Следующая страница"`,description:`Имя кнопки.`},{name:`pageLabel`,type:`(page: number, pageCount: number) => string`,defaultValue:`"Страница N из M"`,description:`Подпись положения. У курсора принимает только page.`}]},{name:`RegistrySelection`,props:[{name:`count`,type:`number`,required:!0,description:`Сколько строк выбрано. При нуле панели нет.`},{name:`actions`,type:`readonly WorkspaceAction[]`,required:!0,description:`Групповые действия. Опасное — tone: "danger", подтверждение за приложением.`},{name:`onClear`,type:`() => void`,required:!0,description:`Снять выбор: кнопка панели и Escape вне текстового поля.`},{name:`countLabel`,type:`(count: number) => string`,defaultValue:`"Выбрано N"`,description:`Подпись счётчика.`},{name:`label`,type:`string`,defaultValue:`"Действия с выбранными"`,description:`Имя панели.`},{name:`clearLabel`,type:`string`,defaultValue:`"Снять выбор"`,description:`Имя кнопки снятия выбора.`}]},m]}),related:(0,_.jsx)(c,{links:[{href:`/screens/board`,label:`Доска`,description:`Те же записи по колонкам статуса: панель коллекции общая.`},{href:`/screens/document`,label:`Документ`,description:`Что стоит в инспекторе выбранной строки.`},{href:`/screens/shell-bars`,label:`Панели оболочки`,description:`WorkspaceQuickCreate для слота create.`},{href:`/recipes/entity-row`,label:`EntityRowRecipe`,description:`Строка списка с заголовком, описанием и действием.`}]}),children:[(0,_.jsx)(o,{id:`when`,label:`Когда применять`,description:`Тип выбирается по задаче экрана, а не по виду данных.`,children:(0,_.jsx)(d,{label:`Когда брать реестр`,columns:[{label:`Задача экрана`},{label:`Что брать`}],rows:[[`Список, таблица или журнал с поиском и счётчиком`,`RegistryWorkspace`],[`Иерархия записей`,(0,_.jsxs)(_.Fragment,{children:[`Вид «Дерево» того же реестра: `,(0,_.jsx)(l,{href:`/surfaces/sortable-tree`,children:`SortableTree`},`tree`),` в children`]})],[`Те же записи по статусам`,(0,_.jsxs)(_.Fragment,{children:[`Вид «Доска»: `,(0,_.jsx)(l,{href:`/screens/board`,children:`BoardWorkspace`},`board`),` с тем же views`]})],[`Одна запись на всю страницу`,(0,_.jsx)(l,{href:`/screens/document`,children:`DocumentWorkspace`},`document`)],[`Сводка с переходами к реестрам`,(0,_.jsx)(l,{href:`/screens/overview`,children:`OverviewWorkspace`},`overview`)]]})}),(0,_.jsx)(o,{id:`slots`,label:`Слоты`,description:`Слот получает содержимое, а не раскладку. Card внутри слота не нужна.`,children:(0,_.jsx)(d,{label:`Слоты реестра`,columns:[{label:`Слот`,kind:`name`,width:`9rem`},{label:`Что класть`}],rows:[[`children`,(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(l,{href:`/components/table`,children:`Table`},`table`),`, `,(0,_.jsx)(l,{href:`/surfaces/sortable-tree`,children:`SortableTree`},`tree`),`, `,(0,_.jsx)(l,{href:`/surfaces/tree-surface`,children:`TreeSurface`},`surface`),` или список `,(0,_.jsx)(l,{href:`/recipes/entity-row`,children:`EntityRowRecipe`},`row`),`. DataTablePattern не нужен: поиск и счётчик уже есть`]})],[`filters`,(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(l,{href:`/components/select`,children:`Select`},`select`),` или `,(0,_.jsx)(l,{href:`/components/toggle-group`,children:`ToggleGroup`},`group`),`. Поля 24 px, панель одна на реестр и доску`]})],[`summary`,`Сводка рядом со счётчиком, например сумма по выборке`],[`banner`,`Данные, а не компонент: строки над результатами со своим действием`],[`create`,(0,_.jsx)(l,{href:`/screens/shell-bars#quick-create`,children:`WorkspaceQuickCreate`},`create`)],[`inspector`,(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(l,{href:`/screens/document#presentation`,children:`DocumentWorkspace presentation="panel"`},`document`)})],[`empty.composer, noResults.composer`,`Контрол на месте пустого состояния: строка создания, кнопка сброса`]]})}),(0,_.jsx)(o,{id:`states`,label:`Состояния`,description:`Состояния передаются данными. Ветки со Spinner или EmptyState рядом с типом не нужны.`,children:(0,_.jsx)(s,{layout:`block`,code:`import { useState } from "react"

interface Task {
  id: string
  title: string
}

function TaskStates({ tasks, loading, failed, reload }: { tasks: readonly Task[]; loading: boolean; failed: boolean; reload: () => void }) {
  const [query, setQuery] = useState("")
  const needle = query.trim().toLocaleLowerCase("ru")
  const visible = tasks.filter((task) => task.title.toLocaleLowerCase("ru").includes(needle))
  // matching и total: настоящие числа после фильтрации. Ноль без запроса даёт empty, ноль с запросом noResults.
  const state: RegistryWorkspaceState = loading
    ? { kind: "loading", label: "Загружаю задачи" }
    : failed
      ? {
          kind: "error",
          title: "Не удалось загрузить задачи",
          description: "Сервер не ответил.",
          retry: { id: "retry", label: "Повторить", onActivate: reload },
          details: "GET /api/tasks → 503",
        }
      : { kind: "ready", matching: visible.length, total: tasks.length }
  return (
    <RegistryWorkspace
      label="Задачи"
      query={query}
      onQueryChange={setQuery}
      onClear={() => setQuery("")}
      state={state}
      empty={{ title: "Задач пока нет", description: "Создай первую задачу" }}
      noResults={{ title: "Ничего не найдено", description: "По запросу задач нет", composer: <Button onClick={() => setQuery("")}>Сбросить поиск</Button> }}
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
}`,children:(0,_.jsx)(a,{})})}),(0,_.jsx)(o,{id:`selection`,label:`Выбор строк`,description:`Флажки отмечают строки, над результатами открывается панель «Выбрано N» с групповыми действиями. Строки и флажки рисует приложение, панель и Escape — тип экрана. Поиск снимает выбор со скрытых строк, групповое действие подтверждает тост с «Отменить».`,children:(0,_.jsx)(s,{fragment:!0,code:`const [checked, setChecked] = useState<string[]>([])

<RegistryWorkspace
  {...collection}
  selection={{
    count: checked.length,
    onClear: () => setChecked([]),
    actions: [
      { id: "complete", label: "Завершить", onActivate: completeChecked },
      { id: "archive", label: "В архив", onActivate: archiveChecked },
    ],
  }}
>
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead><Checkbox aria-label="Выбрать все" checked={allChecked} indeterminate={someChecked} onCheckedChange={toggleAll} /></TableHead>
        …
      </TableRow>
    </TableHeader>
    <TableBody>
      {tasks.map((task) => (
        <TableRow key={task.id} selected={checked.includes(task.id)}>
          <TableCell><Checkbox aria-label={\`Выбрать \${task.id}\`} checked={checked.includes(task.id)} onCheckedChange={() => toggle(task.id)} /></TableCell>
          …
        </TableRow>
      ))}
    </TableBody>
  </Table>
</RegistryWorkspace>`,children:(0,_.jsx)(i,{})})}),(0,_.jsxs)(o,{id:`inspector`,label:`Инспектор`,description:`Выбранная запись открывается панелью без ухода со списка. Внутри оболочки это правая боковая панель.`,children:[(0,_.jsx)(s,{layout:`block`,children:(0,_.jsx)(n,{source:p(`registry-inspector`),alt:`Реестр задач Sprint с открытой панелью задачи справа`,href:`/examples/sprint/registry`})}),(0,_.jsx)(d,{label:`Размещение инспектора`,columns:[{label:`placement`,kind:`name`,width:`9rem`},{label:`Ширина панели`},{label:`Поведение`}],rows:[[`auto`,`40% холста в пределах 360–640 px, ручка меняет её`,`Сдвигает список, пока ему остаётся не меньше 512 px. Если списку меньше 1024 px, таблица сворачивается до ID, названия и статуса. Если меньше 512 px, панель ложится поверх.`],[`side`,`40–77.5rem, по умолчанию всё место рядом со списком`,`Список держит от 384 px. Если списку меньше 1024 px, таблица сворачивается до ID, названия и статуса. Нет места: обычная раскладка auto.`]]})]}),(0,_.jsx)(o,{id:`screen`,label:`Целый экран`,description:`Реестр в оболочке приложения: дерево, доска, пагинация и шлюз перехода в панели.`,children:(0,_.jsx)(s,{layout:`block`,children:(0,_.jsx)(n,{source:p(`registry`),alt:`Реестр задач Sprint во весь экран`,href:`/examples/sprint/registry`})})})]})}export{v as default};