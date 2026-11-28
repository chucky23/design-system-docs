import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{gn as t,qr as n}from"./useLabelableId-Ck49MOKz.js";import{v as r}from"./chunk-L52MJC5L-Da5AAZeo.js";import{Fn as i,M as a,Ot as o,St as s,U as c,it as l,pt as u,rt as d,tn as f}from"./index-DnsCB0LC.js";var p=e();function m(){return(0,p.jsxs)(s,{kind:`component`,route:`/recipes/field`,description:`Поле формы: подпись, подсказка, контрол и ошибка в закреплённом порядке. Бери его для каждого поля в настройках и формах создания, чтобы ошибка и подсказка дошли до скринридера.`,example:(0,p.jsx)(d,{layout:`stack`,code:`<FieldRecipe label="Название задачи" hint="Видно в доске и в реестре." htmlFor="field-title">
  <Input id="field-title" aria-describedby="field-title-hint" defaultValue="Выгрузка отчёта в CSV" />
</FieldRecipe>`,children:(0,p.jsx)(r,{label:`Название задачи`,hint:`Видно в доске и в реестре.`,htmlFor:`field-title`,children:(0,p.jsx)(n,{id:`field-title`,"aria-describedby":`field-title-hint`,defaultValue:`Выгрузка отчёта в CSV`})})}),imports:(0,p.jsx)(u,{code:`import { Button, Input, Textarea } from "@chucky23/design-system/react"
import { FieldRecipe } from "@chucky23/design-system/recipes/field"
import { FormPattern } from "@chucky23/design-system/patterns/form-pattern"`}),usage:(0,p.jsx)(i,{placement:[{screen:{href:`/screens/settings`,label:`Конструктор настроек`},slot:`sections[].content`},{screen:{href:`/screens/document`,label:`Документ`},slot:`document`}],use:[`Поля процесса задач в конструкторе настроек: название, срок, исполнитель.`,`Форма создания задачи в документе в режиме create.`],avoid:[{text:`Свойство задачи в колонке инспектора, которое правят на месте.`,instead:{href:`/screens/document`,label:`Документ`}},{text:`Сообщение о результате сохранения всей формы.`,instead:{href:`/recipes/feedback`,label:`FeedbackRecipe`}},{text:`Длинная справка к полю.`,instead:{href:`/components/field-help`,label:`FieldHelp`}}]}),api:(0,p.jsx)(a,{items:[{name:`FieldRecipe`,props:[{name:`label`,type:`ReactNode`,required:!0,description:`Подпись над контролом (или слева при layout="horizontal"). Без неё у поля нет доступного имени.`},{name:`children`,type:`ReactNode`,required:!0,description:`Контрол: Input, Textarea, Select, SegmentedControl, Switch и другие.`},{name:`layout`,type:`"vertical" | "horizontal"`,defaultValue:`"vertical"`,description:`Вертикальная колонка или горизонтальная строка «подпись слева — контрол справа» с автоскладыванием в одну колонку на ширине меньше 20rem.`},{name:`htmlFor`,type:`string`,description:"id контрола. Из него строятся id подсказки (`<htmlFor>-hint`) и ошибки (`<htmlFor>-error`) для aria-describedby."},{name:`hint`,type:`ReactNode`,description:`Подсказка под подписью, до контрола.`},{name:`optional`,type:`boolean`,defaultValue:`false`,description:`Спокойная встроенная пометка необязательного поля в подписи. Используй там, где большинство полей формы обязательны.`},{name:`optionalLabel`,type:`string`,defaultValue:`"необязательно"`,description:`Текст пометки при optional={true}, для локализации.`},{name:`error`,type:`ReactNode`,description:`Текст ошибки под контролом. Область объявления живёт в разметке всегда, текст в ней появляется при ошибке.`},{name:`id`,type:`string`,description:`id корневого элемента, когда на поле ссылается якорь или тест.`},{name:`labelId`,type:`string`,description:`id подписи, для aria-labelledby составных контролов.`},{name:`className`,type:`LayoutClassName`,description:`Классы раскладки снаружи: отступы и ширина. Цвет и типографику не меняет.`},{name:`style`,type:`SafeStyle`,description:`Встроенные стили без цветовых свойств.`}]}]}),related:(0,p.jsx)(o,{links:[{href:`/components/segmented-control`,label:`SegmentedControl`,description:`Компактный выбор одного из 2–4 значений в строке формы.`},{href:`/components/form-disclosure`,label:`FormDisclosure`,description:`Сворачиваемая секция дополнительных параметров формы.`},{href:`/components/input`,label:`Input`,description:`Однострочный ввод.`},{href:`/components/textarea`,label:`Textarea`,description:`Многострочный ввод.`},{href:`/recipes/feedback`,label:`FeedbackRecipe`,description:`Сообщение о результате сохранения формы.`},{href:`/components/field-help`,label:`FieldHelp`,description:`Справка по полю во всплывающей подсказке.`}]}),children:[(0,p.jsx)(f,{id:`horizontal`,label:`Горизонтальная строка и SegmentedControl`,description:`Для строк формата «вопрос слева — выбор справа» задай layout="horizontal": контрол встаёт справа по центру первой строки, ошибка занимает всю ширину ниже, а при ширине меньше 20rem строка автоматически складывается в колонку.`,children:(0,p.jsx)(d,{layout:`stack`,code:`import { FieldGroup, SegmentedControl, Switch } from "@chucky23/design-system/react"

<FieldGroup>
  <FieldRecipe label="Название задачи" htmlFor="horiz-title">
    <Input id="horiz-title" defaultValue="Обновить токены форм" />
  </FieldRecipe>
  <FieldRecipe layout="horizontal" label="Назначение" labelId="horiz-assignee" hint="Как выбирать исполнителя">
    <SegmentedControl
      aria-labelledby="horiz-assignee"
      width="md"
      defaultValue="auto"
      options={[
        { value: "auto", label: "Авто" },
        { value: "manual", label: "Вручную" },
        { value: "duty", label: "Дежурный" },
      ]}
    />
  </FieldRecipe>
  <FieldRecipe layout="horizontal" label="Автосохранение" hint="Сохраняет черновик каждые 30 с" htmlFor="horiz-autosave">
    <Switch id="horiz-autosave" defaultChecked />
  </FieldRecipe>
</FieldGroup>`,children:(0,p.jsx)(l,{})})}),(0,p.jsx)(f,{id:`error`,label:`Ошибка`,description:`Когда значение не прошло проверку: ошибка встаёт под контролом, контрол получает aria-invalid.`,children:(0,p.jsx)(d,{layout:`stack`,code:`<FieldRecipe label="Срок" error="Укажи дату не раньше сегодняшней." htmlFor="field-due">
  <Input id="field-due" aria-invalid aria-describedby="field-due-error" defaultValue="12.09.2025" />
</FieldRecipe>`,children:(0,p.jsx)(r,{label:`Срок`,error:`Укажи дату не раньше сегодняшней.`,htmlFor:`field-due`,children:(0,p.jsx)(n,{id:`field-due`,"aria-invalid":!0,"aria-describedby":`field-due-error`,defaultValue:`12.09.2025`})})})}),(0,p.jsx)(f,{id:`hint-error`,label:`Подсказка и ошибка вместе`,description:`Когда подсказка нужна и после ошибки: обе строки остаются, aria-describedby ссылается на обе.`,children:(0,p.jsx)(d,{layout:`stack`,code:`<FieldRecipe
  label="Описание"
  hint="Что случилось и как воспроизвести."
  error="Опиши шаги воспроизведения."
  htmlFor="field-description"
>
  <Textarea id="field-description" aria-invalid aria-describedby="field-description-hint field-description-error" />
</FieldRecipe>`,children:(0,p.jsx)(r,{label:`Описание`,hint:`Что случилось и как воспроизвести.`,error:`Опиши шаги воспроизведения.`,htmlFor:`field-description`,children:(0,p.jsx)(t,{id:`field-description`,"aria-invalid":!0,"aria-describedby":`field-description-hint field-description-error`})})})}),(0,p.jsx)(f,{id:`optional`,label:`Необязательное поле`,description:`Когда большинство полей формы обязательны, а отдельное поле можно оставить пустым: пометка остаётся в текстовом потоке подписи и аккуратно переносится в узкой колонке.`,children:(0,p.jsx)(d,{layout:`stack`,code:`<FieldRecipe label="Лимит ходов" optional htmlFor="field-max-turns">
  <Input id="field-max-turns" type="number" placeholder="Без ограничения" />
</FieldRecipe>`,children:(0,p.jsx)(r,{label:`Лимит ходов`,optional:!0,htmlFor:`field-max-turns`,children:(0,p.jsx)(n,{id:`field-max-turns`,type:`number`,placeholder:`Без ограничения`})})})}),(0,p.jsx)(f,{id:`disabled`,label:`Недоступное поле`,description:`Когда значение видно, но менять его нельзя: подсказка объясняет почему.`,children:(0,p.jsx)(d,{layout:`stack`,code:`<FieldRecipe label="Автор" hint="Задаётся при создании." htmlFor="field-author">
  <Input id="field-author" disabled defaultValue="Анна Крылова" />
</FieldRecipe>`,children:(0,p.jsx)(r,{label:`Автор`,hint:`Задаётся при создании.`,htmlFor:`field-author`,children:(0,p.jsx)(n,{id:`field-author`,disabled:!0,defaultValue:`Анна Крылова`})})})}),(0,p.jsx)(f,{id:`form`,label:`Поле в форме`,description:`Когда поле живёт в форме с отправкой: пустая форма показывает ошибку, заполненная — ожидание и подтверждение.`,children:(0,p.jsx)(d,{fragment:!0,layout:`stack`,code:`<FormPattern onSubmit={submit} footer={<Button type="submit" loading={saving} disabled={saving}>Сохранить задачу</Button>}>
  <FieldRecipe label="Название задачи" htmlFor="title" hint="Обязательное поле" error={error}>
    <Input
      id="title"
      value={title}
      disabled={saving}
      aria-invalid={!!error}
      aria-describedby={error ? "title-hint title-error" : "title-hint"}
      onChange={change}
    />
  </FieldRecipe>
</FormPattern>`,children:(0,p.jsx)(c,{})})})]})}export{m as default};