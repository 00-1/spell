// arg1 could be child or props.
// It's a child if it's:
// - A component
// - An array
// - A string
// Otherwise it's props
const childOrProps = ({arg1 = {}, className, arg3}) => {
    const [ props, children ] = 
        arg1.$$typeof === Symbol.for('react.element')
        || Array.isArray(arg1)
        || typeof arg1 === 'string'
            ? [arg3, arg1]
            : [arg1, arg3]
    return {
        props: {
            children,
            className,
            ...props
        },
        key: props && props.key || 0
    }
}

// Create a react element
export default type => (arg1, className, arg3) => ({
    $$typeof: Symbol.for('react.element'),
    type,
    ref: null,
    ...childOrProps({arg1, className, arg3})
})