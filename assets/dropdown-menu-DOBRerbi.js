import{a as e,n as t,t as n}from"./jsx-runtime-dBoqvwbd.js";import{An as r,B as i,M as a,P as o,as as s,ct as c,os as l}from"./useLabelableId-C6GEk9LR.js";import{D as u,E as d,S as f,T as p,_ as m,b as h,g,h as _,m as v,v as y,w as b,x,y as S}from"./chunk-XANDBWJ2-rTxCz50_.js";import{A as C,J as w,Ut as T,X as E,_t as D,dt as O,nn as k,rt as A,vn as j}from"./index-BX5CNJVf.js";var M=e(t(),1),N=n();function P(){let[e,t]=(0,M.useState)(!1),[n,P]=(0,M.useState)(`updated`);return(0,N.jsxs)(O,{kind:`component`,route:`/components/dropdown-menu`,description:`Короткий список действий у кнопки: сочетание клавиш справа, опасное действие окрашено отдельно. Бери его, когда действиям над записью не хватает места в строке.`,usage:(0,N.jsx)(j,{use:[`Действия над сущностью, которым не хватает места в строке.`,`Меню «Ещё» у кнопки-значка.`,`Короткий выбор режима пунктами с отметкой.`],avoid:[{text:`Выбор значения поля формы.`,instead:{href:`/components/select`,label:`Select`}},{text:`Поиск среди десятков команд.`,instead:{href:`/components/command`,label:`Command`}},{text:`Одно-два действия: их видно и без меню.`,instead:{href:`/components/button`,label:`Button`}}]}),example:(0,N.jsx)(E,{code:`<DropdownMenu>
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
</DropdownMenu>`,children:(0,N.jsx)(w,{})}),imports:(0,N.jsx)(A,{code:`import {
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
} from "@chucky23/design-system/icons"`}),api:(0,N.jsx)(C,{items:[{name:`DropdownMenu`,props:[{name:`open, defaultOpen, onOpenChange`,type:`boolean, boolean, (open: boolean) => void`,description:`Управление открытием.`}]},{name:`DropdownMenuTrigger`,props:[{name:`render`,type:`ReactElement`,description:`Элемент-триггер: render={<IconButton />}.`}]},{name:`DropdownMenuContent`,props:[{name:`side`,type:`"top" | "bottom" | "left" | "right"`,defaultValue:`"bottom"`,description:`Сторона появления.`},{name:`align`,type:`"start" | "center" | "end"`,defaultValue:`"start"`,description:`Выравнивание вдоль триггера.`},{name:`sideOffset`,type:`number`,defaultValue:`4`,description:`Отступ от триггера в пикселях.`},{name:`alignOffset`,type:`number`,defaultValue:`0`,description:`Сдвиг вдоль триггера в пикселях.`}]},{name:`DropdownMenuItem`,props:[{name:`variant`,type:`"default" | "danger" | "destructive"`,defaultValue:`"default"`,description:`Опасный пункт — danger. destructive устарел, бери danger.`},{name:`shortcut`,type:`string`,description:`Сочетание в формате aria-keyshortcuts: показывается справа. Клавишу назначает приложение.`},{name:`inset`,type:`boolean`,defaultValue:`false`,description:`Отступ слева под значок других пунктов.`},{name:`onClick`,type:`MouseEventHandler`,description:`Действие пункта.`}]},{name:`DropdownMenuCheckboxItem, DropdownMenuRadioItem`,props:[{name:`checked, onCheckedChange`,type:`boolean, (checked: boolean) => void`,description:`Флажок. У DropdownMenuRadioItem выбор ведёт value группы.`},{name:`shortcut`,type:`string`,description:`Сочетание справа, как у DropdownMenuItem.`}]},{name:`DropdownMenuRadioGroup`,props:[{name:`value, onValueChange`,type:`string, (value: string) => void`,description:`Выбранное значение группы.`}]},{name:`DropdownMenuLabel`,props:[{name:`inset`,type:`boolean`,defaultValue:`false`,description:`Отступ слева. Подпись стоит внутри DropdownMenuGroup.`}]},{name:`DropdownMenuShortcut`,props:[{name:`keys`,type:`string`,description:`Сочетание для ручной разметки. Без keys выводит children в оформлении KeyHint.`}]},{name:`DropdownMenuSubContent`,props:[{name:`side`,type:`"top" | "bottom" | "left" | "right"`,defaultValue:`"right"`,description:`Подменю открывается сбоку от пункта DropdownMenuSubTrigger.`}]}]}),related:(0,N.jsx)(D,{links:[{href:`/components/alert-dialog`,label:`AlertDialog`,description:`Подтверждение для пункта «Удалить».`},{href:`/components/key-hint`,label:`KeyHint`,description:`Как выводится сочетание в пункте.`},{href:`/components/popover`,label:`Popover`,description:`Окно с полями вместо списка действий.`},{href:`/components/select`,label:`Select`,description:`Выбор значения поля, а не действия.`}]}),children:[(0,N.jsx)(T,{id:`open`,label:`Открытие по кнопке`,description:`Когда у строки или карточки есть кнопка «Ещё». Подпись IconButton становится именем меню для скринридера.`,children:(0,N.jsx)(E,{code:`<DropdownMenu>
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
</DropdownMenu>`,children:(0,N.jsxs)(k,{gap:`sm`,className:r(`items-start`),children:[(0,N.jsxs)(v,{children:[(0,N.jsx)(u,{render:(0,N.jsx)(l,{label:`Действия`,children:(0,N.jsx)(c,{})})}),(0,N.jsx)(g,{children:(0,N.jsxs)(m,{children:[(0,N.jsx)(S,{children:`Инцидент`}),(0,N.jsxs)(y,{shortcut:`Meta+E`,children:[(0,N.jsx)(i,{}),`Редактировать`]}),(0,N.jsxs)(y,{shortcut:`Shift+Meta+C`,children:[(0,N.jsx)(a,{}),`Копировать ссылку`]}),(0,N.jsx)(f,{}),(0,N.jsxs)(y,{variant:`danger`,children:[(0,N.jsx)(o,{}),`Удалить`]})]})})]}),(0,N.jsx)(w,{content:`actions`})]})})}),(0,N.jsx)(T,{id:`choices`,label:`Флажки и выбор`,description:`Когда меню настраивает вид списка: флажок включает режим, радиогруппа выбирает одно значение, выбранное отмечено галочкой. У каждой группы подпись.`,children:(0,N.jsx)(E,{code:`import { useState } from "react"

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
}`,children:(0,N.jsxs)(k,{gap:`sm`,className:r(`items-start`),children:[(0,N.jsxs)(v,{children:[(0,N.jsx)(u,{render:(0,N.jsx)(s,{tone:`neutral`,variant:`outline`}),children:`Вид`}),(0,N.jsxs)(g,{children:[(0,N.jsxs)(m,{children:[(0,N.jsx)(S,{children:`Показывать`}),(0,N.jsx)(_,{checked:e,onCheckedChange:t,children:`Архивные`})]}),(0,N.jsx)(f,{}),(0,N.jsxs)(m,{children:[(0,N.jsx)(S,{children:`Сортировка`}),(0,N.jsxs)(h,{value:n,onValueChange:P,children:[(0,N.jsx)(x,{value:`updated`,children:`По обновлению`}),(0,N.jsx)(x,{value:`created`,children:`По созданию`})]})]})]})]}),(0,N.jsx)(w,{content:`choices`})]})})}),(0,N.jsx)(T,{id:`submenu`,label:`Подменю`,description:`Когда у действия есть цель из короткого списка, например проект для переноса задачи.`,children:(0,N.jsx)(E,{code:`<DropdownMenu>
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
</DropdownMenu>`,children:(0,N.jsxs)(k,{gap:`sm`,className:r(`items-start`),children:[(0,N.jsxs)(v,{children:[(0,N.jsx)(u,{render:(0,N.jsx)(s,{tone:`neutral`,variant:`outline`}),children:`Переместить`}),(0,N.jsxs)(g,{children:[(0,N.jsx)(y,{children:`В начало`}),(0,N.jsxs)(b,{children:[(0,N.jsx)(d,{children:`В проект`}),(0,N.jsxs)(p,{children:[(0,N.jsx)(y,{children:`Платформа`}),(0,N.jsx)(y,{children:`Мобильное приложение`})]})]})]})]}),(0,N.jsx)(w,{content:`submenu`})]})})})]})}export{P as default};