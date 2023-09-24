import calendar from '../../assets/images/calendar.png';
import bookingdoctor from '../../assets/images/bookingdoctor.png';

export interface BookingData {
    id: number;
    img: String;
    title: string;
    link: String;
}

export const bookingData: BookingData[] = [
    {
        id: 1,
        link: '/kham-chuyen-khoa',
        img: calendar,
        title: 'Đặt khám chuyên khoa',
    },
    {
        id: 2,
        link: '/kham-bac-si',
        img: bookingdoctor,
        title: 'Đặt khám theo Bác Sỹ',
    },
];
