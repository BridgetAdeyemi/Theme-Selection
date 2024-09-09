// Theme Selection
document.getElementById("theme-select").addEventListener("change", function () {
  switch (this.value) {
    case "light":
      document.body.classList = "theme-light";
      document.getElementById("theme-message").innerText =
        "You have selected the Light theme.";
      break;
    case "dark":
      document.body.classList = "theme-dark";
      document.getElementById("theme-message").innerText =
        "You have selected the Dark theme.";
      break;
    case "blue":
      document.body.classList = "theme-blue";
      document.getElementById("theme-message").innerText =
        "You have selected the Blue theme.";
      break;
  }
});

// Form Validation
document.getElementById("validation-form").addEventListener("submit", function (event) {
    event.preventDefault();
    let userName = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let message = "";

    switch (true) {
      case userName === "":
        message = "Please enter your username.";
        break;
      case email === "":
        message = "Please enter your email.";
        break;
      case password === "":
        message = "Please enter your password.";
        break;
      default:
        message = "Form submitted successfully!";
    }

    document.getElementById("validation-response").innerText = message;
  });

// Weather Conditions
document.getElementById("weather-select").addEventListener("change", function () {
    switch (this.value) {
      case "sunny":
        document.getElementById("weather-description").innerHTML =
          "It is a beautiful sunny day!";
        break;
      case "cloudy":
        document.getElementById("weather-description").innerHTML =
          "It is a cloudy day, might rain later.";

        break;
      case "rainy":
        document.getElementById("weather-description").innerHTML =
          "It is raining outside, grab your umbrella!";

        break;
      case "snowy":
        document.getElementById("weather-description").innerHTML =
          "It is snowing outside, stay warm!";

        break;
      default:
        document.getElementById("weather-description").innerHTML =
          "Please select a weather condition.";
    }
  });
