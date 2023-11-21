console.log('Hello, world!')

function some() {
    console.log('This is the first step')
    return function next() {
        console.log('This is the second one')
    }
    
}

const closure = some();

closure();