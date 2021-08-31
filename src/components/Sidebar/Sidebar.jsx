import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { BsArchive, BsStar, BsClock, BsTrash2 } from 'react-icons/bs';
import { FaRegPaperPlane } from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';
import { FiMail } from 'react-icons/fi';

import './sidebar.scss';

const Sidebar = ({ activeTab }) => {
  const { t } = useTranslation('common');
  const sidebar = useRef(null);
  const [show, setShow] = useState(true);

  const showBar = () => {
    setShow(!show);
  };

  const mainOpts = [
    {
      id: 'received',
      label: t('tabs.received'),
      icon: <BsArchive className="icon" />,
      path: '/received'
    },
    {
      id: 'marked',
      label: t('tabs.marked'),
      icon: <BsStar className="icon" />,
      path: '/marked'
    },
    {
      id: 'hold',
      label: t('tabs.hold'),
      icon: <BsClock className="icon" />,
      path: '/hold'
    },
    {
      id: 'sent',
      label: t('tabs.sent'),
      icon: <FaRegPaperPlane className="icon" />,
      path: '/sent'
    }
  ];

  const categories = [
    {
      id: 'all',
      label: t('tabs.all'),
      icon: <FiMail className="icon" />,
      path: '/all'
    },
    {
      id: 'trash',
      label: t('tabs.trash'),
      icon: <BsTrash2 className="icon" />,
      path: '/trash'
    },
  ];

  return (
    <nav ref={sidebar} className={`sidebar ${show ? '': 'hide'}`}>
      <div className="sidebar-header">
        <HiMenu
          onClick={showBar} 
          className="icon"
        /> 
        <h5>{t('app.name')}</h5>
      </div>
      {
        mainOpts.map(({ path, id, label, icon, }) => (
          <Link to={`${path}`} key={`${path}`} className={`option ${activeTab ===  id ? 'active': ''}`}>
            <span>{icon}</span>
            <span className="label">{label}</span>
          </Link>
          ))
      }
      <p className="section">Categorías</p>
      {
        categories.map(({ path, id, label, icon, }) => (
          <Link to={`${path}`} key={`${path}`} className={`option ${activeTab ===  id ? 'active': ''}`}>
            <span>{icon}</span>
            <span className="label">{label}</span>
          </Link>
          ))
      }
    </nav>
  );
};

Sidebar.propTypes = { 
  activeTab: PropTypes.string.isRequired,
};
Sidebar.defaultProps = { };

export default Sidebar;
