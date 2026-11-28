import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{dt as t}from"./chunk-NA6PDP3U-Cjn5wWWb.js";import{S as n,j as r,st as i}from"./useLabelableId-Ck49MOKz.js";import{v as a}from"./chunk-L52MJC5L-Da5AAZeo.js";import{Fn as o,M as s,Ot as c,St as l,nn as u,pt as d,rn as f,rt as p,tn as m}from"./index-DnsCB0LC.js";var h=e(),g=`import { useState } from "react"

function AssigneeModeField() {
  const [mode, setMode] = useState<"auto" | "manual" | "duty">("auto")
  return (
    <FieldRecipe layout="horizontal" label="Назначение задачи" labelId="assignee-mode">
      <SegmentedControl
        aria-labelledby="assignee-mode"
        value={mode}
        onValueChange={setMode}
        options={[
          { value: "auto", label: "Авто" },
          { value: "manual", label: "Вручную" },
          { value: "duty", label: "Дежурный" },
        ]}
      />
    </FieldRecipe>
  )
}`,_=`import { Button, Input } from "@chucky23/design-system/react"

<SegmentedControl
  size="xs"
  aria-label="Режим xs"
  defaultValue="manual"
  options={[
    { value: "manual", label: "Вручную" },
    { value: "schedule", label: "По расписанию" },
  ]}
/>
<SegmentedControl
  size="sm"
  aria-label="Режим sm"
  defaultValue="auto"
  options={[
    { value: "auto", label: "Авто" },
    { value: "manual", label: "Вручную" },
  ]}
/>
<Input aria-label="Поле sm" defaultValue="24 px" />
<Button size="sm" tone="neutral" variant="outline">Кнопка sm</Button>`,v=`<SegmentedControl
  width="auto"
  aria-label="По содержимому"
  defaultValue="day"
  options={[
    { value: "day", label: "День" },
    { value: "week", label: "Неделя" },
  ]}
/>
<SegmentedControl
  width="sm"
  aria-label="Фиксированная ширина sm"
  defaultValue="manual"
  options={[
    { value: "manual", label: "Вручную" },
    { value: "auto", label: "Авто" },
  ]}
/>
<SegmentedControl
  width="md"
  aria-label="Фиксированная ширина md"
  defaultValue="warn"
  options={[
    { value: "warn", label: "Предупреждение" },
    { value: "error", label: "Ошибка" },
  ]}
/>
<SegmentedControl
  width="full"
  aria-label="На всю ширину"
  defaultValue="all"
  options={[
    { value: "all", label: "Все" },
    { value: "open", label: "Открытые" },
    { value: "mine", label: "Мои" },
  ]}
/>`,y=`import { BoardIcon, ClockIcon, ListIcon } from "@chucky23/design-system/icons"

<SegmentedControl
  aria-label="Представление"
  defaultValue="list"
  options={[
    { value: "list", label: "Список", icon: <ListIcon size="xs" aria-hidden="true" /> },
    { value: "board", label: "Доска", icon: <BoardIcon size="xs" aria-hidden="true" /> },
    { value: "schedule", label: "График", icon: <ClockIcon size="xs" aria-hidden="true" /> },
  ]}
/>`,b=`<SegmentedControl
  aria-label="Режим с отключённым вариантом"
  defaultValue="manual"
  options={[
    { value: "manual", label: "Вручную" },
    { value: "auto", label: "Авто", disabled: true },
  ]}
/>
<SegmentedControl
  disabled
  aria-label="Отключённая группа"
  defaultValue="manual"
  options={[
    { value: "manual", label: "Вручную" },
    { value: "schedule", label: "По расписанию" },
  ]}
/>
<FieldRecipe label="Политика запуска" labelId="policy-err" error="Выбери режим запуска">
  <SegmentedControl
    aria-labelledby="policy-err"
    required
    options={[
      { value: "manual", label: "Вручную" },
      { value: "auto", label: "Авто" },
    ]}
  />
</FieldRecipe>`,x=[{name:`SegmentedControl`,props:[{name:`options`,type:`ReadonlyArray<SegmentedControlOption<TValue>>`,required:!0,description:`Варианты одиночного выбора (2–4 взаимоисключающих значения).`},{name:`value`,type:`TValue`,description:`Управляемое выбранное значение вместе с onValueChange.`},{name:`defaultValue`,type:`TValue`,description:`Начальное значение в неуправляемом режиме.`},{name:`onValueChange`,type:`(value: TValue) => void`,description:`Вызывается при смене выбранного сегмента.`},{name:`size`,type:`"xs" | "sm" | "md"`,defaultValue:`"sm"`,description:`Высота контрола: xs 20 px, sm 24 px (совпадает с Input и Button), md 28 px.`},{name:`width`,type:`"auto" | "sm" | "md" | "full"`,defaultValue:`"auto"`,description:`Ширина контрола: auto по содержимому, sm 11rem, md 14rem, full 100%.`},{name:`equalWidth`,type:`boolean`,defaultValue:`true`,description:`Делит ширину группы между сегментами поровну.`},{name:`name`,type:`string`,description:`Имя скрытого поля input для отправки в нативной форме.`},{name:`disabled`,type:`boolean`,defaultValue:`false`,description:`Блокирует выбор во всей группе.`},{name:`required`,type:`boolean`,defaultValue:`false`,description:`Ставит aria-required для обязательного выбора.`}]},{name:`SegmentedControlOption`,props:[{name:`value`,type:`TValue`,required:!0,description:`Значение варианта.`},{name:`label`,type:`ReactNode`,required:!0,description:`Видимая подпись сегмента.`},{name:`icon`,type:`ReactNode`,description:`Необязательный значок слева от подписи.`},{name:`disabled`,type:`boolean`,defaultValue:`false`,description:`Отключает конкретный вариант.`},{name:`ariaLabel`,type:`string`,description:`Доступное имя сегмента, если подпись сокращена.`}]}],S=[{href:`/recipes/field`,label:`FieldRecipe`,description:`Горизонтальная и вертикальная строка формы с SegmentedControl.`},{href:`/components/radio-group`,label:`RadioGroup`,description:`Вертикальный выбор, когда каждому варианту нужно описание.`},{href:`/components/toggle-group`,label:`ToggleGroup`,description:`Режимы панели инструментов и множественный выбор.`},{href:`/components/switch`,label:`Switch`,description:`Настройка, которая применяется сразу без кнопки сохранения.`}];function C(){return(0,h.jsxs)(l,{kind:`component`,route:`/components/segmented-control`,description:`Сегментированный переключатель одного значения для форм: радио-семантика, равная ширина сегментов и точное совпадение высоты с Input и Button.`,usage:(0,h.jsx)(o,{use:[`Выбор одного из 2–4 взаимоисключающих значений в форме с кнопкой сохранения.`,`Компактная горизонтальная строка «подпись слева — выбор справа» в FieldRecipe.`,`Клавиатурная навигация стрелками с радио-семантикой role=radiogroup.`],avoid:[{text:`Варианты требуют подробного пояснения под каждой строкой.`,instead:{href:`/components/radio-group`,label:`RadioGroup`}},{text:`Пять и более вариантов.`,instead:{href:`/components/select`,label:`Select`}},{text:`Переключение применяется сразу, без сохранения формы.`,instead:{href:`/components/switch`,label:`Switch`}},{text:`Несколько независимых фильтров в панели инструментов.`,instead:{href:`/components/toggle-group`,label:`ToggleGroup`}}]}),example:(0,h.jsx)(p,{layout:`stack`,code:g,children:(0,h.jsx)(u,{})}),imports:(0,h.jsx)(d,{code:`import { SegmentedControl } from "@chucky23/design-system/react"
import { FieldRecipe } from "@chucky23/design-system/recipes/field"`}),api:(0,h.jsx)(s,{items:x}),related:(0,h.jsx)(c,{links:S}),children:[(0,h.jsx)(m,{id:`sizes`,label:`Размеры и паритет высоты`,description:`Шкала xs (20 px), sm (24 px по умолчанию) и md (28 px) совпадает по высоте с Input, Select и Button того же уровня плотности.`,children:(0,h.jsx)(p,{layout:`stack`,code:_,children:(0,h.jsx)(f,{})})}),(0,h.jsx)(m,{id:`widths`,label:`Ширина группы`,description:`Проп width задаёт ширину без произвольных классов: auto по содержимому, sm 11rem, md 14rem и full на всю колонку.`,children:(0,h.jsxs)(p,{layout:`stack`,code:v,children:[(0,h.jsx)(t,{width:`auto`,"aria-label":`По содержимому`,defaultValue:`day`,options:[{value:`day`,label:`День`},{value:`week`,label:`Неделя`}]}),(0,h.jsx)(t,{width:`sm`,"aria-label":`Фиксированная ширина sm`,defaultValue:`manual`,options:[{value:`manual`,label:`Вручную`},{value:`auto`,label:`Авто`}]}),(0,h.jsx)(t,{width:`md`,"aria-label":`Фиксированная ширина md`,defaultValue:`warn`,options:[{value:`warn`,label:`Предупреждение`},{value:`error`,label:`Ошибка`}]}),(0,h.jsx)(t,{width:`full`,"aria-label":`На всю ширину`,defaultValue:`all`,options:[{value:`all`,label:`Все`},{value:`open`,label:`Открытые`},{value:`mine`,label:`Мои`}]})]})}),(0,h.jsx)(m,{id:`icons`,label:`Значки в сегментах`,description:`Необязательный icon в варианте ставит значок 12 px перед подписью и выравнивает его по центру строки.`,children:(0,h.jsx)(p,{code:y,children:(0,h.jsx)(t,{"aria-label":`Представление`,defaultValue:`list`,options:[{value:`list`,label:`Список`,icon:(0,h.jsx)(i,{size:`xs`,"aria-hidden":`true`})},{value:`board`,label:`Доска`,icon:(0,h.jsx)(n,{size:`xs`,"aria-hidden":`true`})},{value:`schedule`,label:`График`,icon:(0,h.jsx)(r,{size:`xs`,"aria-hidden":`true`})}]})})}),(0,h.jsx)(m,{id:`states`,label:`Отключение и ошибка`,description:`Можно отключить отдельный сегмент или всю группу. Внутри FieldRecipe с ошибкой группа автоматически получает сигнальную рамку и aria-invalid.`,children:(0,h.jsxs)(p,{layout:`stack`,code:b,children:[(0,h.jsx)(t,{"aria-label":`Режим с отключённым вариантом`,defaultValue:`manual`,options:[{value:`manual`,label:`Вручную`},{value:`auto`,label:`Авто`,disabled:!0}]}),(0,h.jsx)(t,{disabled:!0,"aria-label":`Отключённая группа`,defaultValue:`manual`,options:[{value:`manual`,label:`Вручную`},{value:`schedule`,label:`По расписанию`}]}),(0,h.jsx)(a,{label:`Политика запуска`,labelId:`docs-seg-policy-err`,error:`Выбери режим запуска`,children:(0,h.jsx)(t,{"aria-labelledby":`docs-seg-policy-err`,required:!0,options:[{value:`manual`,label:`Вручную`},{value:`auto`,label:`Авто`}]})})]})})]})}export{C as default};