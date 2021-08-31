/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Layout } from '@components';

import './all.scss';

const All = () => {
  const { t } = useTranslation('common');
  return (
    <Layout tabTitle={t('tabs.all')} activeTab="all">
      <div className="main-home">
        <h2>{t('tabs.all')}</h2>
        
      </div>
    </Layout>
  );
};

export default All;
