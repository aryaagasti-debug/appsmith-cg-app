export default {
  async logout() {

    await storeValue("isLoggedIn", false);
    await storeValue("userEmail", "");
    await storeValue("userRole", "");

  
    navigateTo("Login");

    showAlert("Logged out successfully", "success");
  }
}
