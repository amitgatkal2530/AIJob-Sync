import { Button, Card, Text } from "@mantine/core";
import { IconBriefcase, IconChartBar, IconMessageCircle, IconTimeline } from "@tabler/icons-react";
import { motion } from "framer-motion";
import React from "react";

const features = [
  {
    title: "Mock Interview",
    description: "Simulate real interview scenarios to boost your confidence.",
    icon: <IconBriefcase size={32} color="#facc15" />,
  },
  {
    title: "Real-time Feedback",
    description: "Receive instant suggestions to improve your answers.",
    icon: <IconMessageCircle size={32} color="#38bdf8" />,
  },
  {
    title: "Industry-Specific",
    description: "Practice interviews tailored to your desired industry.",
    icon: <IconTimeline size={32} color="#a78bfa" />,
  },
  {
    title: "Performance Analysis",
    description: "Track your progress and improve with detailed reports.",
    icon: <IconChartBar size={32} color="#f472b6" />,
  },
];

const Ai_Interview = () => {
  return (
    <div className="flex flex-col items-center px-8 py-12 bg-mine-shaft-950 min-h-screen">
      {/* Top Section */}
      <div className="flex items-center justify-between w-full gap-8">
        <div className="flex flex-col w-[45%] gap-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold leading-tight text-mine-shaft-100 [&>span]:text-bright-sun-400"
          >
            Master<span> Your </span>Interview<span> Skills</span> With AI<span> Powered </span>Practice
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-base text-mine-shaft-200"
          >
            Get ready for your dream job with personalized interview practice and real-time feedback.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <Button
              size="md"
              radius="md"
              className="bg-bright-sun-400 text-mine-shaft-950 hover:bg-bright-sun-500 transition-all"
              styles={{ root: { fontWeight: "bold" } }}
            >
              Get Started
            </Button>
          </motion.div>
        </div>

        <div className="w-[45%] flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-[20rem] relative"
          >
            <img src="/robott.webp" alt="AI Bot" className="rounded-lg shadow-lg" />
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="flex justify-center gap-6 mt-12 flex-wrap">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="w-72"
          >
            <Card
              shadow="lg"
              radius="lg"
              className="relative bg-gradient-to-r from-gray-800 to-gray-900 p-6 transition-transform transform hover:scale-105 hover:shadow-2xl hover:border-bright-sun-400 border-2 border-transparent"
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-mine-shaft-700 rounded-lg">
                  {feature.icon}
                </div>
                <Text className="text-2xl font-bold text-bright-sun-400 transition-colors hover:text-bright-sun-500">
                  {feature.title}
                </Text>
              </div>
              <Text className="mt-3 text-mine-shaft-200 text-sm leading-relaxed">
                {feature.description}
              </Text>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Ai_Interview;
