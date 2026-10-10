import{$ as e,$n as t,Hn as n,Mo as r,Qn as i,Zn as a}from"./chunk-ZW5N5E5H-C8fDcLjq.js";import{H as o,M as s,U as c,r as l,s as u}from"./docs-CtJuZ0WF.js";import"./index-D3G-KnJA.js";var d=r();function f(){return(0,d.jsxs)(u,{className:`flex flex-col gap-6`,children:[(0,d.jsx)(n,{title:`Radio Group`,description:`Взаимоисключающий выбор одного значения из короткого списка. Нативные radio-кнопки с фирменным оформлением, согласованным с Checkbox.`}),(0,d.jsx)(s,{className:`max-w-prose`,"data-body":!0,children:`RadioGroup объединяет нативные radio-кнопки общим именем и ролью radiogroup. Tab входит в группу, стрелки переключают доступные варианты, Space выбирает вариант в фокусе — этим управляет браузер. Потребитель задаёт доступное имя группы, value, onValueChange и список RadioGroupItem. Для 2–5 опций используй RadioGroup, а для более длинного списка — Select.`}),(0,d.jsx)(t,{label:`basic`,children:(0,d.jsx)(l,{title:`Controlled`,description:`Стандартный сценарий: value / onValueChange. Группа получает доступное имя через Label id, а подписи опций передаются детьми RadioGroupItem.`,code:`const [mode, setMode] = useState("none")

<Label id="closure-label">Режим закрытия</Label>
<RadioGroup
  value={mode}
  onValueChange={setMode}
  aria-labelledby="closure-label"
>
  <RadioGroupItem value="none" id="r-none">—</RadioGroupItem>
  <RadioGroupItem value="done" id="r-done">закрыта</RadioGroupItem>
  <RadioGroupItem value="carry" id="r-carry">перенос с остатком</RadioGroupItem>
</RadioGroup>`,children:(0,d.jsx)(c,{})})}),(0,d.jsx)(t,{label:`uncontrolled`,children:(0,d.jsx)(l,{title:`defaultValue`,description:`Uncontrolled-режим — начальное значение задаётся через defaultValue, дальше RadioGroup управляет состоянием сам.`,code:`<RadioGroup defaultValue="sev2">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="sev1" id="sev1" />
    <Label htmlFor="sev1">SEV-1</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="sev2" id="sev2" />
    <Label htmlFor="sev2">SEV-2</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="sev3" id="sev3" />
    <Label htmlFor="sev3">SEV-3</Label>
  </div>
</RadioGroup>`,children:(0,d.jsxs)(a,{defaultValue:`sev2`,children:[(0,d.jsxs)(u,{className:`flex items-center gap-2`,children:[(0,d.jsx)(i,{value:`sev1`,id:`sev1-demo`}),(0,d.jsx)(e,{htmlFor:`sev1-demo`,children:`SEV-1 Critical`})]}),(0,d.jsxs)(u,{className:`flex items-center gap-2`,children:[(0,d.jsx)(i,{value:`sev2`,id:`sev2-demo`}),(0,d.jsx)(e,{htmlFor:`sev2-demo`,children:`SEV-2 High`})]}),(0,d.jsxs)(u,{className:`flex items-center gap-2`,children:[(0,d.jsx)(i,{value:`sev3`,id:`sev3-demo`}),(0,d.jsx)(e,{htmlFor:`sev3-demo`,children:`SEV-3 Medium`})]})]})})}),(0,d.jsx)(t,{label:`horizontal`,children:(0,d.jsx)(l,{title:`Horizontal layout`,description:`RadioGroup использует display: grid. Для горизонтального расположения переопредели grid-flow.`,code:`<RadioGroup
  defaultValue="week"
  className="grid-flow-col auto-cols-max gap-4"
>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="day" id="p-day" />
    <Label htmlFor="p-day">Day</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="week" id="p-week" />
    <Label htmlFor="p-week">Week</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="month" id="p-month" />
    <Label htmlFor="p-month">Month</Label>
  </div>
</RadioGroup>`,children:(0,d.jsxs)(a,{defaultValue:`week`,className:`grid-flow-col auto-cols-max gap-4`,children:[(0,d.jsxs)(u,{className:`flex items-center gap-2`,children:[(0,d.jsx)(i,{value:`day`,id:`p-day`}),(0,d.jsx)(e,{htmlFor:`p-day`,children:`Day`})]}),(0,d.jsxs)(u,{className:`flex items-center gap-2`,children:[(0,d.jsx)(i,{value:`week`,id:`p-week`}),(0,d.jsx)(e,{htmlFor:`p-week`,children:`Week`})]}),(0,d.jsxs)(u,{className:`flex items-center gap-2`,children:[(0,d.jsx)(i,{value:`month`,id:`p-month`}),(0,d.jsx)(e,{htmlFor:`p-month`,children:`Month`})]})]})})}),(0,d.jsx)(t,{label:`disabled`,children:(0,d.jsx)(l,{title:`Disabled`,description:`Disabled на отдельном item и на всей группе. Focus-ring и opacity следуют тем же токенам, что у Checkbox.`,code:`<RadioGroup defaultValue="active">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="active" id="s-active" />
    <Label htmlFor="s-active">Active</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="archived" id="s-archived" disabled />
    <Label htmlFor="s-archived">Archived (disabled)</Label>
  </div>
</RadioGroup>

<RadioGroup defaultValue="a" disabled>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="a" id="g-a" />
    <Label htmlFor="g-a">Option A</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="b" id="g-b" />
    <Label htmlFor="g-b">Option B</Label>
  </div>
</RadioGroup>`,children:(0,d.jsxs)(u,{className:`flex flex-col gap-6`,children:[(0,d.jsxs)(a,{defaultValue:`active`,children:[(0,d.jsxs)(u,{className:`flex items-center gap-2`,children:[(0,d.jsx)(i,{value:`active`,id:`s-active`}),(0,d.jsx)(e,{htmlFor:`s-active`,children:`Active`})]}),(0,d.jsxs)(u,{className:`flex items-center gap-2`,children:[(0,d.jsx)(i,{value:`archived`,id:`s-archived`,disabled:!0}),(0,d.jsx)(e,{htmlFor:`s-archived`,children:`Archived (disabled)`})]})]}),(0,d.jsxs)(a,{defaultValue:`a`,disabled:!0,children:[(0,d.jsxs)(u,{className:`flex items-center gap-2`,children:[(0,d.jsx)(i,{value:`a`,id:`g-a`}),(0,d.jsx)(e,{htmlFor:`g-a`,children:`Option A`})]}),(0,d.jsxs)(u,{className:`flex items-center gap-2`,children:[(0,d.jsx)(i,{value:`b`,id:`g-b`}),(0,d.jsx)(e,{htmlFor:`g-b`,children:`Option B`})]})]})]})})}),(0,d.jsx)(t,{label:`error state`,children:(0,d.jsx)(l,{title:`aria-invalid`,description:`Error-state — тот же красный ring, что у Checkbox и Input. Триггерится через aria-invalid на item.`,code:`<RadioGroup>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="a" id="e-a" aria-invalid />
    <Label htmlFor="e-a">Option A</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="b" id="e-b" aria-invalid />
    <Label htmlFor="e-b">Option B</Label>
  </div>
</RadioGroup>`,children:(0,d.jsxs)(a,{children:[(0,d.jsxs)(u,{className:`flex items-center gap-2`,children:[(0,d.jsx)(i,{value:`a`,id:`e-a`,"aria-invalid":!0}),(0,d.jsx)(e,{htmlFor:`e-a`,children:`Option A`})]}),(0,d.jsxs)(u,{className:`flex items-center gap-2`,children:[(0,d.jsx)(i,{value:`b`,id:`e-b`,"aria-invalid":!0}),(0,d.jsx)(e,{htmlFor:`e-b`,children:`Option B`})]})]})})}),(0,d.jsxs)(t,{label:`api reference`,children:[(0,d.jsx)(o,{title:`RadioGroup Props`,props:[{name:`value`,type:`string`,defaultValue:`--`,description:`Controlled-значение выбранного item`},{name:`defaultValue`,type:`string`,defaultValue:`--`,description:`Начальное значение для uncontrolled-режима`},{name:`onValueChange`,type:`(value, details) => void`,defaultValue:`--`,description:`Callback при смене значения`},{name:`disabled`,type:`boolean`,defaultValue:`false`,description:`Отключает все item в группе`},{name:`name`,type:`string`,defaultValue:`--`,description:`Имя поля при отправке формы`},{name:`required`,type:`boolean`,defaultValue:`false`,description:`Обязательный выбор перед submit`}]}),(0,d.jsx)(o,{title:`RadioGroupItem Props`,props:[{name:`value`,type:`string`,defaultValue:`--`,description:`Уникальное значение item внутри группы`},{name:`variant`,type:`"default" | "outline"`,defaultValue:`"default"`,description:`Визуальный стиль фона`},{name:`size`,type:`"default" | "sm" | "lg"`,defaultValue:`"default"`,description:`Размер круга: 14/16/20 px`},{name:`disabled`,type:`boolean`,defaultValue:`false`,description:`Отключает только этот item`},{name:`id`,type:`string`,defaultValue:`--`,description:`Связка с Label через htmlFor`}]})]})]})}export{f as default};