import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{d as t,f as n,g as r,h as i,m as a,p as o,u as s}from"./chunk-NA6PDP3U-Cjn5wWWb.js";import{Fn as c,M as l,Ot as u,St as d,pt as f,rt as p,tn as m}from"./index-DnsCB0LC.js";var h=e();function g(){return(0,h.jsxs)(d,{kind:`component`,route:`/components/breadcrumb`,description:`Показывает путь от корня до текущей страницы, чтобы читатель вернулся на уровень выше. Бери его на странице вне страничной оболочки.`,usage:(0,h.jsx)(c,{use:[`Путь к странице вне страничной оболочки.`],avoid:[{text:`Крошки страницы приложения: их показывает WorkspacePage.`,instead:{href:`/screens/shell`,label:`WorkspaceShell и WorkspacePage`}},{text:`Переключение разделов одного уровня.`,instead:{href:`/components/tabs`,label:`Tabs`}}]}),example:(0,h.jsx)(p,{layout:`stack`,code:`<Breadcrumb aria-label="Путь инцидента">
  <BreadcrumbList>
    <BreadcrumbItem><BreadcrumbLink href="/">Обзор</BreadcrumbLink></BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem><BreadcrumbLink href="/incidents">Инциденты</BreadcrumbLink></BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem><BreadcrumbPage>INC-4012</BreadcrumbPage></BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`,gpuiCode:`use anikin_lab_gpui::prelude::*;

let trail = DsBreadcrumb::new("incident-path")
    .item(DsBreadcrumbItem::new("overview", "Обзор"))
    .item(DsBreadcrumbItem::new("incidents", "Инциденты"))
    .item(DsBreadcrumbItem::current("inc-4012", "INC-4012"))
    .max_visible(4)
    .on_select(|id, _window, _cx| {
        let _ = id;
    });`,children:(0,h.jsx)(s,{"aria-label":`Путь инцидента`,children:(0,h.jsxs)(a,{children:[(0,h.jsx)(n,{children:(0,h.jsx)(o,{href:`#`,children:`Обзор`})}),(0,h.jsx)(r,{}),(0,h.jsx)(n,{children:(0,h.jsx)(o,{href:`#`,children:`Инциденты`})}),(0,h.jsx)(r,{}),(0,h.jsx)(n,{children:(0,h.jsx)(i,{children:`INC-4012`})})]})})}),imports:(0,h.jsx)(f,{from:`@chucky23/design-system/react`,names:[`Breadcrumb`,`BreadcrumbList`,`BreadcrumbItem`,`BreadcrumbLink`,`BreadcrumbPage`,`BreadcrumbSeparator`,`BreadcrumbEllipsis`]}),api:(0,h.jsx)(l,{items:[{name:`Breadcrumb`,props:[{name:`aria-label`,type:`string`,description:`Имя навигации для скринридера.`}]},{name:`BreadcrumbList`,props:[{name:`children`,type:`BreadcrumbItem`,description:`Звенья и разделители между ними.`}]},{name:`BreadcrumbItem`,props:[{name:`children`,type:`ReactNode`,description:`Одно звено: BreadcrumbLink, BreadcrumbPage или BreadcrumbEllipsis.`}]},{name:`BreadcrumbLink`,props:[{name:`href`,type:`string`,description:`Адрес звена. Для роутера передай свой элемент через render.`}]},{name:`BreadcrumbPage`,props:[{name:`children`,type:`ReactNode`,description:`Текущая страница: не ссылка, aria-current="page".`}]},{name:`BreadcrumbSeparator`,props:[{name:`children`,type:`ReactNode`,defaultValue:`ChevronRight`,description:`Значок между звеньями.`}]},{name:`BreadcrumbEllipsis`,props:[{name:`children`,type:`ReactNode`,defaultValue:`…`,description:`Скрытые звенья длинного пути.`}]}]}),related:(0,h.jsx)(u,{links:[{href:`/components/tabs`,label:`Tabs`,description:`Переключает контексты внутри страницы.`},{href:`/screens/shell`,label:`WorkspaceShell и WorkspacePage`,description:`Крошки страницы задаёт проп breadcrumbs у WorkspacePage.`}]}),children:[(0,h.jsx)(m,{id:`current`,label:`Две ступени`,description:`Когда страница лежит на втором уровне: родитель и текущая страница.`,children:(0,h.jsx)(p,{layout:`stack`,code:`<Breadcrumb aria-label="Путь сервиса">
  <BreadcrumbList>
    <BreadcrumbItem><BreadcrumbLink href="/services">Сервисы</BreadcrumbLink></BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem><BreadcrumbPage>api-gateway</BreadcrumbPage></BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`,children:(0,h.jsx)(s,{"aria-label":`Путь сервиса`,children:(0,h.jsxs)(a,{children:[(0,h.jsx)(n,{children:(0,h.jsx)(o,{href:`#`,children:`Сервисы`})}),(0,h.jsx)(r,{}),(0,h.jsx)(n,{children:(0,h.jsx)(i,{children:`api-gateway`})})]})})})}),(0,h.jsx)(m,{id:`ellipsis`,label:`Длинный путь`,description:`Когда путь не помещается в строку: BreadcrumbEllipsis прячет средние звенья.`,children:(0,h.jsx)(p,{layout:`stack`,code:`<Breadcrumb aria-label="Путь задачи">
  <BreadcrumbList>
    <BreadcrumbItem><BreadcrumbLink href="/">Обзор</BreadcrumbLink></BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem><BreadcrumbEllipsis /></BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem><BreadcrumbLink href="/epic">Миграция платформы</BreadcrumbLink></BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem><BreadcrumbPage>Перенос авторизации</BreadcrumbPage></BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`,children:(0,h.jsx)(s,{"aria-label":`Путь задачи`,children:(0,h.jsxs)(a,{children:[(0,h.jsx)(n,{children:(0,h.jsx)(o,{href:`#`,children:`Обзор`})}),(0,h.jsx)(r,{}),(0,h.jsx)(n,{children:(0,h.jsx)(t,{})}),(0,h.jsx)(r,{}),(0,h.jsx)(n,{children:(0,h.jsx)(o,{href:`#`,children:`Миграция платформы`})}),(0,h.jsx)(r,{}),(0,h.jsx)(n,{children:(0,h.jsx)(i,{children:`Перенос авторизации`})})]})})})})]})}export{g as default};