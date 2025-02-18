// Shadcn Button
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const productPage = () => {
  // Usando tailwind
  return (
    <div className="p-5 border border-red-500 rounded-xl">
      <h1 className="text-red-500">products page</h1>
      {/* Usando shadcn button */}
      <Button>FSW 7.0</Button>
      <Input placeholder="Bora finalizar esse Projeto" />
    </div>
  );
};

export default productPage;
