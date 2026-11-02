import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{Ir as t,Qr as n,Sr as r,j as i,kr as a,x as o}from"./chunk-FJ6G7XYZ-vkrr-AON.js";import{A as s,Q as c}from"./docs-CTQgkcVe.js";import"./index-CylhoBOX.js";import"./workspace-B0gvzNJe.js";import{n as l,r as u,t as d}from"./docs-article-CV9v0E7s.js";var f=e(),p=[{id:`replacement`,label:`Замена — WorkspaceShell`},{id:`usage`,label:`Базовая разметка`},{id:`menu-item`,label:`Пункт навигации`},{id:`nested-sub-menu`,label:`Вложенное меню`},{id:`advanced-primitives`,label:`Дополнительные примитивы`},{id:`api`,label:`API`}];function m(){return(0,f.jsx)(i,{title:`Sidebar`,description:`Навигационная боковая панель с коллапсом, меню, группами и мобильной адаптацией. Требует SidebarProvider. Для навигации приложения используй WorkspaceShell.`,breadcrumbs:d(`/components/sidebar`),meta:l(`/components/sidebar`),children:(0,f.jsx)(o,{presentation:`article`,label:`Sidebar`,inspector:u(p),document:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(r,{children:[`Sidebar — сложный составной компонент из семейства: SidebarProvider держит state коллапса, Sidebar рендерит контейнер, SidebarMenu группирует ссылки. Ниже — рецепт сборки по слоям, от базовой разметки до вложенных под-меню и мобильной адаптации. Живого примера на этой странице нет: Sidebar закреплён у края окна и конфликтует с навигацией сайта. Живой пример семейства —`,` `,(0,f.jsx)(s,{href:`/patterns/sprint-operations-target`,children:`Sprint Operations Target`}),`.`]}),(0,f.jsxs)(n,{id:`replacement`,label:`Замена — WorkspaceShell`,children:[(0,f.jsxs)(r,{children:[`Ручную сборку SidebarProvider + SidebarInset для навигации приложения заменяет WorkspaceShell вместе с WorkspacePage: пункты получают иконки, счётчики, меню действий и индикаторы, а мобильное меню и оформление оболочки принадлежат пакету. Sidebar пока не помечен устаревшим, потому что проекты используют его вне экранов. Полный пример оболочки — на странице`,` `,(0,f.jsx)(s,{href:`/components/panels`,children:`Panels`}),`.`]}),(0,f.jsx)(a,{copyLabel:`Скопировать код: замена на WorkspaceShell`,language:`tsx`,code:`import { WorkspaceShell, WorkspacePage } from "@chucky23/design-system/patterns/workspace"
import { ListIcon } from "@chucky23/design-system/icons"

<WorkspaceShell
  brand="Operations"
  activeId="incidents"
  groups={[{ id: "main", label: "Workspace", items: [
    { id: "incidents", label: "Incidents", icon: ListIcon, count: 12, onActivate: () => navigate("/incidents") },
  ] }]}
>
  <WorkspacePage title="Incidents">{content}</WorkspacePage>
</WorkspaceShell>`})]}),(0,f.jsx)(n,{id:`usage`,label:`Базовая разметка`,children:(0,f.jsx)(a,{copyLabel:`Скопировать код: базовая разметка Sidebar`,language:`tsx`,code:`import { SidebarProvider, Sidebar, SidebarHeader, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupLabel, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarInset, SidebarTrigger } from "@chucky23/design-system/extended/sidebar"

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
</SidebarProvider>`})}),(0,f.jsxs)(n,{id:`menu-item`,label:`Пункт навигации`,children:[(0,f.jsxs)(r,{children:[(0,f.jsx)(t,{children:`SidebarMenuButton`}),` со строковым `,(0,f.jsx)(t,{children:`label`}),` и необязательным`,` `,(0,f.jsx)(t,{children:`icon`}),` рисует пункт сам: SF Pro 13px, строка 24px, наведение `,(0,f.jsx)(t,{children:`--hover`}),`, выбранный пункт — ровная заливка `,(0,f.jsx)(t,{children:`--selected`}),`. Подпись лежит в`,` `,(0,f.jsx)(t,{children:`[data-slot="sidebar-menu-button-label"]`}),`, оформление задаёт атрибут`,` `,(0,f.jsx)(t,{children:`data-item`}),`, выбранное состояние — `,(0,f.jsx)(t,{children:`data-active`}),`. Свечения, растра и аберрации нет. `,(0,f.jsx)(t,{children:`children`}),` по-прежнему допустимы и заменяют подпись своей разметкой, тогда `,(0,f.jsx)(t,{children:`data-item`}),` не ставится.`]}),(0,f.jsx)(a,{copyLabel:`Скопировать код: пункты навигации`,language:`tsx`,code:`import { SidebarProvider, Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@chucky23/design-system/extended/sidebar"
import { DashboardIcon, ListIcon } from "@chucky23/design-system/icons"

<SidebarProvider>
  <Sidebar>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton label="Overview" icon={DashboardIcon} isActive />
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton label="Sprints" icon={ListIcon} />
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
</SidebarProvider>`})]}),(0,f.jsx)(n,{id:`nested-sub-menu`,label:`Вложенное меню`,children:(0,f.jsx)(a,{copyLabel:`Скопировать код: вложенное меню`,language:`tsx`,code:`<SidebarMenuItem>
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
</SidebarMenuItem>`})}),(0,f.jsxs)(n,{id:`advanced-primitives`,label:`Дополнительные примитивы`,children:[(0,f.jsx)(r,{children:`Для сложных случаев доступны: SidebarGroupAction (кнопка в заголовке группы), SidebarMenuAction (кнопка справа от пункта), SidebarMenuBadge (счётчик), SidebarMenuSkeleton (плейсхолдер загрузки), SidebarInput (встроенный поиск), SidebarRail (полоска-резайзер), SidebarSeparator.`}),(0,f.jsx)(a,{copyLabel:`Скопировать код: дополнительные примитивы`,language:`tsx`,code:`<SidebarMenuItem>
  <SidebarMenuButton>Inbox</SidebarMenuButton>
  <SidebarMenuBadge>12</SidebarMenuBadge>
  <SidebarMenuAction>
    <MoreHorizontalIcon />
  </SidebarMenuAction>
</SidebarMenuItem>`})]}),(0,f.jsx)(n,{id:`api`,label:`API`,children:(0,f.jsx)(c,{title:`Sidebar Props`,props:[{name:`Sidebar.side`,type:`"left" | "right"`,defaultValue:`"left"`,description:`С какой стороны появляется сайдбар.`},{name:`Sidebar.variant`,type:`"sidebar" | "floating" | "inset"`,defaultValue:`"sidebar"`,description:`Визуальный вариант (обычный, плавающий, встроенный).`},{name:`Sidebar.collapsible`,type:`"offcanvas" | "icon" | "none"`,defaultValue:`"offcanvas"`,description:`Режим коллапса: полностью скрытый, только иконки или без коллапса.`},{name:`SidebarProvider.defaultOpen`,type:`boolean`,defaultValue:`true`,description:`Начальное состояние раскрытия.`},{name:`SidebarProvider.open`,type:`boolean`,defaultValue:`—`,description:`Контролируемое состояние раскрытия. Используй вместе с onOpenChange.`},{name:`SidebarProvider.onOpenChange`,type:`(open: boolean) => void`,defaultValue:`—`,description:`Колбэк смены состояния раскрытия.`},{name:`SidebarMenuButton.label`,type:`string`,defaultValue:`—`,description:`Подпись пункта навигации. С label кнопка получает data-item и рисует пункт сама, без label остаются children.`},{name:`SidebarMenuButton.icon`,type:`React.ComponentType<{className?: string}>`,defaultValue:`—`,description:`Иконка пункта. Для новой навигации используй семантические иконки из @chucky23/design-system/icons.`},{name:`useSidebar()`,type:`() => SidebarContext`,defaultValue:`—`,description:`Хук для доступа к состоянию: open, toggleSidebar, isMobile.`}]})})]})})})}export{m as default};