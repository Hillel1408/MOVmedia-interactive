import { payment, noPayment, globe } from '../assets/icons';

const quizQuestions = [
  {
    id: '1',
    text: 'Перейду по ссылке и оплачу — бонус пригодится',
    icon: globe,
    iconBg: '#3990F9',
  },
  {
    id: '2',
    text: 'Оплачу доступ, на всякий случай напишу организатору, чтобы уточнить детали',
    icon: payment,
    iconBg: '#82C7E1',
  },
  {
    id: '3',
    text: 'Не буду платить: участие в Олимпиаде бесплатное, а код из СМС — личная информация',
    icon: noPayment,
    iconBg: '#F46248',
  },
];

export default quizQuestions;
