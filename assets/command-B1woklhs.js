import{a as e,n as t,t as n}from"./jsx-runtime-dBoqvwbd.js";import{ws as r}from"./useLabelableId-Ck49MOKz.js";import{A as i,F as a,I as o,M as s,N as c,P as l,j as u}from"./chunk-L52MJC5L-Da5AAZeo.js";import{Fn as d,H as f,M as p,Ot as m,St as h,V as g,fi as _,pt as v,rt as y,tn as b}from"./index-DnsCB0LC.js";var x=e(t(),1),S=n(),C=[{id:`TASK-4211`,title:`Разобрать дубли уведомлений`},{id:`TASK-4198`,title:`Ускорить экспорт отчёта`},{id:`TASK-4175`,title:`Перенести настройки доступа`}];function w(){let[e,t]=(0,x.useState)(null),n=()=>t(null);return(0,S.jsxs)(h,{kind:`component`,route:`/components/command`,description:`Палитра команд: поиск среди действий и переходов с клавиатуры. Стоит в потоке страницы или в окне CommandDialog. Требует пакет cmdk.`,usage:(0,S.jsx)(d,{use:[`Палитра команд и переходов по ⌘K.`,`Поиск среди десятков действий или страниц с клавиатуры.`],avoid:[{text:`Пять–десять действий у одной кнопки.`,instead:{href:`/components/dropdown-menu`,label:`DropdownMenu`}},{text:`Выбор значения поля формы.`,instead:{href:`/components/select`,label:`Select`}}]}),example:(0,S.jsx)(y,{layout:`block`,code:`<Command label="Поиск команд">
  <CommandInput placeholder="Команда…" />
  <CommandList>
    <CommandEmpty />
    <CommandGroup heading="Действия">
      <CommandItem shortcut="Meta+N">Новая задача</CommandItem>
      <CommandItem shortcut="Meta+K">Поиск</CommandItem>
      <CommandItem>Архив<CommandShortcut keys="Shift+Meta+A" /></CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Навигация">
      <CommandItem>Доска</CommandItem>
      <CommandItem>Настройки</CommandItem>
    </CommandGroup>
  </CommandList>
  <CommandFooter />
</Command>`,gpuiCode:`use anikin_lab_gpui::prelude::*;

let palette = DsCommand::new("command-palette")
    .placeholder("Команда…")
    .empty_text("Ничего не найдено")
    .group(
        DsCommandGroup::new("actions", "Действия")
            .item(DsCommandItem::new("new-task", "Новая задача").shortcut("⌘N"))
            .item(DsCommandItem::new("search", "Поиск").shortcut("⌘K")),
    )
    .group(
        DsCommandGroup::new("nav", "Навигация")
            .item(DsCommandItem::new("board", "Доска"))
            .item(DsCommandItem::new("settings", "Настройки")),
    )
    .on_select(|id, _window, _cx| {
        let _ = id;
    });`,children:(0,S.jsx)(f,{})}),imports:(0,S.jsx)(v,{code:`import { Command, CommandDialog, CommandEmpty, CommandFooter, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut, type CommandPaletteMode } from "@chucky23/design-system/extended/command"
import { Button, EntityId } from "@chucky23/design-system/react"`}),api:(0,S.jsx)(p,{items:[{name:`Command`,props:[{name:`label`,type:`string`,description:`Имя поля поиска, если у CommandInput нет своего aria-label. Назови, что ищет палитра: «Поиск команд».`}]},{name:`CommandInput`,props:[{name:`aria-label`,type:`string`,defaultValue:`Command.label или "Поиск"`,description:`Имя поля. Важнее Command.label, а aria-labelledby важнее обоих.`}]},{name:`CommandGroup`,props:[{name:`heading`,type:`string`,description:`Заголовок группы.`}]},{name:`CommandItem`,props:[{name:`onSelect`,type:`(value: string) => void`,description:`Вызывается по Enter или клику.`},{name:`shortcut`,type:`string`,description:`Сочетание в формате aria-keyshortcuts: показывается справа через KeyHint. Клавишу палитра не слушает.`},{name:`disabled`,type:`boolean`,defaultValue:`false`,description:`Пункт недоступен.`}]},{name:`CommandShortcut`,props:[{name:`keys`,type:`string`,description:`Сочетание для ручной разметки. Без keys выводит children как есть.`}]},{name:`CommandFooter`,props:[{name:`children`,type:`ReactNode`,defaultValue:`«↑↓ выбрать · ↵ выполнить · esc закрыть»`,description:`Строка подсказок под списком, скрыта от скринридера.`}]},{name:`CommandDialog`,props:[{name:`open, onOpenChange`,type:`boolean, (open: boolean) => void`,description:`Управляемое состояние окна.`},{name:`label`,type:`string`,defaultValue:`"Командная палитра"`,description:`Имя окна и скрытый заголовок. В режиме goto по умолчанию «Переход».`},{name:`mode`,type:`CommandPaletteMode`,defaultValue:`"commands"`,description:`commands — команды с приглашением «>», goto — переход к сущности без приглашения.`},{name:`onModeChange`,type:`(mode: CommandPaletteMode) => void`,description:`В режиме goto вызывается с "commands", когда первым символом набран «>»; символ снимается с поля.`}]}]}),related:(0,S.jsx)(m,{links:[{href:`/components/key-hint`,label:`KeyHint`,description:`Сочетания справа от пунктов.`},{href:`/components/dialog`,label:`Dialog`,description:`Окно, на котором строится CommandDialog.`},{href:`/components/dropdown-menu`,label:`DropdownMenu`,description:`Короткий список действий без поиска.`}]}),children:[(0,S.jsx)(b,{id:`dialog`,label:`Палитра в окне`,description:`Когда палитра вызывается с любого экрана. Сочетание открытия, например ⌘K, назначает приложение. Окно закрывается по Escape и после выбора пункта.`,children:(0,S.jsx)(y,{code:`import { useState } from "react"

function CommandPalette() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button onClick={() => setOpen(true)}>Открыть палитру</Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Введи команду…" />
        <CommandList>
          <CommandEmpty />
          <CommandGroup heading="Действия">
            <CommandItem onSelect={() => setOpen(false)}>Создать документ</CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>Открыть проект</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}`,children:(0,S.jsx)(g,{})})}),(0,S.jsx)(b,{id:`goto`,label:`Переход к задаче`,description:`Когда нужно быстро открыть задачу по номеру или названию: режим goto, обычно по ⌘P. Набери «>» в пустом поле, чтобы перейти к командам.`,children:(0,S.jsxs)(y,{code:`import { useState } from "react"

type Task = { id: string; title: string }

function GotoTask({ tasks, openTask }: { tasks: Task[]; openTask: (id: string) => void }) {
  const [mode, setMode] = useState<CommandPaletteMode | null>(null)
  const close = () => setMode(null)
  return (
    <>
      <Button onClick={() => setMode("goto")}>Перейти к задаче</Button>
      <CommandDialog open={mode !== null} onOpenChange={(open) => { if (!open) close() }} mode={mode ?? "goto"} onModeChange={setMode}>
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
      </CommandDialog>
    </>
  )
}`,children:[(0,S.jsx)(r,{tone:`neutral`,variant:`outline`,onClick:()=>t(`goto`),children:`Перейти к задаче`}),(0,S.jsxs)(i,{open:e!==null,onOpenChange:e=>{e||n()},mode:e??`goto`,onModeChange:t,children:[(0,S.jsx)(l,{}),(0,S.jsxs)(o,{children:[(0,S.jsx)(u,{children:`Ничего не найдено`}),e===`commands`?(0,S.jsxs)(c,{heading:`Команды`,children:[(0,S.jsx)(a,{shortcut:`Meta+N`,onSelect:n,children:`Новая задача`}),(0,S.jsx)(a,{shortcut:`Meta+J`,onSelect:n,children:`Показать нижний док`})]}):(0,S.jsx)(c,{heading:`Задачи`,children:C.map(e=>(0,S.jsxs)(a,{value:`${e.id} ${e.title}`,onSelect:n,children:[(0,S.jsx)(_,{children:e.id}),` `,e.title]},e.id))})]}),(0,S.jsx)(s,{})]})]})})]})}export{w as default};