const branch = (test, ComponentOnPass, ComponentOnFail) => props => test
    ? <ComponentOnPass {...props} />
    : ComponentOnFail
        ? <ComponentOnFail {...props} />
        : null