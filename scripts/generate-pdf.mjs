#!/usr/bin/env node
import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join, resolve } from 'path';
import { existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function generatePDF(inputPath, outputPath) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Convert to absolute path and file URL
  const absolutePath = resolve(inputPath);
  const fileUrl = `file://${absolutePath}`;

  console.log(`Loading: ${fileUrl}`);
  await page.goto(fileUrl, { waitUntil: 'networkidle0' });

  // Generate PDF with proper settings
  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    margin: {
      top: '10mm',
      right: '10mm',
      bottom: '10mm',
      left: '10mm'
    },
    displayHeaderFooter: false,
    preferCSSPageSize: true,
  });

  console.log(`PDF generated: ${outputPath}`);
  await browser.close();
}

// Get input/output from command line args or use defaults
const args = process.argv.slice(2);
const inputFile = args[0] || join(__dirname, '../docs/exports/gamification-for-illustrator.html');
const outputFile = args[1] || inputFile.replace('.html', '.pdf');

if (!existsSync(inputFile)) {
  console.error(`Error: Input file not found: ${inputFile}`);
  process.exit(1);
}

generatePDF(inputFile, outputFile).catch(console.error);
