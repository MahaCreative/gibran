import { Link, Head, usePage, useForm, router } from "@inertiajs/react";
import clsx from "clsx";
import { useEffect, useState } from "react";
import RefreshIcon from "@mui/icons-material/Refresh";
export default function Welcome(props) {
    const { data: item } = usePage().props;

    const Lampu1Handler = () => {
        router.post("update-lampu1", {
            lampu: item.status_lampu1 == "true" ? "false" : "true",
        });
    };
    const Lampu2Handler = () => {
        router.post("update-lampu2", {
            lampu: item.status_lampu2 == "true" ? "false" : "true",
        });
    };
    const kipasHandler = () => {
        router.post("update-kipas", {
            kipas: item.status_kipas == "true" ? "false" : "true",
        });
    };
    console.log(item);
    return (
        <>
            <Head title="Welcome" />
            <div className="relative text-[8pt] py-6 min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white px-8">
                <div className="flex w-full py-2 px-2 gap-4">
                    <div
                        onClick={() => Lampu1Handler()}
                        className={clsx(
                            item.status_lampu1 == "true"
                                ? "bg-green-500"
                                : "bg-red-500",
                            "relative rounded-lg text-white w-full  items-center text-center"
                        )}
                    >
                        <div>LAMPU 1</div>
                        <div>
                            {item.status_lampu1 == "true"
                                ? "Matikan"
                                : "Nyalakan"}
                        </div>
                        <div className=" h-full flex items-center justify-center bg-red-green-500 absolute right-5 top-0 ">
                            <div
                                className={clsx(
                                    item.status_lampu1 == "true"
                                        ? "bg-red-500"
                                        : "bg-green-500",
                                    "w-3 h-3  rounded-full"
                                )}
                            ></div>
                        </div>
                    </div>
                    <div
                        onClick={() => Lampu2Handler()}
                        className={clsx(
                            item.status_lampu2 == "true"
                                ? "bg-green-500"
                                : "bg-red-500",
                            "relative rounded-lg text-white w-full items-center text-center"
                        )}
                    >
                        <div>LAMPU 2</div>
                        <div>
                            {item.status_lampu2 == "true"
                                ? "Matikan"
                                : "Nyalakan"}
                        </div>
                        <div className=" h-full flex items-center justify-center bg-red-green-500 absolute right-5 top-0 ">
                            <div
                                className={clsx(
                                    item.status_lampu2 == "true"
                                        ? "bg-red-500"
                                        : "bg-green-500",
                                    "w-3 h-3  rounded-full"
                                )}
                            ></div>
                        </div>
                    </div>
                </div>

                {/*  */}
                <div className="flex w-full py-2 px-2 gap-4">
                    <div
                        onClick={kipasHandler}
                        className={clsx(
                            item.status_kipas == "true"
                                ? "bg-green-500"
                                : "bg-red-500",
                            "relative rounded-lg text-white w-full  items-center text-center"
                        )}
                    >
                        <div>KIPAS</div>
                        <div>
                            {item.status_kipas == "true"
                                ? "Matikan"
                                : "Nyalakan"}
                        </div>
                        <div className=" h-full flex items-center justify-center bg-red-green-500 absolute right-5 top-0 ">
                            <div
                                className={clsx(
                                    item.status_kipas == "true"
                                        ? "bg-red-500"
                                        : "bg-green-500",
                                    "w-3 h-3  rounded-full"
                                )}
                            ></div>
                        </div>
                    </div>
                </div>
                <div className="bg-white w-[100%] h-[400px] md:w-1/2 rounded-lg py-2.5 px-4 flex-col">
                    <div className="flex justify-between px-2">
                        <p className="font-bold">Temperature</p>
                        <p></p>
                    </div>
                    <div className="flex items-center justify-center flex-col h-36 bg-gray-50 shadow-emerald-400/30 shadow-sm">
                        <p className="text-xl md:text-5xl lg:text-7xl font-bold font-electro text-5xl">
                            {item.temperature} <span>&#8451;</span>
                        </p>
                        <p className="text-xl">Temperature Inkubator</p>
                    </div>
                    <div className="flex items-center justify-center gap-3 px-6 my-3">
                        <div className="px-10">
                            <img
                                src="cool.png"
                                className="w-40 md:w-40 lg:w-52"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-8 right-8 w-10 h-10 bg-green-400 rounded-lg z-[9999] text-center flex items-center justify-center active:bg-green-700">
                <button className="text-white">
                    <RefreshIcon color="inherit" />
                </button>
            </div>

            <style>{`
                .bg-dots-darker {
                    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
                }
                @media (prefers-color-scheme: dark) {
                    .dark\\:bg-dots-lighter {
                        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
                    }
                }
            `}</style>
        </>
    );
}
