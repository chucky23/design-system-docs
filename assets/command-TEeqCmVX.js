import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{Gn as t,Rn as n,br as r,m as i,o as a}from"./chunk-ZW5N5E5H-ScFucA-b.js";import{$ as o,Q as s,Z as c,et as l,it as u,j as d,nt as f,r as p,rt as m,s as h,tt as g}from"./docs-Ck_i9UNX.js";import"./index-DiNellwx.js";import"./workspace-BwWB7lTa.js";import{n as _,t as v}from"./docs-article-BUNGnjgF.js";var y=e(),b=[{id:`usage`,label:`Использование`},{id:`command-dialog`,label:`Палитра в модальном окне`},{id:`api`,label:`API`}];function x(){return(0,y.jsx)(i,{title:`Command`,description:`Палитра команд с поиском и клавиатурной навигацией. Peer: cmdk.`,breadcrumbs:v(`/components/command`),children:(0,y.jsx)(a,{presentation:`article`,label:`Command`,inspector:_(b),document:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(p,{title:`Inline command list`,description:`Фиксированное окно поиска с группами команд.`,code:`<Command label="Поиск команд" className="rounded-md border">
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
</Command>`,layout:`block`,children:(0,y.jsxs)(c,{label:`Поиск команд`,className:`rounded-md border`,children:[(0,y.jsx)(l,{placeholder:`Поиск...`}),(0,y.jsxs)(f,{children:[(0,y.jsx)(s,{children:`Нет результатов.`}),(0,y.jsxs)(o,{heading:`Действия`,children:[(0,y.jsxs)(g,{children:[`Новая задача`,(0,y.jsx)(u,{children:`⌘N`})]}),(0,y.jsxs)(g,{children:[`Поиск`,(0,y.jsx)(u,{children:`⌘K`})]})]}),(0,y.jsx)(m,{}),(0,y.jsxs)(o,{heading:`Навигация`,children:[(0,y.jsx)(g,{children:`Dashboard`}),(0,y.jsx)(g,{children:`Settings`})]})]})]})}),(0,y.jsx)(n,{children:`Command собирает действия и переходы в одну палитру с fuzzy-поиском: навигация стрелками, выбор по Enter. Горячую клавишу открытия, например Cmd+K, назначает приложение. Группируй элементы по смыслу — недавние, навигация, операции — чтобы пользователь быстро находил нужное без чтения подписей.`}),(0,y.jsx)(r,{id:`usage`,label:`Использование`,children:(0,y.jsx)(t,{copyLabel:`Скопировать код: использование Command`,language:`tsx`,code:`import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from "@chucky23/design-system/extended/command"

<Command>
  <CommandInput placeholder="Поиск..." />
  <CommandList>
    <CommandEmpty>Нет результатов.</CommandEmpty>
    <CommandGroup heading="Действия">
      <CommandItem onSelect={createTask}>Новая задача</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`})}),(0,y.jsx)(r,{id:`command-dialog`,label:`Палитра в модальном окне`,children:(0,y.jsx)(p,{title:`Command palette в модальном окне`,description:`Открывается по кнопке или горячей клавише приложения, закрывается по Escape и после выбора пункта.`,code:`const [open, setOpen] = useState(false)

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
</CommandDialog>`,children:(0,y.jsx)(h,{})})}),(0,y.jsx)(r,{id:`api`,label:`API`,children:(0,y.jsx)(d,{title:`Command API`,props:[{name:`Command.label`,type:`string`,defaultValue:`—`,description:`Доступное название поля поиска, если у CommandInput нет своего aria-label или aria-labelledby. Назови, что ищет палитра, например «Поиск команд».`},{name:`CommandInput.aria-label`,type:`string`,defaultValue:`Command.label или "Поиск"`,description:`Имя поля поиска. Важнее Command.label; aria-labelledby поля важнее обоих.`},{name:`CommandItem.onSelect`,type:`(value: string) => void`,defaultValue:`—`,description:`Вызывается при выборе пункта клавишей Enter или кликом.`},{name:`CommandItem.disabled`,type:`boolean`,defaultValue:`—`,description:`Делает пункт некликабельным и визуально тусклым.`},{name:`CommandGroup.heading`,type:`string`,defaultValue:`—`,description:`Заголовок группы команд.`},{name:`CommandDialog.open`,type:`boolean`,defaultValue:`—`,description:`Управляемое состояние открытия диалога.`},{name:`CommandDialog.onOpenChange`,type:`(open: boolean) => void`,defaultValue:`—`,description:`Колбэк изменения состояния открытия.`},{name:`CommandDialog.label`,type:`string`,defaultValue:`"Командная палитра"`,description:`Доступное название диалога и скрытый заголовок.`}]})})]})})})}export{x as default};