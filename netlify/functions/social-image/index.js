const playwright = require("playwright-aws-lambda");

const OFFSET_Y = 0;
const OFFSET_X = 0;
const IMAGE_WIDTH = 1200;
const IMAGE_HEIGHT = 628;

const allowUrl = (url = "") => {
  const allowedPrefixes = [process.env.DEPLOY_URL, "https://usepow.app"];
  return allowedPrefixes.some((prefix) => url.startsWith(prefix));
};

exports.handler = async (event) => {
  let {
    url,
    offsetY = OFFSET_Y,
    offsetX = OFFSET_X,
    imageWidth = IMAGE_WIDTH,
    imageHeight = IMAGE_HEIGHT,
  } = event.queryStringParameters || {};
  offsetY = parseFloat(offsetY);
  offsetX = parseFloat(offsetX);
  imageWidth = parseFloat(imageWidth);
  imageHeight = parseFloat(imageHeight);

  const pageHeight = imageHeight + offsetY;
  const pageWidth = imageWidth + offsetX;

  if (!allowUrl(url)) {
    return {
      statusCode: 403,
    };
  } else {
    const browser = await playwright.launchChromium();
    const page = await browser.newPage({
      viewport: { width: pageWidth, height: pageHeight },
      deviceScaleFactor: 2,
    });
    await page.goto(url);
    const hasImage = await page.isVisible(".gatsby-resp-image-image");
    if (hasImage) {
      await page.waitForLoadState("networkidle");
    }
    const buffer = await page.screenshot({
      clip: { x: offsetX, y: offsetY, width: imageWidth, height: imageHeight },
    });
    await browser.close();
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "image/png",
      },
      body: buffer.toString("base64"),
      isBase64Encoded: true,
    };
  }
};
