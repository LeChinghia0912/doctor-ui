import list1 from '../../../assets/ListHospital/list1.png';
import { ListHospital } from '../ListContent/ListData';

export interface IntroduceData extends ListHospital {
    time: string;
    desc: string;
}

const IntroduceDataList: IntroduceData[] = [
    {
        id: 1,
        image: list1,
        title: 'Bệnh viện Đại học Y Dược TP.HCM - Cơ sở 1',
        address: '201 Nguyễn Chí Thanh, Phường 12, Quận 5, TP. Hồ Chí Minh',
        time: 'Thứ 2 - Thứ 7 (7:00 - 18:00)',
        desc: 'Bệnh viện tuyến Trung ương tại TP.HCM, được hàng ngàn bệnh nhân từ khắp các tỉnh thành phía Nam tin tưởng và lựa chọn.',
        link: '/#',
    },
];

export default IntroduceDataList;
