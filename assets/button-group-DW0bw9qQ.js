import{a as e,n as t,t as n}from"./jsx-runtime-dBoqvwbd.js";import{_ as r,v as i,y as a}from"./chunk-NA6PDP3U-Cjn5wWWb.js";import{D as o,I as s,St as c,Ts as l,Z as u,dt as d,m as f,qr as p,ws as m}from"./useLabelableId-Ck49MOKz.js";import{t as h}from"./chunk-A5ATJWCD-D5u-P5Xy.js";import{Fn as g,M as _,Ot as v,St as y,_n as b,pt as x,rt as S,tn as C}from"./index-DnsCB0LC.js";var w=e(t(),1),T=n(),E=[{value:`all`,label:`Везде`},{value:`tasks`,label:`Задачи`},{value:`docs`,label:`Документы`}];function D(){let[e,t]=(0,w.useState)(`all`),[n,D]=(0,w.useState)(100);return(0,T.jsxs)(y,{kind:`component`,route:`/components/button-group`,description:`Стыкует разнородные контролы — кнопки, IconButton, поля Input, Select, текстовые надставки и разделители — в единую полосу с общими скруглениями 4 px и без двойных рамок.`,usage:(0,T.jsx)(g,{use:[`Составная команда: основная кнопка плюс кнопка раскрытия меню вариантов (split button).`,`Поле ввода с состыкованным выбором области поиска, префиксом или кнопкой запуска.`,`Компактный блок шагового изменения значения или вертикальный стек инструментов на холсте.`],avoid:[{text:`Выбор одного или нескольких режимов из равноправного набора.`,instead:{href:`/components/toggle-group`,label:`ToggleGroup`}},{text:`Независимые действия панели с промежутком между кнопками.`,instead:{href:`/recipes/action-cluster`,label:`ActionClusterRecipe`}}]}),example:(0,T.jsx)(S,{resizablePreview:!0,code:`<ButtonGroup aria-label="Действия сохранения">
  <Button tone="neutral" variant="outline">Сохранить</Button>
  <ButtonGroupSeparator />
  <IconButton label="Варианты сохранения" variant="outline">
    <ChevronDownIcon />
  </IconButton>
</ButtonGroup>`,gpuiCode:`use anikin_lab_gpui::prelude::*;
use gpui::ParentElement as _;

let group = DsButtonGroup::new()
    .id("save-actions")
    .orientation(DsButtonGroupOrientation::Horizontal)
    .accessibility_label("Действия сохранения")
    .child(DsButton::new("save").label("Сохранить").variant(DsButtonVariant::Outline))
    .child(DsButtonGroupSeparator::new())
    .child(
        DsIconButton::new("save-more", IconName::ChevronDown)
            .variant(DsButtonVariant::Outline)
            .accessibility_label("Варианты сохранения"),
    );`,children:(0,T.jsxs)(r,{"aria-label":`Действия сохранения`,children:[(0,T.jsx)(m,{tone:`neutral`,variant:`outline`,children:`Сохранить`}),(0,T.jsx)(i,{}),(0,T.jsx)(l,{label:`Варианты сохранения`,variant:`outline`,children:(0,T.jsx)(o,{})})]})}),imports:(0,T.jsx)(x,{code:`import {
  Button,
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
  IconButton,
  Input,
  Select,
} from "@chucky23/design-system/react"
import { AddIcon, ChevronDownIcon, CopyIcon, FilterIcon, MinusIcon, SearchIcon } from "@chucky23/design-system/icons"`}),api:(0,T.jsx)(_,{items:[{name:`ButtonGroup`,props:[{name:`orientation`,type:`"horizontal" | "vertical"`,defaultValue:`"horizontal"`,description:`Направление стыковки соседних контролов.`},{name:`role`,type:`string`,defaultValue:`"group"`,description:`ARIA-роль контейнера. Для доступного имени добавь aria-label.`}]},{name:`ButtonGroupSeparator`,props:[{name:`orientation`,type:`"horizontal" | "vertical"`,description:`Явная ориентация линии 1 px; по умолчанию перпендикулярна ориентации группы.`}]},{name:`ButtonGroupText`,props:[{name:`size`,type:`"sm" | "default" | "md"`,defaultValue:`"default"`,description:`Высота текстового сегмента по шкале контролов: 20, 24 или 28 px.`}]}]}),related:(0,T.jsx)(v,{links:[{href:`/components/button`,label:`Button`,description:`Кнопки и IconButton, входящие в группу.`},{href:`/components/toggle-group`,label:`ToggleGroup`,description:`Сегментированный выбор активного режима.`},{href:`/components/input`,label:`Input`,description:`Однострочное поле ввода.`},{href:`/components/select`,label:`Select`,description:`Выбор варианта из списка.`}]}),children:[(0,T.jsx)(C,{id:`mixed`,label:`Стыковка с Input, Select и текстовой надставкой`,description:`Соседние элементы теряют внутренние скругления и перекрывают общую рамку без удвоения; активный элемент при фокусе или наведении поднимается выше соседей.`,children:(0,T.jsx)(S,{layout:`block`,resizablePreview:!0,code:`import { useState } from "react"

function SearchGroup() {
  const [scope, setScope] = useState("all")
  return (
    <>
      <ButtonGroup aria-label="Поиск с областью">
        <Select
          ariaLabel="Область поиска"
          value={scope}
          onValueChange={setScope}
          options={[
            { value: "all", label: "Везде" },
            { value: "tasks", label: "Задачи" },
            { value: "docs", label: "Документы" },
          ]}
        />
        <Input className="w-60!" placeholder="Найти по ключу или названию" aria-label="Запрос" />
        <IconButton label="Искать" variant="outline"><SearchIcon /></IconButton>
        <IconButton label="Фильтры" variant="outline"><FilterIcon /></IconButton>
      </ButtonGroup>

      <ButtonGroup aria-label="Адрес сервера">
        <ButtonGroupText>https://</ButtonGroupText>
        <Input defaultValue="docs.anikin.lab" aria-label="Домен" mono />
        <IconButton label="Скопировать адрес" variant="outline"><CopyIcon /></IconButton>
      </ButtonGroup>
    </>
  )
}`,children:(0,T.jsxs)(b,{gap:`sm`,className:`items-center p-4`,children:[(0,T.jsxs)(r,{"aria-label":`Поиск с областью`,children:[(0,T.jsx)(h,{ariaLabel:`Область поиска`,value:e,onValueChange:t,options:E}),(0,T.jsx)(p,{className:`w-60!`,placeholder:`Найти по ключу или названию`,"aria-label":`Запрос`}),(0,T.jsx)(l,{label:`Искать`,variant:`outline`,children:(0,T.jsx)(c,{})}),(0,T.jsx)(l,{label:`Фильтры`,variant:`outline`,children:(0,T.jsx)(u,{})})]}),(0,T.jsxs)(r,{"aria-label":`Адрес сервера`,children:[(0,T.jsx)(a,{children:`https://`}),(0,T.jsx)(p,{defaultValue:`docs.anikin.lab`,"aria-label":`Домен`,mono:!0}),(0,T.jsx)(l,{label:`Скопировать адрес`,variant:`outline`,children:(0,T.jsx)(s,{})})]})]})})}),(0,T.jsx)(C,{id:`vertical`,label:`Вертикальная ориентация`,description:`Подходит для плавающих инструментов масштаба на холсте: orientation='vertical' стыкует контролы по вертикали и поворачивает ButtonGroupSeparator горизонтально.`,children:(0,T.jsx)(S,{code:`import { useState } from "react"

function ZoomStack() {
  const [zoom, setZoom] = useState(100)
  return (
    <ButtonGroup orientation="vertical" aria-label="Масштаб холста">
      <IconButton label="Увеличить" variant="outline" onClick={() => setZoom((z) => Math.min(200, z + 10))}>
        <AddIcon />
      </IconButton>
      <ButtonGroupText>{zoom}%</ButtonGroupText>
      <IconButton label="Уменьшить" variant="outline" onClick={() => setZoom((z) => Math.max(50, z - 10))}>
        <MinusIcon />
      </IconButton>
    </ButtonGroup>
  )
}`,children:(0,T.jsxs)(r,{orientation:`vertical`,"aria-label":`Масштаб холста`,children:[(0,T.jsx)(l,{label:`Увеличить`,variant:`outline`,onClick:()=>D(e=>Math.min(200,e+10)),children:(0,T.jsx)(f,{})}),(0,T.jsxs)(a,{children:[n,`%`]}),(0,T.jsx)(l,{label:`Уменьшить`,variant:`outline`,onClick:()=>D(e=>Math.max(50,e-10)),children:(0,T.jsx)(d,{})})]})})})]})}export{D as default};