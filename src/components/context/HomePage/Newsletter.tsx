import { Input } from "@/components/ui/shadcn/input";
import { Button } from "@/components/ui/shadcn/button";

const Newsletter = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-purple-900/50 to-cyan-900/50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-white">Stay Updated</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Get the latest deals and new arrivals delivered to your inbox
        </p>
        <div className="flex max-w-md mx-auto">
          <Input
            placeholder="Enter your email"
            className="bg-gray-100/50 border-purple-500/30 text-white placeholder-gray-400 rounded-r-none "
          />
          <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 rounded-l-none">
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
