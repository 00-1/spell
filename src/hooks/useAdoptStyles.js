// keep track of adopted styles
let adopted = []

export default ({useEffect, useState}) => function useAdoptStyles (styles) {

    const [ready, setReady] = useState(false);

    useEffect(() => {
        const setStyles = async () => {
            // adopt styles listed in `styles` array
            Promise.all(
                styles.map(async style => {
                    // check if the style was already adopted
                    if (adopted.includes(style)) return setReady(true)

                    // wait for import
                    const sheet = await import(
                        `../css/${style}.css`, {
                            with: { type: 'css' }
                        }
                    );

                    // adopt the sheet
                    document.adoptedStyleSheets = [
                        ...document.adoptedStyleSheets,
                        sheet.default
                    ];
                    
                    // mark style as adopted
                    adopted = [...adopted, style];

                    // mark component ready to load
                    setReady(true)
                })
            );
        };

        // Call the async function when the component is loaded
        setStyles();
    }, []); // The empty dependency array means this effect runs only once, when the component is mounted


    return {
        ready
    }

}