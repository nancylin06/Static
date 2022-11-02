import React from "react";

export default function Section(props) {
    return (
        <div className="container md:w-[42rem] mx-auto flex flex-col md:flex-row p-5 md:space-x-4 space-y-4 md:space-y-0 bg-slate-100 items-center border-b-2">
            <div className="w-1/3">
                <img src={`../public/images/${props.image}`} className="md:w-44 md:h-60 rounded-lg" alt="" />
            </div>
            <div className="space-y-3 flex flex-col w-2/3">
                <p className="font-semibold tracking-widest text-center md:text-start">
                    <i className="fa-solid fa-location-dot text-red-600"></i> {props.loca}</p>
                <a href="">
                    <h1 className="text-2xl font-bold pb-3 text-center md:text-start hover:underline hover:underline-offset-4">{props.center}</h1>
                </a>
                <p className="font-semibold text-sm">{props.day}</p>
                <p>{props.text}</p>
            </div>
        </div>
    )
}