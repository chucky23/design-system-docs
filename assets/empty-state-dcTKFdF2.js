import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{Q as t}from"./chunk-CZZ4CD4Q-C_o4ee41.js";import{Jn as n,Kn as r,Xn as i,Y as a,Yn as o,as as s,qn as c,vt as l}from"./useLabelableId-C6GEk9LR.js";import{o as u,r as d,s as f,t as p}from"./chunk-YZVMF2KA-Da2iyKNP.js";import{A as m,Ut as h,X as g,_t as _,dt as v,rt as y,vn as b}from"./index-BX5CNJVf.js";var x=e();function S(){return(0,x.jsxs)(v,{kind:`component`,route:`/components/empty-state`,description:`Объясняет, почему список пуст, и предлагает следующий шаг.`,usage:(0,x.jsx)(b,{use:[`Пустой список, поиск без результатов, раздел без данных: причина и следующий шаг.`,`Размер по весу пустоты: default — главная коллекция экрана, compact — необязательный раздел карточки или документа, inline — необязательное поле в строке свойства.`],avoid:[{text:`Данные не загрузились.`,instead:{href:`/components/error-state`,label:`ErrorState`}},{text:`Пустая коллекция в реестре или доске: тип экрана показывает её через empty.`,instead:{href:`/screens/registry`,label:`Реестр`}}]}),example:(0,x.jsx)(g,{layout:`block`,code:`<EmptyState
  icon={<FolderIcon />}
  title="Задач пока нет"
  description="Создай первую задачу, и она появится в реестре."
  action={<Button>Создать задачу</Button>}
/>`,children:(0,x.jsx)(r,{icon:(0,x.jsx)(a,{}),title:`Задач пока нет`,description:`Создай первую задачу, и она появится в реестре.`,action:(0,x.jsx)(s,{children:`Создать задачу`})})}),imports:(0,x.jsx)(y,{code:`import {
  Button, Card, CardContent, CardHeader, CardTitle, EmptyState, EmptyStateIcon, EmptyStateTitle,
  EmptyStateDescription, EmptyStateAction, PropertyField,
} from "@chucky23/design-system/react"
import { FolderIcon, SearchIcon } from "@chucky23/design-system/icons"`}),api:(0,x.jsx)(m,{items:[{name:`EmptyState`,props:[{name:`title`,type:`ReactNode`,description:`Заголовок. Игнорируется, если переданы children.`},{name:`description`,type:`ReactNode`,description:`Причина и подсказка, до 24rem по ширине.`},{name:`size`,type:`"default" | "compact" | "inline"`,defaultValue:`"default"`,description:`Вес пустоты. default — главная коллекция: значок, заголовок, описание, кнопка. compact — необязательный раздел: одна приглушённая строка без значка. inline — строка свойства «Файлов нет · Прикрепить». В тихих размерах действие — кнопка ghost или link.`},{name:`icon`,type:`ReactNode`,description:`Значок в круге 28 px. В размерах compact и inline не рисуется.`},{name:`illustration`,type:`ReactNode`,description:`Рисунок 160 px над заголовком, например EmptyListIllustration. Заменяет icon, только в размере default, скрыт от экранного диктора.`},{name:`action`,type:`ReactNode`,description:`Главное действие, обычно Button.`},{name:`headingLevel`,type:`2 | 3 | 4`,defaultValue:`2`,description:`Уровень заголовка в короткой записи.`},{name:`children`,type:`ReactNode`,description:`Составная запись из частей ниже. Нельзя смешивать с title, description, icon и action.`}]},{name:`EmptyStateIcon, EmptyStateIllustration, EmptyStateTitle, EmptyStateDescription, EmptyStateAction`,props:[{name:`children`,type:`ReactNode`,description:`Содержимое части. EmptyStateTitle рисует h3.`}]}]}),related:(0,x.jsx)(_,{links:[{href:`/components/error-state`,label:`ErrorState`,description:`Сбой вместо пустоты.`},{href:`/components/skeleton`,label:`Skeleton`,description:`Заглушка, пока данные грузятся.`},{href:`/foundations/illustrations`,label:`Иллюстрации`,description:`Рисунки пустых состояний для пропа illustration.`},{href:`/screens/registry`,label:`Реестр`,description:`Экран, в слот которого встаёт пустое состояние.`}]}),children:[(0,x.jsxs)(h,{id:`sizes`,label:`Размеры`,description:`Размер выбирают по тому, насколько пустота важна. Крупный блок оставь главной коллекции экрана, необязательные разделы и поля пустеют тихо.`,children:[(0,x.jsx)(g,{title:`Главная коллекция: default`,layout:`block`,code:`<EmptyState
  icon={<FolderIcon />}
  title="В спринте 24 нет задач"
  description="Перенеси задачи из бэклога или создай новую."
  action={<Button>Создать задачу</Button>}
/>`,children:(0,x.jsx)(r,{icon:(0,x.jsx)(a,{}),title:`В спринте 24 нет задач`,description:`Перенеси задачи из бэклога или создай новую.`,action:(0,x.jsx)(s,{children:`Создать задачу`})})}),(0,x.jsx)(g,{title:`Раздел карточки: compact`,layout:`stack`,code:`<Card size="sm">
  <CardHeader><CardTitle>Вложения</CardTitle></CardHeader>
  <CardContent>
    <EmptyState
      size="compact"
      title="Файлов пока нет"
      action={<Button tone="neutral" variant="ghost" size="xs">Прикрепить</Button>}
    />
  </CardContent>
</Card>`,children:(0,x.jsxs)(p,{size:`sm`,className:`w-full`,children:[(0,x.jsx)(u,{children:(0,x.jsx)(f,{children:`Вложения`})}),(0,x.jsx)(d,{children:(0,x.jsx)(r,{size:`compact`,title:`Файлов пока нет`,action:(0,x.jsx)(s,{tone:`neutral`,variant:`ghost`,size:`xs`,children:`Прикрепить`})})})]})}),(0,x.jsx)(g,{title:`Необязательное поле: inline`,layout:`stack`,code:`<PropertyField label="Ревьюер">
  <EmptyState
    size="inline"
    title="Не назначен"
    action={<Button variant="link" size="xs">Назначить</Button>}
  />
</PropertyField>`,children:(0,x.jsx)(t,{label:`Ревьюер`,children:(0,x.jsx)(r,{size:`inline`,title:`Не назначен`,action:(0,x.jsx)(s,{variant:`link`,size:`xs`,children:`Назначить`})})})})]}),(0,x.jsx)(h,{id:`composed`,label:`По частям`,description:`Когда части требуют своей разметки, например заголовок другого уровня или две кнопки.`,children:(0,x.jsx)(g,{layout:`block`,code:`<EmptyState>
  <EmptyStateIcon><SearchIcon /></EmptyStateIcon>
  <EmptyStateTitle>Ничего не найдено</EmptyStateTitle>
  <EmptyStateDescription>Измени запрос или сбрось фильтры.</EmptyStateDescription>
  <EmptyStateAction><Button tone="neutral" variant="outline">Сбросить фильтры</Button></EmptyStateAction>
</EmptyState>`,children:(0,x.jsxs)(r,{children:[(0,x.jsx)(o,{children:(0,x.jsx)(l,{})}),(0,x.jsx)(i,{children:`Ничего не найдено`}),(0,x.jsx)(n,{children:`Измени запрос или сбрось фильтры.`}),(0,x.jsx)(c,{children:(0,x.jsx)(s,{tone:`neutral`,variant:`outline`,children:`Сбросить фильтры`})})]})})})]})}export{S as default};