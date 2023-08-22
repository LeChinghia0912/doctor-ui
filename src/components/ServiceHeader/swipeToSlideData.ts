import iconCalendar from '../../assets/images/calendar.png';
import iconBacSi from '../../assets/images/bacsi.png';
import iconTuvan from '../../assets/images/tuvan.png';
import iconGiadinh from '../../assets/images/giadinh.png';
import iconDKXN from '../../assets/images/dkxn.npg.webp';
import iconGoikham from '../../assets/images/goi_kham.png';
import iconChamsoc from '../../assets/images/cham_soc.png';
import iconThanhtoan from '../../assets/images/thanhtoanvp.png';

export interface SlickItem {
    title: string;
    icon: string;
    link: string;
}

export const slickItems: SlickItem[] = [
    {
        title: 'Đặt khám tại cơ sở',
        icon: iconCalendar,
        link: '/Cơ_Sở_Đặt_Khám',
    },
    {
        title: 'Đặt khám tại bác sĩ',
        icon: iconBacSi,
        link: '/Đặt_Khám_Bác_Sỹ',
    },
    {
        title: 'Tư vấn khám bệnh từ xa',
        icon: iconTuvan,
        link: '/Tư_Vấn',
    },
    {
        title: 'Bác sĩ gia đình',
        icon: iconGiadinh,
        link: '/Bác_Sĩ_Gia_Đình',
    },
    {
        title: 'Đăng kí xét nghiệm',
        icon: iconDKXN,
        link: '/Xét_Nghiệm',
    },
    {
        title: 'Gói khám sức khỏe',
        icon: iconGoikham,
        link: '/Gói_Khám',
    },
    {
        title: 'Chăm sóc tại nhà',
        icon: iconChamsoc,
        link: '/Chăm_Sóc',
    },
    {
        title: 'Thanh toán viện phí',
        icon: iconThanhtoan,
        link: '/Thanh_Toán',
    },
];
