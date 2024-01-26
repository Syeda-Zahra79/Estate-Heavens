'use client'
import ProductDetail from "@/components/ProductDetail";
import { useSearchParams } from "next/navigation";

function mergeArraysToMap(keys: string[], values: string[]): { [key: string]: string } {
  if (keys.length !== values.length) {
    throw new Error("The number of keys and values must be the same.");
  }

  // Use reduce to create the key/value map
  const mergedMap: { [key: string]: string } = keys.reduce((map, key, index) => {
    map[key] = values[index];
    return map;
}, {} as { [key: string]: string });

  return mergedMap;
}

export default function productDetail() {
  const searchParams = useSearchParams()
  let values=[], keys= [];
  for(const [key, value] of searchParams.entries()) {
     values.push(value)
     keys.push(key)
  }

  const item = mergeArraysToMap(keys, values)
  
  return (
    <div>
      <ProductDetail item={item} />
    </div>
  )
}
