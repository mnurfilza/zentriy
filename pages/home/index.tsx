"use client";
import { AppContext } from "next/app";
import Header from "../../components/elements/Header";
import Dealers from "../../components/elements/Dealers";
import AboutUs from "../../components/elements/AboutUs";
import Packages from "../../components/elements/Packages";
import Products from "../../components/elements/Products";
import HowToBuy from "../../components/elements/HowToBuy";
import Gallery from "../../components/elements/Gallery";
import Testimonial from "../../components/elements/Testimonial";

export default function Home() {
  return (
    <>
      <Header />
      <Dealers />
      <AboutUs />
      <Packages />
      <Products />
      <HowToBuy />
      <Gallery />
      <Testimonial />
    </>
  );
}

export async function getServerSideProps(context: AppContext) {
  return {
    props: {},
  }
}
