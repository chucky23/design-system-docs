import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{$t as t,Ar as n,Gn as r,Rn as i,_ as a,_i as o,br as s,g as c,ln as l,m as u,no as d,o as f,ti as p,vr as m,yr as h}from"./chunk-ZW5N5E5H-ScFucA-b.js";import{h as g,j as _,r as v,u as y}from"./docs-Ck_i9UNX.js";import"./index-DiNellwx.js";import"./workspace-BwWB7lTa.js";import{n as b,t as x}from"./docs-article-BUNGnjgF.js";import"./recipes-D5dnGl5M.js";import"./patterns-u-K9g2dB.js";var S=e(),C=[{value:`sev1`,label:`SEV-1 Critical`},{value:`sev2`,label:`SEV-2 High`},{value:`sev3`,label:`SEV-3 Medium`},{value:`sev4`,label:`SEV-4 Low`,disabled:!0}],w=[{value:`prod`,label:`Production`},{value:`stage`,label:`Staging`},{value:`dev`,label:`Development`,disabled:!0}],T=[{value:`network`,label:`Network instability`},{value:`deploy`,label:`Deploy regression`},{value:`capacity`,label:`Capacity limit`}],E=[{label:`Operations`,options:[{value:`on-call`,label:`On-call engineer`},{value:`incident`,label:`Incident commander`}]},{label:`Product`,options:[{value:`support`,label:`Support lead`},{value:`pm`,label:`Product manager`,disabled:!0}]}],D=[{id:`usage`,label:`Использование`},{id:`input`,label:`Текстовое поле`},{id:`label`,label:`Поле с подписью`},{id:`textarea`,label:`Многострочное поле`},{id:`select`,label:`Select`},{id:`checkbox`,label:`Checkbox`},{id:`radio-group`,label:`RadioGroup`},{id:`form`,label:`Композиция формы`},{id:`api`,label:`API`}];function O(){return(0,S.jsx)(u,{title:`Inputs & Forms`,description:`Input, Textarea, Select, Checkbox, RadioGroup, Label — примитивы форм. Бордер trace-strong, radius 3px, единые hover/focus-состояния через theme.css.`,breadcrumbs:x(`/components/inputs`),children:(0,S.jsx)(f,{presentation:`article`,label:`Inputs & Forms`,inspector:b(D),document:(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(v,{title:`Состояния поля`,description:`Фокус, отключённое поле, ошибка и успех. Ошибка и успех получают сигнальную рамку.`,code:`<Input placeholder="Фокус" />
<Input disabled placeholder="Отключено" />
<Input aria-label="Ошибка SLA" signal="err" aria-invalid="true" defaultValue="Ошибка: SLA breached" />
<Input aria-label="Успешный ACK" signal="ok" defaultValue="ACK-2026" />`,layout:`stack`,children:[(0,S.jsx)(p,{"data-release-state":`input-focus`,placeholder:`Фокус`}),(0,S.jsx)(p,{"data-release-state":`input-disabled`,disabled:!0,placeholder:`Отключено`}),(0,S.jsx)(p,{"aria-label":`Ошибка SLA`,"data-release-state":`input-error`,signal:`err`,"aria-invalid":`true`,defaultValue:`Ошибка: SLA breached`}),(0,S.jsx)(p,{"aria-label":`Успешный ACK`,"data-release-state":`input-success`,signal:`ok`,defaultValue:`ACK-2026`})]}),(0,S.jsx)(i,{children:`Поля форм читаются как плотные рабочие контролы: тонкая граница вместо заливки, аккуратный focus-ring цвета signal-ok и общий state-контракт. Native-поля связываются с Label через htmlFor. Checkbox получает одну подпись: children или внешний Label для Checkbox без children. Select использует видимый Label с id и ariaLabelledBy.`}),(0,S.jsx)(s,{id:`usage`,label:`Использование`,children:(0,S.jsx)(r,{copyLabel:`Скопировать код: поля формы с FieldRecipe`,language:`tsx`,code:`import { Checkbox, Input, Label, Select, Textarea } from "@chucky23/design-system/react"
import { FieldRecipe } from "@chucky23/design-system/recipes"

<FieldRecipe label="Service Name" htmlFor="service">
  <Input id="service" placeholder="api-gateway" />
</FieldRecipe>
<Checkbox defaultChecked>Auto-resolve after 30m</Checkbox>`})}),(0,S.jsxs)(s,{id:`input`,label:`Текстовое поле`,children:[(0,S.jsxs)(v,{title:`Text Input`,description:`Default, placeholder, disabled states. Border inset effect via trace-strong.`,code:`<Input placeholder="Search incidents..." />
<Input aria-label="Ключ инцидента" defaultValue="INC-4012" />
<Input aria-label="Успешный ACK" signal="ok" defaultValue="ACK-2026" />
<Input disabled placeholder="Disabled input" />`,layout:`stack`,children:[(0,S.jsx)(p,{placeholder:`Search incidents...`}),(0,S.jsx)(p,{"aria-label":`Ключ инцидента`,defaultValue:`INC-4012`}),(0,S.jsx)(p,{"aria-label":`Успешный ACK`,signal:`ok`,defaultValue:`ACK-2026`}),(0,S.jsx)(p,{disabled:!0,placeholder:`Disabled input`})]}),(0,S.jsxs)(i,{children:[(0,S.jsx)(g,{href:`/components/input-width`,children:`Input Width`}),` — фиксированные ширины полей по смыслу значения.`]})]}),(0,S.jsx)(s,{id:`label`,label:`Поле с подписью`,children:(0,S.jsxs)(v,{title:`Labeled Input`,description:`Label — обязателен для каждого поля. htmlFor связывает label и input для accessibility. FieldRecipe ставит подпись над полем.`,code:`<FieldRecipe label="Service Name" htmlFor="service">
  <Input id="service" placeholder="api-gateway" />
</FieldRecipe>

<FieldRecipe label="Email" htmlFor="email">
  <Input id="email" type="email" placeholder="ops@example.com" />
</FieldRecipe>`,layout:`stack`,children:[(0,S.jsx)(c,{label:`Service Name`,htmlFor:`service-demo`,children:(0,S.jsx)(p,{id:`service-demo`,placeholder:`api-gateway`})}),(0,S.jsx)(c,{label:`Email`,htmlFor:`email-demo`,children:(0,S.jsx)(p,{id:`email-demo`,type:`email`,placeholder:`ops@example.com`})})]})}),(0,S.jsx)(s,{id:`textarea`,label:`Многострочное поле`,children:(0,S.jsxs)(v,{title:`Textarea`,description:`Многострочное поле использует тот же Terminal hybrid bridge, что и Input.`,code:`<FieldRecipe label="Описание инцидента" htmlFor="incident-summary">
  <Textarea
    id="incident-summary"
    placeholder="Что произошло и как это влияет на пользователей"
    rows={4}
  />
</FieldRecipe>

<FieldRecipe label="Условия воспроизведения" htmlFor="incident-notes">
  <Textarea
    id="incident-notes"
    signal="warn"
    autoSize={{ minRows: 3, maxRows: 6 }}
    placeholder="Добавь условия воспроизведения"
  />
</FieldRecipe>`,layout:`stack`,children:[(0,S.jsx)(c,{label:`Описание инцидента`,htmlFor:`incident-summary-demo`,children:(0,S.jsx)(n,{id:`incident-summary-demo`,placeholder:`Что произошло и как это влияет на пользователей`,rows:4})}),(0,S.jsx)(c,{label:`Условия воспроизведения`,htmlFor:`incident-notes-demo`,children:(0,S.jsx)(n,{id:`incident-notes-demo`,signal:`warn`,autoSize:{minRows:3,maxRows:6},placeholder:`Добавь условия воспроизведения`})})]})}),(0,S.jsxs)(s,{id:`select`,label:`Select`,children:[(0,S.jsxs)(v,{title:`Select`,description:`Canonical options API для ordinary choice fields. Для 6+ опций — Select. Для 2-5 — ToggleGroup.`,code:`const [severity, setSeverity] = React.useState("sev2")

<Label htmlFor="severity-select">Controlled severity</Label>
<Select
  id="severity-select"
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

<FieldRecipe label="Uncontrolled environment" htmlFor="environment-select">
  <Select
    id="environment-select"
    defaultValue="prod"
    options={[
      { value: "prod", label: "Production" },
      { value: "stage", label: "Staging" },
      { value: "dev", label: "Development", disabled: true },
    ]}
  />
</FieldRecipe>

<FieldRecipe label="Invalid signal" htmlFor="escalation-select">
  <Select
    id="escalation-select"
    invalid
    signal="err"
    placeholder="Escalation reason"
    options={[
      { value: "network", label: "Network instability" },
      { value: "deploy", label: "Deploy regression" },
    ]}
  />
</FieldRecipe>

<FieldRecipe label="Grouped owner" htmlFor="owner-select">
  <Select
    id="owner-select"
    placeholder="Owner"
    options={[
      {
        label: "Operations",
        options: [{ value: "on-call", label: "On-call engineer" }],
      },
    ]}
  />
</FieldRecipe>`,layout:`stack`,children:[(0,S.jsx)(y,{}),(0,S.jsx)(c,{label:`Uncontrolled environment`,htmlFor:`environment-select`,children:(0,S.jsx)(l,{id:`environment-select`,defaultValue:`prod`,options:w,"data-select-example":`default-value`})}),(0,S.jsx)(c,{label:`Disabled select`,htmlFor:`disabled-select`,children:(0,S.jsx)(l,{id:`disabled-select`,disabled:!0,placeholder:`Locked while syncing`,options:w,"data-select-example":`disabled-root`})}),(0,S.jsx)(c,{label:`Invalid signal`,htmlFor:`escalation-select`,children:(0,S.jsx)(l,{id:`escalation-select`,invalid:!0,signal:`err`,placeholder:`Escalation reason`,options:T,"data-select-example":`invalid-signal`})}),(0,S.jsx)(c,{label:`Grouped owner`,htmlFor:`owner-select`,children:(0,S.jsx)(l,{id:`owner-select`,placeholder:`Owner`,options:E,"data-select-example":`grouped`})})]}),(0,S.jsx)(i,{children:`ariaDescribedBy связывает подсказку и ошибку с combobox; ariaRequired обозначает обязательное поле. Compatibility SelectTrigger также передаёт aria-describedby, aria-required и aria-invalid; явный invalid на Select имеет приоритет. Проверяй реальное доступное описание поля. Старый compound API (SelectTrigger, SelectContent, SelectItem) остаётся compatibility layer для существующего кода, но новые примеры и миграции должны использовать canonical options API.`}),(0,S.jsx)(i,{children:`Для смены статуса в workflow используй StatusSelectPattern. Обычный Select нужен для простых полей выбора и не заменяет асинхронную семантику статуса.`})]}),(0,S.jsxs)(s,{id:`checkbox`,label:`Checkbox`,children:[(0,S.jsxs)(v,{title:`Checkbox`,description:`Одна подпись: children или внешний Label для Checkbox без children. Space и клик по подписи переключают значение.`,code:`<Checkbox defaultChecked>Auto-resolve after 30m</Checkbox>
<Checkbox disabled>Disabled option</Checkbox>
<Checkbox disabled defaultChecked>Disabled checked option</Checkbox>
<Checkbox indeterminate>All services</Checkbox>

<Checkbox id="terms" aria-invalid="true" aria-describedby="terms-hint terms-error">
  Accept terms
</Checkbox>
<Body id="terms-hint" tone="muted">Required to save</Body>
<Body id="terms-error" tone="err">Consent is required</Body>`,layout:`stack`,children:[(0,S.jsx)(d,{id:`auto-demo`,defaultChecked:!0,children:`Auto-resolve after 30m`}),(0,S.jsx)(d,{id:`disabled-demo`,disabled:!0,children:`Disabled option`}),(0,S.jsx)(d,{id:`disabled-checked-demo`,disabled:!0,defaultChecked:!0,children:`Disabled checked option`}),(0,S.jsx)(d,{id:`mixed-demo`,indeterminate:!0,children:`All services`}),(0,S.jsx)(d,{id:`terms-demo`,"aria-invalid":`true`,"aria-describedby":`terms-hint-demo terms-error-demo`,children:`Accept terms`}),(0,S.jsx)(i,{id:`terms-hint-demo`,tone:`muted`,children:`Required to save`}),(0,S.jsx)(i,{id:`terms-error-demo`,tone:`err`,children:`Consent is required`})]}),(0,S.jsxs)(v,{title:`Внешний Label`,description:`Checkbox без children получает подпись от Label с htmlFor. Клик по подписи переключает значение.`,code:`<Checkbox id="notify" />
<Label htmlFor="notify">Notify on-call team</Label>`,children:[(0,S.jsx)(d,{id:`notify-demo`}),(0,S.jsx)(a,{htmlFor:`notify-demo`,children:`Notify on-call team`})]})]}),(0,S.jsxs)(s,{id:`radio-group`,label:`RadioGroup`,children:[(0,S.jsx)(v,{title:`RadioGroup`,description:`Группа имеет своё имя, каждый вариант — одну подпись: children или внешний Label. Стрелки выбирают соседний вариант.`,code:`<FieldRecipe label="Priority mode" labelId="priority-mode-label">
  <RadioGroup defaultValue="standard" aria-labelledby="priority-mode-label">
    <RadioGroupItem id="priority-standard" value="standard">Standard triage</RadioGroupItem>
    <RadioGroupItem id="priority-hotfix" value="hotfix">Hotfix lane</RadioGroupItem>
  </RadioGroup>
</FieldRecipe>`,children:(0,S.jsx)(c,{label:`Priority mode`,labelId:`priority-mode-label`,children:(0,S.jsxs)(m,{defaultValue:`standard`,"aria-labelledby":`priority-mode-label`,children:[(0,S.jsx)(h,{id:`priority-standard-demo`,value:`standard`,children:`Standard triage`}),(0,S.jsx)(h,{id:`priority-hotfix-demo`,value:`hotfix`,children:`Hotfix lane`})]})})}),(0,S.jsxs)(i,{children:[`Подробности о группах, отключённых вариантах и ошибке — на странице`,` `,(0,S.jsx)(g,{href:`/components/radio-group`,children:`Radio Group`}),`.`]})]}),(0,S.jsx)(s,{id:`form`,label:`Композиция формы`,children:(0,S.jsx)(v,{title:`Incident Report Form`,description:`Композиция формы использует FieldRecipe, FormPattern и утверждённые примитивы.`,code:`<FormPattern
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
    <RadioGroupItem id="mode-standard" value="standard">Standard triage</RadioGroupItem>
    <RadioGroupItem id="mode-hotfix" value="hotfix">Hotfix lane</RadioGroupItem>
  </RadioGroup>
  <Checkbox id="page">Page on-call</Checkbox>
</FormPattern>`,layout:`block`,children:(0,S.jsxs)(t,{onSubmit:e=>e.preventDefault(),footer:(0,S.jsx)(o,{type:`submit`,tone:`primary`,variant:`solid`,children:`Submit report`}),children:[(0,S.jsx)(c,{label:`Incident title`,htmlFor:`incident-title-demo`,children:(0,S.jsx)(p,{id:`incident-title-demo`,placeholder:`API gateway timeout in us-east-1`})}),(0,S.jsx)(c,{label:`Impact summary`,htmlFor:`impact-summary-demo`,children:(0,S.jsx)(n,{id:`impact-summary-demo`,rows:3,placeholder:`Requests fail for the public API route`})}),(0,S.jsx)(c,{label:`Severity`,labelId:`incident-form-severity-label`,children:(0,S.jsx)(l,{ariaLabelledBy:`incident-form-severity-label`,placeholder:`Select severity`,options:C})}),(0,S.jsx)(c,{label:`Environment`,labelId:`incident-form-environment-label`,children:(0,S.jsx)(l,{ariaLabelledBy:`incident-form-environment-label`,placeholder:`Select env`,options:w})}),(0,S.jsxs)(m,{defaultValue:`standard`,"aria-label":`Priority mode`,children:[(0,S.jsx)(h,{id:`mode-standard-demo`,value:`standard`,children:`Standard triage`}),(0,S.jsx)(h,{id:`mode-hotfix-demo`,value:`hotfix`,children:`Hotfix lane`})]}),(0,S.jsx)(d,{id:`page-demo`,children:`Page on-call team immediately`})]})})}),(0,S.jsxs)(s,{id:`api`,label:`API`,children:[(0,S.jsx)(_,{title:`Input Props`,props:[{name:`type`,type:`string`,defaultValue:`"text"`,description:`HTML input type (text, email, password, number, etc.)`},{name:`placeholder`,type:`string`,defaultValue:`—`,description:`Placeholder text (hint, not label)`},{name:`disabled`,type:`boolean`,defaultValue:`false`,description:`Disables input`},{name:`className`,type:`string`,defaultValue:`—`,description:`Additional Tailwind classes`},{name:`size`,type:`"sm" | "default"`,defaultValue:`"default"`,description:`Высота поля: sm — компактная.`},{name:`signal`,type:`"ok" | "warn" | "err" | "info"`,defaultValue:`—`,description:`Сигнальная рамка поля: ошибка, предупреждение, успех.`}]}),(0,S.jsx)(_,{title:`Textarea Props`,props:[{name:`signal`,type:`"ok" | "warn" | "err" | "info"`,defaultValue:`—`,description:`Сигнальная рамка поля.`},{name:`autoSize`,type:`boolean | { minRows?: number; maxRows?: number }`,defaultValue:`false`,description:`Высота следует за текстом в пределах minRows и maxRows.`},{name:`showCount`,type:`boolean`,defaultValue:`—`,description:`Показывает счётчик символов.`}]}),(0,S.jsx)(_,{title:`Select Props`,props:[{name:`options`,type:`ReadonlyArray<SelectOption | SelectOptionGroup>`,defaultValue:`—`,description:`Варианты и группы вариантов: value, label, disabled.`},{name:`value`,type:`string | null`,defaultValue:`—`,description:`Контролируемое значение. Используй вместе с onValueChange.`},{name:`defaultValue`,type:`string`,defaultValue:`—`,description:`Начальное значение неконтролируемого режима.`},{name:`onValueChange`,type:`(value: string) => void`,defaultValue:`—`,description:`Колбэк на выбор варианта.`},{name:`placeholder`,type:`ReactNode`,defaultValue:`—`,description:`Текст до выбора значения.`},{name:`invalid`,type:`boolean`,defaultValue:`—`,description:`Ошибка поля; имеет приоритет над aria-invalid триггера.`},{name:`signal`,type:`"neutral" | "ok" | "warn" | "err" | "info"`,defaultValue:`—`,description:`Сигнальная рамка поля.`},{name:`size`,type:`"sm" | "default"`,defaultValue:`"default"`,description:`Высота поля.`},{name:`ariaLabelledBy`,type:`string`,defaultValue:`—`,description:`id видимой подписи Label.`},{name:`ariaDescribedBy`,type:`string`,defaultValue:`—`,description:`id подсказки и ошибки.`},{name:`ariaRequired`,type:`boolean`,defaultValue:`—`,description:`Обязательное поле.`}]}),(0,S.jsx)(_,{title:`Checkbox Props`,props:[{name:`children`,type:`ReactNode`,defaultValue:`—`,description:`Подпись. Без children подпись даёт внешний Label с htmlFor.`},{name:`checked`,type:`boolean`,defaultValue:`—`,description:`Контролируемое состояние. Используй вместе с onCheckedChange.`},{name:`defaultChecked`,type:`boolean`,defaultValue:`—`,description:`Начальное состояние неконтролируемого режима.`},{name:`onCheckedChange`,type:`(checked: boolean) => void`,defaultValue:`—`,description:`Колбэк на смену состояния.`},{name:`indeterminate`,type:`boolean`,defaultValue:`false`,description:`Смешанное состояние: часть вариантов выбрана.`},{name:`disabled`,type:`boolean`,defaultValue:`—`,description:`Отключает флажок; по умолчанию наследуется от формы.`}]})]})]})})})}export{O as default};