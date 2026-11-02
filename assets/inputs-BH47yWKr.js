import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{$r as t,Bn as n,Ir as r,Ns as i,Oa as a,Qr as o,R as s,Sr as c,Xn as l,Xr as u,Zr as d,_a as f,fr as p,g as m,j as h,kr as g,pr as _,x as v,z as y}from"./chunk-FJ6G7XYZ-vkrr-AON.js";import{A as b,C as x,D as S,Q as C,g as w}from"./docs-CTQgkcVe.js";import"./index-CylhoBOX.js";import"./workspace-B0gvzNJe.js";import"./patterns-W444yBj4.js";import{n as T,r as E,t as D}from"./docs-article-CV9v0E7s.js";import"./recipes-DhOVglAh.js";var O=e(),k=[{value:`sev1`,label:`SEV-1 Critical`},{value:`sev2`,label:`SEV-2 High`},{value:`sev3`,label:`SEV-3 Medium`},{value:`sev4`,label:`SEV-4 Low`,disabled:!0}],A=[{value:`prod`,label:`Production`},{value:`stage`,label:`Staging`},{value:`dev`,label:`Development`,disabled:!0}],j=[{value:`network`,label:`Network instability`},{value:`deploy`,label:`Deploy regression`},{value:`capacity`,label:`Capacity limit`}],M=[{label:`Operations`,options:[{value:`on-call`,label:`On-call engineer`},{value:`incident`,label:`Incident commander`}]},{label:`Product`,options:[{value:`support`,label:`Support lead`},{value:`pm`,label:`Product manager`,disabled:!0}]}],N=[{value:`anna`,label:`Анна Королёва`,initials:`АК`,searchText:`Анна Королёва anna claude`},{value:`boris`,label:`Борис Лебедев`,initials:`БЛ`,searchText:`Борис Лебедев boris codex`},{value:`vera`,label:`Вера Миронова`,initials:`ВМ`,searchText:`Вера Миронова vera`},{value:`agent`,label:`Агент ревью`,initials:`АР`,searchText:`Агент ревью review-agent`}].map(({initials:e,...t})=>({...t,icon:(0,O.jsx)(p,{size:`sm`,children:(0,O.jsx)(_,{children:e})})})),P=[`bug`,`frontend`,`release`,`docs`,`design`].map(e=>({value:e,label:e})),F=[{id:`usage`,label:`Использование`},{id:`input`,label:`Текстовое поле`},{id:`search`,label:`Поиск в списке`},{id:`label`,label:`Поле с подписью`},{id:`textarea`,label:`Многострочное поле`},{id:`select`,label:`Select`},{id:`select-multiple`,label:`Множественный выбор`},{id:`checkbox`,label:`Checkbox`},{id:`switch`,label:`Switch`},{id:`radio-group`,label:`RadioGroup`},{id:`form`,label:`Композиция формы`},{id:`api`,label:`API`}];function I(){return(0,O.jsx)(h,{title:`Inputs & Forms`,description:`Input, Textarea, Select, Checkbox, RadioGroup, Label — примитивы форм. Граница --input не меньше 3:1 к фону, радиус 4px, единые состояния наведения и фокуса из theme.css.`,breadcrumbs:D(`/components/inputs`),meta:T(`/components/inputs`),children:(0,O.jsx)(v,{presentation:`article`,label:`Inputs & Forms`,inspector:E(F),document:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(w,{title:`Состояния поля`,description:`Фокус, отключённое поле, ошибка и успех. Ошибка и успех получают сигнальную рамку.`,code:`<Input placeholder="Фокус" />
<Input disabled placeholder="Отключено" />
<Input aria-label="Ошибка SLA" signal="err" aria-invalid="true" defaultValue="Ошибка: SLA breached" />
<Input aria-label="Успешный ACK" signal="ok" defaultValue="ACK-2026" />`,layout:`stack`,children:[(0,O.jsx)(f,{"data-release-state":`input-focus`,placeholder:`Фокус`}),(0,O.jsx)(f,{"data-release-state":`input-disabled`,disabled:!0,placeholder:`Отключено`}),(0,O.jsx)(f,{"aria-label":`Ошибка SLA`,"data-release-state":`input-error`,signal:`err`,"aria-invalid":`true`,defaultValue:`Ошибка: SLA breached`}),(0,O.jsx)(f,{"aria-label":`Успешный ACK`,"data-release-state":`input-success`,signal:`ok`,defaultValue:`ACK-2026`})]}),(0,O.jsx)(c,{children:`Поля форм читаются как плотные рабочие контролы: тонкая граница вместо заливки, кольцо фокуса 1px цвета --ring и общий контракт состояний. Native-поля связываются с Label через htmlFor. Checkbox получает одну подпись: children или внешний Label для Checkbox без children. Select использует видимый Label с id и ariaLabelledBy.`}),(0,O.jsx)(o,{id:`usage`,label:`Использование`,children:(0,O.jsx)(g,{copyLabel:`Скопировать код: поля формы с FieldRecipe`,language:`tsx`,code:`import { Checkbox, Input, Label, Select, Textarea } from "@chucky23/design-system/react"
import { FieldRecipe } from "@chucky23/design-system/recipes"

<FieldRecipe label="Service Name" htmlFor="service">
  <Input id="service" placeholder="api-gateway" />
</FieldRecipe>
<Checkbox defaultChecked>Auto-resolve after 30m</Checkbox>`})}),(0,O.jsxs)(o,{id:`input`,label:`Текстовое поле`,children:[(0,O.jsxs)(w,{title:`Text Input`,description:`Default, placeholder, disabled states. Граница --input не меньше 3:1 к фону.`,code:`<Input placeholder="Search incidents..." />
<Input aria-label="Ключ инцидента" defaultValue="INC-4012" />
<Input aria-label="Успешный ACK" signal="ok" defaultValue="ACK-2026" />
<Input disabled placeholder="Disabled input" />`,layout:`stack`,children:[(0,O.jsx)(f,{placeholder:`Search incidents...`}),(0,O.jsx)(f,{"aria-label":`Ключ инцидента`,defaultValue:`INC-4012`}),(0,O.jsx)(f,{"aria-label":`Успешный ACK`,signal:`ok`,defaultValue:`ACK-2026`}),(0,O.jsx)(f,{disabled:!0,placeholder:`Disabled input`})]}),(0,O.jsxs)(c,{children:[(0,O.jsx)(b,{href:`/components/input-width`,children:`Input Width`}),` — фиксированные ширины полей по смыслу значения.`]})]}),(0,O.jsxs)(o,{id:`search`,label:`Поиск в списке`,children:[(0,O.jsxs)(c,{children:[`Поиск внутри списка или поповера не должен перетягивать внимание с заголовка группы и значений.`,` `,(0,O.jsx)(r,{children:`Input variant="quiet"`}),` — тихое поле без фона и рамки до фокуса, с лупой 12px.`,` `,(0,O.jsx)(r,{children:`ExpandableSearch`}),` свёрнут в лупу в строке заголовка и раскрывается в такое поле. Escape сначала очищает запрос, затем сворачивает поле и возвращает фокус на лупу. Уход из пустого поля тоже сворачивает его. Так же устроен поиск панели коллекции в реестре и на доске.`]}),(0,O.jsx)(w,{title:`Лупа в строке заголовка и тихое поле`,description:`Нажмите на лупу у «// исполнитель»: она раскроется в поле. Второе поле — Input variant=quiet.`,code:`<ExpandableSearch label="Найти исполнителя" placeholder="Найти" value={query} onValueChange={setQuery} />
<Input variant="quiet" aria-label="Найти метку" placeholder="Найти метку" value={label} onChange={…} />`,layout:`block`,children:(0,O.jsx)(S,{})})]}),(0,O.jsx)(o,{id:`label`,label:`Поле с подписью`,children:(0,O.jsxs)(w,{title:`Labeled Input`,description:`Label — обязателен для каждого поля. htmlFor связывает label и input для accessibility. FieldRecipe ставит подпись над полем.`,code:`<FieldRecipe label="Service Name" htmlFor="service">
  <Input id="service" placeholder="api-gateway" />
</FieldRecipe>

<FieldRecipe label="Email" htmlFor="email">
  <Input id="email" type="email" placeholder="ops@example.com" />
</FieldRecipe>`,layout:`stack`,children:[(0,O.jsx)(s,{label:`Service Name`,htmlFor:`service-demo`,children:(0,O.jsx)(f,{id:`service-demo`,placeholder:`api-gateway`})}),(0,O.jsx)(s,{label:`Email`,htmlFor:`email-demo`,children:(0,O.jsx)(f,{id:`email-demo`,type:`email`,placeholder:`ops@example.com`})})]})}),(0,O.jsxs)(o,{id:`textarea`,label:`Многострочное поле`,children:[(0,O.jsxs)(w,{title:`Textarea`,description:`Многострочное поле берёт те же рамку, радиус и состояния, что и Input.`,code:`<FieldRecipe label="Описание инцидента" htmlFor="incident-summary">
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
</FieldRecipe>`,layout:`stack`,children:[(0,O.jsx)(s,{label:`Описание инцидента`,htmlFor:`incident-summary-demo`,children:(0,O.jsx)(m,{id:`incident-summary-demo`,placeholder:`Что произошло и как это влияет на пользователей`,rows:4})}),(0,O.jsx)(s,{label:`Условия воспроизведения`,htmlFor:`incident-notes-demo`,children:(0,O.jsx)(m,{id:`incident-notes-demo`,signal:`warn`,autoSize:{minRows:3,maxRows:6},placeholder:`Добавь условия воспроизведения`})})]}),(0,O.jsxs)(w,{title:`Роль кода`,description:`mono набирает значение SF Mono с табличными цифрами: команды, пути, ID, YAML. Размер и строка как у обычного поля. Шрифт поля через className не меняй.`,code:`<Input mono defaultValue="npm test" aria-label="Команда для выполнения" />
<Textarea mono rows={3} defaultValue={"status: review
next: done"} aria-label="YAML" />`,layout:`stack`,children:[(0,O.jsx)(f,{mono:!0,defaultValue:`npm test`,"aria-label":`Команда для выполнения`}),(0,O.jsx)(m,{mono:!0,rows:3,defaultValue:`status: review
next: done`,"aria-label":`YAML`})]})]}),(0,O.jsxs)(o,{id:`select`,label:`Select`,children:[(0,O.jsxs)(w,{title:`Select`,description:`Canonical options API для ordinary choice fields. Для 6+ опций — Select. Для 2-5 — ToggleGroup.`,code:`const [severity, setSeverity] = React.useState("sev2")

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
</FieldRecipe>`,layout:`stack`,children:[(0,O.jsx)(x,{}),(0,O.jsx)(s,{label:`Uncontrolled environment`,htmlFor:`environment-select`,children:(0,O.jsx)(l,{id:`environment-select`,defaultValue:`prod`,options:A,"data-select-example":`default-value`})}),(0,O.jsx)(s,{label:`Disabled select`,htmlFor:`disabled-select`,children:(0,O.jsx)(l,{id:`disabled-select`,disabled:!0,placeholder:`Locked while syncing`,options:A,"data-select-example":`disabled-root`})}),(0,O.jsx)(s,{label:`Invalid signal`,htmlFor:`escalation-select`,children:(0,O.jsx)(l,{id:`escalation-select`,invalid:!0,signal:`err`,placeholder:`Escalation reason`,options:j,"data-select-example":`invalid-signal`})}),(0,O.jsx)(s,{label:`Grouped owner`,htmlFor:`owner-select`,children:(0,O.jsx)(l,{id:`owner-select`,placeholder:`Owner`,options:M,"data-select-example":`grouped`})})]}),(0,O.jsx)(c,{children:`ariaDescribedBy связывает подсказку и ошибку с combobox; ariaRequired обозначает обязательное поле. Compatibility SelectTrigger также передаёт aria-describedby, aria-required и aria-invalid; явный invalid на Select имеет приоритет. Проверяй реальное доступное описание поля. Старый compound API (SelectTrigger, SelectContent, SelectItem) остаётся compatibility layer для существующего кода, но новые примеры и миграции должны использовать canonical options API.`}),(0,O.jsx)(c,{children:`Для смены статуса в workflow используй StatusSelectPattern. Обычный Select нужен для простых полей выбора и не заменяет асинхронную семантику статуса.`})]}),(0,O.jsxs)(o,{id:`select-multiple`,label:`Множественный выбор`,children:[(0,O.jsxs)(w,{title:`Select mode="multiple"`,description:`Выбранные значения — чипы Tag с кнопкой снятия, отмеченный пункт — галочка, список остаётся открытым. Поиск ищет по searchText.`,code:`<Label htmlFor="reviewers-select">Проверяющие</Label>
<Select
  id="reviewers-select"
  mode="multiple"
  searchable
  value={reviewers}
  onValueChange={setReviewers}
  placeholder="Выбери проверяющих"
  removeLabel={(name) => \`Убрать \${name}\`}
  options={[
    {
      value: "anna",
      label: "Анна Королёва",
      searchText: "Анна Королёва anna claude",
      icon: <Avatar size="sm"><AvatarFallback>АК</AvatarFallback></Avatar>,
    },
  ]}
/>

<Select mode="multiple" variant="inline" size="sm" ariaLabel="Метки" options={labels} />`,layout:`stack`,children:[(0,O.jsx)(s,{label:`Проверяющие`,htmlFor:`reviewers-select`,children:(0,O.jsx)(l,{id:`reviewers-select`,mode:`multiple`,searchable:!0,defaultValue:[`anna`,`agent`],placeholder:`Выбери проверяющих`,options:N,"data-select-example":`multiple`})}),(0,O.jsx)(s,{label:`Метки, компактное поле`,htmlFor:`labels-select`,children:(0,O.jsx)(l,{id:`labels-select`,mode:`multiple`,size:`sm`,searchable:!0,defaultValue:[`bug`,`frontend`],placeholder:`Без меток`,options:P,"data-select-example":`multiple-sm`})}),(0,O.jsx)(s,{label:`Метки в строке свойства`,htmlFor:`labels-inline-select`,children:(0,O.jsx)(l,{id:`labels-inline-select`,mode:`multiple`,variant:`inline`,searchable:!0,defaultValue:[`release`,`docs`,`design`],placeholder:`Без меток`,options:P,"data-select-example":`multiple-inline`})})]}),(0,O.jsx)(c,{children:`Значение — массив, onValueChange получает полный новый список. Backspace в пустом поиске снимает последний чип, крестик чипа снимает своё значение и не открывает список. Скринридер слышит «Выбрано: …» и «Снято: …», выбранные подписи — описание поля. selectedLabel в этом режиме не применяется.`})]}),(0,O.jsx)(o,{id:`switch`,label:`Switch`,children:(0,O.jsxs)(w,{title:`Switch`,description:`Настройка с немедленным действием: дорожка-таблетка 28×14 с рамкой, круглый бегунок 8×8, включённый — цвет акцента. children — подпись, щелчок по ней переключает. Роль switch, Space переключает, на сенсорном экране цель 44×44. Выбор, который подтверждают кнопкой «Сохранить», делай через Checkbox. description — приглушённое пояснение под подписью, дорожка стоит против первой строки.`,code:`<Switch defaultChecked>Автопринятие</Switch>
<Switch>Уведомлять агента</Switch>
<Switch disabled>Недоступная настройка</Switch>
<Switch description="Агент не запускается сам после перехода">Без автозапуска</Switch>`,layout:`stack`,children:[(0,O.jsx)(t,{defaultChecked:!0,children:`Автопринятие`}),(0,O.jsx)(t,{children:`Уведомлять агента`}),(0,O.jsx)(t,{disabled:!0,children:`Недоступная настройка`}),(0,O.jsx)(t,{description:`Агент не запускается сам после перехода`,children:`Без автозапуска`})]})}),(0,O.jsxs)(o,{id:`checkbox`,label:`Checkbox`,children:[(0,O.jsxs)(w,{title:`Checkbox`,description:`Одна подпись: children или внешний Label для Checkbox без children. Space и клик по подписи переключают значение. description — приглушённое пояснение под подписью, связанное с полем через aria-describedby.`,code:`<Checkbox defaultChecked>Auto-resolve after 30m</Checkbox>
<Checkbox description="Задача закрывается сама через 30 минут без ответа">Auto-resolve</Checkbox>
<Checkbox disabled>Disabled option</Checkbox>
<Checkbox disabled defaultChecked>Disabled checked option</Checkbox>
<Checkbox indeterminate>All services</Checkbox>

<Checkbox id="terms" aria-invalid="true" aria-describedby="terms-hint terms-error">
  Accept terms
</Checkbox>
<Body id="terms-hint" tone="muted">Required to save</Body>
<Body id="terms-error" tone="err">Consent is required</Body>`,layout:`stack`,children:[(0,O.jsx)(i,{id:`auto-demo`,defaultChecked:!0,children:`Auto-resolve after 30m`}),(0,O.jsx)(i,{id:`described-demo`,description:`Задача закрывается сама через 30 минут без ответа`,children:`Auto-resolve`}),(0,O.jsx)(i,{id:`disabled-demo`,disabled:!0,children:`Disabled option`}),(0,O.jsx)(i,{id:`disabled-checked-demo`,disabled:!0,defaultChecked:!0,children:`Disabled checked option`}),(0,O.jsx)(i,{id:`mixed-demo`,indeterminate:!0,children:`All services`}),(0,O.jsx)(i,{id:`terms-demo`,"aria-invalid":`true`,"aria-describedby":`terms-hint-demo terms-error-demo`,children:`Accept terms`}),(0,O.jsx)(c,{id:`terms-hint-demo`,tone:`muted`,children:`Required to save`}),(0,O.jsx)(c,{id:`terms-error-demo`,tone:`err`,children:`Consent is required`})]}),(0,O.jsxs)(w,{title:`Внешний Label`,description:`Checkbox без children получает подпись от Label с htmlFor. Клик по подписи переключает значение.`,code:`<Checkbox id="notify" />
<Label htmlFor="notify">Notify on-call team</Label>`,children:[(0,O.jsx)(i,{id:`notify-demo`}),(0,O.jsx)(y,{htmlFor:`notify-demo`,children:`Notify on-call team`})]})]}),(0,O.jsxs)(o,{id:`radio-group`,label:`RadioGroup`,children:[(0,O.jsx)(w,{title:`RadioGroup`,description:`Группа имеет своё имя, каждый вариант — одну подпись: children или внешний Label. Стрелки выбирают соседний вариант.`,code:`<FieldRecipe label="Priority mode" labelId="priority-mode-label">
  <RadioGroup defaultValue="standard" aria-labelledby="priority-mode-label">
    <RadioGroupItem id="priority-standard" value="standard">Standard triage</RadioGroupItem>
    <RadioGroupItem id="priority-hotfix" value="hotfix">Hotfix lane</RadioGroupItem>
  </RadioGroup>
</FieldRecipe>`,children:(0,O.jsx)(s,{label:`Priority mode`,labelId:`priority-mode-label`,children:(0,O.jsxs)(u,{defaultValue:`standard`,"aria-labelledby":`priority-mode-label`,children:[(0,O.jsx)(d,{id:`priority-standard-demo`,value:`standard`,children:`Standard triage`}),(0,O.jsx)(d,{id:`priority-hotfix-demo`,value:`hotfix`,children:`Hotfix lane`})]})})}),(0,O.jsxs)(c,{children:[`Подробности о группах, отключённых вариантах и ошибке — на странице`,` `,(0,O.jsx)(b,{href:`/components/radio-group`,children:`Radio Group`}),`.`]})]}),(0,O.jsx)(o,{id:`form`,label:`Композиция формы`,children:(0,O.jsx)(w,{title:`Incident Report Form`,description:`Композиция формы использует FieldRecipe, FormPattern и утверждённые примитивы.`,code:`<FormPattern
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
</FormPattern>`,layout:`block`,children:(0,O.jsxs)(n,{onSubmit:e=>e.preventDefault(),footer:(0,O.jsx)(a,{type:`submit`,tone:`primary`,variant:`solid`,children:`Submit report`}),children:[(0,O.jsx)(s,{label:`Incident title`,htmlFor:`incident-title-demo`,children:(0,O.jsx)(f,{id:`incident-title-demo`,placeholder:`API gateway timeout in us-east-1`})}),(0,O.jsx)(s,{label:`Impact summary`,htmlFor:`impact-summary-demo`,children:(0,O.jsx)(m,{id:`impact-summary-demo`,rows:3,placeholder:`Requests fail for the public API route`})}),(0,O.jsx)(s,{label:`Severity`,labelId:`incident-form-severity-label`,children:(0,O.jsx)(l,{ariaLabelledBy:`incident-form-severity-label`,placeholder:`Select severity`,options:k})}),(0,O.jsx)(s,{label:`Environment`,labelId:`incident-form-environment-label`,children:(0,O.jsx)(l,{ariaLabelledBy:`incident-form-environment-label`,placeholder:`Select env`,options:A})}),(0,O.jsxs)(u,{defaultValue:`standard`,"aria-label":`Priority mode`,children:[(0,O.jsx)(d,{id:`mode-standard-demo`,value:`standard`,children:`Standard triage`}),(0,O.jsx)(d,{id:`mode-hotfix-demo`,value:`hotfix`,children:`Hotfix lane`})]}),(0,O.jsx)(i,{id:`page-demo`,children:`Page on-call team immediately`})]})})}),(0,O.jsxs)(o,{id:`api`,label:`API`,children:[(0,O.jsx)(C,{title:`Input Props`,props:[{name:`type`,type:`string`,defaultValue:`"text"`,description:`HTML input type (text, email, password, number, etc.)`},{name:`placeholder`,type:`string`,defaultValue:`—`,description:`Placeholder text (hint, not label)`},{name:`disabled`,type:`boolean`,defaultValue:`false`,description:`Disables input`},{name:`className`,type:`string`,defaultValue:`—`,description:`Additional Tailwind classes`},{name:`size`,type:`"sm" | "default"`,defaultValue:`"default"`,description:`Высота поля: sm — компактная.`},{name:`signal`,type:`"ok" | "warn" | "err" | "info"`,defaultValue:`—`,description:`Сигнальная рамка поля: ошибка, предупреждение, успех.`}]}),(0,O.jsx)(C,{title:`Textarea Props`,props:[{name:`signal`,type:`"ok" | "warn" | "err" | "info"`,defaultValue:`—`,description:`Сигнальная рамка поля.`},{name:`autoSize`,type:`boolean | { minRows?: number; maxRows?: number }`,defaultValue:`false`,description:`Высота следует за текстом в пределах minRows и maxRows.`},{name:`showCount`,type:`boolean`,defaultValue:`—`,description:`Показывает счётчик символов.`}]}),(0,O.jsx)(C,{title:`Select Props`,props:[{name:`options`,type:`ReadonlyArray<SelectOption | SelectOptionGroup>`,defaultValue:`—`,description:`Варианты и группы вариантов: value, label, disabled.`},{name:`value`,type:`string | null | string[]`,defaultValue:`—`,description:`Контролируемое значение. Используй вместе с onValueChange.`},{name:`defaultValue`,type:`string`,defaultValue:`—`,description:`Начальное значение неконтролируемого режима.`},{name:`onValueChange`,type:`(value: string) => void | (value: string[]) => void`,defaultValue:`—`,description:`Колбэк на выбор варианта. В режиме multiple получает полный список значений.`},{name:`mode`,type:`"single" | "multiple"`,defaultValue:`"single"`,description:`Множественный выбор: value и defaultValue — массивы, выбранные значения — чипы Tag.`},{name:`removeLabel`,type:`(label: string) => string`,defaultValue:`«Убрать <подпись>»`,description:`Только multiple: доступное имя кнопки снятия чипа.`},{name:`searchable`,type:`boolean`,defaultValue:`false`,description:`Поиск по подписи или searchText опции при открытом списке.`},{name:`placeholder`,type:`ReactNode`,defaultValue:`—`,description:`Текст до выбора значения.`},{name:`invalid`,type:`boolean`,defaultValue:`—`,description:`Ошибка поля; имеет приоритет над aria-invalid триггера.`},{name:`signal`,type:`"neutral" | "ok" | "warn" | "err" | "info"`,defaultValue:`—`,description:`Сигнальная рамка поля.`},{name:`size`,type:`"sm" | "default"`,defaultValue:`"default"`,description:`Высота поля.`},{name:`ariaLabelledBy`,type:`string`,defaultValue:`—`,description:`id видимой подписи Label.`},{name:`ariaDescribedBy`,type:`string`,defaultValue:`—`,description:`id подсказки и ошибки.`},{name:`ariaRequired`,type:`boolean`,defaultValue:`—`,description:`Обязательное поле.`}]}),(0,O.jsx)(C,{title:`Checkbox Props`,props:[{name:`children`,type:`ReactNode`,defaultValue:`—`,description:`Подпись. Без children подпись даёт внешний Label с htmlFor.`},{name:`checked`,type:`boolean`,defaultValue:`—`,description:`Контролируемое состояние. Используй вместе с onCheckedChange.`},{name:`defaultChecked`,type:`boolean`,defaultValue:`—`,description:`Начальное состояние неконтролируемого режима.`},{name:`onCheckedChange`,type:`(checked: boolean) => void`,defaultValue:`—`,description:`Колбэк на смену состояния.`},{name:`indeterminate`,type:`boolean`,defaultValue:`false`,description:`Смешанное состояние: часть вариантов выбрана.`},{name:`disabled`,type:`boolean`,defaultValue:`—`,description:`Отключает флажок; по умолчанию наследуется от формы.`}]})]})]})})})}export{I as default};