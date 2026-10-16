import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{Gn as t,Rn as n,br as r,m as i,o as a}from"./chunk-ZW5N5E5H-ScFucA-b.js";import{h as o,j as s,p as c,r as l}from"./docs-Ck_i9UNX.js";import"./index-DiNellwx.js";import"./workspace-BwWB7lTa.js";import{n as u,t as d}from"./docs-article-BUNGnjgF.js";var f=e(),p=[{id:`usage`,label:`Использование`},{id:`screens`,label:`Замена на экранах`},{id:`api`,label:`API`}];function m(){return(0,f.jsx)(i,{title:`Detail Panel`,description:`Боковая slide-over панель для деталей сущности. Построена на Sheet, содержит заголовок, секции свойств и кнопку удаления.`,breadcrumbs:d(`/components/detail-panel`),children:(0,f.jsx)(a,{presentation:`article`,label:`Detail Panel`,inspector:u(p),document:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(l,{title:`DetailPanel со свойствами`,description:`Заголовок, свойства и собственные секции. Управляется через open/onOpenChange.`,code:`const [open, setOpen] = useState(false)

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
</DetailPanel>`,children:(0,f.jsx)(c,{})}),(0,f.jsx)(n,{children:`Slide-over вместо полноэкранного перехода — читаешь детали, не теряя контекст списка. Внутри — типовой набор секций: метаданные через PropertyField, описание, история изменений. Кнопка удаления появляется в шапке при переданном onDelete. За подтверждение опасного действия и сохранность черновика отвечает приложение.`}),(0,f.jsx)(r,{id:`usage`,label:`Использование`,children:(0,f.jsx)(t,{copyLabel:`Скопировать код: использование DetailPanel`,language:`tsx`,code:`import { DetailPanel, DetailPanelProperties, DetailPanelSection } from "@chucky23/design-system/extended/detail-panel"
import { PropertyField } from "@chucky23/design-system/react"

<DetailPanel open={open} onOpenChange={setOpen} title="Задача TASK-128">
  <DetailPanelSection title="Свойства">
    <DetailPanelProperties>
      <PropertyField label="Priority">P1</PropertyField>
    </DetailPanelProperties>
  </DetailPanelSection>
</DetailPanel>`})}),(0,f.jsx)(r,{id:`screens`,label:`Замена на экранах`,children:(0,f.jsxs)(n,{children:[`На экранах коллекций роль боковой панели занял inspector типов экрана: RegistryWorkspace и BoardWorkspace показывают выбранную сущность справа, а DocumentWorkspace с presentation="panel" рисует внутри него заголовок, свойства и действия. DetailPanel пока не помечен устаревшим: он остаётся для мест вне типов экрана. Живые примеры — экраны`,` `,(0,f.jsx)(o,{href:`/screens/registry`,children:`Реестр`}),` и `,(0,f.jsx)(o,{href:`/screens/board`,children:`Доска`}),`.`]})}),(0,f.jsxs)(r,{id:`api`,label:`API`,children:[(0,f.jsx)(s,{title:`DetailPanel Props`,props:[{name:`open`,type:`boolean`,defaultValue:`—`,description:`Управляемое состояние открытия панели.`},{name:`onOpenChange`,type:`(open: boolean) => void`,defaultValue:`—`,description:`Колбэк изменения состояния открытия.`},{name:`title`,type:`string`,defaultValue:`—`,description:`Заголовок панели (обязательный).`},{name:`onDelete`,type:`() => void`,defaultValue:`—`,description:`Колбэк кнопки удаления. Если не передан — кнопка скрыта.`}]}),(0,f.jsx)(s,{title:`DetailPanelSection Props`,props:[{name:`title`,type:`string`,defaultValue:`—`,description:`Подпись секции над разделителем.`},{name:`headingLevel`,type:`2 | 3 | 4 | 5 | 6`,defaultValue:`3 в DetailPanel, иначе 4`,description:`Уровень заголовка секции: на один ниже заголовка панели или инспектора. В инспекторе с заголовком h2 передай 3.`},{name:`children`,type:`ReactNode`,defaultValue:`—`,description:`Содержимое секции. Для строк свойств оберни их в DetailPanelProperties.`}]})]})]})})})}export{m as default};