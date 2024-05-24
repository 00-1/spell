// Screen shown while playing.
export default (
    {div},
    {useAdoptStyles}
) => function Playing ({
    children
}) {
    const {ready} = useAdoptStyles(['Playing'])
    return ready && div(
        children.map(fn => fn()), 
        "Playing"
    )
};
