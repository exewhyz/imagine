import React from "react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { LayoutGrid } from "./ui/layout-grid";

const cards = [
  {
    id: 1,
    content: "Image 1",
    className: "w-40",
    thumbnail:
      "https://images.unsplash.com/photo-1769399287730-6e42c3990377?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    content: "Image 2",
    className: "w-40",
    thumbnail:
      "https://images.unsplash.com/photo-1769399287730-6e42c3990377?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    content: "Image 3",
    className: "w-40",
    thumbnail:
      "https://images.unsplash.com/photo-1769399287730-6e42c3990377?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D",
  },
];

const GenerateImage = () => {

    const handleGenerate = () => {
        // Logic to generate image based on prompt
        
    };

  return (
    <section className="flex flex-col gap-4 max-w-7xl h-full">
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
