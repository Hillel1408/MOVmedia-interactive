import chat from "@/assets/icons/chat.svg";
import globe from "@/assets/icons/globe.svg";
import payment from "@/assets/icons/payment.svg";
import noPayment from "@/assets/icons/noPayment.svg";

export default function QuizQuestion() {
  return (
    <div className="rounded-3xl p-6 bg-[#F7EBE2] backdrop-blur-[60px]">
      <div className="flex flex-col gap-4 mb-6">
        <div className="w-16 h-16 rounded-xl bg-[#F46248] flex items-center justify-center">
          <img src={chat} alt="Чат" />
        </div>
        <p className="font-semibold text-[24px] leading-[115%] text-[#131418]">
          Тебе приходит сообщение: «Оплати доступ к олимпиадному заданию —
          получи бонус. Пришли код из СМС для подтверждения». Твои действия?
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="rounded-2xl py-8.75 px-7.5 bg-white flex gap-4">
          <div className="min-w-12 h-12 rounded-xl bg-[#3990F9] flex items-center justify-center">
            <img src={globe} alt="Глобус" />
          </div>
          <p className="font-semibold text-[24px] leading-[115%] text-[#000000]">
            Перейду по ссылке и оплачу — бонус пригодится
          </p>
        </div>

        <div className="rounded-2xl py-8.75 px-7.5 bg-white flex gap-4">
          <div className="min-w-12 h-12 rounded-xl bg-[#82C7E1] flex items-center justify-center">
            <img src={payment} alt="Платеж" />
          </div>
          <p className="font-semibold text-[24px] leading-[115%] text-[#000000]">
            Оплачу доступ, на всякий случай напишу организатору, чтобы уточнить
            детали
          </p>
        </div>

        <div className="rounded-2xl py-8.75 px-7.5 bg-white flex gap-4">
          <div className="min-w-12 h-12 rounded-xl bg-[#F46248] flex items-center justify-center">
            <img src={noPayment} alt="Нет платежа" />
          </div>
          <p className="font-semibold text-[24px] leading-[115%] text-[#000000]">
            Не буду платить: участие в Олимпиаде бесплатное, а код из СМС —
            личная информация
          </p>
        </div>
      </div>
    </div>
  );
}
