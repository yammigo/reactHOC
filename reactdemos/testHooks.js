import react from "react"
import reactDom, { render } from "react-dom"

for (const key in react) {
    if (react.hasOwnProperty(key)) {
        console.log(key+":"+Object.prototype.toString.call(react[key]).toLocaleLowerCase().replace(/(\[object)|\]|\s/gi,""));    
    }
}

function App(){
    return (
        <div>测试</div>
    )
}




