export default (
    {button}, 
    {useAdoptStyles}
) => function Button (props) {
    const {ready} = useAdoptStyles(['Button'])

    return ready && button({...{
        ...props, 
        className: "Button"
    }});
};

