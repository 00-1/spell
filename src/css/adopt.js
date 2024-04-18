// keep track of adopted styles
let adopted = []

// adopt styles listed in `styles` array
export default async styles => Promise.all(
    styles.map(async style => {
        // check if the style was already adopted
        if (adopted.includes(style)) return false

        // wait for import
        const sheet = await import(`./${style}.css`, {
            with: { type: 'css' }
        });

        // adopt the sheet
        document.adoptedStyleSheets = [
            ...document.adoptedStyleSheets,
            sheet.default
        ];
        
        // mark style as adopted
        adopted = [...adopted, style];
    })
);