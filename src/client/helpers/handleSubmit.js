export const handleSubmit = (url) => {
  const data = fetch("http://localhost:8000/", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ url: url }),
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
  return data;
};
