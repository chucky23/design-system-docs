import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{Ca as t,Fi as n,Ii as r,Ir as i,Li as a,Mi as o,Mn as s,Ni as c,Oa as l,Pi as u,Qr as d,R as f,Rr as p,Sa as m,Sr as h,Ta as g,Vt as _,_a as v,ba as y,cn as b,d as x,f as S,ga as C,h as w,ha as T,hn as E,j as D,ji as O,jt as k,ka as A,kr as j,kt as M,l as N,m as P,ma as F,p as I,pa as L,u as R,wa as z,x as B,xa as V,ya as H,zr as U}from"./chunk-FJ6G7XYZ-vkrr-AON.js";import{A as W,Q as G,T as K,g as q}from"./docs-CTQgkcVe.js";import"./index-CylhoBOX.js";import"./workspace-B0gvzNJe.js";import"./icons-2PLDBLl_.js";import{n as J,r as Y,t as X}from"./docs-article-CV9v0E7s.js";import"./field-NAbJPQ2_.js";var Z=e(),Q=[{id:`usage`,label:`Использование`},{id:`tooltip`,label:`Tooltip`},{id:`dropdown-menu`,label:`DropdownMenu`},{id:`sheet`,label:`Sheet`},{id:`drawer`,label:`Drawer`},{id:`rules`,label:`Правила`},{id:`api`,label:`API`}],$=[{term:`Title обязателен`,description:`Модальные Dialog, AlertDialog, Sheet и Drawer имеют свой Title и понятное описание. Tooltip сообщает короткую подсказку, DropdownMenu именуется триггером.`},{term:`AlertDialog для удаления`,description:`Удаление сначала запрашивает подтверждение через AlertDialog. Приложение выполняет удаление только после подтверждения; до открытия закрой предыдущий модальный слой.`},{term:`Escape закрывает`,description:`Сохраняй стандартное закрытие по Escape. Cancel и Escape не выполняют доменное действие; для draft редактора подключи защиту несохранённого ввода.`},{term:`Фокус в модальном окне`,description:`Модальные Dialog/Sheet (Base UI) и Drawer (Vaul) перемещают и удерживают фокус внутри. Tooltip и DropdownMenu имеют собственные обычные паттерны навигации и не являются модальными формами.`},{term:`Подсказка на фокус`,description:`Tooltip открывается на фокус только после Tab или стрелок. Возврат фокуса на триггер после закрытия диалога или меню подсказку не открывает.`},{term:`Возврат фокуса`,description:`После закрытия фокус возвращается на подключённый триггер. Для controlled open без триггера приложение задаёт исходный control; после перехода — осмысленную цель новой страницы.`},{term:`Без вложенных оверлеев`,description:`Не открывай оверлей из другого оверлея. Максимум один уровень.`},{term:`Выбранная сущность — в инспекторе`,description:`Свойства выбранной сущности рядом с коллекцией показывает инспектор типа экрана: проп inspector у RegistryWorkspace и BoardWorkspace. Ширину, размещение, фокус и закрытие по Escape задаёт пакет, поэтому панель из Sheet для этого не собирают.`},{term:`Композиция триггера`,description:`Base UI DialogTrigger, SheetTrigger, DropdownMenuTrigger и TooltipTrigger используют render={<Button />}. Vaul DrawerTrigger и DrawerClose используют asChild с одной кнопкой. Не вкладывай Button в Trigger обычным children.`}];function ee(){return(0,Z.jsx)(D,{title:`Overlays`,description:`Tooltip, DropdownMenu, Dialog, Sheet, Drawer. Модальные Dialog, Sheet и Drawer требуют Title для доступности. Скругление 4px у всплывающих окон и меню, как у контролов, 8px у диалогов, глубина — рамками, без теней.`,breadcrumbs:X(`/components/overlays`),meta:J(`/components/overlays`),children:(0,Z.jsx)(B,{presentation:`article`,label:`Overlays`,inspector:Y(Q),document:(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(q,{title:`Dialog`,description:`Модальное окно для форм и подтверждений. DialogTitle обязателен для доступности.`,code:`import { useId } from "react"
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
}`,children:(0,Z.jsxs)(N,{children:[(0,Z.jsx)(w,{render:(0,Z.jsx)(l,{variant:`outline`,size:`sm`}),children:`Open Dialog`}),(0,Z.jsxs)(R,{children:[(0,Z.jsxs)(I,{children:[(0,Z.jsx)(P,{children:`Create New Incident`}),(0,Z.jsx)(x,{children:`Register a new incident in the system and notify the commander.`})]}),(0,Z.jsx)(f,{label:`Title`,htmlFor:`dialog-title`,children:(0,Z.jsx)(v,{id:`dialog-title`,defaultValue:`API gateway timeout`})}),(0,Z.jsx)(S,{children:(0,Z.jsx)(l,{children:`Create`})})]})]})}),(0,Z.jsxs)(h,{children:[`Оверлеи выстроены по силе вторжения в контекст. Tooltip — пассивная подсказка при наведении. DropdownMenu — короткий список действий у триггера. Sheet и Drawer занимают боковой или нижний край под задачи, которые требуют больше пространства, но не полного перехода. Dialog прерывает работу ради формы или подтверждения. Свойства выбранной сущности рядом со списком или доской показывает не Sheet, а инспектор типа экрана: `,(0,Z.jsx)(i,{children:`inspector`}),` у RegistryWorkspace и BoardWorkspace.`]}),(0,Z.jsxs)(d,{id:`usage`,label:`Использование`,children:[(0,Z.jsx)(h,{children:`Примеры используют публичные entrypoints установленного npm-пакета; общий host подключает AnikinLabProvider и Tailwind + preset.css. Для Drawer дополнительно установи peer-зависимость vaul.`}),(0,Z.jsxs)(p,{children:[(0,Z.jsxs)(U,{children:[`Tooltip, DropdownMenu, Dialog и Sheet — из `,(0,Z.jsx)(i,{children:`@chucky23/design-system/react`}),`.`]}),(0,Z.jsxs)(U,{children:[`Drawer — из `,(0,Z.jsx)(i,{children:`@chucky23/design-system/extended/drawer`}),`.`]}),(0,Z.jsxs)(U,{children:[`Поле с подписью в форме оверлея — FieldRecipe из`,` `,(0,Z.jsx)(i,{children:`@chucky23/design-system/recipes/field`}),`.`]})]}),(0,Z.jsx)(h,{children:`Каждый пример на странице — готовый компонент: вкладка Code содержит импорты и типы пропсов.`})]}),(0,Z.jsx)(d,{id:`tooltip`,label:`Tooltip`,children:(0,Z.jsx)(q,{title:`Tooltip`,description:`Подсказка при наведении и фокусе. Для коротких подсказок, не для контента.`,code:`import { Button, IconButton, TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@chucky23/design-system/react"
import { CopyIcon } from "@chucky23/design-system/icons"
import { SettingsIcon } from "@chucky23/design-system/icons"

export function ShortcutHints() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline" size="sm" />}>Create</TooltipTrigger>
        <TooltipContent>Ctrl+N</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger render={<IconButton label="Settings" variant="outline"><SettingsIcon /></IconButton>} />
        <TooltipContent>Settings</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger render={<IconButton label="Copy to clipboard"><CopyIcon /></IconButton>} />
        <TooltipContent>Copy to clipboard</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}`,children:(0,Z.jsxs)(T,{children:[(0,Z.jsxs)(L,{children:[(0,Z.jsx)(C,{render:(0,Z.jsx)(l,{variant:`outline`,size:`sm`}),children:`Create`}),(0,Z.jsx)(F,{children:`Ctrl+N`})]}),(0,Z.jsxs)(L,{children:[(0,Z.jsx)(C,{render:(0,Z.jsx)(A,{label:`Settings`,variant:`outline`,children:(0,Z.jsx)(E,{})})}),(0,Z.jsx)(F,{children:`Settings`})]}),(0,Z.jsxs)(L,{children:[(0,Z.jsx)(C,{render:(0,Z.jsx)(A,{label:`Copy to clipboard`,children:(0,Z.jsx)(M,{})})}),(0,Z.jsx)(F,{children:`Copy to clipboard`})]})]})})}),(0,Z.jsx)(d,{id:`dropdown-menu`,label:`DropdownMenu`,children:(0,Z.jsxs)(q,{title:`DropdownMenu`,description:`Контекстное меню действий. Триггер — кнопка или IconButton.`,code:`import { IconButton, DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuGroup, DropdownMenuSeparator } from "@chucky23/design-system/react"
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
        <DropdownMenuItem variant="destructive" onClick={onRequestDelete}>Request deletion</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`,children:[(0,Z.jsxs)(O,{children:[(0,Z.jsx)(a,{render:(0,Z.jsx)(A,{label:`Incident actions`,variant:`ghost`,children:(0,Z.jsx)(b,{})})}),(0,Z.jsx)(o,{children:(0,Z.jsxs)(c,{children:[(0,Z.jsx)(n,{children:`Incident Actions`}),(0,Z.jsx)(r,{}),(0,Z.jsx)(u,{children:`View details`}),(0,Z.jsx)(u,{children:`Assign commander`}),(0,Z.jsx)(u,{children:`Add to postmortem`}),(0,Z.jsx)(r,{}),(0,Z.jsxs)(u,{variant:`destructive`,children:[(0,Z.jsx)(k,{}),`Delete incident`]})]})})]}),(0,Z.jsxs)(O,{children:[(0,Z.jsx)(a,{render:(0,Z.jsxs)(l,{variant:`outline`,size:`sm`,children:[(0,Z.jsx)(s,{"aria-hidden":`true`}),`Account`]})}),(0,Z.jsx)(o,{align:`end`,children:(0,Z.jsxs)(c,{children:[(0,Z.jsx)(n,{children:`ops@example.com`}),(0,Z.jsx)(r,{}),(0,Z.jsxs)(u,{children:[(0,Z.jsx)(s,{"aria-hidden":`true`}),`Profile`]}),(0,Z.jsxs)(u,{children:[(0,Z.jsx)(E,{"aria-hidden":`true`}),`Settings`]}),(0,Z.jsx)(r,{}),(0,Z.jsxs)(u,{children:[(0,Z.jsx)(_,{}),`Sign out`]})]})})]})]})}),(0,Z.jsx)(d,{id:`sheet`,label:`Sheet`,children:(0,Z.jsx)(q,{title:`Sheet`,description:`Боковая панель для формы или задачи вне коллекции; выбранную сущность рядом со списком показывает инспектор типа экрана. SheetTitle обязателен для доступности. Поля и действия стоят в SheetFooter: у SheetContent нет собственных отступов.`,code:`import { useId } from "react"
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
}`,children:(0,Z.jsxs)(H,{children:[(0,Z.jsx)(g,{render:(0,Z.jsx)(l,{variant:`outline`,size:`sm`}),children:`Open Sheet`}),(0,Z.jsxs)(y,{children:[(0,Z.jsxs)(t,{children:[(0,Z.jsx)(z,{children:`Edit Incident`}),(0,Z.jsx)(V,{children:`Update incident details and assigned commander.`})]}),(0,Z.jsxs)(m,{children:[(0,Z.jsx)(f,{label:`Title`,htmlFor:`sheet-title`,children:(0,Z.jsx)(v,{id:`sheet-title`,defaultValue:`API gateway timeout`})}),(0,Z.jsx)(f,{label:`Commander`,htmlFor:`sheet-commander`,children:(0,Z.jsx)(v,{id:`sheet-commander`,defaultValue:`@alice`})}),(0,Z.jsx)(l,{children:`Save Changes`})]})]})]})})}),(0,Z.jsxs)(d,{id:`drawer`,label:`Drawer`,children:[(0,Z.jsxs)(h,{children:[`Drawer — нижняя панель поверх Vaul для мобильного сценария. DrawerTitle именует диалог, DrawerDescription объясняет содержимое, DrawerClose даёт явный выход. Vaul использует asChild для кнопки-триггера и кнопки закрытия. autoFocus включён по умолчанию: при открытии фокус переходит внутрь, Tab остаётся в модальном содержимом, Escape закрывает панель и возвращает фокус на триггер. autoFocus=false допустим только с управлением фокусом приложения. Живой пример и API — на странице `,(0,Z.jsx)(W,{href:`/components/drawer`,children:`Drawer`}),`.`]}),(0,Z.jsx)(j,{copyLabel:`Скопировать код: использование Drawer`,language:`tsx`,code:`import { Button } from "@chucky23/design-system/react"
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
}`})]}),(0,Z.jsx)(d,{id:`rules`,label:`Правила`,children:(0,Z.jsx)(K,{items:$})}),(0,Z.jsxs)(d,{id:`api`,label:`API`,children:[(0,Z.jsx)(G,{title:`Tooltip Props`,props:[{name:`delay`,type:`number`,defaultValue:`0`,description:`TooltipProvider: задержка перед показом подсказки в миллисекундах.`},{name:`side`,type:`"top" | "bottom" | "left" | "right"`,defaultValue:`"top"`,description:`TooltipContent: сторона относительно триггера.`},{name:`sideOffset`,type:`number`,defaultValue:`4`,description:`TooltipContent: отступ от триггера в пикселях.`}]}),(0,Z.jsx)(G,{title:`Popover Props`,props:[{name:`PopoverContent.anchor`,type:`Element | RefObject<Element> | VirtualElement`,defaultValue:`триггер`,description:`Элемент, к которому привязано окно вместо PopoverTrigger: поле ввода со списком подсказок. Фокус остаётся в поле при initialFocus={false} и finalFocus={false}.`},{name:`PopoverContent.side`,type:`"top" | "bottom" | "left" | "right"`,defaultValue:`"bottom"`,description:`Сторона появления окна.`},{name:`PopoverContent.sideOffset`,type:`number`,defaultValue:`4`,description:`Отступ окна от якоря в пикселях.`}]}),(0,Z.jsx)(G,{title:`DropdownMenu Props`,props:[{name:`DropdownMenuContent.align`,type:`"start" | "center" | "end"`,defaultValue:`"start"`,description:`Выравнивание меню вдоль триггера.`},{name:`DropdownMenuContent.side`,type:`"top" | "bottom" | "left" | "right"`,defaultValue:`"bottom"`,description:`Сторона появления меню.`},{name:`DropdownMenuContent.sideOffset`,type:`number`,defaultValue:`4`,description:`Отступ меню от триггера в пикселях.`},{name:`DropdownMenuItem.variant`,type:`"default" | "destructive"`,defaultValue:`"default"`,description:`destructive окрашивает пункт опасного действия.`}]}),(0,Z.jsx)(G,{title:`Dialog Props`,props:[{name:`open`,type:`boolean`,defaultValue:`—`,description:`Dialog: контролируемое состояние открытия.`},{name:`onOpenChange`,type:`(open: boolean) => void`,defaultValue:`—`,description:`Dialog: колбэк смены состояния открытия.`},{name:`DialogContent.showCloseButton`,type:`boolean`,defaultValue:`true`,description:`Показывает кнопку закрытия в правом верхнем углу.`},{name:`DialogContent.closeLabel`,type:`string`,defaultValue:`"Закрыть"`,description:`Имя встроенной кнопки закрытия на языке приложения.`}]}),(0,Z.jsx)(G,{title:`Sheet Props`,props:[{name:`side`,type:`"top" | "bottom" | "left" | "right"`,defaultValue:`"right"`,description:`SheetContent: край, с которого выезжает панель.`},{name:`open`,type:`boolean`,defaultValue:`—`,description:`Sheet: контролируемое состояние открытия.`},{name:`onOpenChange`,type:`(open: boolean) => void`,defaultValue:`—`,description:`Sheet: колбэк смены состояния открытия.`},{name:`showCloseButton`,type:`boolean`,defaultValue:`true`,description:`SheetContent: показывает встроенную кнопку закрытия.`},{name:`closeLabel`,type:`string`,defaultValue:`"Закрыть"`,description:`SheetContent: имя встроенной кнопки закрытия на языке приложения.`}]})]})]})})})}export{ee as default};