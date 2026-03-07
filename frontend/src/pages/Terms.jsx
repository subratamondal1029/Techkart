const Terms = () => {
return (
    <div className="p-8 max-w-2xl mx-auto leading-relaxed">
        <h1 className="text-3xl font-bold mb-4">Project Usage Notice</h1>
        
        <p className="mb-4">
            This project is publicly available for the purpose of showcasing the work of <a href="https://subratamondal.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Subrata Mondal</a>.
        </p>
        
        <p className="mb-4">
            You are allowed to view the source code and explore the project for educational or reference purposes.
        </p>
        
        <h2 className="text-2xl font-bold mb-3 mt-6">You are NOT allowed to:</h2>
        <ul className="list-disc list-inside mb-4 space-y-2">
            <li>Use this project or its source code for commercial purposes</li>
            <li>Copy, redistribute, or republish the code</li>
            <li>Claim this work as your own</li>
        </ul>
        
        <p className="mb-4">
            Any commercial usage requires explicit written permission from the author.
        </p>
        
        <h3 className="text-xl font-bold mb-2 mt-6">Contact:</h3>
        <a href="mailto:subratamondal@tutanota.com" className="text-blue-600 hover:underline">subratamondal@tutanota.com</a>
    </div>
)
}

export default Terms