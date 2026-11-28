import{a as e,n as t,t as n}from"./jsx-runtime-dBoqvwbd.js";import{ws as r}from"./useLabelableId-Ck49MOKz.js";import{Cn as i,Fn as a,M as o,Ot as s,St as c,Ti as l,_n as u,jt as d,pi as f,pt as p,rt as m,tn as h}from"./index-DnsCB0LC.js";var g=e(t(),1),_=n();function v(){let[e,t]=(0,g.useState)(80),[n,v]=(0,g.useState)(100),[y,b]=(0,g.useState)(50),[x,S]=(0,g.useState)(50),[C,w]=(0,g.useState)(0),[T,E]=(0,g.useState)(0);return(0,_.jsxs)(c,{kind:`component`,route:`/components/slider`,description:`Ползунок для непрерывного числового параметра: живой предпросмотр, фиксация жеста, модификаторы точности Shift и Alt, сброс двойным щелчком и точный ввод со scrubbing.`,usage:(0,_.jsx)(a,{use:[`Непрерывный параметр с визуальной обратной связью: масштаб холста, непрозрачность, порог чувствительности.`,`Настройка, где важны и быстрый выбор жестом, и точный ввод числа с клавиатуры или перетаскиванием числа (scrubbing).`,`Разделение живого предпросмотра (onValueChange) и записи в историю правок (onValueCommit).`],avoid:[{text:`Выбор одного значения из небольшого списка вариантов.`,instead:{href:`/components/select`,label:`Select`}},{text:`Отображение прогресса операции, которую пользователь не меняет.`,instead:{href:`/components/progress`,label:`Progress`}},{text:`Свободный ввод числа без верхней границы шкалы.`,instead:{href:`/components/input`,label:`Input`}}]}),example:(0,_.jsx)(m,{layout:`stack`,resizablePreview:!0,code:`import { useState } from "react"

function OpacityControl() {
  const [opacity, setOpacity] = useState(80)
  return (
    <Slider
      label="Непрозрачность"
      min={0}
      max={100}
      step={1}
      value={opacity}
      resetValue={100}
      onValueChange={setOpacity}
      editableValue
      unit="%"
    />
  )
}`,gpuiCode:`use anikin_lab_gpui::prelude::*;

let slider = DsSlider::new("zoom")
    .label("Масштаб")
    .range(25.0, 400.0)
    .step(5.0)
    .value(100.0)
    .reset_value(100.0)
    .unit("%")
    .on_change(|value, _window, _cx| {
        // Живой предпросмотр во время перетаскивания.
        let _ = value;
    })
    .on_commit(|value, _window, _cx| {
        // Фиксация в истории правок после отпускания.
        let _ = value;
    });`,children:(0,_.jsx)(l,{label:`Непрозрачность`,min:0,max:100,step:1,value:e,resetValue:100,onValueChange:t,editableValue:!0,unit:`%`,className:`w-full`})}),imports:(0,_.jsx)(p,{from:`@chucky23/design-system/react`,names:[`Slider`]}),api:(0,_.jsx)(o,{items:[{name:`Slider`,props:[{name:`value`,type:`number`,description:`Управляемое числовое значение ползунка.`},{name:`defaultValue`,type:`number`,description:`Начальное значение в неуправляемом режиме. По умолчанию равно min.`},{name:`min`,type:`number`,defaultValue:`0`,description:`Нижняя граница шкалы.`},{name:`max`,type:`number`,defaultValue:`100`,description:`Верхняя граница шкалы.`},{name:`step`,type:`number`,defaultValue:`1`,description:`Базовый шаг изменения значения.`},{name:`coarseMultiplier`,type:`number`,defaultValue:`5`,description:`Множитель крупного шага при удержании Shift.`},{name:`fineMultiplier`,type:`number`,defaultValue:`0.2`,description:`Множитель тонкого шага при удержании Alt/Option.`},{name:`resetValue`,type:`number`,description:`Значение для сброса двойным щелчком по дорожке ползунка.`},{name:`onValueChange`,type:`(value: number) => void`,description:`Вызывается непрерывно при каждом изменении значения (живой предпросмотр).`},{name:`onValueCommit`,type:`(value: number) => void`,description:`Вызывается один раз по завершении жеста, ввода или сброса (для истории правок).`},{name:`showValue`,type:`boolean`,defaultValue:`false`,description:`Показывать текущее форматированное значение рядом с дорожкой.`},{name:`editableValue`,type:`boolean`,defaultValue:`false`,description:`Включает точный числовой ввод с клавиатуры и перетаскивание числа мышью (scrubbing).`},{name:`formatValue`,type:`(value: number) => string`,description:`Форматирование значения для отображения и aria-valuetext.`},{name:`parseValue`,type:`(raw: string) => number | null`,description:`Разбор текста, введённого пользователем, обратно в числовое значение шкалы.`},{name:`unit`,type:`string`,description:`Короткая единица измерения после числа, например %, px или ms.`},{name:`size`,type:`"sm" | "default" | "md"`,defaultValue:`"default"`,description:`Высота контрола по шкале системы: sm 20 px, default 24 px, md 28 px.`},{name:`orientation`,type:`"horizontal" | "vertical"`,defaultValue:`"horizontal"`,description:`Ориентация дорожки ползунка.`},{name:`disabled`,type:`boolean`,defaultValue:`false`,description:`Отключает взаимодействие с ползунком и числовым полем.`},{name:`label`,type:`string`,description:`Доступное имя ползунка, если не переданы aria-label или aria-labelledby.`},{name:`valueAriaLabel`,type:`string`,description:`Доступное имя точного числового поля при editableValue.`}]}]}),related:(0,_.jsx)(s,{links:[{href:`/components/input`,label:`Input`,description:`Числовое поле без ползунка и шкалы.`},{href:`/components/progress`,label:`Progress`,description:`Индикатор доли без интерактивного управления.`},{href:`/examples/chora/canvas`,label:`Холст Chora`,description:`Ползунок масштаба синхронизирован с холстом и строкой состояния.`}]}),children:[(0,_.jsx)(h,{id:`precision`,label:`Точный ввод, scrubbing и сброс`,description:`С editableValue число справа работает в двух режимах: потяни горизонтально для плавного изменения (scrubbing) или щёлкни и введи значение с клавиатуры. Двойной щелчок по дорожке сбрасывает к resetValue, Shift умножает шаг на 5, Alt/Option делит на 5.`,children:(0,_.jsx)(m,{layout:`stack`,resizablePreview:!0,code:`import { useState } from "react"

function ZoomSlider() {
  const [zoom, setZoom] = useState(100)
  return (
    <Slider
      label="Масштаб"
      min={25}
      max={400}
      step={5}
      value={zoom}
      resetValue={100}
      onValueChange={setZoom}
      editableValue
      unit="%"
    />
  )
}`,children:(0,_.jsxs)(u,{gap:`sm`,className:`w-full`,children:[(0,_.jsx)(l,{label:`Масштаб`,min:25,max:400,step:5,value:n,resetValue:100,onValueChange:v,editableValue:!0,unit:`%`,className:`w-full`}),(0,_.jsxs)(d,{align:`center`,gap:`sm`,children:[(0,_.jsx)(i,{tone:`muted`,children:`Двойной щелчок по дорожке вернёт 100%.`}),(0,_.jsx)(r,{size:`sm`,tone:`neutral`,variant:`ghost`,onClick:()=>v(100),children:`Сбросить`})]})]})})}),(0,_.jsx)(h,{id:`commit`,label:`Предпросмотр и фиксация (onValueChange vs onValueCommit)`,description:`onValueChange обновляет сцену на каждом кадре жеста, а onValueCommit вызывается один раз после отпускания мыши, подтверждения ввода или сброса — туда пишется шаг истории Undo/Redo.`,children:(0,_.jsx)(m,{layout:`stack`,resizablePreview:!0,code:`import { useState } from "react"

function CommitSlider() {
  const [live, setLive] = useState(50)
  const [saved, setSaved] = useState(50)
  return (
    <Slider
      label="Порог"
      min={0}
      max={100}
      step={1}
      value={live}
      resetValue={50}
      onValueChange={setLive}
      onValueCommit={setSaved}
      editableValue
      unit="%"
    />
  )
}`,children:(0,_.jsxs)(u,{gap:`sm`,className:`w-full`,children:[(0,_.jsx)(l,{label:`Порог`,min:0,max:100,step:1,value:y,resetValue:50,onValueChange:e=>{b(e),w(e=>e+1)},onValueCommit:e=>{S(e),E(e=>e+1)},editableValue:!0,unit:`%`,className:`w-full`}),(0,_.jsxs)(d,{align:`center`,gap:`sm`,children:[(0,_.jsxs)(f,{variant:`outline`,children:[`onValueChange: `,y,`% (`,C,`)`]}),(0,_.jsxs)(f,{variant:`ok`,children:[`onValueCommit: `,x,`% (`,T,`)`]})]})]})})}),(0,_.jsx)(h,{id:`sizes`,label:`Размеры и состояния`,description:`Шкала высот совпадает с Input и Button: sm 20 px для панелей и строк состояния, default 24 px для инспекторов и форм, md 28 px для диалогов.`,children:(0,_.jsxs)(m,{layout:`stack`,code:`<Slider size="sm" defaultValue={35} showValue unit="%" label="Компактный" />
<Slider size="default" defaultValue={60} editableValue unit="px" label="Обычный" />
<Slider size="md" defaultValue={80} editableValue unit="ms" label="Крупный" />
<Slider disabled defaultValue={45} editableValue unit="%" label="Отключённый" />`,children:[(0,_.jsx)(l,{size:`sm`,defaultValue:35,showValue:!0,unit:`%`,label:`Компактный`,className:`w-full`}),(0,_.jsx)(l,{size:`default`,defaultValue:60,editableValue:!0,unit:`px`,label:`Обычный`,className:`w-full`}),(0,_.jsx)(l,{size:`md`,defaultValue:80,editableValue:!0,unit:`ms`,label:`Крупный`,className:`w-full`}),(0,_.jsx)(l,{disabled:!0,defaultValue:45,editableValue:!0,unit:`%`,label:`Отключённый`,className:`w-full`})]})})]})}export{v as default};