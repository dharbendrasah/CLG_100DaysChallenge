window.onload = function () {
  const container = document.querySelector(".container");
  const form = document.querySelector(".form");

  const loader = document.createElement("h2");
  loader.textContent = "Loading...";
  loader.style.color = "white";
  loader.style.textAlign = "center";

  const displayCard = (data) => {
    // creating structure
    const profileCard = document.createElement("div");
    profileCard.className = "profile-card";

    const top = document.createElement("div");
    top.className = "top";

    const imageNameUsername = document.createElement("div");
    imageNameUsername.className = "image-name-username";

    const image = document.createElement("img");
    image.className = "image";
    image.setAttribute("alt", "profile-image");

    const nameUsername = document.createElement("div");
    nameUsername.className = "name-username";

    const name = document.createElement("h3");
    name.className = "name";

    const username = document.createElement("p");
    username.className = "username";

    const linkBtn = document.createElement("a");
    linkBtn.className = "link-btn";
    linkBtn.textContent = "Check Profile";

    const aboutSection = document.createElement("div");
    aboutSection.className = "about-section";

    const about = document.createElement("h1");
    about.className = "about";
    about.textContent = "About";

    const aboutContent = document.createElement("p");
    aboutContent.className = "about-content";

    const bottom = document.createElement("div");
    bottom.className = "bottom";

    const followersContainer = document.createElement("div");
    followersContainer.className = "followers-container";

    const followersH3 = document.createElement("h3");
    followersH3.textContent = "Followers";

    const followers = document.createElement("p");
    followers.className = "followers";

    const followingsContainer = document.createElement("div");
    followingsContainer.className = "followings-container";

    const followingsH3 = document.createElement("h3");
    followingsH3.textContent = "Followings";

    const followings = document.createElement("p");
    followings.className = "followings";

    const reposContainer = document.createElement("div");
    reposContainer.className = "repos-container";

    const reposH3 = document.createElement("h3");
    reposH3.textContent = "Repos";

    const repos = document.createElement("p");
    repos.className = "repos";

    // setting content
    image.setAttribute("src", data.avatar_url);
    name.textContent = data.name;
    username.textContent = `@${data.login}`;
    linkBtn.setAttribute("href", data.html_url);
    about.textContent = data.bio;
    followers.textContent = data.followers;
    followings.textContent = data.following;
    repos.textContent = data.public_repos;


    // appending element
    container.appendChild(profileCard);
    profileCard.appendChild(top);
    profileCard.appendChild(aboutSection);
    profileCard.appendChild(bottom);

    top.appendChild(imageNameUsername);
    top.appendChild(linkBtn);

    imageNameUsername.appendChild(image);
    imageNameUsername.appendChild(nameUsername);

    nameUsername.appendChild(name);
    nameUsername.appendChild(username);

    aboutSection.appendChild(about);
    aboutSection.appendChild(aboutContent);

    bottom.appendChild(followersContainer);
    bottom.appendChild(followingsContainer);
    bottom.appendChild(reposContainer);

    followersContainer.appendChild(followersH3);
    followersContainer.appendChild(followers);

    followingsContainer.appendChild(followingsH3);
    followingsContainer.appendChild(followings);

    reposContainer.appendChild(reposH3);
    reposContainer.appendChild(repos);
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const value = form.username.value.trim()
    const api = `https://api.github.com/users/${value}`
    container.appendChild(loader);

    try {
      const response = await fetch(api);
      const data = await response.json();
      console.log(data);

      const pc = document.querySelector(".profile-card");
      if(pc !== null) 
        pc.remove();
      
      if(data.login) {
        loader.remove();
        displayCard(data);
      }
      else if(data.message) {
        loader.textContent = "Not Found"
        loader.style.color = "red";
      }
    }
    catch (err) {
      console.log("Error : ", err);
    }
  });

}