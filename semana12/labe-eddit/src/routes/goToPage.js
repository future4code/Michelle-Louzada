export const goToLoginPage = (history) => {
    history.push(`/login`);
  };
  
  export const goToHomePage = (history) => {
    history.push("/");
  };

  export const goToSignUpPage = (history) => {
    history.push(`/signup`);
  };

  export const goToDetailsPage = (history, id) => {
    history.push(`/homepage/${id}`);
  };