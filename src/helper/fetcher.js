export const fetcher = (...args) => fetch(...args).then((res) => res.json());

// Custom fetcher function to include timezone offset in headers
export const fetcherWithTimeZone = async (url, options) => {
  const response = await fetch(url[0], {
    headers: {
      ...url[1],
      "Content-Type": "application/json",
    },
  });
  return response.json();
};
