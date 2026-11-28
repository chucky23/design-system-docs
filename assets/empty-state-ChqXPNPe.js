import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{st as t}from"./chunk-NA6PDP3U-Cjn5wWWb.js";import{$ as n,St as r,cr as i,dr as a,lr as o,sr as s,ur as c,ws as l}from"./useLabelableId-Ck49MOKz.js";import{o as u,r as d,s as f,t as p}from"./chunk-YZVMF2KA-Da2iyKNP.js";import{Fn as m,M as h,Ot as g,St as _,pt as v,rt as y,tn as b}from"./index-DnsCB0LC.js";var x=e();function S(){return(0,x.jsxs)(_,{kind:`component`,route:`/components/empty-state`,description:`Объясняет, почему список пуст, и предлагает следующий шаг.`,usage:(0,x.jsx)(m,{use:[`Пустой список, поиск без результатов, раздел без данных: причина и следующий шаг.`,`Размер по весу пустоты: default — главная коллекция экрана, compact — необязательный раздел карточки или документа, inline — необязательное поле в строке свойства.`],avoid:[{text:`Данные не загрузились.`,instead:{href:`/components/error-state`,label:`ErrorState`}},{text:`Пустая коллекция в реестре или доске: тип экрана показывает её через empty.`,instead:{href:`/screens/registry`,label:`Реестр`}}]}),example:(0,x.jsx)(y,{layout:`block`,code:`<EmptyState
  icon={<FolderIcon />}
  title="Задач пока нет"
  description="Создай первую задачу, и она появится в реестре."
  action={<Button>Создать задачу</Button>}
/>`,gpuiCode:`use anikin_lab_gpui::prelude::*;

let empty = DsEmptyState::new("Задач пока нет")
    .icon(IconName::Inbox)
    .description("Создай первую задачу, и она появится в реестре.")
    .action(
        DsButton::new("create-task")
            .label("Создать задачу")
            .tone(DsButtonTone::Primary)
            .variant(DsButtonVariant::Solid),
    );`,children:(0,x.jsx)(s,{icon:(0,x.jsx)(n,{}),title:`Задач пока нет`,description:`Создай первую задачу, и она появится в реестре.`,action:(0,x.jsx)(l,{children:`Создать задачу`})})}),imports:(0,x.jsx)(v,{code:`import {
  Button, Card, CardContent, CardHeader, CardTitle, EmptyState, EmptyStateIcon, EmptyStateTitle,
  EmptyStateDescription, EmptyStateAction, PropertyField,
} from "@chucky23/design-system/react"
import { FolderIcon, SearchIcon } from "@chucky23/design-system/icons"`}),api:(0,x.jsx)(h,{items:[{name:`EmptyState`,props:[{name:`title`,type:`ReactNode`,description:`Заголовок. Игнорируется, если переданы children.`},{name:`description`,type:`ReactNode`,description:`Причина и подсказка, до 24rem по ширине.`},{name:`size`,type:`"default" | "compact" | "inline"`,defaultValue:`"default"`,description:`Вес пустоты. default — главная коллекция: значок, заголовок, описание, кнопка. compact — необязательный раздел: одна приглушённая строка без значка. inline — строка свойства «Файлов нет · Прикрепить». В тихих размерах действие — кнопка ghost или link.`},{name:`icon`,type:`ReactNode`,description:`Значок в круге 28 px. В размерах compact и inline не рисуется.`},{name:`illustration`,type:`ReactNode`,description:`Рисунок 160 px над заголовком, например EmptyListIllustration. Заменяет icon, только в размере default, скрыт от экранного диктора.`},{name:`action`,type:`ReactNode`,description:`Главное действие, обычно Button.`},{name:`headingLevel`,type:`2 | 3 | 4`,defaultValue:`2`,description:`Уровень заголовка в короткой записи.`},{name:`children`,type:`ReactNode`,description:`Составная запись из частей ниже. Нельзя смешивать с title, description, icon и action.`}]},{name:`EmptyStateIcon, EmptyStateIllustration, EmptyStateTitle, EmptyStateDescription, EmptyStateAction`,props:[{name:`children`,type:`ReactNode`,description:`Содержимое части. EmptyStateTitle рисует h3.`}]}]}),related:(0,x.jsx)(g,{links:[{href:`/components/error-state`,label:`ErrorState`,description:`Сбой вместо пустоты.`},{href:`/components/skeleton`,label:`Skeleton`,description:`Заглушка, пока данные грузятся.`},{href:`/foundations/illustrations`,label:`Иллюстрации`,description:`Рисунки пустых состояний для пропа illustration.`},{href:`/screens/registry`,label:`Реестр`,description:`Экран, в слот которого встаёт пустое состояние.`}]}),children:[(0,x.jsxs)(b,{id:`sizes`,label:`Размеры`,description:`Размер выбирают по тому, насколько пустота важна. Крупный блок оставь главной коллекции экрана, необязательные разделы и поля пустеют тихо.`,children:[(0,x.jsx)(y,{title:`Главная коллекция: default`,layout:`block`,code:`<EmptyState
  icon={<FolderIcon />}
  title="В спринте 24 нет задач"
  description="Перенеси задачи из бэклога или создай новую."
  action={<Button>Создать задачу</Button>}
/>`,children:(0,x.jsx)(s,{icon:(0,x.jsx)(n,{}),title:`В спринте 24 нет задач`,description:`Перенеси задачи из бэклога или создай новую.`,action:(0,x.jsx)(l,{children:`Создать задачу`})})}),(0,x.jsx)(y,{title:`Раздел карточки: compact`,layout:`stack`,code:`<Card size="sm">
  <CardHeader><CardTitle>Вложения</CardTitle></CardHeader>
  <CardContent>
    <EmptyState
      size="compact"
      title="Файлов пока нет"
      action={<Button tone="neutral" variant="ghost" size="xs">Прикрепить</Button>}
    />
  </CardContent>
</Card>`,children:(0,x.jsxs)(p,{size:`sm`,className:`w-full`,children:[(0,x.jsx)(u,{children:(0,x.jsx)(f,{children:`Вложения`})}),(0,x.jsx)(d,{children:(0,x.jsx)(s,{size:`compact`,title:`Файлов пока нет`,action:(0,x.jsx)(l,{tone:`neutral`,variant:`ghost`,size:`xs`,children:`Прикрепить`})})})]})}),(0,x.jsx)(y,{title:`Необязательное поле: inline`,layout:`stack`,code:`<PropertyField label="Ревьюер">
  <EmptyState
    size="inline"
    title="Не назначен"
    action={<Button variant="link" size="xs">Назначить</Button>}
  />
</PropertyField>`,children:(0,x.jsx)(t,{label:`Ревьюер`,children:(0,x.jsx)(s,{size:`inline`,title:`Не назначен`,action:(0,x.jsx)(l,{variant:`link`,size:`xs`,children:`Назначить`})})})})]}),(0,x.jsx)(b,{id:`composed`,label:`По частям`,description:`Когда части требуют своей разметки, например заголовок другого уровня или две кнопки.`,children:(0,x.jsx)(y,{layout:`block`,code:`<EmptyState>
  <EmptyStateIcon><SearchIcon /></EmptyStateIcon>
  <EmptyStateTitle>Ничего не найдено</EmptyStateTitle>
  <EmptyStateDescription>Измени запрос или сбрось фильтры.</EmptyStateDescription>
  <EmptyStateAction><Button tone="neutral" variant="outline">Сбросить фильтры</Button></EmptyStateAction>
</EmptyState>`,children:(0,x.jsxs)(s,{children:[(0,x.jsx)(c,{children:(0,x.jsx)(r,{})}),(0,x.jsx)(a,{children:`Ничего не найдено`}),(0,x.jsx)(o,{children:`Измени запрос или сбрось фильтры.`}),(0,x.jsx)(i,{children:(0,x.jsx)(l,{tone:`neutral`,variant:`outline`,children:`Сбросить фильтры`})})]})})})]})}export{S as default};