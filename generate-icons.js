import sharp from 'sharp';
import { readFileSync } from 'fs';

const svgBuffer = readFileSync('./logo.svg');

async function generateIcons() {
  try {
    // Generate favicon-16x16.png
    await sharp(svgBuffer)
      .resize(16, 16)
      .png()
      .toFile('./favicon-16x16.png');
    console.log('✓ Generated favicon-16x16.png');

    // Generate favicon-32x32.png
    await sharp(svgBuffer)
      .resize(32, 32)
      .png()
      .toFile('./favicon-32x32.png');
    console.log('✓ Generated favicon-32x32.png');

    // Generate apple-touch-icon.png (180x180)
    await sharp(svgBuffer)
      .resize(180, 180)
      .png()
      .toFile('./apple-touch-icon.png');
    console.log('✓ Generated apple-touch-icon.png');

    // Generate og-image.jpg (1200x630 for Open Graph)
    await sharp(svgBuffer)
      .resize(1200, 630, {
        fit: 'contain',
        background: { r: 10, g: 14, b: 39, alpha: 1 }
      })
      .jpeg({ quality: 90 })
      .toFile('./og-image.jpg');
    console.log('✓ Generated og-image.jpg');

    // Generate twitter-image.jpg (1200x600 for Twitter)
    await sharp(svgBuffer)
      .resize(1200, 600, {
        fit: 'contain',
        background: { r: 10, g: 14, b: 39, alpha: 1 }
      })
      .jpeg({ quality: 90 })
      .toFile('./twitter-image.jpg');
    console.log('✓ Generated twitter-image.jpg');

    console.log('\n✓ All icons generated successfully!');
  } catch (error) {
    console.error('Error generating icons:', error);
    process.exit(1);
  }
}

generateIcons();
