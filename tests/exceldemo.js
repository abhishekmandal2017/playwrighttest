const ExcelJs = require('exceljs');

async function ExcelTest(searchText, replaceText, filepath) {
    const wb = new ExcelJs.Workbook();
    await wb.xlsx.readFile(filepath);
    const ws = wb.getWorksheet('Sheet1');
    const output = await WriteExcel(ws, searchText);
    const cell = ws.getCell(output.rowindex, output.colindex);
    cell.value = replaceText;
    await wb.xlsx.writeFile(filepath);
    console.log(ws.getCell(output.rowindex, output.colindex).value);
}

async function WriteExcel(ws, searchText) {
    let output = { rowindex: -1, colindex: -1 };
    ws.eachRow((row, rowindex) => {
        row.eachCell((cell, cellIndex) => {
            if (cell.value === searchText) {
                console.log(rowindex, cellIndex);
                output.rowindex = rowindex;
                output.colindex = cellIndex;

            }
            //console.log(cell.value);
        });
    });
    return output;
}
ExcelTest("Mango", "Strawberry", 'C:/Users/abhishek.mandal/Downloads/download.xlsx');
