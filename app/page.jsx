import { FiDownload } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full" >
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/*text */}
          <div className="text-center xl:text-left">
            <span className="text-xl">Software Engineer</span>
            <h1 className="h1">
              Hello I'm <br /> <span className="text-accent">Dominique Pearyer</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Perferendis quae iusto amet obcaecati voluptas eius magnam 
              </p>
              {/*button and socials */}
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <Button variant="outline" size="lg" className="uppercase items-center gap-2">
                  <span>Download Resume</span>
                  <FiDownload className="text-xl" />
                </Button>
                  <div className="mb-8 xl:mb-0">
                    <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
                  </div>
              </div>
          </div>
          {/*photo */}
          <div>
            <Photo />
            </div>
        </div>
      </div>
    </section>
  )
}

export default Home

