import { Heart } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50">
      <div className="text-center">
        <div className="relative">
          <div className="w-16 h-16 rounded-full border-4 border-primary-100 border-t-primary-600 animate-spin mx-auto"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Heart className="w-6 h-6 text-primary-600 animate-pulse" />
          </div>
        </div>
        <p className="mt-4 text-neutral-600 font-medium">Chargement...</p>
      </div>
    </div>
  );
}
