import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{as as t}from"./useLabelableId-C6GEk9LR.js";import{n}from"./chunk-YSSK2NCY-BYUmzvtW.js";import{A as r,Jn as i,Ut as a,X as o,Xn as s,Yn as c,_t as l,dt as u,nn as d,nt as f,rt as p,vn as m}from"./index-BX5CNJVf.js";var h=e();function g(){return(0,h.jsxs)(u,{kind:`component`,route:`/recipes/hierarchy-row`,description:`Строка дерева: отступ по глубине, переключатель ветки, значок, метаданные и действия. Бери её, когда записи вложены друг в друга: спринт, эпик, задача.`,example:(0,h.jsx)(o,{layout:`block`,code:`function EpicRow() {
  const [expanded, setExpanded] = useState(true)
  return (
    <HierarchyRowRecipe
      title="Вход по ключу доступа"
      depth={1}
      expandable
      expanded={expanded}
      onToggle={() => setExpanded((value) => !value)}
      meta="2 открыто, 3 готово"
      trailing={<InlineMetaRecipe value={5} label="задач" />}
    />
  )
}`,children:(0,h.jsx)(f,{})}),imports:(0,h.jsx)(p,{code:`import { useState } from "react"
import { Button, WorkflowIcon } from "@chucky23/design-system/react"
import { HierarchyRowRecipe } from "@chucky23/design-system/recipes/hierarchy-row"
import { InlineMetaRecipe } from "@chucky23/design-system/recipes/inline-meta"
import { MetaClusterRecipe } from "@chucky23/design-system/recipes/meta-cluster"`}),usage:(0,h.jsx)(m,{placement:[{screen:{href:`/surfaces/tree-surface`,label:`TreeSurface`},slot:`renderItem`}],use:[`Строка дерева спринтов, эпиков и задач с раскрытием веток.`,`Узел с итогом по ветке: сколько задач открыто и сколько готово.`],avoid:[{text:`Плоский список задач без вложенности.`,instead:{href:`/recipes/entity-row`,label:`EntityRowRecipe`}},{text:`Узлы переносят мышью между ветками и меняют порядок.`,instead:{href:`/surfaces/sortable-tree`,label:`SortableTree`}}]}),api:(0,h.jsx)(r,{items:[{name:`HierarchyRowRecipe`,props:[{name:`title`,type:`ReactNode`,required:!0,description:`Название узла, обрезается в одну строку.`},{name:`depth`,type:`number`,defaultValue:`0`,description:`Глубина вложенности: отступ растёт на 12 px за уровень.`},{name:`expandable`,type:`boolean`,defaultValue:`false`,description:`Показывает переключатель ветки. У листа на его месте пустое поле того же размера.`},{name:`expanded`,type:`boolean`,defaultValue:`false`,description:`Ветка раскрыта: стрелка повёрнута, aria-expanded истинно.`},{name:`onToggle`,type:`() => void`,description:`Раскрывает или сворачивает ветку.`},{name:`selected`,type:`boolean`,defaultValue:`false`,description:`Выбранный узел: рамка и фон усилены.`},{name:`leading`,type:`ReactNode`,description:`Значок статуса или типа узла перед названием.`},{name:`meta`,type:`ReactNode`,description:`Строка под названием: итог по ветке или причина блокировки.`},{name:`trailing`,type:`ReactNode`,description:`Действия или счётчик справа.`},{name:`className`,type:`string`,description:`Классы раскладки снаружи: отступы и ширина. Цвет и типографику не меняет.`}]}]}),related:(0,h.jsx)(l,{links:[{href:`/surfaces/tree-surface`,label:`TreeSurface`,description:`Дерево с раскрытием, выбором и клавишами; строки рисует HierarchyRowRecipe.`},{href:`/recipes/entity-row`,label:`EntityRowRecipe`,description:`Плоская строка записи.`}]}),children:[(0,h.jsx)(a,{id:`depth`,label:`Глубина`,description:`Отступ показывает, какой задаче или эпику принадлежит строка.`,children:(0,h.jsx)(o,{layout:`block`,code:`<>
  <HierarchyRowRecipe title="Спринт 14" depth={0} />
  <HierarchyRowRecipe title="Вход по ключу доступа" depth={1} />
  <HierarchyRowRecipe title="Выдача ключей в API" depth={2} />
</>`,children:(0,h.jsxs)(d,{gap:`xs`,children:[(0,h.jsx)(s,{title:`Спринт 14`,depth:0}),(0,h.jsx)(s,{title:`Вход по ключу доступа`,depth:1}),(0,h.jsx)(s,{title:`Выдача ключей в API`,depth:2})]})})}),(0,h.jsx)(a,{id:`states`,label:`Ветка и выбор`,description:`Стрелка есть только у узла с потомками, выбранную строку видно по рамке.`,children:(0,h.jsx)(o,{layout:`block`,code:`<>
  <HierarchyRowRecipe title="Спринт 14" expandable expanded />
  <HierarchyRowRecipe title="Спринт 15" expandable />
  <HierarchyRowRecipe title="Выгрузка отчёта в CSV" selected />
</>`,children:(0,h.jsxs)(d,{gap:`xs`,children:[(0,h.jsx)(s,{title:`Спринт 14`,expandable:!0,expanded:!0}),(0,h.jsx)(s,{title:`Спринт 15`,expandable:!0}),(0,h.jsx)(s,{title:`Выгрузка отчёта в CSV`,selected:!0})]})})}),(0,h.jsx)(a,{id:`slots`,label:`Значок, метаданные и действие`,description:`Когда по строке дерева нужно понять статус задачи и сразу её открыть.`,children:(0,h.jsx)(o,{layout:`block`,code:`<HierarchyRowRecipe
  depth={1}
  leading={<WorkflowIcon status="blocked" />}
  title="Выдача ключей в API"
  meta="Ждёт TM-0149"
  trailing={<MetaClusterRecipe><InlineMetaRecipe value={1} label="блокер" /><Button size="xs" tone="neutral" variant="outline">Открыть</Button></MetaClusterRecipe>}
/>`,children:(0,h.jsx)(s,{depth:1,leading:(0,h.jsx)(n,{status:`blocked`}),title:`Выдача ключей в API`,meta:`Ждёт TM-0149`,trailing:(0,h.jsxs)(i,{children:[(0,h.jsx)(c,{value:1,label:`блокер`}),(0,h.jsx)(t,{size:`xs`,tone:`neutral`,variant:`outline`,children:`Открыть`})]})})})})]})}export{g as default};