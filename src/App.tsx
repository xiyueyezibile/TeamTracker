// @ts-ignore .d.ts error
import { HotTable } from '@handsontable/react';
// @ts-ignore .d.ts error
import { registerAllModules } from 'handsontable/registry';
import 'handsontable/dist/handsontable.full.min.css';
import { useState } from 'react';
import { ExportFile, Header, InputFile } from './components';
import { Box } from '@chakra-ui/react';
import './App.less';

registerAllModules();
function App() {
  const [fileData, setFileData] = useState<string[] | null>(null);
  console.log(fileData);

  return (
    <>
      <Header>
        <InputFile
          updateData={(data: any) => {
            setFileData(data);
          }}
        />
        <ExportFile data={fileData as string[]}></ExportFile>
      </Header>
      <Box mt={'48px'}>
        <HotTable
          width={'100vw'}
          // width={window.innerWidth}
          // height={window.innerHeight}
          // set `HotTable`'s props here
          data={fileData}
          rowHeaders={true}
          colHeaders={true}
          height="auto"
          licenseKey="non-commercial-and-evaluation" // for non-commercial use only
        />
      </Box>
    </>
  );
}

export default App;
