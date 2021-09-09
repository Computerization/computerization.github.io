import React from 'react';
import Layout from '@theme/Layout';
import Translate from '@docusaurus/Translate';
import AlumniTimeline from '@theme/AlumniTimeline';
import type { Props } from '@theme/AlumniPage';
import styles from './styles.module.css';

export default function Alumni({ alumni }: Props): JSX.Element {
  return (
    <Layout
      title="Our Alumni"
      description="The alumni directory of Computerization club">
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
                }}>
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
