export default {
  checkLogin() {
    const isLoggedIn = appsmith.store.isLoggedIn;

    if (!isLoggedIn) {
      showAlert("Please login first", "warning");
      navigateTo("Login");
    }
  }
}
