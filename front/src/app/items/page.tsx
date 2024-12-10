import { Categories } from "@/components/items/Categories"
import { Items } from "@/components/items/Items"
import styles from "../../components/items/page.module.scss"

export default async function ItemsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  let data

  try {
    const { search } = await searchParams
    data = await fetch('http://localhost:8080/api/items?search=' + search)
  } catch (error) {
    console.error("Network error:", error);
  }

  if (!data) {
    return (
      <main className={styles.container}>
        <p role="alert">An error occurred while fetching items. Please try again later.</p>
      </main>
    );
  }

  const { categories, items } = await data.json()

  return <main className={styles.container}>
    <section
      className={styles.dataContainer}
      aria-labelledby="categories-section"
    >
      {categories.length === 0 ? (
        <p role="alert">No categories found for your search.</p>
      ) : (
        <Categories items={categories} />
      )}
      {items.length === 0 ? (
        <p role="alert">No items found for your search.</p>
      ) : (
        <Items items={items} />
      )}
    </section>
  </main>
}