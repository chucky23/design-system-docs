import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{An as t,Br as n,Fr as r,Hr as i,Ir as a,Lr as o,Mr as s,Rr as c,Vr as l,as as u,zr as d}from"./useLabelableId-C6GEk9LR.js";import{A as f,Er as p,Kt as m,Ut as h,X as g,_t as _,dt as v,rt as y,vn as b}from"./index-BX5CNJVf.js";var x=e();function S(){return(0,x.jsxs)(v,{kind:`component`,route:`/components/sheet`,description:`Панель у края окна для длинной формы, которой тесно в диалоге. Пока она открыта, страница затемнена и недоступна.`,usage:(0,x.jsx)(b,{use:[`Форма или задача вне коллекции, при которой экран остаётся виден.`,`Длинная форма, которой тесно в диалоге.`],avoid:[{text:`Свойства выбранной записи реестра: инспектор типа экрана.`,instead:{href:`/screens/registry`,label:`Реестр`}},{text:`Короткое подтверждение.`,instead:{href:`/components/alert-dialog`,label:`AlertDialog`}}]}),example:(0,x.jsx)(g,{layout:`block`,code:`<Sheet>
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
</Sheet>`,children:(0,x.jsx)(m,{})}),imports:(0,x.jsx)(y,{code:`import { layoutClassName } from "@chucky23/design-system"
import {
  Button, Input, Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger,
} from "@chucky23/design-system/react"
import { FieldRecipe } from "@chucky23/design-system/recipes/field"`}),api:(0,x.jsx)(f,{items:[{name:`Sheet`,props:[{name:`open`,type:`boolean`,description:`Управляемое состояние, вместе с onOpenChange.`},{name:`defaultOpen`,type:`boolean`,defaultValue:`false`,description:`Начальное состояние без управления.`},{name:`onOpenChange`,type:`(open: boolean) => void`,description:`Вызывается при открытии и закрытии.`},{name:`modal`,type:`boolean`,defaultValue:`true`,description:`Блокирует страницу под панелью и держит фокус внутри.`}]},{name:`SheetContent`,props:[{name:`side`,type:`"top" | "right" | "bottom" | "left"`,defaultValue:`"right"`,description:`Край, с которого выезжает панель.`},{name:`showCloseButton`,type:`boolean`,defaultValue:`true`,description:`Крестик в углу панели.`},{name:`closeLabel`,type:`string`,defaultValue:`"Закрыть"`,description:`Имя крестика для скринридера на языке приложения.`}]},{name:`SheetTrigger, SheetClose`,props:[{name:`render`,type:`ReactElement`,description:`Элемент вместо кнопки по умолчанию: render={<Button />}.`}]}]}),related:(0,x.jsx)(_,{links:[{href:`/components/detail-panel`,label:`DetailPanel`,description:`Панель свойств выбранной сущности на базе Sheet.`},{href:`/components/drawer`,label:`Drawer`,description:`Короткое подтверждение у нижнего края.`},{href:`/components/dialog`,label:`Dialog`,description:`Окно по центру для короткой формы.`},{href:`/screens/registry`,label:`Реестр`,description:`Выбранную строку показывает инспектор экрана, а не Sheet.`}]}),children:[(0,x.jsx)(h,{id:`open`,label:`Открытие по кнопке`,description:`Когда правку запускает кнопка на странице. Поля стоят в теле панели с отступом раскладки px-4: у SheetContent своих отступов нет. В SheetFooter только действия.`,children:(0,x.jsx)(g,{code:`<Sheet>
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
</Sheet>`,children:(0,x.jsxs)(r,{children:[(0,x.jsx)(i,{render:(0,x.jsx)(u,{tone:`neutral`,variant:`outline`}),children:`Править инцидент`}),(0,x.jsxs)(o,{children:[(0,x.jsxs)(n,{children:[(0,x.jsx)(l,{children:`Правка инцидента`}),(0,x.jsx)(c,{children:`Название инцидента.`})]}),(0,x.jsx)(p,{label:`Название`,htmlFor:`sheet-title`,className:t(`px-4`),children:(0,x.jsx)(s,{id:`sheet-title`,defaultValue:`Таймаут шлюза API`})}),(0,x.jsxs)(d,{children:[(0,x.jsx)(a,{render:(0,x.jsx)(u,{tone:`neutral`,variant:`outline`}),children:`Отменить`}),(0,x.jsx)(a,{render:(0,x.jsx)(u,{}),children:`Сохранить`})]})]})]})})}),(0,x.jsx)(h,{id:`sides`,label:`Края`,description:`Когда панель должна стоять у определённого края: фильтры слева, журнал снизу. Боковые панели узкие, верхняя и нижняя тянутся на всю ширину.`,children:(0,x.jsxs)(g,{code:`<Sheet>
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
</Sheet>`,children:[(0,x.jsxs)(r,{children:[(0,x.jsx)(i,{render:(0,x.jsx)(u,{tone:`neutral`,variant:`outline`}),children:`Слева`}),(0,x.jsx)(o,{side:`left`,children:(0,x.jsx)(n,{children:(0,x.jsx)(l,{children:`Фильтры`})})})]}),(0,x.jsxs)(r,{children:[(0,x.jsx)(i,{render:(0,x.jsx)(u,{tone:`neutral`,variant:`outline`}),children:`Снизу`}),(0,x.jsx)(o,{side:`bottom`,children:(0,x.jsx)(n,{children:(0,x.jsx)(l,{children:`Журнал действий`})})})]})]})})]})}export{S as default};