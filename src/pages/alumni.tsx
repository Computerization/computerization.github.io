/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { ReactElement } from 'react';
import Layout from '@theme/Layout';
import AlumniTimeline from "../components/AlumniTimeline";
import styles from "./alumni.module.css"

import alumni from "../data/alumniData"

export default (): ReactElement => {
  return (
    <Layout
      title="Our Alumni"
      description="The alumni directory of Computerization club"
    >
      <main>
        <div className="container margin-vert--lg">
          <div className={styles.content}>
            <h1>Our Alumni</h1>
            <p className="text--large">
              If you are an alumnus or an alumna of the Computerization club and would like us to update your listing or link to your homepage, please open an issue or pull request at the <a href="https://github.com/Computerization/docusaurus/issues">Computerization/docusaurus</a> repository, or drop us a WeChat message.
            </p>
          </div>
          <AlumniTimeline alumni={alumni} />
        </div>
      </main>
    </Layout>
  );
}
