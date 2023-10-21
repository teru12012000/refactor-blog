'use client'
import { useEffect } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { irBlack } from "react-syntax-highlighter/dist/esm/styles/hljs";
import hljs from 'highlight.js/lib/core';
interface props{
    language:string;
    code:string;
}
const CodeBlock = ({
    language,
    code,
}:props) => {
    useEffect(()=>{
        hljs.highlightAll();
    },[])
    return (
        <pre style={{width:"80%"}}>
            <SyntaxHighlighter language={language} style={irBlack}>
                {code}
            </SyntaxHighlighter>
        </pre>
        
    );
}

export default CodeBlock;