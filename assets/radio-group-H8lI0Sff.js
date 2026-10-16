import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{Gn as t,Rn as n,br as r,m as i,o as a,vr as o,yr as s}from"./chunk-ZW5N5E5H-ScFucA-b.js";import{M as c,j as l,r as u}from"./docs-Ck_i9UNX.js";import"./index-DiNellwx.js";import"./workspace-BwWB7lTa.js";import{n as d,t as f}from"./docs-article-BUNGnjgF.js";var p=e(),m=[{id:`usage`,label:`Использование`},{id:`uncontrolled`,label:`Без контроля`},{id:`horizontal`,label:`Горизонтально`},{id:`disabled`,label:`Отключённые варианты`},{id:`error`,label:`Ошибка`},{id:`api`,label:`API`}];function h(){return(0,p.jsx)(i,{title:`Radio Group`,description:`Взаимоисключающий выбор одного значения из короткого списка. Нативные radio-кнопки с фирменным оформлением, согласованным с Checkbox.`,breadcrumbs:f(`/components/radio-group`),children:(0,p.jsx)(a,{presentation:`article`,label:`Radio Group`,inspector:d(m),document:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(u,{title:`Controlled`,description:`Стандартный сценарий: value / onValueChange. Группа получает доступное имя через Label id, а подписи опций передаются детьми RadioGroupItem.`,code:`const [mode, setMode] = useState("none")

<Label id="closure-label">Режим закрытия</Label>
<RadioGroup
  value={mode}
  onValueChange={setMode}
  aria-labelledby="closure-label"
>
  <RadioGroupItem value="none" id="r-none">—</RadioGroupItem>
  <RadioGroupItem value="done" id="r-done">закрыта</RadioGroupItem>
  <RadioGroupItem value="carry" id="r-carry">перенос с остатком</RadioGroupItem>
</RadioGroup>`,children:(0,p.jsx)(c,{})}),(0,p.jsx)(n,{children:`RadioGroup объединяет нативные radio-кнопки общим именем и ролью radiogroup. Tab входит в группу, стрелки переключают доступные варианты, Space выбирает вариант в фокусе — этим управляет браузер. Потребитель задаёт доступное имя группы, value, onValueChange и список RadioGroupItem. Для 2–5 опций используй RadioGroup, а для более длинного списка — Select.`}),(0,p.jsx)(r,{id:`usage`,label:`Использование`,children:(0,p.jsx)(t,{copyLabel:`Скопировать код: использование RadioGroup`,language:`tsx`,code:`import { Label, RadioGroup, RadioGroupItem } from "@chucky23/design-system/react"

<Label id="closure-label">Режим закрытия</Label>
<RadioGroup value={mode} onValueChange={setMode} aria-labelledby="closure-label">
  <RadioGroupItem value="done">закрыта</RadioGroupItem>
  <RadioGroupItem value="carry">перенос с остатком</RadioGroupItem>
</RadioGroup>`})}),(0,p.jsx)(r,{id:`uncontrolled`,label:`Без контроля`,children:(0,p.jsx)(u,{title:`defaultValue`,description:`Uncontrolled-режим — начальное значение задаётся через defaultValue, дальше RadioGroup управляет состоянием сам.`,code:`<RadioGroup defaultValue="sev2" aria-label="Severity">
  <RadioGroupItem value="sev1" id="sev1">SEV-1 Critical</RadioGroupItem>
  <RadioGroupItem value="sev2" id="sev2">SEV-2 High</RadioGroupItem>
  <RadioGroupItem value="sev3" id="sev3">SEV-3 Medium</RadioGroupItem>
</RadioGroup>`,children:(0,p.jsxs)(o,{defaultValue:`sev2`,"aria-label":`Severity`,children:[(0,p.jsx)(s,{value:`sev1`,id:`sev1-demo`,children:`SEV-1 Critical`}),(0,p.jsx)(s,{value:`sev2`,id:`sev2-demo`,children:`SEV-2 High`}),(0,p.jsx)(s,{value:`sev3`,id:`sev3-demo`,children:`SEV-3 Medium`})]})})}),(0,p.jsx)(r,{id:`horizontal`,label:`Горизонтально`,children:(0,p.jsx)(u,{title:`Horizontal layout`,description:`Проп orientation со значением horizontal ставит варианты в строку с переносом; по умолчанию группа идёт столбцом.`,code:`<RadioGroup
  defaultValue="week"
  aria-label="Period"
  orientation="horizontal"
>
  <RadioGroupItem value="day" id="p-day">Day</RadioGroupItem>
  <RadioGroupItem value="week" id="p-week">Week</RadioGroupItem>
  <RadioGroupItem value="month" id="p-month">Month</RadioGroupItem>
</RadioGroup>`,children:(0,p.jsxs)(o,{defaultValue:`week`,"aria-label":`Period`,orientation:`horizontal`,children:[(0,p.jsx)(s,{value:`day`,id:`p-day`,children:`Day`}),(0,p.jsx)(s,{value:`week`,id:`p-week`,children:`Week`}),(0,p.jsx)(s,{value:`month`,id:`p-month`,children:`Month`})]})})}),(0,p.jsx)(r,{id:`disabled`,label:`Отключённые варианты`,children:(0,p.jsxs)(u,{title:`Disabled`,description:`Disabled на отдельном item и на всей группе. Focus-ring и opacity следуют тем же токенам, что у Checkbox.`,code:`<RadioGroup defaultValue="active" aria-label="State">
  <RadioGroupItem value="active" id="s-active">Active</RadioGroupItem>
  <RadioGroupItem value="archived" id="s-archived" disabled>Archived (disabled)</RadioGroupItem>
</RadioGroup>

<RadioGroup defaultValue="a" disabled aria-label="Locked group">
  <RadioGroupItem value="a" id="g-a">Option A</RadioGroupItem>
  <RadioGroupItem value="b" id="g-b">Option B</RadioGroupItem>
</RadioGroup>`,children:[(0,p.jsxs)(o,{defaultValue:`active`,"aria-label":`State`,children:[(0,p.jsx)(s,{value:`active`,id:`s-active`,children:`Active`}),(0,p.jsx)(s,{value:`archived`,id:`s-archived`,disabled:!0,children:`Archived (disabled)`})]}),(0,p.jsxs)(o,{defaultValue:`a`,disabled:!0,"aria-label":`Locked group`,children:[(0,p.jsx)(s,{value:`a`,id:`g-a`,children:`Option A`}),(0,p.jsx)(s,{value:`b`,id:`g-b`,children:`Option B`})]})]})}),(0,p.jsx)(r,{id:`error`,label:`Ошибка`,children:(0,p.jsx)(u,{title:`aria-invalid`,description:`Error-state — тот же красный ring, что у Checkbox и Input. Триггерится через aria-invalid на item.`,code:`<RadioGroup aria-label="Invalid choice">
  <RadioGroupItem value="a" id="e-a" aria-invalid>Option A</RadioGroupItem>
  <RadioGroupItem value="b" id="e-b" aria-invalid>Option B</RadioGroupItem>
</RadioGroup>`,children:(0,p.jsxs)(o,{"aria-label":`Invalid choice`,children:[(0,p.jsx)(s,{value:`a`,id:`e-a`,"aria-invalid":!0,children:`Option A`}),(0,p.jsx)(s,{value:`b`,id:`e-b`,"aria-invalid":!0,children:`Option B`})]})})}),(0,p.jsxs)(r,{id:`api`,label:`API`,children:[(0,p.jsx)(l,{title:`RadioGroup Props`,props:[{name:`orientation`,type:`"vertical" | "horizontal"`,defaultValue:`"vertical"`,description:`Варианты столбцом или в строку с переносом.`},{name:`value`,type:`string`,defaultValue:`—`,description:`Controlled-значение выбранного item`},{name:`defaultValue`,type:`string`,defaultValue:`—`,description:`Начальное значение для uncontrolled-режима`},{name:`onValueChange`,type:`(value, details) => void`,defaultValue:`—`,description:`Callback при смене значения`},{name:`disabled`,type:`boolean`,defaultValue:`false`,description:`Отключает все item в группе`},{name:`name`,type:`string`,defaultValue:`—`,description:`Имя поля при отправке формы`},{name:`required`,type:`boolean`,defaultValue:`false`,description:`Обязательный выбор перед submit`}]}),(0,p.jsx)(l,{title:`RadioGroupItem Props`,props:[{name:`value`,type:`string`,defaultValue:`—`,description:`Уникальное значение item внутри группы`},{name:`variant`,type:`"default" | "outline"`,defaultValue:`"default"`,description:`Визуальный стиль фона`},{name:`size`,type:`"default" | "sm" | "lg"`,defaultValue:`"default"`,description:`Размер круга: 14/16/20 px`},{name:`disabled`,type:`boolean`,defaultValue:`false`,description:`Отключает только этот item`},{name:`id`,type:`string`,defaultValue:`—`,description:`Связка с Label через htmlFor`}]})]})]})})})}export{h as default};