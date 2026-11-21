import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{A as t,Ut as n,X as r,_t as i,dt as a,rt as o,vn as s,yt as c}from"./index-BX5CNJVf.js";var l=e();function u(){return(0,l.jsxs)(a,{kind:`component`,route:`/components/resizable`,description:`Панели с перетаскиваемым разделителем: человек сам решает, что важнее сейчас, список или подробности. Требует пакет react-resizable-panels.`,usage:(0,l.jsx)(s,{use:[`Две и более панели, ширину которых пользователь меняет сам: список и деталь, код и превью.`],avoid:[{text:`Инспектор типа экрана: раскладку задаёт тип.`,instead:{href:`/screens/registry`,label:`Реестр`}},{text:`Панель, которая открывается на время.`,instead:{href:`/components/sheet`,label:`Sheet`}}]}),example:(0,l.jsx)(r,{layout:`block`,code:`<ResizablePanelGroup orientation="horizontal">
  <ResizablePanel defaultSize="30%" minSize="15%">Список</ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize="70%" minSize="15%">Подробности</ResizablePanel>
</ResizablePanelGroup>`,children:(0,l.jsx)(c,{withHandle:!0})}),imports:(0,l.jsx)(o,{from:`@chucky23/design-system/extended/resizable`,names:[`ResizablePanelGroup`,`ResizablePanel`,`ResizableHandle`]}),api:(0,l.jsx)(t,{items:[{name:`ResizablePanelGroup`,props:[{name:`orientation`,type:`"horizontal" | "vertical"`,defaultValue:`"horizontal"`,description:`Направление раскладки панелей.`}]},{name:`ResizablePanel`,props:[{name:`defaultSize`,type:`number | string`,defaultValue:`поровну`,description:`Начальный размер. Число — пиксели, строка с единицей: "30%", px, rem, em, vh, vw.`},{name:`minSize`,type:`number | string`,defaultValue:`"0%"`,description:`Наименьший размер в тех же единицах.`},{name:`maxSize`,type:`number | string`,defaultValue:`"100%"`,description:`Наибольший размер в тех же единицах.`}]},{name:`ResizableHandle`,props:[{name:`withHandle`,type:`boolean`,defaultValue:`false`,description:`Захват в середине разделителя.`}]}]}),related:(0,l.jsx)(i,{links:[{href:`/components/sidebar`,label:`Sidebar`,description:`Боковая панель оболочки со своей шириной.`},{href:`/screens/registry`,label:`Реестр`,description:`Список и инспектор рядом.`},{href:`/components/scroll-area`,label:`ScrollArea`,description:`Прокрутка внутри панели.`}]}),children:[(0,l.jsx)(n,{id:`vertical`,label:`Вертикальные панели`,description:`Когда панели делят высоту, например код и терминал: orientation="vertical" ставит их друг над другом.`,children:(0,l.jsx)(r,{layout:`block`,code:`<ResizablePanelGroup orientation="vertical">
  <ResizablePanel defaultSize="40%" minSize="15%">Список</ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize="60%" minSize="15%">Подробности</ResizablePanel>
</ResizablePanelGroup>`,children:(0,l.jsx)(c,{layout:`vertical`})})}),(0,l.jsx)(n,{id:`nested`,label:`Вложенные группы`,description:`Когда нужна раскладка редактора: файлы слева, код и терминал справа. Вертикальная группа стоит внутри горизонтальной.`,children:(0,l.jsx)(r,{layout:`block`,code:`<ResizablePanelGroup orientation="horizontal">
  <ResizablePanel defaultSize="25%" minSize="15%">Файлы</ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize="75%">
    <ResizablePanelGroup orientation="vertical">
      <ResizablePanel defaultSize="70%">Редактор</ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize="30%" minSize="10%">Терминал</ResizablePanel>
    </ResizablePanelGroup>
  </ResizablePanel>
</ResizablePanelGroup>`,children:(0,l.jsx)(c,{layout:`ide`})})})]})}export{u as default};