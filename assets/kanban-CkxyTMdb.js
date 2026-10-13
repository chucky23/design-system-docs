import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{An as t,En as n,Fo as r,Gn as i,Go as a,I as o,In as s,Nn as c,O as l,On as u,Pn as d,Rn as f,Tn as p,Yo as m,a as h,br as g,gi as _,o as v,qo as y}from"./chunk-5DUEG3R3-896u-HpP.js";import{h as b,j as x,n as S,r as C}from"./docs-3sp5L-9g.js";import"./index-CHfT3erv.js";import"./workspace-DK_BGpXz.js";import{n as w,t as T}from"./docs-article-DBNRC-Xz.js";var E=e();function D({className:e,children:t,...n}){return(0,E.jsx)(`div`,{"data-slot":`kanban-board`,className:m(`flex gap-3 overflow-x-auto`,e),...n,children:t})}function O({status:e,title:t,count:n,onNewTask:i,className:a,children:o,...c}){return(0,E.jsxs)(`div`,{"data-slot":`kanban-column`,className:m(`flex w-72 shrink-0 flex-col`,a),...c,children:[(0,E.jsxs)(`div`,{className:`flex items-center gap-2 px-1 pb-2`,children:[(0,E.jsx)(s,{status:e,size:`sm`}),(0,E.jsx)(`span`,{className:`text-sm font-medium text-foreground`,children:t}),n!==void 0&&(0,E.jsx)(h,{variant:`secondary`,className:`ml-auto`,children:n})]}),(0,E.jsx)(v,{className:`min-h-0 flex-1`,children:(0,E.jsx)(`div`,{className:`flex flex-col gap-2 pb-2`,children:o})}),(0,E.jsxs)(_,{variant:`ghost`,size:`sm`,className:`mt-1 w-full justify-start text-muted-foreground`,onClick:i,children:[(0,E.jsx)(r,{}),`New task`]})]})}function k({title:e,status:r,priority:i,subtasks:o,parentLabel:l,tags:f,className:h,...g}){let _=o||l||f&&f.length>0;return(0,E.jsxs)(u,{size:`sm`,className:m(`cursor-pointer transition-colors hover:border-accent-foreground/30`,h),...g,children:[(0,E.jsx)(c,{children:(0,E.jsxs)(d,{className:`flex items-center gap-2`,children:[(0,E.jsx)(s,{status:r,priority:i,size:`sm`}),(0,E.jsx)(`span`,{className:`min-w-0 truncate`,children:e})]})}),_&&(0,E.jsxs)(t,{className:`flex flex-wrap items-center gap-x-3 gap-y-1`,children:[o&&(0,E.jsxs)(`span`,{className:`inline-flex items-center gap-1 text-xs text-muted-foreground`,children:[(0,E.jsx)(y,{className:`size-3`}),o.done,`/`,o.total]}),l&&(0,E.jsxs)(`span`,{className:`inline-flex items-center gap-1 text-xs text-muted-foreground`,children:[(0,E.jsx)(a,{className:`size-3`}),(0,E.jsx)(`span`,{className:`max-w-[10rem] truncate`,children:l})]}),f&&f.length>0&&(0,E.jsx)(n,{className:`ml-auto`,children:f.map(e=>(0,E.jsx)(p,{size:`sm`,color:e.color,children:e.label},e.label))})]})]})}var A=[{id:`usage`,label:`Использование`},{id:`kanban-card`,label:`Карточка`},{id:`board-screen`,label:`Экран доски`},{id:`api`,label:`API`}];function j(){return(0,E.jsx)(o,{title:`Kanban Board`,description:`Доска задач с вертикальными колонками по статусам и карточками. Экран доски с переносом карточек собирай типом BoardWorkspace.`,breadcrumbs:T(`/components/kanban`),children:(0,E.jsx)(l,{presentation:`article`,label:`Kanban Board`,inspector:w(A),document:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(C,{title:`KanbanBoard`,description:`Доска с колонками по статусам. Каждая KanbanColumn содержит KanbanCard с метаданными.`,code:`<KanbanBoard>
  <KanbanColumn status="open" title="Open" count={3}>
    <KanbanCard
      title="Design token audit"
      status="open"
      priority="p2"
      tags={[{ label: "design", color: "info" }]}
    />
    <KanbanCard
      title="Update changelog"
      status="open"
      subtasks={{ done: 1, total: 4 }}
    />
    <KanbanCard
      title="Add dark mode tests"
      status="open"
      priority="p3"
      parentLabel="Testing Epic"
    />
  </KanbanColumn>

  <KanbanColumn status="progress" title="In Progress" count={2}>
    <KanbanCard
      title="Migrate auth service"
      status="progress"
      priority="p1"
      subtasks={{ done: 3, total: 5 }}
      tags={[{ label: "backend", color: "accent" }]}
    />
    <KanbanCard
      title="Refactor filter panel"
      status="progress"
      priority="p2"
      parentLabel="UI Cleanup"
    />
  </KanbanColumn>

  <KanbanColumn status="blocked" title="Blocked" count={2}>
    <KanbanCard
      title="Database migration"
      status="blocked"
      priority="p0"
      tags={[{ label: "critical", color: "err" }]}
    />
    <KanbanCard
      title="API rate limiting"
      status="blocked"
      priority="p1"
      parentLabel="Platform Migration"
    />
  </KanbanColumn>

  <KanbanColumn status="closed" title="Closed" count={3}>
    <KanbanCard
      title="Setup CI pipeline"
      status="closed"
      tags={[{ label: "devops", color: "ok" }]}
    />
    <KanbanCard
      title="Write onboarding docs"
      status="closed"
      subtasks={{ done: 6, total: 6 }}
    />
    <KanbanCard
      title="Fix login redirect"
      status="closed"
      priority="p1"
    />
  </KanbanColumn>
</KanbanBoard>`,layout:`block`,children:(0,E.jsxs)(D,{children:[(0,E.jsxs)(O,{status:`open`,title:`Open`,count:3,children:[(0,E.jsx)(k,{title:`Design token audit`,status:`open`,priority:`p2`,tags:[{label:`design`,color:`info`}]}),(0,E.jsx)(k,{title:`Update changelog`,status:`open`,subtasks:{done:1,total:4}}),(0,E.jsx)(k,{title:`Add dark mode tests`,status:`open`,priority:`p3`,parentLabel:`Testing Epic`})]}),(0,E.jsxs)(O,{status:`progress`,title:`In Progress`,count:2,children:[(0,E.jsx)(k,{title:`Migrate auth service`,status:`progress`,priority:`p1`,subtasks:{done:3,total:5},tags:[{label:`backend`,color:`accent`}]}),(0,E.jsx)(k,{title:`Refactor filter panel`,status:`progress`,priority:`p2`,parentLabel:`UI Cleanup`})]}),(0,E.jsxs)(O,{status:`blocked`,title:`Blocked`,count:2,children:[(0,E.jsx)(k,{title:`Database migration`,status:`blocked`,priority:`p0`,tags:[{label:`critical`,color:`err`}]}),(0,E.jsx)(k,{title:`API rate limiting`,status:`blocked`,priority:`p1`,parentLabel:`Platform Migration`})]}),(0,E.jsxs)(O,{status:`closed`,title:`Closed`,count:3,children:[(0,E.jsx)(k,{title:`Setup CI pipeline`,status:`closed`,tags:[{label:`devops`,color:`ok`}]}),(0,E.jsx)(k,{title:`Write onboarding docs`,status:`closed`,subtasks:{done:6,total:6}}),(0,E.jsx)(k,{title:`Fix login redirect`,status:`closed`,priority:`p1`})]})]})}),(0,E.jsx)(f,{children:`Колонки — это состояния, карточки — сущности в каждом состоянии. KanbanCard показывает данные и действия; перенос между колонками принадлежит приложению. Workflow-токены подсвечивают priority и type, signal-иконки маркируют blocked и overdue без перегрузки визуального шума.`}),(0,E.jsxs)(f,{children:[`KanbanBoard не переносит карточки. Экран доски собирает тип экрана BoardWorkspace — он заменяет устаревший TaskBoardPattern и сам переносит карточки мышью и с клавиатуры. BoardSurface со страницы`,` `,(0,E.jsx)(b,{href:`/surfaces`,children:`Surfaces`}),` — содержимое слота, а не экран: его нативное перетаскивание не меняет порядок внутри колонки и не переносит карточку с клавиатуры.`]}),(0,E.jsx)(g,{id:`usage`,label:`Использование`,children:(0,E.jsx)(i,{copyLabel:`Скопировать код: использование KanbanBoard`,language:`tsx`,code:`import { KanbanBoard, KanbanColumn, KanbanCard } from "@chucky23/design-system/extended/kanban"

<KanbanBoard>
  <KanbanColumn status="progress" title="In Progress" count={1}>
    <KanbanCard title="Migrate auth service" status="progress" priority="p1" />
  </KanbanColumn>
</KanbanBoard>`})}),(0,E.jsx)(g,{id:`kanban-card`,label:`Карточка`,children:(0,E.jsx)(C,{title:`Card Variations`,description:`Карточки с разным набором метаданных: минимальная, с subtasks, с parent, с tags.`,code:`{/* Минимальная карточка */}
<KanbanCard title="Quick fix" status="open" />

{/* С подзадачами */}
<KanbanCard
  title="Refactor components"
  status="progress"
  priority="p2"
  subtasks={{ done: 2, total: 7 }}
/>

{/* С родительской задачей */}
<KanbanCard
  title="Write unit tests"
  status="open"
  priority="p3"
  parentLabel="Testing Epic"
/>

{/* С тегами */}
<KanbanCard
  title="Critical hotfix"
  status="blocked"
  priority="p0"
  tags={[
    { label: "urgent", color: "err" },
    { label: "backend", color: "accent" },
  ]}
/>`,layout:`block`,children:(0,E.jsxs)(S,{columns:2,children:[(0,E.jsx)(k,{title:`Quick fix`,status:`open`}),(0,E.jsx)(k,{title:`Refactor components`,status:`progress`,priority:`p2`,subtasks:{done:2,total:7}}),(0,E.jsx)(k,{title:`Write unit tests`,status:`open`,priority:`p3`,parentLabel:`Testing Epic`}),(0,E.jsx)(k,{title:`Critical hotfix`,status:`blocked`,priority:`p0`,tags:[{label:`urgent`,color:`err`},{label:`backend`,color:`accent`}]})]})})}),(0,E.jsxs)(g,{id:`board-screen`,label:`Экран доски`,children:[(0,E.jsxs)(f,{children:[`BoardWorkspace из ./patterns/board-workspace — тип экрана «доска». Он рисует колонки, переносит карточки мышью и сочетанием Alt со стрелками, держит поиск, фильтры, пустые состояния и инспектор выбранной карточки. Карточку приложение передаёт через renderCard без собственной поверхности, поэтому KanbanCard внутри BoardWorkspace не нужен. Живой пример — экран`,` `,(0,E.jsx)(b,{href:`/screens/board`,children:`Доска`}),`.`]}),(0,E.jsx)(i,{copyLabel:`Скопировать код: переход на BoardWorkspace`,language:`tsx`,code:`// Было: ручная доска на устаревшей композиции
import { TaskBoardPattern } from "@chucky23/design-system/patterns/task-board-pattern"

// Стало: тип экрана «доска»
import { BoardWorkspace } from "@chucky23/design-system/patterns/board-workspace"

<BoardWorkspace label="Задачи" query={query} onQueryChange={setQuery} onClear={reset}
  state={state} empty={{ title: "Задач пока нет", description: "Создай первую задачу" }}
  columns={statuses.map(status => ({ id: status.id, label: status.label, tone: status.tone }))}
  items={tasks} getItemId={task => task.id} getItemColumnId={task => task.status} getItemLabel={task => task.title}
  renderCard={task => <TaskCardContent task={task} />} onMove={move => moveTask(move)} onActivate={open} />`})]}),(0,E.jsxs)(g,{id:`api`,label:`API`,children:[(0,E.jsx)(x,{title:`KanbanColumn`,props:[{name:`status`,type:`Status`,defaultValue:`—`,description:`Статус колонки: open, progress, blocked, deferred, closed. Определяет иконку в заголовке.`},{name:`title`,type:`string`,defaultValue:`—`,description:`Заголовок колонки.`},{name:`count`,type:`number`,defaultValue:`—`,description:`Счётчик задач. Badge в заголовке.`},{name:`onNewTask`,type:`() => void`,defaultValue:`—`,description:`Колбэк кнопки New task в футере колонки.`}]}),(0,E.jsx)(x,{title:`KanbanCard`,props:[{name:`title`,type:`string`,defaultValue:`—`,description:`Название задачи.`},{name:`status`,type:`Status`,defaultValue:`—`,description:`Статус задачи. Определяет StatusIcon.`},{name:`priority`,type:`Priority`,defaultValue:`—`,description:`Приоритет: p0–p4. Меняет цвет StatusIcon.`},{name:`subtasks`,type:`{ done, total }`,defaultValue:`—`,description:`Прогресс подзадач. Отображается как done/total.`},{name:`parentLabel`,type:`string`,defaultValue:`—`,description:`Название родительской задачи/эпика.`},{name:`tags`,type:`{ label, color }[]`,defaultValue:`—`,description:`Массив тегов. color: neutral, ok, warn, err, info, accent.`}]})]})]})})})}export{j as default};