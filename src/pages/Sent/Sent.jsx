/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Layout } from '@components';

import './sent.scss';

const Sent = () => {
  const { t } = useTranslation('common');
  return (
    <Layout tabTitle={t('tabs.sent')} activeTab="sent">
      <div className="main-home">
        <h2>{t('tabs.sent')}</h2>
      </div>
    </Layout>
  );
};

export default Sent;
