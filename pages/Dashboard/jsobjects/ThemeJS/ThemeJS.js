export default {
  toggleTheme() {
    const isDark = appsmith.store.isDarkMode ?? false;
    storeValue("isDarkMode", !isDark);
  }
}
