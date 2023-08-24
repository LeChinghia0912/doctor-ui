import imageH1 from '../../assets/DeployHospital/hospital1.png';
import imageH2 from '../../assets/DeployHospital/hospital2.png';
import imageH3 from '../../assets/DeployHospital/hospital3.png';
import imageH4 from '../../assets/DeployHospital/hospital4.png';
import imageH5 from '../../assets/DeployHospital/hospital5.png';
import imageH6 from '../../assets/DeployHospital/hospital6.png';
import imageH7 from '../../assets/DeployHospital/hospital7.png';
import imageH8 from '../../assets/DeployHospital/hospital8.png';
import imageH9 from '../../assets/DeployHospital/hospital9.png';
import imageH10 from '../../assets/DeployHospital/hospital10.png';

export interface HospitalData {
    image: string;
    name: string;
    address: string;
}

const deploy: HospitalData[] = [
    {
        image: imageH1,
        name: 'Bệnh viện Đại Học Y Dược',
        address: 'Quận 5 - TP Hồ Chí Minh',
    },
    {
        image: imageH2,
        name: 'Bệnh viện Chợ Rẫy',
        address: 'Quận 5 - TP Hồ Chí Minh',
    },
    {
        image: imageH3,
        name: 'Bệnh viện Nhi Đồng 1',
        address: 'Quận 10 - TP Hồ Chí Minh',
    },
    {
        image: imageH4,
        name: 'Bệnh viện Mắt',
        address: 'Quận 3 - TP Hồ Chí Minh',
    },
    {
        image: imageH5,
        name: 'Bệnh viện Da Liễu',
        address: 'Quận 3 - TP Hồ Chí Minh',
    },
    {
        image: imageH6,
        name: 'Bệnh viện Quận Bình Thạnh',
        address: 'Quận Bình Thạnh - TP Hồ Chí Minh',
    },
    {
        image: imageH7,
        name: 'Bệnh viện Đại Học Y Dược 2',
        address: 'Huyện Bình Chánh - TP Hồ Chí Minh',
    },
    {
        image: imageH8,
        name: 'Bệnh viện Nhi Đồng Thành Phố',
        address: 'Thành Phố Vũng Tàu',
    },
    {
        image: imageH9,
        name: 'Bệnh viện Vũng Tàu',
        address: 'Quận 10 - TP Hồ Chí Minh',
    },
    {
        image: imageH10,
        name: 'Bệnh viện Trưng Vương',
        address: 'Quận 5 - TP Hồ Chí Minh',
    },
];

export default deploy;
