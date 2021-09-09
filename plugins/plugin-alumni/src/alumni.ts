import fs from 'fs-extra';
import path from 'path';
import { load } from 'js-yaml';
import { Joi, URISchema } from '@docusaurus/utils-validation';
import { findFolderContainingFile } from '@docusaurus/utils';
import type { ContentPaths } from '@docusaurus/utils/lib/markdownLinks';
import type { Member, AlumniData } from 'plugin-alumni';

const AlumniDataSchema = Joi.array().items(
  Joi.object({
    classOf: Joi.number(),
    members: Joi.array().items(
      Joi.object<Member>({
        name: Joi.string().required(),
        bio: Joi.string(),
        image: URISchema,
        links: Joi.object({
          website: Joi.string(),
          github: Joi.string().pattern(/^https:\/\/github.com\//),
          linkedin: Joi.string().pattern(/^https:\/\/www.linkedin.com\/in\//),
          email: Joi.string().pattern(/^mailto:/),
        }),
        favoredLink: Joi.string().equal(
          'website',
          'github',
          'linkedin',
          'email'
        ),
      })
    ),
  })
);

export default async function getAlumni(
  alumniPath: string,
  contentPaths: ContentPaths
): Promise<AlumniData | undefined> {
  const contentPath = await findFolderContainingFile(
    [contentPaths.contentPathLocalized, contentPaths.contentPath],
    alumniPath
  );
  const filePath = path.join(contentPath, alumniPath);
  if (await fs.pathExists(filePath)) {
    const contentString = await fs.readFile(filePath, { encoding: 'utf8' });
    const unsafeContent = load(contentString);
    return Joi.attempt(unsafeContent, AlumniDataSchema);
  }
  return undefined;
}
