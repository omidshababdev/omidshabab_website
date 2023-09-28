import { Button } from "@/components/ui/button";
import { Locale } from "@/config/i18n-config";
import { getTranslations } from "@/get-translations";
import { Metadata, ResolvingMetadata } from "next";

// Dynamic Metadata based on locales
export async function generateMetadata({
     params: { locale }
}: {
     params: { locale: Locale }
     parent?: ResolvingMetadata
}): Promise<Metadata> {

     const translations = await getTranslations(locale)

     return {
          title: translations.general.privacy,
          description: translations.general.name,
     }
}

export default function SoftwareEngineeringRoadmapEbook() {
     return (
          <div className="flex flex-col w-full h-screen justify-center items-center text-center px-5 sm:px-0">
               <div className="max-w-[550px] space-y-5">
                    <h1 className="text-[30px] text-center leading-[60px]">
                         ایبوک رایگان<br />نقشه راه مهندس نرم افزار شدن!
                    </h1>
                    <p className="text-[20px] leading-[40px]">
                         لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                    </p>
                    <Button variant="outline" className="text-[20px] rounded-xl" size="lg">
                         دانلود رایگان ایبوک
                    </Button>
               </div>
          </div>
     )
}