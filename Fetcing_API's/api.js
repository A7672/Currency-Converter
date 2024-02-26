const url = "https://cat-fact.herokuapp.com/facts";
const getFact = document.querySelector("#fact");
const btn = document.querySelector("#btn");
const api_fetch = async () => {
  let responce = await fetch(url);
  // responce.json();
  console.log(responce);
  let result = await responce.json();
  getFact.innerText = result[1].text;
  getFact.innerText = result[0].text;
  getFact.innerText = result[2].text;
  getFact.innerText = result[3].text;
  getFact.innerText = result[4].text;
};

btn.addEventListener("click", api_fetch);

// const newURL =
//   "https://cat-fact.herokuapp.com/#/cat/facts/58e008780aac31001185ed05";

// const fetch_api = async () => {
//   let request = await fetch(newURL);
//   console.log(request);
//   let result1 = await request.json();
//   console.log(result1[0].text);
// };
