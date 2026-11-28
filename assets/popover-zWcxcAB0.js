import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{qr as t,ws as n}from"./useLabelableId-Ck49MOKz.js";import{a as r,i,o as a,r as o}from"./chunk-A5ATJWCD-D5u-P5Xy.js";import{K as s}from"./chunk-L52MJC5L-Da5AAZeo.js";import{Et as c,Fn as l,M as u,Ot as d,St as f,pt as p,rt as m,tn as h}from"./index-DnsCB0LC.js";var g=e();function _(){return(0,g.jsxs)(f,{kind:`component`,route:`/components/popover`,description:`Небольшое окно у элемента: поле, список или пояснение. Бери его, когда правка короткая и уводить человека с экрана незачем.`,usage:(0,g.jsx)(l,{use:[`Небольшое поле, список или пояснение у элемента без перехода.`,`Фильтр или выбор, который закрывается щелчком мимо.`],avoid:[{text:`Подсказка без интерактивного содержимого.`,instead:{href:`/components/tooltip`,label:`Tooltip`}},{text:`Форма, которую нужно закончить или отменить.`,instead:{href:`/components/dialog`,label:`Dialog`}},{text:`Список действий.`,instead:{href:`/components/dropdown-menu`,label:`DropdownMenu`}}]}),example:(0,g.jsx)(m,{code:`<Popover>
  <PopoverTrigger render={<Button tone="neutral" variant="outline" />}>Параметры</PopoverTrigger>
  <PopoverContent>
    <Label htmlFor="due">Срок задачи</Label>
    <Input id="due" defaultValue="12.11.2026" />
  </PopoverContent>
</Popover>`,gpuiCode:`use anikin_lab_gpui::prelude::*;
use gpui::{div, px};

let popover = DsPopover::new("task-params")
    .width(px(260.0))
    .trigger(
        DsButton::new("params-trigger")
            .label("Параметры")
            .variant(DsButtonVariant::Outline),
    )
    .content(|_state, _window, _cx| DsField::new("Срок задачи").control(div()));`,children:(0,g.jsx)(c,{})}),imports:(0,g.jsx)(p,{from:`@chucky23/design-system/react`,names:[`Popover`,`PopoverTrigger`,`PopoverContent`,`PopoverClose`,`Button`,`Input`,`Label`]}),api:(0,g.jsx)(u,{items:[{name:`Popover`,props:[{name:`open`,type:`boolean`,description:`Управляемое состояние, вместе с onOpenChange.`},{name:`defaultOpen`,type:`boolean`,defaultValue:`false`,description:`Начальное состояние без управления.`},{name:`onOpenChange`,type:`(open: boolean) => void`,description:`Вызывается при открытии и закрытии.`}]},{name:`PopoverContent`,props:[{name:`anchor`,type:`Element | RefObject<Element> | VirtualElement`,defaultValue:`триггер`,description:`Элемент, к которому привязано окно вместо триггера. Для поля ввода со списком добавь initialFocus={false} и finalFocus={false}.`},{name:`side`,type:`"top" | "bottom" | "left" | "right"`,defaultValue:`"bottom"`,description:`Сторона появления.`},{name:`align`,type:`"start" | "center" | "end"`,defaultValue:`"start"`,description:`Выравнивание вдоль триггера.`},{name:`sideOffset`,type:`number`,defaultValue:`4`,description:`Отступ от якоря в пикселях.`},{name:`alignOffset`,type:`number`,defaultValue:`0`,description:`Сдвиг вдоль якоря в пикселях.`}]},{name:`PopoverTrigger, PopoverClose`,props:[{name:`render`,type:`ReactElement`,description:`Элемент вместо кнопки по умолчанию: render={<Button />}.`}]}]}),related:(0,g.jsx)(d,{links:[{href:`/components/dropdown-menu`,label:`DropdownMenu`,description:`Список действий у кнопки.`},{href:`/components/tooltip`,label:`Tooltip`,description:`Короткая подсказка без интерактивного содержимого.`},{href:`/components/dialog`,label:`Dialog`,description:`Окно, которое прерывает работу.`}]}),children:[(0,g.jsx)(h,{id:`open`,label:`Открытие по кнопке`,description:`Когда значение правят на месте, например срок задачи. Окно закрывается щелчком снаружи, Escape или PopoverClose.`,children:(0,g.jsx)(m,{code:`<Popover>
  <PopoverTrigger render={<Button tone="neutral" variant="outline" />}>Срок</PopoverTrigger>
  <PopoverContent>
    <Label htmlFor="due-date">Дата</Label>
    <Input id="due-date" defaultValue="12.11.2026" />
    <PopoverClose render={<Button size="xs" />}>Применить</PopoverClose>
  </PopoverContent>
</Popover>`,children:(0,g.jsxs)(o,{children:[(0,g.jsx)(a,{render:(0,g.jsx)(n,{tone:`neutral`,variant:`outline`}),children:`Срок`}),(0,g.jsxs)(r,{children:[(0,g.jsx)(s,{htmlFor:`due-date`,children:`Дата`}),(0,g.jsx)(t,{id:`due-date`,defaultValue:`12.11.2026`}),(0,g.jsx)(i,{render:(0,g.jsx)(n,{size:`xs`}),children:`Применить`})]})]})})}),(0,g.jsx)(h,{id:`side`,label:`Стороны`,description:`Когда окно не должно закрывать соседний элемент: side и align выбирают место, у края экрана окно переворачивается.`,children:(0,g.jsxs)(m,{code:`<Popover>
  <PopoverTrigger render={<Button tone="neutral" variant="outline" />}>Справа</PopoverTrigger>
  <PopoverContent side="right" align="start">Окно справа от кнопки.</PopoverContent>
</Popover>
<Popover>
  <PopoverTrigger render={<Button tone="neutral" variant="outline" />}>Сверху</PopoverTrigger>
  <PopoverContent side="top" align="center">Окно над кнопкой.</PopoverContent>
</Popover>`,children:[(0,g.jsxs)(o,{children:[(0,g.jsx)(a,{render:(0,g.jsx)(n,{tone:`neutral`,variant:`outline`}),children:`Справа`}),(0,g.jsx)(r,{side:`right`,align:`start`,children:`Окно справа от кнопки.`})]}),(0,g.jsxs)(o,{children:[(0,g.jsx)(a,{render:(0,g.jsx)(n,{tone:`neutral`,variant:`outline`}),children:`Сверху`}),(0,g.jsx)(r,{side:`top`,align:`center`,children:`Окно над кнопкой.`})]})]})})]})}export{_ as default};