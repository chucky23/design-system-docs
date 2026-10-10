import{$n as e,Hn as t,Mo as n}from"./chunk-ZW5N5E5H-C8fDcLjq.js";import{H as r,M as i,_ as a,c as o,ht as s,k as c,r as l,s as u}from"./docs-CtJuZ0WF.js";import"./index-D3G-KnJA.js";import"./chart-area-wc00xGiJ.js";import{h as d,i as f,m as p,p as m,r as h}from"./recipe-mocks-qFM-Zc-i.js";var g=n();function _(){return(0,g.jsxs)(c,{gap:`lg`,children:[(0,g.jsx)(t,{title:`ChartAreaRecipe`,description:`Recipe для area-chart карточки. Закрытый API: без className, без прямых импортов recharts. Цвет series — closed enum signal.`}),(0,g.jsxs)(i,{className:`max-w-prose`,"data-body":!0,children:[`ChartAreaRecipe — единственный канонический способ построить area-chart. Recipe инкапсулирует ChartContainer, AreaChart, gradient defs, grid, tooltip и легенду. Consumer передаёт data, xKey, series — остальное собрано внутри. Прямой импорт recharts wrapper'ов в consumer-коде блокируется правилом `,(0,g.jsx)(o,{children:`no-direct-recharts-wrapper-imports`}),`.`]}),(0,g.jsx)(e,{label:`basic usage`,children:(0,g.jsx)(l,{title:`Минимальный chart`,description:`Одна серия, без stats/meta. data — массив точек, xKey — поле для оси X, series — массив с dataKey/label/signal.`,code:`<ChartAreaRecipe
  title="Task Velocity"
  data={velocityWeeks}
  xKey="week"
  series={[
    { dataKey: "completed", label: "completed", signal: "ok" },
  ]}
/>`,children:(0,g.jsx)(u,{className:`w-full`,children:(0,g.jsx)(s,{title:`Task Velocity`,data:d,xKey:`week`,series:p})})})}),(0,g.jsx)(e,{label:`signal variants`,children:(0,g.jsx)(l,{title:`Closed enum signal`,description:`Пять значений для каждой series: "ok", "warn", "err", "info", "neutral". Цвет берётся из var(--signal-*) — не настраивается через className.`,code:`{/* ok */}
<ChartAreaRecipe ... series={[{ dataKey: "completed", label: "completed", signal: "ok" }]} />

{/* warn */}
<ChartAreaRecipe ... series={[{ dataKey: "completed", label: "completed", signal: "warn" }]} />

{/* err */}
<ChartAreaRecipe ... series={[{ dataKey: "completed", label: "completed", signal: "err" }]} />

{/* info */}
<ChartAreaRecipe ... series={[{ dataKey: "completed", label: "completed", signal: "info" }]} />

{/* neutral — для muted-foreground */}
<ChartAreaRecipe ... series={[{ dataKey: "completed", label: "completed", signal: "neutral" }]} />`,children:(0,g.jsxs)(a,{className:`w-full gap-3`,columns:2,children:[(0,g.jsx)(s,{title:`Signal: ok`,data:d,xKey:`week`,series:[{dataKey:`completed`,label:`completed`,signal:`ok`}],size:`sm`}),(0,g.jsx)(s,{title:`Signal: warn`,data:d,xKey:`week`,series:[{dataKey:`completed`,label:`completed`,signal:`warn`}],size:`sm`}),(0,g.jsx)(s,{title:`Signal: err`,data:d,xKey:`week`,series:[{dataKey:`completed`,label:`completed`,signal:`err`}],size:`sm`}),(0,g.jsx)(s,{title:`Signal: info`,data:d,xKey:`week`,series:[{dataKey:`completed`,label:`completed`,signal:`info`}],size:`sm`})]})})}),(0,g.jsx)(e,{label:`size variants`,children:(0,g.jsx)(l,{title:`Closed enum size`,description:`Три значения: "sm", "default" (160px высота), "lg". Управляет высотой через chart-height-* токены.`,code:`<ChartAreaRecipe ... size="sm" />
<ChartAreaRecipe ... size="default" />
<ChartAreaRecipe ... size="lg" />`,children:(0,g.jsxs)(c,{className:`w-full gap-3`,children:[(0,g.jsx)(s,{title:`size: sm`,data:d,xKey:`week`,series:p,size:`sm`}),(0,g.jsx)(s,{title:`size: default`,data:d,xKey:`week`,series:p,size:`default`}),(0,g.jsx)(s,{title:`size: lg`,data:d,xKey:`week`,series:p,size:`lg`})]})})}),(0,g.jsx)(e,{label:`multi-series`,children:(0,g.jsx)(l,{title:`До 5 series в одном chart'е`,description:`Каждая series — свой dataKey, label и signal. Минимум 1, максимум 5 — при нарушении console.warn в dev.`,code:`<ChartAreaRecipe
  title="Velocity"
  data={velocityWeeks}
  xKey="week"
  series={[
    { dataKey: "completed", label: "completed", signal: "ok" },
    { dataKey: "created", label: "created", signal: "info" },
    { dataKey: "overdue", label: "overdue", signal: "err" },
  ]}
/>`,children:(0,g.jsx)(u,{className:`w-full`,children:(0,g.jsx)(s,{title:`Task Velocity`,meta:`12w`,data:d,xKey:`week`,series:m})})})}),(0,g.jsx)(e,{label:`with stats`,children:(0,g.jsx)(l,{title:`Footer-статистика`,description:`stats — массив пар label/value, опциональный signal. Разделяются вертикальной чёрточкой. Числа отрисовываются с data-numeric для tabular-nums.`,code:`<ChartAreaRecipe
  title="Velocity"
  meta="12w"
  data={velocityWeeks}
  xKey="week"
  series={...}
  stats={[
    { label: "peak", value: 36, signal: "ok" },
    { label: "avg", value: "26.2" },
    { label: "delta", value: "+24", signal: "ok" },
  ]}
/>`,children:(0,g.jsx)(u,{className:`w-full`,children:(0,g.jsx)(s,{title:`Task Velocity`,meta:`12w`,data:d,xKey:`week`,series:m,stats:[{label:`peak`,value:36,signal:`ok`},{label:`avg`,value:`26.2`},{label:`delta`,value:`+24`,signal:`ok`}]})})})}),(0,g.jsx)(e,{label:`dashed (forecast) series`,children:(0,g.jsx)(l,{title:`emphasis="dashed"`,description:`Пунктирная линия — семантика "прогноз / прошлое сравнение / неточные данные". emphasis: "solid" (default) | "dashed". Толщина линии — 1px для dashed, 1.5px для solid.`,code:`<ChartAreaRecipe
  title="Forecast"
  data={forecastWeeks}
  xKey="week"
  series={[
    { dataKey: "actual", label: "actual", signal: "ok" },
    {
      dataKey: "forecast",
      label: "forecast",
      signal: "info",
      emphasis: "dashed",
    },
  ]}
/>`,children:(0,g.jsx)(u,{className:`w-full`,children:(0,g.jsx)(s,{title:`Velocity Forecast`,meta:`8w`,data:f,xKey:`week`,series:h,stats:[{label:`actual`,value:31,signal:`ok`},{label:`forecast`,value:36,signal:`info`}]})})})}),(0,g.jsx)(e,{label:`anti-patterns`,children:(0,g.jsx)(l,{title:`Что НЕ делать`,description:`Прямой доступ к recharts из consumer-кода блокируется правилом no-direct-recharts-wrapper-imports.`,code:`{/* ❌ Прямой импорт recharts вместо ChartAreaRecipe.
       Нарушает no-direct-recharts-wrapper-imports — блокируется ESLint. */}
import { AreaChart, Area, XAxis, YAxis } from "recharts"

<AreaChart data={data}>
  <Area dataKey="completed" stroke="#xxxxxx" fill="#xxxxxx" />
  <XAxis dataKey="week" />
</AreaChart>

{/* ❌ Передача raw hex-цвета в series.
       signal — closed enum: "ok" | "warn" | "err" | "info" | "neutral".
       Цвет берётся из var(--signal-*) — единый источник правды. */}
<ChartAreaRecipe
  title="Bad"
  data={data}
  xKey="week"
  series={[
    { dataKey: "x", label: "x", signal: "#xxxxxx" },  // type error
  ]}
/>

{/* ❌ Больше 5 series в одном chart'е.
       Дев-warn: "series должен содержать от 1 до 5 элементов".
       Разнеси на отдельные chart'ы или сгруппируй по категории. */}
<ChartAreaRecipe
  ...
  series={[s1, s2, s3, s4, s5, s6]}  // dev console.warn
/>`,children:(0,g.jsxs)(i,{className:`font-mono text-xs text-muted-foreground`,children:[`Примеры выше — code-only. См. рабочий dashboard в`,` `,(0,g.jsx)(o,{children:`/example-1`}),`.`]})})}),(0,g.jsxs)(e,{label:`api reference`,children:[(0,g.jsx)(r,{title:`ChartAreaRecipeProps`,props:[{name:`title`,type:`string`,defaultValue:`—`,description:`Заголовок карточки. Required.`},{name:`meta`,type:`string`,defaultValue:`—`,description:`Опциональный label справа от title (например "12w").`},{name:`data`,type:`ReadonlyArray<Record<string, string | number>>`,defaultValue:`—`,description:`Точки графика. Каждый объект — точка по X. Required.`},{name:`xKey`,type:`string`,defaultValue:`—`,description:`Имя поля в data для оси X. Required.`},{name:`series`,type:`ReadonlyArray<ChartAreaSeries>`,defaultValue:`—`,description:`Серии. Минимум 1, максимум 5. См. ChartAreaSeries ниже.`},{name:`stats`,type:`ReadonlyArray<ChartAreaStat>`,defaultValue:`—`,description:`Footer-статистика. См. ChartAreaStat ниже.`},{name:`size`,type:`"sm" | "default" | "lg"`,defaultValue:`"default"`,description:`Высота chart'а через chart-height-* токены.`},{name:`id`,type:`string`,defaultValue:`useId()`,description:`ID для уникальности gradient defs. По умолчанию — auto.`}]}),(0,g.jsxs)(i,{tone:`muted`,children:[`Для кастомных charts пакет также экспортирует низкоуровневые wrappers`,` `,(0,g.jsx)(o,{children:`ChartTooltip`}),` и `,(0,g.jsx)(o,{children:`ChartTooltipContent`}),`. В product UI предпочитай `,(0,g.jsx)(o,{children:`ChartAreaRecipe`}),`, чтобы сохранить closed enum signal и единый tooltip contract.`]}),(0,g.jsx)(r,{title:`ChartAreaSeries`,props:[{name:`dataKey`,type:`string`,defaultValue:`—`,description:`Имя поля в data, из которого берётся value серии.`},{name:`label`,type:`string`,defaultValue:`—`,description:`Подпись в легенде.`},{name:`signal`,type:`"ok" | "warn" | "err" | "info" | "neutral"`,defaultValue:`—`,description:`Цвет series (closed enum). Required.`},{name:`emphasis`,type:`"solid" | "dashed"`,defaultValue:`"solid"`,description:`Стиль линии. "dashed" — для прогноза или прошлого сравнения.`}]}),(0,g.jsx)(r,{title:`ChartAreaStat`,props:[{name:`label`,type:`string`,defaultValue:`—`,description:`Метка в footer'е.`},{name:`value`,type:`string | number`,defaultValue:`—`,description:`Значение. Рендерится с data-numeric (tabular-nums).`},{name:`signal`,type:`"ok" | "warn" | "err" | "info"`,defaultValue:`—`,description:`Опциональный сигнал-цвет числа.`}]})]})]})}export{_ as default};