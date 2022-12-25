import React, { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
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
    <button className='DownloadButton' onClick={() => downloadPDF()}> Download</button>
           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        {
          pageNum <= 1
            ? <button className='WhitePaperPrevDisabled' disabled> Prev</button>
            : <button className='WhitePaperButtonPrev' onClick={() => goToPrevPage()}> Prev</button>
        }
        <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center'}}>
        <Document
        file='/whitepaper.pdf'
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={console.error}
        >
            <Page pageNumber={pageNum} size='A4'/>
        </Document>
        </div>
        {
            pageNum >= numOfPages
            ?
            <button className='WhitePaperNextDisabled' disabled> Next</button>
            :  
            <button className='WhitePaperButtonNext' onClick={() => goToNextPage()}> Next</button>
        }
        </div>    
    </div>
  )
}

export default Whitepaper
