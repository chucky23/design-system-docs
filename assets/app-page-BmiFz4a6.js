import{a as e,n as t,t as n}from"./jsx-runtime-dBoqvwbd.js";import{l as r}from"./chunk-QFMPRPBF-DmZ5KIb1.js";import{i}from"./chunk-CZZ4CD4Q-C_o4ee41.js";import{r as a,t as o}from"./chunk-YZVMF2KA-Da2iyKNP.js";import{Bt as s,Di as c,I as l,Oi as u,Ut as d,X as f,_i as p,at as m,bt as h,c as g,dt as _,m as v,n as y,nn as b,on as x,ot as S,tt as C,wi as w,xn as T}from"./index-BX5CNJVf.js";import{a as E,i as D,o as O,t as k}from"./ai-library-CST_24im.js";import{i as A}from"./snapshots-8Mq4mrcp.js";var j=e(t(),1),M=n(),N={registry:{href:`/screens/registry`,label:`Реестр`},document:{href:`/screens/document`,label:`Документ`},settings:{href:`/screens/settings`,label:`Конструктор настроек`},board:{href:`/screens/board`,label:`Доска`},overview:{href:`/screens/overview`,label:`Обзор`}};function P(e,t){let n=N[e];return(0,M.jsx)(m,{href:n.href,children:n.label},t)}function F(e,t,n=`Тип экрана`,r=`Экран`){return(0,M.jsx)(x,{label:e,columns:[{label:r},{label:n,width:`40%`}],rows:t.map(([e,t])=>[e,t in N?P(t,e):t])})}function I(e){return(0,M.jsx)(S,{links:g.filter(t=>t.exampleForApp===e).map(e=>({href:e.path,label:e.label,description:e.summary}))})}function L(e){return(0,M.jsxs)(i,{children:[`Полное руководство для агентов лежит в пакете, файл `,(0,M.jsxs)(l,{children:[`for-ai/apps/`,e,`.md`]}),`.`]})}var R={decision:{kind:`decision`,label:`Твой ход`,description:`Твой ход: агент сдал работу`},error:{kind:`error`,label:`Ошибка`,description:`Ошибка: исполнение агента упало`}};function z(){return(0,M.jsxs)(_,{kind:`guide`,route:`/apps/tasks`,description:`Трекер задач и процессов, в которых работают люди и агенты: какие экраны он собирает из пакета и какие блоки добавил в пакет.`,children:[(0,M.jsx)(i,{children:`Tasks — локальное приложение для macOS на Tauri и React. В одном проекте задачи ведут люди и агенты: агент берёт задачу, сдаёт работу и ждёт решения человека. Поэтому у задачи есть отметка «чей ход», а процесс задачи задаёт свои статусы и переходы. Экраны Tasks собраны из типов экрана пакета, вручную приложение их не рисует.`}),(0,M.jsx)(d,{id:`screen`,label:`Экран целиком`,description:`Окно Tasks по руководству приложения: страница с заголовком и «Создать задачу», дерево задач проекта на RegistryWorkspace и строка состояния. Быстрый фильтр «Все, Твой ход, Агенты, Ошибки» со счётчиками, каждый счётчик строки состояния включает свой фильтр. Поиск, фильтр, создание и перенос строк работают.`,children:(0,M.jsx)(f,{layout:`block`,code:`import { useState } from "react"
import { AttentionMark, TreeRowContent, type TaskAttention } from "@chucky23/design-system/apps/tasks"
import { RegistryWorkspace, WorkspacePage, WorkspaceShell, WorkspaceStatusBar } from "@chucky23/design-system/patterns/workspace"
import { Button, Muted, ToggleGroup, ToggleGroupItem, type WorkflowIconStatus } from "@chucky23/design-system/react"
import { SortableTree, type TreeMove } from "@chucky23/design-system/surfaces/sortable-tree"

type Filter = "all" | TaskAttention["kind"]
type Task = { id: string; parentId: string | null; title: string; priority: number; status: WorkflowIconStatus; statusLabel: string; attention?: TaskAttention }

const navigation = [{ id: "views", label: "Вид", items: [{ id: "tree", label: "Дерево задач", onActivate: () => undefined }] }]
const filters: readonly { kind: TaskAttention["kind"]; label: string }[] = [
  { kind: "decision", label: "Твой ход" },
  { kind: "agent_working", label: "Агенты" },
  { kind: "error", label: "Ошибки" },
]

function TasksScreen({ initialTasks }: { initialTasks: Task[] }) {
  const [tasks, setTasks] = useState(initialTasks)
  const [query, setQuery] = useState("")
  const [filter, setFilter] = useState<Filter>("all")
  const [expanded, setExpanded] = useState<string[]>([])
  const keyChars = Math.max(...tasks.map((task) => task.id.length))
  const count = (kind: TaskAttention["kind"]) => tasks.filter((task) => task.attention?.kind === kind).length
  const visible = tasks.filter((task) => (filter === "all" || task.attention?.kind === filter) && task.title.toLocaleLowerCase("ru").includes(query.trim().toLocaleLowerCase("ru")))
  const create = () => {
    setTasks((current) => [{ id: \`OPS-\${String(current.length + 1).padStart(4, "0")}\`, parentId: null, title: "Новая задача", priority: 2, status: "open", statusLabel: "Открыта" }, ...current])
    setQuery("")
    setFilter("all")
  }
  const move = (change: TreeMove) => setTasks((current) => current.map((task) => (change.ids.includes(task.id) ? { ...task, parentId: change.parentId } : task)))
  return (
    <WorkspaceShell
      brand="Tasks"
      navigation="rail"
      groups={navigation}
      activeId="tree"
      header={<Muted>Платформа</Muted>}
      statusBar={<WorkspaceStatusBar start={<>
        {filters.map((item) => (
          <Button key={item.kind} size="xs" tone="neutral" variant="ghost" onClick={() => setFilter(item.kind)}>
            <AttentionMark kind={item.kind}>{\`\${item.label}: \${count(item.kind)}\`}</AttentionMark>
          </Button>
        ))}
      </>} />}
    >
      <WorkspacePage title="Задачи" width="document" actions={{ primary: { id: "create", label: "Создать задачу", onActivate: create } }}>
        <RegistryWorkspace
          label="Задачи проекта"
          query={query}
          onQueryChange={setQuery}
          onClear={() => { setQuery(""); setFilter("all") }}
          filters={
            <ToggleGroup variant="outline" aria-label="Показать" value={[filter]} onValueChange={(next) => setFilter((next[0] as Filter | undefined) ?? "all")}>
              <ToggleGroupItem value="all">Все</ToggleGroupItem>
              {filters.map((item) => <ToggleGroupItem key={item.kind} value={item.kind}>{item.label} {count(item.kind)}</ToggleGroupItem>)}
            </ToggleGroup>
          }
          filtersActive={filter !== "all"}
          state={{ kind: "ready", matching: visible.length, total: tasks.length }}
          empty={{ title: "Задач пока нет", description: "Создай первую задачу" }}
        >
          <SortableTree<Task>
            label="Задачи проекта"
            items={visible}
            getId={(task) => task.id}
            getParentId={(task) => task.parentId}
            getLabel={(task) => task.title}
            marker="dot"
            getMarkerStatus={(task) => task.status}
            expanded={expanded}
            onExpandedChange={setExpanded}
            onMove={move}
            renderRow={(task, state) => (
              <TreeRowContent taskId={task.id} title={task.title} priority={task.priority} status={task.status} statusLabel={task.statusLabel} keyChars={keyChars} showPriority={false} attention={task.attention} overlay={state.overlay} />
            )}
          />
        </RegistryWorkspace>
      </WorkspacePage>
    </WorkspaceShell>
  )
}`,children:(0,M.jsx)(s,{})})}),(0,M.jsxs)(d,{id:`screens`,label:`Экраны`,description:`Таблица связывает экраны Tasks с типами экрана.`,children:[F(`Экраны Tasks`,[[`Дерево задач`,`registry`],[`Доска задач`,`board`],[`Карточка задачи, на странице и в инспекторе`,`document`],[`Исполнители и типы задач`,`registry`],[`Редактор процесса`,`settings`]]),(0,M.jsx)(i,{children:`Дерево и доска делят одну панель коллекции: переключение меняет только тип экрана. Колонки доски равны статусам процесса, перенос карточки проходит через правила переходов. Оболочка держит полосу значков, вкладки открытых задач, терминал в нижнем доке и сводку «чей ход» в строке состояния.`})]}),(0,M.jsx)(d,{id:`app-links`,label:`Блоки в пакете`,description:`Доменное содержимое строки дерева и карточки доски: бери их, а не собирай строку заново.`,children:I(`tasks`)}),(0,M.jsx)(d,{id:`samples`,label:`Как выглядят блоки`,description:`Живые блоки с данными Tasks: отметка «чей ход» и карточки доски.`,children:(0,M.jsxs)(b,{gap:`md`,children:[(0,M.jsxs)(h,{align:`center`,gap:`md`,children:[(0,M.jsx)(c,{kind:`decision`,children:`Твой ход`}),(0,M.jsx)(c,{kind:`error`,children:`Ошибка`}),(0,M.jsx)(c,{kind:`agent_working`,children:`Агент`})]}),(0,M.jsxs)(C,{columns:2,gap:`sm`,children:[(0,M.jsx)(o,{size:`sm`,children:(0,M.jsx)(a,{children:(0,M.jsx)(u,{taskId:`OPS-0001`,title:`Перенести экспорт отчётов на очередь фоновых задач`,priority:1,attention:R.decision,assignee:{label:`Анна Котова`,kind:`human`},subtaskCount:{total:4,closed:1}})})}),(0,M.jsx)(o,{size:`sm`,children:(0,M.jsx)(a,{children:(0,M.jsx)(u,{taskId:`OPS-0003`,title:`Починить таймаут при выгрузке больших отчётов`,priority:0,attention:R.error,assignee:{label:`Исполнитель отчётов`,kind:`agent`},parentTitle:`Перенести экспорт отчётов на очередь фоновых задач`})})})]})]})}),L(`tasks`)]})}function B(){let[e,t]=(0,j.useState)(!0),[n,r]=(0,j.useState)(!0);return(0,M.jsxs)(b,{gap:`none`,children:[(0,M.jsx)(O,{name:`code-review`,checked:e,onCheckedChange:e=>{t(e),e||r(!1)},required:n,onRequiredChange:e=>{r(e),e&&t(!0)},badges:e?[{label:`Связь`}]:void 0,help:`Связь записана в skills агента.`}),(0,M.jsx)(O,{name:`release-notes`,foundInText:!0,badges:[{label:`В тексте`,tone:`text`}],help:`Связь найдена в тексте описания и в дереве не меняется.`}),(0,M.jsx)(O,{name:`planner`,incomingOnly:!0,badges:[{label:`Обратная`,tone:`incoming`}],help:`«planner» ссылается на эту сущность через поле agent.`})]})}function V(e){return(0,M.jsxs)(_,{kind:`guide`,route:`/apps/ai-library`,description:`Единый каталог навыков, агентов, правил, хуков и MCP: экраны на типах экрана и блоки панели связей сущности.`,children:[(0,M.jsx)(i,{children:`AI Library — приложение для macOS на Tauri и React. Оно хранит навыки, агентов, правила, хуки и MCP, а ещё профили и проектные инструкции. Через него автор правит сущность, видит её связи с другими и проверяет связи перед сохранением. Собственных токенов у приложения нет: свои стили берут цвета из темы пакета.`}),(0,M.jsxs)(d,{id:`screens`,label:`Экраны`,description:`Таблица связывает экраны AI Library с типами экрана.`,children:[F(`Экраны AI Library`,[[`Обзор`,`overview`],[`Навыки, агенты, правила, MCP, хуки`,`registry`],[`Просмотр и создание сущности`,`document`],[`Профили, проекты, журналы`,`registry`],[`Настройки приложения, проекта и профиля`,`settings`],[`Граф связей`,`Холст React Flow внутри приложения. Общего типа нет, это кандидат в новый тип экрана`]]),(0,M.jsx)(i,{children:`Каталоги строятся на одном модуле списков поверх реестра: таблица, список и дерево с поиском, фильтрами и группировкой. Справку о поле показывает FieldHelp: кнопка «?» рядом с подписью.`})]}),(0,M.jsx)(d,{id:`app-links`,label:`Блоки в пакете`,description:`Строка связи и диагностика для панели связей на странице сущности.`,children:I(`ai-library`)}),(0,M.jsxs)(d,{id:`samples`,label:`Как выглядят блоки`,description:`Панель связей сущности: строки связей со знаками «Обязан вызвать» и «Найдено в тексте» и диагностика перед сохранением.`,children:[(0,M.jsx)(i,{children:`Звёздочка у навыка означает «Обязан вызвать» и включает галочку. Серая отмеченная галочка значит, что приложение само нашло связь в тексте, поэтому она не нажимается.`}),(0,M.jsx)(f,{title:`Панель связей`,layout:`stack`,code:`import { useState } from "react"
import { RelationBlockingDiagnostic, RelationDiagnosticGroup, RelationDiagnostics, RelationRow } from "@chucky23/design-system/apps/ai-library"

function RelationsPanel() {
  const [linked, setLinked] = useState(true)
  const [required, setRequired] = useState(true)
  return (
    <>
      <RelationRow name="code-review" checked={linked} onCheckedChange={setLinked} required={required} onRequiredChange={setRequired} badges={[{ label: "Связь" }]} />
      <RelationRow name="release-notes" foundInText badges={[{ label: "В тексте", tone: "text" }]} />
      <RelationRow name="planner" incomingOnly badges={[{ label: "Обратная", tone: "incoming" }]} />
      <RelationDiagnostics>
        <RelationDiagnosticGroup title="Цель не готова" count={1} action="Переведи цель в статус «Готово» или сними связь.">
          <RelationBlockingDiagnostic severity="error" message="Навык deploy в статусе «Черновик»." entityId="skills/deploy" />
        </RelationDiagnosticGroup>
      </RelationDiagnostics>
    </>
  )
}`,children:(0,M.jsxs)(b,{gap:`md`,children:[e,(0,M.jsx)(E,{children:(0,M.jsx)(D,{title:`Цель не готова`,count:1,action:`Переведи цель в статус «Готово» или сними связь.`,children:(0,M.jsx)(k,{severity:`error`,message:`Навык deploy в статусе «Черновик».`,entityId:`skills/deploy`})})})]})})]}),L(`ai-library`)]})}var H=new Set([`n-sartre`,`n-being`,`n-revolt`,`n-sisyphus`,`n-absurd`]),U={...v,links:(v.links??[]).filter(e=>H.has(e.from)&&H.has(e.to))};function W(){return(0,M.jsxs)(_,{kind:`guide`,route:`/apps/chora`,description:`Бесконечный холст со связанными карточками на Rust и GPUI: что Chora берёт из пакета и какие блоки холста в нём лежат.`,children:[(0,M.jsx)(i,{children:`Chora — приложение для macOS с бесконечным холстом. Пользователь собирает на нём доски из связанных объектов: персон, событий, вопросов, тезисов и документов. Пользователь решает, что положить и как связать, а Chora решает форму: геометрию карточки, маршрут связи, цвет и движение. Приложение написано на Rust и GPUI, поэтому берёт у пакета тему GPUI и анатомию компонентов, а не React-компоненты.`}),(0,M.jsxs)(d,{id:`screens`,label:`Экраны`,description:`Chora не собирает экраны из типов экрана: холст занимает всё окно.`,children:[F(`Части окна Chora`,[[`Холст`,`Сцена холста, уровни детализации по масштабу`],[`Заголовок окна`,`Путь доски и индикатор сохранения StatusTag`],[`Остров инструментов`,`Кнопки-значки пакета без подписей`],[`Правая панель`,`Вкладки «Сведения», «Редактор» и «История» по анатомии Tabs. В приложении они пока подписаны по-английски: Details, Editor, History`]],`Из чего собрана`,`Часть окна`),(0,M.jsx)(i,{children:`Холст главнее оболочки. Тип карточки читается по силуэту и знаку в углу, связи в покое монохромные и проявляют цвет от выбранного объекта. Теней, плашек и цветных полос на холсте нет.`})]}),(0,M.jsx)(d,{id:`app-links`,label:`Блоки в пакете`,description:`Веб-эталон холста: по нему сверяют геометрию и нотацию native-реализации.`,children:I(`chora`)}),(0,M.jsx)(d,{id:`samples`,label:`Как выглядят блоки`,description:`Три карточки рабочего уровня и доска на обзорном уровне с выбранной персоной.`,children:(0,M.jsxs)(b,{gap:`md`,children:[(0,M.jsxs)(h,{align:`start`,gap:`md`,role:`region`,"aria-label":`Карточки на рабочем уровне`,"data-chora-scroll-region":``,children:[(0,M.jsx)(p,{type:`person`,data:{name:`Королёв Сергей Павлович`,short:`Королёв С. П.`,roleShort:`Главный конструктор ОКБ-1`},scale:.4}),(0,M.jsx)(p,{type:`event`,data:{title:`Первый полёт человека в космос`,year:`1961`,date:`12 апреля`},scale:.4}),(0,M.jsx)(p,{type:`question`,data:{text:`Есть ли у человека заданная природа?`,status:`open`},scale:.4})]}),(0,M.jsx)(f,{title:`Доска на обзорном уровне`,layout:`block`,code:`import { ChoraScene, type SceneModel } from "@chucky23/design-system/apps/chora"

// Модель доски — фреймы, узлы и связи — приходит из приложения.
function BoardOverview({ model }: { model: SceneModel }) {
  return <ChoraScene className="h-[480px]" model={model} zoom={0.22} center={[1600, 1000]} selected="n-sartre" label="Доска Chora на обзорном уровне" />
}`,children:(0,M.jsx)(w,{className:`h-[480px] w-full`,model:U,zoom:.22,center:[1600,1e3],selected:`n-sartre`,label:`Доска Chora на обзорном уровне`})})]})}),L(`chora`)]})}var G={"/examples/sprint/registry":`registry-inspector`,"/examples/sprint/board":`board`,"/examples/sprint/document":`document`,"/examples/sprint/settings":`settings`,"/examples/sprint/overview":`overview`},K=[{href:`/patterns/calendar-grid`,label:`CalendarGridPattern`,description:`Календарь с переменным числом дней.`},{href:`/patterns/timer-panel`,label:`TimerPanelPattern`,description:`Локальный таймер задачи.`},{href:`/recipes/entity-key`,label:`EntityKeyRecipe`,description:`Ключ записи моноширинным шрифтом.`},{href:`/recipes/inline-meta`,label:`InlineMetaRecipe`,description:`Значение и подпись в одной строке.`},{href:`/recipes/action-cluster`,label:`ActionClusterRecipe`,description:`Группа команд с общим расстоянием.`}];function q(){let e=y.filter(e=>e.appId===`sprint`).map(e=>({href:e.path,title:e.title,screenType:e.screenType,preview:A(G[e.path]??`shell`)}));return(0,M.jsxs)(_,{kind:`guide`,route:`/apps/sprint`,description:`Задачи в спринтах: на экранах Sprint построены примеры сайта, а сами экраны дали пакету паттерны календаря и таймера.`,children:[(0,M.jsx)(i,{children:`Sprint — личное приложение для задач в спринтах на Tauri и React. Главный вопрос спринта — «я отстаю или в норме». Ответ даёт вердикт над метриками «Прогресс», «Сегодня» и «Темп»: приложение сравнивает списанные часы с планом на день. Само приложение стоит на пакете 3.x и переходит на новые выпуски только по решению владельца.`}),(0,M.jsx)(d,{id:`screens`,label:`Экраны`,description:`Примеры сайта собирают экраны Sprint на текущих типах экрана. Каждый открывается во весь экран.`,children:(0,M.jsx)(T,{items:e})}),(0,M.jsx)(d,{id:`app-links`,label:`Контракты в пакете`,description:`Паттерны и рецепты, которые пакет вывел из экранов Sprint.`,children:(0,M.jsx)(S,{links:K})}),L(`sprint`)]})}var J={tasks:z,"ai-library":V,chora:W,sprint:q};function Y(){let{pathname:e}=r(),t=e.replace(/\/$/,``).split(`/`).filter(Boolean).pop()??``,n=B(),i=Object.hasOwn(J,t)?J[t]:void 0;if(!i)throw Error(`AppPage: нет страницы приложения ${t}`);return i(n)}export{Y as default};