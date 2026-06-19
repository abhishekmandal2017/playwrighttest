import { test, expect } from '@playwright/test';
import ExcelJs from 'exceljs';

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

test('Rahul Shetty Practice app Registration', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/upload-download-test/index.html');
    const [download] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('button', { name: 'Download' }).click(),
    ]);
    //const filepath = await download.path();
    const filepath = `./downloads/${download.suggestedFilename()}`;
    await download.saveAs(filepath);
    await ExcelTest('Apple', 'Strawberry', filepath);
    await page.locator('#fileinput').setInputFiles(filepath);
});
