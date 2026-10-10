import{$n as e,Hn as t,Mo as n,O as r,dn as i}from"./chunk-ZW5N5E5H-C8fDcLjq.js";import{H as a,M as o,c as s,k as c,r as l}from"./docs-CtJuZ0WF.js";import"./index-D3G-KnJA.js";import"./metric-D5lKZRqG.js";import"./kpi-grid-DarP06tp.js";import{a as u,c as d,d as f,l as p,o as m,s as h,u as g}from"./recipe-mocks-qFM-Zc-i.js";var _=n();function v(){return(0,_.jsxs)(c,{gap:`lg`,children:[(0,_.jsx)(t,{title:`KpiGrid`,description:`Layout-контейнер для KPI-карточек. Закрытый API: только children, columns (2|4) и опциональный ariaLabel.`}),(0,_.jsx)(o,{className:`max-w-prose`,"data-body":!0,children:`KpiGrid — единственный канонический layout для группы метрик. Закрытый API: ни className, ни style, ни id — стилистика управляется системой. columns задаёт максимум (2 или 4), а число читаемых колонок зависит от доступной ширины контейнера. В dev-режиме предупреждает о нарушении правила «один signal-accent на view».`}),(0,_.jsx)(e,{label:`basic usage`,children:(0,_.jsx)(l,{title:`4 метрики, columns=4`,description:`Стандартная dashboard strip: максимум 4 MetricRecipe в строке. Пакет занимает доступную ширину и переносит карточки, когда им не хватает места.`,code:`<KpiGrid columns={4} ariaLabel="Sprint KPI">
  <MetricRecipe {...totalTasks} />
  <MetricRecipe {...completed} />
  <MetricRecipe {...inProcess} />
  <MetricRecipe {...overdue} />
</KpiGrid>`,children:(0,_.jsxs)(r,{columns:4,ariaLabel:`Sprint KPI`,children:[(0,_.jsx)(i,{...f}),(0,_.jsx)(i,{...m}),(0,_.jsx)(i,{...u}),(0,_.jsx)(i,{...g})]})})}),(0,_.jsxs)(e,{label:`columns variants`,children:[(0,_.jsx)(l,{title:`columns: 2`,description:`Для пары главных KPI: максимум 2 колонки, одна при недостатке места в контейнере. Один tone-accent: главная метрика signal, парная — neutral.`,code:`<KpiGrid columns={2}>
  <MetricRecipe label="Healthy" value={42} tone="ok" />
  <MetricRecipe label="Total" value={47} tone="neutral" />
</KpiGrid>`,children:(0,_.jsxs)(r,{columns:2,children:[(0,_.jsx)(i,{label:`Healthy`,value:42,tone:`ok`}),(0,_.jsx)(i,{label:`Total`,value:47,tone:`neutral`})]})}),(0,_.jsx)(l,{title:`columns: 4 (default)`,description:`Полная dashboard strip: максимум 4 колонки. Число колонок определяется доступным местом внутри страницы или панели.`,code:`<KpiGrid>  {/* columns по умолчанию = 4 */}
  <MetricRecipe label="Total" value={68} />
  <MetricRecipe label="Done" value={38} />
  <MetricRecipe label="WIP" value={22} />
  <MetricRecipe label="Overdue" value={8} />
</KpiGrid>`,children:(0,_.jsxs)(r,{children:[(0,_.jsx)(i,{label:`Total`,value:68}),(0,_.jsx)(i,{label:`Done`,value:38}),(0,_.jsx)(i,{label:`WIP`,value:22}),(0,_.jsx)(i,{label:`Overdue`,value:8})]})})]}),(0,_.jsxs)(e,{label:`single accent (foundations rule)`,children:[(0,_.jsxs)(o,{className:`max-w-prose`,"data-body":!0,children:[`По `,(0,_.jsx)(s,{children:`for-ai/rules/foundations.md`}),` правило «один signal-accent на view» — оставь tone-маркер только на главной KPI, остальные сделай `,(0,_.jsx)(s,{children:`tone="neutral"`}),`. KpiGrid в dev-режиме печатает console.warn, если найдены 2+ метрики с tone ≠ "neutral".`]}),(0,_.jsx)(l,{title:`Один accent на 4 метрики`,description:`Главная KPI — Overdue (tone=err). Остальные три — neutral. Так глаз сразу находит важное.`,code:`<KpiGrid columns={4}>
  <MetricRecipe label="Total" value={68} tone="neutral" />
  <MetricRecipe label="Completed" value={38} tone="neutral" />
  <MetricRecipe label="In Process" value={22} tone="neutral" />
  <MetricRecipe label="Overdue" value={8} tone="err" />
</KpiGrid>`,children:(0,_.jsxs)(r,{columns:4,children:[(0,_.jsx)(i,{...p}),(0,_.jsx)(i,{...d}),(0,_.jsx)(i,{...h}),(0,_.jsx)(i,{...g})]})})]}),(0,_.jsx)(e,{label:`aria-label`,children:(0,_.jsx)(l,{title:`ariaLabel + role='group'`,description:`При передаче ariaLabel контейнер получает role='group' и aria-label — screen reader объявит группу метрик с описанием.`,code:`<KpiGrid columns={4} ariaLabel="Sprint Dashboard KPI">
  {/* role='group', aria-label='Sprint Dashboard KPI' */}
  <MetricRecipe ... />
  <MetricRecipe ... />
  <MetricRecipe ... />
  <MetricRecipe ... />
</KpiGrid>`,children:(0,_.jsxs)(r,{columns:4,ariaLabel:`Sprint Dashboard KPI`,children:[(0,_.jsx)(i,{label:`Healthy`,value:42,tone:`ok`}),(0,_.jsx)(i,{label:`Degraded`,value:5,tone:`neutral`}),(0,_.jsx)(i,{label:`Failed`,value:2,tone:`neutral`}),(0,_.jsx)(i,{label:`Pending`,value:11,tone:`neutral`})]})})}),(0,_.jsx)(e,{label:`anti-patterns`,children:(0,_.jsx)(l,{title:`Что НЕ делать`,description:`KpiGrid не принимает custom layout-пропов. Сборка псевдо-grid'а через div блокируется ESLint preset.`,code:`{/* ❌ Raw grid div вместо KpiGrid.
       Нарушает no-raw-pseudo-surface (если есть border) +
       no-color-utility-on-ds-component для signal-классов внутри. */}
<div className="grid grid-cols-4 gap-3">
  <MetricRecipe label="A" value={1} />
  <MetricRecipe label="B" value={2} />
  <MetricRecipe label="C" value={3} />
  <MetricRecipe label="D" value={4} />
</div>

{/* ❌ Колонки кроме 2 и 4. Closed enum: KpiGrid columns: 2 | 4.
       Если нужно 3 — это не KPI grid, это ComponentGrid. */}
<KpiGrid columns={3}>  {/* type error */}
  ...
</KpiGrid>

{/* ❌ Все 4 метрики с разным tone. Глаз теряется — где главное?
       Дев-warn: «KpiGrid содержит 4 MetricRecipe с tone-маркером».
       Оставь signal-accent только на главной KPI. */}
<KpiGrid columns={4}>
  <MetricRecipe label="A" value={1} tone="ok" />
  <MetricRecipe label="B" value={2} tone="warn" />
  <MetricRecipe label="C" value={3} tone="err" />
  <MetricRecipe label="D" value={4} tone="info" />
</KpiGrid>

{/* ❌ Children — не MetricRecipe. KpiGrid рассчитан на closed-API
       MetricRecipe; для произвольных карточек используй ComponentGrid
       или собственный layout. */}
<KpiGrid columns={4}>
  <Card>...</Card>
  <Card>...</Card>
</KpiGrid>`,children:(0,_.jsxs)(o,{className:`font-mono text-xs text-muted-foreground`,children:[`Примеры выше — code-only. См. `,(0,_.jsx)(s,{children:`/recipes/metric`}),` для корректного использования children.`]})})}),(0,_.jsx)(e,{label:`api reference`,children:(0,_.jsx)(a,{title:`KpiGridProps`,props:[{name:`children`,type:`React.ReactNode`,defaultValue:`—`,description:`Метрики (обычно MetricRecipe). Required.`},{name:`columns`,type:`2 | 4`,defaultValue:`4`,description:`Максимальное число колонок. Сетка переносит карточки по ширине контейнера, а не по ширине окна.`},{name:`ariaLabel`,type:`string`,defaultValue:`—`,description:`Опциональный aria-label. При передаче контейнер получает role='group'.`}]})})]})}export{v as default};