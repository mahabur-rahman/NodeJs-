const btn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const output = document.getElementById("output");
const degree = document.getElementById("degree");
const cityStatus = document.getElementById("cityStatus");

const btnClick = async (e) => {
  e.preventDefault();

  let cityValue = cityName.value;

  if (cityValue === "") {
    output.innerText = `Please write something before search`;
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=34047a8a428e6d7158130f7131de8d62`;

      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);
      const convertToArr = [data];

      cityName.innerText = `${convertToArr[0].name}, ${convertToArr[0].sys.country}`;
      degree.innerText = convertToArr[0].main.temp;
      // cityStatus.innerText = convertToArr[0].weather[0].main;

      const tempMood = convertToArr[0].weather[0].main;

      // cloud, sunny
      if (tempMood === "Clear") {
        cityStatus.innerHTML =
          "<i class='fas fa-sun' style='color : #ff0000;'></i>";
      } else if (tempMood === "Clouds") {
        cityStatus.innerHTML =
          "<i class='fas fa-cloud' style='color : blue;'></i>";
      } else if (tempMood === "Rain") {
        cityStatus.innerHTML =
          "<i class='fas fa-rain' style='color : pink;'></i>";
      } else {
        cityStatus.innerHTML =
          "<i class='fas fa-cloud' style='color : #000;'></i>";
      }
    } catch {
      output.innerText = `Please enter cit name properly`;
    }
  }
};

btn.addEventListener("click", btnClick);
