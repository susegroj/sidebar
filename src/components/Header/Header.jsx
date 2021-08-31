import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Sidebar from '../Sidebar/Sidebar';

import './header.scss';

const Header = ({ activeTab }) => {
  const { t } = useTranslation('common');
  return (
    <header className="header">
      <Sidebar activeTab={activeTab} />
    </header>
  );
};

Header.propTypes = {
  activeTab: PropTypes.string.isRequired,
};

export default Header;
