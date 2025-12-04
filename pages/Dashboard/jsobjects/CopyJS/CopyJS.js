export default {
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
  }
}
