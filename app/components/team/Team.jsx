import Image from "next/image"
import stairs from "../../../public/assets/stairs.svg"
import { open_Sans } from "@/app/fonts"
import Carrousel from "./Carrousel"

const Team = () => {
    return (
        <section >
            <div className="teamPreImage">
                <Image
                    src={stairs}
                    height={300}
                    width={300}
                    className="stairs"
                ></Image>
                <div className="teamSubtitle_Container">
                    <h2 id="team" className={`${open_Sans.className}`}>TEAM</h2>
                </div>
            </div>
            <div className="teamBackground">
                <Carrousel />
            </div>
        </section>
    )
}

export default Team
