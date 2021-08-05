import { IoIosCheckmarkCircle } from "react-icons/io";
import Modeller from "assets/images/3d-modeller.png";
import Designer from "assets/images/designer.png";

export default {
  postings: [
    {
      title: "3D / Organic Modeller",
      image: Modeller,
      description:
        "part time / contract 3d modeller for organic shapes to be 3d printed.",
      btnURL:
        "mailto:hello@dovetaildigital.ca?subject=Re: 3D Modeller Application",
      points: [
        {
          icon: <IoIosCheckmarkCircle color="#83C1C0" />,
          text: "Familiarity with Solidworks/Fusion360 or similar",
        },
        {
          icon: <IoIosCheckmarkCircle color="#83C1C0" />,
          text: "Knowledge of 3D Printing and design for printing",
        },
        {
          icon: <IoIosCheckmarkCircle color="#83C1C0" />,
          text: "Must have own software liscence",
        },
      ],
    },
    {
      title: "Designer",
      image: Designer,
      description:
        "part time designer.",
      btnURL:
        "mailto:hello@dovetaildigital.ca?subject=Re: Designer Application",
      points: [
        {
          icon: <IoIosCheckmarkCircle color="#83C1C0" />,
          text: "Familiarity with HTML/CSS/JS",
        },
        {
          icon: <IoIosCheckmarkCircle color="#83C1C0" />,
          text: "Knowledge of React / NextJS / Theme UI an asset",
        },
        {
          icon: <IoIosCheckmarkCircle color="#83C1C0" />,
          text: "Contract basis design work",
        },
      ],
    },
  ]
}
