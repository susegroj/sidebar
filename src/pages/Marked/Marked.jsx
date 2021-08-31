/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Layout } from '@components';

import './marked.scss';

const Marked = () => {
  const { t } = useTranslation('common');
  return (
    <Layout tabTitle={t('tabs.marked')} activeTab="marked">
      <div className="main-home">
        <h2>{t('tabs.marked')}</h2>
      </div>
    </Layout>
  );
};

export default Marked;
