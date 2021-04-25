/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { ReactElement } from 'react';
import Layout from '@theme/Layout';
import Translate from '@docusaurus/Translate';
import AlumniTimeline from '../components/AlumniTimeline';
import styles from './alumni.module.css';

import alumni from '../data/alumniData';

export default function Alumni(): ReactElement {
  return (
    <Layout
      title="Our Alumni"
      description="The alumni directory of Computerization club"
    >
      <main>
        <div className="container margin-vert--lg">
          <div className={styles.content}>
            <h1>
              <Translate id="alumni.title">我们的过往成员</Translate>
            </h1>
            <p className="text--large">
              <Translate
                id="alumni.description"
                values={{
                  link: (
                    <a href="https://github.com/Computerization/docusaurus/issues">
                      Computerization/docusaurus
                    </a>
                  ),
                }}
              >
                {
                  '如果你是信息化社的过往成员，并且希望我们更新你的个人信息或链接，请在 {link} 仓库中提交 issue 或 pull request。你也可以微信联系我们。'
                }
              </Translate>
            </p>
          </div>
          <AlumniTimeline alumni={alumni} />
        </div>
      </main>
    </Layout>
  );
}
