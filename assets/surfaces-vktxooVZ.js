import{$n as e,Hn as t,Mo as n,kn as r}from"./chunk-ZW5N5E5H-C8fDcLjq.js";import{F as i,M as a,k as o,o as s}from"./docs-CtJuZ0WF.js";import"./index-D3G-KnJA.js";var c=n();function l(){return(0,c.jsxs)(o,{gap:`lg`,children:[(0,c.jsx)(t,{title:`Surfaces`,description:`BoardSurface и TreeSurface: controlled data, render callbacks и доступные действия.`}),(0,c.jsx)(a,{"data-body":!0,children:`Surfaces — supported escape-hatch API. Render callbacks и native props дают свободу композиции; проверь её визуал, semantics и focus. Подключи AnikinLabProvider, preset.css и обязательные peers из Getting started. Дополнительных DnD peers этим surfaces не требуется.`}),(0,c.jsxs)(e,{label:`board surface`,children:[(0,c.jsx)(a,{"data-body":!0,children:`Передай columns/items и стабильные IDs. renderColumn получает column, children и items; renderCard — columnId и dragging. onMove только сообщает намерение: приложение обновляет items. Native HTML drag-and-drop не гарантирует touch и keyboard interaction. Дай отдельное именованное действие перемещения, сохрани focus и объяви результат. В примере кнопка и DnD обновляют одни controlled данные.`}),(0,c.jsx)(s,{}),(0,c.jsx)(r,{language:`tsx`,code:`import { BoardSurface } from "@chucky23/design-system/surfaces/board-surface"
import { BoardCardRecipe } from "@chucky23/design-system/recipes/board-card"
import { Button, Card, CardHeader, CardTitle, CardContent } from "@chucky23/design-system/react"

const move = ({ itemId, toColumnId }) => setItems(items =>
  items.map(item => item.id === itemId ? { ...item, columnId: toColumnId } : item))
<BoardSurface columns={columns} items={items} aria-label="Задачи"
  getColumnId={column => column.id} getItemId={item => item.id}
  getItemColumnId={item => item.columnId} onMove={move}
  renderColumn={(column, children, state) => <Card>
    <CardHeader><CardTitle>{column.title} ({state.items.length})</CardTitle></CardHeader>
    <CardContent>{children}</CardContent>
  </Card>}
  renderCard={item => <BoardCardRecipe title={item.title}
    footer={<Button onClick={() => move({ itemId: item.id, toColumnId: "done" })}>
      Переместить в Готово
    </Button>} />}
/>`})]}),(0,c.jsxs)(e,{label:`controlled tree`,children:[(0,c.jsx)(a,{"data-body":!0,children:`selectedItems/expandedItems вместе с onSelectedChange/onExpandedChange — controlled режим. Без них defaultSelectedItems/defaultExpandedItems задают начальное внутреннее состояние. Выбор одного узла заменяет массив selected IDs. depth начинается с 0; aria-level начинается с 1. Expanded children используют role=group; только ветки получают aria-expanded.`}),(0,c.jsx)(i,{}),(0,c.jsx)(r,{language:`tsx`,code:`import { TreeSurface } from "@chucky23/design-system/surfaces/tree-surface"
import { HierarchyRowRecipe } from "@chucky23/design-system/recipes/hierarchy-row"
import { Button } from "@chucky23/design-system/react"
<TreeSurface items={items} getItemId={item => item.id} getChildren={item => item.children}
  aria-label="Разделы" expandedItems={expanded} onExpandedChange={setExpanded}
  selectedItems={selected} onSelectedChange={setSelected}
  renderItem={(item, state) => <HierarchyRowRecipe title={item.title} depth={state.depth}
    expandable={!!item.children?.length} expanded={state.expanded} onToggle={state.toggle}
    selected={state.selected} trailing={<Button onClick={state.select}>Выбрать {item.id}</Button>} />}
/>`}),(0,c.jsx)(a,{"data-body":!0,children:`Текущая клавиатурная модель: каждый видимый treeitem в Tab path; Enter выбирает, Space раскрывает ветку или выбирает лист. Arrow navigation, Home/End, typeahead и roving tabindex пока отсутствуют. renderItem отвечает за имя узла и pointer controls, а вложенные controls сами обрабатывают свои клавиши. Не заявляй полный APG tree keyboard contract. При role override consumer отвечает за весь ARIA/keyboard contract.`})]}),(0,c.jsx)(e,{label:`uncontrolled tree`,children:(0,c.jsx)(i,{controlled:!1})}),(0,c.jsx)(e,{label:`выбор слоя`,children:(0,c.jsx)(a,{"data-body":!0,children:`TaskBoardPattern и TaskListPattern собирают toolbar/board/list/detail slots; они не добавляют DnD или storage. Для произвольных data models выбирай surfaces. Extended Kanban и TreeView используют другой API и optional peers; сверяй их документацию. В пустых данных используй EmptyState. Long labels сохраняют полное имя в DOM, визуальная строка может обрезаться; проверь доступ к полному тексту в продукте.`})})]})}export{l as default};