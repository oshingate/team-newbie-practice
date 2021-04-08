{
  let signupForm = document.querySelector(".signup-form");

  let signupHandle = (event) => {
    event.preventDefault();
    let formEle = event.target;
    let newPerson = {};

    //   name validator
    if (
      formEle.signupName.value.length >= 6 &&
      formEle.signupName.value.length < 20
    ) {
      formEle.signupName.classList.add("valid");
      formEle.signupName.classList.remove("invalid");
      formEle.signupName.nextElementSibling.innerText = "";
      newPerson.name = formEle.signupName.value;
    } else {
      formEle.signupName.classList.add("invalid");
      formEle.signupName.classList.remove("valid");
      formEle.signupName.nextElementSibling.innerText =
        "name should be 6-20 char long";
    }

    //   email validator
    if (formEle.signupEmail.value.length >= 10) {
      formEle.signupEmail.classList.add("valid");
      formEle.signupEmail.classList.remove("invalid");
      formEle.signupEmail.nextElementSibling.innerText = "";
      newPerson.email = formEle.signupEmail.value;
    } else {
      formEle.signupEmail.classList.add("invalid");
      formEle.signupEmail.classList.remove("valid");
      formEle.signupEmail.nextElementSibling.innerText =
        "Email should be atleast 10 char long";
    }

    //   mobile validator
    if (formEle.signupMobile.value.length == 10) {
      formEle.signupMobile.classList.add("valid");
      formEle.signupMobile.classList.remove("invalid");
      formEle.signupMobile.nextElementSibling.innerText = "";
      newPerson.mobile = formEle.signupMobile.value;
    } else {
      formEle.signupMobile.classList.add("invalid");
      formEle.signupMobile.classList.remove("valid");
      formEle.signupMobile.nextElementSibling.innerText =
        "No should contain 10 digits";
    }
    //   dob validator
    if (formEle.signupBirthDate.value != "") {
      formEle.signupBirthDate.classList.add("valid");
      formEle.signupBirthDate.classList.remove("invalid");

      newPerson.dob = formEle.signupBirthDate.value;
    } else {
      formEle.signupBirthDate.classList.add("invalid");
      formEle.signupBirthDate.classList.remove("valid");
    }

    //   sex validator
    newPerson.sex = formEle.signupSex.value;

    //   password validator
    if (
      formEle.signupPassword.value.length >= 6 &&
      formEle.signupPassword.value.length <= 15
    ) {
      formEle.signupPassword.classList.add("valid");
      formEle.signupPassword.classList.remove("invalid");
      formEle.signupPassword.nextElementSibling.innerText = "";
    } else {
      formEle.signupPassword.classList.add("invalid");
      formEle.signupPassword.classList.remove("valid");
      formEle.signupPassword.nextElementSibling.innerText =
        "Password should be of 6-15 char long";
    }
    //   Cpassword validator
    if (formEle.signupCpassword.value == formEle.signupPassword.value) {
      formEle.signupCpassword.classList.add("valid");
      formEle.signupCpassword.classList.remove("invalid");
      formEle.signupCpassword.nextElementSibling.innerText = "";
      newPerson.password = formEle.signupPassword.value;
    } else {
      formEle.signupCpassword.classList.add("invalid");
      formEle.signupCpassword.classList.remove("valid");
      formEle.signupCpassword.nextElementSibling.innerText =
        "Passwords should match";
    }

    //   check if all validations are true

    if (
      formEle.signupName.classList.contains("invalid") ||
      formEle.signupEmail.classList.contains("invalid") ||
      formEle.signupBirthDate.classList.contains("invalid") ||
      formEle.signupMobile.classList.contains("invalid") ||
      formEle.signupPassword.classList.contains("invalid") ||
      formEle.signupCpassword.classList.contains("invalid")
    ) {
    } else {
      persons.push(newPerson);
      alert("Signup sucessful");
      signupUI();
    }
  };

  let signupUI = () => {
    signupForm.innerHTML = "";
    // name-fieldset
    let signupNameDiv = document.createElement("fieldset");
    let signupNameLabel = document.createElement("label");
    signupNameLabel.innerText = "Name";
    signupNameLabel.for = "signupName";
    let signupNameInput = document.createElement("input");
    signupNameInput.type = "text";
    signupNameInput.name = "signupName";
    signupNameInput.placeholder = "Enter Your Name";
    signupNameInput.id = "signupName";
    let signupNameSpan = document.createElement("Span");
    signupNameSpan.classList.add("signup-name-span");
    signupNameDiv.append(signupNameLabel, signupNameInput, signupNameSpan);

    //   email fieldset
    let signupEmailDiv = document.createElement("fieldset");
    let signupEmailLabel = document.createElement("label");
    signupEmailLabel.innerText = "Email";
    signupEmailLabel.for = "signupEmail";
    let signupEmailInput = document.createElement("input");
    signupEmailInput.type = "email";
    signupEmailInput.name = "signupEmail";
    signupEmailInput.placeholder = "Enter Your Email";
    signupEmailInput.id = "signupEmail";
    let signupEmailSpan = document.createElement("Span");
    signupEmailSpan.classList.add("signup-email-span");
    signupEmailDiv.append(signupEmailLabel, signupEmailInput, signupEmailSpan);

    // birthdate fieldset
    let signupBirthDateDiv = document.createElement("fieldset");
    let signupBirthDateLabel = document.createElement("label");
    signupBirthDateLabel.innerText = "BirthDate";
    signupBirthDateLabel.for = "signupBirthDate";
    let signupBirthDateInput = document.createElement("input");
    signupBirthDateInput.type = "date";
    signupBirthDateInput.name = "signupBirthDate";
    signupBirthDateInput.placeholder = "Enter Your BirthDate";
    signupBirthDateInput.id = "signupBirthDate";
    let signupBirthDateSpan = document.createElement("Span");
    signupBirthDateSpan.classList.add("signup-birthDate-span");
    signupBirthDateDiv.append(
      signupBirthDateLabel,
      signupBirthDateInput,
      signupBirthDateSpan
    );

    //   male or female div
    let signupSexDiv = document.createElement("fieldset");
    signupSexDiv.classList.add("signup-sex-box");
    let signupSexMaleLabel = document.createElement("label");
    signupSexMaleLabel.innerText = "Male";
    signupSexMaleLabel.for = "signupSex";
    let signupSexMaleInput = document.createElement("input");
    signupSexMaleInput.type = "radio";
    signupSexMaleInput.checked = "true";
    signupSexMaleInput.name = "signupSex";
    signupSexMaleInput.value = "male";
    //   signupSexMaleInput.id = "signupMaleRadio";

    let signupSexFemaleLabel = document.createElement("label");
    signupSexFemaleLabel.innerText = "Female";
    signupSexFemaleLabel.for = "signupSex";
    let signupSexFemaleInput = document.createElement("input");
    signupSexFemaleInput.type = "radio";
    signupSexFemaleInput.name = "signupSex";
    signupSexFemaleInput.value = "female";
    //   signupSexFemaleInput.id = "signupFemaleRadio";

    signupSexDiv.append(
      signupSexMaleLabel,
      signupSexMaleInput,
      signupSexFemaleLabel,
      signupSexFemaleInput
    );

    //   mobile no div
    let signupMobileDiv = document.createElement("fieldset");
    let signupMobileLabel = document.createElement("label");
    signupMobileLabel.innerText = "Mobile";
    signupMobileLabel.for = "signupMobile";
    let signupMobileInput = document.createElement("input");
    signupMobileInput.type = "number";
    signupMobileInput.name = "signupMobile";
    signupMobileInput.placeholder = "Enter Your Mobile no";
    signupMobileInput.id = "signupMobile";
    let signupMobileSpan = document.createElement("Span");
    signupMobileSpan.classList.add("signup-mobile-span");
    signupMobileDiv.append(
      signupMobileLabel,
      signupMobileInput,
      signupMobileSpan
    );

    // password div
    let signupPasswordDiv = document.createElement("fieldset");
    let signupPasswordLabel = document.createElement("label");
    signupPasswordLabel.innerText = "Password";
    signupPasswordLabel.for = "signupPassword";
    let signupPasswordInput = document.createElement("input");
    signupPasswordInput.type = "password";
    signupPasswordInput.name = "signupPassword";
    signupPasswordInput.placeholder = "Enter Your Password";
    signupPasswordInput.id = "signupPassword";
    let signupPasswordSpan = document.createElement("Span");
    signupPasswordSpan.classList.add("signup-password-span");
    signupPasswordDiv.append(
      signupPasswordLabel,
      signupPasswordInput,
      signupPasswordSpan
    );

    // Cpassword div
    let signupCpasswordDiv = document.createElement("fieldset");
    let signupCpasswordLabel = document.createElement("label");
    signupCpasswordLabel.innerText = "Confirm Password";
    signupCpasswordLabel.for = "signupCpassword";
    let signupCpasswordInput = document.createElement("input");
    signupCpasswordInput.type = "password";
    signupCpasswordInput.name = "signupCpassword";
    signupCpasswordInput.placeholder = "Confirm Password";
    signupCpasswordInput.id = "signupCpassword";
    let signupCpasswordSpan = document.createElement("Span");
    signupCpasswordSpan.classList.add("signup-cpassword-span");
    signupCpasswordDiv.append(
      signupCpasswordLabel,
      signupCpasswordInput,
      signupCpasswordSpan
    );

    // submit button
    let signupSubmitInput = document.createElement("input");
    signupSubmitInput.type = "submit";
    signupSubmitInput.innerText = "submit";
    signupSubmitInput.classList.add("btn", "form-btn-pri");

    // append all
    signupForm.append(
      signupNameDiv,
      signupEmailDiv,
      signupBirthDateDiv,
      signupSexDiv,
      signupMobileDiv,
      signupPasswordDiv,
      signupCpasswordDiv,
      signupSubmitInput
    );
    signupForm.addEventListener("submit", signupHandle);
  };

  let loginForm = document.querySelector(".login-form");

  let handleLogin = (event) => {
    event.preventDefault();
    let signinEle = event.target;
    let inputPerson = {};
    inputPerson.email = signinEle.loginEmail.value;
    inputPerson.password = signinEle.loginPassword.value;
    console.log(inputPerson);

    let matchedPerson = persons.filter((e) => {
      if (e.email == inputPerson.email && e.password == inputPerson.password) {
        return "true";
      }
    });

    if (matchedPerson.length === 1) {
      let selectedPerson = matchedPerson[0];
      alert(`login sucessfull. welcome  ${selectedPerson.name}`);
    } else {
      alert("invalid credentials");
    }
  };
  loginForm.addEventListener("submit", handleLogin);

  // logic to toggle between pages

  let signupPage = document.querySelector(".signup-page");
  let loginPage = document.querySelector(".login-page");
  let loginlink = document.querySelector(".login-link");
  let signinlink = document.querySelector(".signin-link");
  let signinlinkHead = document.querySelector(".signin-head");
  let loginlinkHead = document.querySelector(".login-head");
  let toggleLoginLink = document.querySelectorAll(".toggleLogin");
  toggleLoginLink.forEach((e) => {
    e.addEventListener("click", () => {
      signupPage.classList.toggle("displayNone");
      loginPage.classList.toggle("displayNone");
      loginlink.classList.toggle("displayNone");
      signinlink.classList.toggle("displayNone");
      signinlinkHead.classList.toggle("displayNone");
      loginlinkHead.classList.toggle("displayNone");
    });
  });

  signupUI();
}
