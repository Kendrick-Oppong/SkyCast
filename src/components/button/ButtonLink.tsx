import { Button } from "@/components/ui/button";

export const ButtonLink = ({ className }: { className?: string }) => {
  return (
    <Button
      size="lg"
      className={`text-lg hover:bg-accent hover:text-black hover:border border-primary ${className} shadow-xl`}
    >
      Explore Weather
    </Button>
  );
};
