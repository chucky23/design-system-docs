import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{Ji as t,Qr as n,Sr as r,_ as i,dr as a,er as o,j as s,kr as c,tr as l,ur as u,x as d}from"./chunk-FJ6G7XYZ-vkrr-AON.js";import{A as f,O as p,Q as m,g as h}from"./docs-CTQgkcVe.js";import"./index-CylhoBOX.js";import"./workspace-B0gvzNJe.js";import{n as g,r as _,t as v}from"./docs-article-CV9v0E7s.js";import{n as y,r as b,t as x}from"./filter-panel-DUla11lf.js";var S=e(),C=[`open`,`progress`,`blocked`,`deferred`,`closed`],w=[`p0`,`p1`,`p2`,`p3`,`p4`],T=[`ok`,`warn`,`err`,`info`],E=[`sm`,`default`,`lg`,`xl`],D=[`neutral`,`ok`,`warn`,`err`,`info`,`accent`],O=[`default`,`outline`,`filled`],k=[{id:`usage`,label:`Использование`},{id:`workflow-sizes`,label:`Размеры`},{id:`priorities`,label:`Приоритеты`},{id:`signal-icon`,label:`SignalIcon`},{id:`tag`,label:`Tag`},{id:`tag-group`,label:`TagGroup`},{id:`filter-panel`,label:`Панель фильтрации`},{id:`status-icon`,label:`StatusIcon`},{id:`api`,label:`API`}];function A(){return(0,S.jsx)(s,{title:`Tags & Status`,description:`Иконки статусов, сигналы диагностики, метки и панели фильтрации.`,breadcrumbs:v(`/components/tags-status`),meta:g(`/components/tags-status`),children:(0,S.jsx)(d,{presentation:`article`,label:`Tags & Status`,inspector:_(k),document:(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(h,{title:`WorkflowIcon — все статусы`,description:`Каждый статус — векторное кольцо с круглыми окончаниями и знак внутри: пустое кольцо (open), залитая правая половина (progress), диагональ (blocked), две полосы паузы (deferred), галочка (closed). Иконка монохромная (--muted-foreground), цвет --signal-err получает только blocked.`,code:`<WorkflowIcon status="open" size="lg" />
<WorkflowIcon status="progress" size="lg" />
<WorkflowIcon status="blocked" size="lg" />
<WorkflowIcon status="deferred" size="lg" />
<WorkflowIcon status="closed" size="lg" />`,children:C.map(e=>(0,S.jsx)(p,{caption:e,children:(0,S.jsx)(l,{status:e,size:`lg`})},e))}),(0,S.jsx)(r,{children:`Статусы кодируются формой, а не цветом: так их различают в тёмной теме и люди с нарушением цветового зрения. WorkflowIcon отвечает за бизнес-статусы задач, SignalIcon — за диагностические сигналы, Tag и TagGroup собирают произвольные метки в ряды.`}),(0,S.jsx)(n,{id:`usage`,label:`Использование`,children:(0,S.jsx)(c,{copyLabel:`Скопировать код: Tag, TagGroup и иконки статуса`,language:`tsx`,code:`import { SignalIcon, Tag, TagGroup, WorkflowIcon } from "@chucky23/design-system/react"

<WorkflowIcon status="progress" priority="p1" />
<SignalIcon tone="err" label="Connection failed" />
<TagGroup>
  <Tag color="ok">deployed</Tag>
  <Tag variant="outline">v2.3.1</Tag>
</TagGroup>`})}),(0,S.jsx)(n,{id:`workflow-sizes`,label:`Размеры`,children:(0,S.jsx)(h,{title:`WorkflowIcon — размеры`,description:`Четыре размера: sm (12px) для тегов, default (14px) по умолчанию, lg (16px) для хрома, xl (24px) для пустых состояний.`,code:`<WorkflowIcon status="progress" size="sm" />
<WorkflowIcon status="progress" size="default" />
<WorkflowIcon status="progress" size="lg" />
<WorkflowIcon status="progress" size="xl" />`,children:E.map(e=>(0,S.jsx)(p,{caption:e,children:(0,S.jsx)(l,{status:`progress`,size:e})},e))})}),(0,S.jsxs)(n,{id:`priorities`,label:`Приоритеты`,children:[(0,S.jsx)(h,{title:`WorkflowIcon — приоритеты`,description:`Приоритет не красит иконку: он попадает в aria-label и data-priority. Цвет остаётся у blocked (--signal-err) и у turn.`,code:`<WorkflowIcon status="open" priority="p0" />
<WorkflowIcon status="progress" priority="p1" />
<WorkflowIcon status="blocked" priority="p2" />
<WorkflowIcon status="deferred" priority="p3" />
<WorkflowIcon status="closed" priority="p4" />`,children:C.map((e,t)=>(0,S.jsx)(p,{caption:`${e} / ${w[t]}`,children:(0,S.jsx)(l,{status:e,priority:w[t],size:`lg`})},e))}),(0,S.jsx)(h,{title:`WorkflowIcon — твой ход`,description:`turn отмечает задачу, которая ждёт решения человека: иконка получает цвет --turn и атрибут data-turn.`,code:`<WorkflowIcon status="progress" turn />`,children:(0,S.jsx)(p,{caption:`progress / turn`,children:(0,S.jsx)(l,{status:`progress`,turn:!0,size:`lg`})})})]}),(0,S.jsxs)(n,{id:`signal-icon`,label:`SignalIcon`,children:[(0,S.jsx)(h,{title:`SignalIcon — тоны`,description:`SignalIcon передаёт диагностический сигнал: ok, warn, err, info. Это векторные знаки в сетке 24×24 с круглыми окончаниями: круг с галочкой, треугольник с «!», круг с «!», круг с «i». Тон передаёт форма, иконка монохромная (--muted-foreground), цвет --signal-err только у err. Используй для ошибок формы, состояний системы, toast-уведомлений.`,code:`<SignalIcon tone="ok" />
<SignalIcon tone="warn" />
<SignalIcon tone="err" />
<SignalIcon tone="info" />`,children:T.map(e=>(0,S.jsx)(p,{caption:e,children:(0,S.jsx)(t,{tone:e,size:`lg`})},e))}),(0,S.jsx)(h,{title:`SignalIcon — размеры`,description:`Четыре размера: sm (12px), default (14px), lg (16px), xl (24px) для пустых состояний.`,code:`<SignalIcon tone="ok" size="sm" />
<SignalIcon tone="ok" size="default" />
<SignalIcon tone="ok" size="lg" />
<SignalIcon tone="ok" size="xl" />`,children:E.map(e=>(0,S.jsx)(p,{caption:e,children:(0,S.jsx)(t,{tone:`ok`,size:e})},e))}),(0,S.jsxs)(h,{title:`SignalIcon — кастомный label`,description:`По умолчанию screen-reader получает имя тона. Передай осмысленный label, если нужен контекст: например, при показе конкретной ошибки.`,code:`<SignalIcon tone="err" label="Connection failed" />
<SignalIcon tone="warn" label="Quota near limit" />`,children:[(0,S.jsx)(p,{caption:`Connection failed`,children:(0,S.jsx)(t,{tone:`err`,size:`lg`,label:`Connection failed`})}),(0,S.jsx)(p,{caption:`Quota near limit`,children:(0,S.jsx)(t,{tone:`warn`,size:`lg`,label:`Quota near limit`})})]})]}),(0,S.jsxs)(n,{id:`tag`,label:`Tag`,children:[(0,S.jsx)(h,{title:`Варианты тегов`,description:`Три варианта: default (muted фон), outline (граница), filled (primary фон).`,code:`<Tag variant="default">default</Tag>
<Tag variant="outline">outline</Tag>
<Tag variant="filled">filled</Tag>`,children:O.map(e=>(0,S.jsx)(u,{variant:e,children:e},e))}),(0,S.jsx)(h,{title:`Цветовые схемы`,description:`Шесть цветов: neutral, ok, warn, err, info, accent. Цвет работает со всеми вариантами.`,code:`<Tag color="neutral">neutral</Tag>
<Tag color="ok">ok</Tag>
<Tag color="warn">warn</Tag>
<Tag color="err">err</Tag>
<Tag color="info">info</Tag>
<Tag color="accent">accent</Tag>`,children:D.map(e=>(0,S.jsx)(u,{color:e,children:e},e))}),(0,S.jsxs)(h,{title:`Формат dot и тон turn`,description:`Формат dot ставит перед подписью точку цвета тона, без фона. Точка скрыта от скринридера. Цвет turn — «твой ход»: в формате default фон и рамка цвета turn, в dot только текст и точка.`,code:`<Tag format="dot" color="turn">Твой ход</Tag>
<StatusTag tone="turn" format="dot" label="Твой ход" />`,children:[(0,S.jsx)(u,{format:`dot`,color:`turn`,children:`Твой ход`}),(0,S.jsx)(u,{color:`turn`,children:`Твой ход`}),(0,S.jsx)(o,{tone:`turn`,format:`dot`,label:`Твой ход`})]}),(0,S.jsxs)(h,{title:`StatusTag: точка или иконка`,description:`По умолчанию StatusTag выводит формат dot: цветная точка и слово. format=icon оставляет иконку статуса 12px, а слово уходит в подсказку при наведении и в имя для скринридера: так делают в плотных колонках. Формат bracket со словом в скобках устарел.`,code:`<StatusTag status="progress" label="В работе" />
<StatusTag status="progress" label="В работе" format="icon" />`,children:[(0,S.jsx)(o,{status:`progress`,label:`В работе`}),(0,S.jsx)(o,{status:`progress`,label:`В работе`,format:`icon`})]}),(0,S.jsxs)(h,{title:`Размеры и удаление`,description:`Два размера: sm (16px) и default (18px). removable добавляет кнопку удаления.`,code:`<Tag size="sm">small</Tag>
<Tag size="default">default</Tag>
<Tag removable onRemove={() => {}}>removable</Tag>
<Tag color="ok" removable onRemove={() => {}}>done</Tag>`,children:[(0,S.jsx)(u,{size:`sm`,children:`small`}),(0,S.jsx)(u,{size:`default`,children:`default`}),(0,S.jsx)(u,{removable:!0,onRemove:()=>{},children:`removable`}),(0,S.jsx)(u,{color:`ok`,removable:!0,onRemove:()=>{},children:`done`})]})]}),(0,S.jsx)(n,{id:`tag-group`,label:`TagGroup`,children:(0,S.jsx)(h,{title:`Группа тегов`,description:`TagGroup оборачивает теги в flex-контейнер с gap-1. Используй для наборов меток.`,code:`<TagGroup>
  <Tag color="ok">deployed</Tag>
  <Tag color="warn">review</Tag>
  <Tag color="info">backend</Tag>
  <Tag variant="outline">v2.3.1</Tag>
</TagGroup>`,children:(0,S.jsxs)(a,{children:[(0,S.jsx)(u,{color:`ok`,children:`deployed`}),(0,S.jsx)(u,{color:`warn`,children:`review`}),(0,S.jsx)(u,{color:`info`,children:`backend`}),(0,S.jsx)(u,{variant:`outline`,children:`v2.3.1`})]})})}),(0,S.jsxs)(n,{id:`filter-panel`,label:`Панель фильтрации`,children:[(0,S.jsx)(h,{title:`Панель фильтрации`,description:`FilterPanel + FilterGroup + FilterCheckbox. В слоте indicator — WorkflowIcon: при фильтрации задач по статусу форма иконки передаёт статус точнее, чем цветная точка.`,code:`<FilterPanel>
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
</FilterPanel>`,children:(0,S.jsxs)(b,{children:[(0,S.jsxs)(y,{title:`Статус`,children:[(0,S.jsx)(x,{label:`Open`,defaultChecked:!0,indicator:(0,S.jsx)(l,{status:`open`,size:`sm`})}),(0,S.jsx)(x,{label:`In Progress`,indicator:(0,S.jsx)(l,{status:`progress`,size:`sm`})}),(0,S.jsx)(x,{label:`Blocked`,indicator:(0,S.jsx)(l,{status:`blocked`,size:`sm`})}),(0,S.jsx)(x,{label:`Closed`,indicator:(0,S.jsx)(l,{status:`closed`,size:`sm`})})]}),(0,S.jsxs)(y,{title:`Приоритет`,children:[(0,S.jsx)(x,{label:`P0 Critical`,defaultChecked:!0}),(0,S.jsx)(x,{label:`P1 High`,defaultChecked:!0}),(0,S.jsx)(x,{label:`P2 Medium`}),(0,S.jsx)(x,{label:`P3 Low`})]})]})}),(0,S.jsxs)(r,{children:[`Пропсы FilterGroup и FilterCheckbox — на странице `,(0,S.jsx)(f,{href:`/components/panels`,children:`Panels`}),`.`]})]}),(0,S.jsx)(n,{id:`status-icon`,label:`StatusIcon`,children:(0,S.jsx)(h,{title:`StatusIcon — back-compat (deprecated)`,description:`StatusIcon — alias на WorkflowIcon для обратной совместимости. Будет удалён в v3. Используй WorkflowIcon в новом коде.`,code:`<StatusIcon status="open" />`,children:(0,S.jsx)(p,{caption:`StatusIcon (alias)`,children:(0,S.jsx)(i,{status:`open`,size:`lg`})})})}),(0,S.jsxs)(n,{id:`api`,label:`API`,children:[(0,S.jsx)(m,{title:`Пропсы WorkflowIcon`,props:[{name:`status`,type:`"open" | "progress" | "blocked" | "deferred" | "closed"`,defaultValue:`—`,description:`Статус задачи. Задаёт форму иконки и её aria-label.`},{name:`priority`,type:`"p0" | "p1" | "p2" | "p3" | "p4"`,defaultValue:`—`,description:`Приоритет. Дописывается в aria-label и data-priority, цвет иконки не меняет.`},{name:`turn`,type:`boolean`,defaultValue:`false`,description:`«Твой ход»: задача ждёт решения человека. Цвет --turn и атрибут data-turn.`},{name:`size`,type:`"sm" | "default" | "lg" | "xl"`,defaultValue:`"default"`,description:`Квадрат 12, 16, 20 или 24px.`}]}),(0,S.jsx)(m,{title:`Пропсы SignalIcon`,props:[{name:`tone`,type:`"ok" | "warn" | "err" | "info"`,defaultValue:`—`,description:`Диагностический сигнал. Задаёт форму иконки. Цвет --signal-err только у err, остальные тоны — --muted-foreground.`},{name:`size`,type:`"sm" | "default" | "lg" | "xl"`,defaultValue:`"default"`,description:`Квадрат 12, 14, 16 или 20px. Тип SignalIconSize.`},{name:`label`,type:`string`,defaultValue:`название тона`,description:`Доступное название. По умолчанию «Успешно», «Предупреждение», «Ошибка» или «Информация».`}]}),(0,S.jsx)(m,{title:`Пропсы Tag`,props:[{name:`variant`,type:`"default" | "outline" | "filled"`,defaultValue:`"default"`,description:`Muted фон, граница или primary фон.`},{name:`color`,type:`"neutral" | "ok" | "warn" | "err" | "info" | "accent" | "turn"`,defaultValue:`"neutral"`,description:`Цветовая схема поверх любого варианта. turn — «твой ход».`},{name:`size`,type:`"sm" | "default"`,defaultValue:`"default"`,description:`Высота 16 или 18px.`},{name:`format`,type:`"default" | "bracket" | "dot"`,defaultValue:`"default"`,description:`dot ставит точку цвета тона перед текстом, без фона: рекомендуемый вид статуса. bracket выводит текст в квадратных скобках, устарел с 8.0.0.`},{name:`removable`,type:`boolean`,defaultValue:`false`,description:`Добавляет кнопку удаления с aria-label «Удалить».`},{name:`onRemove`,type:`() => void`,defaultValue:`—`,description:`Колбэк кнопки удаления.`}]})]})]})})})}export{A as default};