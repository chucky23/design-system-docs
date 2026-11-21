import{a as e,n as t,t as n}from"./jsx-runtime-dBoqvwbd.js";import{rt as r,v as i}from"./useLabelableId-C6GEk9LR.js";import{T as a,w as o}from"./chunk-C6BK6UFJ-CUqnApcm.js";import{A as s,Ut as c,X as l,_t as u,dt as d,rt as f,vn as p}from"./index-BX5CNJVf.js";var m=e(t(),1),h=n();function g(){let[e,t]=(0,m.useState)(`list`);return(0,h.jsxs)(d,{kind:`component`,route:`/components/toggle-group`,description:`Ряд сегментов: один режим из двух–пяти или несколько независимых признаков. Бери его для вида списка или масштаба графика.`,usage:(0,h.jsx)(p,{use:[`Один режим из двух–пяти: вид списка, масштаб графика.`,`Несколько независимых признаков форматирования в панели инструментов.`],avoid:[{text:`Переключение панелей с разным содержимым.`,instead:{href:`/components/tabs`,label:`Tabs`}},{text:`Значение поля формы.`,instead:{href:`/components/radio-group`,label:`RadioGroup`}},{text:`Один режим, который включается и выключается.`,instead:{href:`/components/toggle`,label:`Toggle`}}]}),example:(0,h.jsx)(l,{code:`import { useState } from "react"

function ViewSwitch() {
  const [view, setView] = useState("list")
  return (
    <ToggleGroup variant="outline" aria-label="Вид" value={[view]}
      onValueChange={(next) => next[0] && setView(next[0])}>
      <ToggleGroupItem value="list">Список</ToggleGroupItem>
      <ToggleGroupItem value="board">Доска</ToggleGroupItem>
      <ToggleGroupItem value="timeline">Лента</ToggleGroupItem>
    </ToggleGroup>
  )
}`,children:(0,h.jsxs)(o,{variant:`outline`,"aria-label":`Вид`,value:[e],onValueChange:e=>e[0]&&t(e[0]),children:[(0,h.jsx)(a,{value:`list`,children:`Список`}),(0,h.jsx)(a,{value:`board`,children:`Доска`}),(0,h.jsx)(a,{value:`timeline`,children:`Лента`})]})}),imports:(0,h.jsx)(f,{code:`import {
  ToggleGroup,
  ToggleGroupItem,
} from "@chucky23/design-system/react"
import { BoardIcon, ListIcon } from "@chucky23/design-system/icons"`}),api:(0,h.jsx)(s,{items:[{name:`ToggleGroup`,props:[{name:`value`,type:`string[]`,description:`Управляемый список нажатых значений, вместе с onValueChange.`},{name:`defaultValue`,type:`string[]`,description:`Начальные значения без управления.`},{name:`onValueChange`,type:`(value: string[]) => void`,description:`Получает полный новый список. В одиночном режиме снятие даёт пустой список.`},{name:`multiple`,type:`boolean`,defaultValue:`false`,description:`Можно нажать несколько сегментов.`},{name:`variant`,type:`"default" | "outline"`,defaultValue:`"default"`,description:`outline — рамка группы.`},{name:`size`,type:`"default" | "sm" | "lg"`,defaultValue:`"default"`,description:`default и sm высотой 24 px, lg 28 px.`},{name:`orientation`,type:`"horizontal" | "vertical"`,defaultValue:`"horizontal"`,description:`Сегменты в строку или в столбец.`},{name:`spacing`,type:`number`,defaultValue:`0`,description:`Зазор между сегментами в шагах шкалы. 0 склеивает сегменты.`},{name:`disabled`,type:`boolean`,defaultValue:`false`,description:`Отключает все сегменты.`}]},{name:`ToggleGroupItem`,props:[{name:`value`,type:`string`,required:!0,description:`Значение сегмента.`},{name:`disabled`,type:`boolean`,defaultValue:`false`,description:`Отключает один сегмент.`}]}]}),related:(0,h.jsx)(u,{links:[{href:`/components/toggle`,label:`Toggle`,description:`Одна кнопка с нажатым состоянием.`},{href:`/components/radio-group`,label:`RadioGroup`,description:`Один вариант столбцом с подписями.`},{href:`/components/select`,label:`Select`,description:`Длинный список вариантов.`},{href:`/components/tabs`,label:`Tabs`,description:`Переключение содержимого панели.`}]}),children:[(0,h.jsx)(c,{id:`multiple`,label:`Несколько значений`,description:`Когда признаки независимы и включаются вместе, например быстрые фильтры списка задач.`,children:(0,h.jsx)(l,{code:`<ToggleGroup multiple variant="outline" aria-label="Фильтры" defaultValue={["open"]}>
  <ToggleGroupItem value="open">Открытые</ToggleGroupItem>
  <ToggleGroupItem value="mine">Мои</ToggleGroupItem>
  <ToggleGroupItem value="urgent">Срочные</ToggleGroupItem>
</ToggleGroup>`,children:(0,h.jsxs)(o,{multiple:!0,variant:`outline`,"aria-label":`Фильтры`,defaultValue:[`open`],children:[(0,h.jsx)(a,{value:`open`,children:`Открытые`}),(0,h.jsx)(a,{value:`mine`,children:`Мои`}),(0,h.jsx)(a,{value:`urgent`,children:`Срочные`})]})})}),(0,h.jsx)(c,{id:`icons`,label:`Значки`,description:`Когда места мало и значки понятны без слов. Сегмент только со значком получает aria-label.`,children:(0,h.jsx)(l,{code:`<ToggleGroup variant="outline" aria-label="Вид" defaultValue={["list"]}>
  <ToggleGroupItem value="list" aria-label="Список"><ListIcon aria-hidden="true" /></ToggleGroupItem>
  <ToggleGroupItem value="board" aria-label="Доска"><BoardIcon aria-hidden="true" /></ToggleGroupItem>
</ToggleGroup>`,children:(0,h.jsxs)(o,{variant:`outline`,"aria-label":`Вид значками`,defaultValue:[`list`],children:[(0,h.jsx)(a,{value:`list`,"aria-label":`Список`,children:(0,h.jsx)(r,{"aria-hidden":`true`})}),(0,h.jsx)(a,{value:`board`,"aria-label":`Доска`,children:(0,h.jsx)(i,{"aria-hidden":`true`})})]})})}),(0,h.jsx)(c,{id:`variants`,label:`Вид и размер`,description:`Без рамки — над графиком, где рамок и так много. Малая — в карточке, крупная — в шапке страницы.`,children:(0,h.jsxs)(l,{layout:`stack`,code:`<ToggleGroup aria-label="Масштаб графика" defaultValue={["day"]}>
  <ToggleGroupItem value="day">День</ToggleGroupItem>
  <ToggleGroupItem value="week">Неделя</ToggleGroupItem>
</ToggleGroup>
<ToggleGroup size="sm" variant="outline" aria-label="Период в карточке" defaultValue={["7d"]}>
  <ToggleGroupItem value="7d">7 дней</ToggleGroupItem>
  <ToggleGroupItem value="30d">30 дней</ToggleGroupItem>
</ToggleGroup>
<ToggleGroup size="lg" variant="outline" aria-label="Вид страницы" defaultValue={["list"]}>
  <ToggleGroupItem value="list">Список</ToggleGroupItem>
  <ToggleGroupItem value="board">Доска</ToggleGroupItem>
</ToggleGroup>`,children:[(0,h.jsxs)(o,{"aria-label":`Масштаб графика`,defaultValue:[`day`],children:[(0,h.jsx)(a,{value:`day`,children:`День`}),(0,h.jsx)(a,{value:`week`,children:`Неделя`})]}),(0,h.jsxs)(o,{size:`sm`,variant:`outline`,"aria-label":`Период в карточке`,defaultValue:[`7d`],children:[(0,h.jsx)(a,{value:`7d`,children:`7 дней`}),(0,h.jsx)(a,{value:`30d`,children:`30 дней`})]}),(0,h.jsxs)(o,{size:`lg`,variant:`outline`,"aria-label":`Вид страницы`,defaultValue:[`list`],children:[(0,h.jsx)(a,{value:`list`,children:`Список`}),(0,h.jsx)(a,{value:`board`,children:`Доска`})]})]})}),(0,h.jsx)(c,{id:`disabled`,label:`Отключённая группа`,description:`Когда выбор сейчас недоступен, но текущее значение важно видеть.`,children:(0,h.jsx)(l,{code:`<ToggleGroup disabled variant="outline" aria-label="Период" defaultValue={["week"]}>
  <ToggleGroupItem value="day">День</ToggleGroupItem>
  <ToggleGroupItem value="week">Неделя</ToggleGroupItem>
</ToggleGroup>`,children:(0,h.jsxs)(o,{disabled:!0,variant:`outline`,"aria-label":`Период`,defaultValue:[`week`],children:[(0,h.jsx)(a,{value:`day`,children:`День`}),(0,h.jsx)(a,{value:`week`,children:`Неделя`})]})})})]})}export{g as default};