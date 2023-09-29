import { Button } from '@chakra-ui/react';
import * as XLSX from 'xlsx';
interface Props {
  data: string[];
}
export default function ExportFile(props: Props) {
  const { data } = props;
  return (
    <Button
      onClick={() => {
        const workbook = XLSX.utils.book_new();
        const worksheet = XLSX.utils.json_to_sheet(data);
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
        XLSX.writeFile(workbook, 'output.xlsx');
      }}
      colorScheme="teal"
      size="lg"
    >
      导出
    </Button>
  );
}
