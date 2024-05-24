// Screen shown while stopped.
export default (
    {div},
    {useAdoptStyles}
) => function Stopped ({
    children
}) {
    const {ready} = useAdoptStyles(['Stopped'])
    return ready && div(
        children.map(fn => fn()), 
        "Stopped"
    )
};
