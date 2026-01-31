import React from "react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { LayoutGrid } from "./ui/layout-grid";

// const cards = [
//   {
//     id: 1,
//     content: "Image 1",
//     className: "w-40",
//     thumbnail:
//       "https://images.unsplash.com/photo-1769399287730-6e42c3990377?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: 2,
//     content: "Image 2",
//     className: "w-40",
//     thumbnail:
//       "https://images.unsplash.com/photo-1769399287730-6e42c3990377?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: 3,
//     content: "Image 3",
//     className: "w-40",
//     thumbnail:
//       "https://images.unsplash.com/photo-1769399287730-6e42c3990377?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D",
//   },
// ];

const cards = [
  {
    id: 1,
    content: "Image 1",
    className: "md:col-span-2 md:row-span-2", // Large card
    thumbnail:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    content: "Image 2",
    className: "md:col-span-1 md:row-span-1", // Small card
    thumbnail:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    content: "Image 3",
    className: "md:col-span-1 md:row-span-1", // Small card
    thumbnail:
      "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    content: "Image 4",
    className: "md:col-span-1 md:row-span-2", // Tall card
    thumbnail:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    content: "Image 5",
    className: "md:col-span-2 md:row-span-1", // Wide card
    thumbnail:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&auto=format&fit=crop&q=80",
  },
];

const GenerateImage = () => {
  const handleGenerate = () => {
    // Logic to generate image based on prompt
  };

  return (
    <section className="flex flex-col gap-4 w-full max-w-4xl h-full">
      <h1 className="text-4xl font-bold text-muted-foreground">
        Generate Image with AI
      </h1>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Generate realistic images using AI technology.
      </p>

      <div className="flex flex-col items-center gap-4">
        <Textarea placeholder="Write a prompt to generate image"></Textarea>
        <Button onClick={handleGenerate}>Generate</Button>
      </div>
      <LayoutGrid cards={cards} />
    </section>
  );
};

export default GenerateImage;
