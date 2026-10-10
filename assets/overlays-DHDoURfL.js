import{$ as e,$n as t,Bn as n,Er as r,F as i,Fn as a,Hn as o,I as s,In as c,Ki as l,L as u,Ln as d,M as f,Mo as p,N as m,P as h,Pn as g,Rn as _,Rr as v,Tr as y,_i as b,ci as x,di as S,dt as C,fi as w,gi as T,hi as E,j as D,jr as O,kn as k,li as A,lt as j,mi as M,ui as N,vi as P,yi as F,zn as I}from"./chunk-ZW5N5E5H-C8fDcLjq.js";import{H as L,M as R,r as z,s as B}from"./docs-CtJuZ0WF.js";import"./index-D3G-KnJA.js";import"./icons-BZQ_MwV3.js";import"./pixel-CIv9ut8e.js";var V=p();function H(){return(0,V.jsxs)(B,{className:`flex flex-col gap-6`,"data-docs-page":`overlays`,children:[(0,V.jsx)(o,{title:`Overlays`,description:`Tooltip, DropdownMenu, Dialog, Sheet, Drawer. Модальные Dialog, Sheet и Drawer требуют Title для доступности. Radius 3px, borders-only.`}),(0,V.jsx)(R,{className:`max-w-prose`,"data-body":!0,children:`Оверлеи выстроены по силе вторжения в контекст. Tooltip — пассивная подсказка при hover. DropdownMenu — короткий список действий у триггера. Sheet и Drawer занимают боковой или нижний край под задачи, которые требуют больше пространства, но не полного перехода. Примеры используют публичные entrypoints установленного npm-пакета; общий host подключает AnikinLabProvider и Tailwind + preset.css. Для Drawer дополнительно установи peer-зависимость vaul.`}),(0,V.jsx)(t,{label:`tooltip`,children:(0,V.jsx)(z,{title:`Tooltip`,description:`Hint on hover/focus. Для коротких подсказок, не для контента.`,code:`import { Button, TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@chucky23/design-system/react"

export function ShortcutHint() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline" size="sm" />}>Hover or focus me</TooltipTrigger>
        <TooltipContent>Keyboard shortcut: Ctrl+K</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}`,children:(0,V.jsx)(N,{children:(0,V.jsxs)(B,{className:`flex gap-3`,children:[(0,V.jsxs)(x,{children:[(0,V.jsx)(S,{render:(0,V.jsx)(l,{variant:`outline`,size:`sm`}),children:`Create`}),(0,V.jsx)(A,{children:(0,V.jsx)(R,{children:`Ctrl+N`})})]}),(0,V.jsxs)(x,{children:[(0,V.jsx)(S,{render:(0,V.jsx)(l,{variant:`outline`,size:`icon`,"aria-label":`Settings`,children:(0,V.jsx)(j,{"aria-hidden":`true`})})}),(0,V.jsx)(A,{children:(0,V.jsx)(R,{children:`Settings`})})]}),(0,V.jsxs)(x,{children:[(0,V.jsx)(S,{render:(0,V.jsx)(l,{variant:`ghost`,size:`icon`,"aria-label":`Copy to clipboard`,children:(0,V.jsx)(y,{})})}),(0,V.jsx)(A,{children:(0,V.jsx)(R,{children:`Copy to clipboard`})})]})]})})})}),(0,V.jsx)(t,{label:`dropdown menu`,children:(0,V.jsx)(z,{title:`DropdownMenu`,description:`Контекстное меню действий. Trigger — кнопка или icon button.`,code:`import { IconButton, DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuGroup, DropdownMenuSeparator } from "@chucky23/design-system/react"
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
}`,children:(0,V.jsxs)(B,{className:`flex gap-3`,children:[(0,V.jsxs)(D,{children:[(0,V.jsx)(u,{render:(0,V.jsx)(l,{variant:`ghost`,size:`icon`,"aria-label":`Incident actions`,children:(0,V.jsx)(v,{})})}),(0,V.jsx)(f,{children:(0,V.jsxs)(m,{children:[(0,V.jsx)(i,{children:`Incident Actions`}),(0,V.jsx)(s,{}),(0,V.jsx)(h,{children:`View details`}),(0,V.jsx)(h,{children:`Assign commander`}),(0,V.jsx)(h,{children:`Add to postmortem`}),(0,V.jsx)(s,{}),(0,V.jsxs)(h,{variant:`destructive`,children:[(0,V.jsx)(r,{}),`Delete incident`]})]})})]}),(0,V.jsxs)(D,{children:[(0,V.jsx)(u,{render:(0,V.jsxs)(l,{variant:`outline`,size:`sm`,children:[(0,V.jsx)(C,{"aria-hidden":`true`}),`Account`]})}),(0,V.jsx)(f,{align:`end`,children:(0,V.jsxs)(m,{children:[(0,V.jsx)(i,{children:`ops@example.com`}),(0,V.jsx)(s,{}),(0,V.jsxs)(h,{children:[(0,V.jsx)(C,{"aria-hidden":`true`}),`Profile`]}),(0,V.jsxs)(h,{children:[(0,V.jsx)(j,{"aria-hidden":`true`}),`Settings`]}),(0,V.jsx)(s,{}),(0,V.jsxs)(h,{children:[(0,V.jsx)(O,{}),`Sign out`]})]})})]})]})})}),(0,V.jsx)(t,{label:`sheet`,children:(0,V.jsx)(z,{title:`Sheet (Side Panel)`,description:`Боковая панель для форм и деталей. ОБЯЗАТЕЛЕН SheetTitle для accessibility.`,code:`import { useId } from "react"
import { Button, Input, Label, Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter, SheetClose } from "@chucky23/design-system/react"

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
        <Label htmlFor={titleId}>Title</Label>
        <Input id={titleId} value={title} onChange={event => onTitleChange(event.target.value)} />
        <SheetFooter>
          <Button onClick={onRequestSave}>Save Changes</Button>
          <SheetClose render={<Button variant="outline" />}>Close</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}`,children:(0,V.jsxs)(M,{children:[(0,V.jsx)(F,{render:(0,V.jsx)(l,{variant:`outline`,size:`sm`}),children:`Open Sheet`}),(0,V.jsxs)(E,{children:[(0,V.jsxs)(b,{children:[(0,V.jsx)(P,{children:`Edit Incident`}),(0,V.jsx)(T,{children:`Update incident details and assigned commander.`})]}),(0,V.jsxs)(B,{className:`grid gap-4 py-4`,children:[(0,V.jsxs)(B,{className:`grid gap-2`,children:[(0,V.jsx)(e,{htmlFor:`sheet-title`,children:`Title`}),(0,V.jsx)(w,{id:`sheet-title`,defaultValue:`API gateway timeout`})]}),(0,V.jsxs)(B,{className:`grid gap-2`,children:[(0,V.jsx)(e,{htmlFor:`sheet-commander`,children:`Commander`}),(0,V.jsx)(w,{id:`sheet-commander`,defaultValue:`@alice`})]}),(0,V.jsx)(l,{children:`Save Changes`})]})]})]})})}),(0,V.jsx)(t,{label:`dialog`,children:(0,V.jsx)(z,{title:`Dialog`,description:`Модальное окно для форм и подтверждений. ОБЯЗАТЕЛЕН DialogTitle для accessibility.`,code:`import { useId } from "react"
import { Button, Input, Label, Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@chucky23/design-system/react"

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
        <Label htmlFor={titleId}>Title</Label>
        <Input id={titleId} value={title} onChange={event => onTitleChange(event.target.value)} />
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>Close</DialogClose>
          <Button onClick={onRequestCreate}>Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`,children:(0,V.jsxs)(g,{children:[(0,V.jsx)(n,{render:(0,V.jsx)(l,{variant:`outline`,size:`sm`}),children:`Open Dialog`}),(0,V.jsxs)(a,{children:[(0,V.jsxs)(_,{children:[(0,V.jsx)(I,{children:`Create New Incident`}),(0,V.jsx)(c,{children:`Register a new incident in the system and notify the commander.`})]}),(0,V.jsx)(B,{className:`grid gap-4 py-4`,children:(0,V.jsxs)(B,{className:`grid gap-2`,children:[(0,V.jsx)(e,{htmlFor:`dialog-title`,children:`Title`}),(0,V.jsx)(w,{id:`dialog-title`,defaultValue:`API gateway timeout`})]})}),(0,V.jsx)(d,{children:(0,V.jsx)(l,{children:`Create`})})]})]})})}),(0,V.jsxs)(t,{label:`drawer`,children:[(0,V.jsx)(R,{className:`mb-4`,"data-body":!0,children:`Drawer — нижняя панель поверх Vaul для мобильного сценария. DrawerTitle именует диалог, DrawerDescription объясняет содержимое, DrawerClose даёт явный выход. Vaul использует asChild для кнопки-триггера и кнопки закрытия. autoFocus включён по умолчанию: при открытии фокус переходит внутрь, Tab остаётся в модальном содержимом, Escape закрывает панель и возвращает фокус на триггер. autoFocus=false допустим только с управлением фокусом приложения.`}),(0,V.jsx)(k,{language:`tsx`,code:`import { Button } from "@chucky23/design-system/react"
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
}`})]}),(0,V.jsx)(t,{label:`overlay rules`,children:(0,V.jsx)(B,{className:`rounded-sm border p-4`,children:(0,V.jsx)(B,{className:`flex flex-col gap-3`,children:[{rule:`Title required`,desc:`Модальные Dialog, AlertDialog, Sheet и Drawer имеют свой Title и понятное описание. Tooltip сообщает короткую подсказку, DropdownMenu именуется триггером.`},{rule:`AlertDialog for destructive`,desc:`Удаление сначала запрашивает подтверждение через AlertDialog. Приложение выполняет удаление только после подтверждения; до открытия закрой предыдущий модальный слой.`},{rule:`Escape closes`,desc:`Сохраняй стандартное закрытие по Escape. Cancel и Escape не выполняют доменное действие; для draft редактора подключи защиту несохранённого ввода.`},{rule:`Modal focus`,desc:`Модальные Dialog/Sheet (Base UI) и Drawer (Vaul) перемещают и удерживают фокус внутри. Tooltip и DropdownMenu имеют собственные обычные паттерны навигации и не являются модальными формами.`},{rule:`Focus restoration`,desc:`После закрытия фокус возвращается на подключённый триггер. Для controlled open без триггера приложение задаёт исходный control; после перехода — осмысленную цель новой страницы.`},{rule:`No nested overlays`,desc:`Не открывай оверлей из другого оверлея. Максимум один уровень.`},{rule:`Trigger composition`,desc:`Base UI DialogTrigger, SheetTrigger, DropdownMenuTrigger и TooltipTrigger используют render={<Button />}. Vaul DrawerTrigger и DrawerClose используют asChild с одной кнопкой. Не вкладывай Button в Trigger обычным children.`}].map(e=>(0,V.jsxs)(B,{className:`flex gap-3`,children:[(0,V.jsx)(R,{as:`span`,signal:`ok`,className:`shrink-0 font-mono text-xs font-medium`,children:e.rule}),(0,V.jsx)(R,{as:`span`,"data-body":!0,children:e.desc})]},e.rule))})})}),(0,V.jsxs)(t,{label:`api reference`,children:[(0,V.jsx)(L,{title:`Tooltip Props`,props:[{name:`delay`,type:`number`,defaultValue:`0`,description:`TooltipProvider: delay before tooltip appears (ms)`},{name:`side`,type:`"top" | "bottom" | "left" | "right"`,defaultValue:`"top"`,description:`Placement relative to trigger`},{name:`sideOffset`,type:`number`,defaultValue:`4`,description:`Offset from trigger (px)`}]}),(0,V.jsx)(B,{className:`mt-4`,children:(0,V.jsx)(L,{title:`Sheet Props`,props:[{name:`side`,type:`"top" | "bottom" | "left" | "right"`,defaultValue:`"right"`,description:`Which edge the sheet slides from`},{name:`open`,type:`boolean`,defaultValue:`--`,description:`Controlled open state`},{name:`onOpenChange`,type:`(open: boolean) => void`,defaultValue:`--`,description:`Callback when open state changes`}]})})]})]})}export{H as default};