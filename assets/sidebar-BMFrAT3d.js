import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{A as t,Jt as n,Ut as r,X as i,Yt as a,_t as o,dt as s,rt as c,vn as l}from"./index-BX5CNJVf.js";var u=e();function d(){return(0,u.jsx)(s,{kind:`component`,route:`/components/sidebar`,description:`Боковая панель из частей: провайдер хранит состояние, группы и меню собирают пункты. Бери её для своей панели, а навигацию приложения строит WorkspaceShell.`,usage:(0,u.jsx)(l,{use:[`Своя боковая панель, которую нельзя собрать из оболочки приложения.`],avoid:[{text:`Навигация приложения: её строит WorkspaceShell по группам.`,instead:{href:`/screens/shell`,label:`WorkspaceShell и WorkspacePage`}},{text:`Свойства выбранной записи.`,instead:{href:`/components/detail-panel`,label:`DetailPanel`}}]}),example:(0,u.jsx)(i,{code:`<SidebarProvider>
  <Sidebar collapsible="none">
    <SidebarHeader>Sprint</SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Работа</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton label="Обзор" icon={DashboardIcon} isActive />
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton label="Задачи" icon={ListIcon} />
              <SidebarMenuBadge>12</SidebarMenuBadge>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton label="Проекты" icon={FolderIcon} />
              <SidebarMenuSub>
                <SidebarMenuSubItem><SidebarMenuSubButton>Платформа</SidebarMenuSubButton></SidebarMenuSubItem>
                <SidebarMenuSubItem><SidebarMenuSubButton>Мобильное приложение</SidebarMenuSubButton></SidebarMenuSubItem>
              </SidebarMenuSub>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem><SidebarMenuButton label="Настройки" icon={SettingsIcon} /></SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  </Sidebar>
</SidebarProvider>`,children:(0,u.jsx)(n,{})}),imports:(0,u.jsx)(c,{code:`import {
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
  SidebarMenuBadge,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarGroupAction,
  SidebarInput,
  SidebarMenuAction,
  SidebarMenuSkeleton,
  SidebarSeparator,
} from "@chucky23/design-system/extended/sidebar"
import { AddIcon, DashboardIcon, FolderIcon, ListIcon, MoreIcon, SettingsIcon } from "@chucky23/design-system/icons"`}),api:(0,u.jsx)(t,{items:[{name:`SidebarProvider`,props:[{name:`defaultOpen`,type:`boolean`,defaultValue:`true`,description:`Начальное состояние раскрытия.`},{name:`open`,type:`boolean`,description:`Раскрытие в управляемом режиме. Работает вместе с onOpenChange.`},{name:`onOpenChange`,type:`(open: boolean) => void`,description:`Вызывается при смене раскрытия.`},{name:`sidebarWidth`,type:`string`,defaultValue:`"16rem"`,description:`Ширина раскрытой панели.`}]},{name:`Sidebar`,props:[{name:`side`,type:`"left" | "right"`,defaultValue:`"left"`,description:`Сторона окна.`},{name:`variant`,type:`"sidebar" | "floating" | "inset"`,defaultValue:`"sidebar"`,description:`Обычная, плавающая или встроенная панель.`},{name:`collapsible`,type:`"offcanvas" | "icon" | "none"`,defaultValue:`"offcanvas"`,description:`Сворачивание за край окна, до полосы значков или без сворачивания. none кладёт панель в поток, как в образце.`}]},{name:`SidebarMenuButton`,props:[{name:`label`,type:`string`,description:`Подпись пункта. С ней кнопка сама рисует пункт в размерах навигации.`},{name:`icon`,type:`ComponentType<{ className?: string }>`,description:`Значок пункта. Бери семантические значки пакета.`},{name:`isActive`,type:`boolean`,defaultValue:`false`,description:`Выбранный пункт.`},{name:`tooltip`,type:`string`,description:`Подсказка в свёрнутой полосе значков.`}]},{name:`SidebarMenuAction`,props:[{name:`showOnHover`,type:`boolean`,defaultValue:`false`,description:`Кнопка справа от пункта видна при наведении.`}]},{name:`useSidebar`,props:[{name:`open`,type:`boolean`,description:`Панель раскрыта.`},{name:`state`,type:`"expanded" | "collapsed"`,description:`Состояние для стилей.`},{name:`toggleSidebar`,type:`() => void`,description:`Раскрывает или сворачивает панель, на узком окне открывает лист.`},{name:`isMobile`,type:`boolean`,description:`Окно уже порога мобильного режима.`}]}]}),related:(0,u.jsx)(o,{links:[{href:`/screens/shell`,label:`WorkspaceShell и WorkspacePage`,description:`Навигация приложения с иконками, счётчиками и меню действий.`},{href:`/examples/sprint/registry`,label:`Реестр задач`,description:`Экран Sprint с боковой навигацией.`},{href:`/components/tooltip`,label:`Tooltip`,description:`Подсказки пунктов свёрнутой панели.`}]}),children:(0,u.jsx)(r,{id:`parts`,label:`Остальные части`,description:`Когда панели нужны поиск, действие у группы или у пункта, заглушка загрузки и разделитель. SidebarInset, SidebarRail и SidebarTrigger закрывают остальные случаи.`,children:(0,u.jsx)(i,{code:`<SidebarHeader><SidebarInput placeholder="Найти задачу" aria-label="Найти задачу" /></SidebarHeader>
<SidebarSeparator />
<SidebarGroup>
  <SidebarGroupLabel>Избранное</SidebarGroupLabel>
  <SidebarGroupAction aria-label="Добавить в избранное"><AddIcon /></SidebarGroupAction>
  <SidebarGroupContent>
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton label="Входящие" icon={ListIcon} />
        <SidebarMenuAction showOnHover aria-label="Другие действия"><MoreIcon /></SidebarMenuAction>
      </SidebarMenuItem>
      <SidebarMenuItem aria-hidden="true"><SidebarMenuSkeleton showIcon /></SidebarMenuItem>
    </SidebarMenu>
  </SidebarGroupContent>
</SidebarGroup>`,children:(0,u.jsx)(a,{})})})})}export{d as default};