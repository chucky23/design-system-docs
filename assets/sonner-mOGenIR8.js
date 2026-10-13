import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{Gn as t,I as n,O as r,Rn as i,br as a}from"./chunk-5DUEG3R3-896u-HpP.js";import{C as o,j as s,r as c,w as l}from"./docs-3sp5L-9g.js";import"./index-CHfT3erv.js";import"./workspace-DK_BGpXz.js";import{n as u,t as d}from"./docs-article-DBNRC-Xz.js";var f=e(),p=[{id:`usage`,label:`Использование`},{id:`promise`,label:`Toast на Promise`},{id:`api`,label:`API`}];function m(){return(0,f.jsx)(n,{title:`Sonner`,description:`Тоаст-уведомления на базе sonner с темой дизайн-системы: success, warning, error, info. Peer: sonner.`,breadcrumbs:d(`/components/sonner`),children:(0,f.jsx)(r,{presentation:`article`,label:`Sonner`,inspector:u(p),document:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(c,{title:`Варианты уведомлений`,description:`toast.success / warning / error / info. Иконки и цвета берутся из сигнальных токенов.`,code:`import { toast } from "sonner"
import { Toaster } from "@chucky23/design-system/extended/sonner"

// В корне приложения:
<Toaster />

// Триггеры:
toast.success("Сохранено успешно")
toast.warning("Проверь соединение")
toast.error("Не удалось загрузить")
toast.info("Новое обновление доступно")`,children:(0,f.jsx)(l,{})}),(0,f.jsx)(i,{children:`Toast подходит для ненавязчивых уведомлений о результате асинхронных операций — сохранение, удаление, синхронизация. Signal-варианты синхронизируют цвет и иконку с Badge и Alert, поэтому статус читается одинаково по всему интерфейсу. Для критичных решений бери Dialog, не toast.`}),(0,f.jsxs)(a,{id:`usage`,label:`Использование`,children:[(0,f.jsx)(i,{children:`Установи peer-зависимость sonner. Toaster подключается один раз в корне приложения, toast импортируется из sonner.`}),(0,f.jsx)(t,{copyLabel:`Скопировать код: использование Toaster`,language:`tsx`,code:`import { toast } from "sonner"
import { Toaster } from "@chucky23/design-system/extended/sonner"

<Toaster />

toast.success("Сохранено")`})]}),(0,f.jsx)(a,{id:`promise`,label:`Toast на Promise`,children:(0,f.jsx)(c,{title:`Toast на Promise`,description:`Показывает загрузку, затем успех или ошибку автоматически.`,code:`toast.promise(saveDocument(), {
  loading: "Сохранение...",
  success: "Сохранено",
  error: "Ошибка сохранения",
})`,children:(0,f.jsx)(o,{})})}),(0,f.jsx)(a,{id:`api`,label:`API`,children:(0,f.jsx)(s,{title:`Toaster Props`,props:[{name:`position`,type:`"top-left" | "top-right" | "top-center" | "bottom-left" | "bottom-right" | "bottom-center"`,defaultValue:`"bottom-right"`,description:`Позиция появления тоастов на экране.`},{name:`duration`,type:`number`,defaultValue:`4000`,description:`Длительность показа тоаста в миллисекундах.`},{name:`closeButton`,type:`boolean`,defaultValue:`false`,description:`Показывать кнопку закрытия.`},{name:`richColors`,type:`boolean`,defaultValue:`false`,description:`Использовать насыщенные сигнальные цвета из темы.`},{name:`expand`,type:`boolean`,defaultValue:`false`,description:`Разворачивать стопку тоастов при hover.`},{name:`icons`,type:`ToasterProps["icons"]`,defaultValue:`toastIcons`,description:`Иконки типов: SignalIcon для success, info, warning, error и Spinner для loading. Расширяй через { ...toastIcons }.`}]})})]})})})}export{m as default};