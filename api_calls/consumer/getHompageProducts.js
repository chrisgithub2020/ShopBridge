import Link from "../serverLink"

const getHomePageProducts = async () => {
  try {
    const response = await fetch(`${Link()}/consumer/getTodaysProducts`);
    if (response.ok){
      const result = await response.json();
      return result;
    }
  } catch (err) {
    console.log(err)
  }
};


export default getHomePageProducts