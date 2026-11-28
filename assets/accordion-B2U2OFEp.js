import{a as e,n as t,t as n}from"./jsx-runtime-dBoqvwbd.js";import{a as r,i,l as a,n as o,pt as s,r as c,st as l,t as u}from"./chunk-NA6PDP3U-Cjn5wWWb.js";import{M as d,Ts as f,m as p}from"./useLabelableId-Ck49MOKz.js";import{Fn as m,M as h,Ot as g,St as _,Ti as v,_n as y,pi as b,pt as x,rt as S,tn as C}from"./index-DnsCB0LC.js";var w=e(t(),1),T=n();function E(){let[e,t]=(0,w.useState)(85),[n,E]=(0,w.useState)(!0),[D,O]=(0,w.useState)(3);return(0,T.jsxs)(_,{kind:`component`,route:`/components/accordion`,description:`Группа сворачиваемых секций с одиночным или множественным раскрытием, сводкой закрытого состояния summary и независимыми действиями actions в заголовке.`,usage:(0,T.jsx)(m,{use:[`Инспектор свойств с несколькими тематическими секциями, где в свёрнутом виде нужна краткая сводка значения.`,`Секции с быстрыми действиями в заголовке (сброс, добавление), которые не должны раскрывать или сворачивать панель.`,`Частые вопросы, списки параметров и многошаговые разделы с клавиатурной навигацией.`],avoid:[{text:`Одна независимая сворачиваемая панель без группы соседей.`,instead:{href:`/components/collapsible`,label:`Collapsible`}},{text:`Переключение между равноправными панелями содержимого.`,instead:{href:`/components/tabs`,label:`Tabs`}},{text:`Иерархия вложенных сущностей произвольной глубины.`,instead:{href:`/components/tree-view`,label:`TreeView`}}]}),example:(0,T.jsx)(S,{layout:`block`,resizablePreview:!0,code:`<Accordion defaultValue={["appearance"]} multiple>
  <AccordionItem value="appearance">
    <AccordionTrigger summary="85%">Оформление</AccordionTrigger>
    <AccordionContent>Параметры прозрачности и скругления объекта.</AccordionContent>
  </AccordionItem>
  <AccordionItem value="layout">
    <AccordionTrigger summary="Сетка 24 px">Сетка и выравнивание</AccordionTrigger>
    <AccordionContent>Привязка к шагу сетки и выравнивание соседей.</AccordionContent>
  </AccordionItem>
  <AccordionItem value="links">
    <AccordionTrigger summary="4 связи">Связи</AccordionTrigger>
    <AccordionContent>Входящие и исходящие связи выбранного узла.</AccordionContent>
  </AccordionItem>
</Accordion>`,gpuiCode:`use anikin_lab_gpui::prelude::*;

let section = DsDisclosureGroup::new("appearance", "Оформление")
    .summary("85%")
    .open(is_open)
    .action(
        DsIconButton::new("reset-appearance", IconName::Undo2)
            .accessibility_label("Сбросить оформление"),
    )
    .on_toggle(|next_open, _window, _cx| {
        // Обновление состояния раскрытия секции.
        let _ = next_open;
    })
    .child(div());`,children:(0,T.jsxs)(u,{defaultValue:[`appearance`],multiple:!0,children:[(0,T.jsxs)(i,{value:`appearance`,children:[(0,T.jsx)(r,{summary:`85%`,children:`Оформление`}),(0,T.jsx)(o,{children:(0,T.jsx)(a,{children:`Параметры прозрачности и скругления объекта.`})})]}),(0,T.jsxs)(i,{value:`layout`,children:[(0,T.jsx)(r,{summary:`Сетка 24 px`,children:`Сетка и выравнивание`}),(0,T.jsx)(o,{children:(0,T.jsx)(a,{children:`Привязка к шагу сетки и выравнивание соседей.`})})]}),(0,T.jsxs)(i,{value:`links`,children:[(0,T.jsx)(r,{summary:`4 связи`,children:`Связи`}),(0,T.jsx)(o,{children:(0,T.jsx)(a,{children:`Входящие и исходящие связи выбранного узла.`})})]})]})}),imports:(0,T.jsx)(x,{code:`import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
  IconButton,
} from "@chucky23/design-system/react"
import { AddIcon, CloseIcon } from "@chucky23/design-system/icons"`}),api:(0,T.jsx)(h,{items:[{name:`Accordion`,props:[{name:`value`,type:`Value[]`,description:`Список ключей раскрытых секций в управляемом режиме.`},{name:`defaultValue`,type:`Value[]`,description:`Начальный список раскрытых секций в неуправляемом режиме.`},{name:`onValueChange`,type:`(value: Value[], eventDetails) => void`,description:`Вызывается при раскрытии или сворачивании любой секции.`},{name:`multiple`,type:`boolean`,description:`Разрешает держать открытыми несколько секций одновременно. Без пропа открыта максимум одна.`},{name:`disabled`,type:`boolean`,description:`Отключает все секции группы.`}]},{name:`AccordionItem`,props:[{name:`value`,type:`string`,required:!0,description:`Уникальный ключ секции внутри группы.`},{name:`disabled`,type:`boolean`,description:`Отключает отдельную секцию.`}]},{name:`AccordionHeader`,props:[{name:`actions`,type:`ReactNode`,description:`Отдельные действия в заголовке секции. Активация не раскрывает и не сворачивает секцию.`}]},{name:`AccordionTrigger`,props:[{name:`summary`,type:`ReactNode`,description:`Краткая сводка состояния секции в заголовке, например «100%» или счётчик.`},{name:`summaryVisibility`,type:`"collapsed" | "always"`,defaultValue:`"collapsed"`,description:`collapsed — показывать summary только в свёрнутом виде, always — всегда.`},{name:`actions`,type:`ReactNode`,description:`Действия справа от триггера: рендерятся вне кнопки и не переключают секцию.`}]},{name:`AccordionContent`,props:[{name:`keepMounted`,type:`boolean`,description:`Оставляет свёрнутую панель в DOM, сохраняя состояние внутренних полей.`}]}]}),related:(0,T.jsx)(g,{links:[{href:`/components/collapsible`,label:`Collapsible`,description:`Одиночная сворачиваемая секция.`},{href:`/screens/document`,label:`DocumentWorkspace`,description:`Сворачиваемые секции инспектора с summary и actions.`},{href:`/components/disclosure-button-group`,label:`DisclosureButtonGroup`,description:`Ряд тихих кнопок с одной открытой панелью.`}]}),children:[(0,T.jsx)(C,{id:`single`,label:`Одиночное раскрытие`,description:`Без пропа multiple открывается только одна секция: выбор новой автоматически сворачивает предыдущую.`,children:(0,T.jsx)(S,{layout:`block`,resizablePreview:!0,code:`<Accordion defaultValue={["general"]}>
  <AccordionItem value="general">
    <AccordionTrigger>Основные параметры</AccordionTrigger>
    <AccordionContent>Название, описание и владелец проекта.</AccordionContent>
  </AccordionItem>
  <AccordionItem value="access">
    <AccordionTrigger>Права доступа</AccordionTrigger>
    <AccordionContent>Роли участников и политики слияния.</AccordionContent>
  </AccordionItem>
  <AccordionItem value="archive" disabled>
    <AccordionTrigger>Архивирование</AccordionTrigger>
    <AccordionContent>Недоступно для активного спринта.</AccordionContent>
  </AccordionItem>
</Accordion>`,children:(0,T.jsxs)(u,{defaultValue:[`general`],children:[(0,T.jsxs)(i,{value:`general`,children:[(0,T.jsx)(r,{children:`Основные параметры`}),(0,T.jsx)(o,{children:(0,T.jsx)(a,{children:`Название, описание и владелец проекта.`})})]}),(0,T.jsxs)(i,{value:`access`,children:[(0,T.jsx)(r,{children:`Права доступа`}),(0,T.jsx)(o,{children:(0,T.jsx)(a,{children:`Роли участников и политики слияния.`})})]}),(0,T.jsxs)(i,{value:`archive`,disabled:!0,children:[(0,T.jsx)(r,{children:`Архивирование`}),(0,T.jsx)(o,{children:(0,T.jsx)(a,{children:`Недоступно для активного спринта.`})})]})]})})}),(0,T.jsx)(C,{id:`summary-and-actions`,label:`Сводка summary и действия actions`,description:`Сверни секцию «Оформление», чтобы увидеть текущую сводку значения в заголовке. Кнопки в слоте actions срабатывают сами по себе и не переключают секцию.`,children:(0,T.jsx)(S,{layout:`block`,resizablePreview:!0,code:`<Accordion defaultValue={["appearance"]} multiple>
  <AccordionItem value="appearance">
    <AccordionHeader
      actions={
        <IconButton label="Сбросить оформление" size="sm" variant="ghost">
          <CloseIcon />
        </IconButton>
      }
    >
      <AccordionTrigger summary="100%">Оформление</AccordionTrigger>
    </AccordionHeader>
    <AccordionContent>Непрозрачность и привязка к сетке.</AccordionContent>
  </AccordionItem>
  <AccordionItem value="layers">
    <AccordionTrigger
      summary="3"
      summaryVisibility="always"
      actions={
        <IconButton label="Добавить слой" size="sm" variant="ghost">
          <AddIcon />
        </IconButton>
      }
    >
      Слои
    </AccordionTrigger>
    <AccordionContent>Список слоёв сцены.</AccordionContent>
  </AccordionItem>
</Accordion>`,children:(0,T.jsxs)(u,{defaultValue:[`appearance`],multiple:!0,children:[(0,T.jsxs)(i,{value:`appearance`,children:[(0,T.jsx)(c,{actions:(0,T.jsx)(f,{label:`Сбросить оформление`,size:`sm`,variant:`ghost`,onClick:()=>{t(100),E(!0)},children:(0,T.jsx)(d,{})}),children:(0,T.jsx)(r,{summary:`${e}% · ${n?`сетка`:`свободно`}`,children:`Оформление`})}),(0,T.jsx)(o,{children:(0,T.jsxs)(y,{gap:`sm`,children:[(0,T.jsx)(l,{label:`Непрозрачность`,children:(0,T.jsx)(v,{size:`sm`,label:`Непрозрачность`,min:10,max:100,value:e,resetValue:100,onValueChange:t,editableValue:!0,unit:`%`})}),(0,T.jsx)(s,{checked:n,onCheckedChange:E,children:`Привязка к сетке 24 px`})]})})]}),(0,T.jsxs)(i,{value:`layers`,children:[(0,T.jsx)(r,{summary:(0,T.jsx)(b,{variant:`secondary`,children:D}),summaryVisibility:`always`,actions:(0,T.jsx)(f,{label:`Добавить слой`,size:`sm`,variant:`ghost`,onClick:()=>O(e=>e+1),children:(0,T.jsx)(p,{})}),children:`Слои`}),(0,T.jsx)(o,{children:(0,T.jsxs)(a,{children:[`Активных слоёв на холсте: `,D,`. Нажатие «+» в шапке добавляет слой, не сворачивая секцию.`]})})]})]})})})]})}export{E as default};