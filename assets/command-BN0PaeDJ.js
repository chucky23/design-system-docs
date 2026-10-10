import{$n as e,Hn as t,Mo as n}from"./chunk-ZW5N5E5H-C8fDcLjq.js";import{$ as r,H as i,M as a,Q as o,Z as s,et as c,it as l,l as u,nt as d,r as f,rt as p,s as m,tt as h}from"./docs-CtJuZ0WF.js";import"./index-D3G-KnJA.js";var g=n();function _(){return(0,g.jsxs)(m,{className:`flex flex-col gap-6`,children:[(0,g.jsx)(t,{title:`Command`,description:`Палитра команд с поиском и клавиатурной навигацией. Peer: cmdk.`}),(0,g.jsx)(a,{className:`max-w-prose`,"data-body":!0,children:`Command собирает действия и переходы в одну палитру с fuzzy-поиском. Открытие по Cmd+K, навигация стрелками, выбор по Enter. Группируй элементы по смыслу — недавние, навигация, операции — чтобы пользователь быстро находил нужное без чтения подписей.`}),(0,g.jsx)(e,{label:`inline command`,children:(0,g.jsx)(f,{title:`Inline command list`,description:`Фиксированное окно поиска с группами команд.`,code:`<Command className="rounded-md border">
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
</Command>`,children:(0,g.jsx)(m,{className:`w-full max-w-md rounded-md border`,children:(0,g.jsxs)(s,{className:`w-full`,children:[(0,g.jsx)(c,{placeholder:`Поиск...`}),(0,g.jsxs)(d,{children:[(0,g.jsx)(o,{children:`Нет результатов.`}),(0,g.jsxs)(r,{heading:`Действия`,children:[(0,g.jsxs)(h,{children:[`Новая задача`,(0,g.jsx)(l,{children:`⌘N`})]}),(0,g.jsxs)(h,{children:[`Поиск`,(0,g.jsx)(l,{children:`⌘K`})]})]}),(0,g.jsx)(p,{}),(0,g.jsxs)(r,{heading:`Навигация`,children:[(0,g.jsx)(h,{children:`Dashboard`}),(0,g.jsx)(h,{children:`Settings`})]})]})]})})})}),(0,g.jsx)(e,{label:`command dialog`,children:(0,g.jsx)(f,{title:`Command palette в модальном окне`,description:`Открывается по кнопке или горячей клавише, закрывается по Escape.`,code:`const [open, setOpen] = useState(false)

<Button onClick={() => setOpen(true)}>Открыть палитру (⌘K)</Button>

<CommandDialog open={open} onOpenChange={setOpen}>
  <CommandInput placeholder="Введите команду..." />
  <CommandList>
    <CommandEmpty>Нет результатов.</CommandEmpty>
    <CommandGroup heading="Действия">
      <CommandItem>Создать документ</CommandItem>
      <CommandItem>Открыть проект</CommandItem>
    </CommandGroup>
  </CommandList>
</CommandDialog>`,children:(0,g.jsx)(u,{})})}),(0,g.jsx)(e,{label:`props`,children:(0,g.jsx)(i,{title:`Command API`,props:[{name:`CommandItem.onSelect`,type:`(value: string) => void`,description:`Вызывается при выборе пункта клавишей Enter или кликом.`},{name:`CommandItem.disabled`,type:`boolean`,description:`Делает пункт некликабельным и визуально тусклым.`},{name:`CommandGroup.heading`,type:`string`,description:`Заголовок группы команд.`},{name:`CommandDialog.open`,type:`boolean`,description:`Управляемое состояние открытия диалога.`},{name:`CommandDialog.onOpenChange`,type:`(open: boolean) => void`,description:`Коллбек изменения состояния открытия.`}]})})]})}export{_ as default};