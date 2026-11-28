import{a as e,n as t,t as n}from"./jsx-runtime-dBoqvwbd.js";import{ws as r}from"./useLabelableId-Ck49MOKz.js";import{Fn as i,M as a,Ot as o,Pr as s,St as c,hr as l,pt as u,rt as d,tn as f,xn as p}from"./index-DnsCB0LC.js";var m=e(t(),1),h=n(),g=[{id:`sprint`,title:`Спринт 24`,children:[{id:`auth`,title:`Вход по ключу доступа`,children:[{id:`auth-api`,title:`Выдача ключей в API`},{id:`auth-ui`,title:`Экран ввода ключа`}]},{id:`export`,title:`Выгрузка отчёта в CSV`}]}],_=`<TreeSurface
  aria-label="Структура спринта"
  items={items}
  getItemId={(item) => item.id}
  getChildren={(item) => item.children}
  defaultExpandedItems={["sprint"]}
  renderItem={(item, state) => (
    <HierarchyRowRecipe
      title={item.title}
      depth={state.depth}
      expandable={Boolean(item.children?.length)}
      expanded={state.expanded}
      selected={state.selected}
      onToggle={state.toggle}
    />
  )}
/>`;function v(){let[e,t]=(0,m.useState)([`sprint`,`auth`]),[n,v]=(0,m.useState)([`auth-api`]);return(0,h.jsxs)(c,{kind:`component`,route:`/surfaces/tree-surface`,description:`Дерево для просмотра и выбора: раскрытие и выбор хранит поверхность или приложение, строку рисует renderItem. Бери его, когда структуру показывают, но не перестраивают.`,example:(0,h.jsx)(d,{fragment:!0,layout:`block`,code:`function SprintTree() {
  const [expanded, setExpanded] = useState(["sprint", "auth"])
  const [selected, setSelected] = useState(["auth-api"])

  return (
    <TreeSurface
      aria-label="Структура спринта"
      items={items}
      getItemId={(item) => item.id}
      getChildren={(item) => item.children}
      expandedItems={expanded}
      onExpandedChange={setExpanded}
      selectedItems={selected}
      onSelectedChange={setSelected}
      renderItem={(item, state) => (
        <HierarchyRowRecipe
          title={item.title}
          depth={state.depth}
          expandable={Boolean(item.children?.length)}
          expanded={state.expanded}
          selected={state.selected}
          onToggle={state.toggle}
          trailing={<Button size="xs" tone="neutral" variant="ghost" onClick={state.select}>Выбрать</Button>}
        />
      )}
    />
  )
}`,children:(0,h.jsx)(s,{"aria-label":`Структура спринта`,items:g,getItemId:e=>e.id,getChildren:e=>e.children,expandedItems:e,onExpandedChange:t,selectedItems:n,onSelectedChange:v,renderItem:(e,t)=>(0,h.jsx)(l,{title:e.title,depth:t.depth,expandable:!!e.children?.length,expanded:t.expanded,selected:t.selected,onToggle:t.toggle,trailing:(0,h.jsx)(r,{size:`xs`,tone:`neutral`,variant:`ghost`,onClick:t.select,children:`Выбрать`})})})}),imports:(0,h.jsx)(u,{code:`import { useState } from "react"
import { Button } from "@chucky23/design-system/react"
import { TreeSurface } from "@chucky23/design-system/surfaces/tree-surface"
import { HierarchyRowRecipe } from "@chucky23/design-system/recipes/hierarchy-row"`}),usage:(0,h.jsx)(i,{placement:[{screen:{href:`/screens/registry`,label:`Реестр`},slot:`children`},{screen:{href:`/screens/document`,label:`Документ`},slot:`context`}],use:[`Структура спринта для просмотра: эпики, задачи, подзадачи.`,`Подзадачи в колонке контекста документа с выбором одной из них.`],avoid:[{text:`Задачи переносят между ветками и меняют порядок.`,instead:{href:`/surfaces/sortable-tree`,label:`SortableTree`}},{text:`Навигация по разделам приложения в боковой панели.`,instead:{href:`/components/tree-view`,label:`TreeView`}}]}),api:(0,h.jsx)(a,{items:[{name:`TreeSurface`,props:[{name:`items`,type:`T[]`,required:!0,description:`Корневые узлы. Потомков поверхность получает через getChildren.`},{name:`getItemId`,type:`(item: T) => string`,required:!0,description:`Стабильный идентификатор узла.`},{name:`getChildren`,type:`(item: T) => T[] | undefined`,required:!0,description:`Потомки узла. undefined или пустой массив делает узел листом.`},{name:`renderItem`,type:`(item, { depth, expanded, selected, toggle, select }) => ReactNode`,required:!0,description:`Строка узла. depth начинается с 0.`},{name:`expandedItems`,type:`string[]`,description:`Раскрытые узлы в управляемом режиме, вместе с onExpandedChange.`},{name:`defaultExpandedItems`,type:`string[]`,defaultValue:`[]`,description:`Начальное раскрытие без управления.`},{name:`onExpandedChange`,type:`(items: string[]) => void`,description:`Вызывается при раскрытии и сворачивании.`},{name:`selectedItems`,type:`string[]`,description:`Выбранные узлы в управляемом режиме, вместе с onSelectedChange.`},{name:`defaultSelectedItems`,type:`string[]`,defaultValue:`[]`,description:`Начальный выбор без управления.`},{name:`onSelectedChange`,type:`(items: string[]) => void`,description:`Вызывается при выборе. Выбор узла заменяет массив.`}]}]}),related:(0,h.jsx)(o,{links:[{href:`/recipes/hierarchy-row`,label:`HierarchyRowRecipe`,description:`Строка для слота renderItem.`},{href:`/surfaces/sortable-tree`,label:`SortableTree`,description:`Дерево с переносом узлов и клавиатурой.`},{href:`/components/tree-view`,label:`TreeView`,description:`Готовое дерево навигации.`}]}),children:[(0,h.jsx)(f,{id:`uncontrolled`,label:`Без управления`,description:`Когда приложению не нужно знать, что раскрыто: начальное раскрытие задаёт defaultExpandedItems, дальше состояние хранит поверхность.`,children:(0,h.jsx)(d,{fragment:!0,layout:`block`,code:_,children:(0,h.jsx)(s,{"aria-label":`Структура спринта, без управления`,items:g,getItemId:e=>e.id,getChildren:e=>e.children,defaultExpandedItems:[`sprint`],renderItem:(e,t)=>(0,h.jsx)(l,{title:e.title,depth:t.depth,expandable:!!e.children?.length,expanded:t.expanded,selected:t.selected,onToggle:t.toggle})})})}),(0,h.jsx)(f,{id:`keyboard`,label:`Клавиатура`,description:`Когда дерево проходят с клавиатуры: каждая видимая строка стоит в порядке Tab. Стрелок и поиска по первым буквам нет, для них бери SortableTree.`,children:(0,h.jsx)(p,{label:`Клавиши TreeSurface`,columns:[{label:`Клавиша`,kind:`code`},{label:`Действие`}],rows:[[`Tab`,`Следующая видимая строка.`],[`Enter`,`Выбрать узел.`],[`Space`,`Раскрыть ветку или выбрать лист.`]]})})]})}export{v as default};