import{a as e,n as t,t as n}from"./jsx-runtime-dBoqvwbd.js";import{Kn as r,Xn as i,as as a}from"./useLabelableId-C6GEk9LR.js";import{i as o,o as s,r as c,s as l,t as u}from"./chunk-YZVMF2KA-Da2iyKNP.js";import{A as d,Jr as f,M as p,Un as m,Ut as h,X as g,_t as _,dt as v,rt as y,sn as b,vn as x}from"./index-BX5CNJVf.js";var S=e(t(),1),C=n(),w=[{id:`progress`,title:`В работе`},{id:`done`,title:`Готово`}],T=[{id:`TM-202`,title:`Описать типы экрана`,columnId:`progress`},{id:`TM-203`,title:`Собрать снимки тёмной темы`,columnId:`progress`},{id:`TM-204`,title:`Выпустить версию 9.0.0`,columnId:`done`}],E=`import { useRef, useState } from "react"

type Move = { itemId: string; fromColumnId: string; toColumnId: string }

function BoardExample() {
  const [tasks, setTasks] = useState(initialTasks)
  const [announcement, setAnnouncement] = useState("")
  const focusItem = useRef<string | null>(null)

  function move({ itemId, fromColumnId, toColumnId }: Move, focusAfter = false) {
    const destination = columns.find((column) => column.id === toColumnId)
    if (!destination || fromColumnId === toColumnId) return

    if (focusAfter) focusItem.current = itemId
    setTasks((items) => items.map((item) => item.id === itemId ? { ...item, columnId: toColumnId } : item))
    setAnnouncement(\`\${itemId}: \${destination.title}\`)
  }

  return (
    <>
      <BoardSurface
        aria-label="Задачи спринта"
        columns={columns}
        items={tasks}
        getColumnId={(column) => column.id}
        getItemId={(item) => item.id}
        getItemColumnId={(item) => item.columnId}
        onMove={move}
        renderColumn={(column, children, state) => (
          <Card>
            <CardHeader>
              <CardTitle>{column.title} ({state.items.length})</CardTitle>
              <CardDescription>Карточек в колонке</CardDescription>
            </CardHeader>
            <CardContent>
              {state.items.length ? children : <EmptyState><EmptyStateTitle>Нет задач</EmptyStateTitle></EmptyState>}
            </CardContent>
          </Card>
        )}
        renderCard={(item, state) => {
          const destination = item.columnId === "progress" ? columns[1] : columns[0]
          return (
            <BoardCardRecipe
              title={item.id}
              description={item.title}
              meta={state.dragging ? "Перемещение" : undefined}
              footer={
                <Button
                  ref={(node) => {
                    if (node && focusItem.current === item.id) {
                      focusItem.current = null
                      node.focus()
                    }
                  }}
                  size="xs"
                  tone="neutral"
                  variant="outline"
                  onClick={() => move({ itemId: item.id, fromColumnId: item.columnId, toColumnId: destination.id }, true)}
                >
                  Переместить {item.id} в «{destination.title}»
                </Button>
              }
            />
          )
        }}
      />
      <span className="sr-only" role="status">{announcement}</span>
    </>
  )
}`;function D(){let[e,t]=(0,S.useState)(T),[n,D]=(0,S.useState)(``),O=(0,S.useRef)(null);function k({itemId:e,fromColumnId:n,toColumnId:r},i=!1){let a=w.find(e=>e.id===r);!a||n===r||(i&&(O.current=e),t(t=>t.map(t=>t.id===e?{...t,columnId:r}:t)),D(`${e}: ${a.title}`))}return(0,C.jsx)(v,{kind:`component`,route:`/surfaces/board-surface`,description:`Доска колонок с переносом карточек мышью или кнопкой. Данные хранит приложение. Бери её для небольшой доски внутри раздела, когда целый экран доски не нужен.`,example:(0,C.jsxs)(g,{fragment:!0,layout:`block`,code:E,children:[(0,C.jsx)(f,{"aria-label":`Задачи спринта`,columns:w,items:e,getColumnId:e=>e.id,getItemId:e=>e.id,getItemColumnId:e=>e.columnId,onMove:k,renderColumn:(e,t,n)=>(0,C.jsxs)(u,{children:[(0,C.jsxs)(s,{children:[(0,C.jsxs)(l,{children:[e.title,` (`,n.items.length,`)`]}),(0,C.jsx)(o,{children:`Карточек в колонке`})]}),(0,C.jsx)(c,{children:n.items.length?t:(0,C.jsx)(r,{children:(0,C.jsx)(i,{children:`Нет задач`})})})]}),renderCard:(e,t)=>{let n=e.columnId===`progress`?w[1]:w[0];return(0,C.jsx)(m,{title:e.id,description:e.title,meta:t.dragging?`Перемещение`:void 0,footer:(0,C.jsxs)(a,{ref:t=>{t&&O.current===e.id&&(O.current=null,t.focus())},size:`xs`,tone:`neutral`,variant:`outline`,onClick:()=>k({itemId:e.id,fromColumnId:e.columnId,toColumnId:n.id},!0),children:[`Переместить `,e.id,` в «`,n.title,`»`]})})}}),(0,C.jsx)(b,{as:`span`,className:`sr-only`,role:`status`,children:n})]}),imports:(0,C.jsx)(y,{code:`import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle, EmptyState, EmptyStateTitle } from "@chucky23/design-system/react"
import { BoardSurface } from "@chucky23/design-system/surfaces/board-surface"
import { BoardCardRecipe } from "@chucky23/design-system/recipes/board-card"`}),usage:(0,C.jsx)(x,{placement:[{screen:{href:`/screens/document`,label:`Документ`},slot:`sections[].content`},{screen:{href:`/screens/overview`,label:`Обзор`},slot:`sections[].content`}],use:[`Подзадачи эпика по колонкам статусов в разделе документа.`,`Короткая доска ревью в разделе обзора: ждут, в работе, готово.`],avoid:[{text:`Доска спринта на весь экран с поиском, фильтрами и порядком внутри колонки.`,instead:{href:`/screens/board`,label:`Доска`}},{text:`Карточка внутри колонки.`,instead:{href:`/recipes/board-card`,label:`BoardCardRecipe`}}]}),api:(0,C.jsx)(d,{items:[{name:`BoardSurface`,props:[{name:`columns`,type:`TColumn[]`,required:!0,description:`Колонки слева направо, обычно статусы задачи.`},{name:`items`,type:`TItem[]`,required:!0,description:`Карточки всех колонок.`},{name:`getColumnId`,type:`(column) => string`,required:!0,description:`Стабильный идентификатор колонки.`},{name:`getItemId`,type:`(item) => string`,required:!0,description:`Стабильный идентификатор карточки.`},{name:`getItemColumnId`,type:`(item) => string`,required:!0,description:`Колонка, в которой лежит карточка.`},{name:`renderColumn`,type:`(column, children, { columnId, column, items }) => ReactNode`,required:!0,description:`Рамка колонки. children — отрисованные карточки.`},{name:`renderCard`,type:`(item, { columnId, dragging }) => ReactNode`,required:!0,description:`Карточка. dragging истинно, пока её тянут.`},{name:`onMove`,type:`({ itemId, fromColumnId, toColumnId }) => void`,description:`Намерение перенести карточку. Данные обновляет приложение.`}]}]}),related:(0,C.jsx)(_,{links:[{href:`/recipes/board-card`,label:`BoardCardRecipe`,description:`Карточка для слота renderCard.`},{href:`/screens/board`,label:`Доска`,description:`Тип экрана с порядком внутри колонки и переносом с клавиатуры.`},{href:`/components/kanban`,label:`KanbanBoard`,description:`Готовая доска на dnd-kit.`}]}),children:(0,C.jsx)(h,{id:`without-mouse`,label:`Перенос без мыши`,description:`Когда карточку переносят с клавиатуры или скринридером: кнопка переносит её в другую колонку, фокус остаётся на кнопке, пустая колонка говорит, что задач нет.`,children:(0,C.jsx)(g,{fragment:!0,layout:`block`,code:`<BoardSurface
  aria-label="Доска задач"
  columns={columns}
  items={tasks}
  getColumnId={(column) => column.id}
  getItemId={(task) => task.id}
  getItemColumnId={(task) => task.columnId}
  onMove={move}
  renderColumn={(column, children, state) => (
    <Card>
      <CardHeader><CardTitle>{column.title} ({state.items.length})</CardTitle></CardHeader>
      <CardContent>
        {state.items.length ? children : <EmptyState><EmptyStateTitle>Нет задач</EmptyStateTitle></EmptyState>}
      </CardContent>
    </Card>
  )}
  renderCard={(task) => (
    <BoardCardRecipe
      title={task.id}
      description={task.title}
      footer={
        <Button size="xs" tone="neutral" variant="outline" onClick={() => move({ itemId: task.id, fromColumnId: task.columnId, toColumnId: "done" }, true)}>
          Переместить {task.id} в «Готово»
        </Button>
      }
    />
  )}
/>`,children:(0,C.jsx)(p,{})})})})}export{D as default};