import{$n as e,Hn as t,Mo as n,Z as r,bn as i,ln as a,un as o,yn as s}from"./chunk-ZW5N5E5H-C8fDcLjq.js";import{M as c,r as l,s as u}from"./docs-CtJuZ0WF.js";import"./index-D3G-KnJA.js";import{n as d,r as f,t as p}from"./filter-panel-c7B_w437.js";var m=n(),h=[`open`,`progress`,`blocked`,`deferred`,`closed`],g=[`p0`,`p1`,`p2`,`p3`,`p4`],_=[`ok`,`warn`,`err`,`info`],v=[`sm`,`default`,`lg`,`xl`],y=[`neutral`,`ok`,`warn`,`err`,`info`,`accent`],b=[`default`,`outline`,`filled`];function x(){return(0,m.jsxs)(u,{className:`flex flex-col gap-6`,children:[(0,m.jsx)(t,{title:`Tags & Status`,description:`Иконки статусов, сигналы диагностики, метки и панели фильтрации.`}),(0,m.jsx)(c,{className:`max-w-prose`,"data-body":!0,children:`Статусы кодируются формой, а не только цветом — для читаемости в тёмной теме и для colour-blind пользователей. WorkflowIcon отвечает за бизнес-статусы задач, SignalIcon — за диагностические сигналы, Tag и TagGroup собирают произвольные метки в ряды.`}),(0,m.jsx)(e,{label:`workflow icon`,children:(0,m.jsx)(l,{title:`WorkflowIcon — все статусы`,description:`Каждый статус — 5×5 pixel grid: ring (open), filled right half (progress), filled + inverted X (blocked), two vertical stems (deferred), filled + inverted check (closed).`,code:`<WorkflowIcon status="open" />
<WorkflowIcon status="progress" />
<WorkflowIcon status="blocked" />
<WorkflowIcon status="deferred" />
<WorkflowIcon status="closed" />`,children:h.map(e=>(0,m.jsxs)(u,{className:`flex items-center gap-2`,children:[(0,m.jsx)(i,{status:e,size:`lg`}),(0,m.jsx)(c,{as:`span`,className:`text-xs font-medium`,children:e})]},e))})}),(0,m.jsx)(e,{label:`workflow icon / размеры`,children:(0,m.jsx)(l,{title:`WorkflowIcon — размеры`,description:`Четыре размера: sm (12px), default (16px), lg (20px), xl (24px).`,code:`<WorkflowIcon status="progress" size="sm" />
<WorkflowIcon status="progress" size="default" />
<WorkflowIcon status="progress" size="lg" />
<WorkflowIcon status="progress" size="xl" />`,children:v.map(e=>(0,m.jsxs)(u,{className:`flex items-center gap-2`,children:[(0,m.jsx)(i,{status:`progress`,size:e}),(0,m.jsx)(c,{as:`span`,className:`font-mono text-xs text-muted-foreground`,children:e})]},e))})}),(0,m.jsx)(e,{label:`workflow icon / приоритеты`,children:(0,m.jsx)(l,{title:`WorkflowIcon — приоритеты`,description:`Приоритет переопределяет цвет иконки через --priority-*.`,code:`<WorkflowIcon status="open" priority="p0" />
<WorkflowIcon status="progress" priority="p1" />
<WorkflowIcon status="blocked" priority="p2" />
<WorkflowIcon status="deferred" priority="p3" />
<WorkflowIcon status="closed" priority="p4" />`,children:h.map((e,t)=>(0,m.jsxs)(u,{className:`flex items-center gap-2`,children:[(0,m.jsx)(i,{status:e,priority:g[t],size:`lg`}),(0,m.jsxs)(c,{as:`span`,className:`text-xs font-medium`,children:[e,` / `,g[t]]})]},e))})}),(0,m.jsx)(e,{label:`signal icon / тоны`,children:(0,m.jsx)(l,{title:`SignalIcon — тоны`,description:`SignalIcon передаёт диагностический сигнал: ok, warn, err, info. Используй для ошибок формы, состояний системы, toast-уведомлений.`,code:`<SignalIcon tone="ok" />
<SignalIcon tone="warn" />
<SignalIcon tone="err" />
<SignalIcon tone="info" />`,children:_.map(e=>(0,m.jsxs)(u,{className:`flex items-center gap-2`,children:[(0,m.jsx)(r,{tone:e,size:`lg`}),(0,m.jsx)(c,{as:`span`,className:`text-xs font-medium`,children:e})]},e))})}),(0,m.jsx)(e,{label:`signal icon / размеры`,children:(0,m.jsx)(l,{title:`SignalIcon — размеры`,description:`Четыре размера: sm (12px), default (16px), lg (20px), xl (24px).`,code:`<SignalIcon tone="ok" size="sm" />
<SignalIcon tone="ok" size="default" />
<SignalIcon tone="ok" size="lg" />
<SignalIcon tone="ok" size="xl" />`,children:v.map(e=>(0,m.jsxs)(u,{className:`flex items-center gap-2`,children:[(0,m.jsx)(r,{tone:`ok`,size:e}),(0,m.jsx)(c,{as:`span`,className:`font-mono text-xs text-muted-foreground`,children:e})]},e))})}),(0,m.jsx)(e,{label:`signal icon / кастомный label`,children:(0,m.jsxs)(l,{title:`SignalIcon — кастомный label`,description:`По умолчанию screen-reader получает имя тона. Передай осмысленный label, если нужен контекст: например, при показе конкретной ошибки.`,code:`<SignalIcon tone="err" label="Connection failed" />
<SignalIcon tone="warn" label="Quota near limit" />`,children:[(0,m.jsxs)(u,{className:`flex items-center gap-2`,children:[(0,m.jsx)(r,{tone:`err`,size:`lg`,label:`Connection failed`}),(0,m.jsx)(c,{as:`span`,className:`text-xs font-medium`,children:`Connection failed`})]}),(0,m.jsxs)(u,{className:`flex items-center gap-2`,children:[(0,m.jsx)(r,{tone:`warn`,size:`lg`,label:`Quota near limit`}),(0,m.jsx)(c,{as:`span`,className:`text-xs font-medium`,children:`Quota near limit`})]})]})}),(0,m.jsx)(e,{label:`tag / варианты`,children:(0,m.jsx)(l,{title:`Варианты тегов`,description:`Три варианта: default (muted фон), outline (граница), filled (primary фон).`,code:`<Tag variant="default">default</Tag>
<Tag variant="outline">outline</Tag>
<Tag variant="filled">filled</Tag>`,children:b.map(e=>(0,m.jsx)(a,{variant:e,children:e},e))})}),(0,m.jsx)(e,{label:`tag / цвета`,children:(0,m.jsx)(l,{title:`Цветовые схемы`,description:`Шесть цветов: neutral, ok, warn, err, info, accent. Цвет работает со всеми вариантами.`,code:`<Tag color="neutral">neutral</Tag>
<Tag color="ok">ok</Tag>
<Tag color="warn">warn</Tag>
<Tag color="err">err</Tag>
<Tag color="info">info</Tag>
<Tag color="accent">accent</Tag>`,children:y.map(e=>(0,m.jsx)(a,{color:e,children:e},e))})}),(0,m.jsx)(e,{label:`tag / размеры и removable`,children:(0,m.jsxs)(l,{title:`Размеры и удаление`,description:`Два размера: sm (20px) и default (24px). removable добавляет кнопку удаления.`,code:`<Tag size="sm">small</Tag>
<Tag size="default">default</Tag>
<Tag removable onRemove={() => {}}>removable</Tag>
<Tag color="ok" removable onRemove={() => {}}>done</Tag>`,children:[(0,m.jsx)(a,{size:`sm`,children:`small`}),(0,m.jsx)(a,{size:`default`,children:`default`}),(0,m.jsx)(a,{removable:!0,onRemove:()=>{},children:`removable`}),(0,m.jsx)(a,{color:`ok`,removable:!0,onRemove:()=>{},children:`done`})]})}),(0,m.jsx)(e,{label:`tag group`,children:(0,m.jsx)(l,{title:`Группа тегов`,description:`TagGroup оборачивает теги в flex-контейнер с gap-1. Используй для наборов меток.`,code:`<TagGroup>
  <Tag color="ok">deployed</Tag>
  <Tag color="warn">review</Tag>
  <Tag color="info">backend</Tag>
  <Tag variant="outline">v2.3.1</Tag>
</TagGroup>`,children:(0,m.jsxs)(o,{children:[(0,m.jsx)(a,{color:`ok`,children:`deployed`}),(0,m.jsx)(a,{color:`warn`,children:`review`}),(0,m.jsx)(a,{color:`info`,children:`backend`}),(0,m.jsx)(a,{variant:`outline`,children:`v2.3.1`})]})})}),(0,m.jsx)(e,{label:`filter panel`,children:(0,m.jsx)(l,{title:`Панель фильтрации`,description:`FilterPanel + FilterGroup + FilterCheckbox. В слоте indicator — WorkflowIcon: при фильтрации задач по статусу форма иконки передаёт статус точнее, чем цветная точка.`,code:`<FilterPanel>
  <FilterGroup title="Статус">
    <FilterCheckbox
      label="Open"
      defaultChecked
      indicator={<WorkflowIcon status="open" size="sm" />}
    />
    <FilterCheckbox
      label="In Progress"
      indicator={<WorkflowIcon status="progress" size="sm" />}
    />
    <FilterCheckbox
      label="Blocked"
      indicator={<WorkflowIcon status="blocked" size="sm" />}
    />
    <FilterCheckbox
      label="Closed"
      indicator={<WorkflowIcon status="closed" size="sm" />}
    />
  </FilterGroup>
  <FilterGroup title="Приоритет">
    <FilterCheckbox label="P0 Critical" defaultChecked />
    <FilterCheckbox label="P1 High" defaultChecked />
    <FilterCheckbox label="P2 Medium" />
    <FilterCheckbox label="P3 Low" />
  </FilterGroup>
</FilterPanel>`,children:(0,m.jsx)(u,{className:`w-full max-w-xs rounded-sm border`,children:(0,m.jsxs)(f,{children:[(0,m.jsxs)(d,{title:`Статус`,children:[(0,m.jsx)(p,{label:`Open`,defaultChecked:!0,indicator:(0,m.jsx)(i,{status:`open`,size:`sm`})}),(0,m.jsx)(p,{label:`In Progress`,indicator:(0,m.jsx)(i,{status:`progress`,size:`sm`})}),(0,m.jsx)(p,{label:`Blocked`,indicator:(0,m.jsx)(i,{status:`blocked`,size:`sm`})}),(0,m.jsx)(p,{label:`Closed`,indicator:(0,m.jsx)(i,{status:`closed`,size:`sm`})})]}),(0,m.jsxs)(d,{title:`Приоритет`,children:[(0,m.jsx)(p,{label:`P0 Critical`,defaultChecked:!0}),(0,m.jsx)(p,{label:`P1 High`,defaultChecked:!0}),(0,m.jsx)(p,{label:`P2 Medium`}),(0,m.jsx)(p,{label:`P3 Low`})]})]})})})}),(0,m.jsx)(e,{label:`status icon / deprecated`,children:(0,m.jsx)(l,{title:`StatusIcon — back-compat (deprecated)`,description:`StatusIcon — alias на WorkflowIcon для обратной совместимости. Будет удалён в v3. Используй WorkflowIcon в новом коде.`,code:`<StatusIcon status="open" />`,children:(0,m.jsxs)(u,{className:`flex items-center gap-2`,children:[(0,m.jsx)(s,{status:`open`,size:`lg`}),(0,m.jsx)(c,{as:`span`,className:`text-xs font-medium`,children:`StatusIcon (alias)`})]})})})]})}export{x as default};