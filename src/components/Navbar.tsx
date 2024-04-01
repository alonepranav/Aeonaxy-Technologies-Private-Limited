export default function Navbar() {
    return (
        <div className="font-bold flex justify-between items-center w-screen px-20 pt-4 text-lg">
            <img src="/logo.jpg" alt=""  className="h-16 w-24"/>

            <div className="flex gap-10 items-center">
                <a href="#">Individuals</a>
                <a href="#">Teams</a>
                <a href="#">Enterprise</a>
                <a href="#">Product</a>
                <a href="#">Pricing</a>
                <a href="#">Resources</a>
            </div>

            <div className="flex gap-8 items-center">
                <a href="#">Log In </a>
                <button className="bg-blue-600 text-white font-semibold rounded-full px-5 py-2.5">Get Started</button>
            </div>

        </div>
    )
}
