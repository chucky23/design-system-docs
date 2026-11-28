import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{b as t}from"./chunk-A5ATJWCD-D5u-P5Xy.js";import{Fn as n,M as r,Ot as i,Pn as a,St as o,Un as s,li as c,pi as l,pt as u,rt as d,tn as f,ui as p,xn as m}from"./index-DnsCB0LC.js";var h=e();function g(){return(0,h.jsxs)(o,{kind:`component`,route:`/components/tree-view`,description:`Иерархический список с раскрытием узлов: эпики и задачи, разделы, папки. Соседей можно переставлять, с клавиатуры тоже работает.`,usage:(0,h.jsx)(n,{use:[`Иерархия с раскрытием узлов и перестановкой соседей: разделы, папки.`],avoid:[{text:`Дерево с переносом узлов между уровнями и выбором нескольких строк.`,instead:{href:`/surfaces/sortable-tree`,label:`SortableTree`}},{text:`Плоский список записей.`,instead:{href:`/components/table`,label:`Table`}}]}),example:(0,h.jsx)(d,{layout:`block`,code:`<TreeView>
  <TreeItem id="epic-1" label="Миграция платформы" status="progress" meta={<Badge variant="secondary">Эпик</Badge>}>
    <TreeItem id="task-1" label="Перенос авторизации" status="closed" priority="p1" meta={<Tag size="sm">бэкенд</Tag>} />
    <TreeItem id="task-3" label="Схема базы данных" status="open" priority="p2">
      <TreeItem id="sub-1" label="Резервная копия рабочих данных" status="closed" />
      <TreeItem id="sub-2" label="Запуск скриптов миграции" status="open" />
    </TreeItem>
    <TreeItem id="task-2" label="Обновление API-шлюза" status="progress" priority="p1" />
  </TreeItem>
  <TreeItem id="epic-2" label="Настройка мониторинга" status="open" meta={<Badge variant="secondary">Эпик</Badge>}>
    <TreeItem id="task-4" label="Настроить оповещения" status="open" priority="p2" />
  </TreeItem>
</TreeView>`,gpuiCode:`use anikin_lab_gpui::prelude::*;

let mut state = DsTreeState::new();
state.expand("epic-1");

let tree = DsTreeView::new("tasks-tree")
    .state(state)
    .item(
        DsTreeItem::new("epic-1", "Миграция платформы")
            .meta("Эпик")
            .child(DsTreeItem::new("task-1", "Перенос авторизации"))
            .child(DsTreeItem::new("task-2", "Обновление API-шлюза")),
    )
    .on_select(|id, _window, _cx| {
        let _ = id;
    });`,children:(0,h.jsxs)(p,{children:[(0,h.jsxs)(c,{id:`epic-1`,label:`Миграция платформы`,status:`progress`,meta:(0,h.jsx)(l,{variant:`secondary`,children:`Эпик`}),children:[(0,h.jsx)(c,{id:`task-1`,label:`Перенос авторизации`,status:`closed`,priority:`p1`,meta:(0,h.jsx)(t,{size:`sm`,children:`бэкенд`})}),(0,h.jsxs)(c,{id:`task-3`,label:`Схема базы данных`,status:`open`,priority:`p2`,children:[(0,h.jsx)(c,{id:`sub-1`,label:`Резервная копия рабочих данных`,status:`closed`}),(0,h.jsx)(c,{id:`sub-2`,label:`Запуск скриптов миграции`,status:`open`})]}),(0,h.jsx)(c,{id:`task-2`,label:`Обновление API-шлюза`,status:`progress`,priority:`p1`})]}),(0,h.jsx)(c,{id:`epic-2`,label:`Настройка мониторинга`,status:`open`,meta:(0,h.jsx)(l,{variant:`secondary`,children:`Эпик`}),children:(0,h.jsx)(c,{id:`task-4`,label:`Настроить оповещения`,status:`open`,priority:`p2`})})]})}),imports:(0,h.jsx)(u,{code:`import { TreeItem, TreeView } from "@chucky23/design-system/extended/tree-view"
import { Badge, Tag } from "@chucky23/design-system/react"`}),api:(0,h.jsx)(r,{items:[{name:`TreeView`,props:[{name:`onSelect`,type:`(id: string) => void`,description:`Вызывается при нажатии кнопки мыши, касании, Enter или пробеле.`},{name:`selectedId`,type:`string`,description:`Выбранный узел в управляемом режиме. Работает вместе с onSelect.`},{name:`onReorder`,type:`(items: TreeItemData[]) => void`,description:`Вызывается после перетаскивания и получает новое дерево. Нужна peer-зависимость @dnd-kit/sortable.`},{name:`defaultCollapsed`,type:`string[]`,defaultValue:`[]`,description:`Идентификаторы узлов, свёрнутых при первом показе.`}]},{name:`TreeItem`,props:[{name:`id`,type:`string`,required:!0,description:`Уникальный идентификатор в пределах дерева.`},{name:`label`,type:`string`,required:!0,description:`Название узла.`},{name:`status`,type:`"open" | "progress" | "blocked" | "deferred" | "closed"`,description:`Статус: WorkflowIcon перед названием.`},{name:`priority`,type:`"p0" | "p1" | "p2" | "p3" | "p4"`,description:`Приоритет: попадает в подпись значка, цвет не меняет.`},{name:`meta`,type:`ReactNode`,description:`Слот справа: Badge, Tag, счётчик.`},{name:`children`,type:`TreeItem`,description:`Вложенные узлы без ограничения глубины.`}]}]}),related:(0,h.jsx)(i,{links:[{href:`/surfaces/sortable-tree`,label:`SortableTree`,description:`Иерархия с переносом между уровнями, выбором нескольких строк и переносом с клавиатуры.`},{href:`/surfaces/tree-surface`,label:`TreeSurface`,description:`Содержимое слота дерева.`},{href:`/examples/sprint/registry`,label:`Реестр задач`,description:`Вид «Дерево» в экране Sprint.`},{href:`/components/workflow-icon`,label:`WorkflowIcon`,description:`Значок статуса и приоритета.`}]}),children:[(0,h.jsx)(f,{id:`flat`,label:`Плоский список`,description:`Когда нужен короткий список разделов с выбором, без вложенности и статусов.`,children:(0,h.jsx)(d,{fragment:!0,layout:`block`,code:`<TreeView onSelect={setSelected} selectedId={selected}>
  <TreeItem id="1" label="Наблюдаемость" />
  <TreeItem id="2" label="Инциденты" />
  <TreeItem id="3" label="Сервисы" />
</TreeView>`,children:(0,h.jsxs)(p,{children:[(0,h.jsx)(c,{id:`flat-1`,label:`Наблюдаемость`}),(0,h.jsx)(c,{id:`flat-2`,label:`Инциденты`}),(0,h.jsx)(c,{id:`flat-3`,label:`Сервисы`})]})})}),(0,h.jsx)(f,{id:`status`,label:`Статусы`,description:`Когда узлы — задачи: значок показывает один из шести статусов вместе с бэклогом, приоритет называет подпись для скринридера.`,children:(0,h.jsx)(d,{layout:`block`,code:`<TreeView>
  <TreeItem id="1" label="Выкатить сервис авторизации" status="progress" priority="p0" />
  <TreeItem id="2" label="Починить вход" status="blocked" priority="p1" />
  <TreeItem id="3" label="Обновить Node до 22" status="open" />
  <TreeItem id="4" label="Перенести хранилище файлов" status="deferred" />
  <TreeItem id="5" label="Настроить алерт на 5xx" status="closed" />
</TreeView>`,children:(0,h.jsxs)(p,{children:[(0,h.jsx)(c,{id:`status-1`,label:`Выкатить сервис авторизации`,status:`progress`,priority:`p0`}),(0,h.jsx)(c,{id:`status-2`,label:`Починить вход`,status:`blocked`,priority:`p1`}),(0,h.jsx)(c,{id:`status-3`,label:`Обновить Node до 22`,status:`open`}),(0,h.jsx)(c,{id:`status-4`,label:`Перенести хранилище файлов`,status:`deferred`}),(0,h.jsx)(c,{id:`status-5`,label:`Настроить алерт на 5xx`,status:`closed`})]})})}),(0,h.jsx)(f,{id:`keyboard`,label:`Клавиатура`,description:`Сверься с таблицей, когда проверяешь дерево с клавиатуры: оно следует шаблону Tree из WAI-ARIA, навигация идёт без цикла.`,children:(0,h.jsx)(m,{label:`Клавиши дерева`,columns:[{label:`Клавиша`,kind:`name`,width:`14rem`},{label:`Действие`}],rows:[[(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s,{children:`↑`}),` `,(0,h.jsx)(s,{children:`↓`})]}),`Предыдущий или следующий видимый узел`],[(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s,{children:`Home`}),` `,(0,h.jsx)(s,{children:`End`})]}),`Первый или последний узел`],[(0,h.jsx)(s,{children:`→`}),`Развернуть узел или перейти к первому дочернему`],[(0,h.jsx)(s,{children:`←`}),`Свернуть узел или перейти к родителю`],[(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s,{children:`Enter`}),` `,(0,h.jsx)(s,{children:`Space`})]}),`Выбрать узел`]]})}),(0,h.jsx)(f,{id:`reorder`,label:`Порядок`,description:`Когда порядок узлов важен, например очередь разделов спринта. При наведении слева появляется ручка, новый порядок приходит в onReorder.`,children:(0,h.jsx)(d,{fragment:!0,layout:`block`,code:`<TreeView onReorder={(items) => save(items)}>
  <TreeItem id="1" label="Аналитика" />
  <TreeItem id="2" label="Дизайн" />
  <TreeItem id="3" label="Разработка" />
</TreeView>`,children:(0,h.jsxs)(p,{onReorder:()=>void 0,children:[(0,h.jsx)(c,{id:`dnd-1`,label:`Аналитика`}),(0,h.jsx)(c,{id:`dnd-2`,label:`Дизайн`}),(0,h.jsx)(c,{id:`dnd-3`,label:`Разработка`})]})})}),(0,h.jsx)(f,{id:`scenarios`,label:`Сценарии данных`,description:`Переключай сценарии, чтобы проверить длинные названия, пустое состояние, загрузку и ошибку.`,children:(0,h.jsx)(d,{layout:`block`,children:(0,h.jsx)(a,{})})})]})}export{g as default};