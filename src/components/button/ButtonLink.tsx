import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const ButtonLink = ({ className }: { className?: string }) => {
  return (
    <Link to="/visualization">
      <Button
        size="lg"
        className={`text-lg hover:bg-accent hover:text-black hover:border border-primary ${className} shadow-xl`}
      >
        Explore Weather
      </Button>
    </Link>
  );
};
