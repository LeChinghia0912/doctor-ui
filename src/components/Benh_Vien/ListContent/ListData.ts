import list1 from '../../../assets/ListHospital/list1.png';
import list2 from '../../../assets/ListHospital/list2.png';
import list3 from '../../../assets/ListHospital/list3.png';
import list4 from '../../../assets/ListHospital/list4.png';
import list6 from '../../../assets/ListHospital/list6.png';
import list7 from '../../../assets/ListHospital/list7.png';

export interface ListHospital {
    id: number;
    image: string;
    title: string;
    address: string;
    link: string;
}

const ListData: ListHospital[] = [
    {
        id: 1,
        image: list1,
        title: 'Bệnh viện Đại học Y Dược TP.HCM - Cơ sở 1',
        address: '215 Hồng Bàng, Phường 11, Quận 5, TP.HCM',
        link: '/#',
    },
    {
        id: 2,
        image: list2,
        title: 'Bệnh Viện Quận Bình Thạnh',
        address: '132 Lê Văn Duyệt, Phường 1, Bình Thạnh, Thành phố Hồ Chí Minh',
        link: '/#',
    },
    {
        id: 3,
        image: list3,
        title: 'Bệnh viện Chợ Rẫy',
        address: '201B Nguyễn Chí Thanh, Phường 12, Quận 5, TP.HCM',
        link: '/#',
    },
    {
        id: 4,
        image: list4,
        title: 'Bệnh Viện Mắt',
        address: '280 Điện Biên Phủ, Phường Võ Thị Sáu, Quận 3, TP. Hồ Chí Minh',
        link: '/#',
    },

    {
        id: 5,
        image: list6,
        title: 'Bệnh viện Nhi Đồng 1',
        address: '341 Sư Vạn Hạnh, Phường 10, Quận 10, TP.HCM',
        link: '/#',
    },
    {
        id: 6,
        image: list7,
        title: 'Bệnh viện Chấn Thương Chỉnh Hình TP.HCM',
        address: '929 Trần Hưng Đạo, Phường 1, Quận 5, TP.HCM',
        link: '/#',
    },
];

export default ListData;
