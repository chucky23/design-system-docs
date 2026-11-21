import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{A as t,Ut as n,V as r,X as i,_t as a,dt as o,rt as s,vn as c}from"./index-BX5CNJVf.js";var l=e(),u=`// shortcut в пункте только показывает сочетание. Действие регистрирует приложение:
// onKeyDown строки в фокусе или useShortcut, как в образце ниже.
<ContextMenu>
  <ContextMenuTrigger render={<li tabIndex={0} />}>TASK-0042 Разобрать дубли уведомлений</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuGroup>
      <ContextMenuLabel>TASK-0042</ContextMenuLabel>
      <ContextMenuItem shortcut="Meta+E"><EditIcon />Переименовать</ContextMenuItem>
      <ContextMenuItem shortcut="Shift+Meta+C"><CopyIcon />Копировать ссылку</ContextMenuItem>
    </ContextMenuGroup>
    <ContextMenuSeparator />
    <ContextMenuGroup>
      <ContextMenuLabel>Приоритет</ContextMenuLabel>
      <ContextMenuRadioGroup defaultValue="P1">
        <ContextMenuRadioItem value="P1">P1</ContextMenuRadioItem>
        <ContextMenuRadioItem value="P2">P2</ContextMenuRadioItem>
        <ContextMenuRadioItem value="P3">P3</ContextMenuRadioItem>
      </ContextMenuRadioGroup>
    </ContextMenuGroup>
    <ContextMenuSeparator />
    <ContextMenuItem variant="danger"><DeleteIcon />Удалить</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`;function d(){return(0,l.jsx)(o,{kind:`component`,route:`/components/context-menu`,description:`Действия над строкой, карточкой или узлом дерева по правой кнопке мыши, клавише меню или Shift+F10. Пункты и опасный пункт те же, что у DropdownMenu, окно открывается у курсора.`,usage:(0,l.jsx)(c,{use:[`Действия над строкой реестра, карточкой доски или узлом дерева.`,`Быстрый путь к действиям, у которых уже есть кнопка или меню «Ещё».`],avoid:[{text:`Единственный путь к действию: его не найти без правой кнопки.`,instead:{href:`/components/dropdown-menu`,label:`DropdownMenu`}},{text:`Выбор значения поля.`,instead:{href:`/components/select`,label:`Select`}}]}),example:(0,l.jsx)(i,{code:u,children:(0,l.jsx)(r,{})}),imports:(0,l.jsx)(s,{code:`import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuLabel,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
} from "@chucky23/design-system/react"
import { CopyIcon, DeleteIcon, EditIcon } from "@chucky23/design-system/icons"`}),api:(0,l.jsx)(t,{items:[{name:`ContextMenu`,props:[{name:`open, defaultOpen, onOpenChange`,type:`boolean, boolean, (open: boolean) => void`,description:`Управление открытием.`}]},{name:`ContextMenuTrigger`,props:[{name:`render`,type:`ReactElement`,defaultValue:`<div />`,description:`Элемент области: строка, карточка, узел. Для клавиатуры область или элемент внутри получает фокус.`},{name:`className`,type:`string`,description:`Раскладка области.`}]},{name:`ContextMenuContent`,props:[{name:`className`,type:`string`,description:`Раскладка окна. Окно стоит у курсора, с клавиатуры — у элемента.`}]},{name:`ContextMenuItem`,props:[{name:`variant`,type:`"default" | "danger"`,defaultValue:`"default"`,description:`Опасный пункт — danger.`},{name:`shortcut`,type:`string`,description:`Сочетание в формате aria-keyshortcuts: показывается справа. Клавишу назначает приложение.`},{name:`onClick`,type:`MouseEventHandler`,description:`Действие пункта.`}]},{name:`ContextMenuRadioGroup, ContextMenuRadioItem`,props:[{name:`value, onValueChange`,type:`string, (value: string) => void`,description:`Выбранное значение группы. Выбранный пункт отмечен точкой, флажок — галочкой.`},{name:`value (у пункта)`,type:`string`,description:`Значение пункта. Подпись группы — ContextMenuLabel внутри ContextMenuGroup.`}]},{name:`ContextMenuCheckboxItem`,props:[{name:`checked, onCheckedChange`,type:`boolean, (checked: boolean) => void`,description:`Состояние флажка и его смена. Пункт тот же, что DropdownMenuCheckboxItem.`},{name:`shortcut`,type:`string`,description:`Сочетание справа, как у ContextMenuItem.`}]},{name:`ContextMenuLabel`,props:[{name:`inset`,type:`boolean`,defaultValue:`false`,description:`Отступ слева. Подпись стоит внутри ContextMenuGroup и называет объект меню, например ключ задачи.`}]},{name:`ContextMenuGroup`,props:[{name:`children`,type:`ReactNode`,required:!0,description:`Подпись ContextMenuLabel и пункты одной темы. Группы отделяет ContextMenuSeparator.`}]}]}),related:(0,l.jsx)(a,{links:[{href:`/components/dropdown-menu`,label:`DropdownMenu`,description:`То же меню у кнопки «Ещё»: видимый путь к тем же действиям.`},{href:`/components/alert-dialog`,label:`AlertDialog`,description:`Подтверждение для пункта «Удалить».`},{href:`/components/key-hint`,label:`KeyHint`,description:`Как выводится сочетание в пункте.`}]}),children:(0,l.jsx)(n,{id:`keyboard`,label:`Клавиатура`,description:`Shift+F10 или клавиша меню открывают меню у строки в фокусе, фокус сразу на первом пункте. Стрелки ходят по пунктам, Enter выполняет, Escape закрывает и возвращает фокус строке. ⌘E и ⇧⌘C на строке в фокусе выполняют пункт и без меню: образец слушает их сам, подсказка в пункте действие не регистрирует.`,children:(0,l.jsx)(i,{code:u,children:(0,l.jsx)(r,{})})})})}export{d as default};