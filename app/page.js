import Link from 'next/link';
import { getDatabase } from '../lib/notion';
import Text from '../components/text';
import styles from './index.module.css';

export const databaseId = process.env?.NOTION_DATABASE_ID ?? 'NOTION_DATABASE_ID';

async function getPosts() {
  const database = await getDatabase();

  return database;
}

export default async function Page() {
  const posts = await getPosts();
  return (
    <div>
      <main className={styles.container}>
        <header className={styles.header}>
          <p>
          Hear more about the BRNDD community and what we're working on
          </p>
        </header>

        <h2 className={styles.heading}>All Posts</h2>
        <ol className={styles.posts}>
          {posts.map((post) => {
            const date = new Date(post.last_edited_time).toLocaleString(
              'en-US',
              {
                month: 'short',
                day: '2-digit',
                year: 'numeric',
              },
            );
            const slug = post.properties?.Slug?.rich_text[0].text.content;
            return (
              <li key={post.id} className={styles.post}>
                <h3 className={styles.postTitle}>
                  <Link href={`/article/${slug}`}>
                    <Text title={post.properties?.Title?.title} />
                  </Link>
                </h3>

                <p className={styles.postDescription}>{date}</p>
                <Link href={`/article/${slug}`}>Read post →</Link>
              </li>
            );
          })}
        </ol>
      </main>
    </div>
  );
}
