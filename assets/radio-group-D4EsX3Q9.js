import{a as e,n as t,t as n}from"./jsx-runtime-dBoqvwbd.js";import{ct as r,lt as i}from"./chunk-NA6PDP3U-Cjn5wWWb.js";import{K as a}from"./chunk-L52MJC5L-Da5AAZeo.js";import{Fn as o,M as s,Ot as c,St as l,pt as u,rt as d,tn as f}from"./index-DnsCB0LC.js";var p=e(t(),1),m=n();function h(){let[e,t]=(0,p.useState)(`done`);return(0,m.jsxs)(l,{kind:`component`,route:`/components/radio-group`,description:`Выбор одного значения из двух–пяти вариантов, которые стоит видеть сразу. Для длинного списка бери Select.`,usage:(0,m.jsx)(o,{use:[`Один вариант из двух–пяти, которые стоит видеть одновременно.`,`Выбор с пояснением под каждым вариантом: description.`],avoid:[{text:`Шесть и больше вариантов.`,instead:{href:`/components/select`,label:`Select`}},{text:`Независимые признаки.`,instead:{href:`/components/checkbox`,label:`Checkbox`}},{text:`Переключение вида в панели инструментов.`,instead:{href:`/components/toggle-group`,label:`ToggleGroup`}}]}),example:(0,m.jsxs)(d,{layout:`stack`,code:`<Label id="closure">Режим закрытия</Label>
<RadioGroup defaultValue="done" aria-labelledby="closure">
  <RadioGroupItem value="none">Без закрытия</RadioGroupItem>
  <RadioGroupItem value="done">Закрыта</RadioGroupItem>
  <RadioGroupItem value="carry">Перенос с остатком</RadioGroupItem>
</RadioGroup>`,gpuiCode:`use anikin_lab_gpui::prelude::*;

let group = DsRadioGroup::new("closure")
    .item(DsRadioItem::new("none", "Без закрытия"))
    .item(DsRadioItem::new("done", "Закрыта").description("Остаток работы списывается"))
    .item(DsRadioItem::new("carry", "Перенос с остатком"))
    .value("done")
    .accessibility_label("Режим закрытия")
    .on_change(|value, _window, _cx| {
        let _ = value;
    });`,children:[(0,m.jsx)(a,{id:`radio-closure`,children:`Режим закрытия`}),(0,m.jsxs)(r,{defaultValue:`done`,"aria-labelledby":`radio-closure`,children:[(0,m.jsx)(i,{value:`none`,children:`Без закрытия`}),(0,m.jsx)(i,{value:`done`,children:`Закрыта`}),(0,m.jsx)(i,{value:`carry`,children:`Перенос с остатком`})]})]}),imports:(0,m.jsx)(u,{from:`@chucky23/design-system/react`,names:[`RadioGroup`,`RadioGroupItem`,`Label`]}),api:(0,m.jsx)(s,{items:[{name:`RadioGroup`,props:[{name:`value`,type:`string`,description:`Управляемое значение, вместе с onValueChange.`},{name:`defaultValue`,type:`string`,description:`Начальное значение без управления.`},{name:`onValueChange`,type:`(value, details) => void`,description:`Вызывается при смене значения.`},{name:`orientation`,type:`"vertical" | "horizontal"`,defaultValue:`"vertical"`,description:`Столбцом или в строку с переносом.`},{name:`disabled`,type:`boolean`,defaultValue:`false`,description:`Отключает все варианты.`},{name:`required`,type:`boolean`,defaultValue:`false`,description:`Обязательный выбор перед отправкой.`},{name:`name`,type:`string`,description:`Имя поля при отправке формы.`}]},{name:`RadioGroupItem`,props:[{name:`value`,type:`string | number`,required:!0,description:`Значение варианта.`},{name:`children`,type:`ReactNode`,description:`Подпись варианта.`},{name:`description`,type:`ReactNode`,description:`Пояснение под подписью, связано через aria-describedby.`},{name:`variant`,type:`"default" | "outline"`,defaultValue:`"default"`,description:`Фон кружка.`},{name:`size`,type:`"default" | "sm" | "lg"`,defaultValue:`"default"`,description:`Кружок 16, 14 или 20 px.`},{name:`disabled`,type:`boolean`,defaultValue:`false`,description:`Отключает один вариант.`}]}]}),related:(0,m.jsx)(c,{links:[{href:`/components/select`,label:`Select`,description:`Длинный список вариантов.`},{href:`/components/toggle-group`,label:`ToggleGroup`,description:`Короткий выбор в одну строку.`},{href:`/components/checkbox`,label:`Checkbox`,description:`Несколько независимых флажков.`},{href:`/components/label`,label:`Label`,description:`Подпись группы.`}]}),children:[(0,m.jsx)(f,{id:`controlled`,label:`Управляемое значение`,description:`Когда выбор влияет на соседние поля: значение хранит приложение.`,children:(0,m.jsx)(d,{layout:`stack`,code:`import { useState } from "react"

function ClosureMode() {
  const [mode, setMode] = useState("done")
  return (
    <RadioGroup value={mode} onValueChange={setMode} aria-label="Режим закрытия">
      <RadioGroupItem value="done">Закрыта</RadioGroupItem>
      <RadioGroupItem value="carry">Перенос с остатком</RadioGroupItem>
    </RadioGroup>
  )
}`,children:(0,m.jsxs)(r,{value:e,onValueChange:t,"aria-label":`Режим закрытия`,children:[(0,m.jsx)(i,{value:`done`,children:`Закрыта`}),(0,m.jsx)(i,{value:`carry`,children:`Перенос с остатком`})]})})}),(0,m.jsx)(f,{id:`description`,label:`Пояснение варианта`,description:`Когда последствия вариантов неочевидны: description объясняет каждый.`,children:(0,m.jsx)(d,{layout:`stack`,code:`<RadioGroup defaultValue="carry" aria-label="Режим закрытия">
  <RadioGroupItem value="done" description="Остаток работы списывается">Закрыта</RadioGroupItem>
  <RadioGroupItem value="carry" description="Задача переходит в следующий спринт">Перенос с остатком</RadioGroupItem>
</RadioGroup>`,children:(0,m.jsxs)(r,{defaultValue:`carry`,"aria-label":`Режим закрытия с пояснениями`,children:[(0,m.jsx)(i,{value:`done`,description:`Остаток работы списывается`,children:`Закрыта`}),(0,m.jsx)(i,{value:`carry`,description:`Задача переходит в следующий спринт`,children:`Перенос с остатком`})]})})}),(0,m.jsx)(f,{id:`horizontal`,label:`В строку`,description:`Когда варианты короткие, например период отчёта, и строка экономит высоту.`,children:(0,m.jsx)(d,{code:`<RadioGroup defaultValue="week" orientation="horizontal" aria-label="Период">
  <RadioGroupItem value="day">День</RadioGroupItem>
  <RadioGroupItem value="week">Неделя</RadioGroupItem>
  <RadioGroupItem value="month">Месяц</RadioGroupItem>
</RadioGroup>`,children:(0,m.jsxs)(r,{defaultValue:`week`,orientation:`horizontal`,"aria-label":`Период`,children:[(0,m.jsx)(i,{value:`day`,children:`День`}),(0,m.jsx)(i,{value:`week`,children:`Неделя`}),(0,m.jsx)(i,{value:`month`,children:`Месяц`})]})})}),(0,m.jsx)(f,{id:`states`,label:`Отключение и ошибка`,description:`Когда вариант или вся группа недоступны, или выбор обязателен. Ошибку показывает aria-invalid на варианте.`,children:(0,m.jsxs)(d,{layout:`stack`,code:`<RadioGroup defaultValue="active" aria-label="Состояние">
  <RadioGroupItem value="active">Активна</RadioGroupItem>
  <RadioGroupItem value="archived" disabled>В архиве</RadioGroupItem>
</RadioGroup>
<RadioGroup disabled defaultValue="team" aria-label="Видимость доски">
  <RadioGroupItem value="team">Команда</RadioGroupItem>
  <RadioGroupItem value="org">Вся организация</RadioGroupItem>
</RadioGroup>
<RadioGroup aria-label="Исполнитель по умолчанию">
  <RadioGroupItem value="author" aria-invalid>Автор задачи</RadioGroupItem>
  <RadioGroupItem value="duty" aria-invalid>Дежурный</RadioGroupItem>
</RadioGroup>`,children:[(0,m.jsxs)(r,{defaultValue:`active`,"aria-label":`Состояние`,children:[(0,m.jsx)(i,{value:`active`,children:`Активна`}),(0,m.jsx)(i,{value:`archived`,disabled:!0,children:`В архиве`})]}),(0,m.jsxs)(r,{disabled:!0,defaultValue:`team`,"aria-label":`Видимость доски`,children:[(0,m.jsx)(i,{value:`team`,children:`Команда`}),(0,m.jsx)(i,{value:`org`,children:`Вся организация`})]}),(0,m.jsxs)(r,{"aria-label":`Исполнитель по умолчанию`,children:[(0,m.jsx)(i,{value:`author`,"aria-invalid":!0,children:`Автор задачи`}),(0,m.jsx)(i,{value:`duty`,"aria-invalid":!0,children:`Дежурный`})]})]})})]})}export{h as default};