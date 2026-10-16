import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{Cn as t,Gn as n,Rn as r,Sn as i,U as a,br as o,m as s,n as c,o as l,t as u}from"./chunk-ZW5N5E5H-ScFucA-b.js";import{h as d,j as f,m as p,r as m}from"./docs-Ck_i9UNX.js";import"./index-DiNellwx.js";import"./workspace-BwWB7lTa.js";import{n as h,t as g}from"./docs-article-BUNGnjgF.js";import{n as _,r as v,t as y}from"./filter-panel-Cc1w3blj.js";var b=e(),x=[`open`,`progress`,`blocked`,`deferred`,`closed`],S=[`p0`,`p1`,`p2`,`p3`,`p4`],C=[`ok`,`warn`,`err`,`info`],w=[`sm`,`default`,`lg`,`xl`],T=[`neutral`,`ok`,`warn`,`err`,`info`,`accent`],E=[`default`,`outline`,`filled`],D=[{id:`usage`,label:`Использование`},{id:`workflow-sizes`,label:`Размеры`},{id:`priorities`,label:`Приоритеты`},{id:`signal-icon`,label:`SignalIcon`},{id:`tag`,label:`Tag`},{id:`tag-group`,label:`TagGroup`},{id:`filter-panel`,label:`Панель фильтрации`},{id:`status-icon`,label:`StatusIcon`},{id:`api`,label:`API`}];function O(){return(0,b.jsx)(s,{title:`Tags & Status`,description:`Иконки статусов, сигналы диагностики, метки и панели фильтрации.`,breadcrumbs:g(`/components/tags-status`),children:(0,b.jsx)(l,{presentation:`article`,label:`Tags & Status`,inspector:h(D),document:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(m,{title:`WorkflowIcon — все статусы`,description:`Каждый статус — 5×5 pixel grid: ring (open), filled right half (progress), filled + inverted X (blocked), two vertical stems (deferred), filled + inverted check (closed).`,code:`<WorkflowIcon status="open" size="lg" />
<WorkflowIcon status="progress" size="lg" />
<WorkflowIcon status="blocked" size="lg" />
<WorkflowIcon status="deferred" size="lg" />
<WorkflowIcon status="closed" size="lg" />`,children:x.map(e=>(0,b.jsx)(p,{caption:e,children:(0,b.jsx)(c,{status:e,size:`lg`})},e))}),(0,b.jsx)(r,{children:`Статусы кодируются формой, а не только цветом — для читаемости в тёмной теме и для colour-blind пользователей. WorkflowIcon отвечает за бизнес-статусы задач, SignalIcon — за диагностические сигналы, Tag и TagGroup собирают произвольные метки в ряды.`}),(0,b.jsx)(o,{id:`usage`,label:`Использование`,children:(0,b.jsx)(n,{copyLabel:`Скопировать код: Tag, TagGroup и иконки статуса`,language:`tsx`,code:`import { SignalIcon, Tag, TagGroup, WorkflowIcon } from "@chucky23/design-system/react"

<WorkflowIcon status="progress" priority="p1" />
<SignalIcon tone="err" label="Connection failed" />
<TagGroup>
  <Tag color="ok">deployed</Tag>
  <Tag variant="outline">v2.3.1</Tag>
</TagGroup>`})}),(0,b.jsx)(o,{id:`workflow-sizes`,label:`Размеры`,children:(0,b.jsx)(m,{title:`WorkflowIcon — размеры`,description:`Четыре размера: sm (12px), default (16px), lg (20px), xl (24px).`,code:`<WorkflowIcon status="progress" size="sm" />
<WorkflowIcon status="progress" size="default" />
<WorkflowIcon status="progress" size="lg" />
<WorkflowIcon status="progress" size="xl" />`,children:w.map(e=>(0,b.jsx)(p,{caption:e,children:(0,b.jsx)(c,{status:`progress`,size:e})},e))})}),(0,b.jsx)(o,{id:`priorities`,label:`Приоритеты`,children:(0,b.jsx)(m,{title:`WorkflowIcon — приоритеты`,description:`Приоритет переопределяет цвет иконки через --priority-*.`,code:`<WorkflowIcon status="open" priority="p0" />
<WorkflowIcon status="progress" priority="p1" />
<WorkflowIcon status="blocked" priority="p2" />
<WorkflowIcon status="deferred" priority="p3" />
<WorkflowIcon status="closed" priority="p4" />`,children:x.map((e,t)=>(0,b.jsx)(p,{caption:`${e} / ${S[t]}`,children:(0,b.jsx)(c,{status:e,priority:S[t],size:`lg`})},e))})}),(0,b.jsxs)(o,{id:`signal-icon`,label:`SignalIcon`,children:[(0,b.jsx)(m,{title:`SignalIcon — тоны`,description:`SignalIcon передаёт диагностический сигнал: ok, warn, err, info. Используй для ошибок формы, состояний системы, toast-уведомлений.`,code:`<SignalIcon tone="ok" />
<SignalIcon tone="warn" />
<SignalIcon tone="err" />
<SignalIcon tone="info" />`,children:C.map(e=>(0,b.jsx)(p,{caption:e,children:(0,b.jsx)(a,{tone:e,size:`lg`})},e))}),(0,b.jsx)(m,{title:`SignalIcon — размеры`,description:`Четыре размера: sm (12px), default (16px), lg (20px), xl (24px).`,code:`<SignalIcon tone="ok" size="sm" />
<SignalIcon tone="ok" size="default" />
<SignalIcon tone="ok" size="lg" />
<SignalIcon tone="ok" size="xl" />`,children:w.map(e=>(0,b.jsx)(p,{caption:e,children:(0,b.jsx)(a,{tone:`ok`,size:e})},e))}),(0,b.jsxs)(m,{title:`SignalIcon — кастомный label`,description:`По умолчанию screen-reader получает имя тона. Передай осмысленный label, если нужен контекст: например, при показе конкретной ошибки.`,code:`<SignalIcon tone="err" label="Connection failed" />
<SignalIcon tone="warn" label="Quota near limit" />`,children:[(0,b.jsx)(p,{caption:`Connection failed`,children:(0,b.jsx)(a,{tone:`err`,size:`lg`,label:`Connection failed`})}),(0,b.jsx)(p,{caption:`Quota near limit`,children:(0,b.jsx)(a,{tone:`warn`,size:`lg`,label:`Quota near limit`})})]})]}),(0,b.jsxs)(o,{id:`tag`,label:`Tag`,children:[(0,b.jsx)(m,{title:`Варианты тегов`,description:`Три варианта: default (muted фон), outline (граница), filled (primary фон).`,code:`<Tag variant="default">default</Tag>
<Tag variant="outline">outline</Tag>
<Tag variant="filled">filled</Tag>`,children:E.map(e=>(0,b.jsx)(i,{variant:e,children:e},e))}),(0,b.jsx)(m,{title:`Цветовые схемы`,description:`Шесть цветов: neutral, ok, warn, err, info, accent. Цвет работает со всеми вариантами.`,code:`<Tag color="neutral">neutral</Tag>
<Tag color="ok">ok</Tag>
<Tag color="warn">warn</Tag>
<Tag color="err">err</Tag>
<Tag color="info">info</Tag>
<Tag color="accent">accent</Tag>`,children:T.map(e=>(0,b.jsx)(i,{color:e,children:e},e))}),(0,b.jsxs)(m,{title:`Размеры и удаление`,description:`Два размера: sm (20px) и default (24px). removable добавляет кнопку удаления.`,code:`<Tag size="sm">small</Tag>
<Tag size="default">default</Tag>
<Tag removable onRemove={() => {}}>removable</Tag>
<Tag color="ok" removable onRemove={() => {}}>done</Tag>`,children:[(0,b.jsx)(i,{size:`sm`,children:`small`}),(0,b.jsx)(i,{size:`default`,children:`default`}),(0,b.jsx)(i,{removable:!0,onRemove:()=>{},children:`removable`}),(0,b.jsx)(i,{color:`ok`,removable:!0,onRemove:()=>{},children:`done`})]})]}),(0,b.jsx)(o,{id:`tag-group`,label:`TagGroup`,children:(0,b.jsx)(m,{title:`Группа тегов`,description:`TagGroup оборачивает теги в flex-контейнер с gap-1. Используй для наборов меток.`,code:`<TagGroup>
  <Tag color="ok">deployed</Tag>
  <Tag color="warn">review</Tag>
  <Tag color="info">backend</Tag>
  <Tag variant="outline">v2.3.1</Tag>
</TagGroup>`,children:(0,b.jsxs)(t,{children:[(0,b.jsx)(i,{color:`ok`,children:`deployed`}),(0,b.jsx)(i,{color:`warn`,children:`review`}),(0,b.jsx)(i,{color:`info`,children:`backend`}),(0,b.jsx)(i,{variant:`outline`,children:`v2.3.1`})]})})}),(0,b.jsxs)(o,{id:`filter-panel`,label:`Панель фильтрации`,children:[(0,b.jsx)(m,{title:`Панель фильтрации`,description:`FilterPanel + FilterGroup + FilterCheckbox. В слоте indicator — WorkflowIcon: при фильтрации задач по статусу форма иконки передаёт статус точнее, чем цветная точка.`,code:`<FilterPanel>
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
</FilterPanel>`,children:(0,b.jsxs)(v,{children:[(0,b.jsxs)(_,{title:`Статус`,children:[(0,b.jsx)(y,{label:`Open`,defaultChecked:!0,indicator:(0,b.jsx)(c,{status:`open`,size:`sm`})}),(0,b.jsx)(y,{label:`In Progress`,indicator:(0,b.jsx)(c,{status:`progress`,size:`sm`})}),(0,b.jsx)(y,{label:`Blocked`,indicator:(0,b.jsx)(c,{status:`blocked`,size:`sm`})}),(0,b.jsx)(y,{label:`Closed`,indicator:(0,b.jsx)(c,{status:`closed`,size:`sm`})})]}),(0,b.jsxs)(_,{title:`Приоритет`,children:[(0,b.jsx)(y,{label:`P0 Critical`,defaultChecked:!0}),(0,b.jsx)(y,{label:`P1 High`,defaultChecked:!0}),(0,b.jsx)(y,{label:`P2 Medium`}),(0,b.jsx)(y,{label:`P3 Low`})]})]})}),(0,b.jsxs)(r,{children:[`Пропсы FilterGroup и FilterCheckbox — на странице `,(0,b.jsx)(d,{href:`/components/panels`,children:`Panels`}),`.`]})]}),(0,b.jsx)(o,{id:`status-icon`,label:`StatusIcon`,children:(0,b.jsx)(m,{title:`StatusIcon — back-compat (deprecated)`,description:`StatusIcon — alias на WorkflowIcon для обратной совместимости. Будет удалён в v3. Используй WorkflowIcon в новом коде.`,code:`<StatusIcon status="open" />`,children:(0,b.jsx)(p,{caption:`StatusIcon (alias)`,children:(0,b.jsx)(u,{status:`open`,size:`lg`})})})}),(0,b.jsxs)(o,{id:`api`,label:`API`,children:[(0,b.jsx)(f,{title:`Пропсы WorkflowIcon`,props:[{name:`status`,type:`"open" | "progress" | "blocked" | "deferred" | "closed"`,defaultValue:`—`,description:`Статус задачи. Задаёт форму иконки и её aria-label.`},{name:`priority`,type:`"p0" | "p1" | "p2" | "p3" | "p4"`,defaultValue:`—`,description:`Приоритет. Переопределяет цвет через --priority-* и дописывается в aria-label.`},{name:`size`,type:`"sm" | "default" | "lg" | "xl"`,defaultValue:`"default"`,description:`Квадрат 12, 16, 20 или 24px.`}]}),(0,b.jsx)(f,{title:`Пропсы SignalIcon`,props:[{name:`tone`,type:`"ok" | "warn" | "err" | "info"`,defaultValue:`—`,description:`Диагностический сигнал. Задаёт форму и цвет через --signal-*.`},{name:`size`,type:`"sm" | "default" | "lg" | "xl"`,defaultValue:`"default"`,description:`Квадрат 12, 16, 20 или 24px.`},{name:`label`,type:`string`,defaultValue:`название тона`,description:`Доступное название. По умолчанию «Успешно», «Предупреждение», «Ошибка» или «Информация».`}]}),(0,b.jsx)(f,{title:`Пропсы Tag`,props:[{name:`variant`,type:`"default" | "outline" | "filled"`,defaultValue:`"default"`,description:`Muted фон, граница или primary фон.`},{name:`color`,type:`"neutral" | "ok" | "warn" | "err" | "info" | "accent"`,defaultValue:`"neutral"`,description:`Цветовая схема поверх любого варианта.`},{name:`size`,type:`"sm" | "default"`,defaultValue:`"default"`,description:`Высота 20 или 24px.`},{name:`format`,type:`"default" | "bracket"`,defaultValue:`"default"`,description:`bracket выводит текст в квадратных скобках без фона и рамки.`},{name:`removable`,type:`boolean`,defaultValue:`false`,description:`Добавляет кнопку удаления с aria-label «Удалить».`},{name:`onRemove`,type:`() => void`,defaultValue:`—`,description:`Колбэк кнопки удаления.`}]})]})]})})})}export{O as default};