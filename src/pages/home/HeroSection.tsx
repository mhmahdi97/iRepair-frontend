import Container from "@/components/layouts/Container";
import { Button } from "@/components/ui/button";
import macBoook from "@/assets/images/macbook-exposed.png";
import { motion } from "framer-motion";

const intro = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.3,
      delayChildren: 0.8,
    },
  },
};

const introChildren = {
  hidden: { opacity: 0, y: -200 },
  visible: { opacity: 1, y: 0 },
};

const laptop = {
  initial: { y: 0, rotate: 30, scale: 5 },
  animate: {
    y: 20,
    rotate: -35,
    scale: 1,
    transition: {
      duration: 0.8,
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  },
};

const HeroSection = () => {
  return (
    <div className="overflow-hidden">
      {/* <Container className="h-[calc(100vh-64px)] grid grid-cols-1 lg:grid-cols-2 border border-slate-700 place-content-center bg-red-200"> */}
      <Container className="h-screen pt-16 grid grid-cols-1 lg:grid-cols-2 border border-slate-700 place-content-center bg-red-200">
        <motion.div variants={intro} initial="hidden" animate="visible">
          <motion.h1
            variants={introChildren}
            className="text-5xl lg:text-8xl font-bold text-nowrap"
          >
            <span className="text-gray">Don't worry,</span>
            <br />
            <span>We'll fix it.</span>
          </motion.h1>
          <motion.p
            variants={introChildren}
            className="text-dark-gray max-w-[50ch] mt-10 mb-5 text-lg"
          >
            Welcome to{" "}
            <span className="text-primary-foreground font-semibold">
              iRepair
            </span>
            , your one-stop place for all kinds of
            <span className="text-primary-foreground font-semibold">
              {" "}
              Macbook repairs
            </span>{" "}
            and diagonistics.
          </motion.p>
          <motion.div variants={introChildren}>
            <Button>Book a service</Button>
          </motion.div>
        </motion.div>
        <motion.div
          className="mt-10 w-3/4 lg:w-full mx-auto"
          variants={laptop}
          initial="initial"
          animate="animate"
        >
          <img
            className="h-[80%] object-contain"
            src={macBoook}
            alt="Macbook"
          />
        </motion.div>
      </Container>
    </div>
  );
};

export default HeroSection;
