
const Game = () => <div className="Game">
    {state==='play' && <>
        <p>[clue #{clue+1}]: {hide(word, clues[clue])}</p>
        <form onSubmit={attempt}>
            <Input
                value={guess}
                onChange={({target: { value }}) => setGuess(value)}
            />
            <Button type="submit">try</Button>
            <Button onClick={fail}>next clue</Button>
        </form>
    </>}

    {state==='stop' && <>
        {result && <p>
            it was "{word}".<br />
            you {result}, with {clue} extra clue(s).
        </p>} 
        <Button onClick={start}>play{result && ' again?'}</Button> 
    </>}
</div>

