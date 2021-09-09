/// <reference types="@docusaurus/module-type-aliases" />

declare module 'docusaurus-plugin-alumni' {
  export type Member = {
    readonly name: string;
    readonly bio?: string; // ideally ≤ 120 characters
    // URL of profile image ("src" attribute in <img>);
    // if null/undefined, a default image will be shown
    readonly image?: string;
    // Below 4 are contact methods; Each should be a link ("href" attribute in <a>)
    readonly links: {
      readonly website?: string;
      readonly github?: `https://github.com/${string}`;
      readonly linkedin?: `https://www.linkedin.com/in/${string}`;
      readonly email?: `mailto:${string}`;
    };
    // Below is the preferred contact method;
    // clicking the profile image leads to this type of link
    readonly favoredLink: 'website' | 'github' | 'linkedin' | 'email';
  };

  type AlumniOfYear = {
    readonly classOf: number;
    readonly members: readonly Member[];
  };

  export type AlumniData = AlumniOfYear[];
}

declare module '@theme/AlumniTimeline' {
  // eslint-disable-next-line import/no-unresolved
  import type { AlumniData } from 'docusaurus-plugin-alumni';

  export type Props = {
    readonly alumni: AlumniData;
  };
  export default function AlumniTimeline(props: Props): JSX.Element;
}

declare module '@theme/Members' {
  // eslint-disable-next-line import/no-unresolved
  import type { Member } from 'docusaurus-plugin-alumni';

  export type Props = {
    readonly members: readonly Member[];
  };
  export default function Members(props: Props): JSX.Element;
}

declare module '@theme/MemberCard' {
  // eslint-disable-next-line import/no-unresolved
  import type { Member } from 'docusaurus-plugin-alumni';

  export type Props = Member;
  export default function MemberCard(props: Props): JSX.Element;
}

declare module '@theme/AlumniPage' {
  // eslint-disable-next-line import/no-unresolved
  import type { AlumniData } from 'docusaurus-plugin-alumni';

  export type Props = {
    alumni: AlumniData;
  };
  export default function MemberCard(props: Props): JSX.Element;
}

declare module '@theme/icons' {
  const Email: () => JSX.Element;
  const GitHub: () => JSX.Element;
  const LinkedIn: () => JSX.Element;
  const Website: () => JSX.Element;
  export { Email, GitHub, LinkedIn, Website };
}
