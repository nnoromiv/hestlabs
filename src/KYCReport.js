import React from 'react';
import { pdfjs } from 'react-pdf';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const KYCReport = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <div>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.js" >
        <div>
            <Viewer
                fileUrl='https://raw.githubusercontent.com/nnoromiv/hestlabs/ef32c781d888524a90cc4bc04d3d1338f26512e5/public/HestLabsKYCreportBySnipeFinance.pdf'
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

export default KYCReport
