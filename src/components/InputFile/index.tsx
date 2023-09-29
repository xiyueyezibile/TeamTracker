import { Button } from '@chakra-ui/react';
import { useRef } from 'react';
import Excel from 'exceljs';
interface Props {
  updateData: Function;
}
export default function InputFile(props: Props) {
  const { updateData } = props;
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Button
      onClick={() => {
        inputRef.current?.click();
      }}
      colorScheme="teal"
      size="lg"
    >
      导入
      <input
        onChange={async (e) => {
          const file = e.target.files?.length ? e.target.files[0] : null;
          const workbook = new Excel.Workbook();
          await workbook.xlsx.load(file as any);
          const worksheet: Excel.Worksheet = workbook.worksheets[0];
          console.log(workbook);

          const sheetData: string[] = [];
          (worksheet as Excel.Worksheet).eachRow({ includeEmpty: true }, (row, rowNumber) => {
            // console.log('Row ' + rowNumber + ' = ' + JSON.stringify(row.values));
            // 使用row.values获取每一行的值时总会多出一条空数据(第一条)，这里我把它删除
            const row_values = (row.values as any).slice(1);
            sheetData.push(row_values);
          });
          updateData(sheetData);
        }}
        ref={inputRef}
        style={{ display: 'none' }}
        type="file"
        name=""
        id=""
      />
    </Button>
  );
}
