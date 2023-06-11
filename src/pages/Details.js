import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Product from "../parts/Details/Product";
import Suggestion from "../parts/Details/Suggestion";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
import Sitemap from "../parts/Sitemap";

export default function DetailPage() {
  return (
    <>
      <Header theme="dark" />
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/categories/91231", name: "Office Room" },
          { url: "/categories/91231/products/788", name: "Details" },
        ]}
      />
      <Product />
      <Suggestion />
      <Sitemap />
      <Footer />
    </>
  );
}
