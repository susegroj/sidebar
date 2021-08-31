/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Layout } from '@components';

import './trash.scss';

const Trash = () => {
  const { t } = useTranslation('common');
  return (
    <Layout tabTitle={t('tabs.trash')} activeTab="trash">
      <div className="main-home">
        <h2>{t('tabs.trash')}</h2>
      </div>
    </Layout>
  );
};

export default Trash;
