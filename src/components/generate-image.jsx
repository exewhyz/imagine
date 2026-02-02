import React from "react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { LayoutGrid } from "./ui/layout-grid";
import { GoogleGenAI } from "@google/genai";

import { Skeleton } from "./ui/skeleton";

import { useState } from "react";
import Loader from "./loader";

const GenerateImage = () => {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState("");
  const [images, setImages] = useState([]);

  const handleGenerate = async () => {
    // Logic to generate image based on prompt
    if (!prompt || typeof prompt !== "string" || !(prompt.length > 2)) {
      setError("Please provide a valid prompt.");
      return;
    }
    setError("");
    setIsGenerating(true);
    const modifiedPrompt = `Create an Image for the this prompt: ${prompt}`;
    const ai = new GoogleGenAI({
      apiKey: import.meta.env.VITE_GOOGLE_AI_API_KEY,
    });

    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-image",
        contents: modifiedPrompt,
      });
      if (!response.candidates[0].content) {
        throw new Error("Error generating image. Please try again.");
      }
      for (const part of response.candidates[0].content.parts) {
        const imageData = part?.inlineData?.data;
        if (!imageData) {
          continue;
        }
        const image = `data:image/png;base64,${imageData}`;

        const newImage = {
          id: Date.now(),
          content: <Content prompt={prompt} imageUrl={image} />,
          className: "col-span-1 row-span-1 md:col-span-2 md:row-span-10",
          thumbnail: image,
        };

        setImages((prevImages) => [newImage, ...prevImages]);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section className="flex flex-col gap-4 w-full max-w-4xl">
      <h1 className="text-4xl font-bold text-muted-foreground text-center">
        Generate Image with AI
      </h1>
      <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
        Generate realistic images using AI technology.
      </p>

      <div className="flex flex-col items-center gap-4">
        <Textarea
          onKeyDown={(e) => {
            if (e.ctrlKey && e.key === "Enter") {
              handleGenerate();
            }
          }}
          className="w-full max-w-2xl"
          placeholder="Write a prompt to generate image"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        ></Textarea>
        <Button
          disabled={isGenerating || !prompt || !(prompt.length > 2)}
          onClick={handleGenerate}
          className="cursor-pointer"
        >
          {isGenerating ? <Loader /> : "Generate Image"}
        </Button>
      </div>
      {error && (
        <p className="text-sm font-light px-4 py-3 border border-red-600/60 bg-red-400/5 rounded-lg w-full max-w-2xl">
          {error}
        </p>
      )}
      <div className="w-full h-full p-10">
        {isGenerating ? (
          <ImageSkeleton />
        ) : (
          images.length > 0 && <LayoutGrid cards={images} />
        )}
      </div>
    </section>
  );
};

//TODO: isGenerating && !image.thumbnail ? <ImageSkeleton /> : <img />

export default GenerateImage;

const ImageSkeleton = () => {
  return <Skeleton className="h-40 w-40 rounded-md" />;
};

const Content = ({ prompt, imageUrl }) => {
  const downloadImage = (imageUrl, filename = "downloaded_image.png") => {
    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = filename; // Set the desired file name for the download

    // Append link to body, click it, and remove it
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="h-full w-full flex items-center justify-center flex-col gap-4">
      <p className="text-sm text-white line-clamp-2">{prompt.trim()}</p>
      <Button className="cursor-pointer" onClick={() => downloadImage(imageUrl)}>Download Image</Button>
    </div>
  );
};
