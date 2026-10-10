import{$n as e,Hn as t,Mo as n,kn as r,yn as i}from"./chunk-ZW5N5E5H-C8fDcLjq.js";import{M as a,r as o,s}from"./docs-CtJuZ0WF.js";import"./index-D3G-KnJA.js";import{n as c,r as l,t as u}from"./filter-panel-c7B_w437.js";var d=n();function f(){return(0,d.jsxs)(s,{className:`flex flex-col gap-6`,children:[(0,d.jsx)(t,{title:`Panels`,description:`Боковые панели: навигация, подробности и фильтры.`}),(0,d.jsx)(a,{className:`max-w-prose`,"data-body":!0,children:`Для навигации приложения используй WorkspaceShell и WorkspacePage: пакет управляет CRT Signal и мобильным меню, приложение — маршрутом и содержимым страницы. DetailPanel показывает детали сущности из списка, FilterPanel — фасеты для таблиц и реестров.`}),(0,d.jsx)(e,{label:`workspace navigation`,children:(0,d.jsxs)(s,{className:`flex flex-col gap-3`,children:[(0,d.jsxs)(s,{className:`rounded-sm border px-3 py-2.5`,children:[(0,d.jsxs)(a,{className:`font-mono text-xs font-medium uppercase tracking-widest`,children:[(0,d.jsx)(a,{as:`span`,signal:`ok`,children:`$`}),` `,`WorkspaceShell + WorkspacePage`]}),(0,d.jsx)(a,{className:`mt-0.5 text-xs`,"data-body":!0,children:`WorkspaceShell принимает brand, groups, activeId и footer. Иконки CRT-навигации — публичные pixel-icons, переход — onActivate. WorkspacePage задаёт название и область работы. Перед использованием подключи Tailwind и preset.css в корневом CSS; AnikinLabProvider устанавливается один раз на уровне приложения. Router принадлежит приложению; переходы с несохранённым вводом проводи через useGuardedTransition из hooks.`})]}),(0,d.jsx)(r,{language:`tsx`,code:`import type { ReactNode } from "react"
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
}`})]})}),(0,d.jsx)(e,{label:`detail panel`,children:(0,d.jsxs)(s,{className:`flex flex-col gap-3`,children:[(0,d.jsxs)(s,{className:`rounded-sm border px-3 py-2.5`,children:[(0,d.jsxs)(a,{className:`font-mono text-xs font-medium uppercase tracking-widest`,children:[(0,d.jsx)(a,{as:`span`,signal:`ok`,children:`$`}),` `,`DetailPanel Structure`]}),(0,d.jsx)(a,{className:`mt-0.5 text-xs`,"data-body":!0,children:`DetailPanel построен на Sheet (slide-over). Содержит заголовок с кнопкой удаления, секцию свойств (PropertyField) и секцию комментариев (CommentThread). Управляется через open/onOpenChange; title формирует SheetTitle. onDelete ниже только запрашивает подтверждение у приложения. Перед AlertDialog закрой DetailPanel, чтобы открытым оставался один модальный слой; удаляй только после подтверждения. Приложение владеет черновиком комментария и защищает его при закрытии или переходе. Общий host — AnikinLabProvider и preset.css, как в примере навигации выше.`})]}),(0,d.jsx)(r,{language:`tsx`,code:`import { useId } from "react"
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
}`})]})}),(0,d.jsx)(e,{label:`filter panel`,children:(0,d.jsx)(o,{title:`FilterPanel`,description:`Панель фильтров с группами чекбоксов. FilterGroup группирует FilterCheckbox по категории.`,code:`import { StatusIcon } from "@chucky23/design-system/react"
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
}`,children:(0,d.jsx)(s,{className:`w-full max-w-xs rounded-sm border`,children:(0,d.jsxs)(l,{children:[(0,d.jsxs)(c,{title:`Status`,children:[(0,d.jsx)(u,{label:`Open`,defaultChecked:!0,indicator:(0,d.jsx)(i,{status:`open`,size:`sm`})}),(0,d.jsx)(u,{label:`In Progress`,defaultChecked:!0,indicator:(0,d.jsx)(i,{status:`progress`,size:`sm`})}),(0,d.jsx)(u,{label:`Blocked`,indicator:(0,d.jsx)(i,{status:`blocked`,size:`sm`})}),(0,d.jsx)(u,{label:`Closed`,indicator:(0,d.jsx)(i,{status:`closed`,size:`sm`})})]}),(0,d.jsxs)(c,{title:`Priority`,children:[(0,d.jsx)(u,{label:`P0 — Critical`,defaultChecked:!0}),(0,d.jsx)(u,{label:`P1 — High`,defaultChecked:!0}),(0,d.jsx)(u,{label:`P2 — Medium`}),(0,d.jsx)(u,{label:`P3 — Low`})]}),(0,d.jsxs)(c,{title:`Type`,children:[(0,d.jsx)(u,{label:`Bug`,defaultChecked:!0}),(0,d.jsx)(u,{label:`Feature`}),(0,d.jsx)(u,{label:`Improvement`})]})]})})})})]})}export{f as default};