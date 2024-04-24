export default (
    {p},
    {useAdoptStyles}
) => function Paragraph (props) {
    const {ready} = useAdoptStyles(['Paragraph'])

    return ready && p({...{
        ...props, 
        className: "Paragraph" 
    }})
}