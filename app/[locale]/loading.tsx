export default function Loading() {
  return (
    <div className="min-h-[50vh] grid place-items-center px-4">
      <div className="w-12 h-12 rounded-full border-4 border-primary-100 border-t-primary-600 animate-spin" role="status" aria-label="Chargement" />
    </div>
  );
}
