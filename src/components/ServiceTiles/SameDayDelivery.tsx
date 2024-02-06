import useScrollGrow from "@/hooks/useScrollGrow";
import { motion } from "framer-motion";


const SameDayDelivery = () => {

  const {style, componentRef} = useScrollGrow();

  return (
    <motion.div
      style={style}
      ref={componentRef}
      className="bg-red-500 h-[415px] rounded-2xl col-span-12 sm:col-span-6 lg:col-span-4"
    ></motion.div>
  );
};

export default SameDayDelivery;
