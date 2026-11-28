import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{$r as t,Qr as n,Rn as r,Xr as i,Zr as a,ei as o,ni as s,qr as c,ri as l,ti as u,ws as d}from"./useLabelableId-Ck49MOKz.js";import{v as f}from"./chunk-L52MJC5L-Da5AAZeo.js";import{Fn as p,M as m,Ot as h,St as g,pt as _,rt as v,sn as y,tn as b}from"./index-DnsCB0LC.js";var x=e();function S(){return(0,x.jsxs)(g,{kind:`component`,route:`/components/sheet`,description:`Панель у края окна для длинной формы, которой тесно в диалоге. Пока она открыта, страница затемнена и недоступна.`,usage:(0,x.jsx)(p,{use:[`Форма или задача вне коллекции, при которой экран остаётся виден.`,`Длинная форма, которой тесно в диалоге.`],avoid:[{text:`Свойства выбранной записи реестра: инспектор типа экрана.`,instead:{href:`/screens/registry`,label:`Реестр`}},{text:`Короткое подтверждение.`,instead:{href:`/components/alert-dialog`,label:`AlertDialog`}}]}),example:(0,x.jsx)(v,{layout:`block`,code:`<Sheet>
  <SheetTrigger render={<Button />}>Править инцидент</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Правка инцидента</SheetTitle>
      <SheetDescription>Название и командир.</SheetDescription>
    </SheetHeader>
    <FieldRecipe label="Название" htmlFor="title" className={layoutClassName("px-4")}>
      <Input id="title" defaultValue="Таймаут шлюза API" />
    </FieldRecipe>
    <FieldRecipe label="Командир" htmlFor="owner" className={layoutClassName("px-4")}>
      <Input id="owner" defaultValue="@alice" />
    </FieldRecipe>
    <SheetFooter>
      <SheetClose render={<Button tone="neutral" variant="outline" />}>Отменить</SheetClose>
      <SheetClose render={<Button />}>Сохранить</SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>`,gpuiCode:`use anikin_lab_gpui::prelude::*;
use gpui::div;

let sheet = DsSheet::new("edit-incident")
    .title("Правка инцидента")
    .description("Название и командир.")
    .side(DsSheetSide::Right)
    .body(|_window, _cx| DsField::new("Название").control(div()))
    .footer(|_window, _cx| {
        DsButton::new("save")
            .label("Сохранить")
            .tone(DsButtonTone::Primary)
            .variant(DsButtonVariant::Solid)
    });

DsSheetHost::mount(sheet, restore_focus, window, cx);`,children:(0,x.jsx)(y,{})}),imports:(0,x.jsx)(_,{code:`import { layoutClassName } from "@chucky23/design-system"
import {
  Button, Input, Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger,
} from "@chucky23/design-system/react"
import { FieldRecipe } from "@chucky23/design-system/recipes/field"`}),api:(0,x.jsx)(m,{items:[{name:`Sheet`,props:[{name:`open`,type:`boolean`,description:`Управляемое состояние, вместе с onOpenChange.`},{name:`defaultOpen`,type:`boolean`,defaultValue:`false`,description:`Начальное состояние без управления.`},{name:`onOpenChange`,type:`(open: boolean) => void`,description:`Вызывается при открытии и закрытии.`},{name:`modal`,type:`boolean`,defaultValue:`true`,description:`Блокирует страницу под панелью и держит фокус внутри.`}]},{name:`SheetContent`,props:[{name:`side`,type:`"top" | "right" | "bottom" | "left"`,defaultValue:`"right"`,description:`Край, с которого выезжает панель.`},{name:`showCloseButton`,type:`boolean`,defaultValue:`true`,description:`Крестик в углу панели.`},{name:`closeLabel`,type:`string`,defaultValue:`"Закрыть"`,description:`Имя крестика для скринридера на языке приложения.`}]},{name:`SheetTrigger, SheetClose`,props:[{name:`render`,type:`ReactElement`,description:`Элемент вместо кнопки по умолчанию: render={<Button />}.`}]}]}),related:(0,x.jsx)(h,{links:[{href:`/components/detail-panel`,label:`DetailPanel`,description:`Панель свойств выбранной сущности на базе Sheet.`},{href:`/components/drawer`,label:`Drawer`,description:`Короткое подтверждение у нижнего края.`},{href:`/components/dialog`,label:`Dialog`,description:`Окно по центру для короткой формы.`},{href:`/screens/registry`,label:`Реестр`,description:`Выбранную строку показывает инспектор экрана, а не Sheet.`}]}),children:[(0,x.jsx)(b,{id:`open`,label:`Открытие по кнопке`,description:`Когда правку запускает кнопка на странице. Поля стоят в теле панели с отступом раскладки px-4: у SheetContent своих отступов нет. В SheetFooter только действия.`,children:(0,x.jsx)(v,{code:`<Sheet>
  <SheetTrigger render={<Button tone="neutral" variant="outline" />}>Править инцидент</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Правка инцидента</SheetTitle>
      <SheetDescription>Название инцидента.</SheetDescription>
    </SheetHeader>
    <FieldRecipe label="Название" htmlFor="sheet-title" className={layoutClassName("px-4")}>
      <Input id="sheet-title" defaultValue="Таймаут шлюза API" />
    </FieldRecipe>
    <SheetFooter>
      <SheetClose render={<Button tone="neutral" variant="outline" />}>Отменить</SheetClose>
      <SheetClose render={<Button />}>Сохранить</SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>`,children:(0,x.jsxs)(i,{children:[(0,x.jsx)(l,{render:(0,x.jsx)(d,{tone:`neutral`,variant:`outline`}),children:`Править инцидент`}),(0,x.jsxs)(n,{children:[(0,x.jsxs)(u,{children:[(0,x.jsx)(s,{children:`Правка инцидента`}),(0,x.jsx)(t,{children:`Название инцидента.`})]}),(0,x.jsx)(f,{label:`Название`,htmlFor:`sheet-title`,className:r(`px-4`),children:(0,x.jsx)(c,{id:`sheet-title`,defaultValue:`Таймаут шлюза API`})}),(0,x.jsxs)(o,{children:[(0,x.jsx)(a,{render:(0,x.jsx)(d,{tone:`neutral`,variant:`outline`}),children:`Отменить`}),(0,x.jsx)(a,{render:(0,x.jsx)(d,{}),children:`Сохранить`})]})]})]})})}),(0,x.jsx)(b,{id:`sides`,label:`Края`,description:`Когда панель должна стоять у определённого края: фильтры слева, журнал снизу. Боковые панели узкие, верхняя и нижняя тянутся на всю ширину.`,children:(0,x.jsxs)(v,{code:`<Sheet>
  <SheetTrigger render={<Button tone="neutral" variant="outline" />}>Слева</SheetTrigger>
  <SheetContent side="left">
    <SheetHeader><SheetTitle>Фильтры</SheetTitle></SheetHeader>
  </SheetContent>
</Sheet>
<Sheet>
  <SheetTrigger render={<Button tone="neutral" variant="outline" />}>Снизу</SheetTrigger>
  <SheetContent side="bottom">
    <SheetHeader><SheetTitle>Журнал действий</SheetTitle></SheetHeader>
  </SheetContent>
</Sheet>`,children:[(0,x.jsxs)(i,{children:[(0,x.jsx)(l,{render:(0,x.jsx)(d,{tone:`neutral`,variant:`outline`}),children:`Слева`}),(0,x.jsx)(n,{side:`left`,children:(0,x.jsx)(u,{children:(0,x.jsx)(s,{children:`Фильтры`})})})]}),(0,x.jsxs)(i,{children:[(0,x.jsx)(l,{render:(0,x.jsx)(d,{tone:`neutral`,variant:`outline`}),children:`Снизу`}),(0,x.jsx)(n,{side:`bottom`,children:(0,x.jsx)(u,{children:(0,x.jsx)(s,{children:`Журнал действий`})})})]})]})})]})}export{S as default};