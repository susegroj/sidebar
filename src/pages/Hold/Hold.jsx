/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Layout } from '@components';

import './hold.scss';

const Hold = () => {
  const { t } = useTranslation('common');
  return (
    <Layout tabTitle={t('tabs.hold')} activeTab="hold">
      <div className="main-home">
        <h2>{t('tabs.hold')}</h2>
      </div>
    </Layout>
  );
};

export default Hold;
