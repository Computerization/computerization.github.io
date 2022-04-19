import path from "path";
import fs from "fs/promises";
import { getPluginI18nPath, normalizeUrl, docuHash } from "@docusaurus/utils";
import type { LoadContext, Plugin } from "@docusaurus/types";
import type { AlumniData } from "docusaurus-plugin-alumni";

import getAlumni from "./alumni";

export default function pluginAlumni(context: LoadContext): Plugin<AlumniData> {
  const {
    siteDir,
    siteConfig: { baseUrl },
    i18n: { currentLocale },
  } = context;
  return {
    name: "docusaurus-plugin-alumni",
    getThemePath() {
      return path.resolve(__dirname, "theme");
    },
    getTypeScriptThemePath() {
      return path.resolve(__dirname, "..", "src", "theme");
    },
    loadContent() {
      const contentPaths = {
        contentPath: path.resolve(siteDir, "alumni"),
        contentPathLocalized: getPluginI18nPath({
          siteDir,
          locale: currentLocale,
          pluginName: "docusaurus-plugin-alumni",
          pluginId: "default",
        }),
      };
      return getAlumni("alumni.yml", contentPaths);
    },
    async contentLoaded({ content, actions }) {
      const { addRoute, createData } = actions;
      const url = normalizeUrl([baseUrl, "alumni"]);
      const alumniData = await createData(
        `${docuHash("alumni")}.json`,
        JSON.stringify(content, null, 2),
      );
      addRoute({
        path: url,
        component: "@theme/AlumniPage",
        exact: true,
        modules: {
          alumni: alumniData,
        },
      });
    },
    async getDefaultCodeTranslationMessages() {
      const file = path.join(
        __dirname,
        `../translations/${context.i18n.currentLocale}.json`,
      );
      return JSON.parse((await fs.readFile(file)).toString());
    },
  };
}
