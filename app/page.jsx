import { Buttonimrt } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { Button } from "@/components/ui/button";

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
                <div>socials</div>
              </div>
          </div>
          {/*text */}
          <div>photo</div>
        </div>
      </div>
    </section>
  )
}

export default Home

