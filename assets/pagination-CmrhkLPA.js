import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{G as t,H as n,K as r,U as i,V as a,W as o}from"./chunk-CZZ4CD4Q-C_o4ee41.js";import{A as s,Fi as c,Ut as l,X as u,_t as d,dt as f,pt as p,rt as m,vn as h}from"./index-BX5CNJVf.js";var g=e();function _(){return(0,g.jsxs)(f,{kind:`component`,route:`/components/pagination`,description:`Подвал длинной таблицы или списка: диапазон записей слева, кнопки предыдущей и следующей страницы справа. Номер страницы хранит приложение.`,usage:(0,g.jsx)(h,{use:[`Подвал длинной таблицы или списка, который грузится по страницам.`],avoid:[{text:`Список, который помещается целиком или грузится при прокрутке.`},{text:`Переход между шагами формы.`,instead:{href:`/components/button`,label:`Button`}}]}),example:(0,g.jsx)(u,{fragment:!0,layout:`block`,code:`<Pagination ariaLabel="Страницы реестра">
  <span role="status">
    <PaginationStatus from={from} to={to} total={200} />
  </span>
  <PaginationControls>
    <PaginationPrev disabled={page === 1} onClick={() => setPage((current) => current - 1)} />
    <PaginationPage page={page} pageCount={14} />
    <PaginationNext disabled={page === 14} onClick={() => setPage((current) => current + 1)} />
  </PaginationControls>
</Pagination>`,children:(0,g.jsx)(p,{})}),imports:(0,g.jsx)(m,{from:`@chucky23/design-system/react`,names:[`Pagination`,`PaginationStatus`,`PaginationSummary`,`PaginationControls`,`PaginationPrev`,`PaginationPage`,`PaginationNext`]}),api:(0,g.jsx)(s,{items:[{name:`Pagination`,props:[{name:`ariaLabel`,type:`string`,defaultValue:`"Страницы"`,description:`Имя навигации для скринридера.`},{name:`messages`,type:`Partial<PaginationMessages>`,description:`Строки всех частей: label, status, previous, next, previousLabel, nextLabel. По умолчанию русские: «1–15 из 200», «Назад», «Вперёд». Непереданные остаются русскими.`}]},{name:`PaginationStatus`,props:[{name:`from`,type:`number`,required:!0,description:`Номер первой записи страницы, с единицы.`},{name:`to`,type:`number`,required:!0,description:`Номер последней записи страницы.`},{name:`total`,type:`number`,required:!0,description:`Всего записей.`}]},{name:`PaginationSummary`,props:[{name:`children`,type:`ReactNode`,description:`Сводка рядом со статусом: счётчики по состояниям.`}]},{name:`PaginationControls`,props:[{name:`children`,type:`ReactNode`,description:`Группа кнопок: PaginationPrev, PaginationPage, PaginationNext.`}]},{name:`PaginationPrev`,props:[{name:`onClick`,type:`() => void`,description:`Переход на предыдущую страницу.`},{name:`disabled`,type:`boolean`,description:`Отключает кнопку на первой странице.`},{name:`ariaLabel`,type:`string`,defaultValue:`"Предыдущая страница"`,description:`Имя кнопки.`}]},{name:`PaginationPage`,props:[{name:`page`,type:`number`,required:!0,description:`Текущая страница, с единицы.`},{name:`pageCount`,type:`number`,required:!0,description:`Всего страниц.`}]},{name:`PaginationNext`,props:[{name:`onClick`,type:`() => void`,description:`Переход на следующую страницу.`},{name:`disabled`,type:`boolean`,description:`Отключает кнопку на последней странице.`},{name:`ariaLabel`,type:`string`,defaultValue:`"Следующая страница"`,description:`Имя кнопки.`}]}]}),related:(0,g.jsx)(d,{links:[{href:`/patterns/data-table-pattern`,label:`DataTablePattern`,description:`Таблица с подвалом: Pagination кладут в слот footer.`},{href:`/components/table`,label:`Table`,description:`Строки, которые разбиты на страницы.`}]}),children:[(0,g.jsx)(l,{id:`single-page`,label:`Одна страница`,description:`Когда все записи поместились на одну страницу: подвал остаётся, обе кнопки отключены.`,children:(0,g.jsx)(u,{layout:`block`,code:`<Pagination ariaLabel="Страницы задач">
  <PaginationStatus from={1} to={6} total={6} />
  <PaginationControls>
    <PaginationPrev disabled />
    <PaginationPage page={1} pageCount={1} />
    <PaginationNext disabled />
  </PaginationControls>
</Pagination>`,children:(0,g.jsxs)(a,{ariaLabel:`Страницы задач`,children:[(0,g.jsx)(r,{from:1,to:6,total:6}),(0,g.jsxs)(n,{children:[(0,g.jsx)(t,{disabled:!0}),(0,g.jsx)(o,{page:1,pageCount:1}),(0,g.jsx)(i,{disabled:!0})]})]})})}),(0,g.jsx)(l,{id:`summary`,label:`Сводка`,description:`Когда читателю важна разбивка записей по статусам: PaginationSummary ставит счётчики между диапазоном и кнопками.`,children:(0,g.jsx)(u,{layout:`block`,code:`import { useState } from "react"
import { layoutClassName } from "@chucky23/design-system"
import {
  Pagination,
  PaginationControls,
  PaginationNext,
  PaginationPage,
  PaginationPrev,
  PaginationStatus,
  PaginationSummary,
  StatusTag,
} from "@chucky23/design-system/react"

function SprintPagination() {
  const total = 34
  const size = 15
  const pageCount = Math.ceil(total / size)
  const [page, setPage] = useState(1)
  const from = (page - 1) * size + 1
  const to = Math.min(page * size, total)

  return (
    <Pagination ariaLabel="Страницы спринта" className={layoutClassName("flex-wrap gap-y-2")}>
      <span role="status">
        <PaginationStatus from={from} to={to} total={total} />
      </span>
      <PaginationSummary className={layoutClassName("flex-wrap")}>
        <StatusTag status="closed" label="Готово 18" />
        <StatusTag status="progress" label="В работе 7" />
      </PaginationSummary>
      <PaginationControls className={layoutClassName("ms-auto shrink-0")}>
        <PaginationPrev disabled={page === 1} onClick={() => setPage((current) => current - 1)} />
        <PaginationPage page={page} pageCount={pageCount} />
        <PaginationNext disabled={page === pageCount} onClick={() => setPage((current) => current + 1)} />
      </PaginationControls>
    </Pagination>
  )
}`,children:(0,g.jsx)(p,{summary:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(c,{status:`closed`,label:`Готово 18`}),(0,g.jsx)(c,{status:`progress`,label:`В работе 7`})]})})})})]})}export{_ as default};