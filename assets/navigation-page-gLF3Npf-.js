import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{$n as t,Cn as n,Cr as r,D as i,Dr as a,E as o,Er as s,Ir as c,O as l,Or as u,Pr as d,Qr as f,Sr as p,T as m,Tn as h,Tr as g,Vr as _,Zt as v,gr as y,j as b,kr as x,va as S,wr as C,x as w}from"./chunk-FJ6G7XYZ-vkrr-AON.js";import{A as T,B as E,Q as D,g as O}from"./docs-CTQgkcVe.js";import"./index-CylhoBOX.js";import"./workspace-B0gvzNJe.js";import"./icons-2PLDBLl_.js";import"./patterns-W444yBj4.js";import{n as k,r as A,t as j}from"./docs-article-CV9v0E7s.js";var M=e(),N=[{id:`usage`,label:`Использование`},{id:`tabs`,label:`Tabs`},{id:`tabs-line`,label:`Tabs: вариант line`},{id:`section-divider`,label:`Разделитель разделов`},{id:`separator`,label:`Separator`},{id:`app-shell`,label:`Навигация оболочки`},{id:`status-events`,label:`События в строке состояния`},{id:`disclosure-group`,label:`Ряд кнопок раскрытия`},{id:`api`,label:`API`}];function P(){return(0,M.jsx)(b,{title:`Navigation`,description:`Breadcrumb, Tabs, section-разделители и навигация оболочки.`,breadcrumbs:j(`/components/navigation`),meta:k(`/components/navigation`),children:(0,M.jsx)(w,{presentation:`article`,label:`Navigation`,inspector:A(N),document:(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(O,{title:`Breadcrumb`,description:`Навигационная цепочка в header. Текущая страница без ссылки.`,code:`<Breadcrumb aria-label="Incident path">
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/incidents">Incidents</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>INC-4012</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`,layout:`stack`,children:[(0,M.jsx)(r,{"aria-label":`Incident path`,children:(0,M.jsxs)(s,{children:[(0,M.jsx)(C,{children:(0,M.jsx)(g,{href:`#`,children:`Dashboard`})}),(0,M.jsx)(u,{}),(0,M.jsx)(C,{children:(0,M.jsx)(g,{href:`#`,children:`Incidents`})}),(0,M.jsx)(u,{}),(0,M.jsx)(C,{children:(0,M.jsx)(a,{children:`INC-4012`})})]})}),(0,M.jsx)(r,{"aria-label":`Service path`,children:(0,M.jsxs)(s,{children:[(0,M.jsx)(C,{children:(0,M.jsx)(g,{href:`#`,children:`Services`})}),(0,M.jsx)(u,{}),(0,M.jsx)(C,{children:(0,M.jsx)(a,{children:`api-gateway`})})]})})]}),(0,M.jsx)(p,{children:`Навигация живёт на двух уровнях. Глобальный — боковая панель или полоса значков разделов слева. Локальный — Breadcrumb показывает место в иерархии, Tabs переключают контексты внутри экрана, SectionBlock разделяет смысловые зоны страницы.`}),(0,M.jsx)(f,{id:`usage`,label:`Использование`,children:(0,M.jsx)(x,{copyLabel:`Скопировать код: Breadcrumb и Tabs`,language:`tsx`,code:`import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, Tabs, TabsContent, TabsList, TabsTrigger } from "@chucky23/design-system/react"

<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="timeline">Timeline</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">...</TabsContent>
  <TabsContent value="timeline">...</TabsContent>
</Tabs>`})}),(0,M.jsx)(f,{id:`tabs`,label:`Tabs`,children:(0,M.jsx)(O,{title:`Tabs — default variant`,description:`Табы без подложки списка, активная вкладка на заливке выбранного. Подходит для основных панелей переключения контента.`,code:`<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="timeline">Timeline</TabsTrigger>
    <TabsTrigger value="postmortem">Postmortem</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">...</TabsContent>
  <TabsContent value="timeline">...</TabsContent>
  <TabsContent value="postmortem">...</TabsContent>
</Tabs>`,layout:`block`,children:(0,M.jsxs)(m,{defaultValue:`overview`,children:[(0,M.jsxs)(i,{children:[(0,M.jsx)(l,{value:`overview`,children:`Overview`}),(0,M.jsx)(l,{value:`timeline`,children:`Timeline`}),(0,M.jsx)(l,{value:`postmortem`,children:`Postmortem`})]}),(0,M.jsx)(o,{value:`overview`,children:(0,M.jsx)(p,{children:`Incident overview with severity, affected services, and current status.`})}),(0,M.jsx)(o,{value:`timeline`,children:(0,M.jsx)(p,{children:`Chronological event log from detection to resolution.`})}),(0,M.jsx)(o,{value:`postmortem`,children:(0,M.jsx)(p,{children:`Root cause analysis, action items, and prevention measures.`})})]})})}),(0,M.jsx)(f,{id:`tabs-line`,label:`Tabs: вариант line`,children:(0,M.jsx)(O,{title:`Tabs — line variant`,description:`Минималистичный underline-индикатор вместо фона. Используется в ComponentPreview и подобных плотных layout-ах.`,code:`<Tabs defaultValue="preview">
  <TabsList variant="line">
    <TabsTrigger value="preview">Preview</TabsTrigger>
    <TabsTrigger value="code">Code</TabsTrigger>
  </TabsList>
  <TabsContent value="preview">...</TabsContent>
  <TabsContent value="code">...</TabsContent>
</Tabs>`,layout:`block`,children:(0,M.jsxs)(m,{defaultValue:`preview`,children:[(0,M.jsxs)(i,{variant:`line`,children:[(0,M.jsx)(l,{value:`preview`,children:`Preview`}),(0,M.jsx)(l,{value:`code`,children:`Code`})]}),(0,M.jsx)(o,{value:`preview`,children:(0,M.jsx)(p,{children:`Рендер компонента в iframe preview.`})}),(0,M.jsx)(o,{value:`code`,children:(0,M.jsx)(p,{children:`Исходный код примера.`})})]})})}),(0,M.jsx)(f,{id:`section-divider`,label:`Разделитель разделов`,children:(0,M.jsx)(O,{title:`Section Divider`,description:`Signature element: label + горизонтальная линия. CSS ::after с flex: 1.`,code:`<SectionBlock label="active incidents">
  <Body>Open issues grouped by service.</Body>
</SectionBlock>

<SectionBlock label="resolved today">
  <Body>Closed incidents from the current operational day.</Body>
</SectionBlock>

<SectionBlock label="service health">
  <Body>Signal summary for monitored services.</Body>
</SectionBlock>`,layout:`block`,children:(0,M.jsxs)(t,{children:[(0,M.jsx)(f,{label:`active incidents`,headingLevel:3,children:(0,M.jsx)(p,{children:`Open issues grouped by service.`})}),(0,M.jsx)(f,{label:`resolved today`,headingLevel:3,children:(0,M.jsx)(p,{children:`Closed incidents from the current operational day.`})}),(0,M.jsx)(f,{label:`service health`,headingLevel:3,children:(0,M.jsx)(p,{children:`Signal summary for monitored services.`})})]})})}),(0,M.jsxs)(f,{id:`separator`,label:`Separator`,children:[(0,M.jsx)(O,{title:`Separator — horizontal`,description:`Простая горизонтальная линия-разделитель.`,code:`<Separator />`,layout:`block`,children:(0,M.jsx)(S,{})}),(0,M.jsxs)(O,{title:`Separator — vertical`,description:`Вертикальная линия-разделитель в flex-контексте.`,code:`<Separator orientation="vertical" className="h-4" />`,children:[(0,M.jsx)(y,{tone:`muted`,children:`Incidents`}),(0,M.jsx)(S,{orientation:`vertical`,className:`h-4`}),(0,M.jsx)(y,{tone:`muted`,children:`Services`}),(0,M.jsx)(S,{orientation:`vertical`,className:`h-4`}),(0,M.jsx)(y,{tone:`muted`,children:`Metrics`})]})]}),(0,M.jsxs)(f,{id:`app-shell`,label:`Навигация оболочки`,children:[(0,M.jsxs)(p,{children:[`Разделы приложения показывает WorkspaceShell. По умолчанию это подписанная боковая панель,`,` `,(0,M.jsx)(c,{children:`navigation="rail"`}),` заменяет её полосой значков шириной 40px. Подписи и сочетания пунктов уходят в подсказки, на широком экране полоса не сворачивается. На мобильном оба режима открываются одним листом с подписями.`]}),(0,M.jsxs)(p,{children:[`Остальной хром окна оболочка принимает слотами. `,(0,M.jsx)(c,{children:`header`}),` — заголовок окна 32px: проект, поле палитры, уведомления. `,(0,M.jsx)(c,{children:`tabs`}),` — полоса открытых документов 32px под ним, например WorkspaceTabs. `,(0,M.jsx)(c,{children:`bottomDock`}),` и`,` `,(0,M.jsx)(c,{children:`statusBar`}),` закреплены у нижнего края холста: док вроде WorkspaceBottomDock и строка состояния 24px вроде WorkspaceStatusBar. Все слоты вместе собраны в эталонном приложении Sprint, например на экране `,(0,M.jsx)(T,{href:`/examples/sprint/registry`,children:`реестра задач`}),`.`]}),(0,M.jsx)(x,{copyLabel:`Скопировать код: навигация и слоты WorkspaceShell`,language:`tsx`,code:`<WorkspaceShell
  navigation="rail"
  groups={groups}
  activeId={activeId}
  header={<ProjectHeader />}
  tabs={<WorkspaceTabs label="Открытые задачи" tabs={openTabs} activeId={taskId} onActivate={openTask} onClose={closeTab} />}
  bottomDock={<WorkspaceBottomDock label="Нижний док" open={dockOpen} tabs={dockTabs} activeId={dockTab} onActiveChange={setDockTab} onClose={() => setDockOpen(false)} />}
  statusBar={<WorkspaceStatusBar start={dockToggle} end={syncState} />}
>
  <Outlet />
</WorkspaceShell>`})]}),(0,M.jsxs)(f,{id:`status-events`,label:`События в строке состояния`,children:[(0,M.jsxs)(p,{children:[`События других проектов строка состояния показывает сегментом за разделителем групп`,` `,(0,M.jsx)(c,{children:`WorkspaceStatusBarSeparator`}),`. Сегмент открывает`,` `,(0,M.jsx)(c,{children:`WorkspaceStatusPopover`}),` вверх: группы по проектам, строки 24px, заголовок со счётчиком и подвал с клавишами, фокус сразу на списке. Новое событие подсвечивает сегмент один раз через`,` `,(0,M.jsx)(c,{children:`AttentionFlash`}),`, а `,(0,M.jsx)(c,{children:`AttentionDot pulse`}),` медленно мерцает, пока есть непросмотренное. Просмотренное событие «твой ход» набрано`,` `,(0,M.jsx)(c,{children:`StatusTag muted`}),` цветом --subtle.`]}),(0,M.jsx)(O,{title:`Сегмент «другие проекты»`,description:`Кнопка «Новое событие» запускает подсветку. Сегмент открывает список событий.`,code:`<WorkspaceStatusBar end={<>
  <WorkspaceStatusPopover open={open} onOpenChange={setOpen} title="События в других проектах" count={3}
    footer="↑↓ Выбрать · ↵ Открыть · esc Закрыть" groups={groups}
    trigger={<Button tone="neutral" variant="ghost" size="xs" className="relative"><AttentionFlash trigger={arrivals} />Другие проекты: 2 новых</Button>} />
  <WorkspaceStatusBarSeparator />
  <StatusTag tone="turn" format="dot" label="Твой ход: 3" />
</>} />`,layout:`block`,children:(0,M.jsx)(E,{})})]}),(0,M.jsxs)(f,{id:`disclosure-group`,label:`Ряд кнопок раскрытия`,children:[(0,M.jsxs)(p,{children:[(0,M.jsx)(c,{children:`DisclosureButtonGroup`}),` — ряд тихих кнопок с одной открытой панелью под ним, например «участники · записи до процесса · технические сведения» в разделе процесса задачи. Открыта максимум одна панель, повторное нажатие закрывает её. Открытая кнопка залита --selected с teal-иконкой и остаётся тем же элементом, поэтому фокус не теряется. Содержимое панели проявляется прозрачностью за --motion-base без анимации высоты, закрытие мгновенное. `,(0,M.jsx)(c,{children:`hideEmpty`}),` прячет кнопки без содержимого.`]}),(0,M.jsx)(O,{title:`Процесс и журнал`,description:`Кнопка «записи до процесса» без содержимого и со скрытием не показывается.`,code:`<DisclosureButtonGroup label="Процесс и журнал" hideEmpty items={[
  { id: "participants", label: "Участники", icon: <TeamIcon />, meta: "Проверяет: Ты", content: <Participants /> },
  { id: "legacy", label: "Записи до процесса", icon: <HistoryIcon />, meta: "3", content: null },
  { id: "technical", label: "Технические сведения", icon: <ToolsIcon />, content: <Technical /> },
]} />`,layout:`block`,children:(0,M.jsx)(d,{label:`Процесс и журнал`,hideEmpty:!0,items:[{id:`participants`,label:`Участники`,icon:(0,M.jsx)(n,{}),meta:`Проверяет: Ты`,content:(0,M.jsx)(p,{children:`Исполнитель — агент Claude, проверяет — Ты.`})},{id:`legacy`,label:`Записи до процесса`,icon:(0,M.jsx)(v,{}),meta:`3`,content:null},{id:`technical`,label:`Технические сведения`,icon:(0,M.jsx)(h,{}),content:(0,M.jsx)(_,{children:`run-42 · 3 мин · exit 0`})}]})})]}),(0,M.jsxs)(f,{id:`api`,label:`API`,children:[(0,M.jsx)(D,{title:`Breadcrumb Slots`,props:[{name:`Breadcrumb`,type:`nav`,defaultValue:`—`,description:`Root nav element with aria-label='breadcrumb'`},{name:`BreadcrumbList`,type:`ol`,defaultValue:`—`,description:`Ordered list of breadcrumb items`},{name:`BreadcrumbItem`,type:`li`,defaultValue:`—`,description:`Single breadcrumb item`},{name:`BreadcrumbLink`,type:`a`,defaultValue:`—`,description:`Clickable link. Not for current page.`},{name:`BreadcrumbPage`,type:`span`,defaultValue:`—`,description:`Current page. Not a link, aria-current='page'`},{name:`BreadcrumbSeparator`,type:`li`,defaultValue:`ChevronRight`,description:`Separator between items`}]}),(0,M.jsx)(D,{title:`TabsList Props`,props:[{name:`variant`,type:`"default" | "line"`,defaultValue:`"default"`,description:`default — без подложки, активная вкладка на заливке выбранного. line — индикатор 1px цвета текста для плотных layout.`}]}),(0,M.jsx)(D,{title:`Tabs Slots`,props:[{name:`Tabs`,type:`div`,defaultValue:`—`,description:`Root. Принимает defaultValue и orientation.`},{name:`TabsList`,type:`div`,defaultValue:`—`,description:`Контейнер триггеров. variant управляет визуалом.`},{name:`TabsTrigger`,type:`button`,defaultValue:`—`,description:`Кнопка активации вкладки. value обязателен.`},{name:`TabsContent`,type:`div`,defaultValue:`—`,description:`Панель содержимого. value привязывает к триггеру.`},{name:`TabsIndicator`,type:`span`,defaultValue:`—`,description:`Автопозиционируемый underline. Рендерится внутри TabsList при variant=line.`}]})]})]})})})}export{P as default};