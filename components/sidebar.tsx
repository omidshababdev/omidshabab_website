import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Sidebar = () => {
     return (
          <div className="hidden sm:block w-[380px]">
               <div className="top-10 sticky space-y-[20px]">
                    <div className=" bg-black bg-opacity-[3%] dark:bg-white dark:bg-opacity-[3%] w-full px-7 py-6 space-y-5">
                         <div className="space-y-2">
                              <p className="text-[20px] font-bold text-slate-700 dark:text-slate-200">
                                   خبرنامه آموزشی
                              </p>
                              <p className="text-[15px] text-[#3e3e3e] dark:text-[#cbcbcb] leading-[28px]">
                                   با عضویت در این خبرنامه از جدیدترین پست ها با خبر میشی و هیچ چیزی رو از دست نمیدی!
                              </p>
                         </div>
                         <div className="space-y-2">
                              <Input className="bg-transparent rounded-none dark:border-1 py-6 dark:border-white dark:border-opacity-5 focus:border-2 focus:border-opacity-10" placeholder="ایمیل مبارکت رو وارد کن ..." />
                              <Button className="w-full rounded-none font-bold" variant="outline" size="lg">
                                   می خوام عضو بشم
                              </Button>
                              <p className="text-[12px] text-[#3e3e3e] dark:text-[#cbcbcb]">
                                   قول میدم اذیتت نکنم!
                              </p>
                         </div>
                    </div>
                    <div className="bg-black bg-opacity-[3%] dark:bg-white dark:bg-opacity-[3%] w-full px-7 py-6 space-y-5">
                         <div className="space-y-5">
                              <p className="text-[25px] font-bold text-slate-800 dark:text-slate-200 leading-[50px]">
                                   تمرکز یعنی نه گفتن به صد ها ایده خوب دیگری که وجود دارند. شما باید با دقت انتخاب کنید.
                              </p>
                              <p className="text-lg">
                                   استیو جابز
                              </p>
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default Sidebar;