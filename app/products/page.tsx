"use client";
import React, { useEffect, useState } from "react";
import { fetchData } from "../utils/page";
import ProductCard from "../../components/ProductCard";
import Search from "../../components/Search";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Products() {
  const router = useRouter();
  const [data, setData] = useState([]);


  const handleClickRefresh = () => {
    router.refresh();
  };
  
  let location = useSearchParams().get("location");

  useEffect(() => {
    const fetchProperties = async () => {
      location = location == null ? "Santa Monica" : location
      const properties = await fetchData(location);
      setData(properties);
    };
    fetchProperties();
  }, [location]);


  useEffect(() => {
    const fetchProperties = async () => {
      const properties = await fetchData("santa monica");
      setData(properties);
    };
    fetchProperties();
  }, []);

  return (
    <>
      <Search handleClickRefresh={handleClickRefresh} />
      <div className="flex justify-center items-center md:justify-evenly flex-wrap w-[70%] mx-auto md:flex-row flex-col md:w-[95%]">
        { data !== undefined &&
          data.length > 0 &&
          data.map((item) => <ProductCard item={item} />)}
      </div>
    </>
  );
}


