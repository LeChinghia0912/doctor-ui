import statistic from '../../assets/Icons//Statistic.svg';
import HospitalIcon from '../../assets/Icons/hospital.svg';
import BasisIcon from '../../assets/Icons//basis.svg';
import DoctorIcon from '../../assets/Icons//doctor.svg';
import AccessIcon from '../../assets/Icons//access.svg';
import ViewIcon from '../../assets/Icons//view.svg';

export interface Statistic {
    icon: string;
    number: string;
    desc: string;
}

const iconStatistic: Statistic[] = [
    {
        icon: statistic,
        number: '2.2M',
        desc: 'Lượt khám',
    },
    {
        icon: HospitalIcon,
        number: '30+',
        desc: 'Bệnh viên',
    },
    {
        icon: BasisIcon,
        number: '50+',
        desc: 'Cơ sở Y tế',
    },
    {
        icon: DoctorIcon,
        number: '200+',
        desc: 'Bác sĩ',
    },
    {
        icon: AccessIcon,
        number: '25.4K+',
        desc: 'Lượt truy cập tháng',
    },
    {
        icon: ViewIcon,
        number: '823',
        desc: 'Lượt truy cập trong ngày',
    },
];

export default iconStatistic;
