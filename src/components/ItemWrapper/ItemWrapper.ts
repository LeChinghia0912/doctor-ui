const container1 = require('../../assets/images/container1.png');
const container2 = require('../../assets/images/container2.png');
const container3 = require('../../assets/images/container3.png');

export interface ItemWrapper {
    icon: string;
    title: string;
    desc: string;
    link: string;
}

const wrapper: ItemWrapper[] = [
    {
        icon: container1,
        title: 'Đặt khám nhanh',
        desc: 'Đặt khám nhanh, thanh toán và lấy số thứ tự trực tuyến tiếp kiệm thời gian công sức',
        link: './support',
    },
    {
        icon: container2,
        title: 'Cơ sở y tế rộng khắp',
        desc: 'Mạng lưới bệnh viện, phòng khám, phòng mạch phủ khắp toàn quốc',
        link: './support',
    },
    {
        icon: container3,
        title: 'Tư vấn sức khỏe từ xa',
        desc: 'Nhận tư vấn sức khỏe từ xa qua cuộc gọi video với các bác sĩ chuyên khoa',
        link: './support',
    },
];

export default wrapper;
