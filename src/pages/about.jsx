import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const features = [
    {
      title: "AI-Powered Generation",
      description: "Leverage cutting-edge AI technology powered by Google's Gemini 2.5 to create stunning, realistic images from simple text descriptions.",
      icon: "✨"
    },
    {
      title: "Instant Results",
      description: "Generate high-quality images in seconds. No waiting, no complicated setup—just describe what you want and watch it come to life.",
      icon: "⚡"
    },
    {
      title: "Unlimited Creativity",
      description: "From photorealistic landscapes to abstract art, create any visual concept you can imagine with natural language prompts.",
      icon: "🎨"
    },
    {
      title: "Easy Downloads",
      description: "Download your generated images instantly in high quality. Perfect for projects, presentations, or personal use.",
      icon: "📥"
    },
    {
      title: "Secure & Private",
      description: "Your creations are yours. We use Clerk authentication to keep your account secure and your generated images private.",
      icon: "🔒"
    },
    {
      title: "Modern Interface",
      description: "Enjoy a clean, intuitive interface built with React and Vite. Dark mode support for comfortable extended use.",
      icon: "🌙"
    }
  ];

  const technologies = [
    "React", "Vite", "TailwindCSS", "shadcn/ui", "Google Gemini AI", "Clerk Auth"
  ];

  return (
    <main className="min-h-[calc(100vh-3.5rem)] w-full flex flex-col items-center justify-start py-10 px-4">
      <div className="w-full max-w-7xl mx-auto space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            About Imagine
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
            Imagine is an AI-powered image generation platform that transforms your ideas into stunning visuals. 
            Built with cutting-edge technology, we make professional-quality image creation accessible to everyone.
          </p>
        </div>

        {/* Mission Section */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="text-2xl">Our Mission</CardTitle>
            <CardDescription className="text-base">
              We believe that creativity should be limitless and accessible to everyone. Imagine empowers users to bring their 
              ideas to life through the power of artificial intelligence, eliminating the barriers between imagination and creation.
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Features Grid */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-center text-foreground">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="text-4xl mb-2">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-center text-foreground">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary mb-2">
                  1
                </div>
                <CardTitle>Describe Your Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Type a detailed description of the image you want to create. Be as specific or creative as you like.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary mb-2">
                  2
                </div>
                <CardTitle>AI Generates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our AI processes your prompt and creates a unique, high-quality image in seconds using advanced algorithms.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary mb-2">
                  3
                </div>
                <CardTitle>Download & Use</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Review your generated image and download it instantly. Use it for any personal or commercial project.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-center text-foreground">Built With Modern Technology</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-wrap gap-3 justify-center">
                {technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="text-base px-4 py-2">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center space-y-4 py-8">
          <h2 className="text-3xl font-bold text-foreground">Ready to Create?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start generating stunning AI images today. Sign up for free and unleash your creativity with Imagine.
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;