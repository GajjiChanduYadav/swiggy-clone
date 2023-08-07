const Contact = ()=>{
    return (
        <div className="flex flex-col items-center">
            <h1 className="font-bold text-3xl p-4 m-4">Contact us</h1>
            <form className="flex flex-col">
                <input className="border border-black p-2 m-2 " type="text" placeholder="Enter Name"/>
                <input className="border border-black p-2 m-2" type="text" placeholder="Enter Description"/>
                <button className="border border-black p-2 m-2 bg-green-100 rounded-lg hover:bg-green-400">
                    Submit</button>
            </form>
        </div>
    );
};

export default Contact;