import React from 'react';
import { pdfjs } from 'react-pdf';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const Whitepaper = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <div>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.js" >
        <div>
            <Viewer
                fileUrl='https://raw.githubusercontent.com/nnoromiv/hestlabs/dd5a04fdb2788e1b6126342cd72821f25b0257d8/public/whitepaper.pdf'
                plugins={[
                    defaultLayoutPluginInstance,
                ]}
                viewMode
            />
        </div>
        </Worker>
    </div>
  )
}

export default Whitepaper
