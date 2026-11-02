import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{Qr as t,Sr as n,j as r,kr as i,x as a}from"./chunk-FJ6G7XYZ-vkrr-AON.js";import{A as o,E as s,Q as c,g as l}from"./docs-CTQgkcVe.js";import"./index-CylhoBOX.js";import"./workspace-B0gvzNJe.js";import{n as u,r as d,t as f}from"./docs-article-CV9v0E7s.js";var p=e(),m=[{id:`usage`,label:`Использование`},{id:`screens`,label:`Замена на экранах`},{id:`api`,label:`API`}];function h(){return(0,p.jsx)(r,{title:`Detail Panel`,description:`Боковая slide-over панель для деталей сущности. Построена на Sheet, содержит заголовок, секции свойств и кнопку удаления.`,breadcrumbs:f(`/components/detail-panel`),meta:u(`/components/detail-panel`),children:(0,p.jsx)(a,{presentation:`article`,label:`Detail Panel`,inspector:d(m),document:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(l,{title:`DetailPanel со свойствами`,description:`Заголовок, свойства и собственные секции. Управляется через open/onOpenChange.`,code:`const [open, setOpen] = useState(false)

<Button onClick={() => setOpen(true)}>Открыть детали</Button>

<DetailPanel
  open={open}
  onOpenChange={setOpen}
  title="Задача TASK-128"
  onDelete={() => console.log("delete")}
>
  <DetailPanelSection title="Свойства">
    <DetailPanelProperties>
      <PropertyField label="Status">
        <Badge variant="ok">In Progress</Badge>
      </PropertyField>
      <PropertyField label="Priority">P1</PropertyField>
      <PropertyField label="Assignee">anikin</PropertyField>
    </DetailPanelProperties>
  </DetailPanelSection>
  <DetailPanelSection title="Описание">
    <p>Детали задачи и комментарии.</p>
  </DetailPanelSection>
</DetailPanel>`,children:(0,p.jsx)(s,{})}),(0,p.jsx)(n,{children:`Slide-over вместо полноэкранного перехода — читаешь детали, не теряя контекст списка. Внутри — типовой набор секций: метаданные через PropertyField, описание, история изменений. Кнопка удаления появляется в шапке при переданном onDelete. За подтверждение опасного действия и сохранность черновика отвечает приложение.`}),(0,p.jsx)(t,{id:`usage`,label:`Использование`,children:(0,p.jsx)(i,{copyLabel:`Скопировать код: использование DetailPanel`,language:`tsx`,code:`import { DetailPanel, DetailPanelProperties, DetailPanelSection } from "@chucky23/design-system/extended/detail-panel"
import { PropertyField } from "@chucky23/design-system/react"

<DetailPanel open={open} onOpenChange={setOpen} title="Задача TASK-128">
  <DetailPanelSection title="Свойства">
    <DetailPanelProperties>
      <PropertyField label="Priority">P1</PropertyField>
    </DetailPanelProperties>
  </DetailPanelSection>
</DetailPanel>`})}),(0,p.jsx)(t,{id:`screens`,label:`Замена на экранах`,children:(0,p.jsxs)(n,{children:[`На экранах коллекций роль боковой панели занял inspector типов экрана: RegistryWorkspace и BoardWorkspace показывают выбранную сущность справа, а DocumentWorkspace с presentation="panel" рисует внутри него заголовок, свойства и действия. DetailPanel пока не помечен устаревшим: он остаётся для мест вне типов экрана. Живые примеры — экраны`,` `,(0,p.jsx)(o,{href:`/examples/sprint/registry`,children:`Реестр`}),` и `,(0,p.jsx)(o,{href:`/examples/sprint/board`,children:`Доска`}),`.`]})}),(0,p.jsxs)(t,{id:`api`,label:`API`,children:[(0,p.jsx)(c,{title:`DetailPanel Props`,props:[{name:`open`,type:`boolean`,defaultValue:`—`,description:`Управляемое состояние открытия панели.`},{name:`onOpenChange`,type:`(open: boolean) => void`,defaultValue:`—`,description:`Колбэк изменения состояния открытия.`},{name:`title`,type:`string`,defaultValue:`—`,description:`Заголовок панели (обязательный).`},{name:`onDelete`,type:`() => void`,defaultValue:`—`,description:`Колбэк кнопки удаления. Если не передан — кнопка скрыта.`}]}),(0,p.jsx)(c,{title:`DetailPanelSection Props`,props:[{name:`title`,type:`string`,defaultValue:`—`,description:`Подпись секции над разделителем.`},{name:`headingLevel`,type:`2 | 3 | 4 | 5 | 6`,defaultValue:`3 в DetailPanel, иначе 4`,description:`Уровень заголовка секции: на один ниже заголовка панели или инспектора. В инспекторе с заголовком h2 передай 3.`},{name:`children`,type:`ReactNode`,defaultValue:`—`,description:`Содержимое секции. Для строк свойств оберни их в DetailPanelProperties.`}]})]})]})})})}export{h as default};