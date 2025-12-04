export default {
  copyRow(row) {
    const username = row.Username;
    const url = row.URL;
    const password = row["Password (Hashed)"]; 

    if (!username && !url && !password) {
      showAlert("❌ Nothing to copy in this row", "error");
      return;
    }

    const textToCopy = `url: ${url || "N/A"}
username: ${username || "N/A"}
Password: ${password || "N/A"}`;

    copyToClipboard(textToCopy);
    showAlert("Username, URL & Password copied!", "success");
  },
};
