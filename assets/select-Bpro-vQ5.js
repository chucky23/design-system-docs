import{a as e,n as t,t as n}from"./jsx-runtime-dBoqvwbd.js";import{t as r}from"./chunk-A5ATJWCD-D5u-P5Xy.js";import{v as i}from"./chunk-L52MJC5L-Da5AAZeo.js";import{Fn as a,M as o,Ot as s,St as c,_i as l,in as u,pt as d,rt as f,tn as p,xn as m,yi as h}from"./index-DnsCB0LC.js";var g=e(t(),1),_=n(),v=[{value:`sev1`,label:`SEV-1 Критичный`},{value:`sev2`,label:`SEV-2 Высокий`},{value:`sev3`,label:`SEV-3 Средний`},{value:`sev4`,label:`SEV-4 Низкий`,disabled:!0}],y=[{label:`Эксплуатация`,options:[{value:`on-call`,label:`Дежурный инженер`},{value:`incident`,label:`Руководитель инцидента`}]},{label:`Продукт`,options:[{value:`support`,label:`Руководитель поддержки`},{value:`pm`,label:`Менеджер продукта`,disabled:!0}]}],b=[{value:`anna`,label:`Анна Королёва`,initials:`АК`,searchText:`Анна Королёва anna`},{value:`boris`,label:`Борис Лебедев`,initials:`БЛ`,searchText:`Борис Лебедев boris`},{value:`vera`,label:`Вера Миронова`,initials:`ВМ`,searchText:`Вера Миронова vera`},{value:`agent`,label:`Агент ревью`,initials:`АР`,searchText:`Агент ревью review-agent`}].map(({initials:e,...t})=>({...t,icon:(0,_.jsx)(l,{size:`sm`,children:(0,_.jsx)(h,{children:e})})})),x=[`ошибка`,`интерфейс`,`релиз`,`документы`,`дизайн`].map(e=>({value:e,label:e})),S=[{value:`draft`,label:`Черновик`,description:`Виден только автору`},{value:`review`,label:`На проверке`,description:`Ждёт решения проверяющего`},{value:`published`,label:`Опубликован`,description:`Виден всей команде`}],C=[`P0`,`P1`,`P2`,`P3`].map(e=>({value:e,label:e}));function w(){let[e,t]=(0,g.useState)(`sev2`),[n,l]=(0,g.useState)([`anna`,`agent`]),[h,w]=(0,g.useState)([`релиз`]),[T,E]=(0,g.useState)([`релиз`,`документы`]);return(0,_.jsxs)(c,{kind:`component`,route:`/components/select`,description:`Выбор значения из списка: одного или нескольких, с поиском и группами. Бери его от шести вариантов, для двух–пяти подходят RadioGroup и ToggleGroup.`,usage:(0,_.jsx)(a,{use:[`Одно значение из шести и больше вариантов.`,`Несколько значений из списка: mode="multiple".`,`Длинный список с поиском: searchable.`],avoid:[{text:`Два–пять вариантов, которые стоит видеть сразу.`,instead:{href:`/components/radio-group`,label:`RadioGroup`}},{text:`Переключение вида или режима.`,instead:{href:`/components/toggle-group`,label:`ToggleGroup`}},{text:`Список действий, а не значений.`,instead:{href:`/components/dropdown-menu`,label:`DropdownMenu`}}]}),example:(0,_.jsx)(f,{layout:`stack`,code:`import { useState } from "react"

const severity = [
  { value: "sev1", label: "SEV-1 Критичный" },
  { value: "sev2", label: "SEV-2 Высокий" },
  { value: "sev3", label: "SEV-3 Средний" },
  { value: "sev4", label: "SEV-4 Низкий", disabled: true },
]

function SeverityField() {
  const [level, setLevel] = useState("sev2")
  return (
    <FieldRecipe label="Серьёзность" htmlFor="severity">
      <Select id="severity" value={level} onValueChange={setLevel} placeholder="Серьёзность" options={severity} />
    </FieldRecipe>
  )
}`,children:(0,_.jsx)(i,{label:`Серьёзность`,htmlFor:`select-severity`,children:(0,_.jsx)(r,{id:`select-severity`,"data-select-example":`controlled`,value:e,onValueChange:t,placeholder:`Серьёзность`,options:v})})}),imports:(0,_.jsx)(d,{code:`import { Avatar, AvatarFallback, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@chucky23/design-system/react"
import { FieldRecipe } from "@chucky23/design-system/recipes/field"`}),api:(0,_.jsx)(o,{items:[{name:`Select`,props:[{name:`options`,type:`ReadonlyArray<SelectOption | SelectOptionGroup>`,description:`Варианты и группы: value, label, disabled, description, tone, icon, searchText.`},{name:`value`,type:`string | null | string[]`,description:`Управляемое значение, вместе с onValueChange.`},{name:`defaultValue`,type:`string | string[]`,description:`Начальное значение без управления.`},{name:`onValueChange`,type:`(value: string) => void`,description:`Выбор варианта. В режиме multiple получает полный список значений.`},{name:`mode`,type:`"single" | "multiple"`,defaultValue:`"single"`,description:`multiple — значения чипами Tag, список остаётся открытым.`},{name:`searchable`,type:`boolean`,defaultValue:`false`,description:`Поиск по подписи или searchText.`},{name:`createLabel`,type:`(value: string) => string`,description:`В режиме multiple включает поиск и задаёт подпись пункта добавления нового значения.`},{name:`searchPlaceholder`,type:`string`,description:`Подсказка пустого поиска при открытом списке. В inline-варианте стоит над вариантами.`},{name:`variant`,type:`"outline" | "inline"`,defaultValue:`"outline"`,description:`inline — значение в строке свойства, без рамки.`},{name:`size`,type:`"sm" | "default" | "md"`,defaultValue:`"default"`,description:`Высота 20, 24 или 28 px.`},{name:`signal`,type:`"neutral" | "ok" | "warn" | "err" | "info"`,description:`Сигнальная рамка.`},{name:`invalid`,type:`boolean`,description:`Ошибка поля, приоритетнее aria-invalid триггера.`},{name:`placeholder`,type:`ReactNode`,description:`Текст до выбора.`},{name:`selectedLabel`,type:`ReactNode`,description:`Содержимое выбранного значения в одиночном режиме.`},{name:`removeLabel`,type:`(label: string) => string`,defaultValue:`«Убрать <подпись>»`,description:`Только multiple: имя кнопки снятия чипа.`},{name:`loading`,type:`boolean`,description:`Индикатор загрузки вариантов.`},{name:`emptyContent`,type:`ReactNode`,description:`Текст пустого списка.`},{name:`placement`,type:`"bottomLeft" | "bottomRight"`,description:`Сторона раскрытия списка.`},{name:`open`,type:`boolean`,description:`Управляемое раскрытие, вместе с onOpenChange.`},{name:`ariaLabel`,type:`string`,description:`Имя поля без видимой подписи.`},{name:`ariaLabelledBy`,type:`string`,description:`id видимой подписи.`},{name:`ariaDescribedBy`,type:`string`,description:`id подсказки и ошибки.`},{name:`ariaRequired`,type:`boolean`,description:`Обязательное поле.`},{name:`disabled`,type:`boolean`,defaultValue:`false`,description:`Отключает поле.`}]}]}),related:(0,_.jsx)(s,{links:[{href:`/components/radio-group`,label:`RadioGroup`,description:`Два–пять вариантов столбцом.`},{href:`/components/toggle-group`,label:`ToggleGroup`,description:`Короткий выбор в одну строку.`},{href:`/components/tag`,label:`Tag`,description:`Чипы выбранных значений.`},{href:`/patterns/status-select`,label:`StatusSelectPattern`,description:`Смена статуса с асинхронной семантикой.`}]}),children:[(0,_.jsx)(p,{id:`states`,label:`Состояния`,description:`Когда значение уже выбрано, поле недоступно или выбор обязателен.`,children:(0,_.jsxs)(f,{fragment:!0,layout:`stack`,code:`<Select defaultValue="sev2" options={severity} ariaLabel="Серьёзность" />
<Select disabled placeholder="Задаёт дежурный" options={severity} ariaLabel="Серьёзность, задаёт дежурный" />
<Select invalid signal="err" placeholder="Выбери серьёзность" options={severity} ariaLabel="Серьёзность, обязательное поле" />`,children:[(0,_.jsx)(r,{"data-select-example":`default-value`,defaultValue:`sev2`,options:v,ariaLabel:`Серьёзность`}),(0,_.jsx)(r,{"data-select-example":`disabled-root`,disabled:!0,placeholder:`Задаёт дежурный`,options:v,ariaLabel:`Серьёзность, задаёт дежурный`}),(0,_.jsx)(r,{invalid:!0,signal:`err`,placeholder:`Выбери серьёзность`,options:v,ariaLabel:`Серьёзность, обязательное поле`})]})}),(0,_.jsx)(p,{id:`sizes`,label:`Размеры`,description:`Размер берут по месту: 20 px в строке таблицы, 24 px в форме, 28 px в шапке страницы рядом с крупными кнопками.`,children:(0,_.jsxs)(f,{fragment:!0,layout:`stack`,code:`<Select size="sm" defaultValue="P1" options={priorities} ariaLabel="Приоритет в строке таблицы" />
<Select defaultValue="sev2" options={severity} ariaLabel="Серьёзность в форме" />
<Select size="md" defaultValue="on-call" options={owners} ariaLabel="Ответственный в шапке страницы" />`,children:[(0,_.jsx)(r,{size:`sm`,defaultValue:`P1`,options:C,ariaLabel:`Приоритет в строке таблицы`}),(0,_.jsx)(r,{defaultValue:`sev2`,options:v,ariaLabel:`Серьёзность в форме`}),(0,_.jsx)(r,{size:`md`,defaultValue:`on-call`,options:y,ariaLabel:`Ответственный в шапке страницы`})]})}),(0,_.jsxs)(p,{id:`groups`,label:`Группы и пояснения`,description:`Когда вариантов много или их смысл неочевиден: группы делят список, description поясняет вариант.`,children:[(0,_.jsx)(f,{title:`Группы`,layout:`stack`,code:`<Select placeholder="Ответственный" ariaLabel="Ответственный" options={[
  { label: "Эксплуатация", options: [{ value: "on-call", label: "Дежурный инженер" }] },
  { label: "Продукт", options: [{ value: "pm", label: "Менеджер продукта", disabled: true }] },
]} />`,children:(0,_.jsx)(r,{placeholder:`Ответственный`,ariaLabel:`Ответственный`,options:y})}),(0,_.jsx)(f,{title:`Пояснение варианта`,layout:`stack`,code:`<Select placeholder="Статус документа" ariaLabel="Статус документа" options={[
  { value: "draft", label: "Черновик", description: "Виден только автору" },
]} />`,children:(0,_.jsx)(r,{placeholder:`Статус документа`,ariaLabel:`Статус документа`,options:S})})]}),(0,_.jsx)(p,{id:`multiple`,label:`Множественный выбор`,description:`Когда у задачи несколько проверяющих или меток. Значение — массив, Backspace в пустом поиске снимает последний чип.`,children:(0,_.jsxs)(f,{layout:`stack`,code:`import { useState } from "react"

const reviewers = [
  { value: "anna", label: "Анна Королёва", icon: <Avatar size="sm"><AvatarFallback>АК</AvatarFallback></Avatar> },
  { value: "agent", label: "Агент ревью", searchText: "Агент ревью review-agent" },
]
const labels = ["ошибка", "интерфейс", "релиз"].map((label) => ({ value: label, label }))

function ReviewFields() {
  const [team, setTeam] = useState(["anna", "agent"])
  return (
    <>
      <Select mode="multiple" searchable value={team} onValueChange={setTeam}
        placeholder="Выбери проверяющих" ariaLabel="Проверяющие" options={reviewers} />
      <Select mode="multiple" size="sm" searchable defaultValue={["ошибка", "интерфейс"]}
        placeholder="Без меток" ariaLabel="Метки" options={labels} />
    </>
  )
}`,children:[(0,_.jsx)(r,{mode:`multiple`,searchable:!0,value:n,onValueChange:l,placeholder:`Выбери проверяющих`,ariaLabel:`Проверяющие`,options:b}),(0,_.jsx)(r,{mode:`multiple`,size:`sm`,searchable:!0,defaultValue:[`ошибка`,`интерфейс`],placeholder:`Без меток`,ariaLabel:`Метки`,options:x})]})}),(0,_.jsx)(p,{id:`create-values`,label:`Создание значений`,description:`С createLabel новый запрос появляется последним пунктом списка. Выбери этот пункт, чтобы добавить значение без пробелов по краям. Точное совпадение с подписью, значением опции или выбранным значением проверяется без учёта регистра.`,children:(0,_.jsx)(f,{layout:`stack`,code:`import { useState } from "react"
import { Select } from "@chucky23/design-system/react"

function EditableLabels() {
  const [value, setValue] = useState(["релиз"])
  const [available, setAvailable] = useState(["релиз", "документы"])

  return (
    <Select
      mode="multiple"
      variant="inline"
      size="sm"
      ariaLabel="Метки задачи"
      placeholder="Без меток"
      searchPlaceholder="Найди или добавь метку"
      createLabel={(name) => \`Добавить «\${name}»\`}
      options={available.map((name) => ({ value: name, label: name }))}
      value={value}
      onValueChange={(next) => {
        setValue(next)
        setAvailable((current) => [...new Set([...current, ...next])])
      }}
    />
  )
}`,children:(0,_.jsx)(r,{mode:`multiple`,variant:`inline`,size:`sm`,ariaLabel:`Метки задачи`,placeholder:`Без меток`,searchPlaceholder:`Найди или добавь метку`,createLabel:e=>`Добавить «${e}»`,options:T.map(e=>({value:e,label:e})),value:h,onValueChange:e=>{w(e),E(t=>[...new Set([...t,...e])])}})})}),(0,_.jsx)(p,{id:`inline`,label:`В строке свойства`,description:`Когда значение стоит среди свойств задачи и его правят на месте: рамки нет, наведение показывает стрелку.`,children:(0,_.jsxs)(f,{fragment:!0,layout:`stack`,code:`<Select variant="inline" defaultValue="sev2" options={severity} ariaLabel="Серьёзность" />
<Select variant="inline" mode="multiple" defaultValue={["релиз", "документы"]} options={labels} ariaLabel="Метки" />`,children:[(0,_.jsx)(r,{variant:`inline`,defaultValue:`sev2`,options:v,ariaLabel:`Серьёзность`}),(0,_.jsx)(r,{variant:`inline`,mode:`multiple`,defaultValue:[`релиз`,`документы`],options:x,ariaLabel:`Метки`})]})}),(0,_.jsx)(p,{id:`scenarios`,label:`Сценарии данных`,description:`Переключай сценарии, чтобы проверить длинные названия, пустой список, загрузку и ошибку.`,children:(0,_.jsx)(f,{layout:`block`,children:(0,_.jsx)(u,{})})}),(0,_.jsx)(p,{id:`parts`,label:`Составные части`,description:`Пригодится, если правишь старый код: составной API остался для него. В новом коде используй options.`,children:(0,_.jsx)(m,{label:`Составные части Select`,columns:[{label:`Часть`,kind:`name`},{label:`Назначение`,kind:`muted`}],rows:[[`SelectTrigger`,`Поле выбора, передаёт aria-describedby, aria-required, aria-invalid.`],[`SelectValue`,`Выбранное значение или placeholder в триггере.`],[`SelectContent`,`Раскрытый список.`],[`SelectGroup`,`Группа пунктов.`],[`SelectLabel`,`Заголовок группы.`],[`SelectItem`,`Пункт списка со значением value.`],[`SelectSeparator`,`Разделитель между пунктами.`],[`SelectScrollUpButton`,`Кнопка прокрутки списка вверх.`],[`SelectScrollDownButton`,`Кнопка прокрутки списка вниз.`]]})})]})}export{w as default};