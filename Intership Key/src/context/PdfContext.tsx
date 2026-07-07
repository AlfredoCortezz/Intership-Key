'use client';
import { createContext, useContext } from 'react';

export const PdfContext = createContext<{ handleDownloadPdf: () => void }>({ handleDownloadPdf: () => {} });

export const usePdf = () => useContext(PdfContext);
