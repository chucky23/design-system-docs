import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{At as t,Fn as n,M as r,Ot as i,St as a,pt as o,rt as s,tn as c}from"./index-DnsCB0LC.js";var l=e();function u(){return(0,l.jsxs)(a,{kind:`component`,route:`/components/resizable`,description:`Панели с перетаскиваемым разделителем: человек сам решает, что важнее сейчас, список или подробности. Требует пакет react-resizable-panels.`,usage:(0,l.jsx)(n,{use:[`Две и более панели, ширину которых пользователь меняет сам: список и деталь, код и превью.`],avoid:[{text:`Инспектор типа экрана: раскладку задаёт тип.`,instead:{href:`/screens/registry`,label:`Реестр`}},{text:`Панель, которая открывается на время.`,instead:{href:`/components/sheet`,label:`Sheet`}}]}),example:(0,l.jsx)(s,{layout:`block`,code:`<ResizablePanelGroup orientation="horizontal">
  <ResizablePanel defaultSize="30%" minSize="15%">Список</ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize="70%" minSize="15%">Подробности</ResizablePanel>
</ResizablePanelGroup>`,gpuiCode:`use std::cell::RefCell;
use std::rc::Rc;
use anikin_lab_gpui::prelude::*;
use gpui::{div, ParentElement as _};

let state = Rc::new(RefCell::new(DsResizableState::new(vec![0.3, 0.7])));
let group = DsResizableGroup::new("split-view")
    .axis(DsResizableAxis::Horizontal)
    .state(state)
    .panel(DsResizablePanel::new("list").size(0.3).min_size(0.15).child(div()))
    .panel(DsResizablePanel::new("detail").size(0.7).min_size(0.15).child(div()))
    .on_resize(|sizes, _window, _cx| {
        let _ = sizes;
    });`,children:(0,l.jsx)(t,{withHandle:!0})}),imports:(0,l.jsx)(o,{from:`@chucky23/design-system/extended/resizable`,names:[`ResizablePanelGroup`,`ResizablePanel`,`ResizableHandle`]}),api:(0,l.jsx)(r,{items:[{name:`ResizablePanelGroup`,props:[{name:`orientation`,type:`"horizontal" | "vertical"`,defaultValue:`"horizontal"`,description:`Направление раскладки панелей.`}]},{name:`ResizablePanel`,props:[{name:`defaultSize`,type:`number | string`,defaultValue:`поровну`,description:`Начальный размер. Число — пиксели, строка с единицей: "30%", px, rem, em, vh, vw.`},{name:`minSize`,type:`number | string`,defaultValue:`"0%"`,description:`Наименьший размер в тех же единицах.`},{name:`maxSize`,type:`number | string`,defaultValue:`"100%"`,description:`Наибольший размер в тех же единицах.`}]},{name:`ResizableHandle`,props:[{name:`withHandle`,type:`boolean`,defaultValue:`false`,description:`Захват в середине разделителя.`}]}]}),related:(0,l.jsx)(i,{links:[{href:`/components/sidebar`,label:`Sidebar`,description:`Боковая панель оболочки со своей шириной.`},{href:`/screens/registry`,label:`Реестр`,description:`Список и инспектор рядом.`},{href:`/components/scroll-area`,label:`ScrollArea`,description:`Прокрутка внутри панели.`}]}),children:[(0,l.jsx)(c,{id:`vertical`,label:`Вертикальные панели`,description:`Когда панели делят высоту, например код и терминал: orientation="vertical" ставит их друг над другом.`,children:(0,l.jsx)(s,{layout:`block`,code:`<ResizablePanelGroup orientation="vertical">
  <ResizablePanel defaultSize="40%" minSize="15%">Список</ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize="60%" minSize="15%">Подробности</ResizablePanel>
</ResizablePanelGroup>`,children:(0,l.jsx)(t,{layout:`vertical`})})}),(0,l.jsx)(c,{id:`nested`,label:`Вложенные группы`,description:`Когда нужна раскладка редактора: файлы слева, код и терминал справа. Вертикальная группа стоит внутри горизонтальной.`,children:(0,l.jsx)(s,{layout:`block`,code:`<ResizablePanelGroup orientation="horizontal">
  <ResizablePanel defaultSize="25%" minSize="15%">Файлы</ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize="75%">
    <ResizablePanelGroup orientation="vertical">
      <ResizablePanel defaultSize="70%">Редактор</ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize="30%" minSize="10%">Терминал</ResizablePanel>
    </ResizablePanelGroup>
  </ResizablePanel>
</ResizablePanelGroup>`,children:(0,l.jsx)(t,{layout:`ide`})})})]})}export{u as default};