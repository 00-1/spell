export default (
    {input},
    {useAdoptStyles
}) => function Input (props) {
    const {ready} = useAdoptStyles(['Input'])

    return ready && input({...{
        ...props, 
        className: "Input",
        autoFocus: true
    }});
}