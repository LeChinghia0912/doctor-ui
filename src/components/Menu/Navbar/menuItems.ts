import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCaretDown, faCircleQuestion, faCoins } from '@fortawesome/free-solid-svg-icons';

export interface MenuItem {
    title: string;
    icon: IconDefinition;
    link: string;
    submenus?: MenuItem[];
}

const menuItems: MenuItem[] = [
    {
        title: 'Cơ sở y tế',
        icon: faCaretDown,
        link: './Cơ_Sở_Y_Tế',
        submenus: [
            {
                title: 'Bệnh viện công',
                icon: faCircleQuestion,
                link: '/Cơ_Sở_Y_Tế',
            },
            {
                title: 'Bệnh viện tư',
                icon: faCoins,
                link: '/Cơ_Sở_Y_Tế',
            },
            {
                title: 'Phòng khám',
                icon: faCoins,
                link: '/Cơ_Sở_Y_Tế',
            },
            {
                title: 'Phòng mạch',
                icon: faCoins,
                link: '/Cơ_Sở_Y_Tế',
            },
        ],
    },
    {
        title: 'Dịch vụ y tế',
        icon: faCaretDown,
        link: '/',
        submenus: [
            {
                title: 'Đặt khám tại cơ sở',
                icon: faCircleQuestion,
                link: '/Dịch_Vụ_Y_Tế',
            },
            {
                title: 'Đặt khám theo bác sỹ',
                icon: faCoins,
                link: '/Đặt_Khám_Theo_Bác_Sĩ',
            },
            {
                title: 'Tư vấn khám bệnh từ xa',
                icon: faCoins,
                link: '',
            },
            {
                title: 'Đăng ký xét nghiệm',
                icon: faCoins,
                link: '',
            },
            {
                title: 'Chăm sóc tại nhà',
                icon: faCoins,
                link: '',
            },
            {
                title: 'Thanh toán viện phí',
                icon: faCoins,
                link: '',
            },
        ],
    },
    {
        title: 'Gói khám',
        icon: faCoins,
        link: '/',
    },
    {
        title: 'Hưỡng dẫn',
        icon: faCaretDown,
        link: '/',
        submenus: [
            {
                title: 'Cài đặt ứng dụng',
                icon: faCircleQuestion,
                link: '/',
            },
            {
                title: 'Đặt lịch khám',
                icon: faCoins,
                link: '/',
            },
            {
                title: 'Quy trìnhh hoàn phí',
                icon: faCoins,
                link: '/',
            },
            {
                title: 'Câu hỏi thường gặp',
                icon: faCoins,
                link: '/',
            },
        ],
    },
    {
        title: 'Tin tức',
        icon: faCaretDown,
        link: '/',
        submenus: [
            {
                title: 'Tin dịch vụ',
                icon: faCircleQuestion,
                link: '/',
            },
            {
                title: 'Tin y tế',
                icon: faCoins,
                link: '/',
            },
            {
                title: 'Y học thưởng thức',
                icon: faCoins,
                link: '/',
            },
        ],
    },
    {
        title: 'Về chúng tôi',
        icon: faCoins,
        link: '/',
    },
];

export default menuItems;
