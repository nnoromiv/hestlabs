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
  FileSaver.saveAs('/whitepaper.pdf', 'hest-whitepaper.pdf')
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
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'fixed', width: '100vw', zIndex: 1,}}>
    {
          pageNum <= 1
            ? ''
            : <button className='WhitePaperButtonPrev' onClick={() => goToPrevPage()}><ArrowBackIosIcon /></button>
    }
    <DownloadIcon  className='DownloadButton' onClick={() => downloadPDF()} />
    {
            pageNum >= numOfPages
            ? ''
            : <button className='WhitePaperButtonNext' onClick={() => goToNextPage()}><ArrowForwardIosIcon /></button>
    }
    </div>
        <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center'}}>
        <Document
        file='/whitepaper.pdf'
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
