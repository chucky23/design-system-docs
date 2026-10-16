import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{Cn as t,Dn as n,Gn as r,Lo as i,Rn as a,Sn as o,Yo as s,Zo as c,_i as l,_n as u,bn as d,br as f,hn as p,m,n as h,o as g,qo as _,r as v,xn as y}from"./chunk-ZW5N5E5H-ScFucA-b.js";import{h as b,j as x,n as S,r as C}from"./docs-Ck_i9UNX.js";import"./index-DiNellwx.js";import"./workspace-BwWB7lTa.js";import{n as w,t as T}from"./docs-article-BUNGnjgF.js";var E=e();function D({className:e,children:t,...n}){return(0,E.jsx)(`div`,{"data-slot":`kanban-board`,className:c(`flex gap-3 overflow-x-auto`,e),...n,children:t})}function O({status:e,title:t,count:r,onNewTask:a,className:o,children:s,...u}){return(0,E.jsxs)(`div`,{"data-slot":`kanban-column`,className:c(`flex w-72 shrink-0 flex-col`,o),...u,children:[(0,E.jsxs)(`div`,{className:`flex items-center gap-2 px-1 pb-2`,children:[(0,E.jsx)(h,{status:e,size:`sm`}),(0,E.jsx)(`span`,{className:`text-sm font-medium text-foreground`,children:t}),r!==void 0&&(0,E.jsx)(v,{variant:`secondary`,className:`ml-auto`,children:r})]}),(0,E.jsx)(n,{className:`min-h-0 flex-1`,children:(0,E.jsx)(`div`,{className:`flex flex-col gap-2 pb-2`,children:s})}),(0,E.jsxs)(l,{variant:`ghost`,size:`sm`,className:`mt-1 w-full justify-start text-muted-foreground`,onClick:a,children:[(0,E.jsx)(i,{}),`New task`]})]})}function k({title:e,status:n,priority:r,subtasks:i,parentLabel:a,tags:l,className:f,...m}){let g=i||a||l&&l.length>0;return(0,E.jsxs)(p,{size:`sm`,className:c(`cursor-pointer transition-colors hover:border-accent-foreground/30`,f),...m,children:[(0,E.jsx)(d,{children:(0,E.jsxs)(y,{className:`flex items-center gap-2`,children:[(0,E.jsx)(h,{status:n,priority:r,size:`sm`}),(0,E.jsx)(`span`,{className:`min-w-0 truncate`,children:e})]})}),g&&(0,E.jsxs)(u,{className:`flex flex-wrap items-center gap-x-3 gap-y-1`,children:[i&&(0,E.jsxs)(`span`,{className:`inline-flex items-center gap-1 text-xs text-muted-foreground`,children:[(0,E.jsx)(s,{className:`size-3`}),i.done,`/`,i.total]}),a&&(0,E.jsxs)(`span`,{className:`inline-flex items-center gap-1 text-xs text-muted-foreground`,children:[(0,E.jsx)(_,{className:`size-3`}),(0,E.jsx)(`span`,{className:`max-w-[10rem] truncate`,children:a})]}),l&&l.length>0&&(0,E.jsx)(t,{className:`ml-auto`,children:l.map(e=>(0,E.jsx)(o,{size:`sm`,color:e.color,children:e.label},e.label))})]})]})}var A=[{id:`usage`,label:`Использование`},{id:`kanban-card`,label:`Карточка`},{id:`board-screen`,label:`Экран доски`},{id:`api`,label:`API`}];function j(){return(0,E.jsx)(m,{title:`Kanban Board`,description:`Доска задач с вертикальными колонками по статусам и карточками. Экран доски с переносом карточек собирай типом BoardWorkspace.`,breadcrumbs:T(`/components/kanban`),children:(0,E.jsx)(g,{presentation:`article`,label:`Kanban Board`,inspector:w(A),document:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(C,{title:`KanbanBoard`,description:`Доска с колонками по статусам. Каждая KanbanColumn содержит KanbanCard с метаданными.`,code:`<KanbanBoard>
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
</KanbanBoard>`,layout:`block`,children:(0,E.jsxs)(D,{children:[(0,E.jsxs)(O,{status:`open`,title:`Open`,count:3,children:[(0,E.jsx)(k,{title:`Design token audit`,status:`open`,priority:`p2`,tags:[{label:`design`,color:`info`}]}),(0,E.jsx)(k,{title:`Update changelog`,status:`open`,subtasks:{done:1,total:4}}),(0,E.jsx)(k,{title:`Add dark mode tests`,status:`open`,priority:`p3`,parentLabel:`Testing Epic`})]}),(0,E.jsxs)(O,{status:`progress`,title:`In Progress`,count:2,children:[(0,E.jsx)(k,{title:`Migrate auth service`,status:`progress`,priority:`p1`,subtasks:{done:3,total:5},tags:[{label:`backend`,color:`accent`}]}),(0,E.jsx)(k,{title:`Refactor filter panel`,status:`progress`,priority:`p2`,parentLabel:`UI Cleanup`})]}),(0,E.jsxs)(O,{status:`blocked`,title:`Blocked`,count:2,children:[(0,E.jsx)(k,{title:`Database migration`,status:`blocked`,priority:`p0`,tags:[{label:`critical`,color:`err`}]}),(0,E.jsx)(k,{title:`API rate limiting`,status:`blocked`,priority:`p1`,parentLabel:`Platform Migration`})]}),(0,E.jsxs)(O,{status:`closed`,title:`Closed`,count:3,children:[(0,E.jsx)(k,{title:`Setup CI pipeline`,status:`closed`,tags:[{label:`devops`,color:`ok`}]}),(0,E.jsx)(k,{title:`Write onboarding docs`,status:`closed`,subtasks:{done:6,total:6}}),(0,E.jsx)(k,{title:`Fix login redirect`,status:`closed`,priority:`p1`})]})]})}),(0,E.jsx)(a,{children:`Колонки — это состояния, карточки — сущности в каждом состоянии. KanbanCard показывает данные и действия; перенос между колонками принадлежит приложению. Workflow-токены подсвечивают priority и type, signal-иконки маркируют blocked и overdue без перегрузки визуального шума.`}),(0,E.jsxs)(a,{children:[`KanbanBoard не переносит карточки. Экран доски собирает тип экрана BoardWorkspace — он заменяет устаревший TaskBoardPattern и сам переносит карточки мышью и с клавиатуры. BoardSurface со страницы`,` `,(0,E.jsx)(b,{href:`/surfaces`,children:`Surfaces`}),` — содержимое слота, а не экран: его нативное перетаскивание не меняет порядок внутри колонки и не переносит карточку с клавиатуры.`]}),(0,E.jsx)(f,{id:`usage`,label:`Использование`,children:(0,E.jsx)(r,{copyLabel:`Скопировать код: использование KanbanBoard`,language:`tsx`,code:`import { KanbanBoard, KanbanColumn, KanbanCard } from "@chucky23/design-system/extended/kanban"

<KanbanBoard>
  <KanbanColumn status="progress" title="In Progress" count={1}>
    <KanbanCard title="Migrate auth service" status="progress" priority="p1" />
  </KanbanColumn>
</KanbanBoard>`})}),(0,E.jsx)(f,{id:`kanban-card`,label:`Карточка`,children:(0,E.jsx)(C,{title:`Card Variations`,description:`Карточки с разным набором метаданных: минимальная, с subtasks, с parent, с tags.`,code:`{/* Минимальная карточка */}
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
/>`,layout:`block`,children:(0,E.jsxs)(S,{columns:2,children:[(0,E.jsx)(k,{title:`Quick fix`,status:`open`}),(0,E.jsx)(k,{title:`Refactor components`,status:`progress`,priority:`p2`,subtasks:{done:2,total:7}}),(0,E.jsx)(k,{title:`Write unit tests`,status:`open`,priority:`p3`,parentLabel:`Testing Epic`}),(0,E.jsx)(k,{title:`Critical hotfix`,status:`blocked`,priority:`p0`,tags:[{label:`urgent`,color:`err`},{label:`backend`,color:`accent`}]})]})})}),(0,E.jsxs)(f,{id:`board-screen`,label:`Экран доски`,children:[(0,E.jsxs)(a,{children:[`BoardWorkspace из ./patterns/board-workspace — тип экрана «доска». Он рисует колонки, переносит карточки мышью и сочетанием Alt со стрелками, держит поиск, фильтры, пустые состояния и инспектор выбранной карточки. Карточку приложение передаёт через renderCard без собственной поверхности, поэтому KanbanCard внутри BoardWorkspace не нужен. Живой пример — экран`,` `,(0,E.jsx)(b,{href:`/screens/board`,children:`Доска`}),`.`]}),(0,E.jsx)(r,{copyLabel:`Скопировать код: переход на BoardWorkspace`,language:`tsx`,code:`// Было: ручная доска на устаревшей композиции
import { TaskBoardPattern } from "@chucky23/design-system/patterns/task-board-pattern"

// Стало: тип экрана «доска»
import { BoardWorkspace } from "@chucky23/design-system/patterns/board-workspace"

<BoardWorkspace label="Задачи" query={query} onQueryChange={setQuery} onClear={reset}
  state={state} empty={{ title: "Задач пока нет", description: "Создай первую задачу" }}
  columns={statuses.map(status => ({ id: status.id, label: status.label, tone: status.tone }))}
  items={tasks} getItemId={task => task.id} getItemColumnId={task => task.status} getItemLabel={task => task.title}
  renderCard={task => <TaskCardContent task={task} />} onMove={move => moveTask(move)} onActivate={open} />`})]}),(0,E.jsxs)(f,{id:`api`,label:`API`,children:[(0,E.jsx)(x,{title:`KanbanColumn`,props:[{name:`status`,type:`Status`,defaultValue:`—`,description:`Статус колонки: open, progress, blocked, deferred, closed. Определяет иконку в заголовке.`},{name:`title`,type:`string`,defaultValue:`—`,description:`Заголовок колонки.`},{name:`count`,type:`number`,defaultValue:`—`,description:`Счётчик задач. Badge в заголовке.`},{name:`onNewTask`,type:`() => void`,defaultValue:`—`,description:`Колбэк кнопки New task в футере колонки.`}]}),(0,E.jsx)(x,{title:`KanbanCard`,props:[{name:`title`,type:`string`,defaultValue:`—`,description:`Название задачи.`},{name:`status`,type:`Status`,defaultValue:`—`,description:`Статус задачи. Определяет StatusIcon.`},{name:`priority`,type:`Priority`,defaultValue:`—`,description:`Приоритет: p0–p4. Меняет цвет StatusIcon.`},{name:`subtasks`,type:`{ done, total }`,defaultValue:`—`,description:`Прогресс подзадач. Отображается как done/total.`},{name:`parentLabel`,type:`string`,defaultValue:`—`,description:`Название родительской задачи/эпика.`},{name:`tags`,type:`{ label, color }[]`,defaultValue:`—`,description:`Массив тегов. color: neutral, ok, warn, err, info, accent.`}]})]})]})})})}export{j as default};