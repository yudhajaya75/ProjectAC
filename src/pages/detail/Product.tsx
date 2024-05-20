import { useParams } from "react-router-dom";
import GlobalLayout from "../../layouts/GlobalLayout";
import useDetailProduct from "../../hooks/useDetailProduct";
import Heading from "../../components/global/Heading";
import Image from "../../components/global/Image";
import BreadCrumbs from "../../components/global/BreadCrumb";
import PurchasePaket from "../../components/purchase/purchasePaket";
import Founding from "../../components/sosmed/Founding";
import CLink from "../../components/button/CLink";
import { BsWhatsapp } from "react-icons/bs";

type Props = {
  type: "Pelatihan" | "Konsultasi" | "Webinar" | "Paket" | "Konseling";
};

const Product = ({ type }: Props) => {
  const { slug } = useParams();

  const { content, contentType, loading } = useDetailProduct(slug!, type);

  if (!slug) return <GlobalLayout>Please Provide Slug</GlobalLayout>;

  const bc = [
    { pageName: type, link: "/" },
    {
      pageName: content ? content.attributes.title : "Home",
      link: "/layanan/" + slug,
    },
  ];

  if (!content)
    return (
      <GlobalLayout>
        <main className="h-screen flex justify-center items-center text-center">
          {contentType} Not Found :( with{" "}
          <code className="mx-2 italic underline">{window.location.href}</code>
        </main>
      </GlobalLayout>
    );

  return (
    <GlobalLayout>
      {loading ? (
        <div>Loading...</div>
      ) : (
        content && (
          <>
            <BreadCrumbs breadCrumbs={bc} />
            <div className="h-1/2 w-full">
              {content.attributes.image.data.attributes.url && (
                <Image
                  customClass="w-full"
                  src={content.attributes.image.data.attributes.url}
                />
              )}
            </div>
            <main className="px-5 lg:px-24">
              <Heading customClass="pt-[95px] pb-[51px]">
                {content.attributes.title}
              </Heading>
              {contentType === "Webinar" && (
                <section className="flex justify-center">
                  <CLink
                    target="_blank"
                    customClass="bg-[#1FAF38] w-fit"
                    url="https://wa.me/+6288211655299"
                  >
                    <span>Daftar Sekarang</span> <BsWhatsapp size={32} />
                  </CLink>
                </section>
              )}
              <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 px-5 lg:px-14">
                {content.attributes.product_variants.data.length > 0 &&
                  content.attributes.product_variants.data.map(
                    (variant, index) => {
                      return (
                        <PurchasePaket
                          key={index}
                          price={variant.attributes.price}
                          feature={variant.attributes.features}
                          content={variant.attributes.content}
                          id={variant.id}
                          title={variant.attributes.title}
                          isPopular={variant.attributes.isPopuler}
                          accountEmail=""
                        />
                      );
                    }
                  )}
              </section>
              <Heading customClass="text-start pt-16 pb-10">
                Tentang {contentType} ini
              </Heading>
              <article
                dangerouslySetInnerHTML={{ __html: content.attributes.body }}
              ></article>
              <Heading customClass="pt-[158px]">Apa kata mereka?</Heading>
              <Founding />
            </main>
          </>
        )
      )}
    </GlobalLayout>
  );
};

export default Product;
