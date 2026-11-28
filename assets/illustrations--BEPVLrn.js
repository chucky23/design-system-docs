import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{D as t,E as n,O as r,S as i,T as a,W as o}from"./chunk-NA6PDP3U-Cjn5wWWb.js";import{Wn as s,sr as c,ws as l}from"./useLabelableId-Ck49MOKz.js";import{M as u,Ot as d,St as f,rt as p,tn as m,xn as h}from"./index-DnsCB0LC.js";var g=e(),_=[[`EmptyProjectIllustration`,`Проект не открыт`,`Открытый проект, за ним точками место нового проекта`],[`EmptyListIllustration`,`Пустой список задач`,`Дерево: первая задача стоит, места подзадач — ряды точек`],[`EmptyBoardIllustration`,`Пустая доска`,`Три колонки, в первой точками место первой карточки`],[`LoadErrorIllustration`,`Не удалось загрузить`,`Три задачи пришли, место четвёртой — ряд точек`],[`CrashIllustration`,`Сбой приложения`,`Окно со строками, последняя не дорисована`]],v=[[`Иллюстрация`,`Пустое состояние, ошибка`,`160 px`,`Одна: «+» --primary или «!» --destructive`],[`Сцена конца`,`Пустая или законченная лента без действия`,`Ширина ленты`,`Вода --primary с прозрачностью`],[`Знак`,`Сайдбар, знак проекта, аватар, знак процесса`,`14–24 px, крупно до 48 px`,`Цвет палитры на выбор`]];function y(){return(0,g.jsxs)(f,{kind:`guide`,route:`/foundations/illustrations`,description:`Рисунки пауз на языке «Слои и точки»: плиты слоёв, полосы текста и точка там, где что-то появится.`,related:(0,g.jsx)(d,{links:[{href:`/components/empty-state`,label:`EmptyState`,description:`Проп illustration над заголовком.`},{href:`/components/error-state`,label:`ErrorState`,description:`Иллюстрация вместо знака ошибки.`},{href:`/components/project-sign`,label:`ProjectSign`,description:`Знак проекта из его имени.`},{href:`/components/participant-avatar`,label:`ParticipantAvatar`,description:`Аватар человека и агента без фото.`},{href:`/signs`,label:`Знаки сущностей`,description:`Все варианты знаков проектов, участников и процессов.`},{href:`/foundations/icons`,label:`Иконки`,description:`Знаки навигации сайдбара.`}]}),children:[(0,g.jsx)(m,{id:`levels`,label:`Где рисунок уместен`,description:`Рисунок стоит там, где у человека пауза. В строках, таблицах, меню и инспекторе рисунков нет, в хроме — только знаки.`,children:(0,g.jsx)(h,{label:`Уровни рисунков`,columns:[{label:`Уровень`,kind:`name`,width:`18%`},{label:`Где`,width:`32%`},{label:`Размер`,kind:`code`,width:`20%`},{label:`Цвет`,kind:`muted`}],rows:v})}),(0,g.jsxs)(m,{id:`states`,label:`Пустые состояния и ошибки`,description:`Рисунок встаёт над заголовком через проп illustration и заменяет значок. Текст, кнопка и отступы остаются у компонента, рисунок скрыт от экранного диктора.`,children:[(0,g.jsx)(p,{title:`Пустой список`,layout:`block`,code:`import { Button, EmptyState, EmptyListIllustration } from "@chucky23/design-system/react"

<EmptyState
  illustration={<EmptyListIllustration />}
  title="Задач нет"
  description="Создай первую задачу"
  action={<Button>Новая задача</Button>}
/>`,children:(0,g.jsx)(c,{illustration:(0,g.jsx)(n,{}),title:`Задач нет`,description:`Создай первую задачу`,action:(0,g.jsx)(l,{children:`Новая задача`})})}),(0,g.jsx)(p,{title:`Проект не открыт`,layout:`block`,code:`import { Button, EmptyState, EmptyProjectIllustration } from "@chucky23/design-system/react"

<EmptyState
  illustration={<EmptyProjectIllustration />}
  title="Выбери или создай проект"
  description="Выбери проект в переключателе вверху окна или создай новый."
  action={<Button>Создать проект</Button>}
/>`,children:(0,g.jsx)(c,{illustration:(0,g.jsx)(t,{}),title:`Выбери или создай проект`,description:`Выбери проект в переключателе вверху окна или создай новый.`,action:(0,g.jsx)(l,{children:`Создать проект`})})}),(0,g.jsx)(p,{fragment:!0,title:`Пустая доска`,layout:`block`,code:`import { BoardWorkspace } from "@chucky23/design-system/patterns/board-workspace"
import { EmptyBoardIllustration } from "@chucky23/design-system/react"

<BoardWorkspace
  {...board}
  empty={{ illustration: <EmptyBoardIllustration />, title: "Задач нет", description: "Создай задачу и перетаскивай её между колонками" }}
/>`,children:(0,g.jsx)(c,{illustration:(0,g.jsx)(a,{}),title:`Задач нет`,description:`Создай задачу и перетаскивай её между колонками`,action:(0,g.jsx)(l,{children:`Новая задача`})})}),(0,g.jsx)(p,{fragment:!0,title:`Ошибка загрузки`,layout:`block`,code:`import { RegistryWorkspace } from "@chucky23/design-system/patterns/workspace"
import { LoadErrorIllustration } from "@chucky23/design-system/react"

<RegistryWorkspace
  {...registry}
  state={{ kind: "error", illustration: <LoadErrorIllustration />, title: "Не удалось загрузить задачи", description: error.message, retry }}
/>`,children:(0,g.jsx)(s,{illustration:(0,g.jsx)(o,{}),title:`Не удалось загрузить задачи`,description:`База проекта не ответила. Проверь, что папка .tasks на месте, и повтори.`,action:(0,g.jsx)(l,{tone:`neutral`,variant:`outline`,children:`Повторить`})})}),(0,g.jsx)(p,{title:`Сбой приложения`,layout:`block`,code:`import { Button, CrashIllustration, ErrorState } from "@chucky23/design-system/react"

<ErrorState
  illustration={<CrashIllustration />}
  title="Что-то пошло не так"
  description="В приложении произошла непредвиденная ошибка. Данные сохранены автоматически."
  action={<Button>Перезагрузить приложение</Button>}
/>`,children:(0,g.jsx)(s,{illustration:(0,g.jsx)(i,{}),title:`Что-то пошло не так`,description:`В приложении произошла непредвиденная ошибка. Данные сохранены автоматически.`,action:(0,g.jsx)(l,{children:`Перезагрузить приложение`})})}),(0,g.jsx)(h,{label:`Рисунки`,columns:[{label:`Компонент`,kind:`name`,width:`32%`},{label:`Место`,width:`24%`},{label:`Сюжет`,kind:`muted`}],rows:_})]}),(0,g.jsx)(m,{id:`feed-end`,label:`Сцена конца ленты`,description:`Горизонт с оазисом там, где лента пуста или кончилась и действия нет. Видимой подписи нет: label слышит только экранный диктор.`,children:(0,g.jsx)(p,{layout:`block`,code:`import { FeedEndScene } from "@chucky23/design-system/react"

<FeedEndScene label="Комментариев пока нет" />`,children:(0,g.jsx)(r,{label:`Комментариев пока нет`})})}),(0,g.jsx)(u,{items:[{name:`EmptyProjectIllustration, EmptyListIllustration, EmptyBoardIllustration, LoadErrorIllustration, CrashIllustration`,props:[{name:`className`,type:`string`,description:`Классы SVG. Ширина 160 px задана классом w-40, высота следует пропорции 200 × 140.`}]},{name:`FeedEndScene`,props:[{name:`label`,type:`string`,required:!0,description:`Текст для экранного диктора, например «Комментариев пока нет». На экране не виден.`},{name:`className`,type:`string`,description:`Классы обёртки. Сцена занимает ширину ленты.`}]}]})]})}export{y as default};