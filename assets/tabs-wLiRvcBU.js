import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{l as t}from"./chunk-NA6PDP3U-Cjn5wWWb.js";import{c as n,d as r,l as i,u as a}from"./chunk-A5ATJWCD-D5u-P5Xy.js";import{Fn as o,M as s,Ot as c,St as l,pt as u,rt as d,tn as f}from"./index-DnsCB0LC.js";var p=e();function m(){return(0,p.jsxs)(l,{kind:`component`,route:`/components/tabs`,description:`Вкладки переключают панели внутри экрана: обзор, история, настройки. Видна панель активной вкладки.`,usage:(0,p.jsx)(o,{use:[`Несколько панелей одного экрана, из которых видна одна: обзор, история, настройки.`],avoid:[{text:`Режим отображения тех же данных.`,instead:{href:`/components/toggle-group`,label:`ToggleGroup`}},{text:`Второстепенные панели под записью.`,instead:{href:`/components/disclosure-button-group`,label:`DisclosureButtonGroup`}},{text:`Переход между страницами: навигация оболочки.`,instead:{href:`/screens/shell`,label:`WorkspaceShell и WorkspacePage`}}]}),example:(0,p.jsx)(d,{layout:`block`,code:`<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Обзор</TabsTrigger>
    <TabsTrigger value="timeline">Хронология</TabsTrigger>
    <TabsTrigger value="postmortem">Разбор</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">Серьёзность, затронутые сервисы и текущий статус.</TabsContent>
  <TabsContent value="timeline">События от обнаружения до решения.</TabsContent>
  <TabsContent value="postmortem">Причина, действия и меры предотвращения.</TabsContent>
</Tabs>`,gpuiCode:`use anikin_lab_gpui::design_system::{DsTabItem, DsTabs, DsTabsVariant};

let tabs = DsTabs::new("incident-tabs")
    .variant(DsTabsVariant::Fill)
    .with_tab(DsTabItem::new("overview", "Обзор"))
    .with_tab(DsTabItem::new("timeline", "Хронология"))
    .with_tab(DsTabItem::new("postmortem", "Разбор"))
    .active("overview")
    .on_change(|value, _window, _cx| {
        let _ = value;
    });`,children:(0,p.jsxs)(n,{defaultValue:`overview`,children:[(0,p.jsxs)(a,{children:[(0,p.jsx)(r,{value:`overview`,children:`Обзор`}),(0,p.jsx)(r,{value:`timeline`,children:`Хронология`}),(0,p.jsx)(r,{value:`postmortem`,children:`Разбор`})]}),(0,p.jsx)(i,{value:`overview`,children:(0,p.jsx)(t,{children:`Серьёзность, затронутые сервисы и текущий статус.`})}),(0,p.jsx)(i,{value:`timeline`,children:(0,p.jsx)(t,{children:`События от обнаружения до решения.`})}),(0,p.jsx)(i,{value:`postmortem`,children:(0,p.jsx)(t,{children:`Причина, действия и меры предотвращения.`})})]})}),imports:(0,p.jsx)(u,{from:`@chucky23/design-system/react`,names:[`Tabs`,`TabsList`,`TabsTrigger`,`TabsContent`]}),api:(0,p.jsx)(s,{items:[{name:`Tabs`,props:[{name:`defaultValue`,type:`string`,description:`Вкладка, открытая при первом показе.`},{name:`value`,type:`string`,description:`Активная вкладка в управляемом режиме. Работает вместе с onValueChange.`},{name:`onValueChange`,type:`(value, eventDetails) => void`,description:`Вызывается при смене вкладки.`},{name:`orientation`,type:`"horizontal" | "vertical"`,defaultValue:`"horizontal"`,description:`Направление списка вкладок.`}]},{name:`TabsList`,props:[{name:`variant`,type:`"default" | "line"`,defaultValue:`"default"`,description:`В теме Anikin оба варианта выделяют активную вкладку заливкой. Вариант line добавляет рамку под списком. TabsList создаёт TabsIndicator для line, тема скрывает его.`}]},{name:`TabsTrigger`,props:[{name:`value`,type:`string`,required:!0,description:`Связывает кнопку с панелью TabsContent.`}]},{name:`TabsContent`,props:[{name:`value`,type:`string`,required:!0,description:`Панель, которую открывает TabsTrigger с тем же value.`}]}]}),related:(0,p.jsx)(c,{links:[{href:`/components/breadcrumb`,label:`Breadcrumb`,description:`Показывает место страницы в иерархии.`},{href:`/components/toggle-group`,label:`ToggleGroup`,description:`Переключает режим просмотра без панелей.`},{href:`/screens/shell-bars`,label:`Панели оболочки`,description:`Вкладки открытых документов — WorkspaceTabs.`}]}),children:[(0,p.jsx)(f,{id:`line`,label:`Вариант line`,description:`Когда вкладки стоят над блоком внутри страницы, например образец и код. Тонкая рамка проходит под всем списком.`,children:(0,p.jsx)(d,{layout:`block`,code:`import { Tabs, TabsContent, TabsList, TabsTrigger } from "@chucky23/design-system/react"

<Tabs defaultValue="preview">
  <TabsList variant="line">
    <TabsTrigger value="preview">Образец</TabsTrigger>
    <TabsTrigger value="code">Код</TabsTrigger>
  </TabsList>
  <TabsContent value="preview">Компонент в рабочем виде.</TabsContent>
  <TabsContent value="code">Исходный код образца.</TabsContent>
</Tabs>`,children:(0,p.jsxs)(n,{defaultValue:`preview`,children:[(0,p.jsxs)(a,{variant:`line`,children:[(0,p.jsx)(r,{value:`preview`,children:`Образец`}),(0,p.jsx)(r,{value:`code`,children:`Код`})]}),(0,p.jsx)(i,{value:`preview`,children:(0,p.jsx)(t,{children:`Компонент в рабочем виде.`})}),(0,p.jsx)(i,{value:`code`,children:(0,p.jsx)(t,{children:`Исходный код образца.`})})]})})}),(0,p.jsx)(f,{id:`vertical`,label:`Вертикальные вкладки`,description:`Когда разделов много или их названия длинные, например страница настроек проекта.`,children:(0,p.jsx)(d,{layout:`block`,code:`import { Tabs, TabsContent, TabsList, TabsTrigger } from "@chucky23/design-system/react"

<Tabs defaultValue="general" orientation="vertical">
  <TabsList>
    <TabsTrigger value="general">Общие</TabsTrigger>
    <TabsTrigger value="access">Доступ</TabsTrigger>
  </TabsList>
  <TabsContent value="general">Название и описание проекта.</TabsContent>
  <TabsContent value="access">Участники и роли.</TabsContent>
</Tabs>`,children:(0,p.jsxs)(n,{defaultValue:`general`,orientation:`vertical`,children:[(0,p.jsxs)(a,{children:[(0,p.jsx)(r,{value:`general`,children:`Общие`}),(0,p.jsx)(r,{value:`access`,children:`Доступ`})]}),(0,p.jsx)(i,{value:`general`,children:(0,p.jsx)(t,{children:`Название и описание проекта.`})}),(0,p.jsx)(i,{value:`access`,children:(0,p.jsx)(t,{children:`Участники и роли.`})})]})})})]})}export{m as default};