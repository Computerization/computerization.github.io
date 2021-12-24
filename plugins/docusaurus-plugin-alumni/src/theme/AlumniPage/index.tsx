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
              <Translate
                id="alumni.title"
                description="The title of the alumni page">
                我们的过往成员
              </Translate>
            </h1>
            <p className="text--large">
              <Translate
                id="alumni.description"
                description="The description of the alumni page"
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
            <p style={{ fontSize: '80%' }}>
              <Translate
                id="alumni.description2"
                description="The second paragraph of description of the alumni page"
                values={{
                  link1: (
                    <a
                      href="https://github.com/Computerization/Computerization-website/edit/master/alumni/alumni.yml"
                      target="_blank"
                      rel="noreferrer noopener">
                      <Translate
                        id="alumni.description2.link1"
                        description="The first link">
                        中文版
                      </Translate>
                    </a>
                  ),
                  link2: (
                    <a
                      href="https://github.com/Computerization/Computerization-website/edit/master/i18n/en/docusaurus-plugin-alumni/alumni.yml"
                      target="_blank"
                      rel="noreferrer noopener">
                      <Translate
                        id="alumni.description2.link2"
                        description="The second link">
                        英文版
                      </Translate>
                    </a>
                  ),
                }}>
                {'注意，有两处文件需要修改：{link1}和{link2}。'}
              </Translate>
            </p>
          </div>
          <AlumniTimeline alumni={alumni} />
        </div>
      </main>
    </Layout>
  );
}
