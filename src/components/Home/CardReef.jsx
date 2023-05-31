import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  CardFooter,
  Button
} from "@material-tailwind/react";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";

import Arrow from '../../assets/arrow.png'


import './css/CardReef.css'


function CardFront({ obj }) {

  const backgroundImageStyle = {
    backgroundImage: `url(${obj.img})`
  };

  return (
    <Card
      shadow={false}
      className="relative grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        style={backgroundImageStyle}
        className={`absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center`}
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
      </CardHeader>
      <CardBody className="relative py-14 px-6 md:px-12">
        <Typography
          variant="h2"
          color="white"
          className="flex justify-center items-center font-bold h-96 mb-6 italic leading-[1.5]"
        >
          {obj.title}
        </Typography>
        <Typography variant="h5" className="mb-4 text-gray-400 text-sm animate-bounce">
          Hover me
        </Typography>
      </CardBody>
    </Card>
  );
}

function CardBack({ obj }) {
  return (
    <Card color="blue" variant="gradient" className="w-full h-[40rem] p-8">
      <CardHeader floated={false}
        shadow={false}
        color="transparent"
        className="m-0 mb-8 rounded-none border-b border-white/10 pb-[50px] text-center">
        <Typography color="white" variant="h2" className="font-bold">
          {obj.short}
        </Typography>
      </CardHeader>
      <CardBody className="p-0 flex justify-center items-center">
        <ul className="flex flex-col gap-4">
          {console.log("obj inside backcard", obj)}

          {
            obj?.bullet.map((item) => {
              return (
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
{                    console.log("item", obj)}
                  {
                    obj.type === 'tick' ? (
                      <CheckIcon strokeWidth={2} className=" h-3 w-3" />

                    ) : (     
                      <XMarkIcon strokeWidth={2} className="h-3 w-3" />
                 
                      )
                    }
                  </span>
                    <Typography className="font-normal">{item}</Typography>
                </li>
              )
            })
          }
        </ul>
      </CardBody>
    </Card>
  );
}

export default function CardReef({ obj }) {
  return (
    <div className="card">
      <div className="card-side front">
        <CardFront obj={obj} />
      </div>
      <div className="card-side back">
        <CardBack obj={obj} />
      </div>
    </div>
  )
}