import path from 'path';
import {
  getPluginI18nPath,
  normalizeUrl,
  docuHash,
  posixPath,
} from '@docusaurus/utils';
import type { LoadContext, Plugin } from '@docusaurus/types';
// eslint-disable-next-line import/no-unresolved
import type { AlumniData } from 'docusaurus-plugin-alumni';

import getAlumni from './alumni';

export default function pluginAlumni(context: LoadContext): Plugin<AlumniData> {
  const {
    siteDir,
    siteConfig: { baseUrl },
    generatedFilesDir,
    i18n: { currentLocale },
  } = context;
  const pluginDataDirRoot = path.join(
    generatedFilesDir,
    'docusaurus-plugin-alumni',
  );
  return {
    name: 'docusaurus-plugin-alumni',
    getThemePath() {
      return path.resolve(__dirname, 'js-theme');
    },
    getTypeScriptThemePath() {
      return path.resolve(__dirname, '..', 'src', 'theme');
    },
    async loadContent() {
      const contentPaths = {
        contentPath: path.resolve(siteDir, 'alumni'),
        contentPathLocalized: getPluginI18nPath({
          siteDir,
          locale: currentLocale,
          pluginName: 'docusaurus-plugin-alumni',
          pluginId: 'default',
        }),
      };
      return getAlumni('alumni.yml', contentPaths);
    },
    async contentLoaded({ content, actions }) {
      const { addRoute, createData } = actions;
      const url = normalizeUrl([baseUrl, 'alumni']);
      const alumniData = await createData(
        `${docuHash('alumni')}.json`,
        JSON.stringify(content, null, 2),
      );
      addRoute({
        path: url,
        component: '@theme/AlumniPage',
        exact: true,
        modules: {
          alumni: `./docusaurus-plugin-alumni/${posixPath(
            path.relative(pluginDataDirRoot, alumniData),
          )}`,
        },
      });
    },
  };
}
