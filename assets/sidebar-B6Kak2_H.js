import{$n as e,Hn as t,Mo as n,kn as r}from"./chunk-ZW5N5E5H-C8fDcLjq.js";import{H as i,M as a,c as o,s}from"./docs-CtJuZ0WF.js";import"./index-D3G-KnJA.js";var c=n();function l(){return(0,c.jsxs)(s,{className:`flex flex-col gap-6`,children:[(0,c.jsx)(t,{title:`Sidebar`,description:`Навигационная боковая панель с коллапсом, меню, группами и мобильной адаптацией. Требует SidebarProvider. Живой пример — Sprint Operations Target.`}),(0,c.jsx)(a,{className:`max-w-prose`,"data-body":!0,children:`Sidebar — сложный составной компонент из семейства: SidebarProvider держит state коллапса, Sidebar рендерит контейнер, SidebarMenu группирует ссылки. Ниже — рецепт сборки по слоям, от базовой разметки до вложенных под-меню и мобильной адаптации.`}),(0,c.jsx)(e,{label:`basic layout`,children:(0,c.jsx)(r,{language:`tsx`,code:`import {
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
</SidebarProvider>`})}),(0,c.jsxs)(e,{label:`crt tone`,children:[(0,c.jsxs)(a,{className:`mb-3 max-w-prose`,"data-body":!0,children:[`Тема CRT Signal активируется пропом `,(0,c.jsx)(o,{children:`tone="crt"`}),` на`,` `,(0,c.jsx)(o,{children:`SidebarProvider`}),`. При `,(0,c.jsx)(o,{children:`tone="crt"`}),` `,(0,c.jsx)(o,{children:`SidebarMenuButton`}),` требует строковый `,(0,c.jsx)(o,{children:`label`}),` `,`и опциональный `,(0,c.jsx)(o,{children:`icon`}),`; классы `,(0,c.jsx)(o,{children:`.crt-*`}),` и`,` `,(0,c.jsx)(o,{children:`data-text`}),` навешиваются автоматически.`,` `,`Живой пример семейства Sidebar — Sprint Operations Target.`]}),(0,c.jsx)(r,{language:`tsx`,code:`import {
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
</SidebarProvider>`})]}),(0,c.jsx)(e,{label:`nested sub-menu`,children:(0,c.jsx)(r,{language:`tsx`,code:`<SidebarMenuItem>
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
</SidebarMenuItem>`})}),(0,c.jsxs)(e,{label:`advanced primitives`,children:[(0,c.jsx)(a,{className:`mb-3`,"data-body":!0,children:`Для сложных случаев доступны: SidebarGroupAction (кнопка в заголовке группы), SidebarMenuAction (кнопка справа от пункта), SidebarMenuBadge (счётчик), SidebarMenuSkeleton (плейсхолдер загрузки), SidebarInput (встроенный поиск), SidebarRail (полоска-резайзер), SidebarSeparator.`}),(0,c.jsx)(r,{language:`tsx`,code:`<SidebarMenuItem>
  <SidebarMenuButton>Inbox</SidebarMenuButton>
  <SidebarMenuBadge>12</SidebarMenuBadge>
  <SidebarMenuAction>
    <MoreHorizontalIcon />
  </SidebarMenuAction>
</SidebarMenuItem>`})]}),(0,c.jsx)(e,{label:`api reference`,children:(0,c.jsx)(i,{title:`Sidebar Props`,props:[{name:`Sidebar.side`,type:`"left" | "right"`,defaultValue:`"left"`,description:`С какой стороны появляется сайдбар.`},{name:`Sidebar.variant`,type:`"sidebar" | "floating" | "inset"`,defaultValue:`"sidebar"`,description:`Визуальный вариант (обычный, плавающий, встроенный).`},{name:`Sidebar.collapsible`,type:`"offcanvas" | "icon" | "none"`,defaultValue:`"offcanvas"`,description:`Режим коллапса: полностью скрытый, только иконки или без коллапса.`},{name:`SidebarProvider.defaultOpen`,type:`boolean`,defaultValue:`true`,description:`Начальное состояние раскрытия.`},{name:`SidebarProvider.tone`,type:`"default" | "crt"`,defaultValue:`"default"`,description:`Визуальная подпись. При "crt" SidebarMenuButton требует label, icon, классы и data-text навешиваются автоматически.`},{name:`SidebarMenuButton.label`,type:`string`,description:`Обязателен при tone="crt". В default-режиме опционален.`},{name:`SidebarMenuButton.icon`,type:`React.ComponentType<{className?: string}>`,description:`Иконка. Для CRT-режима допустим прямой lucide-react (см. layout.md).`},{name:`useSidebar()`,type:`() => SidebarContext`,description:`Хук для доступа к состоянию: open, toggleSidebar, isMobile.`}]})})]})}export{l as default};