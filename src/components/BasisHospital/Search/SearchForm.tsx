import React, { useState } from 'react';
import styles from './search.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faLocationDot, faSearch, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'; // Thêm faTimes icon
import provinces from './SearchData';

const cx = classNames.bind(styles);

const SearchForm: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedProvince, setSelectedProvince] = useState('');

    const handleClearSearch = () => {
        setSearchQuery('');
    };

    const handleClearProvince = () => {
        setSelectedProvince('');
    };

    return (
        <div className={cx('body')}>
            <form className={cx('form_search')}>
                <div className={cx('form_content')}>
                    <div className={cx('item')}>
                        <div className={cx('icon')}>
                            <FontAwesomeIcon style={{ color: 'rgb(177, 177, 177)' }} icon={faSearch} />
                        </div>
                        <div className={cx('inputItem')}>
                            <input
                                className={cx('input')}
                                type="text"
                                placeholder="Tìm kiếm cơ sở y tế..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            {searchQuery && (
                                <div className={cx('clearIcon')} onClick={handleClearSearch}>
                                    <FontAwesomeIcon icon={faCircleXmark} />
                                </div>
                            )}
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
                                value={selectedProvince}
                                onChange={(e) => setSelectedProvince(e.target.value)}
                            >
                                <option value="">Chọn tỉnh thành</option>
                                {provinces.map((province, index) => (
                                    <option key={index} value={province.name}>
                                        {province.name}
                                    </option>
                                ))}
                            </select>
                            {selectedProvince && (
                                <div className={cx('clearIcon')} onClick={handleClearProvince}>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </div>
                            )}
                        </section>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SearchForm;
