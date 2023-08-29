import React from 'react';
import styles from './search.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faSearch } from '@fortawesome/free-solid-svg-icons';
import provinces from './SearchData';

const cx = classNames.bind(styles);

const SearchForm: React.FC = () => {
    return (
        <div className={cx('body')}>
            <form className={cx('form_search')}>
                <div className={cx('form_content')}>
                    <div className={cx('item')}>
                        <div className={cx('icon')}>
                            <FontAwesomeIcon style={{ color: 'rgb(177, 177, 177)' }} icon={faSearch} />
                        </div>
                        <div className={cx('inputItem')}>
                            <input className={cx('input')} type="text" placeholder="Tìm kiếm cơ sở y tế..." />
                        </div>
                    </div>
                    <div className={cx('item')}>
                        <div className={cx('icon')}>
                            <FontAwesomeIcon style={{ color: 'rgb(177, 177, 177)' }} icon={faLocationDot} />
                        </div>
                        <section style={{}} className={cx('inputItem')}>
                            <select
                                style={{ width: '90%', marginLeft: '20px', color: '#858585' }}
                                className={cx('provinceSelect')}
                            >
                                <option value="">Chọn tỉnh thành</option>
                                {provinces.map((province, index) => (
                                    <option key={index}>{province.name}</option>
                                ))}
                            </select>
                        </section>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SearchForm;
