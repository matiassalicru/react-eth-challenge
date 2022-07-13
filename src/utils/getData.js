import defaultData from '../../data.json';

const getData = async (url) => {
  if (!url) return defaultData.data;
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export default getData;
