#!/usr/bin/env node

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../public/images');
const outputDir = path.join(__dirname, '../public/images/optimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function optimizeImage(inputPath, filename) {
  const outputPathWebP = path.join(outputDir, filename.replace(/\.(png|jpg|jpeg)$/i, '.webp'));
  const outputPathAVIF = path.join(outputDir, filename.replace(/\.(png|jpg|jpeg)$/i, '.avif'));

  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    console.log(`\nProcessing: ${filename}`);
    console.log(`Original size: ${(fs.statSync(inputPath).size / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Dimensions: ${metadata.width}x${metadata.height}`);

    // Convert to WebP with high quality
    await image
      .webp({ quality: 85, effort: 6 })
      .toFile(outputPathWebP);

    const webpSize = fs.statSync(outputPathWebP).size;
    console.log(`WebP size: ${(webpSize / 1024 / 1024).toFixed(2)} MB`);

    // Convert to AVIF with high quality (even better compression)
    await sharp(inputPath)
      .avif({ quality: 80, effort: 9 })
      .toFile(outputPathAVIF);

    const avifSize = fs.statSync(outputPathAVIF).size;
    console.log(`AVIF size: ${(avifSize / 1024 / 1024).toFixed(2)} MB`);

    const originalSize = fs.statSync(inputPath).size;
    const savings = ((1 - webpSize / originalSize) * 100).toFixed(1);
    console.log(`✓ Savings: ${savings}% (using WebP)`);

  } catch (error) {
    console.error(`Error processing ${filename}:`, error.message);
  }
}

async function optimizeAllImages() {
  console.log('🚀 Starting image optimization...\n');
  console.log(`Input directory: ${inputDir}`);
  console.log(`Output directory: ${outputDir}\n`);

  const files = fs.readdirSync(inputDir);
  const imageFiles = files.filter(file =>
    /\.(png|jpg|jpeg)$/i.test(file) && fs.statSync(path.join(inputDir, file)).isFile()
  );

  console.log(`Found ${imageFiles.length} images to optimize\n`);

  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;

  for (const file of imageFiles) {
    const inputPath = path.join(inputDir, file);
    totalOriginalSize += fs.statSync(inputPath).size;
    await optimizeImage(inputPath, file);
  }

  // Calculate total savings
  const optimizedFiles = fs.readdirSync(outputDir).filter(f => f.endsWith('.webp'));
  optimizedFiles.forEach(file => {
    totalOptimizedSize += fs.statSync(path.join(outputDir, file)).size;
  });

  console.log('\n' + '='.repeat(60));
  console.log('📊 OPTIMIZATION COMPLETE!');
  console.log('='.repeat(60));
  console.log(`Total original size: ${(totalOriginalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total optimized size: ${(totalOptimizedSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total savings: ${((1 - totalOptimizedSize / totalOriginalSize) * 100).toFixed(1)}%`);
  console.log('\n✨ Optimized images saved to: public/images/optimized/');
}

optimizeAllImages().catch(console.error);
