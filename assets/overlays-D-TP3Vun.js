import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{$ as t,$n as n,$r as r,C as i,E as a,Gn as o,Qn as s,Qr as c,Rn as l,S as u,T as d,Xn as f,Zn as p,Zr as m,_i as h,_o as g,ai as _,ar as v,b as y,br as b,ci as x,cr as S,do as C,ei as w,er as T,fo as E,g as D,ii as O,li as k,m as A,nr as j,nt as M,o as N,oi as P,ri as F,si as I,sr as L,ti as R,tr as z,vi as B,w as V,wo as H,x as U}from"./chunk-ZW5N5E5H-ScFucA-b.js";import{f as W,h as G,j as K,r as q}from"./docs-Ck_i9UNX.js";import"./index-DiNellwx.js";import"./workspace-BwWB7lTa.js";import"./pixel-BsskMLeG.js";import{n as J,t as Y}from"./docs-article-BUNGnjgF.js";import"./icons-L9GMQDIR.js";import"./field-CgDbzcX2.js";var X=e(),Z=[{id:`usage`,label:`Использование`},{id:`tooltip`,label:`Tooltip`},{id:`dropdown-menu`,label:`DropdownMenu`},{id:`sheet`,label:`Sheet`},{id:`drawer`,label:`Drawer`},{id:`rules`,label:`Правила`},{id:`api`,label:`API`}],Q=[{term:`Title обязателен`,description:`Модальные Dialog, AlertDialog, Sheet и Drawer имеют свой Title и понятное описание. Tooltip сообщает короткую подсказку, DropdownMenu именуется триггером.`},{term:`AlertDialog для удаления`,description:`Удаление сначала запрашивает подтверждение через AlertDialog. Приложение выполняет удаление только после подтверждения; до открытия закрой предыдущий модальный слой.`},{term:`Escape закрывает`,description:`Сохраняй стандартное закрытие по Escape. Cancel и Escape не выполняют доменное действие; для draft редактора подключи защиту несохранённого ввода.`},{term:`Фокус в модальном окне`,description:`Модальные Dialog/Sheet (Base UI) и Drawer (Vaul) перемещают и удерживают фокус внутри. Tooltip и DropdownMenu имеют собственные обычные паттерны навигации и не являются модальными формами.`},{term:`Возврат фокуса`,description:`После закрытия фокус возвращается на подключённый триггер. Для controlled open без триггера приложение задаёт исходный control; после перехода — осмысленную цель новой страницы.`},{term:`Без вложенных оверлеев`,description:`Не открывай оверлей из другого оверлея. Максимум один уровень.`},{term:`Выбранная сущность — в инспекторе`,description:`Свойства выбранной сущности рядом с коллекцией показывает инспектор типа экрана: проп inspector у RegistryWorkspace и BoardWorkspace. Ширину, размещение, фокус и закрытие по Escape задаёт пакет, поэтому панель из Sheet для этого не собирают.`},{term:`Композиция триггера`,description:`Base UI DialogTrigger, SheetTrigger, DropdownMenuTrigger и TooltipTrigger используют render={<Button />}. Vaul DrawerTrigger и DrawerClose используют asChild с одной кнопкой. Не вкладывай Button в Trigger обычным children.`}];function $(){return(0,X.jsx)(A,{title:`Overlays`,description:`Tooltip, DropdownMenu, Dialog, Sheet, Drawer. Модальные Dialog, Sheet и Drawer требуют Title для доступности. Скругление 3px, глубина — рамками, без теней.`,breadcrumbs:Y(`/components/overlays`),children:(0,X.jsx)(N,{presentation:`article`,label:`Overlays`,inspector:J(Z),document:(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(q,{title:`Dialog`,description:`Модальное окно для форм и подтверждений. DialogTitle обязателен для доступности.`,code:`import { useId } from "react"
import { Button, Input, Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@chucky23/design-system/react"
import { FieldRecipe } from "@chucky23/design-system/recipes/field"

type CreateIncidentDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  onTitleChange: (title: string) => void
  onRequestCreate: () => void // host validates/persists; keep input after an error
}
export function CreateIncidentDialog({ open, onOpenChange, title, onTitleChange, onRequestCreate }: CreateIncidentDialogProps) {
  const titleId = useId()
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger render={<Button variant="outline" size="sm" />}>Create incident</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Incident</DialogTitle>
          <DialogDescription>Register a new incident in the system.</DialogDescription>
        </DialogHeader>
        <FieldRecipe label="Title" htmlFor={titleId}>
          <Input id={titleId} value={title} onChange={event => onTitleChange(event.target.value)} />
        </FieldRecipe>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>Close</DialogClose>
          <Button onClick={onRequestCreate}>Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`,children:(0,X.jsxs)(f,{children:[(0,X.jsx)(j,{render:(0,X.jsx)(h,{variant:`outline`,size:`sm`}),children:`Open Dialog`}),(0,X.jsxs)(p,{children:[(0,X.jsxs)(T,{children:[(0,X.jsx)(z,{children:`Create New Incident`}),(0,X.jsx)(s,{children:`Register a new incident in the system and notify the commander.`})]}),(0,X.jsx)(D,{label:`Title`,htmlFor:`dialog-title`,children:(0,X.jsx)(R,{id:`dialog-title`,defaultValue:`API gateway timeout`})}),(0,X.jsx)(n,{children:(0,X.jsx)(h,{children:`Create`})})]})]})}),(0,X.jsxs)(l,{children:[`Оверлеи выстроены по силе вторжения в контекст. Tooltip — пассивная подсказка при наведении. DropdownMenu — короткий список действий у триггера. Sheet и Drawer занимают боковой или нижний край под задачи, которые требуют больше пространства, но не полного перехода. Dialog прерывает работу ради формы или подтверждения. Свойства выбранной сущности рядом со списком или доской показывает не Sheet, а инспектор типа экрана: `,(0,X.jsx)(v,{children:`inspector`}),` у RegistryWorkspace и BoardWorkspace.`]}),(0,X.jsxs)(b,{id:`usage`,label:`Использование`,children:[(0,X.jsx)(l,{children:`Примеры используют публичные entrypoints установленного npm-пакета; общий host подключает AnikinLabProvider и Tailwind + preset.css. Для Drawer дополнительно установи peer-зависимость vaul.`}),(0,X.jsxs)(L,{children:[(0,X.jsxs)(S,{children:[`Tooltip, DropdownMenu, Dialog и Sheet — из `,(0,X.jsx)(v,{children:`@chucky23/design-system/react`}),`.`]}),(0,X.jsxs)(S,{children:[`Drawer — из `,(0,X.jsx)(v,{children:`@chucky23/design-system/extended/drawer`}),`.`]}),(0,X.jsxs)(S,{children:[`Поле с подписью в форме оверлея — FieldRecipe из`,` `,(0,X.jsx)(v,{children:`@chucky23/design-system/recipes/field`}),`.`]})]}),(0,X.jsx)(l,{children:`Каждый пример на странице — готовый компонент: вкладка Code содержит импорты и типы пропсов.`})]}),(0,X.jsx)(b,{id:`tooltip`,label:`Tooltip`,children:(0,X.jsx)(q,{title:`Tooltip`,description:`Подсказка при наведении и фокусе. Для коротких подсказок, не для контента.`,code:`import { Button, IconButton, TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@chucky23/design-system/react"
import { CopyIcon } from "@chucky23/design-system/icons"
import { PixelSettings } from "@chucky23/design-system/icons/pixel"

export function ShortcutHints() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline" size="sm" />}>Create</TooltipTrigger>
        <TooltipContent>Ctrl+N</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger render={<IconButton label="Settings" variant="outline"><PixelSettings /></IconButton>} />
        <TooltipContent>Settings</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger render={<IconButton label="Copy to clipboard"><CopyIcon /></IconButton>} />
        <TooltipContent>Copy to clipboard</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}`,children:(0,X.jsxs)(r,{children:[(0,X.jsxs)(m,{children:[(0,X.jsx)(w,{render:(0,X.jsx)(h,{variant:`outline`,size:`sm`}),children:`Create`}),(0,X.jsx)(c,{children:`Ctrl+N`})]}),(0,X.jsxs)(m,{children:[(0,X.jsx)(w,{render:(0,X.jsx)(B,{label:`Settings`,variant:`outline`,children:(0,X.jsx)(t,{})})}),(0,X.jsx)(c,{children:`Settings`})]}),(0,X.jsxs)(m,{children:[(0,X.jsx)(w,{render:(0,X.jsx)(B,{label:`Copy to clipboard`,children:(0,X.jsx)(C,{})})}),(0,X.jsx)(c,{children:`Copy to clipboard`})]})]})})}),(0,X.jsx)(b,{id:`dropdown-menu`,label:`DropdownMenu`,children:(0,X.jsxs)(q,{title:`DropdownMenu`,description:`Контекстное меню действий. Триггер — кнопка или IconButton.`,code:`import { IconButton, DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuGroup, DropdownMenuSeparator } from "@chucky23/design-system/react"
import { MoreIcon } from "@chucky23/design-system/icons"

type IncidentActionsProps = {
  onViewDetails: () => void
  onAssignTeam: () => void
  onRequestDelete: () => void // host opens AlertDialog; delete only after confirmation
}
export function IncidentActions({ onViewDetails, onAssignTeam, onRequestDelete }: IncidentActionsProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<IconButton label="Incident actions" variant="ghost"><MoreIcon /></IconButton>} />
      <DropdownMenuContent>
        <DropdownMenuGroup>
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={onViewDetails}>View details</DropdownMenuItem>
        <DropdownMenuItem onClick={onAssignTeam}>Assign to team</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive" onClick={onRequestDelete}>Request deletion…</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`,children:[(0,X.jsxs)(y,{children:[(0,X.jsx)(a,{render:(0,X.jsx)(B,{label:`Incident actions`,variant:`ghost`,children:(0,X.jsx)(H,{})})}),(0,X.jsx)(U,{children:(0,X.jsxs)(u,{children:[(0,X.jsx)(V,{children:`Incident Actions`}),(0,X.jsx)(d,{}),(0,X.jsx)(i,{children:`View details`}),(0,X.jsx)(i,{children:`Assign commander`}),(0,X.jsx)(i,{children:`Add to postmortem`}),(0,X.jsx)(d,{}),(0,X.jsxs)(i,{variant:`destructive`,children:[(0,X.jsx)(E,{}),`Delete incident`]})]})})]}),(0,X.jsxs)(y,{children:[(0,X.jsx)(a,{render:(0,X.jsxs)(h,{variant:`outline`,size:`sm`,children:[(0,X.jsx)(M,{"aria-hidden":`true`}),`Account`]})}),(0,X.jsx)(U,{align:`end`,children:(0,X.jsxs)(u,{children:[(0,X.jsx)(V,{children:`ops@example.com`}),(0,X.jsx)(d,{}),(0,X.jsxs)(i,{children:[(0,X.jsx)(M,{"aria-hidden":`true`}),`Profile`]}),(0,X.jsxs)(i,{children:[(0,X.jsx)(t,{"aria-hidden":`true`}),`Settings`]}),(0,X.jsx)(d,{}),(0,X.jsxs)(i,{children:[(0,X.jsx)(g,{}),`Sign out`]})]})})]})]})}),(0,X.jsx)(b,{id:`sheet`,label:`Sheet`,children:(0,X.jsx)(q,{title:`Sheet`,description:`Боковая панель для формы или задачи вне коллекции; выбранную сущность рядом со списком показывает инспектор типа экрана. SheetTitle обязателен для доступности. Поля и действия стоят в SheetFooter: у SheetContent нет собственных отступов.`,code:`import { useId } from "react"
import { Button, Input, Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from "@chucky23/design-system/react"
import { FieldRecipe } from "@chucky23/design-system/recipes/field"

type IncidentSheetProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  onTitleChange: (title: string) => void
  onRequestSave: () => void // host validates/persists; close only after confirmed success
}
export function IncidentSheet({ open, onOpenChange, title, onTitleChange, onRequestSave }: IncidentSheetProps) {
  const titleId = useId()
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetTrigger render={<Button variant="outline" size="sm" />}>Edit incident</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit Incident</SheetTitle>
          <SheetDescription>Update the incident title.</SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <FieldRecipe label="Title" htmlFor={titleId}>
            <Input id={titleId} value={title} onChange={event => onTitleChange(event.target.value)} />
          </FieldRecipe>
          <Button onClick={onRequestSave}>Save Changes</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}`,children:(0,X.jsxs)(F,{children:[(0,X.jsx)(k,{render:(0,X.jsx)(h,{variant:`outline`,size:`sm`}),children:`Open Sheet`}),(0,X.jsxs)(O,{children:[(0,X.jsxs)(I,{children:[(0,X.jsx)(x,{children:`Edit Incident`}),(0,X.jsx)(_,{children:`Update incident details and assigned commander.`})]}),(0,X.jsxs)(P,{children:[(0,X.jsx)(D,{label:`Title`,htmlFor:`sheet-title`,children:(0,X.jsx)(R,{id:`sheet-title`,defaultValue:`API gateway timeout`})}),(0,X.jsx)(D,{label:`Commander`,htmlFor:`sheet-commander`,children:(0,X.jsx)(R,{id:`sheet-commander`,defaultValue:`@alice`})}),(0,X.jsx)(h,{children:`Save Changes`})]})]})]})})}),(0,X.jsxs)(b,{id:`drawer`,label:`Drawer`,children:[(0,X.jsxs)(l,{children:[`Drawer — нижняя панель поверх Vaul для мобильного сценария. DrawerTitle именует диалог, DrawerDescription объясняет содержимое, DrawerClose даёт явный выход. Vaul использует asChild для кнопки-триггера и кнопки закрытия. autoFocus включён по умолчанию: при открытии фокус переходит внутрь, Tab остаётся в модальном содержимом, Escape закрывает панель и возвращает фокус на триггер. autoFocus=false допустим только с управлением фокусом приложения. Живой пример и API — на странице `,(0,X.jsx)(G,{href:`/components/drawer`,children:`Drawer`}),`.`]}),(0,X.jsx)(o,{copyLabel:`Скопировать код: использование Drawer`,language:`tsx`,code:`import { Button } from "@chucky23/design-system/react"
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose } from "@chucky23/design-system/extended/drawer"

// Requires peer dependency vaul, plus the shared provider/preset setup.
export function QuickActionsDrawer({ onViewDetails }: { onViewDetails: () => void }) {
  return (
    <Drawer>
      <DrawerTrigger asChild><Button variant="outline">Open Drawer</Button></DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Quick Actions</DrawerTitle>
          <DrawerDescription>Select an action for this incident.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose asChild><Button onClick={onViewDetails}>View details</Button></DrawerClose>
          <DrawerClose asChild><Button variant="outline">Close</Button></DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}`})]}),(0,X.jsx)(b,{id:`rules`,label:`Правила`,children:(0,X.jsx)(W,{items:Q})}),(0,X.jsxs)(b,{id:`api`,label:`API`,children:[(0,X.jsx)(K,{title:`Tooltip Props`,props:[{name:`delay`,type:`number`,defaultValue:`0`,description:`TooltipProvider: задержка перед показом подсказки в миллисекундах.`},{name:`side`,type:`"top" | "bottom" | "left" | "right"`,defaultValue:`"top"`,description:`TooltipContent: сторона относительно триггера.`},{name:`sideOffset`,type:`number`,defaultValue:`4`,description:`TooltipContent: отступ от триггера в пикселях.`}]}),(0,X.jsx)(K,{title:`DropdownMenu Props`,props:[{name:`DropdownMenuContent.align`,type:`"start" | "center" | "end"`,defaultValue:`"start"`,description:`Выравнивание меню вдоль триггера.`},{name:`DropdownMenuContent.side`,type:`"top" | "bottom" | "left" | "right"`,defaultValue:`"bottom"`,description:`Сторона появления меню.`},{name:`DropdownMenuContent.sideOffset`,type:`number`,defaultValue:`4`,description:`Отступ меню от триггера в пикселях.`},{name:`DropdownMenuItem.variant`,type:`"default" | "destructive"`,defaultValue:`"default"`,description:`destructive окрашивает пункт опасного действия.`}]}),(0,X.jsx)(K,{title:`Dialog Props`,props:[{name:`open`,type:`boolean`,defaultValue:`—`,description:`Dialog: контролируемое состояние открытия.`},{name:`onOpenChange`,type:`(open: boolean) => void`,defaultValue:`—`,description:`Dialog: колбэк смены состояния открытия.`},{name:`DialogContent.showCloseButton`,type:`boolean`,defaultValue:`true`,description:`Показывает кнопку закрытия в правом верхнем углу.`},{name:`DialogContent.closeLabel`,type:`string`,defaultValue:`"Закрыть"`,description:`Имя встроенной кнопки закрытия на языке приложения.`}]}),(0,X.jsx)(K,{title:`Sheet Props`,props:[{name:`side`,type:`"top" | "bottom" | "left" | "right"`,defaultValue:`"right"`,description:`SheetContent: край, с которого выезжает панель.`},{name:`open`,type:`boolean`,defaultValue:`—`,description:`Sheet: контролируемое состояние открытия.`},{name:`onOpenChange`,type:`(open: boolean) => void`,defaultValue:`—`,description:`Sheet: колбэк смены состояния открытия.`},{name:`showCloseButton`,type:`boolean`,defaultValue:`true`,description:`SheetContent: показывает встроенную кнопку закрытия.`},{name:`closeLabel`,type:`string`,defaultValue:`"Закрыть"`,description:`SheetContent: имя встроенной кнопки закрытия на языке приложения.`}]})]})]})})})}export{$ as default};