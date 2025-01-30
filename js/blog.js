const defaultImage = "../images/3dprinter1.jpg";

const displayArticles = (articles) => {
  const container = document.getElementById("articles-container");

  articles.forEach(article => {
    // Use the article's cover image or fall back to the default image if it's missing
    const coverImage = article.cover_image || defaultImage;

    const articleElement = document.createElement("div");
    articleElement.classList.add("bg-white", "rounded-lg", "shadow-lg", "overflow-hidden", "transition-all", "hover:shadow-xl");

    articleElement.innerHTML = `
      <img class="w-full h-48 object-cover" src="${coverImage}" alt="${article.title}" />
      <div class="p-6">
        <h2 class="text-2xl font-semibold text-gray-800 truncate">
          <a href="${article.url}" target="_blank" class="hover:text-blue-500">${article.title}</a>
        </h2>
        <p class="mt-2 text-gray-600 text-sm">${article.description}</p>
        <p class="mt-4 text-gray-500 text-xs">Written by: <span class="font-medium">${article.user.name}</span></p>
        <p class="text-xs text-gray-500">Published on: ${article.readable_publish_date}</p>
        <p class="mt-2 text-xs text-gray-500">Tags: ${article.tag_list.join(", ")}</p>
      </div>
    `;

    container.appendChild(articleElement);
  });
};

const fetchArticles = async () => {
  try {
    const response = await fetch("https://dev.to/api/articles");
    const articles = await response.json();

    const targetTags = ["ai", "cybersecurity", "iot", "embeddedsystems"];

    const filteredArticles = articles.filter(article =>
      targetTags.some(tag => article.tag_list.includes(tag))
    );

    displayArticles(filteredArticles);
  } catch (error) {
    console.error("Error fetching articles:", error);
  }
};

fetchArticles();
