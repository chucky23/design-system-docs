import{t as e}from"./jsx-runtime-dBoqvwbd.js";import{Qr as t,Sr as n,j as r,kr as i,x as a}from"./chunk-FJ6G7XYZ-vkrr-AON.js";import{H as o,Q as s,U as c,g as l}from"./docs-CTQgkcVe.js";import"./index-CylhoBOX.js";import"./workspace-B0gvzNJe.js";import{n as u,r as d,t as f}from"./docs-article-CV9v0E7s.js";var p=e(),m=[{id:`usage`,label:`Использование`},{id:`promise`,label:`Toast на Promise`},{id:`api`,label:`API`}];function h(){return(0,p.jsx)(r,{title:`Sonner`,description:`Тоаст-уведомления на базе sonner с темой дизайн-системы: success, warning, error, info. Peer: sonner.`,breadcrumbs:f(`/components/sonner`),meta:u(`/components/sonner`),children:(0,p.jsx)(a,{presentation:`article`,label:`Sonner`,inspector:d(m),document:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(l,{title:`Варианты уведомлений`,description:`toast.success / warning / error / info. Иконки и цвета берутся из сигнальных токенов.`,code:`import { toast } from "sonner"
import { Toaster } from "@chucky23/design-system/extended/sonner"

// В корне приложения:
<Toaster />

// Триггеры:
toast.success("Сохранено успешно")
toast.warning("Проверь соединение")
toast.error("Не удалось загрузить")
toast.info("Новое обновление доступно")`,children:(0,p.jsx)(c,{})}),(0,p.jsx)(n,{children:`Toast подходит для ненавязчивых уведомлений о результате асинхронных операций — сохранение, удаление, синхронизация. Signal-варианты синхронизируют цвет и иконку с Badge и Alert, поэтому статус читается одинаково по всему интерфейсу. Для критичных решений бери Dialog, не toast.`}),(0,p.jsxs)(t,{id:`usage`,label:`Использование`,children:[(0,p.jsx)(n,{children:`Установи peer-зависимость sonner. Toaster подключается один раз в корне приложения, toast импортируется из sonner.`}),(0,p.jsx)(i,{copyLabel:`Скопировать код: использование Toaster`,language:`tsx`,code:`import { toast } from "sonner"
import { Toaster } from "@chucky23/design-system/extended/sonner"

<Toaster />

toast.success("Сохранено")`})]}),(0,p.jsx)(t,{id:`promise`,label:`Toast на Promise`,children:(0,p.jsx)(l,{title:`Toast на Promise`,description:`Показывает загрузку, затем успех или ошибку автоматически.`,code:`toast.promise(saveDocument(), {
  loading: "Сохранение...",
  success: "Сохранено",
  error: "Ошибка сохранения",
})`,children:(0,p.jsx)(o,{})})}),(0,p.jsx)(t,{id:`api`,label:`API`,children:(0,p.jsx)(s,{title:`Toaster Props`,props:[{name:`position`,type:`"top-left" | "top-right" | "top-center" | "bottom-left" | "bottom-right" | "bottom-center"`,defaultValue:`"bottom-right"`,description:`Позиция появления тоастов на экране.`},{name:`duration`,type:`number`,defaultValue:`4000`,description:`Длительность показа тоаста в миллисекундах.`},{name:`closeButton`,type:`boolean`,defaultValue:`false`,description:`Показывать кнопку закрытия.`},{name:`richColors`,type:`boolean`,defaultValue:`false`,description:`Использовать насыщенные сигнальные цвета из темы.`},{name:`expand`,type:`boolean`,defaultValue:`false`,description:`Разворачивать стопку тоастов при hover.`},{name:`icons`,type:`ToasterProps["icons"]`,defaultValue:`toastIcons`,description:`Иконки типов: SignalIcon для success, info, warning, error и Spinner для loading. Расширяй через { ...toastIcons }.`}]})})]})})})}export{h as default};