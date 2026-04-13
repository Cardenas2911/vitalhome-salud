import ShineButton from "@/components/ui/shine-hover";

export default function ShineButtonDemo() {
  return (
    <div className="flex flex-col gap-4 items-center p-8 bg-gray-50 rounded-xl border border-dashed border-gray-300">
      <p className="text-sm text-gray-500 font-medium">Boton con Efecto Shine de VitalHome</p>
      <ShineButton size="lg">
        Solicitar Evaluación
      </ShineButton>
    </div>
  );
}
