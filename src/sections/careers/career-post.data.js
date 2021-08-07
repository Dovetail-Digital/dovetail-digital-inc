import { IoIosCheckmarkCircle } from "react-icons/io";
import Modeller from "assets/images/3d-modeller.png";
import Designer from "assets/images/designer.png";

export default {
  postings: [
    {
      title: "3D Modeler",
      image: Modeller,
      positionType: "Part time",
      description:
        "We are looking for a 3D Modeler to join our team! Specifically we are looking for someone who is skilled at organic modeling. We work primarily with meshes, so understanding how to edit manifold meshes is a plus. Please submit sample work with your application!",
      btnURL:
        "mailto:hello@dovetaildigital.ca?subject=Re: 3D Modeler Application",
      points: [
        {
          icon: <IoIosCheckmarkCircle color="#83C1C0" />,
          text: "Experience with 3DS, Blender, Zbrush, Meshmixer, etc.",
        },
        {
          icon: <IoIosCheckmarkCircle color="#83C1C0" />,
          text: "Familiarity with Fusion 360, Tinker Cad, OpenSCAD are a bonus.",
        },
        {
          icon: <IoIosCheckmarkCircle color="#83C1C0" />,
          text: "Knowledge of 3D printing and design for printing.",
        },
        {
          icon: <IoIosCheckmarkCircle color="#83C1C0" />,
          text: "Enjoy seeing virtual creations come to life physically!",
        },
      ],
    },
    {
      title: "Graphic Designer",
      image: Designer,
      positionType: "Part time",
      description:
        "We are looking for a graphic designer to join our team! At Dovetail we primarily build cross platform apps and the occasional website. We are looking for someone who as worked in the software industry before, ideally with experience using tools like Photoshop, Invision, Figma, etc. In addition to this, an understanding of media design will be considered an asset.",
      btnURL:
        "mailto:hello@dovetaildigital.ca?subject=Re: Designer Application",
      points: [
        {
          icon: <IoIosCheckmarkCircle color="#83C1C0" />,
          text: "Experience with modern design and UX/UI principles.",
        },
        {
          icon: <IoIosCheckmarkCircle color="#83C1C0" />,
          text: "Basic understanding of Agile software development cycles.",
        },
        {
          icon: <IoIosCheckmarkCircle color="#83C1C0" />,
          text: "Experience with media creation and editing software.",
        },
      ],
    },
  ]
}
