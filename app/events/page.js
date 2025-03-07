"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  Music,
  Code,
  Gamepad,
  Trophy,
  InfoIcon,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Link from "next/link";
import Image from "next/image";
import { events } from "./eventsUtility";

const EventsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Events", icon: Trophy },
    { id: "technical", label: "Technical", icon: Code },
    { id: "cultural", label: "Cultural", icon: Music },
    { id: "gaming", label: "Gaming", icon: Gamepad },
  ];

  const filteredEvents =
    selectedCategory === "all"
      ? events
      : events.filter((event) => event.category === selectedCategory);

  const getCategoryColor = (category) => {
    switch (category) {
      case "technical":
        return "bg-orange-500/20 text-orange-400 hover:bg-orange-500/30";
      case "cultural":
        return "bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30";
      case "gaming":
        return "bg-green-500/20 text-green-400 hover:bg-green-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 hover:bg-gray-500/30";
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const heroVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#0D0221] text-gray-200 overflow-x-hidden">
      {/* Hero Section - Adjusted padding to account for header */}
      <motion.div
        className="relative pt-24 sm:pt-28 bg-gradient-to-b from-[#0D0221] via-[#1A0F1F] to-[#0D0221] text-white pb-12 sm:pb-16"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-cyan-500/10" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10 mt-8 sm:mt-12">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-cyan-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            GOONJ 2025 Events
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl mb-6 sm:mb-8 text-orange-100/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            UIET&apos;s Annual Techno-Cultural Fest
          </motion.p>
          <motion.p
            className="text-base sm:text-lg max-w-2xl mx-auto text-orange-100/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Experience the perfect blend of technology and culture. Showcase
            your talents, compete with the best, and be part of the biggest
            college fest of the year!
          </motion.p>
        </div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute top-24 sm:top-28 left-0 w-32 h-32 border-l-2 border-t-2 border-orange-500/20"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-cyan-500/20"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </motion.div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="sticky top-24 sm:top-28 z-40 bg-[#0D0221]/80 backdrop-blur-sm py-2"
        >
          <Tabs defaultValue="all" className="mb-6 sm:mb-8">
            <TabsList className="flex flex-wrap justify-center w-full bg-[#1A0F1F]/50 backdrop-blur-sm">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className="flex items-center gap-2 data-[state=active]:bg-[#2D1810] data-[state=active]:text-orange-400 px-3 py-2 text-sm sm:text-base"
                >
                  <category.icon className="w-4 h-4" />
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </motion.div>

        {/* Events Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence mode="wait">
            {filteredEvents.map((event) => (
              <motion.div
                key={event.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit={{
                  opacity: 0,
                  y: 20,
                  transition: { duration: 0.2 },
                }}
                whileHover="hover"
                layout
              >
                <Card className="bg-[#1A0F1F]/50 backdrop-blur-sm h-full border-orange-500/20 hover:bg-[#2D1810]/70 transition-colors">
                  <AspectRatio ratio={16 / 9} className="bg-[#0A0A0F]">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                    />
                  </AspectRatio>
                  <CardHeader className="pb-4 space-y-2">
                    <div className="flex justify-between items-start gap-2">
                      <div className="space-y-1">
                        <CardTitle className="text-lg sm:text-xl font-bold text-gray-100">
                          {event.title}
                        </CardTitle>
                        <Badge
                          className={`mt-1 ${getCategoryColor(event.category)}`}
                        >
                          {event.category.charAt(0).toUpperCase() +
                            event.category.slice(1)}
                        </Badge>
                      </div>
                      <event.icon className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400 flex-shrink-0" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <CardDescription className="text-gray-400 text-sm sm:text-base">
                        {event.description}
                      </CardDescription>

                      <div className="grid grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm">
                        {/* Event details grid */}
                        <div className="flex items-center gap-1 sm:gap-2 text-gray-400">
                          <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>
                            {new Date(event.date).toLocaleDateString("en-IN", {
                              month: "short",
                              day: "numeric",
                            })}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                          <Clock className="w-4 h-4" />
                          <span>{event.time}</span>
                        </div>

                        <div className="flex items-center gap-2 text-gray-400">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>

                        <div className="flex items-center gap-2 text-gray-400">
                          <Users className="w-4 h-4" />
                          <span>{event.teamSize}</span>
                        </div>
                      </div>

                      <Separator className="bg-gray-800" />

                      <div className="flex justify-between items-center text-xs sm:text-sm">
                        <div className="text-gray-400">
                          Registration Fee: {event.registrationFee}
                        </div>
                        <div className="font-semibold text-purple-400">
                          Prize Pool: {event.prizePool}
                        </div>
                      </div>

                      <div className="flex gap-3 pt-2">
                        <a
                          href={`${event.brochure}`}
                          download={event.brochure}
                          className="flex-1"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            variant="outline"
                            className="flex-1 border border-gray-700 bg-[#1A1B23]/50 hover:bg-[#1A1B23] text-gray-300 hover:text-white transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 group"
                          >
                            <InfoIcon className="w-4 h-4 mr-2 group-hover:text-blue-400 transition-colors" />
                            Details
                          </Button>
                        </a>
                        <Link
                          href={`${event.register}`}
                          target="_blank"
                          className="flex-1"
                        >
                          <Button className="w-full bg-gradient-to-r from-blue-600/80 to-purple-600/80 hover:from-blue-500/80 hover:to-purple-500/80 text-white font-medium shadow-lg hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
                            <span className="flex items-center gap-2">
                              Register Now
                              <motion.div
                                animate={{ x: [0, 4, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                              >
                                →
                              </motion.div>
                            </span>
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Floating Registration Button */}
      <motion.div
        className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-40"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <Link href="/register">
          <Button
            size="lg"
            className="hidden md:inline-flex bg-gradient-to-r from-orange-500/80 to-cyan-500/80 text-white shadow-lg hover:shadow-xl hover:from-orange-400/80 hover:to-cyan-400/80 transition-all backdrop-blur-sm"
          >
            Register for Goonj 2025
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default EventsPage;
