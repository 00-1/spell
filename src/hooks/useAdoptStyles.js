// Keep track of adopted styles
let adopted = []

export default ({useEffect, useState}) => function useAdoptStyles (styles) {

    const [ready, setReady] = useState(false);

    useEffect(() => {
        const setStyles = async () => {
            // Adopt styles listed in `styles` array.
            Promise.all(
                styles.map(async style => {
                    // Check if the style was already adopted.
                    if (adopted.includes(style)) return setReady(true)

                    // Wait for import.
                    const sheet = await import(
                        `../css/${style}.css`, {
                            with: { type: 'css' }
                        }
                    );

                    // Adopt the sheet.
                    document.adoptedStyleSheets = [
                        ...document.adoptedStyleSheets,
                        sheet.default
                    ];
                    
                    // Mark style as adopted.
                    adopted = [...adopted, style];

                    // Mark component ready to load.
                    setReady(true)
                })
            );
        };

        setStyles();
    }, []);

    return {ready}
}