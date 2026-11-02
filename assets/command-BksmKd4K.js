import{a as e,n as t,t as n}from"./jsx-runtime-dBoqvwbd.js";import{G as r,H as i,Ir as a,J as o,K as s,Oa as c,Qr as l,Sr as u,U as d,V as f,W as p,X as m,Y as h,j as g,kr as _,q as v,vr as y,x as b}from"./chunk-FJ6G7XYZ-vkrr-AON.js";import{Q as x,b as S,g as C}from"./docs-CTQgkcVe.js";import"./index-CylhoBOX.js";import"./workspace-B0gvzNJe.js";import"./command-BvLhW75C.js";import{n as w,r as T,t as E}from"./docs-article-CV9v0E7s.js";var D=e(t(),1),O=n(),k=[{id:`usage`,label:`Использование`},{id:`command-dialog`,label:`Палитра в модальном окне`},{id:`goto`,label:`Переход к задаче`},{id:`api`,label:`API`}],A=[{id:`TASK-4211`,title:`Разобрать дубли уведомлений`},{id:`TASK-4198`,title:`Ускорить экспорт отчёта`},{id:`TASK-4175`,title:`Перенести настройки доступа`}];function j(){let[e,t]=(0,D.useState)(null),n=()=>t(null);return(0,O.jsx)(g,{title:`Command`,description:`Палитра команд с поиском и клавиатурной навигацией. Peer: cmdk.`,breadcrumbs:E(`/components/command`),meta:w(`/components/command`),children:(0,O.jsx)(b,{presentation:`article`,label:`Command`,inspector:T(k),document:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(C,{title:`Inline command list`,description:`Плотная палитра: пункт 24px, сочетания справа через KeyHint, строка подсказок внизу.`,code:`<Command label="Поиск команд" className="rounded-md border">
  <CommandInput placeholder="Поиск..." />
  <CommandList>
    <CommandEmpty>Нет результатов.</CommandEmpty>
    <CommandGroup heading="Действия">
      <CommandItem shortcut="Meta+N">Новая задача</CommandItem>
      <CommandItem shortcut="Meta+K">Поиск</CommandItem>
      <CommandItem>
        Архив
        <CommandShortcut keys="Shift+Meta+A" />
      </CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Навигация">
      <CommandItem>Dashboard</CommandItem>
      <CommandItem>Settings</CommandItem>
    </CommandGroup>
  </CommandList>
  <CommandFooter />
</Command>`,layout:`block`,children:(0,O.jsxs)(f,{label:`Поиск команд`,className:`rounded-md border`,children:[(0,O.jsx)(s,{placeholder:`Поиск...`}),(0,O.jsxs)(o,{children:[(0,O.jsx)(d,{children:`Нет результатов.`}),(0,O.jsxs)(r,{heading:`Действия`,children:[(0,O.jsx)(v,{shortcut:`Meta+N`,children:`Новая задача`}),(0,O.jsx)(v,{shortcut:`Meta+K`,children:`Поиск`}),(0,O.jsxs)(v,{children:[`Архив`,(0,O.jsx)(m,{keys:`Shift+Meta+A`})]})]}),(0,O.jsx)(h,{}),(0,O.jsxs)(r,{heading:`Навигация`,children:[(0,O.jsx)(v,{children:`Dashboard`}),(0,O.jsx)(v,{children:`Settings`})]})]}),(0,O.jsx)(p,{})]})}),(0,O.jsx)(u,{children:`Command собирает действия и переходы в одну палитру с fuzzy-поиском: навигация стрелками, выбор по Enter. Горячую клавишу открытия, например Cmd+K, назначает приложение. Группируй элементы по смыслу — недавние, навигация, операции — чтобы пользователь быстро находил нужное без чтения подписей.`}),(0,O.jsx)(l,{id:`usage`,label:`Использование`,children:(0,O.jsx)(_,{copyLabel:`Скопировать код: использование Command`,language:`tsx`,code:`import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from "@chucky23/design-system/extended/command"

<Command>
  <CommandInput placeholder="Поиск..." />
  <CommandList>
    <CommandEmpty>Нет результатов.</CommandEmpty>
    <CommandGroup heading="Действия">
      <CommandItem onSelect={createTask}>Новая задача</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`})}),(0,O.jsx)(l,{id:`command-dialog`,label:`Палитра в модальном окне`,children:(0,O.jsx)(C,{title:`Command palette в модальном окне`,description:`Открывается по кнопке или горячей клавише приложения, закрывается по Escape и после выбора пункта.`,code:`const [open, setOpen] = useState(false)

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
</CommandDialog>`,children:(0,O.jsx)(S,{})})}),(0,O.jsxs)(l,{id:`goto`,label:`Переход к задаче`,children:[(0,O.jsxs)(u,{children:[`У CommandDialog два режима. `,(0,O.jsx)(a,{children:`commands`}),` — палитра команд с приглашением`,` `,(0,O.jsx)(a,{children:`>`}),`, обычно по ⌘K. `,(0,O.jsx)(a,{children:`goto`}),` — быстрый переход к задаче или другой сущности по ⌘P: приглашения нет, подпись окна «Переход», плейсхолдер «Перейти к задаче…». Если в режиме перехода первым символом набрать `,(0,O.jsx)(a,{children:`>`}),`, палитра вызовет`,` `,(0,O.jsx)(a,{children:`onModeChange("commands")`}),` и снимет символ с поля, а приложение покажет команды. Окно в обоих режимах стоит у верхнего края экрана, а не по центру. Сочетания ⌘K и ⌘P назначает приложение.`]}),(0,O.jsxs)(C,{title:`Переход к задаче`,description:`Режим goto без приглашения. Набери > в пустом поле, чтобы переключиться в команды.`,code:`const [mode, setMode] = useState<CommandPaletteMode | null>(null)
const close = () => setMode(null)

<Button onClick={() => setMode("goto")}>Перейти к задаче</Button>

<CommandDialog
  open={mode !== null}
  onOpenChange={(open) => { if (!open) close() }}
  mode={mode ?? "goto"}
  onModeChange={setMode}
>
  <CommandInput />
  <CommandList>
    <CommandEmpty>Ничего не найдено</CommandEmpty>
    {mode === "commands" ? (
      <CommandGroup heading="Команды">
        <CommandItem shortcut="Meta+N" onSelect={close}>Новая задача</CommandItem>
      </CommandGroup>
    ) : (
      <CommandGroup heading="Задачи">
        {tasks.map((task) => (
          <CommandItem key={task.id} value={\`\${task.id} \${task.title}\`} onSelect={() => openTask(task.id)}>
            <EntityId>{task.id}</EntityId> {task.title}
          </CommandItem>
        ))}
      </CommandGroup>
    )}
  </CommandList>
  <CommandFooter />
</CommandDialog>`,children:[(0,O.jsx)(c,{tone:`neutral`,variant:`outline`,onClick:()=>t(`goto`),children:`Перейти к задаче`}),(0,O.jsxs)(i,{open:e!==null,onOpenChange:e=>{e||n()},mode:e??`goto`,onModeChange:t,children:[(0,O.jsx)(s,{}),(0,O.jsxs)(o,{children:[(0,O.jsx)(d,{children:`Ничего не найдено`}),e===`commands`?(0,O.jsxs)(r,{heading:`Команды`,children:[(0,O.jsx)(v,{shortcut:`Meta+N`,onSelect:n,children:`Новая задача`}),(0,O.jsx)(v,{shortcut:`Meta+J`,onSelect:n,children:`Показать нижний док`})]}):(0,O.jsx)(r,{heading:`Задачи`,children:A.map(e=>(0,O.jsxs)(v,{value:`${e.id} ${e.title}`,onSelect:n,children:[(0,O.jsx)(y,{children:e.id}),` `,e.title]},e.id))})]}),(0,O.jsx)(p,{})]})]})]}),(0,O.jsx)(l,{id:`api`,label:`API`,children:(0,O.jsx)(x,{title:`Command API`,props:[{name:`Command.label`,type:`string`,defaultValue:`—`,description:`Доступное название поля поиска, если у CommandInput нет своего aria-label или aria-labelledby. Назови, что ищет палитра, например «Поиск команд».`},{name:`CommandInput.aria-label`,type:`string`,defaultValue:`Command.label или "Поиск"`,description:`Имя поля поиска. Важнее Command.label; aria-labelledby поля важнее обоих.`},{name:`CommandItem.onSelect`,type:`(value: string) => void`,defaultValue:`—`,description:`Вызывается при выборе пункта клавишей Enter или кликом.`},{name:`CommandItem.shortcut`,type:`string`,defaultValue:`—`,description:`Сочетание в формате aria-keyshortcuts, например "Meta+N". Выводится справа через KeyHint, пункт получает aria-keyshortcuts. Клавишу палитра не слушает: обработчик назначает приложение.`},{name:`CommandShortcut.keys`,type:`string`,defaultValue:`—`,description:`Сочетание для ручной разметки. Без keys CommandShortcut выводит children как есть.`},{name:`CommandFooter`,type:`ReactNode`,defaultValue:`«↑↓ выбрать · ↵ выполнить · esc закрыть»`,description:`Необязательная строка подсказок под списком, скрыта от скринридера. Свой набор передай через children.`},{name:`CommandItem.disabled`,type:`boolean`,defaultValue:`—`,description:`Делает пункт некликабельным и визуально тусклым.`},{name:`CommandGroup.heading`,type:`string`,defaultValue:`—`,description:`Заголовок группы команд.`},{name:`CommandDialog.open`,type:`boolean`,defaultValue:`—`,description:`Управляемое состояние открытия диалога.`},{name:`CommandDialog.onOpenChange`,type:`(open: boolean) => void`,defaultValue:`—`,description:`Колбэк изменения состояния открытия.`},{name:`CommandDialog.label`,type:`string`,defaultValue:`"Командная палитра"`,description:`Доступное название диалога и скрытый заголовок. В режиме goto по умолчанию «Переход».`},{name:`CommandDialog.mode`,type:`"commands" | "goto"`,defaultValue:`"commands"`,description:`commands — команды с приглашением >, плейсхолдер «Команда…». goto — переход к сущности без приглашения, плейсхолдер «Перейти к задаче…». Тип CommandPaletteMode.`},{name:`CommandDialog.onModeChange`,type:`(mode: CommandPaletteMode) => void`,defaultValue:`—`,description:`В режиме goto вызывается с "commands", когда первым символом набран >. Символ снимается с поля.`}]})})]})})})}export{j as default};