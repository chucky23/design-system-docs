import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{Gn as t,I as n,O as r,Rn as i,ar as a,br as o}from"./chunk-5DUEG3R3-896u-HpP.js";import{h as s,j as c}from"./docs-3sp5L-9g.js";import"./index-CHfT3erv.js";import"./workspace-DK_BGpXz.js";import{n as l,t as u}from"./docs-article-DBNRC-Xz.js";var d=e(),f=[{id:`replacement`,label:`Замена — WorkspaceShell`},{id:`usage`,label:`Базовая разметка`},{id:`crt-tone`,label:`Тема CRT`},{id:`nested-sub-menu`,label:`Вложенное меню`},{id:`advanced-primitives`,label:`Дополнительные примитивы`},{id:`api`,label:`API`}];function p(){return(0,d.jsx)(n,{title:`Sidebar`,description:`Навигационная боковая панель с коллапсом, меню, группами и мобильной адаптацией. Требует SidebarProvider. Для навигации приложения используй WorkspaceShell.`,breadcrumbs:u(`/components/sidebar`),children:(0,d.jsx)(r,{presentation:`article`,label:`Sidebar`,inspector:l(f),document:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(i,{children:[`Sidebar — сложный составной компонент из семейства: SidebarProvider держит state коллапса, Sidebar рендерит контейнер, SidebarMenu группирует ссылки. Ниже — рецепт сборки по слоям, от базовой разметки до вложенных под-меню и мобильной адаптации. Живого примера на этой странице нет: Sidebar закреплён у края окна и конфликтует с навигацией сайта. Живой пример семейства —`,` `,(0,d.jsx)(s,{href:`/patterns/sprint-operations-target`,children:`Sprint Operations Target`}),`.`]}),(0,d.jsxs)(o,{id:`replacement`,label:`Замена — WorkspaceShell`,children:[(0,d.jsxs)(i,{children:[`Ручную сборку SidebarProvider + SidebarInset для навигации приложения заменяет WorkspaceShell вместе с WorkspacePage: пункты получают иконки, счётчики, меню действий и индикаторы, а мобильное меню и CRT Signal принадлежат пакету. Sidebar пока не помечен устаревшим, потому что проекты используют его вне экранов. Полный пример оболочки — на странице`,` `,(0,d.jsx)(s,{href:`/components/panels`,children:`Panels`}),`.`]}),(0,d.jsx)(t,{copyLabel:`Скопировать код: замена на WorkspaceShell`,language:`tsx`,code:`import { WorkspaceShell, WorkspacePage } from "@chucky23/design-system/patterns/workspace"
import { PixelList } from "@chucky23/design-system/icons/pixel"

<WorkspaceShell
  brand="Operations"
  activeId="incidents"
  groups={[{ id: "main", label: "Workspace", items: [
    { id: "incidents", label: "Incidents", icon: PixelList, count: 12, onActivate: () => navigate("/incidents") },
  ] }]}
>
  <WorkspacePage title="Incidents">{content}</WorkspacePage>
</WorkspaceShell>`})]}),(0,d.jsx)(o,{id:`usage`,label:`Базовая разметка`,children:(0,d.jsx)(t,{copyLabel:`Скопировать код: базовая разметка Sidebar`,language:`tsx`,code:`import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarTrigger,
} from "@chucky23/design-system/extended/sidebar"

<SidebarProvider defaultOpen>
  <Sidebar collapsible="icon">
    <SidebarHeader>Workspace</SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Main</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <HomeIcon />
                <span>Dashboard</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter>
      <SidebarMenuButton>
        <SettingsIcon />
        <span>Settings</span>
      </SidebarMenuButton>
    </SidebarFooter>
  </Sidebar>
  <SidebarInset>
    <SidebarTrigger />
    <main>Content</main>
  </SidebarInset>
</SidebarProvider>`})}),(0,d.jsxs)(o,{id:`crt-tone`,label:`Тема CRT`,children:[(0,d.jsxs)(i,{children:[`Тема CRT Signal активируется пропом `,(0,d.jsx)(a,{children:`tone="crt"`}),` на`,` `,(0,d.jsx)(a,{children:`SidebarProvider`}),`. При `,(0,d.jsx)(a,{children:`tone="crt"`}),` `,(0,d.jsx)(a,{children:`SidebarMenuButton`}),` требует строковый `,(0,d.jsx)(a,{children:`label`}),` `,`и опциональный `,(0,d.jsx)(a,{children:`icon`}),`; классы `,(0,d.jsx)(a,{children:`.crt-*`}),` и`,` `,(0,d.jsx)(a,{children:`data-text`}),` навешиваются автоматически.`]}),(0,d.jsx)(t,{copyLabel:`Скопировать код: тема CRT`,language:`tsx`,code:`import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@chucky23/design-system/extended/sidebar"
import { LayoutDashboard, List } from "lucide-react"

<SidebarProvider tone="crt">
  <Sidebar>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton label="Overview" icon={LayoutDashboard} isActive />
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton label="Sprints" icon={List} />
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
</SidebarProvider>`})]}),(0,d.jsx)(o,{id:`nested-sub-menu`,label:`Вложенное меню`,children:(0,d.jsx)(t,{copyLabel:`Скопировать код: вложенное меню`,language:`tsx`,code:`<SidebarMenuItem>
  <SidebarMenuButton>
    <FolderIcon />
    <span>Projects</span>
  </SidebarMenuButton>
  <SidebarMenuSub>
    <SidebarMenuSubItem>
      <SidebarMenuSubButton>Platform</SidebarMenuSubButton>
    </SidebarMenuSubItem>
    <SidebarMenuSubItem>
      <SidebarMenuSubButton>Mobile</SidebarMenuSubButton>
    </SidebarMenuSubItem>
  </SidebarMenuSub>
</SidebarMenuItem>`})}),(0,d.jsxs)(o,{id:`advanced-primitives`,label:`Дополнительные примитивы`,children:[(0,d.jsx)(i,{children:`Для сложных случаев доступны: SidebarGroupAction (кнопка в заголовке группы), SidebarMenuAction (кнопка справа от пункта), SidebarMenuBadge (счётчик), SidebarMenuSkeleton (плейсхолдер загрузки), SidebarInput (встроенный поиск), SidebarRail (полоска-резайзер), SidebarSeparator.`}),(0,d.jsx)(t,{copyLabel:`Скопировать код: дополнительные примитивы`,language:`tsx`,code:`<SidebarMenuItem>
  <SidebarMenuButton>Inbox</SidebarMenuButton>
  <SidebarMenuBadge>12</SidebarMenuBadge>
  <SidebarMenuAction>
    <MoreHorizontalIcon />
  </SidebarMenuAction>
</SidebarMenuItem>`})]}),(0,d.jsx)(o,{id:`api`,label:`API`,children:(0,d.jsx)(c,{title:`Sidebar Props`,props:[{name:`Sidebar.side`,type:`"left" | "right"`,defaultValue:`"left"`,description:`С какой стороны появляется сайдбар.`},{name:`Sidebar.variant`,type:`"sidebar" | "floating" | "inset"`,defaultValue:`"sidebar"`,description:`Визуальный вариант (обычный, плавающий, встроенный).`},{name:`Sidebar.collapsible`,type:`"offcanvas" | "icon" | "none"`,defaultValue:`"offcanvas"`,description:`Режим коллапса: полностью скрытый, только иконки или без коллапса.`},{name:`SidebarProvider.defaultOpen`,type:`boolean`,defaultValue:`true`,description:`Начальное состояние раскрытия.`},{name:`SidebarProvider.open`,type:`boolean`,defaultValue:`—`,description:`Контролируемое состояние раскрытия. Используй вместе с onOpenChange.`},{name:`SidebarProvider.onOpenChange`,type:`(open: boolean) => void`,defaultValue:`—`,description:`Колбэк смены состояния раскрытия.`},{name:`SidebarProvider.tone`,type:`"default" | "crt"`,defaultValue:`"default"`,description:`Визуальная подпись. При "crt" SidebarMenuButton требует label, icon, классы и data-text навешиваются автоматически.`},{name:`SidebarMenuButton.label`,type:`string`,defaultValue:`—`,description:`Обязателен при tone="crt". В default-режиме опционален.`},{name:`SidebarMenuButton.icon`,type:`React.ComponentType<{className?: string}>`,defaultValue:`—`,description:`Иконка. Для CRT-режима допустим прямой lucide-react (см. layout.md).`},{name:`useSidebar()`,type:`() => SidebarContext`,defaultValue:`—`,description:`Хук для доступа к состоянию: open, toggleSidebar, isMobile.`}]})})]})})})}export{p as default};