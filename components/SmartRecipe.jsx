
import ReactMarkdown from "react-markdown"
export default function SmartRecepie(props) {
    return (
    <section className="suggested-recipe-container" aria-live="polite">
        <h2>Smart Recipe AI Recommends:</h2>
           <ReactMarkdown>{props.recipe}</ReactMarkdown>      
    </section>
    )
}