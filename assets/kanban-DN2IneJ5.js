import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{Oa as t,Ps as n,Qr as r,Sr as i,_s as a,ar as o,cr as s,dr as c,gs as l,hr as u,j as d,kr as f,ks as p,lr as m,rr as h,tr as g,ur as _,v,x as y}from"./chunk-FJ6G7XYZ-vkrr-AON.js";import{A as b,Q as x,g as S,h as C}from"./docs-CTQgkcVe.js";import"./index-CylhoBOX.js";import"./workspace-B0gvzNJe.js";import{n as w,r as T,t as E}from"./docs-article-CV9v0E7s.js";var D=e();function O({className:e,children:t,...r}){return(0,D.jsx)(`div`,{"data-slot":`kanban-board`,className:n(`flex gap-3 overflow-x-auto`,e),...r,children:t})}function k({status:e,title:r,count:i,onNewTask:a,className:o,children:s,...c}){return(0,D.jsxs)(`div`,{"data-slot":`kanban-column`,className:n(`flex w-72 shrink-0 flex-col`,o),...c,children:[(0,D.jsxs)(`div`,{className:`flex items-center gap-2 px-1 pb-2`,children:[(0,D.jsx)(g,{status:e,size:`sm`}),(0,D.jsx)(`span`,{className:`text-sm font-medium text-foreground`,children:r}),i!==void 0&&(0,D.jsx)(v,{variant:`secondary`,className:`ml-auto`,children:i})]}),(0,D.jsx)(u,{className:`min-h-0 flex-1`,children:(0,D.jsx)(`div`,{className:`flex flex-col gap-2 pb-2`,children:s})}),(0,D.jsxs)(t,{variant:`ghost`,size:`sm`,className:`mt-1 w-full justify-start text-muted-foreground`,onClick:a,children:[(0,D.jsx)(p,{}),`New task`]})]})}function A({title:e,status:t,priority:r,subtasks:i,parentLabel:u,tags:d,className:f,...p}){let v=i||u||d&&d.length>0;return(0,D.jsxs)(h,{size:`sm`,className:n(`cursor-pointer transition-colors hover:border-border-strong`,f),...p,children:[(0,D.jsx)(s,{children:(0,D.jsxs)(m,{"data-kanban-title":``,className:`flex items-center gap-2`,children:[(0,D.jsx)(g,{status:t,priority:r,size:`sm`}),(0,D.jsx)(`span`,{className:`min-w-0 truncate`,children:e})]})}),v&&(0,D.jsxs)(o,{className:`flex flex-wrap items-center gap-x-3 gap-y-1`,children:[i&&(0,D.jsxs)(`span`,{className:`inline-flex items-center gap-1 text-xs text-muted-foreground`,children:[(0,D.jsx)(l,{className:`size-3`}),i.done,`/`,i.total]}),u&&(0,D.jsxs)(`span`,{className:`inline-flex items-center gap-1 text-xs text-muted-foreground`,children:[(0,D.jsx)(a,{className:`size-3`}),(0,D.jsx)(`span`,{className:`max-w-[10rem] truncate`,children:u})]}),d&&d.length>0&&(0,D.jsx)(c,{className:`ml-auto`,children:d.map(e=>(0,D.jsx)(_,{size:`sm`,color:e.color,children:e.label},e.label))})]})]})}var j=[{id:`usage`,label:`Использование`},{id:`kanban-card`,label:`Карточка`},{id:`board-screen`,label:`Экран доски`},{id:`api`,label:`API`}];function M(){return(0,D.jsx)(d,{title:`Kanban Board`,description:`Доска задач с вертикальными колонками по статусам и карточками. Экран доски с переносом карточек собирай типом BoardWorkspace.`,breadcrumbs:E(`/components/kanban`),meta:w(`/components/kanban`),children:(0,D.jsx)(y,{presentation:`article`,label:`Kanban Board`,inspector:T(j),document:(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(S,{title:`KanbanBoard`,description:`Доска с колонками по статусам. Каждая KanbanColumn содержит KanbanCard с метаданными.`,code:`<KanbanBoard>
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
</KanbanBoard>`,layout:`block`,children:(0,D.jsxs)(O,{children:[(0,D.jsxs)(k,{status:`open`,title:`Open`,count:3,children:[(0,D.jsx)(A,{title:`Design token audit`,status:`open`,priority:`p2`,tags:[{label:`design`,color:`info`}]}),(0,D.jsx)(A,{title:`Update changelog`,status:`open`,subtasks:{done:1,total:4}}),(0,D.jsx)(A,{title:`Add dark mode tests`,status:`open`,priority:`p3`,parentLabel:`Testing Epic`})]}),(0,D.jsxs)(k,{status:`progress`,title:`In Progress`,count:2,children:[(0,D.jsx)(A,{title:`Migrate auth service`,status:`progress`,priority:`p1`,subtasks:{done:3,total:5},tags:[{label:`backend`,color:`accent`}]}),(0,D.jsx)(A,{title:`Refactor filter panel`,status:`progress`,priority:`p2`,parentLabel:`UI Cleanup`})]}),(0,D.jsxs)(k,{status:`blocked`,title:`Blocked`,count:2,children:[(0,D.jsx)(A,{title:`Database migration`,status:`blocked`,priority:`p0`,tags:[{label:`critical`,color:`err`}]}),(0,D.jsx)(A,{title:`API rate limiting`,status:`blocked`,priority:`p1`,parentLabel:`Platform Migration`})]}),(0,D.jsxs)(k,{status:`closed`,title:`Closed`,count:3,children:[(0,D.jsx)(A,{title:`Setup CI pipeline`,status:`closed`,tags:[{label:`devops`,color:`ok`}]}),(0,D.jsx)(A,{title:`Write onboarding docs`,status:`closed`,subtasks:{done:6,total:6}}),(0,D.jsx)(A,{title:`Fix login redirect`,status:`closed`,priority:`p1`})]})]})}),(0,D.jsx)(i,{children:`Колонки — это состояния, карточки — сущности в каждом состоянии. KanbanCard показывает данные и действия; перенос между колонками принадлежит приложению. Workflow-токены подсвечивают priority и type, signal-иконки маркируют blocked и overdue без перегрузки визуального шума.`}),(0,D.jsxs)(i,{children:[`KanbanBoard не переносит карточки. Экран доски собирает тип экрана BoardWorkspace — он заменяет устаревший TaskBoardPattern и сам переносит карточки мышью и с клавиатуры. BoardSurface со страницы`,` `,(0,D.jsx)(b,{href:`/surfaces`,children:`Surfaces`}),` — содержимое слота, а не экран: его нативное перетаскивание не меняет порядок внутри колонки и не переносит карточку с клавиатуры.`]}),(0,D.jsx)(r,{id:`usage`,label:`Использование`,children:(0,D.jsx)(f,{copyLabel:`Скопировать код: использование KanbanBoard`,language:`tsx`,code:`import { KanbanBoard, KanbanColumn, KanbanCard } from "@chucky23/design-system/extended/kanban"

<KanbanBoard>
  <KanbanColumn status="progress" title="In Progress" count={1}>
    <KanbanCard title="Migrate auth service" status="progress" priority="p1" />
  </KanbanColumn>
</KanbanBoard>`})}),(0,D.jsx)(r,{id:`kanban-card`,label:`Карточка`,children:(0,D.jsx)(S,{title:`Card Variations`,description:`Карточки с разным набором метаданных: минимальная, с subtasks, с parent, с tags.`,code:`{/* Минимальная карточка */}
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
/>`,layout:`block`,children:(0,D.jsxs)(C,{columns:2,children:[(0,D.jsx)(A,{title:`Quick fix`,status:`open`}),(0,D.jsx)(A,{title:`Refactor components`,status:`progress`,priority:`p2`,subtasks:{done:2,total:7}}),(0,D.jsx)(A,{title:`Write unit tests`,status:`open`,priority:`p3`,parentLabel:`Testing Epic`}),(0,D.jsx)(A,{title:`Critical hotfix`,status:`blocked`,priority:`p0`,tags:[{label:`urgent`,color:`err`},{label:`backend`,color:`accent`}]})]})})}),(0,D.jsxs)(r,{id:`board-screen`,label:`Экран доски`,children:[(0,D.jsxs)(i,{children:[`BoardWorkspace из ./patterns/board-workspace — тип экрана «доска». Он рисует колонки, переносит карточки мышью и сочетанием Alt со стрелками, держит поиск, фильтры, пустые состояния и инспектор выбранной карточки. Карточку приложение передаёт через renderCard без собственной поверхности, поэтому KanbanCard внутри BoardWorkspace не нужен. Живой пример — экран`,` `,(0,D.jsx)(b,{href:`/examples/sprint/board`,children:`Доска`}),`.`]}),(0,D.jsx)(f,{copyLabel:`Скопировать код: переход на BoardWorkspace`,language:`tsx`,code:`// Было: ручная доска на устаревшей композиции
import { TaskBoardPattern } from "@chucky23/design-system/patterns/task-board-pattern"

// Стало: тип экрана «доска»
import { BoardWorkspace } from "@chucky23/design-system/patterns/board-workspace"

<BoardWorkspace label="Задачи" query={query} onQueryChange={setQuery} onClear={reset}
  state={state} empty={{ title: "Задач пока нет", description: "Создай первую задачу" }}
  columns={statuses.map(status => ({ id: status.id, label: status.label, tone: status.tone }))}
  items={tasks} getItemId={task => task.id} getItemColumnId={task => task.status} getItemLabel={task => task.title}
  renderCard={task => <TaskCardContent task={task} />} onMove={move => moveTask(move)} onActivate={open} />`})]}),(0,D.jsxs)(r,{id:`api`,label:`API`,children:[(0,D.jsx)(x,{title:`KanbanColumn`,props:[{name:`status`,type:`Status`,defaultValue:`—`,description:`Статус колонки: open, progress, blocked, deferred, closed. Определяет иконку в заголовке.`},{name:`title`,type:`string`,defaultValue:`—`,description:`Заголовок колонки.`},{name:`count`,type:`number`,defaultValue:`—`,description:`Счётчик задач. Badge в заголовке.`},{name:`onNewTask`,type:`() => void`,defaultValue:`—`,description:`Колбэк кнопки New task в футере колонки.`}]}),(0,D.jsx)(x,{title:`KanbanCard`,props:[{name:`title`,type:`string`,defaultValue:`—`,description:`Название задачи.`},{name:`status`,type:`Status`,defaultValue:`—`,description:`Статус задачи. Определяет StatusIcon.`},{name:`priority`,type:`Priority`,defaultValue:`—`,description:`Приоритет: p0–p4. Меняет цвет StatusIcon.`},{name:`subtasks`,type:`{ done, total }`,defaultValue:`—`,description:`Прогресс подзадач. Отображается как done/total.`},{name:`parentLabel`,type:`string`,defaultValue:`—`,description:`Название родительской задачи/эпика.`},{name:`tags`,type:`{ label, color }[]`,defaultValue:`—`,description:`Массив тегов. color: neutral, ok, warn, err, info, accent.`}]})]})]})})})}export{M as default};