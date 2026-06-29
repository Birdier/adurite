import SingleProduct from "@/components/SingleProduct";
import { getSingleProduct } from "@/lib/server";

const feat_products = [
    "prod_QdEMLky1zpte9b",
    "prod_QmcQeZmHHscrTX",
    "prod_QdAf5WRcDh6cgW",
    "prod_QdAe4eIYtczn5W"
]

export default async function Page() {
    return (
        <main>
            <div className="min-h-screen flex-col items-center left-[10%] justify-between p-2 bg-base-100 mx-[10%] my-[2.5%] rounded-xl glass">
                <section className="text-center p-[10%]">
                    <h2 className="vp-size-6-2 text-white gborder" style={{ fontWeight: 500 }}>Your One-Stop Shop for Digital Goods</h2>
                    <p className="vp-size-2-1 p-3 text-white gborder" style={{ fontWeight: 500 }}>Explore our collection of digital products.</p>
                    <a href="/products" className="btn btn-secondary btn-lg text-white">Shop Now</a>
                </section>
                <div className="mt-4 items-center justify-between bg-base-100 p-2 rounded-xl">
                    <h1 className="text-6xl text-white text-center mb-4">Featured</h1>
                    <section className="flex flex-col gap-2 p-2 lg:flex-row lg:items-start lg:gap-2 lg:flex-wrap items-center justify-center">
                        {feat_products.map(async (productId) => {
                            const product = await getSingleProduct(productId);
                            return (
                                SingleProduct({
                                    id: productId,
                                    title: product.title,
                                    description: product.description,
                                    image: product?.image,
                                    price: product.price,
                                    metadata: product.metadata
                                })
                            );
                        })}
                    </section>
                </div>
            </div>
        </main>
    );
}
