export default function checkApiResponse(res) {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};