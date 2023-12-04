import Image from "next/image";

const SingleHotel = () => {
    
    return (
        <>
            <div className="w-7/12 m-5 mx-auto my-10">
                <Image src={"https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} width={1000} height={800} className="h-large-box mb-5" alt="" />
                <div>
                    <h3 className="font-bold text-3xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3>
                    <p className="text-xl my-5 text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo blanditiis aspernatur iusto, rem officia voluptatem adipisci corporis dolorem, tenetur laborum nobis quas corrupti alias sit omnis quasi saepe perferendis consequuntur!
                        Ad maxime facilis unde quia, sequi quae cumque delectus harum ea eaque quas iusto eveniet corrupti praesentium, animi minus dolorum autem. Illo quisquam voluptatum necessitatibus veniam, labore delectus perspiciatis asperiores.</p>
                    <button className='w-48 text-white h-14 rounded-lg bg-blue-500'>Price: 4500</button>
                    <p className="text-3xl font-bold my-5">Facilities:</p>
                    <ul className="flex justify-between text-xl">
                    <li>Swimmming Pool</li>
                    <li>Dogs</li>
                    <li>garden</li>
                    <li>Loundry</li>
                    <li>Cricket</li>
                    </ul>
                    <button className='w-48 text-white h-14 rounded-lg bg-red-500 my-5'>Book Now</button>
                </div>
                
</div>
        </>
    )
}
export default SingleHotel;