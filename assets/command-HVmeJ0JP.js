import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{Gn as t,I as n,O as r,Rn as i,br as a}from"./chunk-5DUEG3R3-896u-HpP.js";import{B as o,G as s,H as c,K as l,U as u,V as d,W as f,j as p,q as m,r as h,s as g}from"./docs-3sp5L-9g.js";import"./index-CHfT3erv.js";import"./workspace-DK_BGpXz.js";import{n as _,t as v}from"./docs-article-DBNRC-Xz.js";var y=e(),b=[{id:`usage`,label:`Использование`},{id:`command-dialog`,label:`Палитра в модальном окне`},{id:`api`,label:`API`}];function x(){return(0,y.jsx)(n,{title:`Command`,description:`Палитра команд с поиском и клавиатурной навигацией. Peer: cmdk.`,breadcrumbs:v(`/components/command`),children:(0,y.jsx)(r,{presentation:`article`,label:`Command`,inspector:_(b),document:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(h,{title:`Inline command list`,description:`Фиксированное окно поиска с группами команд.`,code:`<Command label="Поиск команд" className="rounded-md border">
  <CommandInput placeholder="Поиск..." />
  <CommandList>
    <CommandEmpty>Нет результатов.</CommandEmpty>
    <CommandGroup heading="Действия">
      <CommandItem>
        Новая задача
        <CommandShortcut>⌘N</CommandShortcut>
      </CommandItem>
      <CommandItem>
        Поиск
        <CommandShortcut>⌘K</CommandShortcut>
      </CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Навигация">
      <CommandItem>Dashboard</CommandItem>
      <CommandItem>Settings</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`,layout:`block`,children:(0,y.jsxs)(o,{label:`Поиск команд`,className:`rounded-md border`,children:[(0,y.jsx)(u,{placeholder:`Поиск...`}),(0,y.jsxs)(s,{children:[(0,y.jsx)(d,{children:`Нет результатов.`}),(0,y.jsxs)(c,{heading:`Действия`,children:[(0,y.jsxs)(f,{children:[`Новая задача`,(0,y.jsx)(m,{children:`⌘N`})]}),(0,y.jsxs)(f,{children:[`Поиск`,(0,y.jsx)(m,{children:`⌘K`})]})]}),(0,y.jsx)(l,{}),(0,y.jsxs)(c,{heading:`Навигация`,children:[(0,y.jsx)(f,{children:`Dashboard`}),(0,y.jsx)(f,{children:`Settings`})]})]})]})}),(0,y.jsx)(i,{children:`Command собирает действия и переходы в одну палитру с fuzzy-поиском: навигация стрелками, выбор по Enter. Горячую клавишу открытия, например Cmd+K, назначает приложение. Группируй элементы по смыслу — недавние, навигация, операции — чтобы пользователь быстро находил нужное без чтения подписей.`}),(0,y.jsx)(a,{id:`usage`,label:`Использование`,children:(0,y.jsx)(t,{copyLabel:`Скопировать код: использование Command`,language:`tsx`,code:`import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from "@chucky23/design-system/extended/command"

<Command>
  <CommandInput placeholder="Поиск..." />
  <CommandList>
    <CommandEmpty>Нет результатов.</CommandEmpty>
    <CommandGroup heading="Действия">
      <CommandItem onSelect={createTask}>Новая задача</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`})}),(0,y.jsx)(a,{id:`command-dialog`,label:`Палитра в модальном окне`,children:(0,y.jsx)(h,{title:`Command palette в модальном окне`,description:`Открывается по кнопке или горячей клавише приложения, закрывается по Escape и после выбора пункта.`,code:`const [open, setOpen] = useState(false)

<Button onClick={() => setOpen(true)}>Открыть палитру</Button>

<CommandDialog open={open} onOpenChange={setOpen}>
  <CommandInput placeholder="Введите команду..." />
  <CommandList>
    <CommandEmpty>Нет результатов.</CommandEmpty>
    <CommandGroup heading="Действия">
      <CommandItem onSelect={() => setOpen(false)}>Создать документ</CommandItem>
      <CommandItem onSelect={() => setOpen(false)}>Открыть проект</CommandItem>
    </CommandGroup>
  </CommandList>
</CommandDialog>`,children:(0,y.jsx)(g,{})})}),(0,y.jsx)(a,{id:`api`,label:`API`,children:(0,y.jsx)(p,{title:`Command API`,props:[{name:`Command.label`,type:`string`,defaultValue:`—`,description:`Доступное название поля поиска, если у CommandInput нет своего aria-label или aria-labelledby. Назови, что ищет палитра, например «Поиск команд».`},{name:`CommandInput.aria-label`,type:`string`,defaultValue:`Command.label или "Поиск"`,description:`Имя поля поиска. Важнее Command.label; aria-labelledby поля важнее обоих.`},{name:`CommandItem.onSelect`,type:`(value: string) => void`,defaultValue:`—`,description:`Вызывается при выборе пункта клавишей Enter или кликом.`},{name:`CommandItem.disabled`,type:`boolean`,defaultValue:`—`,description:`Делает пункт некликабельным и визуально тусклым.`},{name:`CommandGroup.heading`,type:`string`,defaultValue:`—`,description:`Заголовок группы команд.`},{name:`CommandDialog.open`,type:`boolean`,defaultValue:`—`,description:`Управляемое состояние открытия диалога.`},{name:`CommandDialog.onOpenChange`,type:`(open: boolean) => void`,defaultValue:`—`,description:`Колбэк изменения состояния открытия.`},{name:`CommandDialog.label`,type:`string`,defaultValue:`"Командная палитра"`,description:`Доступное название диалога и скрытый заголовок.`}]})})]})})})}export{x as default};