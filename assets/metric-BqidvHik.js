import{$n as e,Hn as t,Mo as n,dn as r}from"./chunk-ZW5N5E5H-C8fDcLjq.js";import{H as i,M as a,_ as o,c as s,k as c,r as l,s as u}from"./docs-CtJuZ0WF.js";import"./index-D3G-KnJA.js";import"./metric-D5lKZRqG.js";var d=n();function f(){return(0,d.jsxs)(c,{gap:`lg`,children:[(0,d.jsx)(t,{title:`MetricRecipe`,description:`KPI-карточка с закрытым API: label + значение + опциональные trend, progress, sparkline и detail. Цвет — closed enum tone, без className/style.`}),(0,d.jsxs)(a,{className:`max-w-prose`,"data-body":!0,children:[`MetricRecipe — единственный канонический способ нарисовать одну KPI-карточку. Закрытый API закрывает все вариации цвета и layout: tone красит левый маркер и крупное значение, остальные слоты (trend, progress, sparkline, detail) — опциональные надстройки. Для группы метрик используй `,(0,d.jsx)(s,{children:`<KpiGrid>`}),`; одиночные карточки сами по себе встречаются редко.`]}),(0,d.jsx)(e,{label:`basic usage`,children:(0,d.jsx)(l,{title:`Минимальная карточка`,description:`Только label, value и опциональный meta. Без tone — нейтральный цвет.`,code:`<MetricRecipe
  label="Open Incidents"
  value={7}
  meta="2 escalated"
/>`,children:(0,d.jsx)(u,{className:`w-64`,children:(0,d.jsx)(r,{label:`Open Incidents`,value:7,meta:`2 escalated`})})})}),(0,d.jsx)(e,{label:`tone variants`,children:(0,d.jsx)(l,{title:`Closed enum tone`,description:`Пять значений: "neutral" (default), "ok", "warn", "err", "info". Красит левый маркер карточки и крупное значение.`,code:`<MetricRecipe label="Total" value={68} tone="neutral" />
<MetricRecipe label="Healthy" value={42} tone="ok" />
<MetricRecipe label="Active" value={22} tone="warn" />
<MetricRecipe label="Failed" value={8} tone="err" />
<MetricRecipe label="Pending" value={15} tone="info" />`,children:(0,d.jsxs)(u,{className:`grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5`,children:[(0,d.jsx)(r,{label:`Total`,value:68,tone:`neutral`}),(0,d.jsx)(r,{label:`Healthy`,value:42,tone:`ok`}),(0,d.jsx)(r,{label:`Active`,value:22,tone:`warn`}),(0,d.jsx)(r,{label:`Failed`,value:8,tone:`err`}),(0,d.jsx)(r,{label:`Pending`,value:15,tone:`info`})]})})}),(0,d.jsx)(e,{label:`with trend`,children:(0,d.jsx)(l,{title:`Trend-индикатор`,description:`direction: "up" | "down" | "flat" (иконка) + change (текст). invert переворачивает смысл цвета — для метрик где down = позитив (Overdue, Errors).`,code:`<MetricRecipe
  label="Throughput"
  value={142}
  tone="ok"
  trend={{ direction: "up", change: "+12%" }}
/>

<MetricRecipe
  label="Latency"
  value="98ms"
  tone="warn"
  trend={{ direction: "flat", change: "0%" }}
/>

{/* invert: down — это улучшение */}
<MetricRecipe
  label="Overdue"
  value={8}
  tone="ok"
  trend={{ direction: "down", change: "-2", invert: true }}
/>`,children:(0,d.jsxs)(o,{className:`w-full gap-3 sm:grid-cols-3`,columns:3,children:[(0,d.jsx)(r,{label:`Throughput`,value:142,tone:`ok`,trend:{direction:`up`,change:`+12%`}}),(0,d.jsx)(r,{label:`Latency`,value:`98ms`,tone:`warn`,trend:{direction:`flat`,change:`0%`}}),(0,d.jsx)(r,{label:`Overdue`,value:8,tone:`ok`,trend:{direction:`down`,change:`-2`,invert:!0}})]})})}),(0,d.jsx)(e,{label:`with progress`,children:(0,d.jsx)(l,{title:`Compact progress bar`,description:`ASCII-bar (█ / ░, 10 cells) показывает value/max. Для пары current vs target — это правильный слот; не путай с trend.`,code:`<MetricRecipe
  label="Sprint Cap"
  value={68}
  tone="ok"
  progress={{ value: 68, max: 80 }}
/>

<MetricRecipe
  label="Disk Usage"
  value="412 GB"
  tone="warn"
  progress={{ value: 412, max: 500 }}
/>`,children:(0,d.jsxs)(o,{className:`w-full gap-3`,columns:2,children:[(0,d.jsx)(r,{label:`Sprint Cap`,value:68,tone:`ok`,progress:{value:68,max:80}}),(0,d.jsx)(r,{label:`Disk Usage`,value:`412 GB`,tone:`warn`,progress:{value:412,max:500}})]})})}),(0,d.jsx)(e,{label:`with sparkline`,children:(0,d.jsx)(l,{title:`Text-sparkline`,description:`Массив из 6-12 чисел рендерится как Unicode block-glyphs (▁▂▃▄▅▆▇█). Дешевле чарта, читаемо в моноширинной сетке.`,code:`<MetricRecipe
  label="Sessions"
  value={1284}
  tone="ok"
  sparkline={[820, 940, 880, 1020, 1110, 1180, 1284]}
/>

<MetricRecipe
  label="Errors"
  value={42}
  tone="err"
  sparkline={[58, 51, 47, 49, 44, 43, 42]}
/>`,children:(0,d.jsxs)(o,{className:`w-full gap-3`,columns:2,children:[(0,d.jsx)(r,{label:`Sessions`,value:1284,tone:`ok`,sparkline:[820,940,880,1020,1110,1180,1284]}),(0,d.jsx)(r,{label:`Errors`,value:42,tone:`err`,sparkline:[58,51,47,49,44,43,42]})]})})}),(0,d.jsx)(e,{label:`with detail`,children:(0,d.jsx)(l,{title:`Производное значение к value`,description:`Процент / доля / ratio в той же строке, что value. Опциональный signal красит число (signal: "ok" | "warn" | "err" | "info"). Не для нормы / лимита — для них используй progress.`,code:`{/* Положительный detail без signal */}
<MetricRecipe
  label="Completed"
  value={38}
  tone="ok"
  detail={{ value: "55.8%" }}
/>

{/* Отрицательный с signal: "err" */}
<MetricRecipe
  label="Overdue"
  value={8}
  tone="err"
  detail={{ value: "11.7%", signal: "err" }}
/>`,children:(0,d.jsxs)(o,{className:`w-full gap-3`,columns:2,children:[(0,d.jsx)(r,{label:`Completed`,value:38,tone:`ok`,detail:{value:`55.8%`}}),(0,d.jsx)(r,{label:`Overdue`,value:8,tone:`err`,detail:{value:`11.7%`,signal:`err`}})]})})}),(0,d.jsx)(e,{label:`full composition`,children:(0,d.jsx)(l,{title:`Все слоты вместе`,description:`trend + progress + sparkline + detail + meta. Так выглядит реальная KPI карточка из dashboard.`,code:`<MetricRecipe
  label="Total Tasks"
  value={68}
  meta="sprint cap 80"
  tone="ok"
  trend={{ direction: "up", change: "+12%" }}
  progress={{ value: 68, max: 80 }}
  sparkline={[45, 52, 48, 61, 55, 63, 68]}
  detail={{ value: "85%" }}
/>`,children:(0,d.jsx)(u,{className:`w-full max-w-sm`,children:(0,d.jsx)(r,{label:`Total Tasks`,value:68,meta:`sprint cap 80`,tone:`ok`,trend:{direction:`up`,change:`+12%`},progress:{value:68,max:80},sparkline:[45,52,48,61,55,63,68],detail:{value:`85%`}})})})}),(0,d.jsx)(e,{label:`anti-patterns`,children:(0,d.jsx)(l,{title:`Что НЕ делать`,description:`MetricRecipe — закрытый API. Layout группы метрик и стиль — забота KpiGrid и tokens, а не consumer.`,code:`{/* ❌ Не оборачивай несколько MetricRecipe в raw grid div.
       Используй <KpiGrid columns={4}> — он задаёт колонки и
       проверяет правило «один tone-accent per view» в dev. */}
<div className="grid grid-cols-4 gap-3">
  <MetricRecipe label="A" value={1} />
  <MetricRecipe label="B" value={2} />
  <MetricRecipe label="C" value={3} />
  <MetricRecipe label="D" value={4} />
</div>

{/* ❌ MetricRecipe не принимает className / style / children.
       Все вариации цвета — через tone, все слоты — через
       перечисленные пропы. */}
<MetricRecipe
  label="Bad"
  value={1}
  className="text-signal-warn"   // нет такого пропа
  style={{ color: "red" }}        // нет такого пропа
/>

{/* ❌ Не используй detail для нормы / лимита / цели.
       Для пары current vs target — progress, не detail. */}
<MetricRecipe
  label="Sprint"
  value={68}
  detail={{ value: "of 80" }}     // должен быть progress={{ value: 68, max: 80 }}
/>`,children:(0,d.jsxs)(a,{className:`font-mono text-xs text-muted-foreground`,children:[`Примеры выше — code-only. См. `,(0,d.jsx)(s,{children:`/patterns/kpi-grid`}),` для корректной композиции группы метрик.`]})})}),(0,d.jsx)(e,{label:`api reference`,children:(0,d.jsx)(i,{title:`MetricRecipe Props`,props:[{name:`label`,type:`string`,defaultValue:`—`,description:`Метка-заголовок над крупным значением. Required.`},{name:`value`,type:`string | number`,defaultValue:`—`,description:`Большое числовое значение. Required.`},{name:`meta`,type:`string`,defaultValue:`—`,description:`Подпись внизу карточки (мелкая, muted).`},{name:`tone`,type:`"ok" | "warn" | "err" | "info" | "neutral"`,defaultValue:`"neutral"`,description:`Сигнальный тон: красит левый маркер Card и крупное значение.`},{name:`trend`,type:`{ direction: "up" | "down" | "flat"; change: string; invert?: boolean }`,defaultValue:`—`,description:`Trend-индикатор справа от label. invert переворачивает смысл цвета (down = улучшение).`},{name:`progress`,type:`{ value: number; max: number }`,defaultValue:`—`,description:`Compact ASCII-bar (10 cells) для пары current vs target. value <= max, max > 0.`},{name:`sparkline`,type:`ReadonlyArray<number>`,defaultValue:`—`,description:`Текстовый sparkline через Unicode block-glyphs. 6-12 точек для читаемости.`},{name:`detail`,type:`{ value: string; signal?: "ok" | "warn" | "err" | "info" }`,defaultValue:`—`,description:`Производная метрика к value (процент, доля). Не для нормы — для current vs target используй progress.`}]})})]})}export{f as default};