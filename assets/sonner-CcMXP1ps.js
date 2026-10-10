import{$n as e,Hn as t,Mo as n}from"./chunk-ZW5N5E5H-C8fDcLjq.js";import{H as r,M as i,N as a,P as o,r as s,s as c}from"./docs-CtJuZ0WF.js";import"./index-D3G-KnJA.js";var l=n();function u(){return(0,l.jsxs)(c,{className:`flex flex-col gap-6`,children:[(0,l.jsx)(t,{title:`Sonner`,description:`Тоаст-уведомления на базе sonner с темой дизайн-системы: success, warning, error, info. Peer: sonner.`}),(0,l.jsx)(i,{className:`max-w-prose`,"data-body":!0,children:`Toast подходит для ненавязчивых уведомлений о результате асинхронных операций — сохранение, удаление, синхронизация. Signal-варианты синхронизируют цвет и иконку с Badge и Alert, поэтому статус читается одинаково по всему интерфейсу. Для критичных решений бери Dialog, не toast.`}),(0,l.jsx)(e,{label:`signal variants`,children:(0,l.jsx)(s,{title:`Варианты уведомлений`,description:`toast.success / warning / error / info. Иконки и цвета берутся из сигнальных токенов.`,code:`import { toast } from "sonner"
import { Toaster } from "@chucky23/design-system/extended/sonner"

// В корне приложения:
<Toaster />

// Триггеры:
toast.success("Сохранено")
toast.warning("Проверь соединение")
toast.error("Не удалось загрузить")
toast.info("Новое обновление доступно")`,children:(0,l.jsx)(o,{})})}),(0,l.jsx)(e,{label:`async / promise`,children:(0,l.jsx)(s,{title:`Toast на Promise`,description:`Показывает loading → success/error автоматически.`,code:`toast.promise(saveDocument(), {
  loading: "Сохранение...",
  success: "Сохранено",
  error: "Ошибка сохранения",
})`,children:(0,l.jsx)(a,{})})}),(0,l.jsx)(e,{label:`api reference`,children:(0,l.jsx)(r,{title:`Toaster Props`,props:[{name:`position`,type:`"top-left" | "top-right" | "top-center" | "bottom-left" | "bottom-right" | "bottom-center"`,defaultValue:`"bottom-right"`,description:`Позиция появления тоастов на экране.`},{name:`duration`,type:`number`,defaultValue:`4000`,description:`Длительность показа тоаста в миллисекундах.`},{name:`closeButton`,type:`boolean`,defaultValue:`false`,description:`Показывать кнопку закрытия.`},{name:`richColors`,type:`boolean`,defaultValue:`false`,description:`Использовать насыщенные сигнальные цвета из темы.`},{name:`expand`,type:`boolean`,defaultValue:`false`,description:`Разворачивать стопку тоастов при hover.`}]})})]})}export{u as default};