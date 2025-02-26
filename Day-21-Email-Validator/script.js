const api_key = "a0e6271edd7c4b4512c984f2a643e91f06ff569947c30cd6b79c7535d5d17437";
const url = "https://spring-shadow-9537.dharbendrasah387.workers.dev/";

const form = document.querySelector("#form");
const resultsContainer = document.querySelector("#results-container");
const resultTitle = document.querySelector("#result-title");
const result = document.querySelector("#result");
const loader = document.querySelector("#loader");

const validateEmail = async (email) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        "api_key": api_key,
        "email_address": email
      })
    });

    // Check if the response status is in the error range (400, 404, 500)
    if (!response.ok) {
      if (response.status === 400)
        throw new Error("Bad request. Check your email input.");
      else if (response.status === 404)
        throw new Error("Email not found (404).");
      else if (response.status === 500)
        throw new Error("Server error (500). Try again later.");
      else
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    console.log(response);

    const data = await response.json();
    console.log(data);
    return data;
  }
  catch (err) {
    return err;
  }
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = e.target.email.value.trim();
  try 
  {
    resultTitle.textContent = "";
    loader.style.display = "block";
    const finalData = await validateEmail(email);
    console.log(finalData);
    if (finalData.success) 
    {
      if (finalData.data.mx_found && !finalData.data.disposable && finalData.data.format_valid)
        resultTitle.textContent = `This is maybe a real email address💖`;
      else
        resultTitle.textContent = `This email is invalid or disposable😒`;
    } 
    else 
      resultTitle.textContent = `Something went wrong. Please try again😒`;
  }
  catch (err) 
  {
    resultTitle.textContent = `${err} 😒`;
  }
  finally 
  {
    loader.style.display = "none";
  }
});