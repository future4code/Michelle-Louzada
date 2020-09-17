export const goToHomePage = (history) => {
    history.push("/");
  };
  export const goToTripPage = (history) => {
    history.push("/viagens");
  };
  export const goToLoginPage = (history) => {
    history.push("/login");
  };
  export const goToFormPage = (history, id) => {
    history.push(`/viagens/formulario/${id}`);
  };