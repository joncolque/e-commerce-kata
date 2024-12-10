import { ProductDetailComponent } from "@/components/items/id/ProductDetail"
import { ProductDetail } from "@/interfaces/product.interface"
import styles from "../../../components/items/id/page.module.scss"

const ProductPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params
  let item: ProductDetail | undefined

  try {
    const response = await fetch('http://localhost:8080/api/items/' + id)
    const data = await response.json()
    item = data.item
  } catch (error) {
    console.error("Network error:", error);
  }

  if (!item) {
    return (
      <main className={styles.container}>
        <p role="alert">An error occurred or the product was not found. Please try again.</p>
      </main>
    );
  }

  return (
    <main
      className={styles.container}
      aria-labelledby="product-title"
    >
      <ProductDetailComponent item={item} />
    </main>
  )
}

export default ProductPage
