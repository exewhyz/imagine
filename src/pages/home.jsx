import React from "react";
import GenerateImage from "@/components/generate-image";

const Home = () => {
  return (
    <main className="min-h-[calc(100vh-3.5rem)] w-full flex flex-col items-center justify-start py-10 px-4">
      <GenerateImage />
    </main>
  );
};

export default Home;
