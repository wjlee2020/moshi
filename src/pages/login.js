export default function Login() {

    return (
        <div className="container mx-auto flex max-w-screen-md items-center h-screen">
            <div className="flex w-3/5">
                <img className="w-4/6 h-3/4 rounded-lg"
                    src=" https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt='phone' />
            </div>
            <div className="flex flex-col w-2/5">
                <h1 className="flex justify-center w-full">
                    Moshi?
                </h1>
                <div>
                    <form>
                        <input />
                        <input />
                        <button>Log In</button>
                    </form>
                </div>
                <div>
                    <p>Already have an Account? Sign Up</p>
                </div>
            </div>
        </div>
    )
}