function phones(data) {
  const headers = data[0];
  const rows    = data.slice(1);

  const getPhoneIndex = function(headers) {
    for (let i = 0; i < headers.length; i++) {
      if (headers[i].toLowerCase().includes("phone")) {
        return i;
      }
    }

    process.exit(console.log("Error: No phone column found in CSV."));
  };

  const getPhones = function(rows, phoneIndex) {
    const phones = [];

    for (let i = 0; i < rows.length; i++) {
      phone = rows[i][phoneIndex].replace(/\D/g, '');

      if (phone.length >= 7 && phone.length < 11) {
        phones.push(phone);
      }
    }

    return phones;
  };

  return getPhones(rows, getPhoneIndex(headers));
}

module.exports = phones;
