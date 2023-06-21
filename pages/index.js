import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Welcome to my portfolio.</p>

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
          Exploring nature's wonders or savoring a seafood meal with my wife
          Kate and son Alex are my preferred ways to rejuvenate.
        </p>

        <p>
          Balancing these personal passions with my professional endeavors, I've
          realized the beauty of a holistic lifestyle where my role as a
          developer complements my other interests.
        </p>

        <p>Welcome to my world, where code meets lifestyle.</p>

        <p>
          This is a sample my <a href="https://nextjs.org/learn"> Next.js </a>{" "}
          website.
        </p>
      </section>
    </Layout>
  );
}
