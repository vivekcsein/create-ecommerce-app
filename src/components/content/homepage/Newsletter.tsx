import { Input } from "@/components/ui/shadcn/input";
import { Button } from "@/components/ui/shadcn/button";

const Newsletter = () => {
  return (
    <section className="py-8 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-white">Stay Updated</h2>
        <p className="text-muted mb-8 max-w-2xl mx-auto">
          Get the latest deals and new arrivals delivered to your inbox
        </p>
        <div className="flex max-w-md mx-auto">
          <Input placeholder="Enter your email" className="rounded-r-none " />
          <Button
            variant={"gradient"}
            className="text-white border-0 rounded-l-none"
          >
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
