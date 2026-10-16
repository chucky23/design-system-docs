import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{Gn as t,Rn as n,ar as r,br as i,m as a,mn as o,o as s}from"./chunk-ZW5N5E5H-ScFucA-b.js";import{h as c,j as l,r as u}from"./docs-Ck_i9UNX.js";import"./index-DiNellwx.js";import"./workspace-BwWB7lTa.js";import{n as d,t as f}from"./docs-article-BUNGnjgF.js";import"./metric-_vvt7aPz.js";var p=e(),m=[{id:`usage`,label:`Использование`},{id:`tones`,label:`Тоны`},{id:`trend`,label:`Тренд`},{id:`progress`,label:`Прогресс`},{id:`sparkline`,label:`Sparkline`},{id:`detail`,label:`Производное значение`},{id:`full`,label:`Все слоты`},{id:`anti-patterns`,label:`Ошибки`},{id:`api`,label:`API`}];function h(){return(0,p.jsx)(a,{title:`MetricRecipe`,description:`KPI-карточка с закрытым API: label + значение + опциональные trend, progress, sparkline и detail. Цвет — closed enum tone, без className/style.`,breadcrumbs:f(`/recipes/metric`),children:(0,p.jsx)(s,{presentation:`article`,label:`MetricRecipe`,inspector:d(m),document:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(u,{title:`Минимальная карточка`,description:`Только label, value и необязательный meta. Без tone — нейтральный цвет.`,layout:`grid`,code:`<MetricRecipe
  label="Open Incidents"
  value={7}
  meta="2 escalated"
/>`,children:(0,p.jsx)(o,{label:`Open Incidents`,value:7,meta:`2 escalated`})}),(0,p.jsxs)(n,{children:[`MetricRecipe — единственный канонический способ нарисовать одну KPI-карточку. Закрытый API закрывает все вариации цвета и раскладки: tone красит левый маркер и крупное значение, остальные слоты (trend, progress, sparkline, detail) — необязательные надстройки. Для группы метрик используй `,(0,p.jsx)(r,{children:`<KpiGrid>`}),`; одиночные карточки сами по себе встречаются редко.`]}),(0,p.jsxs)(n,{children:[`Экран-сводку с метриками собирает тип `,(0,p.jsx)(r,{children:`OverviewWorkspace`}),`: сетку и карточки метрик он рисует сам, эталон — `,(0,p.jsx)(c,{href:`/screens/overview`,children:`обзор спринта`}),`. MetricRecipe остаётся содержимым слота, например внутри документа или раздела сводки.`]}),(0,p.jsx)(i,{id:`usage`,label:`Использование`,children:(0,p.jsx)(t,{copyLabel:`Скопировать код: использование MetricRecipe`,language:`tsx`,code:`import { MetricRecipe } from "@chucky23/design-system/recipes/metric"

<MetricRecipe label="Throughput" value={142} tone="ok" trend={{ direction: "up", change: "+12%" }} />`})}),(0,p.jsx)(i,{id:`tones`,label:`Тоны`,children:(0,p.jsxs)(u,{title:`Closed enum tone`,description:`Пять значений: "neutral" (по умолчанию), "ok", "warn", "err", "info". Тон красит левый маркер карточки и крупное значение.`,layout:`grid`,code:`<MetricRecipe label="Total" value={68} tone="neutral" />
<MetricRecipe label="Healthy" value={42} tone="ok" />
<MetricRecipe label="Active" value={22} tone="warn" />
<MetricRecipe label="Failed" value={8} tone="err" />
<MetricRecipe label="Pending" value={15} tone="info" />`,children:[(0,p.jsx)(o,{label:`Total`,value:68,tone:`neutral`}),(0,p.jsx)(o,{label:`Healthy`,value:42,tone:`ok`}),(0,p.jsx)(o,{label:`Active`,value:22,tone:`warn`}),(0,p.jsx)(o,{label:`Failed`,value:8,tone:`err`}),(0,p.jsx)(o,{label:`Pending`,value:15,tone:`info`})]})}),(0,p.jsx)(i,{id:`trend`,label:`Тренд`,children:(0,p.jsxs)(u,{title:`Trend-индикатор`,description:`direction: "up" | "down" | "flat" задаёт иконку, change — текст. invert переворачивает смысл цвета для метрик, где снижение — улучшение (Overdue, Errors).`,layout:`grid`,code:`<MetricRecipe
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
/>`,children:[(0,p.jsx)(o,{label:`Throughput`,value:142,tone:`ok`,trend:{direction:`up`,change:`+12%`}}),(0,p.jsx)(o,{label:`Latency`,value:`98ms`,tone:`warn`,trend:{direction:`flat`,change:`0%`}}),(0,p.jsx)(o,{label:`Overdue`,value:8,tone:`ok`,trend:{direction:`down`,change:`-2`,invert:!0}})]})}),(0,p.jsx)(i,{id:`progress`,label:`Прогресс`,children:(0,p.jsxs)(u,{title:`Compact progress bar`,description:`ASCII-полоса из 10 ячеек (█ и ░) показывает value/max. Для пары «текущее и цель» нужен именно этот слот; не путай его с trend.`,layout:`grid`,code:`<MetricRecipe
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
/>`,children:[(0,p.jsx)(o,{label:`Sprint Cap`,value:68,tone:`ok`,progress:{value:68,max:80}}),(0,p.jsx)(o,{label:`Disk Usage`,value:`412 GB`,tone:`warn`,progress:{value:412,max:500}})]})}),(0,p.jsx)(i,{id:`sparkline`,label:`Sparkline`,children:(0,p.jsxs)(u,{title:`Text-sparkline`,description:`Массив из 6–12 чисел рендерится Unicode block-глифами (▁▂▃▄▅▆▇█). Дешевле графика и читается в моноширинной сетке.`,layout:`grid`,code:`<MetricRecipe
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
/>`,children:[(0,p.jsx)(o,{label:`Sessions`,value:1284,tone:`ok`,sparkline:[820,940,880,1020,1110,1180,1284]}),(0,p.jsx)(o,{label:`Errors`,value:42,tone:`err`,sparkline:[58,51,47,49,44,43,42]})]})}),(0,p.jsx)(i,{id:`detail`,label:`Производное значение`,children:(0,p.jsxs)(u,{title:`Производное значение к value`,description:`Процент, доля или отношение в той же строке, что value. Необязательный signal красит число (signal: "ok" | "warn" | "err" | "info"). Не для нормы или лимита — для них используй progress.`,layout:`grid`,code:`{/* Положительный detail без signal */}
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
/>`,children:[(0,p.jsx)(o,{label:`Completed`,value:38,tone:`ok`,detail:{value:`55.8%`}}),(0,p.jsx)(o,{label:`Overdue`,value:8,tone:`err`,detail:{value:`11.7%`,signal:`err`}})]})}),(0,p.jsx)(i,{id:`full`,label:`Все слоты`,children:(0,p.jsx)(u,{title:`Все слоты вместе`,description:`trend + progress + sparkline + detail + meta. Так выглядит реальная KPI-карточка дашборда.`,layout:`grid`,code:`<MetricRecipe
  label="Total Tasks"
  value={68}
  meta="sprint cap 80"
  tone="ok"
  trend={{ direction: "up", change: "+12%" }}
  progress={{ value: 68, max: 80 }}
  sparkline={[45, 52, 48, 61, 55, 63, 68]}
  detail={{ value: "85%" }}
/>`,children:(0,p.jsx)(o,{label:`Total Tasks`,value:68,meta:`sprint cap 80`,tone:`ok`,trend:{direction:`up`,change:`+12%`},progress:{value:68,max:80},sparkline:[45,52,48,61,55,63,68],detail:{value:`85%`}})})}),(0,p.jsxs)(i,{id:`anti-patterns`,label:`Ошибки`,children:[(0,p.jsxs)(n,{children:[`MetricRecipe — закрытый API. Раскладка группы метрик и стиль — забота KpiGrid и токенов, а не потребителя. Примеры ниже показывают только код. Корректная композиция группы метрик — на странице`,` `,(0,p.jsx)(c,{href:`/patterns/kpi-grid`,children:`KpiGrid`}),`.`]}),(0,p.jsx)(t,{copyLabel:`Скопировать код: ошибка с сырой сеткой`,language:`tsx`,code:`{/* Ошибка: несколько MetricRecipe в сырой grid-обёртке.
       Используй <KpiGrid columns={4}> — он задаёт колонки и
       проверяет правило «один tone-accent на view» в dev. */}
<div className="grid grid-cols-4 gap-3">
  <MetricRecipe label="A" value={1} />
  <MetricRecipe label="B" value={2} />
  <MetricRecipe label="C" value={3} />
  <MetricRecipe label="D" value={4} />
</div>

{/* Ошибка: MetricRecipe не принимает className / style / children.
       Все вариации цвета — через tone, все слоты — через
       перечисленные пропсы. */}
<MetricRecipe
  label="Bad"
  value={1}
  className="text-signal-warn"   // нет такого пропа
  style={{ color: "red" }}        // нет такого пропа
/>

{/* Ошибка: detail для нормы, лимита или цели.
       Для пары «текущее и цель» — progress, не detail. */}
<MetricRecipe
  label="Sprint"
  value={68}
  detail={{ value: "of 80" }}     // должен быть progress={{ value: 68, max: 80 }}
/>`})]}),(0,p.jsx)(i,{id:`api`,label:`API`,children:(0,p.jsx)(l,{title:`Пропсы MetricRecipe`,props:[{name:`label`,type:`string`,defaultValue:`—`,description:`Метка-заголовок над крупным значением. Обязательный.`},{name:`value`,type:`string | number`,defaultValue:`—`,description:`Большое числовое значение. Обязательный.`},{name:`meta`,type:`string`,defaultValue:`—`,description:`Подпись внизу карточки, мелкая и приглушённая.`},{name:`tone`,type:`"ok" | "warn" | "err" | "info" | "neutral"`,defaultValue:`"neutral"`,description:`Сигнальный тон: красит левый маркер Card и крупное значение.`},{name:`trend`,type:`{ direction: "up" | "down" | "flat"; change: string; invert?: boolean }`,defaultValue:`—`,description:`Trend-индикатор справа от label. invert переворачивает смысл цвета: снижение — улучшение.`},{name:`progress`,type:`{ value: number; max: number }`,defaultValue:`—`,description:`Компактная ASCII-полоса из 10 ячеек для пары «текущее и цель». value <= max, max > 0.`},{name:`sparkline`,type:`ReadonlyArray<number>`,defaultValue:`—`,description:`Текстовый sparkline из Unicode block-глифов. Для читаемости — 6–12 точек.`},{name:`detail`,type:`{ value: string; signal?: "ok" | "warn" | "err" | "info" }`,defaultValue:`—`,description:`Производная метрика к value: процент или доля. Не для нормы — для пары «текущее и цель» используй progress.`}]})})]})})})}export{h as default};