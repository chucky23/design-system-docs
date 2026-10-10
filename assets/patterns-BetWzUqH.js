import{$n as e,E as t,Hn as n,Mo as r,O as i,Vn as a,c as o,cr as s,dn as c,fn as l,kn as u,ln as d,mn as f,nr as p,or as m,p as h,rr as g,sr as _,tr as v}from"./chunk-ZW5N5E5H-C8fDcLjq.js";import{E as y,M as b,bt as x,c as S,j as C,k as w,q as T,r as E,s as D,y as O}from"./docs-CtJuZ0WF.js";import"./index-D3G-KnJA.js";import"./metric-D5lKZRqG.js";import"./data-table-pattern-DnAdkcRQ.js";import"./kpi-grid-DarP06tp.js";import{a as k,d as A,f as j,n as M,o as N,u as P}from"./recipe-mocks-qFM-Zc-i.js";var F=r(),I=[{name:`api-gateway`,region:`us-east-1`,status:`Healthy`,tone:`ok`},{name:`auth-service`,region:`eu-west-1`,status:`Degraded`,tone:`err`},{name:`user-api`,region:`us-east-1`,status:`Healthy`,tone:`ok`},{name:`search-indexer`,region:`us-west-2`,status:`Monitoring`,tone:`warn`}],L=`
.patterns-compact-kpi [data-slot="metric-value"] {
  font-size: var(--text-xs);
  line-height: var(--text-xs--line-height);
}

.patterns-compact-kpi [data-slot="metric-footer"] {
  margin-top: 0.125rem;
}

.patterns-compact-kpi [data-slot="metric-recipe"][data-signal="ok"] {
  border-inline-start-color: var(--signal-ok);
}

.patterns-compact-kpi [data-slot="metric-recipe"][data-signal="warn"] {
  border-inline-start-color: var(--signal-warn);
}

.patterns-compact-kpi [data-slot="metric-recipe"][data-signal="err"] {
  border-inline-start-color: var(--signal-err);
}

.patterns-compact-kpi [data-slot="metric-recipe"][data-signal="info"] {
  border-inline-start-color: var(--signal-info);
}
`;function R(){return(0,F.jsxs)(w,{gap:`lg`,children:[(0,F.jsx)(C,{css:L}),(0,F.jsx)(n,{title:`Patterns`,description:`Повторяющиеся layout-паттерны: page shell, структура секций, metric dashboard, реестр данных и responsive-брейкпойнты.`}),(0,F.jsx)(b,{className:`max-w-prose`,"data-body":!0,children:`Паттерны — готовые каркасы страниц, которые собраны из компонентов системы. Копируй структуру целиком, а не по частям: page shell задаёт положение sidebar, header и footer, dashboard — сетку метрик, registry — связку таблицы с фильтрами. Тонкая настройка внутри ячеек — твоя зона ответственности.`}),(0,F.jsxs)(e,{label:`page shell`,children:[(0,F.jsx)(b,{className:`mb-4`,"data-body":!0,children:`Каркас каждой страницы приложения. CRT-sidebar (210px) слева, header (44px) сверху, footer (26px) снизу.`}),(0,F.jsx)(u,{language:`text`,code:`+---[ 210px ]----+---[ flex-1 ]---------------------------+
| .crt-sidebar   | .header  h-11 border-b                 |
| font: Pixelify |   Breadcrumb  |  actions  |  avatar    |
| icons: pixel   |----------------------------------------|
| radius: 0      |                                        |
|                | .main  flex-1 overflow-y-auto          |
| nav-items:     |   px-6 py-6                            |
|  .crt-item     |                                        |
|  .crt-item     |   [ PageHeader ]                       |
|  .crt-item     |   [ SectionBlock ]                     |
|  .crt-item-    |   [ SectionBlock ]                     |
|    active      |   [ SectionBlock ]                     |
|                |                                        |
|                |----------------------------------------|
| .footer 26px   | .footer  h-[26px] border-t             |
+----------------+----------------------------------------+`})]}),(0,F.jsxs)(e,{label:`section structure`,children:[(0,F.jsx)(E,{title:`PageHeader + SectionBlock`,description:`Каждая страница контента: PageHeader наверху, затем SectionBlock для каждой логической секции.`,code:`<div className="flex flex-col gap-6">
  <PageHeader
    title="Page Title"
    description="One-line description."
  />

  <SectionBlock label="first section">
    {/* Контент секции */}
  </SectionBlock>

  <SectionBlock label="second section">
    {/* Контент секции */}
  </SectionBlock>
</div>`,children:(0,F.jsxs)(w,{className:`w-full`,gap:`md`,children:[(0,F.jsxs)(D,{children:[(0,F.jsx)(D,{className:`section-divider mb-2`,children:(0,F.jsx)(a,{tone:`muted`,as:`h3`,children:`// section`})}),(0,F.jsx)(b,{className:`font-heading text-lg font-bold tracking-tight`,children:`Page Title`}),(0,F.jsx)(b,{className:`mt-1`,"data-body":!0,children:`Description text.`})]}),(0,F.jsxs)(D,{children:[(0,F.jsx)(D,{className:`section-divider mb-2`,children:(0,F.jsx)(a,{tone:`muted`,as:`h3`,children:`section label`})}),(0,F.jsx)(l,{children:(0,F.jsx)(f,{className:`py-3`,children:(0,F.jsx)(b,{as:`span`,className:`text-xs text-muted-foreground`,children:`Section content`})})})]})]})}),(0,F.jsxs)(b,{className:`mt-2 text-xs text-muted-foreground`,"data-body":!0,children:[`Карточка-контейнер для контента секции — каноничный `,(0,F.jsx)(S,{children:`Card`}),` из пакета. Полная документация — `,(0,F.jsx)(O,{href:`/components/cards`,children:`/components/cards`}),`.`]})]}),(0,F.jsxs)(e,{label:`metric dashboard`,children:[(0,F.jsx)(E,{title:`KpiGrid + DataTablePattern`,description:`Канонический dashboard: KpiGrid собирает 4 MetricRecipe сверху, DataTablePattern — таблицу ниже. Никаких raw grid-div и Card-сборок вручную.`,code:`{/* 4 KPI cards через закрытый API */}
<KpiGrid columns={4} ariaLabel="Sprint KPI">
  <MetricRecipe label="Total Tasks" value={68} tone="ok" trend={{ direction: "up", change: "+12%" }} />
  <MetricRecipe label="Completed"   value={38} tone="ok" trend={{ direction: "up", change: "+8%" }} />
  <MetricRecipe label="In Process"  value={22} tone="warn" trend={{ direction: "up", change: "+3" }} />
  <MetricRecipe label="Overdue"     value={8}  tone="err"  trend={{ direction: "down", change: "-2", invert: true }} />
</KpiGrid>

{/* Data table ниже через каркас-паттерн */}
<DataTablePattern>
  <Card>
    <CardContent className="px-0 pb-0">
      <Table>
        <TableHeader>...</TableHeader>
        <TableBody>...</TableBody>
      </Table>
    </CardContent>
  </Card>
</DataTablePattern>`,children:(0,F.jsxs)(w,{className:`patterns-compact-kpi w-full`,gap:`md`,children:[(0,F.jsxs)(i,{columns:4,ariaLabel:`Sprint KPI`,children:[(0,F.jsx)(c,{...A}),(0,F.jsx)(c,{...N}),(0,F.jsx)(c,{...k}),(0,F.jsx)(c,{...P})]}),(0,F.jsx)(h,{children:(0,F.jsx)(l,{children:(0,F.jsx)(f,{className:`px-0 pb-0`,children:(0,F.jsxs)(v,{children:[(0,F.jsx)(_,{children:(0,F.jsxs)(s,{children:[(0,F.jsx)(m,{className:`w-16`,children:`#`}),(0,F.jsx)(m,{children:`Task`}),(0,F.jsx)(m,{children:`Status`})]})}),(0,F.jsx)(p,{children:j.slice(0,3).map(e=>(0,F.jsxs)(s,{children:[(0,F.jsx)(g,{"data-numeric":!0,children:e.id}),(0,F.jsx)(g,{"data-body":!0,children:e.title}),(0,F.jsx)(g,{children:(0,F.jsx)(d,{format:`bracket`,color:M[e.status],size:`sm`,children:e.status})})]},e.id))})]})})})})]})}),(0,F.jsxs)(b,{className:`mt-2 text-xs text-muted-foreground`,"data-body":!0,children:[`Полная документация — `,(0,F.jsx)(O,{href:`/patterns/kpi-grid`,children:`/patterns/kpi-grid`}),`, `,(0,F.jsx)(O,{href:`/recipes/metric`,children:`/recipes/metric`}),`, `,(0,F.jsx)(O,{href:`/patterns/data-table-pattern`,children:`/patterns/data-table-pattern`}),`.`]})]}),(0,F.jsxs)(e,{label:`data registry`,children:[(0,F.jsx)(E,{title:`RegistryPattern + EntityRowRecipe`,description:`Реестр сущностей (services, runbooks, policies): RegistryPattern собирает список, EntityRowRecipe — каждый ряд с title, description и trailing.`,code:`<RegistryPattern>
  {services.map((service) => (
    <EntityRowRecipe
      key={service.name}
      title={service.name}
      description={service.region}
      trailing={<Badge variant={service.tone}>{service.status}</Badge>}
    />
  ))}
</RegistryPattern>`,children:(0,F.jsx)(D,{className:`w-full`,children:(0,F.jsx)(t,{"aria-label":`Services registry`,children:I.map(e=>(0,F.jsx)(x,{title:(0,F.jsx)(b,{as:`span`,className:`font-mono text-xs font-medium`,children:e.name}),description:(0,F.jsx)(b,{as:`span`,className:`font-mono text-2xs text-muted-foreground`,children:e.region}),trailing:(0,F.jsx)(o,{variant:e.tone,children:e.status})},e.name))})})}),(0,F.jsxs)(b,{className:`mt-2 text-xs text-muted-foreground`,"data-body":!0,children:[`Для табличной альтернативы (sortable headers, pagination, rowAccent) — см.`,` `,(0,F.jsx)(O,{href:`/patterns/data-table-pattern`,children:`/patterns/data-table-pattern`}),`.`]})]}),(0,F.jsxs)(e,{label:`responsive breakpoints`,children:[(0,F.jsx)(T,{tokens:[{token:`sm`,value:`640px`,preview:`spacing`},{token:`md`,value:`768px`,preview:`spacing`},{token:`lg`,value:`1024px`,preview:`spacing`},{token:`xl`,value:`1280px`,preview:`spacing`},{token:`2xl`,value:`1536px`,preview:`spacing`}]}),(0,F.jsx)(l,{className:`mt-4`,children:(0,F.jsxs)(f,{className:`p-4`,children:[(0,F.jsx)(b,{className:`mb-3 font-mono text-xs font-medium`,children:`Адаптивные паттерны`}),(0,F.jsx)(w,{gap:`sm`,children:[{pattern:`grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`,desc:`KPI cards: stack на mobile, 2 на tablet, 4 на desktop`},{pattern:`grid-cols-1 md:grid-cols-2`,desc:`Form grid: full-width на mobile, 2 колонки на tablet+`},{pattern:`hidden md:flex`,desc:`Sidebar: скрыт на mobile, показан на tablet+`},{pattern:`grid-cols-4 md:grid-cols-6 lg:grid-cols-8`,desc:`Icon grid: 4 -> 6 -> 8 колонок`}].map(e=>(0,F.jsxs)(y,{gap:`sm`,children:[(0,F.jsx)(S,{signal:`ok`,surface:`none`,className:`shrink-0 border-0 px-0 py-0 font-mono text-2xs`,children:e.pattern}),(0,F.jsx)(b,{as:`span`,className:`text-xs`,"data-body":!0,children:e.desc})]},e.pattern))})]})})]}),(0,F.jsx)(e,{label:`density composition`,children:(0,F.jsx)(u,{language:`text`,code:`Density Zones:

Zone 1: DENSE (inside sections)
  - Table cells: 0.5rem padding
  - Card gap: 0.5rem
  - Badge: 0.375rem padding-inline
  - Font: 11-13px

Zone 2: BREATHING (between sections)
  - SectionBlock margin-bottom: 2rem
  - Content gap: gap-4 (16px)
  - ComponentPreview padding: p-6

Zone 3: SPACIOUS (page level)
  - Main padding: px-6 py-6
  - PageHeader margin-bottom: 2rem
  - Max content width: unconstrained (sidebar limits)

Rule: Dense data inside breathing containers.
      Never uniform density.`})}),(0,F.jsx)(e,{label:`signal color usage`,children:(0,F.jsx)(l,{children:(0,F.jsxs)(f,{className:`p-4`,children:[(0,F.jsx)(b,{className:`mb-3 font-mono text-xs font-medium`,children:`Когда какой signal-цвет`}),(0,F.jsx)(w,{gap:`sm`,children:[{signal:`--signal-ok (teal)`,usage:`Healthy, resolved, success, done, within SLA`},{signal:`--signal-warn (ember)`,usage:`In progress, monitoring, attention, approaching SLA`},{signal:`--signal-err (alert)`,usage:`Active incident, failed, critical, SLA breach`},{signal:`--signal-muted (steel)`,usage:`Inactive, disabled, archived, no data`},{signal:`--signal-ghost (fog)`,usage:`Placeholder, hint, section label, tertiary text`}].map(e=>(0,F.jsxs)(y,{gap:`sm`,children:[(0,F.jsx)(S,{surface:`none`,className:`shrink-0 border-0 px-0 py-0 font-mono text-xs font-medium`,children:e.signal}),(0,F.jsx)(b,{as:`span`,className:`text-xs`,"data-body":!0,children:e.usage})]},e.signal))})]})})})]})}export{R as default};