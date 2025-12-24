// Complex scenario - use async await
const fs = require('fs');
const { browserSync } = require('vibium');

async function main() {
    // 1. Launch a browser
    const vibe = browserSync.launch();

    // 2. Go to a website
    vibe.go('https://example.com');
    console.log('Loaded example.com');

    // 3. Take a screenshot
    const png = vibe.screenshot();
    fs.writeFileSync('screenshot.png', png);
    console.log('Saved screenshot.png');

    // 4. Scrape the Main Heading
    const heading = vibe.find('h1');
    console.log('--- Scraping Result ---');
    console.log('Main Title:', heading.text());

    // 5. Scrape the first Paragraph
    const description = vibe.find('p');
    console.log('Description:', description.text());

    // 6. Find and click the link
    const link = vibe.find('a');
    console.log('Found link:', link.text());
    link.click();
    console.log('Clicked!');

    console.log('Done!');
    
    // 7. Close the browser (Optional but recommended)
    vibe.close(); 
}

// CALL THE FUNCTION HERE (Outside the curly braces)
main();