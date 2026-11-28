import{a as e,n as t,t as n}from"./jsx-runtime-dBoqvwbd.js";import{I as r,R as i,Rn as a,Ts as o,W as s,ft as c,ws as l}from"./useLabelableId-Ck49MOKz.js";import{C as u,E as d,T as f,_ as p,b as m,g as h,h as g,m as _,p as v,v as y,w as b,x,y as S}from"./chunk-XANDBWJ2-DZIuH7a8.js";import{Fn as C,M as w,Ot as T,St as E,_n as D,et as O,pt as k,rt as A,tn as j}from"./index-DnsCB0LC.js";var M=e(t(),1),N=n();function P(){let[e,t]=(0,M.useState)(!1),[n,P]=(0,M.useState)(`updated`);return(0,N.jsxs)(E,{kind:`component`,route:`/components/dropdown-menu`,description:`Короткий список действий у кнопки: сочетание клавиш справа, опасное действие окрашено отдельно. Бери его, когда действиям над записью не хватает места в строке.`,usage:(0,N.jsx)(C,{use:[`Действия над сущностью, которым не хватает места в строке.`,`Меню «Ещё» у кнопки-значка.`,`Короткий выбор режима пунктами с отметкой.`],avoid:[{text:`Выбор значения поля формы.`,instead:{href:`/components/select`,label:`Select`}},{text:`Поиск среди десятков команд.`,instead:{href:`/components/command`,label:`Command`}},{text:`Одно-два действия: их видно и без меню.`,instead:{href:`/components/button`,label:`Button`}}]}),example:(0,N.jsx)(A,{code:`<DropdownMenu>
  <DropdownMenuTrigger render={<IconButton label="Действия"><MoreIcon /></IconButton>} />
  <DropdownMenuContent>
    <DropdownMenuGroup>
      <DropdownMenuLabel>Инцидент</DropdownMenuLabel>
      <DropdownMenuItem shortcut="Meta+E"><EditIcon />Редактировать</DropdownMenuItem>
      <DropdownMenuItem shortcut="Shift+Meta+C"><CopyIcon />Копировать ссылку</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem variant="danger"><DeleteIcon />Удалить</DropdownMenuItem>
    </DropdownMenuGroup>
  </DropdownMenuContent>
</DropdownMenu>`,gpuiCode:`use anikin_lab_gpui::design_system::{
    DsMenu, DsMenuItem, DsMenuTrigger, DsMenuTriggerVariant,
};

let menu = DsMenu::new("incident-actions")
    .item(DsMenuItem::new("edit", "Редактировать").on_click(|_, _, _| {}))
    .item(DsMenuItem::new("copy", "Копировать ссылку").on_click(|_, _, _| {}))
    .item(
        DsMenuItem::new("delete", "Удалить")
            .destructive(true)
            .on_click(|_, _, _| {}),
    );

let trigger = DsMenuTrigger::new("incident-menu", "Действия", menu)
    .variant(DsMenuTriggerVariant::Ghost)
    .accessibility_label("Действия над инцидентом");`,children:(0,N.jsx)(O,{})}),imports:(0,N.jsx)(k,{code:`import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuPortal,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  Button,
  IconButton,
} from "@chucky23/design-system/react"
import {
  CopyIcon,
  DeleteIcon,
  EditIcon,
  MoreIcon,
} from "@chucky23/design-system/icons"`}),api:(0,N.jsx)(w,{items:[{name:`DropdownMenu`,props:[{name:`open, defaultOpen, onOpenChange`,type:`boolean, boolean, (open: boolean) => void`,description:`Управление открытием.`}]},{name:`DropdownMenuTrigger`,props:[{name:`render`,type:`ReactElement`,description:`Элемент-триггер: render={<IconButton />}.`}]},{name:`DropdownMenuContent`,props:[{name:`side`,type:`"top" | "bottom" | "left" | "right"`,defaultValue:`"bottom"`,description:`Сторона появления.`},{name:`align`,type:`"start" | "center" | "end"`,defaultValue:`"start"`,description:`Выравнивание вдоль триггера.`},{name:`sideOffset`,type:`number`,defaultValue:`4`,description:`Отступ от триггера в пикселях.`},{name:`alignOffset`,type:`number`,defaultValue:`0`,description:`Сдвиг вдоль триггера в пикселях.`}]},{name:`DropdownMenuItem`,props:[{name:`variant`,type:`"default" | "danger" | "destructive"`,defaultValue:`"default"`,description:`Опасный пункт — danger. destructive устарел, бери danger.`},{name:`shortcut`,type:`string`,description:`Сочетание в формате aria-keyshortcuts: показывается справа. Клавишу назначает приложение.`},{name:`inset`,type:`boolean`,defaultValue:`false`,description:`Отступ слева под значок других пунктов.`},{name:`onClick`,type:`MouseEventHandler`,description:`Действие пункта.`}]},{name:`DropdownMenuCheckboxItem, DropdownMenuRadioItem`,props:[{name:`checked, onCheckedChange`,type:`boolean, (checked: boolean) => void`,description:`Флажок. У DropdownMenuRadioItem выбор ведёт value группы.`},{name:`shortcut`,type:`string`,description:`Сочетание справа, как у DropdownMenuItem.`}]},{name:`DropdownMenuRadioGroup`,props:[{name:`value, onValueChange`,type:`string, (value: string) => void`,description:`Выбранное значение группы.`}]},{name:`DropdownMenuLabel`,props:[{name:`inset`,type:`boolean`,defaultValue:`false`,description:`Отступ слева. Подпись стоит внутри DropdownMenuGroup.`}]},{name:`DropdownMenuShortcut`,props:[{name:`keys`,type:`string`,description:`Сочетание для ручной разметки. Без keys выводит children в оформлении KeyHint.`}]},{name:`DropdownMenuSubContent`,props:[{name:`side`,type:`"top" | "bottom" | "left" | "right"`,defaultValue:`"right"`,description:`Подменю открывается сбоку от пункта DropdownMenuSubTrigger.`}]}]}),related:(0,N.jsx)(T,{links:[{href:`/components/alert-dialog`,label:`AlertDialog`,description:`Подтверждение для пункта «Удалить».`},{href:`/components/key-hint`,label:`KeyHint`,description:`Как выводится сочетание в пункте.`},{href:`/components/popover`,label:`Popover`,description:`Окно с полями вместо списка действий.`},{href:`/components/select`,label:`Select`,description:`Выбор значения поля, а не действия.`}]}),children:[(0,N.jsx)(j,{id:`open`,label:`Открытие по кнопке`,description:`Когда у строки или карточки есть кнопка «Ещё». Подпись IconButton становится именем меню для скринридера.`,children:(0,N.jsx)(A,{code:`<DropdownMenu>
  <DropdownMenuTrigger render={<IconButton label="Действия"><MoreIcon /></IconButton>} />
  <DropdownMenuContent>
    <DropdownMenuGroup>
      <DropdownMenuLabel>Инцидент</DropdownMenuLabel>
      <DropdownMenuItem shortcut="Meta+E"><EditIcon />Редактировать</DropdownMenuItem>
      <DropdownMenuItem shortcut="Shift+Meta+C"><CopyIcon />Копировать ссылку</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem variant="danger"><DeleteIcon />Удалить</DropdownMenuItem>
    </DropdownMenuGroup>
  </DropdownMenuContent>
</DropdownMenu>`,gpuiCode:`use anikin_lab_gpui::design_system::{
    DsMenu, DsMenuItem, DsMenuTrigger, DsMenuTriggerVariant,
};

let menu = DsMenu::new("incident-actions")
    .item(DsMenuItem::new("edit", "Редактировать").on_click(|_, _, _| {}))
    .item(DsMenuItem::new("copy", "Копировать ссылку").on_click(|_, _, _| {}))
    .item(
        DsMenuItem::new("delete", "Удалить")
            .destructive(true)
            .on_click(|_, _, _| {}),
    );

let trigger = DsMenuTrigger::new("incident-menu", "Действия", menu)
    .variant(DsMenuTriggerVariant::Ghost)
    .accessibility_label("Действия над инцидентом");`,children:(0,N.jsxs)(D,{gap:`sm`,className:a(`items-start`),children:[(0,N.jsxs)(v,{children:[(0,N.jsx)(d,{render:(0,N.jsx)(o,{label:`Действия`,children:(0,N.jsx)(c,{})})}),(0,N.jsx)(g,{children:(0,N.jsxs)(h,{children:[(0,N.jsx)(y,{children:`Инцидент`}),(0,N.jsxs)(p,{shortcut:`Meta+E`,children:[(0,N.jsx)(s,{}),`Редактировать`]}),(0,N.jsxs)(p,{shortcut:`Shift+Meta+C`,children:[(0,N.jsx)(r,{}),`Копировать ссылку`]}),(0,N.jsx)(x,{}),(0,N.jsxs)(p,{variant:`danger`,children:[(0,N.jsx)(i,{}),`Удалить`]})]})})]}),(0,N.jsx)(O,{content:`actions`})]})})}),(0,N.jsx)(j,{id:`choices`,label:`Флажки и выбор`,description:`Когда меню настраивает вид списка: флажок включает режим, радиогруппа выбирает одно значение, выбранное отмечено галочкой. У каждой группы подпись.`,children:(0,N.jsx)(A,{code:`import { useState } from "react"

function ListView() {
  const [showArchived, setShowArchived] = useState(false)
  const [sort, setSort] = useState("updated")
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button tone="neutral" variant="outline" />}>Вид</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>Показывать</DropdownMenuLabel>
          <DropdownMenuCheckboxItem checked={showArchived} onCheckedChange={setShowArchived}>Архивные</DropdownMenuCheckboxItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuLabel>Сортировка</DropdownMenuLabel>
          <DropdownMenuRadioGroup value={sort} onValueChange={setSort}>
            <DropdownMenuRadioItem value="updated">По обновлению</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="created">По созданию</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`,children:(0,N.jsxs)(D,{gap:`sm`,className:a(`items-start`),children:[(0,N.jsxs)(v,{children:[(0,N.jsx)(d,{render:(0,N.jsx)(l,{tone:`neutral`,variant:`outline`}),children:`Вид`}),(0,N.jsxs)(g,{children:[(0,N.jsxs)(h,{children:[(0,N.jsx)(y,{children:`Показывать`}),(0,N.jsx)(_,{checked:e,onCheckedChange:t,children:`Архивные`})]}),(0,N.jsx)(x,{}),(0,N.jsxs)(h,{children:[(0,N.jsx)(y,{children:`Сортировка`}),(0,N.jsxs)(S,{value:n,onValueChange:P,children:[(0,N.jsx)(m,{value:`updated`,children:`По обновлению`}),(0,N.jsx)(m,{value:`created`,children:`По созданию`})]})]})]})]}),(0,N.jsx)(O,{content:`choices`})]})})}),(0,N.jsx)(j,{id:`submenu`,label:`Подменю`,description:`Когда у действия есть цель из короткого списка, например проект для переноса задачи.`,children:(0,N.jsx)(A,{code:`<DropdownMenu>
  <DropdownMenuTrigger render={<Button tone="neutral" variant="outline" />}>Переместить</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>В начало</DropdownMenuItem>
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>В проект</DropdownMenuSubTrigger>
      <DropdownMenuSubContent>
        <DropdownMenuItem>Платформа</DropdownMenuItem>
        <DropdownMenuItem>Мобильное приложение</DropdownMenuItem>
      </DropdownMenuSubContent>
    </DropdownMenuSub>
  </DropdownMenuContent>
</DropdownMenu>`,children:(0,N.jsxs)(D,{gap:`sm`,className:a(`items-start`),children:[(0,N.jsxs)(v,{children:[(0,N.jsx)(d,{render:(0,N.jsx)(l,{tone:`neutral`,variant:`outline`}),children:`Переместить`}),(0,N.jsxs)(g,{children:[(0,N.jsx)(p,{children:`В начало`}),(0,N.jsxs)(u,{children:[(0,N.jsx)(f,{children:`В проект`}),(0,N.jsxs)(b,{children:[(0,N.jsx)(p,{children:`Платформа`}),(0,N.jsx)(p,{children:`Мобильное приложение`})]})]})]})]}),(0,N.jsx)(O,{content:`submenu`})]})})})]})}export{P as default};