import { data } from "@/assets";



export async function fetchData(location: string) {
  const url = `https://realtor16.p.rapidapi.com/forsale?location=${location}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "0d794bf4d1msh65f3b5c3592ab8ap11a657jsn1af857a27530",
      "X-RapidAPI-Host": "realtor16.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    if (result.home_search.results.length < 0 || result.home_search.results == (undefined || null)) {
      return data;
    } else {
      return result.home_search.results;
    }
  } catch (error) {
    console.error(error);
  }
}


export default fetchData