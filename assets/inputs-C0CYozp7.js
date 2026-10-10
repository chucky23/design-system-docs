import{$ as e,$n as t,C as n,Hn as r,Ki as i,Mo as a,Q as o,Qn as s,Zn as c,fi as l,jo as u,pr as d,u as f}from"./chunk-ZW5N5E5H-C8fDcLjq.js";import{H as p,M as m,f as h,r as g,s as _}from"./docs-CtJuZ0WF.js";import"./index-D3G-KnJA.js";import"./patterns-B6WWsS5X.js";import"./recipes-AK0s17ns.js";var v=a(),y=[{value:`sev1`,label:`SEV-1 Critical`},{value:`sev2`,label:`SEV-2 High`},{value:`sev3`,label:`SEV-3 Medium`},{value:`sev4`,label:`SEV-4 Low`,disabled:!0}],b=[{value:`prod`,label:`Production`},{value:`stage`,label:`Staging`},{value:`dev`,label:`Development`,disabled:!0}],x=[{value:`network`,label:`Network instability`},{value:`deploy`,label:`Deploy regression`},{value:`capacity`,label:`Capacity limit`}],S=[{label:`Operations`,options:[{value:`on-call`,label:`On-call engineer`},{value:`incident`,label:`Incident commander`}]},{label:`Product`,options:[{value:`support`,label:`Support lead`},{value:`pm`,label:`Product manager`,disabled:!0}]}];function C(){return(0,v.jsxs)(_,{className:`flex flex-col gap-6`,children:[(0,v.jsx)(r,{title:`Inputs & Forms`,description:`Input, Textarea, Select, Checkbox, RadioGroup, Label — примитивы форм. Бордер trace-strong, radius 3px, единые hover/focus-состояния через theme.css.`}),(0,v.jsx)(m,{className:`max-w-prose`,"data-body":!0,children:`Поля форм читаются как плотные рабочие контролы: тонкая граница вместо заливки, аккуратный focus-ring цвета signal-ok и общий state-контракт. Native-поля связываются с Label через htmlFor. Checkbox получает одну подпись: children или внешний Label для Checkbox без children. Select использует видимый Label с id и ariaLabelledBy.`}),(0,v.jsx)(t,{label:`release state evidence`,children:(0,v.jsx)(g,{title:`Release evidence состояний`,description:`Open Design capture проверяет эти поля в первом viewport: focus, disabled, error и success с видимой сигнальной рамкой.`,code:`<Input placeholder="Фокус" />
<Input disabled placeholder="Отключено" />
<Input aria-label="Ошибка SLA" signal="err" aria-invalid="true" defaultValue="Ошибка: SLA breached" />
<Input aria-label="Успешный ACK" signal="ok" defaultValue="ACK-2026" />`,children:(0,v.jsxs)(_,{surface:`card`,"data-docs-surface-example":``,className:`flex w-full flex-col gap-3`,children:[(0,v.jsx)(l,{"data-release-state":`input-focus`,placeholder:`Фокус`}),(0,v.jsx)(l,{"data-release-state":`input-disabled`,disabled:!0,placeholder:`Отключено`}),(0,v.jsx)(l,{"aria-label":`Ошибка SLA`,"data-release-state":`input-error`,signal:`err`,"aria-invalid":`true`,defaultValue:`Ошибка: SLA breached`}),(0,v.jsx)(l,{"aria-label":`Успешный ACK`,"data-release-state":`input-success`,signal:`ok`,defaultValue:`ACK-2026`})]})})}),(0,v.jsx)(t,{label:`input`,children:(0,v.jsx)(g,{title:`Text Input`,description:`Default, placeholder, disabled states. Border inset effect via trace-strong.`,code:`<Input placeholder="Search incidents..." />
<Input aria-label="Ключ инцидента" defaultValue="INC-4012" />
<Input disabled placeholder="Disabled input" />`,children:(0,v.jsxs)(_,{className:`flex w-full flex-col gap-3`,children:[(0,v.jsx)(l,{placeholder:`Search incidents...`}),(0,v.jsx)(l,{"aria-label":`Ключ инцидента`,defaultValue:`INC-4012`}),(0,v.jsx)(l,{"aria-label":`Успешный ACK`,signal:`ok`,defaultValue:`ACK-2026`}),(0,v.jsx)(l,{disabled:!0,placeholder:`Disabled input`})]})})}),(0,v.jsx)(t,{label:`input + label`,children:(0,v.jsx)(g,{title:`Labeled Input`,description:`Label — обязателен для каждого поля. htmlFor связывает label и input для accessibility.`,code:`<div className="grid gap-2">
  <Label htmlFor="service">Service Name</Label>
  <Input id="service" placeholder="api-gateway" />
</div>

<div className="grid gap-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="ops@example.com" />
</div>`,children:(0,v.jsxs)(_,{className:`flex w-full flex-col gap-4`,children:[(0,v.jsxs)(_,{className:`grid gap-2`,children:[(0,v.jsx)(e,{htmlFor:`service-demo`,children:`Service Name`}),(0,v.jsx)(l,{id:`service-demo`,placeholder:`api-gateway`})]}),(0,v.jsxs)(_,{className:`grid gap-2`,children:[(0,v.jsx)(e,{htmlFor:`email-demo`,children:`Email`}),(0,v.jsx)(l,{id:`email-demo`,type:`email`,placeholder:`ops@example.com`})]})]})})}),(0,v.jsx)(t,{label:`textarea`,children:(0,v.jsx)(g,{title:`Textarea`,description:`Многострочное поле использует тот же Terminal hybrid bridge, что и Input.`,code:`<Label htmlFor="incident-summary">Описание инцидента</Label>
<Textarea
  id="incident-summary"
  placeholder="Что произошло и как это влияет на пользователей"
  rows={4}
/>

<Label htmlFor="incident-notes">Условия воспроизведения</Label>
<Textarea
  id="incident-notes"
  signal="warn"
  autoSize={{ minRows: 3, maxRows: 6 }}
  placeholder="Добавь условия воспроизведения"
/>`,children:(0,v.jsxs)(_,{className:`flex w-full flex-col gap-3`,children:[(0,v.jsx)(e,{htmlFor:`incident-summary-demo`,children:`Описание инцидента`}),(0,v.jsx)(d,{id:`incident-summary-demo`,placeholder:`Что произошло и как это влияет на пользователей`,rows:4}),(0,v.jsx)(e,{htmlFor:`incident-notes-demo`,children:`Условия воспроизведения`}),(0,v.jsx)(d,{id:`incident-notes-demo`,signal:`warn`,autoSize:{minRows:3,maxRows:6},placeholder:`Добавь условия воспроизведения`})]})})}),(0,v.jsxs)(t,{label:`select`,children:[(0,v.jsx)(g,{title:`Select`,description:`Canonical options API для ordinary choice fields. Для 6+ опций — Select. Для 2-5 — ToggleGroup.`,code:`const [severity, setSeverity] = React.useState("sev2")

<Label id="severity-select-label">Controlled severity</Label>
<Select
  ariaLabelledBy="severity-select-label"
  value={severity}
  onValueChange={setSeverity}
  placeholder="Severity"
  options={[
    { value: "sev1", label: "SEV-1 Critical" },
    { value: "sev2", label: "SEV-2 High" },
    { value: "sev3", label: "SEV-3 Medium" },
    { value: "sev4", label: "SEV-4 Low", disabled: true },
  ]}
/>

<Label id="environment-select-label">Uncontrolled environment</Label>
<Select
  ariaLabelledBy="environment-select-label"
  defaultValue="prod"
  options={[
    { value: "prod", label: "Production" },
    { value: "stage", label: "Staging" },
    { value: "dev", label: "Development", disabled: true },
  ]}
/>

<Label id="escalation-select-label">Invalid signal</Label>
<Select
  ariaLabelledBy="escalation-select-label"
  invalid
  signal="err"
  placeholder="Escalation reason"
  options={[
    { value: "network", label: "Network instability" },
    { value: "deploy", label: "Deploy regression" },
  ]}
/>

<Label id="owner-select-label">Grouped owner</Label>
<Select
  ariaLabelledBy="owner-select-label"
  placeholder="Owner"
  options={[
    {
      label: "Operations",
      options: [{ value: "on-call", label: "On-call engineer" }],
    },
  ]}
/>`,children:(0,v.jsxs)(_,{className:`flex w-full flex-col gap-4`,children:[(0,v.jsx)(h,{}),(0,v.jsxs)(_,{className:`grid gap-2`,children:[(0,v.jsx)(e,{id:`environment-select-label`,children:`Uncontrolled environment`}),(0,v.jsx)(n,{defaultValue:`prod`,options:b,ariaLabelledBy:`environment-select-label`,"data-select-example":`default-value`})]}),(0,v.jsxs)(_,{className:`grid gap-2`,children:[(0,v.jsx)(e,{id:`disabled-select-label`,children:`Disabled select`}),(0,v.jsx)(n,{disabled:!0,placeholder:`Locked while syncing`,options:b,ariaLabelledBy:`disabled-select-label`,"data-select-example":`disabled-root`})]}),(0,v.jsxs)(_,{className:`grid gap-2`,children:[(0,v.jsx)(e,{id:`escalation-select-label`,children:`Invalid signal`}),(0,v.jsx)(n,{invalid:!0,signal:`err`,placeholder:`Escalation reason`,options:x,ariaLabelledBy:`escalation-select-label`,"data-select-example":`invalid-signal`})]}),(0,v.jsxs)(_,{className:`grid gap-2`,children:[(0,v.jsx)(e,{id:`owner-select-label`,children:`Grouped owner`}),(0,v.jsx)(n,{placeholder:`Owner`,options:S,ariaLabelledBy:`owner-select-label`,"data-select-example":`grouped`})]})]})}),(0,v.jsxs)(m,{className:`max-w-prose`,"data-body":!0,children:[`ariaDescribedBy связывает подсказку и ошибку с combobox; ariaRequired обозначает обязательное поле. Compatibility SelectTrigger также передаёт aria-describedby, aria-required и aria-invalid; явный invalid на Select имеет приоритет. Проверяй реальное доступное описание поля. Старый compound API (`,`<SelectTrigger />`,`, `,`<SelectContent />`,`,`,`<SelectItem />`,`) остаётся compatibility layer для существующего кода, но новые примеры и миграции должны использовать canonical`,` options`,` API.`]}),(0,v.jsx)(m,{className:`max-w-prose`,"data-body":!0,children:`For workflow status transitions, use StatusSelectPattern. Generic Select is for ordinary choice fields and must not replace async status semantics.`})]}),(0,v.jsx)(t,{label:`checkbox`,children:(0,v.jsx)(g,{title:`Checkbox`,description:`Одна подпись: children или внешний Label для Checkbox без children. Space и клик по подписи переключают значение.`,code:`<Checkbox defaultChecked>Auto-resolve after 30m</Checkbox>
<Checkbox disabled>Disabled option</Checkbox>
<Checkbox disabled defaultChecked>Disabled checked option</Checkbox>
<Checkbox indeterminate>All services</Checkbox>

<div className="flex items-center gap-2">
  <Checkbox id="notify" />
  <Label htmlFor="notify">Notify on-call team</Label>
</div>

<div className="flex items-center gap-2">
  <Checkbox id="terms" aria-invalid="true" aria-describedby="terms-hint terms-error" />
  <Label htmlFor="terms">Accept terms</Label>
</div>
<p id="terms-hint">Required to save</p>
<p id="terms-error">Consent is required</p>`,children:(0,v.jsxs)(_,{className:`flex w-full flex-col gap-3`,children:[(0,v.jsxs)(_,{className:`flex items-center gap-2`,children:[(0,v.jsx)(u,{id:`notify-demo`}),(0,v.jsx)(e,{htmlFor:`notify-demo`,children:`Notify on-call team`})]}),(0,v.jsx)(u,{id:`auto-demo`,defaultChecked:!0,children:`Auto-resolve after 30m`}),(0,v.jsx)(u,{id:`disabled-demo`,disabled:!0,children:`Disabled option`}),(0,v.jsx)(u,{id:`disabled-checked-demo`,disabled:!0,defaultChecked:!0,children:`Disabled checked option`}),(0,v.jsx)(u,{id:`mixed-demo`,indeterminate:!0,children:`All services`}),(0,v.jsxs)(_,{className:`flex flex-col gap-2`,children:[(0,v.jsxs)(_,{className:`flex items-center gap-2`,children:[(0,v.jsx)(u,{id:`terms-demo`,"aria-invalid":`true`,"aria-describedby":`terms-hint-demo terms-error-demo`}),(0,v.jsx)(e,{htmlFor:`terms-demo`,children:`Accept terms`})]}),(0,v.jsx)(m,{id:`terms-hint-demo`,tone:`muted`,children:`Required to save`}),(0,v.jsx)(m,{id:`terms-error-demo`,signal:`err`,children:`Consent is required`})]})]})})}),(0,v.jsx)(t,{label:`radio group`,children:(0,v.jsx)(g,{title:`RadioGroup`,description:`Группа имеет своё имя, каждый вариант — одну подпись: children или внешний Label. Стрелки выбирают соседний вариант.`,code:`<Label id="priority-mode-label">Priority mode</Label>
<RadioGroup defaultValue="standard" aria-labelledby="priority-mode-label">
  <div className="flex items-center gap-2">
    <RadioGroupItem id="priority-standard" value="standard" />
    <Label htmlFor="priority-standard">Standard triage</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem id="priority-hotfix" value="hotfix" />
    <Label htmlFor="priority-hotfix">Hotfix lane</Label>
  </div>
</RadioGroup>`,children:(0,v.jsxs)(_,{className:`flex w-full flex-col gap-2`,children:[(0,v.jsx)(e,{id:`priority-mode-label`,children:`Priority mode`}),(0,v.jsxs)(c,{defaultValue:`standard`,"aria-labelledby":`priority-mode-label`,children:[(0,v.jsxs)(_,{className:`flex items-center gap-2`,children:[(0,v.jsx)(s,{id:`priority-standard-demo`,value:`standard`}),(0,v.jsx)(e,{htmlFor:`priority-standard-demo`,children:`Standard triage`})]}),(0,v.jsxs)(_,{className:`flex items-center gap-2`,children:[(0,v.jsx)(s,{id:`priority-hotfix-demo`,value:`hotfix`}),(0,v.jsx)(e,{htmlFor:`priority-hotfix-demo`,children:`Hotfix lane`})]})]})]})})}),(0,v.jsx)(t,{label:`form composition`,children:(0,v.jsx)(g,{title:`Incident Report Form`,description:`Композиция формы использует FieldRecipe, FormPattern и утверждённые примитивы.`,code:`<FormPattern
  onSubmit={(event) => event.preventDefault()}
  footer={<Button type="submit">Submit report</Button>}
>
  <FieldRecipe label="Incident title" htmlFor="incident-title">
    <Input id="incident-title" placeholder="API gateway timeout" />
  </FieldRecipe>
  <FieldRecipe label="Impact summary" htmlFor="impact-summary">
    <Textarea id="impact-summary" rows={3} />
  </FieldRecipe>
  <FieldRecipe label="Severity" labelId="incident-severity-label">
    <Select
      ariaLabelledBy="incident-severity-label"
      placeholder="Select severity"
      options={severityOptions}
    />
  </FieldRecipe>
  <RadioGroup defaultValue="standard" aria-label="Priority mode">
    <div className="flex items-center gap-2">
      <RadioGroupItem id="mode-standard" value="standard" />
      <Label htmlFor="mode-standard">Standard triage</Label>
    </div>
    <div className="flex items-center gap-2">
      <RadioGroupItem id="mode-hotfix" value="hotfix" />
      <Label htmlFor="mode-hotfix">Hotfix lane</Label>
    </div>
  </RadioGroup>
  <Checkbox id="page">Page on-call</Checkbox>
</FormPattern>`,children:(0,v.jsxs)(f,{onSubmit:e=>e.preventDefault(),footer:(0,v.jsx)(i,{type:`submit`,tone:`primary`,variant:`solid`,children:`Submit report`}),children:[(0,v.jsx)(o,{label:`Incident title`,htmlFor:`incident-title-demo`,children:(0,v.jsx)(l,{id:`incident-title-demo`,placeholder:`API gateway timeout in us-east-1`})}),(0,v.jsx)(o,{label:`Impact summary`,htmlFor:`impact-summary-demo`,children:(0,v.jsx)(d,{id:`impact-summary-demo`,rows:3,placeholder:`Requests fail for the public API route`})}),(0,v.jsxs)(_,{className:`grid grid-cols-2 gap-4`,children:[(0,v.jsx)(o,{label:`Severity`,labelId:`incident-form-severity-label`,children:(0,v.jsx)(n,{ariaLabelledBy:`incident-form-severity-label`,placeholder:`Select severity`,options:y})}),(0,v.jsx)(o,{label:`Environment`,labelId:`incident-form-environment-label`,children:(0,v.jsx)(n,{ariaLabelledBy:`incident-form-environment-label`,placeholder:`Select env`,options:b})})]}),(0,v.jsxs)(c,{defaultValue:`standard`,"aria-label":`Priority mode`,children:[(0,v.jsxs)(_,{className:`flex items-center gap-2`,children:[(0,v.jsx)(s,{id:`mode-standard-demo`,value:`standard`}),(0,v.jsx)(e,{htmlFor:`mode-standard-demo`,children:`Standard triage`})]}),(0,v.jsxs)(_,{className:`flex items-center gap-2`,children:[(0,v.jsx)(s,{id:`mode-hotfix-demo`,value:`hotfix`}),(0,v.jsx)(e,{htmlFor:`mode-hotfix-demo`,children:`Hotfix lane`})]})]}),(0,v.jsx)(u,{id:`page-demo`,children:`Page on-call team immediately`})]})})}),(0,v.jsx)(t,{label:`api reference`,children:(0,v.jsx)(p,{title:`Input Props`,props:[{name:`type`,type:`string`,defaultValue:`"text"`,description:`HTML input type (text, email, password, number, etc.)`},{name:`placeholder`,type:`string`,defaultValue:`--`,description:`Placeholder text (hint, not label)`},{name:`disabled`,type:`boolean`,defaultValue:`false`,description:`Disables input`},{name:`className`,type:`string`,defaultValue:`--`,description:`Additional Tailwind classes`}]})})]})}export{C as default};