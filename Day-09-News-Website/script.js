window.onload = function () {

  const newsContainer = document.querySelector("#news-container");
  const form = document.querySelector(".form");
  const menus = document.querySelector(".menus");
  const topic = document.querySelector("#topic");

  const key = "08c106f730cc4c36ad6e3b5925e9d229";

  const createCards = (news) => {
    news.forEach(elem => {
      const card = document.createElement("div");
      card.className = "card";

      const content = document.createElement("div");
      content.setAttribute("class", "content");

      const img = document.createElement("img");
      img.setAttribute("src", elem.urlToImage);
      img.setAttribute("class", "image");

      const title = document.createElement("p");
      title.setAttribute("class", "title");
      title.textContent = elem.title;

      const description = document.createElement("p");
      description.textContent = elem.description.slice(0, 100) + "...";
      description.setAttribute("class", "description");

      const author = document.createElement("p");
      author.setAttribute("class", "author");
      author.textContent = "~ " + elem.author.split(",")[0];

      const date = document.createElement("p");
      date.setAttribute("class", "date");
      date.textContent = elem.publishedAt.slice(0, 10);

      const readMoreBtn = document.createElement("a");
      readMoreBtn.setAttribute("class", "read-more-btn");
      readMoreBtn.setAttribute("href", elem.url);
      readMoreBtn.textContent = "Read More";

      card.appendChild(img);
      card.appendChild(content);

      content.appendChild(title);
      content.appendChild(date);
      content.appendChild(author);
      content.appendChild(description);
      content.appendChild(readMoreBtn);

      newsContainer.appendChild(card);
    });
  }

  const fetchNews = async (query) => {
    console.log(query);
    const url = `https://newsapi.org/v2/everything?q=${query}&apikey=${key}`
    try {
      const response = await fetch(url);
      const data = await response.json();
      if(data.totalResults) {
        topic.textContent = query;
        newsContainer.innerHTML = "";
        createCards(data.articles);
      }
    }
    catch (err) {
      console.log("Error : ", err);
    }
  }
  fetchNews("politics");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = e.target.search.value.trim();
    fetchNews(data);
  });

  menus.addEventListener("click", (e) => {
    const elem = e.target;
    if (elem.nodeName === "LI") {
      fetchNews(elem.textContent)
    }
  });

}