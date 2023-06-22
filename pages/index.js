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
          I'm a Full Stack Developer with a passion for crafting efficient and
          user-friendly digital solutions. I draw energy and inspiration from
          rigorous workouts with the F3 Nation, which parallel my professional
          discipline and precision.
        </p>

        <p>
          In addition, the principles of Aikido, which I practice weekly, remind
          me of the importance of harmony and fluidity, elements I infuse into
          my coding process.
        </p>

        <p>
          Away from my keyboard, I relish the playful company of Loki, our
          two-year-old Frenchton, and cherish my time with my supportive family.
        </p>

        <p>
          Exploring nature's wonders with my wife and son are my preferred ways
          to rejuvenate.
        </p>

        <p>
          Balancing these personal passions with my professional endeavors, I've
          realized the beauty of a holistic lifestyle where my role as a
          developer complements my other interests.
        </p>

        <p>Welcome to my world, where code meets lifestyle.</p>
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
