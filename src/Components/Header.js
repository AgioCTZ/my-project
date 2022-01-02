
function AppHeader() {
    return (
        <header className="bg-lime-300 ">
            <div className="flex items-center justify-center ">
                <div className=" p-4 grid grid-cols-3  items-center  justify-center gap-2">

                    <div className=" p-3 rounded text-lime-900 text-2xl "><h5>Citrusy</h5></div>
                    <div className="grid grid-cols-4">
                        <div className=" p-3 rounded "><h6>Pomeranče</h6></div>
                        <div className=" p-3 rounded "><h6>Mandarinky</h6></div>
                        <div className=" p-3 rounded "><h6>Citróny</h6></div>
                        <div className=" p-3 rounded "><h6>Grepy</h6></div>

                    </div>

                    <button className="mt-2 ml-40 w-40 rounded-full px-2 py-4 bg-lime-600 shadow-lg shadow-emerald-800">Get Started</button>

                </div>
            </div>
        </header>
    )

}
export default AppHeader;