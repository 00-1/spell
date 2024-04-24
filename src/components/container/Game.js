import { useGame } from "../../hooks/index.js";

// main game component
export default (
    {div, Play, Stop}, 
    {useAdoptStyles}
) => function Game () {
    const {ready} = useAdoptStyles(['Game'])

    const {playing, ...props} = useGame();

    return ready && div(
         playing 
            ? Play(props)
            : Stop(props),
        "Game"     
    )
};