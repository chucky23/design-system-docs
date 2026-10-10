import{$n as e,Hn as t,Mo as n,kn as r}from"./chunk-ZW5N5E5H-C8fDcLjq.js";import{M as i,d as a,k as o,u as s,y as c}from"./docs-CtJuZ0WF.js";import"./index-D3G-KnJA.js";var l=n();function u(){return(0,l.jsxs)(o,{gap:`lg`,children:[(0,l.jsx)(t,{title:`Composition`,description:`Поддерживаемые recipes и patterns: действия, формы, метаданные, детали и задачи.`}),(0,l.jsx)(i,{"data-body":!0,children:`Подключи AnikinLabProvider и preset.css по Getting started. Здесь показаны supported API после аудита 2026-10-04. Hybrid layouts ограничивают root styles; escape-hatch API сохраняют native props и свободные slots. Их качество проверяется в композиции. Это локальные демо без backend и persistence.`}),(0,l.jsxs)(e,{label:`actions and forms`,children:[(0,l.jsx)(i,{"data-body":!0,children:`FieldRecipe связывает label через htmlFor; hint/error нужно связать с control через aria-describedby. FormPattern управляет только layout и onSubmit. Приложение хранит данные, предотвращает navigation, валидирует и объявляет error/success. Нажми «Сохранить» с пустым названием, затем заполни поле: увидишь error, loading, disabled и success. Toggle хранит pressed в caller; CopyButton обрабатывает clipboard capability.`}),(0,l.jsx)(s,{}),(0,l.jsx)(r,{language:`tsx`,code:`import { Input, Button, CopyButton, Toggle } from "@chucky23/design-system/react"
import { FieldRecipe } from "@chucky23/design-system/recipes/field"
import { FeedbackRecipe } from "@chucky23/design-system/recipes/feedback"
import { FormPattern } from "@chucky23/design-system/patterns/form-pattern"
<FormPattern onSubmit={save} footer={<Button type="submit" loading={saving}>Сохранить</Button>}>
  <FieldRecipe label="Название" htmlFor="title" error={error ? <span id="title-error" role="alert">{error}</span> : undefined}>
    <Input id="title" value={title} onChange={event => setTitle(event.target.value)}
      aria-invalid={!!error} aria-describedby={error ? "title-error" : undefined} />
  </FieldRecipe>
  {saved && <FeedbackRecipe role="status" tone="ok" title="Сохранено" />}
</FormPattern>`}),(0,l.jsx)(i,{"data-body":!0,children:`Button, IconButton, CopyButton и Toggle из /react сохраняют native совместимость. Основной product path использует curated Button из /ant; icon-only действия всегда имеют label. FormPattern/FieldRecipe не отправляют данные и не создают announcements автоматически.`})]}),(0,l.jsxs)(e,{label:`rows metadata and page layouts`,children:[(0,l.jsx)(i,{"data-body":!0,children:`EntityRowRecipe задаёт identity row; MetaClusterRecipe, SeverityRecipe и StatusRecipe показывают metadata с текстовым значением. SectionHeaderRecipe задаёт заголовок, ToolbarRecipe — actions/filters. RegistryPattern не фильтрует данные и не скрывает emptyState автоматически. PageStack и SectionStack — статические layouts; DetailPattern и SplitPanelPattern переключают колонки по ширине. Resizing и animation отсутствуют. TaskListPattern/TaskBoardPattern получают готовые slots.`}),(0,l.jsx)(a,{}),(0,l.jsx)(r,{language:`tsx`,code:`import { EntityRowRecipe } from "@chucky23/design-system/recipes/entity-row"
import { MetaClusterRecipe } from "@chucky23/design-system/recipes/meta-cluster"
import { SectionHeaderRecipe } from "@chucky23/design-system/recipes/section-header"
import { SeverityRecipe } from "@chucky23/design-system/recipes/severity"
import { StatusRecipe } from "@chucky23/design-system/recipes/status"
import { ToolbarRecipe } from "@chucky23/design-system/recipes/toolbar"
import { PageStack } from "@chucky23/design-system/patterns/page-stack"
import { SectionStack } from "@chucky23/design-system/patterns/section-stack"
import { RegistryPattern } from "@chucky23/design-system/patterns/registry-pattern"
import { DetailPattern } from "@chucky23/design-system/patterns/detail-pattern"
import { SplitPanelPattern } from "@chucky23/design-system/patterns/split-panel-pattern"
import { TaskListPattern } from "@chucky23/design-system/patterns/task-list-pattern"
import { TaskBoardPattern } from "@chucky23/design-system/patterns/task-board-pattern"
<RegistryPattern ariaLabel="Задачи" toolbar={toolbar} emptyState={empty ? emptyState : undefined}>
  {items.map(item => <EntityRowRecipe key={item.id} title={item.title} trailing={openAction(item)} />)}
</RegistryPattern>
<SplitPanelPattern primary={<TaskListPattern list={list} />} secondary={metadata} />
<DetailPattern aside={metadata}>{detail}</DetailPattern>`}),(0,l.jsxs)(i,{"data-body":!0,children:[`Сохраняй heading hierarchy, именуй actions и filters. Loading/error/success принадлежат data owner; проверяй их там, где есть async операция. BoardCardRecipe и HierarchyRowRecipe показаны на странице `,(0,l.jsx)(c,{href:`/surfaces`,children:`Surfaces`}),`; доступное перемещение и controlled data update принадлежат caller. StatusSelectPattern используй для async смены статуса.`]})]})]})}export{u as default};