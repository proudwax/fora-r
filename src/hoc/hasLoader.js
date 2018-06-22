const hasLoader = WrappedComponent => {
    const HasLoader = props => branch(
        props.loading,
        hasProps({ message: props.loadingMessage })(Loading),
        WrappedComponent
    )(props)

    return HasLoader
}