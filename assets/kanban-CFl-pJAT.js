import{$n as e,Fi as t,Hn as n,Ki as r,Li as i,Mo as a,Po as o,_n as s,bn as c,c as l,fn as u,l as d,ln as f,mn as p,un as m,vn as h,wi as g}from"./chunk-ZW5N5E5H-C8fDcLjq.js";import{H as _,M as v,n as y,r as b,s as x}from"./docs-CtJuZ0WF.js";import"./index-D3G-KnJA.js";var S=a();function C({className:e,children:t,...n}){return(0,S.jsx)(`div`,{"data-slot":`kanban-board`,className:o(`flex gap-3 overflow-x-auto`,e),...n,children:t})}function w({status:e,title:t,count:n,onNewTask:i,className:a,children:s,...u}){return(0,S.jsxs)(`div`,{"data-slot":`kanban-column`,className:o(`flex w-72 shrink-0 flex-col`,a),...u,children:[(0,S.jsxs)(`div`,{className:`flex items-center gap-2 px-1 pb-2`,children:[(0,S.jsx)(c,{status:e,size:`sm`}),(0,S.jsx)(`span`,{className:`text-sm font-medium text-foreground`,children:t}),n!==void 0&&(0,S.jsx)(l,{variant:`secondary`,className:`ml-auto`,children:n})]}),(0,S.jsx)(d,{className:`min-h-0 flex-1`,children:(0,S.jsx)(`div`,{className:`flex flex-col gap-2 pb-2`,children:s})}),(0,S.jsxs)(r,{variant:`ghost`,size:`sm`,className:`mt-1 w-full justify-start text-muted-foreground`,onClick:i,children:[(0,S.jsx)(g,{}),`New task`]})]})}function T({title:e,status:n,priority:r,subtasks:a,parentLabel:l,tags:d,className:g,..._}){let v=a||l||d&&d.length>0;return(0,S.jsxs)(u,{size:`sm`,className:o(`cursor-pointer transition-colors hover:border-accent-foreground/30`,g),..._,children:[(0,S.jsx)(s,{children:(0,S.jsxs)(h,{className:`flex items-center gap-2`,children:[(0,S.jsx)(c,{status:n,priority:r,size:`sm`}),(0,S.jsx)(`span`,{className:`min-w-0 truncate`,children:e})]})}),v&&(0,S.jsxs)(p,{className:`flex flex-wrap items-center gap-x-3 gap-y-1`,children:[a&&(0,S.jsxs)(`span`,{className:`inline-flex items-center gap-1 text-xs text-muted-foreground`,children:[(0,S.jsx)(i,{className:`size-3`}),a.done,`/`,a.total]}),l&&(0,S.jsxs)(`span`,{className:`inline-flex items-center gap-1 text-xs text-muted-foreground`,children:[(0,S.jsx)(t,{className:`size-3`}),(0,S.jsx)(`span`,{className:`max-w-[10rem] truncate`,children:l})]}),d&&d.length>0&&(0,S.jsx)(m,{className:`ml-auto`,children:d.map(e=>(0,S.jsx)(f,{size:`sm`,color:e.color,children:e.label},e.label))})]})]})}function E(){return(0,S.jsxs)(x,{className:`flex flex-col gap-6`,children:[(0,S.jsx)(n,{title:`Kanban Board`,description:`Доска задач с вертикальными колонками по статусам и карточками. Подходит для любого workflow с явными state-переходами.`}),(0,S.jsx)(v,{className:`max-w-prose`,"data-body":!0,children:`Колонки — это состояния, карточки — сущности в каждом состоянии. KanbanCard показывает данные и действия; перенос между колонками принадлежит приложению. Для onMove и доступного перемещения используй документированный BoardSurface на /surfaces. Workflow-токены подсвечивают priority и type, signal-иконки маркируют blocked и overdue без перегрузки визуального шума.`}),(0,S.jsx)(e,{label:`board`,children:(0,S.jsx)(b,{title:`KanbanBoard`,description:`Доска с колонками по статусам. Каждая KanbanColumn содержит KanbanCard с метаданными.`,code:`<KanbanBoard>
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
</KanbanBoard>`,children:(0,S.jsxs)(C,{children:[(0,S.jsxs)(w,{status:`open`,title:`Open`,count:3,children:[(0,S.jsx)(T,{title:`Design token audit`,status:`open`,priority:`p2`,tags:[{label:`design`,color:`info`}]}),(0,S.jsx)(T,{title:`Update changelog`,status:`open`,subtasks:{done:1,total:4}}),(0,S.jsx)(T,{title:`Add dark mode tests`,status:`open`,priority:`p3`,parentLabel:`Testing Epic`})]}),(0,S.jsxs)(w,{status:`progress`,title:`In Progress`,count:2,children:[(0,S.jsx)(T,{title:`Migrate auth service`,status:`progress`,priority:`p1`,subtasks:{done:3,total:5},tags:[{label:`backend`,color:`accent`}]}),(0,S.jsx)(T,{title:`Refactor filter panel`,status:`progress`,priority:`p2`,parentLabel:`UI Cleanup`})]}),(0,S.jsxs)(w,{status:`blocked`,title:`Blocked`,count:2,children:[(0,S.jsx)(T,{title:`Database migration`,status:`blocked`,priority:`p0`,tags:[{label:`critical`,color:`err`}]}),(0,S.jsx)(T,{title:`API rate limiting`,status:`blocked`,priority:`p1`,parentLabel:`Platform Migration`})]}),(0,S.jsxs)(w,{status:`closed`,title:`Closed`,count:3,children:[(0,S.jsx)(T,{title:`Setup CI pipeline`,status:`closed`,tags:[{label:`devops`,color:`ok`}]}),(0,S.jsx)(T,{title:`Write onboarding docs`,status:`closed`,subtasks:{done:6,total:6}}),(0,S.jsx)(T,{title:`Fix login redirect`,status:`closed`,priority:`p1`})]})]})})}),(0,S.jsx)(e,{label:`kanban card`,children:(0,S.jsx)(b,{title:`Card Variations`,description:`Карточки с разным набором метаданных: минимальная, с subtasks, с parent, с tags.`,code:`{/* Минимальная карточка */}
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
/>`,children:(0,S.jsxs)(y,{columns:2,children:[(0,S.jsx)(T,{title:`Quick fix`,status:`open`}),(0,S.jsx)(T,{title:`Refactor components`,status:`progress`,priority:`p2`,subtasks:{done:2,total:7}}),(0,S.jsx)(T,{title:`Write unit tests`,status:`open`,priority:`p3`,parentLabel:`Testing Epic`}),(0,S.jsx)(T,{title:`Critical hotfix`,status:`blocked`,priority:`p0`,tags:[{label:`urgent`,color:`err`},{label:`backend`,color:`accent`}]})]})})}),(0,S.jsxs)(e,{label:`kanban column`,children:[(0,S.jsx)(_,{title:`KanbanColumn`,props:[{name:`status`,type:`Status`,defaultValue:`--`,description:`Статус колонки: open, progress, blocked, deferred, closed. Определяет иконку в заголовке.`},{name:`title`,type:`string`,defaultValue:`--`,description:`Заголовок колонки.`},{name:`count`,type:`number`,defaultValue:`--`,description:`Счётчик задач. Badge в заголовке.`},{name:`onNewTask`,type:`() => void`,defaultValue:`--`,description:`Callback кнопки New task в футере колонки.`}]}),(0,S.jsx)(_,{title:`KanbanCard`,props:[{name:`title`,type:`string`,defaultValue:`--`,description:`Название задачи.`},{name:`status`,type:`Status`,defaultValue:`--`,description:`Статус задачи. Определяет StatusIcon.`},{name:`priority`,type:`Priority`,defaultValue:`--`,description:`Приоритет: p0–p4. Меняет цвет StatusIcon.`},{name:`subtasks`,type:`{ done, total }`,defaultValue:`--`,description:`Прогресс подзадач. Отображается как done/total.`},{name:`parentLabel`,type:`string`,defaultValue:`--`,description:`Название родительской задачи/эпика.`},{name:`tags`,type:`{ label, color }[]`,defaultValue:`--`,description:`Массив тегов. color: neutral, ok, warn, err, info, accent.`}]})]})]})}export{E as default};