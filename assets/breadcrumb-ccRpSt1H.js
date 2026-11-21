import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{a as t,c as n,d as r,l as i,o as a,s as o,u as s}from"./chunk-CZZ4CD4Q-C_o4ee41.js";import{A as c,Ut as l,X as u,_t as d,dt as f,rt as p,vn as m}from"./index-BX5CNJVf.js";var h=e();function g(){return(0,h.jsxs)(f,{kind:`component`,route:`/components/breadcrumb`,description:`Показывает путь от корня до текущей страницы, чтобы читатель вернулся на уровень выше. Бери его на странице вне страничной оболочки.`,usage:(0,h.jsx)(m,{use:[`Путь к странице вне страничной оболочки.`],avoid:[{text:`Крошки страницы приложения: их показывает WorkspacePage.`,instead:{href:`/screens/shell`,label:`WorkspaceShell и WorkspacePage`}},{text:`Переключение разделов одного уровня.`,instead:{href:`/components/tabs`,label:`Tabs`}}]}),example:(0,h.jsx)(u,{layout:`stack`,code:`<Breadcrumb aria-label="Путь инцидента">
  <BreadcrumbList>
    <BreadcrumbItem><BreadcrumbLink href="/">Обзор</BreadcrumbLink></BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem><BreadcrumbLink href="/incidents">Инциденты</BreadcrumbLink></BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem><BreadcrumbPage>INC-4012</BreadcrumbPage></BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`,children:(0,h.jsx)(t,{"aria-label":`Путь инцидента`,children:(0,h.jsxs)(i,{children:[(0,h.jsx)(o,{children:(0,h.jsx)(n,{href:`#`,children:`Обзор`})}),(0,h.jsx)(r,{}),(0,h.jsx)(o,{children:(0,h.jsx)(n,{href:`#`,children:`Инциденты`})}),(0,h.jsx)(r,{}),(0,h.jsx)(o,{children:(0,h.jsx)(s,{children:`INC-4012`})})]})})}),imports:(0,h.jsx)(p,{from:`@chucky23/design-system/react`,names:[`Breadcrumb`,`BreadcrumbList`,`BreadcrumbItem`,`BreadcrumbLink`,`BreadcrumbPage`,`BreadcrumbSeparator`,`BreadcrumbEllipsis`]}),api:(0,h.jsx)(c,{items:[{name:`Breadcrumb`,props:[{name:`aria-label`,type:`string`,description:`Имя навигации для скринридера.`}]},{name:`BreadcrumbList`,props:[{name:`children`,type:`BreadcrumbItem`,description:`Звенья и разделители между ними.`}]},{name:`BreadcrumbItem`,props:[{name:`children`,type:`ReactNode`,description:`Одно звено: BreadcrumbLink, BreadcrumbPage или BreadcrumbEllipsis.`}]},{name:`BreadcrumbLink`,props:[{name:`href`,type:`string`,description:`Адрес звена. Для роутера передай свой элемент через render.`}]},{name:`BreadcrumbPage`,props:[{name:`children`,type:`ReactNode`,description:`Текущая страница: не ссылка, aria-current="page".`}]},{name:`BreadcrumbSeparator`,props:[{name:`children`,type:`ReactNode`,defaultValue:`ChevronRight`,description:`Значок между звеньями.`}]},{name:`BreadcrumbEllipsis`,props:[{name:`children`,type:`ReactNode`,defaultValue:`…`,description:`Скрытые звенья длинного пути.`}]}]}),related:(0,h.jsx)(d,{links:[{href:`/components/tabs`,label:`Tabs`,description:`Переключает контексты внутри страницы.`},{href:`/screens/shell`,label:`WorkspaceShell и WorkspacePage`,description:`Крошки страницы задаёт проп breadcrumbs у WorkspacePage.`}]}),children:[(0,h.jsx)(l,{id:`current`,label:`Две ступени`,description:`Когда страница лежит на втором уровне: родитель и текущая страница.`,children:(0,h.jsx)(u,{layout:`stack`,code:`<Breadcrumb aria-label="Путь сервиса">
  <BreadcrumbList>
    <BreadcrumbItem><BreadcrumbLink href="/services">Сервисы</BreadcrumbLink></BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem><BreadcrumbPage>api-gateway</BreadcrumbPage></BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`,children:(0,h.jsx)(t,{"aria-label":`Путь сервиса`,children:(0,h.jsxs)(i,{children:[(0,h.jsx)(o,{children:(0,h.jsx)(n,{href:`#`,children:`Сервисы`})}),(0,h.jsx)(r,{}),(0,h.jsx)(o,{children:(0,h.jsx)(s,{children:`api-gateway`})})]})})})}),(0,h.jsx)(l,{id:`ellipsis`,label:`Длинный путь`,description:`Когда путь не помещается в строку: BreadcrumbEllipsis прячет средние звенья.`,children:(0,h.jsx)(u,{layout:`stack`,code:`<Breadcrumb aria-label="Путь задачи">
  <BreadcrumbList>
    <BreadcrumbItem><BreadcrumbLink href="/">Обзор</BreadcrumbLink></BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem><BreadcrumbEllipsis /></BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem><BreadcrumbLink href="/epic">Миграция платформы</BreadcrumbLink></BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem><BreadcrumbPage>Перенос авторизации</BreadcrumbPage></BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`,children:(0,h.jsx)(t,{"aria-label":`Путь задачи`,children:(0,h.jsxs)(i,{children:[(0,h.jsx)(o,{children:(0,h.jsx)(n,{href:`#`,children:`Обзор`})}),(0,h.jsx)(r,{}),(0,h.jsx)(o,{children:(0,h.jsx)(a,{})}),(0,h.jsx)(r,{}),(0,h.jsx)(o,{children:(0,h.jsx)(n,{href:`#`,children:`Миграция платформы`})}),(0,h.jsx)(r,{}),(0,h.jsx)(o,{children:(0,h.jsx)(s,{children:`Перенос авторизации`})})]})})})})]})}export{g as default};