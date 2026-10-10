import{$ as e,$n as t,Hn as n,Mo as r,Xn as i,c as a,ln as o,pr as s,yn as c}from"./chunk-ZW5N5E5H-C8fDcLjq.js";import{M as l,T as u,p as d,r as f,s as p}from"./docs-CtJuZ0WF.js";import"./index-D3G-KnJA.js";var m=r();function h(){return(0,m.jsxs)(p,{className:`flex flex-col gap-6`,children:[(0,m.jsx)(n,{title:`Forms Extended`,description:`Расширенные элементы форм: многострочный ввод, выбор даты и строка свойства.`}),(0,m.jsx)(l,{className:`max-w-prose`,"data-body":!0,children:`Дополнение к базовым inputs для сложных форм. Textarea для свободного текста, DatePicker для календарных значений, PropertyField связывает label со значением в горизонтальной строке — удобно для detail-панелей и property-списков.`}),(0,m.jsx)(t,{label:`textarea`,children:(0,m.jsx)(f,{title:`Базовый`,description:`Многострочный ввод с возможностью изменения высоты. Минимальная высота 5rem.`,code:`<div>
  <Label htmlFor="forms-extended-problem">Описание проблемы</Label>
  <Textarea id="forms-extended-problem" placeholder="Опишите проблему..." />
</div>
<div>
  <Label htmlFor="forms-extended-details">Подробности проблемы</Label>
  <Textarea id="forms-extended-details" defaultValue="Сервер не отвечает на запросы после деплоя v2.3.1." />
</div>
<div>
  <Label htmlFor="forms-extended-disabled">Недоступное поле</Label>
  <Textarea id="forms-extended-disabled" disabled placeholder="Disabled textarea" />
</div>
<div>
  <Label htmlFor="forms-extended-validation">Описание ошибки</Label>
  <Textarea id="forms-extended-validation" signal="err" placeholder="Ошибка валидации..." />
</div>`,children:(0,m.jsxs)(p,{className:`flex w-full flex-col gap-3`,children:[(0,m.jsxs)(p,{className:`flex flex-col gap-2`,children:[(0,m.jsx)(e,{htmlFor:`forms-extended-problem`,children:`Описание проблемы`}),(0,m.jsx)(s,{id:`forms-extended-problem`,placeholder:`Опишите проблему...`})]}),(0,m.jsxs)(p,{className:`flex flex-col gap-2`,children:[(0,m.jsx)(e,{htmlFor:`forms-extended-details`,children:`Подробности проблемы`}),(0,m.jsx)(s,{id:`forms-extended-details`,defaultValue:`Сервер не отвечает на запросы после деплоя v2.3.1.`})]}),(0,m.jsxs)(p,{className:`flex flex-col gap-2`,children:[(0,m.jsx)(e,{htmlFor:`forms-extended-disabled`,children:`Недоступное поле`}),(0,m.jsx)(s,{id:`forms-extended-disabled`,disabled:!0,placeholder:`Disabled textarea`})]}),(0,m.jsxs)(p,{className:`flex flex-col gap-2`,children:[(0,m.jsx)(e,{htmlFor:`forms-extended-validation`,children:`Описание ошибки`}),(0,m.jsx)(s,{id:`forms-extended-validation`,signal:`err`,placeholder:`Ошибка валидации...`})]})]})})}),(0,m.jsx)(t,{label:`textarea / сигналы`,children:(0,m.jsx)(f,{title:`Signal-состояния`,description:`Signal-цвет меняет border: ok (teal), warn (ember), err (alert), info (indigo).`,code:`<div>
  <Label htmlFor="forms-extended-ok">Проверенные сведения</Label>
  <Textarea id="forms-extended-ok" signal="ok" placeholder="Всё корректно" />
</div>
<div>
  <Label htmlFor="forms-extended-warn">Сведения для проверки</Label>
  <Textarea id="forms-extended-warn" signal="warn" placeholder="Требует внимания" />
</div>
<div>
  <Label htmlFor="forms-extended-err">Критическая ошибка</Label>
  <Textarea id="forms-extended-err" signal="err" placeholder="Критическая ошибка" />
</div>
<div>
  <Label htmlFor="forms-extended-info">Дополнительная информация</Label>
  <Textarea id="forms-extended-info" signal="info" placeholder="Информация" />
</div>`,children:(0,m.jsxs)(p,{className:`flex w-full flex-col gap-3`,children:[(0,m.jsxs)(p,{className:`flex flex-col gap-2`,children:[(0,m.jsx)(e,{htmlFor:`forms-extended-ok`,children:`Проверенные сведения`}),(0,m.jsx)(s,{id:`forms-extended-ok`,signal:`ok`,placeholder:`Всё корректно`})]}),(0,m.jsxs)(p,{className:`flex flex-col gap-2`,children:[(0,m.jsx)(e,{htmlFor:`forms-extended-warn`,children:`Сведения для проверки`}),(0,m.jsx)(s,{id:`forms-extended-warn`,signal:`warn`,placeholder:`Требует внимания`})]}),(0,m.jsxs)(p,{className:`flex flex-col gap-2`,children:[(0,m.jsx)(e,{htmlFor:`forms-extended-err`,children:`Критическая ошибка`}),(0,m.jsx)(s,{id:`forms-extended-err`,signal:`err`,placeholder:`Критическая ошибка`})]}),(0,m.jsxs)(p,{className:`flex flex-col gap-2`,children:[(0,m.jsx)(e,{htmlFor:`forms-extended-info`,children:`Дополнительная информация`}),(0,m.jsx)(s,{id:`forms-extended-info`,signal:`info`,placeholder:`Информация`})]})]})})}),(0,m.jsx)(t,{label:`date picker`,children:(0,m.jsx)(f,{title:`Выбор даты`,description:`DatePicker открывает Calendar в Popover. Выбранная дата форматируется по-русски.`,code:`const [date, setDate] = useState<Date | undefined>()

<DatePicker value={date} onChange={setDate} />`,children:(0,m.jsx)(d,{})})}),(0,m.jsx)(t,{label:`property field`,children:(0,m.jsx)(f,{title:`Текстовое значение`,description:`PropertyField — строка вида label: value. Label занимает фиксированную ширину 96px.`,code:`<PropertyField label="Автор">
  <span className="text-sm">Иван Петров</span>
</PropertyField>
<PropertyField label="Проект">
  <span className="text-sm">anikin-lab</span>
</PropertyField>`,children:(0,m.jsxs)(p,{className:`w-full max-w-md`,children:[(0,m.jsx)(i,{label:`Автор`,children:(0,m.jsx)(l,{as:`span`,className:`text-sm`,children:`Иван Петров`})}),(0,m.jsx)(i,{label:`Проект`,children:(0,m.jsx)(l,{as:`span`,className:`text-sm`,children:`anikin-lab`})})]})})}),(0,m.jsx)(t,{label:`property field / badge и tag`,children:(0,m.jsx)(f,{title:`С Badge и Tag`,description:`В value-слот можно поместить Badge, Tag, StatusIcon или другие компоненты.`,code:`<PropertyField label="Статус">
  <div className="flex items-center gap-2">
    <StatusIcon status="progress" />
    <span className="text-sm">In Progress</span>
  </div>
</PropertyField>
<PropertyField label="Приоритет">
  <Badge variant="warn">P1 High</Badge>
</PropertyField>
<PropertyField label="Теги">
  <div className="flex gap-1">
    <Tag color="ok" size="sm">frontend</Tag>
    <Tag color="info" size="sm">v2</Tag>
  </div>
</PropertyField>`,children:(0,m.jsxs)(p,{className:`w-full max-w-md`,children:[(0,m.jsx)(i,{label:`Статус`,children:(0,m.jsxs)(p,{className:`flex items-center gap-2`,children:[(0,m.jsx)(c,{status:`progress`}),(0,m.jsx)(l,{as:`span`,className:`text-sm`,children:`In Progress`})]})}),(0,m.jsx)(i,{label:`Приоритет`,children:(0,m.jsx)(a,{variant:`warn`,children:`P1 High`})}),(0,m.jsx)(i,{label:`Теги`,children:(0,m.jsxs)(p,{className:`flex gap-1`,children:[(0,m.jsx)(o,{color:`ok`,size:`sm`,children:`frontend`}),(0,m.jsx)(o,{color:`info`,size:`sm`,children:`v2`})]})})]})})}),(0,m.jsx)(t,{label:`property field / date picker`,children:(0,m.jsx)(f,{title:`С DatePicker`,description:`DatePicker внутри PropertyField — типичный паттерн для полей формы свойств задачи.`,code:`const [date, setDate] = useState<Date | undefined>(new Date())

<PropertyField label="Дедлайн">
  <DatePicker value={date} onChange={setDate} />
</PropertyField>`,children:(0,m.jsx)(p,{className:`w-full max-w-md`,children:(0,m.jsx)(u,{})})})})]})}export{h as default};