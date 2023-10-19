const XLSX = require("xlsx");

const controller = {
  showJsonData: (req, res) => {
    const excel = XLSX.readFile(
    '././stock.xlsx'
    );
    var nombreHoja = excel.SheetNames; // regresa un array
    let datos = XLSX.utils.sheet_to_json(excel.Sheets[nombreHoja[0]]);
    res.send(datos);
  },
};
module.exports = controller;
