import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{Ar as t,Cn as n,Gn as r,Rn as i,Sn as a,_r as o,br as s,g as c,m as l,o as u,r as d}from"./chunk-ZW5N5E5H-ScFucA-b.js";import{K as f,d as p,j as m,r as h,y as g}from"./docs-Ck_i9UNX.js";import"./index-DiNellwx.js";import"./workspace-BwWB7lTa.js";import{n as _,t as v}from"./docs-article-BUNGnjgF.js";import"./field-CgDbzcX2.js";var y=e(),b=[{id:`usage`,label:`Использование`},{id:`textarea-signals`,label:`Сигналы Textarea`},{id:`date-picker`,label:`Выбор даты`},{id:`property-field`,label:`Строка свойства`},{id:`property-field-meta`,label:`Badge и Tag в значении`},{id:`property-field-date`,label:`DatePicker в значении`},{id:`api`,label:`API`}];function x(){return(0,y.jsx)(l,{title:`Forms Extended`,description:`Расширенные элементы форм: многострочный ввод, выбор даты и строка свойства.`,breadcrumbs:v(`/components/forms-extended`),children:(0,y.jsx)(u,{presentation:`article`,label:`Forms Extended`,inspector:_(b),document:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(h,{title:`Textarea`,description:`Многострочный ввод с возможностью изменения высоты. Минимальная высота 5rem. FieldRecipe связывает подпись с полем через htmlFor.`,code:`<FieldRecipe label="Описание проблемы" htmlFor="forms-extended-problem">
  <Textarea id="forms-extended-problem" placeholder="Опишите проблему..." />
</FieldRecipe>
<FieldRecipe label="Подробности проблемы" htmlFor="forms-extended-details">
  <Textarea id="forms-extended-details" defaultValue="Сервер не отвечает на запросы после деплоя v2.3.1." />
</FieldRecipe>
<FieldRecipe label="Недоступное поле" htmlFor="forms-extended-disabled">
  <Textarea id="forms-extended-disabled" disabled placeholder="Disabled textarea" />
</FieldRecipe>
<FieldRecipe label="Описание ошибки" htmlFor="forms-extended-validation">
  <Textarea id="forms-extended-validation" signal="err" placeholder="Ошибка валидации..." />
</FieldRecipe>`,layout:`stack`,children:[(0,y.jsx)(c,{label:`Описание проблемы`,htmlFor:`forms-extended-problem`,children:(0,y.jsx)(t,{id:`forms-extended-problem`,placeholder:`Опишите проблему...`})}),(0,y.jsx)(c,{label:`Подробности проблемы`,htmlFor:`forms-extended-details`,children:(0,y.jsx)(t,{id:`forms-extended-details`,defaultValue:`Сервер не отвечает на запросы после деплоя v2.3.1.`})}),(0,y.jsx)(c,{label:`Недоступное поле`,htmlFor:`forms-extended-disabled`,children:(0,y.jsx)(t,{id:`forms-extended-disabled`,disabled:!0,placeholder:`Disabled textarea`})}),(0,y.jsx)(c,{label:`Описание ошибки`,htmlFor:`forms-extended-validation`,children:(0,y.jsx)(t,{id:`forms-extended-validation`,signal:`err`,placeholder:`Ошибка валидации...`})})]}),(0,y.jsx)(i,{children:`Дополнение к базовым полям ввода для сложных форм. Textarea — для свободного текста, DatePicker — для календарных значений. PropertyField связывает подпись со значением в горизонтальной строке: так устроены панели подробностей и списки свойств.`}),(0,y.jsx)(s,{id:`usage`,label:`Использование`,children:(0,y.jsx)(r,{copyLabel:`Скопировать код: PropertyField, Textarea и DatePicker`,language:`tsx`,code:`import { PropertyField, Textarea } from "@chucky23/design-system/react"
import { DatePicker } from "@chucky23/design-system/extended/date-picker"
import { FieldRecipe } from "@chucky23/design-system/recipes/field"

<FieldRecipe label="Описание" htmlFor="description">
  <Textarea id="description" />
</FieldRecipe>
<PropertyField label="Дедлайн">
  <DatePicker value={date} onChange={setDate} />
</PropertyField>`})}),(0,y.jsx)(s,{id:`textarea-signals`,label:`Сигналы Textarea`,children:(0,y.jsxs)(h,{title:`Signal-состояния`,description:`Signal-цвет меняет border: ok (teal), warn (ember), err (alert), info (indigo).`,code:`<FieldRecipe label="Проверенные сведения" htmlFor="forms-extended-ok">
  <Textarea id="forms-extended-ok" signal="ok" placeholder="Всё корректно" />
</FieldRecipe>
<FieldRecipe label="Сведения для проверки" htmlFor="forms-extended-warn">
  <Textarea id="forms-extended-warn" signal="warn" placeholder="Требует внимания" />
</FieldRecipe>
<FieldRecipe label="Критическая ошибка" htmlFor="forms-extended-err">
  <Textarea id="forms-extended-err" signal="err" placeholder="Критическая ошибка" />
</FieldRecipe>
<FieldRecipe label="Дополнительная информация" htmlFor="forms-extended-info">
  <Textarea id="forms-extended-info" signal="info" placeholder="Информация" />
</FieldRecipe>`,layout:`stack`,children:[(0,y.jsx)(c,{label:`Проверенные сведения`,htmlFor:`forms-extended-ok`,children:(0,y.jsx)(t,{id:`forms-extended-ok`,signal:`ok`,placeholder:`Всё корректно`})}),(0,y.jsx)(c,{label:`Сведения для проверки`,htmlFor:`forms-extended-warn`,children:(0,y.jsx)(t,{id:`forms-extended-warn`,signal:`warn`,placeholder:`Требует внимания`})}),(0,y.jsx)(c,{label:`Критическая ошибка`,htmlFor:`forms-extended-err`,children:(0,y.jsx)(t,{id:`forms-extended-err`,signal:`err`,placeholder:`Критическая ошибка`})}),(0,y.jsx)(c,{label:`Дополнительная информация`,htmlFor:`forms-extended-info`,children:(0,y.jsx)(t,{id:`forms-extended-info`,signal:`info`,placeholder:`Информация`})})]})}),(0,y.jsxs)(s,{id:`date-picker`,label:`Выбор даты`,children:[(0,y.jsx)(h,{title:`Выбор даты`,description:`DatePicker открывает Calendar в Popover. Выбранная дата форматируется по-русски.`,code:`const [date, setDate] = useState<Date | undefined>()

<DatePicker value={date} onChange={setDate} />`,children:(0,y.jsx)(p,{})}),(0,y.jsx)(h,{title:`Выбор месяца и года`,description:`Режим captionLayout со значением dropdown показывает в шапке списки месяца и года: дальняя дата выбирается без листания по месяцу.`,code:`<DatePicker value={date} onChange={setDate} captionLayout="dropdown" />`,children:(0,y.jsx)(p,{captionLayout:`dropdown`})})]}),(0,y.jsx)(s,{id:`property-field`,label:`Строка свойства`,children:(0,y.jsxs)(h,{title:`Текстовое значение`,description:`PropertyField — строка вида label: value. Label занимает фиксированную ширину 96px.`,code:`<PropertyField label="Автор">Иван Петров</PropertyField>
<PropertyField label="Проект">anikin-lab</PropertyField>`,layout:`stack`,children:[(0,y.jsx)(o,{label:`Автор`,children:`Иван Петров`}),(0,y.jsx)(o,{label:`Проект`,children:`anikin-lab`})]})}),(0,y.jsx)(s,{id:`property-field-meta`,label:`Badge и Tag в значении`,children:(0,y.jsxs)(h,{title:`С Badge и Tag`,description:`В value-слот можно поместить Badge, TagGroup, StatusRecipe или другие компоненты.`,code:`<PropertyField label="Статус">
  <StatusRecipe status="progress" label="In Progress" />
</PropertyField>
<PropertyField label="Приоритет">
  <Badge variant="warn">P1 High</Badge>
</PropertyField>
<PropertyField label="Теги">
  <TagGroup>
    <Tag color="ok" size="sm">frontend</Tag>
    <Tag color="info" size="sm">v2</Tag>
  </TagGroup>
</PropertyField>`,layout:`stack`,children:[(0,y.jsx)(o,{label:`Статус`,children:(0,y.jsx)(f,{status:`progress`,label:`In Progress`})}),(0,y.jsx)(o,{label:`Приоритет`,children:(0,y.jsx)(d,{variant:`warn`,children:`P1 High`})}),(0,y.jsx)(o,{label:`Теги`,children:(0,y.jsxs)(n,{children:[(0,y.jsx)(a,{color:`ok`,size:`sm`,children:`frontend`}),(0,y.jsx)(a,{color:`info`,size:`sm`,children:`v2`})]})})]})}),(0,y.jsx)(s,{id:`property-field-date`,label:`DatePicker в значении`,children:(0,y.jsx)(h,{title:`С DatePicker`,description:`DatePicker внутри PropertyField — типичный паттерн для полей формы свойств задачи.`,code:`const [date, setDate] = useState<Date | undefined>(new Date())

<PropertyField label="Дедлайн">
  <DatePicker value={date} onChange={setDate} />
</PropertyField>`,layout:`stack`,children:(0,y.jsx)(g,{})})}),(0,y.jsxs)(s,{id:`api`,label:`API`,children:[(0,y.jsx)(m,{title:`Пропсы Textarea`,props:[{name:`signal`,type:`"ok" | "warn" | "err" | "info"`,defaultValue:`—`,description:`Сигнальный цвет рамки.`},{name:`autoSize`,type:`boolean | { minRows?: number; maxRows?: number }`,defaultValue:`false`,description:`Высота следует за текстом в заданных пределах строк.`},{name:`showCount`,type:`boolean`,defaultValue:`—`,description:`Показывает счётчик символов.`},{name:`disabled`,type:`boolean`,defaultValue:`—`,description:`Отключает поле.`}]}),(0,y.jsx)(m,{title:`Пропсы DatePicker`,props:[{name:`value`,type:`Date`,defaultValue:`—`,description:`Выбранная дата.`},{name:`onChange`,type:`(date: Date | undefined) => void`,defaultValue:`—`,description:`Колбэк выбора даты.`},{name:`placeholder`,type:`string`,defaultValue:`"Выбрать дату"`,description:`Текст кнопки без выбранной даты.`},{name:`ariaLabel`,type:`string`,defaultValue:`—`,description:`Доступное название кнопки открытия календаря.`},{name:`formatDate`,type:`(date: Date) => string`,defaultValue:`длинная дата ru-RU`,description:`Формат выбранной даты на кнопке.`},{name:`captionLayout`,type:`"label" | "dropdown"`,defaultValue:`"label"`,description:`Шапка календаря: подпись месяца или списки месяца и года.`}]}),(0,y.jsx)(m,{title:`Пропсы PropertyField`,props:[{name:`label`,type:`string`,defaultValue:`—`,description:`Подпись слева, ширина 96px.`},{name:`children`,type:`ReactNode`,defaultValue:`—`,description:`Значение: текст, Badge, TagGroup, DatePicker.`}]})]})]})})})}export{x as default};