import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
import styles from "./styles.module.css";

const features = [
  {
    title: "Web 开发",
    description: (
      <Translate
        id="frontpage.sec1.item1"
        values={{
          link1: <a href="https://vuejs.org/">Vue.js</a>,
          link2: <a href="/docs/enspire/what-is-enspire/">Enspire</a>,
        }}>
        {
          "{link1} 等多个现代化前端框架 - 开发 {link2} - 学生会社团部官方合作关系"
        }
      </Translate>
    ),
  },
  {
    title: "算法竞赛",
    description: (
      <Translate id="frontpage.sec1.item2">备考 USACO - 算法 lecture</Translate>
    ),
  },
  {
    title: "AI 部",
    description: (
      <Translate id="frontpage.sec1.item3">
        研讨前沿技术 - 丰富社团联动机会 - 亲手设计一个自己的神经网络 - 无限可能
      </Translate>
    ),
  },
];

function Home(): JSX.Element {
  return (
    <Layout
      title="Hello from Computerization"
      description="C社 << Computerization << 世外信息化社">
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Computerization</h1>
          <p className="hero__subtitle">
            {"C社 << Computerization << 世外信息化社"}
          </p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted,
              )}
              id={styles.getStarted}
              to="docs/about-us">
              <Translate id="frontpage.button">了解更多</Translate>
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features?.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                <div className="col text--center">
                  <h2>
                    <Translate id="frontpage.sec1">我们的活动</Translate>
                  </h2>
                </div>
              </div>
              <div className="row">
                {features.map(({ imageUrl, title, description }, idx) => (
                  <div
                    key={title}
                    className={clsx("col col--4", styles.feature)}>
                    {imageUrl && (
                      <div className="text--center">
                        <img
                          className={styles.featureImage}
                          src={imageUrl}
                          alt={title}
                        />
                      </div>
                    )}
                    <h3>
                      {title === "AI 部" ? (
                        <a href="http://ai-lab.club/">
                          <Translate id={`frontpage.sec1.item${idx + 1}.title`}>
                            {title}
                          </Translate>
                        </a>
                      ) : (
                        <Translate id={`frontpage.sec1.item${idx + 1}.title`}>
                          {title}
                        </Translate>
                      )}
                    </h3>
                    <p>{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <div className="col text--center">
                <h2>
                  <Translate id="frontpage.sec2.title">最新动态</Translate>
                </h2>
              </div>
            </div>
            <div style={{ textAlign: "center" }} className="row">
              {/* <div className="col col--6">
                <div className={styles.card}>
                  <h3 className={styles.header}>
                    <Translate id="frontpage.sec2.item1">
                      2021 届圆满落幕 🥳
                    </Translate>
                  </h3>
                  <div>
                    <img
                      style={{ maxWidth: "400px", width: "100%" }}
                      alt="all club members"
                      src="/img/club_photo.jpeg"
                    />
                  </div>
                </div>
              </div> */}
              <div className="col col--6">
                <div className={styles.card}>
                  <h3 className={styles.header}>
                    <Translate id="frontpage.sec2.recruitment2026">
                      C 社 2026 届开始招新！
                    </Translate>
                  </h3>
                  <div>
                    <img
                      style={{ maxWidth: "400px", width: "100%" }}
                      alt="C 社 2026-27 届招新海报"
                      src="/img/poster26.jpg"
                    />
                  </div>
                </div>
              </div>
              <div className="col col--6">
                <div className={styles.card}>
                  <h3 className={styles.header}>
                    <Translate id="frontpage.sec2.item2">
                      C 社 2025 届开始招新！
                    </Translate>
                  </h3>
                  <div>
                    <img
                      style={{ maxWidth: "400px", width: "100%" }}
                      alt="poster"
                      src="/img/poster25.png"
                    />
                  </div>
                </div>
              </div>
              <div className="col col--6">
                <div className={styles.card}>
                  <h3 className={styles.header}>
                    <Translate id="frontpage.sec2.item2">2024-2025</Translate>
                  </h3>
                  <div>
                    <img
                      style={{ maxWidth: "400px", width: "100%" }}
                      alt="poster"
                      src="/img/poster24.jpg"
                    />
                  </div>
                </div>
              </div>
              <div className="col col--6">
                <div className={styles.card}>
                  <h3 className={styles.header}>
                    <Translate id="frontpage.sec2.item2">2023-2024</Translate>
                  </h3>
                  <div>
                    <img
                      style={{ maxWidth: "400px", width: "100%" }}
                      alt="poster"
                      src="/img/poster.jpg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
