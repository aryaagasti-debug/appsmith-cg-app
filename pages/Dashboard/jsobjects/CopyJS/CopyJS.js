export default {
  // 🔹 Purana function (agar chahiye to rehne do)
  onRowSelectCopy() {
    const url = Table1.selectedRow?.URL;
    const username = Table1.selectedRow?.Username;

    if (!url && !username) {
      showAlert("❌ Please select a row", "error");
      return false;
    }

    const textToCopy = `
URL: ${url || "N/A"}
Username: ${username || "N/A"}
    `;

    copyToClipboard(textToCopy);
    showAlert("URL & Username copied together!", "success");
    return true;
  },

  // ✅ Sirf USERNAME copy karne ke liye
  copyUsername(row) {
    const username = row?.Username;

    if (!username) {
      showAlert("❌ Username not found", "error");
      return;
    }

    copyToClipboard(String(username));
    showAlert("✅ Username copied!", "success");
  },

  // ✅ Sirf URL copy karne ke liye
  copyURL(row) {
    const url = row?.URL;

    if (!url) {
      showAlert("❌ URL not found", "error");
      return;
    }

    copyToClipboard(String(url));
    showAlert("✅ URL copied!", "success");
  }
};
