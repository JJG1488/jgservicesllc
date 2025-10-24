import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const inputDir = join(__dirname, '../public/images');
const outputDir = join(__dirname, '../public/images/optimized');

console.log('🚀 Starting quick image optimization...\n');

try {
  const files = await readdir(inputDir);
  const imageFiles = [];

  for (const file of files) {
    const filePath = join(inputDir, file);
    const stats = await stat(filePath);
    if (stats.isFile() && /\.(png|jpg|jpeg)$/i.test(file)) {
      imageFiles.push(file);
    }
  }

  console.log(`Found ${imageFiles.length} images\n`);

  for (const file of imageFiles) {
    const inputPath = join(inputDir, file);
    const outputPath = join(outputDir, file.replace(/\.(png|jpg|jpeg)$/i, '.webp'));

    console.log(`Processing: ${file}...`);

    await sharp(inputPath)
      .webp({ quality: 85 })
      .toFile(outputPath);

    console.log(`✓ Created: ${file.replace(/\.(png|jpg|jpeg)$/i, '.webp')}`);
  }

  console.log('\n✨ Optimization complete!');
} catch (error) {
  console.error('Error:', error);
}
