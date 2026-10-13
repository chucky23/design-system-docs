import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{Gn as t,I as n,O as r,Rn as i,ar as a,br as o,lr as s}from"./chunk-5DUEG3R3-896u-HpP.js";import{h as c,j as l,ot as u,r as d}from"./docs-3sp5L-9g.js";import"./index-CHfT3erv.js";import"./workspace-DK_BGpXz.js";import{n as f,t as p}from"./docs-article-DBNRC-Xz.js";import"./chart-area-CuBa-DRy.js";import{h as m,i as h,m as g,p as _,r as v}from"./recipe-mocks-BhN6eNm6.js";var y=e(),b=[{id:`usage`,label:`Использование`},{id:`signals`,label:`Сигналы`},{id:`sizes`,label:`Размеры`},{id:`multi-series`,label:`Несколько серий`},{id:`stats`,label:`Статистика`},{id:`dashed`,label:`Пунктирная серия`},{id:`anti-patterns`,label:`Ошибки`},{id:`api`,label:`API`}];function x(){return(0,y.jsx)(n,{title:`ChartAreaRecipe`,description:`Recipe для area-chart карточки. Закрытый API: без className, без прямых импортов recharts. Цвет series — closed enum signal.`,breadcrumbs:p(`/recipes/chart-area`),children:(0,y.jsx)(r,{presentation:`article`,label:`ChartAreaRecipe`,inspector:f(b),document:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(d,{title:`Минимальный chart`,description:`Одна серия, без stats и meta. data — массив точек, xKey — поле для оси X, series — массив с dataKey, label и signal.`,layout:`block`,code:`<ChartAreaRecipe
  title="Task Velocity"
  data={velocityWeeks}
  xKey="week"
  series={[
    { dataKey: "completed", label: "completed", signal: "ok" },
  ]}
/>`,children:(0,y.jsx)(u,{title:`Task Velocity`,data:m,xKey:`week`,series:g})}),(0,y.jsxs)(i,{children:[`ChartAreaRecipe — единственный канонический способ построить area-chart. Recipe собирает внутри ChartContainer, AreaChart, gradient defs, сетку, tooltip и легенду; потребитель передаёт только data, xKey и series. Прямой импорт recharts-обёрток в коде потребителя блокирует правило `,(0,y.jsx)(a,{children:`no-direct-recharts-wrapper-imports`}),`.`]}),(0,y.jsx)(o,{id:`usage`,label:`Использование`,children:(0,y.jsx)(t,{copyLabel:`Скопировать код: использование ChartAreaRecipe`,language:`tsx`,code:`import { ChartAreaRecipe } from "@chucky23/design-system/recipes/chart-area"

<ChartAreaRecipe
  title="Task Velocity"
  data={velocityWeeks}
  xKey="week"
  series={[{ dataKey: "completed", label: "completed", signal: "ok" }]}
/>`})}),(0,y.jsx)(o,{id:`signals`,label:`Сигналы`,children:(0,y.jsxs)(d,{title:`Closed enum signal`,description:`Пять значений для каждой series: "ok", "warn", "err", "info", "neutral". Цвет берётся из var(--signal-*) и не настраивается через className.`,layout:`stack`,code:`{/* ok */}
<ChartAreaRecipe ... series={[{ dataKey: "completed", label: "completed", signal: "ok" }]} />

{/* warn */}
<ChartAreaRecipe ... series={[{ dataKey: "completed", label: "completed", signal: "warn" }]} />

{/* err */}
<ChartAreaRecipe ... series={[{ dataKey: "completed", label: "completed", signal: "err" }]} />

{/* info */}
<ChartAreaRecipe ... series={[{ dataKey: "completed", label: "completed", signal: "info" }]} />

{/* neutral — для muted-foreground */}
<ChartAreaRecipe ... series={[{ dataKey: "completed", label: "completed", signal: "neutral" }]} />`,children:[(0,y.jsx)(u,{title:`Signal: ok`,data:m,xKey:`week`,series:[{dataKey:`completed`,label:`completed`,signal:`ok`}],size:`sm`}),(0,y.jsx)(u,{title:`Signal: warn`,data:m,xKey:`week`,series:[{dataKey:`completed`,label:`completed`,signal:`warn`}],size:`sm`}),(0,y.jsx)(u,{title:`Signal: err`,data:m,xKey:`week`,series:[{dataKey:`completed`,label:`completed`,signal:`err`}],size:`sm`}),(0,y.jsx)(u,{title:`Signal: info`,data:m,xKey:`week`,series:[{dataKey:`completed`,label:`completed`,signal:`info`}],size:`sm`})]})}),(0,y.jsx)(o,{id:`sizes`,label:`Размеры`,children:(0,y.jsxs)(d,{title:`Closed enum size`,description:`Три значения: "sm", "default" (высота 160px) и "lg". Высоту задают токены chart-height-*.`,layout:`stack`,code:`<ChartAreaRecipe ... size="sm" />
<ChartAreaRecipe ... size="default" />
<ChartAreaRecipe ... size="lg" />`,children:[(0,y.jsx)(u,{title:`size: sm`,data:m,xKey:`week`,series:g,size:`sm`}),(0,y.jsx)(u,{title:`size: default`,data:m,xKey:`week`,series:g,size:`default`}),(0,y.jsx)(u,{title:`size: lg`,data:m,xKey:`week`,series:g,size:`lg`})]})}),(0,y.jsx)(o,{id:`multi-series`,label:`Несколько серий`,children:(0,y.jsx)(d,{title:`До 5 series в одном графике`,description:`У каждой series свой dataKey, label и signal. Минимум 1, максимум 5; при нарушении в dev-режиме появится console.warn.`,layout:`block`,code:`<ChartAreaRecipe
  title="Velocity"
  data={velocityWeeks}
  xKey="week"
  series={[
    { dataKey: "completed", label: "completed", signal: "ok" },
    { dataKey: "created", label: "created", signal: "info" },
    { dataKey: "overdue", label: "overdue", signal: "err" },
  ]}
/>`,children:(0,y.jsx)(u,{title:`Task Velocity`,meta:`12w`,data:m,xKey:`week`,series:_})})}),(0,y.jsx)(o,{id:`stats`,label:`Статистика`,children:(0,y.jsx)(d,{title:`Footer-статистика`,description:`stats — массив пар label/value с необязательным signal. Пары разделяет вертикальная черта, числа рендерятся с data-numeric для tabular-nums.`,layout:`block`,code:`<ChartAreaRecipe
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
/>`,children:(0,y.jsx)(u,{title:`Task Velocity`,meta:`12w`,data:m,xKey:`week`,series:_,stats:[{label:`peak`,value:36,signal:`ok`},{label:`avg`,value:`26.2`},{label:`delta`,value:`+24`,signal:`ok`}]})})}),(0,y.jsx)(o,{id:`dashed`,label:`Пунктирная серия`,children:(0,y.jsx)(d,{title:`emphasis="dashed"`,description:`Пунктир означает прогноз, прошлое сравнение или неточные данные. emphasis: "solid" (по умолчанию) или "dashed". Толщина линии — 1px для dashed и 1.5px для solid.`,layout:`block`,code:`<ChartAreaRecipe
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
/>`,children:(0,y.jsx)(u,{title:`Velocity Forecast`,meta:`8w`,data:h,xKey:`week`,series:v,stats:[{label:`actual`,value:31,signal:`ok`},{label:`forecast`,value:36,signal:`info`}]})})}),(0,y.jsxs)(o,{id:`anti-patterns`,label:`Ошибки`,children:[(0,y.jsxs)(i,{children:[`Прямой доступ к recharts из кода потребителя блокирует правило no-direct-recharts-wrapper-imports. Примеры ниже показывают только код; график в составе дашборда — на странице `,(0,y.jsx)(c,{href:`/example-1`,children:`Example 1`}),`.`]}),(0,y.jsx)(t,{copyLabel:`Скопировать код: ошибка с прямым импортом recharts`,language:`tsx`,code:`{/* Ошибка: прямой импорт recharts вместо ChartAreaRecipe.
       Нарушает no-direct-recharts-wrapper-imports — блокируется ESLint. */}
import { AreaChart, Area, XAxis, YAxis } from "recharts"

<AreaChart data={data}>
  <Area dataKey="completed" stroke="#xxxxxx" fill="#xxxxxx" />
  <XAxis dataKey="week" />
</AreaChart>

{/* Ошибка: raw hex-цвет в series.
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

{/* Ошибка: больше 5 series в одном графике.
       Dev-warn: "series должен содержать от 1 до 5 элементов".
       Разнеси на отдельные графики или сгруппируй по категории. */}
<ChartAreaRecipe
  ...
  series={[s1, s2, s3, s4, s5, s6]}  // dev console.warn
/>`})]}),(0,y.jsxs)(o,{id:`api`,label:`API`,children:[(0,y.jsx)(l,{title:`ChartAreaRecipeProps`,props:[{name:`title`,type:`string`,defaultValue:`—`,description:`Заголовок карточки. Обязательный.`},{name:`meta`,type:`string`,defaultValue:`—`,description:`Необязательная подпись справа от title, например "12w".`},{name:`data`,type:`ReadonlyArray<Record<string, string | number>>`,defaultValue:`—`,description:`Точки графика: каждый объект — точка по X. Обязательный.`},{name:`xKey`,type:`string`,defaultValue:`—`,description:`Имя поля в data для оси X. Обязательный.`},{name:`series`,type:`ReadonlyArray<ChartAreaSeries>`,defaultValue:`—`,description:`Серии: минимум 1, максимум 5. См. ChartAreaSeries ниже.`},{name:`stats`,type:`ReadonlyArray<ChartAreaStat>`,defaultValue:`—`,description:`Footer-статистика. См. ChartAreaStat ниже.`},{name:`size`,type:`"sm" | "default" | "lg"`,defaultValue:`"default"`,description:`Высота графика через токены chart-height-*.`},{name:`id`,type:`string`,defaultValue:`useId()`,description:`ID для уникальности gradient defs. По умолчанию создаётся автоматически.`}]}),(0,y.jsxs)(s,{children:[`Для собственных графиков пакет также экспортирует низкоуровневые обёртки `,(0,y.jsx)(a,{children:`ChartTooltip`}),` и`,` `,(0,y.jsx)(a,{children:`ChartTooltipContent`}),`. В продуктовом интерфейсе предпочитай`,` `,(0,y.jsx)(a,{children:`ChartAreaRecipe`}),`, чтобы сохранить closed enum signal и единый контракт tooltip.`]}),(0,y.jsx)(l,{title:`ChartAreaSeries`,props:[{name:`dataKey`,type:`string`,defaultValue:`—`,description:`Имя поля в data, из которого берётся значение серии.`},{name:`label`,type:`string`,defaultValue:`—`,description:`Подпись в легенде.`},{name:`signal`,type:`"ok" | "warn" | "err" | "info" | "neutral"`,defaultValue:`—`,description:`Цвет серии (closed enum). Обязательный.`},{name:`emphasis`,type:`"solid" | "dashed"`,defaultValue:`"solid"`,description:`Стиль линии. "dashed" — для прогноза или прошлого сравнения.`}]}),(0,y.jsx)(l,{title:`ChartAreaStat`,props:[{name:`label`,type:`string`,defaultValue:`—`,description:`Метка в footer.`},{name:`value`,type:`string | number`,defaultValue:`—`,description:`Значение. Рендерится с data-numeric (tabular-nums).`},{name:`signal`,type:`"ok" | "warn" | "err" | "info"`,defaultValue:`—`,description:`Необязательный сигнальный цвет числа.`}]})]})]})})})}export{x as default};