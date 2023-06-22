import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import { title } from "process";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Welcome to my <a href="https://nextjs.org/learn"> Next.js </a>{" "}
          website.
        </p>

        <p>
          Hi, I'm Vadim, a Full Stack Developer committed to creating efficient,
          user-friendly digital solutions. Drawing energy from regular workouts
          with F3 Nation, I apply the same discipline and precision to my
          coding.
        </p>

        <p>
          A weekly practitioner of Aikido, its principles of harmony and
          fluidity guide my coding process, leading to functional, intuitive
          solutions.
        </p>

        <p>
          My family is my source of strength, their presence reinforcing the
          value of a balanced work-life. Our adventures in nature offer
          refreshing counterpoints to my technical pursuits.
        </p>

        <p>
          Additionally, Loki, our energetic two-year-old Frenchton, adds joy and
          vitality to my life. His spirit reminds me to enjoy life's simple
          moments.
        </p>

        <p>
          As a Full Stack Developer, I believe in a balanced life where personal
          passions and professional growth coexist. Welcome to my world, where
          technology harmonizes with an enriching lifestyle.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
