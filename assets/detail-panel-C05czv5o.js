import{$n as e,Hn as t,Mo as n}from"./chunk-ZW5N5E5H-C8fDcLjq.js";import{H as r,M as i,h as a,r as o,s}from"./docs-CtJuZ0WF.js";import"./index-D3G-KnJA.js";var c=n();function l(){return(0,c.jsxs)(s,{className:`flex flex-col gap-6`,children:[(0,c.jsx)(t,{title:`Detail Panel`,description:`Боковая slide-over панель для деталей сущности. Построена на Sheet, содержит заголовок, секции свойств и кнопку удаления.`}),(0,c.jsx)(i,{className:`max-w-prose`,"data-body":!0,children:`Slide-over вместо полноэкранного перехода — читаешь детали, не теряя контекст списка. Внутри — типовой набор секций: метаданные через PropertyField, описание, история изменений. Кнопка удаления появляется в шапке при переданном onDelete. Подтверждение опасного действия и сохранность черновика обеспечивает приложение.`}),(0,c.jsx)(e,{label:`basic detail panel`,children:(0,c.jsx)(o,{title:`DetailPanel со свойствами`,description:`Заголовок + Properties + кастомные секции. Управляется через open/onOpenChange.`,code:`const [open, setOpen] = useState(false)

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
</DetailPanel>`,children:(0,c.jsx)(a,{})})}),(0,c.jsx)(e,{label:`api reference`,children:(0,c.jsx)(r,{title:`DetailPanel Props`,props:[{name:`open`,type:`boolean`,description:`Управляемое состояние открытия панели.`},{name:`onOpenChange`,type:`(open: boolean) => void`,description:`Коллбек изменения состояния открытия.`},{name:`title`,type:`string`,description:`Заголовок панели (обязательный).`},{name:`onDelete`,type:`() => void`,description:`Коллбек кнопки удаления. Если не передан — кнопка скрыта.`}]})})]})}export{l as default};