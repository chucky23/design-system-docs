import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{Ir as t,Qr as n,Rr as r,Sr as i,_ as a,j as o,kr as s,x as c,zr as l}from"./chunk-FJ6G7XYZ-vkrr-AON.js";import{A as u,Q as d,g as f}from"./docs-CTQgkcVe.js";import"./index-CylhoBOX.js";import"./workspace-B0gvzNJe.js";import{n as p,r as m,t as h}from"./docs-article-CV9v0E7s.js";import{n as g,r as _,t as v}from"./filter-panel-DUla11lf.js";var y=e(),b=[{id:`usage`,label:`Использование`},{id:`workspace-navigation`,label:`Навигация приложения`},{id:`detail-panel`,label:`Панель подробностей`},{id:`api`,label:`API`}];function x(){return(0,y.jsx)(o,{title:`Panels`,description:`Боковые панели: навигация, подробности и фильтры.`,breadcrumbs:h(`/components/panels`),meta:p(`/components/panels`),children:(0,y.jsx)(c,{presentation:`article`,label:`Panels`,inspector:m(b),document:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(f,{title:`FilterPanel`,description:`Панель фильтров с группами чекбоксов. FilterGroup группирует FilterCheckbox по категории.`,code:`import { StatusIcon } from "@chucky23/design-system/react"
import { FilterPanel, FilterGroup, FilterCheckbox } from "@chucky23/design-system/extended/filter-panel"

// Visual selection example; connect controlled checked/onCheckedChange to host filters.
export function IncidentFilters() {
  return (
<FilterPanel>
  <FilterGroup title="Status">
    <FilterCheckbox
      label="Open"
      defaultChecked
      indicator={<StatusIcon status="open" size="sm" />}
    />
    <FilterCheckbox
      label="In Progress"
      defaultChecked
      indicator={<StatusIcon status="progress" size="sm" />}
    />
    <FilterCheckbox
      label="Blocked"
      indicator={<StatusIcon status="blocked" size="sm" />}
    />
    <FilterCheckbox
      label="Closed"
      indicator={<StatusIcon status="closed" size="sm" />}
    />
  </FilterGroup>
  <FilterGroup title="Priority">
    <FilterCheckbox label="P0 — Critical" defaultChecked />
    <FilterCheckbox label="P1 — High" defaultChecked />
    <FilterCheckbox label="P2 — Medium" />
    <FilterCheckbox label="P3 — Low" />
  </FilterGroup>
  <FilterGroup title="Type">
    <FilterCheckbox label="Bug" defaultChecked />
    <FilterCheckbox label="Feature" />
    <FilterCheckbox label="Improvement" />
  </FilterGroup>
</FilterPanel>
  )
}`,children:(0,y.jsxs)(_,{children:[(0,y.jsxs)(g,{title:`Status`,children:[(0,y.jsx)(v,{label:`Open`,defaultChecked:!0,indicator:(0,y.jsx)(a,{status:`open`,size:`sm`})}),(0,y.jsx)(v,{label:`In Progress`,defaultChecked:!0,indicator:(0,y.jsx)(a,{status:`progress`,size:`sm`})}),(0,y.jsx)(v,{label:`Blocked`,indicator:(0,y.jsx)(a,{status:`blocked`,size:`sm`})}),(0,y.jsx)(v,{label:`Closed`,indicator:(0,y.jsx)(a,{status:`closed`,size:`sm`})})]}),(0,y.jsxs)(g,{title:`Priority`,children:[(0,y.jsx)(v,{label:`P0 — Critical`,defaultChecked:!0}),(0,y.jsx)(v,{label:`P1 — High`,defaultChecked:!0}),(0,y.jsx)(v,{label:`P2 — Medium`}),(0,y.jsx)(v,{label:`P3 — Low`})]}),(0,y.jsxs)(g,{title:`Type`,children:[(0,y.jsx)(v,{label:`Bug`,defaultChecked:!0}),(0,y.jsx)(v,{label:`Feature`}),(0,y.jsx)(v,{label:`Improvement`})]})]})}),(0,y.jsx)(i,{children:`Для навигации приложения используй WorkspaceShell и WorkspacePage: пакет управляет оформлением оболочки и мобильным меню, приложение — маршрутом и содержимым страницы. DetailPanel показывает детали сущности из списка, FilterPanel — фасеты для таблиц и реестров.`}),(0,y.jsxs)(n,{id:`usage`,label:`Использование`,children:[(0,y.jsx)(i,{children:`Каждая панель импортируется из своего entrypoint, а вкладка Code у примеров содержит готовый компонент с импортами.`}),(0,y.jsxs)(r,{children:[(0,y.jsxs)(l,{children:[`WorkspaceShell и WorkspacePage — `,(0,y.jsx)(t,{children:`@chucky23/design-system/patterns/workspace`}),`.`]}),(0,y.jsxs)(l,{children:[`DetailPanel, DetailPanelProperties, DetailPanelSection —`,` `,(0,y.jsx)(t,{children:`@chucky23/design-system/extended/detail-panel`}),`.`]}),(0,y.jsxs)(l,{children:[`FilterPanel, FilterGroup, FilterCheckbox —`,` `,(0,y.jsx)(t,{children:`@chucky23/design-system/extended/filter-panel`}),`.`]})]})]}),(0,y.jsxs)(n,{id:`workspace-navigation`,label:`Навигация приложения`,children:[(0,y.jsx)(i,{children:`WorkspaceShell принимает brand, groups, activeId и footer. Иконки навигации — семантические иконки из @chucky23/design-system/icons, переход — onActivate. WorkspacePage задаёт название и область работы. Перед использованием подключи Tailwind и preset.css в корневом CSS; AnikinLabProvider устанавливается один раз на уровне приложения. Router принадлежит приложению; переходы с несохранённым вводом проводи через useGuardedTransition из hooks.`}),(0,y.jsx)(s,{copyLabel:`Скопировать код: навигация приложения`,language:`tsx`,code:`import type { ReactNode } from "react"
import { AnikinLabProvider } from "@chucky23/design-system/react"
import { Button } from "@chucky23/design-system/ant"
import { WorkspaceShell, WorkspacePage } from "@chucky23/design-system/patterns/workspace"
import { ListIcon, TeamIcon, DashboardIcon } from "@chucky23/design-system/icons"

// Root CSS: @import "tailwindcss"; @import "@chucky23/design-system/preset.css";
type Route = "/incidents" | "/services" | "/dashboards" | "/settings"
type WorkspaceLayoutProps = {
  activeId: "incidents" | "services" | "dashboards" | "settings"
  title: string
  children: ReactNode
  navigate: (route: Route) => void // host router adapter
}

export function WorkspaceLayout({ activeId, title, children, navigate }: WorkspaceLayoutProps) {
  return (
    <AnikinLabProvider>
      <WorkspaceShell
        brand="Operations"
        description="Incident workspace"
        activeId={activeId}
        groups={[{
          id: "operations",
          label: "Workspace",
          items: [
            { id: "incidents", label: "Incidents", icon: ListIcon, onActivate: () => navigate("/incidents") },
            { id: "services", label: "Services", icon: TeamIcon, onActivate: () => navigate("/services") },
            { id: "dashboards", label: "Dashboards", icon: DashboardIcon, onActivate: () => navigate("/dashboards") },
          ],
        }]}
        footer={<Button tone="neutral" variant="ghost" onClick={() => navigate("/settings")}>Settings</Button>}
      >
        <WorkspacePage title={title}>{children}</WorkspacePage>
      </WorkspaceShell>
    </AnikinLabProvider>
  )
}`})]}),(0,y.jsxs)(n,{id:`detail-panel`,label:`Панель подробностей`,children:[(0,y.jsx)(i,{children:`DetailPanel построен на Sheet (slide-over). Содержит заголовок с кнопкой удаления, секцию свойств (PropertyField) и секцию комментариев (CommentThread). Управляется через open/onOpenChange; title формирует SheetTitle. onDelete ниже только запрашивает подтверждение у приложения. Перед AlertDialog закрой DetailPanel, чтобы открытым оставался один модальный слой; удаляй только после подтверждения. Приложение владеет черновиком комментария и защищает его при закрытии или переходе. Общий host — AnikinLabProvider и preset.css, как в примере навигации выше.`}),(0,y.jsxs)(i,{children:[`На экранах реестра и доски подробности показывает inspector RegistryWorkspace и BoardWorkspace. Живой пример и API DetailPanel — на странице `,(0,y.jsx)(u,{href:`/components/detail-panel`,children:`Detail Panel`}),`.`]}),(0,y.jsx)(s,{copyLabel:`Скопировать код: панель подробностей`,language:`tsx`,code:`import { useId } from "react"
import { DetailPanel, DetailPanelProperties, DetailPanelSection } from "@chucky23/design-system/extended/detail-panel"
import { Badge, PropertyField, Textarea, Label } from "@chucky23/design-system/react"
import { CommentThread, Comment, CommentAvatar, CommentContent, CommentHeader, CommentAuthor, CommentTimestamp, CommentBody } from "@chucky23/design-system/extended/comment"

type Task = {
  id: string
  title: string
  status: "open" | "progress" | "blocked" | "closed"
  priority: "P0" | "P1" | "P2" | "P3"
  assignee: string
  dueDate: string
  comments: readonly { id: string; author: string; initials: string; postedAt: string; timestampLabel: string; body: string }[]
}
type TaskDetailProps = {
  task: Task
  open: boolean
  onOpenChange: (open: boolean) => void
  onRequestDelete: (taskId: string) => void // host opens confirmation; no deletion here
  commentDraft: string
  onCommentDraftChange: (text: string) => void // host owns draft and persistence
}
const statuses = {
  open: { label: "Open", variant: "info" },
  progress: { label: "In Progress", variant: "ok" },
  blocked: { label: "Blocked", variant: "err" },
  closed: { label: "Closed", variant: "secondary" },
} as const

export function TaskDetail({ task, open, onOpenChange, onRequestDelete, commentDraft, onCommentDraftChange }: TaskDetailProps) {
  const commentId = useId()
  const status = statuses[task.status]
  return (
    <DetailPanel
      open={open}
      onOpenChange={onOpenChange}
      title={task.title}
      onDelete={() => onRequestDelete(task.id)}
    >
      <DetailPanelProperties>
        <PropertyField label="Status"><Badge variant={status.variant}>{status.label}</Badge></PropertyField>
        <PropertyField label="Priority"><Badge variant="outline">{task.priority}</Badge></PropertyField>
        <PropertyField label="Assignee">{task.assignee}</PropertyField>
        <PropertyField label="Due date">{task.dueDate}</PropertyField>
      </DetailPanelProperties>
      <DetailPanelSection title="Comments">
        <CommentThread>
          {task.comments.map(comment => (
            <Comment key={comment.id}>
              <CommentAvatar fallback={comment.initials} />
              <CommentContent>
                <CommentHeader>
                  <CommentAuthor>{comment.author}</CommentAuthor>
                  <CommentTimestamp dateTime={comment.postedAt}>{comment.timestampLabel}</CommentTimestamp>
                </CommentHeader>
                <CommentBody>{comment.body}</CommentBody>
              </CommentContent>
            </Comment>
          ))}
        </CommentThread>
        <Label htmlFor={commentId}>Add a comment</Label>
        <Textarea id={commentId} value={commentDraft} onChange={event => onCommentDraftChange(event.target.value)} />
      </DetailPanelSection>
    </DetailPanel>
  )
}`})]}),(0,y.jsxs)(n,{id:`api`,label:`API`,children:[(0,y.jsx)(d,{title:`Пропсы FilterGroup`,props:[{name:`title`,type:`string`,defaultValue:`—`,description:`Подпись группы. Именует role group через aria-labelledby.`},{name:`headingLevel`,type:`2 | 3 | 4 | 5 | 6`,defaultValue:`—`,description:`Уровень заголовка подписи. Без него подпись — абзац.`}]}),(0,y.jsx)(d,{title:`Пропсы FilterCheckbox`,props:[{name:`label`,type:`string`,defaultValue:`—`,description:`Подпись фильтра.`},{name:`indicator`,type:`ReactNode`,defaultValue:`—`,description:`Маркер перед подписью, например WorkflowIcon.`},{name:`checked`,type:`boolean`,defaultValue:`—`,description:`Контролируемое состояние.`},{name:`defaultChecked`,type:`boolean`,defaultValue:`—`,description:`Начальное состояние в неконтролируемом режиме.`},{name:`onCheckedChange`,type:`(checked: boolean) => void`,defaultValue:`—`,description:`Колбэк смены состояния.`}]})]})]})})})}export{x as default};