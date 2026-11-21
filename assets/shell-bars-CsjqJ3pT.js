import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{A as t,Rt as n,Ut as r,Vt as i,X as a,_t as o,at as s,dt as c,in as l,jt as u,on as d,rt as f,wt as p,zt as m}from"./index-BX5CNJVf.js";var h=e();function g(){return(0,h.jsxs)(c,{kind:`component`,route:`/screens/shell-bars`,description:`Оболочка окна: вкладки документов, строка состояния, нижний док и быстрое создание. Компоненты заполняют слоты WorkspaceShell и типов экрана, клавиши назначает приложение.`,example:(0,h.jsx)(a,{fragment:!0,layout:`block`,code:`<WorkspaceShell
  brand="Sprint"
  groups={groups}
  activeId={activeId}
  tabs={<WorkspaceTabs label="Открытые задачи" tabs={tabs} activeId={taskId} onActivate={openTask} onClose={closeTab} />}
  bottomDock={<WorkspaceBottomDock label="Нижний док" open={dockOpen} tabs={dockTabs} activeId={dockTab} onActiveChange={setDockTab} onClose={() => setDockOpen(false)} shortcut="Meta+J" />}
  statusBar={
    <WorkspaceStatusBar
      start={<WorkspaceDockToggle label="Нижний док" icon={<DockBottomIcon aria-hidden="true" />} pressed={dockOpen} onPressedChange={setDockOpen} />}
      end={<><StatusTag tone="turn" label="Твой ход: 2" /><WorkspaceStatusBarSeparator /><Muted>main</Muted></>}
    />
  }
>
  {page}
</WorkspaceShell>`,children:(0,h.jsx)(i,{})}),imports:(0,h.jsx)(f,{code:`import {
  WorkspaceBottomDock,
  WorkspaceDockSessions,
  WorkspaceDockToggle,
  WorkspaceQuickCreate,
  WorkspaceShell,
  WorkspaceStatusBar,
  WorkspaceStatusBarSeparator,
  WorkspaceStatusHint,
  WorkspaceStatusPopover,
  WorkspaceTabs,
} from "@chucky23/design-system/patterns/workspace"
import { Button, IconButton, Muted, StatusTag, WorkflowIcon } from "@chucky23/design-system/react"
import { AddIcon, DockBottomIcon } from "@chucky23/design-system/icons"`}),api:(0,h.jsx)(t,{items:[{name:`WorkspaceTabs`,props:[{name:`label`,type:`string`,required:!0,description:`Имя полосы, например «Открытые задачи».`},{name:`tabs`,type:`readonly WorkspaceTab[]`,required:!0,description:`Вкладки слева направо.`},{name:`onActivate`,type:`(id: string) => void`,required:!0,description:`Переход на документ вкладки.`},{name:`activeId`,type:`string`,description:`Текущая вкладка: aria-current="page".`},{name:`onClose`,type:`(id: string) => void`,description:`Закрытие. Крестик виден при наведении, на активной вкладке и при фокусе.`},{name:`closeLabel`,type:`(tab: WorkspaceTab) => string`,defaultValue:`"Закрыть: <название>"`,description:`Имя крестика.`},{name:`closeShortcut`,type:`string`,defaultValue:`"Meta+W"`,description:`Сочетание в подсказке крестика.`}]},{name:`WorkspaceTab`,props:[{name:`id`,type:`string`,required:!0,description:`Ключ вкладки.`},{name:`label`,type:`string`,required:!0,description:`Подпись вкладки: название проекта или документа.`},{name:`icon`,type:`ReactNode`,description:`Значок статуса 12 px.`},{name:`attention`,type:`string`,description:`«Твой ход»: рука после названия, входит в имя.`},{name:`closable`,type:`boolean`,description:`false: вкладку нельзя закрыть.`}]},{name:`WorkspaceStatusBar`,props:[{name:`label`,type:`string`,defaultValue:`"Строка состояния"`,description:`Имя области.`},{name:`start`,type:`ReactNode`,description:`Слева: переключатели доков, разделы.`},{name:`end`,type:`ReactNode`,description:`Справа: агенты, ошибки, сохранение, ветка.`}]},{name:`WorkspaceStatusHint`,props:[{name:`keys`,type:`string`,required:!0,description:`Сочетание в формате aria-keyshortcuts.`},{name:`children`,type:`ReactNode`,required:!0,description:`Что делает сочетание: «Палитра команд».`},{name:`onClick`,type:`() => void`,description:`С ним подсказка становится сегментом-кнопкой. Клавишу слушает приложение.`}]},{name:`WorkspaceDockToggle`,props:[{name:`label`,type:`string`,required:!0,description:`Название дока, подпись в подсказке.`},{name:`icon`,type:`ReactNode`,required:!0,description:`Значок кнопки: подпись видна только в подсказке.`},{name:`pressed`,type:`boolean`,required:!0,description:`Док открыт.`},{name:`onPressedChange`,type:`(pressed: boolean) => void`,required:!0,description:`Вызывается кнопкой и сочетанием с новым состоянием дока.`},{name:`shortcut`,type:`string`,description:`Сочетание: срабатывает и из поля ввода в доке.`}]},{name:`WorkspaceStatusPopover`,props:[{name:`trigger`,type:`ReactElement`,required:!0,description:`Сегмент строки состояния, обычно Button xs ghost.`},{name:`open`,type:`boolean`,required:!0,description:`Список событий раскрыт. Состояние хранит приложение.`},{name:`onOpenChange`,type:`(open: boolean) => void`,required:!0,description:`Смена состояния.`},{name:`title`,type:`string`,required:!0,description:`Заголовок и имя списка.`},{name:`groups`,type:`readonly WorkspaceStatusPopoverGroup[]`,required:!0,description:`Группы событий.`},{name:`count`,type:`number`,description:`Счётчик в заголовке.`},{name:`footer`,type:`ReactNode`,description:`Подвал с подсказками клавиш. Не озвучивается.`},{name:`align`,type:`"start" | "center" | "end"`,defaultValue:`"end"`,description:`Выравнивание по сегменту.`}]},{name:`WorkspaceStatusPopoverGroup`,props:[{name:`id`,type:`string`,required:!0,description:`Ключ группы.`},{name:`heading`,type:`ReactNode`,required:!0,description:`Подпись, например проект.`},{name:`items`,type:`readonly WorkspaceStatusPopoverItem[]`,required:!0,description:`События группы, новые сверху.`},{name:`icon`,type:`ReactNode`,description:`Знак 12 px перед подписью.`}]},{name:`WorkspaceStatusPopoverItem`,props:[{name:`id`,type:`string`,required:!0,description:`Ключ строки.`},{name:`content`,type:`ReactNode`,required:!0,description:`Содержимое строки 24 px.`},{name:`onSelect`,type:`() => void`,required:!0,description:`Щелчок или Enter. Поповер закрывается до вызова.`},{name:`attributes`,type:"Record<`data-${string}`, string | boolean | undefined>",description:`Data-атрибуты строки, например data-fresh.`}]},{name:`WorkspaceBottomDock`,props:[{name:`label`,type:`string`,required:!0,description:`Имя дока.`},{name:`tabs`,type:`readonly WorkspaceDockTab[]`,required:!0,description:`Вкладки дока.`},{name:`activeId`,type:`string`,required:!0,description:`Текущая вкладка.`},{name:`onActiveChange`,type:`(id: string) => void`,required:!0,description:`Смена вкладки.`},{name:`open`,type:`boolean`,defaultValue:`true`,description:`Держи док смонтированным и переключай open: уход анимирован, содержимое остаётся.`},{name:`onClose`,type:`() => void`,description:`Крестик справа в строке вкладок.`},{name:`closeLabel`,type:`string`,description:`Имя крестика.`},{name:`shortcut`,type:`string`,description:`Сочетание для подсказки, например Meta+J.`},{name:`height`,type:`string`,defaultValue:`"20rem"`,description:`Высота содержимого, CSS-длина. Не выше половины окна.`},{name:`actions`,type:`ReactNode`,description:`Шапка между вкладками и крестиком: сессии, «+», «развернуть».`},{name:`resizable`,type:`boolean`,description:`Ручка высоты: мышь, ↑ ↓, Home, End. Высота от 120 px до половины окна.`},{name:`onHeightChange`,type:`(height: number) => void`,description:`Новая высота в px.`},{name:`resizeLabel`,type:`string`,defaultValue:`"Высота дока"`,description:`Имя ручки.`},{name:`maximized`,type:`boolean`,description:`Док на всю высоту холста, холст под ним недоступен.`},{name:`onMaximizedChange`,type:`(maximized: boolean) => void`,description:`Escape внутри дока просит свернуть.`}]},{name:`WorkspaceDockTab`,props:[{name:`id`,type:`string`,required:!0,description:`Ключ вкладки.`},{name:`label`,type:`string`,required:!0,description:`Название вкладки в полосе дока.`},{name:`content`,type:`ReactNode`,required:!0,description:`Тело вкладки: терминал, журнал, вывод.`},{name:`padding`,type:`"default" | "none"`,defaultValue:`"default"`,description:`none: без отступа и своей прокрутки, например терминал.`}]},{name:`WorkspaceDockSessions`,props:[{name:`label`,type:`string`,required:!0,description:`Имя полосы сессий.`},{name:`sessions`,type:`readonly WorkspaceDockSession[]`,required:!0,description:`Сессии: id, label и meta.`},{name:`activeId`,type:`string`,required:!0,description:`Текущая сессия.`},{name:`onActiveChange`,type:`(id: string) => void`,required:!0,description:`Смена сессии.`},{name:`onClose`,type:`(id: string) => void`,description:`Крестик на вкладке, Delete или Backspace.`},{name:`closeLabel`,type:`(session: WorkspaceDockSession) => string`,defaultValue:`"Закрыть: <название>"`,description:`Подпись крестика.`}]},{name:`WorkspaceQuickCreate`,props:[{name:`label`,type:`string`,required:!0,description:`Подпись строки и имя кнопки.`},{name:`onCreate`,type:`(title: string) => void`,required:!0,description:`Enter создаёт, поле остаётся для следующей записи.`},{name:`inputLabel`,type:`string`,defaultValue:`label`,description:`Имя поля.`},{name:`placeholder`,type:`string`,description:`Подсказка в поле.`},{name:`icon`,type:`ReactNode`,description:`Знак в открытом поле вместо плюса.`},{name:`layout`,type:`"row" | "tree" | "ghost"`,defaultValue:`"row"`,description:`row: от края списка. tree: под деревом. ghost: пунктирная строка на всю ширину.`},{name:`messages`,type:`{ created?: (title: string) => string; empty?: string }`,description:`Отклик в живой области.`},{name:`open`,type:`boolean`,description:`Управляемое раскрытие, например из кнопки страницы.`},{name:`onOpenChange`,type:`(open: boolean) => void`,description:`Закрытие по Escape или уходу фокуса.`},{name:`focusRequest`,type:`number`,description:`Новое значение снова ставит фокус в открытое поле.`}]}]}),related:(0,h.jsx)(o,{links:[{href:`/screens/shell`,label:`WorkspaceShell и WorkspacePage`,description:`Куда встают панели.`},{href:`/components/key-hint`,label:`KeyHint`,description:`Подсказка сочетаний клавиш.`},{href:`/components/attention-dot`,label:`AttentionDot`,description:`Точка непросмотренного события на сегменте.`},{href:`/examples/sprint/registry`,label:`Реестр задач`,description:`Все панели в рабочем окне.`}]}),children:[(0,h.jsx)(r,{id:`slots`,label:`Что куда встаёт`,description:`Панели закреплены и не прокручиваются вместе со страницей.`,children:(0,h.jsx)(d,{label:`Панели и слоты`,columns:[{label:`Компонент`,kind:`name`,width:`14rem`},{label:`Слот`,kind:`code`,width:`9rem`},{label:`Высота`,kind:`code`,width:`5rem`},{label:`Зачем`}],rows:[[`WorkspaceTabs`,`tabs`,`32 px`,`Открытые документы`],[`WorkspaceStatusBar`,`statusBar`,`24 px`,`Состояние проекта и переключатели`],[`WorkspaceBottomDock`,`bottomDock`,`24 px + док`,`Терминал, журнал агента`],[`WorkspaceQuickCreate`,`create`,`24 px`,`Строка быстрого создания под списком реестра или в колонке доски`]]})}),(0,h.jsx)(r,{id:`tabs`,label:`WorkspaceTabs`,description:`Вкладка переключает документы, а не панели одного экрана. tabsPlacement="header" ставит её в строку заголовка окна.`,children:(0,h.jsx)(a,{fragment:!0,layout:`block`,code:`<WorkspaceTabs
  label="Открытые задачи"
  tabs={[{ id: "TASK-4210", label: "Экспорт отчётов", icon: <WorkflowIcon status="progress" size="sm" />, attention: "твой ход" }]}
  activeId={activeId}
  onActivate={openTask}
  onClose={closeTab}
/>`,children:(0,h.jsx)(m,{})})}),(0,h.jsx)(r,{id:`status-bar`,label:`WorkspaceStatusBar`,description:`Кнопки строки стоят сегментами на всю высоту. WorkspaceStatusBarSeparator делит группы, WorkspaceStatusHint показывает сочетание.`,children:(0,h.jsx)(a,{fragment:!0,layout:`block`,code:`<WorkspaceStatusBar
  start={<>
    <WorkspaceDockToggle label="Нижний док" shortcut="Meta+J" icon={<DockBottomIcon aria-hidden="true" />} pressed={dock} onPressedChange={setDock} />
    <WorkspaceStatusHint keys="Meta+K" onClick={openPalette}>Палитра</WorkspaceStatusHint>
  </>}
  end={<>
    <StatusTag tone="turn" label="Твой ход: 2" />
    <WorkspaceStatusBarSeparator />
    <StatusTag tone="ok" label="Проверки" />
    <WorkspaceStatusBarSeparator />
    <Muted>main</Muted>
  </>}
/>`,children:(0,h.jsx)(n,{})})}),(0,h.jsx)(r,{id:`status-popover`,label:`WorkspaceStatusPopover`,description:`События других проектов: сегмент открывает список вверх, фокус сразу на списке. Новое событие подсвечивает сегмент один раз.`,children:(0,h.jsx)(a,{fragment:!0,layout:`block`,code:`import { useState } from "react"

function EventsPopover() {
  const [open, setOpen] = useState(false)
  return (
    <WorkspaceStatusPopover
      open={open}
      onOpenChange={setOpen}
      title="События в других проектах"
      count={3}
      footer="↑↓ Выбрать · ↵ Открыть · esc Закрыть"
      groups={groups}
      trigger={<Button tone="neutral" variant="ghost" size="xs">Другие проекты: 2 новых</Button>}
    />
  )
}`,children:(0,h.jsx)(l,{})})}),(0,h.jsx)(r,{id:`dock`,label:`WorkspaceBottomDock`,description:`WorkspaceDockSessions встаёт в actions: шапка остаётся одной строкой 24 px. Высоту меняет ручка на верхней кромке.`,children:(0,h.jsx)(a,{fragment:!0,layout:`block`,code:`<WorkspaceBottomDock
  label="Нижний док"
  tabs={tabs}
  activeId={tab}
  onActiveChange={setTab}
  resizable
  onHeightChange={saveHeight}
  actions={<>
    <WorkspaceDockSessions label="Сессии терминала" sessions={sessions} activeId={session} onActiveChange={setSession} onClose={closeSession} />
    <IconButton label="Новая сессия" size="xs" variant="ghost" tone="neutral"><AddIcon /></IconButton>
  </>}
/>`,children:(0,h.jsx)(p,{})})}),(0,h.jsx)(r,{id:`quick-create`,label:`WorkspaceQuickCreate`,description:`Строка и поле один элемент: Enter создаёт запись, Escape закрывает поле. Ставится в create реестра или в колонку доски.`,children:(0,h.jsx)(a,{fragment:!0,layout:`stack`,code:`<>
  <WorkspaceQuickCreate label="Новая задача" placeholder="Название задачи" icon={<WorkflowIcon status="open" />} onCreate={add} />
  <WorkspaceQuickCreate label="Новая подзадача" layout="tree" onCreate={add} />
  <WorkspaceQuickCreate label="Новая запись" layout="ghost" onCreate={add} />
</>`,children:(0,h.jsx)(u,{})})}),(0,h.jsx)(r,{id:`keys`,label:`Сочетания`,description:`Компоненты показывают сочетания и объявляют aria-keyshortcuts, обработчик ставит приложение.`,children:(0,h.jsx)(d,{label:`Сочетания панелей`,columns:[{label:`Компонент`,kind:`name`,width:`14rem`},{label:`Кто слушает клавишу`}],rows:[[`WorkspaceDockToggle`,`Сам компонент: shortcut идёт в реестр сочетаний`],[`WorkspaceBottomDock`,(0,h.jsxs)(h.Fragment,{children:[`Подсказка. Клавишу слушает `,(0,h.jsx)(s,{href:`#status-bar`,children:`WorkspaceDockToggle`},`toggle`)]})],[`WorkspaceTabs`,`Подсказка крестика. ⌘W и ⌃⇥ назначает приложение`],[`WorkspaceStatusHint`,`Подсказка. Клавишу назначает приложение`]]})})]})}export{g as default};