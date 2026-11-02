import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{Ir as t,Qr as n,Sr as r,j as i,kr as a,nr as o,x as s,zn as c}from"./chunk-FJ6G7XYZ-vkrr-AON.js";import{A as l,Q as u,g as d}from"./docs-CTQgkcVe.js";import"./index-CylhoBOX.js";import"./workspace-B0gvzNJe.js";import{n as f,r as p,t as m}from"./docs-article-CV9v0E7s.js";import"./metric-BKzSxDOw.js";import"./kpi-grid-BzsIeFUo.js";import{a as h,c as g,d as _,l as v,o as y,s as b,u as x}from"./recipe-mocks-4jGL-pJW.js";var S=e(),C=[{id:`usage`,label:`Использование`},{id:`columns`,label:`Колонки`},{id:`single-accent`,label:`Один акцент`},{id:`aria-label`,label:`Доступное имя`},{id:`anti-patterns`,label:`Ошибки`},{id:`api`,label:`API`}];function w(){return(0,S.jsx)(i,{title:`KpiGrid`,description:`Layout-контейнер для KPI-карточек. Закрытый API: только children, columns (2|4) и опциональный ariaLabel.`,breadcrumbs:m(`/patterns/kpi-grid`),meta:f(`/patterns/kpi-grid`),children:(0,S.jsx)(s,{presentation:`article`,label:`KpiGrid`,inspector:p(C),document:(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(d,{title:`4 метрики, columns=4`,description:`Стандартная полоса дашборда: до 4 MetricRecipe в строке. Сетка занимает доступную ширину и переносит карточки, когда им не хватает места.`,layout:`block`,code:`<KpiGrid columns={4} ariaLabel="Sprint KPI">
  <MetricRecipe {...totalTasks} />
  <MetricRecipe {...completed} />
  <MetricRecipe {...inProcess} />
  <MetricRecipe {...overdue} />
</KpiGrid>`,children:(0,S.jsxs)(c,{columns:4,ariaLabel:`Sprint KPI`,children:[(0,S.jsx)(o,{..._}),(0,S.jsx)(o,{...y}),(0,S.jsx)(o,{...h}),(0,S.jsx)(o,{...x})]})}),(0,S.jsx)(r,{children:`KpiGrid — единственный канонический layout для группы метрик. Закрытый API не принимает className, style и id: стилистикой управляет система. columns задаёт максимум колонок (2 или 4), а число видимых колонок зависит от доступной ширины контейнера. В dev-режиме KpiGrid предупреждает о нарушении правила «один signal-accent на view».`}),(0,S.jsxs)(r,{children:[`KpiGrid — содержимое слота, а не способ собрать экран. Экран-сводку с метриками собирает тип`,` `,(0,S.jsx)(t,{children:`OverviewWorkspace`}),`, эталон — `,(0,S.jsx)(l,{href:`/examples/sprint/overview`,children:`обзор спринта`}),`.`]}),(0,S.jsx)(n,{id:`usage`,label:`Использование`,children:(0,S.jsx)(a,{copyLabel:`Скопировать код: использование KpiGrid`,language:`tsx`,code:`import { KpiGrid } from "@chucky23/design-system/patterns/kpi-grid"
import { MetricRecipe } from "@chucky23/design-system/recipes/metric"

<KpiGrid columns={4} ariaLabel="Sprint KPI">
  <MetricRecipe label="Total" value={68} />
  <MetricRecipe label="Overdue" value={8} tone="err" />
</KpiGrid>`})}),(0,S.jsxs)(n,{id:`columns`,label:`Колонки`,children:[(0,S.jsx)(d,{title:`columns: 2`,description:`Для пары главных KPI: до 2 колонок, одна при нехватке места в контейнере. Один tone-accent: главная метрика сигнальная, парная — neutral.`,layout:`block`,code:`<KpiGrid columns={2}>
  <MetricRecipe label="Healthy" value={42} tone="ok" />
  <MetricRecipe label="Total" value={47} tone="neutral" />
</KpiGrid>`,children:(0,S.jsxs)(c,{columns:2,children:[(0,S.jsx)(o,{label:`Healthy`,value:42,tone:`ok`}),(0,S.jsx)(o,{label:`Total`,value:47,tone:`neutral`})]})}),(0,S.jsx)(d,{title:`columns: 4 (по умолчанию)`,description:`Полная полоса дашборда: до 4 колонок. Число колонок зависит от доступного места внутри страницы или панели.`,layout:`block`,code:`<KpiGrid>  {/* columns по умолчанию = 4 */}
  <MetricRecipe label="Total" value={68} />
  <MetricRecipe label="Done" value={38} />
  <MetricRecipe label="WIP" value={22} />
  <MetricRecipe label="Overdue" value={8} />
</KpiGrid>`,children:(0,S.jsxs)(c,{children:[(0,S.jsx)(o,{label:`Total`,value:68}),(0,S.jsx)(o,{label:`Done`,value:38}),(0,S.jsx)(o,{label:`WIP`,value:22}),(0,S.jsx)(o,{label:`Overdue`,value:8})]})})]}),(0,S.jsxs)(n,{id:`single-accent`,label:`Один акцент`,children:[(0,S.jsxs)(r,{children:[`По правилу «один signal-accent на view» из `,(0,S.jsx)(t,{children:`for-ai/rules/foundations.md`}),` tone-маркер остаётся только у главной KPI, остальные получают `,(0,S.jsx)(t,{children:`tone="neutral"`}),`. Если в KpiGrid найдены 2 и более метрики с tone ≠ "neutral", в dev-режиме он печатает console.warn.`]}),(0,S.jsx)(d,{title:`Один акцент на 4 метрики`,description:`Главная KPI — Overdue (tone=err), остальные три — neutral. Так глаз сразу находит важное.`,layout:`block`,code:`<KpiGrid columns={4}>
  <MetricRecipe label="Total" value={68} tone="neutral" />
  <MetricRecipe label="Completed" value={38} tone="neutral" />
  <MetricRecipe label="In Process" value={22} tone="neutral" />
  <MetricRecipe label="Overdue" value={8} tone="err" />
</KpiGrid>`,children:(0,S.jsxs)(c,{columns:4,children:[(0,S.jsx)(o,{...v}),(0,S.jsx)(o,{...g}),(0,S.jsx)(o,{...b}),(0,S.jsx)(o,{...x})]})})]}),(0,S.jsx)(n,{id:`aria-label`,label:`Доступное имя`,children:(0,S.jsx)(d,{title:`ariaLabel + role='group'`,description:`С ariaLabel контейнер получает role='group' и aria-label: скринридер объявит группу метрик с описанием.`,layout:`block`,code:`<KpiGrid columns={4} ariaLabel="Sprint Dashboard KPI">
  {/* role='group', aria-label='Sprint Dashboard KPI' */}
  <MetricRecipe ... />
  <MetricRecipe ... />
  <MetricRecipe ... />
  <MetricRecipe ... />
</KpiGrid>`,children:(0,S.jsxs)(c,{columns:4,ariaLabel:`Sprint Dashboard KPI`,children:[(0,S.jsx)(o,{label:`Healthy`,value:42,tone:`ok`}),(0,S.jsx)(o,{label:`Degraded`,value:5,tone:`neutral`}),(0,S.jsx)(o,{label:`Failed`,value:2,tone:`neutral`}),(0,S.jsx)(o,{label:`Pending`,value:11,tone:`neutral`})]})})}),(0,S.jsxs)(n,{id:`anti-patterns`,label:`Ошибки`,children:[(0,S.jsxs)(r,{children:[`KpiGrid не принимает собственные пропсы раскладки, а сборку псевдосетки через div блокирует ESLint-пресет. Примеры ниже показывают только код; корректное использование children — на странице`,` `,(0,S.jsx)(l,{href:`/recipes/metric`,children:`MetricRecipe`}),`.`]}),(0,S.jsx)(a,{copyLabel:`Скопировать код: ошибка с сырой сеткой`,language:`tsx`,code:`{/* Ошибка: сырой grid div вместо KpiGrid.
       Нарушает no-raw-pseudo-surface (если есть border) +
       no-color-utility-on-ds-component для signal-классов внутри. */}
<div className="grid grid-cols-4 gap-3">
  <MetricRecipe label="A" value={1} />
  <MetricRecipe label="B" value={2} />
  <MetricRecipe label="C" value={3} />
  <MetricRecipe label="D" value={4} />
</div>

{/* Ошибка: колонки кроме 2 и 4. Closed enum: KpiGrid columns: 2 | 4.
       Если нужно 3 — это не KPI grid, а ComponentGrid. */}
<KpiGrid columns={3}>  {/* type error */}
  ...
</KpiGrid>

{/* Ошибка: все 4 метрики с разным tone. Глаз теряется — где главное?
       Dev-warn: «KpiGrid содержит 4 MetricRecipe с tone-маркером».
       Оставь signal-accent только на главной KPI. */}
<KpiGrid columns={4}>
  <MetricRecipe label="A" value={1} tone="ok" />
  <MetricRecipe label="B" value={2} tone="warn" />
  <MetricRecipe label="C" value={3} tone="err" />
  <MetricRecipe label="D" value={4} tone="info" />
</KpiGrid>

{/* Ошибка: children — не MetricRecipe. KpiGrid рассчитан на closed-API
       MetricRecipe; для произвольных карточек используй ComponentGrid. */}
<KpiGrid columns={4}>
  <Card>...</Card>
  <Card>...</Card>
</KpiGrid>`})]}),(0,S.jsx)(n,{id:`api`,label:`API`,children:(0,S.jsx)(u,{title:`KpiGridProps`,props:[{name:`children`,type:`React.ReactNode`,defaultValue:`—`,description:`Метрики, обычно MetricRecipe. Обязательный.`},{name:`columns`,type:`2 | 4`,defaultValue:`4`,description:`Максимальное число колонок. Сетка переносит карточки по ширине контейнера, а не окна.`},{name:`ariaLabel`,type:`string`,defaultValue:`—`,description:`Необязательный aria-label. С ним контейнер получает role='group'.`}]})})]})})})}export{w as default};