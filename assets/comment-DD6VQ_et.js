import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{A as t,Ut as n,X as r,_t as i,dt as a,rt as o,vn as s}from"./index-BX5CNJVf.js";import{a as c,c as l,i as u,n as d,o as f,r as p,s as m,t as h}from"./comment-DBJwhpLp.js";var g=e();function _(){return(0,g.jsx)(a,{kind:`component`,route:`/components/comment`,description:`Реплика человека или агента в обсуждении задачи: аватар, автор, время и текст. CommentThread складывает реплики в тред.`,usage:(0,g.jsx)(s,{use:[`Реплика человека или агента в обсуждении сущности.`,`Тред реплик: CommentThread.`],avoid:[{text:`Лента событий и комментариев документа.`,instead:{href:`/recipes/activity-feed`,label:`ActivityFeedRecipe`}},{text:`Диалог с агентом и действиями инструментов.`,instead:{href:`/recipes/agent-thread`,label:`AgentThreadRecipe`}}]}),example:(0,g.jsx)(r,{layout:`block`,code:`<CommentThread>
  <Comment>
    <CommentAvatar fallback="АК" />
    <CommentContent>
      <CommentHeader>
        <CommentAuthor>Алиса Ким</CommentAuthor>
        <CommentTimestamp>2 часа назад</CommentTimestamp>
      </CommentHeader>
      <CommentBody>Причина найдена: исчерпан пул соединений основной базы. Выкатываю исправление.</CommentBody>
    </CommentContent>
  </Comment>
  <Comment>
    <CommentAvatar fallback="БН" />
    <CommentContent>
      <CommentHeader>
        <CommentAuthor>Борис Нэш</CommentAuthor>
        <CommentTimestamp>1 час назад</CommentTimestamp>
      </CommentHeader>
      <CommentBody>Исправление на staging. Смотрю долю ошибок перед выкладкой.</CommentBody>
    </CommentContent>
  </Comment>
</CommentThread>`,children:(0,g.jsxs)(m,{children:[(0,g.jsxs)(h,{children:[(0,g.jsx)(p,{fallback:`АК`}),(0,g.jsxs)(c,{children:[(0,g.jsxs)(f,{children:[(0,g.jsx)(d,{children:`Алиса Ким`}),(0,g.jsx)(l,{children:`2 часа назад`})]}),(0,g.jsx)(u,{children:`Причина найдена: исчерпан пул соединений основной базы. Выкатываю исправление.`})]})]}),(0,g.jsxs)(h,{children:[(0,g.jsx)(p,{fallback:`БН`}),(0,g.jsxs)(c,{children:[(0,g.jsxs)(f,{children:[(0,g.jsx)(d,{children:`Борис Нэш`}),(0,g.jsx)(l,{children:`1 час назад`})]}),(0,g.jsx)(u,{children:`Исправление на staging. Смотрю долю ошибок перед выкладкой.`})]})]})]})}),imports:(0,g.jsx)(o,{from:`@chucky23/design-system/extended/comment`,names:[`CommentThread`,`Comment`,`CommentAvatar`,`CommentContent`,`CommentHeader`,`CommentAuthor`,`CommentTimestamp`,`CommentBody`]}),api:(0,g.jsx)(t,{items:[{name:`CommentThread`,props:[{name:`children`,type:`Comment`,description:`Реплики сверху вниз с разделителями между ними.`}]},{name:`Comment`,props:[{name:`children`,type:`ReactNode`,description:`Одна реплика: CommentAvatar и CommentContent.`}]},{name:`CommentAvatar`,props:[{name:`fallback`,type:`string`,required:!0,description:`Инициалы, если изображения нет.`},{name:`src`,type:`string`,description:`Адрес изображения автора.`}]},{name:`CommentContent`,props:[{name:`children`,type:`ReactNode`,description:`Колонка справа от аватара: шапка и текст.`}]},{name:`CommentHeader`,props:[{name:`children`,type:`ReactNode`,description:`Строка с автором и временем.`}]},{name:`CommentAuthor`,props:[{name:`children`,type:`ReactNode`,description:`Имя автора.`}]},{name:`CommentTimestamp`,props:[{name:`dateTime`,type:`string`,description:`Машинное время для элемента time.`}]},{name:`CommentBody`,props:[{name:`children`,type:`ReactNode`,description:`Текст реплики.`}]}]}),related:(0,g.jsx)(i,{links:[{href:`/components/avatar`,label:`Avatar`,description:`Аватар, на котором стоит CommentAvatar.`},{href:`/recipes/activity-feed`,label:`ActivityFeedRecipe`,description:`Лента событий вместо обсуждения.`},{href:`/recipes/agent-thread`,label:`AgentThreadRecipe`,description:`Тред с агентом.`}]}),children:(0,g.jsx)(n,{id:`single`,label:`Одна реплика`,description:`Когда реплика стоит отдельно, например последний ответ в карточке задачи.`,children:(0,g.jsx)(r,{layout:`stack`,code:`<Comment>
  <CommentAvatar fallback="КМ" />
  <CommentContent>
    <CommentHeader>
      <CommentAuthor>Кэрол Мэйс</CommentAuthor>
      <CommentTimestamp>30 минут назад</CommentTimestamp>
    </CommentHeader>
    <CommentBody>На тестовом стенде ошибок 0,01 %, можно выкатывать.</CommentBody>
  </CommentContent>
</Comment>`,children:(0,g.jsxs)(h,{children:[(0,g.jsx)(p,{fallback:`КМ`}),(0,g.jsxs)(c,{children:[(0,g.jsxs)(f,{children:[(0,g.jsx)(d,{children:`Кэрол Мэйс`}),(0,g.jsx)(l,{children:`30 минут назад`})]}),(0,g.jsx)(u,{children:`На тестовом стенде ошибок 0,01 %, можно выкатывать.`})]})]})})})})}export{_ as default};