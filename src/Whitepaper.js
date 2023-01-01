import React, { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import DownloadIcon from '@mui/icons-material/Download';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import './whitepaper.css'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const Whitepaper = () => {
  const [numOfPages, setNumOfPages] = useState(null)
  const [pageNum, setPageNum] = useState(1)
  
 function downloadPDF(){
   var FileSaver = require('file-saver')
  FileSaver.saveAs('https://raw.githubusercontent.com/nnoromiv/hestlabs/dd5a04fdb2788e1b6126342cd72821f25b0257d8/public/whitepaper.pdf', 'hest-whitepaper.pdf')
 }

  function onDocumentLoadSuccess({ numOfPages }) {
    setNumOfPages(numOfPages);
  }
  function goToPrevPage(){
    setPageNum(pageNum - 1)
  }
  function goToNextPage(){
    setPageNum(pageNum + 1)
  }
  return (
    <div>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'fixed', width: '100vw', zIndex: 1, margin: '10px 20px 30px' }}>
    {
          pageNum <= 1
            ? ''
            : <ArrowBackIosIcon className='WhitePaperButtonPrev' onClick={() => goToPrevPage()} />
    }
    <DownloadIcon  className='DownloadButton' onClick={() => downloadPDF()} />
    {
            pageNum >= numOfPages
            ? ''
            : <ArrowForwardIosIcon className='WhitePaperButtonNext' onClick={() => goToNextPage()}/>
    }
    </div>
        <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center',}}>
        <Document
        file='https://raw.githubusercontent.com/nnoromiv/hestlabs/dd5a04fdb2788e1b6126342cd72821f25b0257d8/public/whitepaper.pdf'
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={console.error}
        >
            <Page pageNumber={pageNum} size='A4'/>
        </Document>
        </div>   
    </div>
  )
}

export default Whitepaper
