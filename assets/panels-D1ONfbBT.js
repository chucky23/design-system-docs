import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{Gn as t,Rn as n,ar as r,br as i,cr as a,m as o,o as s,sr as c,t as l}from"./chunk-ZW5N5E5H-ScFucA-b.js";import{h as u,j as d,r as f}from"./docs-Ck_i9UNX.js";import"./index-DiNellwx.js";import"./workspace-BwWB7lTa.js";import{n as p,t as m}from"./docs-article-BUNGnjgF.js";import{n as h,r as g,t as _}from"./filter-panel-Cc1w3blj.js";var v=e(),y=[{id:`usage`,label:`Использование`},{id:`workspace-navigation`,label:`Навигация приложения`},{id:`detail-panel`,label:`Панель подробностей`},{id:`api`,label:`API`}];function b(){return(0,v.jsx)(o,{title:`Panels`,description:`Боковые панели: навигация, подробности и фильтры.`,breadcrumbs:m(`/components/panels`),children:(0,v.jsx)(s,{presentation:`article`,label:`Panels`,inspector:p(y),document:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(f,{title:`FilterPanel`,description:`Панель фильтров с группами чекбоксов. FilterGroup группирует FilterCheckbox по категории.`,code:`import { StatusIcon } from "@chucky23/design-system/react"
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
}`,children:(0,v.jsxs)(g,{children:[(0,v.jsxs)(h,{title:`Status`,children:[(0,v.jsx)(_,{label:`Open`,defaultChecked:!0,indicator:(0,v.jsx)(l,{status:`open`,size:`sm`})}),(0,v.jsx)(_,{label:`In Progress`,defaultChecked:!0,indicator:(0,v.jsx)(l,{status:`progress`,size:`sm`})}),(0,v.jsx)(_,{label:`Blocked`,indicator:(0,v.jsx)(l,{status:`blocked`,size:`sm`})}),(0,v.jsx)(_,{label:`Closed`,indicator:(0,v.jsx)(l,{status:`closed`,size:`sm`})})]}),(0,v.jsxs)(h,{title:`Priority`,children:[(0,v.jsx)(_,{label:`P0 — Critical`,defaultChecked:!0}),(0,v.jsx)(_,{label:`P1 — High`,defaultChecked:!0}),(0,v.jsx)(_,{label:`P2 — Medium`}),(0,v.jsx)(_,{label:`P3 — Low`})]}),(0,v.jsxs)(h,{title:`Type`,children:[(0,v.jsx)(_,{label:`Bug`,defaultChecked:!0}),(0,v.jsx)(_,{label:`Feature`}),(0,v.jsx)(_,{label:`Improvement`})]})]})}),(0,v.jsx)(n,{children:`Для навигации приложения используй WorkspaceShell и WorkspacePage: пакет управляет CRT Signal и мобильным меню, приложение — маршрутом и содержимым страницы. DetailPanel показывает детали сущности из списка, FilterPanel — фасеты для таблиц и реестров.`}),(0,v.jsxs)(i,{id:`usage`,label:`Использование`,children:[(0,v.jsx)(n,{children:`Каждая панель импортируется из своего entrypoint, а вкладка Code у примеров содержит готовый компонент с импортами.`}),(0,v.jsxs)(c,{children:[(0,v.jsxs)(a,{children:[`WorkspaceShell и WorkspacePage — `,(0,v.jsx)(r,{children:`@chucky23/design-system/patterns/workspace`}),`.`]}),(0,v.jsxs)(a,{children:[`DetailPanel, DetailPanelProperties, DetailPanelSection —`,` `,(0,v.jsx)(r,{children:`@chucky23/design-system/extended/detail-panel`}),`.`]}),(0,v.jsxs)(a,{children:[`FilterPanel, FilterGroup, FilterCheckbox —`,` `,(0,v.jsx)(r,{children:`@chucky23/design-system/extended/filter-panel`}),`.`]})]})]}),(0,v.jsxs)(i,{id:`workspace-navigation`,label:`Навигация приложения`,children:[(0,v.jsx)(n,{children:`WorkspaceShell принимает brand, groups, activeId и footer. Иконки CRT-навигации — публичные pixel-icons, переход — onActivate. WorkspacePage задаёт название и область работы. Перед использованием подключи Tailwind и preset.css в корневом CSS; AnikinLabProvider устанавливается один раз на уровне приложения. Router принадлежит приложению; переходы с несохранённым вводом проводи через useGuardedTransition из hooks.`}),(0,v.jsx)(t,{copyLabel:`Скопировать код: навигация приложения`,language:`tsx`,code:`import type { ReactNode } from "react"
import { AnikinLabProvider } from "@chucky23/design-system/react"
import { Button } from "@chucky23/design-system/ant"
import { WorkspaceShell, WorkspacePage } from "@chucky23/design-system/patterns/workspace"
import { PixelList, PixelTeam, PixelDashboard } from "@chucky23/design-system/icons/pixel"

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
            { id: "incidents", label: "Incidents", icon: PixelList, onActivate: () => navigate("/incidents") },
            { id: "services", label: "Services", icon: PixelTeam, onActivate: () => navigate("/services") },
            { id: "dashboards", label: "Dashboards", icon: PixelDashboard, onActivate: () => navigate("/dashboards") },
          ],
        }]}
        footer={<Button tone="neutral" variant="ghost" onClick={() => navigate("/settings")}>Settings</Button>}
      >
        <WorkspacePage title={title}>{children}</WorkspacePage>
      </WorkspaceShell>
    </AnikinLabProvider>
  )
}`})]}),(0,v.jsxs)(i,{id:`detail-panel`,label:`Панель подробностей`,children:[(0,v.jsx)(n,{children:`DetailPanel построен на Sheet (slide-over). Содержит заголовок с кнопкой удаления, секцию свойств (PropertyField) и секцию комментариев (CommentThread). Управляется через open/onOpenChange; title формирует SheetTitle. onDelete ниже только запрашивает подтверждение у приложения. Перед AlertDialog закрой DetailPanel, чтобы открытым оставался один модальный слой; удаляй только после подтверждения. Приложение владеет черновиком комментария и защищает его при закрытии или переходе. Общий host — AnikinLabProvider и preset.css, как в примере навигации выше.`}),(0,v.jsxs)(n,{children:[`На экранах реестра и доски подробности показывает inspector RegistryWorkspace и BoardWorkspace. Живой пример и API DetailPanel — на странице `,(0,v.jsx)(u,{href:`/components/detail-panel`,children:`Detail Panel`}),`.`]}),(0,v.jsx)(t,{copyLabel:`Скопировать код: панель подробностей`,language:`tsx`,code:`import { useId } from "react"
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
}`})]}),(0,v.jsxs)(i,{id:`api`,label:`API`,children:[(0,v.jsx)(d,{title:`Пропсы FilterGroup`,props:[{name:`title`,type:`string`,defaultValue:`—`,description:`Подпись группы. Именует role group через aria-labelledby.`},{name:`headingLevel`,type:`2 | 3 | 4 | 5 | 6`,defaultValue:`—`,description:`Уровень заголовка подписи. Без него подпись — абзац.`}]}),(0,v.jsx)(d,{title:`Пропсы FilterCheckbox`,props:[{name:`label`,type:`string`,defaultValue:`—`,description:`Подпись фильтра.`},{name:`indicator`,type:`ReactNode`,defaultValue:`—`,description:`Маркер перед подписью, например WorkflowIcon.`},{name:`checked`,type:`boolean`,defaultValue:`—`,description:`Контролируемое состояние.`},{name:`defaultChecked`,type:`boolean`,defaultValue:`—`,description:`Начальное состояние в неконтролируемом режиме.`},{name:`onCheckedChange`,type:`(checked: boolean) => void`,defaultValue:`—`,description:`Колбэк смены состояния.`}]})]})]})})})}export{b as default};