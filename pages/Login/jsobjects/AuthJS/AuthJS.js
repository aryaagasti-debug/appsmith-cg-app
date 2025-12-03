export default { 
  async login () { 
    const email = email_input.text.trim();
    const password = password_input.text;

    if (!email || !password) { 
      showAlert("Please enter email & password", "error"); 
    } 

    const users = await GetUsers.run(); 

    const user = users.find(
      (u) =>
        String(u.email).trim().toLowerCase() === email.toLowerCase() &&
        String(u.password) === String(password)
    ); 

    if (!user) { 
      showAlert("Wrong email or password", "error"); 
      return; 
    } 

    await storeValue("isLoggedIn", true); 
    await storeValue("userEmail", user.email); 
    await storeValue("userRole", user.role); 

    showAlert("Login successfully", "success"); 
    navigateTo("Dashboard"); 
  } 
}
