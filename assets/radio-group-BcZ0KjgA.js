import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{Qr as t,Sr as n,Xr as r,Zr as i,j as a,kr as o,x as s}from"./chunk-FJ6G7XYZ-vkrr-AON.js";import{$ as c,Q as l,g as u}from"./docs-CTQgkcVe.js";import"./index-CylhoBOX.js";import"./workspace-B0gvzNJe.js";import{n as d,r as f,t as p}from"./docs-article-CV9v0E7s.js";var m=e(),h=[{id:`usage`,label:`Использование`},{id:`uncontrolled`,label:`Без контроля`},{id:`horizontal`,label:`Горизонтально`},{id:`disabled`,label:`Отключённые варианты`},{id:`error`,label:`Ошибка`},{id:`api`,label:`API`}];function g(){return(0,m.jsx)(a,{title:`Radio Group`,description:`Взаимоисключающий выбор одного значения из короткого списка. Нативные radio-кнопки с фирменным оформлением, согласованным с Checkbox.`,breadcrumbs:p(`/components/radio-group`),meta:d(`/components/radio-group`),children:(0,m.jsx)(s,{presentation:`article`,label:`Radio Group`,inspector:f(h),document:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(u,{title:`Controlled`,description:`Стандартный сценарий: value / onValueChange. Группа получает доступное имя через Label id, а подписи опций передаются детьми RadioGroupItem.`,code:`const [mode, setMode] = useState("none")

<Label id="closure-label">Режим закрытия</Label>
<RadioGroup
  value={mode}
  onValueChange={setMode}
  aria-labelledby="closure-label"
>
  <RadioGroupItem value="none" id="r-none">—</RadioGroupItem>
  <RadioGroupItem value="done" id="r-done">Закрыта</RadioGroupItem>
  <RadioGroupItem value="carry" id="r-carry">Перенос с остатком</RadioGroupItem>
</RadioGroup>`,children:(0,m.jsx)(c,{})}),(0,m.jsx)(n,{children:`RadioGroup объединяет нативные radio-кнопки общим именем и ролью radiogroup. Tab входит в группу, стрелки переключают доступные варианты, Space выбирает вариант в фокусе — этим управляет браузер. Потребитель задаёт доступное имя группы, value, onValueChange и список RadioGroupItem. Для 2–5 опций используй RadioGroup, а для более длинного списка — Select.`}),(0,m.jsx)(t,{id:`usage`,label:`Использование`,children:(0,m.jsx)(o,{copyLabel:`Скопировать код: использование RadioGroup`,language:`tsx`,code:`import { Label, RadioGroup, RadioGroupItem } from "@chucky23/design-system/react"

<Label id="closure-label">Режим закрытия</Label>
<RadioGroup value={mode} onValueChange={setMode} aria-labelledby="closure-label">
  <RadioGroupItem value="done">Закрыта</RadioGroupItem>
  <RadioGroupItem value="carry">Перенос с остатком</RadioGroupItem>
</RadioGroup>`})}),(0,m.jsxs)(t,{id:`uncontrolled`,label:`Без контроля`,children:[(0,m.jsx)(u,{title:`defaultValue`,description:`Uncontrolled-режим — начальное значение задаётся через defaultValue, дальше RadioGroup управляет состоянием сам.`,code:`<RadioGroup defaultValue="sev2" aria-label="Severity">
  <RadioGroupItem value="sev1" id="sev1">SEV-1 Critical</RadioGroupItem>
  <RadioGroupItem value="sev2" id="sev2">SEV-2 High</RadioGroupItem>
  <RadioGroupItem value="sev3" id="sev3">SEV-3 Medium</RadioGroupItem>
</RadioGroup>`,children:(0,m.jsxs)(r,{defaultValue:`sev2`,"aria-label":`Severity`,children:[(0,m.jsx)(i,{value:`sev1`,id:`sev1-demo`,children:`SEV-1 Critical`}),(0,m.jsx)(i,{value:`sev2`,id:`sev2-demo`,children:`SEV-2 High`}),(0,m.jsx)(i,{value:`sev3`,id:`sev3-demo`,children:`SEV-3 Medium`})]})}),(0,m.jsx)(u,{title:`Пояснение к варианту`,description:`description выводит приглушённый текст 13px под подписью и связывает его с полем через aria-describedby.`,code:`<RadioGroupItem value="carry" description="Задача переходит в следующий спринт">Перенос с остатком</RadioGroupItem>`,children:(0,m.jsxs)(r,{defaultValue:`carry`,"aria-label":`Режим закрытия`,children:[(0,m.jsx)(i,{value:`done`,id:`d-done`,description:`Остаток работы списывается`,children:`Закрыта`}),(0,m.jsx)(i,{value:`carry`,id:`d-carry`,description:`Задача переходит в следующий спринт`,children:`Перенос с остатком`})]})})]}),(0,m.jsx)(t,{id:`horizontal`,label:`Горизонтально`,children:(0,m.jsx)(u,{title:`Horizontal layout`,description:`Проп orientation со значением horizontal ставит варианты в строку с переносом; по умолчанию группа идёт столбцом.`,code:`<RadioGroup
  defaultValue="week"
  aria-label="Period"
  orientation="horizontal"
>
  <RadioGroupItem value="day" id="p-day">Day</RadioGroupItem>
  <RadioGroupItem value="week" id="p-week">Week</RadioGroupItem>
  <RadioGroupItem value="month" id="p-month">Month</RadioGroupItem>
</RadioGroup>`,children:(0,m.jsxs)(r,{defaultValue:`week`,"aria-label":`Period`,orientation:`horizontal`,children:[(0,m.jsx)(i,{value:`day`,id:`p-day`,children:`Day`}),(0,m.jsx)(i,{value:`week`,id:`p-week`,children:`Week`}),(0,m.jsx)(i,{value:`month`,id:`p-month`,children:`Month`})]})})}),(0,m.jsx)(t,{id:`disabled`,label:`Отключённые варианты`,children:(0,m.jsxs)(u,{title:`Disabled`,description:`Disabled на отдельном item и на всей группе. Focus-ring и opacity следуют тем же токенам, что у Checkbox.`,code:`<RadioGroup defaultValue="active" aria-label="State">
  <RadioGroupItem value="active" id="s-active">Active</RadioGroupItem>
  <RadioGroupItem value="archived" id="s-archived" disabled>Archived (disabled)</RadioGroupItem>
</RadioGroup>

<RadioGroup defaultValue="a" disabled aria-label="Locked group">
  <RadioGroupItem value="a" id="g-a">Option A</RadioGroupItem>
  <RadioGroupItem value="b" id="g-b">Option B</RadioGroupItem>
</RadioGroup>`,children:[(0,m.jsxs)(r,{defaultValue:`active`,"aria-label":`State`,children:[(0,m.jsx)(i,{value:`active`,id:`s-active`,children:`Active`}),(0,m.jsx)(i,{value:`archived`,id:`s-archived`,disabled:!0,children:`Archived (disabled)`})]}),(0,m.jsxs)(r,{defaultValue:`a`,disabled:!0,"aria-label":`Locked group`,children:[(0,m.jsx)(i,{value:`a`,id:`g-a`,children:`Option A`}),(0,m.jsx)(i,{value:`b`,id:`g-b`,children:`Option B`})]})]})}),(0,m.jsx)(t,{id:`error`,label:`Ошибка`,children:(0,m.jsx)(u,{title:`aria-invalid`,description:`Error-state — тот же красный ring, что у Checkbox и Input. Триггерится через aria-invalid на item.`,code:`<RadioGroup aria-label="Invalid choice">
  <RadioGroupItem value="a" id="e-a" aria-invalid>Option A</RadioGroupItem>
  <RadioGroupItem value="b" id="e-b" aria-invalid>Option B</RadioGroupItem>
</RadioGroup>`,children:(0,m.jsxs)(r,{"aria-label":`Invalid choice`,children:[(0,m.jsx)(i,{value:`a`,id:`e-a`,"aria-invalid":!0,children:`Option A`}),(0,m.jsx)(i,{value:`b`,id:`e-b`,"aria-invalid":!0,children:`Option B`})]})})}),(0,m.jsxs)(t,{id:`api`,label:`API`,children:[(0,m.jsx)(l,{title:`RadioGroup Props`,props:[{name:`orientation`,type:`"vertical" | "horizontal"`,defaultValue:`"vertical"`,description:`Варианты столбцом или в строку с переносом.`},{name:`value`,type:`string`,defaultValue:`—`,description:`Controlled-значение выбранного item`},{name:`defaultValue`,type:`string`,defaultValue:`—`,description:`Начальное значение для uncontrolled-режима`},{name:`onValueChange`,type:`(value, details) => void`,defaultValue:`—`,description:`Callback при смене значения`},{name:`disabled`,type:`boolean`,defaultValue:`false`,description:`Отключает все item в группе`},{name:`name`,type:`string`,defaultValue:`—`,description:`Имя поля при отправке формы`},{name:`required`,type:`boolean`,defaultValue:`false`,description:`Обязательный выбор перед submit`}]}),(0,m.jsx)(l,{title:`RadioGroupItem Props`,props:[{name:`value`,type:`string`,defaultValue:`—`,description:`Уникальное значение item внутри группы`},{name:`variant`,type:`"default" | "outline"`,defaultValue:`"default"`,description:`Визуальный стиль фона`},{name:`size`,type:`"default" | "sm" | "lg"`,defaultValue:`"default"`,description:`Размер круга: 14/16/20 px`},{name:`description`,type:`ReactNode`,defaultValue:`—`,description:`Приглушённое пояснение 13px под подписью, связано с полем через aria-describedby`},{name:`disabled`,type:`boolean`,defaultValue:`false`,description:`Отключает только этот item`},{name:`id`,type:`string`,defaultValue:`—`,description:`Связка с Label через htmlFor`}]})]})]})})})}export{g as default};