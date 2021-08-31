/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Layout } from '@components';

import './received.scss';

const Received = () => {
  const { t } = useTranslation('common');
  return (
    <Layout tabTitle={t('tabs.received')} activeTab="received">
      <div className="main-home">
        <h2>{t('tabs.received')}</h2>
        
      </div>
    </Layout>
  );
};

export default Received;
