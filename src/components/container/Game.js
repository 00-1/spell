// Screen shown while playing.
export default (
    {div},
    {useAdoptStyles}
) => function Game ({
    children
}) {
    const {ready} = useAdoptStyles(['Game'])
    return ready && div(children, "Game")
};
