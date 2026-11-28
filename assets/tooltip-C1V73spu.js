import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{Br as t,Ct as n,Hr as r,I as i,St as a,Ts as o,Vr as s,ws as c,zr as l}from"./useLabelableId-Ck49MOKz.js";import{Fn as u,M as d,On as f,Ot as p,St as m,pt as h,rt as g,tn as _}from"./index-DnsCB0LC.js";var v=e();function y(){return(0,v.jsxs)(m,{kind:`component`,route:`/components/tooltip`,description:`Короткая подсказка к кнопке-значку или сокращённой подписи. Видна при наведении и фокусе с клавиатуры, внутри нет кнопок и ссылок.`,usage:(0,v.jsx)(u,{use:[`Имя кнопки-значка и её сочетание клавиш.`,`Полный текст сокращённой подписи.`],avoid:[{text:`Ссылки, кнопки или поле внутри подсказки.`,instead:{href:`/components/popover`,label:`Popover`}},{text:`Сведения, без которых не выполнить задачу: их пишут на экране.`}]}),example:(0,v.jsx)(g,{code:`<TooltipProvider>
  <Tooltip>
    <TooltipTrigger render={<IconButton label="Скопировать ссылку" variant="outline"><CopyIcon /></IconButton>} />
    <TooltipContent>Скопировать ссылку</TooltipContent>
  </Tooltip>
  <Tooltip>
    <TooltipTrigger render={<Button tone="neutral" variant="outline" aria-keyshortcuts="Meta+K" />}>Найти</TooltipTrigger>
    <TooltipContent shortcut="Meta+K">Поиск</TooltipContent>
  </Tooltip>
</TooltipProvider>`,gpuiCode:`use anikin_lab_gpui::prelude::*;

// В обработчике .tooltip(|window, cx| ...) интерактивного элемента:
let tooltip = DsTooltip::new("Поиск")
    .shortcut("⌘K")
    .build(window, cx);`,children:(0,v.jsx)(f,{})}),imports:(0,v.jsx)(h,{code:`import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  Button,
  IconButton,
} from "@chucky23/design-system/react"
import {
  CopyIcon,
  SearchIcon,
  SettingsIcon,
} from "@chucky23/design-system/icons"`}),api:(0,v.jsx)(d,{items:[{name:`TooltipProvider`,props:[{name:`delay`,type:`number`,defaultValue:`400`,description:`Миллисекунды до первой подсказки. Соседняя подсказка после уже открытой появляется сразу.`},{name:`closeDelay`,type:`number`,defaultValue:`0`,description:`Миллисекунды до закрытия после ухода курсора.`}]},{name:`Tooltip`,props:[{name:`open, defaultOpen, onOpenChange`,type:`boolean, boolean, (open: boolean) => void`,description:`Управление открытием. Фокус после закрытия окна или меню подсказку не открывает.`}]},{name:`TooltipTrigger`,props:[{name:`render`,type:`ReactElement`,description:`Элемент-триггер: render={<IconButton />}.`}]},{name:`TooltipContent`,props:[{name:`shortcut`,type:`string`,description:`Сочетание в формате aria-keyshortcuts: показывается справа от текста. Клавишу назначает приложение.`},{name:`side`,type:`"top" | "bottom" | "left" | "right"`,defaultValue:`"top"`,description:`Сторона появления.`},{name:`align`,type:`"start" | "center" | "end"`,defaultValue:`"center"`,description:`Выравнивание вдоль триггера.`},{name:`sideOffset`,type:`number`,defaultValue:`4`,description:`Отступ от триггера в пикселях.`},{name:`alignOffset`,type:`number`,defaultValue:`0`,description:`Сдвиг вдоль триггера в пикселях.`}]}]}),related:(0,v.jsx)(p,{links:[{href:`/components/key-hint`,label:`KeyHint`,description:`Как выводится сочетание в подсказке.`},{href:`/components/popover`,label:`Popover`,description:`Окно с интерактивным содержимым.`},{href:`/components/button`,label:`Button`,description:`IconButton требует подпись, подсказка её дублирует.`}]}),children:[(0,v.jsx)(_,{id:`icon-buttons`,label:`Кнопки-значки`,description:`Когда у кнопки нет текста: подсказка называет действие глазами, подпись IconButton — для скринридера.`,children:(0,v.jsx)(g,{code:`<TooltipProvider>
  <Tooltip>
    <TooltipTrigger render={<IconButton label="Настройки" variant="outline"><SettingsIcon /></IconButton>} />
    <TooltipContent>Настройки</TooltipContent>
  </Tooltip>
  <Tooltip>
    <TooltipTrigger render={<IconButton label="Скопировать"><CopyIcon /></IconButton>} />
    <TooltipContent>Скопировать</TooltipContent>
  </Tooltip>
</TooltipProvider>`,children:(0,v.jsxs)(s,{children:[(0,v.jsxs)(l,{children:[(0,v.jsx)(r,{render:(0,v.jsx)(o,{label:`Настройки`,variant:`outline`,children:(0,v.jsx)(n,{})})}),(0,v.jsx)(t,{children:`Настройки`})]}),(0,v.jsxs)(l,{children:[(0,v.jsx)(r,{render:(0,v.jsx)(o,{label:`Скопировать`,children:(0,v.jsx)(i,{})})}),(0,v.jsx)(t,{children:`Скопировать`})]})]})})}),(0,v.jsx)(_,{id:`shortcut`,label:`Сочетание клавиш`,description:`Когда у действия есть сочетание клавиш: IconButton объявляет его через aria-keyshortcuts, подсказка показывает.`,children:(0,v.jsx)(g,{code:`<TooltipProvider>
  <Tooltip>
    <TooltipTrigger render={<IconButton label="Поиск" aria-keyshortcuts="Meta+K"><SearchIcon /></IconButton>} />
    <TooltipContent shortcut="Meta+K">Поиск</TooltipContent>
  </Tooltip>
</TooltipProvider>`,children:(0,v.jsx)(s,{children:(0,v.jsxs)(l,{children:[(0,v.jsx)(r,{render:(0,v.jsx)(o,{label:`Поиск`,"aria-keyshortcuts":`Meta+K`,children:(0,v.jsx)(a,{})})}),(0,v.jsx)(t,{shortcut:`Meta+K`,children:`Поиск`})]})})})}),(0,v.jsx)(_,{id:`sides`,label:`Стороны`,description:`Когда подсказка сверху закрыла бы соседнюю строку или заголовок: side выбирает другую сторону.`,children:(0,v.jsx)(g,{code:`<TooltipProvider>
  <Tooltip>
    <TooltipTrigger render={<Button tone="neutral" variant="outline" />}>Снизу</TooltipTrigger>
    <TooltipContent side="bottom">Подсказка снизу</TooltipContent>
  </Tooltip>
  <Tooltip>
    <TooltipTrigger render={<Button tone="neutral" variant="outline" />}>Справа</TooltipTrigger>
    <TooltipContent side="right">Подсказка справа</TooltipContent>
  </Tooltip>
</TooltipProvider>`,children:(0,v.jsxs)(s,{children:[(0,v.jsxs)(l,{children:[(0,v.jsx)(r,{render:(0,v.jsx)(c,{tone:`neutral`,variant:`outline`}),children:`Снизу`}),(0,v.jsx)(t,{side:`bottom`,children:`Подсказка снизу`})]}),(0,v.jsxs)(l,{children:[(0,v.jsx)(r,{render:(0,v.jsx)(c,{tone:`neutral`,variant:`outline`}),children:`Справа`}),(0,v.jsx)(t,{side:`right`,children:`Подсказка справа`})]})]})})})]})}export{y as default};